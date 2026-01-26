---
title: "<ol>: 順序付きリスト要素"
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<ol>`** は [HTML](/ja/docs/Web/HTML) の要素で、項目の順序付きリストを表します。ふつうは番号付きのリストとして表示されます。

{{InteractiveExample("HTML デモ: &lt;ol&gt;", "tabbed-shorter")}}

```html interactive-example
<ol>
  <li>小麦粉、ベーキングパウダー、砂糖、塩をよく混ぜ合わせます。</li>
  <li>別のボウルに、卵、牛乳、油を混ぜ合わせます。</li>
  <li>両方の混合物を一緒に混ぜ合わせてください。</li>
  <li>マフィンの型に 4 分の 3 まで満たしてください。</li>
  <li>20 分間焼きます。</li>
</ol>
```

```css interactive-example
li {
  font:
    1rem "Fira Sans",
    sans-serif;
  margin-bottom: 0.5rem;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)も受け付けます。

- `compact` {{Deprecated_inline}} {{non-standard_inline}}
  - : この論理属性は、リストをコンパクトなスタイルで表示することを指示します。この属性の解釈はブラウザーによって異なります。代わりに [CSS](/ja/docs/Web/CSS) を使用してください。 `compact` 属性と同様の効果を得るには、CSS の {{cssxref("line-height")}} プロパティに値 `80%` を指定します。
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

    指定された種類は、異なる [`type`](/ja/docs/Web/HTML/Reference/Elements/li#type) 属性が内部の {{HTMLElement("li")}} 要素で使用されない限り、リスト全体に使用されます。

    > [!NOTE]
    > （項目が番号や文字で参照される法律文書や技術文書のように）リスト番号の種類に重要性がない限り、代わりに CSS の {{CSSxRef("list-style-type")}} プロパティを使用してください。

## 使用上の注意

ふつう、順序付きリストの項目は、先頭に数字や文字などの[マーカー](/ja/docs/Web/CSS/Reference/Selectors/::marker)が表示されます。

`<ol>` 要素と {{HTMLElement("ul")}} 要素（または同義語である {{HTMLElement("menu")}}）は、必要なだけ深く入れ子にすることができ、 `<ol>` と `<ul>` （または `<menu>`）を好きなだけ変更することもできます。

`<ol>` と {{HTMLElement("ul")}} は、どちらも項目のリストを表します。両者の違いは、`<ol>` 要素では順序に意味があることです。例えば次のようなものです。

- レシピの手順
- 道順
- 栄養成分表示ラベルにおける成分の降順の一覧

どちらのリストを使用するか判断するには、リスト項目の順序を変更してみてください。意味が変わるようであれば `<ol>` 要素を使用してください。そうでない場合は、 {{HTMLElement("ul")}} 要素か、リストがメニューであれば {{HTMLElement("menu")}} を使用することができます。

## 例

### 基本的な例

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### 結果

{{EmbedLiveSample("基本的な例", 400, 100)}}

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>。また、<code>&#x3C;ol></code> 要素の子が少なくとも 1 個の {{HTMLElement("li")}} 要素を包含する場合は、<a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>。
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
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
  - [CSS カウンター](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)は、複雑な入れ子のリストを扱うのに便利です。
  - {{CSSxRef("line-height")}} プロパティは、非推奨の `compact` 属性をシミュレートするのに役立ちます。
  - {{CSSxRef("margin")}} プロパティは、リストの字下げを制御するのに役立ちます。
