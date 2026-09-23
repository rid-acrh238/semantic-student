```
bendahara-management/
│
├── app/                         ← BACKEND PHP/Laravel
│   ├── Exports/
│   │   └── ReportsExport.php    ← Export laporan ke Excel
│   │
│   ├── Http/
│   │   └── Controllers/
│   │       ├── DashboardController.php
│   │       ├── ReportController.php
│   │       └── TransactionController.php
│   │
│   └── Models/
│       ├── Transaction.php
│       └── User.php
│
├── database/                    ← DATABASE
│   └── migrations/
│       └── create_transactions_table.php
│
├── resources/
│   └── js/                     ← FRONTEND REACT
│       │
│       ├── components/         ← Komponen UI
│       │
│       ├── layouts/            ← Sidebar, header, layout
│       │
│       ├── pages/
│       │   ├── dashboard.tsx
│       │   │
│       │   ├── Transactions/
│       │   │   ├── Index.tsx
│       │   │   └── Create.tsx
│       │   │
│       │   └── Reports/
│       │       └── Index.tsx
│       │
│       └── routes/             ← Route hasil Wayfinder
│
├── routes/
│   ├── web.php                 ← ROUTE UTAMA
│   ├── auth.php
│   └── settings.php
│
└── tests/
```