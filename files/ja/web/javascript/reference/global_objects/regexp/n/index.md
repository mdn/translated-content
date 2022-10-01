---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
---

{{JSRef}}

旧来の **$1, $2, $3, $4, $5, $6, $7, $8, $9** プロパティは、正規表現の静的かつ読み取り専用プロパティで、括弧で括られた部分文字列に一致したものを含みます。

## 解説

$1, ..., $9 プロパティは静的です。個々の正規表現オブジェクトのプロパティではありません。そのため、常に `RegExp.$1`, ..., `RegExp.$9`として使用してください。

これらのプロパティの値は読み取り専用で、一致に成功するたびに変更されます。

括弧で括られた部分文字列の数に制限はありませんが、 `RegExp` オブジェクトは最初の 9 つの部分文字列しか保持できません。返された配列の添字を使用すると、すべての括弧付き部分文字列にアクセスすることができます。

これらのプロパティは、 {{jsxref("String.replace")}} メソッドの置換テキストで使用することができます。この方法で使用する場合は、これらのプロパティの前に RegExp を付けないでください。以下の例は、これを示しています。正規表現に括弧が含まれていない場合、スクリプトは `$n` を文字通り解釈します (ここで `n` は正の整数です)。

## 例

### $n を String.replace で使用

次のスクリプトは、 {{jsxref("String")}} インスタンスの {{jsxref("String.prototype.replace()", "replace()")}} メソッドを使用して、名前を _first last_ の形式で一致させ、 _last, first_ の形式で出力します。置換テキストでは、スクリプトは `$1` と `$2` を使用して、正規表現パターンで対応する一致する括弧の結果を示しています。

```js
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

次のスクリプトは、 {{jsxref("RegExp")}} インスタンスの {{jsxref("RegExp.prototype.test()", "test()")}} メソッドを使用して、一般的な文字列で数値を取得しています。

```js
var str = 'Test 24';
var number = /(\d+)/.test(str) ? RegExp.$1 : '0';
number; // "24"
```

`re.test(str)` 呼び出しと `RegExp.$n` プロパティの間で他の正規表現を使用する操作は、副作用がある可能性があることに注意してください。そのため、これらの特殊なプロパティへのアクセスは即座に行うべきで、そうしないと予期せぬ結果になる可能性があります。

## 仕様書

| 仕様書                                               |
| ---------------------------------------------------- |
| {{SpecName('Legacy RegExp features')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.n")}}

## 関連情報

- {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
