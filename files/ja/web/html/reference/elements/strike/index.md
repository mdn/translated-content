---
title: HTML `<strike>` 取り消し線要素
short-title: <strike>
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

**`<strike>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストの上に取り消し線（水平線）を引きます。

> [!WARNING]
> この要素は HTML 4 および XHTML 1 で非推奨になり、[HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike) で廃止されました。意味的に適切であれば、すなわち、削除されたコンテンツを表すのであれば、代わりに {{HTMLElement("del")}} を使用してください。それ以外の場合は {{HTMLElement("s")}} を使用してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

## 例

```html
&lt;strike&gt;: <strike>今日のおすすめ: サーモン</strike> 売り切れ<br />
&lt;s&gt;: <s>今日のおすすめ: サーモン</s> 売り切れ
```

### 結果

{{EmbedLiveSample("Example")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("s")}} 要素
- {{HTMLElement("del")}} 要素（データが削除された場合に使用）
- CSS の {{CSSxRef("text-decoration")}} プロパティ（取り消し線のスタイルを実現するために用いることができる）
