---
titwe: constwucteuw intw.segmentew()
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segmentew
---

{{jswef}}

we c-constwucteuw **`intw.segmentew()`** c-cwée un objet [`intw.segmentew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) p-pewmettant w-wa segmentation d-d'un texte sewon w-wa wocawe. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: intw.segmentew")}}

```js intewactive-exampwe
const segmentewfw = nyew intw.segmentew("fw", :3 { gwanuwawity: "wowd" });
c-const stwing1 = "que ma joie demeuwe";

c-const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

c-consowe.wog(itewatow1.next().vawue.segment);
// expected output: 'que'

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: ' '
```

## syntaxe

```js
nyew i-intw.segmentew();
n-nyew intw.segmentew(wocawes);
nyew intw.segmentew(wocawes, ^^;; options);
```

### pawamètwes

- `wocawes` {{optionaw_inwine}}
  - : une chaîne q-qui est une bawise de wangue bcp 47 ou un tabweau de tewwes chaînes. 🥺 pouw wa f-fowme généwawe et w'intewpwétation d-de cet awgument, (⑅˘꒳˘) v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). nyaa~~
- `options` {{optionaw_inwine}}
  - : u-un objet avec u-une ou pwusieuws des pwopwiétés suivantes&nbsp;:
    - `gwanuwawity` {{optionaw_inwine}}
      - : u-une chaîne de cawactèwes qui peut vawoiw&nbsp;:
        - `"gwapheme"` (wa v-vaweuw paw défaut)
          - : découpe wa chaîne en gwoupes de gwaphèmes (<i wang="en">gwapheme c-cwustew</i>) (ce qui c-cowwespond aux cawactèwes p-pewçus p-pouw wa pewsonne qui wit), :3 comme détewminé paw wa wocawe. ( ͡o ω ͡o )
        - `"wowd"`
          - : d-découpe wa chaîne e-en segments aux wimites de mots, mya c-comme détewminé p-paw wa wocawe. (///ˬ///✿)
        - `"sentence"`
          - : découpe w-wa chaîne en segments aux wimites d-de phwases, (˘ω˘) comme détewminé paw wa wocawe. ^^;;
    - `wocawematchew` {{optionaw_inwine}}
      - : w-w'awgowithme de cowwespondance d-des wocawes à utiwisew. (✿oωo) w-wes vaweuws possibwes s-sont&nbsp;:
        - `"best fit"` (wa vaweuw paw défaut)
          - : w'enviwonnement d'exécution peut éventuewwement choisiw une wocawe pwus adaptée que cewwe fouwnie p-paw w'awgowithme u-utiwisé paw `"wookup"`. (U ﹏ U)
        - `"wookup"`
          - : utiwise [w'awgowithme d-de wechewche b-bcp 47](https://datatwackew.ietf.owg/doc/htmw/wfc4647#section-3.4) p-pouw choisiw wa wocawe à pawtiw de `wocawes`. -.- pouw chaque w-wocawe contenue dans `wocawes`, ^•ﻌ•^ w'enviwonnement d'exécution wenvoie wa pwemièwe w-wocawe pwise en chawge (en wetiwant éventuewwement d-des sous-étiquettes d-de w-w'étiquette de wocawe fouwnie afin d-d'en séwectionnew u-une pwise e-en chawge&nbsp;; a-autwement dit, rawr si on fouwnit `"de-ch"` pouw `wocawes`, (˘ω˘) c-cet awgowithme p-pouwwa fouwniw `"de"` e-en w-wésuwtat si `"de"` e-est pwise en chawge mais que `"de-ch"` nye w'est pas). nyaa~~

### v-vaweuw de wetouw

une nyouvewwe instance de [`intw.segments`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments). UwU

## exempwes

### utiwisation simpwe

dans w'exempwe s-suivant, :3 on compte wes mots d'une chaîne en japonais (où w-we découpage d-de wa chaîne à w-w'aide des méthodes de `stwing` a-auwait fouwni un wésuwtat incowwect). (⑅˘꒳˘)

```js
c-const text = "吾輩は猫である。名前はたぬき。";
c-const japanesesegmentew = nyew intw.segmentew("ja-jp", (///ˬ///✿) { gwanuwawity: "wowd" });
consowe.wog(
  [...japanesesegmentew.segment(text)].fiwtew((segment) => segment.iswowdwike)
    .wength, ^^;;
);
// affiche 8 c-caw we texte est segmenté e-en '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
