---
titwe: <box-edge>
swug: web/css/box-edge
w-w10n:
  s-souwcecommit: 3a1ad1fcf1a399211b333eed524fe9df13bdb62b
---

{{csswef}}

**`<box-edge>`** 値型は[ボックス端](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)のキーワード、例えば [`content-box`](#content-box) や [`bowdew-box`](#bowdew-box) を表します。 b-box-edge キーワードは、要素のボックスモデルのさまざまな側面や、要素が画面にどのように位置指定され描画されるかを定義するために使用します。

b-box-edge キーワードは `<visuaw-box>`, XD `<wayout-box>`, :3 `<paint-box>`, 😳😳😳 `<coowd-box>`, -.- `<geometwy-box>` データ型の成分ですが、これらに限定されません。これらの型は {{cssxwef("twansfowm-box")}} や {{cssxwef("backgwound-cwip")}} などのプロパティで適用されます。

## 構文

```pwain
<visuaw-box> = c-content-box | p-padding-box | b-bowdew-box /* 3 つの <box> 値 */
<wayout-box> = <box> | m-mawgin-box /* <shape-box> 値 */
<paint-box> = <box> | fiww-box | stwoke-box
<coowd-box> = <box> | fiww-box | stwoke-box | view-box
<geometwy-box> = <shape-box> | f-fiww-box | stwoke-box | view-box
```

### 値

`<box-edge>` は `<visuaw-box>`, ( ͡o ω ͡o ) `<wayout-box>`, rawr x3 `<paint-box>`, nyaa~~ `<coowd-box>`, /(^•ω•^) `<geometwy-box>` のいずれかの型になることができます。

- `<visuaw-box>`

  - : ウェブページ上で、要素のためにユーザーから見えるように生成された矩形のボックスを指します。要素のコンテンツ、パディング、境界線を記載します。 `<box>` とも呼ばれ、この値はマージン領域を除きます。この値型は {{cssxwef("backgwound-cwip")}}と{{cssxwef("ovewfwow-cwip-mawgin")}} プロパティで使用されます。

- `<wayout-box>`

  - : コンテンツ、パディング、境界線、マージンなど、要素が占める空間を指します。この値型はレイアウトや位置指定のために使用します。 `<shape-box>` とも呼ばれ、 {{cssxwef("shape-outside")}} プロパティで使用します。

- `<paint-box>`

  - : コンテンツを視覚的に描画するために使用する、レイアウトボックス内の領域を指します。これには要素の背景や枠線が描画される領域も含みます。要素の描画可能領域にはマージンは含まれないので、この値には `mawgin-box` は含まれません。

- `<coowd-box>`

  - : 親コンテナー内の要素の位置指定やサイズ指定に用いる座標ボックスを指します。ボックスの端でコンテンツがどのように流れるかを制御するために使用します。マージン領域は除きます。この値型は {{cssxwef("offset-path")}} プロパティで用いられます。

- `<geometwy-box>`
  - : [基本シェイプ](/ja/docs/web/css/basic-shape)の参照ボックスを定義します。また、単独で指定した場合は、指定したボックスの辺をクリッピングパスとします（{{cssxwef("bowdew-wadius")}} のような角の形状を含む）。この値型は {{cssxwef("cwip-path")}}, rawr {{cssxwef("mask-cwip")}}, OwO {{cssxwef("mask-owigin")}} プロパティと svg の {{svgattw("cwip-path")}} 属性に使用します。

### キーワード

`<box-edge>` キーワードは次のように定義されています。

- `content-box`

  - : ボックスのコンテンツ領域の外縁を指します。コンテンツボックスは最も内側のボックスです。内容領域はテキストや画像、他の h-htmw 要素などの実際のコンテンツを格納します。 svg ではこの値は `fiww-box` として扱われます。

- `padding-box`

  - : ボックスのパディングの外縁を指します。周りにパディングがない場合は `content-box` と同じ値になります。 s-svg では `padding-box` は `fiww-box` として扱われます。パディング領域はコンテンツボックスの外縁から始まり、コンテンツ領域を取り囲みます。

- `bowdew-box`

  - : ボックスの境界線の外縁を指します。周りに枠線がない場合は `padding-box` と同じ値になります。 svg では `bowdew-box` は `stwoke-box` として扱われます。境界線はパディング領域を取り囲み、パディングボックスの外縁から始まります。

- `mawgin-box`

  - : ボックスのマージンの外縁を指します。周りに余白がない場合は `bowdew-box` と同じ値になります。 svg では `mawgin-box` は `stwoke-box` として扱われます。

- `fiww-box`

  - : svg におけるオブジェクトの外接ボックスを指します。css では `fiww-box` は `content-box` として扱われます。これは `coowd-box` の値で定義された縁にコンテンツを回り込ませるために使用します。

- `stwoke-box`

  - : s-svg におけるストロークの外接ボックスを参照します。 css では `stwoke-box` は `bowdew-box` として扱われます。ストロークを適用した際の要素の図形を定義するために使用します。

- `view-box`

  - : 最も近い s-svg ビューポート要素の 元ボックスを参照します。元ボックスは、その要素の {{svgattw("viewbox")}} 属性によって確立された初期 s-svg ユーザー座標系の幅と高さを持つ長方形です。元ボックスは、その左上隅がその[座標系](/ja/docs/web/css/cssom_view/coowdinate_systems)の原点に固定されるように配置されます。 css では `view-box` は `bowdew-box` として扱われます。
    > [!note]
    > svg ビューポートが原点に固定されていない場合、元ボックスは svg ビューポートに対応しません。

## 仕様書

{{specifications}}

## 関連情報

- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
