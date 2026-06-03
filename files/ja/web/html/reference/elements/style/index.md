---
title: HTML `<style>` スタイル情報要素
short-title: <style>
slug: Web/HTML/Reference/Elements/style
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<style>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書あるいは文書の一部分のスタイル情報を含みます。 `<style>` 要素を含んでいる文書のコンテンツに適用される CSS を含みます。

{{InteractiveExample("HTML デモ: &lt;style&gt;", "tabbed-standard")}}

```html-nolint interactive-example
<style>
  p {
    color: #26b72b;
  }
  code {
    font-weight: bold;
  }
</style>

<p>
  このテキストは緑色になります。インラインスタイルは、外部から読み込まれた CSS よりも優先されます。
</p>

<p style="color: blue">
  ただし、<code>style</code> 属性で上書きすることは可能です。
</p>
```

```css interactive-example
p {
  color: red;
}
```

`<style>` 要素は文書の {{htmlelement("head")}} 要素の中に入れる必要があります。一般に、スタイルを外部スタイルシートに入れて {{htmlelement("link")}} 要素を使用することをより推奨します。

文書に複数の `<style>` および `<link>` が含まれている場合、これらは含まれている文書の DOM 上の順序で適用されます。 — 予期しないカスケード問題を防ぐために、含まれている順序が正しいことを確認してください。

`<link>` 要素と同じ方法で、 `<style>` 要素に `media` 属性を付けて[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を含めると、ビューポートの幅などのメディア特性に依存して内部スタイルシートを選択的に適用することができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `blocking`
  - : この属性は、重要なサブリソースの取得時に、特定の処理をブロックすべきであることを明示的に示します。{{cssxref("@import")}} でインポートされたスタイルシートは、ふつう重要なサブリソースと見なされますが、一方で {{cssxref("background-image")}} やフォントはそうとはみなされません。ブロック対象となる操作は、以下の一覧に挙げるブロック対象トークンの空白区切りリストでなければなりません。現在、トークンは次の 1 つだけです。
    - `render`: 画面へのコンテンツの描画がブロックされます。

    > [!NOTE]
    > `style` 要素は文書の `<head>` 内に含まれる場合のみ、レンダリングをブロックする可能性があります。デフォルトで、`style` 要素が `<head>` 内にある場合は、ブラウザーが構文解析中にそれを検出した際にレンダリングをブロックします。スクリプトを介して動的にそのような `style` 要素を追加する場合、レンダリングをブロックさせるには、さらに `blocking = "render"` を設定する必要があります。

- `media`
  - : この属性はスタイルを適用するメディアを定義します。値は[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)であり、省略した場合の既定値は `all` です。
- `nonce`
  - : 暗号学的{{Glossary("Nonce", "ノンス")}} (number used once) で、[style-src コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)内のインラインスタイルを許可するために使用されます。サーバーはポリシーを送信するたびに一意のノンス値を生成する必要があります。それ以外の方法でリソースのポリシーのバイパスとして推測できないノンスを提供することが重要です。
- `title`
  - : この属性は[代替スタイルシート](/ja/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)のセットを指定します。

### 非推奨の属性

- `type` {{deprecated_inline}}
  - : この属性は指定すべきではありません。指定した場合、許可される値は空文字列か `text/css` と大文字と小文字を区別せずに一致するものだけです。

## 例

### 基本的なスタイルシート

以下の例では、文書に短いスタイルシートを適用します。

```html
<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="UTF-8" />
    <title>テストページ</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>これは段落です。</p>
  </body>
</html>
```

#### 結果

{{EmbedLiveSample('A_basic_stylesheet', '100%', '100')}}

### 複数の style 要素

この例には、2 つの `<style>` 要素が含まれています。 — 競合する宣言は、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が同じであれば、後の `<style>` 要素が優先されることに注意してください。

```html
<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="UTF-8" />
    <title>テストページ</title>
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
    <p>これは段落です。</p>
  </body>
</html>
```

#### 結果

{{EmbedLiveSample('Multiple_style_elements', '100%', '100')}}

### メディアクエリーが含まれるもの

この例では一つ前に作ったものに対して、2 番目の `<style>` 要素に `media` 属性を設定してあるので、ビューポートが 500px 未満の場合のみ適用されるようにします。

```html
<!doctype html>
<html lang="ja-JP">
  <head>
    <meta charset="UTF-8" />
    <title>テストページ</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="(width < 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>これは段落です。</p>
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
          >メタデータコンテンツ</a
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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#メタデータコンテンツ"
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
- [代替スタイルシート](/ja/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet)
