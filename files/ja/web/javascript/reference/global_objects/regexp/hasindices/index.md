---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
tags:
  - Draft
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.hasIndices
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
---
{{JSRef}}

**`hasIndices`** プロパティは、その正規表現で "`d`" フラグが使用されたかどうかを示します。 `hasIndices` はそれぞれの正規表現インスタンスの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## 解説

`hasIndices` の値は論理型であり、 "`d`" フラグが使用された場合は `true` になります。それ以外の場合は `false` になります。 "`d`" フラグは正規表現による一致の結果に、各キャプチャグループの部分文字列の開始と終了の位置を含めることを示します。

このプロパティを直接変更することはできません。

## 例

### `hasIndices` の使用

```js
const str1 = 'foo bar foo';

const regex1 = new RegExp('foo', 'gd');

console.log(regex1.hasIndices); // 出力: true

console.log(regex1.exec(str1).indices[0]); // 出力: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // 出力: Array [8, 11]

const str2 = 'foo bar foo';

const regex2 = new RegExp('foo');

console.log(regex2.hasIndices); // 出力: false

console.log(regex2.exec(str2).indices); // 出力: undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.exec()")}}
- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
