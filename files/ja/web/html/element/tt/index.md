---
title: '<tt>: テレタイプテキスト要素'
slug: Web/HTML/Element/tt
tags:
  - 要素
  - HTML
  - Monospace
  - Monotype
  - Non-proportional Type
  - 非推奨
  - リファレンス
  - Teletype
  - Teletype Text
  - ウェブ
  - font-family
  - tt
browser-compat: html.elements.tt
translation_of: Web/HTML/Element/tt
---

{{HTMLRef}}{{deprecated_header}}

**`<tt>`** は [HTML](/ja/docs/Web/HTML) は、{{Glossary("user agent", "ユーザーエージェント")}}の既定の等幅フォントで表示される行内文字列を生成します。この要素は、テレタイプ、テキスト専用画面、ラインプリンターのような等幅の表示装置で表示されるテキストとしてスタイルを設定しようとするものです。

**等幅フォント** や **モノスペースフォント** は交換可能で同じ意味を持っています。これらは文字の幅がすべて同じピクセル数のフォントを説明する言葉です。

しかし、この要素は廃止されました。等幅フォントで表現する必要がある行内テキストには、より意味的に役立つ {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, {{HTMLElement("var")}} 要素を使用するか、中身を独自のブロックとして表現する場合は {{HTMLElement("pre")}} タグを使用してください。

> **Note:** 使用する場面に適切な意味的要素がない場合（例えば、一部のコンテンツを等幅フォントで表示する必要がある場合）は、 {{ HTMLElement("span") }} 要素を使用し、 CSS を使用して好きに整形することを検討してください。 {{cssxref("font-family")}} プロパティは始めるのにいいところです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

### 基本的な例

この例では、 `<tt>` を使って、ターミナルアプリケーションに入力したり出力したりしたテキストを表示します。

```html
<p>Enter the following at the telnet command prompt: <code>set localecho</code><br />

The telnet client should display: <tt>Local Echo is on</tt></p>
```

#### 結果

{{EmbedLiveSample("Basic_example", 650, 80)}}

### 既定のフォントの上書き

行う必要はありませんが、ブラウザーが許可していれば、ブラウザーの既定のフォントを上書きすることができます。 CSS を使用します。

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier",
               monospace;
}
```

#### HTML

```html
<p>Enter the following at the telnet command prompt: <code>set localecho</code><br />

The telnet client should display: <tt>Local Echo is on</tt></p>
```

#### 結果

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

## 使用上のメモ

既定では `<tt>` 要素はブラウザーの既定の等幅フォントを使って表示されます。前述の[既定のフォントの上書き](#既定のフォントの上書き)にある通り、 CSS で `tt セレクターを使用した規則を作成することで、これを上書きすることができます。

> **Note:** 既定の等幅フォントの設定を変更するユーザー設定が CSS よりも優先することがあります。

この要素は HTML 4.01 では公式には非推奨にされませんでしたが、使用は避けて意味的要素や CSS を使用するとされていました。 `<tt>` 要素は HTML 5 で廃止されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 意味的な {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} 要素
- {{HTMLElement("pre")}} 要素: 整形済みテキストブロックを表示する要素
