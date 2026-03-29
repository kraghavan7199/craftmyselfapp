# craftmyslef

Minimal monolithic skeleton for a portable workout tracker with:

- **Backend:** TypeScript + Express (`apps/api`) using a layered pattern (`controller -> service -> repository`)
- **Frontend:** Angular (`apps/web`) with Tailwind CSS
- **Database:** PostgreSQL
- **Shared contracts:** `packages/shared` (models/types used by both API and frontend)
- **Infra:** Docker + Docker Compose + backup/restore scripts

## Quick start (single command)

```bash
docker compose up --build
```

Then open:

- Frontend: http://localhost:4200
- API health: http://localhost:3000/health
- API hello: http://localhost:3000/api/hello

## Local development (without Docker)

```bash
npm install
npm run dev
```

## Project structure

```text
apps/
  api/      # TypeScript backend (controller/service/repository)
  web/      # Angular frontend + Tailwind CSS
packages/
  shared/   # shared models/types for frontend + backend
infra/
  backups/  # backup output directory (mounted)
scripts/
  backup.sh # create postgres backup
  restore.sh# restore postgres backup
```

## Portability strategy (VPS to VPS)

1. Copy repo to new VPS.
2. Copy latest backup file from `infra/backups/`.
3. Run `docker compose up --build -d`.
4. Restore backup:
   ```bash
   BACKUP_FILE=infra/backups/<your-file>.sql.gz npm run restore
   ```

## Backups

Create backup:

```bash
npm run backup
```

Restore backup:

```bash
BACKUP_FILE=infra/backups/<backup-file>.sql.gz npm run restore
```
