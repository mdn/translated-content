---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
---

{{JSRef}}

Метод **`[@@search]()`** выполняет поиск совпадения между регулярным выражением `this` и строкой.

## Синтаксис

```
regexp[Symbol.search](str)
```

### Параметры

- `str`
  - : {{jsxref("String")}}, являющийся объектом поиска.

### Возвращаемое значение

- integer
  - : В случае успеха, `[@@search]()` вернёт индекс первого совпадения регулярного выражения внутри строки. В противном случае, он вернёт -1.

## Описание

Этот метод вызывается внутреннее в {{jsxref("String.prototype.search()")}}. Например, два следующих примера вернут один и тот же результат.

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

Этот метод существует для настройки поведения поиска в подклассах `RegExp`.

## Примеры

### Прямой вызов

Этот метод можно использовать почти так же, как {{jsxref("String.prototype.search()")}}, за исключением другого `this` и другого порядка аргументов.

```js
var re = /-/g;
var str = "2016-01-02";
var result = re[Symbol.search](str);
console.log(result); // 4
```

### Используя `@@search` в подклассах

Подкласс {{jsxref("RegExp")}} может быть перезаписан с помощью метода `[@@search]()` для изменения поведения.

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp("a+b");
var str = "ab a+b";
var result = str.search(re); // String.prototype.search calls re[@@search].
console.log(result); // 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.search()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
