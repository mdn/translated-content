---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
---

{{JSRef}}

**`sticky`** プロパティは、検索が粘着的 (sticky) である (文字列内の検索を、この正規表現の {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで示されたインデックスからのみ開始する) かどうかを表します。 `sticky` は個々の正規表現オブジェクトが持つ読み取り専用のプロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## 解説

`sticky` の値は {{jsxref("Boolean")}} で、 true ならば "`y`" フラグが使われており、 false はそれ以外を表します。 "`y`" フラグは対象文字列において、この正規表現の {{jsxref("RegExp.lastIndex", "lastIndex")}} プロパティで示されたインデックスからのみ一致することを示しています (そしてそれ以降のインデックスから一致を調べようとはしません)。 `sticky` と `global` の両方が定義された正規表現では、 `global` フラグは無視されます。

このプロパティを直接変更することはできません。これは読み取り専用です。

## 例

### sticky フラグのついた正規表現の使用

```js
var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex is taken into account with sticky flag)
regex.lastIndex; // 0 (reset after match failure)
```

### アンカーになる sticky フラグ

Firefox の SpiderMonkey エンジンのいくつかのバージョンでは `^` 指定に関する[バグ](https://bugzilla.mozilla.org/show_bug.cgi?id=773687)があり、 `^` アサーションで始まり、 sticky フラグを使うことで一致しない式を許可していました。このバグは Firefox 3.6 以降 (それ以前は sticky が実装されていてもバグはありませんでした) で発生し、2015 年に修正されました。 ES2015 の仕様では、おそらくこのバグのために、以下のとおり定められています。

> パターンとともに `y` フラグが使用された場合、 ^ は常に入力の始まりにのみ一致するか、 (`multiline` が `true` の場合) 最初の行に一致します。

以下は正しい挙動の例です。

```js
var regex = /^foo/y;
regex.lastIndex = 2;
regex.test('..foo');   // false - index 2 is not the beginning of the string

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test('..foo');  // false - index 2 is not the beginning of the string or line
regex2.lastIndex = 2;
regex2.test('.\nfoo'); // true - index 2 is the beginning of a line
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.sticky")}}

## 関連情報

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
