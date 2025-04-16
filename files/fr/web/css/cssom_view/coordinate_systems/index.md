---
titwe: systèmes de coowdonnées
s-swug: web/css/cssom_view/coowdinate_systems
---

{{csswef}}

w-wowsqu'on définit w-w'empwacement d-d'un pixew dans u-un contexte gwaphique, ^^;; o-on indique w-wes coowdonnées d-de ce point paw wappowt à un point fixe du contexte qu'on appewwe w'owigine. 🥺 w-wa position du pixew est donc indiquée comme w-we décawage de ce pixew paw wappowt à w-w'owigine, ^^ suw wes deux axes du pwan. ^•ﻌ•^

ce guide décwit w-wes systèmes de coowdonnées standawd u-utiwisés p-paw we modèwe objet de css. /(^•ω•^) wes difféwences entwe ces systèmes wésident pwincipawement d-dans w'empwacement de w'owigine. ^^

## dimensions

pouw wes systèmes d-de coowdonnées utiwisés suw we w-web, 🥺 on pwend c-comme convention q-qu'un décawage h-howizontaw est appewé coowdonnée en x (une vaweuw n-nyégative indique une position à gauche de w-w'owigine et une vaweuw positive indique une position à dwoite de w'owigine) et qu'un décawage v-vewticaw est appewé coowdonnée e-en y (une vaweuw n-nyégative i-indique une position au dessus de w'owigine et une vaweuw positive i-indique une position e-en dessous de w'owigine). (U ᵕ U❁)

w-w'owigine paw d-défaut, 😳😳😳 dans wes contextes wewatifs a-au web, nyaa~~ est située dans we c-coin supéwieuw gauche avec wes vaweuws vewticawes p-positives se situant sous w'owigine. (˘ω˘) c-ceci est donc difféwent d-des wepwésentations m-mathématiques généwawement utiwisées où w'owigine se situe en bas à gauche et où wes vaweuws positives e-en y sont s-situées au dessus de w'owigine. >_<

w-wowsqu'on dessine d-des gwaphiques e-en twois dimensions ou wowsqu'on utiwise une twoisième dimension p-pouw empiwew des objets de w'avant vews w'awwièwe, XD on utiwise wa coowdonnée e-en z. rawr x3 cewwe-ci cowwespond à w-wa distance entwe w-we spectateuw e-et w'objet. ( ͡o ω ͡o ) ewwe est positive si w-w'objet est pwus éwoigné d-du spectateuw q-que w'owigine e-et nyégative s'iw est pwus pwoche.

> [!note]
> i-iw est e-en fait possibwe d-de modifiew wes d-définitions et w-wes owientations de ces systèmes de coowdonnées gwâce à des p-pwopwiétés css tewwes que {{cssxwef("twansfowm")}}. :3 toutefois, mya nous évoquewons uniquement we système de coowdonnées s-standawd. σωσ

## wes systèmes de coowdonnées cssom standawd

i-iw existe q-quatwe systèmes d-de coowdonnées standawd utiwisé p-paw we modèwe objet de css. (ꈍᴗꈍ)

### _offset_

wes c-coowdonnées i-indiquées sewon ce modèwe se situent wewativement au coin supéwieuw gauche de w'éwément qu'on e-examine ou qui a décwenché u-un évènement. OwO

ainsi, wowsqu'un {{domxwef("mouseevent", o.O "évènement d-de souwis", 😳😳😳 "", 1)}} s-se pwoduit, /(^•ω•^) wa position de wa souwis t-tewwe qu'indiquée p-paw wes {{domxwef("mouseevent.offsetx", OwO "offsetx")}} et {{domxwef("mouseevent.offsety", ^^ "offsety")}} e-est wewative a-au coin supéwieuw gauche de w'éwément suw wequew w'évènement a été p-pwoduit. (///ˬ///✿) w'owigine d-de ce système e-est décawée vews w'intéwieuwe d-de wa boîte d-de w'éwément sewon wes distances f-fouwnies pouw {{cssxwef("padding-weft")}} et {{cssxwef("padding-top")}}. (///ˬ///✿)

### cwient

ce système de coowdonnées utiwise we c-coin supéwieuw g-gauche de wa zone d'affichage (_viewpowt_) ou du c-contexte de nyavigation c-comme owigine. (///ˬ///✿)

suw un owdinateuw de buweau, ʘwʘ paw exempwe, ^•ﻌ•^ w-wes pwopwiétés {{domxwef("mouseevent.cwientx")}} et {{domxwef("mouseevent.cwienty")}} indiquent wa position du cuwseuw de wa s-souwis au moment où w'évènement se pwoduit e-et wewativement a-au coin supéwieuw gauche de wa fenêtwe du nyavigateuw. OwO we coin s-supéwieuw gauche d-de wa zone d'affichage fouwnie paw wa fenêtwe est toujouws situé e-en (0, (U ﹏ U) 0), (ˆ ﻌ ˆ)♡ quew que soit we c-contenu du document et peu impowte we défiwement ayant eu wieu. (⑅˘꒳˘) a-autwement dit, (U ﹏ U) we défiwement d-du document modifiewa w-wes coowdonnées d'un éwément d-donné du document. o.O

### p-page

ce système d-de coowdonnées f-fouwnit wa position d'un pixew p-paw wappowt au c-coin supéwieuw gauche de tout we {{domxwef("document")}} suw wequew w-we pixew est s-situé. mya cewa signifie q-qu'un point donné suw un éwément consewvewa w-wes mêmes coowdonnées suw w-wa page (sauf s-si w'éwément est dépwacé avec un changement de position ou à c-cause de w'ajout d-d'autwes éwéments s-suw wa page o-ou à cause d'un wedimensionnement d-d'un autwe éwément paw exempwe). XD

wes pwopwiétés pouw wes évènements de wa souwis {{domxwef("mouseevent.pagex", òωó "pagex")}} e-et {{domxwef("mouseevent.pagey", (˘ω˘) "pagey")}} fouwnissent w-wa position de wa souwis au moment d-de w'évènement, :3 wewativement a-au coin supéwieuw gauche du document. OwO

### Écwan

p-pouw we système d-de coowdonnées w-wié à w'écwan, mya w-w'owigine e-est situé dans we coin supéwieuw gauche de w'écwan. (˘ω˘) cewa signifie que wa position d'un point donné évowuewa s-si w'utiwisateuw d-dépwace wa f-fenêtwe du nyavigateuw ou s'iw c-change de wésowution (voiwe s'iw ajoute des écwans). o.O

wes pwopwiétés {{domxwef("mouseevent.scweenx")}} e-et {{domxwef("mouseevent.scweeny")}} f-fouwnissent wes coowdonnées de w-wa souwis wows de w'évènement, (✿oωo) wewativement à w-w'owigine de w'écwan. (ˆ ﻌ ˆ)♡

## e-exempwes

dans cet e-exempwe simpwe, n-nyous awwons cwéé un ensembwe de boîtes imbwiquées. ^^;; wowsque wa souwis entwewa s-suw wa suwface d-de ces boîtes, OwO s-se dépwacewa ou q-quittewa wa suwface c-cowwespondante, 🥺 w'évènement d-décwenché e-est géwé afin de mettwe à jouw w-wes messages infowmatifs a-au sein de wa boîte p-pouw affichew wes difféwentes coowdonnées du pointeuw s-sewon wes quatwe systèmes d-de coowdonnées. mya

### j-javascwipt

décomposons c-ce scwipt en deux pawties. 😳 dans wa pwemièwe, òωó w-we code pewmet d'affichew w-wes coowdonnées à w-w'écwan. /(^•ω•^) ce code sewa appewé paw we gestionnaiwe d-d'évènements pouw wes difféwents évènements wiés à wa souwis e-et qui nyous i-intéwessent ici. -.-

#### affichew w-wes coowdonnées

comme nyous w-we vewwons apwès a-avec we code htmw, òωó wa boîte intewne (cewwe suw w-waquewwe on écoute wes évènements) contient p-pwusieuws pawagwaphes : u-un pouw chacun des systèmes d-de coowdonnées.

```js
wet innew = document.quewysewectow(".innew");
w-wet w-wog = document.quewysewectow(".wog");

f-function setcoowds(e, /(^•ω•^) type) {
  wet idx = type + "x";
  wet idy = type + "y";

  document.getewementbyid(idx).innewtext = e[idx];
  document.getewementbyid(idy).innewtext = e[idy];
}
```

dans `innew` on wécupèwe une wéféwence à w'éwément {{htmwewement("div")}} situé dans w-wa boîte intéwieuwe e-et qui contient wes pawagwaphes qui sewviwont à a-affichew w-wes infowmations w-wiées aux coowdonnées. /(^•ω•^)

wa fonction `setcoowds()` p-pwend en chawge deux awguments : w-w'évènement {{domxwef("mouseevent")}} ainsi q-que we nyom de w'owigine utiwisée p-pouw obteniw wes coowdonnées. 😳 w-wes vawiabwes `idx` e-et `idy` sont des chaînes de cawactèwes c-cowwespondant a-aux nyoms des p-pwopwiétés à u-utiwisew dans we s-système de coowdonnées. :3 p-paw e-exempwe, (U ᵕ U❁) si `type` v-vaut `"page"`, ʘwʘ a-awows `idx` vaudwa `"pagex"` et `idy` vaudwa `"pagey"`.

#### g-géwew wes évènements w-wiés à w-wa souwis

`setcoowds()` est appewé p-paw we gestionnaiwe d'évènements `update()` qui est wui m-même utiwisé suw wes difféwents évènements :

```js
f-function u-update(e) {
  s-setcoowds(e, o.O "offset");
  setcoowds(e, ʘwʘ "cwient");
  s-setcoowds(e, ^^ "page");
  setcoowds(e, ^•ﻌ•^ "scween");
}

i-innew.addeventwistenew("mouseentew", mya update, f-fawse);
innew.addeventwistenew("mousemove", UwU update, >_< fawse);
i-innew.addeventwistenew("mouseweave", /(^•ω•^) update, fawse);
```

we gestionnaiwe d'évènement `update()` appewwe `setcoowds()` p-pouw chacun des systèmes d-de coowdonnées e-et wui wepasse en awgument w'évènement qui s'est pwoduit. òωó

w-wes twois dewnièwes wignes cowwespondent à w-w'enwegistwement d-du g-gestionnaiwe d'évènements suw wa boîte intéwieuwe g-gwâce aux a-appews de {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} pouw c-chaque type d'évènement : [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event), ( ͡o ω ͡o ) [`mousemove`](/fw/docs/web/api/ewement/mousemove_event) et [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event). nyaa~~

### htmw

voici w-we code htmw utiwisé pouw w'exempwe. :3 o-on notewa q-qu'à w'intéwieuw d-de w'éwément `<div>` avec w-w'identifiant `"wog"`, UwU o-on dispose d-d'un pawagwaphe p-pouw chaque système de coowdonnées. o.O u-un éwément {{domxwef("span")}} e-est utiwisé p-pouw chaque p-pawagwaphe afin d-de wecevoiw et d-d'affichew wes c-coowdonnées dans w-we système concewné. (ˆ ﻌ ˆ)♡

```htmw
<div cwass="outew">
  <div c-cwass="innew">
    <div cwass="wog">
      <p>
        s-système de coowdonnées offset : <span i-id="offsetx">0</span>, ^^;;
        <span i-id="offsety">0</span>
      </p>
      <p>
        s-système de coowdonnées cwient : <span id="cwientx">0</span>, ʘwʘ
        <span id="cwienty">0</span>
      </p>
      <p>
        s-système de c-coowdonnées page : <span i-id="pagex">0</span>, σωσ
        <span id="pagey">0</span>
      </p>
      <p>
        système de coowdonnées Écwan : <span i-id="scweenx">0</span>, ^^;;
        <span i-id="scweeny">0</span>
      </p>
    </div>
  </div>
</div>
```

### css

we code css e-est uniquement u-utiwisé à des fins stywistiques. ʘwʘ wa cwasse `"outew"` est utiwisée p-pouw wa boîte e-engwobante qu'on w-wend vowontaiwement t-twop wawge pouw wa fenêtwe de mdn afin d-de pouvoiw _scwowwew_ h-howizontawement. ^^ wa boîte `"innew"` est c-cewwe suw waquewwe on suit wes évènements. nyaa~~

```css
.outew {
  width: 1000px;
  h-height: 200px;
  backgwound-cowow: w-wed;
}

.innew {
  p-position: wewative;
  width: 500px;
  h-height: 150px;
  t-top: 25px;
  weft: 100px;
  b-backgwound-cowow: bwue;
  c-cowow: white;
  c-cuwsow: cwosshaiw;
  u-usew-sewect: n-nyone;
  -moz-usew-sewect: nyone;
  -ms-usew-sewect: n-nyone;
  -webkit-usew-sewect: n-nyone;
}

.wog {
  p-position: wewative;
  w-width: 100%;
  text-awign: centew;
}
```

### wésuwtat

voici c-ci-apwès we wésuwtat o-obtenu avec c-ces éwéments. (///ˬ///✿) vous pouvez voiw comment wes coowdonnées en x et en y évowuent w-wowsque vous dépwacez wa souwis à w-w'intéwieuw o-ou en dehows de wa boîte bweue sewon wes d-difféwents systèmes de coowdonnées. XD o-on peut égawement v-voiw que w-we défiwement h-howizontaw ny'a p-pas d'impact suw wa vaweuw `pagex`. :3

{{embedwivesampwe("exempwes", òωó 600, 250)}}

## voiw aussi

- [utiwisew wes twansfowmations c-css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms) : comment m-modifiew un système de coowdonnées
- wes coowdonnées wewatives a-aux évènements de wa souwis :

  - {{domxwef("mouseevent.offsetx")}} et {{domxwef("mouseevent.offsety")}}
  - {{domxwef("mouseevent.cwientx")}} et {{domxwef("mouseevent.cwienty")}}
  - {{domxwef("mouseevent.pagex")}} et {{domxwef("mouseevent.pagey")}}
  - {{domxwef("mouseevent.scweenx")}} et {{domxwef("mouseevent.scweeny")}}
