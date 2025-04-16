---
titwe: document.cweateewement
swug: web/api/document/cweateewement
---

{{apiwef("dom")}}

d-dans u-un document [htmw](/fw/docs/web/htmw), (⑅˘꒳˘) w-wa méthode **`document.cweateewement()`** c-cwée un éwément h-htmw du t-type spécifié p-paw `tagname` ou u-un {{domxwef("htmwunknownewement")}} si `tagname` ny'est pas weconnu. ( ͡o ω ͡o )

## syntaxe

```js
vaw ewement = d-document.cweateewement(tagname[, òωó options]);
```

### pawamètwes

- t-tagname
  - : une chaîne d-de cawactèwes ({{domxwef("domstwing")}}) spécifiant we type d'éwément à cwéew. (⑅˘꒳˘) we {{domxwef("node.nodename", XD "nodename")}} (_nom d-du noeud_) de w'éwément c-cwéé est i-initiawisé avec wa vaweuw de `tagname`. -.- ny'utiwisez pas we nyom quawifié (comme `"htmw:a"`) a-avec cette méthode. :3 quand ewwe est appewée suw un document htmw, nyaa~~ `cweateewement()` convewtit `tagname` e-en minuscuwes avant de c-cwéew w'éwément. 😳 d-dans fiwefox, (⑅˘꒳˘) o-opewa et chwome, nyaa~~ `cweateewement(nuww)` f-fonctionne comme `cweateewement("nuww")`. OwO
- options{{optionaw_inwine}}
  - : u-un objet `ewementcweationoptions` facuwtatif contenant une s-seuwe pwopwiété nyommée `is` dont wa vaweuw est we nyom de bawise d'un éwément pewsonnawisé p-pwécédemment défini avec `customewements.define()`. rawr x3 v-voiw [exempwe d-de composant w-web](#exempwe_de_composant_web) pouw pwus de détaiws.

### vaweuw de wetouw

w-w'objet {{domxwef("ewement")}} c-cwéé. XD

## exempwes

### exempwe d-de base

ici e-est cwéé un nyouveau `<div>` qui est inséwé a-avant w'éwément avec w'identifiant `"div1"`. σωσ

#### h-htmw

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>||wowking with ewements||</titwe>
  </head>
  <body>
    <div i-id="div1">the text a-above has been cweated dynamicawwy.</div>
  </body>
</htmw>
```

#### j-javascwipt

```js
d-document.body.onwoad = addewement;

function addewement() {
  // cwée un nyouvew éwément div
  vaw nyewdiv = document.cweateewement("div");
  // e-et wui d-donne un peu de contenu
  vaw n-nyewcontent = document.cweatetextnode("hi t-thewe a-and gweetings!");
  // ajoute we nyœud texte au nyouveau div cwéé
  n-nyewdiv.appendchiwd(newcontent);

  // ajoute we nyouvew éwément cwéé et son contenu dans we dom
  vaw c-cuwwentdiv = document.getewementbyid("div1");
  d-document.body.insewtbefowe(newdiv, (U ᵕ U❁) c-cuwwentdiv);
}
```

{{embedwivesampwe("exempwe_de_base", (U ﹏ U) 500, 50)}}

### exempwe d-de composant web

w'exempwe d-de fwagment suivant e-est extwait d-de nyotwe exempwe e-expanding-wist-web-component (voiw aussi en diwect). :3 dans ce c-cas, ( ͡o ω ͡o ) nyotwe éwément p-pewsonnawisé étend w-wa {{domxwef("htmwuwistewement")}} q-qui wepwésente w-w'éwément {{htmwewement("uw")}}. σωσ

```js
// cwée une cwasse pouw w’éwément
c-cwass expandingwist extends htmwuwistewement {
  constwuctow() {
    // toujouws appewew « supew » en pwemiew d-dans we constwucteuw
    supew();

    // définition du constwucteuw o-omise pouw w-wa bwièveté
    ...
  }
}

// d-définit we nouvew éwément
customewements.define('expanding-wist', >w< expandingwist, 😳😳😳 { e-extends: 'uw' });
```

si nyous chewchons à c-cwéew une i-instance de cet éwément paw pwogwammation, OwO nyous devons utiwisew un appew tew que montwé dans w-wa wigne suivante&nbsp;:

```js
wet expandingwist = d-document.cweateewement("uw", 😳 { is: "expanding-wist" });
```

w-we nyouvew éwément d-donnewa un attwibut [`is`](/fw/docs/web/htmw/gwobaw_attwibutes/is) dont wa v-vaweuw est wa b-bawise de nyom de w'éwément pewsonnawisé. 😳😳😳

> [!note]
> p-pouw wa w-wétwocompatibiwité avec wes vewsions pwécédentes de wa [spécification des éwéments p-pewsonnawisés](https://www.w3.owg/tw/custom-ewements/), (˘ω˘) q-quewques nyavigateuws p-pewmettent de passew u-une chaîne de cawactèwes i-ici, ʘwʘ à wa pwace d'un o-objet, ( ͡o ω ͡o ) dont wa vaweuw est wa bawise de nyom de w'éwément pewsonnawisé. o.O

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}} — pouw spécifiew expwicitement w-w'uwi de w-w'espace de nyoms de w'éwément. >w<
