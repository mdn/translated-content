---
title: static
slug: Web/JavaScript/Reference/Classes/static
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Static
translation_of: Web/JavaScript/Reference/Classes/static
---
{{jsSidebar("Classes")}}

Słowo kluczowe **`static`** definiuje statyczną metodę lub właściwość klasy. Metody i właściwości statyczne nie są wywoływane na instancjach klasy, a bezpośrednio na samej klasie. Statyczne metody to często funkcje służące na przykład do tworzenia czy klonowania obiektów, a statyczne właściwości są użyteczne do cache'ów, stałej konfiguracji lub innych właściwości, które nie muszą być powielane w instancjach.

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## Składnia

    static nazwaMetody() { ... }
    static nazwaWlasciwosci [=wartosc];

## Przykłady

### Używanie `static` w klasach

Poniższy przykład demonstruje kilka rzeczy:

1.  Jak statyczna metoda lub właściwość jest implementowana w klasie
2.  Klasa z metodą lub właściwością statyczną może być dziedziczona
3.  Jak metoda lub właściwość statyczna może być wywoływana

```js
class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.description);   // 'I triple any number you provide'
console.log(Triple.triple());      // 3
console.log(Triple.triple(6));     // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));        // 81 (not affected by parent's instantiation)
console.log(BiggerTriple.description);      // 'I square the triple of any number you provide'
console.log(BiggerTriple.longDescription);  // undefined
console.log(BiggerTriple.customName);       // 'Tripler'

console.log(tp.triple());         // 'tp.triple is not a function'.
```

### Wywoływanie metod statycznych z innych metod statycznych

W celu wywołania metody lub właściwości statycznej z innej metody statycznej tej samej klasy można użyć słowa kluczowego `this`.

```js
class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
```

### Wywoływanie metod statycznych z konstruktora i innych metod

Metody statyczne nie są dostępne przez this w metodach niestatycznych. Trzeba je wywołać, używając nazwy klasy: `CLASSNAME.STATIC_METHOD_NAME()` / `CLASSNAME.STATIC_PROPERTY_NAME` lub jako metody właściwości `constructor`: `this.constructor.STATIC_METHOD_NAME()` / `this.constructor.STATIC_PROPERTY_NAME`.

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = 'static property';
  static staticMethod() {
    return 'static method has been called.';
  }
}
```

## Specyfikacje

| Specyfikacja                                                                                 | Status                       | Komentarz             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Definicja początkowa. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                       |

## Kompatybilność

{{Compat("javascript.classes.static")}}

## Zobacz też

- [`class` expression](/pl/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/pl/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/pl/docs/Web/JavaScript/Reference/Classes)
