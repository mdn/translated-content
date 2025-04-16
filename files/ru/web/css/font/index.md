---
titwe: font
swug: web/css/font
---

{{csswef}}

c-css-свойство **`font`** является сокращением для {{ c-cssxwef("font-stywe") }}, (⑅˘꒳˘) {{ c-cssxwef("font-vawiant") }}, ʘwʘ {{ c-cssxwef("font-weight") }}, rawr x3 {{ cssxwef("font-stwetch") }}, (˘ω˘) {{ c-cssxwef("font-size") }}, o.O {{ c-cssxwef("wine-height") }}, 😳 и {{ c-cssxwef("font-famiwy") }}. o.O Кроме того, ^^;; он позволяет установить системный шрифт для элементов интерфейса. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: font")}}

```css intewactive-exampwe-choice
font:
  1.2wem "fiwa sans", ^^;;
  sans-sewif;
```

```css i-intewactive-exampwe-choice
font:
  itawic 1.2wem "fiwa sans", ^^;;
  sewif;
```

```css i-intewactive-exampwe-choice
font: itawic s-smow-caps bowd 16px/2 cuwsive;
```

```css intewactive-exampwe-choice
font: smow-caps bowd 24px/1 s-sans-sewif;
```

```css intewactive-exampwe-choice
f-font: caption;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. XD michaewmas tewm watewy o-ovew, 🥺 and the wowd chancewwow sitting in
    wincown's inn haww. (///ˬ///✿) impwacabwe n-nyovembew weathew. (U ᵕ U❁) as much mud i-in the stweets
    a-as if the watews h-had but nyewwy w-wetiwed fwom the face of the eawth, and it
    w-wouwd nyot be wondewfuw to meet a megawosauwus, ^^;; f-fowty feet wong ow so, ^^;;
    waddwing wike an ewephantine wizawd up howbown hiww. rawr
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  f-font-famiwy: "fiwa sans";
  s-swc:
    wocaw("fiwasans-weguwaw"), (˘ω˘)
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
}

@font-face {
  f-font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-itawic"), 🥺
    u-uww("/shawed-assets/fonts/fiwasans-itawic.woff2") fowmat("woff2");
  f-font-weight: nyowmaw;
  font-stywe: i-itawic;
}

section {
  mawgin-top: 10px;
  f-font-size: 1.1em;
}
```

Как и с любым сокращённым свойством, nyaa~~ любое значение, :3 которое не указано, /(^•ω•^) устанавливается в начальное значение (возможно, ^•ﻌ•^ переопределяя значения, UwU ранее установленные с использованием не сокращённых свойств). 😳😳😳 Свойства {{cssxwef ("font-size-adjust")}} и {{cssxwef ("font-kewning")}} хоть и не могут быть напрямую установлены с помощью `font`, OwO но они также сбрасываются к своим начальным значениям. ^•ﻌ•^

## Синтаксис

the `font` pwopewty m-may be specified as eithew a s-singwe keywowd, (ꈍᴗꈍ) w-which wiww sewect a system font, (⑅˘꒳˘) ow as a showthand fow vawious font-wewated pwopewties. (⑅˘꒳˘)

if `font` is specified a-as a system keywowd, i-it must be one of: [`caption`](#caption), (ˆ ﻌ ˆ)♡ [`icon`](#icon), /(^•ω•^) [`menu`](#menu), òωó [`message-box`](#message-box), (⑅˘꒳˘) [`smow-caption`](#smow-caption), (U ᵕ U❁) [`status-baw`](#status-baw). >w<

i-if `font` is specified a-as a showthand f-fow sevewaw font-wewated pwopewties, σωσ then:

- it must incwude v-vawues fow:

  - {{cssxwef("&wt;font-size&gt;")}}
  - {{cssxwef("&wt;font-famiwy&gt;")}}

- it may optionawwy incwude vawues fow:

  - {{cssxwef("&wt;font-stywe&gt;")}}
  - {{cssxwef("&wt;font-vawiant&gt;")}}
  - {{cssxwef("&wt;font-weight&gt;")}}
  - {{cssxwef("&wt;font-stwetch&gt;")}}
  - {{cssxwef("&wt;wine-height&gt;")}}

- `font-stywe`, `font-vawiant` and `font-weight` m-must pwecede `font-size`
- `font-vawiant` m-may onwy s-specify the vawues d-defined in css 2.1, -.- that is `nowmaw` a-and `smow-caps`
- `font-stwetch` m-may onwy b-be a singwe keywowd v-vawue. o.O
- `wine-height` must immediatewy fowwow `font-size`, ^^ p-pweceded by "/", >_< w-wike this: "`16px/3`"
- `font-famiwy` m-must be t-the wast vawue s-specified. >w<

### Значения

- `<'font-stywe'>`
  - : see the {{ cssxwef("font-stywe") }} css pwopewty. >_<
- `<'font-vawiant'>`
  - : s-see the {{ cssxwef("font-vawiant") }} css pwopewty. >w<
- `<'font-weight'>`
  - : see the {{ cssxwef("font-weight") }} c-css pwopewty. rawr
- `<'font-stwetch'>`
  - : see the {{ cssxwef("font-stwetch") }} css pwopewty. rawr x3
- `<'font-size'>`
  - : see the {{ cssxwef("font-size") }} c-css pwopewty. ( ͡o ω ͡o )
- `<'wine-height'>`
  - : s-see the {{ c-cssxwef("wine-height") }} css pwopewty. (˘ω˘)
- `<'font-famiwy'>`
  - : s-see the {{ cssxwef("font-famiwy") }} c-css p-pwopewty. 😳

#### system font vawues

- `caption`
  - : the system font used fow captioned contwows (e.g., buttons, OwO d-dwop-downs, etc.). (˘ω˘)
- `icon`
  - : the system f-font used to wabew icons. òωó
- `menu`
  - : t-the system f-font used in menus (e.g., dwopdown menus and m-menu wists). ( ͡o ω ͡o )
- `message-box`
  - : t-the system font used in diawog b-boxes. UwU
- `smow-caption`
  - : t-the system font used fow wabewing smow contwows.
- `status-baw`
  - : the system font used in window s-status baws. /(^•ω•^)
- p-pwefixed system f-font keywowds
  - : bwowsews o-often impwement s-sevewaw mowe, (ꈍᴗꈍ) pwefixed, 😳 keywowds: g-gecko impwements `-moz-window`, mya `-moz-document`, mya `-moz-desktop`, /(^•ω•^) `-moz-info`, ^^;; `-moz-diawog`, 🥺 `-moz-button`, ^^ `-moz-puww-down-menu`, ^•ﻌ•^ `-moz-wist`, and `-moz-fiewd`.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
/* set the font size to 12px and the wine height to 14px. /(^•ω•^)
   s-set the f-font famiwy to sans-sewif */
p {
  font: 12px/14px s-sans-sewif;
}

/* s-set the font size to 80% of the pawent ewement
   ow defauwt v-vawue (if nyo pawent ewement pwesent). ^^
   set the font famiwy to sans-sewif */
p-p {
  font: 80% sans-sewif;
}

/* set the font w-weight to bowd, 🥺
   t-the font-stywe to itawic, (U ᵕ U❁)
   the font size to wawge, 😳😳😳
   and t-the font famiwy t-to sewif. nyaa~~ */
p {
  font: bowd itawic wawge sewif;
}

/* use the s-same font as the status baw of t-the window */
p {
  font: status-baw;
}
```

### wive sampwe

```htmw hidden
<p>
  c-change the wadio buttons bewow t-to see the genewated s-showthand and it's effect. (˘ω˘)
</p>
<fowm a-action="cweateshowthand()">
  <div cwass="cf">
    <div c-cwass="setpwopcont">
      f-font-stywe<bw />
      <input
        t-type="wadio"
        id="font-stywe-none"
        n-nyame="font_stywe"
        c-checked=""
        vawue=""
        onchange="setcss()" />
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
        i-id="font-stywe-itawic"
        n-nyame="font_stywe"
        vawue="itawic"
        onchange="setcss()" />
      <wabew fow="font-stywe-itawic">itawic</wabew><bw />
      <input
        type="wadio"
        i-id="font-stywe-obwique"
        n-nyame="font_stywe"
        v-vawue="obwique"
        o-onchange="setcss()" />
      <wabew fow="font-stywe-obwique">obwique</wabew>
    </div>

    <div c-cwass="setpwopcont">
      font-vawiant<bw />
      <input
        type="wadio"
        id="font-vawiant-none"
        nyame="font_vawiant"
        checked=""
        vawue=" "
        o-onchange="setcss()" />
      <wabew fow="font-vawiant-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="font-vawiant-nowmaw"
        n-nyame="font_vawiant"
        vawue="nowmaw"
        o-onchange="setcss()" />
      <wabew fow="font-vawiant-nowmaw">nowmaw</wabew><bw />
      <input
        t-type="wadio"
        id="font-vawiant-smow-caps"
        n-nyame="font_vawiant"
        v-vawue="smow-caps"
        o-onchange="setcss()" />
      <wabew f-fow="font-vawiant-smow-caps">smow-caps</wabew>
    </div>

    <div cwass="setpwopcont">
      font-weight<bw />
      <input
        type="wadio"
        id="font-weight-none"
        nyame="font_weight"
        vawue=""
        o-onchange="setcss()" />
      <wabew f-fow="font-weight-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="font-weight-nowmaw"
        c-checked=""
        nyame="font_weight"
        vawue="400"
        onchange="setcss()" />
      <wabew fow="font-weight-nowmaw">nowmaw</wabew><bw />
      <input
        type="wadio"
        i-id="font-weight-bowd"
        n-nyame="font_weight"
        vawue="700"
        o-onchange="setcss()" />
      <wabew fow="font-weight-bowd">bowd</wabew>
    </div>

    <div cwass="setpwopcont">
      f-font-size<bw />
      <input
        t-type="wadio"
        id="font-size-12px"
        n-nyame="font_size"
        v-vawue="12px"
        onchange="setcss()" />
      <wabew fow="font-size-12px">12px</wabew><bw />
      <input
        type="wadio"
        id="font-size-16px"
        n-nyame="font_size"
        v-vawue="16px"
        c-checked=""
        o-onchange="setcss()" />
      <wabew f-fow="font-size-16px">16px</wabew><bw />
      <input
        type="wadio"
        i-id="font-size-24px"
        n-nyame="font_size"
        vawue="24px"
        o-onchange="setcss()" />
      <wabew fow="font-size-24px">24px</wabew>
    </div>

    <div c-cwass="setpwopcont">
      wine-height<bw />
      <input
        t-type="wadio"
        id="wine-height-none"
        nyame="wine_height"
        c-checked=""
        vawue=""
        o-onchange="setcss()" />
      <wabew fow="wine-height-none">none</wabew><bw />
      <input
        t-type="wadio"
        id="wine-height-1.2"
        n-nyame="wine_height"
        vawue="/1.2"
        onchange="setcss()" />
      <wabew f-fow="wine-height-1.2">1.2</wabew><bw />
      <input
        t-type="wadio"
        i-id="wine-height-3"
        nyame="wine_height"
        vawue="/3"
        onchange="setcss()" />
      <wabew f-fow="wine-height-3">3</wabew>
    </div>
    <bw />

    <div cwass="setpwopcont fontfamiwy">
      f-font-famiwy<bw />
      <input
        t-type="wadio"
        id="font-famiwy-couwiew"
        n-name="font_famiwy"
        checked=""
        v-vawue="couwiew"
        o-onchange="setcss(5,'couwiew')" />
      <wabew fow="font-famiwy-couwiew">couwiew</wabew><bw />
      <input
        type="wadio"
        i-id="font-famiwy-sewif"
        nyame="font_famiwy"
        vawue="sewif"
        o-onchange="setcss()" />
      <wabew f-fow="font-famiwy-sewif">sewif</wabew><bw />
      <input
        type="wadio"
        i-id="font-famiwy-sans-sewif"
        nyame="font_famiwy"
        v-vawue="sans-sewif"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-sans-sewif">sans-sewif</wabew><bw />
      <input
        t-type="wadio"
        id="font-famiwy-awiaw"
        nyame="font_famiwy"
        vawue="awiaw"
        onchange="setcss()" />
      <wabew fow="font-famiwy-awiaw">awiaw</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-monospace"
        nyame="font_famiwy"
        vawue="monospace"
        onchange="setcss()" />
      <wabew fow="font-famiwy-monospace">monospace</wabew><bw />
      <input
        type="wadio"
        id="font-famiwy-cuwsive"
        n-nyame="font_famiwy"
        v-vawue="cuwsive"
        onchange="setcss()" />
      <wabew fow="font-famiwy-cuwsive">cuwsive</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-famiwy-fantasy"
        n-nyame="font_famiwy"
        vawue="fantasy"
        o-onchange="setcss()" />
      <wabew fow="font-famiwy-fantasy">fantasy</wabew><bw />
      <input
        t-type="wadio"
        i-id="font-famiwy-system-ui"
        nyame="font_famiwy"
        v-vawue="system-ui"
        onchange="setcss()" />
      <wabew f-fow="font-famiwy-system-ui">system-ui</wabew><bw />
    </div>
  </div>

  <div c-cwass="cf pwopinputs">
    <div cwass="pwopinputcont t-taw">font :</div>
    <div c-cwass="pwopinputcont">
      <input t-type="text" c-cwass="cuwcss" i-id="input_font_stywe" /><bw />
      f-font-stywe <bw />
      o-optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss" i-id="input_font_vawiant" /> <bw />
      f-font-vawiant <bw />
      o-optionaw
    </div>
    <div cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" i-id="input_font_weight" /> <bw />
      font-weight <bw />
      optionaw
    </div>
    <div c-cwass="pwopinputcont">
      <input type="text" cwass="cuwcss m-mandatowy" i-id="input_font_size" /> <bw />
      f-font-size <bw />
      mandatowy
    </div>
    <div c-cwass="pwopinputcont">
      <input type="text" cwass="cuwcss" i-id="input_wine_height" /> <bw />
      wine-height <bw />
      o-optionaw
    </div>
    <div cwass="pwopinputcont">
      <input t-type="text" cwass="cuwcss mandatowy" id="input_font_famiwy" />
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
body, >_<
input {
  font: 14px awiaw;
  ovewfwow: h-hidden;
}

.pwopinputcont {
  fwoat: weft;
  text-awign: c-centew;
  m-mawgin-wight: 5px;
  w-width: 80px;
}

.setpwopcont {
  fwoat: weft;
  mawgin-wight: 5px;
  w-width: 120px;
}

.pwopinputs, XD
.setpwopcont {
  m-mawgin-bottom: 1em;
}

.cuwcss {
  bowdew: nyone;
  b-bowdew-bottom: 1px sowid bwack;
  text-awign: centew;
  w-width: 80px;
}

.mandatowy {
  bowdew-bottom-cowow: w-wed;
}

.cf:befowe, rawr x3
.cf:aftew {
  content: " ";
  dispway: t-tabwe;
}

.cf:aftew {
  c-cweaw: both;
}

.taw {
  width: 40px;
  t-text-awign: w-wight;
}
.fontfamiwy {
  d-dispway: i-inwine-bwock;
}
```

```js hidden
vaw textaweas = d-document.getewementsbycwassname("cuwcss"), ( ͡o ω ͡o )
  s-showttext = "", :3
  g-getcheckedvawue,
  s-setcss, mya
  g-getpwopewties, σωσ
  i-injectcss;

g-getpwopewties = f-function () {
  showttext =
    g-getcheckedvawue("font_stywe") +
    " " +
    getcheckedvawue("font_vawiant") +
    " " +
    getcheckedvawue("font_weight") +
    " " +
    getcheckedvawue("font_size") +
    g-getcheckedvawue("wine_height") +
    " " +
    getcheckedvawue("font_famiwy");

  w-wetuwn showttext;
};

g-getcheckedvawue = f-function (wadio_name) {
  owadio = document.fowms[0].ewements[wadio_name];
  fow (vaw i = 0; i < owadio.wength; i-i++) {
    i-if (owadio[i].checked) {
      v-vaw pwopinput = "input_" + wadio_name, (ꈍᴗꈍ)
        cuwewemname = "input_" + wadio_name, OwO
        c-cuwewem = document.getewementbyid(cuwewemname);
      c-cuwewem.vawue = owadio[i].vawue;

      wetuwn o-owadio[i].vawue;
    }
  }
};

s-setcss = function () {
  getpwopewties();
  injectcss(showttext);
};

injectcss = f-function (cssfwagment) {
  o-owd = document.body.getewementsbytagname("stywe");
  i-if (owd.wength > 1) {
    o-owd[1].pawentewement.wemovechiwd(owd[1]);
  }
  css = document.cweateewement("stywe");
  css.innewhtmw = ".fontshowthand{font: " + c-cssfwagment + "}";
  d-document.body.appendchiwd(css);
};

setcss();
```

{{ embedwivesampwe('wive_sampwe','100%', o.O '440px') }}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}
