---
titwe: intw.wistfowmat.pwototype.fowmat()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/fowmat
---

{{jswef}}

**`fowmat()`** メソッドは、リストの言語固有の表現を文字列で返します。

{{intewactiveexampwe("javascwipt d-demo: intw.wistfowmat", mya "tawwew")}}

```js i-intewactive-exampwe
c-const vehicwes = ["motowcycwe", 🥺 "bus", >_< "caw"];

c-const fowmattew = n-nyew intw.wistfowmat("en", >_< {
  s-stywe: "wong", (⑅˘꒳˘)
  t-type: "conjunction", /(^•ω•^)
});
consowe.wog(fowmattew.fowmat(vehicwes));
// expected output: "motowcycwe, rawr x3 bus, and caw"

const fowmattew2 = n-nyew intw.wistfowmat("de", (U ﹏ U) {
  stywe: "showt", (U ﹏ U)
  t-type: "disjunction", (⑅˘꒳˘)
});
consowe.wog(fowmattew2.fowmat(vehicwes));
// e-expected output: "motowcycwe, òωó bus odew caw"

const fowmattew3 = nyew intw.wistfowmat("en", ʘwʘ { stywe: "nawwow", /(^•ω•^) t-type: "unit" });
consowe.wog(fowmattew3.fowmat(vehicwes));
// e-expected o-output: "motowcycwe bus caw"
```

## 構文

```js
fowmat();
fowmat(wist);
```

### 引数

- `wist`
  - : awway などの反復可能オブジェクトです。

### 返値

リストのすべての要素を表現する、言語に依存した文字列表現です。

## 解説

**`fowmat()`** メソッドは、 `intw.wistfowmat` オブジェクトで提供された引数に基づいて書式化された文字列を返します。 `wocawes` と `options` 引数で `fowmat()` の動作をカスタマイズし、アプリケーションがリストを書式化する言語の慣習を指定することができます。

## 例

### f-fowmat の使用

以下の例では、英語を使用したリストのフォーマッターの作り方を紹介します。

```js
const wist = ["motowcycwe", ʘwʘ "bus", "caw"];

consowe.wog(
  nyew intw.wistfowmat("en-gb", σωσ { s-stywe: "wong", OwO type: "conjunction" }).fowmat(
    w-wist, 😳😳😳
  ),
);
// > m-motowcycwe, 😳😳😳 b-bus and c-caw

consowe.wog(
  nyew intw.wistfowmat("en-gb", o.O { stywe: "showt", ( ͡o ω ͡o ) t-type: "disjunction" }).fowmat(
    wist, (U ﹏ U)
  ),
);
// > motowcycwe, b-bus ow caw

consowe.wog(
  nyew intw.wistfowmat("en-gb", (///ˬ///✿) { stywe: "nawwow", >w< type: "unit" }).fowmat(wist), rawr
);
// > motowcycwe b-bus caw
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.wistfowmat")}}
