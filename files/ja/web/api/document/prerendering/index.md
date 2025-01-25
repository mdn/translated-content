---
title: "Document: prerendering プロパティ"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: 420ee5d00e14eec60923ada0e48325e44d613a1b
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

**`prerendering`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、この文書が現在[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) によって開始された事前レンダリングの過程にある場合に `true` を返します。

## 値

論理値。文書が現在事前レンダリング中であれば `true` を返し、そうでなければ `false` を返します。事前レンダリングが完了した文書や、事前レンダリングされていない文書に対しては `false` を返します。

## 例

ページが事前レンダリングされている間にアクティビティを実行するには、`prerendering` プロパティを調べます。例えば、アナリティクスを実行することができます。

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

事前レンダリングされた文書がアクティブになると、{{domxref("PerformanceNavigationTiming.activationStart")}} には、事前レンダリングが開始されてから実際に文書がアクティブになるまでの時間を表す {{domxref("DOMHighResTimeStamp")}} 値が設定されます。以下の関数は、事前レンダリングが行われているページや完了したページを調べることができます。

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

事前レンダリングされたページがページを閲覧しているユーザーによってアクティブ化されると、{{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベントが発生します。これは、前回まではページ読み込み時に既定で開始されていたアクティビティを、ページがユーザーによって実際に表示されるまで遅らせたい場合に使用することができます。以下のコードは、事前レンダリングされたページで、事前レンダリングが完了したら関数を実行する、または事前レンダリングされていないページですぐに関数を実行するイベントリスナーを設定します。

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

> **メモ:** [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) ランディングページ、特に[安全でない投機的読み込み条件](/ja/docs/Web/API/Speculation_Rules_API#安全でない投機的読み込み条件)の節で、遅延させたい活動の種類に関する詳細情報を参照してください。

事前レンダリングがアクティベーションされた頻度を測定するには、次の 3 つの API をすべて組み合わせます。 `document.prerendering` はページが現在事前レンダリング中であるかを検出し、`prerenderingchange` は事前レンダリングされた後にアクティベートされたかを監視し、`activationStart` はページが過去に事前レンダリングされたかをチェックします。

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
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} イベント
- {{domxref("PerformanceNavigationTiming.activationStart")}} プロパティ
