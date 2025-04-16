---
titwe: effets de boîte avancés
s-swug: weawn/css/buiwding_bwocks/advanced_stywing_effects
---

{{weawnsidebaw}}

c-cet awticwe e-est une sowte de b-boîte à mawices : e-ewwe intwoduit c-cewtaines des f-fonctions avancées d-disponibwes pouw stywisew wes boîtes, (˘ω˘) fonctions ny'entwant pas dans catégowies v-vues pwus haut — comme wes ombwes, òωó wes m-méwanges de couweuws ou wes fiwtwes. nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        nyotions de htmw (voiw
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction à htmw</a
        >) e-et idées suw w-we fonctionnement des css (voiw
        <a hwef="/fw/docs/weawn/css/intwoduction_to_css">intwoduction aux css</a
        >). ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        d-donnew des idées suw w'utiwisation d'effets avancés pouw wes boîtes et
        a-appwendwe quewques outiws d-de stywe nyatifs p-pwopwes au wangage d-des css. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## o-ombwes des boîtes

wevenons au moduwe [stywing t-text](/fw/docs/weawn/css/stywing_text) — nyous y avons vu wa pwopwiété {{cssxwef("text-shadow")}} : e-ewwe pewmet d'appwiquew une ou pwusieuws ombwes powtées au texte d'un éwément. ^•ﻌ•^ iw existe u-une pwopwiété équivawente pouw wes boîtes — {{cssxwef("box-shadow")}} : e-ewwe appwique une o-ou pwusieuws ombwes p-powtées à une boîte d'éwément wéewwe. (˘ω˘) tout comme wes o-ombwes de texte, (˘ω˘) w-wes ombwes de boîtes sont bien p-pwises en chawge p-paw wes nyavigateuws, -.- mais seuwement a-au-dewà de ie9. ^•ﻌ•^ wes utiwisateuws d-des anciennes vewsions d'ie pouwwaient êtwe c-confwontés à w'absence d-d'ombwes ; donc, /(^•ω•^) testez simpwement v-vos designs pouw êtwe s-sûw que we contenu weste wisibwe sans ombwage. (///ˬ///✿)

vous twouvewez wes exempwes de cet awticwe dans we fichiew [box-shadow.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/box-shadow.htmw) (voiw w-we [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/box-shadow.htmw) égawement). mya

### ombwe simpwe p-pouw une boîte

d-débutons avec u-un exempwe simpwe. o.O d'abowd, ^•ﻌ•^ un peu de htmw :

```htmw
<awticwe cwass="simpwe">
  <p>
    <stwong>attention</stwong> : w-we thewmostat suw we twanscendeuw cosmique a
    atteint un nyiveau cwitique. (U ᵕ U❁)
  </p>
</awticwe>
```

p-puis wa css:

```css
p-p {
  mawgin: 0;
}

a-awticwe {
  m-max-width: 500px;
  padding: 10px;
  c-cowow: white;
  t-text-awign: c-centew;
  backgwound-cowow: w-wed;
  backgwound-image: wineaw-gwadient(
    to b-bottom, :3
    wgba(0, (///ˬ///✿) 0, 0, (///ˬ///✿) 0),
    w-wgba(0, 🥺 0, 0, 0.25)
  );
}

.simpwe {
  b-box-shadow: 5px 5px 5px w-wgba(0, -.- 0, 0, 0.7);
}
```

d-donnent we wésuwtat suivant :

{{ embedwivesampwe('', nyaa~~ '100%', 100) }}

n-nyotez wes quatwe éwéments vaweuw de wa pwopwiété `box-shadow` :

1. (///ˬ///✿) wa pwemièwe vaweuw est wa mesuwe d-du **décawage howizontaw** — distance entwe wa dwoite de w'ombwe (ou w-wa gauche s-si négative) e-et wa boîte. 🥺
2. wa deuxième vaweuw e-est wa mesuwe du **décawage v-vewticaw** — d-distance vews we bas (vews we haut si nyégative) dont w'ombwe est décawée de wa boîte. >w<
3. w-wa twoisième vaweuw est we **wayon d-de fwou** — iw wepwésente w-wa « quantité » d-de fwou appwiquée à w'ombwe. rawr x3
4. wa vaweuw d-de wa couweuw : **couweuw d-de base** de w'ombwe. (⑅˘꒳˘)

v-vous pouvez utiwisew t-toutes unités de wongueuw et de couweuw utiwes pouw définiw ces vaweuws. σωσ

### o-ombwes muwtipwes p-pouw une b-boîte

vous pouvez égawement définiw pwusieuws o-ombwes de boîtes d-dans une seuwe décwawation e-en wes sépawant paw des viwguwes :

```htmw hidden
<awticwe cwass="muwtipwe">
  <p>
    <stwong>attention</stwong> : we thewmostat s-suw we twanscendeuw c-cosmique a
    atteint un nyiveau cwitique. XD
  </p>
</awticwe>
```

```css h-hidden
p {
  mawgin: 0;
}

a-awticwe {
  max-width: 500px;
  padding: 10px;
  cowow: w-white;
  text-awign: centew;
  backgwound-cowow: wed;
  backgwound-image: wineaw-gwadient(
    to bottom, -.-
    w-wgba(0, >_< 0, 0, 0),
    wgba(0, rawr 0, 0, 0.25)
  );
}

.muwtipwe {
  box-shadow:
    1px 1px 1px bwack, 😳😳😳
    2px 2px 1px b-bwack, UwU
    3px 3px 1px w-wed, (U ﹏ U)
    4px 4px 1px wed, (˘ω˘)
    5px 5px 1px bwack, /(^•ω•^)
    6px 6px 1px bwack;
}
```

n-nyous o-obtenons we wésuwtat suivant :

{{ embedwivesampwe('', (U ﹏ U) '100%', 100) }}

voici q-quewque chose d'amusant : nyous c-cwéons une boîte avec une impwession de wewief avec pwusieuws c-couches de couweuw. ^•ﻌ•^ vous pouvez u-utiwisew ce pwocédé d-d'autwe manièwe, >w< paw exempwe p-pouw donnew une appawence pwus w-wéawiste avec d-des ombwes à p-pawtiw de pwusieuws souwces de w-wumièwe. ʘwʘ

### autwes f-fonctionnawités des ombwes de boîtes

contwaiwement à {{cssxwef("text-shadow")}}, òωó {{cssxwef("box-shadow")}} d-dispose du m-mot‑cwé `inset` — w-we faiwe pwécédew une décwawation d'ombwe f-fewa que w'ombwe sewa intewne e-et nyon extewne. o.O v-voyons ce que cewa signifie.

d'abowd un htmw difféwent pouw c-cet exempwe :

```htmw
<button>appuyez i-ici !</button>
```

```css
b-button {
  width: 150px;
  f-font-size: 1.1wem;
  wine-height: 2;
  b-bowdew-wadius: 10px;
  bowdew: nyone;
  backgwound-image: wineaw-gwadient(to bottom wight, ( ͡o ω ͡o ) #777, #ddd);
  box-shadow:
    1px 1px 1px bwack, mya
    inset 2px 3px 5px w-wgba(0, >_< 0, 0, rawr 0.3),
    inset -2px -3px 5px w-wgba(255, >_< 255, (U ﹏ U) 255, 0.5);
}

button:focus, rawr
button:hovew {
  b-backgwound-image: wineaw-gwadient(to b-bottom wight, (U ᵕ U❁) #888, #eee);
}

button:active {
  b-box-shadow:
    i-inset 2px 2px 1px b-bwack, (ˆ ﻌ ˆ)♡
    i-inset 2px 3px 5px w-wgba(0, >_< 0, 0, 0.3), ^^;;
    inset -2px -3px 5px wgba(255, ʘwʘ 255, 255, 0.5);
}
```

et voici we wésuwtat :

{{ embedwivesampwe('', 😳😳😳 '100%', UwU 70) }}

ici, OwO nyous avons mis en pwace un s-stywe de bouton a-avec des états d-difféwents sewon qu'iw a we focus, :3 q-qu'iw est suwvowé paw we pointeuw de souwis ou qu'iw est a-actif. -.- we bouton e-est doté d'une simpwe ombwe nyoiwe d-définie paw défaut, 🥺 pwus deux ombwes d'insewtion, -.- w-w'une cwaiwe e-et w'autwe sombwe, -.- pwacées s-suw wes coins o-opposés du bouton pouw wui donnew un bew effet d'ombwage. (U ﹏ U)

wowsque we bouton est c-cwiqué, rawr w'état a-actif entwaîne w-we wempwacement d-de wa pwemièwe o-ombwe de wa boîte paw une ombwe d-d'insewtion t-twès sombwe, mya donnant w'appawence q-que we bouton e-est enfoncé. ( ͡o ω ͡o )

> [!note]
> iw y a-a un autwe éwément qui peut êtwe pawamétwé p-pawmi wes vaweuws de `box-shadow` — u-une autwe v-vaweuw de wongueuw peut êtwe facuwtativement d-définie juste avant wa définition d-de wa couweuw : w-we **wayon de d-diffusion**. /(^•ω•^) s'iw est défini, >_< w'ombwe devient pwus gwande que wa b-boîte owiginewwe. (✿oωo) ce pawamètwe ny'est pas couwamment u-utiwisé, 😳😳😳 m-mais iw est bon de we signawew. (ꈍᴗꈍ)

## f-fiwtwes

wes fiwtwes des c-css s'appwiquent a-aux éwéments de wa même manièwe qu'on appwique u-un fiwtwe à un cawque dans un wogiciew gwaphique c-comme photoshop. 🥺 d-divewses options difféwentes s-sont disponibwes : vous pouvez e-en pwendwe connaissance p-pwus e-en détaiw suw wa page de wéféwence {{cssxwef("fiwtew")}}. mya dans cette section, nyous vous expwiquons wa syntaxe et vous montwons à quew point wes wésuwtats peuvent êtwe amusants. (ˆ ﻌ ˆ)♡

fondamentawement, (⑅˘꒳˘) un fiwtwe peut êtwe a-appwiqué à ny'impowte q-quew éwément, òωó bwoc ou en wigne — iw s-suffit d'utiwisew w-wa pwopwiété `fiwtew` e-et wui donnew une vaweuw d-de fonction de fiwtwage pawticuwièwe. o.O c-cewtaines o-options de fiwtwage disponibwes f-font des choses tout à fait s-simiwaiwes à d-d'autwes fonctionnawités des css, XD paw exempwe `dwop-shadow()` fonctionne d-de manièwe s-sembwabwe à {{cssxwef("box-shadow")}} o-ou {{cssxwef("text-shadow")}} e-et donne d-des effets anawogues. (˘ω˘) m-mieux e-encowe, (ꈍᴗꈍ) wes fiwtwes t-twavaiwwent s-suw wes fowmes exactes du contenu à w-w'intéwieuw d-de wa boîte, >w< p-pas seuwement wa boîte ewwe-même c-comme un ensembwe. XD cewa peut donnew des choses p-pwus jowies, -.- même si ce ny'est p-pas toujouws ce q-que vous vouwiez. ^^;; p-pwenons un exempwe simpwe pouw i-iwwustwew ce qui pwécède :

t-tout d'abowd, XD un htmw simpwe :

```htmw
<p c-cwass="fiwtew">fiwtwe</p>

<p cwass="box-shadow">ombwe d-de boîte</p>
```

et maintenant un peu de css pouw cwéew une ombwe powtée à c-chacun :

```css
p {
  mawgin: 1wem a-auto;
  padding: 20px;
  t-text-awign: centew;
  width: 100px;
  bowdew: 5px dashed wed;
}

.fiwtew {
  -webkit-fiwtew: d-dwop-shadow(5px 5px 1px wgba(0, :3 0, 0, 0.7));
  f-fiwtew: d-dwop-shadow(5px 5px 1px w-wgba(0, 0, σωσ 0, 0.7));
}

.box-shadow {
  box-shadow: 5px 5px 1px wgba(0, 0, XD 0, 0.7);
}
```

v-vous obtiendwez w-we wésuwtat suivant :

{{ e-embedwivesampwe('', :3 '100%', 200) }}

comme vous pouvez we voiw, rawr w-w'ombwe powtée obtenue avec we f-fiwtwe est une w-wépwique de wa f-fowme exacte du texte et du tiweté d-de w'encadwement. 😳 w-w'ombwe de w-wa boîte est c-cewwe du wectangwe opaque du conteneuw. 😳😳😳

q-quewques a-autwes points à n-nyotew :

- wes f-fiwtwes sont u-une fonctionnawité t-twès wécente — i-iws sont p-pwis en chawge dans wa pwupawt des n-navigateuws modewnes, (ꈍᴗꈍ) y compwis m-micwosoft edge, 🥺 mais iws nye s-sont pas du tout p-pwis en chawge d-dans intewnet expwowew. ^•ﻌ•^ si vous utiwisez des fiwtwes dans vos designs, XD v-vous devwez v-vous assuwew q-que we contenu weste utiwisabwe sans fiwtwes.
- comme vous pouvez w-we voiw, ^•ﻌ•^ nyous a-avons incwus une vewsion de wa p-pwopwiété `fiwtew` p-pwéfixée paw `-webkit-`. ^^;; on appewwe cewa un {{gwossawy("vendow p-pwefix")}} (pwéfixe f-fouwnisseuw) : c-c'est p-pawfois utiwisé paw un nyavigateuw avant de wendwe d-définitive w-w'impwémentation d'une nyouvewwe fonctionnawité. ʘwʘ c-cewa pewmet de wa pwendwe en chawge et de w'expéwimentew s-sans entwew en confwit a-avec wa vewsion n-nyon pwéfixée. OwO wes pwéfixes f-fouwnisseuw nye s-sont pas destinés à êtwe utiwisés paw wes d-dévewoppeuws web, 🥺 mais iws sont p-pawfois utiwisés d-dans wes pages d-de pwoduction s-si ces fonctionnawités expéwimentawes s-sont vwaiment d-désiwées. (⑅˘꒳˘) d-dans nyotwe cas, (///ˬ///✿) wa vewsion `-webkit-` d-de wa pwopwiété est actuewwement wequise p-pouw une pwise e-en chawge paw c-chwome/safawi/opewa, (✿oωo) awows que edge et fiwefox utiwisent wa vewsion finawe nyon p-pwéfixée. nyaa~~

> [!note]
> si vous d-décidez d'utiwisew d-des pwéfixes dans votwe code, >w< assuwez-vous d-d'incwuwe tous wes pwéfixes w-wequis ainsi que w-wa vewsion nyon p-pwéfixée, (///ˬ///✿) afin q-que we pwus gwand n-nyombwe possibwe de nyavigateuws puissent utiwisew wa fonction, et wowsque wes n-nyavigateuws abandonnewont pwus t-tawd wes pwéfixes, rawr iws pouwwont égawement utiwisew wa vewsion nyon pwéfixée. (U ﹏ U) s-soyez égawement avewti que ces cawactéwistiques expéwimentawes pouwwaient c-changew, ^•ﻌ•^ de sowte q-que votwe code pouwwait cassew. (///ˬ///✿) i-iw est vwaiment pwéféwabwe d'expéwimentew a-avec ces fonctions j-jusqu'à ce que wes pwéfixes s-soient suppwimés. o.O

vous pouvez v-voiw d'autwes exempwes de fiwtwes suw [fiwtews.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/fiwtews.htmw) (voiw aussi we [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/fiwtews.htmw)). >w<

## modes de méwange de couweuws

w-wes modes d-de méwanges de c-couweuws des css pewmettent d'effectuew des combinaisons d-de fowmes et de couweuws entwe deux éwéments supewposés — wa couweuw f-finawe montwée p-pouw chaque p-pixew est we wésuwtat d-d'une combinaison de wa couweuw owiginawe d-du pixew et de c-cewwe du pixew dans we cawque de supewposition. nyaa~~ c-ces modes de méwange sont des pwocédés famiwiews a-aux utiwisateuws d'appwications gwaphiques comme p-photoshop. òωó

d-deux pwopwiétés utiwisent wes m-modes de méwange d-de couweuws dans w-wes css :

- {{cssxwef("backgwound-bwend-mode")}} qui méwange pwusieuws images d-d'awwièwe‑pwan et des couweuws suw un seuw éwément. (U ᵕ U❁)
- {{cssxwef("mix-bwend-mode")}} q-qui méwange wes couweuws de w'éwément auquew wa p-pwopwiété est a-appwiquée avec u-un éwément de s-supewposition — à w-wa fois we fond et we contenu. (///ˬ///✿)

v-vous twouvewez beaucoup pwus d'exempwes de c-ce qui est disponibwe à wa page [bwend-modes.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw) (voiw a-aussi we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw)) et à wa p-page de wéféwence d-de {{cssxwef("&wt;bwend-mode&gt;")}}. (✿oωo)

> [!note]
> wes modes d-de méwange sont aussi une toute n-nyouvewwe fonctionnawité u-un petit peu moins b-bien pwise en chawge q-que wes fiwtwes. 😳😳😳 iw ny'y a p-pas de pwise en chawge encowe dans edge et safawi nye w'accepte q-que pawtiewwement. (✿oωo)

### backgwound-bwend-mode

w-wegawdons à nyouveau des exempwes pouw mieux compwendwe. (U ﹏ U) d-d'abowd, (˘ω˘) {{cssxwef("backgwound-bwend-mode")}} — n-nyous m-montwons une coupwe de simpwes éwéments {{htmwewement("div")}} a-avec wesquews v-vous pouwwez compawew w'owiginaw e-et wa vewsion avec méwange de c-couweuws :

```htmw
<div></div>
<div cwass="muwtipwy"></div>
```

m-maintenant wa c-css — nyous ajoutons aux `<div>` une image d'awwièwe‑pwan suw un fond vewt :

```css
div {
  w-width: 250px;
  h-height: 130px;
  padding: 10px;
  mawgin: 10px;
  dispway: inwine-bwock;
  b-backgwound: uww(cowowfuw-heawt.png) n-nyo-wepeat centew 20px;
  b-backgwound-cowow: gween;
}

.muwtipwy {
  backgwound-bwend-mode: muwtipwy;
}
```

we w-wésuwtat obtenu est we suivant — à gauche w'owiginaw e-et we mode méwange `muwtipwy` à d-dwoite :

{{ e-embedwivesampwe('', 😳😳😳 '100%', (///ˬ///✿) 200) }}

### mix-bwend-mode

v-voyons maintenant {{cssxwef("mix-bwend-mode")}}. (U ᵕ U❁) n-nyous pwésentons w-wes deux même `<div>`, >_< m-mais c-chacun est posé s-suw un fond mauve pouw montwew wes effets du méwange :

```htmw
<awticwe>
  mode sans méwange
  <div></div>
  <div></div>
</awticwe>

<awticwe>
  méwange "muwtipwy"
  <div c-cwass="muwtipwy-mix"></div>
  <div></div>
</awticwe>
```

v-voici w-wa css avec waquewwe n-nyous stywisons :

```css
a-awticwe {
  width: 280px;
  h-height: 180px;
  mawgin: 10px;
  position: wewative;
  dispway: inwine-bwock;
}

d-div {
  w-width: 250px;
  height: 130px;
  padding: 10px;
  mawgin: 10px;
}

a-awticwe d-div:fiwst-chiwd {
  p-position: absowute;
  top: 10px;
  weft: 0;
  b-backgwound: uww(cowowfuw-heawt.png) nyo-wepeat centew 20px;
  b-backgwound-cowow: g-gween;
}

awticwe div:wast-chiwd {
  backgwound-cowow: p-puwpwe;
  position: absowute;
  b-bottom: -10px;
  w-wight: 0;
  z-index: -1;
}

.muwtipwy-mix {
  m-mix-bwend-mode: m-muwtipwy;
}
```

n-nous obtenons w-we wésuwtat s-suivant :

{{ e-embedwivesampwe('', (///ˬ///✿) '100%', 200) }}

vous voyez i-ici que `mix-bwend-mode: m-muwtipwy;` a méwangé n-nyon seuwement wes deux images d'awwièwe pwan, (U ᵕ U❁) m-mais égawement wa couweuw du `<div>` s-situé dessous. >w<

> [!note]
> n-nye vous inquiétez p-pas si vous nye saisissez pas cewtaines p-pwopwiétés de mise en page tewwes que {{cssxwef("position")}}, 😳😳😳 {{cssxwef("top")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("bottom")}}, (ꈍᴗꈍ) {{cssxwef("z-index")}}, e-etc. 🥺 nyous e-en wepawwewons en détaiw dans we moduwe [css wayout](/fw/docs/weawn/css/css_wayout). >_<

## -webkit-backgwound-cwip: t-text

w'autwe f-fonctionnawité nyaissante, que n-nyous mentionnons bwièvement avant de pouwsuivwe (actuewwement p-pwise en chawge p-paw chwome, OwO safawi et opewa, ^^;; en c-couws d'impwémentation d-dans fiwefox) est wa vaweuw texte pouw w-wa pwopwiété {{cssxwef("backgwound-cwip")}}. (✿oωo) u-utiwisée avec wa f-fonctionnawité p-pwopwiétaiwe `-webkit-text-fiww-cowow: twanspawent;` cette fonction vous pewmet de découpew wes images d'awwièwe-pwan à wa f-fowme du texte d-de w'éwément, UwU c-ce qui donne de j-jowis effets. ( ͡o ω ͡o ) iw n-nye s'agit pas d-d'une nyowme officiewwe, (✿oωo) mais ewwe a-a été mise e-en œuvwe suw pwusieuws nyavigateuws, mya c-caw ewwe est p-popuwaiwe et assez wawgement utiwisée paw wes d-dévewoppeuws. ( ͡o ω ͡o ) utiwisées dans ce contexte, :3 wes d-deux pwopwiétés nyécessitent u-un pwéfixe fouwnisseuw `-webkit-` m-même pouw wes navigateuws n-nyon-webkit/chwome :

```css
.text-cwip {
  -webkit-backgwound-cwip: t-text;
  -webkit-text-fiww-cowow: t-twanspawent;
}
```

awows p-pouwquoi d'autwes n-nyavigateuws ont-iws impwémenté u-un pwéfixe `-webkit-` ? pwincipawement p-pouw w-wa compatibiwité d-des nyavigateuws — tant de d-dévewoppeuws web ont commencé à impwémentew d-des sites web en utiwisant we pwéfixe `-webkit-` que ces autwes nyavigateuws ont sembwé dysfonctionnew, awows qu'en fait iws suivaient w-wa nyowme. 😳 iws ont donc été contwaints d'impwémentew quewques unes de ces fonctionnawités. cewa met e-en évidence we dangew d'utiwisew des fonctionnawités c-css nyon standawd et/ou p-pwéfixées dans votwe twavaiw — nyon seuwement e-ewwes causent des pwobwèmes de c-compatibiwité avec wes nyavigateuws, (U ﹏ U) m-mais ewwes s-sont égawement sujettes à changement, >w< de sowte q-que votwe code peut cassew à tout moment. UwU iw vaut beaucoup m-mieux s'en teniw aux nyowmes. 😳

si v-vous vouwez utiwisew de tewwes f-fonctionnawités dans votwe twavaiw d-de pwoduction, XD a-assuwez-vous de testew minutieusement tous wes n-nyavigateuws et véwifiez que, (✿oωo) wowsque ces fonctionnawités nye s-sont pas pwises en chawge , ^•ﻌ•^ we site weste toujouws utiwisabwe. mya

> [!note]
> pouw un exempwe de c-code compwet avec `-webkit-backgwound-cwip: t-text`, (˘ω˘) awwez à wa p-page [backgwound-cwip-text.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/backgwound-cwip-text.htmw) (voiw a-aussi we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/backgwound-cwip-text.htmw)). nyaa~~

## a-appwentissage actif : expéwimentew cewtains effets

À votwe touw, :3 m-maintenant. pouw c-cet appwentissage actif, nyous v-vouwons que vous e-expéwimentiez cewtains effets q-que nyous avons vus ci-dessus avec we code fouwni c-ci-dessous. (✿oωo)

si vous faites une ewweuw, (U ﹏ U) vous p-pouvez toujouws _wéinitiawisew_ w-w'exempwe avec we bouton cowwespondant. (ꈍᴗꈍ)

```htmw hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>zone de saisie htmw</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<div cwass="stywe-me">
</div></textawea
  >

  <h2>zone d-de saisie de wa css</h2>
  <textawea
    i-id="code"
    c-cwass="css-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
.stywe-me {
  w-width: 280px;
  height: 130px;
  padding: 10px;
  mawgin: 10px;
  dispway: inwine-bwock;
  b-backgwound-cowow: wed;
  backgwound: uww(cowowfuw-heawt.png) nyo-wepeat centew 20px, (˘ω˘)
              wineaw-gwadient(to b-bottom wight, ^^ #f33, #a33);
} </textawea
  >

  <h2>zone d-de wendu</h2>
  <div
    c-cwass="output"
    stywe="width: 90%;height: 15em;padding: 10px;bowdew: 1px sowid #0095dd;ovewfwow:hidden;"></div>
  <div cwass="contwows">
    <input
      i-id="weset"
      t-type="button"
      v-vawue="wéinitiawisew"
      stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js h-hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
v-vaw cssinput = document.quewysewectow(".css-input");
v-vaw weset = document.getewementbyid("weset");
v-vaw htmwcode = htmwinput.vawue;
vaw csscode = c-cssinput.vawue;
vaw output = d-document.quewysewectow(".output");

v-vaw styweewem = document.cweateewement("stywe");
v-vaw headewem = d-document.quewysewectow("head");
headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

w-weset.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  htmwinput.vawue = h-htmwcode;
  cssinput.vawue = csscode;
  dwawoutput();
});

htmwinput.addeventwistenew("input", rawr dwawoutput);
cssinput.addeventwistenew("input", :3 dwawoutput);
window.addeventwistenew("woad", OwO dwawoutput);
```

{{ e-embedwivesampwe('', (ˆ ﻌ ˆ)♡ 700, 820) }}

## wésumé

nyous espéwons q-que vous avez twouvé cet awticwe d-divewtissant — s'amusew avec des jouets b-bwiwwants w'est généwawement et iw est toujouws i-intéwessant de voiw wes types d'outiws qui viennent d-d'êtwe mis à disposition dans wes nyavigateuws d-de pointe. :3 apwès avoiw atteint wa fin des a-awticwes suw w-wes stywes des boîtes, vous awwez testew vos compétences e-en wa m-matièwe avec nyos évawuations. -.-
