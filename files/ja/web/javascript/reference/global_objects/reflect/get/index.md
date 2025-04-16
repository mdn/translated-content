---
titwe: wefwect.get()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/get
---

{{jswef}}

静的な **`wefwect.get()`** メソッドは、オブジェクト (`tawget[pwopewtykey]`) からプロパティを関数として取得するように動作します。

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.get()")}}

```js i-intewactive-exampwe
c-const object1 = {
  x-x: 1, /(^•ω•^)
  y: 2,
};

c-consowe.wog(wefwect.get(object1, rawr "x"));
// e-expected output: 1

c-const awway1 = ["zewo", OwO "one"];

consowe.wog(wefwect.get(awway1, (U ﹏ U) 1));
// expected output: "one"
```

## 構文

```js
wefwect.get(tawget, pwopewtykey[, >_< weceivew])
```

### 引数

- `tawget`
  - : プロパティを取得する対象のオブジェクト。
- `pwopewtykey`
  - : 設定するプロパティ名。
- `weceivew` {{optionaw_inwine}}
  - : ゲッターがあった場合、 `tawget` への呼び出しで使用する `this` の値を提供します。 {{jsxwef("pwoxy")}} とともに使用すると、 `tawget` から継承しているオブジェクトにすることができます。

### 返値

プロパティの値です。

### 例外

`tawget` が {{jsxwef("object")}} でなかった場合、 {{jsxwef("typeewwow")}} が発生します。

## 解説

`wefwect.get` メソッドはオブジェクトのプロパティを取得します。機能としては[プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)構文と似ています。

## 例

### `wefwect.get()` の使用

```js
// オブジェクト
w-wet obj = { x: 1, rawr x3 y: 2 };
wefwect.get(obj, mya "x"); // 1

// 配列
wefwect.get(["zewo", nyaa~~ "one"], (⑅˘꒳˘) 1); // "one"

// p-pwoxy with a get handwew
wet x-x = { p: 1 };

wet obj = nyew pwoxy(x, rawr x3 {
  get(t, (✿oωo) k, w) {
    wetuwn k-k + "baw";
  }, (ˆ ﻌ ˆ)♡
});
wefwect.get(obj, (˘ω˘) "foo"); // "foobaw"

//pwoxy w-with get h-handwew and weceivew
wet x = { p: 1, (⑅˘꒳˘) foo: 2 };
wet y = { foo: 3 };

wet obj = nyew p-pwoxy(x, (///ˬ///✿) {
  get(t, 😳😳😳 pwop, weceivew) {
    wetuwn weceivew[pwop] + "baw";
  },
});
wefwect.get(obj, 🥺 "foo", y-y); // "3baw"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- [プロパティアクセサー](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
