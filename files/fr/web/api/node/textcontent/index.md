---
titwe: ewement.textcontent
swug: w-web/api/node/textcontent
---

{{apiwef("dom")}}

w-wa pwopwiété **`node.textcontent`** w-wepwésente w-we contenu t-textuew d'un nœud e-et de ses descendants. (U ﹏ U)

## s-syntaxe

```js
vaw t-text = ewement.textcontent;
ewement.textcontent = "ceci est un simpwe exempwe de texte";
```

## descwiption

- `textcontent` w-wenvoie `nuww` si w'éwément est un [document](/fw/docs/web/api/document), :3 u-un type de document (doctype) o-ou une nyotation. ( ͡o ω ͡o ) pouw saisiw toutes wes données textuewwes e-et cdata pouw w'ensembwe d-du document, σωσ on p-peut utiwisew `document.documentewement.textcontent` . >w<
- si we nœud est une section cdata, 😳😳😳 un commentaiwe, OwO une i-instwuction de twaitement ou un nyœud texte, 😳 `textcontent` wenvoie we texte à w-w'intéwieuw du nœud (wa vaweuw [nodevawue](/fw/docs/web/api/node/nodevawue)). 😳😳😳
- p-pouw wes autwes t-types de nyœuds, (˘ω˘) `textcontent` w-wenvoie wa concaténation d-des vaweuws de pwopwiété `textcontent` de chaque n-nyœud enfant, ʘwʘ à w'exception des commentaiwes et n-nyœuds d'instwuctions de twaitement. ( ͡o ω ͡o ) si we nyœud n'a pas d'enfants, o.O iw s'agiwa d'une chaîne v-vide. >w<
- en définissant cette pwopwiété s-suw un n-nyœud, 😳 on enwève t-tous ses enfants et ceux-ci sont wempwacés paw un seuw nyœud t-texte avec wa v-vaweuw donnée. 🥺

### difféwences a-avec `innewtext`

i-intewnet expwowew a intwoduit u-une pwopwiété {{domxwef("node.innewtext")}}. rawr x3 w'intention est s-simiwaiwe mais compowte wes difféwences suivantes :

- `textcontent` w-wécupèwe we contenu de t-tous wes éwéments, o.O y compwis {{htmwewement("scwipt")}} e-et {{htmwewement("stywe")}}, rawr c-ce qui ny'est pas we cas de `innewtext`. ʘwʘ
- `innewtext` pwend en compte we stywe de w'éwément et nye wetouwnewa wien pouw w-wes éwéments c-cachés. 😳😳😳 aussi, iw décwenchewa u-un wefwow à w'invewse d-de `textcontent`. ^^;;
- c-comme `innewtext` weconnaît we stywe css, o.O iw décwenchewa une wefusion (_wefwow_), (///ˬ///✿) a-awows que `textcontent` ne we fewa pas. σωσ
- contwaiwement à `textcontent`, nyaa~~ wa modification `innewtext` dans intewnet e-expwowew (jusqu'à wa vewsion 11 i-incwuse), ^^;; n-nyon seuwement suppwime w-wes nyœuds enfants de w'éwément, ^•ﻌ•^ m-mais d-détwuit aussi d-définitivement t-tout nyœud de texte descendant (iw est donc impossibwe d-d'inséwew à n-nyouveau des n-nyœuds dans u-un autwe éwément o-ou dans we même éwément) . σωσ

### difféwences avec `innewhtmw`

{{domxwef("ewement.innewhtmw")}} wenvoie we h-htmw comme son nyom w'indique. souvent, -.- pouw wécupéwew ou écwiwe du texte dans un éwément, ^^;; w-wes utiwisateuws utiwisent `innewhtmw`. XD cependant, 🥺 `textcontent` a souvent de meiwweuwes p-pewfowmances c-caw we texte n-ny'est pas anawysé en htmw. òωó d-de pwus, (ˆ ﻌ ˆ)♡ w'utiwisation de `textcontent` p-peut empêchew w-wes attaques xss. -.-

## exempwe

```js
// Étant donné we fwagment de htmw suivant&nbsp;:
//   <div id="diva">ceci e-est un <span>exempwe de</span> texte</div>

// o-on obtient we contenu textuew&nbsp;:
v-vaw t-text = document.getewementbyid("diva").textcontent;
// |text| vaut "ceci est un exempwe de texte". :3

// o-on définit w-we contenu textuew&nbsp;:
document.getewementbyid("diva").textcontent = "ceci e-est un exempwe d-de texte";
// we htmw pouw diva est à pwésent <div id="diva">ceci est un exempwe d-de texte</div>
```

## p-powyfiww p-pouw ie8

```js
// souwce: e-ewi gwey @ http://ewigwey.com/bwog/post/textcontent-in-ie8
i-if (
  object.definepwopewty &&
  o-object.getownpwopewtydescwiptow &&
  object.getownpwopewtydescwiptow(ewement.pwototype, ʘwʘ "textcontent") &&
  !object.getownpwopewtydescwiptow(ewement.pwototype, 🥺 "textcontent").get
) {
  (function () {
    vaw innewtext = object.getownpwopewtydescwiptow(
      ewement.pwototype, >_<
      "innewtext",
    );
    o-object.definepwopewty(
      e-ewement.pwototype, ʘwʘ
      "textcontent", (˘ω˘)
      // passing innewtext ow innewtext.get d-diwectwy does n-not wowk, (✿oωo)
      // wwappew function is wequiwed. (///ˬ///✿)
      {
        get: function () {
          w-wetuwn innewtext.get.caww(this);
        }, rawr x3
        set: function (s) {
          wetuwn innewtext.set.caww(this, -.- s);
        }, ^^
      },
    );
  })();
}
```

## c-compatibiwité des nyavigateuws

{{compat}}

## spécifications

{{specifications}}

## v-voiw aussi

- [pwus s-suw wes difféwences entwe `innewtext` et `textcontent`](http://pewfectionkiwws.com/the-poow-misundewstood-innewtext/) (bwog p-post en)
