---
title: '<figure>: キャプションが付けられる図要素'
slug: Web/HTML/Element/figure
---

{{HTMLRef}}

**HTML の `<figure>` (キャプションが付けられる図) 要素**は、図表などの自己完結型のコンテンツを表し、任意で {{HTMLElement("figcaption")}} 要素を使用して表されるキャプションを付けることができます。図、すなわちキャプションとその中身は一つの単位として参照されます。

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a
          href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots"
          >区分化ルート</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        {{HTMLElement("figcaption")}} 要素とそれに続く<a
          href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、またはフローコンテンツとそれに続く
        {{HTMLElement("figcaption")}} 要素、またはフローコンテンツ
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
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/Figure_Role">figure</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        子孫に
        <a href="/ja/docs/Web/HTML/Element/figcaption">figcaption</a>
        がない場合:
        <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">any</a
        >、それ以外の場合は許可されているロールなし
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

- ふつう `<figure>` は画像、イラスト、グラフ、コードの断片など、文書の本文の流れから参照されるものの、本文の流れに影響を与えることなく、文書のほかの部分や付録に移動することが可能なものに用います。
- [区分化ルート](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots)となり、 `<figure>` 要素のコンテンツのアウトラインは、文書の本文のアウトラインから除外されます。
- キャプションは `<figure>` 要素の中に (最初または最後の子要素として) {{HTMLElement("figcaption")}} 要素を挿入することで表すことができます。図の中で最初に見つかった最初の `<figcaption>` 要素が図のキャプションとして表示されます。

## 例

### 画像

```html
<!-- 単なる画像 -->
<figure>
  <img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="美しい MDN のロゴ">
</figure>

<!-- キャプションが付いた画像 -->
<figure>
  <img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="美しい MDN のロゴ">
  <figcaption>MDN ロゴ</figcaption>
</figure>
```

{{EmbedLiveSample("Images", "100%", 375)}}

### コードスニペット

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### 引用

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>デバッグがソフトウェアのバグを取るプロセスであるならば、
  プログラミングはそれを入れるプロセスだ。</blockquote>
</figure>
```

{{EmbedLiveSample("Quotations")}}

### 詩

```html
<figure>
  <p style="white-space:pre">
Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("Poems", "100%", 250)}}

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考                  |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-figure-element', '&lt;figure&gt;')}}         | {{Spec2('HTML WHATWG')}} |                       |
| {{SpecName('HTML5.2', 'grouping-content.html#the-figure-element', '&lt;figure&gt;')}}     | {{Spec2('HTML5.2')}}     | HTML 5.0 から変更なし |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-figure-element', '&lt;figure&gt;')}} | {{Spec2('HTML5 W3C')}}     |                       |

## ブラウザーの互換性

{{Compat("html.elements.figure")}}

## 関連情報

- {{HTMLElement("figcaption")}} 要素
