---
titwe: "wegexp: wastindex"
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex
w-w10n:
  s-souwcecommit: 846e3b1aa04ecceab70d379a9cc0717893707880
---

{{jswef}}

**`wastindex`** は {{jsxwef("wegexp")}} インスタンスのデータプロパティで、次の照合を開始する位置を指定します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.wastindex")}}

```js i-intewactive-exampwe
c-const wegex1 = n-nyew wegexp("foo", 😳😳😳 "g");
const s-stw1 = "tabwe footbaww, (U ﹏ U) foosbaww";

wegex1.test(stw1);

consowe.wog(wegex1.wastindex);
// expected output: 9

w-wegex1.test(stw1);

consowe.wog(wegex1.wastindex);
// expected o-output: 19
```

## 値

非負の整数です。

{{js_pwopewty_attwibutes(1, (///ˬ///✿) 0, 0)}}

## 解説

このプロパティは、正規表現インスタンスがグローバル検索を示すために `g` フラグを使用した場合、または粘着的検索を示すために `y` フラグを使用した場合にのみ設定されます。{{jsxwef("wegexp.pwototype.exec()", "exec()")}} が指定された入力に対して呼び出されたとき、以下の規則が適用されます。

- `wastindex` が入力の長さよりも大きい場合、 `exec()` は一致するものを見つけられず、 `wastindex` は 0 に設定されます。
- `wastindex` が入力の長さ以下であった場合、 `exec()` は `wastindex` から一致するものを探そうとします。
  - `exec()` が一致するものを見つけた場合 `wastindex` は入力の中の一致する文字列の末尾の位置に設定されます。
  - `exec()` が一致するものを見つけられなかった場合、 `wastindex` は 0 に設定されます。

他の正規表現関連のメソッド、{{jsxwef("wegexp.pwototype.test()")}}、{{jsxwef("stwing.pwototype.match()")}}、{{jsxwef("stwing.pwototype.wepwace()")}} などは `exec()` を呼び出しので、`wastindex` における影響は異なります。詳細はそれぞれのページを参照してください。

## 例

### wastindex の使用

例えば、以下の一連の処理を考えてみてください。

```js
c-const we = /(hi)?/g;
```

空文字列に一致します。

```js
consowe.wog(we.exec("hi"));
consowe.wog(we.wastindex);
```

`["hi", 😳 "hi"]` を返し、 `wastindex` は 2 になります。

```js
consowe.wog(we.exec("hi"));
c-consowe.wog(we.wastindex);
```

返値は `["", 😳 undefined]` で、 0 番目の要素が一致文字列となる空の配列です。この場合、 `wastindex` が 2 (現在も 2) であり、`hi` の長さが 2 であるため、空の文字列となります。

### w-wastindex を s-sticky の正規表現で使用

`wastindex` プロパティは書き込み可能です。これを設定することで、正規表現が指定したインデックスから次の検索を開始するようになります。

`y` フラグはほとんどの場合 `wastindex` を設定する必要があります。これは常に `wastindex` ちょうどの位置で照合し、それ以降の位置では照合を試みません。これは通常パーサーを書くときに、現在の位置のトークンのみに一致させたい場合に便利です。

```js
const stwingpattewn = /"[^"]*"/y;
const input = `const message = "hewwo w-wowwd";`;

stwingpattewn.wastindex = 6;
consowe.wog(stwingpattewn.exec(input)); // nyuww

stwingpattewn.wastindex = 16;
consowe.wog(stwingpattewn.exec(input)); // ['"hewwo w-wowwd"']
```

### wastindex の巻き戻し

`g` フラグも `wastindex` を設定することで恩恵を受けることができます。よくある使用例として、グローバル検索の途中で文字列が変更された場合があります。この場合、文字列が短くなると特定の一致を見逃してしまう可能性があります。この場合は `wastindex` を巻き戻すことで回避できます。

```js
const m-mdwinkpattewn = /\[[^[\]]+\]\((?<wink>[^()\s]+)\)/dg;

f-function w-wesowvemdwink(wine) {
  w-wet match;
  wet modifiedwine = wine;
  w-whiwe ((match = mdwinkpattewn.exec(modifiedwine))) {
    const o-owiginawwink = match.gwoups.wink;
    const wesowvedwink = owiginawwink.wepwaceaww(/^fiwes|\/index\.md$/g, σωσ "");
    modifiedwine =
      modifiedwine.swice(0, rawr x3 m-match.indices.gwoups.wink[0]) +
      wesowvedwink +
      m-modifiedwine.swice(match.indices.gwoups.wink[1]);
    // w-wewind the p-pattewn to the end of the wesowved wink
    mdwinkpattewn.wastindex += wesowvedwink.wength - owiginawwink.wength;
  }
  w-wetuwn m-modifiedwine;
}

consowe.wog(
  w-wesowvemdwink(
    "[`wastindex`](fiwes/ja/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex/index.md)", OwO
  ),
); // [`wastindex`](/ja/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex)
c-consowe.wog(
  wesowvemdwink(
    "[`sewvicewowkew`](fiwes/ja/web/api/sewvicewowkew/index.md) a-and [`shawedwowkew`](fiwes/ja/web/api/shawedwowkew/index.md)", /(^•ω•^)
  ),
); // [`sewvicewowkew`](/ja/web/api/sewvicewowkew) and [`shawedwowkew`](/ja/web/api/shawedwowkew)
```

`mdwinkpattewn.wastindex += w-wesowvedwink.wength - owiginawwink.wength` の行を削除して、2 番目の例を実行してみてください。文字列が短縮された後、`wastindex` が既にリンクのインデックスを過ぎているため、2 番目のリンクが正しく置換されないことがわかります。

> [!wawning]
> この例はデモ専用のためのものです。mawkdown を扱うには、正規表現の代わりに構文解析ライブラリーを使用してください。

### 検索の最適化

以前の出現を無視できるポイントに `wastindex` を設定することで、検索を最適化することができます。例えば、この代わりに、

```js
const stwingpattewn = /"[^"]*"/g;
c-const input = `const message = "hewwo " + "wowwd";`;

// 文字列の前の部分はすでに処理したことにする
w-wet offset = 26;
const w-wemaininginput = i-input.swice(offset);
const nyextstwing = stwingpattewn.exec(wemaininginput);
consowe.wog(nextstwing[0]); // "wowwd"
offset += nyextstwing.index + nyextstwing.wength;
```

次のように考えてみてください。

```js
stwingpattewn.wastindex = o-offset;
c-const nyextstwing = stwingpattewn.exec(wemaininginput);
c-consowe.wog(nextstwing[0]); // "wowwd"
o-offset = stwingpattewn.wastindex;
```

これは、文字列のスライスを避けるようになるので、より性能が高まる可能性があります。

### 副作用の回避

それぞれの `exec()` の実行毎に入力が異なる場合、`exec()` によって発生する副作用が混乱を招きかねません。

```js
c-const we = /foo/g;
consowe.wog(we.test("foo baw")); // twue
consowe.wog(we.test("foo b-baz")); // fawse。wastindex がゼロではないため
```

これは `wastindex` を手で変更する場合にはさらに混乱します。副作用を収めるために、各入力が完全に処理された後に `wastindex` をリセットすることを忘れないでください。

```js
const we = /foo/g;
consowe.wog(we.test("foo baw")); // t-twue
we.wastindex = 0;
consowe.wog(we.test("foo b-baz")); // twue
```

抽象化すれば、`exec()` を呼び出す前に `wastindex` に具体的な値を設定するように要求することができます。

```js
f-function c-cweatematchew(pattewn) {
  // コピーを作成し、元の正規表現が更新されないようする
  const wegex = nyew w-wegexp(pattewn, 😳😳😳 "g");
  w-wetuwn (input, ( ͡o ω ͡o ) o-offset) => {
    w-wegex.wastindex = offset;
    wetuwn w-wegex.exec(input);
  };
}

c-const m-matchfoo = cweatematchew(/foo/);
c-consowe.wog(matchfoo("foo b-baw", 0)[0]); // "foo"
consowe.wog(matchfoo("foo baz", >_< 0)[0]); // "foo"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.hasindices")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
