---
title: "<li>: リストアイテム要素"
slug: Web/HTML/Reference/Elements/li
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<li>`** は [HTML](/ja/docs/Web/HTML) の要素で、リストの項目を表すために用いられます。この要素は、その項目が属する順序付きリスト ({{HTMLElement("ol")}})、順序なしリスト ({{HTMLElement("ul")}})、メニュー ({{HTMLElement("menu")}}) のいずれかの子要素として配置する必要があります。メニュー要素および順序なしリスト内においては、リストの項目は通常、行頭文字を伴って表示されます。順序付きリスト内では、数字や文字による連番のリストマーカーを伴って表示されます。

{{InteractiveExample("HTML デモ: &lt;li&gt;", "tabbed-shorter")}}

```html interactive-example
<p>アポロ宇宙飛行士:</p>

<ul>
  <li>Neil Armstrong</li>
  <li>Alan Bean</li>
  <li>Peter Conrad</li>
  <li>Edgar Mitchell</li>
  <li>Alan Shepard</li>
</ul>
```

```css interactive-example
p,
li {
  font:
    1rem "Fira Sans",
    sans-serif;
}

p {
  font-weight: bold;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `value`
  - : これは整数値の属性で、{{HTMLElement("ol")}} 要素で定義されたリストアイテムの序数値を示します。リストがローマ数字や文字で表示される場合であっても、この属性は数値のみが指定できます。続くリストアイテムは、その番号から続いて採番されます。この属性は順序なしリスト ({{HTMLElement("ul")}}) やメニュー ({{HTMLElement("menu")}}) では意味を持ちません。
- `type` {{Deprecated_inline}}
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
  <li>最初のアイテム</li>
  <li>2 番目のアイテム</li>
  <li>3 番目のアイテム</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Ordered_list")}}

### カスタム値の付いた番号付きリスト

```html
<ol type="I">
  <li value="3">3 番目のアイテム</li>
  <li>4 番目のアイテム</li>
  <li>5 番目のアイテム</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Ordered_list_with_a_custom_value")}}

### 順序なしリスト

```html
<ul>
  <li>最初のアイテム</li>
  <li>2 番目のアイテム</li>
  <li>3 番目のアイテム</li>
</ul>
```

#### 結果

{{EmbedLiveSample("Unordered_list")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        直後に別の <code>&lt;li&gt;</code> 要素が続く場合、または他のアイテムが続くことなく親要素が閉じられた場合は、終了タグが省略可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("menu")}}。すでに廃止されていますが、{{HTMLElement("dir")}} の子要素としても配置可能でした。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
        （<code><a href="/ja/docs/Web/HTML/Reference/Elements/ol">ol</a></code
        >, <code><a href="/ja/docs/Web/HTML/Reference/Elements/ul">ul</a></code>,
        <code><a href="/ja/docs/Web/HTML/Reference/Elements/menu">menu</a></code> の子要素の場合）
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a>
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
  - 複雑な入れ子状リストを処理するのに使用できる [CSS カウンター](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - リストアイテムのインデントの調整に用いることができる {{cssxref("margin")}}
