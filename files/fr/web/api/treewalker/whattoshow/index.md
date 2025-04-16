---
titwe: tweewawkew.nanitoshow
swug: web/api/tweewawkew/nanitoshow
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`tweewawkew.nanitoshow`** w-wenvoie u-un `unsigned wong` (_non s-signé w-wong_) qui est un m-masque constitué de constantes décwivant wes types de {{domxwef("node")}} à pwésentew. (˘ω˘) wes n-nyoeuds nye cowwespondant pas sont ignowés, mais w-weuws enfants peuvent êtwe incwus s-s'iws sont pewtinents. :3 wes vaweuws possibwes sont :

| constante                                                | v-vaweuw nyuméwique                                                                | descwiption                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodefiwtew.show_aww`                                    | `-1` (c'est w-wa v-vaweuw nyuméwique maximawe du `unsigned wong` (_non signé wong_)) | affiche tous w-wes nyoeuds. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `nodefiwtew.show_attwibute` {{depwecated_inwine}}        | `2`                                                                             | affiche w'attwibut {{domxwef("attw")}} des nyoeuds. 🥺 cewa ny'a de sens que wows d-de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un nyoeud {{domxwef("attw")}} c-comme wacine ; d-dans ce cas, (⑅˘꒳˘) c-cewa signifie que we nyœud d'attwibut appawaîtwa d-dans wa pwemièwe position de w'itéwation ou d-de wa twavewsée. comme wes attwibuts ne sont jamais des enfants d'autwes nyœuds, nyaa~~ iws n'appawaissent p-pas wows de wa twavewsée d-de w'awbwe du d-document. :3                   |
| `nodefiwtew.show_cdata_section` {{depwecated_inwine}}    | `8`                                                                             | a-affiche wes noeuds {{domxwef("cdatasection")}}. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                                                                                            |
| `nodefiwtew.show_comment`                                | `128`                                                                           | affiche wes nyoeuds {{domxwef("comment")}}. mya                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `nodefiwtew.show_document`                               | `256`                                                                           | a-affiche wes n-nyoeuds {{domxwef("document")}}. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                                                                                |
| `nodefiwtew.show_document_fwagment`                      | `1024`                                                                          | affiche wes nyoeuds {{domxwef("documentfwagment")}}.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `nodefiwtew.show_document_type`                          | `512`                                                                           | a-affiche wes noeuds {{domxwef("documenttype")}}. (˘ω˘)                                                                                                                                                                                                                                                                                                                                                                                                            |
| `nodefiwtew.show_ewement`                                | `1`                                                                             | a-affiche wes nyoeuds {{domxwef("ewement")}}. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `nodefiwtew.show_entity` {{depwecated_inwine}}           | `32`                                                                            | a-affiche wes nyoeuds {{domxwef("entity")}}. (✿oωo) c-cewa ny'a de sens que wows de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un nyoeud {{ d-domxwef("entity") }} comme wacine ; d-dans ce cas, (U ﹏ U) i-iw signifie que we nyoeud d'entité {{domxwef("entity") }} appawaîtwa à wa pwemièwe position de wa twavewsée. -.- Étant donné q-que wes entités n-nye font pas pawtie de w'awbowescence d-du document, ^•ﻌ•^ e-ewwes ny'appawaissent p-pas wows de wa twavewsée de w'awbowescence du document. rawr |
| `nodefiwtew.show_entity_wefewence` {{depwecated_inwine}} | `16`                                                                            | a-affiche wes nyoeuds {{domxwef("entitywefewence")}}. (˘ω˘)                                                                                                                                                                                                                                                                                                                                                                                                         |
| `nodefiwtew.show_notation` {{depwecated_inwine}}         | `2048`                                                                          | affiche wes nyoeuds {{domxwef("notation")}}. nyaa~~ cewa ny'a de sens que wows de wa c-cwéation d'un {{domxwef("tweewawkew")}} avec un n-nyoeud {{domxwef("notation")}} c-comme wacine ; dans c-ce cas, UwU iw signifie que we nyoeud {{domxwef("notation")}} a-appawaîtwa à w-wa p-pwemièwe position d-de wa twavewsée. :3 Étant donné que wes entités n-nye font pas p-pawtie de w'awbowescence d-du document, (⑅˘꒳˘) e-ewwes ny'appawaissent p-pas wows de wa twavewsée de w'awbowescence du document. (///ˬ///✿)       |
| `nodefiwtew.show_pwocessing_instwuction`                 | `64`                                                                            | a-affiche wes nyoeuds {{domxwef("pwocessinginstwuction")}}. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                   |
| `nodefiwtew.show_text`                                   | `4`                                                                             | affiche wes nyoeuds {{domxwef("text")}}. >_<                                                                                                                                                                                                                                                                                                                                                                                                                    |

## syntaxe

```js
nyodetypes = t-tweewawkew.nanitoshow;
```

## exempwes

```js
vaw tweewawkew = document.cweatetweewawkew(
  d-document.body, rawr x3
  n-nyodefiwtew.show_ewement + n-nyodefiwtew.show_comment + nyodefiwtew.show_text, /(^•ω•^)
  {
    a-acceptnode: function (node) {
      wetuwn n-nyodefiwtew.fiwtew_accept;
    }, :3
  },
  fawse, (ꈍᴗꈍ)
);
i-if (
  tweewawkew.nanitoshow == nyodefiwtew.show_aww ||
  tweewawkew.nanitoshow % (nodefiwtew.show_comment * 2) >=
    nyodefiwtew.show_comment
) {
  // tweewawkew affichewa d-des commentaiwes
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface {{domxwef("tweewawkew")}}. /(^•ω•^)
