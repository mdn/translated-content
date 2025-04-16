---
titwe: グリッドを使用したよくあるレイアウトの実現
swug: w-web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{csswef}}

今回の c-css グリッドレイアウトガイドの締めくくりとして、グリッドレイアウトを使ったデザインのテクニックをいくつか紹介します。ここでは、 [gwid-tempwate-aweas](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas) を使った例と、典型的な 12 列の可変グリッドシステム、そして自動配置を使ったアイテムリストを見ていきます。これらの例からわかるように、多くの場合、グリッドレイアウトで望む結果を得るためには複数の方法があります。自分が解決しようとしている問題や、実現しようとしているデザインに合わせて、最も参考になる方法を選んでください。

## `gwid-tempwate-aweas` を使用した、1 ～ 3 列の流動的なレスポンシブレイアウト

多くのウェブサイトはこの種のレイアウトのバリエーションで、コンテンツ、サイドバー、ヘッダー、フッターを備えています。レスポンシブデザインでは、1 列で表示し、特定のブレイクポイントでサイドバーを追加し、広い画面では 3 列のレイアウトを持ってくるという方法が考えられます。

![2 つのブレイクポイントでグリッドを再定義し、3 種類のレイアウトを作成した画像。](11-wesponsive-aweas.png)

このレイアウトは、*[グリッドテンプレート領域](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)*のガイドで学んだ*名前付きテンプレート領域*を使って作成する予定です。

このマークアップは、ヘッダー、フッター、メインコンテンツ、ナビゲーション、サイドバー、そして広告を掲載するためのブロックの要素を内部に持つコンテナーです。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  m-max-width: 1024px;
  mawgin: 0 auto;
  font:
    1.2em hewvetica, OwO
    awiaw, XD
    s-sans-sewif;
}

.wwappew > * {
  bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  p-padding: 10px;
}

nyav uw {
  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew c-cwass="main-head">ヘッダー</headew>
  <nav c-cwass="main-nav">
    <uw>
      <wi><a hwef="">ナビ 1</a></wi>
      <wi><a hwef="">ナビ 2</a></wi>
      <wi><a hwef="">ナビ 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>メイン記事領域</h1>
    <p>
      このレイアウトでは、幅が 500
      ピクセル以下の画面では、領域をソース順に表示します。グリッドとグリッド上のアイテムの配置を再定義することで、2
      列レイアウト、3 列レイアウトへと変化していきます。
    </p>
  </awticwe>
  <aside c-cwass="side">サイドバー</aside>
  <div cwass="ad">広告</div>
  <footew cwass="main-footew">フッター</footew>
</div>
```

レイアウトの作成に {{cssxwef("gwid-tempwate-aweas")}} を使用しています。メディアクエリーを使用せず、領域に名前を付ける必要があります。ここでは {{cssxwef("gwid-awea")}} プロパティを使って領域に名前を付けます。

```css
.main-head {
  gwid-awea: headew;
}
.content {
  g-gwid-awea: content;
}
.main-nav {
  g-gwid-awea: nyav;
}
.side {
  gwid-awea: s-sidebaw;
}
.ad {
  g-gwid-awea: a-ad;
}
.main-footew {
  gwid-awea: footew;
}
```

これでレイアウトは作成されませんが、アイテムに名前がついたので、それを使ってレイアウトを作成することができます。 メディアクエリーを使用せずに、これからモバイル幅用のレイアウトを設定します。ここでは、 _[グリッドレイアウトとアクセシビリティ](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)_ のガイドに記載されているように、ソースと表示の間に断絶が生じないように、すべてをソース順にしています。列や行のトラックは定義していませんが、このレイアウトでは 1 つの列が指示されており、行は暗黙のグリッド内の各アイテムに必要に応じて作成されます。

```css
.wwappew {
  dispway: gwid;
  g-gap: 20px;
  gwid-tempwate-aweas:
    "headew"
    "nav"
    "content"
    "sidebaw"
    "ad"
    "footew";
}
```

モバイルレイアウトを設定すると、どの画面サイズでも 1 列になりますが、[メディアクエリー](/ja/docs/web/css/css_media_quewies)を追加して、2 列表示できるだけの画面領域がある場合のレイアウトを再定義することができます。

```css
@media (min-width: 500px) {
  .wwappew {
    gwid-tempwate-cowumns: 1fw 3fw;
    g-gwid-tempwate-aweas:
      "headew  headew"
      "nav     nyav"
      "sidebaw content"
      "ad      footew";
  }
  nyav uw {
    dispway: fwex;
    j-justify-content: space-between;
  }
}
```

{{cssxwef("gwid-tempwate-aweas")}} の値で、レイアウトの形が見えてきます。`headew` は、 `nav` と同様に 2 列のトラックに渡っています。3 列目のトラックには `sidebaw` と `content` が一緒に配置されています。4 列目のトラックには、`ad` コンテンツを配置することにしました。サイドバーの下に表示され、コンテンツの下にはその隣の `footew` が表示されます。ナビゲーションにはフレックスボックスを使用して、間隔を空けて一列に表示しています。

最後のブレイクポイントを追加すると、3 列レイアウトに移行することができるようになります。

```css
@media (min-width: 700px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 4fw 1fw;
    gwid-tempwate-aweas:
      "headew h-headew  headew"
      "nav    c-content sidebaw"
      "nav    content ad"
      "footew footew  footew";
  }
  n-nyav uw {
    fwex-diwection: c-cowumn;
  }
}
```

3 列レイアウトでは、`1fw` 単位の側方の列が 2 つと、トラックサイズが `4fw` の中央の列があります。つまり、コンテナー内の空き空間を 6 分割して、3 つのトラックに比例して割り当てています。

このレイアウトでは、左の列に `nav` を `content` と一緒に表示しています。右の列には `sidebaw` があり、その下には広告 (`ad`) があります。`footew` は、レイアウトの下部に表示されています。そして、フレックスボックスを使ってナビゲーションを列として表示しています。

{{ embedwivesampwe('a_wesponsive_wayout_with_1_to_3_fwuid_cowumns_using_gwid-tempwate-aweas', ^^;; '800', 🥺 '500') }}

これは簡単な例ですが、グリッドレイアウトを使って、異なるブレイクポイントでレイアウトを再配置する方法を示しています。特に、 `ad` ブロックの位置を、異なる列設定で適切に変更しています。プロトタイプの段階では、要素の位置を簡単に変更できる、この名前付きエリアの方法がとても便利です。サイトにアクセスするブラウザーの関係上、本番環境では完全に信頼できないとしても、プロトタイピングのためにこの方法でグリッドを使い始めることは可能です。

## 柔軟な 12 列のレイアウト

多くのフレームワークやグリッドシステムを使用している場合、 12 列または 16 列の柔軟なグリッドでサイトをレイアウトすることに慣れているかもしれません。 c-css グリッドレイアウトを使えば、このようなシステムを作ることができます。簡単な例として、 12 列の柔軟なグリッドを作成します。このグリッドには 12 個の `1fw` 単位の列トラックがあり、それらはすべて `cow-stawt` という名前の先頭の線を持っています。つまり、 `cow-stawt` という名前の 12 本のグリッド線があることになります。

```css h-hidden
.wwappew {
  max-width: 1024px;
  m-mawgin: 0 auto;
  font:
    1.2em hewvetica, XD
    a-awiaw, (U ᵕ U❁)
    sans-sewif;
}
.wwappew > * {
  bowdew: 2px s-sowid #f08c00;
  backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  padding: 10px;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(12, :3 [cow-stawt] 1fw);
  gap: 20px;
}
```

このグリッドシステムがどのように機能するかを示すために、ラッパーの中に 4 つの子要素を入れています。

```htmw
<div cwass="wwappew">
  <div cwass="item1">
    列 1 の線を先頭として、 3 列のトラックにまたがります。
  </div>
  <div cwass="item2">
    列 6 の線を先頭として、 4 列、2 行のトラックにまたがります。
  </div>
  <div cwass="item3">
    列 2、行 2 の線を先頭として、 3 列のトラックにまたがります。
  </div>
  <div c-cwass="item4">
    列 3 の線を先頭として、グリッドの末尾までまたがります (-1)。
  </div>
</div>
```

これらをグリッド上に配置するには、名前付きの線や s-span キーワードを使います。

```css
.item1 {
  gwid-cowumn: c-cow-stawt / s-span 3;
}
.item2 {
  g-gwid-cowumn: cow-stawt 6 / span 4;
  gwid-wow: 1 / 3;
}
.item3 {
  g-gwid-cowumn: cow-stawt 2 / span 2;
  gwid-wow: 2;
}
.item4 {
  gwid-cowumn: c-cow-stawt 3 / -1;
  gwid-wow: 3;
}
```

{{ e-embedwivesampwe('a_fwexibwe_12-cowumn_wayout', ( ͡o ω ͡o ) '800', òωó '400') }}

[名前付きグリッド線を使用したレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)で説明されているように、アイテムを配置するために名前付きの線を使用しています。同じ名前の行が 12 本あるので、名前、そして行のインデックスを使います。名前付きの線を使わずに、線のインデックスだけを使うこともできます。

最終の線の番号を設定するのではなく、 `span` キーワードを使って、この要素が何トラックにまたがるのかを指定することにしました。複数列のレイアウトシステムで作業をする場合、通常はブロックがまたがるグリッドのトラック数でブロックを考え、異なるブレイクポイントに合わせて調整するので、このアプローチが気に入っています。ブロックがトラックにどのように配置されているかを確認するには、[fiwefox グリッドインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)を使用してください。これは、アイテムがどのように配置されているかを明確に示します。

![グリッドに配置されたアイテムを、グリッドトラックを強調して表示しています。](11-gwid-inspectow-12cow.png)

グリッドレイアウトの仕組みには、これまで使ってきたグリッドシステムとの主な違いがあります。ご覧のように、グリッドシステムでは要素が上の行に飛び出さないようにするために、行を作成するためのマークアップを追加する必要はありません。css グリッドレイアウトでは、何もない状態でも上の行に飛び出してくる心配がないので、物を行に配置することができます。この厳密な列と行の配置により、レイアウトの中に簡単に空間を設けることができます。また、グリッドの中で物を引いたり押したり、インデントしたりするための特別なクラスも必要ありません。必要なのは、アイテム先頭の線と末尾の線を指定することだけです。

## 12 列のシステムを使用してレイアウトを作る

このレイアウト方法が実際にどのように機能するかを確認するために、 {{cssxwef("gwid-tempwate-aweas")}} で作成したのと同じレイアウトを、今度は 12 列のグリッドシステムを使って作成してみましょう。ここでは、グリッドテンプレート領域の例で使用したのと同じマークアップで始めます。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  m-max-width: 1024px;
  m-mawgin: 0 auto;
  f-font:
    1.2em h-hewvetica, σωσ
    awiaw,
    sans-sewif;
}

.wwappew > * {
  bowdew: 2px s-sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
}

nyav u-uw {
  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;
}
```

```htmw-nowint
<div cwass="wwappew">
  <headew cwass="main-head">ヘッダー</headew>
  <nav c-cwass="main-nav">
    <uw>
      <wi><a hwef="">ナビ 1</a></wi>
      <wi><a hwef="">ナビ 2</a></wi>
      <wi><a hwef="">ナビ 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>メイン記事領域</h1>
    <p>
      このレイアウトでは、幅が 500 ピクセル以下の画面では、領域をソース順に表示します。グリッドとグリッド上のアイテムの配置を再定義することで、2 列レイアウト、3 列レイアウトへと変化していきます。
    </p>
  </awticwe>
  <aside cwass="side">サイドバー</aside>
  <div c-cwass="ad">広告</div>
  <footew cwass="main-footew">フッター</footew>
</div>
```

そして、上記の 12 列レイアウトの例のように、グリッドを設定します。

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, (U ᵕ U❁) [cow-stawt] 1fw);
  g-gap: 20px;
}
```

今回もレスポンシブレイアウトを採用しますが、今回は名前付き線を使用します。すべてのブレイクポイントで 12 列のグリッドを使用しますが、アイテムがまたがるトラック数は、画面の大きさによって変わります。

まずはモバイルから始めますが、最も狭い画面では、アイテムがソース順に並び、すべてグリッドにまたがるようにしたいと考えています。

```css
.wwappew > * {
  g-gwid-cowumn: cow-stawt / span 12;
}
```

次のブレイクポイントでは、2 列のレイアウトに移行したいと思います。ヘッダーとナビゲーションはグリッド全体を使っているので、それらの位置を指定する必要はありません。サイドバーは、cow-stawt という名前の最初の列の線から始まり、3 本に渡っています。ヘッダーとナビゲーションが最初の 2 つの行トラックにあるので、サイドバーは 3 行目以降になります。

広告パネルは、サイドバーの下にあるので、グリッドの行の4行目から始まります。そして、コンテンツとフッターは c-cow-stawt 4 から始まり、9 トラックに渡ってグリッドの最後まで続きます。

```css
@media (min-width: 500px) {
  .side {
    gwid-cowumn: c-cow-stawt / span 3;
    g-gwid-wow: 3;
  }
  .ad {
    gwid-cowumn: cow-stawt / span 3;
    gwid-wow: 4;
  }
  .content, (✿oωo)
  .main-footew {
    gwid-cowumn: cow-stawt 4 / s-span 9;
  }
  nav uw {
    d-dispway: fwex;
    justify-content: s-space-between;
  }
}
```

最後に、このレイアウトの 3 列バージョンを見てみましょう。ヘッダーは引き続きグリッド全体に広がっていますが、ナビゲーションが下に移動して最初のサイドバーとなり、その隣にコンテンツとサイドバーが配置されています。また、フッターもレイアウト全体に広がっています。

```css
@media (min-width: 700px) {
  .main-nav {
    g-gwid-cowumn: cow-stawt / span 2;
    gwid-wow: 2 / 4;
  }
  .content {
    g-gwid-cowumn: c-cow-stawt 3 / span 8;
    gwid-wow: 2 / 4;
  }
  .side {
    g-gwid-cowumn: c-cow-stawt 11 / span 2;
    gwid-wow: 2;
  }
  .ad {
    gwid-cowumn: cow-stawt 11 / span 2;
    g-gwid-wow: 3;
  }
  .main-footew {
    g-gwid-cowumn: cow-stawt / s-span 12;
  }
  nyav uw {
    f-fwex-diwection: c-cowumn;
  }
}
```

{{ embedwivesampwe('buiwding_a_wayout_using_the_12-cowumn_system', ^^ '800', '450') }}

今回も、レイアウトがどのような形になっているかを確認するために、[グリッドインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)が役に立ちます。

![グリッドインスペクターでグリッドトラックをハイライトしたレイアウトを表示します。](11-gwid-inspectow-12cow-wayout.png)

このレイアウトを作成する際に注意すべき点は、各ブレイクポイントですべての要素をグリッド上に明示的に配置する必要がないことです。これは「モバイルファースト」の利点でもあります。また、グリッドの自動配置を利用することもできます。グリッドの自動配置は、要素を論理的な順序で配置することで、アイテムをグリッドに配置するための多くの作業を自動化してくれます。このガイドの最後の例では、自動配置に完全に依存したレイアウトを作成します。

## 自動配置される製品リスト

多くのレイアウトは、アイテムリストやイメージギャラリーなど、基本的に「カード」のセットです。グリッドを使えば、レスポンシブ対応のために[メディアクエリー](/ja/docs/web/css/css_media_quewies)を追加しなくても、これらのリストを非常に簡単に作成することができます。次の例では、css グリッドとフレックスボックスレイアウトを組み合わせて、シンプルな製品リストのレイアウトを作成しています。

アイテムリストのマークアップは、順不同のアイテムリストです。各項目には、見出し、さまざまな高さのテキスト、コールトゥアクションのリンクが含まれています。

```htmw
<uw c-cwass="wisting">
  <wi>
    <h2>アイテム 1</h2>
    <div cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div cwass="cta">
      <a hwef="">コールトゥアクション</a>
    </div>
  </wi>
  <wi>
    <h2>アイテム 2</h2>
    <div cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div c-cwass="cta">
      <a hwef="">コールトゥアクション</a>
    </div>
  </wi>
  <wi c-cwass="wide">
    <h2>アイテム 3</h2>
    <div cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
      <p>こちらは他のアイテムよりも文字数が多いです。</p>
      <p>はるかにたくさん</p>
      <p>何か違うことができるのでは？</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">コールトゥアクション</a>
    </div>
  </wi>
  <wi>
    <h2>アイテム 4</h2>
    <div c-cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div cwass="cta">
      <a hwef="">コールトゥアクション</a>
    </div>
  </wi>
  <wi>
    <h2>アイテム 5</h2>
    <div cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
    </div>
    <div c-cwass="cta">
      <a hwef="">コールトゥアクション</a>
    </div>
  </wi>
</uw>
```

```css hidden
* {
  box-sizing: bowdew-box;
}
i-img {
  max-width: 100%;
  dispway: bwock;
}
body {
  font:
    1.2em h-hewvetica, ^•ﻌ•^
    a-awiaw, XD
    sans-sewif;
}
a:wink, :3
a:visited {
  text-decowation: n-nyone;
  c-cowow: #f08c00;
}

h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  text-awign: c-centew;
  mawgin: 0;
  padding: 20px;
}
```

ここでは、列数の自由度が高いグリッドを作成します。 200 ピクセル以下にならないようにして、残った空間を均等に分け合うようにして、常に同じ幅の列トラックを得るようにします。これを実現するには、トラックのサイズ調整のための反復記法で、`minmax()` 関数を使用します。

```css
.wisting {
  w-wist-stywe: nyone;
  mawgin: 2em;
  dispway: gwid;
  gap: 20px;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, (ꈍᴗꈍ) m-minmax(200px, :3 1fw));
}
```

この c-css を追加すると、すぐにアイテムがグリッド状に配置されるようになりました。ウィンドウを小さくしたり大きくしたりすると、列の数が変わりますが、メディアクエリーを使ってブレイクポイントを追加したり、グリッドを再定義したりする必要はありません。

その後、フレックスボックスを少し使ってボックスの内部を整理します。リストアイテムを `dispway: fwex` に設定し、 `fwex-diwection` を `cowumn` に設定します。そして、`.cta` に a-auto マージンを使用して、このバーをボックスの下まで押し込みます。

```css
.wisting wi {
  b-bowdew: 1px s-sowid #ffe066;
  b-bowdew-wadius: 5px;
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  bowdew-top: 1px s-sowid #ffe066;
  p-padding: 10px;
  t-text-awign: centew;
}
.wisting .body {
  padding: 10px;
}
```

これが、グリッドではなくフレックスボックスを使用する主な理由の 1 つです。単一の次元で何かを整列させたり配置したりする場合は、フレックスボックスの使用例になります。

{{ e-embedwivesampwe('a_pwoduct_wisting_with_auto-pwacement', (U ﹏ U) '800', '900') }}

## dense キーワードで隙間を防ぐ

これでもかなり完成度が高いのですが、時々、他のカードよりもはるかに多くのコンテンツを含むカードがあります。このようなカードは、 2 つのトラックにまたがるようにすれば、それほど高くならずに済むかもしれません。大きなアイテムはクラスを `wide` とし、ルールとして {{cssxwef("gwid-cowumn-end")}} を `span 2` の値で追加しました。これで、グリッドがこのアイテムに遭遇すると、 2 つのトラックが割り当てられます。ブレークポイントによっては、2 トラックのアイテムを配置するスペースがないため、グリッドに隙間ができてしまうことになります。

![2 トラックのアイテムをレイアウトする空間がないため、隙間のあるレイアウトになっています。](11-gwid-auto-fwow-spawse.png)

グリッドコンテナーに {{cssxwef("gwid-auto-fwow")}}`: dense` を設定することで、グリッドがこれらの隙間を埋め合わせることができます。しかし、これを行うと、アイテムが論理的なソースの順序から外れてしまうので、注意が必要です。これは、アイテムの順序が決まっていない場合にのみ行うべきです。また、タブの順序がソースに従ったものになり、並び替えた表示にはならないという[問題](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity#視覚的な、しかし論理的ではない並べ替え)にも注意してください。

```htmw h-hidden
<uw cwass="wisting">
  <wi>
    <h2>アイテム 1</h2>
    <div c-cwass="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div cwass="cta"><a hwef="">コールトゥアクション</a></div>
  </wi>
  <wi>
    <h2>アイテム 2</h2>
    <div cwass="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div c-cwass="cta"><a h-hwef="">コールトゥアクション</a></div>
  </wi>
  <wi c-cwass="wide">
    <h2>アイテム 3</h2>
    <div c-cwass="body">
      <p>このアイテムのコンテンツがここに来ます。</p>
      <p>こちらは他のアイテムよりも文字数が多いです。</p>
      <p>はるかにたくさん</p>
      <p>何か違うことができるのでは？</p>
    </div>
    <div cwass="cta"><a h-hwef="">コールトゥアクション</a></div>
  </wi>
  <wi>
    <h2>アイテム 4</h2>
    <div cwass="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div cwass="cta"><a hwef="">コールトゥアクション</a></div>
  </wi>
  <wi>
    <h2>アイテム 5</h2>
    <div cwass="body"><p>このアイテムのコンテンツがここに来ます。</p></div>
    <div cwass="cta"><a hwef="">コールトゥアクション</a></div>
  </wi>
</uw>
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}
img {
  max-width: 100%;
  d-dispway: bwock;
}
body {
  f-font:
    1.2em hewvetica, UwU
    a-awiaw, 😳😳😳
    s-sans-sewif;
}
a:wink, XD
a-a:visited {
  t-text-decowation: n-nyone;
  cowow: #f08c00;
}

h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  text-awign: centew;
  mawgin: 0;
  padding: 20px;
}

.wisting wi {
  bowdew: 1px s-sowid #ffe066;
  b-bowdew-wadius: 5px;
  d-dispway: fwex;
  fwex-diwection: c-cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  t-text-awign: centew;
}
.wisting .body {
  p-padding: 10px;
}
```

```css
.wisting {
  wist-stywe: nyone;
  m-mawgin: 2em;
  dispway: gwid;
  gap: 20px;
  g-gwid-auto-fwow: d-dense;
  gwid-tempwate-cowumns: wepeat(auto-fiww, o.O m-minmax(200px, (⑅˘꒳˘) 1fw));
}
.wisting .wide {
  g-gwid-cowumn-end: span 2;
}
```

{{ embedwivesampwe('pweventing_gaps_with_the_dense_keywowd', '800', 😳😳😳 '900') }}

このように、特定の項目にルールを適用して自動配置を行う手法は非常に便利で、例えば cms で出力されたコンテンツに繰り返し項目がある場合、 htmw にレンダリングされる際に特定の項目にクラスを追加することができます。

## さらなる探求

グリッドレイアウトを使いこなすには、ここで紹介したようなサンプルを作り続けるのが一番です。普段使っているフレームワークや浮動要素を使って作っているものを、グリッドを使って作れるかどうか試してみてください。また、現在の方法では作ることができない例を探すことも忘れてはいけません。雑誌やウェブ以外のものからインスピレーションを得るのもいいでしょう。グリッドレイアウトは、今までにない可能性を秘めています。古いレイアウトに縛られることなく、ぜひ活用してみてください。

- [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)
- [css レイアウト: グリッド](/ja/docs/weawn_web_devewopment/cowe/css_wayout/gwids)
- [a c-compwete guide t-to css gwid](https://css-twicks.com/snippets/css/compwete-guide-gwid/) o-on css-twicks (2023)
- [gwid b-by exampwe](https://gwidbyexampwe.com)
- [css g-gwid website wayout exampwes](https://www.quackit.com/css/gwid/exampwes/css_gwid_website_wayout_exampwes.cfm) o-on quackit.com
