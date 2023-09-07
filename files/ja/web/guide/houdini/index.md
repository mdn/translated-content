---
title: CSS Houdini
slug: Web/Guide/Houdini
---

Houdini は、CSS エンジンの一部を公開する低レベル API のセットであり、開発者はブラウザーのレンダリングエンジンのスタイリングおよびレイアウトプロセスにフックすることで CSS を拡張できます。 Houdini は、開発者が [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)（CSSOM）に直接アクセスできるようにする API のグループです。 開発者は、ブラウザーが CSS として解析できるコードを記述できるため、ブラウザーにネイティブに実装されるのを待たずに新しい CSS 機能を作成できます。

## Houdini の利点

Houdini は、スタイルの変更に JavaScript の .[`style`](/ja/docs/Web/API/HTMLElement/style) を使用するよりも高速な解析時間を可能にします。 ブラウザーは、スクリプトで見つかったスタイルの更新を適用する前に、CSSOM（レイアウト、ペイント、合成のプロセスを含む）を解析します。 さらに、JavaScript スタイルの更新のために、レイアウト、ペイント、および合成のプロセスが繰り返されます。 Houdini のコードは、最初のレンダリングサイクルが完了するまで待機しません。 むしろ、それは最初のサイクルに含まれ、レンダリング可能で理解可能なスタイルを作成します。 Houdini は、JavaScript で CSS 値を操作するためのオブジェクトベースの API を提供します。

Houdini の CSS Typed OM は、型とメソッドを備えた CSS オブジェクトモデルであり、値を JavaScript オブジェクトとして公開し、以前の文字列ベースの [`HTMLElement.style`](/ja/docs/Web/API/HTMLElement/style) 操作よりも直感的な CSS 操作を実現します。 すべての要素とスタイルシートのルールには、[`StylePropertyMap`](/ja/docs/Web/API/StylePropertyMap) を介してアクセスできるスタイルマップがあります。

CSS Houdini の機能の 1 つはワークレット（[Worklet](/ja/docs/Web/API/Worklet)）です。 ワークレットを使用すると、モジュール方式の CSS を作成できます。 構成可能なコンポーネントをインポートするには、次の JavaScript の 1 行が必要です。 プリプロセッサー、ポストプロセッサー、JavaScript フレームワークは必要ありません。

```js
<script>CSS.paintWorklet.addModule('csscomponent.js');</script>
```

この追加されたモジュールには、完全に構成可能なワークレットを登録する [`registerPaint()`](/ja/docs/Web/API/PaintWorklet/registerPaint) 関数が含まれています。

CSS の `paint()` 関数のパラメーターには、オプションのパラメーターとともに、ワークレットの名前が含まれます。 ワークレットは要素のカスタムプロパティにもアクセスできます。 これらは関数の引数として渡す必要はありません。

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}
```

> **メモ:** 大きな力には大きな責任が伴います。 Houdini を使用すると、独自の石積み（masonry）、グリッド、またはリージョンの実装を発明できますが、そうすることが必ずしも最良の考えであるとは限りません。 CSS ワーキンググループは、すべての機能が確実に実行され、すべてのエッジケースを処理し、セキュリティ、プライバシー、およびアクセシビリティを考慮するために多くの作業を行います。 Houdini で CSS を拡張するときは、これらの考慮事項を念頭に置き、より野心的なプロジェクトに進む前に、まずは小さいものから始めてください。

## Houdini の API

以下に、Houdini の傘下にある API をカバーするメインリファレンスページへのリンクと、それらの使用方法を学習する際にガイダンスが必要な場合に役立つガイドへのリンクを示します。

- CSS Parser API

  - : 任意の CSS のような言語を穏やかに型付けされた表現に解析するために、CSS パーサーをより直接的に公開する API。

    この API のガイドやリファレンスは現在書かれていません。

- CSS Properties and Values API

  - : 新しい CSS プロパティを登録するための API を定義します。 この API を使用して登録したプロパティには、型、継承の振る舞い、および初期値を定義する解析構文が提供されます。

    [CSS Properties and Values API リファレンス](/ja/docs/Web/API/CSS_Properties_and_Values_API)
    [CSS Properties and Values API ガイド](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)

- CSS Typed OM

  - : CSSOM 値の文字列を意味のある型の JavaScript 表現に変換したり、元に戻したりすると、パフォーマンスのオーバーヘッドが大幅に増加する可能性があります。 CSS Typed OM は、CSS 値を型付き JavaScript オブジェクトとして公開し、パフォーマンスの高い操作を可能にします。

    [CSS Typed OM リファレンス](/ja/docs/Web/API/CSS_Typed_OM_API)
    [CSS Typed OM ガイド](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)

- CSS Layout API

  - : CSS の拡張性を改善するように設計されたこの API は、開発者が石積みやラインスナップなどの独自のレイアウトアルゴリズムを作成できるようにします。 まだネイティブでは利用できません。

    この API のガイドやリファレンスは現在書かれていません。

- CSS Painting API

  - : CSS の拡張性を向上させるために開発 — 開発者が `paint()` CSS 関数を介して要素の背景、境界線、またはコンテンツに直接描画できる JavaScript 関数を記述できるようにします。

    [CSS Painting API リファレンス](/ja/docs/Web/API/CSS_Painting_API)
    [CSS Painting API ガイド](/ja/docs/Web/API/CSS_Painting_API/ガイド)

- Worklets

  - : メインの JavaScript 実行環境から独立した、レンダリングパイプラインのさまざまな段階でスクリプトを実行するための API。 ワークレットは概念的には [Web Workers](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) に似ており、レンダリングエンジンによって呼び出され、レンダリングエンジンを拡張します。

    [Worklets リファレンス](/ja/docs/Web/API/Worklet)

## その他のトピック

興味深い方法で Houdini API と連携して使用できるため、興味深い関連トピック。

合成スクロールとアニメーション
