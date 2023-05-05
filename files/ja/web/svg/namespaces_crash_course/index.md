---
title: 名前空間の速修講座
slug: Web/SVG/Namespaces_Crash_Course
---

### 導入

[XML](/ja/docs/Glossary/XML) の派生言語として、 [SVG](/ja/docs/Web/SVG) は名前空間付けられています。もしあなたが SVG コンテンツを作成する予定なら名前空間の概念と使い方を理解することは重要です。 Firefox 1.5 リリースより前の幾つかのバージョンの SVG ビューワは残念ながら名前空間に対して十分な注意を払いませんが、 とても厳格でなくてならない [Gecko](/ja/docs/Glossary/Gecko) ベースのブラウザのようなユーザエージェントが複数の XML 派生言語をサポートするために不可欠です。今、名前空間を理解するためにいくらかの時間をとり、将来頭を悩ませる時間を節約しましょう。

### 背景

異なった種類の XML ベースのコンテンツが同じ XML ファイルの中で一緒に混ざるのを可能にするのことは W3C の長年の目標です。 例えば、SVG と MathML は直接 XHTML ベースの科学ドキュメントに組み込まれるかもしれません。このようなコンテンツ タイプを混ぜることが可能にすることは、多くの利点がありますが、解決するために非常に大問題を要しました。

当然、それぞれの XML 派生言語は仕様で述べたマークアップタグ名の意味を定義します。 1 つの XML ドキュメントに異なった XML 派生言語のコンテンツを混ぜることによる問題は 別の派生言語が 1 つの派生言語によって定義されたタグと同じ名前のタグを定義するかもしれないということです。 例えば、XHTML と SVG の両方には、`<title>` タグがあります。 事実、ユーザエージェントはどうやって XML コンテンツが(あらかじめ)知っているものであるとき時に、単なる未知の任意のタグ名を含む無意味な XML ファイルでないと言えますか?

一般的な意見とは逆に、この質問の答えは「`DOCTYPE` 宣言から伝えることができる」ではありません。 DTD は混ぜられたコンテンツを念頭におかれて設計されませんでした、そして現在、複雑な混ぜられた DTD を作成する過去の試みが失敗したと考えられます。 XML、およびいくつかの XML 派生言語(SVG を含む)は DOCTYPE 宣言を必要とせず、そして SVG 1.2 は一つも持たないでしょう。`DOCTYPE` 宣言 が (普通) 一種類のコンテンツ タイプのファイルに一致するという事実は単なる偶然の一致です。DTD は内容の識別ではなく、ヴァリデーションためだけのものです。 `DOCTYPE` 宣言を使用することで XML コンテンツをだまし、特定するユーザエージェントは害を引き起こします。

その質問の本当の答えは XML コンテンツがユーザエージェントにどの派生言語にそのタグが属しているかを 明確な「名前空間宣言」をタグに与えるで伝えるというものです。

### 名前空間を宣言する

それでは、名前空間宣言はどのように見える、何所におくのでしょうか? 短い例があります。

```
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- ここに更なるタグ -->
</svg>
```

名前空間宣言は `xmlns` 属性によって提供されます。この属性は `<svg>` タグとその子供タグは名前空間名'http\://www\.w3.org/2000/svg'を持っている いずれかの XML 派生言語に属すると言っています。もちろん、それは SVG です。名前空間宣言はルート要素で一度のみ提供されることが必要なことに注意してください。その宣言は *標準*の名前空間を定義するので、ユーザエージェントは `<svg>` タグの全ての子孫タグが同じ名前空間に属することが分かります。ユーザエージェントはそのマークアップアップの処理方を知っているか確かめるために名前空間名をチェックします。

名前空間名はただの文字列であることに注意してください。つまり SVG 名前空間名も URI のように見えますが重要ではありません。 URI は一意なので、一般的に使用されて、どこかに「リンク」する意志はありません。 (実際 URI が非常に頻繁に使用されるので、「名前空間 URI」という用語は「名前空間名」の代わりに一般的に使われます。)

#### デフォルト名前空間を再宣言する

もしルートタグの全ての子孫がデフォルト名前空間にあると定義されているなら、他の名前空間のコンテンツを混ぜるにはどうしたら良いのでしょう ? 簡単です。デフォルト名前空間を再定義するだけです。短い例があります

```
<html xmlns="http://www.w3.org/1999/xhtml">
  <body>
    <!-- ここに幾つか XHTML タグ -->
    <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
      <!-- ここに幾つか SVG タグ -->
    </svg>
    <!--ここに幾つか XHTML タグ -->
  </body>
</html>
```

この例でルート `<html>` タグの `xmlns` 属性はデフォルト名前空間が XHTML であるように宣言しています。結果として、ユーザエージェントによってそれとその全ての子供のタグは XHTML に属するものとして解釈されます、`<svg>` タグを除いて。`<svg>` タグは自身の `xmlns` 属性を持ち、デフォルト名前空間を再定義することで、ユーザエージェントに `<svg>` とその子孫(それらが再びデフォルト名前空間を再宣言しない限り)が SVG に属していることを伝えます。

見て、名前空間って全然難しくないでしょう。

#### 名前空間接頭辞を宣言する

XML 派生言語は自身のタグだけではなく、自身の属性も定義します。 標準では、名前空間を全く持たず、ユニークな名前を持っている要素に現れるので、属性がユニークであるとだけ知られています。 しかし、時々多くの異なった要素の上でそれらを再利用することができるように属性を定義して、それらが使用されている要素に関わらず同じ属性であるとなおも考えられることが必要です。 これのとても良い例は XLink 仕様で定義された `href` 属性です。 この属性は外部のリソースにリンクする方法として他の XML 派生言語によって一般的に使用されます。 しかし、あなたはどうやってその属性がどの派生言語、この場合 XLink 、 に属するとユーザエージェントに伝えますか? 以下の例を考えてください。

```
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/ecmascript"/>
</svg>
```

この例はかなり珍しい属性 `xmlns:xlink` を含んでいます。 最初の 'xmlns' 部分から推測できるように、これは別の名前空間宣言です。しかしながら、デフォルト名前空間を設定する代わりに、この名前空間宣言は「名前空間接頭辞」と呼ばれるものに名前空間を設定します。 この場合、私たちは接頭辞 `xlink` (2 つめの部分)を使用することを選びました。その接頭辞が XLink に属する属性についてユーザエージェントに伝えるのに使用されるためです。

名前が示すように、名前空間接頭辞は属性名とタグ名の前に置くのに使用されます。 これは上の例で \<script> タグに示されるように属性名より前に名前空間接頭語とコロンを加えることで行われます。 これは特定の属性が名前空間接頭辞(XLink)に割り当てられた名前空間に属すことをユーザエージェントに伝え、他のタグにおいても同じ意味で使用することができる属性です。

名前空間名に関連付けられていな接頭辞の利用による XML エラーに注意してください。上の例で `xmlns:xlink` 属性によって作られた関連付けは `xlink:href` 属性がエラーに引き起こさないために必要不可欠です。この XLink 属性は SVG の `<a>` と `<use>`, `<image>` タグや他のタグでも頻繁に使われるので、常にドキュメントに XLink の宣言を含めることは良い考えです。

余談として、タグ名に名前空間接頭語を使用することができるのを知っていると役に立ちます。これは特定のタグ(しかし今回の子供ではありません!)が接頭辞に割り当てられた名前空間に属することをユーザエージェントに伝えます。 これを知っていることは、あなたが以下の例のようなマークアップに出くわしたときの混乱を節約するでしょう:

```
<html
 xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>XHTML にインラインで埋め込まれた SVG </h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000"/>
    </svg:svg>
  </body>
</html>
```

`<svg:svg>` タグとその子供の `<svg:circle>` に名前空間接頭辞が使われているので、デフォルト名前空間を再宣言する必要が無いことに注意してください。一般にこの方法で沢山のタグに接頭辞をつけるよりもデフォルト名前空間を再宣言した方が良いです。

### 名前空間付けられた XML でのスクリプティング

名前空間はマークアップだけでなく、スクリプティングにも影響します。もし SVG のような 名前空間付けられた XML 用のスクリプトを書くなら次をお読みください。

[DOM Level 1](http://www.w3.org/TR/REC-DOM-Level-1/) 勧告はオリジナルの [original Namespaces in XML](http://www.w3.org/TR/REC-xml-names/) 勧告がリリースされる前に作られたので、DOM1 は名前空間を認識しません。これは SVG のような 名前空間付けられた XML で問題を引き起こします。それらの問題を解決するために [DOM Level 2 Core](http://www.w3.org/TR/DOM-Level-2-Core/) は全て DOM Level1 メソッドの適切な名前空間を認識している同等のメソッドを加えました。SVG でスクリプティングをするとき、[名前空間を認識しているメソッドを使うことが大切です](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)。下の表は SVG と一緒に使うべきではない DOM 1 メソッドと代わりに使うべき同等な DOM2 の対応するメソッドをリストしています。

| DOM1 (使わないで下さい)                                                                                      | DOM2 (代わりにこれらを使ってください!)                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute)           | [createAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS)                                                                                             |
| [createElement](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement)               | [createElementNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)                                                                                                 |
| [getAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode)         | [getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)                                                                                          |
| [getAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute)                 | [getAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)                                                                                                |
| [getElementsByTagName](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName) | [getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS) ([要素にも追加されました](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)) |
| [getNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem)                 | [getNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS)                                                                                             |
| [hasAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#)                                    | [hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)                                                                                                |
| [removeAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute)           | [removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)                                                                                               |
| [removeNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem)           | [removeNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS)                                                                                       |
| [setAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute)                 | [setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)                                                                                                |
| [setAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)         | [setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)                                                                                          |
| [setNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem)                 | [setNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS)                                                                                             |

全ての DOM2 の名前空間を認識しているメソッドの最初の引数は問題になっている要素か属性の名前空間名(名前空間 URI としても知らています) で無ければなりません。SVG **要素** のためには、これは 'http\://www\.w3.org/2000/svg' です。しかし、よく注意してください:[Namespaces in XML 1.1](http://www.w3.org/TR/xml-names11/#defaulting) 仕様は接頭辞無しの属性の名前空間名は値をもっていません。言い替えると、そのタグの名前空間であっても、そのタグの名前空間を使わないということです。 代わりに**無条件の(接頭辞無し)属性の名前空間名として `null` を使わなくてはなりません**。つまり `document.createElementNS()` を使い SVG `rect` *要素*を作るには、こう書かなくてはなりません:

```
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

しかし、SVG の `rect` 要素の `x` *属性*の値を取り出すにはこう書かなくてはなりません:

```
rect.getAttributeNS(null, 'x');
```

これは名前空間接頭辞)*付き*の属性(タグと同じ XML 派生言語に属していない属性)はこの限りではないことに注意してください。xlink:href 属性の様な属性はその接頭辞に割り当てられた名前空間名(XLink は `http://www.w3.org/1999/xlink`)が必要です。従って SVG の `<a>` 要素の `xlink:href` 属性の値を手に入れるにはこう書くでしょう:

```
elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
```

名前空間を持った属性を設定するときに、後で DOM がより簡単に XML に変換できるように(例えばもしそれをサーバに送り返したいなら)、それらの接頭辞を 2 番目の引数にも含めることが推奨されます(が強制ではありません)。例:

```
elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');
```

最後の例として、どうやってスクリプトを使って \<image> 要素を動的に作るべきか実演を示します。

```
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
```

### まとめ

常にあなたの XML ファイルの中で使う名前空間が宣言されているか確認してください。もしそうしていないと、Firefox のようなユーザエージェントはコンテンツを理解せずに単に XML マークアップを表示するか、ユーザに XML の中にエラーが有ることを伝えます。全新しい SVG ファイルを作る時、全ての一般的に使う名前空間宣言を含んだテンプレートを使うことは良い考えです。もしまだ持っていなければ、次のコードで作り始めてください

```
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events">
</svg>
```

あなたが特定のドキュメントでそれら全ての名前空間を使用しなくても、名前空間宣言を含んで全く害はありません。 後日、未使用の名前空間の 1 つをコンテンツに結局加えるなら、それはいくつかの煩わしいエラーから救ってくれるかもしれません。

### 完全な例

完全な例は [SVG:Namespaces Crash Course:Example](/ja/docs/Web/SVG/Namespaces_Crash_Course/Example) を参照してください。
