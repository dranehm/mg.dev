import { PROFILE, SKILL_CATEGORIES, EXPERIENCE } from './data';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();

  // Greetings
  if (
    message.match(
      /^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/
    )
  ) {
    return `Hi! 👋 I'm Mhenard's AI assistant. I can answer questions about ${PROFILE.fullName}'s skills, experience, background, hiring availability, and more. What would you like to know?`;
  }

  // Name
  if (message.match(/name|who are you|tell me about you/)) {
    return `I'm representing ${PROFILE.fullName}, an IT professional and full-stack developer based in Pangasinan, Philippines. ${PROFILE.bio}`;
  }

  // Skills
  if (message.match(/skills|what can|expertise|technologies|stack/)) {
    const skills = SKILL_CATEGORIES.map((cat) =>
      `${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`
    ).join('\n');
    return `Here's what I'm skilled in:\n\n${skills}`;
  }

  // Experience
  if (message.match(/experience|work|job|career|background/)) {
    const exp = EXPERIENCE
      .map((e) => `${e.title} at ${e.company} (${e.date})\n${e.description}`)
      .join('\n\n');
    return `Here's my complete work experience:\n\n${exp}`;
  }

  // Contact
  if (message.match(/contact|email|phone|reach|get in touch|connect/)) {
    return `You can reach me at:\n📧 ${PROFILE.quickFacts[2].value}\n📞 ${PROFILE.quickFacts[3].value}\n🔗 LinkedIn: ${PROFILE.socials.linkedin}`;
  }

  // Education
  if (message.match(/education|degree|school|university|qualification/)) {
    const edu = PROFILE.quickFacts.find((f) => f.label === 'Education');
    return `${edu?.label}: ${edu?.value}`;
  }

  // Location
  if (message.match(/location|where|based|philippines/)) {
    const loc = PROFILE.quickFacts.find((f) => f.label === 'Location');
    return `${loc?.value}`;
  }

  // Portfolio/Resume
  if (message.match(/resume|cv|portfolio|download/)) {
    return `You can download my resume using the button on the homepage. It contains detailed information about my experience and skills.`;
  }

  // Availability and Hiring
  if (message.match(/available|hiring|open|work|freelance|rate|salary|contract|project/)) {
    return `Yes, I'm currently available for new opportunities! I'm open to:\n• Full-time positions\n• Freelance/contract work\n• Project-based engagement\n\nFor rates and detailed discussion, please reach out to me directly at ${PROFILE.quickFacts[2].value}. Let's discuss your needs!`;
  }

  // Website/Portfolio questions
  if (message.match(/website|built|how|made|code|github|open source|tech stack|portfolio|this site/)) {
    return `This portfolio site was built with modern web technologies:\n• Framework: Next.js 16 (React 19)\n• Styling: Tailwind CSS 4\n• Animations: Framer Motion\n• Deployment: Vercel\n\nThe design emphasizes smooth animations, responsive design, and clean UX. This chatbot is powered by natural language pattern matching!`;
  }

  // Technical advice/recommendations
  if (message.match(/recommend|best practice|advice|suggest|opinion|should i|how to|tutorial|learn/)) {
    return `I'd be happy to discuss technical topics! Some areas I can help with:\n• REST API design and optimization\n• Database schema design (MySQL, SQL Server)\n• Full-stack development workflows\n• Performance optimization\n• System architecture\n\nFeel free to ask specific technical questions, and I'll share insights based on my experience.`;
  }

  // Hobbies and interests
  if (message.match(/hobby|interested|like|enjoy|passion|do you/)) {
    return `Beyond coding, I'm passionate about:\n• Building scalable, maintainable systems\n• Writing clear technical documentation\n• Solving complex infrastructure problems\n• Continuous learning and staying current with tech\n• Helping teams communicate through well-designed APIs\n\nI genuinely enjoy problem-solving and creating solutions that work reliably in production.`;
  }

  // Casual greetings or personal questions
  if (message.match(/how are you|whats up|how's it going|nice to meet/)) {
    return `Great! I'm doing well, thanks for asking! 😊 I'm here to help answer any questions about Mhenard's skills, experience, and availability. What can I assist you with?`;
  }

  // Gratitude
  if (message.match(/thanks|thank you|appreciate|awesome|great|cool|nice/)) {
    return `You're welcome! 😊 Happy to help. Feel free to ask me anything else about Mhenard's background, skills, or how to work together. I'm here to help!`;
  }

  // Help
  if (message.match(/help|what can you do|commands|capabilities|features/)) {
    return `I can help you with:\n✓ Skills and expertise\n✓ Work experience and projects\n✓ Education and certifications\n✓ Contact information\n✓ Hiring availability and rates\n✓ Website/tech stack details\n✓ Technical advice\n✓ Interests and hobbies\n\nJust ask me anything!`;
  }

  // Conversational fallback
  if (message.match(/^(why|what|when|yes|no|okay|ok|sure|maybe)$/)) {
    return `I'm ready to help! Ask me about Mhenard's background, skills, availability, or feel free to chat about anything tech-related. What's on your mind?`;
  }

  // Default response
  return `That's an interesting question! While I might not have a specific answer for that, I can tell you about Mhenard's skills, experience, hiring status, or technical insights. Is there something specific you'd like to know?`;
};

export { generateResponse };
export type { ChatMessage };
