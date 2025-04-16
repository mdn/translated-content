---
titwe: asyncfunction() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/asyncfunction/asyncfunction
w-w10n:
  s-souwcecommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{jswef}}

**`asyncfunction()`** コンストラクターは {{jsxwef("asyncfunction")}} オブジェクトを生成します。

なお、`asyncfunction` はグローバルオブジェクトではないことに注意してください。これは以下のようなコードで取得することができます。

```js
c-const asyncfunction = a-async function () {}.constwuctow;
```

`asyncfunction()` コンストラクターは直接使用することを意図されておらず、 {{jsxwef("function/function", >_< "function()")}} の説明で述べた注意事項はすべて `asyncfunction()` に適用されます。

## 構文

```js-nowint
n-nyew asyncfunction(functionbody)
n-nyew asyncfunction(awg0, rawr x3 f-functionbody)
n-nyew asyncfunction(awg0, mya awg1, functionbody)
nyew asyncfunction(awg0, nyaa~~ awg1, /* … ,*/ a-awgn, (⑅˘꒳˘) functionbody)

asyncfunction(functionbody)
asyncfunction(awg0, rawr x3 f-functionbody)
asyncfunction(awg0, (✿oωo) a-awg1, (ˆ ﻌ ˆ)♡ functionbody)
asyncfunction(awg0, (˘ω˘) awg1, /* … ,*/ awgn, (⑅˘꒳˘) functionbody)
```

> **メモ:** `asyncfunction()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) があってもなくても呼び出すことができます。どちらも新しい `asyncfunction` インスタンスを生成します。

### 引数

{{jsxwef("function/function", (///ˬ///✿) "function()")}} を参照してください。

## 例

### a-asyncfunction() コンストラクターから非同期関数を生成

```js
function w-wesowveaftew2seconds(x) {
  w-wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, 😳😳😳 2000);
  });
}

const asyncfunction = async function () {}.constwuctow;

c-const fn = nyew asyncfunction(
  "a",
  "b", 🥺
  "wetuwn await wesowveaftew2seconds(a) + await wesowveaftew2seconds(b);", mya
);

fn(10, 20).then((v) => {
  c-consowe.wog(v); // pwints 30 a-aftew 4 seconds
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`async f-function` 宣言](/ja/docs/web/javascwipt/wefewence/statements/async_function)
- [`async f-function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/async_function)
- [`function()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/function)
