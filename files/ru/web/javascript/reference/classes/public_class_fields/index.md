---
title: Публичные поля классов
slug: Web/JavaScript/Reference/Classes/Public_class_fields
---

{{JsSidebar("Classes")}}

> **Примечание:** Эта страница описывает экспериментальные возможности.
>
> Публичные и приватные поля — это [экспериментальная функция (stage
> 3\)](https://github.com/tc39/proposal-class-fields), предложенная комитетом по стандарту JavaScript [TC39](https://tc39.es/).
>
> Поддержка этой возможности в браузерах ограничена, но ее можно использовать посредством транспилирования с такими системами как [Babel](https://babeljs.io/). Смотрите [информацию о совместимости](#browser_compatibility) ниже.

И статические, и публичные поля являются изменяемыми, перечисляемыми, настраиваемыми свойствами. Таким образом, в отличие от приватных полей, они участвуют в прототипном наследовании.

## Синтаксис

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

## Примеры

### Публичные статические поля

Публичные статические поля полезны тогда, когда необходимо существование одного единственного поля для всего класса, а не для каждого созданного экземпляра по отдельности. Это полезно для кеша, конфигураций или любых прочих данных, которые одинаковы для всех экземпляров.

Публичные статические поля объявляются при помощи ключевого слова `static`. Они добавляются в конструктор класса во время его создания с помощью {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Доступ также осуществляется через конструктор класса.

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// Ожидаемый вывод: "static field"
```

Поля без инициализации имеют значение `("javascript.classes")`.

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty("staticField"));
console.log(ClassWithStaticField.staticField);
// Ожидаемый вывод: "undefined"
```

Публичные статические поля не переопределяются в наследниках класса, а могут быть доступны через иерархию прототипов.

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// Ожидаемый вывод: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// Ожидаемый вывод: "base field"
```

При определении полей `this` ссылается на конструктор класса. Также можно обратиться к нему по имени и использовать `super` для получения конструктора базового класса, если он существует.

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// Ожидаемый вывод: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// Ожидаемый вывод: "base static method output"
```

### Публичные поля экземпляра

Такие публичные поля имеются у каждого экземпляра данного класса. Объявляя публичные поля, мы можем гарантировать, что поле всегда присутствует, а объявление класса является более самодокументированным.

Публичные поля экземпляра добавляются через {{jsxref("Global_Objects/Object/defineProperty",
  "Object.defineProperty()")}} либо перед тем, как будет исполнено тело конструктора в базовом классе, либо после того, как завершится `super()` в классе наследнике.

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// Ожидаемый вывод: "instance field"
```

Поля без инициализации имеют значение `undefined`.

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty("instanceField"));
console.log(instance.instanceField);
// Ожидаемый вывод: "undefined"
```

Как и свойства, названия полей могут вычисляться.

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// Ожидаемый вывод: "prefixed field"
```

При определении полей `this` ссылается на создающийся экземпляр класса. Как и в публичных методах экземпляра, получить доступ к прототипу базового класса можно с помощью `super`.

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// Ожидаемый вывод: "base field"

console.log(sub.subInstanceField);
// Ожидаемый вывод: "base method output"
```

## Публичные методы

### Публичные статические методы

Ключевое слово **`static`** объявляет статический метод класса. Статические методы не вызываются из экземпляра, вместо этого они вызывается из самого класса. Чаще всего это какие-либо служебные функции, такие как функции создания или копирования объектов.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

Статические методы добавляются в конструктор класса с помощью {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} во время его создания. Эти методы - изменяемые, неперечисляемые и настраиваемые свойства объекта.

### Публичные методы экземпляра

Как и следует из названия, публичные методы экземпляра это методы, доступные для вызова из экземпляров.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// Ожидаемый вывод: "hello world"
```

Публичные методы добавляются в прототип класса во время его создания с помощью {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Они изменяемы, неперечисляемы и настраиваемы.

Вы можете использовать генераторы, асинхронные функции и асинхронные генераторы.

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

Внутри методов экземпляра, `this` ссылается на сам экземпляр.
В классах наследниках, `super` даёт доступ к прототипу базового класса, позволяя вызывать его методы.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// Ожидаемый вывод: "hello world"
```

Геттеры и сеттеры это специальные методы, которые привязаны к свойствам класса и которые вызываются, когда к свойству обращаются или записывают. Используйте [get](/ru/docs/Web/JavaScript/Reference/Functions/get) и [set](/ru/docs/Web/JavaScript/Reference/Functions/set) для объявления публичных геттеров и сеттеров экземпляра.

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// Ожидаемый вывод: "hello world"

instance.msg = "cake";
console.log(instance.msg);
// Ожидаемый вывод: "hello cake"
```

## Спецификации

{{Specifications("javascript.classes")}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [Публичные и приватные поля классов](https://v8.dev/features/class-fields) статья на сайте v8.dev.
- [Объявление полей класса в JavaScript](https://github.com/tc39/proposal-class-fields#class-field-declarations-for-javascript), от авторов [Публичных и приватных полей экземпляра](https://github.com/tc39/proposal-class-fields)
- [Семантика всех элементов JS класса](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
