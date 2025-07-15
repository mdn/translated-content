---
title: "<figure>: キャプションが付けられる図要素"
slug: Web/HTML/Reference/Elements/figure
original_slug: Web/HTML/Element/figure
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<figure>`** は [HTML](/ja/docs/Web/HTML) の要素で、図表などの自己完結型のコンテンツを表し、任意で {{HTMLElement("figcaption")}} 要素を使用して表されるキャプションを付けることができます。図、すなわちキャプションとその中身は一単位として参照されます。

{{InteractiveExample("HTML デモ: &lt;figure&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 使用上のメモ

- ふつう `<figure>` は画像、イラスト、グラフ、コードの断片など、文書の本文の流れから参照されるものの、本文の流れに影響を与えることなく、文書のほかの部分や付録に移動することが可能なものに用います。
- キャプションは `<figure>` 要素の中に（最初または最後の子要素として）{{HTMLElement("figcaption")}} 要素を挿入することで表すことができます。図の中で最初に見つかった最初の `<figcaption>` 要素が図のキャプションとして表示されます。

## 例

### 画像

```html
<!-- 単なる画像 -->
<figure>
  <img src="favicon-192x192.png" alt="美しい MDN のロゴ" />
</figure>

<!-- キャプションが付いた画像 -->
<figure>
  <img src="favicon-192x192.png" alt="美しい MDN のロゴ" />
  <figcaption>MDN ロゴ</figcaption>
</figure>
```

#### 結果

{{EmbedLiveSample("Images", "100%", 375)}}

### コードスニペット

```html
<figure>
  <figcaption><code>navigator</code> を用いてブラウザーの詳細を取得</figcaption>
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

#### 結果

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### 引用

```html
<figure>
  <figcaption><b>Edsger Dijkstra:</b></figcaption>
  <blockquote>
    デバッグがソフトウェアのバグを取るプロセスであるならば、プログラミングはそれを入れるプロセスだ。
  </blockquote>
</figure>
```

#### 結果

{{EmbedLiveSample('Quotations')}}

### 詩

```html
<figure>
  <p style="white-space:pre">
    Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
    green, Or, like a nymph, with long dishevelled hair, Dance on the sands, and
    yet no footing seen: Love is a spirit all compact of fire, Not gross to
    sink, but light, and will aspire.
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

#### 結果

{{EmbedLiveSample("Poems", "100%", 250)}}

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
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        {{HTMLElement("figcaption")}} 要素とそれに続く<a
          href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、またはフローコンテンツとそれに続く
        {{HTMLElement("figcaption")}} 要素、またはフローコンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
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
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/Figure_Role"
          >figure</a
        >
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("figcaption")}} 要素
