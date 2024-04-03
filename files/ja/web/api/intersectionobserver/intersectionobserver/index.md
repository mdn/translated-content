---
title: "IntersectionObserver: IntersectionObserver() コンストラクター"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver()`** コンストラクターは、新しい {{domxref("IntersectionObserver")}} オブジェクトを生成します。

`rootMargin` が指定されていた場合は、構文の正しさを確認します。
指定されなかった、または空文字列の場合、既定値は `0px 0px 0px 0px` となります。

`threshold` が指定されていた場合は、すべてが 0.0 以上 1.0 以下であるか確認され、閾値のリストは昇順に並べられます。
閾値のリストが空の場合、 `[0.0]` の配列に設定されます。

## 構文

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### 引数

- `callback`

  - : 対象要素の見える割合が閾値をまたいだ場合に呼び出される関数です。
    このコールバックは以下の 2 つの引数を取ります。

    - `entries`
      - : {{domxref("IntersectionObserverEntry")}} オブジェクトの配列で、それぞれの要素は、閾値をまたいだ要素を表します。これは可視状態が、その閾値で指定されたパーセント値よりも高くなった場合も低くなった場合も含まれます。
    - `observer`
      - : コールバックが呼び出される {{domxref("IntersectionObserver")}} です。

- `options` {{optional_inline}}

  - : 省略可能で、オブザーバーをカスタマイズするためのオブジェクトです。
    もし `options` に何も指定されていない場合、オブザーバーはルートとして文書のビューポートを使用し、マージンなし、閾値 0% （つまり、 1px でも変化があればコールバックが呼び出される）を使用します。
    次のオプションから任意の組み合わせを利用できます。

    - `root`
      - : {{domxref("Element")}} または {{domxref("Document")}} オブジェクトで、対象の祖先要素です。これらの外接矩形がビューポートとみなされます。
        `root` の可視領域に見えていない部分は、可視状態であるとはみなされません。
    - `rootMargin`
      - : 文字列で、交差状態を計算するときに、ルートの{{Glossary('bounding_box', '外接ボックス')}}に適用されるオフセットのセットを指定し、適用されるオフセットの矩形で、計算に使用するルートの矩形を縮小または拡大させます。
        構文は概ね CSS の {{cssxref("margin")}} プロパティのものと同じです。
        margin のしくみと構文について詳しくは[交差ルートとルートマージン](/ja/docs/Web/API/Intersection_Observer_API#交差ルートとルートマージン)を参照してください。
        既定値は "0px 0px 0px 0px" です。
    - `threshold`
      - : 単一の数値か、または 0.0 と 1.0 の間の数値の配列で指定し、監視対象の外接ボックスの総面積に対する交差領域の比率を指定します。
        0.0 の値に設定すると、 1px でも交差領域に入ったらその対象要素は可視状態になったとみなされます。
        1.0 は対象要素全体が可視状態であることを意味します。
        閾値の扱い方については、[閾値](/ja/docs/Web/API/Intersection_Observer_API#閾値)でより詳しく説明されています。
        既定値は 0.0 の閾値です。

### 返値

新しい {{domxref("IntersectionObserver")}} で、指定された `root` 内における対象要素の可視状態が、指定した可視状態の `threshold` のいずれかを通過することを監視するために使用することができます。
その {{domxref("IntersectionObserver.observe", "observe()")}} メソッドを呼び出すと、指定された対象要素の可視状態の変化を監視し始めることができます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定した `rootMargin` が不正です。
- {{jsxref("RangeError")}}
  - : `threshold` の値のうち 1 つ以上の値が 0.0 から 1.0 の範囲に当てはまりません。

## 例

この例では、監視されている要素の可視範囲が 10% を越える毎に `myObserverCallback` を呼び出すような新しい交差オブザーバーを生成します。

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
