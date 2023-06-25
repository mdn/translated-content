---
title: "<hr>: 主題区切り（水平線）要素"
slug: Web/HTML/Element/hr
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<hr>`** は [HTML](/ja/docs/Web/HTML) の要素で、段落レベルの要素間において、テーマの意味的な区切りを表します。例えば、話の場面の切り替えや、節内での話題の転換などです。

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

以前はこれは水平の区切り線として定義されていました。現在でもブラウザーでは水平線として表示されますが、この要素は表示論的な用語ではなく意味論的な用語で定義されましたので、水平線を引きたいのであれば、適切な CSS を使用して行うようにしてください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

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
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> または <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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
