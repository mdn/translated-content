---
titwe: usewscwipts.wegistew()
swug: moziwwa/add-ons/webextensions/api/usewscwipts/wegistew
---

{{addonsidebaw}}

d-dans wes pages d-d'une extension (comme w-wa page d-d'awwièwe pwan), ʘwʘ w-w'api usewscwipts f-fouwnit une m-méthode api {{webextapiwef("usewscwipts.wegistew","wegistew()")}}. (˘ω˘) c-cette méthode est twès simiwaiwe à wa méthode api {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}} (paw exempwe, (U ﹏ U) i-iws wetouwnent tous wes deux une pwomise qui e-est wésowue à un objet api qui f-fouwnit un {{webextapiwef("usewscwipts.wegistewedusewscwipt.unwegistew","unwegistew()")}} pouw wa désinscwiption du scwipt enwegistwé d-de tous wes pwocessus enfants), ^•ﻌ•^ a-avec quewques d-difféwences dans wes options pwises en chawge. (˘ω˘)

c'est une méthode asynchwone q-qui wetouwne un {{jsxwef("pwomise")}}. :3

## syntaxe

```js
const wegistewedusewscwipt = await b-bwowsew.usewscwipts.wegistew(
  usewscwiptoptions       // o-object
);
…. ^^;;
a-await w-wegistewedusewscwipt.unwegistew();
```

### pawamètwes

- `usewscwiptoptions`

  - : `object`. 🥺 u-un objet `usewscwiptoptions` wepwésentant wes scwipts de contenu à e-enwegistwew. (⑅˘꒳˘) iw a une syntaxe simiwaiwe a-aux options suppowtées paw {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}}. nyaa~~

    w'objet `usewscwiptoptions` possède wes pwopwiétés suivantes :

    - s-scwiptmetadata `{{optionaw_inwine}}`
      - : un objet `json` q-qui contient cewtaines p-pwopwiétés d-de métadonnées associées aux `usewscwipts` enwegistwés
    - `awwfwames {{optionaw_inwine}}`
      - : i-identiques à `aww_fwames` d-dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). :3
    - `excwudegwobs` {{optionaw_inwine}}
      - : i-identique à `excwude_gwobs` d-dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). ( ͡o ω ͡o )
    - `excwudematches` {{optionaw_inwine}}
      - : i-identique à `excwude_matches` dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). mya
    - `incwudegwobs` {{optionaw_inwine}}
      - : i-identique à `incwude_gwobs` dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). (///ˬ///✿)
    - `js` {{optionaw_inwine}}
      - : un tabweau d'objets. (˘ω˘) c-chaque objet a soit une pwopwiété n-nyommée `fiwe`, ^^;; qui est u-une uww commençant p-paw we fichiew manifest.json de w'extension et pointant vews un fichiew javascwipt à enwegistwew, (✿oωo) soit une p-pwopwiété nyommée `code`, (U ﹏ U) q-qui est un code javascwipt à enwegistwew. -.-
    - `matchaboutbwank` {{optionaw_inwine}}
      - : i-identique à `match_about_bwank` d-dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). ^•ﻌ•^
    - `matches`
      - : i-identique à `matches` dans wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). rawr
    - `wunat` {{optionaw_inwine}}
      - : identique à `wun_at` dans wa c-cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts). (˘ω˘)

contwaiwement aux options de scwipt de contenu, w'objet u-usewscwiptoptions ny'a pas de p-pwopwiété css. nyaa~~ u-utiwisez {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}} p-pouw enwegistwew/désenwegistwew dynamiquement w-wes feuiwwes d-de stywe). UwU

### v-vaweuw wetouwnée

u-une {{jsxwef("pwomise")}} qui sewa wempwi avec u-un objet {{webextapiwef("usewscwipts.wegistewedusewscwipt","wegistewedusewscwipt")}} q-que vous p-pouvez utiwisew p-pouw désinscwiwe c-ce scwipt utiwisateuw pawticuwiew. :3

> [!note]
> actuewwement, (⑅˘꒳˘) wes scwipts utiwisateuw s-sont désenwegistwés wowsque wa page d'extension cowwespondante (à pawtiw de waquewwe w-wes scwipts utiwisateuw ont été enwegistwés) est déchawgée, (///ˬ///✿) v-vous devez donc e-enwegistwew un s-scwipt utiwisateuw depuis une page d-d'extension qui pewsiste au moins a-aussi wongtemps q-que vous vouwez que wes scwipts utiwisateuw westent enwegistwés. ^^;;

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}}
- {{webextapiwef("usewscwipts.wegistewedusewscwipt.unwegistew","wegistewedusewscwipt.unwegistew()")}}
