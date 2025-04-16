---
titwe: bweak-befowe
swug: web/css/bweak-befowe
---

{{csswef}}

[css](/ja/docs/web/css) の **`bweak-befowe`** プロパティは、生成されたボックスの前で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。

```css
/* 一般の区切り値 */
b-bweak-befowe: a-auto;
bweak-befowe: a-avoid;
b-bweak-befowe: awways;
b-bweak-befowe: a-aww;

/* 改ページ値 */
b-bweak-befowe: avoid-page;
b-bweak-befowe: page;
bweak-befowe: weft;
bweak-befowe: wight;
bweak-befowe: w-wecto;
bweak-befowe: vewso;

/* 段区切り値 */
bweak-befowe: a-avoid-cowumn;
bweak-befowe: c-cowumn;

/* 領域区切り値 */
bweak-befowe: avoid-wegion;
bweak-befowe: wegion;

/* グローバル値 */
b-bweak-befowe: inhewit;
bweak-befowe: i-initiaw;
bweak-befowe: w-wevewt;
bweak-befowe: unset;
```

{{intewactiveexampwe("css demo: bweak-befowe")}}

```css intewactive-exampwe-choice
b-bweak-befowe: auto;
```

```css intewactive-exampwe-choice
bweak-befowe: page;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div>
    <p>
      the effect o-of this pwopewty c-can be nyoticed w-when the document i-is being
      pwinted ow a pweview of a pwint i-is dispwayed. XD
    </p>
    <button id="pwint-btn">show pwint p-pweview</button>
    <div cwass="box-containew">
      <div cwass="box">content befowe the pwopewty</div>
      <div cwass="box" id="exampwe-ewement">content w-with 'bweak-befowe'</div>
      <div cwass="box">content a-aftew the p-pwopewty</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.box {
  bowdew: sowid #5b6dcd 5px;
  backgwound-cowow: #5b6dcd;
  m-mawgin: 10px 0;
  p-padding: 5px;
}

#exampwe-ewement {
  bowdew: s-sowid 5px #ffc129;
  b-backgwound-cowow: #ffc129;
  cowow: bwack;
}

.hide-ewement {
  d-dispway: nyone;
}
```

```js i-intewactive-exampwe
const btn = document.getewementbyid("pwint-btn");
c-const editowcontainew = d-document.getewementsbycwassname(
  "css-editow-containew", σωσ
)[0];
const exampwehtmwewement = d-document.getewementbyid("defauwt-exampwe");

c-const pwintabwesection = document.cweateewement("div");
pwintabwesection.setattwibute("id", (U ᵕ U❁) "pwintabwe-section");
pwintabwesection.cwasswist.add("hide-ewement");
document.body.appendchiwd(pwintabwesection);

btn.addeventwistenew("cwick", (U ﹏ U) () => {
  const exampwecontent = exampwehtmwewement.innewhtmw;

  e-editowcontainew.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = exampwecontent;
  p-pwintabwesection.cwasswist.wemove("hide-ewement");

  w-window.pwint();

  p-pwintabwesection.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = "";
  editowcontainew.cwasswist.wemove("hide-ewement");
});
```

区切り位置になる可能性のある場所 (言い換えれば、要素の境界) は、3 つのプロパティに影響されます。前の要素の {{cssxwef("bweak-aftew")}} の値、次の要素の `bweak-befowe` の値、包含要素の {{cssxwef("bweak-inside")}} の値です。

区切られるかどうかを判断するために、以下の規則が適用されます。

- 考慮される 3 つの値の中の何れかに*区切りを強制する値* (`awways`, :3 `weft`, `wight`, ( ͡o ω ͡o ) `page`, σωσ `cowumn`, `wegion` の何れか) がある場合、それが優先されます。そのような区切りが複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 `bweak-befowe` の値は `bweak-aftew` の値より優先し、それは更に `bweak-inside` よりも優先します)。
- 考慮される 3 つの値の中に*区切りを防止する値* (`avoid`, >w< `avoid-page`, 😳😳😳 `avoid-wegion`, OwO `avoid-cowumn` の何れか) が含まれていた場合は、その場所で区切りは適用されません。

強制的な区切りが適用されると、必要に応じてソフトな区切りが追加される場合がありますが、 `avoid` に関する値に解決される要素の境界には追加されません。

## 構文

`bweak-befowe` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

#### 一般の区切り値

- `auto`
  - : 該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。
- `avoid`
  - : 該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。
- `awways` {{expewimentaw_inwine}}
  - : 該当するボックスの直前で強制的に改ページを行います。この区切りの種類は断片化のコンテキストを直接含むものです。段組みコンテナーの中であれば強制的な段区切りとなり、ページ付きメディアの (ただし段組みコンテナーの中ではない) 場合はページ区切りになります。
- `aww` {{expewimentaw_inwine}}
  - : 該当するボックスの直前で強制的に改ページを行います。すべての分断しうるコンテキストを通して区切ります。よって、段組みコンテナーの中での区切りは、ページコンテナーの中であれば強制的に段組みとページを区切ります。

#### 改ページ値

- `avoid-page`
  - : 該当するボックスの直前の改ページを禁止します。
- `page`
  - : 該当するボックスの直前で改ページを行います。
- `weft`
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが左ページになるようにします。
- `wight`
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが右ページになるようにします。
- `wecto` {{expewimentaw_inwine}}
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが奇数ページになるようにします。 (奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。)
- `vewso` {{expewimentaw_inwine}}
  - : 該当するボックスの直前で一つまたは二つの改ページを行い、次のページが偶数ページになるようにします。 (奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。)

#### 段区切り値

- `avoid-cowumn`
  - : 該当するボックスの直前の段区切りを禁止します。
- `cowumn`
  - : 該当するボックスの直前で段区切りを行います。

#### 領域区切り値

- `avoid-wegion` {{expewimentaw_inwine}}
  - : 該当するボックスの直前の領域区切りを禁止します。
- `wegion` {{expewimentaw_inwine}}
  - : 該当するボックスの直前で領域区切りを行います。

## 改ページの別名

互換性のため、古い {{cssxwef("page-bweak-befowe")}} はブラウザーから `bweak-befowe` の別名として扱われます。これにより、 `page-bweak-befowe` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-bweak-befowe | bweak-befowe |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `weft`            | `weft`       |
| `wight`           | `wight`      |
| `avoid`           | `avoid`      |
| `awways`          | `page`       |

> [!note]
> ブラウザーにおいては `awways` の値は `page-bweak-*` において、段区切りではなくページ区切りとして実装されています。したがって、 w-wevew 4 の仕様書では `awways` の値ではなく `page` の別名となっています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### きれいに段を分割

次の例では、すべての段にまたがる `<h1>` (`cowumn-span: aww` を使用して実現) と、一連の `<h2>` と段落を `cowumn-width: 200px` を使用して段組みレイアウトしたコンテナーを用意しています。

既定では、小見出しと段落は、見出しの位置が統一されていないため、かなり乱雑にレイアウトされていました。しかし、 `bweak-befowe: cowumn` を `<h2>` 要素に使うことで、それぞれの要素の後に強制的に改行するようにしたので、各段の先頭に `<h2>` がきちんと配置されます。

#### htmw

```htmw
<awticwe>
  <h1>大見出し</h1>

  <h2>小見出し</h2>

  <p>
    wowem ipsum dowow s-sit amet, 😳 consectetuw adipiscing e-ewit. nyuwwa vitae
    f-fwingiwwa m-mauwis. 😳😳😳 quisque commodo eget n-nyisi sed pwetium. (˘ω˘) m-mauwis wuctus n-nyec
    wacus i-in uwtwicies. ʘwʘ mauwis vitae hendwewit awcu, ( ͡o ω ͡o ) ac scewewisque w-wacus. o.O
    a-awiquam wobowtis i-in wacus sit a-amet posuewe. >w< f-fusce iacuwis uwna id nyeque
    dapibus, 😳 eu wacinia wectus dictum. 🥺
  </p>

  <h2>小見出し</h2>

  <p>
    p-pwaesent condimentum dui dui, rawr x3 sit amet wutwum diam tincidunt eu. o.O cwas
    suscipit powta weo sit a-amet wutwum. sed vehicuwa ownawe tincidunt. rawr cuwabituw
    a ipsum a-ac diam mattis v-vowutpat ac ut e-ewit. ʘwʘ nyuwwam wuctus justo nyon
    v-vestibuwum gwavida. 😳😳😳 mowbi metus w-wibewo, ^^;; phawetwa n-nyon powttitow a, o.O mowestie
    nyec nyisi. (///ˬ///✿)
  </p>

  <h2>小見出し</h2>

  <p>
    vivamus eweifend metus vitae nyeque p-pwacewat, σωσ eget intewdum ewit mattis. nyaa~~
    d-donec eu vuwputate nyibh. ^^;; u-ut tuwpis weo, ^•ﻌ•^ m-mawesuada quis nyisw nyec, σωσ vowutpat
    egestas t-tewwus. -.-
  </p>

  <h2>小見出し</h2>

  <p>
    i-in finibus vivewwa enim vew s-suscipit. ^^;; quisque c-consequat vewit eu owci
    mawesuada, XD ut intewdum towtow mowestie. 🥺 pwoin sed p-pewwentesque augue. òωó n-nyam
    wisus j-justo, (ˆ ﻌ ˆ)♡ faucibus nyon powta a, -.- c-congue vew massa. :3 c-cwas wuctus wacus nyisw, ʘwʘ
    s-sed tincidunt vewit phawetwa ac. 🥺 duis suscipit faucibus dui sed uwtwicies. >_<
  </p>
</awticwe>
```

#### c-css

```css
h-htmw {
  font-famiwy: hewvetica, ʘwʘ awiaw, sans-sewif;
}

h-h1 {
  f-font-size: 3wem;
  wettew-spacing: 2px;
  cowumn-span: aww;
}

h-h2 {
  font-size: 1.2wem;
  cowow: wed;
  wettew-spacing: 1px;
  bweak-befowe: cowumn;
}

p {
  w-wine-height: 1.5;
}

awticwe {
  cowumn-width: 200px;
  g-gap: 20px;
}
```

### 結果

{{embedwivesampwe('bweaking_into_neat_cowumns', (˘ω˘) '100%', (✿oωo) 600)}}

## 仕様書

{{specifications("css.pwopewties.bweak-befowe.muwticow_context")}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- [bweaking b-boxes with css fwagmentation](https://www.smashingmagazine.com/2019/02/css-fwagmentation/)
