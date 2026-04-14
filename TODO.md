# Task: Replace random certification icons with actual logos (DICT PH, CSC PH, Python)

## TODO Steps (Approved Plan):
- [x] Step 1: Research official SVG logo sources for DICT Philippines, CSC Philippines, Python language.
- [x] Step 2: Create public/icons/ directory and add SVG files: dict-philippines.svg, csc-philippines.svg, python-logo-monochrome.svg.
- [x] Step 3: Update mg.dev/lib/data.ts to import SVGs and replace icons for cert ids 1 (DICT), 3 (Python), 4 (CSC) with React.createElement(Icon).
- [ ] Step 4: Verify rendering by running `cd mg.dev && npm run dev`.
- [ ] Step 5: Mark complete.

Progress: Steps 1-3 complete. data.ts updated with SVG imports at bottom (Next.js compatible), icons now use vector logos for DICT, Python, CSC. Minor indentation from edits ignored (no logic impact).

