---
title: '<option>: HTML 選択肢要素'
slug: Web/HTML/Element/option
---

{{HTMLSidebar}}

**HTML の `<option>` 要素**は、 {{HTMLElement("select")}} 要素、{{HTMLElement("optgroup")}} 要素、{{HTMLElement("datalist")}} 要素内で項目を定義するために使われます。したがって、`<option>` は HTML 文書でポップアップメニューのメニュー項目や、その他の項目の一覧を表すことができます。

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        エスケープされた文字 (例えば <code>&#x26;eacute;</code>) を含むテキスト
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
        要素、{{HTMLElement("menu")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/option_role">option</a></code></td>
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

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- {{htmlattrdef("disabled")}}
  - : この論理属性を設定すると、選択肢が選択不能になります。多くのブラウザーはそのようなコントロールをグレーアウトで表示し、マウスクリックやフォーカスなど、いかなるイベントも受け付けなくなります。この属性を設定していなくても、祖先のいずれかが無効状態の {{HTMLElement("optgroup")}} 要素である場合は無効化されます。
- {{htmlattrdef("label")}}
  - : この属性は、選択肢の意味を示すラベル文字列です。 `label` 属性を定義していない場合は、要素の文字列コンテンツが要素の値になります。
- {{htmlattrdef("selected")}}
  - : この論理属性を設定すると、その選択肢が初期状態で選択されます。`<option>` 要素が {{htmlattrxref("multiple", "select")}} を設定していない {{HTMLElement("select")}} 要素の子孫である場合、{{HTMLElement("select")}} 要素内で 1 個の `<option>` だけが `selected` 属性を持てます。
- {{htmlattrdef("value")}}
  - : この属性の内容は、フォームで送信する値を表します。値を送信するには、選択肢を選択しなければなりません。この属性を省略すると、 option 要素の中の文字列が値になります。

## 例

{{HTMLElement("select")}} 要素の例をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.option")}}

## 関連情報

- 他のフォーム関連要素: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("meter")}}
