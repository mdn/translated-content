---
title: "Document: prerenderingchange イベント"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

**`prerenderingchange`** イベントは、事前レンダリングされた文書がアクティブになった（ユーザーがページを閲覧した）ときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

以下のコードは、イベントリスナーを設定して、事前レンダリングされたページ（事前レンダリングは{{domxref("Document.prerendering")}}によって検出されます）においては、事前レンダリングが完了たときに関数を実行し、事前レンダリングされていないページでは直ちに実行します。

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

> [!NOTE]
> 事前レンダリングが完了するまで遅らせたいアクティビティの種類については、[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) ランディングページ、特に[安全でない投機的読み込み条件](/ja/docs/Web/API/Speculation_Rules_API#安全でない投機的読み込み条件)の節を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerendering", "prerendering")}} プロパティ
