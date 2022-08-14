---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/exec
original_slug: Web/JavaScript/Referencje/Obiekty/RegExp/exec
---
{{ JSRef }}

## Podsumowanie

Wykonuje operacje wyszukiwania danego łańcucha znaków. Wynikiem jest macierz.

## Składnia

    regexObj.exec(str)



### Parametry

- `str`
  - : Łańcuch znaków, do którego ma być porównane wyrażenie.

## Opis

Jak wynika z opisu składni metoda exec może być wywołana w sposób bezpośredni (za pomocą `regexp.exec(str)`) lub pośredni (za pomocą `regexp(str)`).

Jeśli wynik będzie pozytywny metoda `exec` zwróci macierz oraz zaktualizuje własności obiektu. W przeciwnym wypadku zostanie zwrócone `null`.

Przejrzyj poniższy przykład:

```js
//Znajdź pojedyncze "d" poprzedzone przez jedno lub więcej "b", po których następuje pojedyncze "d"
//Zapamiętaj znalezione "b" oraz następujące "d"
//Ignoruj wielkość liter
var re=/d(b+)(d)/ig;
var myArray = re.exec("cdbBdbsbz");
```

Poniższa tabela pokazuje rezultaty wygenerowane przez skrypt:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header">Obiekt</td>
      <td class="header">Właściwość/Indeks</td>
      <td class="header">Opis</td>
      <td class="header">Przykład</td>
    </tr>
    <tr>
      <td rowspan="5"><code>myArray</code></td>
      <td><code> </code></td>
      <td>Zawartość <code>myArray</code>.</td>
      <td><code>[ \"dbBd\", \"bB\", \"d\"') ]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>Indeks wyszukania łańcucha znaków rozpoczynający się od 0.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>Ciąg bazowy.</td>
      <td><code>cdbBdbsbz</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Ostatnie odnalezione znaki.</td>
      <td><code>dbBd</code></td>
    </tr>
    <tr>
      <td>
        <code>[1], ...[<em>n</em> ]</code>
      </td>
      <td>
        Wyszukane podłańcuch w nawiasach. Liczba możliwych podłańcuch jest
        nieokreślona.
      </td>
      <td>
        <code>[1] = bB<br />[2] = d</code>
      </td>
    </tr>
    <tr>
      <td rowspan="5"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>Indeks, od którego rozpocząć nowe wyszukiwanie.</td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>Wskazuje czy flaga "<code>i</code>" została użyta.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>
        Wskazuje czy flaga "<code>g</code>" została użyta do globalnego
        przeszukiwania.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>
        Wskazuje czy flaga "<code>m</code>" została użyta do globalnego
        przeszukiwania.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>Tekst wyszukiwanego łańcucha znaków.</td>
      <td><code>d(b+)(d)</code></td>
    </tr>
  </tbody>
</table>

Jeżeli twoje wyrażenie regularne korzysta z flagi "g", możesz wielokrotnie używać metody exec() aby porównać je z tym samym ciągiem znaków. W takim wypadku porównywanie rozpoczyna się od elementu zdefiniowanego jako `lastIndex. `Na przykład:

```js
var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}
```

Skrypt ten wyświetli następujący tekst:

    Found abb. Next match starts at 3
    Found ab. Next match starts at 9

## Przykłady

### Przykład: Zastosowanie `exec()`

You can also use `exec()` without creating a {{jsxref("RegExp")}} object:

```js
var matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);
```

This will display an alert containing 'hello world!'.

## Zobacz także

- [Regular Expressions](/pl/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](https://developer.mozilla.org//pl/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
