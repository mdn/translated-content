---
title: 名前空間の速修講座
slug: Web/SVG/Namespaces_Crash_Course
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

[XML](/ja/docs/Glossary/XML) の派生言語として、 [SVG](/ja/docs/Web/SVG) は名前空間が付けられています。もし SVG コンテンツを作成する予定なら、名前空間の概念と使い方を理解することは重要です。名前空間は、複数の XML 派生言語に対応するユーザーエージェントにとって不可欠であり、ブラウザーはとても厳格でなければなりません。これで名前空間を理解することに時間をかければ、将来の頭痛の種から解放されるでしょう。

### 背景

W3C の長年の目標であったことが、異なった種類の XML ベースのコンテンツが同じ XML または HTML ファイルの中で混在できるようにすることがです。例えば、SVG と [MathML](/ja/docs/Web/MathML) は直接 HTML ベースの科学文書に組み込まれるかもしれません。このようなコンテンツ タイプを混ぜることが可能にすることは、多くの利点がありますが、解決するために非常に大問題を要しました。

当然、それぞれの XML 派生言語は仕様で述べたマークアップタグ名の意味を定義します。 1 つの XML 文書に異なった XML 派生言語のコンテンツを混ぜることによる問題は 別の派生言語が 1 つの派生言語によって定義されたタグと同じ名前のタグを定義するかもしれないということです。 例えば、HTML と SVG の両方に、`<title>` タグがあります。実際、ユーザーエージェントは、コンテンツが何か知っているものであり、意味のない未定義の HTML カスタム要素や、ユーザーエージェントが知らない任意の要素名を含む XML ファイルではないことを、どのようにして見分けるのでしょうか。

一般的な意見とは逆に、この質問の答えは「`DOCTYPE` 宣言から伝えることができる」ではありません。 DTD は混在するコンテンツを念頭におかれて設計されませんでした、そして現在、複雑な混在する DTD を作成する過去の試みが失敗したと考えられます。 XML、およびいくつかの XML 派生言語(SVG や HTML を含む)は `DOCTYPE` 宣言を必要とせず、そして SVG 1.2 は持ちません。`DOCTYPE` 宣言 が (普通) 一種類のコンテンツ タイプのファイルに一致するという事実は単なる偶然の一致です。DTD は内容の識別ではなく、検証ためだけのものです。`DOCTYPE` 宣言を使用して XML コンテンツを識別するユーザーエージェントは信頼できません。

この質問に対する本当の答えは、XML コンテンツは明示的な「名前空間宣言」を与えることで、ユーザーエージェントに要素名がどの言語に属するかを見分けるということです。

### 名前空間を宣言する

では、これらの名前空間宣言はどのようなもので、どこに行くのでしょうか？以下に簡単な例を示します。

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- ここに更なるタグ -->
</svg>
```

名前空間宣言は `xmlns` 属性によって提供されます。この属性は `<svg>` タグとその子供タグは名前空間名'http\://www\.w3.org/2000/svg'を持っている いずれかの XML 派生言語に属すると言っています。もちろん、それは SVG です。名前空間宣言はルート要素で一度だけ指定されることに注意してください（省略した場合は暗黙的に指定されます）。その宣言は既定の名前空間を定義するので、ユーザーエージェントは `<svg>` タグの全ての子孫タグが同じ名前空間に属することが分かります。ユーザーエージェントはそのマークアップアップの処理方を知っているか確かめるために名前空間名をチェックします。

名前空間名はただの文字列であることに注意してください。つまり SVG 名前空間名も URI のように見えますが重要ではありません。 URI は一意ですが、一般的に使用されて、どこかに「リンク」する意志はありません。 (実際 URI が非常に頻繁に使用されるので、「名前空間 URI」という用語は「名前空間名」の代わりに一般的に使われます。)

#### デフォルト名前空間を再宣言する

もしルートタグの全ての子孫がデフォルト名前空間にあると定義されているなら、他の名前空間のコンテンツを混ぜるにはどうしたら良いのでしょう? HTML では SVG 名前空間を記載するには `<svg>` を記載します。XML では名前空間を宣言します。この例を示します。

```xml
<report xmlns="https://www.acme.org/reports">
  <title>Some stats</title>
  <summary>...</summary>
  <statTable xmlns="https://www.acme.org/tables">
    <content>...</content>
    <!-- ルートの既定の名前空間を再宣言 -->
    <summary xmlns="https://www.acme.org/reports">...</summary>
  </statTable>
</report>
```

この例では、ルートの `<report>` 要素の `xmlns` 属性は、既定の名前空間を `https://www.acme.org/reports` 、つまり `reports` と宣言しています。その結果、`<content>` 要素は `https://www.acme.org/tables`、つまり `tables` 名前空間に存在しますが、それ以外のすべての子要素はユーザーエージェントによって `reports` に属するものとして解釈されます。`<summary>` 要素は自分自身で `xmlns` 引数を持っており、`reports` 名前空間を再宣言することで、ユーザーエージェントに `<summary>` 要素とその子孫（別の名前空間を再宣言しない限り）が `reports` に属することを指示します。

HTML では `http://www.w3.org/1999/xhtml` が暗黙の名前空間です。SVG では `http://www.w3.org/2000/svg` です。MathML では `http://www.w3.org/1998/Math/MathML` です。

#### 名前空間接頭辞を宣言する

XML 派生言語は独自の要素を定義しているだけでなく、独自の引数も宣言しています。

既定では、引数には名前空間がまったくありません。固有の名前を持つ要素に現れるため、固有の名前であることが知られているだけです。しかし、使用する要素に関係なく、多くの異なる要素で再使用しても同じ引数と考えることができるように引数を定義する必要がある場合があります。このとても良い例が {{glossary("XLink")}} 仕様で定義されている `href` 引数です。この引数は外部のリソースにリンクする意味として、他にも XML の派生言語でよく使用されています。しかし、ユーザーエージェントにどの言語に属する引数なのか、この場合は `XLink` なのかを指示するにはどうすればよいのでしょうか？次の例を見てください。

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

この例はかなり珍しい属性 `xmlns:xlink` を含んでいます。 最初の `xmlns` 部分から推測できるように、これは別の名前空間宣言です。しかしながら、デフォルト名前空間を設定する代わりに、この名前空間宣言は「[名前空間接頭辞](/ja/docs/Web/API/CSSNamespaceRule/prefix)」と呼ばれるものに名前空間を設定します。 この場合、私たちは接頭辞 `xlink` (2 つめの部分)を使用することを選びました。その接頭辞が XLink に属する属性についてユーザーエージェントに伝えるのに使用されるためです。

名前が示すように、名前空間接頭辞は属性名とタグ名の前に置くのに使用されます。 これは上の例で `<script>` タグに示されるように属性名より前に名前空間接頭語とコロンを加えることで行われます。 これは特定の属性が名前空間接頭辞 (`XLink`) に割り当てられた名前空間に属すことをユーザーエージェントに伝え、他のタグにおいても同じ意味で使用することができる属性です。

なお、XML では、名前空間名に関連付けられていな接頭辞の利用による XML エラーに注意してください。上の例で `xmlns:xlink` 属性によって作られた関連付けは `xlink:href` 属性がエラーに引き起こさないために必要です。この XLink 属性は SVG の `<a>` と `<use>`, `<image>` タグや他のタグでも頻繁に使われるので、常に文書に XLink の宣言を含めることは良い考えです。

余談として、タグ名に名前空間接頭語を使用することができるのを知っていると役に立ちます。これは特定のタグ(しかし今回の子供ではありません!)が接頭辞に割り当てられた名前空間に属することをユーザーエージェントに伝えます。 これを知っていることは、あなたが以下の例のようなマークアップに出くわしたときの混乱を節約するでしょう:

```xml
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>XHTML にインラインで埋め込まれた SVG </h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> これは {{Glossary("XHTML")}} ファイルであり、HTML ファイルではありません。XML 名前空間は HTML では無効です。この例を試すには、ファイルを `.xhtml` として保存する必要があります。

`<svg:svg>` タグとその子供の `<svg:circle>` に名前空間接頭辞が使われているので、既定の名前空間を再宣言する必要が無いことに注意してください。一般にこの方法で沢山のタグに接頭辞をつけるよりも既定の名前空間を再宣言した方が良いです。

### 名前空間付きの XML のスプクリプト操作

名前空間はマークアップだけでなく、スクリプト操作（[および CSS](/ja/docs/Web/CSS/CSS_namespaces)）も影響します。もし SVG のような 名前空間付きの XML 用のスクリプトを書くなら次をお読みください。

[DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/) 勧告はオリジナルの [original Namespaces in XML](https://www.w3.org/TR/REC-xml-names/) 勧告がリリースされる前に作られたので、DOM1 は名前空間を認識しません。これは SVG のような 名前空間付きの XML で問題を引き起こします。それらの問題を解決するために [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) は全て DOM Level1 メソッドの適切な名前空間を認識している同等のメソッドを加えました。SVG でスクリプティングをするとき、[名前空間を認識しているメソッドを使うことが大切です](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)。下の表は SVG と一緒に使うべきではない DOM 1 メソッドと代わりに使うべき同等な DOM2 の対応するメソッドをリストしています。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (使わないで下さい)</th>
      <th>DOM2 (代わりにこれらを使ってください!)</th>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Document/createAttribute"
          ><code>createAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Document/createAttributeNS"><code>createAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Document/createElement"
          ><code>createElement()</code></a
        >
      </td>
      <td>
        <a href="/ja/docs/Web/API/Document/createElementNS"><code>createElementNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Element/getAttributeNode"
          ><code>getAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Element/getAttributeNodeNS"><code>getAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Element/getAttribute"
          ><code>getAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Element/getAttributeNS"><code>getAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Document/getElementsByTagName"
          ><code>getElementsByTagName()</code></a
        >
      </td>
      <td>
        <a href="/ja/docs/Web/API/Document/getElementsByTagNameNS"><code>getElementsByTagNameNS()</code></a
        >
        （<a href="/ja/docs/Web/API/Element/getElementsByTagNameNS">要素にも追加</a>されています）
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/getNamedItem"
          ><code>getNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/getNamedItemNS"><code>getNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/API/Element/hasAttribute"><code>hasAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Element/hasAttributeNS"><code>hasAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Element/removeAttribute"
          ><code>removeAttribute()</code></a
        >
      </td>
      <td>
        <a href="/ja/docs/Web/API/Element/removeAttributeNS"><code>removeAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/removeNamedItem"
          ><code>removeNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/removeNamedItemNS"><code>removeNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Element/setAttribute"
          ><code>setAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Element/setAttributeNS"><code>setAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/Element/setAttributeNode"
          ><code>setAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/Element/setAttributeNodeNS"><code>setAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/setNamedItem"
          ><code>setNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/ja/docs/Web/API/NamedNodeMap/setNamedItemNS"><code>setNamedItemNS()</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

全ての DOM2 の名前空間を認識しているメソッドの最初の引数は問題になっている要素か属性の名前空間名(名前空間 URI としても知らています) で無ければなりません。SVG **要素** のためには、これは 'http\://www\.w3.org/2000/svg' です。しかし、よく注意してください:[Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting) 仕様は接頭辞無しの属性の名前空間名は値をもっていません。言い替えると、そのタグの名前空間であっても、そのタグの名前空間を使わないということです。 代わりに**無条件の(接頭辞無し)属性の名前空間名として `null` を使わなくてはなりません**。つまり `document.createElementNS()` を使い SVG の `rect` 要素を作るには、こう書かなくてはなりません。

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

しかし、SVG の `rect` 要素の `x` *属性*の値を取り出すにはこう書かなくてはなりません:

```js
rect.getAttributeNS(null, "x");
```

これは名前空間接頭辞*付き*の属性（タグと同じ XML 派生言語に属していない属性）はこの限りではないことに注意してください。`xlink:href` 属性の様な属性はその接頭辞に割り当てられた名前空間名(XLink は `http://www.w3.org/1999/xlink`)が必要です。従って SVG の `<a>` 要素の `xlink:href` 属性の値を手に入れるにはこう書いてください。

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

名前空間を持った属性を設定するときに、後で DOM がより簡単に XML に変換できるように(例えばもしそれをサーバーに送り返したいなら)、それらの接頭辞を 2 番目の引数にも含めることが推奨されます(が強制ではありません)。

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "otherdoc.svg",
);
```

最後の例として、どうやってスクリプトを使って `<image>` 要素を動的に作るべきか実演を示します。

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### まとめ

SVG、HTML、MathML では、名前空間は暗黙的であり、したがってオプションです。XML ファイルでは名前空間の宣言が要求されます。そうしないと、ユーザーエージェントはコンテンツを認識できず、XML マークアップを表示させたり、XML にエラーがあることをユーザーに知らせたりします。

SVG を書くとき、新しいファイルを作成するときに、一般的に使用する名前空間宣言をすべて記載したテンプレートを使用すると有益です。もしまだ持っていないのであれば、以下のコードから作りましょう：

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

あなたが特定のドキュメントでそれら全ての名前空間を使用しなくても、名前空間宣言を含んで全く害はありません。 後日、未使用の名前空間の 1 つをコンテンツに結局加えるなら、それはいくつかの煩わしいエラーから救ってくれるかもしれません。

### 完全な例

完全な例は [SVG: Namespaces Crash Course: Example](/ja/docs/Web/SVG/Namespaces_Crash_Course/Example) を参照してください。
