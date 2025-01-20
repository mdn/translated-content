---
title: "Document: prerenderingchange イベント"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: 420ee5d00e14eec60923ada0e48325e44d613a1b
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

### 事前レンダリング中にコードが実行されるのを防ぐ

この例は、事前レンダリング中に実行されるコードを、ページがアクティブになるまで遅延させる方法を示しています。
これは、ページが実際に閲覧された場合にのみ関連する分析コードを遅延させるのに役立ちます。

このコードは、 {{domxref("Document.prerendering")}} を使用して事前レンダリングが実行中である場合、ページがアクティブ化された際にアナリティクスの初期化関数を実行するイベントリスナーを追加します。事前レンダリングを実行していないページでは、アナリティクスコードが即座に実行されます。

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

この種のコードは、事前レンダリングがどの程度頻繁に起動されるかを測定するために使用すべきではありません。なぜなら、事前レンダリングされたページがすでに起動された後にコードが実行される可能性があるからです。

> [!NOTE]
> 事前レンダリングが完了するまで遅らせたいアクティビティの種類については、[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) ランディングページ、特に[安全でない投機的読み込み条件](/ja/docs/Web/API/Speculation_Rules_API#安全でない投機的読み込み条件)の節を参照してください。

### 事前レンダリングの起動を測定

このコードは、事前レンダリングがどの程度多く起動されたかを測定する方法を示しています。
事前レンダリングの起動イベントを追跡するために `prerenderingchange` を使用し、ナビゲーションの起動を追跡するために {{domxref("Performance.getEntriesByType()")}} を使用しています。

```js
if (document.prerendering) {
  document.addEventListener(
    "prerenderingchange",
    () => {
      console.log("Prerender activated after this script ran");
    },
    { once: true },
  );
} else if (performance.getEntriesByType("navigation")[0]?.activationStart > 0) {
  console.log("Prerender activated before this script ran");
} else {
  console.log("This page load was not via prerendering");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerendering", "prerendering")}} プロパティ
- {{domxref("PerformanceNavigationTiming.activationStart")}} プロパティ
