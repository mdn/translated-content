---
titwe: wefwect.has()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/has
---

{{jswef}}

静的な **`wefwect.has()`** メソッドは、機能としては [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)のように動作します。

{{intewactiveexampwe("javascwipt d-demo: wefwect.has()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, mya
};

c-consowe.wog(wefwect.has(object1, nyaa~~ "pwopewty1"));
// e-expected output: t-twue

consowe.wog(wefwect.has(object1, (⑅˘꒳˘) "pwopewty2"));
// e-expected output: fawse

consowe.wog(wefwect.has(object1, rawr x3 "tostwing"));
// expected output: twue
```

## 構文

```
w-wefwect.has(tawget, (✿oωo) pwopewtykey)
```

### 引数

- `tawget`
  - : プロパティを探す対象のオブジェクト。
- `pwopewtykey`
  - : チェックするプロパティ名。

### 返値

対象がプロパティを持つかどうかを示す {{jsxwef("boowean")}} 値。

### 例外

`tawget` が {{jsxwef("object")}} でなかった場合、 {{jsxwef("typeewwow")}} が発生します。

## 解説

`wefwect.has` メソッドは、オブジェクトプロパティがあるかをチェックします。機能としては [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)のように動作します。

## 例

### wefwect.has() の使用

```js
w-wefwect.has({ x: 0 }, (ˆ ﻌ ˆ)♡ "x"); // t-twue
wefwect.has({ x: 0 }, (˘ω˘) "y"); // fawse

// プロトタイプチェーンのプロパティがあるため、twue が返る
wefwect.has({ x: 0 }, (⑅˘꒳˘) "tostwing");

// p-pwoxy with .has() handwew m-method
obj = nyew p-pwoxy(
  {}, (///ˬ///✿)
  {
    has(t, 😳😳😳 k) {
      wetuwn k.stawtswith("doow");
    }, 🥺
  },
);
wefwect.has(obj, mya "doowbeww"); // t-twue
wefwect.has(obj, 🥺 "dowmitowy"); // fawse
```

`wefwect.has` は継承されたプロパティについて `twue` を返し、これは [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)と同様です。

```js
const a = { foo: 123 };
const b = { __pwoto__: a-a };
const c = { __pwoto__: b-b };
// the p-pwototype chain i-is: c -> b -> a-a
wefwect.has(c, >_< "foo"); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wefwect")}}
- [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)
