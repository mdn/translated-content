---
title: "<li>: リスト項目要素"
slug: Web/HTML/Element/li
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<li>`** は [HTML](/ja/docs/Web/HTML) の要素で、リストの項目を表すために用いられます。この要素は、その項目が属する順序付きリスト ({{HTMLElement("ol")}})、順序なしリスト ({{HTMLElement("ul")}})、メニュー ({{HTMLElement("menu")}}) のいずれかの子要素として配置する必要があります。メニュー要素および順序なしリスト内においては、リストの項目は通常、行頭文字を伴って表示されます。順序付きリスト内では、数字や文字による連番のリストマーカーを伴って表示されます。

{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `value`
  - : これは整数値の属性で、{{HTMLElement("ol")}} 要素で定義されたリスト項目の序数値を示します。リストがローマ数字や文字で表示される場合であっても、この属性は数値のみが指定できます。続くリスト項目は、その番号から続いて採番されます。順序なしリスト ({{HTMLElement("ul")}}) やメニュー ({{HTMLElement("menu")}}) では **value** 属性は意味がありません。
- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : 文字の属性で、表示するリストマーカーの種類を指定します。

    - `a`: 小文字
    - `A`: 大文字
    - `i`: 小文字のローマ数字
    - `I`: 大文字のローマ数字
    - `1`: 数字

    もし親の {{HTMLElement("ol")}} 要素で使用されていた場合は、それよりも優先されます。

    > [!NOTE]
    > この属性は非推奨になっています。代わりに CSS の {{cssxref("list-style-type")}} プロパティを使用してください。

## 例

もっと詳細な例は、 {{htmlelement("ol")}} と {{htmlelement("ul")}} のページを参照してください。

### 番号付きリスト

```html
<ol>
  <li>最初のリスト項目</li>
  <li>二番目のリスト項目</li>
  <li>三番目のリスト項目</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Ordered_list")}}

### カスタム値の付いた番号付きリスト

```html
<ol type="I">
  <li value="3">third item</li>
  <li>fourth item</li>
  <li>fifth item</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Ordered_list_with_a_custom_value")}}

### 順序なしリスト

```html
<ul>
  <li>最初のリスト項目</li>
  <li>二番目のリスト項目</li>
  <li>三番目のリスト項目</li>
</ul>
```

#### 結果

{{EmbedLiveSample("Unordered_list")}}

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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        直後に別の {{HTMLElement("li")}}
        要素が続く場合、または他のリスト項目が続くことなく親要素が閉じられた場合は、終了タグが省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("menu")}}。すでに廃止されているが、{{HTMLElement("dir")}}
        の子要素としても配置可能であった。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role"
            >listitem</a
          ></code
        >
        when child of an
        <code><a href="/ja/docs/Web/HTML/Element/ol">ol</a></code
        >, <code><a href="/ja/docs/Web/HTML/Element/ul">ul</a></code> or
        <code><a href="/ja/docs/Web/HTML/Element/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のリスト関連 HTML 要素: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} および廃止された {{HTMLElement("dir")}}
- `<li>` の整形に便利な CSS プロパティ:

  - 箇条書き記号の表示を選択するための {{cssxref("list-style")}}
  - 複雑な入れ子状リストを処理するのに使用できる [CSS counters](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - リスト項目のインデントの調整に用いることができる {{cssxref("margin")}}
