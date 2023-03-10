---
title: '<fieldset>: フィールドセット要素'
slug: Web/HTML/Element/fieldset
---

{{HTMLSidebar}}

**HTML の `<fieldset>` 要素**は、ウェブフォーム内のラベル ({{HTMLElement("label")}}) などのようにいくつかのコントロールをグループ化するために使用します。

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

上記の例にあるように、 `<fieldset>` 要素は HTML フォームの一部をグループ化し、内側の {{htmlelement("legend")}} 要素で `<fieldset>` のキャプションを提供しています。いくつかの属性を取りますが、特に重要なものとして `form` は、同じページの {{htmlelement("form")}} の `id` を含むことができ、 `<fieldset>` が `<form>` の中になくてもその一部として扱うことができたり、 `disabled` は、 `<fieldset>` およびその中身を一度に無効にすることができたりします。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("disabled")}}
  - : この論理型属性が設定されている場合、 \<fieldset> の子孫要素として配置したフォームコントロールはすべて無効になり、つまり編集したり {{htmlelement("form")}} と一緒に送信したりすることができなくなります。マウスクリックやフォーカス関連のイベントのような閲覧イベントを受け取らなくなります。既定では、ブラウザーはそのようなコントロールを灰色で表示します。なお、子孫の {{HTMLElement("legend")}} 要素の中のフォーム要素は無効になりません。
- {{htmlattrdef("form")}}
  - : {{HTMLElement("form")}} 要素の {{htmlattrxref("id")}} 属性を指定し、 `<fieldset>` 要素はたとえその中になくても、その一部とすることができます。なお、 `<fieldset>` 内の {{HTMLElement("input")}} 要素をフォームに関連付けたい場合は、それらの要素に直接 `form` 属性を使用する必要があります。どの要素がフォームに関連付けられているかは、 JavaScript で {{domxref("HTMLFormElement.elements")}} を使用して確認することができます。
- {{htmlattrdef("name")}}

  - : グループに関連付けられた名前です。

    > **メモ:** fieldset 要素自身のラベルの役割は、その最初の子要素として配置した {{HTMLElement("legend")}} 要素が担います。

## CSS でのスタイル付け

`<fieldset>` には、スタイル付けの特殊な考慮事項がいくつかあります。

{{cssxref("display")}} の値は既定で `block` であり、[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)を確立します。 `<fieldset>` がインラインレベルの `display` の値でスタイル付けされた場合は `inline-block` として動作し、そうでなければ `block` として動作します。既定では、コンテンツを囲む `2px` `groove` の境界線があり、少量の既定のパディングがあります。要素は既定で {{cssxref("min-inline-size", "min-inline-size: min-content")}} を持ちます。

{{htmlelement("legend")}} が存在する場合は、 `block-start` 境界線の上に配置されます。 `<legend>` は縮小折り返しであり、整形コンテキストを確立します。 `display` の値はブロック的です。 (例えば、 `display: inline` は `block` として動作します。)

`<fieldset>` の内容を保持する無名のボックスが生成され、 `<fieldset>` から特定のプロパティを継承します。 `<fieldset>` が `display: grid` または `display: inline-grid` でスタイル付けされていた場合、無名ボックスはグリッド整形コンテキストになり、 `<fieldset>` が `display: flex` または `display: inline-flex` でスタイル付けされていた場合、無名ボックスはフレックス整形コンテキストになります。それ以外の場合はブロック整形コンテキストになります。

`<fieldset>` および `<legend>` に対しては、ページデザインに合うあらゆる方法で気軽にスタイル付けしてください。

## 例

### 単純なフィールドセット

この例は、本当に単純な `<fieldset>` の例で、 `<legend>` および 1 つのコントールが中にあります。

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio">
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Simple_fieldset', '100%', '80') }}

### 無効化したフィールドセット

この例は無効化した `<fieldset>` で、二つのコントロールが中にあります。なお、両方のコントロールは無効化した `<fieldset>` の中にあるので、無効になります。

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris">
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie">
    </div>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Disabled_fieldset', '100%', '110') }}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a
          href="/ja/docs/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root"
          >区分化ルート</a
        >, <a href="/ja/docs/Web/HTML/Content_categories#リスト化">リスト化</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#フォーム関連コンテンツ"
          >フォーム関連</a
        >要素, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        任意の {{HTMLElement("legend")}}
        要素と、それに続くフローコンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.fieldset")}}

## 関連情報

- {{HTMLElement("legend")}} 要素
- {{HTMLElement("input")}} 要素
- {{HTMLElement("label")}} 要素
- {{HTMLElement("form")}} 要素
