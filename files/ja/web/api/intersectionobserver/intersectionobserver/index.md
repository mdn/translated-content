---
title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver()`** コンストラクターは、新しい {{domxref("IntersectionObserver")}} オブジェクトを生成します。

`rootMargin` は、指定されていた場合は構文の正しさが保証されるかどうか確認します。
指定されなかった、または空文字列の場合、既定値は `0px 0px 0px 0px` となります。

`threshold` は、指定されていた場合、 0.0 以上 1.0 以下であるか確認され、閾値のリストは昇順に並べられます。
閾値のリストが空の場合、 `[0.0]` の配列に設定されます。

## 構文

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### 引数

- `callback`

  - : 対象となる要素の可視率が閾値を超えた場合に呼び出される関数。
    このコールバックは以下の 2 つの引数を受け取ります。

    - `entries`
      - : {{domxref("IntersectionObserverEntry")}} オブジェクトの配列で、それぞれの要素が閾値となります。これは、見えている割合が下から上に、または上から下にその値を越える時に callback が呼ばれるよう指定するものです。
    - `observer`
      - : コールバックが呼び出される {{domxref("IntersectionObserver")}} です。

- `options` {{optional_inline}}

  - : オブザーバをカスタマイズするためのオプションオブジェクトです。
    もし `options` に何も指定されていない場合、オブザーバーはルートとして、余白の無い、閾値 0% の文書ビューポートを使用します（つまり、 1px でも文書ビューポート内に入ればコールバックが実行されます）。
    次のオプションから任意の組み合わせを利用できます。

    - `root`
      - : {{domxref("Element")}} または {{domxref("Document")}} オブジェクトは、対象の祖先要素であり、これらの矩形はビューポートとみなされます。
        `root` の可視領域に見えていない部分はいずれも、見えているとみなされません。
    - `rootMargin`
      - : 文字列で、交差状態を計算するときに、ルートの{{Glossary('bounding_box', '外接ボックス')}}に適用されるオフセットのセットを指定し、計算のためにルートを効果的に縮小または拡大させます。
        構文は概ね CSS の {{cssxref("margin")}} プロパティのものと同じです。
        margin のしくみと構文について詳しくは[ルートとルートマージンの交差](/ja/docs/Web/API/Intersection_Observer_API#ルートとルートマージンの交差)を参照してください。
        既定値は "0px 0px 0px 0px" です。
    - `threshold`
      - : 1 つの数値か、または 0.0 と 1.0 の間の数字の配列で指定し、監視対象の矩形の総面積に対する交差領域の比率を指定します。
        0.0 に指定された場合、 1px でも交差領域に入ったらその対象要素は表示されたとみなされます。
        1.0 は対象要素全体が表示されていることを意味します。
        閾値がどのように使われるかについては、[閾値](/ja/docs/Web/API/Intersection_Observer_API#thresholds)でより詳しく説明されています。
        既定値は 0.0 の閾値です。

### 返値

新しい {{domxref("IntersectionObserver")}} で、指定した `root` 内の対照要素の可視性が、指定した可視性の `threshold` のいずれかを通過することを監視するために使用することができます。
その {{domxref("IntersectionObserver.observe", "observe()")}} メソッドを呼び出すと、指定された対象の可視性の変化を監視し始めることができます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定した `rootMargin` は無効な値です。
- {{jsxref("RangeError")}}
  - : `threshold` の値のうち 1 つ以上の値が 0.0 から 1.0 の範囲に当てはまりません。

## 例

この例では、監視されている要素の可視範囲が 10% を越える毎に `myObserverCallback` を呼び出すような新しい交差オブザーバーを生成します。

```js
let observer = new IntersectionObserver(myObserverCallback,
                   {threshold: 0.1});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
