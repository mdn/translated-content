---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
---

{{ ApiRef("DOM") }}

**`Document.visibilityState`** 読み取り専用プロパティは、文書 ({{domxref('document')}}) の可視性、つまりこの要素が現在表示されているかのコンテキストを返します。 文書がバックグラウンドにあるのか、非表示のタブにあるのか、プリレンダリングのためにのみ読み込まれるのかを知ることは有用です。 可能な値は次のとおりです。

- `visible`
  - : ページのコンテンツは、少なくとも部分的に表示される場合があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブであることを意味します。
- `hidden`
  - : ページのコンテンツはユーザーには表示されません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 OS の画面ロックがアクティブであることを意味します。
- `prerender` {{deprecated_inline}}
  - : ページのコンテンツはプリレンダリングされており、ユーザーには表示されません ([`document.hidden`](/ja/docs/Web/API/Document/hidden) の目的で非表示と見なされます)。 文書はこの状態で開始する場合がありますが、別の値から移行することはありません。 注: これは標準から削除されました。 詳細については、互換性の表を確認してください。

このプロパティの値が変更されると、 {{domxref("Document/visibilitychange_event", "visibilitychange")}} イベントが {{domxref("Document")}} に送信されます。

これの一般的な用途は、文書がプリレンダリングされている場合に一部のアセットのダウンロードを防止したり、文書がバックグラウンドにあるか最小化されている場合に一部のアクティビティを停止したりすることです。

## 構文

```
var string = document.visibilityState
```

## Examples

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.visibilityState );
  // 振る舞いを変更します...
})
```

## 仕様書

| 仕様書                                                                                                                                                   | 状態                                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('Page Visibility API','#visibility-states-and-the-visibilitystate-enum', 'Document.visibilityState')}} | {{Spec2('Page Visibility API')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
