---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
translation_of: Web/JavaScript/Reference/Errors/Not_defined
---
{{jsSidebar("Errors")}}

## Wiadomość

    ReferenceError: "x" is not defined

## Typ błędu

{{jsxref("ReferenceError")}}.

## Co poszło nie tak?

Istnieje gdzieś niezadeklarowana zmienna. Zmienna ta powinna być zadeklarowana, a jeśli jest upewnij się czy jest dostępna w twoim skrypcie albo {{Glossary("scope")}}.

> **Note:** **Notatka:** Gdy ładujesz bibliotekę (na przykład jQuery), upewnij się, że jest załadowana przed dostępem do zmiennych biblioteki, np "$". Dodaj znacznik {{HTMLElement("script")}} ładujący bibliotekę przed twoim kodem, który jej używa.

## Przykład

### Zmienna niezadeklarowana

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Zmianna "foo" jest niezdefiniowana. Powinna być jakąś wartością string wiec("String.prototype.substring()")}} metoda ta będzie działać.

```js example-good
var foo = 'bar';
foo.substring(1); // "ar"
```

### Zły zasięg

Zmienna musi być dostępna w bieżącym kontekście realizacji. Zmienne zdefiniowane wewnątrz [funcji ](/pl/docs/Web/JavaScript/Reference/Functions)nie mogą być dostępne z dowolnego miejsca poza funkcją, powodem jest to że zmienna jest zdefiniowana tylko zmienną lokalną funkcji.

```js example-bad
function numbers() {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Jakkolwiek funkcja może mieć dostęp do wszystkich zmiennych dzięki deklaracji zmiennych globalnie. Zmienne globalne są dostępne dla wszystkich funkcji.

```js example-good
var num1 = 2,
    num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## Zobacz także

- {{Glossary("Scope")}}
- [Przewodnik deklaracji zmiennych w JavaScript](/pl/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
- [Zasięg funkcji w Javascript](/pl/docs/Web/JavaScript/Guide/Functions#Function_scope/en-US/docs/)
