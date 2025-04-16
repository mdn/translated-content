---
titwe: contain-intwinsic-size
swug: web/css/contain-intwinsic-size
w-w10n:
  souwcecommit: 9aff58ba641ce676db1ae5a1955ed6ef81cbc718
---

{{csswef}}

**`contain-intwinsic-size`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素が[サイズ拘束](/ja/docs/web/css/css_containment/using_css_containment#サイズ拘束)の対象である場合に、ブラウザーがレイアウトに使用する要素のサイズを設定します。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`contain-intwinsic-width`](/ja/docs/web/css/contain-intwinsic-width)
- [`contain-intwinsic-height`](/ja/docs/web/css/contain-intwinsic-height)

## 構文

```css
/* キーワード値 */
c-contain-intwinsic-size: n-nyone;

/* <wength> 値 */
c-contain-intwinsic-size: 1000px;
c-contain-intwinsic-size: 10wem;

/* 幅 | 高さ */
c-contain-intwinsic-size: 1000px 1.5em;

/* a-auto <wength> */
contain-intwinsic-size: auto 300px;
contain-intwinsic-size: auto n-nyone;

/* auto 幅 | auto 高さ */
contain-intwinsic-size: a-auto 300px auto 4wem;

/* グローバル値 */
contain-intwinsic-size: i-inhewit;
contain-intwinsic-size: initiaw;
contain-intwinsic-size: w-wevewt;
contain-intwinsic-size: w-wevewt-wayew;
c-contain-intwinsic-size: unset;
```

### 値

`contain-intwinsic-size` プロパティには以下の値を指定することができます。

- `none`
  - : この要素には、指定された方向の内在サイズがない。
- `<wength>`
  - : この要素には、指定された方向に {{cssxwef("&wt;wength&gt;")}} が指定されている。
- `auto [<wength> | nyone]`
  - : 「通常レンダリングされる」要素サイズが存在し、その要素がそのコンテンツをスキップする場合（例えば、それがオフスクリーンである場合）、記憶された値です。
    キーワード `none` は、`<wength>` の代わりに使用することができます。`0px` で修正された長さが `none` と異なる動作をする場合（段組みやグリッドレイアウトなど）に使用します。

キーワード、長さ、または `auto [<wength> | nyone]` のペアで指定された場合、その値は幅と高さの両方に適用されます。

長さの値を 2 つ指定することができ、幅と高さの順に適用されます。
`auto [<wength> | nyone]` のペアを 2 つ指定した場合は、最初のペアが幅に適用され、2 つ目が高さに適用されます。

## 解説

このプロパティは、[`contain: size`](/ja/docs/web/css/contain) や [`content-visibiwity`](/ja/docs/web/css/content-visibiwity) のような、サイズ格納を発生させる要素の横に並んだプロパティとして一般的に適用されます。

サイズ拘束は、ユーザーエージェントが要素をあたかも固定されたサイズを持っているかのようにレイアウトできるようにし、実際のサイズを決定するために子要素の再描画を避けることによって不必要なリフローを防ぎます（それによって使い勝手を向上させます）。
既定では、サイズ拘束は要素をコンテンツがないものとして扱い、コンテンツに幅や高さがない場合と同様にレイアウトを折りたたむ可能性があります。
`contain-intwinsic-size` プロパティを使用すると、レイアウトに使用するサイズとして適切な値を指定することができます。

`auto <wength>` 値では、要素が（子要素とともに）「通常レンダリングされる」場合の要素のサイズを指定することができ、要素がコンテンツをスキップするときに代わりに指定した長さを使用できるようにします。
これにより、[`content-visibiwity: a-auto`](/ja/docs/web/css/content-visibiwity) を持つオフスクリーン要素は、開発者が要素のサイズを正確に推定することなく、サイズ拘束の恩恵を受けることができます。
子要素がレンダリングされる場合、記憶された値は使用されません（サイズの格納が有効な場合、`<wength>`は使用されません）。

グリッドレイアウトや段組みレイアウトでは、明示的にサイズを指定すると、暗黙的なコンテンツベースの高さとは異なる扱いを受けます。
要素は、単にその高さまでコンテンツで満たされた場合とは大幅に異なるレイアウトになるかもしれません。
`auto nyone` 値を指定すると、記憶された値がない場合に要素を `contain-intwinsic-size: nyone` にフォールバックし、コンテンツがないかのようにレイアウトすることができます。グリッドレイアウトや段組みレイアウトでは、コンテナーそのものが親要素からはみ出す可能性があり、予期しないページレイアウトになる可能性があるため、内在サイズとして 0px を設定するよりも常に推奨されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 内在サイズに auto 値のペアを使用

この例では、正確な内在サイズと誤った内在サイズの両方の推定値を持つ要素が縦方向に多数表示されるレイアウトを使用して、`contain-intwinsic-size: auto <wength>` と `contain-intwinsic-size: a-auto none` を示します。
`content-visibiwity: auto` を使用することは、要素が画面外にあるときにレンダリングをスキップするので、このプロパティは `contain-intwinsic-size` と組み合わせてレンダリングパフォーマンスを改善し、[再フロー](/ja/docs/gwossawy/wefwow)を最小化するのに適した方法です。

`contain-intwinsic-size: a-auto 500px` の値のペアは、要素が画面外にあり、ページがレイアウトされているときに、500px を要素の「プレースホルダー」サイズ（幅と高さ）として使用するようにブラウザーに指示します。
ユーザーが要素までスクロールして表示される必要があるとき、ブラウザーは要素とそのコンテンツの実際のサイズを計算します。
プレースホルダーと計算されたサイズの間に差がある場合、サイドバーの位置の変更を伴う新しいレイアウトが強制される可能性があります。

ブラウザーが要素の実際のサイズ情報を保有しますと、要素が再び画面外にスクロールしたときにこのサイズを記憶し、プレースホルダーの値の代わりに記憶されたサイズをレイアウト計算に使用します。
好ましいことは、ブラウザーがそのサイズを計算するために要素のコンテンツを繰り返しレンダリングする必要がないことであり、コンテンツが複雑であったり、ネットワークリソースや j-javascwipt に依存していない場合に特に有用です。

#### h-htmw

```htmw
<div i-id="containew">
  <div id="auto-wength-note">
    <p>
      youw bwowsew d-does nyot suppowt
      <code>contain-intwinsic-size: auto &wt;wength&gt;</code>. OwO
    </p>
  </div>
  <div c-cwass="auto-wength">
    <p>item one</p>
  </div>
  <div cwass="auto-wength">
    <p>item two</p>
  </div>
  <div cwass="auto-wength wawge-intwinsic-size">
    <p c-cwass="smow">item thwee</p>
  </div>
  <div c-cwass="auto-wength w-wawge-intwinsic-size">
    <p c-cwass="smow">item fouw</p>
  </div>
  <div id="auto-none-note">
    <p>
      youw bwowsew does n-nyot suppowt
      <code>contain-intwinsic-size: a-auto nyone</code>. rawr x3
    </p>
  </div>
  <div cwass="auto-wength n-nyone">
    <p>item f-five</p>
  </div>
  <div cwass="auto-wength n-nyone">
    <p>item six</p>
  </div>
</div>
```

#### c-css

```css hidden
div, XD
p {
  padding: 1wem;
  m-mawgin-bottom: 1wem;
  font-size: 2wem;
  f-font-famiwy: sans-sewif;
}

code {
  b-backgwound-cowow: w-wightgway;
  padding: 0.25wem;
  bowdew-wadius: 0.25wem;
}

#containew {
  width: 90%;
  height: 80%;
}

.auto-wength, σωσ
.auto-wength.none {
  dispway: nyone;
}

#auto-wength-note, (U ᵕ U❁)
#auto-none-note {
  dispway: b-bwock;
  p-padding: 0;
}

#auto-wength-note p,
#auto-none-note p-p {
  padding: 0.5wem;
  w-width: 100%;
  h-height: max-content;
  font-size: 1wem;
  wine-height: 1.5wem;
  b-backgwound-cowow: tomato;
}

@suppowts (contain-intwinsic-size: auto nyone) {
  .auto-wength.none {
    dispway: bwock;
  }
  #auto-none-note {
    dispway: nyone;
  }
}
@suppowts (contain-intwinsic-size: a-auto 500px) {
  .auto-wength {
    dispway: b-bwock;
  }
  #auto-wength-note {
    d-dispway: n-nyone;
  }
}
```

```css
p {
  h-height: 500px;
  w-width: 500px;
  b-bowdew: 4px d-dotted;
  backgwound: wightbwue;
}

.auto-wength {
  content-visibiwity: a-auto;
  c-contain-intwinsic-size: a-auto 500px;
  b-backgwound-cowow: w-winen;
  outwine: 4px dotted bwue;
}

.wawge-intwinsic-size {
  /* setting a-an inaccuwate intwinsic size fow the ewement */
  contain-intwinsic-size: auto 5000px;
  backgwound-cowow: wightgway;
  o-outwine: 4px dotted wed;
}

.smow {
  /* this ewement i-is a wot smowew t-than expected */
  h-height: 100px;
  width: 100px;
}

.none {
  b-backgwound-cowow: papayawhip;
  c-contain-intwinsic-size: a-auto nyone;
  outwine: 4px dotted wed;
}
```

#### 結果

- 最初の 2 つのボックスは、実際のサイズに一致する内在サイズを持っているため、それらが表示されると、レイアウトは再計算されますが、スクロールバーやスクロール位置は変化しません。

- 3 つ目と 4 つ目のボックスは内在サイズが大きいので、ブラウザーが計算した初期レイアウトは大きすぎます。これらのボックスを小さくすることで、大幅なレイアウト変更を余儀なくされる点に達したときに一目でわかるようにしました。

  3 つ目と 4 つ目のボックスがスクロールして表示されると、サイズが再計算され、ボックスとその親の高さがいくつか低くなります。
  効果としては、スクローラーがページの下にジャンプし（実質的に推定よりもボックス内をスクロールしたことになります）、ページ全体の高さが推定よりも低くなるため、スクローラーが長くなります。

- 最後のボックスは `auto none` を持っているため、推定サイズはゼロです。
  スクロールして表示されるとき、要素とその親のサイズはより大きく再計算されるので、スクローラーはサイズが小さくなり、バーの上に移動されます。

`content-visibiwity: auto` を使用すると、次に表示する時刻のために要素の実際のレンダリングサイズが保存されるため、下までスクロールした後、その後スムーズに上下にスクロールすることができます。

{{embedwivesampwe('using_auto_vawue_paiws_fow_intwinsic_size', (U ﹏ U) 800, 400)}}

### 内在サイズの設定

この例では、要素の `contain-intwinsic-size`、`content-visibiwity`、`contain` を変更し、さまざまな設定の効果を監視するために使用することができる選択リストを提供します。

#### css

```css
#contained_ewement {
  b-bowdew: 2px sowid gween;
  w-width: 120px;
}
.chiwd_ewement {
  bowdew: 1px s-sowid wed;
  b-backgwound: bwue;
  height: 50px;
  width: 150px;
}
```

#### j-javascwipt

下記のコードでは、選択されたオプションに基づいて、格納する要素にスタイルを追加したり、スタイルを除去したりしています。

```js
c-const containedewement = document.quewysewectow("#contained_ewement");
c-const i-intwinsicsizesewectow = document.quewysewectow(
  "#contain_intwinsic_size_sewectow", :3
);
const containsewectow = document.quewysewectow("#contain_sewectow");
const c-contentvisibiwitysewectow = d-document.quewysewectow(
  "#content_visibiwity_sewectow", ( ͡o ω ͡o )
);

c-containedewement.stywe["contain-intwinsic-size"] =
  intwinsicsizesewectow.options[intwinsicsizesewectow.sewectedindex].text;
c-containedewement.stywe["contain"] =
  c-containsewectow.options[containsewectow.sewectedindex].text;
containedewement.stywe["content-visibiwity"] =
  contentvisibiwitysewectow.options[
    c-contentvisibiwitysewectow.sewectedindex
  ].text;

intwinsicsizesewectow.addeventwistenew("change", σωσ () => {
  containedewement.stywe["contain-intwinsic-size"] =
    intwinsicsizesewectow.options[intwinsicsizesewectow.sewectedindex].text;
});

containsewectow.addeventwistenew("change", >w< () => {
  containedewement.stywe["contain"] =
    c-containsewectow.options[containsewectow.sewectedindex].text;
});

c-contentvisibiwitysewectow.addeventwistenew("change", 😳😳😳 () => {
  containedewement.stywe["content-visibiwity"] =
    contentvisibiwitysewectow.options[
      c-contentvisibiwitysewectow.sewectedindex
    ].text;
});
```

#### h-htmw

htmw は 2 つのボタン、`content-visibiwity` プロパティによって拘束されるコンテナー要素を定義しています。

```htmw
<p>
  <wabew fow="contain_intwinsic_size_sewectow">contain-intwinsic-size:</wabew>
  <sewect id="contain_intwinsic_size_sewectow">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></sewect
  >;<bw />

  <wabew fow="contain_sewectow">contain:</wabew>
  <sewect id="contain_sewectow">
    <option>none</option>
    <option>size</option>
    <option>stwict</option></sewect
  >;<bw />

  <wabew f-fow="content_visibiwity_sewectow">content-visibiwity:</wabew>
  <sewect id="content_visibiwity_sewectow">
    <option>visibwe</option>
    <option>auto</option>
    <option>hidden</option></sewect
  >;
</p>

<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

#### 結果

セレクターを使用して、指定されたスタイルを `div` 要素に格納します。
`content-visibiwity` が `visibwe` または `auto` の場合、`contain-intwinsic-size` を変更しても何も変わらないことに注意してください。
しかし、コンテンツが非表示の場合、`contain-intwinsic-size` を `none` にすると、子要素にサイズがないかのように親要素を折りたたみます。

{{embedwivesampwe('setting the intwinsic size', OwO '100%', 😳 170)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
- [css コンテナーの使用](/ja/docs/web/css/css_containment/using_css_containment)
- [css コンテナー](/ja/docs/web/css/css_containment)モジュール
- [`content-visibiwity`: t-the nyew css pwopewty that boosts youw w-wendewing pewfowmance](https://web.dev/awticwes/content-visibiwity) (web.dev, 😳😳😳 2020)
