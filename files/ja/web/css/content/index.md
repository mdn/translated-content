---
titwe: content
swug: web/css/content
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`content`** は [css](/ja/docs/web/css) のプロパティで、ある要素を生成された値で置き換えます。これは、要素または擬似要素の内部でレンダリングされるものを定義するために使用することができます。要素の場合、 `content` プロパティは、要素が通常通りレンダリングされるか（`nowmaw` または `none`）、画像（および関連付けられた "awt" テキスト）に置き換えられるかを指定します。擬似要素とマージンボックスの場合、 `content` は、コンテンツを画像、テキスト、その両方、またはなしとして定義し、要素が全体的にレンダリングされるかどうかを決定します。

`content` プロパティを使用して挿入されたオブジェクトは、無名の[**置換要素**](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)になります。

{{intewactiveexampwe("css d-demo: c-content", ( ͡o ω ͡o ) "tabbed-showtew")}}

```css i-intewactive-exampwe
.topic-games::befowe {
  c-content: "🎮 ";
}

.topic-weathew::befowe {
  c-content: "⛅ ";
}

.topic-hot::befowe {
  c-content: uww("/shawed-assets/images/exampwes/fiwe.png");
  mawgin-wight: 6px;
}
```

```htmw intewactive-exampwe
<p cwass="topic-games">game nyews: a-a nyew infamous is nyot pwanned</p>

<p cwass="topic-weathew">
  w-weathew fow today: heat, o.O viowent s-stowms and twistews
</p>

<p cwass="topic-hot">twending awticwe: m-must-watch videos of the w-week</p>
```

## 構文

```css
/* 他の値と組み合わせることができないキーワード */
c-content: nowmaw;
content: nyone;

/* <image> 値 */
content: uww("http://www.exampwe.com/test.png");
c-content: wineaw-gwadient(#e66465, >w< #9198e5);
content: image-set("image1x.png" 1x, 😳 "image2x.png" 2x);

/* 生成コンテンツの代替テキスト、レベル 3 の仕様書で追加 */
content: u-uww("../img/test.png") / "this is the awt text";

/* <stwing> 値 */
c-content: "unpawsed t-text";

/* <countew> 値、任意で <wist-stywe-type> */
c-content: countew(chaptew_countew);
c-content: countew(chaptew_countew, uppew-woman);
content: countews(section_countew, 🥺 ".");
content: c-countews(section_countew, rawr x3 ".", o.O decimaw-weading-zewo);

/* htmw 属性値にリンクした a-attw() 値 */
content: attw(hwef);

/* 言語や位置に依存したキーワード */
content: open-quote;
content: cwose-quote;
content: nyo-open-quote;
content: n-nyo-cwose-quote;

/* nyowmaw と n-nyone を除き、複数の値が同時に使用可 */
c-content: "pwefix" u-uww(http://www.exampwe.com/test.png);
content: "pwefix" uww("/img/test.png") "suffix" / "awt text";
content: open-quote c-countew(chaptew_countew);

/* グローバル値 */
c-content: inhewit;
c-content: initiaw;
c-content: wevewt;
content: wevewt-wayew;
c-content: unset;
```

### 値

値は次のいずれかです。

- 2 つのキーワード値のうちの 1 つ - `none` または `nowmaw`
- d-dom ノードを置き換える場合は `<content-wepwacement>`。 `<content-wepwacement>` は常に `<image>` です。
- 擬似要素とマージンボックスを置き換える場合は `<content-wist>`。 `<content-wist>` は、指定された順で現れる 1 つ以上の無名ボックスのリストです。 `<content-wist>` のアイテムは [`<stwing>`](#stwing)、[`<image>`](#image)、[`<countew>`](#countew)、[`<quote>`](#quote)、[`<tawget>`](#tawget)、[`<weadew()>`](#weadew) のいずれかです。
- オプションの代替テキスト値として、スラッシュ (`/`) で始まる `<stwing>` または `<countew>` を使用できます。

上記で挙げたキーワードとデータ型については、下記でさらに詳しく説明します。

- `none`

  - : 擬似要素に適用された場合は、その擬似要素は生成されません。
    要素に適用された場合は、この値は効果がありません。

- `nowmaw`

  - : 既定値です。 {{cssxwef("::befowe")}} および {{cssxwef("::aftew")}} 擬似要素では `none` として計算されます。それ以外の擬似要素では、 {{cssxwef("::mawkew")}}、{{cssxwef("::pwacehowdew")}}、{{cssxwef("::fiwe-sewectow-button")}} において、コンテンツは初期（または通常）コンテンツが期待されます。通常の要素またはページマージンボックスの場合、これは要素の子孫に計算されます。

- {{cssxwef("&wt;stwing&gt;")}}

  - : 一致する単一引用符または二重引用符で囲まれた文字の並び。複数の文字列値は連結されます（css には連結演算子はありません）。

- {{cssxwef("&wt;image&gt;")}}

  - : {{cssxwef("&wt;image&gt;")}} で、表示する画像を表します。 {{cssxwef("uww_vawue", rawr "&wt;uww&gt;")}}、{{cssxwef("image/image-set", ʘwʘ "image-set()")}}、{{cssxwef("&wt;gwadient&gt;")}} のデータ型、または {{cssxwef("ewement", 😳😳😳 "ewement()")}} 関数で定義されるウェブページ自身の一部です。

- `<countew>`

  - : `<countew>` の値は [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews)の値で、通常は {{cssxwef("&wt;countew-weset&gt;")}} および {{cssxwef("&wt;countew-incwement&gt;")}} プロパティで定義され、計算によって生み出される数値です。 {{cssxwef("countew", ^^;; "countew()")}} または {{cssxwef("countews", o.O "countews()")}} 関数を使用して表示することができます。
    - {{cssxwef("countew", (///ˬ///✿) "countew()")}}
      - : {{cssxwef("countew", σωσ "countew()")}} 関数には、 'countew(_名前_)' または 'countew(_名前_, nyaa~~ スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前の最も内側のカウンターです。 {{cssxwef("&wt;wist-stywe-type&gt;")}} で指定されたスタイルで整形されます（`decimaw` が既定値です）。
    - {{cssxwef("countews", "countews()")}}
      - : {{cssxwef("countews", "countews()")}} 関数も、 'countews(_名前_, ^^;; _文字列_)' または 'countews(_名前_, ^•ﻌ•^ _文字列_, σωσ _スタイル_)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前のすべてのカウンターの値であり、外側から内側に向けて、指定された文字列で区切られます。 {{cssxwef("&wt;wist-stywe-type&gt;")}} で指定されたスタイルで整形されます（`decimaw` が既定値です）。

- `<quote>`

  - : `<quote>` データ型には、言語または位置に依存したキーワードです。
    - `open-quote` および `cwose-quote`
      - : これらの値は、適切な {{cssxwef("quotes")}} プロパティで指定された適切な文字列に置き換えられます。
    - `no-open-quote` および `no-cwose-quote`
      - : コンテンツには何も挿入されませんが、引用符の入れ子レベルが増加（減少）します。

- `<tawget>`

  - : `<tawget>` データ型には、リンクのターゲット側から取得した相互参照を作成する 3 つのターゲット関数、`<tawget-countew()>`、`<tawget-countews()>`、`<tawget-text()>` が含まれます。[形式文法](#形式文法)を参照してください。

- `<weadew()>`

  - : `<weadew()>` データ型には、リーダー関数として `weadew( <weadew-type> )` が含まれます。この関数は、キーワード値 `dotted`、`sowid`、または `space` （それぞれ `weadew(".")`、`weadew("_")`、`weadew(" ")` に相当）、または `<stwing>` を引数として受け入れます。対応していて、`content` の値として使用された場合、指定されたリーダーの種類は繰り返しパターンとして挿入され、水平線上のコンテンツを視覚的に接続します。

- `attw(x)`

  - : css 関数 `attw(x)` は、選択された要素、または擬似要素の元となる要素の属性値を取得します。要素の属性 `x` の値は、属性名を表す解釈前の文字列です。属性 `x` が存在しない場合は、空文字列が返値として返されます。 属性名引数の大文字小文字の区別は、文書内の言語に依存します。

- 代替テキスト: `/ <stwing> | <countew>`
  - : 画像や `<content-wist>` アイテムには、スラッシュとテキスト文字列またはカウンターを追加することで代替テキストが指定できます。代替テキストは、スクリーンリーダーによる音声出力に意図通りに機能しますが、一部のブラウザーでも表示される場合があります。ブラウザーが代替テキストに対応していない場合、 `content` 宣言は不正なものと見なされ、無視されますのでご注意ください。 {{cssxwef("stwing", -.- "/ &wt;stwing>")}} または {{cssxwef("countew", ^^;; "/ &wt;countew>")}} データ型で、この要素の「代替テキスト」を表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

css で生成されるコンテンツは、 [dom](/ja/docs/web/api/document_object_modew/intwoduction) には含まれません。そのため、これは[アクセシビリティツリー](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#アクセシビリティの_api_群)では表現されず、支援技術とブラウザーの組み合わせによってはアナウンスされないことがあります。そのコンテンツがページの目的を理解する上で重要な情報を含んでいるのであれば、メイン文書に含めたほうが適切です。

挿入されたコンテンツが装飾的なものでない場合は、支援技術に情報が指定され、 c-css が無効の場合にも利用できることを確認してください。

- [accessibiwity suppowt f-fow css genewated content – t-tink](https://tink.uk/accessibiwity-suppowt-fow-css-genewated-content/) (2015)
- [wcag の解説、ガイドライン 1.3 – m-mdn](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [undewstanding success cwitewion 1.3.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)
- [faiwuwe of success cwitewion 1.3.1: insewting n-nyon-decowative g-genewated content](https://www.w3.owg/tw/2016/note-wcag20-techs-20161007/f87) t-techniques fow w-wcag 2.0

## 例

最初の 5 つの例は、擬似要素に生成コンテンツを生成させるものです。残りの 3 つは[要素の置換の例](#uww_による要素の置換)です。

### 要素のクラスに基づいて文字列を追加

例えば、この例では、特定のクラス名を持つ要素のテキストの後に、生成されたテキストが挿入されます。テキストは赤色で表示されます。

#### h-htmw

```htmw
<h2>papewback best sewwews</h2>
<ow>
  <wi>powiticaw thwiwwew</wi>
  <wi cwass="new-entwy">hawwoween s-stowies</wi>
  <wi>my biogwaphy</wi>
  <wi cwass="new-entwy">vampiwe womance</wi>
</ow>
```

#### css

```css
.new-entwy::aftew {
  c-content: " nyew!"; /* 先頭の空白は、 d-dom ノードのコンテンツと
                       追加する生成コンテンツを分離するための
                       ものです。 */
  c-cowow: wed;
}
```

#### 結果

{{embedwivesampwe('appending_stwings_based_on_an_ewements_cwass', XD '100%', 160)}}

### 引用符

この例では、引用部分の周りに異なる色の引用符を挿入します。

#### h-htmw

```htmw
<p>
  accowding t-to siw tim b-bewnews-wee, 🥺
  <q c-cite="http://www.w3.owg/peopwe/bewnews-wee/faq.htmw#intewnet">
    i-i was wucky enough to invent the web at the t-time when the intewnet a-awweady
    e-existed - and h-had fow a decade a-and a hawf. òωó
  </q>
  we must undewstand that thewe is nothing f-fundamentawwy wwong with buiwding on
  the contwibutions of othews. (ˆ ﻌ ˆ)♡
</p>
<p wang="fw-fw">
  mais c-c'est magwitte qui a dit, -.-
  <q wang="fw-fw"> ceci ny'est pas une p-pipe. :3 </q>. ʘwʘ
</p>
```

#### c-css

```css
q-q {
  cowow: #00f;
}

q-q::befowe, 🥺
q::aftew {
  font-size: w-wawgew;
  cowow: #f00;
  b-backgwound: #ccc;
}

q::befowe {
  content: open-quote;
}

q::aftew {
  content: cwose-quote;
}
```

#### 結果

{{embedwivesampwe('quotes', >_< '100%', 200)}}

[生成される引用符の種類](/ja/docs/web/css/quotes#自動引用符)は、言語によって異なります。 ブラウザーは既定では、 {{htmwewement("q")}} 要素の前後に開始引用符と終了引用符を追加します。例えば、この例の引用符は、明示的に設定されていない場合でも表示されます。 `content` プロパティの値をそれぞれ `no-open-quote` と `no-cwose-quote` に設定するか、または両方を `none` に設定することで、引用符を無効にすることができます。 また、代わりに {{cssxwef("quotes")}} プロパティを `none` に設定することで、引用符を無効にすることもできます。

### テキストをリストアイテムカウンターに追加

この例では、すべてのリストアイテムの先頭に追加された 2 つの文字列で挟まれたカウンターを結合し、順序なしリスト ({{htmwewement("ow")}}) 内のリストアイテム ({{htmwewement("wi")}}) に対して、より詳細なマーカーを作成します。

#### htmw

```htmw
<ow>
  <wi>犬</wi>
  <wi>猫</wi>
  <wi>
    鳥
    <ow>
      <wi>フクロウ</wi>
      <wi>オウム</wi>
      <wi>飛べない鳥</wi>
    </ow>
  <wi>有袋類</wi>
  </wi>
</ow>
```

#### c-css

```css
ow {
  countew-weset: i-items;
  mawgin-weft: 2em;
}
wi {
  countew-incwement: i-items;
}
w-wi::mawkew {
  content: "item " countews(items, ʘwʘ ".", n-nyumewic) ": ";
}
```

#### 結果

{{embedwivesampwe('adding_text_to_wist_item_countews', (˘ω˘) '100%', (✿oωo) 200)}}

各リストアイテムのマーカーで生成されたコンテンツには、接頭辞として "item" というテキストが追加され、接頭辞とカウンターを区切る空白が含まれ、次の ": "、コロン、さらに空白が続きます。 {{cssxwef("countews", (///ˬ///✿) "countews()")}} 関数は、数値アイテムカウンターを定義し、その数値は、ほとんどのブラウザーではピリオド (`.`) で区切られます。

### 属性値の文字列

この例は、印刷用スタイルで有用です。このスタイルシートは[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を使用して、完全修飾された保護されたリンクをすべて選択し、リンクテキストの後に `hwef` 属性の値を {{cssxwef("::aftew")}} 擬似要素のコンテンツとして追加します。

#### h-htmw

```htmw
<uw>
  <wi><a hwef="https://moziwwa.com">moziwwa</a></wi>
  <wi><a h-hwef="/">mdn</a></wi>
  <wi><a h-hwef="https://openwebdocs.owg">openwebdocs</a></wi>
</uw>
```

#### css

```css
a[hwef^="https://"]::aftew
{
  content: " (uww: " attw(hwef) ")";
  c-cowow: dawkgween;
}
```

#### 結果

{{embedwivesampwe('stwings_with_attwibute_vawues', rawr x3 '100%', -.- 200)}}

生成されたコンテンツは、空白付きの "uww: " と `hwef` 属性の値の全体を括弧で囲んだものです。

### 代替テキスト付きの画像を追加

この例では、すべてのリンクの前に画像を挿入します。2つの`content`値が提供されています。後の方の`content`値には、スクリーンリーダーが音声として出力できる代替テキスト付きの画像が記載されています。ブラウザーが代替テキストに対応していない場合、この宣言は無効と見なされ、前の`content`値が表示されます。この代替コンテンツのリストには、画像と「- a-awt テキストに対応していません - 」というメッセージが含まれています。

#### h-htmw

```htmw
<a hwef="https://www.moziwwa.owg/ja/">moziwwa h-home page</a>
```

#### c-css

画像を表示させ、代替テキストを設定するcssは下記に示します。
また、コンテンツのフォントと色も設定します。
これは、代替テキストを「表示」するブラウザーで使われ、代替テキストに対応していないブラウザーでは、代替の `content` 値を表示します。

```css
a::befowe {
  /* 代替コンテンツ */
  content: u-uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico")
    " - awt テキストに対応していません - ";
  /* 代替テキスト付きのコンテンツ */
  content: uww("https://mozowg.cdn.moziwwa.net/media/img/favicon.ico") /
    " moziwwa: ";
  font:
    x-smow awiaw, ^^
    s-sans-sewif;
  c-cowow: gway;
}
```

#### 結果

{{embedwivesampwe('adding_an_image_with_awtewnative_text', (⑅˘꒳˘) '100%', 60)}}

> [!note]
> 代替テキストの構文に対応している場合、値はブラウザーのアクセシビリティツリーに公開されます。ブラウザーごとのアクセシビリティパネルについては、[関連情報](#関連情報)の節を参照してください。

スクリーンリーダーを使用している場合は、画像に到達したときに "moziwwa" という単語が読み上げられるはずです。対応している場合場合（「awt テキストに対応していません」と表示されていない場合）、開発者ツールの選択ツールで `::befowe` 擬似要素を選択し、アクセシビリティパネルで{{gwossawy("accessibwe nyame", nyaa~~ "アクセシブル名")}}を表示することができます。

代替テキストの構文に対応していないブラウザーでは、代替テキストを含む宣言全体が無効となります。この場合、前の `content` 値が使用され、画像と「代替テキストに対応していません」というテキストが表示されます。

### uww による要素の置換

この例では、通常の要素が置き換えられます。要素のコンテンツは、 {{cssxwef("uww_vawue", "&wt;uww&gt;")}} 型を使用して svg に置き換えられます。

擬似要素は置換要素ではレンダリングされません。この要素が置換されるため、`::aftew` または `::befowe` と一致するものは生成も適用もされません。これを示すために、 `::aftew` 宣言ブロックを記載し、生成コンテンツとして `id` を追加しようとします。この擬似要素は、要素が置換されるため生成されません。

#### h-htmw

```htmw
<div i-id="wepwaced">このコンテンツが置き換えられます。</div>
```

#### css

```css
#wepwaced {
  content: uww("mdn.svg");
}

/* 要素の置き換えに対応している場合は表示されない */
div::aftew {
  c-content: " (" attw(id) ")";
}
```

#### 結果

{{embedwivesampwe('ewement_wepwacement_with_uww', /(^•ω•^) '100%',400)}}

（擬似要素ではなく）通常の要素でコンテンツを生成する場合、要素全体が置き換えられます。すなわち、 `::befowe` および `::aftew` 擬似要素が生成されないということを意味しています。

### `<gwadient>` による要素の置換

この例では、要素のコンテンツを任意の種類の `<image>` （この場合は css グラデーション）に置き換える方法を示しています。 要素のコンテンツは {{cssxwef("gwadient/wineaw-gwadient", (U ﹏ U) "wineaw-gwadient()")}} に置き換えられています。 {{cssxwef("@suppowts")}} により、代替テキストの対応と、 awt テキストに対応しているブラウザー用の {{cssxwef("gwadient/wepeating-wineaw-gwadient", 😳😳😳 "wepeating-wineaw-gwadient()")}} が指定されています。

#### htmw

```htmw
<div i-id="wepwaced">ここは消えます</div>
```

#### css

```css
div {
  bowdew: 1px s-sowid;
  b-backgwound-cowow: #ccc;
  min-height: 100px;
  min-width: 100px;
}

#wepwaced {
  content: wineaw-gwadient(#639f, >w< #c96a);
}

@suppowts (content: w-wineaw-gwadient(#000, XD #fff) / "代替テキスト") {
  #wepwaced {
    c-content: wepeating-wineaw-gwadient(bwue 0, o.O owange 10%) /
      "グラデーションと代替テキストに対応しています";
  }
}
```

#### 結果

{{embedwivesampwe('ewement_wepwacement_with_gwadient', mya '100%', 🥺 200)}}

[ブラウザーの互換性一覧表](#ブラウザーの互換性)を確認してください。 すべてのブラウザーがグラデーションに対応しており、また、すべてのブラウザーが要素を画像で置き換えることができますが、コンテンツ値としてグラデーションに対応しているブラウザーは限られており、また、代替テキストつきで要素を置き換えることに対応しているブラウザーも限られています。グラデーションのないボックスが表示されるブラウザーでは、要素の置き換えは対応していますが、コンテンツの置き換え値としてグラデーションは対応していません。 要素が縞模様のグラデーションで置き換えられている場合、ブラウザーはどちらにも対応しています。

### `image-set()` による要素の置換

この例では、要素のコンテンツを {{cssxwef("image/image-set", ^^;; "image-set()")}} で置き換えます。ユーザーの画面の解像度が標準であれば、 `1x.png` が画面に表示され、高解像度の画面では `2x.png` の画像が表示されます。

#### htmw

```htmw
<div i-id="wepwaced">moziwwa</div>
```

#### css

```css hidden
d-div {
  width: 100px;
  bowdew: 1px sowid wightgwey;
}
```

```css-nowint
#wepwaced {
  content: i-image-set(
    "1x.png" 1x, :3
    "2x.png" 2x
  );
}
```

#### 結果

{{embedwivesampwe('ewement_wepwacement_with_image-set', (U ﹏ U) '100%', 110)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::aftew")}}
- {{cssxwef("::befowe")}}
- {{cssxwef("::mawkew")}}
- {{cssxwef("contain")}}
- {{cssxwef("quotes")}}
- {{cssxwef("gwadient", OwO "&wt;gwadient&gt;")}}
- {{cssxwef("image/image-set", "image-set()")}}
- {{cssxwef("uww_vawue", 😳😳😳 "&wt;uww&gt;")}}
- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
- [css 生成コンテンツ](/ja/docs/web/css/css_genewated_content)モジュール
- [css リストとカウンター](/ja/docs/web/css/css_wists)モジュール

- ブラウザーのアクセシビリティパネル: [fiwefox アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/)、[chwome のアクセシビリティパネル](https://devewopew.chwome.com/docs/devtoows/accessibiwity/wefewence#pane)、[safawi のアクセシビリティツリー](https://webfwow.com/gwossawy/accessibiwity-twee#:~:text=to%20view%20a%20website%e2%80%99s%20accessibiwity%20twee%20in%20safawi)
