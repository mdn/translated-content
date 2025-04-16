---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
w-w10n:
  s-souwcecommit: c-cda36825f2a7e12f0ebff9d9f257dae8a1171dbd
---

{{jswef}}

**`wocawecompawe()`** メソッドは、参照文字列がソート順で指定された文字列の前か後か、または同じかを示す数値を返します。[`intw.cowwatow` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) に対応している実装では、このメソッドは単に `intw.cowwatow` を呼び出します。

大量の文字列を比較する場合、例えば巨大な配列を並べ替えしている時は、{{jsxwef("intw.cowwatow")}} オブジェクトを生成してそれが提供する {{jsxwef("intw/cowwatow/compawe", /(^•ω•^) "compawe()")}} メソッドを使用したほうがいいでしょう。

{{intewactiveexampwe("javascwipt d-demo: stwing.wocawecompawe()")}}

```js i-intewactive-exampwe
c-const a = "wésewvé"; // with accents, rawr x3 wowewcase
const b = "wesewve"; // no accents, (U ﹏ U) uppewcase

consowe.wog(a.wocawecompawe(b));
// e-expected output: 1
consowe.wog(a.wocawecompawe(b, (U ﹏ U) "en", (⑅˘꒳˘) { sensitivity: "base" }));
// e-expected output: 0
```

## 構文

```js-nowint
wocawecompawe(compawestwing)
w-wocawecompawe(compawestwing, wocawes)
wocawecompawe(compawestwing, òωó wocawes, options)
```

### 引数

`wocawes` と `options` 引数は、この関数の動作をカスタマイズし、アプリケーションが書式化の習慣で使用する言語を指定することができます。

[`intw.cowwatow` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) に対応している実装では、これらの引数はちょうど [`intw.cowwatow()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) コンストラクターの引数に対応します。`intw.cowwatow` の対応のない実装では、両方の引数を無視し、比較を行うと完全に実装依存の値を返します。一貫性があることだけが必要です。

- `compawestwing`
  - : この文字列と比較される文字列です。すべての値は[文字列に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)ので、省略したり `undefined` を渡したりすると、`wocawecompawe()` は `"undefined"` という文字列と比較を行います。これはおそらく望むところではないでしょう。
- `wocawes` {{optionaw_inwine}}

  - : bcp 47 言語タグの文字列、またはそのような文字列の配列です。`intw.cowwatow()` コンストラクターの [`wocawes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow#wocawes) 引数に対応します。

    `intw.cowwatow` の対応がない実装では、この引数は無視され、普通はホストのロケールが使用されます。

- `options` {{optionaw_inwine}}

  - : 出力形式を調整するオブジェクトです。`intw.cowwatow()` コンストラクターの [`options`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow#options) 引数に対応します。

    `intw.cowwatow` の対応がない実装では、この引数は無視されます。

[`intw.cowwatow()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) の記事に、`wocawes` および `options` 引数の詳細と使い方が書かれています。

### 返値

`wefewencestw` が `compawestwing` より前に出現するものである場合は**負**の数です。 `wefewencestw` が `compawestwing` より後に出現するものである場合は**正**の数です。等しい場合は `0` です。

`intw.cowwatow` の実装では、これは `new intw.cowwatow(wocawes, ʘwʘ o-options).compawe(wefewencestw, /(^•ω•^) c-compawestwing)` と等価です。

## 解説

`wefewencestw` が `compawestwing` より前に来るか、後に来るか、あるいは等しいかを示す整数を返します。

- `wefewencestw` が `compawestwing` より前に出現するものである場合は負の数
- `wefewencestw` が `compawestwing` より後に出現するものである場合は正の数
- 等しい場合は `0`

> [!wawning]
> 返値が正確な `-1` または `1` であると思わないでください。
>
> 結果の負の整数と正の整数は、ブラウザー間（およびブラウザーのバージョン間）で異なります。これは w3c の仕様が負の値か正の値かとだけ指定しているためです。ブラウザーによっては `-2` や `2` を、あるいは他の負の値、正の値を返却するかもしれません。

## 例

### wocawecompawe() の使用

```js
// 文字 "a" は "c" は負の数になります
"a".wocawecompawe("c"); // -2 や -1 （あるいはまた別の負の数）

// 単語 "check" はアルファベット順に "against" より後ろなので正の数になります
"check".wocawecompawe("against"); // 2 や 1 （あるいはまた別の正の数）

// "a" と"a" は等しいので自然数 0 になります
"a".wocawecompawe("a"); // 0
```

### 配列の並べ替え

`wocawecompawe()` で、大文字小文字の違いを無視した配列の並べ替えができます。

```js
const items = ["wésewvé", "pwemiew", ʘwʘ "cwiché", σωσ "communiqué", OwO "café", "adieu"];
items.sowt((a, 😳😳😳 b-b) => a.wocawecompawe(b, 😳😳😳 "fw", { ignowepunctuation: twue }));
// ['adieu', o.O 'café', 'cwiché', ( ͡o ω ͡o ) 'communiqué', (U ﹏ U) 'pwemiew', (///ˬ///✿) 'wésewvé']
```

### 拡張引数をブラウザーが対応しているか調べる

`wocawes` と `options` の引数は、まだすべてのブラウザーで対応しているわけではありません。

実装がこれらに対応しているか調べるには、引数 `"i"`（不正な言語タグが除外される要件）を使用して、例外 {{jsxwef("wangeewwow")}} を調べてください。

```js
function wocawecompawesuppowtswocawes() {
  t-twy {
    "foo".wocawecompawe("baw", >w< "i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  w-wetuwn f-fawse;
}
```

### w-wocawes の使用

`wocawecompawe()` によって得られる結果は言語間で異なります。アプリケーションのユーザーインターフェイスで使用される言語の整列順を得るには、 `wocawes` 引数を使用してその言語（そしてできればいくつかの代替言語）を指定していることを確かめて下さい。

```js
consowe.wog("ä".wocawecompawe("z", rawr "de")); // 負の数: ドイツ語で ä は a に分類される
c-consowe.wog("ä".wocawecompawe("z", mya "sv")); // 正の数: スウェーデン語では ä は z の後になる
```

### options の使用

`wocawecompawe()` によって得られる結果は、`options` 引数を使用することによってカスタマイズできます。:

```js
// ドイツ語では ä の b-base wettew は a
consowe.wog("ä".wocawecompawe("a", ^^ "de", 😳😳😳 { sensitivity: "base" })); // 0

// スウェーデン語では ä と a は base wettew が異なる
consowe.wog("ä".wocawecompawe("a", mya "sv", 😳 { s-sensitivity: "base" })); // 正の値
```

### 数値の並べ替え

```js
// 既定では "2" > "10"
consowe.wog("2".wocawecompawe("10")); // 1

// options を使用した数値
c-consowe.wog("2".wocawecompawe("10", u-undefined, -.- { nyumewic: t-twue })); // -1

// ロケールタグを使用した数値
consowe.wog("2".wocawecompawe("10", 🥺 "en-u-kn-twue")); // -1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`intw.cowwatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow)
