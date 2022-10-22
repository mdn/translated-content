---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
---

{{JSRef}} {{non-standard_header}}

標準外の **`input`** プロパティは正規表現の一致している文字列を含む静的プロパティです。 `RegExp.$_` はこのプロパティのエイリアスです。

## 解説

`input` プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。常に、 `RegExp.input` または `RegExp.$_.` として使用してください。

**`input`** プロパティの値は、正規表現の検索文字列が変更され文字列が一致しているときはいつでも変更されます。

## Examples

### input と $\_ の使用

```js
var re = /hi/g;
re.test('hi there!');
RegExp.input;         // "hi there!"
re.test('foo');       // new test, non-matching
RegExp.$_;            // "hi there!"
re.test('hi world!'); // new test, matching
RegExp.$_;            // "hi world!"
```

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.lastMatch")}}

## 関連情報

- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{jsxref("RegExp.n", "RegExp.$1-$9")}}
