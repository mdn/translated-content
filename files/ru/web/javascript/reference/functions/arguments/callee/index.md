---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
---

{{jsSidebar("Functions")}}

Свойство `callee псевдомассива arguments` хранит ссылку на функцию-родитель.

## Описание

> **Предупреждение:** **Внимание:** В ES5 [strict mode](/ru/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode) использование `arguments.callee` запрещено.

### Зачем вообще использовать `arguments.callee`?

В ранних версиях javaScript отсутствовала такая фишка, как [Named Function Expression](/ru/docs/Web/JavaScript/Reference/Operators/function#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) и единственным спасением было свойство **callee**. К примеру:

```js
var f = function test() {
  alert(typeof test); //undefined
  alert(typeof arguments.callee); //function
};
```

В нынешние времена, когда мы уже можем работать с _NFE_, надобность в использовании свойства **callee** сама собой отпадает**.**

```js
var f = function test() {
  alert(typeof test); //function
};
```

Действительно незаменимым оно остаётся всего в одной ситуации. Когда мы создаём анонимную функцию напрямую через конструктор _Function._

```js
var b = new Function("", "alert(typeof arguments.callee)");
```

## Пример использования

### Использование `arguments.callee` для создания рекурсии

```js
var factorial = function (n) {
  return n == 1 ? 1 : n * arguments.callee(n - 1);
};

factorial(7);
```

## Specifications

| Specification                                                                        | Status               | Comment                                           |
| ------------------------------------------------------------------------------------ | -------------------- | ------------------------------------------------- |
| {{SpecName('ES1')}}                                                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                               | {{Spec2('ES5.1')}}   |                                                   |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}     | {{Spec2('ES6')}}     |                                                   |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                   |

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function")}}
