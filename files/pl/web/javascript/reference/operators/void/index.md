---
title: Operator void
slug: Web/JavaScript/Reference/Operators/void
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Operators/void
original_slug: Web/JavaScript/Referencje/Operatory/Operator_void
---
### Podsumowanie

Operator `void` może być używany na jeden z dwóch sposobów:

1.  `void (wyrażenie )`
2.  `void wyrażenie`

Operator `void` określa wyrażenie, które ma zostać ocenione bez zwracania wartości. `wyrażenie` jest wyrażeniem JavaScript, które ma zostać ocenione. Nawiasy dookoła wyrażenia są opcjonalne, ale używanie ich jest w dobrym stylu.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header" colspan="2">Operator</td>
    </tr>
    <tr>
      <td>Zaimplementowany w:</td>
      <td>JavaScript 1.1</td>
    </tr>
    <tr>
      <td>Wersja ECMA:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

Możesz użyć operatora `void`, aby określić wyrażenie jako hipertekstowy odnośnik. Wyrażenie jest oceniane, ale nie jest ładowane w miejsce aktualnego dokumentu.

Poniższy kod tworzy hipertekstowy odnośnik, który nie wykonuje nic po kliknięciu go przez użytkownika. Gdy użytkownik kliknie odnośnik, void(0) zostanie oceniony jako 0, jednak nie ma to żadnego efektu w JavaScripcie.

    <a href="javascript:void(0)">Kliknij tutaj, żeby nic się nie stało</a>

Poniższy kod tworzy hipertekstowy odnośnik, który wysyła formularz, gdy zostanie kliknięty przez użytkownika.

    <a href="javascript:void(document.form.submit())">
    Kliknij tutaj, aby wysłać.</a>
