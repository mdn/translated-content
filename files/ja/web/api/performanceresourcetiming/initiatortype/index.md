---
title: PerformanceResourceTiming.initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
l10n:
  sourceCommit: 9a35e1c5480419efc4cd7bcfd856ff64cdfb5b54
---

{{APIRef("Performance API")}}

**`initiatorType`** は読み取り専用プロパティで、リソースの読み込みを開始したウェブプラットフォームの機能を表す文字列です。

> [!NOTE]
> このプロパティは、読み込まれるコンテンツの種類を表すものではありません。`.css` ファイルは {{HTMLElement("link")}} 要素を使用して読み込むことができ、 `initiatorType` が `link` となります。CSS ファイルで `background: url()` を使用して画像を読み込んだ場合、 `initiatorType` は `img` ではなく `css` になります。

## 値

`initatorType` プロパティは以下の値を取ることができ、どの条件にも一致しない場合は `other` を取ることができます。

- `audio`
  - : このリクエストが {{HTMLElement("audio")}} 要素の `src` 属性によって開始された場合。
- `beacon`
  - : このリクエストが {{domxref("navigator.sendBeacon()")}} メソッドによって開始された場合。
- `body`
  - : このリクエストが {{HTMLElement("body")}} 要素の `background` 属性によって開始された場合。
- `css`
  - : このリクエストが CSS の `url()` 関数によって開始された場合。
- `early-hint`
  - : このリクエストが {{HTTPStatus("103")}} の `Early Hint` レスポンスによって開始された場合。
- `embed`
  - : このリクエストが {{HTMLElement("embed")}} 要素の `src` 属性によって開始された場合。
- `fetch`
  - : このリクエストが {{domxref("Window/fetch", "fetch()")}} メソッドによって開始された場合。
- `frame`
  - : このリクエストが {{HTMLElement("frame")}} 要素の読み込みによって開始された場合。
- `iframe`
  - : このリクエストが {{HTMLElement("iframe")}} 要素の `src` 属性によって開始された場合。
- `icon` {{non-standard_inline}}
  - : このリクエストがファビコンによって開始された場合。標準外であり、Safari でのみ報告されます。
- `image`
  - : このリクエストが {{SVGElement("image")}} 要素によって開始された場合。
- `img`
  - : このリクエストが {{HTMLElement("img")}} 要素の `src` または `srcset` 属性によって開始された場合。
- `input`
  - : このリクエストが {{HTMLElement("input")}} 要素の `image` 型によって開始された場合。
- `link`
  - : このリクエストが {{HTMLElement("link")}} 要素によって開始された場合。
- `navigation`
  - : このリクエストがナビゲーションリクエストによって開始された場合。
- `object`
  - : このリクエストが {{HTMLElement("object")}} 要素によって開始された場合。
- `ping`
  - : このリクエストが {{HTMLElement("a")}} 要素の `ping` によって開始された場合。
- `script`
  - : このリクエストが {{HTMLElement("script")}} 要素によって開始された場合。
- `track`
  - : このリクエストが {{HTMLElement("track")}} 要素の `src` によって開始された場合。
- `video`
  - : このリクエストが {{HTMLElement("video")}} 要素の `poster` または `src` によって開始された場合。
- `xmlhttprequest`
  - : このリクエストが {{domxref("XMLHttpRequest")}} によって開始された場合。

## 例

### リソースのフィルタリング

`initiatorType` プロパティを使用すると、特定のリソー スタイミング項目のみを取得することができます。例えば、{{HTMLElement("script")}} 要素によって開始されたものだけを取得することができます。

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  const scripts = list.getEntries().filter((entry) => {
    return entry.initiatorType === "script";
  });
  console.log(scripts);
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.initiatorType === "script";
});
console.log(scripts);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
