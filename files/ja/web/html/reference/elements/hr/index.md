---
title: "<hr>: 主題区切り（水平線）要素"
slug: Web/HTML/Reference/Elements/hr
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

**`<hr>`** は [HTML](/ja/docs/Web/HTML) の要素で、段落レベルの要素間において、テーマの意味的な区切りを表します。例えば、話の場面の切り替えや、節内での話題の転換などです。

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

以前はこれは水平の区切り線として定義されていました。現在でもブラウザーでは水平線として表示されますが、この要素は表示論的な用語ではなく意味論的な用語で定義されましたので、水平線を引きたいのであれば、適切な CSS を使用して行うようにしてください。

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

## 例

### HTML

```html
<p>
  これは第一段落のテキストです。これは第一段落のテキストです。
  これは第一段落のテキストです。これは第一段落のテキストです。
</p>

<hr />

<p>
  これは第二段落のテキストです。これは第二段落のテキストです。
  これは第二段落のテキストです。これは第二段落のテキストです。
</p>
```

### 結果

{{EmbedLiveSample("Example")}}

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
