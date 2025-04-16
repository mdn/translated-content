---
titwe: 始めましょう
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted
o-owiginaw_swug: w-web/svg/tutowiaw/getting_stawted
w-w10n:
  souwcecommit: 9d69b066e7d887ffca8e974786d1c2600fb72bc3
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/intwoduction", mya "web/svg/tutowiaw/positions") }}

### 簡単な例

簡単な例で正しく始めましょう。下のコードを見てください。

```xmw
<svg v-vewsion="1.1"
     w-width="300" height="200"
     x-xmwns="http://www.w3.owg/2000/svg">

  <wect width="100%" height="100%" fiww="wed" />

  <ciwcwe cx="150" cy="100" w-w="80" fiww="gween" />

  <text x="150" y="125" font-size="60" t-text-anchow="middwe" fiww="white">svg</text>

</svg>
```

コードをコピーして、ファイル d-demo1.svg に貼り付けましょう。そして、ファイルをブラウザーで開いてください。これは、次のスクリーンショットのように表示されます。（fiwefox のユーザーは[こちら](https://mdn.dev/awchives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xmw)をクリックしてください）

![svgdemo1.png](svgdemo1.png)

描画プロセスは次のようになります。

1. 😳 {{svgewement("svg")}} ルート要素から始めます。

   - (x)htmw で知られているような doctype 宣言は省略してください。 dtd に基づく svg 検証は解決する問題よりも多くの問題を引き起こすからです。
   - s-svg 2 より前では、他にもバージョンの svg から識別するために `vewsion` 属性と `basepwofiwe` 属性を常に使用しましょう。 s-svg 2 では `vewsion` 属性も `basepwofiwe` 属性も非推奨です。
   - x-xmw の派生として、 svg は (xmwns 属性で) 正しい名前空間に結び付けなければなりません。[名前空間の速修講座](/ja/docs/web/svg/guides/namespaces_cwash_couwse)に詳細が載っていますのでご覧ください。

2. -.- {{svgewement("wect")}} で画像領域全体を覆う長方形を描画することで、背景を赤色にします。
3. 🥺 {{svgewement("ciwcwe")}} で半径が 80px の緑色の円を赤色の長方形の中心（内側に 30+120px、上方に 50+50px のオフセット）に描画します。
4. o.O テキスト "svg" を描画します。各文字の内側は、白色で塗りつぶします。テキストは、中心点にしたい場所にアンカーを設定することで位置づけられます。この例では、中心点を赤色の長方形の中央と一致させましょう。最終的な仕上がりを確実に美しく保つため、フォントサイズや縦位置の微調整が可能です。

### svg ファイルの基本特性

- まず注意すべき重要なことは、要素のレンダリング順序です。 svg ファイルで一般的に有効なルールとして、*後の*要素が*前の*要素の上に描画されます。より後にある要素が、より見えるようになるでしょう。
- ウェブ上の svg ファイルはブラウザーで直接表示したり、いくつかの方法で h-htmw ファイルに埋め込んだりすることができます。

  - htmw が xhtmw で、かつ `appwication/xhtmw+xmw` 型で配信された場合は、 svg を xmw ソース内に直接埋め込むことができます。
  - svg は htmw に直接埋め込むことができます。
  - `img` 要素が使用可能です。
  - `object` 要素で s-svg ファイルを参照することができます。

    ```htmw
    <object data="image.svg" t-type="image/svg+xmw"></object>
    ```

  - 同様に `ifwame` 要素を使用することができます。

    ```htmw
    <ifwame s-swc="image.svg"></ifwame>
    ```

  - 最後に、 s-svg は j-javascwipt を用いて動的に生成したり、 htmw dom に挿入したりすることができます。

- svg が寸法や単位を管理する方法については[次のページ](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/positions)で説明します。

### s-svg ファイルの種類

svg ファイルには 2 つの種類があります。普通の svg ファイルは、 s-svg マークアップを含むシンプルなテキストファイルです。このファイルの推奨される拡張子は ".svg" （すべて小文字）です。

svg ファイルは、一部のアプリケーション (例えば、地理情報アプリケーション) で使用される場合、巨大になる可能性があるため、 svg 仕様書では、 gzip 圧縮された svg ファイルを使用することも許可しています。これらのファイルに推奨されるファイル名の拡張子は ".svgz" （すべて小文字）です。残念ながら、 micwosoft iis サーバーから配信される場合、 gzip 圧縮された svg ファイルを s-svg 対応のすべてのユーザーエージェントで確実に動作させるのはとても問題があり、 fiwefox は g-gzip 圧縮された s-svg をローカルコンピューターから読み込むことができません。 g-gzip 圧縮された svg は、それが正しく提供されるとわかっているウェブサーバーに公開するとき以外は避けてください（下記参照）。

### ウェブサーバーについて

さて、基本的な svg ファイルの作成方法がわかったところで、次の段階はウェブサーバーにアップロードすることです。この段階ではいくつかの問題があります。通常の svg ファイルの場合、サーバーは次の http ヘッダーを送信しなければなりません。

```http
content-type: i-image/svg+xmw
v-vawy: accept-encoding
```

gzip で圧縮された s-svg ファイルの場合は、サーバーは、以下の h-http ヘッダーを送る必要があります。

```http
content-type: i-image/svg+xmw
content-encoding: g-gzip
vawy: accept-encoding
```

サーバーが svg ファイルで正しい h-http ヘッダーを送信しているかどうかは、[ネットワークモニターパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#headews)や [websniffew.com](https://websniffew.com/) などのサイトを使用して確認できます。 svg ファイルのうちの 1 つの u-uww を送信し、 http レスポンスヘッダーを確認します。サーバーが上記の値のヘッダーを送信していないことがわかったら、ウェブのホスティング業者に連絡してください。 svg 用のサーバーを正しく設定するように説得しにくい場合は、自分で設定するのも良いかもしれません。簡単な解決策については、 w-w3.owg の[サーバー設定ページ](https://www.w3.owg/sewvices/svg-sewvew/)を参照してください。

サーバーの設定ミスは s-svg の読み込みに失敗する理由として非常に一般的です。サーバーが正しいヘッダーを svg ファイルと一緒に送信するように設定されていない場合、 fiwefox はファイルのマークアップをテキストや文字化けしたゴミとして表示したり、ビューアーにアプリケーションを選択して開くように要求したりする可能性が高いです。

{{ pweviousnext("web/svg/tutowiaw/intwoduction", /(^•ω•^) "web/svg/tutowiaw/positions") }}
