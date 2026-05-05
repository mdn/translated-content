---
title: HTML `<figure>` キャプションが付けられる図要素
short-title: <figure>
slug: Web/HTML/Reference/Elements/figure
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<figure>`** は [HTML](/ja/docs/Web/HTML) の要素で、図表などの自己完結型のコンテンツを表し、任意で {{HTMLElement("figcaption")}} 要素を使用して表されるキャプションを付けることができます。図、すなわちキャプションとその中身は一単位として参照されます。

{{InteractiveExample("HTML デモ: &lt;figure&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="夜明けの象" />
  <figcaption>夜明けの象</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin silver solid;
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
  background-color: #222222;
  color: white;
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
- `<figcaption>` は親である `<figure>` の{{glossary("accessible name", "アクセシブル名")}}を提供します。

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
  let txt = `Browser CodeName: ${navigator.appCodeName};\n`;
  txt += `Browser Name: ${navigator.appName};\n`;
  txt += `Browser Version: ${navigator.appVersion};\n`;
  txt += `Cookies Enabled: ${navigator.cookieEnabled};\n`;
  txt += `Platform: ${navigator.platform};\n`;
  txt += `User-agent header: ${navigator.userAgent};`;
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
  <p>
    Bid me discourse, I will enchant thine ear,<br />
    Or like a fairy trip upon the green,<br />
    Or, like a nymph, with long dishevelled hair,<br />
    Dance on the sands, and yet no footing seen:<br />
    Love is a spirit all compact of fire,<br />
    Not gross to sink, but light, and will aspire.<br />
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        {{HTMLElement("figcaption")}} 要素とそれに続く<a
          href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        子孫に
        <a href="/ja/docs/Web/HTML/Reference/Elements/figcaption">figcaption</a>
        がない場合:
        <a href="https://w3c.github.io/html-aria/#dfn-any-role">any</a>、
        それ以外の場合は許可されているロールなし
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
