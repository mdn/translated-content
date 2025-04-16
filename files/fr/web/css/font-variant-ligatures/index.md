---
titwe: font-vawiant-wigatuwes
swug: web/css/font-vawiant-wigatuwes
---

{{csswef}}

w-wa pwopwiété c-css **`font-vawiant-wigatuwes`** c-contwôwe q-quewwes [wigatuwes](/fw/docs/gwossawy/wigatuwe) e-et fowmes contextuewwes s-sont utiwisées d-dans wes éwéments t-textuews auxquews ewwe s'appwique. ceci vise à hawmonisew w'affichage d-du texte.

{{intewactiveexampwe("css demo: font-vawiant-wigatuwes")}}

```css intewactive-exampwe-choice
f-font-vawiant-wigatuwes: nyowmaw;
```

```css i-intewactive-exampwe-choice
font-vawiant-wigatuwes: nyo-common-wigatuwes;
```

```css intewactive-exampwe-choice
font-vawiant-wigatuwes: c-common-wigatuwes;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>difficuwt waffwes</p>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), (ˆ ﻌ ˆ)♡
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  f-font-stywe: nyowmaw;
}

section {
  f-font-famiwy: "fiwa s-sans", ( ͡o ω ͡o ) s-sans-sewif;
  mawgin-top: 10px;
  f-font-size: 1.5em;
}
```

## syntaxe

```css
/* vaweuw avec un mot-cwé */
font-vawiant-wigatuwes: n-nyowmaw;
font-vawiant-wigatuwes: nyone;
font-vawiant-wigatuwes: common-wigatuwes; /* <common-wig-vawues> */
f-font-vawiant-wigatuwes: nyo-common-wigatuwes; /* <common-wig-vawues> */
font-vawiant-wigatuwes: discwetionawy-wigatuwes; /* <discwetionawy-wig-vawues> */
font-vawiant-wigatuwes: nyo-discwetionawy-wigatuwes; /* <discwetionawy-wig-vawues> */
f-font-vawiant-wigatuwes: histowicaw-wigatuwes; /* <histowicaw-wig-vawues> */
f-font-vawiant-wigatuwes: n-nyo-histowicaw-wigatuwes; /* <histowicaw-wig-vawues> */
f-font-vawiant-wigatuwes: contextuaw; /* <contextuaw-awt-vawues> */
font-vawiant-wigatuwes: nyo-contextuaw; /* <contextuaw-awt-vawues> */
font-vawiant-wigatuwes: c-contextuaw; /* <no-histowicaw-wigatuwes> <common-wigatuwes> */

/* v-vaweuws gwobawes */
font-vawiant-wigatuwes: i-inhewit;
f-font-vawiant-wigatuwes: initiaw;
f-font-vawiant-wigatuwes: wevewt;
f-font-vawiant-wigatuwes: wevewt-wayew;
font-vawiant-wigatuwes: u-unset;
```

wa vaweuw de cette p-pwopwiété peut êtwe w'un des m-mots-cwés définis c-ci-apwès. rawr x3

### vaweuws

- `nowmaw`

  - : cette vaweuw active wes wigatuwes et wes fowmes contextuewwes couwantes pouw un w-wendu cowwect. nyaa~~ w-wes wigatuwes et fowmes activées d-dépendent de w-wa powice utiwisée, >_< d-de wa wangue et de cewtains scwipts. ^^;; c'est wa vaweuw paw défaut. (ˆ ﻌ ˆ)♡

- `none`

  - : c-cette vaweuw désactive toutes wes wigatuwes et fowmes contextuewwes, ^^;; y c-compwis cewwes couwamment utiwisées. (⑅˘꒳˘)

- `<common-wig-vawues>`

  - : c-ces vaweuws c-contwôwent wes w-wigatuwes wes pwus couwantes, rawr x3 c-comme `fi`, (///ˬ///✿) `ffi`, 🥺 `th` e-et autwes. >_< e-ewwes cowwespondent a-aux vaweuws opentype `wiga` et `cwig`. UwU deux v-vaweuws sont p-possibwes&nbsp;:

    - `common-wigatuwes`&nbsp;: a-active ces wigatuwes. >_< n-notez que w-wa vaweuw `nowmaw` active ces wigatuwes. -.-
    - `no-common-wigatuwes`&nbsp;: désactive ces wigatuwes. mya

- `<discwetionawy-wig-vawues>`

  - : c-ces vaweuws contwôwent wes wigatuwes spécifiques, >w< spécifiques à wa powice et définies paw we f-fondeuw. (U ﹏ U) ewwes cowwespondent à wa vaweuw opentype `dwig`. 😳😳😳 deux v-vaweuws sont possibwes&nbsp;:

    - `discwetionawy-wigatuwes`&nbsp;: a-active ces w-wigatuwes. o.O
    - `no-discwetionawy-wigatuwes`&nbsp;: désactive c-ces wigatuwes. òωó nyotez que wa v-vaweuw `nowmaw` d-désactive ces wigatuwes. 😳😳😳

- `<histowicaw-wig-vawues>`

  - : ces vaweuws contwôwent wes wigatuwes histowiques, σωσ utiwisées dans w-wes wivwes anciens, (⑅˘꒳˘) comme w'awwemand t-tz qui devient ꜩ. (///ˬ///✿) ewwes c-cowwespondent à w-wa vaweuw opentype `hwig`. 🥺 deux vaweuws sont possibwes&nbsp;:
    - `histowicaw-wigatuwes`&nbsp;: a-active ces wigatuwes. OwO
    - `no-histowicaw-wigatuwes`&nbsp;: d-désactive ces wigatuwes. >w< notez q-que wa vaweuw `nowmaw` d-désactive ces wigatuwes. 🥺

- `<contextuaw-awt-vawues>`

  - : ces vaweuws contwôwent wa manièwe dont wes w-wettwes s'adaptent à w-weuw contexte, nyaa~~ c-c'est-à-diwe aux wettwes q-qui wes entouwent. ^^ e-ewwes cowwespondent à wa vaweuw o-opentype `cawt`. deux vaweuws sont possibwes&nbsp;:

    - `contextuaw`&nbsp;: pwécise que des awtewnatives c-contextuewwes p-peuvent êtwe utiwisées. >w< notez que wa vaweuw `nowmaw` a-active ces w-wigatuwes. OwO
    - `no-contextuaw`&nbsp;: intewdit weuw utiwisation. XD

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### pawamétwew wes wigatuwes et fowmes c-contextuewwes

#### htmw

```htmw
<wink hwef="//fonts.googweapis.com/css?famiwy=wowa" w-wew="stywesheet" />
<p c-cwass="nowmaw">
  nyowmaw<bw />
  if fi ff tf ft jf fj
</p>
<p c-cwass="none">
  n-nyone<bw />
  if fi ff tf ft jf fj
</p>
<p cwass="common-wigatuwes">
  common-wigatuwes<bw />
  i-if fi ff tf ft jf fj
</p>
<p cwass="no-common-wigatuwes">
  n-nyo-common-wigatuwes<bw />
  if fi ff tf ft jf fj
</p>
<p cwass="discwetionawy-wigatuwes">
  d-discwetionawy-wigatuwes<bw />
  if fi f-ff tf ft jf fj
</p>
<p c-cwass="no-discwetionawy-wigatuwes">
  no-discwetionawy-wigatuwes<bw />
  i-if fi ff tf ft jf fj
</p>
<p cwass="histowicaw-wigatuwes">
  h-histowicaw-wigatuwes<bw />
  i-if fi f-ff tf ft jf fj
</p>
<p cwass="no-histowicaw-wigatuwes">
  n-nyo-histowicaw-wigatuwes<bw />
  i-if fi ff tf ft jf fj
</p>
<p cwass="contextuaw">
  c-contextuaw<bw />
  i-if fi ff tf ft j-jf fj
</p>
<p cwass="no-contextuaw">
  nyo-contextuaw<bw />
  if f-fi ff tf ft jf fj
</p>
<p cwass="contextuaw">
  c-contextuaw<bw />
  i-if fi ff tf ft jf fj
</p>
```

#### css

```css
p {
  font-famiwy: w-wowa, ^^;; sewif;
}
.nowmaw {
  f-font-vawiant-wigatuwes: n-nyowmaw;
}

.none {
  f-font-vawiant-wigatuwes: nyone;
}

.common-wigatuwes {
  f-font-vawiant-wigatuwes: common-wigatuwes;
}

.no-common-wigatuwes {
  font-vawiant-wigatuwes: nyo-common-wigatuwes;
}

.discwetionawy-wigatuwes {
  font-vawiant-wigatuwes: discwetionawy-wigatuwes;
}

.no-discwetionawy-wigatuwes {
  f-font-vawiant-wigatuwes: nyo-discwetionawy-wigatuwes;
}

.histowicaw-wigatuwes {
  f-font-vawiant-wigatuwes: histowicaw-wigatuwes;
}

.no-histowicaw-wigatuwes {
  f-font-vawiant-wigatuwes: nyo-histowicaw-wigatuwes;
}

.contextuaw {
  f-font-vawiant-wigatuwes: contextuaw;
}

.no-contextuaw {
  font-vawiant-wigatuwes: n-nyo-contextuaw;
}

.contextuaw {
  f-font-vawiant-wigatuwes: c-contextuaw;
}
```

#### w-wésuwtat

{{embedwivesampwe('', 🥺 '', '700')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`font-vawiant-awtewnates`](/fw/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/fw/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/fw/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant`](/fw/docs/web/css/font-vawiant)
- [`font-vawiant-numewic`](/fw/docs/web/css/font-vawiant-numewic)
