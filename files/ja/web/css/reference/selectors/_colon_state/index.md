---
title: :state()
slug: Web/CSS/Reference/Selectors/:state
original_slug: Web/CSS/:state
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

**`:state()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、特定のカスタム状態を持つ[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)に一致します。

## 構文

`:state()` 擬似クラスは、引数として一致するカスタム要素の状態を表すカスタム識別子を取ります。

```css-nolint
:state(<カスタム識別子>) {
  /* ... */
}
```

## 解説

要素は、ユーザー操作や他の要因により、状態が遷移することがあります。
例えば、ユーザーが要素にカーソルをかざしたときに "hover" 状態に遷移したり、ユーザーがクリックした後にリンクが "visited" 状態に遷移したりします。
ブラウザーで指定された要素は、[`:hover`](/ja/docs/Web/CSS/Reference/Selectors/:hover) や [`:visited`](/ja/docs/Web/CSS/Reference/Selectors/:visited) などの CSS 擬似クラスを使用して、これらの状態に基づいてスタイルを設定することができます。
同様に、[自律的カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements#カスタム要素の種類)（組み込み要素から派生していないカスタム要素）は、その状態を公開することができ、その要素を使用するページは、CSS の `:state()` 擬似クラスを使用して、それらにスタイル設定することができます。

カスタム要素の状態は文字列値で表されます。
これらの値は、要素に関連付けられた [`CustomStateSet`](/ja/docs/Web/API/CustomStateSet) オブジェクトに追加または除去されます。
CSS の `:state()` 擬似クラスは、引数として渡された識別子が要素の `CustomStateSet` に存在する場合に、その要素と一致します。

`:state()` 擬似クラスは、カスタム要素の実装内でカスタム状態を一致させるためにも使用することができます。
これは、 `:state()` を [`:host()`](/ja/docs/Web/CSS/Reference/Selectors/:host_function) 擬似クラス関数内で使用することで実現され、現在のカスタム要素のシャドウ DOM 内でのみ状態を一致させます。

さらに、[`::part()`](/ja/docs/Web/CSS/Reference/Selectors/::part) 擬似要素に `:state()` 擬似クラスが続くことで、特定の状態にあるカスタム要素の[シャドウパーツ](/ja/docs/Web/CSS/Guides/Shadow_parts)と照合することができます。
（**シャドウパーツ**とは、カスタム要素のシャドウツリーの一部で、スタイル設定のため、コンテナーページに明示的に公開される部分です。）

## 例

### カスタム状態の照合

この CSS は、"checked" 状態にある場合、カスタム要素 `<labeled-checkbox>` の境界線を `red` に変更する方法を示しています。

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

このコードのライブサンプルについては、`CustomStateSet` ページの[カスタムチェックボックス要素のカスタム状態の照合](/ja/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)の例を参照してください。

### カスタム要素のシャドウ DOM 内のカスタム状態の照合

この例では、カスタム要素の実装内でカスタム状態を照合するために、`:state()` 擬似クラスを [`:host()`](/ja/docs/Web/CSS/Reference/Selectors/:host_function) 擬似クラス関数内で使用できることを表示させています。

以下の CSS は、要素が "checked" の状態にある場合、その要素の前にグレーの `[x]` を挿入します。

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

このコードのライブサンプルについては、`CustomStateSet` ページの[カスタムチェックボックス要素のカスタム状態の照合](/ja/docs/Web/API/CustomStateSet#matching_the_custom_state_of_a_custom_checkbox_element)の例を参照してください。

### シャドウパーツでカスタム状態との照合

この例では、カスタム要素の `:state()` 擬似クラスを[シャドウパーツ](/ja/docs/Web/CSS/Guides/Shadow_parts)を対象として使用できることを示しています。

シャドウパーツは、[`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性を使用して定義し、名前を付けます。
例えば、`<question-box>` という名前のカスタム要素が、`<labeled-checkbox>` カスタム要素を `checkbox` という名前のシャドウパーツとして使用しているとします。

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Yes</labeled-checkbox>`;
```

次の CSS は、[`::part()`](/ja/docs/Web/CSS/Reference/Selectors/::part) 擬似要素を使用して `'checkbox'` シャドウパーツと照合する方法を示しています。
また、`::part()`擬 似要素に続いて `:state()` 擬似クラスを使用することで、チェック状態の同じ部分と照合する方法も表示させています。

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

このコードの動作例については、`CustomStateSet` ページの[カスタム要素のシャドウパーツ内のカスタム状態の照合](/ja/docs/Web/API/CustomStateSet#matching_a_custom_state_in_a_shadow_part_of_a_custom_element)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`CustomStateSet`](/ja/docs/Web/API/CustomStateSet)
- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [カスタム状態と CSS のカスタム状態擬似クラスセレクター](/ja/docs/Web/API/Web_components/Using_custom_elements#カスタム状態と_css_のカスタム状態擬似クラスセレクター)（[カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)）
