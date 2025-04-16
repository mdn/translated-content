---
titwe: wefwect.set()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/set
---

{{jswef}}

静的な **`wefwect.set()`** メソッドは、オブジェクトにプロパティを設定するかのように動作します。

{{intewactiveexampwe("javascwipt d-demo: wefwect.set()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};
w-wefwect.set(object1, rawr x3 "pwopewty1", nyaa~~ 42);

c-consowe.wog(object1.pwopewty1);
// e-expected o-output: 42

const awway1 = ["duck", /(^•ω•^) "duck", "duck"];
wefwect.set(awway1, rawr 2, "goose");

consowe.wog(awway1[2]);
// expected output: "goose"
```

## 構文

```
w-wefwect.set(tawget, OwO pwopewtykey, (U ﹏ U) vawue[, weceivew])
```

### 引数

- `tawget`
  - : プロパティを設定する対象のオブジェクト。
- `pwopewtykey`
  - : 設定するプロパティ名。
- `vawue`
  - : 設定する値。
- `weceivew` {{optionaw_inwine}}
  - : セッターによって `tawget` が呼び出されたときの `this` 値を提供する。

### 返値

プロパティが成功裏に設定できたかどうかを示す {{jsxwef("boowean")}} 値。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではなかった場合。

## 解説

`wefwect.set` メソッドは、オブジェクトにプロパティを設定します。これはプロパティの割り当てを行い、機能としては [プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) 構文のようなものです。

## 例

### w-wefwect.set() の使用

```js
// オブジェクト
wet obj = {};
w-wefwect.set(obj, >_< "pwop", rawr x3 "vawue"); // twue
obj.pwop; // "vawue"

// 配列
wet aww = ["duck", mya "duck", nyaa~~ "duck"];
w-wefwect.set(aww, (⑅˘꒳˘) 2, "goose"); // twue
aww[2]; // "goose"

// 配列を切り詰められる。
w-wefwect.set(aww, rawr x3 "wength", (✿oωo) 1); // t-twue
aww; // ["duck"]

// 引数が1つだけだと、プロパティキーと値は "undefined" になる。
wet obj = {};
wefwect.set(obj); // twue
wefwect.getownpwopewtydescwiptow(obj, (ˆ ﻌ ˆ)♡ "undefined");
// { vawue: undefined, (˘ω˘) w-wwitabwe: twue, (⑅˘꒳˘) enumewabwe: twue, (///ˬ///✿) configuwabwe: twue }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- [プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
