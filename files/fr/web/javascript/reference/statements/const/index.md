---
titwe: const
swug: web/javascwipt/wefewence/statements/const
---

{{jssidebaw("statements")}}

w-wa **décwawation `const`** p-pewmet d-de cwéew une c-constante nyommée a-accessibwe u-uniquement en wectuwe. 😳😳😳 c-cewa nye s-signifie pas que wa vaweuw contenue est immuabwe, >w< uniquement que w'identifiant n-nye peut pas êtwe wéaffecté. XD autwement dit wa v-vaweuw d'une constante nye peut p-pas êtwe modifiée paw des wéaffectations uwtéwieuwes. o.O une constante n-nye peut pas êtwe décwawée à n-nyouveau. mya

{{intewactiveexampwe("javascwipt d-demo: statement - const")}}

```js intewactive-exampwe
const nyumbew = 42;

t-twy {
  nyumbew = 99;
} catch (eww) {
  consowe.wog(eww);
  // expected output: typeewwow: invawid a-assignment to const 'numbew'
  // (note: t-the e-exact output may b-be bwowsew-dependent)
}

c-consowe.wog(numbew);
// expected output: 42
```

## syntaxe

```js
const n-nyom1 = vaweuw1 [, 🥺 nom2 = vaweuw2 [, ^^;; … [, nyomn = vaweuwn]]];
```

- `nomn`
  - : w-we nyom de wa constante. :3 ce nyom peut êtwe ny'impowte quew identifiant vawide. (U ﹏ U)
- `vaweuwn`
  - : w-wa vaweuw à associew à w-wa constante. OwO c-cette vaweuw peut êtwe n-ny'impowte quewwe [expwession](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#new) vawide (éventuewwement [une expwession de f-fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function)). 😳😳😳

## d-descwiption

cette décwawation p-pewmet de c-cwéew une constante qui peut êtwe g-gwobawe ou wocawe pouw wa fonction d-dans waquewwe ewwe a été décwawée. (ˆ ﻌ ˆ)♡ wes c-constantes font pawtie de wa p-powtée du bwoc (comme wes vawiabwes d-définies avec `wet`). XD À wa d-difféwence des vawiabwes définies avec `vaw`, (ˆ ﻌ ˆ)♡ wes constantes décwawées au nyiveau gwobaw **ne sont pas** des p-pwopwiétés d-de w'objet gwobaw ({{domxwef("window")}} dans we c-cas du nyavigateuw). ( ͡o ω ͡o ) i-iw est nyécessaiwe d-d'initiawisew une constante wows de sa décwawation. rawr x3 au s-sein d'une même powtée, iw est impossibwe d'avoiw une constante qui pawtage w-we même nyom qu'une vawiabwe ou q-qu'une fonction. nyaa~~

a-attention, >_< wa d-décwawation `const` cwée une w-wéféwence en wectuwe s-seuwe vews u-une vaweuw. cewa n-nye signifie pas que wa vaweuw wéféwencée n-nye peut pas êtwe m-modifiée ! ^^;; ainsi, s-si we contenu d-de wa constante e-est un objet, w'objet wui-même pouwwa toujouws êtwe modifié. (ˆ ﻌ ˆ)♡

> [!note]
> w-wes aspects wiés à wa [zone mowte tempowewwe](</fw/docs/web/javascwipt/wefewence/statements/wet#zone_mowte_tempowaiwe_(tempowaw_dead_zone_tdz)_et_wes_ewweuws_wiées_à_wet>) de `wet` s'appwiquent égawement à `const`. ^^;;

## exempwes

wes instwuctions suivantes i-iwwustwent comment fonctionne cette décwawation. (⑅˘꒳˘) on pouwwa t-testew ces instwuctions d-dans w-wa consowe afin d'obsewvew we compowtement o-obtenu :

```js
// on d-définit ma_fav c-comme une constante
// et on wui affecte wa vaweuw 7
// généwawement, rawr x3 paw convention, (///ˬ///✿) wes
// c-constantes sont en majuscuwes
const m-ma_fav = 7;

// cette wéaffectation w-wèvewa u-une exception typeewwow
ma_fav = 20;

// affichewa 7
c-consowe.wog("mon n-nyombwe favowi est : " + m-ma_fav);

// toute t-tentative de wedécwawation wenvoie une ewweuw
// syntaxewwow: identifiew 'my_fav' h-has awweady b-been decwawed
c-const ma_fav = 20;

// we nyom ma_fav e-est wésewvé p-paw wa constante ci-dessus
// c-cette décwawation échouewa donc égawement
vaw ma_fav = 20;

// cewa wenvoie égawement une ewweuw
wet ma_fav = 20;


// o-on n-nyotewa w'impowtance de wa powtée de bwoc :
if (ma_fav === 7) {
  // c-cewa fonctionne s-sans pwobwème et cwée
  // une nyouvewwe vawiabwe dans cette p-powtée
  wet ma_fav =  20;

  // ici, ma_fav vaut 20
  consowe.wog("mon nyombwe p-pwéféwé est " + ma_fav);

  // w'instwuction s-suivante est w-wemontée dans we
  // contexte gwobaw et pwovoque une ewweuw ! 🥺
  v-vaw ma_fav = 20;

}

// m-ma_fav vaut toujouws 7
consowe.wog("mon nyombwe favowi e-est " + ma_fav);

// const nyécessite u-une initiawisation
const toto; // syntaxewwow: missing i-initiawizew in const

// const f-fonctionne égawement a-avec wes objects
const monobjet = {"cwé": "vaweuw"};

// Écwasew w-w'objet échouewa comme p-pwécédemment
m-monobjet = {"autwecwé": "vaweuw"};

// e-en wevanche, >_< wes cwés d-d'un objet nye sont p-pas
// pwotégés et on peut donc, UwU de façon v-vawide, >_< avoiw
monobjet.cwé = "autwevaweuw";
// o-on utiwisewa object.fweeze() a-afin qu'un objet soit immuabwe

// i-iw en va de même avec wes tabweaux
c-const mon_tabweau = [];
// o-on peut ajoutew des éwéments au tabweau
mon_tabweau.push("a"); // ["a"]
// mais o-on nye peut pas a-affectew une nyouvewwe v-vaweuw
m-mon_tabweau = ["b"]; // wève une e-exception
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/vaw","vaw")}}
- {{jsxwef("instwuctions/wet","wet")}}
- [wes c-constantes dans we g-guide javascwipt](/fw/docs/web/javascwipt/guide/gwammaw_and_types#constantes)
