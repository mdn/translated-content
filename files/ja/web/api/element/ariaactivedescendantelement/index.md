---
title: "Element: ariaActiveDescendantElement プロパティ"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaActiveDescendantElement`** は {{domxref("Element")}} インターフェイスのプロパティで、フォーカスが [`composite`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) ウィジェット、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)、[`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)、[`group`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)、[`application`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) のいずれかにあるときの、現在のアクティブな要素を表します。

[`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) のトピックには、この属性とプロパティの使用方法に関する追加情報が含まれています。

## 値

{{domxref("HTMLElement")}} のサブクラスで、アクティブな子孫要素を表します。アクティブな子孫がなければ `null` です。

## 解説

このプロパティは、[`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性の使用に代わる柔軟な代替手段です。
`aria-activedescendant` とは異なり、このプロパティに割り当てる要素は、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を必ずしも持つ必要はありません。

このプロパティは、定義されている場合に要素の [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### アクティブな子孫を取得

この例では、 `ariaActiveDescendantElement` を使用することで現在アクティブな子孫要素を取得する方法を示しています。

#### HTML

この HTML では、色々な種類の道路を選べるリストボックスを定義しています。これは、{{htmlelement("div")}} 要素に [`listbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)を付け、それぞれの選択肢に対応する `<div>` アイテムを含む構造です。
アクティブな子孫要素は、 `id` が `avenue` の要素を `aria-activedescendant` を使用して初期設定します。

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div>Street</div>
  <div id="avenue">Avenue</div>
  <div>Lane</div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

下記コードはまず、`ariaActiveDescendantElement` に対応しているかどうかを調べます。
このプロパティに対応している場合、コードは `aria-activedescendant` の値（参照される要素の `id`）、プロパティ要素、要素のテキストコンテンツを {{domxref("Element.getAttribute()")}} を使用してログ出力します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// ariaActiveDescendantElement の機能検出
if ("ariaActiveDescendantElement" in Element.prototype) {
  log(`getAttribute(): ${streetType.getAttribute("aria-activedescendant")}`);
  log(`ariaActiveDescendantElement: ${streetType.ariaActiveDescendantElement}`);
  log(`text: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`);
} else {
  log("このブラウザーは ariaActiveDescendantElement に対応していません");
}
```

#### 結果

下記ログは、以上のコードの出力を示して表示させています。
`aria-activedescendant` プロパティから返される値は `"avenue"` になるはずであり、関連付けられた要素は `HTMLDivElement` 要素になるはずで、その要素内のテキストは `Avenue` になるはずです。

{{EmbedLiveSample("Get the active descendant","100%","190px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-activedescendant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 属性
- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
