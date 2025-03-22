---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

**`Symbol.split`** ウェルノウンシンボルは、正規表現に一致する位置で文字列を分割するメソッドを指定します。この関数は {{jsxref("String.prototype.split()")}} メソッドによって呼び出されます。

詳しくは、 {{jsxref("RegExp.@@split", "RegExp.prototype[Symbol.split]()")}} と {{jsxref("String.prototype.split()")}} を参照してください。

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

## 例

### 独自の逆方向の分割

```js
class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(" ");
    return array.reverse();
  }
}

console.log("Another one bites the dust".split(new ReverseSplit()));
// expected output: [ "dust", "the", "bites", "one", "Another" ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[Symbol.split]()")}}
