---
title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
original_slug: Web/CSS/::checkmark
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

**`::checkmark`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)の現在選択されている {{htmlelement("option")}} 要素内に配置されたチェックマークを対象とします。選択されているオプションを視覚的に示すために使用することができます。

{{InteractiveExample("CSS デモ: ::checkmark")}}

```html-nolint interactive-example
<label for="pet-select">
  ペットを選択:
</label>
<br />
<select id="pet-select">
  <option value="cat">猫</option>
  <option value="dog">犬</option>
  <option value="chicken">
    鶏
  </option>
</select>
```

```css interactive-example
option::checkmark {
  color: orange;
  font-size: 1.5rem;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

::picker(select) {
  border: none;
}

option {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: white;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

## 構文

```css-nolint
::checkmark {
  /* ... */
}
```

## 解説

`::checkmark`擬似要素は、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)の現在選択されている `<option>` 内に配置されたチェックマークを対象とします。

この機能は、親要素にピッカーが設定され、かつ {{cssxref("appearance")}} プロパティの `base-select` 値によって基本外観が設定されている場合にのみ利用可能です。生成されるボックスは、 {{cssxref("::before")}} 擬似要素によって生成されるボックスよりも先に表示されます。アイコンは {{cssxref("content")}} プロパティを使用して独自のカスタマイズが可能です。

`::checkmark` セレクターは、例えばチェックマークを非表示にしたい場合、独自のアイコンを使用したい場合、または `<option>` 要素内のチェックマークの表示位置を調整する目的で使用する場合に便利です。

> [!NOTE]
> `::checkmark` 擬似要素はアクセシビリティツリーに含まれないため、そこに設定された生成された {{cssxref("content")}} は支援技術によって読み上げられません。それでも、視覚的に設定する新しいアイコンが意図する目的に沿って意味をなすことを確認する必要があります。

## 例

### チェックマークのカスタマイズ

カスタマイズ可能な選択機能を利用するには、 `<select>` 要素とそのピッカーの両方に、 {{cssxref("appearance")}} の値として `base-select` を設定する必要があります。

```css
select,
::picker(select) {
  appearance: base-select;
}
```

[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) が `<option>` 要素のレイアウトに使用されていると想定します（カスタマイズ可能な選択ボックスの**現在の実装**では実際に使用されています）。この場合、チェックマークを列の先頭から末尾に移動するには、チェックマークに `0` より大きい {{cssxref("order")}} 値を設定し（`0` より小さい値を設定している場合は、それを `0` に設定する）、さらに `auto` を {{cssxref("margin-left")}} に設定して、行末に揃えることで実現できます（詳細は [alignment および auto のマージン](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_および_auto_のマージン)を参照）。

{{cssxref("content")}} プロパティの値を別の絵文字に設定することで、表示されるアイコンを変更することもできます。

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

このコードが使用される完全な例と、ライブサンプルがレンダリングされる例については、[現在の選択チェックマークのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_current_selection_checkmark)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
