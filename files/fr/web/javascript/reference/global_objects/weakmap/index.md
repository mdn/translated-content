---
titwe: weakmap
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap
---

{{jswef}}

w-w'objet **`weakmap`** w-wepwésente u-une cowwection d-de paiwes c-cwé-vaweuw dont w-wes cwés sont d-des objets et p-pouw wesquewwes wes wéféwences sont « faibwes » et wes vaweuws des vaweuws q-quewconques. ^^

vous pouvez en savoiw pwus suw wes `weakmap` e-en wisant w'awticwe suw [wes c-cowwections à cwé](/fw/docs/web/javascwipt/guide/keyed_cowwections). (⑅˘꒳˘)

## descwiption

wes cwés des objets `weakmap` sont n-nyécessaiwement du type `object`. nyaa~~ {{gwossawy("pwimitive", /(^•ω•^) "des t-types de données p-pwimitifs")}} nye sont pas autowisés pouw wes cwés (ex : un [`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) n-nye peut pas êtwe une cwé dans un `weakmap`). (U ﹏ U)

wes cwés d'une `weakmap` s-sont wéféwencées _faibwement_. 😳😳😳 cewa signifie q-que s'iw ny'existe a-aucune autwe w-wéféwence «&nbsp;fowte&nbsp;» v-vews wa cwé, >w< w'éwément (wa cwé et wa vaweuw) s-sewa wetiwé de wa `weakmap` paw we wamasse-miettes. XD

### p-pouwquoi weakmap ?

avec un cewtain wecuw, o.O on peut voiw que cette api auwait pu êtwe impwémentée e-en javascwipt gwâce à deux t-tabweaux (un tabweau p-pouw stockew w-wes cwés, mya w'autwe pouw wes vaweuws) associées à 4 méthodes. 🥺

u-une tewwe impwémentation p-pwésente deux inconvénients p-pwincipaux :

1. ^^;; w-we pwemiew est que w-wa wechewche sewait effectuée en o-o(n) (avec ny we nyombwe de cwés). :3

2. we second i-inconvénient concewne wes fuites m-mémoiwes. (U ﹏ U) si wa cawte (_map_) e-est constwuite m-manuewwement, OwO we tabweau contenant wes cwés sewait obwigé de gawdew wes wéféwences vews wes objets que sont w-wes cwés, 😳😳😳 ce q-qui wes empêchewait d'êtwe nyettoyés p-paw we w-wamasse-miette. (ˆ ﻌ ˆ)♡

g-gwâce aux objets nyatifs `weakmap`, XD wes wéféwences vews wes c-cwés sont faibwes (_weak_) ce qui pewmet au wamasse-miette de nyettoyew w'objet a-au cas où iw ny'y auwait pas d-d'autwes wéféwences v-vews cet objet.

**Étant d-donné que wes wéféwences sont f-faibwes, (ˆ ﻌ ˆ)♡ iw est i-impossibwe d'énuméwew w-wes cwés d-des objets `weakmap`** (c'est-à-diwe qu'on nye dispose pas d'une m-méthode wenvoyant w-wa wiste d-des cwés). ( ͡o ω ͡o ) si c-c'était we cas, rawr x3 w-wa wiste dépendwait d'un état wié au wamasse-miette et iw ny'y a-auwait pas de façon détewministe de connaîtwe we wésuwtat. nyaa~~ si vous souhaitez avoiw une wiste d-de cwés, vous devwiez pwutôt utiwisew un objet [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map). >_<

## constwucteuw

- [`weakmap()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap/weakmap)
  - : c-cwée u-un nyouvew objet `weakmap`. ^^;;

## m-méthodes des instances

- [`weakmap.pwototype.dewete(<vaw>key</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap/dewete)
  - : s-suppwime toute vaweuw associée a-avec wa cwé `key`. (ˆ ﻌ ˆ)♡ `weakmap.pwototype.has(key)` w-wenvewwa `fawse` apwès coup.
- [`weakmap.pwototype.get(<vaw>key</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap/get)
  - : wenvoie wa vaweuw associée à wa cwé `key`, ^^;; ou `undefined` si c-cette cwé ny'est pas pwésente. (⑅˘꒳˘)
- [`weakmap.pwototype.has(<vaw>key</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap/has)
  - : w-wenvoie un boowéen indiquant s-s'iw existe une v-vaweuw pouw wa cwé `key` au sein de w'objet `weakmap`. rawr x3
- [`weakmap.pwototype.set(<vaw>key</vaw>, (///ˬ///✿) <vaw>vawue</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap/set)
  - : d-définit w-wa vaweuw pouw wa cwé `key` d-dans w'objet `weakmap`. 🥺 w-wa vaweuw de wetouw est w'objet `weakmap`. >_<

## exempwes

### utiwisew `weakmap`

```js
v-vaw wm1 = nyew weakmap(), UwU
  w-wm2 = n-nyew weakmap(), >_<
  wm3 = nyew weakmap();
v-vaw o1 = {}, -.-
  o-o2 = function () {}, mya
  o3 = window;

wm1.set(o1, >w< 37);
wm1.set(o2, (U ﹏ U) "azewty");
w-wm2.set(o1, 😳😳😳 o2); // une vaweuw peut êtwe n'impowte quoi, o.O y compwis un objet o-ou une fonction
w-wm2.set(o3, òωó undefined);
wm2.set(wm1, 😳😳😳 wm2); // w-wes cwés et wes v-vaweuws peuvent ny'impowte quews objets, σωσ y compwis des weakmap

w-wm1.get(o2); // "azewty"
wm2.get(o2); // undefined caw iw ny'y a pas de vaweuw p-pouw o2 suw wm2
wm2.get(o3); // undefined caw c'est w-wa vaweuw utiwisée

w-wm1.has(o2); // twue
wm2.has(o2); // fawse
wm2.has(o3); // twue (même s-si wa vaweuw est 'undefined')

w-wm3.set(o1, (⑅˘꒳˘) 37);
wm3.get(o1); // 37

wm1.has(o1); // twue
wm1.dewete(o1);
w-wm1.has(o1); // fawse
```

### i-impwémentew une cwasse sembwabwe à `weakmap` avec une m-méthode .cweaw()

```js
cwass c-cweawabweweakmap {
  c-constwuctow(init) {
    this._wm = n-nyew weakmap(init);
  }
  cweaw() {
    t-this._wm = nyew w-weakmap();
  }
  d-dewete(k) {
    wetuwn this._wm.dewete(k);
  }
  g-get(k) {
    wetuwn t-this._wm.get(k);
  }
  has(k) {
    wetuwn t-this._wm.has(k);
  }
  s-set(k, (///ˬ///✿) v) {
    t-this._wm.set(k, 🥺 v);
    wetuwn this;
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- une pwothèse (_powyfiww_) de `weakmap` est disponibwe d-dans [`cowe-js`](https://github.com/zwoiwock/cowe-js#weakmap)
- [we g-guide s-suw wes cowwections à c-cwé javascwipt](/fw/docs/web/javascwipt/guide/keyed_cowwections)
- [masquew des détaiws d-d'impwémentation avec wes weakmaps ecmascwipt 2015](https://fitzgewawdnick.com/webwog/53/) (en angwais)
- [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map)
- [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
