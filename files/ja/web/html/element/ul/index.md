---
title: "<ul>: 順序なしリスト要素"
slug: Web/HTML/Element/ul
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{HTMLSidebar}}

**`<ul>`** は [HTML](/ja/docs/Web/HTML) の要素で、項目の順序なしリストを表します。一般的に、行頭記号を伴うリストとして描画されます。

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `compact` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : この論理属性は、コンパクトなスタイルでリストを描画するようブラウザーに指示するものです。この属性の解釈は{{glossary("user agent", "ユーザーエージェント")}}に委ねられ、またすべてのブラウザーで動作するものでもありません。

    > **警告:** この属性は非推奨になっているため、使用しないでください。代わりに [CSS](/ja/docs/Web/CSS) を使用してください。 `compact` 属性と同様の効果を得るには、 CSS の {{cssxref("line-height")}} プロパティを用い、その値として `80%` を指定します。

- `type` {{Deprecated_inline}} {{Non-standard_Inline}}

  - : リストの行頭記号の形状を指定するために用います。 HTML3.2 および HTML 4.0/4.01 tranditional で定義されていた値は以下の通りです。

    - `circle`
    - `disc`
    - `square`

    4 つ目の行頭記号の形状として、WebTV インターフェイスで `triangle` が定義されていますが、すべてのブラウザーが対応しているわけではありません。

    この属性が存在せず、[CSS](/ja/docs/Web/CSS) の {{ cssxref("list-style-type") }} プロパティがその要素に適用されていない場合は、ユーザーエージェントが行頭記号の種類を、リストの入れ子階層に応じて選択します。

    > **警告:** この属性は非推奨なので使用しないでください。代替として [CSS](/ja/docs/Web/CSS) の {{ cssxref("list-style-type") }} プロパティを使用してください。

## 使用上のメモ

- `<ul>` 要素は、数的な順序がなく、その配置順に意味を持たない項目を持つリストを表します。通常、順序なしリストの項目はドット、円形、四角形などいくつかの形式による行頭記号を伴って描画されます。行頭記号のスタイルは HTML 仕様書のページでは定義されていませんが、 CSS の {{ cssxref("list-style-type") }} プロパティを用いて変更することが可能です。
- `<ul>` 要素と {{HTMLElement("ol")}} 要素は、必要なだけ深く入れ子にすることができます。さらに言えば、入れ子になったリストが `<ol>` と `<ul>` の間で変化することに制限はありません。
- {{ HTMLElement("ol") }} と `<ul>` は、どちらも項目のリストを表します。両者の違いは、 {{ HTMLElement("ol") }} 要素では順序に意味があることです。使い分けの目安としては、項目の順序を変更してみてください。意味が変わるようであれば {{ HTMLElement("ol") }} 要素を使用し、そうでない場合は `<ul>` 要素を使用することができます。

## 例

### シンプルな例

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

次のように出力されます。

{{EmbedLiveSample("Simple_example", 400, 120)}}

### 入れ子になったリスト

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- 閉じタグの </li> がここにはない -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- 入れ子になった第二の順序なしリストでも同じ -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- 三番目の順序なしリストを含む li の
                  閉じタグ </li> -->
      <li>second item third subitem</li>
    </ul>
    <!-- ここに閉じタグ </li> -->
  </li>
  <li>third item</li>
</ul>
```

次のように出力されます。

{{EmbedLiveSample("Nesting_a_list", 400, 340)}}

### \<ul> と \<ol> のネスト

```html
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- ここには <li> の閉じタグはない -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- ここに </li> を記述し、要素を閉じている -->
  </li>
  <li>third item</li>
</ul>
```

次のように出力されます。

{{EmbedLiveSample("Ordered_list_inside_unordered_list", 400, 190)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >。また、 <code>&#x3C;ul></code> 要素の子に少なくとも 1 個
        {{HTMLElement("li")}} 要素を包含する場合は、<a
          href="/ja/docs/Web/Guide/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0個以上の {{HTMLElement("li")}},
        {{HTMLElement("script")}}, {{HTMLElement("template")}}
        要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のリスト関連要素: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- `<ul>` 要素の整形に有益な CSS プロパティ:

  - {{CSSxRef("list-style")}} プロパティ: 行頭記号の表示方法の変更
  - [CSS カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters): 複雑に入れ子になったリストの扱い
  - {{CSSxRef("line-height")}} プロパティ: 非推奨の [`compact`](#compact) 属性のシミュレート
  - {{CSSxRef("margin")}} プロパティ: リストのインデントの制御
