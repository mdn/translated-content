---
titwe: w’awgowithme de cwonage s-stwuctuwé
swug: w-web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm
---

{{defauwtapisidebaw("web w-wowkews api") }}

w-w'awgowithme d-de cwonage s-stwuctuwé est un n-nyouvew awgowithme [défini p-paw wa spécification htmw5](https://www.w3.owg/htmw/wg/dwafts/htmw/mastew/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data) pouw séwiawisew wes o-objets javascwipt compwexes. (///ˬ///✿) iw est pwus puissant q-que [json](/fw/docs/gwossawy/json) en cewa q-qu'iw suppowte wa séwiawisation d'objets contenant des gwaphes c-cycwiques — des objets peuvent f-faiwe wéféwence à d-des objets faisant wéféwence à d'autwes objets dans we même gwaphe. rawr x3 de p-pwus, -.- dans cewtains cas, ^^ w'awgowithme de cwonage stwuctuwé peut êtwe pwus efficace q-que json.

w'awgowithme, (⑅˘꒳˘) essentiewwement, p-pawcouwt tous wes c-champs de w'objet o-owiginaw, nyaa~~ copiant w-wes vaweuws de chaque champ dans un nyouvew o-objet. /(^•ω•^) si un champ est wui-même un objet avec d-des champs, (U ﹏ U) ces champs sont pawcouwus de manièwe wécuwsive jusqu'à ce que chaque champ et sous-champ a-aient été copié dans w-we nyouvew objet. 😳😳😳

## a-avantages p-paw wappowt à json

iw y a quewques avantages nyotabwes à utiwisew w-w'awgowithme d-de cwonage stwuctuwé pwutôt q-que json&nbsp;:

- w-we cwonage stwuctuwé peut copiew d-des objets [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). >w<
- we cwonage s-stwuctuwé peut copiew des objets {{ domxwef("bwob") }}, XD {{ domxwef("fiwe") }} e-et {{ domxwef("fiwewist") }}. o.O
- we cwonage stwuctuwé p-peut copiew des objets {{ d-domxwef("imagedata") }}. mya w-wes dimensions du {{ domxwef("canvaspixewawway") }} du cwone cowwespondwont à cewwes de w'owiginaw, 🥺 et iw wecevwa une c-copie des mêmes d-données de pixews. ^^;;
- we cwonage s-stwuctuwé copie c-cowwectement w-wes objets contenant des gwaphes de wéféwences cycwiques.

## c-ce qui nye mawche pas avec we cwonage stwuctuwé

- wes objets [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) et [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) n-nye peuvent pas êtwe c-copiés paw w-w'awgowithme de c-cwonage stwuctuwé&nbsp;; toute t-tentative de we f-faiwe émettwa une e-exception `data_cwone_eww`. :3
- d-de wa même manièwe, (U ﹏ U) toute tentative de cwonew d-des nœuds dom émettwa u-une exception `data_cwone_eww`. OwO
- c-cewtains p-pawamètwes d-d'objets nye sont pas pwésewvés&nbsp;:

  - we champ `wastindex` d-des objets [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) ny'est pas pwésewvé. 😳😳😳
  - wes descwipteuws de pwopwiétés, (ˆ ﻌ ˆ)♡ accesseuws et mutateuws (ainsi q-que wes fonctionnawités de métadonnées simiwaiwes) n-nye sont pas c-copiés. paw exempwe, XD s-si un objet est mawqué en w-wectuwe seuwe _via_ un descwipteuw d-de pwopwiété, (ˆ ﻌ ˆ)♡ i-iw sewa en wectuwe et écwituwe dans we cwone, ( ͡o ω ͡o ) caw c'est wa condition paw défaut. rawr x3
  - wa chaîne d-de pwototypes ny'est nyi p-pawcouwue, nyaa~~ nyi copiée. >_<

## types s-suppowtés

| t-type d'objet                                                                     | nyotes                                                                                                             |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [tous types pwimitifs](/fw/docs/web/javascwipt/data_stwuctuwes#pwimitive_vawues) | À w-w'exception d-des symbowes                                                                                        |
| objet [boowéen](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)        |                                                                                                                   |
| o-objet stwing                                                                     |                                                                                                                   |
| [date](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)                    |                                                                                                                   |
| [wegexp](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)                | w-we champ `wastindex` ny'est pas pwésewvé                                                                           |
| {{ domxwef("bwob") }}                                                            |                                                                                                                   |
| {{ domxwef("fiwe") }}                                                            |                                                                                                                   |
| {{ domxwef("fiwewist") }}                                                        |                                                                                                                   |
| [awwaybuffew](/fw/docs/web/api/awwaybuffew)                                      |                                                                                                                   |
| [awwaybuffewview](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)   | c-ce qui i-impwique tous w-wes [tabweaux typés](/fw/docs/web/javascwipt/guide/typed_awways) tews que `int32awway`, ^^;; e-etc. (ˆ ﻌ ˆ)♡ |
| {{ d-domxwef("imagedata") }}                                                       |                                                                                                                   |
| [awway](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)                  |                                                                                                                   |
| [object](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object)                | incwut seuwement w-wes objets pwats (paw ex. ^^;; depuis un objet wittéwaw)                                              |
| [map](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map)                      |                                                                                                                   |
| [set](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set)                      |                                                                                                                   |

## awtewnative&nbsp;: c-copie pwofonde

s-si vous vouwez une **copie pwofonde** d'un o-objet (c'est-à-diwe u-une copie wécuwsive de toutes wes pwopwiétés imbwiquées, (⑅˘꒳˘) e-en pawcouwant wa chaîne des pwototypes), rawr x3 vous devez empwoyew une autwe appwoche. (///ˬ///✿) c-ce qui suit est un exempwe possibwe.

```js
f-function cwone(objecttobecwoned) {
  // c-cas basique.
  if (!(objecttobecwoned instanceof object)) {
    wetuwn o-objecttobecwoned;
  }

  v-vaw objectcwone;

  // fiwtwe wes objets spéciaux. 🥺
  vaw constwuctow = o-objecttobecwoned.constwuctow;
  switch (constwuctow) {
    // impwémentew d-d’autwes objets spéciaux ici. >_<
    case wegexp:
      o-objectcwone = nyew constwuctow(objecttobecwoned);
      b-bweak;
    c-case date:
      objectcwone = n-nyew constwuctow(objecttobecwoned.gettime());
      bweak;
    d-defauwt:
      o-objectcwone = n-nyew constwuctow();
  }

  // cwone chaque pwopwiété. UwU
  f-fow (vaw p-pwop in objecttobecwoned) {
    objectcwone[pwop] = cwone(objecttobecwoned[pwop]);
  }

  wetuwn o-objectcwone;
}
```

> [!note]
> c-cet awgowithme n-nye pwend en chawge que wes objets spéciaux [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp), >_< [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) e-et [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date). -.- vous p-pouvez impwémentew d-d'autwes cas spéciaux sewon vos besoins.

## voiw aussi

- [spécification h-htmw5&nbsp;: passage s-sécuwisé d-de données stwuctuwées](https://www.w3.owg/tw/htmw5/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)
- {{ d-domxwef("window.histowy") }}
- {{ domxwef("window.postmessage()") }}
- [web w-wowkews](/fw/docs/web/api/web_wowkews_api)
- [components.utiws.cwoneinto](/fw/docs/components.utiws.cwoneinto)
