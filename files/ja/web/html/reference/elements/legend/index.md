---
title: HTML `<legend>` フィールドセット凡例要素
short-title: <legend>
slug: Web/HTML/Reference/Elements/legend
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<legend>`** は [HTML](/ja/docs/Web/HTML) の要素で、その親要素である {{HTMLElement("fieldset")}} の内容のキャプションを表します。

[カスタマイズ可能な `<select>` 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) では、 `<legend>` 要素を `<optgroup>` 要素の子要素として指定することができ、これにより、ターゲット設定やスタイル設定が容易なラベルを提供できます。これは、 `<optgroup>` 要素の `label` 属性に設定されたテキストを置き換え、同じ意味を持ちます。

{{InteractiveExample("HTML デモ: &lt;legend&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>好きなモンスターを選択</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">クラーケン</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">サスカッチ</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">モスマン</label>
</fieldset>
```

```css interactive-example
legend {
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

## 属性

この要素には、[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## 例

`<legend>` の使用例は、 {{HTMLElement("form")}} のページを参照してください。

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
        および
        <a href="/ja/docs/Web/HTML/Reference/Elements/Heading_Elements">見出し</a>
        （h1–h6 要素）
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        最初の子要素としてこの <code>&#x3C;legend></code> 要素を持つ {{HTMLElement("fieldset")}}。<a href="/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select">カスタマイズ可能な select 要素</a>では、<code>&#x3C;legend></code> 要素を {{htmlelement("optgroup")}} の子要素として使用することが許可されています。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ARIA: Form ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
