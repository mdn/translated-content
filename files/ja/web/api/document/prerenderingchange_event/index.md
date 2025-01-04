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

### プリレンダリング中のコード実行を防止する
この例では、プリレンダリング中に実行されるはずのコードを、ページがアクティブになった後まで延期する方法を示しています。このやり方は、ページが実際に表示された場合にのみ発火したいアナリティクス関連のコードを延期する場合に役立ちます。

このコードは、 {{domxref("Document.prerendering")}} を使用してプリレンダリングが実行されているかどうかを確認し、実行されている場合は、ページがアクティブ化されたら分析初期化関数を実行するイベントリスナーを追加します。プリレンダリングされていないページでは、分析コードはすぐに実行されます。

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

なお、上記のコードはプリレンダリングされたページがアクティブ化された後にコードが実行される可能性があるため、この種のコードはプリレンダリングのアクティブ化の頻度を測定するために使用すべきではないことに注意してください。

> [!NOTE]
> 事前レンダリングが完了するまで遅らせたいアクティビティの種類については、[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) ランディングページ、特に[安全でない投機的読み込み条件](/ja/docs/Web/API/Speculation_Rules_API#安全でない投機的読み込み条件)の節を参照してください。

### プリレンダリングのアクティブ化を測定する
以下のコードは、プリレンダリングがアクティブ化される頻度を測定する方法を示しています。 
`prerenderingchange` を使用してアクティブ化イベントを追跡し、 {{domxref("Performance.getEntriesByType()")}} を使用してナビゲーションによるアクティブ化を追跡します。

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
