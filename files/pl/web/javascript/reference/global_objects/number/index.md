---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Number
original_slug: Web/JavaScript/Referencje/Obiekty/Number
---
{{JSRef}}

## Podsumowanie

Pozwala pracować z wartościami liczbowymi. Obiekt `Number` jest opakowaniem (ang._wrapper_ ) dla prymitywnych wartości numerycznych.

## Tworzone przez

Konstruktor `Number`:

    new Number(value);

### Parametry

- `value`
  - : Wartość numeryczna tworzonego obiektu.

## Opis

Obiekt `Number` jest głównie stosowany do:

- Uzyskania dostępu do jego stałych własnościach, które reprezentują najmniejszą i największa możliwą (przestawialną) liczbę, dodatnią lub ujemną nieskończoność i wartość nieliczbową (_Not-a-Number_ ).

- Aby stworzyć obiekty liczbowe do których możesz dodać własności. Najprawdopodobniej rzadko, kiedy będziesz musiał stworzyć obiekt typu `Number`.

Własności `Number` są własnościami jego klasy, nieindywidualnymi własnościami obiektu.

**JavaScript 1.2**: `Number(x)` teraz tworzy raczej `NaN` niż błąd jeśli `x` jest ciągiem znaków, który nie zawiera poprawnie sformatowanej liczby. Na przykład, poniższy kod drukuje `NaN`:

```js
var x = Number("three");
document.write(x + "<BR>");
```

Możesz przekonwertować, każdy obiekt na liczbę używając funkcji wysokiego poziomu `Number`.

## Własności

- {{jsxref("Number.constructor")}}
  - : Oznacza funkcję, która tworzy prototyp obiektu.
- {{jsxref("Number.MAX_VALUE")}}
  - : Największa możliwa do przedstawienia liczba.
- {{jsxref("Number.MIN_VALUE")}}
  - : Najmniejsza możliwa do przedstawienia liczba.
- {{jsxref("Number.NaN")}}
  - : Specjalna wartość "nie jest liczbą" (Not-a-Number).
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Specjalna wartość reprezentująca negatywną nieskończoność; zwracana przy przepełnieniu.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Specjalna wartość reprezentująca nieskończoność; zwracana przy przepełnieniu.
- {{jsxref("Number.prototype")}}
  - : Pozwala na dodawanie (tworzenie) nowych własności obiektu `Number`.

## Metody

**{{jsxref("Number.isInteger()")}}**

Sprawdza czy liczba jest całkowita.

- {{jsxref("Number.toExponential()")}}
  - : Zwraca ciąg znaków, reprezentujący liczbę zapisaną w postaci wykładniczej.
- {{jsxref("Number.toFixed()")}}
  - : Zwraca ciąg znaków, reprezentujący liczbę stałoprzecinkową.
- {{jsxref("Number.toLocaleString()")}}
  - : Zwraca czytelny dla ludzi ciąg znaków reprezentujący liczbę zapisaną przy wykorzystaniu lokalnego formatu zapisu liczb. Przesłania metodę {{jsxref("Object.toLocaleString()")}}.
- {{jsxref("Number.toPrecision()")}}
  - : Zwraca ciąg znaków reprezentujący liczbę stałoprzecinkową o podanej precyzji.
- {{jsxref("Number.toSource()")}}
  - : Zwraca literał obiektu reprezentujący podany obiekt `Number`; możesz użyć tą wartość, przy tworzeniu nowego obiektu. Przesłania metodę {{jsxref("Object.toSource()")}}.
- {{jsxref("Number.toString()")}}
  - : Zwraca ciąg znaków reprezentujący podany obiekt. Przesłania metodę {{jsxref("Object.toString()")}}.
- {{jsxref("Number.valueOf()")}}
  - : Zwraca zmienną typu prostego reprezentującą wartość podanego obiektu. Przesłania metodę {{jsxref("Object.valueOf()")}}.

## Przykłady

### Przykład: Zastosowanie obiektu `Number`, przy przypisaniu wartości zmiennym liczbowym

Poniższy przykład używa własności obiektu `Number`, aby przypisać wartości do kilku wartości numerycznych:

```js
var najwiekszaLiczba = Number.MAX_VALUE;
var najmniejszaLiczba = Number.MIN_VALUE;
var nieskonczonosc = Number.POSITIVE_INFINITY;
var negatywnaNieskonczonosc = Number.NEGATIVE_INFINITY;
var nieJestLiczba = Number.NaN;
```

### Przykład: Zastosowanie obiektu `Number` do modyfikacji wszystkich obiektów `Number`

Poniższy przykład tworzy obiekt typu `Number`, \<code>.mojaLiczba\</code>, wtedy dodaje własność `opis`, wszystkim obiektom `Number`. Następnie wartość jest przypisana do własności `opis` obiektu `mojaLiczba`.

```js
var mojaLiczba = new Number(65);
Number.prototype.opis = null;
var mojaLiczba.opis = "prędkość wiatru";
```
