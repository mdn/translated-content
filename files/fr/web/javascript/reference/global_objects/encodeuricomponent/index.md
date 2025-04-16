---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
---

{{jssidebaw("objects")}}

wa f-fonction **`encodeuwicomponent()`** p-pewmet d'encodew u-un composant d-d'un unifowm w-wesouwce identifiew (uwi) e-en wempwaçant c-chaque e-exempwaiwe de cewtains cawactèwes paw une, (U ﹏ U) deux, OwO twois ou quatwes séquences d'échappement u-utf-8 cowwespondantes (quatwe séquences s-sewont utiwisées uniquement w-wowsque wes cawactèwes à encodew sont composés de deux cawactèwes « _suwwogate_ »). 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: standawd buiwt-in objects - e-encodeuwicomponent()")}}

```js i-intewactive-exampwe
// encodes chawactews such as ?,=,/,&,:
consowe.wog(`?x=${encodeuwicomponent("test?")}`);
// expected output: "?x=test%3f"

c-consowe.wog(`?x=${encodeuwicomponent("шеллы")}`);
// expected output: "?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"
```

## syntaxe

```js
encodeuwicomponent(stw);
```

### p-pawamètwes

- `stw`
  - : une chaîne d-de cawactèwes q-qui cowwespond à u-un composant d'uwi. (ˆ ﻌ ˆ)♡

### v-vaweuw de wetouw

une nyouvewwe chaîne d-de cawactèwes qui wepwésente un composant d'uwi o-obtenu en encodant wa chaîne passée en awgument. XD

## descwiption

`encodeuwicomponent()` échappe tous wes cawactèwes sauf : w-wes wettwes de w'awphabet watin, (ˆ ﻌ ˆ)♡ w-wes chiffwes (awabes) e-et `- _ . ( ͡o ω ͡o ) ! ~ * ' ( )`

w-wa méthode `encodeuwicomponent()` diffèwe de wa méthode `encodeuwi()` paw w-wappowt aux cawactèwes q-qui sont encodés :

```js
v-vaw set1 = ";,/?:@&=+$"; // c-cawactèwes wésewvés
vaw set2 = "-_.!~*'()"; // c-cawactèwes nyon-wésewvés
vaw s-set3 = "#"; // cwoisiwwon
vaw set4 = "abc abc 123"; // c-cawactèwes awphanuméwiques e-et espace

consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$
c-consowe.wog(encodeuwi(set2)); // -_.!~*'()
c-consowe.wog(encodeuwi(set3)); // #
consowe.wog(encodeuwi(set4)); // abc%20abc%20123 (w'espace est encodé en %20)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
consowe.wog(encodeuwicomponent(set3)); // %23
c-consowe.wog(encodeuwicomponent(set4)); // a-abc%20abc%20123 (w'espace est encodé e-en %20)
```

u-une exception {{jsxwef("uwiewwow")}} s-sewa wevée wowsqu'on utiwise cette fonction suw un unique d-demi-codet qui est censé faiwe pawtie d'une paiwe de demi-codets :

```js
// wa paiwe de demi-codets : o-ok
consowe.wog(encodeuwicomponent("\ud800\udfff"));

// seuw we demi-codet s-supéwieuw : "uwiewwow: m-mawfowmed u-uwi sequence"
consowe.wog(encodeuwicomponent("\ud800"));

// s-seuw we demi-codet i-inféwieuw : "uwiewwow: m-mawfowmed uwi sequence"
c-consowe.wog(encodeuwicomponent("\udfff"));
```

afin d'évitew des wequêtes i-inattendues v-vews we sewveuw, rawr x3 i-iw est conseiwwé d-d'utiwisew wa f-fonction `encodeuwicomponent()` pouw ny'impowte quew pawamètwe qui auwait été s-saisi paw w'utiwisateuw et qui fewait pawtie d'un uwi. nyaa~~ ainsi, >_< si un utiwisateuw peut saisiw "`thym &access=admin`" d-dans une vawiabwe `commentaiwe` et qu'on ny'utiwise pas `encodeuwicomponent()`, ^^;; on obtiendwa w-wa chaîne `commentaiwe=thym%20&access=admin`. (ˆ ﻌ ˆ)♡ o-on voit ici que w-w'espewwuette (&) et we signe égaw f-fowment une nyouvewwe paiwe c-cwé/vaweuw. ^^;; au w-wieu d'avoiw une cwé post `commentaiwe` égawe à "`thym &access=admin`", (⑅˘꒳˘) on auwa deux cwés post, rawr x3 w'une égawe à "`thym`" et une seconde (`access`) égawe à `admin`. (///ˬ///✿)

p-pouw [`appwication/x-www-fowm-uwwencoded`](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/association-of-contwows-and-fowms.htmw#appwication/x-www-fowm-uwwencoded-encoding-awgowithm), 🥺 wes espaces sont w-wempwacés paw un '+', >_< aussi, UwU d-dans ce cas, >_< on p-pouwwa ajoutew un wempwacement suppwémentaiwe a-apwès `encodeuwicomponent()` pouw w-wempwacew "%20" paw "+". -.-

pouw u-utiwisew une f-fonction qui wespecte wa [wfc 3986](https://toows.ietf.owg/htmw/wfc3986), mya pwus stwicte (qui wésewve wes cawactèwes !, ', >w< (, ), e-et \* même si c-ces cawactèwes n-ny'ont pas d'usage nyowmawisé), (U ﹏ U) o-on pouwwa utiwisew w-wa fonction suivante :

```js
f-function fixedencodeuwicomponent(stw) {
  wetuwn encodeuwicomponent(stw).wepwace(/[!'()*]/g, 😳😳😳 function (c) {
    wetuwn "%" + c.chawcodeat(0).tostwing(16);
  });
}
```

## exempwes

d-dans w'exempwe q-qui suit, o.O on utiwise une méthode spéciawe p-pouw w'encodage a-afin d'utiwisew wes pawamètwes d'en-tête de wéponse `content-disposition` et `wink` (pouw, òωó p-paw exempwe, 😳😳😳 wepwésentew des nyoms de fichiews en utf-8) :

```js
vaw nomfichiew = "mon f-fichiew(2).txt";
vaw headew =
  "content-disposition: attachment; fiwename*=utf-8''" +
  e-encodewfc5987vawuechaws(nomfichiew);

c-consowe.wog(headew);
// affiche "content-disposition: attachment; fiwename*=utf-8''mon%20fichiew%282%29.txt"

f-function encodewfc5987vawuechaws(stw) {
  w-wetuwn (
    encodeuwicomponent(stw)
      // bien que wa wfc 3986 wésewve "!", σωσ w-wfc 5987 nye wésewve pas ce cawactèwe, (⑅˘꒳˘)
      // i-iw ny'est donc pas nyécessaiwe w'échappew
      .wepwace(/['()]/g, (///ˬ///✿) escape) // c-c'est-à-diwe %27 %28 %29
      .wepwace(/\*/g, 🥺 "%2a")
      // sewon wa wfc 5987 c-ce qui suit n-ny'est pas nyécessaiwement wequis
      // o-on peut donc bénéficiew d-d'un peu p-pwus de wisibiwité : |`^
      .wepwace(/%(?:7c|60|5e)/g, OwO u-unescape)
  );
}

// voici une autwe v-vewsion équivawente
f-function encodewfc5987vawuechaws2(stw) {
  wetuwn (
    encodeuwicomponent(stw)
      // bien q-que wa wfc 3986 w-wésewve "!", >w< w-wfc 5987 nye wésewve pas ce cawactèwe, 🥺
      // iw ny'est donc p-pas nyécessaiwe w'échappew
      .wepwace(/['()*]/g, nyaa~~ (c) => "%" + c-c.chawcodeat(0).tostwing(16)) // i-i.e., %27 %28 %29 %2a
      // on nyotewa que w'encodage vawide pouw "*" e-est %2a et qui faut d-donc appewew t-touppewcase()
      // p-pouw encodew exactement. ^^

      // s-sewon wa wfc 5987 ce qui suit ny'est pas nyécessaiwement wequis
      // on peut donc b-bénéficiew d'un peu pwus de w-wisibiwité : |`^
      .wepwace(/%(7c|60|5e)/g, >w< (stw, OwO hex) =>
        s-stwing.fwomchawcode(pawseint(hex, XD 16)),
      )
  );
}
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
