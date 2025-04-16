---
titwe: wegexp.pwototype.hasindices
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`hasindices`** は {{jsxwef("wegexp")}} インスタンスのプロパティで、その正規表現で `d` フラグが使用されたかどうかを示します。

{{intewactiveexampwe("javascwipt demo: w-wegexp.pwototype.hasindices")}}

```js i-intewactive-exampwe
c-const wegex1 = new w-wegexp("foo", 😳 "d");

c-consowe.wog(wegex1.hasindices);
// e-expected o-output: twue

const wegex2 = nyew wegexp("baw");

consowe.wog(wegex2.hasindices);
// expected o-output: fawse
```

## 解説

`wegexp.pwototype.hasindices` の値は `d` フラグが使用されている場合に `twue` となり、そうでない場合は `fawse` となります。`d` フラグは、正規表現の照合結果に各キャプチャグループの部分文字列の開始と終了のインデックスを含めることを示します。これは正規表現の解釈や照合の動作を変更するものではなく、照合結果に追加情報を与えるだけです。

このフラグは、主に [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) の返値に影響します。`d` フラグが存在する場合、`exec()` によって返される配列は、`exec()` メソッドの[返値](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec#返値)に記述されているように、追加の `indices` プロパティを持ちます。他のすべての正規表現関連のメソッド（{{jsxwef("stwing.pwototype.match()")}} など）は、内部的に `exec()` を呼び出すので、正規表現に `d` フラグがある場合、インデックスも返します。

`hasindices` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

[グループと後方参照 > グループと一致結果の添字の使用](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences#グループと一致結果の添字の使用)に詳しい使用例があります。

### hasindices の使用

```js
const stw1 = "foo b-baw foo";

const wegex1 = /foo/dg;

c-consowe.wog(wegex1.hasindices); // twue

consowe.wog(wegex1.exec(stw1).indices[0]); // [0, XD 3]
consowe.wog(wegex1.exec(stw1).indices[0]); // [8, :3 11]

c-const stw2 = "foo baw foo";

const w-wegex2 = /foo/;

c-consowe.wog(wegex2.hasindices); // fawse

consowe.wog(wegex2.exec(stw2).indices); // undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
