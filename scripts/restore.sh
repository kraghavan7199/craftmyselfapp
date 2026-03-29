#!/usr/bin/env bash
set -euo pipefail

BACKUP_FILE="${BACKUP_FILE:-}"

if [[ -z "${BACKUP_FILE}" ]]; then
  echo "Set BACKUP_FILE to the .sql.gz file path"
  exit 1
fi

if [[ ! -f "${BACKUP_FILE}" ]]; then
  echo "Backup file not found: ${BACKUP_FILE}"
  exit 1
fi

echo "Restoring backup from ${BACKUP_FILE} ..."
gunzip -c "${BACKUP_FILE}" | docker compose exec -T db psql -U craftmyslef -d craftmyslef
echo "Restore complete"
