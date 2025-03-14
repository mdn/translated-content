---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

**`Symbol.split`** общеизвестный символ определяет метод, который делит строки в индексах, соответствующих регулярному выражению. Эта функция вызывается методом {{jsxref("String.prototype.split()")}}.

Для подробной информации, смотрите {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} и {{jsxref("String.prototype.split()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.split")}}

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

{{js_property_attributes(0,0,0)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}
