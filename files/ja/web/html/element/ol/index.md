---
title: "<ol>: 順序付きリスト要素"
slug: Web/HTML/Element/ol
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<ol>`** は [HTML](/ja/docs/Web/HTML) の要素で、項目の順序付きリストを表します。ふつうは番号付きのリストとして表示されます。

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)も受け付けます。

- `reversed`
  - : 論理属性で、リストの項目が逆順で指定されていることを指定します。項目は大きい方から小さい方へ番号付けされます。
- `start`
  - : 整数値を持つ属性で、リスト項目の序数の開始値を指定します。この値は、番号付けの種類が文字やローマ数字であっても、常にアラビア数字 (1, 2, 3, など) で指定します。例えば、 "d" の文字や "iv" のローマ数字から始める場合は、 `start="4"` を使用してください。
- `type`

  - : 番号付けの種類を設定します。

    - `a` は、英小文字を示します
    - `A` は、英大文字を示します
    - `i` は、小文字のローマ数字を示します
    - `I` は、大文字のローマ数字を示します
    - `1` は、数字を示します (既定値)

    指定された種類は、異なる [`type`](/ja/docs/Web/HTML/Element/li#type) 属性が内部の {{HTMLElement("li")}} 要素で使用されない限り、リスト全体に使用されます。

    > **メモ:** （項目が番号や文字で参照される法律文書や技術文書のように）リスト番号の種類に重要性がない限り、代わりに CSS の {{CSSxRef("list-style-type")}} プロパティを使用してください。

## 使用上の注意

ふつう、順序付きリストの項目は、先頭に数字や文字などの[マーカー](/ja/docs/Web/CSS/::marker)が表示されます。

`<ol>` 要素と {{HTMLElement("ul")}} 要素は、必要なだけ深く入れ子にすることができ、 `<ol>` と `<ul>` を好きなだけ変更することもできます。

`<ol>` と {{HTMLElement("ul")}} は、どちらも項目のリストを表します。両者の違いは、 `<ol>` 要素では順序に意味があることです。例えば次のようなものです。

- レシピの手順
- 道順
- 栄養成分表示ラベルにおける成分の降順の一覧

どちらのリストを使用するか判断するには、リスト項目の順序を変更してみてください。意味が変わるようであれば `<ol>` 要素を使用してください。そうでない場合は、 {{HTMLElement("ul")}} 要素を使用することができます。

## 例

### 単純な例

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Simple_example", 400, 100)}}

### ローマ数字の使用

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Using_Roman_Numeral_type", 400, 100)}}

### start 属性の使用

```html
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Using_the_start_attribute", 400, 100)}}

### 入れ子のリスト

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- ここには終了タグ </li> はありません -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- 終了タグ </li> はここにあります -->
  <li>third item</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Nesting_lists", 400, 150)}}

### 順序付きリストの中の順序なしリスト

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- ここには終了タグ </li> はありません -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- 終了タグ </li> はここにあります -->
  <li>third item</li>
</ol>
```

#### 結果

{{EmbedLiveSample("Unordered_list_inside_ordered_list", 400, 150)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>。また、<code>&#x3C;ol></code> 要素の子が少なくとも 1 個の {{HTMLElement("li")}} 要素を包含する場合は、<a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("li")}}, {{HTMLElement("script")}}, {{HTMLElement("template")}} の各要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role">list</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>,
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のリスト関連の HTML 要素: {{HTMLElement("ul")}}、 {{HTMLElement("li")}}、 {{HTMLElement("menu")}}
- `<ol>` 要素のスタイル付けに役立つ CSS プロパティ:

  - {{CSSxRef("list-style")}} プロパティは、序数の表示方法を選ぶのに便利です。
  - [CSS カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)は、複雑な入れ子のリストを扱うのに便利です。
  - {{CSSxRef("line-height")}} プロパティは、非推奨の [`compact`](#compact) 属性をシミュレートするのに役立ちます。
  - {{CSSxRef("margin")}} プロパティは、リストの字下げを制御するのに役立ちます。
