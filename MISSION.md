# Mission: Kubernetes

## Why
Learn Kubernetes hands-on by building and operating a realistic multi-node cluster on a single 16 GB Intel laptop running Debian, using Incus VMs as stand-ins for separate servers. *(Provisional: the underlying goal — job, certification, homelab — has not been stated yet. Confirm with the user.)*

## Success looks like
- Four Incus VMs running a healthy k3s cluster (1 server, 3 agents), built from scratch
- Deploy an app with a Deployment and a Service, and reach it from the laptop
- Diagnose a broken Pod using `kubectl`
- Rebuild the whole cluster from memory

## Constraints
- 16 GB RAM, Intel x86_64, Debian host, no cloud account, no spare servers
- Course is a static HTML site on GitHub Pages; new lessons arrive as git patches
- Short lessons with retrieval practice and a tangible win each time

## Out of scope
- Managed cloud Kubernetes (EKS/GKE/AKS)
- ARM-specific setups
