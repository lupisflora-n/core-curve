# Rollback Manual

This project is published with GitHub Pages.

## Normal rollback method

If a merged Pull Request causes a problem on the production site:

1. Open the repository on GitHub.
2. Click "Pull requests".
3. Click "Closed".
4. Open the Pull Request that caused the problem.
5. Scroll near the bottom of the Pull Request.
6. Click "Revert".
7. Create the Revert Pull Request.
8. Merge the Revert Pull Request after checking the changes.
9. Confirm the GitHub Pages production site.

## Important rules

- Do not force-push.
- Do not rewrite Git history.
- Do not manually delete random files.
- Prefer Revert Pull Requests.
- If unsure, ask Codex to create a safe Revert Pull Request.

## Emergency prompt for Codex

Use this prompt when the production site breaks:
