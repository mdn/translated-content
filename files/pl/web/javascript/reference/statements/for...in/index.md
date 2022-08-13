---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - JavaScript
  - wyrażenie
translation_of: Web/JavaScript/Reference/Statements/for...in
original_slug: Web/JavaScript/Referencje/Polecenia/for...in
---
{{jsSidebar("Statements")}}

**Wyrażenie** **`for...in` **iteruje po nazwach wszystkich [wyliczalnych](/pl/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) własnościach obiektu, włączając w to odziedziczone wyliczalne właściwości. **`for...in`** pomija te właściwości, które są indeksowane [Symbol](/pl/docs/Web/JavaScript/Referencje/Obiekty/Symbol)ami.

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Składnia

    for (zmienna in obiekt)
      polecenie

- `zmienna`
  - : W każdej iteracji, _zmiennej_ przypisywana jest inna nazwa własności.
- `obiekt`
  - : Obiekt, po którego niesymbolicznych wyliczalnych własnościach iterujemy.

## Opis

`for...in` iteruje jedynie po wyliczalnych i jednocześnie niesymbolicznych właściwościach. Obiekty utworzone za pomocą wbudowanych konstruktorów (np. `Array` czy `Object`) dziedziczą niewyliczalne właściwości z m.in. `Object.protoype` oraz `String.prototype`, takie jak metoda {{jsxref("String.indexOf", "indexOf()")}} ze {{jsxref("String")}} albo {{jsxref("Object.toString", "toString()")}} z {{jsxref("Object")}}. Pętla przejdzie przez wszystkie wyliczalne właściwości – zarówno własne, jak i odziedziczone z prototypu konstruktora.

### Usunięte, dodane lub zmodyfikowane własności

Pętla `for...in` iteruje po właściwościach w arbitralnej kolejności (zobacz więcej w opisie operatora {{jsxref("Operators/delete", "delete")}}, dlaczego nie można liczyć na konkretną kolejność właściwości – szczególnie w różnych przeglądarkach).

Jeśli właściwość zostanie zmodyfikowana w danej iteracji, a dopiero następnie odwiedzona przez `for...in`, przyjmuje tę późniejszą wartość. Usunięcie właściwości przed jej odwiedzeniem przez pętlę, spowoduje, że nie wystąpi w żadnej z późniejszych iteracji. Natomiast właściwość dodana do obiektu w trakcie iterowania może (ale nie musi) zostać odwiedzona przez pętlę.

Ogólnie, w trakcie iterowania z użyciem `for...in` najlepiej jest nie modyfikować innych właściwości obiektu niż ta, która jest aktualnie odwiedzona. Nie ma żadnej gwarancji, że dodana właściwość zostanie odwiedzona, ani że właściwość usuwana zostanie odwiedzona przed skasowaniem. Podobnie, nie ma gwarancji, czy właściwość zmodyfikowana zostanie odwiedzona przed, czy po modyfikacji.

### Iterowanie po tablicy i for...in

> **Uwaga:** wyrażenie `for...in` nie powinno być używane na obiektach klasy{{jsxref("Array")}}, gdzie kolejność elementów jest ważna.

Indeksy tablic są niczym innym jak właściwościami obiektu – z tym, że ich nazwy są liczbowe, a nie słowne. Dlatego nie ma gwarancji, że `for...in` odwiedzi je w jakiejkolwiek konkretnej kolejności. Ponadto, pętla zwróci także nieliczbowe właściwości oraz te odziedziczone.

Kiedy kolejność odwiedzania elementów ma znaczenie, iterowanie po elementach tablicy powinno odbywać się z użyciem pętli {{jsxref("Statements/for", "for")}} (albo {{jsxref("Array.prototype.forEach()")}} albo pętli {{jsxref("Statements/for...of", "for...of")}}), ze względu na to, że kolejność iterowania po właściwościach jest zależna od implementacji.

### Iterowanie jedynie po własnych właściwościach

Jeżeli potrzebujesz iterować tylko po własnych właściwościach obiektu, użyj {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}}, albo sprawdzaj za każdym razem, czy właściwość jest właściwością własną za pomocą {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} również moży zostać użyte). Alternatywnie, jeśli jesteś pewien, że nie spowoduje to problemów w kodzie, możesz rozszerzyć wbudowane prototypy o metodę sprawdzającą, czy właściwość jest własna.

## Dlaczego używać for...in?

Skoro pętla `for...in` została stworzona do iterowania po właściwościach obiektu i nie jest zalecana do pracy z tablicami, to jaki może bć z niej pożytek?

Najbardziej praktyczna jest w sytuacjach związanych z debugowaniem, zapewniając łatwy sposób na sprawdzenie właściwości obiektu (wypisując je do konsoli lub gdziekolwiek indziej). Oprócz tego, są sytuacje, kiedy pary klucz-wartość są indeksowane innym typem niż liczba. Wtedy po takim "słowniku" można przeiterować za pomocą `for...in`.

## Przykłady

### Użycie for...in

Pętla `for...in` poniżej iteruje po wszystkich wyliczalnych właściwościach obiektu `obj` i wypisuje je do konsoli.

```js
var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Wyjście:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iterowanie po własnych właściwościach

Następny przykład pokazuje użycie {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}, aby nie wyświetlać właściwości odziedziczonych przez `ColoredTriangle`.

```js
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Wyjście:
// "obj.color = red"
```

## Specyfikacje

| Specyfikacja                                                                                                 | Status                       | Komentarz             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------- |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}} | {{Spec2('ESDraft')}} |                       |
| {{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}     | {{Spec2('ES6')}}         |                       |
| {{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}                                 | {{Spec2('ES5.1')}}     |                       |
| {{SpecName('ES3', '#sec-12.6.4', 'for...in statement')}}                                 | {{Spec2('ES3')}}         |                       |
| {{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}                                 | {{Spec2('ES1')}}         | Definicja początkowa. |

## Zgodność z przeglądarkami

{{Compat("javascript.statements.for_in")}}

### Zgodność: Wyrażenie incjalizujące w trybie ścisłym

Przed Firefoksem 40, było możliwe używanie wyrażenia incjalizującego (`i=0`) w pętli `for...in`:

```js example-bad
var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

To niestandardowe zachowanie jest ignorowane począwszy od wersji 40 i powoduje zgłoszenie błędu {{jsxref("SyntaxError")}} ("[for-in loop head declarations may not have initializers](/pl/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)") w [trybie ścisłym](/pl/docs/Web/JavaScript/Reference/Strict_mode) ({{bug(748550)}} i {{bug(1164741)}}).

Inne silniki, takie jak v8 (Chrome), Chakra (IE/Edge), i JSC (WebKit/Safari) również mogą przestać obsługiwać taką konstrukcję.

## Zobacz też

- {{jsxref("Statements/for...of", "for...of")}} – podobna konstrukcja, która iteruje po _wartościach_ właściwości
- {{jsxref("Statements/for_each...in", "for each...in")}} {{deprecated_inline}} – wyrażenie analogiczne do `for...of`, ale zdeprecjonowane
- {{jsxref("Statements/for", "for")}}
- [Wyrażenia generatora](/pl/docs/Web/JavaScript/Guide/Iterators_and_Generators) (używają składni `for...in`)
- [Reguły wyliczalności i własności właściwości](/pl/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
