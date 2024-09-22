---
title: ライブサンプル
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 9a921c9c744c5e5cb55248c56a212d3fce12c708
---

{{MDNSidebar}}

MDN は、記事中のコードブロックを「ライブサンプル」として表示することに対応しており、読者はウェブページで見ていくようなコードとその出力結果の両方を見ることができます。この機能により、読者は実行されたコードが何を生成するかを正確に理解することができ、文書化がダイナミックで有益なものになります。
また、文書内のコードブロックが期待される出力を持ち、さまざまなブラウザーで使用したときに適切に動作することを、書き手が絶対的に確認することができます。

ライブサンプルシステムは、HTML、CSS、JavaScript で書かれたコードブロックを、ページ内で書かれた順番に関係なく処理できます。これにより、システムがページ内で直接コードを実行するため、出力がソースコードの組み合わせに確実に対応するように保証します。

[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available)とは異なり、ライブサンプルは、コンソールログをキャプチャしたり、ユーザーの入力によって変更された例をリセットするための組み込みの機能を提供していません。
[例](#例)の節では、これらの機能や他にも有益な機能を実装する方法を示します。

## ライブサンプルシステムの仕組み

ライブサンプルシステムは、コードブロックをグループ化し、 HTML にマージし、その HTML を {{HTMLElement("iframe")}} でレンダリングします。
ライブサンプルは 2 つの部分で構成されています。

- グループ化された 1 つ以上のコードブロック
- 結合したコードブロックの結果を {{HTMLElement("iframe")}} で表示させるマクロ呼び出し。

出力用のコードが入っている各[コードブロック](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)には、それが HTML、CSS、JavaScript コードのどれであるかを指定する言語識別子 (`html`, `css`, `js`) があります。言語識別子は対応するコードブロック上になければならず、出力を表示するためにページ内にマクロ呼び出し (`EmbedLiveSample`) が存在しなければなりません。

````md
## 例

```html
<!-- HTML のコード -->
```

```css
/* CSS のコード */
```

\{{EmbedLiveSample("例")}}
````

ライブサンプルシステムでは、出力を効果的に表示するために、コードブロックをさまざまな方法でグループ化することができます。次の節では、この方法について記述します。

### コードブロックのグループ化

コードブロックは 2 つの方法でグループ化できます。

1. 識別子として見出しまたはコードブロックを格納するブロック要素の ID を使用します。
2. コードブロックとともに文字列識別子を指定します。

識別子を明示的に指定していないコードブロックは、既定では、コードブロックを包含する見出しやブロック要素の ID を使用してグループ化されます。この場合の識別子は見出しやブロック要素（{{HTMLElement("div")}} など）の ID です。これは下記の通りで、「段落のスタイル設定」ブロック内の `html` と `css` コードは `EmbedLiveSample` マクロ呼び出しの出力を生成するために使用されます。

````md
## 例

### 段落のスタイル設定

この例では、 CSS を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

#### HTML

```html
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### 結果

\{{EmbedLiveSample("段落のスタイル設定")}}

`<p>` 要素に `class="fancy"` がついたものだけが `red` のスタイルになります。
````

- ID がブロック要素に属する場合、そのグループは、その ID が使用される囲むブロック要素内のすべてのコードブロックを含む。
- ID が見出しに属する場合、その見出しの後ろで同じ見出しレベルの次の見出しの前にあるすべてのコードブロックがグループに含まれます。指定された見出しの小見出しのコードブロックはすべて使用されていることに注意してください。これが望ましい効果でない場合は、代わりにブロック要素に ID を使用するか、文字列識別子を使用してください。

識別子を使ってコードブロックをグループ化するには、コードブロックの情報文字列に `live-sample___{IDENTIFIER}` という形式の文字列を追加します。識別子はグループ化したいコードブロックに固有のものでなければなりません。例えば、 `live-sample__color-picker` はライブサンプルシステムの識別子として `color-picker` を使用し、情報文字列に `live-sample___color-picker` を持つコードブロックはすべてライブサンプルに結合されます。
次の例では、 CSS と JavaScript のコードブロックを `color-picker` という識別子を使用してグループ化しています。

````md
## 例

### 段落のスタイル設定

この例では、 CSS を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

```html live-sample___paragraph-styling
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

`<p>` 要素に `class="fancy"` がついたものだけが `red` のスタイルになります。

\{{EmbedLiveSample("paragraph-styling")}}
````

マクロは、指定されたコードブロックのグループの出力を取得するのに、特別な URL を使います。例えば `https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/CSS/animation/_sample_.Cylon_Eye.html` です。続く一般的な構造は `https://url-of-page/_sample_.group-id.html` です。 `group-id` はコードブロックが配置されている見出しやブロックの ID です。

こうしてできたフレーム（またはページ）はサンドボックス化され、安全で、技術的にはウェブ上で動作する何らかのことができます。もちろん、実際問題として、コードはページのコンテンツに関連したものであるべきです。関連性のない素材は MDN 編集者コミュニティによって除去されます。

ライブサンプルシステムには利用できるオプションがたくさんあるので、少しずつ見ていくことにしましょう。

### ライブサンプルのマクロ

ライブサンプルを表示するために使用できるマクロは 2 つあります。

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) はライブサンプルをページに埋め込みます。
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) はライブサンプルを新しいページに開くリンクを作成します。

多くの場合、 `EmbedLiveSample` マクロや `LiveSampleLink` マクロは、追加の作業をほぼ全くすることなくページに追加することができます。サンプルが見出しの ID で識別されるか、ID を持つブロックに含まれていれば、マクロを追加するだけでその作業が行われるはずです。

#### EmbedLiveSample マクロ

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug)}}
```

- sample_id
  - : 必須: これはサンプルの文字列識別子か、コードを描画する見出しや囲みブロックの ID です。
    正しい見出し ID があるかどうか確認するには、ページの目次で節の URL を見てください。また、ページのソースを見ることでも調べることができます。
- width
  - : 作成する {{HTMLElement("iframe")}} の幅で、`px` で指定します。これは省略可能で、省略すると合理的な既定の幅が使用されます。特定の幅を使用する場合は、height 引数も指定する*必要があります*。
- height
  - : 作成する {{HTMLElement("iframe")}} の高さで、`px` で指定します。これは省略可能で、省略すると合理的な既定の高さが使用されます。特定の高さを使用する場合は、width 引数も指定する*必要があります*。どちらか一方しか使用しない場合は、既定のフレームサイズが使用されます。
- screenshot_URL
  - : ライブサンプルの外観を示すスクリーンショットの URL。これは省略可能ですが、新しい技術が動作しないユーザーのブラウザーではサンプルがブラウザーでサポートされている場合の様子を確認できるので有用です。この引数を含めると、ライブサンプルの横に、適切な見出し付きのスクリーンショットが表示されます。
- page_slug

  - : サンプルが入っているページのスラッグです。これは省略可能で、指定されていない場合、サンプルはマクロが使用されたのと同じページから取得されます。

    > [!WARNING]
    > この引数は非推奨です。新しいサンプルでは使用せず、既存のサンプルで見かけたら削除してください。私たちは積極的にその使用を削除しており、使用されなくなった時点でサポートを終了する予定です。

#### LiveSampleLink マクロ

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : コードの引用元となる見出しまたは囲みブロックの ID。正しい ID であるかどうかを確認する最善の方法は、ページの目次でそのセクションの URL を見ることです。ページのソースを見ることで確認することもできます。
- link_text
  - : リンクテキストとして使用する文字列。

## ライブサンプルシステムの使用

以下のセクションでは、ライブサンプルシステムの一般的な使用例をいくつか説明します。

### ライブサンプルの書式

この「例」の節にライブサンプルを書く場合は、このライブサンプルの例を説明する H3 の見出し (`###`) を提供してください。理想的 には、この例について、シナリオと何を実証することを期待しているかを説明する短い 説明を書いてください。次に、次の順番で、以下の H4 見出し (`####`) でサブセクションを追加します。

- HTML
- CSS
- JavaScript
- 結果

上記の各サブセクションにコードブロックを記述します。

**結果** サブセクションに、 `EmbedLiveSample` マクロの呼び出しを追加してください。できれば、結果を説明するために、このサブセクションにさらにいくつかの文章を記載してください。

特定の種類の言語を使用していない場合（例えば JavaScript を使用していない場合）、またはコードブロックを非表示にしている場合は、対応する見出しを省略してください。

### コードを隠す

ページ内にレンダリングされた例に関連する静的なコードブロックを表示したいだけの場合もあります。しかし、そのような例をレンダリングするには、HTML、CSS、JavaScript コードブロックが必要です。

そのためには、言語識別子に `hidden` 情報文字列を追加することで、関連性のないコードブロックを隠すことができます。この場合、非表示にするコードブロックの `### HTML/CSS/JavaScript` の見出しは省略してください。

上の例を用いて HTML コードを非表示にすると、次のようになります。

````md
## 例

### 段落のスタイル設定

この例では、 CSS を `fancy` クラスが設定されている段落のスタイル設定に使用しています。

```html hidden
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### 結果

`<p>` 要素に `class="fancy"` がついたものだけが `red` のスタイルになります。

\{{EmbedLiveSample("Styling a paragraph")}}
````

### スニペットをライブサンプルにする

一般的な用途の一つは、 MDN で既に表示されている既存のコードスニペットをライブサンプルに変換することです。
最初のステップでは、コードスニペットを追加するか、既存のサンプルをコンテンツやマークアップの観点からライブサンプルとして使用できるようにします。コードスニペットは、まとめて実行可能な完全な例を構成する必要があります。たとえば、既存のスニペットに CSS のみが表示されている場合は、 CSS が操作する HTML のスニペットを追加する必要があります。

それぞれのコードはコードブロックにあり、各ブロックはブロックごとに言語ごとに適切にマークされていなければなりません。ほとんどの場合、これは既に行われていますが、コードの各部分が正しい構文で構成されていることを確認することは、常に二重チェックしておく価値があります。これは、コードブロックに `language-type` という言語識別子をつけます。ここで _language-type_ は、ブロックに含まれる言語の種類で、 `html`、`css`、`js` などになります。

> [!NOTE]
> 言語ごとに複数のブロックを設置することができます。その場合はすべて連結されます。これによって、コードの塊を置き、その後でその動作の説明を置き、さらに別な塊を置くというようなことができます。これにより、ライブサンプルと説明文を組み合わせたチュートリアルなどを簡単に作成することができます。

HTML、CSS、JavaScript コードのコードブロックがそれぞれの言語の構文強調表示に対して正しく設定されていることを確認してください。

## 例

この節では、サンプルを構成するコードブロックをグループ化するさまざまな方法や、サンプルでログ出力を表示する方法など、ライブサンプルシステムを使用する方法を示す例を示します。

コードブロックの見出し（"HTML"、"CSS"、"JavaScript"）は、ほとんどの MDN の例で慣例的に使用されていますが、実際にはライブサンプルマクロでは必須ではないことに注意してください。

### コードブロックを見出しでグループ化

### HTML

この HTML は、メッセージの配置とスタイルに役立つ段落とブロックを作成します。

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

### CSS

CSS コードは、ボックスとその内部のテキストのスタイルを設定します。

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

### JavaScript

このコードはとても簡単です。クリックすると警告が表示されるテキスト "Hello world!" にイベントハンドラーを割り当てるだけです。

```js
const el = document.getElementById("item");
el.onclick = function () {
  alert("Owww, stop poking me!");
};
```

### 結果

下記は `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}` によって、上のコードブロックを実行した結果です。

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

下記は `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'ライブサンプルデモへのリンク')}}` によって、これらのコードブロックを経由して呼び出される結果のリンクです。

{{LiveSampleLink('grouping_code_blocks_by_heading', 'ライブサンプルデモへのリンク')}}

### 識別子によるコードブロックのグループ化

この HTML は段落といくつかのブロックを作成し、メッセージの位置指定とスタイル設定を助けています。このコードブロックの言語識別子 `html` には `live-sample___hello-world` という文字列が追加されています。

```html live-sample___hello-world
<p>ライブサンプルシステムの単純な動作例です。</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

CSS コードをコーディングすることで、ボックスとその中のテキストがスタイル設定されます。このコードブロックの言語識別子 `css` には `live-sample___hello-world` という文字列が追加されています。

```css live-sample___hello-world
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

この JavaScript コードは、 "Hello world!" テキストがクリックされたときにアラートが現れるようにイベントハンドラーを取り付けます。このコードブロックの言語識別子 `js` にも `live-sample___hello-world` という文字列が追加されています。

```js live-sample___hello-world
const el = document.getElementById("item");
el.onclick = function () {
  alert("Owww, stop poking me!");
};
```

`\{{EmbedLiveSample('hello-world')}}` マクロ呼び出しで文字列識別子 `hello-world` を使用して上記のコードブロックを実行することで、この出力結果が得られます。

{{EmbedLiveSample("hello-world")}}

### 単一の項目をログ出力

この例では、新しいログ項目が追加されるたびに前回値が置き換わる、単純な 1 つの項目のログをライブサンプルに実装する方法を示します。

分かりやすくするために、この例ではログ出力コードとそれを使用するコードを区切り、ログ出力コードを最初に表示しています。
一般的に自分自身でサンプルを実装する場合は、ログ出力する要素を他の UI 要素の下記に配置する必要があります。

> [!NOTE]
> サンプルの一部としてログ出力結果を表示することで、 `console.log()` を使用するよりもはるかに使いやすくなります。

#### HTML

ログ出力を表示するために {{HTMLElement("pre")}} 要素を生成し、 `id` を `"log"` に設定します。

```html
<pre id="log"></pre>
```

#### JavaScript

次にログ出力する関数 `log()` を定義します。
これはログ出力するテキストを引数として取り、既存のログを置き換えるために使用します。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

ログ要素のコンテンツは `innerText` プロパティを使用して設定されることに注意してください。これは、ログ出力されたテキストが HTML に解釈されない（悪意のあるコードが埋め込まれる可能性がある）ため、`innerHTML` を使用するよりも安全です。

#### CSS

CSS はログ出力要素の高さを設定します。

```css
#log {
  height: 20px;
}
```

#### テストコードをログ出力

この例は「どのようにログ出力するか」を示すように設計されているので、「何がログ出力されるか」はそれだけ重要ではありません。
そのため、ユーザーが押して値を増加するボタンとして実装されています。

```html
<button id="increment" type="button">何度も押してください</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`ボタンが ${incrementValue} 回押されました`);
});
```

#### 結果

ボタンを押して新しいログの中身を追加してください。

{{EmbedLiveSample("単一の項目をログ出力", "100%", "80px")}}

### アイテムを追加したログを表示

この例では、ライブサンプルに単純な「ログ出力するコンソール」を実装する方法を示します。
このコンソールは、ログが追加されるたびに出力の末尾に新しい行を追加し、新しい項目をスクロールして表示します。

分かりやすくするために、この例ではログ出力コードとそれを使用するコードを区切り、ログ出力コードを最初に表示しています。
一般的に、自分自身でサンプルを実装する場合、ログ出力要素を他の UI 要素の下記に配置する必要があります。

> [!NOTE]
> サンプルの一部としてログ出力を表示することは、`console.log()`を使用するよりもずっと使い勝手が良くなります。

> [!NOTE]
> もっと完全な例は [`DataTransfer.effectAllowed`](/ja/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) を参照してください。

#### HTML

ログ出力を表示するために {{HTMLElement("pre")}} 要素を生成し、 `id` を `"log"` に設定します。

```html
<pre id="log"></pre>
```

#### JavaScript

次にログ出力する関数 `log()` を定義します。
これはログ出力するテキストを引数として取り、ログ要素の内容に新しい行として追加します。
また、この関数は要素の `scrollTop` を `scrollHeight` に設定し、ログ出力する新しい行を強制的にスクロールさせます。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

前回の例と同様に、 `innerHTML` を使用するよりも悪意のあるコードの影響を受けにくいため、 `innerText` プロパティを使用してコンテンツを設定します。

#### CSS

CSS は、要素のコンテンツがあふれた場合にスクロールバーを追加し、ログ出力する要素の高さを設定し、境界線を追加します。
なお、上の JavaScript は、あふれた場合、新しいログテキストを追加するとテキストがスクロールして表示されることを保証します。

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### テストコードをログ出力

この例は「どのようにログ出力するか」を示すように設計されているので、「何がログ出力されるか」はそれだけ重要ではありません。
そのため、ユーザーが押して値を増加するボタンとして実装されています。

```html
<button id="increment" type="button">何度も押してください</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`ボタンが ${incrementValue} 回押されました`);
});
```

#### 結果

ボタンを押して新しいログの中身を追加してください。

{{EmbedLiveSample("アイテムを追加したログを表示", "100%", "180px")}}

### リセットボタンを表示

リセットボタンは、ページをリセットしないと初期状態に戻せない例のために役立ちます。
例えば、 [`Highlight.priority` の「優先度の設定」の例](/ja/docs/Web/API/Highlight/priority#result_2) はリセットボタンが必要です。

この例では、上記の[アイテムを追加したログを表示](#アイテムを追加したログを表示)の例にリセットボタンを追加する方法を示します。
なお、ログ出力するコードの JavaScript と CSS は前回の例と同じなので、コードは非表示にしています。

#### HTML

この例の HTML にはリセットボタンを加えました。

```html
<button id="increment" type="button">何度も押してください</button>
<button id="reset" type="button">リセット</button>
<pre id="log"></pre>
```

#### JavaScript

ボタンのコードは `click` イベントハンドラー関数を追加し、単純に現在の例を格納するフレームをリロードします。

```js
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`ボタンが ${incrementValue} 回押されました`);
});
```

#### 結果

「何度も押してください」ボタンを何度もクリックしてください。
「リセット」 ボタンを押すと、例がリセットされます。

{{EmbedLiveSample("リセットボタンを表示", "100%", "180px")}}

## ライブサンプルに関する取り決め

- コードブロックの順序
  - : ライブサンプルを追加する場合、コードブロックは最初のものがこのサンプルのメイン言語に対応するようにソートする必要があります。たとえば、HTML リファレンスのライブサンプルを追加する場合、最初のブロックは HTML でなければならず、CSS リファレンスのライブサンプルを追加するときは CSS でなければなりません。
- 見出しの名前付け
  - : 曖昧さがない場合 (例: サンプルが「例」セクションの下にある場合)、見出しは対応する言語の唯一の名前である HTML、CSS、JavaScript、SVG など（上記参照）で直接的に表します。「HTML コンテンツ」や「JavaScript コンテンツ」のような見出しは使用しないでください。しかし、そのような短い見出しがコンテンツを不明瞭にする場合、より思慮深いタイトルを使用することができます。
- 「結果」ブロックを使用する
  - : 異なるコードブロックの後、`EmbedLiveSample` マクロを使用する直前に、「結果」ブロックを使用してください（上記参照）。このようにすると、この例の意味は、読者とページを解析するツール（スクリーンリーダー、ウェブクローラーなど）の両方にとってより明確になります。
