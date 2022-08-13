---
title: Operator delete
slug: Web/JavaScript/Reference/Operators/delete
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Operators/delete
original_slug: Web/JavaScript/Referencje/Operatory/Operator_delete
---
{{jsSidebar("Operators")}}

Operator delete usuwa obiekt, własność obiektu lub element w określonym indeksie w tablicy.

## Składnia

    delete  nazwaObiektu

<!---->

    delete nazwaObiektu.własność
    delete nazwaObiektu['własność']

### Parametry

- `nazwaObiektu`
  - : Nazwa obiektu.

<!---->

- `własność`
  - : Własność do usunięcia.

## Opis

Czwarta forma jest dozwolona tylko wewnątrz instrukcji `with` w celu usunięcia własności z obiektu.

Możesz użyć operatora `delete`, aby usunąć zmienne zadeklarowane bezpośrednio, jednak nie możesz usunąć zmiennych zadeklarowanych za pomocą instrukcji `var`.

Jeśli operator `delete` zadziała prawidłowo, ustawi on własność lub element jako `undefined` (niezdefiniowany). Operator `delete` zwraca wartość true (prawda), jeśli operacja jest możliwa, zaś wartość `false` (fałsz), gdy operacja nie jest możliwa.

```js
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;      // tworzy własność h
delete x;         // zwraca true (można usuwać, jeśli zadeklarowano bezpośrednio)
delete y;         // zwraca false (nie można usuwać, jeśli zadeklarowano za pomocą var)
delete Math.PI;   // zwraca false (nie można usuwać własności predefiniowanych)
delete myobj.h;   // zwraca true (można usuwać własności zdefiniowane przez użytkownika)
delete myobj;     // zwraca true (można usuwać obiekty)
```

### Usuwanie elementów tablicy

Gdy usuwasz element tablicy nie ma to wpływu na jej długość. Na przykład: jeśli usuniesz a{{ mediawiki.external(3) }}, a{{ mediawiki.external(4) }} będzie wciąż a{{ mediawiki.external(4) }}, natomiast a{{ mediawiki.external(3) }} będzie niezdefiniowane.

Gdy operator `delete` usuwa element tablicy, element ten przestaje już w niej istnieć. W poniższym przykładzie drzewa{{ mediawiki.external(3) }} jest usunięte za pomocą `delete`.

```js
drzewa = new Array("sekwoja","wawrzyn","cedr","dąb","klon");
delete drzewa[3];
if (3 in drzewa) {
   // to nie zostanie wykonane
}
```

Jeśli chcesz, aby element tablicy nadal istniał, ale posiadał wartość niezdefiniowaną, użyj słowa kluczowego `undefined` zamiast operatora `delete`. W poniższym przykładzie, drzewa{{ mediawiki.external(3) }} jest przypisana wartość niezdefiniowana, ale element tablicy nadal istnieje:

```js
drzewa = new Array("sekwoja","wawrzyn","cedr","dąb","klon");
drzewa[3] = undefined;
if (3 in drzewa) {
   // to zostanie wykonane
}
```
