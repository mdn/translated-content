---
title: "ARIA: aria-multiselectable 属性"
short-title: aria-multiselectable
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

`aria-multiselectable` 属性は、ユーザーが現在選択可能な子孫から複数の項目を選択できることを示します。

## 解説

{{HTMLElement('select')}} などの選択リストのデフォルトの動作では、1 つの項目またはオプションのみを選択できます。デフォルトまたは慣例により、ユーザーに項目を選択するリストが提示された場合、特に通知がない限り、ユーザーは 1 つの項目しか選択できないものと想定します。`aria-multiselectable` 属性は、支援技術ユーザーに、現在の選択可能な項目から複数の項目を選択できることを通知する方法です。リストとツリーは、ユーザーが一度に複数の項目を選択できるようにするロールの例です。

> [!NOTE]
> 複数選択を許可する場合は、複数の項目を選択できることをユーザーに知らせ、選択方法も説明してください（例: 「複数の項目を選択するには、選択中に Control キーを押したままにします」）。

### `aria-selected` とともに使う

ユーザーが 1 つ以上の項目を選択した場合は、選択された子孫を [`aria-selected="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) で選択済みに設定し、選択されていない選択可能な子孫には `aria-selected="false"` を設定することを忘れないでください。要素が選択可能でない場合は、`aria-selected` 属性を完全に省略します。この属性が存在すると、ユーザーに項目が選択可能であることが通知されます。

ツリー、グリッド、タブリスト、リストボックスが複数のノードの選択に対応する場合、[`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)、[`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)、[`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) ロールを持つ要素では、`aria-multiselectable` を `true` に設定します。それ以外の場合は `false` に設定するか、デフォルト値の `false` を適用します。

## 値

- `true`
  - : ウィジェット内の複数の項目を一度に選択できます。
- `false`
  - : 一度に選択できる項目は 1 つだけです。

## 関連インターフェイス

- {{domxref("Element.ariaMultiSelectable")}}
  - : [`ariaMultiSelectable`](/ja/docs/Web/API/Element/ariaMultiSelectable) プロパティは {{domxref("Element")}} インターフェイスの一部で、`aria-multiselectable` 属性の値を反映します。
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : [`ariaMultiSelectable`](/ja/docs/Web/API/ElementInternals/ariaMultiSelectable) プロパティは {{domxref("ElementInternals")}} インターフェイスの一部で、`aria-multiselectable` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`grid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tablist`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`tree`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

継承先のロール:

- [`treegrid`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## 例

```html
<p id="colorOptions">旗の色を選択してください。</p>
<ul
  tabindex="0"
  role="listbox"
  aria-labelledby="colorOptions"
  aria-multiselectable="true">
  <li id="red" role="option" aria-selected="false">赤</li>
  <li id="orange" role="option" aria-selected="false">オレンジ</li>
  <li id="yellow" role="option" aria-selected="false">黄色</li>
  <li id="green" role="option" aria-selected="false">緑</li>
  <li id="blue" role="option" aria-selected="false">青</li>
  <li id="purple" role="option" aria-selected="false">紫</li>
  <li id="magenta" role="option" aria-selected="false">ホットピンク</li>
  <li id="lightpink" role="option" aria-selected="true">薄いピンク</li>
  <li id="white" role="option" aria-selected="true">白</li>
  <li id="lightblue" role="option" aria-selected="true">薄い青</li>
  <li id="black" role="option" aria-selected="false">黒</li>
  <li id="brown" role="option" aria-selected="false">茶色</li>
</ul>
```

このリストボックスは複数選択に対応しているため、`listbox` ロールを持つ要素に `aria-multiselectable="true"` を設定しています。選択済みのオプションでは `aria-selected` を `true` に設定します。選択されていないものの選択可能なオプションでは、`aria-selected` を `false` に設定します。無効化されたオプションや選択できないオプションを含める場合は、`aria-selected` 属性を省略します。この属性を含めると、値が空であっても明示的に `false` に設定されていても、その項目が選択可能であることを支援技術のユーザーに示します。

ARIA を使用する際の第一のルールは、「必要な意味や動作がすでに組み込まれているネイティブ機能を使える場合は、要素を再利用して ARIA のロール、状態、プロパティを**追加して**アクセシブルにするのではなく、その機能を使う」というものです。[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)、ARIA、JavaScript を使ってテキストを選択可能なオプションにする順序なしリストを作成する代わりに、ネイティブの複数選択機能を使用できます。{{htmlelement('select')}} 要素には論理属性の [`multiple`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) があります。この属性があればユーザーは複数のオプションを選択でき、なければ 1 つだけ選択できます。

```html
<label for="flagcolors"> 旗の色を選択してください。 </label>
<select multiple id="flagcolors">
  <option value="red">赤</option>
  <option value="orange">オレンジ</option>
  <option value="yellow">黄色</option>
  <option value="green">緑</option>
  <option value="blue">青</option>
  <option value="purple">紫</option>
  <option value="magenta">ホットピンク</option>
  <option value="lightpink" selected>薄いピンク</option>
  <option value="white" selected>白</option>
  <option value="lightblue" selected>薄い青</option>
  <option value="black">黒</option>
  <option value="brown">茶色</option>
</select>
```

この HTML `<select>` を使った方法はアクセシブルで操作可能であり、機能させるために ARIA や JavaScript は必要ありません。

上の方法の見た目を好みに合わせてスタイルできない場合は、HTML のチェックボックスで選択肢のリストを作成する方法もあります。これも意味的に適切でフォーカス可能であり、CSS で自由にスタイルを設定できます。

```html
<fieldset>
  <legend>旗の色を選択してください。</legend>
  <ul>
    <li>
      <label><input type="checkbox" name="fc" value="red" />赤</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="orange" />オレンジ</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="yellow" />黄色</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="green" />緑</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="blue" />青</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="purple" />紫</label>
    </li>
    <li>
      <label
        ><input type="checkbox" name="fc" value="magenta" />ホットピンク</label
      >
    </li>
    <li>
      <label
        ><input
          type="checkbox"
          name="fc"
          value="lightpink"
          checked />薄いピンク</label
      >
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="white" checked />白</label>
    </li>
    <li>
      <label
        ><input
          type="checkbox"
          name="fc"
          value="lightblue"
          checked />薄い青</label
      >
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="black" />黒</label>
    </li>
    <li>
      <label><input type="checkbox" name="fc" value="brown" />茶色</label>
    </li>
  </ul>
</fieldset>
```

`aria-selected="true"` の代わりに、[`checked`](/ja/docs/Web/HTML/Reference/Elements/input/checkbox#checked) 属性を含めてください。あとはブラウザーが処理します。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('select')}} 要素
- HTML {{HTMLElement('option')}} 要素
- HTML {{HTMLElement('input')}} 要素
- [multiple](/ja/docs/Web/HTML/Reference/Attributes/multiple) 属性
- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
