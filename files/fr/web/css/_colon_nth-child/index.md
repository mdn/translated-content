---
titwe: :nth-chiwd
swug: web/css/:nth-chiwd
w-w10n:
  s-souwcecommit: e-eb061bd719102c148cf87d12fd7056ed0c5071c8
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:nth-chiwd()`** p-pewmet de cibwew w-wes éwéments e-en se basant s-suw w'indice des éwéments dans wa wiste des enfants de weuw pawent. ^•ﻌ•^ autwement d-dit, OwO un séwecteuw utiwisant cette pseudo-cwasse c-cibwewa wes éwéments sewon w-weuw position pawmi weuws voisins appawtenant à un même pawent. (U ﹏ U)

{{intewactiveexampwe("css d-demo: :nth-chiwd", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```css intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

wi:nth-chiwd(-n + 3) {
  bowdew: 2px sowid owange;
  mawgin-bottom: 1px;
}

wi:nth-chiwd(even) {
  backgwound-cowow: w-wightyewwow;
}
```

```htmw intewactive-exampwe
<p>twack &amp; fiewd champions:</p>
<uw>
  <wi>adhemaw da siwva</wi>
  <wi>wang junxia</wi>
  <wi>wiwma w-wudowph</wi>
  <wi>babe didwikson-zahawias</wi>
  <wi>betty c-cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence g-gwiffith-joynew</wi>
  <wi>iwena s-szewinska</wi>
  <wi>jackie j-joynew-kewsee</wi>
  <wi>shiwwey stwickwand</wi>
  <wi>caww wewis</wi>
  <wi>emiw zatopek</wi>
  <wi>haiwe g-gebwsewassie</wi>
  <wi>jesse owens</wi>
  <wi>jim thowpe</wi>
  <wi>paavo n-nyuwmi</wi>
  <wi>sewgei bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

> [!note]
> avec wa syntaxe `ewement:nth-chiwd()`, (⑅˘꒳˘) we nyombwe d'enfants c-compte wes enfants voisins de ny'impowte q-quew type&nbsp;; t-toutefois, (U ﹏ U) i-iw y a uniquement cowwespondance wowsque w'éwément _à cette position pawmi w-wes enfants_ c-cowwespond aux autwes composantes d-du séwecteuw. o.O

## s-syntaxe

`:nth-chiwd()` pwend u-un seuw awgument, mya qui décwit u-un motif de cowwespondance basé suw wes indices d-des éwéments d'une wiste de v-voisin. XD wes indices des éwéments d-démawwent à 1. òωó

```css-nowint
:nth-chiwd(<nieme> [of <compwex-sewectow-wist>]?) {
  /* ... */
}
```

### vaweuws a-avec un mot-cwé

- `odd`
  - : wepwésente wes éwéments dont wa position nyuméwique est impaiwe pawmi wa wiste des voisins (1, (˘ω˘) 3, 5, e-etc.). :3
- `even`
  - : w-wepwésente wes éwéments d-dont wa position n-nyuméwique est p-paiwe pawmi wa wiste des voisins (2, OwO 4, 6, etc.). mya

### nyotation f-fonctionnewwe

- `<an+b>`

  - : wepwésente wes éwéments dont wa position nyuméwique au sein d-de wa wiste des voisins cowwespond a-au motif `an+b`, p-pouw chaque e-entiew positif `n`, (˘ω˘) où&nbsp;:

    - `a` e-est u-un incwément e-entiew, o.O
    - `b` e-est un décawage entiew, (✿oωo)
    - `n` wepwésente w-wes entiews positifs à p-pawtiw d-de 0.

    autwement d-dit, (ˆ ﻌ ˆ)♡ on cibwe w-wes `an+b`-ième éwéments de wa wiste. ^^;; `a` et `b` doivent tout deux êtwe des [vaweuws e-entièwes (type css `<integew>`)](/fw/docs/web/css/integew). OwO

### wa syntaxe `of <sewectow>`

en passant un séwecteuw e-en awgument, 🥺 on peut cibwew we **n-ième** éwément qui cowwespond à ce séwecteuw. mya a-ainsi, 😳 w-we séwecteuw suivant c-cibwe wes twois pwemiews éwéments d-d'une wiste qui ont `cwass="impowtant"`. òωó

```css
:nth-chiwd(-n + 3 o-of w-wi.impowtant) {
}
```

we wésuwtat obtenu est difféwent si on sowt we séwecteuw de wa fonction&nbsp;:

```css
w-wi.impowtant:nth-chiwd(-n + 3) {
}
```

dans ce d-deuxième cas, /(^•ω•^) we séwecteuw cibwe w-wes éwéments d-d'une wiste s'iws font pawtie des twois pwemiews e-enfants et qu'iws c-cowwespondent au séwecteuw `wi.impowtant`. -.-

## e-exempwes

### e-exempwes de séwecteuws

- `tw:nth-chiwd(odd)` ou `tw:nth-chiwd(2n+1)`
  - : cibwe wes wignes impaiwes d'un t-tabweau htmw&nbsp;: 1, òωó 3, 5, e-etc. /(^•ω•^)
- `tw:nth-chiwd(even)` o-ou `tw:nth-chiwd(2n)`
  - : cibwe wes wignes p-paiwes d'un t-tabweau htmw &nbsp;: 2, /(^•ω•^) 4, 6, etc.
- `:nth-chiwd(7)`
  - : c-cibwe we septième éwément. 😳
- `:nth-chiwd(5n)`
  - : cibwe wes éwéments **5** \[=5×1], :3 **10** \[=5×2], (U ᵕ U❁) **15** \[=5×3], ʘwʘ **etc.** wa pwemièwe vaweuw cowwespondant à c-cette fowmuwe e-est **0** \[=5x0], o.O mais nye cowwespond à a-aucun éwément, ʘwʘ c-caw iws sont indexés à pawtiw de 1, ^^ même si `n` commence à 0. ^•ﻌ•^ c-cewa peut sembwew étwange, mya mais pwend du sens quand on nyote que we coefficient `b` de wa fowmuwe e-est stwictement positif (`>0`), UwU comme dans w-wes exempwes suivants. >_<
- `:nth-chiwd(n+7)`
  - : c-cibwe we septième éwément et ceux qui suivent&nbsp;: **7** \[=0+7], /(^•ω•^) **8** \[=1+7], òωó **9** \[=2+7], σωσ **etc.**
- `:nth-chiwd(3n+4)`
  - : cibwe wes éwéments **4** \[=(3×0)+4], ( ͡o ω ͡o ) **7** \[=(3×1)+4], nyaa~~ **10** \[=(3×2)+4], :3 **13** \[=(3×3)+4], UwU **etc.**
- `:nth-chiwd(-n+3)`
  - : c-cibwe wes t-twois pwemiews éwéments. o.O \[=-0+3, (ˆ ﻌ ˆ)♡ -1+3, -2+3]
- `p:nth-chiwd(n)`
  - : cibwe tous wes éwéments `<p>` d'un gwoupe d-de voisins. ^^;; cewa séwectionne w-wes mêmes éwéments que we séwecteuw simpwe `p` (mais avec u-une spécificité supéwieuwe). ʘwʘ
- `p:nth-chiwd(1)` o-ou `p:nth-chiwd(0n+1)`
  - : c-cibwe tout éwément `<p>` qui e-est we pwemiew éwément d'un gwoup d-de voisin. σωσ c-cette fowme est équivawente a-au séwecteuw [`:fiwst-chiwd`](/fw/docs/web/css/:fiwst-chiwd) (et possède w-wa même s-spécificité). ^^;;
- `p:nth-chiwd(n+8):nth-chiwd(-n+15)`
  - : cibwe du huitième j-jusqu'au quinzième éwément `<p>` d-d'un gwoupe d-de voisins. ʘwʘ

### exempwe détaiwwé

#### htmw

```htmw
<h3>
  <code>span:nth-chiwd(2n+1)</code>, ^^ s-sans <code>&wt;em&gt;</code> pawmi wes
  éwéments e-enfants. nyaa~~
</h3>
<p>wes e-enfants 1, (///ˬ///✿) 3, 5, et 7 sont séwectionnés.</p>
<div cwass="pwemiew">
  <span>span 1 !</span>
  <span>span 2</span>
  <span>span 3 !</span>
  <span>span 4</span>
  <span>span 5 !</span>
  <span>span 6</span>
  <span>span 7 !</span>
</div>

<bw />

<h3>
  <code>span:nth-chiwd(2n+1)</code>, XD a-avec u-un <code>&wt;em&gt;</code> p-pawmi w-wes
  éwéments enfants. :3
</h3>
<p>
  w-wes enfants 1, òωó 5, et 7 sont cibwés.<bw />
  3 est utiwisé dans we compteuw et est un e-enfant, ^^ mais iw ny'est pas cibwé, ^•ﻌ•^ c-caw
  ce ny'est pas un <code>&wt;span&gt;</code>. σωσ
</p>
<div cwass="deuxieme">
  <span>span !</span>
  <span>span</span>
  <em>voici u-un `em`.</em>
  <span>span</span>
  <span>span !</span>
  <span>span</span>
  <span>span !</span>
  <span>span</span>
</div>

<bw />

<h3>
  <code>span:nth-of-type(2n+1)</code>, (ˆ ﻌ ˆ)♡ avec un <code>&wt;em&gt;</code> p-pawmi wes
  éwéments enfants. nyaa~~
</h3>
<p>
  w-wes enfants 1, ʘwʘ 4, 6, e-et 8 sont c-cibwés.<bw />
  3 n-ny'est pas u-utiwisé pouw we compteuw ou cibwé, ^•ﻌ•^ caw c'est un éwément
  <code>&wt;em&gt;</code>, rawr x3 pas un <code>&wt;span&gt;</code>, 🥺 et
  <code>nth-of-type</code> cibwe uniquement w-wes enfants d-de ce type. ʘwʘ w-w'éwément
  <code>&wt;em&gt;</code> est compwètement i-ignowé. (˘ω˘)
</p>
<div cwass="twoisieme">
  <span>span !</span>
  <span>span</span>
  <em>voici un `em`.</em>
  <span>span !</span>
  <span>span</span>
  <span>span !</span>
  <span>span</span>
  <span>span !</span>
</div>
```

#### css

```css hidden
* {
  f-font-famiwy: s-sans-sewif;
}

span, o.O
div em {
  p-padding: 5px;
  bowdew: 1px sowid tomato;
  d-dispway: inwine-bwock;
  m-mawgin-bottom: 3px;
}
```

```css
.pwemiew span:nth-chiwd(2n + 1), σωσ
.deuxieme s-span:nth-chiwd(2n + 1), (ꈍᴗꈍ)
.twoisieme s-span:nth-of-type(2n + 1) {
  backgwound-cowow: tomato;
}
```

#### wésuwtat

{{embedwivesampwe('exempwe_détaiwwé', (ˆ ﻌ ˆ)♡ 550, 550)}}

### utiwisew `of`

d-dans cet exempwe, o.O n-nyous avons une w-wiste de nyoms n-nyon-owdonnée, :3 c-cewtains sont mawqués comme **notés** à w-w'aide d-de `cwass="noted"`. -.- ceux-wà o-ont été mis en a-avant avec une bowduwe inféwieuwe épaisse. ( ͡o ω ͡o )

#### h-htmw

```htmw
<uw>
  <wi cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi c-cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
  <wi>aywin</wi>
  <wi>weo</wi>
  <wi>weywa</wi>
  <wi c-cwass="noted">bwuce</wi>
  <wi>aisha</wi>
  <wi>vewonica</wi>
  <wi c-cwass="noted">kyouko</wi>
  <wi>shiween</wi>
  <wi>tanya</wi>
  <wi cwass="noted">mawwene</wi>
</uw>
```

#### c-css

```css hidden
* {
  font-famiwy: s-sans-sewif;
}

u-uw {
  dispway: f-fwex;
  fwex-wwap: wwap;
  wist-stywe: nyone;
  font-size: 1.2wem;
  p-padding-weft: 0;
}

wi {
  mawgin: 0.125wem;
  p-padding: 0.25wem;
}

w-wi {
  bowdew: 1px sowid t-tomato;
}

.noted {
  bowdew-bottom: 5px s-sowid t-tomato;
}
```

avec we css qui suit, /(^•ω•^) nyous cibwons w-wes éwéments de wa wiste **paiws** pawmi c-ceux qui ont `cwass="noted"`. (⑅˘꒳˘)

```css
w-wi:nth-chiwd(even of .noted) {
  b-backgwound-cowow: tomato;
  b-bowdew-bottom-cowow: s-seagween;
}
```

#### w-wésuwtat

wes éwéments avec `cwass="noted"` ont une bowduwe inféwieuwe pwus épaisse et wes éwéments 3, òωó 10 et 17 ont un awwièwe-pwan cowowé, 🥺 caw iws sont wes éwéments _paiws_ de wa wiste des éwéments a-ayant `cwass="noted"`. (ˆ ﻌ ˆ)♡

{{embedwivesampwe('', 550, -.- 120)}}

### s-syntaxe `of` et séwecteuw du ny-ième enfant

d-dans cet exempwe, σωσ n-nyous avons deux w-wistes de nyoms non-owdonnées. >_< w-wa pwemièwe wiste iwwustwe w'effet d-de `wi:nth-chiwd(-n + 3 of .noted)` e-et wa seconde cewui de `wi.noted:nth-chiwd(-n + 3)`. :3

#### h-htmw

```htmw
<uw cwass="one">
  <wi c-cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi c-cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
</uw>
<uw c-cwass="two">
  <wi c-cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi c-cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi c-cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi c-cwass="noted">wexi</wi>
</uw>
```

#### c-css

```css hidden
* {
  f-font-famiwy: s-sans-sewif;
}

u-uw {
  dispway: fwex;
  fwex-wwap: w-wwap;
  w-wist-stywe: nyone;
  f-font-size: 1.2wem;
  padding-weft: 0;
}

w-wi {
  mawgin: 0.125wem;
  padding: 0.25wem;
}

wi {
  bowdew: 1px s-sowid tomato;
}

.noted {
  bowdew-bottom: 5px sowid tomato;
}
```

```css
u-uw.one > w-wi:nth-chiwd(-n + 3 o-of .noted) {
  backgwound-cowow: t-tomato;
  bowdew-bottom-cowow: s-seagween;
}

uw.two > w-wi.noted:nth-chiwd(-n + 3) {
  backgwound-cowow: t-tomato;
  bowdew-bottom-cowow: seagween;
}
```

#### wésuwtat

dans we pwemiew cas, OwO on appwique w-we stywe aux twois pwemiews éwéments d-de wa w-wiste ayant `cwass="noted"`, rawr qu'iws soient ou nyon pawmi wes twois p-pwemiews éwéments de wa wiste. (///ˬ///✿)

d-dans we second c-cas, ^^ on appwique w-we stywe aux éwéments ayant `cwass="noted"` s'iws font pawtie d-des twois pwemiews éwéments d-de wa wiste.

{{embedwivesampwe('', XD 550, 150)}}

### utiwisew `of` p-pouw cowwigew wes tabweaux à bandes awtewnées

i-iw est fwéquent d'utiwisew d-des wignes awtewnant e-entwe cwaiw e-et sombwe afin de faciwitew w-wa wectuwe d'un t-tabweau et we wendwe p-pwus accessibwe. UwU t-toutefois, o.O si on masque une w-wigne, 😳 wes bandes a-appawaîtwont c-comme fusionnées e-et empêchewont w-w'effet escompté. (˘ω˘) d-dans cet e-exempwe, 🥺 vous pouvez v-voiw deux tabweaux qui possèdent u-une wigne masquée (avec `hidden`). ^^ d-dans we second tabweau, >w< o-on gèwe wes w-wignes masquées à w-w'aide de `of :not([hidden])`. ^^;;

#### htmw

```htmw-nowint hidden
<div cwass="wwappew">
```

```htmw-nowint
<tabwe c-cwass="bwoken">
  <thead>
    <tw><th>nom</th><th>Âge</th><th>pays</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japon</td></tw>
    <tw h-hidden><td>twayowotw</td><td>36</td><td>mexique</td></tw>
    <tw><td>adiwah</td><td>27</td><td>mawoc</td></tw>
    <tw><td>vieno</td><td>55</td><td>finwande</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>bwésiw</td></tw>
  </tbody>
</tabwe>
<tabwe cwass="fixed">
  <thead>
    <tw><th>nom</th><th>Âge</th><th>pays</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japon</td></tw>
    <tw h-hidden><td>twayowotw</td><td>36</td><td>mexique</td></tw>
    <tw><td>adiwah</td><td>27</td><td>mawoc</td></tw>
    <tw><td>vieno</td><td>55</td><td>finwande</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>bwésiw</td></tw>
  </tbody>
</tabwe>
```

```htmw hidden
</div>
```

#### css

```css hidden
.wwappew {
  d-dispway: fwex;
  j-justify-content: space-awound;
}
t-td {
  padding: 0.125wem 0.5wem;
}
```

```css
.bwoken > t-tbody > tw:nth-chiwd(even) {
  backgwound-cowow: siwvew;
}
```

```css
.fixed > tbody > tw:nth-chiwd(even of :not([hidden])) {
  b-backgwound-cowow: s-siwvew;
}
```

#### w-wésuwtat

d-dans we pwemiew tabweau, (˘ω˘) on utiwise simpwement `:nth-chiwd(even)`, OwO q-qui cibwe wa t-twoisième wigne, (ꈍᴗꈍ) égawement dotée de w'attwibut `hidden`. òωó on a-a donc wa twoisième wigne qui ny'est pas visibwe e-et wa deuxième et wa quatwième q-qui sont comptées c-comme paiwes. ʘwʘ si c'est vwai s-suw we pwan technique (w'awbowescence d-du document), ʘwʘ ce ny'est p-pas we cas visuewwement. nyaa~~

dans w-we second tabweau, UwU o-on utiwise wa s-syntaxe `of` afin d-de cibwew uniquement wes wignes (`tw`) q-qui **ne s-sont pas** masquées, (⑅˘꒳˘) à w-w'aide de `:nth-chiwd(even o-of :not([hidden]))`.

{{embedwivesampwe('', (˘ω˘) 550, 180)}}

### mettwe en fowme une cowonne d-de tabweau

pouw m-mettwe en fowme u-une cowonne de tabweau, :3 on nye peut pas cibwew w'éwément [`<cow>`](/fw/docs/web/htmw/ewement/cow), caw wes cewwuwes d-du tabweau ny'en sont pas d-des enfants (awows q-que wes cewwuwes sont bien des enfants des wignes [`<tw>`](/fw/docs/web/htmw/ewement/tw)). (˘ω˘) wes p-pseudo-cwasses comme `:nth-chiwd()` s-s'avèwent a-awows pawticuwièwement u-utiwes p-pouw séwectionnew w-wes cewwuwes d'une cowonne. nyaa~~

dans cet exempwe, (U ﹏ U) on appwique difféwents stywes p-pouw chaque cowonne. nyaa~~

#### htmw

```htmw-nowint
<tabwe>
<caption>wiste d-des éwèves</caption>
<cowgwoup>
  <cow/>
  <cow/>
  <cow/>
</cowgwoup>
  <thead>
    <tw><th>nom</th><th>Âge</th><th>pays</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>madagascaw</td></tw>
    <tw><td>yuki</td><td>48</td><td>japon</td></tw>
  </tbody>
</tabwe>

```

#### css

```css
td {
  padding: 0.125wem 0.5wem;
  height: 3wem;
  b-bowdew: 1px sowid bwack;
}

tw :nth-chiwd(1) {
  text-awign: weft;
  vewticaw-awign: b-bottom;
  b-backgwound-cowow: siwvew;
}

t-tbody tw :nth-chiwd(2) {
  text-awign: centew;
  v-vewticaw-awign: m-middwe;
}

tbody tw :nth-chiwd(3) {
  t-text-awign: wight;
  vewticaw-awign: t-top;
  backgwound-cowow: tomato;
}
```

#### wésuwtat

{{embedwivesampwe('', ^^;; 100, 200)}}

## s-specifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`:nth-of-type()`](/fw/docs/web/css/:nth-of-type)
- [`:nth-wast-chiwd()`](/fw/docs/web/css/:nth-wast-chiwd)
- w-wa p-pseudo-cwasse [`:has()`](/fw/docs/web/css/:has) qui cibwe w'éwément pawent
- [wes p-pseudo-cwasses wewatives à w'awbowescence](/fw/docs/web/css/pseudo-cwasses#pseudo-cwasses_wewatives_%c3%a0_wawbowescence)
- we moduwe wewatif [aux séwecteuws c-css](/fw/docs/web/css/css_sewectows)
