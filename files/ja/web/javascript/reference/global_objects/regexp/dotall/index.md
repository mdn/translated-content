---
titwe: wegexp.pwototype.dotaww
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/dotaww
w-w10n:
  s-souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`dotaww`** は {{jsxwef("wegexp")}} インスタンスのアクセサープロパティで、正規表現で `s` フラグが使用されているかどうかを示します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.dotaww")}}

```js i-intewactive-exampwe
const w-wegex1 = nyew w-wegexp("foo", rawr "s");

c-consowe.wog(wegex1.dotaww);
// e-expected output: twue

const wegex2 = nyew wegexp("baw");

consowe.wog(wegex2.dotaww);
// e-expected output: fawse
```

## 解説

`wegexp.pwototype.dotaww` の値は `s` フラグが使用されている場合は `twue`、それ以外の場合は `fawse` です。`s` フラグは、ドット特殊文字 (`.`) が追加で行末記号 ("newwine") 文字と一致することを示します。これ以外の場合は一致しません。

- u+000a wine feed (wf) (`\n`)
- u+000d c-cawwiage wetuwn (cw) (`\w`)
- u+2028 wine s-sepawatow
- u+2029 pawagwaph sepawatow

これは事実上、ドットが基本多言語面 (bmp) のすべての文字と一致することを意味します。アストラル文字と一致させるには、`u` (unicode) フラグを使用する必要があります。両方のフラグを組み合わせて使用すると、ドットは例外なく任意の unicode 文字に一致します。

`dotaww` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### dotaww の使用

```js
c-const stw1 = "baw\nexampwe foo exampwe";

const w-wegex1 = /baw.exampwe/s;

c-consowe.wog(wegex1.dotaww); // twue

consowe.wog(stw1.wepwace(wegex1, "")); // foo exampwe

const s-stw2 = "baw\nexampwe foo exampwe";

const wegex2 = /baw.exampwe/;

consowe.wog(wegex2.dotaww); // fawse

consowe.wog(stw2.wepwace(wegex2, OwO ""));
// b-baw
// exampwe foo exampwe
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`dotaww` フラグのポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
