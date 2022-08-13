---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Statements/const
original_slug: Web/JavaScript/Referencje/Polecenia/const
---
### Podsumowanie

Deklaruje nazwaną stałą tylko do odczytu.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Wyrażenie</td>
    </tr>
    <tr>
      <td>Zaimplementowane w:</td>
      <td>
        JavaScript 1.5, NES 6.0 (rozszerzenie Netscape, tylko w silniku C)
      </td>
    </tr>
  </tbody>
</table>

### Składnia

`const nazwaStałej {{ mediawiki.external('= <i>wartość</i>') }} [..., nazwaStałej {{ mediawiki.external('= <i>wartość</i>') }} ]`

### Parametry

- `nazwaStałej`
  - : Nazwa stałej. Może być dowolnym dozwolonym identyfikatorem.

- `wartość`
  - : Wartość stałej. Może być dowolną dozwoloną wartością lub wynikiem wyrażenia.

### Opis

Tworzy stałą, która może być globalna lub lokalna dla funkcji, która ją zadeklarowała. Zasady zasięgu dla stałych są takie same jak dla zmiennych.

Wartość stałej nie może zostać zmieniona poprzez ponowne przypisanie; stała nie może także być ponownie zadeklarowana.

Stała nie może mieć takiej samej nazwy jak funkcja lub zmienna o tym samym zasięgu.

### Przykłady

#### Przykład: Zastosowanie `const`

Poniższy skrypt wypisuje "`a jest równe 7`".

    const a = 7;
    document.writeln("a jest równe " + a);

### Zobacz także

[`var`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Polecenia/var)

{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Statements/const", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Instructions/const", "ja": "ja/Core_JavaScript\_1.5\_Reference/Statements/const" } ) }}
