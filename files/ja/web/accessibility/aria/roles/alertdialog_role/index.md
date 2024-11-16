---
title: alertdialog ロールの使用
slug: Web/Accessibility/ARIA/Roles/alertdialog_role
---

{{AccessibilitySidebar}}

### 説明

このテクニックは、[`alertdialog`](http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#alertdialog) ロールの使用方法を示しています。

`alertdialog` ロールは、ユーザーの即時の注意を要する緊急情報をユーザーに通知するために使用されます。 その名前が示すように、`alertdialog` は一種のダイアログです。 これは、「[ARIA: `dialog` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role)」で提供されているほとんどの指示が `alertdialog` ロールにも適用できることを意味します。

- アラートダイアログには常に（`aria-labelledby` または `aria-label` を通じて）アクセス可能な名前を付ける必要があります。 ほとんどの場合、アラートテキストはアラートダイアログのアクセス可能な説明としてマークアップする必要があります（`aria-describeby` を使用）。
- 通常のアラートとは異なり、アラートダイアログには少なくとも 1 つのフォーカス可能なコントロールがあり、アラートダイアログが表示されたらフォーカスをそのコントロールに移動する必要があります。 一般にアラートダイアログには、フォーカスを移動するために使用できる\[確認]、\[閉じる]、または\[キャンセル]ボタンが少なくともあります。 さらに、アラートダイアログには、テキストフィールド、タブ、チェックボックスなどの他のインタラクティブなコントロールを含めることができます。 どの特定のコントロールにフォーカスに移動するべきかは、ダイアログの目的によって異なります。
- アラートダイアログ内のタブ順序は折り返す必要があります。

通常のダイアログとの違いは、`alertdialog` ロールはアラート、エラー、またはワーニングが発生した場合にのみ使用するべきであることです。 言い換えれば、ダイアログの情報とコントロールがユーザーの即時の注意を必要とするとき、`dialog` の代わりに `alertdialog` が使用されるべきです。 この区別をするのは開発者次第です。

その緊急性のために、アラートダイアログは常にモーダルでなければなりません。

> [!NOTE]
> このロールは、インタラクティブなコントロールに関連付けられているアラートメッセージにのみ使用するべきです。 アラートダイアログに静的コンテンツしか含まれておらず、インタラクティブなコントロールがまったくない場合は、`alertdialog` がここで使用する適切なロールではない可能性があります。 その場合は、代わりに `alert` ロールを使用するべきです（[ARIA: `alert` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Alert_Role)の説明を参照）。

### ユーザーエージェントと支援技術への影響

`alertdialog` ロールが使用されるとき、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ API のダイアログとして要素を公開します。
- オペレーティングシステムのアクセシビリティ API がサポートしている場合は、それを使用してアクセス可能なアラートイベントを発生させます。

アラートダイアログが表示されたら、スクリーンリーダーはアラートをアナウンスするべきです。

アラートダイアログが正しくラベル付けされ、ダイアログ内のコントロールにフォーカスが移動したら、スクリーンリーダーは、フォーカスが当たっている要素をアナウンスする前に、ダイアログのアクセス可能なロール、名前、およびオプションの説明をアナウンスするべきです。

> [!NOTE]
> 支援技術がこの技術をどのように処理するかについては、意見が異なる場合があります。 上記の情報はそれらの意見の一つであり、したがって規範的なものではありません。

### 例

#### 例 1: 基本的なアラートダイアログ

以下のコードスニペットは、メッセージと\[OK]ボタンだけを提供するアラートダイアログをマークアップする方法を示しています。

```html
<div
  role="alertdialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Title">
      あなたのログインセッションは期限切れになりそうです
    </h2>
    <p id="dialog1Desc">
      セッションを延長するには、[OK]ボタンをクリックしてください。
    </p>
    <button>OK</button>
  </div>
</div>
```

#### 動作する例

TBD

### 注

### 使用された ARIA 属性

- [alertdialog](https://www.w3.org/TR/wai-aria-1.1/#alertdialog)
- [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
- [aria-describedby](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)

### 関連する ARIA 技術

- [ARIA: `dialog` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [ARIA: `alert` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Alert_Role)

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース
