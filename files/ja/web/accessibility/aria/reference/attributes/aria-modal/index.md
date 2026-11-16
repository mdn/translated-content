---
title: "ARIA: aria-modal 属性"
short-title: aria-modal
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-modal
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-modal` 属性は、要素が表示されるときにモーダルであるかどうかを示します。

## 解説

コンテンツのセクションが「モーダル」であるということは、ナビゲーションがその領域自体に限定され、背景 (モーダルの祖先と兄弟) が非表示であることを意味します。[`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) と [`alertdialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) のコンテナーに `aria-modal="true"` を設定すると、支援技術のユーザーに「モーダル」要素の存在が示されますが、要素が実際にモーダルになるわけではありません。要素を実際にモーダルにする機能は、開発者が実装する必要があります。

> [!NOTE]
> ARIA はアクセシビリティツリーのみを変更し、支援技術がユーザーにコンテンツを提示する方法を変更します。ARIA は要素の機能や動作については何も変更しません。モーダル効果を作成するには、JavaScript を使用して動作、フォーカス、および ARIA の状態を管理する必要があります。

この属性は `dialog` と `alertdialog` のコンテナーでのみ使用します。`aria-modal="true"` を設定すると、モーダルダイアログを閉じるか、ダイアログからフォーカスを移動するまでページ上の他のコンテンツを操作したりアクセスしたりできないことを、支援技術からユーザーに伝えられます。

モーダルダイアログでは、コンテンツが表示され、ダイアログが閉じられるまでユーザーの操作はそのセクションのみに制限されます。

モーダルダイアログを作成するとき、`aria-modal="true"` はダイアログの背後にあるウィンドウがモーダルコンテンツの一部ではないことを支援技術に伝えます。

モーダル要素が表示されたら、フォーカスはモーダル内に配置される必要があります。モーダルが表示されている場合は、閉じられるまでフォーカスがモーダル内に「閉じ込められる」必要があります。その後、支援技術（<abbr>AT</abbr>）はモーダルのコンテンツをナビゲートし、モーダルのコンテンツの範囲を理解できます。`aria-modal` 属性は、AT がモーダルの境界を伝え、ページの残りのコンテンツと区別するのに役立ちます。モーダルが閉じられると、フォーカスはモーダルをトリガーした要素に戻ります。

モーダルがその子孫要素のみを使用して制御可能であることを確認してください。モーダルダイアログに閉じるボタンがある場合、そのボタンは DOM 内のモーダルコンテナーに含まれる子孫である必要があります。

モーダル要素が表示される場合、作者は他のすべてのコンテンツを不活性としてマークする必要があります（HTML の「不活性サブツリー」など）。無効化されたコンテンツは不活性コンテンツではありません。不活性コンテンツは、通常のブラウジングモードだけでなく、支援技術のユーザーがページを詳しく調べるためのキャレットブラウジングなど、特殊なブラウジングモードでも操作できません。これには、意味のある情報を提供する可能性のある無効化されたコンテンツも含まれます。

[`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert) 属性は論理属性です。この属性が存在すると、その要素とシャドウを含むすべての子孫要素が不活性になります。

[`dialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) または [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) に `aria-modal="true"` を設定すると、ダイアログ外のコンテンツが不活性であることを支援技術に伝えられるため、背景のコンテンツに [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) を設定する必要がなくなります。{{HTMLElement("dialog")}} 要素の対応は良好ですが、実装を徹底的にテストすることが非常に重要です。

ダイアログがモーダルでない場合（不活性な背景がなく、フォーカスがダイアログに閉じ込められていない場合）、`aria-modal="false"` 属性を含めるか完全に省略します。

## 値

- `false`（デフォルト）
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

## 例

```html
<div id="backdrop" class="no-scroll">
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc">
    <h2 id="dialog_label">確認</h2>
    <div id="dialog_desc">
      <p>本当にこのファイルを削除しますか？</p>
    </div>
    <button id="close-btn" type="button">
      いいえ。このポップアップを閉じます。
    </button>
    <button id="confirm-btn" type="button">
      はい。このファイルを削除します。
    </button>
  </div>
</div>
```

```js
document.getElementById("close-btn").addEventListener("click", () => {
  closeDialog();
});

document.getElementById("confirm-btn").addEventListener("click", (event) => {
  deleteFile();
});
```

この部分的な例には、スクロールできない全画面の背景に `alertdialog` が含まれています。

[`role="alertdialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) は、アラートダイアログコンテナーとして機能する要素を識別します。[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) は、アラートダイアログのタイトルを提供する要素を参照して、アラートダイアログのアクセシブルネームを提供します。[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性は、アラートダイアログの主なメッセージや目的を説明するコンテンツを参照し、アラートダイアログに {{glossary("accessible description", "アクセシブル説明")}} を提供します。

`aria-modal="true"` は、`role="alertdialog"` が宣言された要素にフォーカスがある間、ダイアログの背後のコンテンツを操作できないことを支援技術のユーザーに知らせます。

`aria-modal` 属性はモーダルの存在を支援技術に公開し、モーダルの背後のコンテンツが無効化されていることを支援技術のユーザーに伝えられるようにします。ほかの ARIA 属性と同様に、`aria-modal` 自体はページの機能に影響しません。フォーカス管理、背景要素の無効化や操作制御、アラートダイアログからフォーカスを移動する動作は、すべて JavaScript で実装する必要があります。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement("dialog")}} 要素
- [`alertdialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- HTML [`inert` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/inert)
- HTMLElement API [`inert`](/ja/docs/Web/API/HTMLElement/inert) 属性
