---
title: "IntersectionObserver: IntersectionObserver() コンストラクター"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserver()`** コンストラクターは、新しい {{domxref("IntersectionObserver")}} オブジェクトを生成します。

## 構文

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### 引数

- `callback`
  - : 対象要素の見える割合がしきい値をまたいだ場合に呼び出される関数です。
    このコールバックは以下の 2 つの引数を取ります。
    - `entries`
      - : {{domxref("IntersectionObserverEntry")}} オブジェクトの配列で、それぞれの要素は、しきい値をまたいだ要素を表します。これは可視状態が、そのしきい値で指定されたパーセント値よりも高くなった場合も低くなった場合も含まれます。
        項目の数を仮定すべきではありません。単一のコールバック呼び出しで複数のしきい値超過イベントが報告される可能性があるからです。
        項目はキューを使用して配信されるため、生成された時刻順に並べられるはずですが、できれば {{domxref("IntersectionObserverEntry.time")}} を使用して正しく順序付けすることを推奨します。
    - `observer`
      - : コールバックが呼び出される {{domxref("IntersectionObserver")}} です。

- `options` {{optional_inline}}
  - : 省略可能で、このオブザーバーをカスタマイズするためのオブジェクトです。

    以下のオプションの任意の組み合わせ（またはオプション無し）を提供することができます。
    - `delay`
      - : オブザーバーからの通知間の最小許容遅延時間をミリ秒単位で指定します。

        この遅延は、可視性の追跡における通知が提供される速度を制限するために使用することができます。これは計算負荷の高い処理であるためです。
        可視性を追跡する際の推奨事項は、遅延が許容可能な最大値に設定することです。

        [`trackVisibility`](#trackvisibility) が `true` である場合、最小値は 100 です。
        ブラウザーは、より小さい値が使用された場合、または値が指定されていない場合、値を 100 に設定します。
        既定値は 0 です。

    - `root`
      - : {{domxref("Element")}} または {{domxref("Document")}} オブジェクトで、対象の祖先要素です。これらの外接矩形がビューポートとみなされます。
        `root` の可視領域に見えていない部分は、可視状態であるとはみなされません。
        指定されなかった場合、オブザーバーは文書のビューポートをルートとし、マージンなしで、しきい値を 0% とします（つまり、 1 ピクセルの変動でもコールバックを起動するのに十分であるということです）。
    - `rootMargin`
      - : 文字列で、交差状態を計算するときに、ルートの{{Glossary('bounding_box', '外接ボックス')}}に適用されるオフセットのセットを指定し、適用されるオフセットの矩形で、計算に使用するルートの矩形を縮小または拡大させます。
        構文は概ね CSS の {{cssxref("margin")}} プロパティのものと同じです。それぞれのオフセット値は、ピクセル数 (`px`) またはパーセント値 (`%`) のみで表すことができます。
        マージンのしくみと構文について詳しくは[交差ルートとルートマージン](/ja/docs/Web/API/Intersection_Observer_API#交差ルートとルートマージン)を参照してください。
        既定値は "0px 0px 0px 0px" です。
    - `scrollMargin`
      - : 交差計算時に対象とするパス上の各{{glossary("scroll container", "スクロールコンテナー")}}に追加するオフセットを指定します。これにより、交差計算に使用することができるクリップ矩形を実質的に縮小または拡張する効果があります。
        これにより、例えば、現在スクロールコンテナーによってクリップされている内部のスクロールコンテナー内の対象をより良く監視できるようになります。
        構文は `rootMargin` と同じです。
        既定値は "0px 0px 0px 0px" です。
    - `threshold`
      - : 単一の数値か、または 0.0 と 1.0 の間の数値の配列で指定し、監視対象の外接ボックスの総面積に対する交差領域の比率を指定します。
        0.0 の値に設定すると、 1px でも交差領域に入ったらその対象要素は可視状態になったとみなされます。
        1.0 は対象要素全体が可視状態であることを意味します。
        しきい値の扱い方については、[しきい値](/ja/docs/Web/API/Intersection_Observer_API#しきい値)でより詳しく説明されています。
        既定値は "0" のしきい値です。
    - `trackVisibility`
      - : 論理値で、このオブザーバーが可視性を追跡するかどうかを示します。

        `true`の場合、ブラウザーは交差を計算する際に、対象とするものが可視性を損なわれていないことを調べます。
        例えば、他の要素に覆われていないこと、フィルターや不透明度の縮小、あるいは何らかの座標変換によって歪められたり隠されたりしていないことです。

        可視性を追跡する操作は高コストであり、必要な場合にのみ行うのが最適です。
        この値を `true` に設定した場合、 [`delay`](#delay) も設定する必要があります。
        既定値は `false` です。

### 返値

新しい {{domxref("IntersectionObserver")}} で、指定された `root` 内における対象要素の可視状態が、指定した可視状態の `threshold` のいずれかを通過することを監視するために使用することができます。

その {{domxref("IntersectionObserver.observe", "observe()")}} メソッドを呼び出すと、指定された対象要素の可視状態の変化を監視し始めることができます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 指定した `rootMargin` または `scrollMargin` が不正です。
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
