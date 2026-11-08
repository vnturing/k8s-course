# Teaching notes
- User chose Incus VMs (4: 1 server, 3 agents) over minikube; k3s on x86_64 is supported (misconception "k3s is arm-best" corrected in Lesson 1).
- Course format: static HTML, relative links only (works under a GitHub Pages sub-path), no build step.
- New lesson = new file in lessons/ + one line in assets/lessons.js, delivered as a git patch.
- Quiz rules: equal-length options, vary correct position.
- GLOSSARY.md intentionally not created yet: terms are added only after the user demonstrates understanding.
- Open question: user's real goal (job / cert / homelab) and existing Kubernetes knowledge.

## Added after mission clarified
- User is a SWE with a Docker Compose homelab; goal is an SRE or platform job, evidenced by public blog (and maybe YouTube) write-ups.
- Do not re-teach containers/Compose. Anchor new Kubernetes ideas to the Compose equivalent.
- Every lesson ends with a "Publish it" prompt (blog angle + one line to say aloud in an interview).
- Still unknown: SRE vs platform preference; Kubernetes experience level (assume none until shown).
