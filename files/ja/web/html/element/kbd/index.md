---
title: '<kbd>: キーボード入力要素'
slug: Web/HTML/Element/kbd
---

{{HTMLRef}}

**HTML のキーボード入力要素** (**`<kbd>`**) はキーボード、音声入力、その他の入力端末からのユーザーによる文字入力を表す行内の文字列の区間を表します。慣習的に、{{Glossary("user agent", "ユーザーエージェント")}}は既定で `<kbd>` 要素の中身を等幅フォントで表示しますが、 HTML 標準で規定されているものではありません。

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

`<kbd>` は {{HTMLElement("samp")}} (サンプル出力) 要素の中で様々な組み合わせの入れ子が行われ、様々な形の入力や視覚的な合図に基づいた入力を表現します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
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
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 使用上のメモ

他の要素 `<kbd>` と組み合わせることで、もっと具体的なシナリオを表現できる場合があります。

- 他の `<kbd>` 要素の中で更に `<kbd>` 要素を使用すると、もっと大きい入力の中における、実際のキー入力またはその他の入力単位を表します。以下の[入力時のキー操作の表現](#representing_keystrokes_within_an_input)を参照してください。
- {{HTMLElement("samp")}} 要素の中で `<kbd>` 要素を使用すると、システムからユーザーにエコーバックされた入力を表します。以下の[入力のエコーバック](#echoed_input)の例を参照してください。
- 一方、 `<kbd>` 要素の中で `<samp>` 要素を使用すると、メニューやメニュー項目の名前、画面上に表示されているボタンの名前など、システムによって表示された文字列に基づく入力を表します。以下の[画面上に表示された入力の選択肢の表現](#representing_onscreen_input_options)を参照してください。

> **メモ:** 専用のスタイルを定義して、 `<kbd>` 要素における既定のフォントの選択を上書きすることができますが、ユーザー設定によっては CSS より優先されることがあります。

## 例

### 基本的な例

```html
<p>コマンド "mycommand" のドキュメントを参照するには <kbd>help mycommand</kbd>
コマンドを使用してください。</p>
```

{{ EmbedLiveSample('Basic_example', 350, 80) }}

### 入力時のキー操作の表現

複数のキー操作から成る入力を表現したい場合、複数の `<kbd>` 要素を重ねて、外側の `<kbd>` 要素で入力全体を表し、内側の `<kbd>` で入力時のそれぞれのキー操作を表すことができます。

#### スタイルなし

最初に、 HTML だけでどのように見えるかを見てみましょう。

##### HTML

```html
<p>キーボードショートカットの
<kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd> を使用して新規文書を作成することもできます。</p>
```

ここでは外側の `<kbd>` 要素でキー入力操作全体を囲み、それぞれのキーの組み合わせを記述するために、それぞれのキーを囲んでいます。

> **メモ:** 常にこのように囲む必要はありません。外側の `<kbd>` 要素を省略して簡略化しても構いません。言い換えれば、単に `<kbd>Ctrl</kbd>+<kbd>N</kbd>` と表現するのも完全に有効です。
>
> しかし、スタイルシートによっては、このように重ねて囲んだ方が便利だと感じられるかもしれません。

##### 結果

スタイルシートを適用しないと、出力結果は次のように見えます。

{{EmbedLiveSample("Unstyled", 650, 80)}}

#### 専用スタイル付き

いくらか CSS を追加して、もっと分かりやすくすることができます。

##### CSS

キーボードのキーを表示する際に適用できるスタイル、 `<kbd>` 要素の `key` を定義します。

```css
kbd.key {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

それから HTML を更新して、このクラスを出力中のキーに使用するように表現します。

```html
<p><kbd><kbd class="key">Ctrl</kbd>+<kbd class="key">N</kbd></kbd> を押して新規文書を作成することもできます。</p>
```

##### 結果

結果は私たちが求めているものです。

{{EmbedLiveSample("With_custom_styles", 650, 80)}}

### 入力のエコーバック

{{HTMLElement("samp")}} 要素内で `<kbd>` 要素を使用すると、システムからエコーバックされた入力を表現することができます。

```html
<p>構文エラーが発生すると、このツールは確認のために
あなたが入力したコマンドを出力します。</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```

{{EmbedLiveSample("Echoed_input", 650, 100)}}

### 画面上に表示された入力の選択肢の表現

`<kbd>` 要素の中で `<samp>` 要素を使用すると、メニューやメニュー項目の名前や、画面上に表示されているボタンの名前など、システムが表示した文字列に基づく入力を表すことができます。

例えば、「ファイル」メニューの中の「新規文書」を選択する方法を HTML で表現すると、このようになります。

```html
<p>新規ファイルを作成するには、メニューの
<kbd><kbd><samp>ファイル</samp></kbd>⇒<kbd><samp>新規文書</samp></kbd></kbd>
を選択して下さい。</p>

<p>新しいファイルの名前を入力したら、 <kbd><samp>OK</samp></kbd>
ボタンを押して確認することを忘れないでください。</p>
```

これはいくらか興味深い組み合わせです。メニューの選択肢を記述するために、入力全体を `<kbd>` 要素で囲んでいます。それからその中で、メニューとメニュー項目の名前を `<kbd>` 及び `<samp>` の中に入れ、画面上の部品を選択する入力であることを示しています。

#### 結果

{{EmbedLiveSample("Representing_onscreen_input_options", 650, 120)}}

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考                                                               |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-kbd-element', '&lt;kbd&gt;')}} | {{Spec2('HTML WHATWG')}} |                                                                    |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-kbd-element', '&lt;kbd&gt;')}}     | {{Spec2('HTML5 W3C')}}     | 音声入力や個々のキー入力など、どのようなユーザ入力も含むように拡張 |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;kbd&gt;')}}                             | {{Spec2('HTML4.01')}}     |                                                                    |

## ブラウザーの互換性

{{Compat("html.elements.kbd")}}

## 関連情報

- {{htmlelement("code")}}
