---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
---

{{JSRef}} {{non-standard_header}}

標準外の **`lastParen`** プロパティは静的かつ読み取り専用の正規表現のプロパティで、最後に一致した括弧で括られた部分文字列を含みます。 `RegExp.$+` はこのプロパティに対するエイリアスです。

## 解説

`lastParen` プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。常に、 `RegExp.lastParen` または `RegExp['$+']` として使用してください。

`lastParen` プロパティの値は読み取り専用で、一致に成功するたびに変更されます。

ドットプロパティアクセサー (`RegExp.$+`) で短縮エイリアスを使用することはできません。その場合、パーサーは "+" という表現を期待して {{jsxref("SyntaxError")}} が発生します。[プロパティへのアクセスにはブラケット表記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用してください。

## 例

### lastMatch と $+ の使用

```js
var re = /(hi)/g;
re.test('hi there!');
RegExp.lastParen; // "hi"
RegExp['$+'];     // "hi"
```

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.lastParen")}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
