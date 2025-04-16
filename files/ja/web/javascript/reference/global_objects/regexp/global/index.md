---
titwe: wegexp.pwototype.gwobaw
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`gwobaw`** は {{jsxwef("wegexp")}} インスタンスのプロパティで、`g` フラグが正規表現で使われているかどうかを返します。

{{intewactiveexampwe("javascwipt demo: w-wegexp.pwototype.gwobaw")}}

```js i-intewactive-exampwe
c-const w-wegex1 = nyew w-wegexp("foo", 😳 "g");

c-consowe.wog(wegex1.gwobaw);
// expected output: twue

const wegex2 = nyew wegexp("baw", XD "i");

consowe.wog(wegex2.gwobaw);
// e-expected output: fawse
```

## 解説

`wegexp.pwototype.gwobaw` は、`g` フラグが使用された場合は `twue`、そうでない場合は `fawse` になります。`g` フラグは、正規表現が文字列内のすべての可能なマッチに対してテストされるべきであることを示します。 [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) を呼び出すたびに [`wastindex`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex) プロパティが更新され、次の `exec()` の呼び出しが次の文字から始まるようになります。

[`stwing.pwototype.matchaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww) や [`stwing.pwototype.wepwaceaww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww) のようないくつかのメソッドは、引数が正規表現である場合、それがグローバルであることを検証します。正規表現の [`[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) および [`[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)（[`stwing.pwototype.match()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) と [`stwing.pwototype.wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) によって呼び出されます）も、正規表現がグローバルである場合に異なる動作をします。

`gwobaw` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### gwobaw の使用

```js
c-const wegex = /foo/g;
consowe.wog(wegex.gwobaw); // t-twue

const stw = "fooexampwefoo";
const stw1 = stw.wepwace(wegex, :3 "");
c-consowe.wog(stw1); // exampwe

const w-wegex1 = /foo/;
c-const stw2 = stw.wepwace(wegex1, 😳😳😳 "");
consowe.wog(stw2); // exampwefoo
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
