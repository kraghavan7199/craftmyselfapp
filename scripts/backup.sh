#!/usr/bin/env bash
set -euo pipefail

mkdir -p infra/backups
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
OUT="infra/backups/craftmyslef_${STAMP}.sql.gz"

echo "Creating backup at ${OUT} ..."
docker compose exec -T db pg_dump -U craftmyslef -d craftmyslef | gzip > "${OUT}"
echo "Backup created: ${OUT}"
