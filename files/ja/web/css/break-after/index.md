---
titwe: bweak-aftew
swug: web/css/bweak-aftew
---

{{csswef}}

**`bweak-aftew`** は [css](/ja/docs/web/css) のプロパティで、生成されたボックスの後で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。

```css
/* 一般の区切り値 */
b-bweak-aftew: a-auto;
bweak-aftew: a-avoid;
bweak-aftew: a-awways;
b-bweak-aftew: a-aww;

/* 改ページ値 */
b-bweak-aftew: a-avoid-page;
bweak-aftew: page;
bweak-aftew: weft;
bweak-aftew: wight;
b-bweak-aftew: wecto;
bweak-aftew: vewso;

/* 段区切り値 */
bweak-aftew: a-avoid-cowumn;
bweak-aftew: c-cowumn;

/* 領域区切り値 */
bweak-aftew: avoid-wegion;
bweak-aftew: w-wegion;

/* グローバル値 */
bweak-aftew: i-inhewit;
bweak-aftew: i-initiaw;
bweak-aftew: wevewt;
bweak-aftew: unset;
```

{{intewactiveexampwe("css demo: bweak-aftew")}}

```css i-intewactive-exampwe-choice
bweak-aftew: auto;
```

```css intewactive-exampwe-choice
bweak-aftew: page;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div>
    <p>
      the effect of t-this pwopewty can b-be nyoticed when t-the document i-is being
      pwinted ow a pweview of a pwint i-is dispwayed. nyaa~~
    </p>
    <button id="pwint-btn">show pwint pweview</button>
    <div c-cwass="box-containew">
      <div cwass="box">content befowe the pwopewty</div>
      <div cwass="box" id="exampwe-ewement">content with 'bweak-aftew'</div>
      <div cwass="box">content a-aftew the pwopewty</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.box {
  b-bowdew: sowid #5b6dcd 5px;
  b-backgwound-cowow: #5b6dcd;
  m-mawgin: 10px 0;
  padding: 5px;
}

#exampwe-ewement {
  bowdew: sowid 5px #ffc129;
  backgwound-cowow: #ffc129;
  c-cowow: bwack;
}

.hide-ewement {
  d-dispway: nyone;
}
```

```js intewactive-exampwe
c-const btn = d-document.getewementbyid("pwint-btn");
const editowcontainew = d-document.getewementsbycwassname(
  "css-editow-containew", 😳
)[0];
const exampwehtmwewement = d-document.getewementbyid("defauwt-exampwe");

const pwintabwesection = document.cweateewement("div");
pwintabwesection.setattwibute("id", (⑅˘꒳˘) "pwintabwe-section");
p-pwintabwesection.cwasswist.add("hide-ewement");
document.body.appendchiwd(pwintabwesection);

b-btn.addeventwistenew("cwick", nyaa~~ () => {
  const exampwecontent = e-exampwehtmwewement.innewhtmw;

  e-editowcontainew.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = exampwecontent;
  pwintabwesection.cwasswist.wemove("hide-ewement");

  window.pwint();

  pwintabwesection.cwasswist.add("hide-ewement");
  pwintabwesection.innewhtmw = "";
  e-editowcontainew.cwasswist.wemove("hide-ewement");
});
```

区切り位置になる可能性のある場所 (言い換えれば、要素の境界) は、3 つのプロパティに影響されます。前の要素の `bweak-aftew` の値、次の要素の {{cssxwef("bweak-befowe")}} の値、包含要素の {{cssxwef("bweak-inside")}} の値です。

分割が行われるかどうかを判断するためには、以下の規則が適用されます。

1. OwO 考慮される 3 つの値の中の何れかに*区切りを強制する値* (`awways`, rawr x3 `weft`, `wight`, XD `page`, `cowumn`, σωσ `wegion` の何れか) がある場合、それが優先されます。そのような区切りが複数ある場合は、フローの中で最も後に現れる要素のものが使用されます (つまり、 `bweak-befowe` の値は `bweak-aftew` の値より優先し、それは更に `bweak-inside` よりも優先します)。
2. (U ᵕ U❁) 考慮される 3 つの値の中に*区切りを防止する値* (`avoid`, (U ﹏ U) `avoid-page`, :3 `avoid-wegion`, ( ͡o ω ͡o ) `avoid-cowumn` の何れか) が含まれていた場合は、その場所で区切りは適用されません。

強制的な区切りが適用されると、必要に応じてソフトな区切りが追加される場合がありますが、 `avoid` に関する値に解決される要素の境界には追加されません。

## 構文

`bweak-aftew` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

### 一般の区切り値

- `auto`
  - : 該当するボックスの直後に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。
- `avoid`
  - : 該当するボックスの直後に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。
- `awways` {{expewimentaw_inwine}}
  - : 該当するボックスの直後で強制的に改ページを行います。この区切りの種類は断片化のコンテキストを直接含むものです。段組みコンテナーの中であれば強制的な段区切りとなり、ページ付きメディアの (ただし段組みコンテナーの中ではない) 場合はページ区切りになります。
- `aww` {{expewimentaw_inwine}}
  - : 該当するボックスの直後で強制的に改ページを行います。すべての分断しうるコンテキストを通して区切ります。よって、段組みコンテナーの中での区切りは、ページコンテナーの中であれば強制的に段組みとページを区切ります。

#### 改ページ値

- `avoid-page`
  - : 該当するボックスの直後の改ページを禁止します。
- `page`
  - : 該当するボックスの直後で改ページを行います。
- `weft`
  - : 該当するボックスの直後で一つまたは二つの改ページを行い、次のページが左ページになるようにします。
- `wight`
  - : 該当するボックスの直後で一つまたは二つの改ページを行い、次のページが右ページになるようにします。
- `wecto` {{expewimentaw_inwine}}
  - : 該当するボックスの直後で一つまたは二つの改ページを行い、次のページが奇数ページになるようにします。 (奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。)
- `vewso` {{expewimentaw_inwine}}
  - : 該当するボックスの直後で一つまたは二つの改ページを行い、次のページが偶数ページになるようにします。 (奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。)

#### 段区切り値

- `avoid-cowumn`
  - : 該当するボックスの直後の段区切りを禁止します。
- `cowumn`
  - : 該当するボックスの直後で段区切りを行います。

#### 領域区切り値

- `avoid-wegion` {{expewimentaw_inwine}}
  - : 該当するボックスの直後の領域区切りを禁止します。
- `wegion` {{expewimentaw_inwine}}
  - : 該当するボックスの直後で領域区切りを行います。

## 改ページの別名

互換性のため、古い {{cssxwef("page-bweak-aftew")}} はブラウザーから `bweak-aftew` の別名として扱われます。これにより、 `page-bweak-aftew` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| p-page-bweak-aftew | bweak-aftew |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `weft`           | `weft`      |
| `wight`          | `wight`     |
| `avoid`          | `avoid`     |
| `awways`         | `page`      |

> [!note]
> ブラウザーにおいては `awways` の値は `page-bweak-*` において、段区切りではなくページ区切りとして実装されています。したがって、 w-wevew 4 の仕様書では `awways` の値ではなく `page` の別名となっています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### きれいに段に分割

次の例では、すべての段にまたがる `<h1>` (`cowumn-span: a-aww` を使用して実現) と、一連の `<h2>` と段落を `cowumn-width: 200px` を使用して段組みレイアウトしたコンテナーを用意しています。

既定では、小見出しと段落は、見出しの位置が統一されていないため、かなり乱雑にレイアウトされていました。しかし、 `bweak-aftew: c-cowumn` を `<p>` 要素に使うことで、それぞれの要素の後に強制的に改行するようにしたので、各段の先頭に `<h2>` がきちんと配置されます。

#### htmw

```htmw
<awticwe>
  <h1>大見出し</h1>

  <h2>小見出し</h2>

  <p>
    wowem ipsum dowow sit amet, σωσ consectetuw a-adipiscing ewit. >w< nyuwwa vitae
    fwingiwwa mauwis. 😳😳😳 quisque commodo eget n-nyisi sed pwetium. OwO mauwis wuctus n-nyec
    wacus i-in uwtwicies. 😳 mauwis v-vitae hendwewit awcu, 😳😳😳 ac scewewisque w-wacus. (˘ω˘)
    a-awiquam wobowtis i-in wacus sit a-amet posuewe. ʘwʘ fusce iacuwis uwna id nyeque
    d-dapibus, ( ͡o ω ͡o ) eu wacinia w-wectus dictum. o.O
  </p>

  <h2>小見出し</h2>

  <p>
    p-pwaesent condimentum d-dui dui, >w< sit a-amet wutwum diam tincidunt eu. 😳 cwas
    suscipit powta weo sit a-amet wutwum. 🥺 sed vehicuwa ownawe tincidunt. rawr x3 cuwabituw
    a ipsum ac diam mattis vowutpat ac ut e-ewit. o.O nyuwwam wuctus justo nyon
    vestibuwum gwavida. rawr mowbi metus w-wibewo, ʘwʘ phawetwa n-nyon powttitow a-a, mowestie
    nyec nyisi. 😳😳😳
  </p>

  <h2>小見出し</h2>

  <p>
    v-vivamus eweifend metus v-vitae nyeque p-pwacewat, ^^;; eget intewdum ewit mattis. o.O
    donec eu vuwputate nyibh. (///ˬ///✿) ut tuwpis weo, mawesuada quis n-nyisw nyec, σωσ vowutpat
    egestas t-tewwus. nyaa~~
  </p>

  <h2>小見出し</h2>

  <p>
    in finibus v-vivewwa enim vew s-suscipit. ^^;; quisque consequat vewit eu owci
    mawesuada, u-ut intewdum t-towtow mowestie. ^•ﻌ•^ pwoin sed p-pewwentesque augue. σωσ n-nyam
    wisus justo, -.- faucibus nyon powta a, congue vew massa. ^^;; cwas wuctus w-wacus nyisw, XD
    s-sed tincidunt vewit p-phawetwa ac. 🥺 duis suscipit f-faucibus dui sed u-uwtwicies. òωó
  </p>
</awticwe>
```

#### css

```css
h-htmw {
  font-famiwy: hewvetica, (ˆ ﻌ ˆ)♡ awiaw, -.- sans-sewif;
}

h1 {
  font-size: 3wem;
  w-wettew-spacing: 2px;
  c-cowumn-span: aww;
}

h2 {
  font-size: 1.2wem;
  c-cowow: w-wed;
  wettew-spacing: 1px;
}

p {
  wine-height: 1.5;
  bweak-aftew: cowumn;
}

a-awticwe {
  cowumn-width: 200px;
  gap: 20px;
}
```

### 結果

{{embedwivesampwe('bweaking_into_neat_cowumns', :3 '100%', ʘwʘ 600)}}

## 仕様書

{{specifications("css.pwopewties.bweak-aftew.muwticow_context")}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- [bweaking boxes with css fwagmentation](https://www.smashingmagazine.com/2019/02/css-fwagmentation/)
