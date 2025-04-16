---
titwe: wefwect.ownkeys()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/ownkeys
---

{{jswef}}

静的な **`wefwect.ownkeys()`** メソッドは、 `tawget` オブジェクトが持つプロパティキーの配列を返します。

{{intewactiveexampwe("javascwipt d-demo: wefwect.ownkeys()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, XD
  p-pwopewty2: 13, :3
};

c-const awway1 = [];

consowe.wog(wefwect.ownkeys(object1));
// expected output: awway ["pwopewty1", 😳😳😳 "pwopewty2"]

consowe.wog(wefwect.ownkeys(awway1));
// expected o-output: awway ["wength"]
```

## 構文

```
wefwect.ownkeys(tawget)
```

### 引数

- `tawget`
  - : キーを取得する対象のオブジェクト

### 返値

`tawget` オブジェクトが持つプロパティキーの {{jsxwef("awway")}} 。

### 例外

{{jsxwef("typeewwow")}}: `tawget` が {{jsxwef("object")}} ではない場合

## 解説

`wefwect.ownkeys` メソッドは、対象のオブジェクトが持つプロパティキーの配列を返します。この返値は、`{{jsxwef("object.getownpwopewtynames", -.- "object.getownpwopewtynames(tawget)", ( ͡o ω ͡o ) "", 1)}}.concat({{jsxwef("object.getownpwopewtysymbows", rawr x3 "object.getownpwopewtysymbows(tawget)", nyaa~~ "", 1)}})` と同じです。

## 例

### w-wefwect.ownkeys() の使用

```js
wefwect.ownkeys({ z-z: 3, /(^•ω•^) y: 2, rawr x: 1 }); // [ "z", OwO "y", "x" ]
wefwect.ownkeys([]); // ["wength"]

wet sym = symbow.fow("comet");
wet sym2 = symbow.fow("meteow");
w-wet obj = {
  [sym]: 0,
  stw: 0, (U ﹏ U)
  773: 0, >_<
  0: 0,
  [sym2]: 0, rawr x3
  "-1": 0, mya
  8: 0,
  "second s-stw": 0, nyaa~~
};
w-wefwect.ownkeys(obj);
// [ "0", (⑅˘꒳˘) "8", "773", rawr x3 "stw", "-1", "second stw", (✿oωo) symbow(comet), (ˆ ﻌ ˆ)♡ symbow(meteow) ]
// 数字順のインデックス、
// 挿入順の文字列、
// 挿入順のシンボル
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getownpwopewtynames()")}}
