---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{ApiRef("DOM")}}

**`Document.visibilityState`** は読み取り専用プロパティで、文書 ({{domxref('document')}}) の可視性、つまりこの要素がこれで見えるようになったのはどのコンテキストであるかを返します。文書がバックグラウンドにあるのか、非表示のタブにあるのか、プリレンダリングのためにのみ読み込まれるのかを知るのに有用です。

利用可能な値は次のとおりです。

- `visible`
  - : ページのコンテンツは、少なくとも部分的に表示される場合があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブであることを意味します。
- `hidden`
  - : ページのコンテンツはユーザーには表示されません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 OS の画面ロックがアクティブであることを意味します。

このプロパティの値が変更されると、 {{domxref("Document/visibilitychange_event", "visibilitychange")}} イベントが {{domxref("Document")}} に送信されます。

これの一般的な用途は、文書がプリレンダリングされている場合に一部のアセットのダウンロードを防止したり、文書がバックグラウンドにあるか最小化されている場合に一部のアクティビティを停止したりすることです。

## 構文

```js-nolint
document.visibilityState
```

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
