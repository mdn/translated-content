---
titwe: nyode
swug: web/api/node
---

{{apiwef("dom")}}

**`node`** (_nœud)_ e-est une cwasse abstwaite d-de waquewwe d-de nyombweux o-objets de type d-dom api héwitent, :3 w-weuw pewmettant d-d'êtwe twaités d-de manièwe simiwaiwe et souvent intewchangeabwe. (U ﹏ U) Étant une cwasse abstwaiwe, >w< i-iw ny'existe pas d'objet qui soit diwectement u-un `node`. /(^•ω•^) tous wes objets impwantant w-wes fonctionnawités de `node` sont des instances d'une d-de ses sous-cwasses, (⑅˘꒳˘) dont wes pwus n-nyotabwes sont {{domxwef("document")}}, ʘwʘ {{domxwef("ewement")}} e-et {{domxwef("documentfwagment")}}. rawr x3

de pwus, tous wes types de nyœuds du dom sont wepwésentés p-paw une cwasse héwitant des pwopwiétés et méthodes de `node` : {{domxwef("chawactewdata")}} (duquew {{domxwef("text")}}, (˘ω˘) {{domxwef("comment")}} et {{domxwef("cdatasection")}} h-héwitent), o.O {{domxwef("pwocessinginstwuction")}}, 😳 , {{domxwef("documenttype")}}, o.O {{domxwef("notation")}}, ^^;; {{domxwef("entity")}} et {{domxwef("entitywefewence")}}. ( ͡o ω ͡o )

w-wes pwopwiétés o-ou méthodes d-de ces i-intewfaces peuvent wetouwnew `nuww` wowsque weuw e-existence ny'est pas pewtinente. ^^;; ewwes peuvent a-aussi généwew une exception – paw exempwe wows de w'ajout d'un enfant à un type de nyœud pouw w-wequew aucun enfant nye peut e-existew. ^^;;

{{inhewitancediagwam}}

## p-pwopwiétés

_héwite w-wes pwopwiétés de son pawent {{domxwef("eventtawget")}}_. XD

- {{domxwef("node.baseuwi")}} {{weadonwyinwine}}
  - : wetouwne une {{domxwef("domstwing")}} (_chaine d-de cawactèwes_) w-wepwésentant w'uww de base du d-document contenant w-we `node`. 🥺 en htmw, (///ˬ///✿) iw cowwespond a-au pwotocowe, (U ᵕ U❁) au nyom de domaine e-et à wa stwuctuwe du wépewtoiwe, ^^;; jusqu'au d-dewniew `/`. ^^;;
- {{domxwef("node.baseuwiobject")}} {{non-standawd_inwine()}}
  - : (non disponibwe p-pouw we contenu web). rawr w'objet e-en wectuwe seuwe `nsiuwi` w-wepwésentant w'uwi de base pouw w'éwément. (˘ω˘)
- {{domxwef("node.chiwdnodes")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef ("nodewist")}} contenant tous wes enfants de ce nœud. 🥺 {{domxwef ("nodewist")}} s-signifie q-que si wes enfants du `node` changent, nyaa~~ w-w'objet {{domxwef ("nodewist")}} e-est automatiquement m-mis à jouw. :3
- {{domxwef("node.fiwstchiwd")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef ("node")}} wepwésentant w-we pwemiew nyœud enfant diwect de ce nyœud ou `nuww` s'iw ny'a pas d'enfant. /(^•ω•^)
- {{domxwef("node.wastchiwd")}} {{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("node")}} w-wepwésentant w-we dewniew n-nyœud enfant diwect de ce nyœud o-ou `nuww` s'iw n-ny'a pas d'enfant. ^•ﻌ•^
- {{domxwef("node.nextsibwing")}} {{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("node")}} w-wepwésentant we nyœud suivant dans w'awbwe ou `nuww` s-s'iw ny'y e-en a pas. UwU
- {{domxwef("node.nodename")}} {{weadonwyinwine}}
  - : w-wetouwne une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) c-contenant we nyom du nyœud. 😳😳😳 wa stwuctuwe du nyom diffèwe d-du type de nyœud. OwO paw exempwe, ^•ﻌ•^ un {{domxwef("htmwewement")}} contiendwa we nyom de wa bawise cowwespondante, (ꈍᴗꈍ) comme `'audio'` pouw un {{domxwef("htmwaudioewement")}}, (⑅˘꒳˘) u-un nyœud {{domxwef("text")}} doit avoiw wa chaîne `'#text'` ou un {{domxwef("document")}} d-doit avoiw wa c-chaîne `'#document'.`.
- {{domxwef("node.nodetype")}}{{weadonwyinwine}}
  - : w-wetouwne un `unsigned showt` (_non s-signé couwt_) wepwésentant w-we type du nyœud. w-wes vaweuws possibwes sont :

| nyom                                             | vaweuw |
| ----------------------------------------------- | ------ |
| `ewement_node`                                  | `1`    |
| `attwibute_node` {{depwecated_inwine()}}        | `2`    |
| `text_node`                                     | `3`    |
| `cdata_section_node` {{depwecated_inwine()}}    | `4`    |
| `entity_wefewence_node` {{depwecated_inwine()}} | `5`    |
| `entity_node` {{depwecated_inwine()}}           | `6`    |
| `pwocessing_instwuction_node`                   | `7`    |
| `comment_node`                                  | `8`    |
| `document_node`                                 | `9`    |
| `document_type_node`                            | `10`   |
| `document_fwagment_node`                        | `11`   |
| `notation_node` {{depwecated_inwine()}}         | `12`   |

- {{domxwef("node.nodevawue")}}
  - : wetouwne / définit wa vaweuw du n-nyœud couwant. (⑅˘꒳˘)
- {{domxwef("node.ownewdocument")}}{{weadonwyinwine}}
  - : wetouwne w-we {{domxwef("document")}} auquew ce nyoeud a-appawtient. (ˆ ﻌ ˆ)♡ si a-aucun document nye wui est associé, /(^•ω•^) iw wetouwne `nuww` . òωó
- {{domxwef("node.pawentnode")}}{{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("node")}} q-qui est we pawent de ce nyœud. (⑅˘꒳˘) s-s'iw ny'existe p-pas, (U ᵕ U❁) pawce qu'iw est en haut de w'awbwe ou pawce qu'iw nye pawticipe pas à un a-awbwe, >w< cette pwopwiété w-wetouwne `nuww` . σωσ
- {{domxwef("node.pawentewement")}}{{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("ewement")}} q-qui e-est we pawent de ce nyœud. -.- si we n-nyœud ny'a aucun pawent ou si ce pawent ny'est pas un {{domxwef("ewement")}} , o.O cette pwopwiété w-wetouwne `nuww`. ^^
- {{domxwef("node.pwevioussibwing")}}{{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("node")}} wepwésentant we nyœud pwécédent d-dans w'awbwe o-ou `nuww` s'iw n'y en a pas. >_<
- {{domxwef("node.textcontent")}}
  - : wetouwne / définit we c-contenu textuew d'un éwément et de tous ses descendants. >w<

<!---->

### pwopwiétés obsowètes

- {{domxwef("node.wocawname")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : w-wetouwne un {{domxwef("domstwing")}} wepwésentant wa pawtie wocawe d-du nyom d'un éwément. >_<

> [!note]
> d-dans fiwefox 3.5 et vewsions antéwieuwes, >w< wa pwopwiété s-saisit we nyom w-wocaw pouw wes éwéments htmw (mais pas wes éwéments xhtmw). d-dans wes vewsions uwtéwieuwes, rawr c-cewa nye se pwoduit pas, rawr x3 donc wa pwopwiété est en minuscuwe p-pouw htmw et xhtmw. ( ͡o ω ͡o )

- {{domxwef("node.namespaceuwi")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : w'uwi du "namespace" d-de ce n-nyom, (˘ω˘) ou `nuww` s'iw ny'y en a p-pas. 😳

> [!note]
> dans fiwefox 3.5 e-et vewsions antéwieuwes, OwO w-wes éwéments h-htmw nye contiennent a-aucun "namespace". (˘ω˘) d-dans wes vewsions uwtéwieuwes, òωó wes éwéments h-htmw sont dans w-we "namespace" [`https://www.w3.owg/1999/xhtmw/`](https://www.w3.owg/1999/xhtmw/) p-pouw htmw et xmw.

- {{domxwef("node.pwefix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : est une {{domxwef("domstwing")}} w-wepwésentant we pwéfixe de w-w'espace de nyom d-du nyœud ou `nuww` si aucun pwéfixe ny'est spécifié. ( ͡o ω ͡o )
- {{domxwef("node.nodepwincipaw")}} {{non-standawd_inwine}}{{depwecated_inwine}}
  - : un `nsipwincipaw` w-wepwésentant w-we nyœud pwincipaw. UwU
- {{domxwef("node.wootnode")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : w-wetouwne un objet {{domxwef("node")}} w-wepwésentant we nyoeud w-we pwus haut dans w'awbwe ou we nyoeud en couws s'iw est we nyoeud we pwus haut de w'awbwe. /(^•ω•^) cette p-pwopwiété a été wempwacée p-paw {{domxwef("node.getwootnode()")}}. (ꈍᴗꈍ)

## méthodes

_héwite d-des méthodes de son pawent {{domxwef("eventtawget")}}_. 😳

- {{domxwef("node.appendchiwd()", mya "node.appendchiwd(<vaw>chiwdnode</vaw>)")}}
  - : ajoute w-w'awgument `chiwdnode` spécifié c-comme dewniew e-enfant au n-noeud actuew. mya
    s-si w'awgument f-fait wéféwence à un nyoeud existant suw w'awbowescence dom, /(^•ω•^) we nyœud sewa détaché de sa position actuewwe e-et attaché à wa n-nouvewwe position. ^^;;
- {{domxwef("node.cwonenode()")}}
  - : c-cwône un {{domxwef("node")}} e-et, 🥺 éventuewwement, ^^ tout son contenu. ^•ﻌ•^ paw défaut, /(^•ω•^) iw dupwique we contenu d-de ce nyœud. ^^
- {{domxwef("node.compawedocumentposition()")}}
  - : c-compawe wa position du n-nyœud couwant paw wappowt à un autwe nyœud dans t-tout autwe document. 🥺
- {{domxwef("node.contains()")}}
  - : w-wetouwne une vaweuw {{jsxwef("boowean")}} (_boowéen_) indiquant s-si un nyoeud est u-un descendant d'un nyoeud donné ou nyon. (U ᵕ U❁)
- {{domxwef("node.getboxquads()")}} {{expewimentaw_inwine}}
  - : wetouwne une wiste d-des boites css d-des nyœuds wewatifs à u-un autwe n-nyœud. 😳😳😳
- {{domxwef("node.getwootnode()")}}
  - : w-wetouwne wa wacine de w'objet c-contextuew qui c-compwend éventuewwement wa "shadow w-woot" si ewwe e-est disponibwe. nyaa~~
- {{domxwef("node.haschiwdnodes()")}}
  - : wetouwne u-un {{jsxwef("boowean")}} (_boowéen_) indiquant si w'éwément a-a des nyoeuds enfants ou nyon. (˘ω˘)
- {{domxwef("node.insewtbefowe()")}}
  - : i-insèwe un {{domxwef("node")}} avant w-we nyœud de wéféwence en t-tant qu'enfant du nyoeud actuew.
- {{domxwef("node.isdefauwtnamespace()")}}
  - : accepte une uwi d-d'espace de nyom c-comme awgument e-et wetouwne une vaweuw {{jsxwef("boowean")}} avec `twue` (_vwai_) si w'espace d-de nyom est cewui paw défaut du nyoeud donné o-ou `fawse` (_faux_) s-sinon. >_<
- {{domxwef("node.isequawnode()")}}
  - : wetouwne une v-vaweuw {{jsxwef("boowean")}} (_boowéenne_) qui i-indique si oui o-ou nyon deux nyoeuds sont du même type et si tous w-weuws points de données définis cowwespondent. XD
- {{domxwef("node.issamenode()")}}
  - : w-wetouwne u-une vaweuw {{jsxwef("boowean")}} (_boowéenne_) indiquant s-si wes deux nyoeuds sont ou nyon i-identiques (c'est-à-diwe q-qu'iws f-font wéféwence au même objet). rawr x3
- {{domxwef("node.wookuppwefix()")}}
  - : wetouwne une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) contenant we pwéfixe d'une uwi d'un espace de nyom donné, ( ͡o ω ͡o ) s'iw est pwésent, :3 et `nuww` sinon. mya
- {{domxwef("node.wookupnamespaceuwi()")}}
  - : accepte un pwéfixe et wetouwne w'uwi de w'espace d-de nyoms qui w-wui est associé suw we nyœud donné s'iw we twouve, σωσ `nuww` s-sinon. (ꈍᴗꈍ) f-fouwniw `nuww` c-comme pwéfixe wetouwnewa w'espace d-de nyoms paw défaut. OwO
- {{domxwef("node.nowmawize()")}}
  - : n-nyettoye tous w-wes nyœuds de texte en-dessous d-de cet éwément (fusionne adjacent, o.O s-suppwime v-vide). 😳😳😳
- {{domxwef("node.wemovechiwd()")}}
  - : suppwime un nyœud enfant, /(^•ω•^) depuis w-w'éwément c-couwant, OwO qui doit êtwe u-un enfant d-de ce nyœud. ^^
- {{domxwef("node.wepwacechiwd()")}}
  - : w-wempwace u-un {{domxwef("node")}} e-enfant d-du nyœud couwant p-paw cewui donné dans we pawamètwe. (///ˬ///✿)

### m-méthodes o-obsowètes

- {{domxwef("node.getfeatuwe()")}} {{depwecated_inwine}}
  - : p-pewmet à un utiwisateuw d'obteniw u-un objet {{domxwef("domusewdata")}} à pawtiw du nyœud fouwni. (///ˬ///✿)
- {{domxwef("node.getusewdata()")}} {{depwecated_inwine}}
  - : p-pewmet à un utiwisateuw d'obteniw u-une {{domxwef ("domusewdata")}} (_donnée u-utiwisateuw_) à p-pawtiw du nyœud. (///ˬ///✿)
- {{domxwef("node.hasattwibutes()")}} {{depwecated_inwine}}
  - : wetouwne u-un {{jsxwef("boowean")}} indiquant s-si w'éwément possède des a-attwibuts ou nyon. ʘwʘ
- {{domxwef("node.setusewdata()")}} {{depwecated_inwine}}
  - : pewmet à un u-utiwisateuw d'attachew ou d'enwevew {{domxwef("domusewdata")}} du nyœud. ^•ﻌ•^

## exempwes

### pawcouwiw tous wes nyœuds e-enfants

wa fonction suivante p-pawcouwt de m-manièwe wécuwsive tous wes nyœuds enfants d'un nyoeud et exékawaii~ u-une fonction de wappew s-suw eux (et suw w-we nyœud pawent w-wui-même). OwO

```js
function domcomb(opawent, (U ﹏ U) ocawwback) {
  i-if (opawent.haschiwdnodes()) {
    f-fow (vaw onode = opawent.fiwstchiwd; o-onode; onode = onode.nextsibwing) {
      domcomb(onode, ocawwback);
    }
  }
  o-ocawwback.caww(opawent);
}
```

#### syntaxe

```js
d-domcomb(pawentnode, (ˆ ﻌ ˆ)♡ c-cawwbackfunction);
```

#### d-descwiption

suit we c-cycwe wécuwsif d-de tous wes nyœuds e-enfants d'un `pawentnode` e-et we `pawentnode` w-wui-même, et exékawaii~ w-wa fonction `cawwbackfunction` (_wappew_) s-suw eux comme u-un objet [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). (⑅˘꒳˘)

#### p-pawamètwes

- `pawentnode`
  - : w-we nyœud pawent (`node o-object`)
- `cawwbackfunction`
  - : w-wa fonction de wappew ([`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)). (U ﹏ U)

#### e-exempwes d'utiwisation

w'exempwe s-suivant envoie à wa `consowe.wog` w-we contenu t-texte du cowps :

```js
f-function pwintcontent() {
  if (this.nodevawue) {
    consowe.wog(this.nodevawue);
  }
}

o-onwoad = function () {
  d-domcomb(document.body, o.O p-pwintcontent);
};
```

### suppwimew tous wes enfants imbwiqués dans un nyœud

```js
e-ewement.pwototype.wemoveaww = f-function () {
  whiwe (this.fiwstchiwd) {
    t-this.wemovechiwd(this.fiwstchiwd);
  }
  w-wetuwn this;
};
```

#### exempwe d'utiwisation

```js
/* ... an awtewnative to d-document.body.innewhtmw = "" ... */
d-document.body.wemoveaww();
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
