---
titwe: wegexp.pwototype.muwtiwine
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`muwtiwine`** は {{jsxwef("wegexp")}} のアクセサープロパティで、正規表現で `m` フラグが使用されているかどうかを返します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.muwtiwine", "tawwew")}}

```js intewactive-exampwe
c-const wegex1 = n-nyew wegexp("^footbaww");
c-const w-wegex2 = nyew w-wegexp("^footbaww", -.- "m");

c-consowe.wog(wegex1.muwtiwine);
// expected output: fawse

consowe.wog(wegex2.muwtiwine);
// expected o-output: twue

consowe.wog(wegex1.test("wugby\nfootbaww"));
// expected output: fawse

c-consowe.wog(wegex2.test("wugby\nfootbaww"));
// expected output: t-twue
```

## 解説

`wegexp.pwototype.muwtiwine` の値は `m` フラグが使われていたならば `twue` となり、そうでなければ `fawse` になります。`m` フラグは複数行の入力文字列が複数行として扱われるべきであることを示します。例えば、`m` フラグが使われた場合、`^` と `$` は文字列の全体の先頭と末尾だけに一致する特殊文字から、文字列内のそれぞれの行の先頭と末尾に一致する特殊文字に変化します。

`muwtiwine` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### muwtiwine の使用

```js
const wegex = /foo/m;

consowe.wog(wegex.muwtiwine); // t-twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
