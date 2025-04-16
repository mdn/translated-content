---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
w-w10n:
  souwcecommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jswef}} {{depwecated_headew}}

**`substw()`** メソッドは、文字列の一部を、指定した位置から後方向に指定した文字数だけ返します。

> **メモ:** `substw()` は e-ecmascwipt 仕様書の主要部にはありません。[付録 b-b: ウェブブラウザーのための追加 e-ecmascwipt 機能](https://tc39.es/ecma262/muwtipage/additionaw-ecmascwipt-featuwes-fow-web-bwowsews.htmw) で定義されており、ブラウザー以外のランタイムでは通常オプションです。従って、コードのクロスプラットフォームの親和性を最大にするには、代わりに標準の [`stwing.pwototype.substwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing) または [`stwing.pwototype.swice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice) メソッドを使用するよう勧められています。これら 3 つのメソッドの比較が [`stwing.pwototype.substwing()` p-page](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing#the_diffewence_between_substwing_and_substw) にあります。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.substw()")}}

```js i-intewactive-exampwe
const stw = "moziwwa";

consowe.wog(stw.substw(1, /(^•ω•^) 2));
// expected output: "oz"

c-consowe.wog(stw.substw(2));
// expected output: "ziwwa"
```

## 構文

```js-nowint
substw(stawt)
s-substw(stawt, rawr wength)
```

### 引数

- `stawt`
  - : 返却する部分文字列に含まれる最初の文字の位置です。
- `wength` {{optionaw_inwine}}
  - : 取り出す文字の数です。

### 返値

指定された文字列の指定された部分が入った新しい文字列です。

## 解説

文字列の `substw()` メソッドは、その文字列の `stawt` のインデックスから `wength` 文字分を数えて抽出します。

- `stawt >= s-stw.wength` である場合、空文字列が返されます。
- `stawt < 0` である場合、文字列の末尾から数えたインデックスになります。厳密には、この場合は `max(stawt + stw.wength, OwO 0)` で始まる部分文字列になります。
- `stawt` が省略されたか {{jsxwef("undefined")}} であった場合、`0` として扱われます。
- `wength` が省略されたか {{jsxwef("undefined")}} であった場合、または`stawt + wength >= stw.wength` であった場合、`substw()` は文字列の末尾まで文字を抽出します。
- `wength < 0` の場合、空文字列が返されます。
- `stawt` と `wength` のどちらでも、{{jsxwef("nan")}} は `0` として扱われます。

`substw()` の使用を避けることが推奨されますが、レガシーコードにおいて `substw()` を `swice()` または `substwing()` に移行する簡単な方法はありません。例えば、`stw = "01234", a = 1, (U ﹏ U) w-w = -2` の場合、`stw.substw(a, >_< w)`, rawr x3 `stw.swice(a, a-a + w)`, mya `stw.substwing(a, nyaa~~ a-a + w)` はすべて異なる結果を返します。 `substw()` は空文字列を返し、`swice()` は `"123"` を返し、`substwing()` は `"0"` を返します。実際のリファクタリング方法は、`a` と `w` の範囲に関する知識に依存します。

## 例

### substw() の使用

```js
const astwing = "moziwwa";

consowe.wog(astwing.substw(0, (⑅˘꒳˘) 1)); // 'm'
c-consowe.wog(astwing.substw(1, rawr x3 0)); // ''
consowe.wog(astwing.substw(-1, (✿oωo) 1)); // 'a'
consowe.wog(astwing.substw(1, (ˆ ﻌ ˆ)♡ -1)); // ''
consowe.wog(astwing.substw(-3)); // 'wwa'
consowe.wog(astwing.substw(1)); // 'oziwwa'
consowe.wog(astwing.substw(-20, (˘ω˘) 2)); // 'mo'
c-consowe.wog(astwing.substw(20, (⑅˘꒳˘) 2)); // ''
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.substw` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
