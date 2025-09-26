---
title: PerformanceResourceTiming.renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Resource Timing API")}}

**`renderBlockingStatus`** は読み取り専用のプロパティで、リソースのレンダーブロッキング状態を返します。

次のようなリソースを特定するのに有用です。

- レンダーブロッキングでなかったために遅延する可能性があった
- レンダーブロッキングであったために先読みできた

## 解説

レンダーブロッキングリソースとは、フォント、CSS、JavaScript などの静的ファイルで、ブラウザーがページのコンテンツを画面に描画するのを妨害したり、遅らせたりするものです。ブラウザーはこれらのブロックリソースを自動的に判断し、すべてのスタイルシートと同期スクリプトが読み込まれ評価される前に、画面にピクセルを描画しないようにします。これにより、スタイル未設定のコンテンツが一瞬現れること（以下、FOUC）を防ぐことができます。

自動的なレンダーブロック機構に加えて、`blocking="render"` を属性と値として {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("link")}} 要素に提供して、明示的にレンダーブロックを設定することができます。例えば次のようにします。

```html
<link blocking="render" href="critical-font.woff2" as="font" />
```

## 値

`renderBlockingStatus` プロパティは以下の値を取ります。

- `"blocking"`
  - : このリソースがレンダリングをブロックする可能性がある。
- `"non-blocking"`
  - : このリソースはレンダリングをブロックしない。

## 例

### レンダリングをブロックするリソースをログ出力

`renderBlockingStatus` プロパティを使用すると、レンダリングをブロックしているリソースを確認することができます。

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.renderBlockingStatus === "blocking") {
      console.log(`${entry.name} is render-blocking.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.renderBlockingStatus === "blocking") {
    console.log(`${entry.name} is render-blocking.`);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
