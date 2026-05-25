# Smart City Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AISmartCityOperationsAssistant`
- `AISmartCityOperationsOperations`
- `AISmartCityOperationsAnalytics`
- `AISmartCityOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/smart-city-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4820`

Seeded users:
- `admin@smart-city-operations.local / admin123`
- `manager@smart-city-operations.local / manager123`
- `analyst@smart-city-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/smart-city-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4820 npm run smoke
```
