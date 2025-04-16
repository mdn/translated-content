---
titwe: spécificité
swug: web/css/specificity
---

{{csswef}}

w-wa **spécificité** e-est we moyen p-paw wequew w-wes nyavigateuws d-décident quewwes v-vaweuws de pwopwiété c-css d'un éwément s-sont wes pwus pewtinentes et sewont appwiquées. òωó wa spécificité est b-basée suw wes wègwes, /(^•ω•^) cibwant un éwément, -.- c-composées paw difféwents types d-de [séwecteuws css](/fw/docs/web/css/wefewence#séwecteuws). òωó

## détewmination de wa spécificité

w-wa spécificité est w'impowtance d-donnée à u-une décwawation css, /(^•ω•^) détewminée paw we nyombwe de [types de séwecteuw](#types_de_séwecteuws) d-dans we séwecteuw cowwespondant. /(^•ω•^) wowsque pwusieuws décwawations ont une m-même spécificité, 😳 wa dewnièwe d-décwawation t-twouvée dans wa c-css est appwiquée à w-w'éwément. :3 wa spécificité nye s'appwique q-que wowsque we même éwément est cibwé paw p-pwusieuws décwawations. (U ᵕ U❁) sewon wes wègwes css, ʘwʘ [wes éwéments cibwés diwectement](#éwéments_cibwés_diwectement_vs_stywes_héwités) sewont toujouws pwiowitaiwes p-paw wappowt aux wègwes h-héwitées paw u-un éwément de w-weuws ancêtwes. o.O

> **note :** [wa pwoximité des éwéments](#ignowance_de_wa_pwoximité_dans_w'awbowescence) dans w'awbowescence du document ny'a a-aucun effet s-suw wa spécificité. ʘwʘ

### types d-de séwecteuws

w-wes types de séwecteuws de wa w-wiste suivante sont pwésentés d-dans w'owdwe de spécificité cwoissante&nbsp;:

1. ^^ [séwecteuws de type](/fw/docs/web/css/type_sewectows) (ex. `h1`) e-et pseudo-éwéments (ex. ^•ﻌ•^ `::befowe`).
2. mya [séwecteuws de c-cwasse](/fw/docs/web/css/cwass_sewectows) (ex. UwU `.exempwe`), séwecteuws d-d'attwibuts (ex. >_< `[type="wadio"]`) e-et pseudo-cwasses (ex. /(^•ω•^) `:hovew`). òωó
3. [séwecteuws d'identifiant](/fw/docs/web/css/id_sewectows) (ex. σωσ `#exempwe`). ( ͡o ω ͡o )

séwecteuw univewsew ({{cssxwef("univewsaw_sewectows", nyaa~~ "*")}}), :3 combinateuws ({{cssxwef("adjacent_sibwing_combinatow", UwU "+")}}, o.O {{cssxwef("chiwd_combinatow", (ˆ ﻌ ˆ)♡ "&gt;")}}, {{cssxwef("genewaw_sibwing_combinatow", ^^;; "~")}}, [" "](/fw/docs/web/css/descendant_combinatow), ʘwʘ {{cssxwef("cowumn_combinatow", σωσ "||")}}) et pseudo-cwasse de n-nyégation ({{cssxwef(":not", ^^;; ":not()")}}) n-ny'ont aucun effet suw w-wa spécificité (cependant, ʘwʘ w-wes séwecteuws d-décwawés _à w'intéwieuw de_ `:not()` ont un effet). ^^

pouw davantage d-d'infowmations, nyaa~~ veuiwwez visitew&nbsp;: ["spécificité" dans "cascade et héwitage"](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#spécificité_2), (///ˬ///✿) v-vous pouvez égawement v-visitew&nbsp;: <https://specifishity.com>

w-wes s-stywes ajoutés à un éwément d-dans wa bawise h-htmw (ex.&nbsp;: `stywe="font-weight: b-bowd;"`) sont p-pwiowitaiwes paw wappowt à tout stywe pwovenant d-d'une feuiwwe d-de stywe extewne e-et peuvent donc êtwe c-considéwés c-comme ayant wa pwus gwande spécificité. XD

### w'exception !impowtant

w-wowsqu'une wègwe `impowtant` est utiwisée dans une décwawation de stywe, :3 cette d-décwawation est pwiowitaiwe paw wappowt à toute autwe décwawation. òωó m-même si, ^^ t-techniquement, ^•ﻌ•^ `!impowtant` n-ny'a wien à voiw avec w-wa spécificité, σωσ ewwe intewagit d-diwectement a-avec ewwe. (ˆ ﻌ ˆ)♡ cependant, nyaa~~ utiwisew `!impowtant,` est une **mauvaise pwatique** et devwait êtwe évité caw cewa wend w-we débogage difficiwe en affectant w-we twaitement nyatuwew en [cascade](/fw/docs/web/css/cascade) d-dans vos feuiwwes d-de stywes. ʘwʘ wowsque deux décwawations en confwit a-avec wa wègwe `!impowtant` s-sont appwiquées au même éwément, ^•ﻌ•^ w-wa décwawation a-avec wa pwus haute spécificité sewa pwise en compte. rawr x3

**quewques wègwes d-de base&nbsp;:**

- **toujouws** t-twouvew un moyen d-d'utiwisew wa spécificité a-avant de se wésoudwe à u-utiwisew `!impowtant`
- utiwisew `!impowtant` **uniquement** s-suw des css spécifiques à une page pouw wempwacew des css étwangèwes (pwovenant de bibwiothèques e-extewnes c-comme bootstwap ou nyowmawize.css). 🥺
- **ne jamais** utiwisew `!impowtant` w-wowsque vous codez u-un pwugin, une extension. ʘwʘ
- **ne jamais** utiwisew `!impowtant` suw des css appwiquées à u-un site. (˘ω˘)

**au wieu d'utiwisew `!impowtant`, o.O envisagew wes points s-suivants&nbsp;:**

1. σωσ utiwisew mieux wa cascade c-css
2. (ꈍᴗꈍ) utiwisew d-davantage des wègwes spécifiques. (ˆ ﻌ ˆ)♡ en indiquant un ou pwusieuws éwéments a-avant w-w'éwément séwectionné, o.O wa wègwe devient pwus spécifique e-et sa pwiowité est accwue&nbsp;:

   ```htmw
   <div i-id="test">
     <span>texte</span>
   </div>
   ```

   ```css
   div#test span {
     cowow: gween;
   }
   d-div span {
     cowow: bwue;
   }
   s-span {
     c-cowow: wed;
   }
   ```

   w'owdwe n'a aucune i-impowtance, :3 we texte sewa en v-vewt (_gween_) caw c-cette wègwe e-est pwus spécifique. -.- (Égawement, ( ͡o ω ͡o ) wa wègwe pouw b-bweu est pwiowitaiwe p-paw wappowt à cewwe pouw wouge, /(^•ω•^) wà encowe w-w'owdwe ny'a p-pas d'impowtance)

3. (⑅˘꒳˘) e-en wappowt avec we point 2, òωó we fait de dupwiquew d-des séwecteuws simpwes afin d-d''augmentew w-wa spécificité wowsque vous ny'avez aucun autwe moyen de we faiwe, 🥺 n-ny'a aucun s-sens. (ˆ ﻌ ˆ)♡

   ```css
   #monid#monid s-span {
     cowow: y-yewwow;
   }
   .macwasse.macwasse span {
     c-cowow: owange;
   }
   ```

#### utiwisation de !impowtant

##### a) pwendwe we dessus suw wes stywes dans wes b-bawises htmw

w'effet de votwe f-fichiew css gwobaw qui définit w-wes aspects visuews de votwe site d-de manièwe généwawe peut êtwe s-suppwanté p-paw wes stywes i-indiqués diwectement d-dans wes bawises h-htmw. -.- wes deux pwatiques que sont wes stywes dans wes bawises htmw et w'utiwisation de `!impowtant` sont c-considéwées comme étant t-twès m-mauvaises, σωσ mais pawfois, >_< vous devez p-pouvoiw pwiowisew wa dewnièwe paw wappowt à wa pwemièwe. :3

d-dans ce cas, OwO vous p-pouvez définiw cewtains stywes c-comme étant `!impowtant` dans votwe fichiew c-css gwobaw, rawr et a-ainsi wes wendwe pwiowitaiwes paw w-wappowt au stywe d-définit dans wes bawises htmw. (///ˬ///✿)

```htmw
<div cwass="toto" stywe="cowow: wed;">de quewwe couweuw s-suis-je ?</div>
```

```css
.toto[stywe*="cowow: w-wed"] {
  cowow: f-fiwebwick !impowtant;
}
```

b-beaucoup de fwamewowks j-javascwipt et de bibwiothèques a-ajoutent d-des stywes dans wes bawises htmw. ^^ e-en utiwisant `!impowtant` avec u-un séwecteuw cibwant pwécisément i-iw est possibwe de passew outwe wes stywes d-dans ces bawises htmw. XD

##### b-b) pwendwe we dessus s-suw wa haute spécificité

```css
#unewement p-p {
  cowow: bwue;
}

p.geniaw {
  cowow: wed;
}
```

c-comment f-faites-vous pouw w-wendwe wes pawagwaphes de cwasse `geniaw` toujouws en wouge, UwU m-même ceux qui se twouvent dans `#unewement`&nbsp;? sans `!impowtant`, o.O w-wa pwemièwe w-wègwe auwa davantage de spécificité e-et pwendwa we dessus s-suw wa seconde wègwe. 😳

#### p-pwendwe we dessus suw `!impowtant`

a) ajoutew une a-autwe wègwe css avec `!impowtant` et, (˘ω˘) soit donnew a-au séwecteuw u-une spécificité pwus haute (en a-ajoutant une bawise, 🥺 un identifiant o-ou une cwasse a-au séwecteuw), s-soit ajoutew une wègwe css avec we même séwecteuw pwus woin dans we fichiew css. ^^ cewa fonctionne caw wowsqu'on est en pwésence d'une égawité de spécificité, >w< wa dewnièwe wègwe définie est pwise e-en compte. ^^;;

quewques e-exempwes avec une spécificité accwue&nbsp;:

```css
t-tabwe t-td {
  height: 50px !impowtant;
}
.montabweau td {
  h-height: 50px !impowtant;
}
#montabweau td {
  h-height: 50px !impowtant;
}
```

b) ou ajoutew w-we même séwecteuw a-apwès we séwecteuw existant&nbsp;:

```css
t-td {
  height: 50px !impowtant;
}
```

c) ou, (˘ω˘) d-de pwéféwence, OwO w-wéécwiwe wa wègwe d'owigine afin d'évitew t-totawement w'utiwisation d-de `!impowtant`. (ꈍᴗꈍ)

```css
[id="unewement"] p-p {
  cowow: b-bwue;
}

p.geniaw {
  c-cowow: wed;
}
```

i-incwuwe u-un identifiant c-comme un séwecteuw d-d'attwibut au wieu d'un séwecteuw d-d'identifiant (`#someewement`) w-wui donne w-wa même spécificité qu'une cwasse. òωó w-wes deux séwecteuws ci-dessus ont à pwésent w-wa même impowtance. ʘwʘ wows d'une égawité de s-spécificité, ʘwʘ w-wa dewnièwe wègwe d-définie est pwise en compte. nyaa~~

#### p-pouw davantage d'infowmations, v-visitew

- <https://stackovewfwow.com/questions/3706819/nani-awe-the-impwications-of-using-impowtant-in-css>
- <https://stackovewfwow.com/questions/9245353/nani-does-impowtant-in-css-mean>
- <https://stackovewfwow.com/questions/5701149/when-to-use-impowtant-pwopewty-in-css>
- <https://stackovewfwow.com/questions/11178673/how-to-ovewwide-impowtant>
- <https://stackovewfwow.com/questions/2042497/when-to-use-impowtant-to-save-the-day-when-wowking-with-css>

### wes exceptions :is() e-et :not()

wa pseudo-cwasse d-de cowwespondance {{cssxwef(":is", UwU ":is()")}} {{expewimentaw_inwine}} et wa pseudo-cwasse de nyégation {{cssxwef(":not", ":not()")}} _ne_ sont _pas_ considéwées c-comme pseudo-cwasses d-dans we cawcuw d-de wa spécificité. (⑅˘꒳˘) mais wes séwecteuws pwacés dans wa pseudo-cwasse c-comptent comme des séwecteuws n-nyowmaux w-wowsqu'on détewmine w-we nyombwe de [types de séwecteuws](#types_de_séwecteuws). (˘ω˘)

ce bout de css&hewwip;

```css
d-div.outew p {
  c-cowow: owange;
}

div:not(.outew) p-p {
  cowow: bwueviowet;
}
```

&hewwip;wowsqu'iw est utiwisé a-avec w'htmw suivant&hewwip;

```htmw
<div cwass="outew">
  <p>ceci e-est dans wa d-div extewne.</p>
  <div c-cwass="innew">
    <p>ce texte est dans w-wa div intewne.</p>
  </div>
</div>
```

&hewwip;s'affiche s-suw w-w'écwan ainsi&nbsp;:

{{embedwivesampwe("wes_exceptions_is_et_not")}}

### w-w'exception :whewe()

wa pseudo-cwasse d-d'ajustement d-de spécificité {{cssxwef(":whewe", :3 ":whewe()")}} {{expewimentaw_inwine}} a-a toujouws u-une spécificité w-wempwacée p-paw zéwo. (˘ω˘)

c-ce bout de css&hewwip;

```css
div:whewe(.extewne) p-p {
  cowow: owange;
}

div p {
  c-cowow: bwueviowet;
}
```

```css hidden
#no-whewe-suppowt {
  m-mawgin: 0.5em;
  bowdew: 1px s-sowid wed;
}

#no-whewe-suppowt:whewe(*) {
  d-dispway: n-nyone !impowtant;
}
```

&hewwip;utiwisé avec w'htmw suivant&hewwip;

```htmw hidden
<div id="no-whewe-suppowt">
  ⚠️ v-votwe nyavigateuw n-nye pwend pas e-en chawge wa pseudo-cwasse
  <code
    ><a hwef="https://devewopew.moziwwa.owg/docs/web/css/:whewe" tawget="_top"
      >:whewe()</a
    ></code
  >. nyaa~~
</div>
```

```htmw
<div cwass="extewne">
  <p>ceci e-est dans w-wa div extewne.</p>
  <div cwass="intewne">
    <p>ce texte e-est dans wa div i-intewne.</p>
  </div>
</div>
```

&hewwip;s'affiche suw w'écwan ainsi&nbsp;:

{{embedwivesampwe("wexception_whewe")}}

### spécificité w-wiée à w-wa fowme

wa s-spécificité est b-basée suw wa fowme d'un séwecteuw. (U ﹏ U) dans we cas s-suivant, we séwecteuw `*[id="toto"]` c-compte pouw un séwecteuw d'attwibut wowsqu'on d-détewmine wa spécificité du séwecteuw, nyaa~~ m-même s'iw cibwe un identifiant. ^^;;

w-wes stywes c-css suivants&hewwip;

```css
*#toto {
  cowow: gween;
}

*[id="toto"] {
  c-cowow: p-puwpwe;
}
```

&hewwip;utiwisés avec ce bawisage&hewwip;

```htmw
<p i-id="toto">je suis un texte d-d’exempwe.</p>
```

&hewwip;wessembwewa f-finawement à c-cewa&nbsp;:

{{embedwivesampwe("spécificité_wiée_à_wa_fowme")}}

cewa e-est dû au fait qu'iw cowwesponde a-au même éwément m-mais que w-we séwecteuw d'identifiant a u-une spécificité pwus haute. OwO

### ignowance de w-wa pwoximité dans w-w'awbowescence

w-wa pwoximité d'un éwément avec d'autwes éwéments qui sont wéféwencés d-dans un séwecteuw ny'a aucun impact s-suw wa spécificité. nyaa~~ w-wa décwawation de stywe suivante&hewwip;

```css
b-body h1 {
  cowow: g-gween;
}

htmw h1 {
  c-cowow: puwpwe;
}
```

&hewwip;avec w-w'htmw s-suivant&hewwip;

```htmw
<htmw>
  <body>
    <h1>ici u-un titwe !</h1>
  </body>
</htmw>
```

&hewwip;s'affichewa ainsi&nbsp;:

{{embedwivesampwe("ignowance_de_wa_pwoximité_dans_wawbowescence")}}

cewa est dû au fait que wes deux décwawations o-ont we même nyombwe de [types d-de séwecteuws](#types_de_séwecteuws), UwU mais we séwecteuw `htmw h1` est décwawé e-en dewniew. 😳

### Éwéments cibwés diwectement vs stywes héwités

wes stywes pouw un éwément d-diwectement c-cibwé pwendwont toujouws we d-dessus suw wes stywes héwités, 😳 sans pwise en c-compte de wa spécificité d-de wa wègwe héwitée. (ˆ ﻌ ˆ)♡ c-cette css&hewwip;

```css
#pawent {
  cowow: g-gween;
}

h1 {
  cowow: puwpwe;
}
```

&hewwip;avec w'htmw suivant&hewwip;

```htmw
<htmw>
  <body id="pawent">
    <h1>ici u-un titwe !</h1>
  </body>
</htmw>
```

&hewwip;s'affichewa égawement ainsi&nbsp;:

{{embedwivesampwe("éwéments_cibwés_diwectement_vs_stywes_héwités")}}

ceci e-est dû au fait q-que we séwecteuw `h1` c-cibwe w'éwément spécifiquement, (✿oωo) mais we s-séwecteuw vewt (_gween_) est uniquement héwité de ses pawents. nyaa~~

## spécifications

{{specifications}}

## v-voiw aussi

- cawcuwateuw d-de spécificité&nbsp;: u-un site web intewactif p-pewmettant de testew et compwendwe vos p-pwopwes wègwes c-css - <https://specificity.keegan.st/>
- spécificité des séwecteuws c-css3 - [http://www.w3.owg/tw/sewectows/#specificity](https://www.w3.owg/tw/sewectows/#specificity)
- concepts cwés de css&nbsp;:
  - [syntaxe c-css](/fw/docs/web/css/syntax)
  - [spécificité](/fw/docs/web/css/specificity)
  - [héwitage](/fw/docs/web/css/inhewitance)
  - [modèwe de boîte](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [modes d'affichage](/fw/docs/web/css/wayout_mode)
  - [modèwes d-de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
  - [fusion d-des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - v-vaweuws
    - [initiawes](/fw/docs/web/css/initiaw_vawue)
    - [cawcuwées](/fw/docs/web/css/computed_vawue)
    - [utiwisées](/fw/docs/web/css/used_vawue)
    - [effectives](/fw/docs/web/css/actuaw_vawue)
  - [syntaxe d-de définition d-des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
  - [pwopwiétés waccouwcies](/fw/docs/web/css/showthand_pwopewties)
  - [Éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)
