# Mission: Kubernetes

## Why
Move from a software engineering role into SRE or platform engineering by building, and publicly documenting, a Kubernetes-based upgrade of a Docker Compose homelab. The public write-ups become evidence in job applications and interviews.

## Success looks like
- A healthy 4-node k3s cluster (1 server, 3 agents) on Incus VMs, built from scratch
- Real homelab services migrated from Compose to the cluster and running reliably
- One published write-up per milestone (blog now, YouTube possibly later)
- Explain aloud, interview-style: control-plane components, what a Deployment and a Service do, and how to debug a failing Pod
- Homelab services measured with simple SLIs/SLOs and alerts *(inferred from the SRE goal; strike if unwanted)*

## Constraints
- 16 GB RAM, Intel x86_64, Debian host, no cloud account, no spare servers
- Undecided between SRE and platform engineering, so early lessons serve both
- Course is a static HTML site on GitHub Pages; new lessons arrive as git patches
- Short lessons with retrieval practice, a tangible win, and a "publish it" prompt each time

## Out of scope
- Managed cloud Kubernetes (EKS/GKE/AKS)
- ARM-specific setups
- Re-teaching container and Compose basics (already known)
