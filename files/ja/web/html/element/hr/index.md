---
title: '<hr>: 主題区切り (水平線) 要素'
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

**HTML の `<hr>` 要素**は、段落レベルの要素間において、テーマの意味的な区切りを表します。例えば、話の場面の切り替えや、節内での話題の転換などです。

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

以前はこれは水平の区切り線として定義されていました。現在でもブラウザーでは水平線として表示されますが、この要素は表示論的な用語ではなく意味論的な用語で定義されましたので、水平線を引きたいのであれば、適切な CSS を使用して行うようにしてください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        なし。これは{{Glossary("empty element", "空要素")}}です。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
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
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/separator_role">separator</a></code></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> または <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : 区切り線の配置を指定します。初期値は `left` です。
- {{htmlattrdef("color")}} {{Non-standard_inline}}
  - : 区切り線の色を色名、または 16 進数で指定します。
- {{htmlattrdef("noshade")}} {{deprecated_inline}}
  - : 網掛けをしないように指定します。
- {{htmlattrdef("size")}} {{deprecated_inline}}
  - : 区切り線の高さをピクセル数で指定します。
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : 区切り線の幅をピクセル数、あるいはパーセントで指定します。

## 例

### HTML

```html
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.hr")}}

## 関連情報

- {{HTMLElement('p')}}
