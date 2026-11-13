---
title: "`<hr>` 主題区切り（水平線）要素"
short-title: <hr>
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

**`<hr>`** は [HTML](/ja/docs/Web/HTML) の要素で、要素間のテーマ上の区切りを表します。例えば、話の場面の切り替えや、節内での話題の転換などです。

{{InteractiveExample("HTML デモ: &lt;hr&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<p>§1: ファイトクラブの第一のルール：ファイトクラブについて話してはならない。</p>

<hr />

<p>§2: ファイトクラブの第二のルール：カップケーキを必ず持参すること。</p>
```

```css interactive-example
hr {
  border: none;
  border-top: 3px double #333333;
  color: #333333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr::after {
  background: white;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 区切り線の配置を指定します。初期値は `left` です。
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 区切り線の色を色名、または 16 進数で指定します。
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 網掛けをしないように指定します。
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 区切り線の高さをピクセル数で指定します。
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 区切り線の幅をピクセル数、あるいはパーセント値で指定します。

## 使用上の注意

歴史的に、`<hr>` 要素は常に水平線として表示されてきました。視覚的なブラウザーでは現在も水平線として表示されることがありますが、この要素は現在、表示上ではなく意味上の観点から定義されています。そのため、水平線を描画したい場合は、CSS を使用して既存の要素に境界線を追加してください。

{{cssxref("border-style")}} や {{cssxref("border-color")}} などの `border-*` プロパティを使うと、`<hr>` 要素や、別の要素に描画する境界線の外観を大幅にカスタマイズできます。

## 例

### 段落間のテーマ上の区切り

次の例では、段落レベルの要素間にテーマ上の区切りを追加します。

#### HTML

```html
<article>
  <p>
    これは第一段落のテキストです。これは第一段落のテキストです。
    これは第一段落のテキストです。これは第一段落のテキストです。
  </p>
  <hr />
  <p>
    これは第二段落のテキストです。これは第二段落のテキストです。
    これは第二段落のテキストです。これは第二段落のテキストです。
  </p>
</article>
```

#### 結果

{{EmbedLiveSample("Thematic_break_between_paragraphs")}}

### リスト項目間のテーマ上の区切り

`<hr>` タグは、視覚的に分離するためにリスト項目内に配置し、リストの各セクション間に区切り線を作成できます。

#### HTML

```html
<ul>
  <li>切り取り</li>
  <li>コピー</li>
  <li>貼り付け</li>
  <li role="presentation"><hr /></li>
  <li>削除</li>
</ul>
```

```css hidden
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100px;
  margin: 0.75rem;
  padding: 0.75rem;
  border: 1px solid lightgrey;
}
hr {
  margin-block: 0.2rem;
  color: lightgrey;
}
```

#### 結果

{{EmbedLiveSample("Thematic_break_between_list_items")}}

### select の選択肢間のテーマ上の区切り

`<hr>` 要素は `<select>` 要素内で使用でき、`<option>` 要素間に視覚的な区切りを作成します。

#### HTML

```html
<select>
  <option value="">--選択してください--</option>
  <hr />
  <option value="option1">選択肢 1</option>
  <option value="option2">選択肢 2</option>
  <hr />
  <option value="option3">選択肢 3</option>
  <option value="option4">選択肢 4</option>
</select>
```

#### 結果

{{EmbedLiveSample("Thematic_break_between_select_options")}}

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <ul>
          <li><a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素</li>
          <li><a href="/ja/docs/Web/HTML/Reference/Elements/select"><code>&lt;select></code></a> 要素</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> または <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement('p')}}
- [`<select>` の中の `<hr>`](/ja/docs/Web/HTML/Reference/Elements/select#グループ化された選択肢のある_select)
