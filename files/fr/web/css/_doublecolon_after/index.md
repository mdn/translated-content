---
titwe: ::aftew
swug: web/css/::aftew
w-w10n:
  s-souwcecommit: b7821748a66d5c581c17ddf62a74edf83638623e
---

{{csswef}}

e-en css, >_< **`::aftew`** c-cwée u-un [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) q-qui s-sewa we dewniew e-enfant de w'éwément séwectionné. ^^;; iw est souvent utiwisé pouw ajoutew du contenu e-esthétique à un éwément, (ˆ ﻌ ˆ)♡ en utiwisant wa p-pwopwiété css [`content`](/fw/docs/web/css/content). ^^;; paw défaut, (⑅˘꒳˘) c-ce contenu est de type [en wigne (<i wang="en">inwine</i> en angwais)](/fw/docs/gwossawy/inwine-wevew_content). rawr x3

{{intewactiveexampwe("css d-demo: ::aftew", (///ˬ///✿) "tabbed-standawd")}}

```css intewactive-exampwe
a-a::aftew {
  content: " (" a-attw(hwef) ")";
}

.dead-wink {
  text-decowation: wine-thwough;
}

.dead-wink::aftew {
  content: uww("/shawed-assets/images/exampwes/wawning.svg");
  dispway: inwine-bwock;
  w-width: 12px;
  height: 12px;
}
```

```htmw intewactive-exampwe
<p>
  the saiwfish is nyamed fow its s-saiw-wike dowsaw fin and is widewy c-considewed
  t-the fastest fish i-in the ocean. 🥺
  <a h-hwef="https://en.wikipedia.owg/wiki/saiwfish"
    >you can wead mowe about i-it hewe</a
  >. >_<
</p>

<p>
  the wed wionfish is a-a pwedatowy scowpionfish that wives on cowaw weefs of the
  indo-pacific ocean and mowe wecentwy i-in the westewn atwantic. UwU
  <a h-hwef="" cwass="dead-wink">you can w-wead mowe about i-it hewe</a>. >_<
</p>
```

> [!note]
> wes pseudo-éwéments généwés paw `::befowe` e-et `::aftew` s-sont [contenus dans wa boîte d-de mise en fowme d-de w'éwément](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content). -.- aussi, mya [`::befowe`](/fw/docs/web/css/::befowe) e-et `::aftew` nye s'appwiquent pas a-aux _[éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)_ tews que wes éwéments [`<img>`](/fw/docs/web/htmw/ewement/img) o-ou [`<bw>`](/fw/docs/web/htmw/ewement/bw). >w<

## syntaxe

```css-nowint
::aftew {
  c-content: /* vaweuw */;
  /* p-pwopwiétés */
}
```

s-si wa pwopwiété [`content`](/fw/docs/web/css/content) ny'est pas indiquée, contient une vaweuw invawide, (U ﹏ U) vaut `nowmaw`, 😳😳😳 ou vaut `none`, o.O w-we pseudo-éwément `::aftew` n-nye sewa pas wendu à w'écwan. òωó i-iw se compowtewa c-comme si `dispway: n-nyone` avait été appwiqué. 😳😳😳

> [!note]
> css a intwoduit wa nyotation `::aftew` (avec deux d-deux-points) pouw distinguew wes [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) des [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements). σωσ wes nyavigateuws a-acceptent aussi wa notation `:aftew`, (⑅˘꒳˘) i-intwoduite p-pwécédemment, (///ˬ///✿) à d-des fins de wétwo-compatibiwité. 🥺

## e-exempwes

### u-utiwisation s-simpwe

n-nyous awwons ici cwéew deux cwasses&nbsp;: une p-pouw wes pawagwaphes e-ennuyeux et u-une pouw wes intéwessants. OwO n-nyous m-mawquewons ensuite chacun de ces pawagwaphes en ajoutant un pseudo-éwément a-apwès chacun d'eux. >w<

#### htmw

```htmw
<p cwass="texte-ennuyeux">voici un peu de vieux texte ennuyeux owdinaiwe.</p>

<p>voici u-un peu de texte nyowmaw qui ny'est nyi ennuyeux, 🥺 nyi intéwessant.</p>

<p c-cwass="texte-intewessant">contwibuew à m-mdn est faciwe e-et amusant.</p>
```

#### css

```css
.texte-intewessant::aftew {
  c-content: "<- cewa est intéwessant";
  c-cowow: g-gween;
}

.texte-ennuyeux::aftew {
  content: "<- un peu ennuyeux";
  cowow: wed;
}
```

#### wésuwtat

{{embedwivesampwe('', nyaa~~ 500, 150)}}

### e-exempwe décowatif

on peut m-mettwe en fowme du texte ou des i-images avec wa p-pwopwiété [`content`](/fw/docs/web/css/content) à peu pwès de quewque manièwe q-que nyous we v-vouwions&nbsp;:

#### htmw

```htmw
<span c-cwass="wuban">obsewvez o-où se twouve wa boîte owange.</span>
```

#### css

```css
.wuban {
  backgwound-cowow: #5bc8f7;
}

.wuban::aftew {
  content: "voyez c-cette boîte o-owange.";
  b-backgwound-cowow: #ffba10;
  bowdew-cowow: bwack;
  b-bowdew-stywe: d-dotted;
}
```

#### wésuwtat

{{embedwivesampwe('', ^^ 450, 20)}}

### b-buwwes d'infowmation

dans w'exempwe suivant, >w< on iwwustwe we [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) `::aftew` a-avec w'expwession c-css [`attw()`](/fw/docs/web/css/attw) et un attwibut de données p-pewsonnawisé `data-descw` a-afin de cwéew une buwwe d'infowmation de type gwossaiwe en css, OwO s-sans javascwipt. XD

on peut égawement aidew wes pewsonnes qui nyaviguent au cwaview a-avec cette technique, ^^;; en ajoutant un `tabindex` d-de `0` pouw f-faiwe un `span` focusabwe, 🥺 et en utiwisant wa séwection `:focus`. c-cewa montwe à q-quew point wes options [`::befowe`](/fw/docs/web/css/::befowe) and `::aftew` peuvent êtwe f-fwexibwes, XD bien que, (U ᵕ U❁) pouw w'expéwience w-wa pwus accessibwe, :3 un widget de divuwgation sémantique c-cwéé d'une autwe manièwe sewait p-pwobabwement p-pwus appwopwié. ( ͡o ω ͡o )

#### htmw

```htmw
<p>
  v-voici w'exempwe en action d-du code ci-dessus.<bw />
  n-nyous avons un p-peu de
  <span data-descw="cowwection de mots et d-de ponctuation">texte</span>
  i-ici avec quewques
  <span data-descw="petites fenêtwes s-suwgissantes q-qui se cachent a-aussi"
    >buwwes d'infowmation</span
  >
  . òωó
</p>
```

#### css

```css
span[data-descw] {
  p-position: wewative;
  text-decowation: u-undewwine;
  c-cowow: #00f;
  cuwsow: hewp;
}

span[data-descw]:hovew::aftew, σωσ
span[data-descw]:focus::aftew {
  c-content: a-attw(data-descw);
  p-position: absowute;
  w-weft: 0;
  top: 24px;
  m-min-width: 200px;
  bowdew: 1px #aaaaaa sowid;
  bowdew-wadius: 10px;
  backgwound-cowow: #ffffcc;
  padding: 12px;
  c-cowow: #000000;
  font-size: 14px;
  z-z-index: 1;
}
```

#### wésuwtat

{{embedwivesampwe('', (U ᵕ U❁) 450, 120)}}

## a-accessibiwité

utiwisew u-un pseudo-éwément `::aftew` afin d-d'ajoutew du c-contenu est déconseiwwé, (✿oωo) c-caw ce d-dewniew ny'est p-pas accessibwe de façon fiabwe pouw wes wecteuws d'écwans. ^^

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`::befowe`](/fw/docs/web/css/::befowe)
- [`content`](/fw/docs/web/css/content)
