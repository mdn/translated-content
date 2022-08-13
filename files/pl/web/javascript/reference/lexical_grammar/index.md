---
title: Komentarz
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Lexical_grammar#Comments
translation_of_original: Web/JavaScript/Reference/Code_comments
original_slug: Web/JavaScript/Referencje/Komentarz
---
### Podsumowanie

Uwagi od programisty wyjaśniające działanie kodu. Komentarze są ignorowane przez interpreter.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Komentarze</td>
    </tr>
    <tr>
      <td>Zaimplementowane w:</td>
      <td>JavaScript 1.0, NES2.0</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

### Składnia

`// tekst komentarza`

`/* wieloliniowy tekst komentarza */`

### Opis

JavaScript obsługuje komentarze w stylu Javy:

- Komentarze zawarte w jednej linii poprzedzone są dwoma ukośnikami (`//`),
- Komentarze zawarte w wielu liniach poprzedzone są znakami `/*`, a zakończone znakami `*/`. Komentarze wieloliniowe
  _nie mogą_
  być zagnieżdżane.

### Przykłady

#### Przykład: Komentarz jednoliniowy

    // To jest komentarz jednoliniowy.
    var intAge = 37; //To jest inny komentarz

#### Przykład: Komentarz wieloliniowy

    /* To jest komentarz wieloliniowy.
       Może być dowolnie długi i zawierać dowolne znaki,
       za wyjątkiem innych komentarzy wieloliniowych. */





{{ languages( { "en": "en/Core_JavaScript\_1.5\_Reference/Comments/comment", "es": "es/Referencia_de_JavaScript\_1.5/Comentarios/comentario", "fr": "fr/R\u00e9f\u00e9rence_de_JavaScript\_1.5\_Core/Commentaires", "ja": "ja/Core_JavaScript\_1.5\_Reference/Comments/comment" } ) }}
