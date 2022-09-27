---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
---

{{JSRef}}

**`dotAll`** プロパティは、正規表現で "`s`" フラグが使用されているかどうかを示します。 `dotAll` は、個々の正規表現インスタンスの読み取り専用プロパティです。

{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## 説明

dotAll の値は {{JSxRef("Boolean")}} であり、"`s`" フラグが使用されている場合は `true` 、それ以外の場合は `false` です。 "`s`" フラグは、ドット特殊文字 ("`.`") が以下に示す行末記号 ("`newline`") 文字と一致することを示します。これ以外の場合は一致しません:

- U+000A 改行 (LF) ("`\n`")
- U+000D キャリッジリターン (CR) ("`\r`")
- U+2028 ラインセパレーター
- U+2029 段落区切り文字

これは事実上、ドットが基本多言語面 (BMP) のすべての文字と一致することを意味します。 アストラル文字と一致させるには、"`u`" (ユニコード) フラグを使用する必要があります。 両方のフラグを組み合わせて使用すると、ドットは例外なく任意のユニコード文字に一致します。

このプロパティを直接変更することはできません。

## 例

### dotAll を使用する

```js
var str1 = 'bar\nexample foo example';

var regex1 = new RegExp('bar.example','s');

console.log(regex1.dotAll); // Output: true

console.log(str1.replace(regex1,'')); // Output: foo example

var str2 = 'bar\nexample foo example';

var regex2 = new RegExp('bar.example');

console.log(regex2.dotAll); // Output: false

console.log(str2.replace(regex2,'')); // Output: bar
                                      //         example foo example
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.dotAll', 'RegExp.prototype.dotAll')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.dotAll")}}

## 関連情報

- {{JSxRef("RegExp.lastIndex")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
