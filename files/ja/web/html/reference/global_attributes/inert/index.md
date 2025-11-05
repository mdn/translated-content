---
title: HTML inert グローバル属性
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`inert`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は論理属性で、要素とそのフラットツリーの子孫すべてが「不活性」になることを示す論理属性です。 [`showModal()`](/ja/docs/Web/API/HTMLDialogElement/showModal) に対応するモーダルダイアログ ({{htmlelement("dialog")}}) は、不活性状態から脱します。つまり、先祖から不活性を受け継ぐことはなく、自身に `inert` 属性を明示的に設定した場合にのみ不活性になります。

具体的には、`inert`は以下のことを行います。

- ユーザーが要素をクリックしたときに {{domxref("Element/click_event", "click")}} イベントが発行されないようにします。
- 要素にフォーカスが当たらないようにして、 {{domxref("Element/focus_event", "focus")}} イベントが発生することを防ぎます。
- ブラウザーのページ内検索機能を使用しているときに、要素のコンテンツが検索/照合されるのを防ぎます。
- ユーザーが要素内のテキストを選択できないようにします。これは、 CSS プロパティ {{cssxref("user-select")}} を使用してテキストの選択を無効にするのと同じです。
- ユーザーが、編集可能な要素のコンテンツを編集できないようにします。
- アクセシビリティツリーから要素とそのコンテンツを除外して、支援技術から要素とそのコンテンツを非表示にします。

```html
<div inert>
  <!-- コンテンツ -->
</div>
```

`inert` 属性は、インタラクティブであってはならないコンテンツのセクションに追加することができます。要素が不活性化されると、リンクやボタン、フォームコントロールのような通常インタラクティブな要素を含む、その要素のすべての子孫は、フォーカスを得たりクリックしたりすることができないため、無効となります。

`inert` 属性は、オフスクリーンや非表示にすべき要素にも追加することができます。不活性な要素は、その子孫とともに、タブ順序とアクセシビリティツリーから取り除かれます。

> [!NOTE]
> `inert` はグローバルな属性であり、どんな要素にも使用することができますが、一般的にはコンテンツのセクションに使用されます。個々のコントロールを「不活性」にするには、代わりに [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性と CSS の [`:disabled`](/ja/docs/Web/CSS/Reference/Selectors/:disabled) スタイルを使用することを検討してください。

## アクセシビリティの考慮

inert` 属性を使用する際には、アクセシビリティに十分配慮してください。既定では、要素やそのサブツリーが不活性であるかどうかを視覚的に指示する方法はありません。ウェブ開発者として、アクティブなコンテンツ部分と不活性なコンテンツ部分を明確に示すことは、あなたの責任です。

コンテンツの不活性化について視覚的・非視覚的な手がかりを提供する一方で、視覚ビューポートにはコンテンツの一部しか格納されていない可能性があることも覚えておいてください。ユーザーはコンテンツの小さなセクションにズームインされるかもしれませんし、コンテンツをまったく見ることができないかもしれません。不活性な節が不活性に見えない場合、不満や使い勝手の悪さにつながる可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("dialog")}} 要素
- HTML の {{domxref("HTMLElement.inert")}} DOM プロパティ
- [Introducing inert](https://web.dev/articles/inert)
- [The "inert" attribute is finally coming to the web](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
