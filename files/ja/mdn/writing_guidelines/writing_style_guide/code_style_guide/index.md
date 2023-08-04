---
title: コード例のガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
---

{{MDNSidebar}}

この記事で記述するガイドラインは、言語に関係なく、コード例のスタイルと形式に適用されます。コード例を書くときにどのような内容を入れるべきかについてのガイドラインは、[執筆スタイルガイド](/ja/docs/MDN/Writing_guidelines/writing_style_guide#コード例) を参照してください。

技術別のガイドラインについては、以下の記事を参照してください。

- [HTML のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [シェルプロンプトのガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## 全般的な最善の慣習

この部分は、特定の機能や特徴の使い方を示す、理解しやすい最小限のコード例を作成するための一般的な最善の慣習を提供するものです。

コード例の要件は次のようなものです。

- 理解できる程度にシンプルでありながら
- 興味あることを使用するのに十分な複雑さ、そして、できれば有用であること。

全体的に言える 1 つの考慮事項を心に留めておく必要があります。**読者はコード例をコピーして自分のコードに貼り付け、それを実運用に移すかもしれません。**

したがって、コード例が使用可能であり、一般的な最善の慣習に続いていることを確認する必要があり、アプリケーションが安全でない、著しく非効率、肥大化、またはアクセス不能になる原因となることを**行わない**ようにしてください。もしコード例が実行可能でない、あるいは実運用に適さないものであれば、必ずコードのコメントと説明文に警告を入れるようにしてください。これは、依存関係やセットアップを含め、例を実行するのに必要な**すべて**の情報を提供する必要があることも意味します。

コード例は、可能な限り自己完結し、理解しやすいものであるべきです。その目的は、必ずしも専門家を感心させるような効率的で賢いコードや、優れた機能を持つコードを作ることではなく、できるだけ早く理解できるような縮小された動作例を作ることです。

さらに一般的な最善の慣習として、以下のようなものがあります。

- 例は短く、すぐに関心対象の機能のみを見せるのが理想的です。
- 例にとって必要なコード**だけ**を入れてください。関連性のないコードが大量にあると、読者の気が散ったり、混乱したりしやすくなります。もし、より長い完全な例を提供したい場合は、私たちの [GitHub リポジトリー](https://github.com/mdn/) (または JSBin や Codepen など) のいずれかに置いて、完全版へのリンクを例の上か下に示してください。
- 不必要なサーバーサイドのコード、ライブラリー、フレームワーク、プリプロセッサー、その他の依存関係を入れないようにしましょう。可能な限り純粋なコードを使用してください。
- ライブラリー、フレームワーク、プリプロセッサー、その他のネイティブでない機能についての知識を前提としないこと。例えば、 BEM や Bootstrap のユーザーにとって意味のあるクラス名ではなく、 この例の中で意味のあるクラス名を使用てください。
- 最も効率的な書き方でなくても、可能な限りすっきりして理解できるようにコードを書いてください。
- 簡潔にするための悪しき慣習（{{HTMLElement("big")}} 等の表現要素や {{domxref("Document.write", "document.write()")}}）を使用せず、正しく行いましょう。
- API のデモの場合、複数の API を一緒に使用している場合は、どの API が入っているか、どの機能がどこから来ているかを明示しましょう。

## 整形のガイドライン

MDN Web Docs のコード例を整形するためのこれらのガイドラインは、あなたがコードを書くときにも良い実践となります。

### インデント付け

- すべてのコード例で、インデントにはタブごとに 2 つのスペースを使用してください。
- ブロックの開始中括弧 ("`{`") 文字は、ブロックを開始する文と同じ行に配置してください。

```html example-good
<div>
  <p>This is my paragraph.</p>
</div>
```

```js example-good
function myFunc() {
  if (thingy) {
    console.log("Yup, that worked.");
  }
}
```

### スペース

制御文やループキーワードと、その開始括弧の間にスペースを追加してください。

```js example-good
if (condition) {
  /* handle the condition */
} else {
  /* handle the "else" case */
}
```

### コードの行の長さ

- コード行は、読むのに水平スクロールが必要なほど長くすべきではありません。
- 推奨される慣習として、コード行の長さは最大 80 文字（[インタラクティブ例](https://github.com/mdn/interactive-examples)では 64 文字）までに抑えてください。
- 長い行は、読みやすさのために自然な区切り位置で改行してください。ただし、最善の慣習を犠牲にすることはありません。

例えば、次のものは良くありません。

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

次のものはましですが、まだ幾らかぎこちないです。

```js
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

テンプレートリテラルを使うのもよいでしょう。

```js example-good
let tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* something */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

### コードブロックの高さ

コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、 15 - 25 行が目安です。コードブロックがはるかに長くなりそうであれば、最も有用なスニペットのみを示し、 GitHub リポジトリや codepen に入れた完全な例にリンクさせてください。

#### インラインコードの整形

関数名、変数名、メソッド名をマークアップするには、 {{HTMLElement("code")}} 要素を使用してください。
例えば「`frenchText()` 関数」のようにします。

**メソッド名の後には括弧を続けてください。** 例えば、 `doSomethingUseful()` のようにします。
括弧は、メソッドを他のコード用語と区別するのに役立ちます。

## 適切なレンダリングのためのガイドライン

これらのガイドラインは、あなたが書いたコード例が MDN Web Docs で適切に表示されることを保証するために従うことです。また、コード例がモバイル端末でも使用されるように、レスポンシブを考慮して書く必要があります。

### 表示されるコード例の大きさ

- **幅を 100% に設定する**。 MDN Web Docs のメインコンテンツペインはデスクトップでは約 700px の幅なので、埋め込まれたコード例はその幅で問題なく表示されるはずです。
- **高さを 700px 以下に設定する**。画面上での可読性を最大にするため、表示されるコード例の幅をこの高さにすることをお勧めします。

### 色の使用

下記のように、主要な色やその他の「基本的な」色はキーワードを使用することを推奨します。

```css example-good
color: black;
color: white;
color: red;
```

もっと複雑な色には `rgb()` を使用してください（半透過のものも含む）。

```css example-good
color: rgb(0, 0, 0, 0.5);
color: rgb(248, 242, 230);
```

16 進の色を使用する必要がある場合は、小文字を使用してください。

```css example-good
color: #058ed9;
color: #a39a92;
```

冗長であれば短縮形を使用してください。

```css example-good
color: #ff0;
color: #fff;
```

### 良い例と悪い例の強調表示

このガイドラインを見て回るとわかりますが、良い実践例とされるコードブロックには緑色のチェックマークが、悪い実践例とされるコードブロックには赤丸に十字が表示されているのがわかります。

コード例を書くときにも、同じスタイルに従うことができます。すべての場所でこのスタイルを使用する必要はありません。コード例において、良い例と悪い例を明確に示したい場合にのみ、このスタイルを使用してください。

この表示を行うには、「コードフェンス」を使用してコードブロックを区分けし、その後に言語情報文字列を続けます。

```js
function myFunc() {
  console.log("Hello!");
}
```

コードブロックを良い例、悪い例と表示するには、以下のように、 `example-good` または `example-bad` を言語文字列の後に入れてください。

````plain
```html example-good
<p class="brush: js example-good">
```

```html example-bad
<p class="brush: js example-bad">
```
````

これらは次のように表示されます。

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
