---
title: "<object>: 外部オブジェクト要素"
slug: Web/HTML/Reference/Elements/object
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{HTMLSidebar}}

**`<object>`** は [HTML](/ja/docs/Web/HTML) の要素で、画像、内部の閲覧コンテキスト、プラグインによって扱われるリソースなどのように扱われる外部リソースを表します。

{{InteractiveExample("HTML デモ: &lt;object&gt;", "tabbed-standard")}}

```html interactive-example
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `archive` {{deprecated_inline}}
  - : オブジェクトのリソースの URI 群を、空白区切りで指定します。
- `border` {{deprecated_inline}}
  - : コントロールの境界線の幅で、ピクセル単位です。
- `classid` {{deprecated_inline}}
  - : オブジェクトの実装の URI。 **data** 属性とともに、またはその代替として用いることができます。
- `codebase` {{deprecated_inline}}
  - : **classid** 属性、**data** 属性、**archive** 属性で指定された相対 URI を解決するための基準パス。指定しない場合、既定値は現在の文書のベース URI となります。
- `codetype` {{deprecated_inline}}
  - : **classid** によって指定されたデータのコンテンツ型。
- `data`
  - : リソースのアドレスを有効な URL で指定。**data** 属性と **type** 属性のうち、少なくとも 1 つは定義しておく必要があります。
- `declare` {{deprecated_inline}}
  - : この論理属性は属性名を指定するだけで有効になります。オブジェクトは、後続する `<object>` 要素でインスタンス化しなければなりません。リソースを再利用するごとに、完全な形の `<object>` 要素を繰り返し配置します。
- `form`
  - : このオブジェクト要素がフォームに関連付けられていれば、そのフォーム要素（_フォームオーナー_）。属性値は、同一文書内の {{HTMLElement("form")}} 要素の ID でなければなりません。
- `height`
  - : 表示されるリソースの高さを、 {{cssxref("&lt;integer&gt;")}} （{{glossary("CSS pixel", "CSS ピクセル")}}単位）で指定します。
- `name`
  - : 有効な閲覧コンテキストの名前 (HTML5) またはコントロールの名前 (HTML 4)。
- `standby` {{deprecated_inline}}
  - : オブジェクトの実装とデータの読み込み中にブラウザーに表示することができるメッセージ。
- `type`
  - : **data** 属性によって指定されたリソースの[コンテンツ型](/ja/docs/Glossary/MIME_type)。**data** 属性と **type** 属性のうち、少なくとも 1 つは定義しておく必要があります。
- `usemap`
  - : {{HTMLElement("map")}} 要素を参照するハッシュ名。 '#' の後に map 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/map#name) 属性を繋げた文字列を属性値として記述します。
- `width`
  - : 表示されるリソースの幅を {{cssxref("&lt;integer&gt;")}} （{{glossary("CSS pixel", "CSS ピクセル")}}単位）で指定します。

## 例

### 動画を埋め込む

#### HTML

```html
<object
  type="video/webm"
  data="/shared-assets/videos/flower.webm"
  width="600"
  height="140">
  <img src="path/image.jpg" alt="有益な画像の説明" />
</object>
```

#### 結果

{{EmbedLiveSample("Embed a video")}}

この例の動画が読み込めなかった場合、代替コンテンツとしてユーザーに画像が提供されます。画像を表示するために {{HTMLElement("img")}} タグを使用しています。`src` 属性には埋め込みたい画像のパスを設定します。また、画像にアクセシビリティのある名前を提供するために `alt` 属性も記載しています。画像も読み込めなかった場合は、`alt` 属性のコンテンツが表示されます。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#埋め込みコンテンツ">埋め込みコンテンツ</a>、知覚可能コンテンツ、要素が <a href="usemap"><code>usemap</code></a> 属性を持つ場合は <a href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ">対話型コンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#リスト化">リスト化</a>、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#送信可能">送信可能</a> な <a href="/ja/docs/Web/HTML/Guides/Content_categories#フォーム関連コンテンツ">フォーム関連要素</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        0 個以上の {{HTMLElement("param")}} 要素とそれに続く <a href="/ja/docs/Web/HTML/Guides/Content_categories#透過的コンテンツ">透過的コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#埋め込みコンテンツ">埋め込みコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
