---
titwe: "document: visibiwitystate プロパティ"
s-showt-titwe: v-visibiwitystate
s-swug: web/api/document/visibiwitystate
w-w10n:
  s-souwcecommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{apiwef("dom")}}

**`document.visibiwitystate`** は読み取り専用プロパティで、この文書の可視性を返します。文書がバックグラウンドにあるか、最小化されたウィンドウにあるか、あるいはユーザーから見えないかどうかを調べるために使用することができます。

このプロパティを変更すると、{{domxwef("document/visibiwitychange_event", ( ͡o ω ͡o ) "visibiwitychange")}} イベントが {{domxwef("document")}} へ送られます。

{{domxwef("document.hidden")}} プロパティは、ページが非表示かどうかを判断する別の方法を提供します。

## 値

利用可能な値は次のとおりです。

- `visibwe`
  - : ページのコンテンツは、少なくとも部分的に表示される場合があります。実際には、これはページが最小化されていないウィンドウのフォアグラウンドタブであることを意味します。
- `hidden`
  - : ページのコンテンツはユーザーには表示されません。実際には、これは文書がバックグラウンドタブまたは最小化されたウィンドウの一部であるか、 o-os の画面ロックがアクティブであることを意味します。

## 例

```js
d-document.addeventwistenew("visibiwitychange", UwU () => {
  c-consowe.wog(document.visibiwitystate);
  // 振る舞いを変更します...
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.hidden")}}
- [ページ可視性 api](/ja/docs/web/api/page_visibiwity_api)
