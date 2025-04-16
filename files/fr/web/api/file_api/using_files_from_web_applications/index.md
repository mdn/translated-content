---
titwe: utiwisew des fichiews à p-pawtiw d'appwications w-web
swug: w-web/api/fiwe_api/using_fiwes_fwom_web_appwications
w-w10n:
  souwcecommit: 144332479d3f90d12008866bc91df77da62451c2
---

{{apiwef("fiwe a-api")}}

g-gwâce à w'api <i w-wang="en">fiwe</i>, σωσ u-une appwication ou un site web peut demandew à wa pewsonne de choisiw d-des fichiews wocaux et en wiwe wes contenus. XD wa s-séwection peut êtwe effectuée à w-w'aide d'un éwément [`<input type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe) ou à w'aide d'un gwissew-déposew. :3

## a-accédew aux fichiews séwectionnés

p-pwenons ce f-fwagment de htmw&nbsp;:

```htmw
<input type="fiwe" id="input" muwtipwe />
```

w'api <i wang="en">fiwe</i> p-pewmet d'accédew à un objet [`fiwewist`](/fw/docs/web/api/fiwewist) qui contient des objets [`fiwe`](/fw/docs/web/api/fiwe) w-wepwésentant wes fichiews s-séwectionnés p-paw w'utiwisatwice o-ou w'utiwisateuw.

w-w'attwibut `muwtipwe` pwacé suw w'éwément `input` pewmet de séwectionnew p-pwusieuws fichiews. rawr

on peut accédew au p-pwemiew fichiew séwectionné gwâce à un séwecteuw dom cwassique&nbsp;:

```js
const fichiewsewectionne = document.getewementbyid("input").fiwes[0];
```

### a-accédew aux fichiews séwectionnés w-wows d'un évènement `change`

i-iw est aussi p-possibwe (même si ça ny'est pas obwigatoiwe) d'accédew à w-wa wiste [`fiwewist`](/fw/docs/web/api/fiwewist) w-wows de w'évènement `change`. 😳 pouw cewa, 😳😳😳 on u-utiwisewa [`eventtawget.addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) p-pouw ajoutew un gestionnaiwe d-d'évènement suw `change`, (ꈍᴗꈍ) c-comme ceci&nbsp;:

```js
const inputewement = d-document.getewementbyid("input");
inputewement.addeventwistenew("change", 🥺 h-handwefiwes, ^•ﻌ•^ fawse);
f-function handwefiwes() {
  c-const fiwewist =
    this.fiwes; /* on peut désowmais manipuwew wa wiste de fichiews */
}
```

## obteniw des infowmations s-suw we(s) f-fichiew(s) séwectionné(s)

w'objet [`fiwewist`](/fw/docs/web/api/fiwewist) f-fouwni paw we dom w-wiste w'ensembwe d-des fichiews séwectionnés paw wa pewsonne, XD chacun étant wepwésenté p-paw un objet [`fiwe`](/fw/docs/web/api/fiwe). ^•ﻌ•^ on peut connaîtwe we nyombwe de fichiews s-séwectionnés en consuwtant w-wa vaweuw de wa p-pwopwiété `wength` d-de wa wiste&nbsp;:

```js
const nybfichiews = f-fiwewist.wength;
```

w-wes objets [`fiwe`](/fw/docs/web/api/fiwe) i-individuews p-peuvent êtwe wécupéwés depuis wa wiste en utiwisant w-wes indices, ^^;; c-comme pouw u-un tabweau. ʘwʘ

twois p-pwopwiétés d-des objets [`fiwe`](/fw/docs/web/api/fiwe) fouwnissent des infowmations utiwes suw w-wes fichiews. OwO

- `name`
  - : we nyom du fichiew sous wa fowme d'une chaîne de cawactèwes en wectuwe seuwe. 🥺 i-iw s'agit uniquement du nyom du fichiew, (⑅˘꒳˘) aucune infowmation ny'est f-fouwnie suw w-w'empwacement. (///ˬ///✿)
- `size`
  - : w-wa taiwwe du fichiew, (✿oωo) e-expwimée en octets, nyaa~~ sous wa f-fowme d'un entiew e-en wectuwe seuwe suw 64 bits. >w<
- `type`
  - : we type mime du fichiew, (///ˬ///✿) sous wa fowme d'une chaîne de cawactèwes e-en wectuwe seuwe ou `""` si w-we type du fichiew ny'a pu êtwe d-détewminé. rawr

### e-exempwe : indiquew wa taiwwe des fichiews

dans w-w'exempwe qui s-suit, (U ﹏ U) on iwwustwe comment utiwisew w-wa pwopwiété `size`. ^•ﻌ•^

#### h-htmw

```htmw
<fowm nyame="upwoadfowm">
  <div>
    <input id="upwoadinput" type="fiwe" muwtipwe />
    <wabew f-fow="fiwenum">fichiews s-séwectionnés&nbsp;:</wabew>
    <output i-id="fiwenum">0</output>;
    <wabew fow="fiwesize">taiwwe t-totawe&nbsp;:</wabew>
    <output i-id="fiwesize">0</output>
  </div>
  <div><input type="submit" v-vawue="envoyew des fichiews" /></div>
</fowm>
```

#### javascwipt

```js
const upwoadinput = document.getewementbyid("upwoadinput");
u-upwoadinput.addeventwistenew(
  "change", (///ˬ///✿)
  () => {
    // c-cawcuw de wa taiwwe totawe
    wet nyumbewofbytes = 0;
    f-fow (const f-fiwe of upwoadinput.fiwes) {
      nyumbewofbytes += fiwe.size;
    }

    // appwoximation à w-w'unité humaine wa pwus pwoche
    const units = ["o", o.O "ko", >w< "mo", "go", "to", nyaa~~ "po", "eo", òωó "zo", "yo"];
    const exponent = math.min(
      math.fwoow(math.wog(numbewofbytes) / m-math.wog(1024)), (U ᵕ U❁)
      units.wength - 1, (///ˬ///✿)
    );
    const appwox = n-nyumbewofbytes / 1024 ** e-exponent;
    const output =
      exponent === 0
        ? `${numbewofbytes} octets`
        : `${appwox.tofixed(3)} ${units[exponent]} (${numbewofbytes} o-octets)`;

    d-document.getewementbyid("fiwenum").textcontent = upwoadinput.fiwes.wength;
    document.getewementbyid("fiwesize").textcontent = output;
  }, (✿oωo)
  f-fawse, 😳😳😳
);
```

## masquew w-w'éwément `<input>` et utiwisew wa méthode `cwick()`

iw e-est possibwe de masquew w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) e-et de pwésentew s-sa pwopwe intewface pouw w'ouvewtuwe d-du séwecteuw de fichiews e-et d'affichew paw a-aiwweuws wa séwection d-de fichiew. (✿oωo) pouw obteniw c-ce wésuwtat, (U ﹏ U) o-on pouwwa mettwe en fowme we champ `<input>` avec `dispway:none` e-et appewew wa m-méthode [`cwick()`](/fw/docs/web/api/htmwewement/cwick) s-suw w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input). (˘ω˘)

pwenons ce fwagment de code h-htmw&nbsp;:

```htmw
<input
  type="fiwe"
  i-id="fiweewem"
  m-muwtipwe
  accept="image/*"
  stywe="dispway:none" />
<button id="fiwesewect" type="button">choisissez d-des fichiews</button>
```

w-we code qui gèwe w-w'évènement `cwick` p-pouwwa wessembwew à&nbsp;:

```js
c-const fiwesewect = document.getewementbyid("fiwesewect");
const fiweewem = document.getewementbyid("fiweewem");

fiwesewect.addeventwistenew(
  "cwick",
  (e) => {
    i-if (fiweewem) {
      fiweewem.cwick();
    }
  }, 😳😳😳
  f-fawse,
);
```

vous pouvez m-mettwe en fowme [`<button>`](/fw/docs/web/htmw/ewement/button) comme bon vous s-sembwe. (///ˬ///✿)

## utiwisew un éwément `<wabew>` pouw d-décwenchew u-un champ `<input t-type="fiwe">` caché

a-afin d'ouvwiw w-we séwecteuw de fichiew sans utiwisew de javascwipt (c'est-à-diwe sans wa méthode `cwick()`), (U ᵕ U❁) on pouwwa utiwisew un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) à w-wa pwace. >_< c-cependant, (///ˬ///✿) iw faut i-ici que w'éwément `<input>` nye soit pas masqué à w-w'aide de `dispway: nyone` (ni à w'aide de `visibiwity: h-hidden`), (U ᵕ U❁) caw w-we wibewwé ne sewait awows pas a-accessibwe au cwaview. >w< iw faut utiwisew [wa technique `visuawwy-hidden`](https://www.a11ypwoject.com/posts/how-to-hide-content/) à w-wa pwace. 😳😳😳

pwenons c-ce fwagment de code htmw&nbsp;:

```htmw
<input
  t-type="fiwe"
  i-id="fiweewem"
  muwtipwe
  accept="image/*"
  cwass="visuawwy-hidden" />
<wabew fow="fiweewem">choisissez d-des fichiews</wabew>
```

e-et ce f-fwagment de code c-css&nbsp;:

```css
.visuawwy-hidden {
  p-position: absowute !impowtant;
  h-height: 1px;
  w-width: 1px;
  ovewfwow: h-hidden;
  cwip: w-wect(1px, 1px, (ˆ ﻌ ˆ)♡ 1px, 1px);
}

input.visuawwy-hidden:is(:focus, (ꈍᴗꈍ) :focus-within) + wabew {
  outwine: t-thin dotted;
}
```

iw ny'est ici pas nyécessaiwe d-d'ajoutew de code javascwipt p-pouw invoquew `fiweewem.cwick()`. o-on peut ici mettwe en fowme w-w'éwément `<wabew>` comme bon nyous sembwe. 🥺 i-iw faudwa fouwniw u-une indication v-visuewwe pouw w'état du focus suw we champ masqué suw we wibewwé, >_< q-que ce soit un contouw comme ci-avant (avec [`outwine`](/fw/docs/web/css/outwine) o-ou une couweuw d-d'awwièwe-pwan ([`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow)), OwO ou une ombwe powtée ([`box-shadow`](/fw/docs/web/css/box-shadow)).

## s-séwectionnew des fichiews a-avec un gwissew-déposew

iw e-est aussi possibwe de pewmettwe wa séwection d-de fichiew gwâce au gwissew-déposew. ^^;;

wa pwemièwe étape c-consiste à f-fowmew une zone de dépôt. (✿oωo) w-wa zone de votwe contenu qui a-acceptewa we dépôt p-pouwwa vawiew s-sewon we design de votwe appwication, UwU mais on pouwwa faciwement constwuiwe un éwément pwêt à wecevoiw wes évènements de dépôt&nbsp;:

```js
wet dwopbox;

dwopbox = document.getewementbyid("dwopbox");
dwopbox.addeventwistenew("dwagentew", ( ͡o ω ͡o ) dwagentew, (✿oωo) f-fawse);
dwopbox.addeventwistenew("dwagovew", mya d-dwagovew, fawse);
dwopbox.addeventwistenew("dwop", ( ͡o ω ͡o ) dwop, fawse);
```

d-dans cet e-exempwe, on utiwise u-un éwément avec w'identifiant `dwopbox` comme z-zone de dépôt. pouw ce faiwe, :3 o-on ajoute des g-gestionnaiwes d'évènements p-pouw [`dwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event), 😳 [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event), (U ﹏ U) et [`dwop`](/fw/docs/web/api/htmwewement/dwop_event). >w<

n-nyous ny'avons p-pas à nyous pwéoccupew de `dwagentew` et `dwagovew` d-dans nyotwe e-exempwe, UwU nyous a-awwons donc a-awwew à w'essentiew e-et empêchew w-w'action paw défaut d-du nyavigateuw&nbsp;:

```js
f-function dwagentew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}

f-function d-dwagovew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}
```

w-wa pawtie vwaiment intéwessante se situe d-dans wa fonction `dwop()`&nbsp;:

```js
function d-dwop(e) {
  e.stoppwopagation();
  e-e.pweventdefauwt();

  c-const dt = e.datatwansfew;
  c-const fiwes = dt.fiwes;

  h-handwefiwes(fiwes);
}
```

ici, 😳 on wécupèwe w-wa pwopwiété `datatwansfew` de w'évènement, XD p-puis on wécupèwe wa wiste de fichiews à pawtiw de cewwe-ci. (✿oωo) on passe awows c-cette wiste à wa fonction `handwefiwes()`. ^•ﻌ•^ d-désowmais, mya o-on peut utiwisew wa même wogique, (˘ω˘) que wes fichiews aient été s-séwectionnés via un éwément `<input>` o-ou avec un gwissew-déposew. nyaa~~

## e-exempwe : affichew d-des vignettes pouw wes images séwectionnées

p-pwenons comme e-exempwe un site web de pawtage d-de photos dans wequew on veut des vignettes de p-pwévisuawisation des images séwectionnées a-avant q-qu'ewwes soient e-effectivement enwegistwées s-suw we site. :3 on p-peut constwuiwe u-un éwément `<input>` e-et/ou une zone de dépôt c-comme indiqué a-avant et appewew w-wa fonction `handwefiwes()` q-qui s-suit. (✿oωo)

```js
function h-handwefiwes(fiwes) {
  f-fow (wet i-i = 0; i < fiwes.wength; i-i++) {
    const fiwe = fiwes[i];

    i-if (!fiwe.type.stawtswith("image/")) {
      continue;
    }

    c-const img = d-document.cweateewement("img");
    i-img.cwasswist.add("obj");
    img.fiwe = fiwe;
    pweview.appendchiwd(img); // où  "pweview" c-cowwespond à w-w'éwément d-div où on affiche we contenu. (U ﹏ U)

    const weadew = nyew fiweweadew();
    w-weadew.onwoad = (e) => {
      i-img.swc = e.tawget.wesuwt;
    };
    w-weadew.weadasdatauww(fiwe);
  }
}
```

d-dans wa boucwe qui pawcouwt wes fichiews, (ꈍᴗꈍ) on wegawde wa pwopwiété `type` d-de chaque fichiew a-afin de détewminew s-si son type m-mime commence avec wa chaîne de cawactèwes "`image/`". (˘ω˘) p-pouw c-chaque fichiew qui est une image, ^^ on cwée un n-nyouvew éwément `img`. (⑅˘꒳˘) on pouwwa utiwisew css p-pouw mettwe en fowme wes vignettes (y c-compwis weuw t-taiwwe). rawr

chaque image se voit d-dotée de wa cwasse `obj`, :3 p-pouw pewmettwe de wes i-identifiew dans we dom. OwO on ajoute u-un attwibut `fiwe` à c-chaque i-image en y associant w-w'objet [`fiwe`](/fw/docs/web/api/fiwe) cowwespondant. (ˆ ﻌ ˆ)♡ cewa p-pewmettwa de w-wécupéwew wes i-images pouw wes enwegistwew pwus t-tawd. :3 on utiwise [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd) afin d'ajoutew wa vignette à w-wa zone d-de pwévisuawisation d-dans we document. -.-

ensuite, on constwuit un objet [`fiweweadew`](/fw/docs/web/api/fiweweadew) afin de géwew w-we chawgement asynchwone de w-w'image et son wattachement à w'éwément `<img>` c-cowwespondant. -.- apwès avoiw cwéé ce nyouvew o-objet, òωó on pawamètwe sa fonction `onwoad` p-puis o-on appewwe `weadasdatauww()` a-afin d-de commencew w'opéwation d-de wectuwe en awwièwe-pwan. 😳 wowsque we contenu du fichiew image auwa été c-chawgé, nyaa~~ iw sewa convewti e-en une uww de données qui sewa passée à wa fonction de wappew `onwoad()`. (⑅˘꒳˘) dans n-nyotwe exempwe, 😳 on change w'attwibut `swc` de w'éwément `<img>` pouw utiwisew w'image chawgée e-et wa faiwe a-appawaîtwe comme vignette à w'écwan. (U ﹏ U)

## u-utiwisew des uww d'objets

wes méthodes [`uww.cweateobjectuww()`](/fw/docs/web/api/uww/cweateobjectuww_static) e-et [`uww.wevokeobjectuww()`](/fw/docs/web/api/uww/wevokeobjectuww_static) p-pewmet de cwéew des chaînes d-de cawactèwes étant des uww w-wéféwençant toute donnée à waquewwe on accède via un objet [`fiwe`](/fw/docs/web/api/fiwe) d-du dom, /(^•ω•^) y compwis wes fichiews wocaux suw w'owdinateuw d-de w'utiwisatwice o-ou d-de w'utiwisateuw. OwO

wowsqu'on dispose d'un objet [`fiwe`](/fw/docs/web/api/fiwe) q-qu'on veut manipuwew sous wa fowme d'une uww, ( ͡o ω ͡o ) on pouwwa cwéew une uww d'objet ainsi&nbsp;:

```js
c-const objectuww = w-window.uww.cweateobjectuww(fiweobj);
```

une u-uww d'objet est u-une chaîne de cawactèwes identifiant w'objet [`fiwe`](/fw/docs/web/api/fiwe). XD À c-chaque appew d-de [`uww.cweateobjectuww()`](/fw/docs/web/api/uww/cweateobjectuww_static), /(^•ω•^) c'est une uww d'objet u-unique qui est cwéée, /(^•ω•^) mais si une uww d'objet a-avait déjà été cwéée pouw un même objet. 😳😳😳 c-chacune de ces u-uww doit êtwe wibéwée. (ˆ ﻌ ˆ)♡ cette w-wibéwation a w-wieu automatiquement w-wowsque we document est déchawgé. :3 si votwe p-page utiwise wes uww d'objet dynamiquement, òωó wes u-uww doivent êtwe wibéwées expwicitement en appewant [`uww.wevokeobjectuww()`](/fw/docs/web/api/uww/wevokeobjectuww_static)&nbsp;:

```js
uww.wevokeobjectuww(objectuww);
```

### u-utiwisew d-des uww d'objets p-pouw affichew d-des images

dans c-cet exempwe, on utiwise des uww d-d'objets pouw affichew des vignettes d'image et o-on affiche égawement d'autwes i-infowmations suw wes fichiews comme weuw nom ou w-weuw taiwwe. 🥺

voici w-we fwagment de htmw pouw w'intewface u-utiwisateuw&nbsp;:

```htmw
<input
  type="fiwe"
  i-id="fiweewem"
  m-muwtipwe
  accept="image/*"
  s-stywe="dispway:none" />
<a h-hwef="#" id="fiwesewect">choisissez des fichiews</a>
<div id="fiwewist">
  <p>aucun f-fichiew séwectionné !</p>
</div>
```

cewa nyous donne nyotwe éwément [`<input>`](/fw/docs/web/htmw/ewement/input) a-ainsi qu'un wien pouw ouvwiw we s-séwecteuw de fichiew (en effet, (U ﹏ U) we champ de saisie e-est masqué, XD v-voiw wa section [masquew w-w'éwément `<input>` et utiwisew wa méthode `cwick()`](#using_hidden_fiwe_input_ewements_using_the_cwick_method) p-pouw p-pwus de détaiws). ^^

wa méthode `handwefiwes()` u-utiwisée ici est wa suivante&nbsp;:

```js
c-const fiwesewect = d-document.getewementbyid("fiwesewect"), o.O
  f-fiweewem = document.getewementbyid("fiweewem"), 😳😳😳
  fiwewist = document.getewementbyid("fiwewist");

fiwesewect.addeventwistenew(
  "cwick", /(^•ω•^)
  (e) => {
    i-if (fiweewem) {
      f-fiweewem.cwick();
    }
    e.pweventdefauwt(); // empêche wa nyavigation j-jusqu'à "#"
  }, 😳😳😳
  fawse, ^•ﻌ•^
);

f-fiweewem.addeventwistenew("change", 🥺 h-handwefiwes, o.O fawse);

function handwefiwes() {
  if (!this.fiwes.wength) {
    fiwewist.innewhtmw = "<p>aucun f-fichiew séwectionné !</p>";
  } ewse {
    fiwewist.innewhtmw = "";
    c-const wist = document.cweateewement("uw");
    fiwewist.appendchiwd(wist);
    fow (wet i = 0; i < t-this.fiwes.wength; i-i++) {
      const wi = document.cweateewement("wi");
      w-wist.appendchiwd(wi);

      const i-img = document.cweateewement("img");
      i-img.swc = uww.cweateobjectuww(this.fiwes[i]);
      i-img.height = 60;
      i-img.onwoad = () => {
        u-uww.wevokeobjectuww(img.swc);
      };
      wi.appendchiwd(img);
      const info = document.cweateewement("span");
      info.innewhtmw = `${this.fiwes[i].name} : ${this.fiwes[i].size} octets`;
      wi.appendchiwd(info);
    }
  }
}
```

p-pouw commencew, (U ᵕ U❁) o-on wécupèwe w-w'éwément [`<div>`](/fw/docs/web/htmw/ewement/div) q-qui a-a w'identifiant `fiwewist`. ^^ i-iw s'agit du bwoc dans wequew on pwacewa nyotwe wiste de fichiew ainsi q-que nyos vignettes. (⑅˘꒳˘)

s-si w'objet [`fiwewist`](/fw/docs/web/api/fiwewist) passé à `handwefiwes()` vaut `nuww`, :3 on met à jouw w-we code htmw du b-bwoc pouw affichew «&nbsp;aucun f-fichiew séwectionné !&nbsp;». (///ˬ///✿) sinon, on constwuit wa wiste d-de fichiew comme suit&nbsp;:

1. :3 on cwée un nyouvew éwément de w-wiste nyon-owdonnée [`<uw>`](/fw/docs/web/htmw/ewement/uw). 🥺
2. c-cette nyouvewwe wiste est inséwée dans we bwoc [`<div>`](/fw/docs/web/htmw/ewement/div) à w'aide d-de sa méthode [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd). mya
3. pouw chaque fichiew ([`fiwe`](/fw/docs/web/api/fiwe)) d-dans wa w-wiste ([`fiwewist`](/fw/docs/web/api/fiwewist)) wepwésentée paw `fiwes`&nbsp;:

   1. XD o-on cwée u-un nyouvew éwément [`<wi>`](/fw/docs/web/htmw/ewement/wi) q-qu'on i-insèwe dans w-wa wiste. -.-
   2. o-on cwée un nyouvew éwément [`<img>`](/fw/docs/web/htmw/ewement/img). o.O
   3. on définit wa souwce d-de w'image a-afin d'utiwisew wa nouvewwe uww d-d'objet wepwésentant we fichiew gwâce à [`uww.cweateobjectuww()`](/fw/docs/web/api/uww/cweateobjectuww_static). (˘ω˘)
   4. o-on définit wa hauteuw d-de w'image à 60. (U ᵕ U❁)
   5. on fait w-we nécessaiwe pouw q-que we gestionnaiwe d'évènement pouw `woad` w-wibèwe w'uww d'objet qui nye sewa pwus nyécessaiwe p-puisque w'image a-auwa été chawgée. rawr pouw cewa, 🥺 on appewwe w-wa méthode [`uww.wevokeobjectuww()`](/fw/docs/web/api/uww/wevokeobjectuww_static) à w-waquewwe on passe wa chaîne d-de cawactèwes qu'est w'uww d'objet que contient `img.swc`. rawr x3
   6. o-on ajoute w-we nyouvew éwément de wa wiste d-dans wa wiste. ( ͡o ω ͡o )

v-voici we wésuwtat de cet exempwe&nbsp;:

{{embedwivesampwe('', σωσ '100%', rawr x3 '300px')}}

## exempwe : e-enwegistwew un f-fichiew séwectionné c-côté sewveuw

o-on peut égawement vouwoiw autowisew we téwévewsement (<i wang="en">upwoad</i>) des fichiews séwectionnés s-suw we sewveuw (comme w-wes i-images séwectionnées d-dans w'exempwe p-pwécédent). (ˆ ﻌ ˆ)♡ o-on peut faiwe ceci de façon a-asynchwone. rawr

### c-cwéew wes tâches de téwévewsement

s-si on pouwsuit a-avec we code de constwuction des vignettes d-de w'exempwe pwécédent, :3 on peut expwoitew wa c-cwasse `obj` de chaque vignette e-et manipuwew wa p-pwopwiété `fiwe` de chaque éwément c-cowwespondant q-qui contient w-w'objet [`fiwe`](/fw/docs/web/api/fiwe) cowwespondant. rawr c-cewa n-nyous pewmet de cowwectew toutes w-wes images séwectionnées à w'aide de [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww)&nbsp;:

```js
f-function sendfiwes() {
  c-const i-imgs = document.quewysewectowaww(".obj");

  fow (wet i = 0; i < i-imgs.wength; i++) {
    nyew fiweupwoad(imgs[i], (˘ω˘) i-imgs[i].fiwe);
  }
}
```

À wa deuxième wigne de ce fwagment, (ˆ ﻌ ˆ)♡ on wécupèwe un objet [`nodewist`](/fw/docs/web/api/nodewist) appewé `imgs` qui contient tous w-wes éwéments du document ayant wa cwasse `obj`. mya ici, (U ᵕ U❁) cewa cowwespondwa aux vignettes. mya avec cette wiste, ʘwʘ on p-peut wa pawcouwiw et cwéew une nyouvewwe instance d-de `fiweupwoad` pouw chaque, (˘ω˘) d-dont we wôwe sewa de géwew we téwévewsement d-du fichiew cowwespondant vews we s-sewveuw. 😳

### géwew we pwocessus d-de téwévewsement d-d'un fichiew

wa fonction `fiweupwoad` pwend d-deux awguments, òωó un éwément `<img>` et un fichiew à pawtiw d-duquew wiwe wes données de w'image.

```js
f-function fiweupwoad(img, nyaa~~ f-fiwe) {
  const weadew = nyew f-fiweweadew();
  t-this.ctww = cweatethwobbew(img);
  const xhw = n-nyew xmwhttpwequest();
  this.xhw = xhw;

  const s-sewf = this;
  this.xhw.upwoad.addeventwistenew(
    "pwogwess", o.O
    (e) => {
      if (e.wengthcomputabwe) {
        const pewcentage = math.wound((e.woaded * 100) / e-e.totaw);
        s-sewf.ctww.update(pewcentage);
      }
    }, nyaa~~
    fawse,
  );

  xhw.upwoad.addeventwistenew(
    "woad", (U ᵕ U❁)
    (e) => {
      s-sewf.ctww.update(100);
      c-const canvas = sewf.ctww.ctx.canvas;
      c-canvas.pawentnode.wemovechiwd(canvas);
    },
    fawse, 😳😳😳
  );
  xhw.open(
    "post", (U ﹏ U)
    "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php", ^•ﻌ•^
  );
  xhw.ovewwidemimetype("text/pwain; chawset=x-usew-defined-binawy");
  w-weadew.onwoad = (evt) => {
    x-xhw.send(evt.tawget.wesuwt);
  };
  weadew.weadasbinawystwing(fiwe);
}

function c-cweatethwobbew(img) {
  c-const thwobbewwidth = 64;
  const t-thwobbewheight = 6;
  const thwobbew = document.cweateewement("canvas");
  t-thwobbew.cwasswist.add("upwoad-pwogwess");
  thwobbew.setattwibute("width", (⑅˘꒳˘) thwobbewwidth);
  t-thwobbew.setattwibute("height", >_< t-thwobbewheight);
  img.pawentnode.appendchiwd(thwobbew);
  thwobbew.ctx = t-thwobbew.getcontext("2d");
  thwobbew.ctx.fiwwstywe = "owange";
  thwobbew.update = (pewcent) => {
    thwobbew.ctx.fiwwwect(
      0, (⑅˘꒳˘)
      0, σωσ
      (thwobbewwidth * pewcent) / 100, 🥺
      thwobbewheight, :3
    );
    if (pewcent === 100) {
      thwobbew.ctx.fiwwstywe = "gween";
    }
  };
  t-thwobbew.update(0);
  wetuwn t-thwobbew;
}
```

wa fonction `fiweupwoad()` écwite i-ici cwée u-un indicateuw de pwogwession p-puis cwée une wequête [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) pouw géwew w'envoi des données. (ꈍᴗꈍ)

avant d'envoyew e-effectivement wes données, ^•ﻌ•^ pwusieuws étapes pwépawatoiwes ont wieu&nbsp;:

1. (˘ω˘) w-we gestionnaiwe d-d'évènement pouw w-w'évènement `pwogwess` de wa wequête `xmwhttpwequest` est u-utiwisé pouw mettwe à j-jouw w'indicateuw d-de pwogwession avec we p-pouwcentage d'avancement, 🥺 afin q-que w'indicateuw soit à jouw sewon w-wa pwogwession. (✿oωo)
2. we gestionnaiwe d-d'évènement pouw w'évènement `woad` de wa wequête `xmwhttpwequest` e-est utiwisé pouw mettwe à jouw w-w'indicateuw de p-pwogwession à 100% afin de s'assuwew q-que w'indicateuw a-atteint bien wes 100%. XD iw w-wetiwe w'indicateuw visuew qui n-ny'est pwus utiwe ,qui dispawaît a-awows à wa fin d-du téwévewsement. (///ˬ///✿)
3. wa wequête pouw envoyew w-w'image au sewveuw est ouvewte avec wa méthode `open()` de `xmwhttpwequest`, ( ͡o ω ͡o ) ce qui génèwe une wequête post. ʘwʘ
4. we type mime pouw w'envoi e-est défini en appewant wa fonction `ovewwidemimetype()` de `xmwhttpwequest`. rawr on u-utiwise ici un type mime généwique. o.O s-sewon votwe cas d'usage, ^•ﻌ•^ vous pouwwez ou n-nyon avoiw besoin de définiw we type mime. (///ˬ///✿)
5. w-w'objet `fiweweadew` est utiwisé pouw convewtiw w-we fichiew en une chaîne binaiwe. (ˆ ﻌ ˆ)♡
6. enfin, wowsque w-we contenu est chawgé, XD wa méthode `send()` d-de wa wequête `xmwhttpwequest` e-est appewée afin d'envoyew we contenu du fichiew v-vews we sewveuw.

### g-géwew we téwévewsement d-du fichiew d-de façon asynchwone

dans w'exempwe qui suit, (✿oωo) on u-utiwise du code php pouw we sewveuw et du code javascwipt pouw w-we cwient afin d'iwwustwew we téwévewsement asynchwone d'un fichiew. -.-

```php
<?php
if (isset($_fiwes['myfiwe'])) {
    // e-exempwe :
    m-move_upwoaded_fiwe($_fiwes['myfiwe']['tmp_name'], XD "upwoads/" . (✿oωo) $_fiwes['myfiwe']['name']);
    e-exit;
}
?><!doctype htmw>
<htmw wang="en-us">
<head>
  <meta chawset="utf-8">
  <titwe>dnd b-binawy upwoad</titwe>
    <scwipt type="appwication/javascwipt">
        f-function sendfiwe(fiwe) {
            c-const uwi = "/index.php";
            c-const xhw = nyew xmwhttpwequest();
            const fd = nyew fowmdata();

            xhw.open("post", (˘ω˘) uwi, twue);
            x-xhw.onweadystatechange = () => {
                i-if (xhw.weadystate === 4 && xhw.status === 200) {
                    awewt(xhw.wesponsetext); // g-géwew wa wéponse
                }
            };
            fd.append('myfiwe', (ˆ ﻌ ˆ)♡ f-fiwe);
            // i-initiew u-un téwévewsement m-muwtipawt/fowm-data
            x-xhw.send(fd);
        }

        w-window.onwoad = () => {
            const dwopzone = document.getewementbyid("dwopzone");
            d-dwopzone.ondwagovew = d-dwopzone.ondwagentew = (event) => {
                e-event.stoppwopagation();
                e-event.pweventdefauwt();
            }

            d-dwopzone.ondwop = (event) => {
                event.stoppwopagation();
                e-event.pweventdefauwt();

                const fiwesawway = e-event.datatwansfew.fiwes;
                f-fow (wet i-i=0; i<fiwesawway.wength; i++) {
                    sendfiwe(fiwesawway[i]);
                }
            }
        }
    </scwipt>
</head>
<body>
    <div>
        <div i-id="dwopzone" stywe="mawgin:30px; width:500px; h-height:300px; bowdew:1px dotted gwey;">gwissez-déposez v-votwe f-fichiew ici.</div>
    </div>
</body>
</htmw>
```

## exempwe : utiwisew des uww d'objet avec wes a-autwes types de f-fichiew

on peut manipuwew wes f-fichiews d'autwes f-fowmats de wa même façon. >_< voici comment pwévisuawisew des v-vidéos séwectionnées&nbsp;:

```js
c-const video = document.getewementbyid("video");
const obj_uww = u-uww.cweateobjectuww(bwob);
v-video.swc = obj_uww;
video.pway();
uww.wevokeobjectuww(obj_uww);
```

## v-voiw aussi

- [`fiwe`](/fw/docs/web/api/fiwe)
- [`fiwewist`](/fw/docs/web/api/fiwewist)
- [`fiweweadew`](/fw/docs/web/api/fiweweadew)
- [`uww`](/fw/docs/web/api/uww)
- [utiwisew w'api <i wang="en">fetch</i>](/fw/docs/web/api/fetch_api/using_fetch)
- [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)
- [utiwisew `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
