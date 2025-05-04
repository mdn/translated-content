---
title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`aria-multiselectable` 属性は、ユーザーが現在選択可能な子孫から複数の項目を選択できることを示します。

## 解説

{{HTMLElement('select')}} などの選択リストのデフォルトの動作では、1 つの項目またはオプションのみを選択できます。デフォルトまたは慣例により、ユーザーに項目を選択するリストが提示された場合、特に通知がない限り、ユーザーは 1 つの項目しか選択できないものと想定します。`aria-multiselectable` 属性は、支援技術ユーザーに、現在の選択可能な項目から複数の項目を選択できることを通知する方法です。リストとツリーは、ユーザーが一度に複数の項目を選択できるようにするロールの例です。

> [!NOTE]
> 複数の選択を許可する場合は、複数の値が許可されていることをユーザーに通知し、「複数の値を選択するには、選択中にコントロールキーを押し続けてください」など、複数の値を提供する方法を説明してください。

### `aria-selected` とともに使う

ユーザーが 1 つ以上の項目を選択した場合は、選択された子孫を [`aria-selected="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) で選択済みに設定し、選択されていない選択可能な子孫には `aria-selected="false"` を設定することを忘れないでください。要素が選択可能でない場合は、`aria-selected` 属性を完全に省略します。この属性が存在すると、ユーザーに項目が選択可能であることが通知されます。

ツリー、グリッド、タブリスト、またはリストボックスが複数のノードの選択をサポートする場合、[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)、または [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) を持つ要素は `aria-multiselectable` が `true` に設定されます。それ以外の場合は、 `aria-multiselectable` が `false` に設定されるか、既定値の false が暗黙的に設定されます。

## 例

```html
<p id="colorOptions">Choose the colors for your flag.</p>
<ul
  tabindex="0"
  role="listbox"
  aria-labelledby="colorOptions"
  aria-multiselectable="true">
  <li id="red" role="option" aria-selected="false">Red</li>
  <li id="orange" role="option" aria-selected="false">Orange</li>
  <li id="yellow" role="option" aria-selected="false">Yellow</li>
  <li id="green" role="option" aria-selected="false">Green</li>
  <li id="blue" role="option" aria-selected="false">Blue</li>
  <li id="purple" role="option" aria-selected="false">Purple</li>
  <li id="magenta" role="option" aria-selected="false">Hot pink</li>
  <li id="lightpink" role="option" aria-selected="true">Light pink</li>
  <li id="white" role="option" aria-selected="true">White</li>
  <li id="lightblue" role="option" aria-selected="true">Light blue</li>
  <li id="black" role="option" aria-selected="false">Black</li>
  <li id="brown" role="option" aria-selected="false">Brown</li>
</ul>
```

このリストボックスは複数選択をサポートしているため、`listbox` ロールを持つ要素に `aria-multiselectable="true"` を設定しています。選択された全てのオプションは `aria-selected` が `true` に設定されています。選択されていないが選択可能な全てのオプションは `aria-selected` が false に設定されています。無効になっているか選択できないオプションを含めていた場合は、`aria-selected` 属性を完全に省略していたでしょう。この属性を含めると、値がないか明示的に `false` に設定されていても、支援技術のユーザーに項目が選択可能であることを示します。

ARIA の使用に関する第一のルールは、「要素を再利用して ARIA のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)、ARIA、および JavaScript を使用してテキストを選択可能なオプションに変換することを必要とする順序なしリストを作成する代わりに、ネイティブのマルチセレクトを使用することができます。{{htmlelement('select')}} 要素にはブール値の [`multiple`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) 属性があります。これが含まれている場合、ユーザーは複数のオプションを選択できます。含まれていない場合、選択できるオプションは 1 つだけです。

```html
<label for="flagcolors"> Choose the colors for your flag. </label>
<select multiple id="flagcolors">
  <option value="red">Red</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="purple">Purple</option>
  <option value="magenta">Hot pink</option>
  <option value="lightpink" selected>Light pink</option>
  <option value="white" selected>White</option>
  <option value="lightblue" selected>Light blue</option>
  <option value="black">Black</option>
  <option value="brown">Brown</option>
</select>
```

この HTML `<select>` バージョンはアクセシブルかつ対話可能であり、機能するために ARIA や JavaScript は必要ありません。

上記のスタイルが好みに合わない場合は、HTML チェックボックスを使用して選択可能なオプションのリストを作成することもできます。これもセマンティックでフォーカス可能であり、CSS を使用して無限にスタイルを設定できます:

```html
<fieldset>
  <legend>Choose the colors for your flag.</legend>
  <ul>
    <li>
      <label><input type="checkbox" name="fc" value="red" />Red</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="orange" />Orange</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="yellow" />Yellow</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="green" />Green</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="blue" />Blue</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="purple" />Purple</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="magenta" />Hot pink</label>
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightpink" checked />Light
        pink</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="white" checked />White</label
      >
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="lightblue" checked />Light
        blue</label
      >
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="black" />Black</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="brown" />Brown</label>
    </li>
  </ul>
</fieldset>
```

`aria-selected="true"` の代わりに、[`checked`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性を含めてください。残りはブラウザーが行います。

## 値

- `true`
  - : ウィジェット内の複数の項目を一度に選択できます
- `false`
  - : 選択できる項目は1つだけです

## 関連インターフェイス

- {{domxref("Element.ariaMultiSelectable")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaMultiSelectable`](/ja/docs/Web/API/Element/ariaMultiSelectable) プロパティは、`aria-multiselectable` 属性の値を反映します。
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : {{domxref("ElementInternals")}} インターフェイスの一部である [`ariaMultiSelectable`](/ja/docs/Web/API/ElementInternals/ariaMultiSelectable) プロパティは、`aria-multiselectable` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

継承先のロール:

- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('select')}} 要素
- HTML {{HTMLElement('option')}} 要素
- HTML {{HTMLElement('input')}} 要素
- [multiple](/ja/docs/Web/HTML/Reference/Attributes/multiple) 属性
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
