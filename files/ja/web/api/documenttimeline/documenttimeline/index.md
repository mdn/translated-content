---
title: "DocumentTimeline: DocumentTimeline() コンストラクター"
short-title: DocumentTimeline()
slug: Web/API/DocumentTimeline/DocumentTimeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Animations") }}

**`DocumentTimeline()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のコンストラクターで、現在の閲覧コンテキストのアクティブな文書に関連付けられた {{domxref("DocumentTimeline")}} オブジェクトの新しいインスタンスを作成します。

## 構文

```js-nolint
new DocumentTimeline(options)
```

### 引数

- `options` {{optional_inline}}
  - : 新しいタイムラインのオプションを指定します。以下のプロパティが利用できます。
    - `originTime` {{optional_inline}}
      - : 数値で、{{domxref("DocumentTimeline")}} のゼロ時刻を、{{domxref("Performance.timeOrigin")}} 関連のミリ秒数で指定します。
        既定値は `0` です。

## 例

### 原点時刻

`originTime` が 0 の {{domxref("DocumentTimeline")}} は {{domxref("Performance.timeOrigin")}} から始まる時刻をカウントします。これは {{domxref("Document.timeline")}} と同じ動作です。

```js
const timeline = new DocumentTimeline();
console.log(timeline.currentTime === document.timeline.currentTime); // true
```

0 以外の `originTime` を設定すると、{{domxref("Document.timeline")}} から{{domxref("DocumentTimeline")}} をその分だけずらします。

```js
const offsetTimeline = new DocumentTimeline({ originTime: 500 });
console.log(document.timeline.currentTime - offsetTimeline.currentTime); // 500
```

現在の瞬間に対して相対的な {{domxref("DocumentTimeline")}} を構築することができます。

```js
const nowTimeline = new DocumentTimeline({
  originTime: document.timeline.currentTime,
});
console.log(nowTimeline.currentTime); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}}
