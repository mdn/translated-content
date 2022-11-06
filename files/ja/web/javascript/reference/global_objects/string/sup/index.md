---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
---

{{JSRef}} {{deprecated_header}}

**`sup()`** メソッドは、文字列が上付き文字として表示されるように HTML の {{HTMLElement("sup")}} 要素を生成します。

## 構文

```
str.sup()
```

### 返値

HTML の {{HTMLElement("sup")}} 要素を含む文字列です。

## 解説

`sup()` メソッドは、文字列を `<sup>` 要素の中に、 "`<sup>str</sup>`" のように埋め込みます。

## 例

### sub() および sup() メソッドの使用

以下の例は、 {{jsxref("String.prototype.sub()", "sub()")}} と `sup()` メソッドを使用して文字列を整形しています。

```js
var superText = '上付き文字';
var subText = '下付き文字';

console.log('これは' + superText.sup() + 'の見え方を示しています。');
// "これは<sup>上付き文字</sup>の見え方を示しています。"

console.log('これは' + subText.sub() + 'の見え方を示しています。');
// "これは<sub>下付き文字</sub>の見え方を示しています。"
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.sup', 'String.prototype.sup')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.sup")}}

## 関連情報

- {{jsxref("String.prototype.sub()")}}
