# SecureCloudOps Portfolio

Personal engineering portfolio for **Mohamed A. Mohamed**, focused on cloud infrastructure, DevSecOps, Kubernetes, platform engineering, cloud security, and AI infrastructure.

## Live Site

[https://securecloudops.github.io/](https://securecloudops.github.io/)

## Featured Projects

### ForgePath

Flagship secure platform-engineering project that provides a reproducible paved path from Backstage service creation through validation, signed immutable artifacts, GitOps delivery with Argo CD, Kyverno admission control, and read-only runtime feedback.

[View repository](https://github.com/SecureCloudOps/ForgePath)

### LLM RAG Infrastructure Platform

Production-style AI infrastructure platform using FastAPI, Qdrant, vLLM, Kubernetes, Terraform, AWS EKS, Argo CD, Prometheus, and Grafana.

[View repository](https://github.com/SecureCloudOps/llm-rag-infra-platform)

### KubeBackup Operator

Kubernetes operator that automates checksum-verified PostgreSQL backups and restores using Amazon S3 or MinIO.

[View repository](https://github.com/SecureCloudOps/database-backup-operator)

## Portfolio Features

- Responsive one-page design
- Dark and light mode
- Animated terminal interface
- Command palette
- Scroll animations
- Project architecture visuals
- Certification verification links
- GitHub, LinkedIn, and email integration

## Certifications

- [CompTIA Security+](https://www.credly.com/badges/62d4ead1-fc93-47b1-86c9-804b636e285d/public_url)
- [Certified Kubernetes Administrator](https://www.credly.com/badges/760321ff-dd42-4a98-91de-7d306c99d6ed/public_url)
- [AWS Certified SysOps Administrator – Associate](https://www.credly.com/badges/11c74b83-3679-4748-b4a0-96bb952c44ad/public_url)
- [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/cd639be7-63a3-40cc-8c35-55e1ff18717b/public_url)

## Contact

- [GitHub](https://github.com/SecureCloudOps)
- [LinkedIn](https://www.linkedin.com/in/mohamed007-cloud/)
- [Email](mailto:mohamed0395@gmail.com)

## September 2026 portfolio polish

The one-page layout, dark default, architecture panel and certification links are
preserved. The update makes the engineering evidence easier to scan:

- Focus the introduction on cloud infrastructure, automation, security and reliability.
- Feature ForgePath, EKS Operations & Resilience and KubeBackup, with evidence links
  and explicit controlled-exercise context. Keep AI work accessible in a compact row.
- Separate seasonal professional systems operations from independent cloud projects.
- Replace the overlapping absolute-positioned terminal layout with a responsive grid.
- Keep navigation and content usable without JavaScript; add a native modal menu,
  keyboard focus handling, a skip link, reduced-motion support and copy feedback.
- Improve light-theme contrast and add canonical/social metadata and an SVG favicon.

### Local preview

Run `python -m http.server 8765` from the repository root and open
`http://localhost:8765`. No package installation or build step is required.

### Review checklist

Check desktop and narrow layouts, dark/light themes, navigation with Tab and Escape,
section links, résumé access, copy-email feedback, and content with JavaScript disabled.
Run `node --check script.js` and `git diff --check` before publishing.

Project measurements are dated lab observations, not production availability claims.
The existing résumé PDF remains the downloadable résumé; updating it is a separate
content task.
