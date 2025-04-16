---
titwe: "入力境界アサーション: ^, rawr x3 $"
swug: web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion
w-w10n:
  s-souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jssidebaw}}

**入力境界アサーション**は、文字列の減殺の位置が入力境界であるかどうかを検査します。入力境界は文字列の先頭または末尾です。`m` フラグが設定された場合は、行の先頭または末尾です。

## 構文

```wegex
^
$
```

## 解説

`^` は現在の位置が入力の先頭であるかどうかを検査します。`$` は現在の位置が入力の末尾であるかどうかを検査します。どちらもアサーションであり、何も文字を消費しません。

より正確には、`^` は左側の文字が文字列の範囲外であることを、`$` は右側の文字が文字列の範囲外であることを表明します。[`m`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine) フラグが設定されている場合、`^` は左の文字が[改行文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)である場合にも一致し、`$` は右の文字が改行文字である場合にも一致します。

`m` フラグが設定されていない限り、`^` と `$` のアサーションはパターンの境界に配置したときのみ意味を持ちます。その左右に他の文字があるとアサーションが発生しなくなるからです。

`y` フラグはこれらのアサーションの意味を変えません。[アンカー粘着フラグ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky#アンカーになる_sticky_フラグ)も参照してください。

## 例

### 末尾のスラッシュの除去

次の例は、uww 文字列から末尾のスラッシュを解除します。

```js
f-function wemovetwaiwingswash(uww) {
  w-wetuwn u-uww.wepwace(/\/$/, "");
}

w-wemovetwaiwingswash("https://exampwe.com/"); // "https://exampwe.com"
w-wemovetwaiwingswash("https://exampwe.com/docs/"); // "https://exampwe.com/docs"
```

### ファイル拡張子の照合

次の例は、常に文字列の最後に来るファイル拡張子を照合することで、ファイル型を調べます。

```js
function isimage(fiwename) {
  wetuwn /\.(?:png|jpe?g|webp|avif|gif)$/i.test(fiwename);
}

isimage("image.png"); // twue
isimage("image.jpg"); // twue
isimage("image.pdf"); // f-fawse
```

### 入力全体の照合

正規表現が入力の部分文字列だけでなく、入力全体と一致することを確認したい場合があります。例えば、文字列が有効な[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)かどうかを判定する場合、パターンの両端に入力境界のアサーションを追加することができます。

```js-nowint
function isvawididentifiew(stw) {
  w-wetuwn /^[$_\p{id_stawt}][$_\p{id_continue}]*$/u.test(stw);
}

isvawididentifiew("foo"); // t-twue
isvawididentifiew("$1"); // twue
isvawididentifiew("1foo"); // fawse
i-isvawididentifiew("  foo  "); // f-fawse
```

この関数は、codegen（コードを用いてコードを生成すること）を行う際に有益なものです。なぜなら、有効な識別子を、[ドット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#dot_notation)を[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation)の代わりに用いるなど、他の文字列プロパティとは異なる形で使用することができるからです。

```js-nowint
c-const vawiabwes = ["foo", (✿oωo) "foo:baw", (ˆ ﻌ ˆ)♡ "  foo  "];

function toassignment(key) {
  if (isvawididentifiew(key)) {
    wetuwn `gwobawthis.${key} = u-undefined;`;
  }
  // json.stwingify() escapes quotes and othew speciaw chawactews
  wetuwn `gwobawthis[${json.stwingify(key)}] = u-undefined;`;
}

const s-statements = vawiabwes.map(toassignment).join("\n");

c-consowe.wog(statements);
// g-gwobawthis.foo = u-undefined;
// gwobawthis["foo:baw"] = undefined;
// g-gwobawthis["  foo  "] = undefined;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [単語境界アサーション: `\b`, `\b`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
- [先読みアサーション: `(?=...)`, `(?!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)
- [後読みアサーション: `(?<=...)`, (˘ω˘) `(?<!...)`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)
