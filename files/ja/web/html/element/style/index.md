---
title: "<style>: スタイル情報要素"
slug: Web/HTML/Element/style
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}

**`<style>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書あるいは文書の一部分のスタイル情報を含みます。 `<style>` 要素を含んでいる文書のコンテンツに適用される CSS を含みます。

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

`<style>` 要素は文書の {{htmlelement("head")}} 要素の中に入れる必要があります。一般に、スタイルを外部スタイルシートに入れて {{htmlelement("link")}} 要素を使用することをより推奨します。

文書に複数の `<style>` および `<link>` が含まれている場合、これらは含まれている文書の DOM 上の順序で適用されます。 — 予期しないカスケード問題を防ぐために、含まれている順序が正しいことを確認してください。

`<link>` 要素と同じ方法で、 `<style>` 要素に `media` 属性を付けて[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)を含めると、ビューポートの幅などのメディア特性に依存して内部スタイルシートを選択的に適用することができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `media`
  - : この属性はスタイルを適用するメディアを定義します。値は[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)であり、省略した場合の既定値は `all` です。
- `nonce`
  - : [style-src コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/style-src)内のインラインスクリプトをホワイトリストに入れるために使われる暗号ノンス（ワンタイム番号）です。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスとして推測できないノンスを提供することが重要です。
- `title`
  - : この属性は[代替スタイルシート](/ja/docs/Web/CSS/Alternative_style_sheets)のセットを指定します。
- `blocking` {{Experimental_Inline}}
  - : この属性は、クリティカルなサブリソースの取得時に、特定の処理をブロックすべきであることを明示的に示します。[`@import`](/ja/docs/Web/CSS/@import) でインポートされたスタイルシートは、ふつうクリティカルなサブリソースと見なされますが、一方で [`background-image`](/ja/docs/Web/CSS/background-image) やフォントはそうとはみなされません。
    - `render`: 画面へのコンテンツの描画がブロックされます。

### 非推奨の属性

- `type` {{deprecated_inline}}
  - : この属性は指定すべきではありません。指定した場合、許可される値は空文字列か `text/css` と大文字と小文字を区別せずに一致するものだけです。

## 例

### 単純なスタイルシート

以下の例では、文書にとても単純なスタイルシートを適用します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### 結果

{{EmbedLiveSample('A_simple_stylesheet', '100%', '100')}}

### 複数の style 要素

この例には、2 つの `<style>` 要素が含まれています。 — 競合する宣言は、[詳細度](/ja/docs/Web/CSS/Specificity)が同じであれば、後の `<style>` 要素が優先されることに注意してください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### 結果

{{EmbedLiveSample('Multiple_style_elements', '100%', '100')}}

### メディアクエリーが含まれるもの

この例では一つ前に作ったものに対して、2 番目の `<style>` 要素に `media` 属性を設定してあるので、ビューポートが 500px 未満の場合のみ適用されるようにします。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

#### 結果

{{EmbedLiveSample('Including_a_media_query', '100%', '100')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >、 <code>scoped</code> 属性が提供された場合:
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th>許可されている内容</th>
      <td>
        <code>type</code> 属性に合致するテキストコンテンツ、すなわち
        <code>text/css</code>。
      </td>
    </tr>
    <tr>
      <th>タグの省略</th>
      <td>どちらのタグも省略できません。</td>
    </tr>
    <tr>
      <th>許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
        >を受け入れるすべての要素
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
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th>DOM インターフェイス</th>
      <td>{{domxref("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 文書に外部スタイルシートを適用することができる {{HTMLElement("link")}} 要素
- [代替スタイルシート](/ja/docs/Web/CSS/Alternative_style_sheets)
