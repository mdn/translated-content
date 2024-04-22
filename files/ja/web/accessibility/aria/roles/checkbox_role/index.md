---
title: "ARIA: checkbox ロール"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
---

チェックボックス ([checkbox](https://www.w3.org/TR/wai-aria-1.1/#checkbox)) ロールは、チェック可能なインタラクティブなコントロールに使用します。 `role="checkbox"` を含む要素には、チェックボックスの状態を支援技術に公開するための `aria-checked` 属性も含める必要があります。

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Remember my preferences</label>
```

ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA を追加する代わりにネイティブなものを使用することです。 次のように、代わりに [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox) のネイティブな [HTML チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)を使用してください。 これは、必要なすべての機能をネイティブに提供します。

```html
<input type="checkbox" id="chk1-label" />
<label for="chk1-label">Remember my preferences</label>
```

## 説明

ネイティブな [HTML チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)のフォームコントロールは、2 つのチェックされた (checked) 状態（「チェックされた」または「チェックされていない」）のみを持つことができ、不確定な ([indeterminate](/ja/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)) 状態は JavaScript を介して設定可能です。 同様に、`role="checkbox"` を持つ要素は、`aria-checked` 属性を介して、`true`、`false`、または `mixed` の 3 つの状態を公開できます。

チェックボックスはインタラクティブなコントロールであるため、フォーカス可能でキーボードからアクセスできる必要があります。 ロールがフォーカス不可能な要素に適用される場合は、`tabindex` 属性を使用してこれを変更します。 チェックボックスをアクティブ化するために必要なキーボードショートカットは、<kbd>Space</kbd> キーです。

開発者は、チェックボックスがアクティブ化されたときに、`aria-checked` 属性の値を動的に変更する必要があります。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- aria-checked

  - : `aria-checked` の値は、チェックボックスの状態を定義します。 この属性には、次の 3 つの値のいずれかがあります。

    `true`
    チェックボックスがチェックされています
    `false`
    チェックボックスがチェックされていません
    `mixed`
    チェックボックスが部分的にチェックされているか、不確定です

- tabindex="0"
  - : 支援技術のユーザーが Tab で移動してすぐに読み始めることができるように、フォーカス可能にするために使用します。

### キーボードインタラクション

| キー             | 機能                                 |
| ---------------- | ------------------------------------ |
| <kbd>Space</kbd> | チェックボックスをアクティブ化します |

### 必要な JavaScript

#### 必要なイベントハンドラー

- onclick
  - : マウスクリックを処理して、`aria-checked` 属性の値を変更することでチェックボックスの状態を変更し、チェックボックスの外観を変更することで、視力のあるユーザーにチェックされているかどうかを見せます。
- onKeyPress

  - : ユーザーが&#x20;

    <kbd>Space</kbd>

    &#x20;キーを押した場合を処理して、`aria-checked` 属性の値を変更することでチェックボックスの状態を変更し、チェックボックスの外観を変更することで、視力のあるユーザーにチェックされているかどうかを見せます。

### 例

次の例では、CSS と JavaScript を使用して単純なチェックボックス要素を作成し、要素がチェックされているかどうかの状態を処理します。

#### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  onclick="changeCheckbox()"
  onKeyPress="changeCheckbox()"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"
  >Remember my preferences</label
>
```

#### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

#### JavaScript

```js
function changeCheckbox(event) {
  let item = document.getElementById("chkPref");
  switch (item.getAttribute("aria-checked")) {
    case "true":
      item.setAttribute("aria-checked", "false");
      break;
    case "false":
      item.setAttribute("aria-checked", "true");
      break;
  }
}
```

#### 結果

{{EmbedLiveSample("Examples", 230, 250)}}

## アクセシビリティの懸念

チェックボックス (`checkbox`) ロールが要素に追加された場合、ユーザーエージェントは次のことを行う必要があります。

- オペレーティングシステムのアクセシビリティ API でチェックボックスロールを持つものとして要素を公開します。
- `aria-checked` 値が変更されたら、アクセス可能な状態変更イベントを送信します。

支援技術製品は次のことを行う必要があります。

- スクリーンリーダーは、要素をチェックボックスとしてアナウンスし、任意でアクティブ化する方法を説明する必要があります。

> **メモ:** 支援技術がこの手法をどのように扱うべきかについては、意見が異なる場合があります。 上記の情報はそれらの意見の 1 つであり、したがって規範的ではありません。

## ベストプラクティス

ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA のロール、ステート、またはプロパティを追加してアクセス可能にする代わりに、ネイティブなものを使用することです。 そのため、JavaScript と ARIA でチェックボックスの機能を再作成するのではなく、フォームコントロールを使用してネイティブな [HTML チェックボックス](/ja/docs/Web/HTML/Element/input/checkbox)を使用することをお勧めします。

## 関連情報

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox)
- [ARIA: radio ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Radio_Role)
- [ARIA: menuitem ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Menuitem_Role)
- [ARIA: menuitemcheckbox ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_Role)
- [ARIA: menuitemradio ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_Role)
- [ARIA: switch ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Switch_role)
- [ARIA: option ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Option_role)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
