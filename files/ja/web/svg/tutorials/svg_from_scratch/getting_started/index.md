---
title: 始めましょう
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: fd216f3c4358f24fef043d32b28d6e980a78afc0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

## 基本的な例

さっそく例を見てみましょう。次のコードをご覧ください。

```xml
<svg width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

コードをコピーして、demo1.svg というファイルに貼り付けてください。次にファイルをブラウザーで開くと、次のスクリーンショットのように表示されます（または[ライブで表示](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml)）。

![赤い背景に緑の円が中央に描かれ、その円の中に白い文字で SVG と書かれています。](svgdemo1.png)

描画プロセスは次のようになります。

1. {{SVGElement("svg")}} ルート要素から始めます。
   - (X)HTML で知られているような doctype 宣言は省略してください。 DTD に基づく SVG 検証は解決する問題よりも多くの問題を引き起こすからです。
   - SVG 2 より前では、他にもバージョンの SVG から識別するために `version` 属性と `baseProfile` 属性を常に使用しましょう。 SVG 2 では `version` 属性も `baseProfile` 属性も非推奨です。
   - XML の派生として、 SVG は (xmlns 属性で) 正しい名前空間に結び付けなければなりません。[名前空間の速修講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)に詳細が載っていますのでご覧ください。

2. {{SVGElement("rect")}} で画像領域全体を覆う矩形を描画することで、背景を赤色にします。
3. {{SVGElement("circle")}} で半径が 80px の緑色の円を赤色の矩形の中心（内側に 30+120px、上方に 50+50px のオフセット）に描画します。
4. テキスト "SVG" を描画します。各文字の内側は、白色で塗りつぶします。テキストは、中心点にしたい場所にアンカーを設定することで位置づけられます。この例では、中心点を赤色の矩形の中央と一致させましょう。最終的な仕上がりを確実に美しく保つため、フォントサイズや縦位置の微調整が可能です。

### SVG ファイルの基本特性

- まず注意すべき重要なことは、要素のレンダリング順序です。 SVG ファイルで一般的に有効なルールとして、*後の*要素が*前の*要素の上に描画されます。より後にある要素が、より見えるようになるでしょう。
- ウェブ上の SVG ファイルはブラウザーで直接表示したり、いくつかの方法で HTML ファイルに埋め込んだりすることができます。
  - HTML が XHTML で、かつ `application/xhtml+xml` 型で配信された場合は、 SVG を XML ソース内に直接埋め込むことができます。
  - SVG は HTML に直接埋め込むことができます。
  - `img` 要素が使用可能です。
  - `object` 要素で SVG ファイルを参照することができます。

    ```html
    <object data="image.svg" type="image/svg+xml"></object>
    ```

  - 同様に `iframe` 要素を使用することができます。

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - 最後に、 SVG は JavaScript を用いて動的に生成したり、 HTML DOM に挿入したりすることができます。

- SVG が寸法や単位を管理する方法については[次のページ](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions)で説明します。

### SVG ファイルの種類

SVG ファイルには 2 つの種類があります。普通の SVG ファイルは、 SVG マークアップを含むシンプルなテキストファイルです。このファイルの推奨される拡張子は ".svg" （すべて小文字）です。

SVG ファイルは、一部のアプリケーション（地理情報アプリケーションなど）では非常に大きくなる可能性があるため、SVG 仕様では SVG ファイルを [gzip 圧縮](/ja/docs/Glossary/gzip_compression)することも認めています。この形式のファイルに推奨される拡張子は ".svgz"（すべて小文字）です。gzip 圧縮された SVG が正しく読み込まれるのは、サーバーが正しい `Content-Encoding` ヘッダーを送信する場合に限られます（次の節を参照）。そのため、ウェブサーバーが正しく配信するよう設定されていると確認できる場合にのみ、`.svgz` を使用してください。

## .svgz ファイルを配信するウェブサーバーについて

基本的な SVG ファイルの作成方法がわかったところで、次はウェブサーバーにアップロードします。この段階には注意点があります。通常の SVG ファイルの場合、サーバーは次の HTTP ヘッダーを送信する必要があります。

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

gzip 圧縮された SVG ファイルの場合、サーバーは次の HTTP ヘッダーを送信する必要があります。

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

SVG ファイルのレスポンスに正しい HTTP ヘッダーが含まれているかどうかは、ブラウザーの[開発者ツール](/ja/docs/Glossary/Developer_Tools)を開いて確認できます。たとえば Firefox では、[ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers)でレスポンスヘッダーを調べます。ヘッダーの値が上記のとおりでない場合は、ウェブホストに連絡してください。自分でサーバーを管理している場合は、SVG をこれらのヘッダーとともに配信するよう設定を変更してください。

サーバーの設定ミスは、SVG の読み込みに失敗する非常によくある原因です。そのため、自分のサーバー設定も確認してください。サーバーが SVG ファイルとともに正しいヘッダーを送信するよう設定されていない場合、Firefox はファイルのマークアップをテキストや文字化けした内容として表示したり、ファイルを開くアプリケーションを選ぶよう求めたりする可能性があります。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
