---
title: "ContentVisibilityAutoStateChangeEvent: ContentVisibilityAutoStateChangeEvent() コンストラクター"
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Containment")}}

**`ContentVisibilityAutoStateChangeEvent()`** コンストラクターは、新しい {{domxref("ContentVisibilityAutoStateChangeEvent")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new ContentVisibilityAutoStateChangeEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの型を表します。 `ContentVisibilityAutoStateChangeEvent` の場合、これは常に `event` です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `skipped`
      - : 論理値で、 `true` はユーザーエージェントが[要素のコンテンツをスキップ](/ja/docs/Web/CSS/CSS_containment#skips_its_contents)する場合に、 `false` はそれ以外の場合に設定されます。

## 例

開発者がこのコンストラクターを手動で使用することはありません。新しい `ContentVisibilityAutoStateChangeEvent` オブジェクトは {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベントが発行された結果、ハンドラーが呼び出されたときに生成されます。

```js
canvasElem.addEventListener("contentvisibilityautostatechange", (event) => {
  // …
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} イベント
- [CSS 拘束](/ja/docs/Web/CSS/CSS_containment)
- {{cssxref("content-visibility")}} プロパティ
- {{cssxref("contain")}} プロパティ
