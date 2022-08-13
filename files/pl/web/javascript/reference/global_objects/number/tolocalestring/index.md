---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
original_slug: Web/JavaScript/Referencje/Obiekty/Number/toLocaleString
---
{{JSRef}}

Metoda **`toLocaleString()`** zwraca łańcuch znaków przedstawiający dany numer w formacie wybranej lokalizacji.

Nowe argumenty - `lokalizacje` i `opcje` - pozwalają na wybranie lokalizacji w jakiej ma zostać przedstawiona liczba. Starsza implementacja, która nie posiadała tych argumentów, zwracała łańcuch znaków zależny od implementacji danego środowiska.

## Składnia

    numObj.toLocaleString([lokalizacje [, opcje]])

### Parametry

W sekcji [kompatybilności](#Browser_compatibility) możesz sprawdzić, które przeglądarki obsługują argumenty `lokalizacji` i `opcji` . W sekcji [Przykład: Sprawdzanie obsługi argumentów `lokalizacji` i `opcji` ](#Checking_for_support_for_locales_and_options_arguments)rozpisane są sposoby na przetestowanie obsługiwanych przez przeglądarkę argumentów tej metody.

> **Note:** **Info:** ECMAScript Internationalization API, zaimplementowane w Firefoxie 29, dodaje obsługę parametry`lokalizacje` do metody`Number.toLocaleString()`. Jeśli argument nie zostanie podany ({{jsxref("undefined")}}) metoda przyjmię lokalizację systemu operacyjnego. Poprzednie wersje Firefoxa zwracały liczby z lokalizacji [Western Arabic](https://en.wikipedia.org/wiki/Arabic_numerals). Zmiana zostala zgłoszona jako regresja rzutująca na wsteczną kompatybilność metody, i wkrótce zostanie naprawiona. ({{bug(999003)}})

{{page('/pl-PL/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parameters')}}

### Zwracana wartość

Łańcuch znaków przedstawiający liczbę w danym formacie.

## Przykłady

### Przykłady użycia metody `toLocaleString`

Podstawowy sposób użycia, bez podanych argumentów, zwróci nam łańcuch znaków w domyślnej lokalizacji i z domyślnymi opcjami.

```js
var liczba = 3500;

console.log(liczba.toLocaleString()); // Wyświetli "3 500", jeśli twoją lokalizacją jest „pl-PL”
```

### Sprawdzanie dostępności argumentów `lokalizacji` i `opcji`

Nie wszystkie przeglądarki obsługuję argumenty `lokalizacji` i `opcji`. Aby to sprawdzić w wersji języka ES5.1 i późniejszych możemy użyć wyjątku {{jsxref("Global_Objects/RangeError", "RangeError")}}, który zostanie rzucony gdy niepoprawna nazwa lokalizacji zostanie użyta:

```js
function toLocaleStringSupportsLocales() {
  var liczba = 0;
  try {
    liczba.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

W wersjach przed ES5.1 nie było obowiązku wyrzucania wyjątku Range Error jeśli metoda `toLocaleString` została wywołana z argumentami.

Sprawdzenie działające na wszystkich wersjach języka przed 5.1 polega na użyciu funkcjonalności niezbędnych do działania tych argumentów bezpośrednio na `Number.prototype.toLocaleString`:

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

Sprawdzamy tutaj czy istnieje globalny obiekt `Intl`, czy nie jest `nullem`, a także czy posiada właściwość `NumberFormat`, która jest funkcją.

### Przykłady użycia `lokalizacji`

Przykład ten pokazuje kilka różnych lokalizacji. Aby uzyskać foramt języka interfejsu użytkownika upewnij się, że podajesz tę lokalizację (i dla pewności kilka innych jako fallbacki) przy pomocy aargumentu `localizacji`:

```js
var liczba = 123456.789;

// Język niemiecki oddziela części dziesiętne przecinkiem, a tysiące kropką
console.log(liczba.toLocaleString('de-DE'));
// → 123.456,789

// W większości krajów arabskich używa cyfr Eastern Arabic
console.log(liczba.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// Indyjski używa separatorów tysięcy/lakh/crore
console.log(liczba.toLocaleString('en-IN'));
// → 1,23,456.789

// Klucz rozszerzeń „nu” pyta o system numeryczny, np. Chiński system dziesiętny
console.log(liczba.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// jeśli masz zamiar użyć lokalizacji, która może nie być obsługiwana
// jak np. Balinese, zawsze dodaj drugi lokalizację, tutaj Indonezyjską
console.log(liczba.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### Przykłady użycia `opcji`

Rezultaty metody`toLocaleString`  mogą być dostosowywane przy pomocy argumentu `opcje`:

```js
var liczba = 123456.789;

// format walutowy
console.log(liczba.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// Japoński yen
console.log(liczba.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// ogranicz wyświetlanie do 3 miejsc znaczących
console.log(liczba.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Użyj domyślnego języka hosta z opcjami formatowania liczby
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" w języku angielskim lub
// → "30.000,65" w języku niemieckiem lub
// → "30 000,65" w języku francuskim
```

## Wydajność

Jeśli zamierzasz formatować wiele liczb, lepiej użyć obiektu {{jsxref("NumberFormat")}} i formatować przy pomocy metody {{jsxref("NumberFormat.format")}}.

## Specyfikacje

| Specification                                                                                                                            | Status                           | Comment                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('ES3')}}                                                                                                                 | {{Spec2('ES3')}}             | Pierwsza definicja. Zaimplementowane w JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}                                         | {{Spec2('ES5.1')}}         |                                                        |
| {{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}             | {{Spec2('ES6')}}             |                                                        |
| {{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}     | {{Spec2('ESDraft')}}     |                                                        |
| {{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 1.0')}} |                                                        |
| {{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                                     | {{Spec2('ES Int 2.0')}} |                                                        |
| {{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                        |

## Kompatybilność

{{Compat("javascript.builtins.Number.toLocaleString")}}

## Zobacz także

- {{jsxref("Number.prototype.toString()")}}
