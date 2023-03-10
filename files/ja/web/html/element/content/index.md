---
title: '<content>: シャドウ DOM のコンテンツのプレイスホルダー要素'
slug: Web/HTML/Element/content
---

{{Deprecated_header}}

**HTML の `<content>` 要素**は、一連の[ウェブコンポーネント](/ja/docs/Web/Web_Components)技術の廃止された部分であり、 [Shadow DOM](/ja/docs/Web/Web_Components/Shadow_DOM) の中で {{glossary("insertion point")}} として使われていましたが、通常の HTML で利用することは意図されていませんでした。現在では DOM の中で Shadow DOM を挿入することができる場所を作成する {{HTMLElement("slot")}} 要素に置き換えられました。

> **メモ:** この要素は初期のドラフト仕様に存在し、いくつかのブラウザーで実装されていましたが、後のバージョンの仕様書から削除され、使用するべきではありません。ここで文書化しているのは、その間に書かれたコードを、新しいバージョンの仕様書で動作するように適合させるのを支援するためです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ja/docs/Web/HTML/Content_categories"
          title="HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a
          href="/ja/docs/Web/HTML/Content_categories#透過的コンテンツ"
          title="HTML/Content_categories#透過的コンテンツ"
          >透過的コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>フローコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLContentElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/HTML/Global_attributes)を持ちます。

- `select`
  - : コンマ区切りで複数のセレクターを指定できます。これらは CSS セレクターと同じ文法です。 `<content>` 要素が指定された場所に挿入する内容を指定します。

## 例

以下に `<content>` 要素の使用例を示します。これは必要なものがすべて含まれている HTML ファイルです。

> **メモ:** 以下のコードを動作させるには、ブラウザーが Web Components をサポートしている必要があります。 [Firefox で Web Components を有効にするには](/ja/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox)の記事も参照してください。

```html
<html>
  <head></head>
  <body>
  <!-- The original content accessed by <content> -->
  <div>
    <h4>My Content Heading</h4>
    <p>My content text</p>
  </div>

  <script>
  // Get the <div> above.
  var myContent = document.querySelector('div');
  // Create a shadow DOM on the <div>
  var shadowroot = myContent.createShadowRoot();
  // Insert into the shadow DOM a new heading and
  // part of the original content: the <p> tag.
  shadowroot.innerHTML =
   '<h2>Inserted Heading</h2> <content select="p"></content>';
  </script>

  </body>
</html>
```

ブラウザーで表示した場合、以下のように表示されます。

![content example](content-example.png)

## 仕様書

この要素は現在、どの仕様書でも定義されていません。

## ブラウザーの互換性

{{Compat("html.elements.content")}}

## 関連情報

- [Web Components](/ja/docs/Web/Web_Components)
- {{HTMLElement("shadow")}}, {{HTMLElement("slot")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}

{{HTMLSidebar}}
