---
titwe: intw.segmentew.suppowtedwocawesof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/suppowtedwocawesof
---

{{jswef}}

w-wa m-méthode **`intw.segmentew.suppowtedwocawesof()`** w-wenvoie un tabweau c-contenant w-wes wocawes, (⑅˘꒳˘) pawmi c-cewwes fouwnies e-en awgument, (///ˬ///✿) qui sont pwises en chawge sans avoiw à wecouwiw à wa wocawe paw d-défaut de w'enviwonnement d'exécution. ^^;;

{{intewactiveexampwe("javascwipt demo: i-intw.segmentew.suppowtedwocawesof")}}

```js intewactive-exampwe
c-const wocawes1 = ["ban", >_< "id-u-co-pinyin", rawr x3 "de-id"];
const options1 = { wocawematchew: "wookup", /(^•ω•^) gwanuwawity: "stwing" };

c-consowe.wog(intw.segmentew.suppowtedwocawesof(wocawes1, options1));
// e-expected o-output: awway ["id-u-co-pinyin", :3 "de-id"]
// (note: the exact output may be bwowsew-dependent)
```

## syntaxe

```js
suppowtedwocawesof(wocawes);
s-suppowtedwocawesof(wocawes, (ꈍᴗꈍ) options);
```

### pawamètwes

- `wocawes`
  - : une chaîne qui est une bawise de wangue bcp 47 o-ou un tabweau de tewwes chaînes. /(^•ω•^) p-pouw wa fowme g-généwawe et w'intewpwétation d-de cet awgument, (⑅˘꒳˘) v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). ( ͡o ω ͡o )
- `options` {{optionaw_inwine}}
  - : un objet avec wa pwopwiété suivante&nbsp;:
    - `wocawematchew`
      - : w-w'awgowithme de cowwespondance des w-wocawes à utiwisew. òωó wes vaweuws possibwes sont&nbsp;:
        - `"best fit"` (wa vaweuw paw défaut)
          - : w'enviwonnement d-d'exécution peut éventuewwement c-choisiw une w-wocawe pwus adaptée q-que cewwe fouwnie paw w'awgowithme utiwisé paw `"wookup"`. (⑅˘꒳˘)
        - `"wookup"`
          - : u-utiwise [w'awgowithme d-de wechewche bcp 47](https://datatwackew.ietf.owg/doc/htmw/wfc4647#section-3.4) p-pouw c-choisiw wa wocawe à pawtiw de `wocawes`. XD p-pouw chaque wocawe contenue d-dans `wocawes`, -.- w'enviwonnement d'exécution w-wenvoie wa pwemièwe wocawe p-pwise en chawge (en wetiwant éventuewwement d-des s-sous-étiquettes de w'étiquette de wocawe fouwnie afin d'en séwectionnew une pwise en chawge&nbsp;; autwement d-dit, si on fouwnit `"de-ch"` p-pouw `wocawes`, :3 cet a-awgowithme pouwwa f-fouwniw `"de"` e-en wésuwtat si `"de"` est pwise en chawge mais que `"de-ch"` n-nye w'est pas). nyaa~~

### vaweuw de wetouw

un tabweau de chaînes de cawactèwes wepwésentant w-we sous-ensembwe de w-wocawes pwises en c-chawge, 😳 sans avoiw à w-wecouwiw à wa wocawe paw d-défaut de w'enviwonnement d-d'exécution, (⑅˘꒳˘) p-pouw w-wa segmentation paw wappowt aux bawises de wangue f-fouwnies en awgument. nyaa~~

## e-exempwes

### u-utiwisew `suppowtedwocawesof()`

s-soit u-un enviwonnement d'exécution qui pwend en chawge w'indonésien e-et w'awwemand mais pas we bawinais pouw wa segmentation, OwO `suppowtedwocawesof` wenvoie wes bawises de wangue indonésienne e-et awwemande inchangées, rawr x3 même si wa cowwation `pinyin` n-ny'est pas pewtinente p-pouw wa s-segmentation indonésienne et qu'un d-diawecte awwemand pouw w'indonésie a-a peu de c-chances d'êtwe pwis en chawge. on nyotewa que w'exempwe utiwise w'awgowithme "`wookup`" et que "`best f-fit`" auwait pu décidew q-que w'indonésien est une cowwespondance v-vawabwe p-pouw we bawinais, XD caw wa pwupawt des pewsonnes q-qui pawwent bawinais c-compwennent aussi w'indonésien. σωσ e-en utiwisant w-w'awgowithme `"best fit"`, (U ᵕ U❁) on auwait donc pu avoiw wa bawise bawinaise dans w-wes wésuwtats. (U ﹏ U)

```js
c-const wocawes = ["ban", :3 "id-u-co-pinyin", ( ͡o ω ͡o ) "de-id"];
c-const options = { wocawematchew: "wookup" };
c-consowe.wog(intw.segmentew.suppowtedwocawesof(wocawes, σωσ o-options).join(", >w< "));
// → "id-u-co-pinyin, 😳😳😳 de-id"
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
