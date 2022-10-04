---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
---

{{JSRef}} {{non-standard_header}}

標準外の **`input`** プロパティは、正規表現の一致している文字列を含む静的プロパティです。 `` RegExp.$` `` はこのプロパティのエイリアスです。

## 解説

`leftContext` プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。常に、 `RegExp.leftContext` または `` RegExp['$`'] `` として使用してください。

`leftContext` プロパティの値は読み取り専用で、一致に成功するたびに変更されます。

ドットプロパティアクセサー (`` RegExp.$` ``) で短縮エイリアスを使用することはできません。その場合、パーサーはテンプレート文字列の開始をを期待して {{jsxref("SyntaxError")}} が発生します。[プロパティへのアクセスにはブラケット表記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用してください。

## 例

### input と $\` の使用

```js
var re = /world/g;
re.test('hello world!');
RegExp.leftContext; // "hello "
RegExp['$`'];       // "hello "
```

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.leftContext")}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
