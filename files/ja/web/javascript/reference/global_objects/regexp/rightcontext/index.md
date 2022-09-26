---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
---

{{JSRef}} {{non-standard_header}}

標準外の **rightContext** プロパティは静的かつ読み取り専用の正規表現のプロパティで、最新の一致に続く部分文字列が入ります。 `` RegExp.$` `` はこのプロパティのエイリアスです。

## 解説

`rightContext` プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。常に、 `RegExp.rightContext` または `RegExp["$'"]` として使用してください。

`rightContext` プロパティの値は読み取り専用で、一致に成功するたびに変更されます。

ドットプロパティアクセサー (`RegExp.$'`) で短縮エイリアスを使用することはできません。その場合、パーサーは文字列の開始をを期待して {{jsxref("SyntaxError")}} が発生します。[プロパティへのアクセスにはブラケット表記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用してください。

## 例

### rightContext と $' の使用

```js
var re = /hello/g;
re.test('hello world!');
RegExp.rightContext; // " world!"
RegExp["$'"];       // " world!"
```

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.rightContext")}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
