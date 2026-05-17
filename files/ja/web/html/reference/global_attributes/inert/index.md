---
title: HTML `inert` グローバル属性
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

**`inert`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は論理属性で、要素とそのフラットツリーの子孫すべてが「不活性」になることを示す論理属性です。`inert` 属性は、操作可能であってはならないコンテンツの範囲に追加することができます。要素が不活性状態になると、その要素およびすべての子要素（リンク、ボタン、フォームコントロールなどの通常は操作可能な要素を含む）は、フォーカスを受け取ったりクリックされたりすることができなくなるため、無効化されます。また、`inert` 属性は、画面外にあるべき要素や非表示にするべき要素にも追加できます。不活性状態の要素とその子要素は、タブ順序およびアクセシビリティツリーから除外されます。

[`showModal()`](/ja/docs/Web/API/HTMLDialogElement/showModal) で生成されたモーダルダイアログ ({{htmlelement("dialog")}}) は、不活性状態から脱します。つまり、先祖から不活性を受け継ぐことはなく、自身に `inert` 属性を明示的に設定した場合にのみ不活性になります。

> [!NOTE]
> `inert` はグローバルな属性であり、どんな要素にも使用することができますが、一般的にはコンテンツの範囲に使用されます。個々のコントロールを「不活性」にするには、代わりに [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled) 属性と CSS の {{cssxref(":disabled")}} スタイルを使用することを検討してください。

HTML の不活性な要素と、そのフラットツリーの子孫要素は次のようになります。

- ユーザーが要素をクリックしたときに {{domxref("Element/click_event", "click")}} イベントが発行されないようにします。
- 要素にフォーカスが当たらないようにして、 {{domxref("Element/focus_event", "focus")}} イベントが発生することを防ぎます。
- ブラウザーのページ内検索機能を使用しているときに、要素のコンテンツが検索/照合されるのを防ぎます。
- ユーザーが要素内のテキストを選択できないようにします。これは、 CSS プロパティ {{cssxref("user-select")}} を使用してテキストの選択を無効にするのと同じです。
- ユーザーが、編集可能な要素のコンテンツを編集できないようにします。これは例えば、テキストの {{htmlelement("input")}} フィールドのコンテンツや、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定されたテキスト要素を含みます。
- アクセシビリティツリーから要素とそのコンテンツを除外して、支援技術から要素とそのコンテンツを非表示にします。

他にも以下の機能を使用して、要素とその子孫要素を不活性状態に設定することができます。

- CSS の {{cssxref("interactivity")}} プロパティ
- DOM の {{domxref("HTMLElement.inert")}} プロパティ

## アクセシビリティ

`inert` 属性を使用する際には、アクセシビリティに十分配慮してください。デフォルトでは、要素やそのサブツリーが不活性であるかどうかを視覚的に指示する方法はありません。ウェブ開発者として、アクティブなコンテンツ部分と不活性なコンテンツ部分を明確に示すことは、あなたの責任です。

コンテンツの不活性化について視覚的・非視覚的な手がかりを提供する一方で、視覚ビューポートにはコンテンツの一部しか格納されていない可能性があることも覚えておいてください。ユーザーはコンテンツの小さなセクションにズームインされるかもしれませんし、コンテンツをまったく見ることができないかもしれません。不活性な節が不活性に見えない場合、不満や使い勝手の悪さにつながる可能性があります。

## 例

この例では、2 つ目の {{htmlelement("div")}} とそのすべての子要素が、`inert` 属性によって不活性にされています。

```html
<div>
  <label for="button1">ボタン 1</label>
  <button id="button1">これは不活性ではありません</button>
</div>
<div inert>
  <label for="button2">ボタン 2</label>
  <button id="button2">これは不活性です</button>
</div>
```

{{ EmbedLiveSample('Examples', 560, 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("dialog")}} 要素
- DOM の {{domxref("HTMLElement.inert")}} プロパティ
- CSS の {{cssxref("interactivity")}} プロパティ
