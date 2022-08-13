---
title: export
slug: Web/JavaScript/Reference/Statements/export
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/export
original_slug: Web/JavaScript/Referencje/Polecenia/export
---
### Podsumowanie

Pozwala podpisanemu skryptowi na dostarczanie własności, funkcji i obiektów do innych podpisanych lub niepodpisanych skryptów. Tej opcji nie ma w 3 edycji ECMA-262.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Instrukcja</td>
    </tr>
    <tr>
      <td>Zaimplementowana w:</td>
      <td>JavaScript 1.2, NES 3.0</td>
    </tr>
  </tbody>
</table>

### Składnia

`export nazwa1, nazwa2, ..., nazwaN;`

`export *;`

### Parametry

- `nazwaN`
  - : Własność, funkcja, lub obiekt do wyeksportowania.

### Opis

Zazwyczaj informacja w podpisanym skrypcie jest dostępna tylko dla skryptów podpisanych przez tych samych wykonawców. Poprzez wyeksportowanie własności, funkcji i obiektów podpisany skrypt udostępnia tę informację dla każdego skryptu (podpisanego lub niepodpisanego). Skrypt otrzymujący używa instrukcji `import`, by uzyskać dostęp do tej informacji.

Pierwsza składnia eksportuje określone własności, funkcje i obiekty.

Druga składnia eksportuje wszystkie własności, funkcje i obiekty ze skryptu.

### Zobacz także

[`import`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/import)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/export", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/export", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/export" } ) }}
