---
title: サンプルコードのガイドライン
short-title: コードのスタイル
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 9194a6cddba510f07e283015d4b955d1b6a3eb9d
---

この記事では、プログラミング言語に関係なく、 MDN Web Docs のサンプルコードのコーディングスタイルと整形のガイドラインについて説明します。
本文や他のコンテンツに関するガイドラインについては、[執筆スタイルガイド](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#サンプルコード) を参照してください。

技術別のガイドラインについては、以下の記事を参照してください。

- [HTML のガイドライン](/ja/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS のガイドライン](/ja/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript のガイドライン](/ja/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [シェルプロンプトのガイドライン](/ja/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## サンプルコードの一般原則

念頭に置いておくべき重要な考慮事項が 1 つあります。**読者はコードの例をコピーして自分のコードに貼り付け、それを実運用に投入する可能性があります。**
したがって、コードの例は使用可能で、一般的に受け入れられる最善の手法に従い、アプリケーションを安全でないもの、非効率なもの、過剰なもの、アクセシブルでないものにするような何らかの原因となるようなものであってはなりません。

サンプルコードが実行可能でない場合や、実運用に耐えるものでない場合は、コードのコメントや説明文に警告を記載してください。例えば、完全なサンプルではなく、コードの断片のみである場合は、その旨を明確に記載してください。また、これは、依存関係やセットアップ情報など、サンプルを実行するために必要なすべての情報が指定されたものであるべきである、という意味でもあります。

サンプルコードは、理解できるほど単純であるべきですが、何か興味深いことを行うには複雑で、できれば有用であるべきです。
目的は、専門家を感嘆させ、優れた機能性を持ち、効率的で賢いコードを必ずしも作成することではなく、むしろ、できるだけ早く理解し、学習できる簡略化された作業例を共有することです。

さらに一般的な最善の慣習として、以下のようなものがあります。

- サンプルコードは短く、関心のある機能のみを示すのが理想的です。
- コードは、たとえ最も効率的な書き方でなくても、できるだけ理解しやすいように記述してください。
- 必要のないサーバーサイドのコード、ライブラリー、フレームワーク、プリプロセッサー、その他の依存関係は記載しないでください。これらはコードの移植性を低下させ、実行や理解を難しくします。可能な限り、シンプルなコードを使用してください。
- ライブラリー、フレームワーク、プリプロセッサー、他にもネイティブでない機能について、読者が知っていると想定しないでください。例えば、 BEM や Bootstrap のユーザーにとって意味のあるクラス名ではなく、例の中で意味のあるクラス名を使用してください。
  サンプルコードはすべての人を対象に作成してください。 MDN の読者は世界中からアクセスしており、民族、宗教、年齢、性別などが多様であることを考慮してください。サンプルコードのテキストは、その多様性を反映し、すべての人を対象にするようにしてください。
- 簡潔にするために非推奨の機能（{{HTMLElement("big")}} 等の表現要素や {{domxref("Document.write", "document.write()")}}）を使用したりせず、正しく行いましょう。
- API のデモの場合、複数の API を一緒に使用している場合は、どの API が入っているか、どの機能がどこから来ているかを明示しましょう。

## MDN のコードスタイルと整形

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。
MDN Web Docs では、コードスタイルの一貫性を保つために、そしてトピックから外れた議論を避けるために、コード整形ツールとして [Prettier](https://prettier.io/) を使用しています。現在のルールについては [設定ファイル](https://github.com/mdn/content/blob/main/.prettierrc.json) を確認し、 [Prettier のドキュメント](https://prettier.io/docs/index.html)を読んでください。

自動整形の補助的なものとして、 MDN でコードサンプルを適切に表示するためのルールがいくつかあります。

### 正しい言語の選択

コードブロックの適切な整形と構文ハイライトを確実に行うために、書き手はコードブロックの言語を正しく指定する必要があります。
MDN で対応している言語のリストと新しい言語のリクエスト方法の詳細については、 [MDN Markdown のコードブロックの例](/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#コードブロックの例)を参照してください。

コードブロックが擬似コードであったり、コマンドの出力であったり、プログラミング言語でない場合は、言語を `plain` に設定してください。

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> もし希望する言語が MDN でまだ対応していない場合、コードブロックの言語を似た言語に設定しないでください。そうすると、 Prettier の書式や構文強調表示で意図しない副作用が発生することがあります。

### コード行の長さ

コード行は、読むのに横スクロールが必要になるほど長くすべきではありません。
長い行は、読みやすさのために自然な区切りで改行しますが、最良の手法を犠牲にしてはいけません。
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

### コードブロックの高さ

コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、 15 - 25 行が目安です。 コードブロックがかなり長くなる場合は、最も有用な部分を示し、例えば GitHub リポジトリー、Gist、CodePen にある完全なサンプルコードへのリンクさせることを検討してください。

### インラインコードの整形

関数名、変数名、メソッド名をマークアップするには、インラインコード構文を使用します。例えば、「`frenchText()` 関数」は markdown では次のように書きます。

```md
the `frenchText()` function
```

メソッド名の後には括弧を続けてください。例えば、 `doSomethingUseful()` のようにします。
括弧は、メソッドを他のコード用語と区別するのに役立ちます。

## 適切なレンダリングのためのガイドライン

これらのガイドラインは、書いたサンプルコードが MDN Web Docs で適切に表示できるようにするために従うべきです。また、サンプルコードがモバイル端末でも使用されるように、レスポンシブを考慮して書く必要があります。

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

もっと複雑な色には `rgb()` を使用してください（半透明のものも含む）。

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

このようにしないでください。

```css-nolint example-bad
color: #ffff00;
color: #ffbbffaa;
```

### 例が良いか悪いかの強調表示

このガイドラインを見て回るとわかりますが、良い実践例とされるコードブロックには緑色のチェックマークが、悪い実践例とされるコードブロックには赤丸に十字が表示されているのがわかります。

サンプルコードを書くときにも、同じスタイルに従うことができます。すべての場所でこのスタイルを使用する必要はありません。サンプルコードにおいて、良い例と悪い例を明確に示したい場合にのみ、このスタイルを使用してください。

コードブロックは、 markdown でコードブロックを区切る「コードフェンス」を使用して記述し、言語を情報文字列の中に続けてください。

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

コードブロックを良い例、悪い例として表示するには、以下のように、 `example-good` または `example-bad` を言語文字列の後に入れてください。

````md
```html example-good
<p>良い例</p>
```

```html example-bad
<p>悪い例</p>
```
````

これらは次のように表示されます。

```html example-good
<p>良い例</p>
```

```html example-bad
<p>悪い例</p>
```

## プレースホルダーテキストを使用する際のガイドライン

[lipsum.com](https://www.lipsum.com/) または VS Code の [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) プラグインから生成されたプレースホルダテキスト lorem-ipsum を使用してください。 標準の lorem-ipsum テキストは、スペルチェッカー構成に含まれているため、 IDE やコードレビュー中のテストでタイプミスとして報告されることはありません。 統一されたプレースホルダテキストを使用することで、特に繰り返し表示される場合、サンプルコードのレビューが容易になります。 また、サンプルコードを明確に示し、関連性のないコンテンツで読者をわずらわしいものにしないよう手助けします。
