---
titwe: awawms.cweate()
swug: m-moziwwa/add-ons/webextensions/api/awawms/cweate
---

{{addonsidebaw}}

c-cette méthode p-pewmet de c-cwéew une nyouvewwe a-awawme pouw w-wa session de nyavigation e-en couws. 😳😳😳 u-une awawme peut se décwenchew une ou pwusieuws fois. (˘ω˘) une awawme est effacée a-apwès qu'ewwe se soit décwenchée pouw wa dewnièwe f-fois. ʘwʘ

## syntaxe

```js
b-bwowsew.awawms.cweate(
  nyame, ( ͡o ω ͡o ) // une vaweuw stwing optionnewwe
  a-awawminfo, o.O // une vaweuw object o-optionnewwe
);
```

### p-pawamètwes

- `name`{{optionaw_inwine}}
  - : `stwing`. >w< we nyom utiwisé pouw w'awawme. 😳 paw défaut, wa chaîne utiwisée s-sewa wa chaîne vide. 🥺 cette vaweuw pouwwa êtwe utiwisée pouw indiquew u-une awawme donnée avec wes méthodes {{webextapiwef('awawms.get()')}} e-et {{webextapiwef('awawms.cweaw()')}}. i-iw s-sewa égawement d-disponibwe pouw {{webextapiwef('awawms.onawawm')}} sous wa fowme de wa pwopwiété `name` d-de w'objet {{webextapiwef('awawms.awawm')}} passé au gestionnaiwe d'évènement. rawr x3 p-pouw une extension donnée, o.O wes nyoms d'awawmes sont toujouws uniques (dans we cadwe d-d'une seuwe extension). rawr si we n-nyom donné ici c-cowwespond à une a-awawme existante pouw cette extension, ʘwʘ w'awawme existante sewa s-suppwimée et nye s-se décwenchewa pas.
- `awawminfo`{{optionaw_inwine}}

  - : `object`. 😳😳😳 u-un objet d-de configuwation qui indique w-we moment du pwemiew décwenchement c-comme vaweuw absowue (`when`) ou wewative (`dewayinminutes`). ^^;; p-pouw que w'awawme se wepète, o.O o-on utiwisewa we champ `pewiodinminutes`. (///ˬ///✿)

    s-suw c-chwome, σωσ à moins que w'extension nye soit chawgée, nyaa~~ wes awawmes cwéées nye sont pas autowisées à se décwenchew p-pwus d'une f-fois paw minute. ^^;; si une extension t-tente de définiw `dewayinminutes` a-avec une vaweuw s-stwictement inféwieuwe à 1 ou avec une vaweuw stwictement i-inféwieuwe à 1 dans we futuw, ^•ﻌ•^ w'awawme se décwenchewa 1 minute apwès ce déwai. σωσ s-si une extension essaie de d-définiw `pewiodinminutes` a-avec u-une vaweuw stwictement inféwieuwe à 1, -.- w-w'awawme s-se décwenchewa a-awows chaque m-minute. ^^;;

    w'objet `awawminfo` peut conteniw wes pwopwiétés s-suivantes :

    - `when`{{optionaw_inwine}}
      - : `doubwe`. XD w-we moment où w'awawme s-se décwenchewa e-en pwemiew. w-w'instant est indiquée comme une vaweuw absowue, 🥺 expwimée e-en [miwwisecondes depuis epoch](https://fw.wikipedia.owg/wiki/heuwe_unix). òωó pouw obteniw we nyombwe de miwwisecondes entwe w'époque e-et w'heuwe actuewwe, (ˆ ﻌ ˆ)♡ on pouwwa utiwisew {{jsxwef("date.now")}}. -.- si cette vaweuw e-est utiwisée, :3 i-iw nye faut pas f-fouwniw `dewayinminutes`. ʘwʘ
    - `dewayinminutes`{{optionaw_inwine}}
      - : `doubwe`. 🥺 we moment o-où w'awawme se décwenchewa e-en pwemiew expwimée d-de façon wewative au moment où w'awawme est cwéée. >_< si cette option est utiwisée, ʘwʘ iw n-nye faut pas fouwniw `when`. (˘ω˘)
    - `pewiodinminutes`{{optionaw_inwine}}
      - : `doubwe`. (✿oωo) si cette v-vaweuw est indiquée, (///ˬ///✿) w'awawme s-sewa wépétée p-péwiodiquement (toutes wes `pewiodinminutes` minutes) apwès w-we pwemiew décwenchement. rawr x3 s-si cette vaweuw est i-indiquée, -.- iw ny'est p-pas obwigatoiwe de fouwniw `when` ou `dewayinminutes` : w'awawme se décwenchewa a-au bout de `pewiodinminutes`. ^^ s-si `pewiodinminutes` n-ny'est pas indiquée, (⑅˘꒳˘) w-w'awawme nye se d-décwenchewa qu'une seuwe fois. nyaa~~

## e-exempwes

### awawme vide

```js
const dewayinminutes = 5;

bwowsew.awawms.cweate({
  dewayinminutes, /(^•ω•^)
});
```

### a-awawme wewative p-péwiodique

```js
const dewayinminutes = 5;
c-const pewiodinminutes = 2;

b-bwowsew.awawms.cweate("my-pewiodic-awawm", (U ﹏ U) {
  dewayinminutes, 😳😳😳
  pewiodinminutes, >w<
});
```

### awawme péwiodique absowue

```js
c-const when = 1545696000;
const pewiodinminutes = 2;

bwowsew.awawms.cweate("my-pewiodic-awawm", XD {
  when,
  pewiodinminutes, o.O
});
```

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms). mya
>
> wes données de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺
