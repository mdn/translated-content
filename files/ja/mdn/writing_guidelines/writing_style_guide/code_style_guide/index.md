---
title: サンプルコードのガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: f7c186696980fee97e72261370d7b5a8c1cd9302
---

{{MDNSidebar}}

この記事で記述するガイドラインは、言語に関係なく、サンプルコードのスタイルと形式に適用されます。サンプルコードを書くときにどのような内容を入れるべきかについてのガイドラインは、[執筆スタイルガイド](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#サンプルコード) を参照してください。

技術別のガイドラインについては、以下の記事を参照してください。

- [HTML のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript のガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [シェルプロンプトのガイドライン](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## 全般的な最善の慣習

この部分は、特定の機能や特徴の使い方を示す、理解しやすい最小限のサンプルコードを作成するための一般的な最善の慣習を提供するものです。

サンプルコードの要件は次のようなものです。

- 理解できる程度にシンプルでありながら
- 興味あることを使用するのに十分な複雑さ、そして、できれば有用であること。

全体的に言える 1 つの考慮事項を心に留めておく必要があります。**読者はサンプルコードをコピーして自分のコードに貼り付け、それを実運用に移すかもしれません。**

したがって、サンプルコードが使用可能であり、一般的な最善の慣習に続いていることを確認する必要があり、アプリケーションが安全でない、著しく非効率、肥大化、またはアクセス不能になる原因となることを**行わない**ようにしてください。もしサンプルコードが実行可能でない、あるいは実運用に適さないものであれば、必ずコードのコメントと説明文に警告を入れるようにしてください。これは、依存関係やセットアップを含め、例を実行するのに必要な**すべて**の情報を提供する必要があることも意味します。

サンプルコードは、可能な限り自己完結し、理解しやすいものであるべきです。その目的は、必ずしも専門家を感心させるような効率的で賢いコードや、優れた機能を持つコードを作ることではなく、できるだけ早く理解できるような縮小された動作例を作ることです。

さらに一般的な最善の慣習として、以下のようなものがあります。

- 例は短く、すぐに関心対象の機能のみを見せるのが理想的です。
- 例にとって必要なコード**だけ**を入れてください。関連性のないコードが大量にあると、読者の気が散ったり、混乱したりしやすくなります。もし、より長い完全な例を提供したい場合は、私たちの [GitHub リポジトリー](https://github.com/mdn/) (または JSBin や Codepen など) のいずれかに置いて、完全版へのリンクを例の上か下に示してください。
- 不必要なサーバーサイドのコード、ライブラリー、フレームワーク、プリプロセッサー、その他の依存関係を入れないようにしましょう。可能な限り純粋なコードを使用してください。
- ライブラリー、フレームワーク、プリプロセッサー、その他のネイティブでない機能についての知識を前提としないこと。例えば、 BEM や Bootstrap のユーザーにとって意味のあるクラス名ではなく、 この例の中で意味のあるクラス名を使用てください。
- 最も効率的な書き方でなくても、可能な限りすっきりして理解できるようにコードを書いてください。
- サンプルコードでは多様性を考慮してください。 MDN の読者は世界中から集まっており、民族、宗教、年齢、性別など多様です。サンプルコードのテキストは、その多様性を反映し、すべての人を包含するようにしてください。
- 簡潔にするための悪しき慣習（{{HTMLElement("big")}} 等の表現要素や {{domxref("Document.write", "document.write()")}}）を使用せず、正しく行いましょう。
- API のデモの場合、複数の API を一緒に使用している場合は、どの API が入っているか、どの機能がどこから来ているかを明示しましょう。

## 整形のガイドライン

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。

MDN Web Docs では、コードスタイルの一貫性を保つために（そしてトピック外の議論を避けるために）、コード整形ツールとして [Prettier](https://prettier.io/) を使用しています。現在のルールについては [設定ファイル](https://github.com/mdn/content/blob/main/.prettierrc.json) を参照し、 [Prettier のドキュメント](https://prettier.io/docs/en/index.html)を読んでください。

Prettier はすべてのコードを書式化し、スタイルの一貫性を保ちます。とはいえ、従わなければならない追加のルールがいくつかあります。

サンプルコードを書式化するためのこの MDN Web Docs ガイドラインは、あなたがコーディングしているときにも良い事例です。

### 構文言語の選択

コードブロックの適切な書式化と構文ハイライトを確実に行うために、書き手はコードブロックの言語を指定する必要があります。 MDN で対応している言語のリストと新しい言語のリクエスト方法の詳細については、 [MDN Markdown のコードブロックの例](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#コードブロックの例)を参照してください。

コードブロックが擬似コードであったり、コマンドの出力であったり、プログラミング言語でない場合は、明示的に言語を `plain` に設定してください。

> [!WARNING]
> もし希望する言語が MDN でまだ対応していない場合、コードブロックの言語を似た言語に設定しないでください。そうすると、 Prettier の書式や構文強調表示で意図しない副作用が発生することがあります。

### コード行の長さ

- コード行は、読むのに横スクロールが必要になるほど長くすべきではありません。
- 推奨される方法として、コード行の長さは最大80文字（[インタラクティブサンプル](https://github.com/mdn/interactive-examples)の場合は 64 文字）までにしてください。
- 長い行は、読みやすさのために自然な区切りで改行しますが、ベストプラクティスを犠牲にしてはいけません。

例えば、これはあまり良くありません。

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

次のものはましですが、まだ幾らかぎこちないです。

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

テンプレートリテラルを使うのもよいでしょう。

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* 何かをする */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### コードブロックの高さ

コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、 15 - 25 行が目安です。コードブロックがはるかに長くなりそうであれば、最も有用なスニペットのみを示し、 GitHub リポジトリーや CodePen に入れた完全な例にリンクさせてください。

#### インラインコードの整形

関数名、変数名、メソッド名をマークアップするには、インラインコード構文 (\`) を使用してください。例えば「`frenchText()` 関数」のようにします。

**メソッド名の後には括弧を続けてください**。例えば、 `doSomethingUseful()` のようにします。
括弧は、メソッドを他のコード用語と区別するのに役立ちます。

## 適切なレンダリングのためのガイドライン

これらのガイドラインは、あなたが書いたサンプルコードが MDN Web Docs で適切に表示されることを保証するために従うことです。また、サンプルコードがモバイル端末でも使用されるように、レスポンシブを考慮して書く必要があります。

### 表示されるサンプルコードの大きさ

- **幅を 100% に設定する**。 MDN Web Docs のメインコンテンツペインはデスクトップでは約 700px の幅なので、埋め込まれたサンプルコードはその幅で問題なく表示されるはずです。
- **高さを 700px 以下に設定する**。画面上での可読性を最大にするため、表示されるサンプルコードの幅をこの高さにすることをお勧めします。

### 色の使用

下記のように、主要な色やその他の「基本的な」色はキーワードを使用することを推奨します。

```css example-good
color: black;
color: white;
color: red;
```

もっと複雑な色には `rgb()` を使用してください（半透過のものも含む）。

```css example-good
color: rgb(0 0 0 / 50%);
color: rgb(248 242 230);
```

16 進の色を使用する必要がある場合は、小文字を使用してください。

```css example-good
color: #058ed9;
color: #a39a92c1;
color: #ff0;
color: #fbfa;
```

```css-nolint example-bad
color: #ffff00;
color: #ffbbffaa;
```

### 良い例と悪い例の強調表示

このガイドラインを見て回るとわかりますが、良い実践例とされるコードブロックには緑色のチェックマークが、悪い実践例とされるコードブロックには赤丸に十字が表示されているのがわかります。

サンプルコードを書くときにも、同じスタイルに従うことができます。すべての場所でこのスタイルを使用する必要はありません。サンプルコードにおいて、良い例と悪い例を明確に示したい場合にのみ、このスタイルを使用してください。

この表示を行うには、「コードフェンス」を使用してコードブロックを区分けし、その後に言語情報文字列を続けます。

```js
function myFunc() {
  console.log("Hello!");
}
```

コードブロックを良い例、悪い例と表示するには、以下のように、 `example-good` または `example-bad` を言語文字列の後に入れてください。

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

これらは次のように表示されます。

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
