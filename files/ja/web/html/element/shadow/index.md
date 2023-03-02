---
title: '<shadow>: 廃止されたシャドウルート要素'
slug: Web/HTML/Element/shadow
---

{{deprecated_header}}

**HTML `<shadow>`** 要素 ([Web Components](/ja/docs/Web/Web_Components) 技術スイートの廃止された部分) は shadow DOM の {{glossary("insertion point")}} として使用するものでした。 shadow ホスト配下に複数の shadow ルートを生成する場合に使用しました。これは通常の HTML としては役立ちません。

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
      <th scope="row">許可されているコンテンツ</th>
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
      <th scope="row">許可されている親コンテンツ</th>
      <td>フローコンテンツを受け入れる要素。</td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLShadowElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を含みます。

## 例

これは `<shadow>` 要素を使用したシンプルな例です。必要な要素がすべて 1 つの HTML ファイルに含まれています。

> **メモ:** これは実験的な機能です。このコードを実行するには、これを表示するブラウザーが Web Components をサポートしている必要があります。[Enabling Web Components in Firefox](/ja/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox) を参照してください。

```html
<html>
  <head></head>
  <body>

  <!-- この <div> は shadow ルートを含みます -->
  <div>
    <!-- この見出しは表示されません -->
    <h4>My Original Heading</h4>
  </div>

  <script>
    // 上記の <div> コンテンツを取得
    var origContent = document.querySelector('div');
    // 1 つ目の shadow ルートを生成
    var shadowroot1 = origContent.createShadowRoot();
    // 2 つ目の shadow ルートを生成
    var shadowroot2 = origContent.createShadowRoot();

    // 1 つ目の shadow ルートに要素を挿入
    shadowroot1.innerHTML =
      '<p>Older shadow root inserted by
          &lt;shadow&gt;</p>';
    // 2 つ目の shadow ルートに <shadow> を含めて挿入。
    // 前のマークアップは  <shadow> が使われるまで
    // 表示されません
    shadowroot2.innerHTML =
      '<shadow></shadow> <p>Younger shadow root, displayed because it is the youngest.</p>';
  </script>

  </body>
</html>
```

ブラウザーで表示した場合、次のように見えるはずです。

![shadow example](shadow-example.png)

## 仕様書

この要素はどの仕様書でも定義されていません。

## ブラウザーの互換性

{{Compat("html.elements.shadow")}}

## 関連情報

- [Web Components](/ja/docs/Web/Web_Components)
- {{HTMLElement("content")}}、{{HTMLElement("slot")}}、{{HTMLElement("template")}}、{{HTMLElement("element")}}

{{HTMLSidebar}}
