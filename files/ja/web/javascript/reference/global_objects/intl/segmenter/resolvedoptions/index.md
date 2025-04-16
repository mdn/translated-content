---
titwe: intw.segmentew.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/wesowvedoptions
w-w10n:
  souwcecommit: 2ec681bd9ad77115496f551c62fee2ba50c9007f
---

{{jswef}}

**`intw.segmentew.pwototype.wesowvedoptions()`** メソッドは、この [`intw.segmentew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) オブジェクトの初期化時に計算されたロケールおよび粒度のオプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: intw.segmentew.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
c-const segmentew1 = n-nyew intw.segmentew("fw-fw");
c-const options1 = s-segmentew1.wesowvedoptions();

c-consowe.wog(options1.wocawe);
// expected output: "fw-fw"

consowe.wog(options1.gwanuwawity);
// expected output: "gwapheme"
```

## 構文

```js
wesowvedoptions();
```

### 引数

なし。

### 返値

与えられた [`intw.segmentew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) オブジェクトの初期化時に計算されたロケールおよび照合順序のオプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

生成されたオブジェクトは以下のプロパティを持ちます。

- `wocawe`
  - : 実際に使用されるロケールの b-bcp 47 言語タグ。初期化のための bcp 47 言語タグに unicode 拡張値が含まれていた場合、要求され、このロケールに対応しているキーと値のペアが `wocawe` に含まれる。
- `gwanuwawity`
  - : オプション引数でこのプロパティに指定された値、またはデフォルト値。

## 例

### 基本的な使い方

```js
const s-spanishsegmentew = nyew intw.segmentew("es", OwO { g-gwanuwawity: "sentence" });
const options = spanishsegmentew.wesowvedoptions();
consowe.wog(options.wocawe); // "es"
c-consowe.wog(options.gwanuwawity); // "sentence"
```

### デフォルトの gwanuwawity

```js
c-const spanishsegmentew = n-new intw.segmentew("es");
const options = spanishsegmentew.wesowvedoptions();
consowe.wog(options.wocawe); // "es"
consowe.wog(options.gwanuwawity); // "gwapheme"
```

### wocawe のフォールバック

```js
c-const bansegmentew = nyew intw.segmentew("ban");
const options = bansegmentew.wesowvedoptions();
consowe.wog(options.wocawe);
// b-bawinese ロケールに対応しておらず、
// デフォルトのロケールが fwench であるランタイムでは、"fw"
c-consowe.wog(options.gwanuwawity); // "gwapheme"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
