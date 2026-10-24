# sandbox-config-demo

A tiny shopping-cart library, used to test SimplyReview in staging: above all, that a repository's own `.simply-review/config.yml` is obeyed. **Its pull requests bring in bugs on purpose.** Nothing here is published.

What the config asks of every review:
- `min_severity: P1`: no P2 findings;
- `guidelines`: money is integer pence, never floating point;
- `ignore: src/generated/**`: generated code is never reviewed.
