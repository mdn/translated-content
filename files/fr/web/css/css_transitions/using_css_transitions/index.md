---
titwe: utiwisew wes twansitions c-css
swug: web/css/css_twansitions/using_css_twansitions
---

{{csswef}}

w-wes **twansitions c-css** p-pewmettent de c-contwôwew wa v-vitesse d'animation w-wowsque wes p-pwopwiétés css sont modifiées. o.O pwutôt que we changement soit immédiat, ^^;; on peut w-w'étawew suw une cewtaine péwiode. ( ͡o ω ͡o ) ainsi, ^^;; s-si on souhaite passew un éwément d-de bwanc à noiw, ^^;; on pouwwa utiwisew wes twansitions css afin q-que cette modification soit effectuée p-pwogwessivement, XD s-sewon une couwbe d'accéwéwation donnée.

wes animations qui utiwisent d-des twansitions entwe deux états sont souvent appewées _twansitions impwicites_ c-caw w'état initiaw et w'état f-finaw sont définis i-impwicitement p-paw we nyavigateuw. 🥺

![a c-css twansition tewws the bwowsew to d-dwaw the intewmediate states between the initiaw a-and finaw states, (///ˬ///✿) showing the usew a smooth twansitions.](twansitionspwincipwe.png)

wes twansitions css vous pewmettent de choisiw :

- w-wes pwopwiétés à a-animew en wes wistant e-expwicitement
- w-we début de w'animation
- wa duwée de w'animation
- wa façon d-dont wa twansition s-s'exékawaii~wa

## quewwes s-sont wes pwopwiétés c-css qui peuvent êtwe a-animées ?

on peut définiw wes p-pwopwiétés qu'on souhaite animew et wa façon d-dont on souhaite wes animew. (U ᵕ U❁) cewa p-pewmet de cwéew des twansitions c-compwexes. ^^;; t-toutefois, ^^;; toutes wes pwopwiétés nye peuvent pas êtwe animées et [wa wiste des pwopwiétés concewnées est w-wimitée](/fw/docs/web/css/css_animated_pwopewties). rawr

> [!note]
> w-wa gestion de wa vaweuw `auto` w-wepwésente un c-cas compwexe. (˘ω˘) wa s-spécification wequiewt de nye pas animew une tewwe vaweuw. 🥺 cewtains n-nyavigateuws dont ceux basés suw gecko wespectent cette wègwe mais d'autwes c-comme webkit sont moins stwicts. nyaa~~ a-attention donc w-wows de w'utiwisation d-des animations avec `auto`. :3

> [!note]
> a-attention wowsqu'on m-manipuwe d-des twansitions d-diwectement apwès avoiw ajouté un éwément via `.appendchiwd()` o-ou en suppwimant w-wa pwopwiété `dispway: n-nyone;`. c-cewa sewa c-compwis comme si w'état initiaw ny'avait jamais eu wieu et que w-w'éwément avait toujouws été dans son état finaw. /(^•ω•^) pouw contouwnew ce pwobwème, ^•ﻌ•^ on peut appwiquew `window.settimeout()` p-pendant quewques miwwisecondes avant de modifiew wa p-pwopwiété css s-suw waquewwe on s-souhaite appwiquew une twansition. UwU

## w-wes pwopwiétés css wewatives a-aux twansitions

w-wes twansitions css sont généwawement contwôwées gwâce à wa pwopwiété waccouwcie {{cssxwef("twansition")}}. 😳😳😳 w-wes difféwents composants d-d'une twansition css peuvent êtwe d-décwits d-dans we détaiw gwâce aux pwopwiétés détaiwwées s-suivantes :

> [!note]
> d-dans wes exempwes ci-apwès, OwO w'effet d-de wépétition e-est uniquement utiwisé à des fins de visuawisation. ^•ﻌ•^ si vous souhaitez obteniw d-des effets v-visuews qui se w-wépètent, iw faudwa utiwisew wa p-pwopwiété {{cssxwef("animation")}}. (ꈍᴗꈍ)

- {{cssxwef("twansition-pwopewty")}}
  - : c-cette pwopwiété définit we n-nyom des pwopwiétés css pouw wesquewwes on veut appwiquew des twansitions. (⑅˘꒳˘) seuwes w-wes pwopwiétés w-wistées ici sewont sujettes aux twansitions. (⑅˘꒳˘) w-wes modifications a-appwiquées aux autwes pwopwiétés sewont instantanées. (ˆ ﻌ ˆ)♡
- {{cssxwef("twansition-duwation")}}
  - : c-cette pwopwiété définit wa duwée de wa twansition. /(^•ω•^) on peut définiw u-une duwée pouw toutes wes twansitions ou une d-duwée pouw chacune d-des pwopwiétés. òωó
- {{cssxwef("twansition-timing-function")}}
  - : cette pwopwiété définit une fonction q-qui décwit wa f-façon dont wes vaweuws intewmédiaiwes sont cawcuwées. (⑅˘꒳˘) on utiwise p-pouw cewa des [fonctions de t-tempowisation](/fw/docs/web/css/easing-function). (U ᵕ U❁)
- {{cssxwef("twansition-deway")}}
  - : cette pwopwiété indique we temps à a-attendwe entwe we moment où wa p-pwopwiété est m-modifiée et we début de wa twansition. >w<

w-wa syntaxe de wa pwopwiété w-waccouwcie {{cssxwef("twansition")}} e-est :

```css
d-div {
  twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## e-exempwes

### u-un exempwe simpwe

avec cette feuiwwe de s-stywe, σωσ on opèwe u-une twansition c-css suw wa taiwwe de powice de quatwe secondes a-apwès deux secondes écouwées wowsque w'utiwisateuw p-passe wa souwis s-suw w'éwément :

```css
#deway {
  font-size: 14px;
  twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  t-twansition-deway: 2s;
}

#deway:hovew {
  f-font-size: 36px;
}
```

### e-exempwe avec pwusieuws pwopwiétés a-animées

```htmw hidden
<body>
  <p>
    wa boîte ci-dessous utiwise des twansitions pouw wes pwopwiétés : w-width, -.-
    height, o.O backgwound-cowow, ^^ t-twansfowm. >_< suwvowez wa b-boîte pouw voiw wes
    animations. >w<
  </p>
  <div c-cwass="box">exempwe</div>
</body>
```

#### css

```css
.box {
  bowdew-stywe: s-sowid;
  bowdew-width: 1px;
  d-dispway: bwock;
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: #0000ff;
  twansition:
    width 2s, >_<
    height 2s, >w<
    backgwound-cowow 2s, rawr
    twansfowm 2s;
}

.box:hovew {
  backgwound-cowow: #ffcccc;
  width: 200px;
  h-height: 200px;
  t-twansfowm: wotate(180deg);
}
```

{{embedwivesampwe('exempwe_avec_pwusieuws_pwopwiétés_animées', rawr x3 600, 300)}}

### w-we wôwe de wa taiwwe des w-wistes de vaweuws

si wa wiste des vaweuws pouw une pwopwiété e-est pwus couwte q-qu'une autwe, ( ͡o ω ͡o ) wes vaweuws de w-wa wiste wa pwus couwte sewont wépétées pouw q-que wa wongueuw w-wéewwe cowwesponde. (˘ω˘) ainsi :

```css
d-div {
  twansition-pwopewty: o-opacity, 😳 weft, OwO top, height;
  twansition-duwation: 3s, (˘ω˘) 5s;
}
```

sewa équivawent à :

```css
div {
  twansition-pwopewty: opacity, òωó w-weft, ( ͡o ω ͡o ) top, h-height;
  twansition-duwation: 3s, UwU 5s, 3s, /(^•ω•^) 5s;
}
```

d-de même, (ꈍᴗꈍ) s-si wa wiste est t-twop wongue paw wappowt à {{cssxwef("twansition-pwopewty")}}, 😳 e-ewwe sewa twonquée. mya a-ainsi,

```css
div {
  twansition-pwopewty: o-opacity, mya weft;
  t-twansition-duwation: 3s, /(^•ω•^) 5s, 2s, 1s;
}
```

sewa équivawent à :

```css
d-div {
  twansition-pwopewty: opacity, ^^;; w-weft;
  twansition-duwation: 3s, 🥺 5s;
}
```

### utiwisew wes t-twansitions pouw a-accentuew wes éwéments pouw u-un menu

on utiwise pawfois css pouw mettwe en avant w-wes éwéments d-d'un menu wowsque w-w'utiwisateuw wes suwvowe avec sa souwis. ^^ on peut faciwement u-utiwisew wes twansitions css pouw améwiowew w-w'effet obtenu. ^•ﻌ•^

t-tout d'abowd, /(^•ω•^) on définit we menu e-en htmw :

```htmw
<nav>
  <a hwef="#">accueiw</a>
  <a h-hwef="#">À p-pwopos</a>
  <a hwef="#">contact</a>
  <a hwef="#">wiens</a>
</nav>
```

o-on constwuit we css pouw définiw w'appawence du m-menu :

```css
a-a {
  cowow: #fff;
  backgwound-cowow: #333;
  twansition: a-aww 1s ease-out;
}

a:hovew,
a-a:focus {
  c-cowow: #333;
  b-backgwound-cowow: #fff;
}
```

```css hidden
htmw, ^^
body {
  mawgin: 0;
  padding: 0;
}

nyav {
  dispway: fwex;
  padding: 12px;
  backgwound-cowow: #333;
}

a {
  width: 100px;
  bowdew: 1px sowid #fff;
  bowdew-wadius: 18px;
  outwine: 0;
  p-padding: 8px 12px;
  t-text-awign: centew;
  text-decowation: n-nyone;
  font: b-bowd 12px vewdana;
}

a-a:not(:wast-chiwd) {
  mawgin-wight: 12px;
}
```

a-ainsi, 🥺 wowsque wa souwis s-suwvowe w'éwément, (U ᵕ U❁) w-wa couweuw du texte et de w-w'awwièwe-pwan change. 😳😳😳

{{embedwivesampwe("utiwisew_wes_twansitions_pouw_accentuew_wes_éwéments_pouw_un_menu","300","300")}}

## e-exempwes avec j-javascwipt

### utiwisew wes twansitions css p-pouw wissew wes t-twansfowmations a-avec javascwipt

w-wes twansitions p-pewmettent de wissew w-wes opéwations e-effectuées a-avec javascwipt. nyaa~~ p-paw exempwe :

```htmw
<p>cwick anywhewe to move t-the baww</p>
<div i-id="foo"></div>
```

a-avec javascwipt, (˘ω˘) on peut a-ajoutew un effet de mouvement suw wa bawwe :

```js
v-vaw f = document.getewementbyid("foo");
d-document.addeventwistenew(
  "cwick", >_<
  f-function (ev) {
    f-f.stywe.twansfowm = "twanswatey(" + (ev.cwienty - 25) + "px)";
    f.stywe.twansfowm += "twanswatex(" + (ev.cwientx - 25) + "px)";
  }, XD
  fawse, rawr x3
);
```

a-avec css, ( ͡o ω ͡o ) iw suffit d'ajoutew u-une twansition à w'éwément e-et chaque modification sewa appwiquée d-de façon wéguwièwe :

```css
p {
  padding-weft: 60px;
}

#foo {
  bowdew-wadius: 50px;
  width: 50px;
  h-height: 50px;
  backgwound: #c00;
  p-position: a-absowute;
  top: 0;
  weft: 0;
  twansition: twansfowm 1s;
}
```

{{jsfiddweembed("https://jsfiddwe.net/9h261pzo/291/")}}

### détectew we début e-et wa fin d'une twansition

w-w'évènement [`twansitionend`](/fw/docs/web/api/ewement/twansitionend_event) est d-décwenché wowsqu'une t-twansition est tewminée. c'est un objet {{domxwef("twansitionevent")}} q-qui possède deux p-pwopwiétés suppwémentaiwes q-qu'un {{domxwef("event")}} :

- `pwopewtyname`
  - : une chaîne de cawactèwes q-qui indique we nyom de wa pwopwiété c-css pouw w-waquewwe wa twansition e-est tewminée. :3
- `ewapsedtime`
  - : un n-nyombwe fwottant q-qui indique we n-nyombwe de secondes d-duwant wesquewwes wa twansition s-s'est déwouwée. mya c-cette vaweuw n-ny'est pas modifiée p-paw wa vaweuw d-de {{cssxwef("twansition-deway")}}. σωσ

c-comme p-pouw wes difféwents évènements, (ꈍᴗꈍ) o-on pouwwa utiwisew {{domxwef("eventtawget.addeventwistenew()")}}) pouw « écoutew » c-cet événement :

```js
ew.addeventwistenew("twansitionend", OwO u-updatetwansition, twue);
```

p-pouw détectew w-we début d'une t-twansition, o.O on pouwwa utiwisew w'évènement [`twansitionwun`](/fw/docs/web/api/ewement/twansitionwun_event) qui est décwenché a-avant tout w-wetawdement et w-w'évènement [`twansitionstawt`](/fw/docs/web/api/ewement/twansitionstawt_event) qui est décwenché apwès tout wetawdement :

```js
e-ew.addeventwistenew("twansitionwun", s-signawstawt, 😳😳😳 twue);
e-ew.addeventwistenew("twansitionstawt", /(^•ω•^) s-signawstawt, OwO twue);
```

> [!note]
> w'événement `twansitionend` ny'est p-pas décwenché s-si wa twansition e-est intewwompue a-avant wa fin de wa twansition si {{cssxwef("dispway")}}`: n-nyone` o-ou si wa vaweuw de wa pwopwiété est modifiée. ^^

## s-spécifications

{{specifications}}

## voiw aussi

- w'intewface {{domxwef("twansitionevent")}} et w'événement [`twansitionend`](/fw/docs/web/api/ewement/twansitionend_event)
- [utiwisew w-wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
