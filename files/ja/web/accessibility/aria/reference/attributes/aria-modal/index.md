---
title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-modal` 属性は、要素が表示されるときにモーダルであるかどうかを示します。

## 解説

コンテンツのセクションが「モーダル」であるということは、ナビゲーションがその領域自体に限定され、背景 (モーダルの祖先と兄弟) が非表示であることを意味します。[`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) と [`alertdialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) のコンテナーに `aria-modal="true"` を設定すると、支援技術のユーザーに「モーダル」要素の存在が示されますが、要素が実際にモーダルになるわけではありません。要素を実際にモーダルにする機能は、開発者が実装する必要があります。

> [!NOTE]
> ARIA はアクセシビリティツリーのみを変更し、支援技術がユーザーにコンテンツを提示する方法を変更します。ARIA は要素の機能や動作については何も変更しません。モーダル効果を作成するには、JavaScript を使用して動作、フォーカス、および ARIA の状態を管理する必要があります。

`dialog` および `alertdialog` のコンテナーのみに関連していて、`aria-modal="true"` を設定することで、ページ上の他のコンテンツと対話したりアクセスしたりするには、モーダルダイアログを閉じるかフォーカスを失う必要があることをユーザーに知らせるように支援技術に指示します。

モーダルダイアログでは、コンテンツが表示され、ダイアログが閉じられるまでユーザーの操作はそのセクションのみに制限されます。

モーダルダイアログを作成するときに、`aria-modal="true"` は現在のダイアログの下のウィンドウがモーダルコンテンツの一部ではないことを支援技術に伝えます。

モーダル要素が表示されたら、フォーカスはモーダル内に配置される必要があります。モーダルが表示されている場合は、閉じられるまでフォーカスがモーダル内に「閉じ込められる」必要があります。その後、支援技術（<abbr>AT</abbr>）はモーダルのコンテンツをナビゲートし、モーダルのコンテンツの範囲を理解できます。`aria-modal` 属性は、AT がモーダルの境界を伝え、ページの残りのコンテンツと区別するのに役立ちます。モーダルが閉じられると、フォーカスはモーダルをトリガーした要素に戻ります。

モーダルがその子孫要素のみを使用して制御可能であることを確認してください。モーダルダイアログに閉じるボタンがある場合、そのボタンは DOM 内のモーダルコンテナーに含まれる子孫である必要があります。

モーダル要素が表示される場合、作者は他の全てのコンテンツを不活性としてマークする必要があります（HTML の「不活性サブツリー」など）。無効なコンテンツは不活性コンテンツではありません。不活性コンテンツは、通常のブラウジングモードに加えて、支援技術ユーザーがページを詳細に探索できるようにするキャレットブラウジングなどの特殊なブラウジングモードを使用して操作することもできません。これには、コンテンツが意味を提供する可能性がある無効なコンテンツが含まれます。

[`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert) 属性はブール属性であり、その存在によって、要素とその全てのシャドウを含む子孫が不活性になることを示します。[`HTMLElement.inert`](/ja/docs/Web/API/HTMLElement/inert) が完全にサポートされるまで、[JavaScript を使用してコンテンツを不活性にする](https://samthor.au/2021/inert/) ことができます。

[`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) または [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) に `aria-modal="true"` を含めると、`aria-modal` はダイアログの外側のコンテンツは不活性であることを支援技術に通知するため、バックグラウンドコンテンツに [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) を設定する必要がなくなります。{{HTMLElement("dialog")}} 要素をサポートすることは良いですが、実装を徹底的にテストすることが極めて重要であることに注意してください。

ダイアログがモーダルでない場合（不活性な背景がなく、フォーカスがダイアログに閉じ込められていない場合）、`aria-modal="false"` 属性を含めるか完全に省略します。

## 例

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">Confirmation</h2>
    <div id="dialog_desc">
      <p>Are you sure you want to delete this file?</p>
    </div>
    <button type="button" onclick="closeDialog(this)">
      No. Close this popup.
    </button>
    <button type="button" onclick="deleteFile(this)">
      Yes. Delete the file.
    </button>
  </div>
</div>
```

この部分的な例には、全画面のスクロールできない背景に、ネストされた `alertdialog` が含まれています。

[`role="alertdialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) は、アラートダイアログコンテナーとして機能する要素を識別します。[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) は、アラートダイアログのタイトルを提供する要素を参照して、アラートダイアログにアクセシブル名を提供します。[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性は、アラートダイアログの主なメッセージまたは目的を説明するアラートダイアログのコンテンツを参照して、アラートダイアログに {{glossary("accessible description", "アクセシブル説明")}} を提供します。

`aria-modal="true"` は、`role="alertdialog"` の宣言を持つ要素にフォーカスがある限り、ダイアログの下のコンテンツはインタラクティブではないことを支援技術ユーザーに通知します。

`aria-modal` 属性は、モーダルの存在を支援技術に公開し、モーダルの背後にあるコンテンツが無効化されていることを AT ユーザーに伝えることができます。全ての ARIA 属性と同様に、`aria-modal` 自体はページの機能には影響しません。フォーカスの管理と無効化、背景要素のインタラクション、アラートダイアログからフォーカスを削除する機能は全て JavaScript で管理する必要があります。

## 値

- `false` (既定値)
  - : 要素はモーダルではありません。
- `true`
  - : 要素はモーダルです。

## 関連インターフェイス

- {{domxref("Element.ariaModal")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaModal`](/ja/docs/Web/API/Element/ariaModal) プロパティは、`aria-modal` 属性の値を反映します。
- {{domxref("ElementInternals.ariaModal")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaModal`](/ja/docs/Web/API/ElementInternals/ariaModal) プロパティは、`aria-modal` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`window`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/window_role)

継承先のロール:

- [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement("dialog")}} 要素
- [`alertdialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- HTML [`inert` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/inert)
- HTMLElement API [`inert`](/ja/docs/Web/API/HTMLElement/inert) 属性
