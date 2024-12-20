---
title: "<fieldset>: フィールドセット要素"
slug: Web/HTML/Element/fieldset
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<fieldset>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウェブフォーム内のラベル ({{HTMLElement("label")}}) などのようにいくつかのコントロールをグループ化するために使用します。

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

上記の例にあるように、`<fieldset>` 要素は HTML フォームの一部をグループ化し、内側の {{htmlelement("legend")}} 要素で `<fieldset>` のキャプションを提供します。いくつかの属性を取りますが、特に重要なものとして `form` は、同じページの {{htmlelement("form")}} の `id` を含むことができ、`<fieldset>` が `<form>` の中になくてもその一部として扱うことができたり、`disabled` は、`<fieldset>` およびその中身を一度に無効にすることができたりします。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `disabled`
  - : この論理属性が設定されている場合、`<fieldset>` の子孫要素として配置したフォームコントロールはすべて無効になり、つまり編集したり {{htmlelement("form")}} と一緒に送信したりすることができなくなります。マウスクリックやフォーカス関連のイベントのような閲覧イベントを受け取らなくなります。既定では、ブラウザーはそのようなコントロールを灰色で表示します。なお、子孫の {{HTMLElement("legend")}} 要素内のフォーム要素は無効になりません。
- `form`
  - : {{HTMLElement("form")}} 要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性を指定し、たとえ `<fieldset>` 要素がその中になくても、その一部とすることができます。なお、 `<fieldset>` 内の {{HTMLElement("input")}} 要素をフォームに関連付けたい場合は、それらの要素に直接 `form` 属性を使用する必要があります。どの要素がフォームに関連付けられているかは、 JavaScript で {{domxref("HTMLFormElement.elements")}} を使用して確認することができます。
- `name`

  - : グループに関連付けられた名前です。

    > [!NOTE]
    > fieldset 要素自身のラベルの役割は、その最初の子要素として配置した {{HTMLElement("legend")}} 要素が担います。

## CSS でのスタイル付け

`<fieldset>` には、スタイル付けの特殊な考慮事項がいくつかあります。

{{cssxref("display")}} の値は既定で `block` であり、[ブロック整形コンテキスト](/ja/docs/Web/CSS/CSS_display/Block_formatting_context)を確立します。 `<fieldset>` がインラインレベルの `display` の値でスタイル付けされた場合は `inline-block` として動作し、そうでなければ `block` として動作します。既定では、コンテンツを囲む `2px` `groove` の境界線があり、少量の既定のパディングがあります。要素は既定で {{cssxref("min-inline-size", "min-inline-size: min-content")}} を持ちます。

{{htmlelement("legend")}} が存在する場合は、`block-start` 境界線の上に配置されます。 `<legend>` は縮小折り返しであり、整形コンテキストを確立します。`display` の値はブロック的です。（例えば、`display: inline` は `block` として動作します。）

`<fieldset>` の内容を保持する無名のボックスが生成され、`<fieldset>` から特定のプロパティを継承します。`<fieldset>` が `display: grid` または `display: inline-grid` でスタイル付けされていた場合、無名ボックスはグリッド整形コンテキストになり、`<fieldset>` が `display: flex` または `display: inline-flex` でスタイル付けされていた場合、無名ボックスはフレックス整形コンテキストになります。それ以外の場合はブロック整形コンテキストになります。

`<fieldset>` および `<legend>` に対しては、ページデザインに合うあらゆる方法で気軽にスタイル付けしてください。

## 例

### 単純なフィールドセット

この例は、本当に単純な `<fieldset>` の例で、 `<legend>` および 1 つのコントールが中にあります。

```html
<form action="#">
  <fieldset>
    <legend>Do you agree?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Yes!" />
    <label for="chbx">I agree</label>
  </fieldset>
</form>
```

#### 結果

{{ EmbedLiveSample('Simple_fieldset', '100%', '80') }}

### 無効化されたフィールドセット

この例は無効化した `<fieldset>` で、二つのコントロールが中にあります。なお、両方のコントロールは無効化した `<fieldset>` の中にあるので、無効になります。

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled login fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

#### 結果

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
          href="/ja/docs/Web/HTML/Element/Heading_Elements#区分化ルート"
          >区分化ルート</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#リスト化"
          >リスト化</a
        >,
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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

{{Compat}}

## 関連情報

- {{HTMLElement("legend")}} 要素
- {{HTMLElement("input")}} 要素
- {{HTMLElement("label")}} 要素
- {{HTMLElement("form")}} 要素
