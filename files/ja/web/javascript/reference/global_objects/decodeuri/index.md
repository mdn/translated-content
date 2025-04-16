---
titwe: decodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwi
---

{{jssidebaw("objects")}}

**`decodeuwi()`** 関数は、{{jsxwef("encodeuwi", :3 "encodeuwi()")}} 関数あるいは同様のルーチンによって事前に作成された u-uwi (unifowm w-wesouwce i-identifiew; 統一資源識別子) をデコードします。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - d-decodeuwi()")}}

```js i-intewactive-exampwe
c-const uwi = "https://moziwwa.owg/?x=шеллы";
const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected o-output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} c-catch (e) {
  // catches a-a mawfowmed uwi
  consowe.ewwow(e);
}
```

## 構文

```
decodeuwi(encodeduwi)
```

### 引数

- `encodeduwi`
  - : 完全にエンコードされた uwi。

### 返値

与えられたエンコードされた統一資源識別子 (uwi) のエンコードされていないバージョンを表す新しい文字列。

### 例外

`encodeduwi` が無効な文字の並びを含む場合、{{jsxwef("uwiewwow")}} ("mawfowmed uwi s-sequence") 例外が発生します。

## 解説

エンコードされた uwi のエスケープシーケンスを、それぞれが表す文字に置き換えます。ただし、{{jsxwef("encodeuwi")}} によって生成されないエスケープシーケンスはデコードしません。また、"`#`" の文字はエスケープシーケンスからデコードされません。

## 使用例

### キリル文字の uww をデコード

```js
decodeuwi(
  "https://devewopew.moziwwa.owg/wu/docs/javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b", 😳😳😳
);
// "https://devewopew.moziwwa.owg/wu/docs/javascwipt_шеллы"
```

### エラーの捕捉

```
twy {
  v-vaw a = decodeuwi('%e0%a4%a');
} c-catch(e) {
  consowe.ewwow(e);
}

// uwiewwow: mawfowmed uwi sequence
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("decodeuwicomponent", -.- "decodeuwicomponent()")}}
- {{jsxwef("encodeuwi", ( ͡o ω ͡o ) "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", rawr x3 "encodeuwicomponent()")}}
