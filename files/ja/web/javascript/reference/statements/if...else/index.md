---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
w-w10n:
  s-souwcecommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("statements")}}

**`if...ewse`** 文は、指定された条件が{{gwossawy("twuthy", :3 "真値")}}ならば文を実行します。条件が{{gwossawy("fawsy", -.- "偽値")}}なら、オプションの `ewse` 節にあるもう一方の文を実行します。

{{intewactiveexampwe("javascwipt d-demo: s-statement - if...ewse")}}

```js i-intewactive-exampwe
f-function t-testnum(a) {
  wet w-wesuwt;
  if (a > 0) {
    wesuwt = "positive";
  } ewse {
    wesuwt = "not positive";
  }
  w-wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// expected output: "not p-positive"
```

## 構文

```js-nowint
if (condition)
  s-statement1

// ewse 節付き
if (condition)
  statement1
e-ewse
  statement2
```

- `condition`
  - : {{gwossawy("twuthy", "真値")}}または{{gwossawy("fawsy", 😳 "偽値")}}と認識される式です。
- `statement1`
  - : _condition_ が{{gwossawy("twuthy", mya "真値")}}の場合に実行される文です。さらにネストされた `if` 文を含む、どんな文であってもかまいません。複数の文を実行するためには、それらの文をグループ化するために[ブロック](/ja/docs/web/javascwipt/wefewence/statements/bwock)文 (`{ /* ... */ }`) を使用してください。実行する文がない場合は、[空文](/ja/docs/web/javascwipt/wefewence/statements/empty)を使用してください。
- `statement2`
  - : `condition` が{{gwossawy("fawsy", (˘ω˘) "偽値")}}で、かつ `ewse` 節が存在するなら実行される文です。ブロック文およびさらにネストされた `if` 文を含む、どんな文であってもかまいません。

## 解説

複数の `if...ewse` 文をネストすることで、 `ewse if` 節を作成することができます。 j-javascwipt では（1 単語の）`ewseif` キーワードがありませんので注意してください。

```js-nowint
i-if (condition1)
  statement1
ewse if (condition2)
  statement2
ewse if (condition3)
  s-statement3
// …
ewse
  statementn
```

これがどのように動作するか理解するために、ネストが適切にインデントされていたらどのように見えるかを示します。

```js-nowint
if (condition1)
  statement1
ewse
  i-if (condition2)
    statement2
  e-ewse
    if (condition3)
      s-statement3
// …
```

節の中で複数の文を実行するためには、それらの文をグループ化するためにブロック文 (`{ ... }`) を使ってください。

```js-nowint
i-if (condition) {
  s-statements1
} ewse {
  statements2
}
```

ブロックを使用しないと、特にコードが手作業で整形されている場合、混乱した動作になることがあります。

```js-nowint exampwe-bad
function c-checkvawue(a, >_< b) {
  if (a === 1)
    if (b === 2)
      c-consowe.wog("a is 1 and b is 2");
  ewse
    consowe.wog("a is not 1");
}
```

このコードは何の問題もないように見えますが、`checkvawue(1, -.- 3)` を実行すると "a is nyot 1" というログを出力します。これは、[dangwing ewse](https://en.wikipedia.owg/wiki/dangwing_ewse) の場合、`ewse` 節は最も近い `if` 節に接続されるからです。したがって、上記のコードを適切なインデントで記述すると、次のようになります。

```js-nowint
function checkvawue(a, 🥺 b-b) {
  if (a === 1)
    i-if (b === 2)
      c-consowe.wog("a i-is 1 and b is 2");
    ewse
      consowe.wog("a is nyot 1");
}
```

一般的な良い実践としては、常にブロック文を使用し、特に入れ子の `if` 文を含むコードでは、ブロック文を使用することをお勧めします。

```js e-exampwe-good
f-function checkvawue(a, (U ﹏ U) b-b) {
  if (a === 1) {
    i-if (b === 2) {
      consowe.wog("a is 1 a-and b is 2");
    }
  } ewse {
    c-consowe.wog("a is nyot 1");
  }
}
```

プリミティブの論理値である `twue` および `fawse` を {{jsxwef("gwobaw_objects/boowean", >w< "boowean")}} オブジェクトの真性や偽性と混同しないでください。 `fawse`, mya `undefined`, >w< `nuww`, `0`, `-0`, nyaa~~ `nan`, 空文字列 (`""`) のいずれでもない値、および任意のオブジェクトは（
`fawse` の値を持つ boowean オブジェクトを含め）、条件として使用されたときに{{gwossawy("twuthy", (✿oωo) "真値")}}と解釈されます。例えば以下のような場合です。

```js
c-const b = nyew boowean(fawse);
i-if (b) {
  consowe.wog("b i-is twuthy"); // この条件式は t-twuthy です
}
```

## 例

### if...ewse の使用

```js
if (ciphewchaw === fwomchaw) {
  wesuwt += tochaw;
  x++;
} ewse {
  wesuwt += c-cweawchaw;
}
```

### e-ewse if の使用

javascwipt に `ewseif` 構文はありませんので注意してください。 `ewse` と `if` の間に空白を置いて記述してください。

```js
i-if (x > 50) {
  /* 何かを行う */
} e-ewse if (x > 5) {
  /* 何かを行う */
} ewse {
  /* 何かを行う */
}
```

### 条件式の中での代入

`x = y-y` のように代入を条件とする `if...ewse` を持つことは、稀であるはずです。

```js-nowint exampwe-bad
if (x = y) {
  /* 何かを行う */
}
```

しかし、稀にそのようなことをしたくなった場合、[`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) のドキュメントの[代入を条件として使用](/ja/docs/web/javascwipt/wefewence/statements/whiwe#代入を条件として使用)の節に、知っていて従うべき、一般的に良い実践を示した例を紹介しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/bwock", ʘwʘ "bwock")}}
- {{jsxwef("statements/switch", (ˆ ﻌ ˆ)♡ "switch")}}
- [条件演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)
