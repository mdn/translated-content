---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
---

{{JSRef}} {{non-standard_header}}

標準外の **lastMatch** プロパティは、最後に一致した文字列を含む正規表現の静的で読み取り専用のプロパティです。 `RegExp.$&` はこのプロパティに対するエイリアスです。

## 解説

`lastMatch` プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。そのかわりに、常に、`RegExp.lastMatch`または`RegExp['$&'].`として使用してください。

`lastMatch` プロパティの値は、読み取り専用で、一致に成功するたびに変更されます。

ドットプロパティアクセサー (`RegExp.$&`) で短縮エイリアスを使用することはできません。その場合、パーサーは "&" という表現を期待して {{jsxref("SyntaxError")}} が発生します。[プロパティへのアクセスにはブラケット表記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用してください。

## 例

### lastMatch と $& の使用

```js
var re = /hi/g;
re.test('hi there!');
RegExp.lastMatch; // "hi"
RegExp['$&'];     // "hi"
```

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.lastMatch")}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
