---
title: JSON
slug: Glossary/JSON
translation_of: Glossary/JSON
original_slug: JSON
---
**JSON** (**JavaScript Object Notation**) jest formatem wymiany danych. Przypomina podzbiór składni [JavaScriptu](/pl/docs/JavaScript), choć nie jest nim w ścisłym sensie tego terminu. (Zobacz [JSON](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/JSON "en/JavaScript/Reference/Global Objects/JSON") w [Dokumentacji JavaScript](https://developer.mozilla.org/en/JavaScript/Reference "en/JavaScript/Reference") aby poznać szczegóły). Użyteczny w dowolnym rodzaju aplikacji opartej o JavaScript, m.in. na stronach internetowych i w rozszerzeniach przeglądarek. Przykładowo, dane użytkownika w formacie JSON mogą być przechowywane w [ciasteczku](/pl/docs/DOM/document.cookie) (cookie), zaś preferencje rozszerzenia mogą być przechowywane w formacie JSON przez przeglądarkę.

JSON może przechowywać liczby (`number`), wartości logiczne (`boolean`), ciagi znaków (`string`), `null`, tablice (uporządkowane sekwencje wartości) oraz obiekty (zbiory odwzorowań ciąg znaków-wartość) złożone z powyższych wartości (lub z innych tablic i obiektów). Nie definiuje naturalnej reprezentacji dla bardziej złożonych typów danych, jak funkcje, wyrażenia regularne, daty itd. (Obiekty typu Date są domyślnie serializowane w postaci ciągu znaków zawierającego datę w formacie ISO, zatem choć nie zostają odtworzone w oryginalnym formacie, informacja nie jest bezpowrotnie tracona). Gdy niezbędne jest przechowanie tego rodzaju danych, można przekształcić wartości w momencie serializacji, lub przed ich deserializacją, umożliwiając w ten sposób przechowanie w JSON dodatkowych typów danych.

## Użycie JSON poprzez obiekt JSON w JavaScripcie

Najprościej użyć JSON za pośrednictwem standardowego [obiektu JSON](/en/JavaScript/Reference/Global_Objects/JSON "en/JavaScript/Reference/Global Objects/JSON") w JavaScripcie. Użyj [JSON.stringify](/en/JavaScript/Reference/Global_Objects/JSON/stringify "en/JavaScript/Reference/Global Objects/JSON/stringify") do serializacji wartości w formacie JSON, natomiast do deserializacji - [JSON.parse](/en/JavaScript/Reference/Global_Objects/JSON/parse "en/JavaScript/Reference/Global Objects/JSON/parse").

Na przykład, do serializacji obiektu JavaScript używamy metody `JSON.stringify()`:

```js
var foo = {};
foo.bar = "new property";
foo.baz = 3;

var JSONfoo = JSON.stringify(foo);
```

`JSONfoo` ma teraz postać `{"bar":"new property","baz":3}`. Aby przywrócić `JSONfoo` do postaci obiektu JavaScript wystarczy wykonać:

```js
var backToJS = JSON.parse(JSONfoo);
```

Więcej informacji znajdziesz w dokumentacji [obiektu JSON](/en/JavaScript/Reference/Global_Objects/JSON "en/JavaScript/Reference/Global Objects/JSON").

## Metoda toJSON()

Jeśli obiekt definiuje metodę toJSON(), wówczas JSON.stringify wywoła tę metodę aby określić reprezentację obiektu w formacie JSON. Na przykład:

```js
x = {};
x.foo = "foo";
x.toJSON = function() { return "bar"; };
var json1 = JSON.stringify(x);
```

`json1` zawiera teraz '"bar"'.

## Ograniczenia

Nie można serializować obiektu zawierającego funkcje. Specyfikacja JSON nie pozwala na takie działanie. Na przykład:

```js
foo.qwerty = function(){alert('foobar');};
foo.qwerty()
var JSONfoo = JSON.toString(foo);
```

zwróci błąd `TypeError on line XXX: No JSON representation for this object!`

## Użycie JSON poprzez nsIJSON

Wersje Firefoksa wcześniejsze niż 3.5 nie zawierały wsparcia dla formatu JSON, zaś jedynym sposobem dotarcia do funkcjonalności JSON było wykorzystanie komponentu [`nsIJSON`](/en/XPCOM_Interface_Reference/nsIJSON "en/nsIJSON"), dostępnego począwszy od Firefox 3. Kodowanie i dekodowanie wykonywane są przez metody `encode` i `decode` komponentu `nsIJSON`. Metody te zakresem możliwości ustępują metodom dostarczanym przez obiekt JSON, zapewniając wsparcie jedynie tablicom i obiektom, z pominięciem ciągów znaków, wartości logicznych, liczb, czy `null`. (Wymienione wartości są obsługiwane jedynie wewnątrz tablic i obiektów: sama liczba `5` nie zadziała, lecz obiekt `{ "value": 5 }` już tak).

Ze względu na ograniczenia nsIJSON, jego metody encode i decode zostały usunięte począwszy od wersji Firefox 7. Deweloperom zaleca się używanie obiektu JSON.

Poniższy kod serializuje obiekt JavaScript przy użyciu` nsIJSON`:

```js
var Ci = Components.interfaces;
var Cc = Components.classes;

var foo = {};
foo.bar = "new property";
foo.baz = 3;

var nativeJSON = Cc["@mozilla.org/dom/json;1"].createInstance(Ci.nsIJSON);
var JSONfoo = nativeJSON.encode(foo);
```

Zmienna `JSONfoo` przyjmuje teraz wartość `{"bar":"new property","baz":3}`. Aby stworzyć obiekt odpowiadający `JSONfoo`, wystarczy wykonać:

```js
var backToJS = nativeJSON.decode(JSONfoo);
```

## Inne sposoby użycia JSON

Choć teoretycznie możliwe jest użycie JSON korzystając z [eval](/en/JavaScript/Reference/Global_Objects/eval "en/JavaScript/Reference/Global Objects/eval") (lecz tylko do deserializacji do obiektu, nie do serializacji do postaci ciągu znaków), lub z [json2.js](https://github.com/douglascrockford/JSON-js), nie jest to dobrym pomysłem. Parsowanie JSON przy użyciu eval nie jest bezpieczne, gdyż eval dopuszcza znacznie więcej rodzajów składni niż JSON (w tym nawet wykonywanie całkiem arbitralnego fragmentu kodu). Z kolei problemem json2.js jest dodawanie metod do wbudowanych obiektów, jak `Object.prototype`, co może skutkować błędami w kodzie, w którym nie przewidziano z góry takiej możliwości. Dlatego w niemal wszystkich przypadkach zaleca się pozostanie przy normalnych metodach użycia JSON.

## Zobacz także

- `nsIJSON`

{{ languages( { "ja": "ja/JSON", "zh-cn": "zh-cn/JSON" } ) }}
