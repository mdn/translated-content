---
title: Houdini API
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("Houdini API")}}

Houdini は、CSS エンジンの一部を公開する低レベル API のセットであり、開発者はブラウザーのレンダリングエンジンのスタイリングおよびレイアウトプロセスにフックすることで CSS を拡張できます。
Houdini は、開発者が [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model) (CSSOM) に直接アクセスできるようにする API のグループです。 開発者は、ブラウザーが CSS として解析できるコードを記述できるため、ブラウザーにネイティブに実装されるのを待たずに新しい CSS 機能を作成できます。

## Houdini の利点

Houdini は、スタイルの変更に JavaScript の {{domxref("HTMLElement.style")}} を使用するよりも構文解析時間を高速にすることができます。
ブラウザーは、スクリプトで見つかったスタイルの更新を適用する前に、CSSOM（レイアウト、描画、合成のプロセスを含む）を解釈します。
さらに、JavaScript スタイルの更新のために、レイアウト、描画、および合成のプロセスが繰り返されます。
Houdini のコードは、最初のレンダリングサイクルが完了するまで待機しません。
むしろ、それは最初のサイクルに含まれ、レンダリング可能で理解可能なスタイルを作成します。
Houdini は、JavaScript で CSS 値を操作するためのオブジェクトベースの API を提供します。

Houdini の [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API) は、型とメソッドを備えた CSS オブジェクトモデルであり、値を JavaScript オブジェクトとして公開し、以前の文字列ベースの {{domxref("HTMLElement.style")}} 操作よりも直感的な CSS 操作を実現します。
すべての要素とスタイルシートのルールには、 {{domxref("StylePropertyMap")}} を介してアクセスできるスタイルマップがあります。

CSS Houdini の機能の 1 つはワークレット ({{domxref("Worklet")}}) です。 ワークレットを使用すると、モジュール方式の CSS を作成できます。
構成可能なコンポーネントをインポートするには、次の JavaScript の 1 行が必要です。
プリプロセッサー、ポストプロセッサー、JavaScript フレームワークは必要ありません。

```js
CSS.paintWorklet.addModule("csscomponent.js");
```

この追加されたモジュールには、完全に構成可能なワークレットを登録する {{domxref("PaintWorkletGlobalScope.registerPaint")}} 関数が含まれています。

> [!NOTE]
> 自分自身でワークレットを書いたり、他にも作成した部品をインストールすることができます。
> [Houdini.how](https://houdini.how/) ウェブサイトは、[使用する方法を説明した](https://houdini.how/usage/)ワークレットのコレクションです。

CSS の `paint()` 関数は {{cssxref("image")}} 型で対応している追加関数です。
これは、ワークレットの名前とワークレットが必要とする追加の引数を取ります。
ワークレットは要素のカスタムプロパティにもアクセスすることができます。
関数の引数として渡す必要はありません。

次の例では `paint()` 関数に `myComponent` というワークレットを渡しています。

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}
```

> [!NOTE]
> 大きな力には大きな責任が伴います。
> Houdini を使用すると、独自の石積み (masonry）)グリッド、リージョンの実装を開発することができますが、そうすることが必ずしも最良の考えであるとは限りません。
> CSS ワーキンググループは、すべての機能が確実に実行され、すべてのエッジケースを処理し、セキュリティ、プライバシー、およびアクセシビリティを考慮するために多くの作業を行います。
> Houdini で CSS を拡張するときは、これらの考慮事項を念頭に置き、より野心的なプロジェクトに進む前に、まずは小さいものから始めてください。

## Houdini API

以下に、Houdini の傘下にある API をカバーするメインリファレンスページへのリンクと、それらの使用方法を学習する際にガイダンスが必要な場合に役立つガイドへのリンクを示します。

### CSS プロパティと値 API

新しい CSS プロパティを登録するための API を定義します。
この API を使用して登録したプロパティには、型、継承の振る舞い、および初期値を定義する解析構文が提供されます。

- [CSS プロパティと値 API リファレンス](/ja/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS プロパティと値 API ガイド](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Smarter custom properties with Houdini's new API](https://web.dev/articles/css-props-and-vals)

### CSS 型付きオブジェクトモデル

CSSOM 値の文字列を意味のある型の JavaScript 表現に変換したり、元に戻したりすると、パフォーマンスのオーバーヘッドが大幅に増加する可能性があります。
CSS 型付きオブジェクトモデルは、CSS 値を型付き JavaScript オブジェクトとして公開し、パフォーマンスの高い操作を可能にします。

- [CSS 型付きオブジェクトモデルリファレンス](/ja/docs/Web/API/CSS_Typed_OM_API)
- [CSS 型付きオブジェクトモデルガイド](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Working with the new CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS 描画 API

CSS の拡張性を改善するために開発された描画 API により、開発者は `paint()` CSS 関数を使って要素の背景や境界、コンテンツに直接描画する JavaScript 関数を書くことができます。

- [CSS 描画 API リファレンス](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 描画 API ガイド](/ja/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [The CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulating Drop Shadows with the CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API Being predictably random](https://jakearchibald.com/2020/css-paint-predictably-random/)

### ワークレット

メインの JavaScript 実行環境から独立した、レンダリングパイプラインのさまざまな段階でスクリプトを実行するための API です。
ワークレットは概念的には[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)に似ており、レンダリングエンジンによって呼び出され、レンダリングエンジンを拡張します。

- [ワークレットリファレンス](/ja/docs/Web/API/Worklet)

### CSS レイアウト API

CSS の拡張性を改善するように設計されたこの API は、開発者が石積みやラインスナップなどの独自のレイアウトアルゴリズムを作成できるようにします。

_この API は Chrome Canary で部分的に対応されています。まだ MDN では文書化されていません。_

### CSS パーサー API

任意の CSS のような言語を穏やかに型付けされた表現に解析するために、CSS パーサーをより直接的に公開する API です。

_この API は現在提案段階にあり、ブラウザーの実装や MDN のドキュメントはありません。_

- [Proposal](https://github.com/WICG/css-parser-api)

### フォントメトリック API

フォントのメトリックを公開し、書体のレイアウトの結果にアクセスする API です。

_この API は現在提案段階にあり、ブラウザーの実装や MDN のドキュメントはありません。_

- [Proposal](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## 関連情報

- [Worklet library](https://houdini.how/) に例とコードがあります
- [Interactive introduction to Houdini](https://houdini.glitch.me/)
- [Is Houdini Ready Yet?](https://houdini.glitch.me/)
