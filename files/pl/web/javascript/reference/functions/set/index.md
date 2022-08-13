---
title: setter
slug: Web/JavaScript/Reference/Functions/set
translation_of: Web/JavaScript/Reference/Functions/set
---
{{jsSidebar("Functions")}}

Składnia **`set`** wiąże właściwość obiektu z funkcją, która zostanie wywołana przy próbie przypisania wartości danej właściwości.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Składnia

    {set prop(val) { . . . }}
    {set [expression](val) { . . . }}

### Parametry

- `prop`
  - : Nazwa właściwości wiązanej z określoną funkcją.

- `val`
  - : Zmienna przechowująca wartość przekazaną do przypisania do właściwości `prop.`
- expression
  - : Począwszy od ECMAScript 2015, można również użyć wyrażeń w celu połaczenia funkcji z nazwą właściwości, która jest obliczana.

## Description

Setter może być użyty do wywołania określonej funkcji przy każdej próbie przypisania wartości do danej właściwości. Settery są najczęściej używane razem z getterami żeby utworzyć rodzaj pseudo-właściwości. Nie ma możliwości jednoczesnego używania settera oraz faktycznej wartości przypisanej do danej właściwości.

Uwagi do składni `set`:

- Można utworzyć identyfikator typu number lub string;
- Setter musi mieć jeden paramter (sprawdź szczegóły [Niekompatybilna zmiana ES5: gettery i settery muszą mieć dokładnie zero lub one argument](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/));
- Setter nie może być zdefiniowany kilkukrotnie dla danej właściwości. Jednoczesne użycie settera i faktycznej wartości przypisanej do właściwości jest zabronione
  ( `{ set x(v) { }, set x(v) { } }` oraz `{ x: ..., set x(v) { } }` są zabronione)

Setter może być usunięty przy użyciu operatora [`delete`](/pl/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete").

## Przykłady

### Definicja settera w nowym obiekcie podczas inicjalizacji

Poniższa składnia definiuje pseudo-właściwość `current` obiektu language, która podczas przypisania wartości aktualizuje tablicę `log` o tą wartość:

```js
var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```

Zwróć uwagę, że właściwość `current` nie jest zdefiniowana i próby odczytu zwrócą `undefined`.

### Usuwanie settera przy użyciu operatora `delete`

Setter może zostać usunięty przy użyciu [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete):

```js
delete o.current;
```

### Definicja settera dla istniejącego obiektu przy użyciu `defineProperty`

Aby zdefiniować setter dla istniejącego obiektu po jego uprzednim utworzeniu użyj {{jsxref("Object.defineProperty()")}}.

```js
var o = {a: 0};

Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });

o.b = 10; // Uruchamia setter, który przypisuje 10 / 2 (5) do właściwości 'a'
console.log(o.a) // 5
```

### Używanie wyrażenia do obliczenia nazwy settera

```js
var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // uruchom setter
console.log(obj.baz); // "baz"
```

## Specyfikacje

| Specification                                                                                    | Status                       | Comment                        |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------ |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}                     | {{Spec2('ES5.1')}}     | Initial definition.            |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}         | Added computed property names. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                |

## Zgodność z przeglądarkami

{{Compat("javascript.functions.set")}}

## Zobacz również

- [getter](/pl/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [Defining Getters and Setters](/pl/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) in JavaScript Guide
