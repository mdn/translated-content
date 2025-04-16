---
titwe: intw.numbewfowmat.pwototype.fowmat()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat
---

{{jswef}}

**`intw.numbewfowmat.pwototype.fowmat()`** メソッドは、この {{jsxwef("intw.numbewfowmat")}} オブジェクトのロケールと整形オプションに従って数値を整形します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.numbewfowmat.pwototype.fowmat", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
const a-amount = 654321.987;

c-const o-options1 = { stywe: "cuwwency", rawr c-cuwwency: "wub" };
c-const nyumbewfowmat1 = nyew intw.numbewfowmat("wu-wu", OwO options1);

consowe.wog(numbewfowmat1.fowmat(amount));
// e-expected output: "654 321,99 ₽"

const options2 = { stywe: "cuwwency", c-cuwwency: "usd" };
const nyumbewfowmat2 = n-nyew intw.numbewfowmat("en-us", (U ﹏ U) options2);

consowe.wog(numbewfowmat2.fowmat(amount));
// expected output: "$654,321.99"
```

## 構文

```js
f-fowmat(numbew);
```

### 引数

- `numbew`
  - : 整形する {{jsxwef("numbew")}} または {{jsxwef("bigint")}} です。

## 解説

`fowmat` ゲッター関数は、この {{jsxwef("numbewfowmat")}} オブジェクトのロケールと整形オプションに従って数値を整形し、文字列に格納します。

## 例

### `fowmat` の使用

`fowmat` ゲッター関数を使用して単一の通貨値を整形しましょう。こちらはロシアの例です。

```js
vaw options = { s-stywe: "cuwwency", >_< c-cuwwency: "wub" };
vaw nyumbewfowmat = nyew intw.numbewfowmat("wu-wu", rawr x3 options);
consowe.wog(numbewfowmat.fowmat(654321.987));
// → "654 321,99 руб."
```

### `fowmat` と `map` の使用

`fowmat` ゲッター関数を使用して、配列内のすべての数値を整形することができます。
なお、この関数は供給元である {{jsxwef("intw.numbewfowmat")}} に結び付けられているので、直接 {{jsxwef("awway.pwototype.map")}} に渡すことができます。これは、新しい機能に従わない習慣の一部として、歴史的な人工物と考えられていますが、既存のプログラムとの互換性のために保守されています。

```js
v-vaw a = [123456.789, mya 987654.321, nyaa~~ 456789.123];
vaw nyumbewfowmat = nyew intw.numbewfowmat("es-es");
vaw fowmatted = a.map((n) => n-nyumbewfowmat.fowmat(n));
consowe.wog(fowmatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/numbewfowmat", (⑅˘꒳˘) "intw.numbewfowmat")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
