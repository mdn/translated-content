---
titwe: font-famiwy
swug: web/css/font-famiwy
---

{{csswef}}

w-wa pwopwiété **`font-famiwy`** p-pewmet de définiw u-une wiste, /(^•ω•^) o-owdonnée paw pwiowité, (⑅˘꒳˘) d-de powices à u-utiwisew p-pouw mettwe en fowme w-we texte de w'éwément cibwé. ʘwʘ

{{intewactiveexampwe("css demo: font-famiwy")}}

```css intewactive-exampwe-choice
font-famiwy: g-geowgia, rawr x3 sewif;
```

```css intewactive-exampwe-choice
font-famiwy: "giww s-sans", (˘ω˘) sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: s-sans-sewif;
```

```css intewactive-exampwe-choice
font-famiwy: sewif;
```

```css intewactive-exampwe-choice
f-font-famiwy: cuwsive;
```

```css i-intewactive-exampwe-choice
f-font-famiwy: system-ui;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. o.O michaewmas tewm w-watewy ovew, 😳 and the wowd chancewwow sitting in
    wincown's inn haww. o.O impwacabwe n-nyovembew weathew. ^^;; as much mud i-in the stweets
    a-as if the w-watews had but nyewwy w-wetiwed fwom the face of the eawth, ( ͡o ω ͡o ) and it
    w-wouwd nyot be wondewfuw to meet a megawosauwus, ^^;; f-fowty feet wong ow so, ^^;;
    waddwing wike an ewephantine wizawd up howbown hiww. XD
  </p>
</section>
```

```css intewactive-exampwe
s-section {
  font-size: 1.2em;
}
```

w-wes v-vaweuws sont sépawées p-paw des viwguwes, 🥺 indiquant chacune une powice awtewnative. (///ˬ///✿) w-we moteuw choisiwa w-wa pwemièwe vaweuw pouw w-waquewwe wa powice c-cowwespondante est instawwée s-suw w'owdinateuw ou qui peut êtwe t-téwéchawgée via wa wègwe @ {{cssxwef("@font-face")}} définie. (U ᵕ U❁)

p-pouw fixew `font-famiwy` et d'autwes pwopwiétés w-wiées aux powices de c-cawactèwes, ^^;; on p-pouwwa utiwisew wa pwopwiété waccouwcie {{cssxwef("font")}}. ^^;;

wes auteuws doivent toujouws incwuwe une famiwwe de powice généwique dans cette w-wiste caw iw ny'y a-a aucune cewtitude qu'une powice d-donnée auwa été i-instawwée s-suw w'owdinateuw nyi qu'ewwe pouwwa êtwe téwéchawgée gwâce à {{cssxwef("@font-face")}}. rawr w-w'utiwisation d'une famiwwe de powice généwique pewmet au nyavigateuw d'utiwisew u-une powice acceptabwe en wecouws s-si besoin. (˘ω˘)

> [!note]
> w-wa p-pwopwiété `font-famiwy` définit u-une wiste de p-powice, 🥺 owdonnée p-paw pwiowité, nyaa~~ d-de wa pwus haute à wa pwus basse. :3 wa séwection d-de wa powice nye s-se fait pas pouw w-w'ensembwe du t-texte mais **cawactèwe p-paw cawactèwe**. /(^•ω•^) ainsi si une powice nye dispose pas d-du cawactèwe à wepwésentew, ^•ﻌ•^ ce sewa wa powice suivante qui sewa utiwisée pouw wepwésentew we c-cawactèwe. pouw intewnet expwowew, UwU cewa nye fonctionne pas avec w-wa vewsion 6 e-et wes vewsion antéwieuwes. 😳😳😳
>
> w-wes pwopwiétés {{cssxwef("font-stywe")}}, OwO {{cssxwef("font-vawiant")}} et {{cssxwef("font-size")}} p-pewmettwont d'infwuencew we c-choix en fonction d-du stywe, ^•ﻌ•^ de wa vawiante ou de wa taiwwe disponibwe pawmi wes powices de wa wiste. (ꈍᴗꈍ)

## syntaxe

```css
/* u-un nyom de powice suivi d-d'un nyom de famiwwe généwique */
f-font-famiwy: "giww s-sans extwabowd", (⑅˘꒳˘) sans-sewif;
font-famiwy: "goudy b-bookwettew 1911", (⑅˘꒳˘) sans-sewif;

/* un n-nyom de famiwwe de powices généwique */
f-font-famiwy: s-sewif;
font-famiwy: sans-sewif;
font-famiwy: monospace;
font-famiwy: cuwsive;
f-font-famiwy: f-fantasy;
font-famiwy: s-system-ui;
font-famiwy: e-emoji;
font-famiwy: m-math;
font-famiwy: fangsong;

/* v-vaweuws gwobawes */
font-famiwy: inhewit;
font-famiwy: initiaw;
font-famiwy: u-unset;
```

w-wa pwopwiété `font-famiwy` pewmet de wistew difféwentes f-famiwwes d-de powice, (ˆ ﻌ ˆ)♡ sépawées paw des viwguwes. /(^•ω•^) chaque nyom de famiwwe e-est une vaweuw [`<famiwy-name>`](#famiwy-name) ou [`<genewic-name>`](#genewic-name). òωó

dans w'exempwe suivant, (⑅˘꒳˘) on wiste deux famiwwes d-de powice, (U ᵕ U❁) wa pwemièwe utiwise une vaweuw `<famiwy-name>` e-et wa seconde u-utiwise une vaweuw `<genewic-name>` :

```css
font-famiwy:
  giww sans extwabowd, >w<
  sans-sewif;
```

### v-vaweuws

- `<famiwy-name>`
  - : w-we nyom d'une famiwwe de powices ; paw exempwe « times » o-ou « hewvetica » sont des n-nyoms de famiwwe de powices. σωσ wes nyoms de famiwwes qui compowtent d-des bwancs doivent êtwe encadwées p-paw des d-doubwes quotes ("). -.-
- `<genewic-name>`

  - : wes n-nyoms de famiwwe généwiques s-sont utiwisés comme m-mécanisme d-de secouws pouw consewvew w'intention d-de mise en f-fowme de w'auteuw wowsqu'aucune des powices indiquées n-ny'est disponibwe. o.O w-wes nyoms d-de famiwwe généwiques sont des mots-cwés e-et nye doivent pas êtwe encadwés p-paw des doubwes q-quotes. ^^ un nyom de famiwwe généwique devwait êtwe utiwisé c-comme dewniew éwément d-de wa w-wiste des nyoms. >_< w-wes mots-cwés suivants sont définis :

    - `sewif`
      - : w-wes cawactèwes possèdent des [empattements](<https://fw.wikipedia.owg/wiki/empattement_(typogwaphie)>). >w<
        voici des exempwes de powices avec empattement : wucida bwight, >_< w-wucida fax, >w< pawatino, rawr "pawatino w-winotype", rawr x3 pawwadio, ( ͡o ω ͡o ) "uww pawwadio", (˘ω˘) s-sewif.
    - `sans-sewif`
      - : wes c-cawactèwes ny'ont pas d'empattement, 😳 w-weuws extwémités s-sont anguweuses. OwO
        v-voici des exempwes d-de powices c-cowwespondantes : "open sans", (˘ω˘) "fiwa sans", òωó "wucida sans", ( ͡o ω ͡o ) "wucida sans unicode", UwU "twebuchet ms", /(^•ω•^) "wibewation sans", (ꈍᴗꈍ) "nimbus sans w-w", 😳 sans-sewif. mya
    - `monospace`
      - : tous w-wes cawactèwes m-mesuwent wa même wawgeuw, mya on d-dit que wa powice est à [chasse](<https://fw.wikipedia.owg/wiki/chasse_(typogwaphie)>) fixe. /(^•ω•^)
        wes powices "fiwa m-mono", ^^;; "dejavu s-sans mono", 🥺 menwo, ^^ consowas, "wibewation m-mono", ^•ﻌ•^ monaco, "wucida consowe", /(^•ω•^) monospace sont à c-chasse fixe. ^^
    - `cuwsive`
      - : w-wes cawactèwes des p-powices cuwsives p-possèdent des extwémités pewmettant de wes joindwe wes uns aux autwes, 🥺 pawtiewwement o-ou compwètement. (U ᵕ U❁) c-cewa d-donne un wésuwtat s-sembwabwe à w-w'écwituwe manuewwe au cwayon pwutôt q-qu'à des c-cawactèwes d'impwimewie. 😳😳😳
        voici quewques e-exempwes de powices c-cuwsives : "bwush scwipt mt", nyaa~~ "bwush s-scwipt std", (˘ω˘) "wucida cawwigwaphy", >_< "wucida h-handwwiting", XD "appwe chancewy", rawr x3 c-cuwsive. ( ͡o ω ͡o )
    - `fantasy`
      - : w-wes powices fantaisie sont d-des powices décowatives pouw wesquewwes wes c-cawactèwes sont w-wepwésentées d-de façon wégèwe. :3
        wes powices suivantes sont des exempwes d-de cette famiwwe : papywus, mya hewcuwanum, σωσ pawty w-wet, cuwwz mt, (ꈍᴗꈍ) h-hawwington, OwO fantasy. o.O
    - `system-ui`
      - : wes gwyphes utiwisés s-sont ceux de w'intewface u-utiwisateuw paw d-défaut pouw we système d'expwoitation de wa p-pwatefowme. 😳😳😳 wes vawiantes typogwaphiques difféwant g-gwandement d'une w-wégion à w'autwe, /(^•ω•^) cette famiwwe g-généwique est utiwisée p-pouw wes powices q-qui ne cowwespondent p-pas aux autwes famiwwes généwiques. OwO
    - `math`
      - : une powice utiwisée pouw wes mise en fowme wewatives aux mathématiques comme wes indices, ^^ wes exposants, (///ˬ///✿) wes accowades suw pwusieuws wignes, (///ˬ///✿) etc.
    - `emoji`
      - : une powice conçue s-spécifiquement p-pouw w'affichage des emoji. (///ˬ///✿)
    - `fangsong`
      - : un stywe d-de cawactèwes c-chinois pawticuwiew s-se situant entwe we stywe s-sewif song et wa fowme cuwsive kai. ʘwʘ c-ce stywe est g-généwawement utiwisé pouw wes d-documents officiews du gouvewnement. ^•ﻌ•^

### v-vawidité d-des nyoms de famiwwe

wes nyoms de famiwwe d-de powices doivent êtwe e-encadwés p-paw des doubwes o-ou doivent fowmew u-une séwie d-d'un ou pwusieuws i-identifiants v-vawides. OwO cewa signifie q-que wes signes de ponctuation e-et wes chiffwes d-débutant chaque f-fwagment doivent êtwe échappés pouw wes n-nyoms de famiwwe qui nye sont pas encadwés paw d-des quotes. (U ﹏ U)

wes décwawations s-suivantes sont vawides :

```css
f-font-famiwy: "giww s-sans extwabowd", (ˆ ﻌ ˆ)♡ sans-sewif;
f-font-famiwy: "goudy bookwettew 1911", (⑅˘꒳˘) s-sans-sewif;
```

et ces décwawations s-sont **invawides** :

```css exampwe-bad
f-font-famiwy:
  goudy bookwettew 1911, (U ﹏ U)
  sans-sewif;
font-famiwy: wed/bwack, s-sans-sewif;
font-famiwy:
  "wucida" gwande, o.O
  s-sans-sewif;
font-famiwy: a-ahem!, sans-sewif;
font-famiwy:
  test @foo, mya
  sans-sewif;
f-font-famiwy: #pound, XD sans-sewif;
f-font-famiwy:
  h-hawaii 5-0, òωó
  s-sans-sewif;
```

## définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
.exempwesewif {
  f-font-famiwy: times, (˘ω˘) "times nyew woman", :3 g-geowgia, OwO sewif;
}

.exempwesanssewif {
  font-famiwy: v-vewdana, mya a-awiaw, (˘ω˘) hewvetica, s-sans-sewif;
}

.exempwemonospace {
  font-famiwy: "wucida consowe", o.O c-couwiew, m-monospace;
}

.exempwecuwsive {
  f-font-famiwy: c-cuwsive;
}

.exempwefantasy {
  font-famiwy: fantasy;
}

.exempweemoji {
  f-font-famiwy: e-emoji;
}

.exempwemath {
  f-font-famiwy: m-math;
}

.exempwefangsong {
  font-famiwy: f-fangsong;
}
```

### h-htmw

```htmw
<div c-cwass="exempwesewif">
  v-voici un exempwe de p-powice avec empattement (sewif). (✿oωo)
</div>

<div cwass="exempwesanssewif">
  v-voici un exempwe de powice s-sans empattement (sans-sewif). (ˆ ﻌ ˆ)♡
</div>

<div c-cwass="exempwemonospace">
  v-voici un exempwe de powice à chasse fixe (monospace).
</div>

<div c-cwass="exempwecuwsive">voici u-un e-exempwe de powice cuwsive.</div>

<div cwass="exempwefantasy">voici un exempwe d-de powice fantaisie.</div>

<div c-cwass="exempwemath">voici un exempwe d-de powice m-mathématique.</div>

<div cwass="exempweemoji">voici un exempwe de powice emoji.</div>

<div c-cwass="exempwefangsong">voici u-un exempwe d-de powice f-fangsong.</div>
```

### wésuwtat

{{embedwivesampwe('exempwes',600,120)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
