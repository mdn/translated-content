---
title: 始めましょう
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

### 基本的な例

基本的な例で正しく始めましょう。下のコードを見てください。

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

コードをコピーして、ファイル demo1.svg に貼り付けましょう。そして、ファイルをブラウザーで開いてください。これは、次のスクリーンショットのように表示されます。（または[ライブで表示](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml)）

![svgdemo1.png](svgdemo1.png)

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

SVG ファイルは、一部のアプリケーション (例えば、地理情報アプリケーション) で使用される場合、巨大になる可能性があるため、 SVG 仕様書では、 gzip 圧縮された SVG ファイルを使用することも許可しています。これらのファイルに推奨されるファイル名の拡張子は ".svgz" （すべて小文字）です。残念ながら、 Microsoft IIS サーバーから配信される場合、 gzip 圧縮された SVG ファイルを SVG 対応のすべてのユーザーエージェントで確実に動作させるのはとても問題があり、 Firefox は gzip 圧縮された SVG をローカルコンピューターから読み込むことができません。 gzip 圧縮された SVG は、それが正しく提供されるとわかっているウェブサーバーに公開するとき以外は避けてください（下記参照）。

### ウェブサーバーについて

さて、基本的な SVG ファイルの作成方法がわかったところで、次の段階はウェブサーバーにアップロードすることです。この段階ではいくつかの問題があります。通常の SVG ファイルの場合、サーバーは次の HTTP ヘッダーを送信しなければなりません。

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

gzip で圧縮された SVG ファイルの場合は、サーバーは、以下の HTTP ヘッダーを送る必要があります。

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

サーバーが SVG ファイルで正しい HTTP ヘッダーを送信しているかどうかは、[ネットワークモニターパネル](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers)や [websniffer.com](https://websniffer.com/) などのサイトを使用して確認できます。 SVG ファイルのうちの 1 つの URL を送信し、 HTTP レスポンスヘッダーを確認します。サーバーが上記の値のヘッダーを送信していないことがわかったら、ウェブのホスティング業者に連絡してください。 SVG 用のサーバーを正しく設定するように説得しにくい場合は、自分で設定するのも良いかもしれません。簡単な解決策については、 w3.org の[サーバー設定ページ](https://www.w3.org/services/svg-server/)を参照してください。

サーバーの設定ミスは SVG の読み込みに失敗する理由として非常に一般的です。サーバーが正しいヘッダーを SVG ファイルと一緒に送信するように設定されていない場合、 Firefox はファイルのマークアップをテキストや文字化けしたゴミとして表示したり、ビューアーにアプリケーションを選択して開くように要求したりする可能性が高いです。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
