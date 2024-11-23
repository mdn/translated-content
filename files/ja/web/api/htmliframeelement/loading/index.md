---
title: "HTMLIFrameElement: loading プロパティ"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{APIRef("HTML DOM")}}

**`loading`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、{{Glossary("user agent", "ユーザーエージェント")}}に [iframe](/ja/docs/Web/HTML/Element/iframe) をページ読み込み時に即座に読み込むか、必要な時にのみ読み込むかを指定するヒントを提供する文字列です。

これは、文書内のコンテンツの読み込みを最適化するために使用することができます。ページが読み込まれたときに表示されている iframe は、すぐに（熱心に）ダウンロードすることができます。一方、最初のページ読み込み時に画面外にある可能性が高い iframe は、遅延してダウンロードすることができます。つまり、ウィンドウの{{Glossary("visual viewport", "視覚的ビューポート")}}に表示される直前にダウンロードすることができます。

## 値

iframe の読み込みを最適にスケジュールする方法について、ユーザーエージェントにヒントを提供する文字列。
可能な値は以下のとおりです。

- `eager`
  - : 要素が処理されたらすぐに iframe を読み込みます。
    これが既定値です。
- `lazy`
  - : ブラウザーが近い将来に必要になる可能性が高いと判断した時点で、iframe を読み込みます。

## 使用上のメモ

### JavaScript を有効にする必要がある

JavaScript が有効になっている場合、このプロパティの値に関係なく、読み込みが遅延されます。

これは追跡防止策です。なぜなら、スクリプトが無効になっている場合でも、ユーザーエージェントが遅延読み込みをサポートしている場合、サーバーがリクエストされた iframe の数をいつリクエストされたかを追跡できるように、ページのマークアップに iframe を戦略的に配置することで、セッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能なサイトが存在するからです。

### load イベントのタイミング

{{domxref("Window.load_event", "load")}} イベントは、文書内の処理がすべて完了した時点で発行されます。

遅延読み込みされた iframe は、それが視覚的ビューポート内にあり、したがってページの読み込み時に取得されたとしても、`load` イベントのタイミングには影響しません。
文書内の熱心に読み込まれた iframe はすべて、`load` イベントが発生する前に取得されていなければなりません。

## 例

例えば、下記のように、遅延読み込みの iframe を定義し、それを文書内の `<div>` に追加することができます。
フレームは、表示される際にのみ読み込まれます。

```js
// Define iframe with lazy loading
const iframe = document.createElement("iframe");
iframe.src = "https://example.com";
iframe.width = 320;
iframe.height = 240;
iframe.loading = "lazy";

// Add to div element with class named frameDiv
const frameDiv = document.querySelector("div.frameDiv");
frameDiv.appendChild(iframe);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("iframe")}} 要素
- [ウェブパフォーマンス](/ja/docs/Learn/Performance) （MDN 学習領域）
- [遅延読み込み](/ja/docs/Web/Performance/Lazy_loading) （MDN ウェブパフォーマンスガイド）
- [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) (web.dev)
