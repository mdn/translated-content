---
title: "ARIA: checkbox ロール"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

`checkbox` ロールは、チェック可能な対話型コントロールのためのものです。`role="checkbox"` が指定された要素には、支援技術にチェックボックスのステートを通知するために、[`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性も指定する必要があります。

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">設定を記憶する</label>
```

> [!NOTE]
> ARIA の第一原則は、ネイティブの HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA を追加する代わりにネイティブなものを使用することです。次のように、代わりに [HTML のチェックボックスである `<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)を（関連付けられた {{HTMLElement('label')}} 付きで）使用してください。これは、必要なすべての機能をネイティブに提供します。

```html
<input type="checkbox" id="chk1-label" name="RememberPreferences" />
<label for="chk1-label">設定を記憶する</label>
```

## 解説

ネイティブの HTML チェックボックス ([`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)) のフォームコントロールは、2 つのステート（"checked" または "not checked"）、のみを持つことができ、不確定な ([`indeterminate`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)) ステートは JavaScript を介して設定可能です。 同様に、`role="checkbox"` を持つ要素は、`aria-checked` 属性を介して、`true`、`false`、`mixed` の 3 つのステートを公開できます。

チェックボックスは対話的なコントロールであるため、フォーカス可能でキーボードからアクセスできる必要があります。 ロールがフォーカス不可能な要素に適用される場合は、[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を使用してこれを変更します。 チェックボックスをアクティブ化するために必要なキーボードショートカットは、<kbd>スペース</kbd> キーです。

開発者は、チェックボックスがアクティブ化されたときに、`aria-checked` 属性の値を動的に変更する必要があります。

### すべての子要素は表示用である

プラットフォームのアクセシビリティ API で表される際、テキストのみを含むことができるユーザーインターフェイス要素がいくつかあります。アクセシビリティ API は、`checkbox` に含まれる意味的要素を表す方法を持っていません。
この制限に対処するため、ブラウザーは、`checkbox` 要素のすべての子孫要素に対して自動的にロール [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) を適用します。これは、意味的なな子要素に対応しないロールであるためです。

例えば、見出しを含む以下の `checkbox` 要素を考えてみましょう。

```html
<div role="checkbox"><h6>このチェックボックスの名前</h6></div>
```

`checkbox` の子要素はプレゼンテーション要素であるため、次のコードは以下と同等です。

```html-nolint
<div role="checkbox"><h6 role="presentation">このチェックボックスの名前</h6></div>
```

支援技術のユーザーの視点から見ると、この見出しは存在しません。なぜなら、前回のコードスニペットは、[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)において以下と同等だからです。

```html
<div role="checkbox">このチェックボックスの名前</div>
```

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : `aria-checked` の値は、チェックボックスのステートを定義します。 この属性には、次の 3 つの値のいずれかがあります。
    - `true`
      - : チェックボックスがチェックされています
    - `false`
      - : チェックボックスがチェックされていません
    - `mixed`
      - : チェックボックスが部分的にチェックされているか、中立です

- `tabindex="0"`
  - : 支援技術のユーザーが Tab で移動してすぐに読み始めることができるように、フォーカス可能にするために使用します。

### キーボードインタラクション

| キー                | 機能                                 |
| ------------------- | ------------------------------------ |
| <kbd>スペース</kbd> | チェックボックスをアクティブ化します |

### 必要な JavaScript

#### 必要なイベントハンドラー

- `onclick`
  - : チェックボックスと、その状態を変更する関連ラベルの両方に対するマウスクリックを処理し、`aria-checked` 属性の値を変更するとともに、視覚障害のないユーザーに対してチェックされているか、またはチェックされていないように現れるよう、チェックボックスの外観を変更します。
- `onKeyDown`
  - : ユーザーが <kbd>スペース</kbd> キーを押した場合を処理して、`aria-checked` 属性の値を変更することでチェックボックスの状態を変更し、チェックボックスの外観を変更することで、視力のあるユーザーにチェックされているかどうかを見せます。

## 例

次の例では、CSS と JavaScript を使用して、本来は意味を持たないチェックボックス要素を作成し、その要素のチェック状態（チェックあり／なし）を処理しています。

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">設定を記憶する</label>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
const item = document.getElementById("chkPref");
const label = document.getElementById("chk1-label");

function changeCheckbox(code) {
  const checked = item.getAttribute("aria-checked");

  if (code && code !== "Space") {
    return;
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}

item.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

label.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

item.addEventListener("click", changeCheckbox);
label.addEventListener("click", changeCheckbox);
```

{{EmbedLiveSample("例", 230, 250)}}

## アクセシビリティの注意事項

`checkbox` ロールが要素に追加された場合、ユーザーエージェントは次のことを行う必要があります。

- オペレーティングシステムのアクセシビリティ API でチェックボックスロールを持つものとして要素を公開します。
- `aria-checked` 値が変更されたら、アクセス可能なステート変更イベントを送信します。

支援技術製品は次のことを行う必要があります。

- スクリーンリーダーは、要素をチェックボックスとしてアナウンスし、任意でアクティブ化する方法を説明する必要があります。

チェックボックスを実装する人は、以下のことをするのが最適です。

- チェックボックスが、キーボード操作とクリックの両方で確実に選択・操作可能にします
- ユーザーの操作に応じて、`aria-checked` 属性を常に最新の状態に保ちます
- チェックボックスにフォーカスが当たっていることを示すスタイルを設定します

> [!NOTE]
> 支援技術がこの手法をどのように扱うべきかについては、意見が異なる場合があります。 上記の情報はそれらの意見の 1 つであり、したがって規範的ではありません。

## ベストプラクティス

ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA のロール、ステート、またはプロパティを追加してアクセス可能にする代わりに、ネイティブなものを使用することです。 そのため、JavaScript と ARIA でチェックボックスの機能を再作成するのではなく、フォームコントロールを使用してネイティブな [HTML チェックボックス](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)を使用することをお勧めします。

## 関連情報

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: `radio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: `menuitem` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: `menuitemcheckbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: `menuitemradio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: `switch` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: `option` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
