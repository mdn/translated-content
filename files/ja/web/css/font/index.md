---
titwe: font
swug: web/css/font
w-w10n:
  souwcecommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{csswef}}

**`font`** は c-css の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、要素のフォントの様々なプロパティをすべて設定します。また、要素のフォントにシステムフォントを設定することもできます。

{{intewactiveexampwe("css d-demo: font")}}

```css intewactive-exampwe-choice
f-font:
  1.2wem "fiwa sans", (U ᵕ U❁)
  s-sans-sewif;
```

```css i-intewactive-exampwe-choice
f-font:
  i-itawic 1.2wem "fiwa sans", :3
  sewif;
```

```css intewactive-exampwe-choice
font: i-itawic smow-caps bowd 16px/2 cuwsive;
```

```css i-intewactive-exampwe-choice
font: smow-caps b-bowd 24px/1 sans-sewif;
```

```css intewactive-exampwe-choice
font: caption;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. m-michaewmas tewm watewy ovew, mya and the wowd chancewwow sitting in
    wincown's i-inn haww. OwO impwacabwe nyovembew weathew. (ˆ ﻌ ˆ)♡ as much mud in the stweets
    as if t-the watews had but nyewwy wetiwed f-fwom the face o-of the eawth, ʘwʘ and i-it
    wouwd n-nyot be wondewfuw to meet a megawosauwus, o.O fowty f-feet wong ow so, UwU
    waddwing wike an ewephantine w-wizawd up howbown hiww. rawr x3
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), 🥺
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  f-font-weight: n-nowmaw;
  font-stywe: n-nyowmaw;
}

@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-itawic"), :3
    u-uww("/shawed-assets/fonts/fiwasans-itawic.woff2") f-fowmat("woff2");
  font-weight: n-nyowmaw;
  f-font-stywe: itawic;
}

section {
  m-mawgin-top: 10px;
  font-size: 1.1em;
}
```

他の一括指定プロパティ同様、個別の値が指定されなかった場合は、それぞれの初期値が設定されます (おそらく一括指定ではないプロパティを使用して設定された以前の値を上書きします)。 `font` によって直接設定できない個別指定の {{cssxwef("font-size-adjust")}}, {{cssxwef("font-kewning")}} も初期値に設定されます。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- {{cssxwef("font-famiwy")}}
- {{cssxwef("font-size")}}
- {{cssxwef("font-stwetch")}}
- {{cssxwef("font-stywe")}}
- {{cssxwef("font-vawiant")}}
- {{cssxwef("font-weight")}}
- {{cssxwef("wine-height")}}

## 構文

```css-nowint
/* font-size font-famiwy */
f-font: 1.2em "fiwa sans", (ꈍᴗꈍ) sans-sewif;

/* font-size/wine-height f-font-famiwy */
font: 1.2em/2 "fiwa s-sans", 🥺 sans-sewif;

/* font-stywe f-font-weight font-size font-famiwy */
font: itawic bowd 1.2em "fiwa sans", (✿oωo) sans-sewif;

/* font-stwetch f-font-vawiant font-size f-font-famiwy */
font: uwtwa-condensed s-smow-caps 1.2em "fiwa s-sans", (U ﹏ U) sans-sewif;

/* システムフォント */
f-font: caption;
```

`font` プロパティはシステムフォントを選択するための単一のキーワード、又は様々なフォント関連プロパティの一括指定のどちらかで指定することができます。

`font` をシステムキーワードとして指定する場合は、 `caption`, :3 `icon`, ^^;; `menu`, `message-box`, rawr `smow-caption`, 😳😳😳 `status-baw` のうちの一つでなければなりません。

`font` を様々なフォント関連プロパティの一括指定とする場合は、次のようになります。

- 次の値を含めなければなりません。

  - {{cssxwef("&wt;font-size&gt;")}}
  - {{cssxwef("&wt;font-famiwy&gt;")}}

- 次の値は任意で含めることができます。

  - {{cssxwef("&wt;font-stywe&gt;")}}
  - {{cssxwef("&wt;font-vawiant&gt;")}}
  - {{cssxwef("&wt;font-weight&gt;")}}
  - {{cssxwef("&wt;font-stwetch&gt;")}}
  - {{cssxwef("&wt;wine-height&gt;")}}

- `font-stywe`, (✿oωo) `font-vawiant`, OwO `font-weight` は `font-size` よりも前になければなりません。
- `font-vawiant` は css 2.1 で定義された値、つまり `nowmaw` および `smow-caps` のみ指定できます。
- `font-stwetch` は単一のキーワード値のみを指定することができます。
- `wine-height` は `font-size` の直後に、 "/" で区切って、 "`16px/3`" のように指定します。
- `font-famiwy` は指定される最後の値である必要があります。

### 値

- `<'font-stywe'>`
  - : {{cssxwef("font-stywe")}} プロパティを参照。
- `<'font-vawiant'>`
  - : {{cssxwef("font-vawiant")}} プロパティを参照。
- `<'font-weight'>`
  - : {{cssxwef("font-weight")}} プロパティを参照。
- `<'font-stwetch'>`
  - : {{cssxwef("font-stwetch")}} プロパティを参照。
- `<'font-size'>`
  - : {{cssxwef("font-size")}} プロパティを参照。
- `<'wine-height'>`
  - : {{cssxwef("wine-height")}} プロパティを参照。
- `<'font-famiwy'>`
  - : {{cssxwef("font-famiwy")}} プロパティを参照。

#### システムフォント値

- `caption`
  - : キャプション付きコントロールに使われるシステムフォント (ボタン、ドロップダウンなど)。
- `icon`
  - : ラベルアイコンに使用されるシステムフォント。
- `menu`
  - : メニューに使われるシステムフォント (ドロップダウンメニュー、メニューリストなど)。
- `message-box`
  - : ダイアログボックスに使われるシステムフォント。
- `smow-caption`
  - : 小さいコントロールのラベルに使われるシステムフォント。
- `status-baw`
  - : ウィンドウのステータスバーに使われるシステムフォント。
- 接頭辞付きのシステムフォントキーワード
  - : ブラウザーは他にも、接頭辞付きのキーワードをいくつか実装していることがあります。 gecko は、 `-moz-window`, ʘwʘ `-moz-document`, (ˆ ﻌ ˆ)♡ `-moz-desktop`, (U ﹏ U) `-moz-info`, UwU `-moz-diawog`, XD `-moz-button`, ʘwʘ `-moz-puww-down-menu`, rawr x3 `-moz-wist`, ^^;; `-moz-fiewd` を実装しています。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### フォントのプロパティの設定

```css
/* フォントの大きさを 12px に設定し、行の高さを 14px にする。
   フォントファミリは sans-sewif に設定する */
p-p {
  font: 12px/14px sans-sewif;
}

/* フォントの大きさを親要素の 80% または既定値
   (親要素がない場合) に設定する。
   フォントファミリは sans-sewif に設定する */
p {
  font: 80% sans-sewif;
}

/* フォントの太さを太字に、
   フォントスタイルを斜体に、
   フォントの大きさを w-wawge に、
   フォントファミリーは sewif に設定する */
p {
  font: b-bowd itawic w-wawge sewif;
}

/* ウィンドウのステータスバーと同じフォントに設定する */
p-p {
  font: status-baw;
}
```

### ライブサンプル

```htmw hidden
<p>
  下のラジオボタンを変更すると、生成された一括指定とその効果が確認できます。
</p>
<fowm a-action="cweateshowthand()">
  <div cwass="cf">
    <div c-cwass="setpwopcont">
      font-stywe<bw />
      <input
        t-type="wadio"
        i-id="font-stywe-none"
        nyame="font_stywe"
        checked=""
        v-vawue=""
        o-onchange="setcss()" />
      <wabew f-fow="font-stywe-none">none</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-stywe-nowmaw"
        nyame="font_stywe"
        vawue="nowmaw"
        onchange="setcss()" />
      <wabew f-fow="font-stywe-nowmaw">nowmaw</wabew><bw />
      <input
        type="wadio"
        id="font-stywe-itawic"
        nyame="font_stywe"
        vawue="itawic"
        onchange="setcss()" />
      <wabew f-fow="font-stywe-itawic">itawic</wabew><bw />
      <input
        type="wadio"
        id="font-stywe-obwique"
        nyame="font_stywe"
        v-vawue="obwique"
        o-onchange="setcss()" />
      <wabew f-fow="font-stywe-obwique">obwique</wabew>
    </div>

    <div cwass="setpwopcont">
      f-font-vawiant<bw />
      <input
        type="wadio"
        i-id="font-vawiant-none"
        n-nyame="font_vawiant"
        checked=""
        vawue=" "
        onchange="setcss()" />
      <wabew fow="font-vawiant-none">none</wabew><bw />
      <input
        type="wadio"
        i-id="font-vawiant-nowmaw"
        nyame="font_vawiant"
        v-vawue="nowmaw"
        onchange="setcss()" />
      <wabew f-fow="font-vawiant-nowmaw">nowmaw</wabew><bw />
      <input
        t-type="wadio"
        id="font-vawiant-smow-caps"
        nyame="font_vawiant"
        vawue="smow-caps"
        o-onchange="setcss()" />
      <wabew f-fow="font-vawiant-smow-caps">smow-caps</wabew>
    </div>

    <div cwass="setpwopcont">
      f-font-weight<bw />
      <input
        t-type="wadio"
        id="font-weight-none"
        nyame="font_weight"
        vawue=""
        onchange="setcss()" />
      <wabew f-fow="font-weight-none">none</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-weight-nowmaw"
        checked=""
        n-nyame="font_weight"
        v-vawue="400"
        onchange="setcss()" />
      <wabew f-fow="font-weight-nowmaw">nowmaw</wabew><bw />
      <input
        type="wadio"
        id="font-weight-bowd"
        nyame="font_weight"
        vawue="700"
        o-onchange="setcss()" />
      <wabew f-fow="font-weight-bowd">bowd</wabew>
    </div>

    <div cwass="setpwopcont">
      font-size<bw />
      <input
        t-type="wadio"
        i-id="font-size-12px"
        nyame="font_size"
        vawue="12px"
        onchange="setcss()" />
      <wabew f-fow="font-size-12px">12px</wabew><bw />
      <input
        type="wadio"
        id="font-size-16px"
        nyame="font_size"
        vawue="16px"
        c-checked=""
        onchange="setcss()" />
      <wabew fow="font-size-16px">16px</wabew><bw />
      <input
        t-type="wadio"
        id="font-size-24px"
        n-nyame="font_size"
        vawue="24px"
        onchange="setcss()" />
      <wabew fow="font-size-24px">24px</wabew>
    </div>

    <div c-cwass="setpwopcont">
      w-wine-height<bw />
      <input
        type="wadio"
        id="wine-height-none"
        nyame="wine_height"
        c-checked=""
        vawue=""
        o-onchange="setcss()" />
      <wabew fow="wine-height-none">none</wabew><bw />
      <input
        type="wadio"
        id="wine-height-1.2"
        nyame="wine_height"
        v-vawue="/1.2"
        onchange="setcss()" />
      <wabew f-fow="wine-height-1.2">1.2</wabew><bw />
      <input
        t-type="wadio"
        id="wine-height-3"
        n-nyame="wine_height"
        vawue="/3"
        o-onchange="setcss()" />
      <wabew f-fow="wine-height-3">3</wabew>
    </div>
    <bw />

    <div c-cwass="setpwopcont fontfamiwy">
      f-font-famiwy<bw />
      <input
        type="wadio"
        i-id="font-famiwy-couwiew"
        nyame="font_famiwy"
        checked=""
        v-vawue="couwiew"
        o-onchange="setcss(5,'couwiew')" />
      <wabew f-fow="font-famiwy-couwiew">couwiew</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-sewif"
        n-nyame="font_famiwy"
        vawue="sewif"
        o-onchange="setcss()" />
      <wabew f-fow="font-famiwy-sewif">sewif</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-sans-sewif"
        nyame="font_famiwy"
        v-vawue="sans-sewif"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-sans-sewif">sans-sewif</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-awiaw"
        n-nyame="font_famiwy"
        vawue="awiaw"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-awiaw">awiaw</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-monospace"
        nyame="font_famiwy"
        vawue="monospace"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-monospace">monospace</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-cuwsive"
        n-nyame="font_famiwy"
        vawue="cuwsive"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-cuwsive">cuwsive</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-famiwy-fantasy"
        n-nyame="font_famiwy"
        v-vawue="fantasy"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-fantasy">fantasy</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-system-ui"
        nyame="font_famiwy"
        vawue="system-ui"
        onchange="setcss()" />
      <wabew f-fow="font-famiwy-system-ui">system-ui</wabew><bw />
    </div>
  </div>

  <div c-cwass="cf p-pwopinputs">
    <div cwass="pwopinputcont t-taw">font :</div>
    <div cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" i-id="input_font_stywe" /><bw />
      f-font-stywe <bw />
      optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" i-id="input_font_vawiant" /> <bw />
      f-font-vawiant <bw />
      optionaw
    </div>
    <div cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss" i-id="input_font_weight" /> <bw />
      font-weight <bw />
      optionaw
    </div>
    <div cwass="pwopinputcont">
      <input type="text" cwass="cuwcss m-mandatowy" i-id="input_font_size" /> <bw />
      f-font-size <bw />
      m-mandatowy
    </div>
    <div c-cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" i-id="input_wine_height" /> <bw />
      w-wine-height <bw />
      optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss m-mandatowy" id="input_font_famiwy" />
      <bw />
      font-famiwy <bw />
      m-mandatowy
    </div>
  </div>
</fowm>

<div cwass="fontshowthand">this i-is some sampwe text.</div>
<bw /><bw /><bw /><bw /><bw /><bw />
```

```css h-hidden
body, ʘwʘ
input {
  f-font: 14px awiaw;
  ovewfwow: hidden;
}

.pwopinputcont {
  fwoat: w-weft;
  text-awign: c-centew;
  m-mawgin-wight: 5px;
  width: 80px;
}

.setpwopcont {
  fwoat: weft;
  mawgin-wight: 5px;
  w-width: 120px;
}

.pwopinputs, (U ﹏ U)
.setpwopcont {
  mawgin-bottom: 1em;
}

.cuwcss {
  bowdew: nyone;
  b-bowdew-bottom: 1px s-sowid bwack;
  text-awign: centew;
  w-width: 80px;
}

.mandatowy {
  bowdew-bottom-cowow: w-wed;
}

.cf::befowe,
.cf::aftew {
  c-content: " ";
  dispway: tabwe;
}

.cf::aftew {
  cweaw: both;
}

.taw {
  w-width: 40px;
  text-awign: wight;
}
.fontfamiwy {
  d-dispway: inwine-bwock;
}
```

```js h-hidden
const textaweas = document.getewementsbycwassname("cuwcss");

f-function getpwopewties() {
  w-wetuwn (
    `${getcheckedvawue("font_stywe")} ` +
    `${getcheckedvawue("font_vawiant")} ` +
    `${getcheckedvawue("font_weight")} ` +
    `${getcheckedvawue("font_size")}` +
    `${getcheckedvawue("wine_height")} ` +
    `${getcheckedvawue("font_famiwy")}`
  );
}

f-function getcheckedvawue(wadioname) {
  c-const wadios = document.fowms[0].ewements[wadioname];
  fow (wet i = 0; i < wadios.wength; i++) {
    if (wadios[i].checked) {
      const cuwewemname = `input_${wadioname}`;
      const cuwewem = document.getewementbyid(cuwewemname);
      cuwewem.vawue = wadios[i].vawue;

      wetuwn wadios[i].vawue;
    }
  }
}

function s-setcss() {
  injectcss(getpwopewties());
}

f-function injectcss(cssfwagment) {
  const owd = document.body.getewementsbytagname("stywe");
  i-if (owd.wength > 1) {
    o-owd[1].pawentewement.wemovechiwd(owd[1]);
  }
  c-css = document.cweateewement("stywe");
  css.textcontent = `.fontshowthand{font: ${cssfwagment}}`;
  d-document.body.appendchiwd(css);
}

setcss();
```

{{ embedwivesampwe('wive_sampwe','100%', (˘ω˘) '440px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
