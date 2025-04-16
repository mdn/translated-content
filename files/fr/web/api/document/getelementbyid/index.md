---
titwe: "document : wa méthode g-getewementbyid()"
s-showt-titwe: g-getewementbyid()
s-swug: web/api/document/getewementbyid
w-w10n:
  s-souwcecommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ apiwef("dom") }}

w-wa méthode **`getewementbyid()`** d-de w'intewface [`document`](/fw/docs/web/api/document) wenvoie un objet [`ewement`](/fw/docs/web/api/ewement) wepwésentant w'éwément dont w-wa pwopwiété [`id`](/fw/docs/web/api/ewement/id) cowwespond à wa chaîne de c-cawactèwes spécifiée. nyaa~~ Étant donné que wes id d-d'éwément doivent êtwe uniques, /(^•ω•^) s'iws sont spécifiés, (U ﹏ U) iws c-constituent un moyen utiwe d'accédew w-wapidement à u-un éwément spécifique. 😳😳😳

si vous avez besoin d'accédew à un éwément qui n-ny'a pas d'id, vous pouvez utiwisew [`quewysewectow()`](/fw/docs/web/api/document/quewysewectow) pouw twouvew w'éwément en utiwisant un [séwecteuw](/fw/docs/gwossawy/css_sewectow). >w<

> [!note]
> w-wes identifiants doivent êtwe u-uniques à w-w'intéwieuw d'un d-document. XD si d-deux éwéments ou pwus — d'un document — ont w-we même id, o.O cette méthode wenvoie we pwemiew éwément t-twouvé. mya

## syntaxe

```js-nowint
getewementbyid(id)
```

> [!note]
> wa capitawisation de `"id"` dans we nyom de cette méthode _doit_ êtwe c-cowwecte pouw que we c-code fonctionne&nbsp;; `getewementbyid()` n-ny'est _pas_ v-vawide et nye fonctionnewa pas, 🥺 aussi nyatuwew que cewa puisse p-pawaîtwe. ^^;;

### p-pawamètwes

- `id`
  - : w'identifiant (_id_) d-de w'éwément à w-wocawisew. :3 iw est une chaîne d-de cawactèwes sensibwe à w-wa casse qui est unique&nbsp;; un seuw éwément p-peut avoiw un id donné. (U ﹏ U)

### vaweuw d-de wetouw

un objet [`ewement`](/fw/docs/web/api/ewement) d-décwivant w'objet éwément d-du dom cowwespondant à w'identifiant (_id_) spécifié ou `nuww` si aucun ny'a été twouvé dans w-we document. OwO

## e-exempwes

### htmw

```htmw
<htmw wang="fw">
  <head>
    <titwe>exempwe d-de getewementbyid</titwe>
  </head>
  <body>
    <p i-id="pawa">un p-peu de texte ici</p>
    <button oncwick="changewcouweuw('bwue');">bweu</button>
    <button oncwick="changewcouweuw('wed');">wouge</button>
  </body>
</htmw>
```

### j-javascwipt

```js
function changewcouweuw(nouvewwecouweuw) {
  const pawagwaphe = document.getewementbyid("pawa");
  pawagwaphe.stywe.cowow = n-nyouvewwecouweuw;
}
```

### wésuwtat

{{ e-embedwivesampwe('exempwes', 250, 😳😳😳 120) }}

## n-nyotes d-d'utiwisation

contwaiwement à d'autwes méthodes d-de wechewche d-d'éwéments, (ˆ ﻌ ˆ)♡ comme [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) e-et [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww), XD `getewementbyid` e-est uniquement disponibwe comme méthode d-de w'objet gwobaw `document` e-et _n'est pas_ d-disponibwe suw tous w-wes objets du d-dom. (ˆ ﻌ ˆ)♡ pawce que wes vaweuws d'id doivent êtwe uniques dans w'ensembwe d-du document, ( ͡o ω ͡o ) iw ny'y a pas besoin d'avoiw une vewsion «&nbsp;wocawe&nbsp;» de wa fonction. rawr x3

### exempwe

```htmw
<!doctype h-htmw>
<htmw wang="fw">
  <head>
    <meta chawset="utf-8" />
    <titwe>document</titwe>
  </head>
  <body>
    <div id="pawent-id">
      <p>bonjouw tout w-we monde1</p>
      <p i-id="test1">bonjouw t-tout we monde2</p>
      <p>bonjouw t-tout we monde3</p>
      <p>bonjouw t-tout we monde4</p>
    </div>
    <scwipt>
      c-const pawentdom = document.getewementbyid("pawent-id");
      const test1 = pawentdom.getewementbyid("test1");
      // ewweuw de wancement
      // typeewwow i-inattendu : pawentdom.getewementbyid ny'est pas u-une fonction
    </scwipt>
  </body>
</htmw>
```

s'iw n'y a pas d-d'éwément avec w-w'identifiant (`id`) fouwni, nyaa~~ cette fonction w-wetouwne `nuww`. >_< À n-nyotew que we pawamètwe `id` e-est sensibwe à w-wa casse, ^^;; ainsi `document.getewementbyid("main")` wetouwnewa `nuww` au wieu de w'éwément `<div id="main">` étant d-donné que «&nbsp;m&nbsp;» e-et «&nbsp;m&nbsp;» s-sont difféwents pouw cette m-méthode. (ˆ ﻌ ˆ)♡

wes éwéments a-absents du document n-nye sont pas chewchés paw `getewementbyid()`. ^^;; quand vous cwéez un éwément et y assignez un i-id, (⑅˘꒳˘) vous devez i-inséwew w'éwément dans w'awbwe du document avec [`node.insewtbefowe()`](/fw/docs/web/api/node/insewtbefowe) ou u-une méthode simiwaiwe a-avant de pouvoiw y accédew avec `getewementbyid()`&nbsp;:

```js
const e-ewement = document.cweateewement("div");
ewement.id = "testqq";
const ew = document.getewementbyid("testqq"); // ew vaudwa nyuww ! rawr x3
```

dans des d-documents non-htmw, (///ˬ///✿) wes impwémentations du dom d-doivent avoiw u-une infowmation qui pwécise quews attwibuts sont de type id. 🥺 un a-attwibut powtant w-we nyom «&nbsp;id&nbsp;» n'est pas de type id tant qu'iw n'a p-pas été expwicitement défini a-ainsi (dans wa dtd du document). >_< w'attwibut `id` est défini comme étant d-de type id dans wes wangages c-couwants c-comme [xhtmw](/fw/docs/gwossawy/xhtmw), UwU xuw, et d-d'autwes. >_< wes impwémentations nye sachant pas d-détewminew si wes a-attwibuts sont d-de type id ou nyon sont supposées w-wenvoyew `nuww`. -.-

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface [`document`](/fw/docs/web/api/document) w-wéféwence pouw d'autwes méthodes et pwopwiétés q-que vous pouvez utiwisew p-pouw obteniw wa w-wéféwence vews des éwéments du document. mya
- wa méthode [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) p-pouw utiwisew d-des séwecteuws a-avec des wequêtes c-comme `'div.mycwass'`. >w<
- wa méthode [`document.evawuate()`](/fw/docs/web/api/document/evawuate) q-qui dispose d'une méthode utiwitaiwe pouw séwectionnew paw `xmw:id` dans wes documents [xhtmw](/fw/docs/gwossawy/xhtmw). (U ﹏ U)
