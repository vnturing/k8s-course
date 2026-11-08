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

## Wisdom (Communities)

- [Kubernetes Slack](https://slack.k8s.io/) (join here; #kubernetes-users is the user-help channel)
  Official project Slack. Use for: real-time help once you have a specific question.
- [discuss.kubernetes.io](https://discuss.kubernetes.io/)
  Official forum, searchable. Use for: troubleshooting write-ups.
- [r/kubernetes](https://www.reddit.com/r/kubernetes/)
  Community-run, not official. Use for: practitioner opinions; verify against the docs.

## Gaps
- A trusted source on Incus networking and k3s CNI interplay (needed for the Services lesson)
- A vetted hands-on exercise set for kubectl debugging
- Not yet verified: a Debian-specific Incus install guide for the user’s release
