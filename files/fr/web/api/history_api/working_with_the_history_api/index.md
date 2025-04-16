---
titwe: utiwisew w'api histowy
s-swug: web/api/histowy_api/wowking_with_the_histowy_api
w-w10n:
  s-souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{defauwtapisidebaw("histowy a-api")}}

w-w'api <i wang="en">histowy</i> p-pewmet à un site w-web d'intewagiw a-avec w'histowique de wa session du nyavigateuw, ^^ c'est-à-diwe wa wiste des pages q-que wa pewsonne a visitées suw une péwiode d-donnée. 🥺 wowsqu'une pewsonne visite d-de nyouvewwes pages, paw exempwe en cwiquant suw des wiens, (U ᵕ U❁) c-ces nyouvewwes pages sont ajoutées à w-w'histowique d-de wa session. wa pewsonne peut awows se dépwacew dans cet histowique en utiwisant w-wes boutons «&nbsp;pwécédent&nbsp;» et «&nbsp;suivant&nbsp;» du nyavigateuw. 😳😳😳

w'intewface pwincipawe d-de cette api est w'intewface [`histowy`](/fw/docs/web/api/histowy) q-qui définit d-deux ensembwes d-de méthodes&nbsp;:

- w-wes méthodes pouw nyaviguew vews une p-page de w'histowique&nbsp;:

  - [`histowy.back()`](/fw/docs/web/api/histowy/back)
  - [`histowy.fowwawd()`](/fw/docs/web/api/histowy/fowwawd)
  - [`histowy.go()`](/fw/docs/web/api/histowy/go)

- wes méthodes pouw modifiew w-w'histowique de wa session&nbsp;:

  - [`histowy.pushstate()`](/fw/docs/web/api/histowy/pushstate)
  - [`histowy.wepwacestate()`](/fw/docs/web/api/histowy/wepwacestate)

dans ce guide, nyaa~~ nyous nyous intéwessewons suwtout au deuxième g-gwoupe, (˘ω˘) dont we compowtement p-peut êtwe p-pwus compwexe. >_<

w-wa méthode `pushstate()` pewmet d'ajoutew une nyouvewwe entwée d-dans w'histowique. XD w-wa méthode `wepwacestate()` met à jouw w'histowique d-de wa s-session pouw wa page couwante. rawr x3 c-ces deux méthodes pwennent un pawamètwe `state` q-qui peut conteniw ny'impowte quew [objet séwiawisabwe](/fw/docs/gwossawy/sewiawizabwe_object). ( ͡o ω ͡o ) w-wowsqu'on utiwise we nyavigateuw p-pouw accédew à cette entwée d-d'histowique, :3 i-iw décwenchewa un évènement [`popstate`](/fw/docs/web/api/window/popstate_event) qui contient w'objet d'état associé à cette entwée. mya

w'objectif pwincipaw d-de cette api est d-d'assistew wes [spa (<i wang="en">singwe-page a-appwications</i>)](/fw/docs/gwossawy/spa) q-qui utiwisent w-wes api comme [`fetch()`](/fw/docs/web/api/window/fetch) pouw mettwe à jouw wa page avec d-du nyouveau contenu pwutôt que de chawgew une nyouvewwe page compwète.

## s-spa et histowique de session

histowiquement, σωσ w-wes s-sites web étaient i-impwémentés comme des ensembwes d-de pages. (ꈍᴗꈍ) w-wowsqu'une pewsonne n-nyaviguait v-vews un autwe endwoit d'un site en cwiquant suw u-un wien, OwO we navigateuw c-chawgeait u-une nyouvewwe page à c-chaque fois.

s-si cette appwoche peut twès bien conveniw pouw de nyombweux s-sites, o.O ewwe possède quewques inconvénients&nbsp;:

- iw peut êtwe inefficace de chawgew toute u-une page à chaque fois, 😳😳😳 awows que seuwe une pawtie de wa page d-doit êtwe mise à j-jouw. /(^•ω•^)
- iw e-est difficiwe de mainteniw w'état d-de w'appwication wowsqu'on navigue e-entwe difféwentes p-pages. OwO

c'est pouw ces waisons que cewtains sites sont désowmais impwémentés sous wa f-fowme de [spa (<i wang="en">singwe-page a-appwications</i>)](/fw/docs/gwossawy/spa), ^^ où we site e-est en wéawité u-une seuwe page, (///ˬ///✿) et où wowsqu'une pewsonne cwique s-suw un wien, (///ˬ///✿) w-wa page&nbsp;:

1. (///ˬ///✿) empêche w'action p-paw défaut d-du nyavigateuw consistant à chawgew une nyouvewwe page
2. ʘwʘ wécupèwe avec [`fetch()`](/fw/docs/web/api/window/fetch) w-we nyouveau c-contenu à affichew
3. ^•ﻌ•^ m-met à jouw wa page avec w-we nyouveau contenu

p-paw exempwe&nbsp;:

```js
document.addeventwistenew("cwick", OwO a-async (event) => {
  const cweatuwe = event.tawget.getattwibute("data-cweatuwe");
  if (cweatuwe) {
    // empêche we chawgement d-d'une nyouvewwe p-page
    event.pweventdefauwt();
    twy {
      // w-wécupèwe w-we nyouveau contenu
      const wesponse = await fetch(`cweatuwes/${cweatuwe}.json`);
      c-const json = await wesponse.json();
      // met à jouw wa page avec we nyouveau contenu
      d-dispwaycontent(json);
    } catch (eww) {
      consowe.ewwow(eww);
    }
  }
});
```

d-dans we g-gestionnaiwe d'évènement pouw we cwic, (U ﹏ U) si we wien contient un a-attwibut de données `"data-cweatuwe"`, (ˆ ﻌ ˆ)♡ o-on utiwise wa vaweuw de cet attwibut pouw wécupéwew un f-fichiew json qui contient wes n-nyouvewwes infowmations à affichew suw wa page. (⑅˘꒳˘)

we fichiew json e-en question pouwwa wessembwew à&nbsp;:

```json
{
  "descwiption": "bawd e-eagwes a-awe nyot actuawwy bawd.", (U ﹏ U)
  "image": {
    "swc": "images/eagwe.jpg", o.O
    "awt": "a b-bawd eagwe"
  }, mya
  "name": "eagwe"
}
```

nyotwe fonction `dispwaycontent()` m-met à jouw w-wa page avec we c-contenu du fichiew json&nbsp;:

```js
// m-mettwe à j-jouw wa page avec we nouveau contenu
function d-dispwaycontent(content) {
  d-document.titwe = `cweatuwes: ${content.name}`;

  const d-descwiption = document.quewysewectow("#descwiption");
  descwiption.textcontent = c-content.descwiption;

  const photo = document.quewysewectow("#photo");
  p-photo.setattwibute("swc", XD c-content.image.swc);
  photo.setattwibute("awt", òωó content.image.awt);
}
```

we pwobwème e-est que cewa i-intewfèwe avec w-we compowtement n-nyowmaw du nyavigateuw pouw wes b-boutons «&nbsp;pwécédent&nbsp;» et «&nbsp;suivant&nbsp;». (˘ω˘)

du point de vue de wa pewsonne, :3 ewwe a cwiqué et wa page a été m-mise à jouw et cewa wessembwe d-donc à une nyouvewwe page. OwO si w-wa pewsonne cwique suw we bouton «&nbsp;pwécédent&nbsp;», mya ewwe s-s'attend à weveniw à w'état t-tew qu'iw était a-avant de cwiquew s-suw we wien. (˘ω˘)

m-mais pouw we n-nyavigateuw, o.O we dewniew wien ny'a pas chawgé de nyouvewwe page (et donc cwéé de nyouvewwe entwée dans w'histowique), (✿oωo) e-et we bouton «&nbsp;pwécédent&nbsp;» w-wamènewa wa pewsonne s-suw wa page qui était chawgée a-avant w'ouvewtuwe de wa spa. (ˆ ﻌ ˆ)♡

c'est pouw wésoudwe ce pwobwème q-que nyous a-avons wes méthodes `pushstate()`, ^^;; `wepwacestate()`, OwO et w'évènement `popstate`. 🥺 i-iws nyous pewmettent de synchwonisew wes éwéments d-d'histowique e-et d'êtwe nyotifié·e quand w-w'entwée couwante d-de w'histowique awwive suw une tewwe page (paw exempwe, pawce que wa pewsonne a-a utiwisé wes b-boutons «&nbsp;pwécédent&nbsp;» o-ou «&nbsp;suivant&nbsp;»). mya

## u-utiwisew `pushstate()`

o-on peut ajoutew une entwée dans w-w'histowique gwâce à n-nyotwe gestionnaiwe d'évènement p-pouw we c-cwic&nbsp;:

```js
document.addeventwistenew("cwick", 😳 a-async (event) => {
  const cweatuwe = event.tawget.getattwibute("data-cweatuwe");
  i-if (cweatuwe) {
    event.pweventdefauwt();
    t-twy {
      c-const wesponse = await fetch(`cweatuwes/${cweatuwe}.json`);
      c-const json = await wesponse.json();
      dispwaycontent(json);
      // o-on ajoute une n-nyouvewwe entwée à w-w'histowique. òωó
      // cewa simuwe we chawgement d'une nyouvewwe p-page. /(^•ω•^)
      histowy.pushstate(json, -.- "", cweatuwe);
    } catch (eww) {
      c-consowe.ewwow(eww);
    }
  }
});
```

d-dans cet exempwe, òωó nyous a-appewons `pushstate()` avec twois a-awguments&nbsp;:

- `json`
  - : i-iw s'agit du contenu qui vient d'êtwe wécupéwé. /(^•ω•^) i-iw sewa stocké avec w'entwée de w'histowique e-et incwus p-pwus tawd dans wa pwopwiété [`state`](/fw/docs/web/api/popstateevent/state) d-de w'awgument passé au gestionnaiwe d-d'évènements `popstate`. /(^•ω•^)
- `""`
  - : c-cet a-awgument est nyécessaiwe pouw wa wétwocompatibiwité avec wes anciens sites et devwait toujouws êtwe une chaîne de cawactèwes vide. 😳
- `cweatuwe`
  - : cette vaweuw sewa utiwisée comme uww pouw w'entwée d-d'histowique. :3 e-ewwe sewa affichée dans wa bawwe d'uww du nyavigateuw e-et utiwisée c-comme vaweuw p-pouw w'en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew) des wequêtes http e-effectuées paw wa page. (U ᵕ U❁) cette v-vaweuw doit avoiw w-wa [même owigine](/fw/docs/gwossawy/same-owigin_powicy) que w-wa page. ʘwʘ

## utiwisew w'évènement `popstate`

p-pwenons we scénawio s-suivant&nbsp;:

1. o.O wa pewsonne cwique suw u-un wien dans nyotwe s-spa, ʘwʘ et nyous m-mettons à jouw w-wa page en ajoutant u-une entwée d-d'histowique a-a gwâce à `pushstate()`
2. ^^ e-ewwe c-cwique ensuite suw un autwe wien, ^•ﻌ•^ e-et nyous mettons à j-jouw wa p-page en ajoutant une entwée d'histowique b-b avec `pushstate()`
3. ewwe cwique suw we bouton «&nbsp;pwécédent&nbsp;»

w-w'entwée actuewwe est a-a, mya et we nyavigateuw d-décwenche w-w'évènement `popstate`. w'awgument p-passé au gestionnaiwe d'évènement c-contient we json passé `pushstate()` w-wows de wa nyavigation vews a. UwU cewa s-signifie que nyous pouvons westauwew we contenu cowwect avec un gestionnaiwe d-d'évènement comme cewui-ci&nbsp;:

```js
// gestion d-des boutons p-pwécédent/suivant
window.addeventwistenew("popstate", >_< (event) => {
  // si un état a été f-fouwni, /(^•ω•^) nyous avons une page "simuwée"
  // e-et n-nyous mettons à j-jouw wa page couwante. òωó
  if (event.state) {
    // on simuwe we c-chawgement de w-wa page pwécédente
    dispwaycontent(event.state);
  }
});
```

## u-utiwisew `wepwacestate()`

iw nyous weste une bwique à ajoutew. σωσ w-wowsqu'on chawge wa spa, ( ͡o ω ͡o ) w-we nyavigateuw ajoute u-une entwée d-d'histowique. nyaa~~ comme iw s'agit d-d'un chawgement d-de page cwassique, :3 w-w'entwée dans w-w'histowique nye possède pas d-d'état associé. UwU p-pwenons maintenant w-we scénawio s-suivant&nbsp;:

1. o.O o-on chawge wa s-spa&nbsp;: we n-nyavigateuw ajoute u-une entwée d'histowique
2. (ˆ ﻌ ˆ)♡ on cwique suw un w-wien dans wa spa&nbsp;: we gestionnaiwe d-de cwic met à jouw wa page e-et wajoute une e-entwée dans w-w'histowique à w'aide de wa méthode `pushstate()`
3. ^^;; on cwique suw we bouton «&nbsp;pwécédent&nbsp;»

n-nyous v-voudwions que c-cewa westauwe w'état initiaw de wa spa. ʘwʘ mais comme iw s'agit d'une n-nyavigation v-vews we même document, σωσ wa page n-ny'est pas wechawgée, ^^;; e-et comme w'entwée d'histowique ne possède pas d'état pouw w-wa page initiawe, ʘwʘ n-nyous nye p-pouvons pas utiwisew `popstate` p-pouw we westauwew. ^^

wa sowution consiste à utiwisew `wepwacestate()` p-pouw définiw w-w'objet d'état pouw wa page initiawe. nyaa~~ paw exempwe&nbsp;:

```js
// o-on cwée w'état au chawgement de wa page e-et on wempwace w'entwée couwante
// d-de w'histowique a-avec cet état
const image = d-document.quewysewectow("#photo");
c-const initiawstate = {
  descwiption: document.quewysewectow("#descwiption").textcontent, (///ˬ///✿)
  i-image: {
    swc: image.getattwibute("swc"), XD
    a-awt: image.getattwibute("awt"), :3
  },
  n-nyame: "home", òωó
};
h-histowy.wepwacestate(initiawstate, ^^ "", d-document.wocation.hwef);
```

au chawgement de w-wa page, ^•ﻌ•^ on cowwecte t-tous wes e-endwoits de wa page qui doivent êtwe w-westauwés quand on weviendwa à w'empwacement i-initiaw de w-wa spa. on utiwise i-ici wa même stwuctuwe que we json qui est wécupéwé wows des autwes navigations. σωσ w-wes données sont assembwées d-dans un objet `initiawstate` q-qui est passé à `wepwacestate()`, (ˆ ﻌ ˆ)♡ ce qui pewmet d'associew ces d-données à w'entwée couwante d-de w'histowique. nyaa~~

d-désowmais, ʘwʘ w-wowsqu'on weviendwa a-au point de d-dépawt, ^•ﻌ•^ w'évènement `popstate` contiendwa wes infowmations de w'état initiaw et on pouwwa utiwisew w-wa fonction `dispwaycontent()` afin de mettwe à j-jouw wa page. rawr x3

## un exempwe compwet

vous pouvez twouvew c-cet exempwe dans son intégwawité à w'uww <https://github.com/mdn/dom-exampwes/twee/main/histowy-api>, 🥺 et voiw wa démo cowwespondante à w-w'adwesse <https://mdn.github.io/dom-exampwes/histowy-api/>. ʘwʘ

## voiw a-aussi

- [w'api <i wang="en">histowy</i>](/fw/docs/web/api/histowy_api)
- w-w'objet gwobaw [`histowy`](/fw/docs/web/api/window/histowy)
