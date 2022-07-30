---
title: すべてのコードの全般的なガイドライン
slug: MDN/Guidelines/Code_guidelines/General
tags:
  - Code
  - General
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/General
---
{{MDNSidebar}}

以下のコード例のガイドラインは、 HTML, CSS, JavaScript, その他のどれであっても適用されます。

## 目次

- [インデントづけ、領域、大きさ](#インデント付け、領域、大きさ)

  - [インデント付け](#インデント付け)
  - [コードの行の長さ](#コードの行の長さ)
  - [コードブロックの高さ](#コードブロックの高さ)

- [例を示す場合のガイドライン](#例を表示する際のガイドライン)

  - [例を表示する大きさ](#例を表示する大きさ)
  - [画像およびその他のメディアの使用](#画像およびその他のメディアの使用)
  - [色の使用](#色の使用)
  - [良い例と悪い例の強調表示](#良い例と悪い例の強調表示)

- [リファレンスページの構文の節を書く](#リファレンスページの構文の節を書く)

## インデント付け、領域、大きさ

### インデント付け

すべてのコードは、次のように 2 文字のインデントを使用してください。

```html example-good
<div>
  <p>This is my paragraph.</p>
</div>
```

```js example-good
function myFunc() {
  if(thingy) {
    console.log('Yup, that worked.');
  }
}
```

### コードの行の長さ

コードの行の長さは最大 80 文字（[対話型デモ](https://github.com/mdn/interactive-examples)の場合は 64 文字）にしてください。読みやすくするために、適切な方法で改行する必要がありますが、ベストプラクティスを犠牲にする必要はありません。

例えば、次のものは良くありません。

```js example-bad
let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.';
```

次のものはましですが、まだ幾らかぎこちないです。

```js
let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign '
+ 'matter may have nestled its way into his mighty throat. Many a fat alley rat '
+ 'had met its demise while staring point blank down the cavernous barrel of '
+ 'this awesome prowling machine.';
```

テンプレートリテラルを使うのもよいでしょう。

```js example-good
let tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### コードブロックの高さ

コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、 15 - 25 行が目安です。コードブロックがはるかに長くなりそうであれば、最も有用なスニペットのみを示し、 GitHub リポジトリや codepen に入れた完全な例にリンクさせてください。

## 例を表示する際のガイドライン

### 例を表示する大きさ

MDN のメインコンテンツペインは、デスクトップでおよそ 700px の幅ですので、 MDN に埋め込む例はその幅であれば大丈夫です（埋め込む例の幅を 100% に設定してください）。

高さについては、可能な限り画面で読みやすくするために、例を表示する高さを 700px 未満に保つことをお勧めします。

また、サンプルをある程度レスポンシブにすることを検討する必要があり、そうすればモバイル端末でも役立ちます。

### 画像およびその他のメディアの使用

画像やその他のメディアを例に含めたい場合があるでしょう。その場合は次のようにしてください。

- あなたが利用できるライセンスであることを確認してください。許容度がとても広いライセンス、例えば [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) や、一般的なコンテンツライセンス — [クリエイティブ・コモンズの表示-継承ライセンス](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — と互換性のある 1 つ以上のライセンスを持つメディアを使用してみてください。
- 画像については、 <https://tinypng.com> や <https://imageoptim.com> を通すと例のページの重さを軽減することができます。
- `SVG` については、コードを [SVGOMG](https://jakearchibald.github.io/svgomg/) に通すと `SVG` ファイルの最後に空行があることを保証することができます。
- ページ上にアイコンを表示するときは（例えば {{cssxref("background-image")}} などで）、適切な箇所に [mdn-dinocons](https://github.com/mdn/mdn-dinocons) を使用し、他のものとスタイルを合わせるようにしてください。

### 色の使用

16 進数であれば小文字で、影や主な色（black, white, red など）ならばキーワードを使用することもできます。より複雑な方式（透過を含めるなど）は必要な場合だけ使用してください。

下記のように、主要な色やその他の「基本的な」色はキーワードを使用することを推奨します。

```css example-good
color: black;
color: white;
color: red;
```

もっと複雑な色には rgb() を使用してください（半透過のものも含む）。

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

[sass/vars/\_mdn-web-docs-palette.scss](https://github.com/mdn/mdn-minimalist/blob/main/sass/vars/_mdn-web-docs-palette.scss)（[mdn-minimalist](https://github.com/mdn/mdn-minimalist) リポジトリー内）に、 MDN のデザイン全般を貫く有用な色のセットがあります。

### 良い例と悪い例の強調表示

このガイドラインを見て回るとわかりますが、良い実践例とされるコードブロックには緑色のチェックマークが、悪い実践例とされるコードブロックには赤丸に白抜きの十字が表示されているのがわかります。

これを行うには、まず MDN エディターコントロールを使用して、コードブロックを `<pre>` ブロックに入れ、適切な構文強調を施します。コードのソースはこのような感じになります。

```js
function myFunc() {
  console.log('Hello!');
};</pre>
```

これを良い例とするには、 `example-good` をコードブロックの最初の行の末尾に入れてください。

```html
``` js example-good
 …
```

悪い例とするには、 `example-bad`  をコードブロックの最初の行の末尾に入れてください。

```html
``` js example-bad
  …
```

これらの使用をお勧めします。これらをすべての場所で使用する必要はありません。特に、コードの良い点と悪い点を明確に示している場合に限って使用してください。

## リファレンスページの構文の節を書く

MDN リファレンスページには、ある機能、例えば JavaScript メソッド、 CSS プロパティ、 HTML 要素、などがどのような構文を取りうる・取るべきかを曖昧にせずに示します。これらを記述するガイドラインは[構文の節](/ja/docs/MDN/Structures/Syntax_sections)の文書にあります。
