---
title: HTML `<tt>` テレタイプテキスト要素
short-title: <tt>
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

**`<tt>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{Glossary("user agent", "ユーザーエージェント")}}のデフォルトの等幅フォントで表示される行内文字列を生成します。この要素は、テレタイプ、テキスト専用画面、ラインプリンターのような等幅の表示装置で表示されるテキストとしてスタイルを設定しようとするものです。

**等幅フォント** や **モノスペースフォント** は交換可能で同じ意味を持っています。これらは文字の幅がすべて同じピクセル数のフォントを説明する言葉です。

しかし、この要素は廃止されました。等幅フォントで表現する必要がある行内テキストには、より意味的に役立つ {{HTMLElement("code")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}}, {{HTMLElement("var")}} 要素を使用するか、中身を独自のブロックとして表現する場合は {{HTMLElement("pre")}} タグを使用してください。

> [!NOTE]
> 使用する場面に適切な意味的要素がない場合（例えば、一部のコンテンツを等幅フォントで表示する必要がある場合）は、 {{ HTMLElement("span") }} 要素を使用し、 CSS を使用して好きに整形することを検討してください。 {{cssxref("font-family")}} プロパティは始めるのにいいところです。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

### 基本的な例

この例では、 `<tt>` を使って、ターミナルアプリケーションに入力したり出力したりしたテキストを表示します。

```html
<p>
  telnet コマンドプロンプトで次のコマンドを入力してください。
  <code>set localecho</code><br />

  telnet クライアントは <tt>Local Echo is on</tt> と表示します。
</p>
```

#### 結果

{{EmbedLiveSample("Basic_example", 650, 80)}}

### デフォルトのフォントの上書き

行う必要はありませんが、ブラウザーが許可していれば、ブラウザーのデフォルトのフォントを上書きすることができます。 CSS を使用します。

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier New", monospace;
}
```

#### HTML

```html
<p>
  telnet コマンドプロンプトで次のコマンドを入力してください。
  <code>set localecho</code><br />

  telnet クライアントは <tt>Local Echo is on</tt> と表示します。
</p>
```

#### 結果

{{EmbedLiveSample("Overriding_the_default_font", 650, 80)}}

## 使用上のメモ

デフォルトでは `<tt>` 要素はブラウザーのデフォルトの等幅フォントを使って表示されます。前述の[デフォルトのフォントの上書き](#デフォルトのフォントの上書き)にある通り、 CSS で `tt セレクターを使用した規則を作成することで、これを上書きすることができます。

> [!NOTE]
> デフォルトの等幅フォントの設定を変更するユーザー設定が CSS よりも優先することがあります。

この要素は HTML 4.01 では公式には非推奨にされませんでしたが、使用は避けて意味的要素や CSS を使用するとされていました。 `<tt>` 要素は HTML 5 で廃止されました。

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 意味的な {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("kbd")}}, {{HTMLElement("samp")}} 要素
- {{HTMLElement("pre")}} 要素: 整形済みテキストブロックを表示する要素
