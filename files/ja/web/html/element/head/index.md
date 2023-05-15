---
title: '<head>: 文書メタデータ (ヘッダー) 要素'
slug: Web/HTML/Element/head
---

{{HTMLSidebar}}

**HTML の `<head>` 要素**は、文書に関する機械可読な情報 ({{glossary("metadata", "メタデータ")}})、たとえば[題名](/ja/docs/Web/HTML/Element/title)、[スクリプト](/ja/docs/Web/HTML/Element/script)、[スタイルシート](/ja/docs/Web/HTML/Element/style)などを含みます。

> **メモ:** `<head>` は機械処理のための情報を保持するためのものであり、人間が読むためのものではありません。人間が読むための情報、例えば最上位のヘッダーや著者のリストのためのものは、 {{HTMLElement("header")}} 要素を参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <p>
          文書が {{HTMLElement("iframe")}} の
          <a href="/ja/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a>
          文書である場合、または題名情報がより上位のプロトコル (HTML
          メールの件名の行など)
          で使用される場合は、0個以上のメタデータコンテンツ。
        </p>
        <p>
          他の場合は正確に1つの {{HTMLElement("title")}}
          要素を含む、1個以上のメタデータコンテンツ。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        <code>&#x3C;head></code>
        要素内で最初に存在するものが要素である場合、開始タグを省略可能。<br /><code
          >&#x3C;head></code
        >
        要素に続く最初のものが空白文字やコメントでない場合、終了タグが省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("html")}} 要素の最初の子要素として配置可能。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `profile` {{deprecated_inline}}
  - : 1 つ以上のメタデータプロファイルの {{glossary("URI")}} で、{{Glossary("whitespace", "ホワイトスペース")}}区切りです。

## 例

```html
<!doctype html>
<html>
  <head>
    <title>Document title</title>
  </head>
</html>
```

## メモ

HTML5 互換のブラウザーでは、タグが省略されていても `<head>` 要素を自動的に生成します。[この自動生成は、過去のブラウザーでは保証されていません](https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/)。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<head>` の中で使用することができる要素:

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
