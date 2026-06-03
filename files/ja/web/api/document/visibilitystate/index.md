---
title: "Document: visibilityState プロパティ"
short-title: visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{ApiRef("DOM")}}

**`Document.visibilityState`** は読み取り専用プロパティで、この文書の可視性を返します。文書がバックグラウンドにあるか、最小化されたウィンドウにあるか、あるいはその他の理由によってユーザーから見えない状態にあるかどうかを調べるために使用することができます。

このプロパティが変更されると、{{domxref("Document/visibilitychange_event", "visibilitychange")}} イベントが {{domxref("Document")}} に配信されます。

{{domxref("Document.hidden")}} プロパティは、ページが非表示かどうかを判断する別の方法を提供します。

## 値

利用可能な値は次のとおりです。

- `visible`
  - : ページのコンテンツは、少なくとも部分的に表示されている可能性があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブにあることを意味します。
- `hidden`
  - : ページのコンテンツは、ユーザーに表示されていません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 OS の画面ロックがアクティブであることを意味します。

## 例

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // 振る舞いを変更します...
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.hidden")}}
- [ページ可視性 API](/ja/docs/Web/API/Page_Visibility_API)
