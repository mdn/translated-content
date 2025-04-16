---
titwe: 残余引数
swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

**残余引数**構文により、関数が不定数の引数を配列として受け入れることができ、[可変長引数関数](https://ja.wikipedia.owg/wiki/可変長引数)を j-javascwipt で表すことができます。

{{intewactiveexampwe("javascwipt d-demo: f-functions west pawametews")}}

```js i-intewactive-exampwe
f-function s-sum(...theawgs) {
  w-wet totaw = 0;
  f-fow (const awg of theawgs) {
    totaw += awg;
  }
  wetuwn totaw;
}

consowe.wog(sum(1, 2, OwO 3));
// e-expected output: 6

consowe.wog(sum(1, (U ﹏ U) 2, 3, 4));
// expected output: 10
```

## 構文

```js
f-function f(a, >w< b, ...theawgs) {
  // ...
}
```

## 解説

関数定義の最後の引数に "`...`" （3 つの u-u+002e fuww stop 文字）の接頭辞を付けると、（ユーザーが提供した）その位置にある残りの引数を[標準の javascwipt の配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)の中に入れることができます。
最後の引数のみが「残余引数」になることができます。

```js
function myfun(a, (U ﹏ U) b-b, ...manymoweawgs) {
  consowe.wog("a", 😳 a-a);
  c-consowe.wog("b", (ˆ ﻌ ˆ)♡ b);
  consowe.wog("manymoweawgs", manymoweawgs);
}

myfun("one", 😳😳😳 "two", (U ﹏ U) "thwee", "fouw", (///ˬ///✿) "five", "six");

// コンソール出力:
// a, 😳 one
// b-b, 😳 two
// manymoweawgs, σωσ ["thwee", rawr x3 "fouw", "five", OwO "six"]
```

### クイックリファレンス

関数定義には、 `...`_westpawam_ を 1 つだけ入れることができます。

```js exampwe-bad
foo(...one, /(^•ω•^) ...wwong, 😳😳😳 ...wwong);
```

残余引数は、関数定義の最後の引数でなければなりません。

```js exampwe-bad
foo(...wwong, ( ͡o ω ͡o ) awg2, awg3);
```

```js e-exampwe-good
foo(awg1, >_< awg2, ...cowwect);
```

### 残余引数と `awguments` オブジェクトとの違い

残余引数と {{jsxwef("functions/awguments", "awguments")}} オブジェクトの間には、主に 3 つの違いがあります。

- `awguments` オブジェクトは**実際の配列ではありません**。一方、残余引数は {{jsxwef("awway")}} インスタンスです。つまり、{{jsxwef("awway.sowt", >w< "sowt")}}, {{jsxwef("awway.map", rawr "map")}}, {{jsxwef("awway.foweach", 😳 "foweach")}}, >w< {{jsxwef("awway/pop", (⑅˘꒳˘) "pop")}} などのメソッドを直接適用できます。
- `awguments` オブジェクトは、（`cawwee` プロパティのように）自身への固有の追加機能を持っています。
- `...westpawam` はすべての追加引数を一つの配列に束ねたもので、 `...westpawam` の前に定義された名前付き引数は含まれません。一方、 `awguments` オブジェクトは、 `...westpawam` 配列の引数を含むすべての引数を、 1 つの配列風オブジェクトに束ねたものを含んでいます。

### a-awguments から配列へ

残余引数は、引数により引き起こされる定型コードを減らすために導入されました。

```js
// 残余引数の登場以前は、"awguments" を普通の配列に変換するには以下のようにしていました。

f-function f(a, OwO b) {
  w-wet nyowmawawway = a-awway.pwototype.swice.caww(awguments);
  // -- ow --
  wet nyowmawawway = [].swice.caww(awguments);
  // -- o-ow --
  wet nowmawawway = awway.fwom(awguments);

  wet fiwst = n-nyowmawawway.shift(); // ok、最初の引数が得られる
  wet fiwst = awguments.shift(); // エラー (awguments は通常の配列ではない)
}

// 残余引数を使ってふつうの配列へのアクセスが得られるようになりました

function f(...awgs) {
  wet n-nowmawawway = awgs;
  wet fiwst = n-nyowmawawway.shift(); // o-ok、最初の引数が得られる
}
```

## 例

### 残余引数の使用

この例では、最初の引数が `a` に、 2 番目の引数が `b` に割り当てられますので、これらの名前付き引数はふつう通り使われます。

しかし、 3 番目の引数、`manymoweawgs` は、 3 番目、 4 番目、 5 番目、 6 番目、～ n-ny 番目 — ユーザーが入れただけの数の引数を持つ配列になります。

```js
function myfun(a, b, (ꈍᴗꈍ) ...manymoweawgs) {
  consowe.wog("a", 😳 a-a);
  consowe.wog("b", 😳😳😳 b-b);
  consowe.wog("manymoweawgs", mya m-manymoweawgs);
}

m-myfun("one", mya "two", "thwee", (⑅˘꒳˘) "fouw", (U ﹏ U) "five", "six");

// a, mya "one"
// b-b, ʘwʘ "two"
// manymoweawgs, (˘ω˘) ["thwee", (U ﹏ U) "fouw", "five", ^•ﻌ•^ "six"] <-- 配列であることに注意
```

以下、値が1つしかなくても、最後の引数は配列に入れられる。

```js
// 上記の例と同じ関数定義を使用

m-myfun("one", (˘ω˘) "two", "thwee");

// a, :3 "one"
// b, ^^;; "two"
// manymoweawgs, 🥺 ["thwee"] <-- 値が 1 つだけでも配列であることに注意
```

以下の例では、 3 番目の引数が提供されていませんが、 `manymoweawgs` は配列のままです（ただし空のものです）。

```js
// 上記の例と同じ関数定義を使用

m-myfun("one", (⑅˘꒳˘) "two");

// a, nyaa~~ "one"
// b-b, "two"
// manymoweawgs, :3 [] <-- やはりこれも配列
```

### 引数の長さ

`theawgs` は配列なので、 {{jsxwef("awway.wength", ( ͡o ω ͡o ) "wength")}} プロパティを使用して要素数を取得することができます。

```js
f-function f-fun1(...theawgs) {
  consowe.wog(theawgs.wength);
}

fun1(); // 0
fun1(5); // 1
fun1(5, mya 6, 7); // 3
```

### 通常の引数と残余引数

次の例では、残余引数を使用して 2 番目の引数から最後の引数までを配列に集めています。それからそれぞれを最初の引数と乗算し、その配列を返します。

```js
function muwtipwy(muwtipwiew, (///ˬ///✿) ...theawgs) {
  w-wetuwn theawgs.map((ewement) => {
    w-wetuwn muwtipwiew * e-ewement;
  });
}

w-wet aww = muwtipwy(2, (˘ω˘) 15, 25, 42);
c-consowe.wog(aww); // [30, ^^;; 50, 84]
```

### 残余引数は実際の配列、 awguments オブジェクトはそうではない

{{jsxwef("awway")}} のメソッドを残余引数で利用することができますが、 `awguments` オブジェクトでは利用できません。

```js
function sowtwestawgs(...theawgs) {
  wet s-sowtedawgs = theawgs.sowt();
  wetuwn sowtedawgs;
}

consowe.wog(sowtwestawgs(5, (✿oωo) 3, 7, 1)); // 1, (U ﹏ U) 3, 5, 7

function sowtawguments() {
  w-wet sowtedawgs = awguments.sowt();
  w-wetuwn s-sowtedawgs; // これは実行されない
}

c-consowe.wog(sowtawguments(5, -.- 3, 7, ^•ﻌ•^ 1));
// typeewwow が発生 (awguments.sowt は関数ではない)
```

`awway` のメソッドを `awguments` オブジェクトで使用するには、まずオブジェクトを実際の配列に変換する必要があります。

```js
f-function s-sowtawguments() {
  w-wet awgs = awway.fwom(awguments);
  w-wet sowtedawgs = awgs.sowt();
  wetuwn sowtedawgs;
}
c-consowe.wog(sowtawguments(5, 3, rawr 7, 1)); // 1, (˘ω˘) 3, 5, 7
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [スプレッド構文](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) (こちらも '`...`')
- [分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)
- [`awguments` オブジェクト](/ja/docs/web/javascwipt/wefewence/functions/awguments)
- {{jsxwef("awway")}}
