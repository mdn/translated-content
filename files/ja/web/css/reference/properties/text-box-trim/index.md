---
title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
original_slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`text-box-trim`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキスト要素のブロックコンテナーからテキストコンテンツの上端と下端のどちらを切り取るかを指定します。

フォントによって縦の余白が異なるため、ウェブではこれまで、文字の配置を統一することが困難でした。 `text-box-trim` プロパティと、切り取る余白の量を指定する対応プロパティ {{cssxref("text-box-edge")}} を使用すると、テキストの縦の余白を統一しやすくなります。

> [!NOTE]
> 一括指定プロパティの {{cssxref("text-box")}} を使用すると、 `text-box-trim` および `text-box-edge` の値を 1 つの宣言で指定することができます。

## 構文

```css
/* キーワード */
text-box-trim: none;
text-box-trim: trim-both;
text-box-trim: trim-start;
text-box-trim: trim-end;

/* グローバル値 */
text-box-trim: inherit;
text-box-trim: initial;
text-box-trim: revert;
text-box-trim: revert-layer;
text-box-trim: unset;
```

### 値

`text-box-trim` プロパティの値は、次のキーワードのいずれかで指定できます。

- `none`
  - : 既定値です。テキストから余白は切り取られません。
- `trim-both`
  - : 先頭（上端）と末尾（下端）の端が両方切り取られます。
- `trim-start`
  - : 先頭（上端）の端が切り取られます。
- `trim-end`
  - : 末尾（下端）の端が切り取られます。

## 解説

テキストのみのコンテンツの高さは、フォントの高さに対して相対的です。デジタルフォントファイルでは、高さには大文字、アセンダー、ディセンダーなど、文字の全体が含まれます。フォントによってベースラインの高さが異なるため、同じ `font-size` を指定しても、テキストの行の高さが異なり、行間の間隔の外観に影響します。

`text-box-trim` プロパティを使用すると、テキストのブロックコンテナーの上端と下端を切り取って、ブロック方向のテキストの空間をより簡単に制御することができます。

実際に切り取られる余白の大きさは、 {{cssxref("text-box-edge")}} プロパティを使用して指定します。例えば、フォントの大文字または小文字に合わせて上端を切り取り、下端をフォントのベースラインに合わせて切り取ることを選択することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `text-box-trim` の使用

次の例では、 2 つの段落に `text-box-edge: cap alphabetic` を設定して、テキスト要素のブロックコンテナーの上端を大文字の上端に、下端をテキストのベースラインに揃えるように切り取っています。

次に、最初の `text-box-trim` 値を `trim-end` に、2 つ目の `text-box-trim` 値を `trim-both` に設定します。これにより、最初の段落では下端のみが切り取られ、2 つ目の段落では上端と下端の両方が切り取られます。

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-edge: cap alphabetic;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-trim: trim-end;
}

.two {
  text-box-trim: trim-both;
}
```

#### 結果

出力は次のとおりです。それぞれの段落の上部と下部に境界線を設置しましたので、それぞれのケースで余白がどのように切り取られたかを確認できます。

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### 対話的な `text-box-trim` および `text-box-edge` の値の比較

この例では、テキストの段落に適用する `text-box-trim` および `text-box-edge` の値を選べるユーザーインターフェイスを提供しています。

#### HTML

HTML には、3 つの主要なアイテムが含まれます。

- 3 つの {{htmlelement("select")}} 要素を使用して、段落のどの端を切り取るかを設定します（`text-box-trim` 値）。また、段落のブロックの開始端とブロックの末尾から切り取る空白の量も設定します （{{cssxref("text-box-edge")}} 値）。
- テキストを含む `<p>` 要素で、 `text-box-*` 値が適用されています。この段落には [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定されているため、テキストを編集することができます。
- {{htmlelement("output")}} 要素で、段落に適用された `text-box-*` 宣言を表示するためのものです。これは、選択が行われたときに更新されます。

また、 Google Fonts サービスからフォントをインポートして、デモのテキストに適用しています。

簡潔にするため、正確な HTML コードは省略しています。

```html-nolint hidden
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>text-box デモ</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet" />
  </head>
  <body>
    <section>
      <div>
        <label for="box-trim">切り取る辺を選択してください:</label>
        <select id="box-trim">
          <option>none</option>
          <option>trim-start</option>
          <option>trim-end</option>
          <option selected>trim-both</option>
        </select>
      </div>
      <div>
        <label for="trim-over">上部（先頭）の切り取り値を選択してください:</label>
        <select id="trim-over">
          <option>text</option>
          <option selected>cap</option>
          <option>ex</option>
        </select>
      </div>
    </section>
    <p class="display" contenteditable="">Holly Golightly</p>
    <section>
      <div>
        <label for="trim-under">下部（末尾）の切り取り値を選択してください:</label>
        <select id="trim-under">
          <option>text</option>
          <option selected>alphabetic</option>
        </select>
      </div>
    </section>
    <output></output>
  </body>
</html>
```

#### CSS

CSS では、インポートしたフォントを {{htmlelement("html")}} 要素に適用し、[フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)を使用して UI をレイアウトしています。簡潔にするため、 CSS コードのほとんどは非表示にしていますが、以下に、 `text-box-*` 効果が適用される段落のスタイルを設定するルールと、 `text-box-*` ルールが適用されていることを示す `<output>` を示します。

```css hidden
html {
  font-family: "Roboto", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

section {
  display: flex;
  justify-content: space-between;
}

section:nth-of-type(2) {
  justify-content: flex-end;
  padding-bottom: 30px;
}

select {
  width: 6rem;
}
```

```css
p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

output {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  width: fit-content;
}
```

ここでも、`.display` 段落に上下の境界線を含めていることに注意してください。これにより、異なる `text-box-*` 値が選択された場合に、切り取られる余白がどのように変化するかを確認できます。

#### JavaScript

JavaScript では、3 つの `<select>` 要素と 2 つの `<p>` 要素への参照を取得することから始めます。

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

次に、 `setEdgeTrim()` という関数を定義します。これは、 {{cssxref("text-box")}} の値を `<select>` 要素の値に基づいて適用し、適用した宣言を（個別指定と一括指定の両方） output に表示します。

```js
function setEdgeTrim() {
  const textBoxTrimValue = boxTrimSelect.value;
  const textBoxEdgeValue = `${trimOverSelect.value} ${trimUnderSelect.value}`;
  displayElem.style.textBox = `${textBoxTrimValue} ${textBoxEdgeValue}`;

  codeElem.innerHTML = `
    <span><code>text-box-trim: ${textBoxTrimValue}</code></span>
    <br>
    <span><code>text-box-edge: ${textBoxEdgeValue}</code></span>
    <br><br>
    <span>同等の一括指定:</span>
    <br><br>
    <span><code>text-box: ${textBoxTrimValue} ${textBoxEdgeValue}</code></span>
  `;
}
```

JavaScript の最後の部分では、 `setEdgeTrim()` 関数を 1 回実行して、UI の初期状態を設定します。次に、すべての `<select>` 要素に [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーを適用し（[`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) を使用して）、 `<select>` の値のいずれかが変更されるたびに `setEdgeTrim()` 実行され、 UI がそれに応じて更新されるようにします。

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### 結果

出力結果は次の通りです。

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` は、最初は `trim-both` に設定されています。これは、段落の上端と下端が切り取られることを意味しています。 `text-box-edge` は、最初は `cap alphabetic` に設定されています。これは、テキストが、先頭の端では大文字の上端と、末尾の端ではベースラインと揃うように切り取られることを意味しています。

`<select>` の値を変更して、表示テキストに与える効果を確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout) module
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) (developer.chrome.com, 2025)
