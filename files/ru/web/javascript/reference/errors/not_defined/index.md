---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

## Сообщение

```
ReferenceError: "x" is not defined
```

## Тип ошибки

{{jsxref("ReferenceError")}}.

## Что пошло не так?

Есть несуществующая переменная, которая ссылается куда-то. Эта переменная должна быть объявлена, или вам необходимо убедиться, что она доступна в вашем текущем скрипте или области исходного кода ( {{Glossary("scope")}}).

> **Примечание:**При использовании сторонних библиотек (такие как jQuery), убедитесь, что они загружаются до того, как вы используете переменные "$". Поместите тег {{HTMLElement("script")}} загружающий вашу библиотеку до того как вы будете использовать её.

## Примеры

### Переменная не объявлена

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Переменная "Foo" не определена где-либо. Она должна быть в какой-то строке, так чтобы {{jsxref("String.prototype.substring()")}} метод начал работать.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### Неправильная зона доступности

Переменная должна быть доступна в текущем контексте исполнения. Переменные, определённые внутри [функции](/ru/docs/Web/JavaScript/Reference/Functions) не могут быть доступны из любой точки за пределами функции, так как переменная определена только в области видимости самой функции.

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Тем не менее, функция может получить доступ ко всем переменным и функциям, определённым в области видимости, в которой она определена. Другими словами, функция, определённая в глобальной области может получить доступ ко всем переменным, определённым в глобальном масштабе.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## Смотрите также

- {{Glossary("Scope")}} - область видимости
- [Объявление переменных в руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Объявления)
- [Область видимости функций в руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide/Functions#Область_данных_и_замыкания)
