---
title: "<option>: HTML 選択肢要素"
slug: Web/HTML/Element/option
l10n:
  sourceCommit: c302e71520c9df718363d8ce81d93568ff84be14
---

{{HTMLSidebar}}

**`<option>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("select")}}、{{HTMLElement("optgroup")}}、{{HTMLElement("datalist")}} の各要素内で項目を定義するために使われます。したがって、`<option>` は HTML 文書でポップアップメニューのメニュー項目や、その他の項目の一覧を表すことができます。

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `disabled`
  - : この論理属性を設定すると、選択肢が選択不能になります。多くのブラウザーはそのようなコントロールをグレーアウトで表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。この属性を設定していなくても、祖先に無効状態の {{HTMLElement("optgroup")}} 要素がある場合は無効化されます。
- `label`
  - : この属性は、選択肢の意味を示すラベル文字列です。`label` 属性を定義していない場合は、要素の文字列コンテンツが要素の値になります。
- `selected`
  - : この論理属性を設定すると、その選択肢が初期状態で選択されます。この `<option>` 要素の祖先の {{HTMLElement("select")}} 要素に [`multiple`](/ja/docs/Web/HTML/Element/select#multiple) が設定されていない場合、{{HTMLElement("select")}} 要素内で `selected` 属性が設定できる `<option>` 要素は 1 つだけです。
- `value`
  - : この属性の内容は、フォームで送信する値を表します。値を送信するには、選択肢を選択しなければなりません。この属性を省略すると、option 要素の中の文字列が値となります。

## CSS でのスタイル設定

**`<option>`** 要素のスタイル設定は非常に制限されています。選択肢は親要素で設定したフォントを継承しません。Firefox では [`color`](/ja/docs/Web/CSS/color) と [`background-color`](/ja/docs/Web/CSS/background-color) のみが設定可能ですが、Safari では何もプロパティを設定することはできません。スタイル設定についての詳細は、[フォームへの高度なスタイル設定のガイド](/ja/docs/Learn/Forms/Advanced_form_styling)をご覧ください。

## 例

{{HTMLElement("select")}} 要素の例をご覧ください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        エスケープされた文字（例えば <code>&#x26;eacute;</code>）を含むテキスト
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。直後に他の <code>&#x3C;option></code> 要素または
        {{HTMLElement("optgroup")}}
        要素がある場合、または親要素が他に内容を持たない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("select")}}
        要素、{{HTMLElement("optgroup")}}
        要素、{{HTMLElement("datalist")}} 要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
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

- 他のフォーム関連要素: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("meter")}}
