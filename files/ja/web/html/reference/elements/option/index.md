---
title: "<option>: HTML 選択肢要素"
slug: Web/HTML/Reference/Elements/option
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<option>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("select")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("datalist")}} の各要素内で選択肢を定義するために使われます。したがって、`<option>` は HTML 文書でポップアップメニューのメニュー選択肢や、その他の選択肢の一覧を表すことができます。

{{InteractiveExample("HTML デモ: &lt;option&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">ペットを選んでください:</label>

<select id="pet-select">
  <option value="">--選択肢を 1 つ選んでください--</option>
  <option value="dog">犬</option>
  <option value="cat">猫</option>
  <option value="hamster">ハムスター</option>
  <option value="parrot">オウム</option>
  <option value="spider">クモ</option>
  <option value="goldfish">金魚</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- [`disabled`](/ja/docs/Web/HTML/Reference/Attributes/disabled)
  - : この論理属性を設定すると、選択肢が選択不能になります。多くのブラウザーはそのようなコントロールを灰色で表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。この属性を設定していなくても、祖先に無効状態の {{HTMLElement("optgroup")}} 要素がある場合は無効化されます。
- `label`
  - : この属性は、選択肢の意味を示すラベル文字列です。`label` 属性を定義していない場合は、要素の文字列コンテンツが要素の値になります。
- `selected`
  - : この論理属性を設定すると、その選択肢が初期状態で選択されます。この `<option>` 要素の祖先の {{HTMLElement("select")}} 要素に [`multiple`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) が設定されていない場合、{{HTMLElement("select")}} 要素内で `selected` 属性が設定できる `<option>` 要素は 1 つだけです。
- `value`
  - : この属性の内容は、フォームで送信する値を表します。値を送信するには、選択肢を選択しなければなりません。この属性を省略すると、option 要素の中の文字列が値となります。

## CSS によるスタイル設定

従来、 **`<option>`** 要素のスタイル設定はとても制限されていました。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)では、他の通常の DOM 要素のように、完全にカスタマイズできる新しい機能を説明しています。

### 従来の option のスタイル設定

最新のカスタマイズ機能に対応していないブラウザー（またはそれらを使用できない古いコードベース）では、 `<option>` 要素で利用できるスタイルは、ブラウザーとオペレーティングシステムによって異なって慰安した。 Firefox と Chromium においては、オペレーティングシステムによっては、所有元の `<select>` の [`font-size`](/ja/docs/Web/CSS/Reference/Properties/font-size) が尊重されます。 Chromium は、追加で [`color`](/ja/docs/Web/CSS/Reference/Properties/color)、[`background-color`](/ja/docs/Web/CSS/Reference/Properties/background-color)、[`font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family)、[`font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant)、[`text-align`](/ja/docs/Web/CSS/Reference/Properties/text-align) が設定可能な場合があります。

従来の `<option>` のスタイル設定についての詳細は、[フォームへの高度なスタイル設定のガイド](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)を参照してください。

## 例

{{HTMLElement("select")}} 要素の例をご覧ください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        従来の <code>&lt;select&gt;</code> 要素では、エスケープされた文字（例えば <code>&#x26;eacute;</code>）を含むテキストコンテンツのみです。
        <a href="/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select">カスタマイズ可能な select 要素</a>の場合は、 <code>&lt;option&gt;</code> 要素は任意のコンテンツを持つことができます。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。直後に他の <code>&#x3C;option></code> 要素または {{HTMLElement("optgroup")}} 要素がある場合、または親要素が他に内容を持たない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("select")}} 要素、{{HTMLElement("optgroup")}} 要素、{{HTMLElement("datalist")}} 要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のフォーム関連要素: {{HTMLElement("form")}}、{{HTMLElement("legend")}}、{{HTMLElement("label")}}、{{HTMLElement("button")}}、{{HTMLElement("select")}}、{{HTMLElement("datalist")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("textarea")}}、{{HTMLElement("input")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("meter")}}
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
