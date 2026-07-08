# projekty.epartner24.pl

Statyczna strona projektu "Droga do domu" dla domeny projekty.epartner24.pl.

Zawartosc jest generowana z repo projektyscpip przez `scripts/export-epartner.ps1`.

## Publikacja

Repo powinno dzialac jako osobny projekt GitHub Pages z domena `projekty.epartner24.pl`.

Po utworzeniu repo GitHub:

```powershell
git remote add origin https://github.com/sekju/projekty.epartner24.pl.git
git push -u origin main
```

W repo `projektyscpip` automatyczna synchronizacja wymaga:

- sekretu `EPARTNER_REPO_TOKEN` z prawem zapisu do tego repo,
- zmiennej `EPARTNER_REPOSITORY` ustawionej na `sekju/projekty.epartner24.pl`.
