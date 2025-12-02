---
title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
original_slug: Web/CSS/calc-size
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{seecompattable}}

**`calc-size()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、`auto`、 [`fit-content`](/ja/docs/Web/CSS/Reference/Values/fit-content)、[`max-content`](/ja/docs/Web/CSS/Reference/Values/max-content) などの[内在サイズ](/ja/docs/Glossary/Intrinsic_Size)値に対して計算を行うことができます。これは、通常の {{cssxref("calc()")}} 関数では対応していません。

`calc-size()` の返値は[補間処理](/ja/docs/Glossary/Interpolation)も可能であり、サイズキーワードの値を[アニメーション](/ja/docs/Web/CSS/Guides/Animations)および[トランジション](/ja/docs/Web/CSS/Guides/Transitions)で使用することができます。事実上、プロパティ値に `calc-size()` を含めると、選択範囲に [`interpolate-size: allow-keywords`](/ja/docs/Web/CSS/Reference/Properties/interpolate-size) が自動的に適用されます。

ただし、 `interpolate-size` は継承されるため、要素に適用すると、その要素とその子要素に適用されているすべてのプロパティの、内在サイズのキーワードの補間処理が可能になります。そのため、内在サイズのアニメーションを有効にするには、`interpolate-size` を使用することをお勧めします。内在サイズのアニメーションを有効にするために `calc-size()` を使用するのは、計算も必要な場合のみにしてください。

## 構文

```css
/* calc-size() で値を渡す */
calc-size(auto, size)
calc-size(fit-content, size)

/* 計算を実行 */
calc-size(min-content, size + 100px)
calc-size(fit-content, size / 2)

/* 関数を含む計算 */
calc-size(auto, round(up, size, 50px))
```

### 引数

`calc-size()` 関数の構文は次のとおりです。

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

引数は次の通りです。

- `<calc-size-basis>`
  - : 計算を実行する値（通常は内在サイズ）。

- [`<calc-sum>`](/ja/docs/Web/CSS/Reference/Values/calc-sum)
  - : `<calc-size-basis>` に対して実行する計算を定義する式です。

### 返値

`<calc-size-basis>` を `<calc-sum>` 式で変更した値を返します。`<calc-size-basis>` 値は内在サイズ値であるため、返値は、関数に入力された内在サイズ値と同様に動作する、変更された内在サイズ値になります。

## 解説

特定のブラウザーのレイアウトアルゴリズムは、内在サイズキーワードに対して特別な動作をします。 `calc-size()` 関数は、 [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) ではなく、内在サイズを表すように明示的に定義されており、それによって正確性を確保しています。 `calc-size()` を使用すると、内在サイズの数値に対して、安全かつ明確に定義された方法で計算を行うことができます。

### 最初の引数（`<calc-size-basis>`）の有効な値

最初の `calc-size()` 引数は、次の内在値のいずれかになります。

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` （{{cssxref("flex-basis")}} を使用してサイズ設定されたコンテナーの場合）

この引数には、いくつかの特別な値も取ることができます。

- 入れ子になった `calc-size()` 値。これはあまり頻繁に行うことではないでしょうが、 [CSS 変数](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)を使用することで確実に利用できます。これは、 `<calc-size-basis>` は、変数が `calc-size()` が設定されているプロパティに対して有効な値である場合に常に機能するためです。例えば、これはうまく動作します。

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  これと同じです。

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- 2 つ目の引数として指定した `<calc-sum>` と同じ制限が適用される別の `<calc-sum>` です。ただし、キーワード `size` を取り込むことはできません。内在サイズ値に対して計算を行わなくなったため、これはおそらく使用しないでしょう。しかし、独自のプロパティ値が `<calc-sum>` である場合、この関数は引き続き動作します。例えば、これは直接動作します。また、 `300px + 2rem` の値の独自のプロパティを使用した場合も動作します。

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- 不特定の確定サイズを表すキーワード `any`。この場合、 `size` キーワードは 2 つ目の引数には取り込むことはできません。 `calc-size()` は 2 つ目の引数の計算結果を返します。例えば次のようにします。

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* 450px を返す */
  }
  ```

異なる内在サイズを同一の計算で混在させることはできません。例えば、`max-content - min-content` は意味を成しません。`calc-size()` は、それぞれの計算で 1 つの内在サイズ値のみを使用するため、この問題を回避しています。

### 2 つ目の引数の有効な値 (`<calc-sum>`)

2 つ目の `calc-size()` 引数は、[`<calc-sum>`](/ja/docs/Web/CSS/Reference/Values/calc-sum) 式です。

この式では、

- キーワード `size` は、最初の引数として指定された `<calc-size-basis>` を表します。
- オペランドには、`size` およびコンテキストで意味のある値型を含めることができます。
- `+`、`-`、`*`、 `/` 演算子を含めることができます。
- それ以外にも、{{cssxref("round()")}}、{{cssxref("max()")}}、あるいは入れ子にした `calc-size()` などの数学関数を含めることができます。
- 全体的な表現は [`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) と一致し、 [`<length>`](/ja/docs/Web/CSS/Reference/Values/length) に解決される必要があります。

### 内在サイズの値をアニメーションできるようにする

`calc-size()` の返値は補間処理が可能であり、[`<length-percentage>`](/ja/docs/Web/CSS/Reference/Values/length-percentage) 値と `calc-size()` の内在サイズ返値との間でアニメーションを実現することができます。

> [!NOTE]
> レイアウトイベントを削減し、パフォーマンスへの影響を軽減するため、可能であればボックスモデルのプロパティのアニメーションは避けるべきです（[重要なレンダリングパス > レイアウト](/ja/docs/Web/Performance/Guides/Critical_rendering_path#レイアウト)を参照）。

例えば、[トランジション](/ja/docs/Web/CSS/Guides/Transitions)を使用して、コンテナーの `width` を `0` から `auto` まで同様にアニメーションすることができます。

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size);
}
```

上記の例では、何らかの計算は行われていません。 `auto` を `calc-size()` に代入し、変更せずに返しています。 {{cssxref("interpolate-size")}} プロパティを使用すると、上記のアニメーションのようなアニメーションを、ほとんどの場合、より簡単に実装できます。特に、複数のアニメーションを考慮する場合に有効です。このプロパティは継承されるため、祖先のプロパティで一度宣言するだけで済みます。つまり、 `calc-size()` を使用せずに `0` と `auto` 間のトランジションを行うことができます。

`calc-size()` 関数は、計算も要求される場合にのみ、内在サイズのアニメーションを有効にするために使用しましょう。例えば、次の例では、`width` をアニメーション化し、かつ、内在サイズの終了状態に計算を適用しています。

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size + 2rem);
}
```

`calc-size()` が役立つケースのひとつは、内在サイズと、その内在サイズを修正したバージョンとの間でアニメーションを行いたい場合です。これは、`interpolate-size` および `calc()` では使用できません。例えば、次の {{cssxref("@keyframes")}} 定義は、コンテナーの `width` を `fit-content` と `fit-content` の 70% との間でアニメーションします。

```css
@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}
```

> [!NOTE]
> `calc-size()` は、2 つの異なる内在サイズ値間のアニメーションができるようになるわけではないことに注意してください。

## 形式文法

{{csssyntax}}

## 例

### 基本的な `calc-size` の使い方

この例では、`calc-size()` を使用したコンテナーの基本的なサイズ設定を示しています。

#### HTML

HTML には、子コンテンツを含む単一の {{htmlelement("section")}} 要素が含まれています。

```html
<section>
  <h2>好きな引用</h2>

  <p>
    ファッションとは、とても醜いものだから、15分ごとに変更しなければならないものだ。
  </p>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
```

CSS では、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) を使用して、`<section>` 内の子要素を中央に配置し、`<section>` の `width` および `height` を `calc-size()` 関数に設定します。`width` は `fit-content` に `6rem` を加えた値に設定します。`height` は `auto` に 2 を掛けた値に設定します。

```css
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc-size(fit-content, size + 6rem);
  height: calc-size(auto, size * 2);
}
```

簡潔にするため、残りの CSS は非表示にしています。

#### 結果

パディングを使用せずに、テキストを中央に配置するための水平方向と垂直方向の余白を作成しました。

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### 基本的な `calc-size` のアニメーション

この例では、 `calc-size()` を使用して、特定のサイズと内在サイズの間でアニメーションを表示する方法を示します。このデモでは、キャラクターのバッジ/「名前タグ」が機能し、このバッジにカーソルを合わせたりフォーカスを合わせると、そのキャラクターに関する情報が表示されます。情報の表示は、設定した長さから `max-content` への {{cssxref("height")}} 遷移によって処理されます。

#### HTML

HTML には、キーボードのフォーカスを受け取ることができるように [`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) が設定された単一の {{htmlelement("section")}} 要素が含まれています。 `<section>` には、それぞれ自分自身の子コンテンツを含む {{htmlelement("header")}} および {{htmlelement("main")}} 要素が含まれています。

```html
<section tabindex="0">
  <header>
    <h2>Chris Mills</h2>
  </header>
  <main>
    <p>Chris is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #cccccc;
}

main {
  padding: 0.7rem;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

CSS では、 `<section>` の {{cssxref("height")}} を `2.5rem` に、 {{cssxref("overflow")}} を `hidden` に設定して、既定では `<header>` だけが表示されるようにし、状態変化時に `transition` で `<section>` の `height` を 1 秒かけてアニメーションさせる指定をします。最後に、 `<section>` の `height` を `calc-size()` 関数で、 {{cssxref(":hover")}} および {{cssxref(":focus")}} で呼び出すように設定します。この関数の返値は、 `max-content` + `2rem` と同等です。

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: calc-size(max-content, size + 2rem);
}
```

簡潔にするため、残りの CSS は省略しています。

#### 結果

`<section>` にカーソルを当てたり、キーボードでフォーカスを当てたりしてみてください。その領域の高さが 2rem だけ伸び、コンテンツがすべて表示され、下部に 2rem の余白ができます。

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### `fit-content` に基づいて読み取り幅を調整する

この例では、テキストが含まれているコンテナーと、読み取り環境設定に応じてコンテナーの幅を狭くしたり広くしたりできるボタンを示しています。

#### HTML

HTML には、子テキストコンテンツを含む単一の {{htmlelement("section")}} 要素と、`<section>` の幅を変更する {{htmlelement("button")}} が含まれています。

```html
<section class="easy-reader">
  <h2>Easy reader</h2>

  <p>
    Eius velit aperiam ipsa. Deleniti eum excepturi ut magni maxime maxime
    beatae. Dicta aperiam est laudantium ut illum facere qui officiis. Sunt
    deleniti quam id. Quis sunt voluptatem praesentium minima dolorum autem
    consequatur velit.
  </p>

  <p>
    Vitae ab incidunt velit aspernatur deleniti distinctio rerum. Et natus sed
    et quos mollitia quia quod. Quae officia ex ea. Ducimus ut voluptatem et et
    debitis. Quidem provident laboriosam exercitationem similique deleniti.
    Temporibus vel veniam mollitia magni unde a nostrum.
  </p>

  <button class="width-adjust">Narrower</button>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

section {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eeeeee;
  border: 2px solid #cccccc;
  padding: 0 20px;
  position: relative;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

button {
  position: absolute;
  top: 2px;
  right: 2px;
}
```

CSS では、`<section>` の {{cssxref("width")}} を既定の {{cssxref("fit-content")}} に設定します。次に、2 組の {{cssxref("@keyframes")}} を定義します。1 つは `fit-content` から `fit-content` の 70% （`calc-size()` を使用して計算）までアニメーションする `narrower`、もう 1 つは同じ値を逆方向にアニメーションする `wider` です。最後に、これらのアニメーションを 2 つのクラス、`.narrower` および `.wider` に取り付けます。それぞれのアニメーションは、 1 秒間継続し、完了すると最終状態が維持されるように定義されています。

```css
section {
  width: fit-content;
}

@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}

@keyframes wider {
  from {
    width: calc-size(fit-content, size * 0.7);
  }

  to {
    width: fit-content;
  }
}

.narrower {
  animation: narrower 1s ease forwards;
}

.wider {
  animation: wider 1s ease forwards;
}
```

簡潔にするため、残りの CSS は省略しています。

#### JavaScript

JavaScript は、ボタンがクリックされたときに `<section>` に適切なクラスを適用する、狭く/広く切り替えるトグルを提供します。

```js
const widthAdjustBtn = document.querySelector(".width-adjust");
const easyReader = document.querySelector(".easy-reader");

widthAdjustBtn.addEventListener("click", () => {
  if (easyReader.classList.length === 1) {
    easyReader.classList.add("narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("wider")) {
    easyReader.classList.replace("wider", "narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("narrower")) {
    easyReader.classList.replace("narrower", "wider");
    widthAdjustBtn.textContent = "Narrower";
  }
});
```

#### 結果

`<button>` を何度かクリックして、 `<section>` を幅の広い表示と狭い表示の間で調整してみてください。これは、 `width` を `fit-content` の値に基づいて操作することで実現しています。

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### 関数 `calc-size()` 内で関数を使用する

前述のように、`calc-size()` 内で別の関数を使用することができます。この例では、 [`field-sizing: content`](/ja/docs/Web/CSS/Reference/Properties/field-sizing) を {{htmlelement("input")}} 要素に設定して、入力コンテンツと同じ幅にし、[`max()`](/ja/docs/Web/CSS/Reference/Values/max) 関数を使用して、`<input>` が最小サイズ以上であることを確実に保持し、入力テキストがそのサイズより広くなった場合にのみ伸長を開始するようにします。これは、 `fit-content` に `20px` を加算して設定することで実現しています。

#### HTML

この HTML には、3 つのテキスト型の `<input>` を含む {{htmlelement("form")}} 要素が含まれています。それぞれの `<input>` には、フォームにアクセスできるように、関連付けられた {{htmlelement("label")}} があり、フォームのレイアウトが崩れるほど入力値が長くなるのを防ぐために [`maxlength`](/ja/docs/Web/HTML/Reference/Attributes/maxlength) が適用されています。

```html
<form>
  <div>
    <label for="name">名前:</label>
    <input type="text" id="name" name="name" maxlength="48" />
  </div>
  <div>
    <label for="email">メールアドレス:</label>
    <input type="email" id="email" name="email" maxlength="48" />
  </div>
  <div>
    <label for="address">住所:</label>
    <input type="text" id="address" name="address" maxlength="60" />
  </div>
</form>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  margin-top: 20px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eeeeee;
  border: 2px solid #cccccc;
}

div {
  display: flex;
  align-items: center;
}

div:not(div:last-child) {
  margin-bottom: 20px;
}
```

CSS では、 `<label>` 要素の `width` を `100px` に設定します。 `field-sizing: content` を {{htmlelement("input")}} 要素に設定して、入力されたコンテンツと同じ幅にするようにします。既定では、何も入力されないため、幅は設定されません。これに対処するために、これらの `width` 値を `calc-size(fit-content, max(100px, size + 20px))` に設定します。これは、値が入力されていなくても、幅は最小 `100px` になることを意味します。入力値が `100px` より広くなった場合、`width` は `fit-content` に `20px` を加えた値に変更されます。これは、コンテンツのサイズに応じて伸長し始めるが、右側に `20px` の隙間を残すことを意味しています。

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

簡潔にするため、残りの CSS は非表示にしています。

#### 結果

フォームの入力欄にテキストを入力して、その値が `max()` 関数によって強制される最小幅と同じ幅になり始めたときに、テキストがどのように伸長するかを確認してください。

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) (developer.chrome.com, 2024)
