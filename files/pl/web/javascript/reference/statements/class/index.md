---
title: class
slug: Web/JavaScript/Reference/Statements/class
translation_of: Web/JavaScript/Reference/Statements/class
original_slug: Web/JavaScript/Referencje/Polecenia/class
---
{{jsSidebar("Statements")}}**Deklaracja klasy** tworzy nową klasę z daną nazwą, używając dziedziczenia opartego na prototypach.{{EmbedInteractiveExample("pages/js/statement-class.html")}}

Możesz także zdefiniować klasę, używając {{jsxref("Operators/class", "wyrażenia class", "", 1)}}. W odróżnieniu jednak od wyrażenia class, deklaracja klasy nie pozwala na ponowne zadeklarowanie istniejącej klasy i w takim przypadku zwróci błąd.

## Składnia

```js
class nazwa [extends] {
  // ciało klasy
}
```

## Opis

Ciało klasy w deklaracji klasy jest wykonywane w  [trybie ścisłym](/pl/docs/Web/JavaScript/Reference/Strict_mode). Konstruktor jest opcjonalny.

Deklaracje klas nie są {{Glossary("Hoisting", "hoisted")}} (w odróżnieniu od [deklaracji funkcji](/pl/docs/Web/JavaScript/Reference/Statements/function)).

## Przykłady

### Prosta deklaracja klasy

W poniższym przykładzie, najpierw definiujemy klasę o nazwie Polygon, a następnie rozszerzamy ją do klasy Square. Zwróć uwagę na to, że `super()`, użyte w konstruktorze, może byc użyte jedynie w konstruktorach i musi być wywołane przed użyciem słowa kluczowego `this`.

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

> **Warning:** ### Próba podwójnej deklaracji klasyPróba ponownego zadeklarowania klasy, przy użyciu deklaracji klasy, spowoduje wystąpienie błędu.`js class Foo {}; class Foo {}; // Uncaught SyntaxError: Identifier 'Foo' has already been declared `Taki sam błąd jest zwracany, gdy klasa jest zdefiniowana przed użyciem wyrażenia klasy.```js
> var Foo = class {};
> class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared
>
> ```
>
> ```

## Specyfikacje

| Specyfikacja                                                                                 | Status                       | Komentarz             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Początkowa definicja. |
| {{SpecName('ES2016', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2016')}}     |                       |
| {{SpecName('ES2017', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2017')}}     |                       |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                       |

## Wsparcie przeglądarek

{{Compat("javascript.statements.class")}}

## Zobacz też

- [`function` declaration](/pl/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/pl/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/pl/docs/Web/JavaScript/Reference/Classes)
