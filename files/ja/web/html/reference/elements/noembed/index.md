---
title: HTML `<noembed>` 埋め込みフォールバック要素
short-title: <noembed>
slug: Web/HTML/Reference/Elements/noembed
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

**`<noembed>`** は [HTML](/ja/docs/Web/HTML) の要素で、廃止された、標準外の方法であり、 {{HTMLElement("embed")}} 要素に対応していないブラウザーや、ユーザーが仕様とした種類の[埋め込みコンテンツ](/ja/docs/Web/HTML/Guides/Content_categories#埋め込みコンテンツ)に対応していないブラウザーで代替または「フォールバック」コンテンツを提供するものです。これは HTML 4.01 で非推奨となり、代替コンテンツは {{HTMLElement("object")}} 要素の開始タグと終了タグの間に配置されるようになりました。

> [!NOTE]
> 現在のところ、この要素はまだ多くのブラウザーで動作しますが、廃止されており、使用するべきではありません。代わりに {{HTMLElement("object")}} 要素の開始タグと終了タグの間にフォールバックコンテンツを入れて使用して下さい。

## 例

`<noembed>` 要素内のメッセージは、ブラウザーが `<embed>` 要素に対応していない場合にのみ表示されます。

### 代替コンテンツの表示

```html
<embed
  type="vide/webm"
  src="/media/examples/flower.mp4"
  width="200"
  height="200" />
<noembed>
  <h1>代替コンテンツ</h1>
</noembed>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
