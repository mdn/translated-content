---
title: "Document: visibilityState プロパティ"
short-title: visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{ApiRef("DOM")}}

**`Document.visibilityState`** は読み取り専用プロパティで、この文書の可視性を返します。文書がバックグラウンドにあるか、最小化されたウィンドウにあるか、あるいはユーザーから見えないかどうかを調べるために使用することができます。

このプロパティを変更すると、{{domxref("Document/visibilitychange_event", "visibilitychange")}} イベントが {{domxref("Document")}} へ送られます。

{{domxref("Document.hidden")}} プロパティは、ページが非表示かどうかを判断する別の方法を提供します。

## 値

利用可能な値は次のとおりです。

- `visible`
  - : ページのコンテンツは、少なくとも部分的に表示される場合があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブであることを意味します。
- `hidden`
  - : ページのコンテンツはユーザーには表示されません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 OS の画面ロックがアクティブであることを意味します。

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
