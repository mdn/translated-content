---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/import
original_slug: Web/JavaScript/Referencje/Polecenia/import
---
### Podsumowanie

Pozwala zaimportować własności, funkcje i obiekty z podpisanego skryptu, który wyeksportował informację.

Tej cechy nie ma w 3 edycji ECMA 262.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Instrukcja</td>
    </tr>
    <tr>
      <td>Zaimplementowane w:</td>
      <td>JavaScript 1.2, NES 3.0</td>
    </tr>
  </tbody>
</table>

### Składnia

`import objectName.name1, objectName.name2, ..., objectName.nameN;`

`import objectName.*;`

### Parametry

- `objectName`
  - : Nazwa obiektu, który przyjmie zaimportowane nazwy.

<!---->

- `nameN`
  - : Własność, funkcja lub obiekt do zaimportowania.

### Opis

Parametr `objectName` jest nazwą obiektu, który przyjmie zaimportowane nazwy. Na przykład jeśli `f` i `p` zostały wyeksportowane i `obj` jest obiektem z importującego skryptu, to poniższy kod zrobi `f` i `p` dostępnymi jako własności `obj` wewnątrz skryptu importującego.

    import obj.f, obj.p;

Pierwsza składnia importuje określone własności, funkcje i obiekty z wyeksportowanego skryptu.

Druga składnia importuje wszystkie własności, funkcje i obiekty z wyeksportowanego skryptu.

Zazwyczaj informacja w podpisanym skrypcie jest dostępna tylko dla skryptów podpisanych przez tych samych wykonawców. Poprzez wyeksportowanie (używając instrukcji [`export`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/export)) własności, funkcji i obiektów podpisany skrypt robi tę informację dostępną dla każdego skryptu (podpisanego lub niepodpisanego). Skrypt otrzymujący używa instrukcji `import`, by uzyskać dostęp do tej informacji.

Skrypt musi załadować skrypt eksportowy do okna, ramki lub warstwy zanim będzie on mógł zaimportować i użyć którejkolwiek z wyeksportowanych własności, funkcji lub obiektów.

### Zobacz także

[`export`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/export)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/import", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/import", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/import" } ) }}
