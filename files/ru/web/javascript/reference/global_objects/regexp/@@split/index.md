---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
---

{{JSRef}}

**`[@@split]()`** метод делит объект {{jsxref("String")}} в массив строк, путём разбиения строки на подстроки.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## Синтаксис

```
regexp[Symbol.split](str[, limit])
```

### Параметры

- `str`
  - : Цель разбиения.
- `limit`
  - : Необязательное. Целое число ограничивающее кол-во разбиений. `[@@split]()` метод разбивает все совпадения `this` RegExp шаблона, до тех пор пока не достигнет числа `limit` или строка будет короче `this` шаблона.

### Возвращаемое значение

{{jsxref("Array")}} содержит подстроки как элементы.

## Описание

Этот метод вызывает {{jsxref("String.prototype.split()")}}, если аргумент `separator` объект {{jsxref("RegExp")}}. Для примера, два данных выражения возвращают одинаковый результат.

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

Этот метод существует для кастомизации поведения (разбиения) подкласса `RegExp`.

Если аргумент `str` **не** объект типа {{jsxref("RegExp")}}, метод {{jsxref("String.prototype.split()")}} не вызывается, так же не создаётся объект типа {{jsxref("RegExp")}}.

## Примеры

### Прямой вызов

Этот метод может быть использован, так же как {{jsxref("String.prototype.split()")}}, кроме случаев когда `this` отличаются и аргументы идут в разном порядке.

```js
var re = /-/g;
var str = "2016-01-02";
var result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### Использование `@@split` в подклассах

Подклассы {{jsxref("RegExp")}} могут переопределить `[@@split]()` для изменения стандартного поведения.

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    var result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => "(" + x + ")");
  }
}

var re = new MyRegExp("-");
var str = "2016-01-02";
var result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## Specifications

| Specification                                                                         | Status               | Comment             |
| ------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}} | {{Spec2('ESDraft')}} |                     |

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.split()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
