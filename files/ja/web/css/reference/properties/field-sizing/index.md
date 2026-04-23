---
title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
original_slug: Web/CSS/field-sizing
l10n:
  sourceCommit: c88c96a09084aadc20ac2cabae2e19609b4a30d8
---

{{seecompattable}}

**`field-sizing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フォームコントロール要素のような、既定の推奨サイズが指定された要素のサイズ設定を制御することができます。このプロパティを使用すると、既定のサイズ設定を上書きすることができ、あるフォームコントロールがそのコンテンツに合わせてサイズを調整できるようになります。

このプロパティは通常、テキスト {{htmlelement("input")}} や {{htmlelement("textarea")}} 要素のスタイル設定に使用され、フォームコントロールにテキストが入力されたときに、コンテンツを縮小したり、大きくしたりすることができます。

## 構文

```css
/* キーワード値 */
field-sizing: content;
field-sizing: fixed;

/* グローバル値 */
field-sizing: inherit;
field-sizing: initial;
field-sizing: revert;
field-sizing: revert-layer;
field-sizing: unset;
```

### 値

- `content`
  - : コンテンツに合わせて要素のサイズを調整できるようにします。
- `fixed`
  - : 要素に固定サイズを設定します。これが既定値です。

## 解説

`field-sizing: content` とすると、フォーム要素の既定の推奨サイズ設定を上書きします。この設定は、テキスト入力欄を内容がちょうど収まるように縮小し、テキストが入力されるにつれて大きくなるように設定する簡単な方法を提供します。コンテンツを含む要素のサイズによって定義されるか、 CSS によって設定されます）最大サイズの制限に達すると展開されなくなり、この点ではすべてのコンテンツを表示するにはスクロールが要求されます。

### `field-sizing: content` の影響を受ける要素

具体的には、 `field-sizing` を `content` にすると以下の要素に影響します。

- ユーザーから直接テキスト入力を受け入れるフォーム入力型。これには [`email`](/ja/docs/Web/HTML/Reference/Elements/input/email)、[`number`](/ja/docs/Web/HTML/Reference/Elements/input/number)、[`password`](/ja/docs/Web/HTML/Reference/Elements/input/password)、[`search`](/ja/docs/Web/HTML/Reference/Elements/input/search)、[`tel`](/ja/docs/Web/HTML/Reference/Elements/input/tel)、[`text`](/ja/docs/Web/HTML/Reference/Elements/input/text)、[`url`](/ja/docs/Web/HTML/Reference/Elements/input/url) 型があります。
  - コントロールに最小幅が設定されていない場合は、テキストカーソルと同じ幅になります。
  - [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/input#placeholder) 属性を持つコントロールは、プレースホルダーテキストを表示できるだけの大きさで表示されます。
  - [`size`](/ja/docs/Web/HTML/Reference/Elements/input#size) 属性は、そのような `<input>` 要素の既定の推奨サイズを変更します。結果として、 `size` は `field-sizing: content` が設定されている `<input>` 要素には効果がありません。
- [`file`](/ja/docs/Web/HTML/Reference/Elements/input/file) 入力型に対応しています。しかし、ユーザーがアップロードする新しいファイルを選択すると、表示されるファイル名が変わります。 `field-sizing: content` が設定されている場合、コントロールはファイル名がちょうど収まるようにサイズを変更します。
- {{htmlelement("textarea")}} コントロールを制御します。 `field-sizing: content` を設定した `<textarea>` 要素は、以下の追加を除いて、単一の行テキストコントロールと同じように動作することは注目に値します。
  - もし `<textarea>` 要素が幅の制約のために大きくできない場合、新しい行のコンテンツを表示するために高さを大きくし始めます。高さの制約に達すると、すべてのコンテンツが表示されるようにスクロールバーを表示し始めます。
  - [`rows`](/ja/docs/Web/HTML/Reference/Elements/textarea#cols) と [`cols`](/ja/docs/Web/HTML/Reference/Elements/textarea#cols) 属性は `<textarea>` の既定の推奨サイズを変更します。その結果、 `rows`/`cols` は `field-sizing: content` を設定した `<textarea>` 要素には効果がありません。
- {{htmlelement("select")}} コントロールです。これらは、 `field-sizing: content` を設定した場合の動作とは少し異なります。効果の種類は作成する `<select>` コントロールの種類によって異なります。
  - 通常のドロップダウンボックスは、新しい値が選択されると、常に表示される選択肢の値に合わせて幅が変更されます。（既定では、ドロップダウンのサイズは、最長の選択肢の値を表示するのに十分な大きさに設定されています。）
  - リストボックス（`<select>` 要素に [`multiple`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) または [`size`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) 属性を指定したもの）はスクロールしなくてもすべての選択肢を表示できる大きさになります。（既定では、ドロップダウンボックスはすべての選択肢の値を表示するためにスクロールを要求されます。）
  - [`size`](/ja/docs/Web/HTML/Reference/Elements/select#size) 属性は `<select>` 要素に `field-sizing: content` が設定することによる影響はとても小さくなります。このような場合、ブラウザーは `size` が `1` に等しいかどうかを調べて、 `<select>` コントロールがドロップダウンとして現れるか、リストボックスとして現れるかを判断します。しかし、 `size` が選択肢の数よりも小さい場合でも、常にリストボックスのすべての選択肢を表示されます。

### `field-sizing` と他のサイズ設定との相互作用

`field-sizing: content` によってあるフォームコントロールに指定された柔軟なサイズ設定は、他にも CSS のサイズ設定を使用することができます。 `field-sizing: content` を使用する場合は、 {{cssxref("width")}} と {{cssxref("height")}} に固定したサイズに設定することは避けてください。しかし、 {{cssxref("min-width")}} や {{cssxref("max-width")}} のようなプロパティを `field-sizing: content` の横に並んだ状態で使用すると、入力されたテキストに合わせてコントロールを大きくしたり小さくしたりすることができ、コントロールが大きくなりすぎたり小さくなりすぎたりするのを防ぐことができるため、非常に有益な効果があります。

[`maxlength`](/ja/docs/Web/HTML/Reference/Elements/input#maxlength) 属性があると、コントロールが最大文字制限に達したとき、サイズの増加が停止します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストフィールドの伸長と縮小

この例は、`field-sizing: content` が単一行と複数行のテキストフィールドに与える効果を示しています。フィールドはテキストが追加されたり除去されたりするとサイズを調整し、下限または上限のサイズ制限に達するまで、効果的にコンテンツを縮小します。

#### HTML

この例の HTML は 3 つのフォームフィールドを格納し、それぞれに {{htmlelement("label")}} を関連付けます。 2 つの `<input>` 要素、 [`text`](/ja/docs/Web/HTML/Reference/Elements/input/text) および [`email`](/ja/docs/Web/HTML/Reference/Elements/input/email) 型と、 {{htmlelement("textarea")}} 要素です。

```html
<div>
  <label for="name">名前:</label>
  <input type="text" id="name" maxlength="50" />
</div>
<div>
  <label for="email">メールアドレス:</label>
  <input type="email" id="email" maxlength="50" placeholder="e.g. a@b.com" />
</div>
<div>
  <label for="comment">コメント:</label>
  <textarea id="comment">これはコメントです。</textarea>
</div>
```

この HTML は以下の点に注意してください。

- 最初の 2 つのフィールドには [`maxlength`](/ja/docs/Web/HTML/Reference/Elements/input#maxlength) 属性が設定されており、文字数制限に達したときにフィールドのサイズが大きくならないようになっています。
- `<textarea>` は {{cssxref("min-width")}} の制約（下記の CSS コードで設定する）の端に達するまでインライン方向に成長し、その後の文字を格納するためにブロック方向に新しい行を追加し始めます。
- `email` 入力欄にはプレースホルダーが設定されています。これにより、フィールドはプレースホルダー全体を表示させるのに十分な大きさでレンダリングされます。フィールドがフォーカスを受け、ユーザーが入力を始めると、フィールドのサイズは `min-width` 値に変更されます。プレースホルダーがない `text` フィールドは、最初は `min-width` でレンダリングされます。

#### CSS

CSS では、 3 つのフォームフィールドに `field-sizing: content` を設定し、 {{cssxref("min-width")}} と {{cssxref("max-width")}} で入力サイズを制約しています。フィールドに最小幅が設定されていない場合、フィールドはテキストカーソルと同じ幅でしかレンダリングされないことを再確認しておきましょう。

また、 `<label>` に初歩的なスタイル設定を施し、フィールドの隣にきれいに配置できるようにします。

```css hidden
body {
  box-sizing: border-box;
  padding: 20px;
}

div {
  margin-bottom: 20px;
  display: flex;
}
```

```css
input,
textarea {
  field-sizing: content;
  min-width: 50px;
  max-width: 350px;
}

label {
  width: 150px;
  margin-right: 20px;
  text-align: right;
}
```

#### 結果

下記のフィールドにテキストを入力したり除去したりして、 `field-sizing: content` と横に並んだプロパティの効果を調べてみてください。

{{ EmbedLiveSample('Growing/shrinking text fields', '100%', '200') }}

### `<select>` 要素の表示を制御

この例は、 `field-sizing: content` のドロップダウンメニュー型と複数行リストボックス型の {{htmlelement("select")}} 要素に対する効果の種類を示しています。

#### HTML

HTML は 2 つの `<select>` 要素の組を含んでいます。 1 つは `field-sizing: content` を適用したもの、もう 1 つは適用していないもので、違いを見ることができます（ただし、テキストフィールドの場合よりも効果はわかりにくいかもしれません）。それぞれのセットには、ドロップダウンメニュー型と複数行のリストボックス型（[`multiple`](/ja/docs/Web/HTML/Reference/Elements/select#multiple) 属性を設定したもの）が 1 つずつ記載されています。

```html
<div class="field-sizing">
  <h2><code>field-sizing: content</code> 付き</h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
<div>
  <h2><code>field-sizing: content</code> なし</h2>
  <select>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option selected>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
  <select multiple>
    <option>Bananas</option>
    <option>Strawberries</option>
    <option>Apples</option>
    <option>Raspberries</option>
    <option>Pomegranate</option>
  </select>
</div>
```

> [!NOTE]
> アクセシビリティのために各フィールドに意味のあるテキストによる説明を関連付けるために、各フォームコントロールに {{htmlelement("label")}} 要素を含めることがベストプラクティスです（詳しくは[意味のあるテキストラベル](/ja/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)を参照してください）。この例は純粋にフォームコントロールの視覚レンダリングの側面に焦点を当てているため、この例ではそうしていませんが、本番コードにはフォームラベルを記載するようにしてください。

#### CSS

CSS では、 `field-sizing: content` は最初の `<select>` 要素にのみ設定します。

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}

select {
  valign: top;
}
```

```css
.field-sizing select {
  field-sizing: content;
}
```

#### 結果

{{ EmbedLiveSample('Controlling select element display', '100%', '170') }}

`field-sizing: content` の次の効果に注意してください。

- ドロップダウンメニューは常に表示されている選択肢のサイズに合わせ、異なる選択肢が選択されるとサイズが変更されます。 `field-sizing: content` を指定しない場合、サイズは選択肢の幅と同じに修正されます。
- 複数選択リストボックスは、すべての選択肢を一度に表示します。 `field-sizing: content` がないと、ユーザーはすべての選択肢を表示するためにボックスをスクロールしなければなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("input")}}
- {{htmlelement("select")}}
- {{htmlelement("textarea")}}
