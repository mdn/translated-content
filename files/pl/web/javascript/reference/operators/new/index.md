---
title: Operator new
slug: Web/JavaScript/Reference/Operators/new
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Operators/new
original_slug: Web/JavaScript/Referencje/Operatory/Operator_new
---
{{jsSidebar("Operators")}}

**Operator\*\*** `new` \*\*tworzy nową instancję typu obiektu zdenifiowanego przez użytkownika lub instancję wbudowanego typu obiektu, który posiada konstruktor.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}}

## Składnia

    new constructor[([arguments])]

### Parametry

- `constructor`
  - : Klasa bądź funkcja, która definiuje typ obiektu instancji.

<!---->

- `arguments`
  - : Lista wartości z którymi zostanie wywołany `constructor`.

## Opis

Tworzenie obiektu przez zdefiniowanego przez użytkownika przebiega w dwóch krokach:

1.  Zdefiniowanie typu obiektu poprzez napisanie funkcji.
2.  Tworzenie jego instancji przy użyciu słowa kluczowego `new`.

Aby zdefiniować typ obiektu, stwórz funkcję dla tego typu, która określa jego nazwę i właściwości. Obiekt może mieć właściwość, której wartością jest on sam lub inny obiekt. Spójrz na przykłady poniżej

Kiedy wykonywaniy jest kod `new Foo(...)`, dzieją się następujące rzeczy:

1.  Tworzeny jest nowy obiekt, dzidziczący po `Foo.prototype`.
2.  Wywoływany jest konstruktor *`Foo`* z określonymi argumentami, a kontekst [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) zostaje przypisany do nowo utworzonego obiektu. `new Foo` jest równoznaczne z `new `_`Foo`_`()`, tzn. w przypadku gdy lista argumentów jst nieokreślona, *`Foo`* jest wywoływane bez argumentów.
3.  Obiekt zwrócony przez konstruktor staje się wynikiem całego wyrażenia `new`. Jeżeli konstruktor nie zwraca obiektu, obiekt stworzony w kroku 1 jest używany zamiast niego. (Zwykle kontruktory nie zwracają żadnej wartości, ale mogą tak czynić jeśli chcą nadpiać normalny proces tworzenia obiektu.)

Zawsze można dodać właściwość do wcześniej stworzonego obiektu. Na przykład, wyrażenie `car1.color = "black"` dodaje właściwość `color` do `car1`, przypisuje mu wartość "`black`". Jednakże, nie wpływa to w żaden sposób na inne obiekty. Aby dodać właściwość do wszystkich obiektów tego samego typu, trzeba dodać tę właściwość do definicji typu obiektu `Car`.

Można dodać wspólną właściwość do wcześniej zdefiniowanego typu obiektu korzystając z właściwości [`Function.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype). Definiuje ona wspólną właściwość dla wszystkich obiektów tego typu, a nie charakterystyczną dla instancji typu obiektu. Następujący kod dodaje właściwość `color` o wartości `null` do wszystkich obiektów typu `Car`, a następnie znienia tę wartość tylko w obiekcie `car1` na łańcuch "`black`" . Po więcej informacji, zobacz [prototype](/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype).

```js
function Car() {}
car1 = new Car();

console.log(car1.color);    // undefined

Car.prototype.color = null;
console.log(car1.color);    // null

car1.color = 'black';
console.log(car1.color);   // black
```

## Przykłady

### Typ obiektu i jego instancja

Przypuśćmy, że chcesz stworzyś typ obiektu dla aut. Chcesz, żeby był nazwany `car` i by miał właściwości `make`, `model` i `year`. Żeby to osiągnąć należy stworzyć następującą funkcję:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Teraz można stworzyć obiekt `mycar`:

```js
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```

Powyższy kod deklaruje zmienną `mycar` i przypisuje do niej określone właściwości. Wartość `mycar.make` to łańcuch "Eagle", `mycar.year` to liczba 1993 itd.

Można stworzyć nieograniczoną ilość obiektów `Car` poprzez słowo kluczowe `new`. Na przykład:

```js
var kenscar = new Car('Nissan', '300ZX', 1992);
```

### Właściwość obiektu, będąca innym obiektem

Przypuśćmy, że definiujemy typ obiektu `Person` jak poniżej:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

A następnie tworzymy dwa obiekty `Person`:

```js
var rand = new Person('Rand McNally', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
```

Teraz możemy przepisać definicję `Car` tak, by zawierała właściwość `owner`, która przyjmuje obiekt:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Aby utworzyć nowe obiekty, należy napisać:

```js
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
```

Zamiast przekazywania wartości liczbowych lub łańcuchów znaków, w powyższym przykładzie przekazywane są obiekty: `rand` oraz `ken`. Aby uzyskać imię właściciela samochodu `car2`, należy napisać:

```js
car2.owner.name
```

## Specyfikacje

| Specifikacja                                                                         | Status                       | Komentarz                                              |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-new-operator', 'The new Operator')}} | {{Spec2('ESDraft')}} |                                                        |
| {{SpecName('ES6', '#sec-new-operator', 'The new Operator')}}     | {{Spec2('ES6')}}         |                                                        |
| {{SpecName('ES5.1', '#sec-11.2.2', 'The new Operator')}}         | {{Spec2('ES5.1')}}     |                                                        |
| {{SpecName('ES3', '#sec-11.2.2', 'The new Operator')}}             | {{Spec2('ES3')}}         |                                                        |
| {{SpecName('ES1', '#sec-11.2.2', 'The new Operator')}}             | {{Spec2('ES1')}}         | Wstępna definicja. Zaimpelementowano w JavaScript 1.0. |

## Wsparcie przeglądarek

{{Compat("javascript.operators.new")}}

## Zobacz też

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object.prototype")}}
