# Skill Registry — astro-website

Generated: 2026-04-26

## User Skills

| Skill | Trigger |
|-------|---------|
| branch-pr | When creating a pull request, opening a PR, or preparing changes for review |
| go-testing | When writing Go tests, using teatest, or adding test coverage |
| issue-creation | When creating a GitHub issue, reporting a bug, or requesting a feature |
| judgment-day | When user says "judgment day", "judgment-day", "review adversarial", "dual review", "doble review", "juzgar", "que lo juzguen" |

## Project Conventions

| File | Purpose |
|------|---------|
| CLAUDE.md | Astro 6 project config: stack, commands, design reference pointer |
| ../CLAUDE.md | Website projects overview: astro-website, payload-website, reference |
| ../../CLAUDE.md | Internal projects directory |
| ../../../CLAUDE.md | BePartnerLabs monorepo structure |

## Compact Rules

### branch-pr
PR creation workflow. Create branch from issue, implement, then open PR referencing the issue. Follow issue-first enforcement.

### judgment-day
Parallel adversarial review: launch two independent blind judge sub-agents simultaneously, synthesize findings, apply fixes, re-judge until both pass or escalate after 2 iterations.

### issue-creation
Issue creation workflow. Always create a GitHub issue before starting work. Follow issue-first enforcement system.
