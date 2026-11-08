# Kubernetes Resources

## Knowledge

- [Kubernetes docs: Components](https://kubernetes.io/docs/concepts/overview/components/)
  Official description of control-plane and node components. Use for: what each part does.
- [Kubernetes docs: Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)
  Official reference architecture and deployment variations. Use for: where components run.
- [K3s docs: Requirements](https://docs.k3s.io/installation/requirements)
  Supported architectures, minimum CPU/RAM, ports, hostname rules. Use for: sizing and network prerequisites.
- [K3s docs: Quick-Start](https://docs.k3s.io/quick-start)
  Install script, joining agents with K3S_URL and K3S_TOKEN. Use for: building the cluster.
- [Incus: First steps](https://linuxcontainers.org/incus/docs/main/tutorial/first_steps/)
  Official tutorial for launching, limiting and inspecting instances. Use for: VM setup.
- [Incus: How to create instances](https://linuxcontainers.org/incus/docs/main/howto/instances_create/)
  Containers vs `--vm`, config flags. Use for: launch variants.

- [Google SRE books (sre.google)](https://sre.google/resources/book-update/)
  Google's free-to-read SRE book, the Workbook, and a newer 2nd edition. Use for: SLOs, error budgets, toil, on-call, postmortems; the vocabulary SRE interviews use.
- [CNCF Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms)
  Defines internal platforms and platform engineering, and how to measure their value. Use for: the platform-engineering side of the career decision.
- [Kubernetes docs: Translate a Docker Compose File to Kubernetes Resources](https://kubernetes.io/docs/tools/kompose/)
  Official Kompose walkthrough. Use for: mapping your existing Compose services onto Kubernetes objects.

## Wisdom (Communities)

- [Kubernetes Slack](https://slack.k8s.io/) (join here; #kubernetes-users is the user-help channel)
  Official project Slack. Use for: real-time help once you have a specific question.
- [discuss.kubernetes.io](https://discuss.kubernetes.io/)
  Official forum, searchable. Use for: troubleshooting write-ups.
- [r/kubernetes](https://www.reddit.com/r/kubernetes/)
  Community-run, not official. Use for: practitioner opinions; verify against the docs.

## Gaps
- A vetted source for SRE/platform interview preparation (none checked yet)
- A vetted community for SRE/platform career questions (the Kubernetes ones above are for technical help)
- Trusted sources for observability and GitOps (needed for the later lessons)
- A trusted source on Incus networking and k3s CNI interplay (needed for the Services lesson)
- A vetted hands-on exercise set for kubectl debugging
- Not yet verified: a Debian-specific Incus install guide for the user’s release
