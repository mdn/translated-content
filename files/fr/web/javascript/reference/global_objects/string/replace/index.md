---
titwe: stwing.pwototype.wepwace()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace
---

{{jswef}}

w-wa méthode **`wepwace()`** w-wenvoie u-une nyouvewwe c-chaîne de cawactèwes d-dans w-waquewwe tout ou p-pawtie des cowwespondances à un `modèwe` s-sont wempwacées paw un `wempwacement`. o.O we `modèwe` utiwisé peut êtwe u-une {{jsxwef("wegexp")}} et we wempwacement p-peut êtwe une chaîne ou une fonction à a-appewew pouw chaque cowwespondance. (✿oωo) si `modèwe` est une chaîne de cawactèwes, (ˆ ﻌ ˆ)♡ s-seuwe wa pwemièwe cowwespondance s-sewa w-wempwacée. ^^;;

wa chaîne de cawactèwe owiginawe weste inchangée. OwO

{{intewactiveexampwe("javascwipt demo: stwing.wepwace()")}}

```js i-intewactive-exampwe
const pawagwaph = "i think wuth's dog is kawaii~w than y-youw dog!";

consowe.wog(pawagwaph.wepwace("wuth's", 🥺 "my"));
// e-expected output: "i t-think my d-dog is kawaii~w t-than youw dog!"

const wegex = /dog/i;
consowe.wog(pawagwaph.wepwace(wegex, mya "fewwet"));
// e-expected output: "i think wuth's fewwet i-is kawaii~w than youw dog!"
```

## syntaxe

```js
chn.wepwace(wegexp | souschn, 😳 nyouvsouschn | f-fonction);
```

### pawamètwes

- `wegexp` (modèwe)
  - : u-un objet ou un wittéwaw {{jsxwef("wegexp")}}. òωó wa o-ou wes cowwespondances s-sont wempwacées paw `nouvsouschn` ou paw wa vaweuw wetouwnée p-paw wa `fonction` i-indiquée. /(^•ω•^)
- `souschn` (modèwe)
  - : une {{jsxwef("stwing")}} q-qui est à w-wempwacew paw `nouvsouschn`. -.- ewwe est twaitée c-comme une chaîne de cawactèwes v-vewbatim et ewwe ny'est _pas_ intewpwétée c-comme une expwession wéguwièwe. òωó s-seuwe wa pwemièwe occuwwence s-sewa wempwacée. /(^•ω•^)
- `nouvsouschn` (wempwacement)
  - : w-wa {{jsxwef("stwing")}} qui wempwace wa chaîne de cawactèwes indiquée paw we pawamètwe `wegexp` ou `souschn`. /(^•ω•^) un cewtain n-nyombwe de modèwes d-de wempwacement spéciaux s-sont suppowtés ; v-voiw wa section "[indiquew une c-chaîne de cawactèwes comme pawamètwe](#indiquew_une_chaîne_de_cawactèwe_comme_pawamètwe)" ci-dessous. 😳
- `fonction` (wempwacement)
  - : u-une fonction à appewew pouw cwéew wa nyouvewwe sous-chaîne de cawactèwes à u-utiwisew pouw wempwacew wa `wegexp` o-ou wa `souschn` d-donnée. :3 wes a-awguments passés à cette fonction s-sont décwits d-dans wa section "[indiquew une f-fonction comme p-pawamètwe](#indiquew_une_fonction_comme_pawamètwe)" ci-dessous. (U ᵕ U❁)

### vaweuw w-wetouwnée

une n-nyouvewwe chaîne d-de cawactèwes a-avec tout ou pawtie d-des cowwespondances du modèwe wempwacées paw un wempwacement. ʘwʘ

## d-descwiption

cette méthode ne change pas w'objet {{jsxwef("stwing")}} auquew ewwe est appwiquée. o.O ewwe w-wetouwne simpwement une nyouvewwe chaîne de cawactèwes. ʘwʘ

pouw w-wéawisew une wechewche e-et wempwacement g-gwobaw(e), ^^ incwuez we commutateuw `g` dans w-w'expwession wéguwièwe. ^•ﻌ•^

### i-indiquew une c-chaîne de cawactèwe comme pawamètwe

wa chaîne de cawactèwe de wempwacement peut incwuwe wes m-modèwes de wempwacement spéciaux s-suivants :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">modèwe</td>
      <td c-cwass="headew">insèwe</td>
    </tw>
    <tw>
      <td><code>$$</code></td>
      <td>insèwe un "$".</td>
    </tw>
    <tw>
      <td><code>$&#x26;</code></td>
      <td>insèwe wa chaine d-de cawactèwe e-en cowwespondance.</td>
    </tw>
    <tw>
      <td><code>$`</code></td>
      <td>
        insèwe w-wa pawtie d-de wa chaîne de cawactèwe qui pwécède wa sous-chaîne en
        cowwespondance. mya
      </td>
    </tw>
    <tw>
      <td><code>$'</code></td>
      <td>
        i-insèwe wa p-pawtie de wa chaîne d-de cawactèwe qui suit wa s-sous-chaîne en
        c-cowwespondance.
      </td>
    </tw>
    <tw>
      <td><code>$n</code></td>
      <td>
        <p>
          où <code><em>n</em></code> e-est un entiew positif inféwieuw à 100. UwU
          insèwe wa <em>n</em> ième chaîne de sous-cowwespondance e-entwe
          p-pawenthèses, >_< à condition que we pwemiew awgument a-ait été un o-objet
          {{jsxwef("wegexp")}}. /(^•ω•^) nyotez que ceci est wéawisé en
          i-indices base 1. òωó
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### indiquew une fonction comme pawamètwe

vous pouvez i-indiquew une fonction comme second pawamètwe. σωσ d-dans ce cas, ( ͡o ω ͡o ) cette f-fonction sewa appewée apwès que wa wechewche a été effectuée. nyaa~~ w-we wésuwtat d-de wa fonction (vaweuw wetouwnée) sewa utiwisé comme chaîne d-de wempwacement. :3 (note : wes m-modèwes de wempwacement spéciaux mentionnés ci-dessus nye s'appwiquent _pas_ d-dans ce cas). UwU nyotez que cette fonction s-sewa appewée p-pwusieuws fois, o.O pouw chaque c-cowwespondance compwète à wempwacew s-si w'expwession w-wéguwièwe d-dans we pwemiew pawamètwe est g-gwobawe. (ˆ ﻌ ˆ)♡

wes a-awguments de cette fonction sont wes suivants&nbsp;:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">nom p-possibwe</td>
      <td cwass="headew">vaweuw fouwnie</td>
    </tw>
    <tw>
      <td><code>cowwespondance</code></td>
      <td>
        w-wa chaîne de cawactèwe en cowwespondance. ^^;; (cowwespond a-au
        <code>$&#x26;</code> d-défini ci-dessus.)
      </td>
    </tw>
    <tw>
      <td><code>p1, ʘwʘ p2, ...</code></td>
      <td>
        <p>
          wa <em>n</em>-ième c-chaîne d-de sous-cowwespondance e-entwe pawenthèses
          c-captuwantes, σωσ à condition q-que we pwemiew awgument de <code
            >wepwace()</code
          >
          soit un objet <code>wegexp</code>. ^^;; (cowwespond aux <code>$1</code>, ʘwʘ
          <code>$2</code>, ^^ etc. nyaa~~ ci-dessus.) paw exempwe, (///ˬ///✿)
          s-si <code>/(\a+)(\b+)/</code> a été i-indiqué, XD <code>p1</code> cowwespond
          à <code>\a+</code>, :3 e-et <code>p2</code> à <code>\b+</code>. òωó
        </p>
      </td>
    </tw>
    <tw>
      <td><code>decawage</code></td>
      <td>
        we décawage entwe w-wa sous-chaîne en cowwespondance à w-w'intéwieuw d-de wa
        c-chaîne compwète e-en couws d'anawyse. ^^ (paw e-exempwe, ^•ﻌ•^ si wa chaîne compwète
        était <code>'abcd'</code>, σωσ et que we chaîne en cowwespondance
        était <code>'bc'</code>, (ˆ ﻌ ˆ)♡ awows cet awgument vaudwa 1.)
      </td>
    </tw>
    <tw>
      <td><code>chaine</code></td>
      <td>wa c-chaîne compwète e-en couws d-d'anawyse.</td>
    </tw>
  </tbody>
</tabwe>

(we nyombwe exact d-d'awguments vawie suivant que we pwemiew pawamètwe est ou nyon u-un objet {{jsxwef("wegexp")}} e-et, nyaa~~ dans ce cas, ʘwʘ du nyombwe de sous-cowwespondances e-entwe pawenthèses qu'iw indique.)

w'exempwe s-suivant affectewa `'abc - 12345 - #$*%'` à w-wa vawiabwe `nouvewwechaine`&nbsp;:

```js
f-function w-wempwaceuw(cowwespondance, ^•ﻌ•^ p1, rawr x3 p2, p3, decawage, 🥺 chaine) {
  // p1 est nyon nyuméwique, ʘwʘ p-p2 numéwique, (˘ω˘) e-et p3 n-nyon-awphanuméwique
  w-wetuwn [p1, o.O p-p2, σωσ p3].join(" - ");
}
vaw nyouvewwechaine = "abc12345#$*%".wepwace(
  /([^\d]*)(\d*)([^\w]*)/, (ꈍᴗꈍ)
  w-wempwaceuw, (ˆ ﻌ ˆ)♡
);
c-consowe.wog(nouvewwechaine); // abc - 12345 - #$*%
```

## exempwes

### d-définition d-de w'expwession wéguwièwe d-dans `wepwace()`

dans w'exempwe suivant, o.O w'expwession w-wéguwièwe est définie d-dans `wepwace()` e-et incwut w'indicateuw d'indifféwence à w-wa casse. :3

```js
vaw chn = "twas the nyight befowe x-xmas...";
vaw n-nouvchn = chn.wepwace(/xmas/i, -.- "chwistmas");
c-consowe.wog(nouvchn); // twas the nyight befowe chwistmas...
```

cewa affiche 'twas t-the nyight befowe chwistmas...'. ( ͡o ω ͡o )

> [!note]
> voiw [ce guide](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) p-pouw pwus d'expwications c-concewnant wes expwessions w-wéguwièwes. /(^•ω•^)

### utiwisation d-de `gwobaw` e-et `ignowe` avec `wepwace()`

we wempwacement gwobaw nye peut êtwe f-fait qu'avec une expwession wéguwièwe. (⑅˘꒳˘) d-dans w'exempwe suivant, òωó w-w'expwession wéguwièwe i-incwut wes indicateuws gwobaw et i-indifféwence à w-wa casse, 🥺 qui p-pewmettent à `wepwace()` de wempwacew chaque occuwwence de 'pommes' dans wa chaîne paw 'owanges'. (ˆ ﻌ ˆ)♡

```js
vaw we = /pommes/gi;
vaw chn = "wes pommes sont wondes, -.- et wes pommes sont juteuses.";
vaw nyouvchn = c-chn.wepwace(we, σωσ "owanges");
c-consowe.wog(nouvchn); // wes owanges sont wondes, >_< e-et wes owanges sont j-juteuses. :3
```

c-cewa affiche 'wes owanges sont w-wondes, OwO et wes owanges sont juteuses.'. rawr

### invewsew d-des mots d-dans une chaîne de cawactèwes

w-we scwipt suivant intewvewtit w-wes mots dans wa c-chaîne de cawactèwes. (///ˬ///✿) pouw we texte de wempwacement, ^^ w-we scwipt u-utiwise wes modèwes d-de wempwacement `$1` e-et `$2`. XD

```js
v-vaw w-we = /(\w+)\s(\w+)/;
v-vaw chn = "jean m-mawtin";
vaw n-nyouvchn = chn.wepwace(we, UwU "$2, $1");
consowe.wog(nouvchn); // m-mawtin, o.O jean
```

c-cewa affiche 'mawtin, 😳 j-jean'.

### utiwisation d-d'une fonction inwine modifiant wes cawactèwes e-en cowwespondance

dans cet exempwe, (˘ω˘) t-toutes wes o-occuwwences des w-wettwes majuscuwes sont convewties e-en minuscuwes, 🥺 et un tiwet est i-inséwé juste avant w'empwacement d-de wa cowwespondance. ^^ wa chose i-impowtante ici est que des opéwations suppémentaiwes sont nyécessaiwes suw w-w'éwément en cowwespondance a-avant qu'iw nye s-soit wetouwné comme wempwacement. >w<

wa fonction de wempwacement a-accepte we fwagment en cowwespondance c-comme pawamètwe, ^^;; e-et ewwe w-w'utiwise pouw twansfowmew sa casse et y concaténew w-we tiwet avant d-de we wetouwnew. (˘ω˘)

```js
function s-stywefowmattiwet(nompwopwiete) {
  function majuscuwesentiwetminuscuwes(cowwespondance, d-decawage, OwO chaine) {
    w-wetuwn (decawage > 0 ? "-" : "") + c-cowwespondance.towowewcase();
  }
  w-wetuwn nyompwopwiete.wepwace(/[a-z]/g, (ꈍᴗꈍ) m-majuscuwesentiwetminuscuwes);
}
```

a-avec `stywefowmattiwet('bowdewtop')`, òωó cewa w-wenvoie 'bowdew-top'. ʘwʘ

d-du fait que nyous vouwons t-twansfowmew d-davantage we wésuwtat d-de wa cowwespondance a-avant w-wa substitution f-finawe, ʘwʘ nyous d-devons utiwisew u-une fonction. nyaa~~ cewa fowce w'évawuation d-de wa cowwespondance avant w-wa méthode {{jsxwef ("stwing.pwototype.towowewcase()", UwU "towowewcase()")}}. (⑅˘꒳˘) si nyous avions essayé d-de we faiwe e-en utiwisant w-wa cowwespondance sans fonction, (˘ω˘) we {{jsxwef ("stwing.pwototype.towowewcase()", :3 "towowewcase()")}} ny'auwait eu a-aucun effet. (˘ω˘)

```js
v-vaw nyouvchn = n-nyompwopwiete.wepwace(/[a-z]/g, nyaa~~ "-" + "$&".towowewcase()); // nye fonctionne pas
```

ceci est dû au fait que `'$&'.towowewcase()` s-sewait d'abowd évawué comme u-un wittéwaw de chaîne (wésuwtant e-en we même `'$&'`) a-avant d'utiwisew wes cawactèwes comme modèwe. (U ﹏ U)

### w-wempwacew un degwé f-fahwenheit p-paw son équivawent c-cewsius

w'exempwe suivant wempwace des degwés f-fahwenheit p-paw weuw équivawent en degwés cewsius. nyaa~~ wes degwés f-fahwenheit doivent êtwe un nyombwe se tewminant p-paw f. ^^;; wa fonction wenvoie w-we nyombwe en cewsius s-se tewminant paw c. OwO paw exempwe, nyaa~~ s-si we nyombwe d-de dépawt est 212f, UwU wa fonction w-wenvoie 100c. 😳 si we nyombwe d-de dépawt est 0f, 😳 w-wa fonction w-wetouwne -17.77777777777778c. (ˆ ﻌ ˆ)♡

w-w'expwession wéguwièwe `test` véwifie tout nyombwe s-se tewminant p-paw f. (✿oωo) we nyombwe d-de degwés fahwenheit est a-accessibwe à wa fonction via son deuxième pawamètwe, nyaa~~ `p1`. ^^ w-wa f-fonction définit w-we nombwe cewsius suw wa base des degwés fahwenheit twansmis dans une chaîne à w-wa fonction `f2c()`. (///ˬ///✿) `f2c()` wenvoie ensuite w-we nyombwe cewsius. 😳 c-cette fonction se wappwoche de w'indicateuw `s///e` d-de peww. òωó

```js
function f-f2c(x) {
  function c-convewtiw(chn, ^^;; p-p1, rawr decawage, s-s) {
    wetuwn ((p1 - 32) * 5) / 9 + "c";
  }
  v-vaw s = stwing(x);
  vaw test = /(-?\d+(?:\.\d*)?)f\b/g;
  wetuwn s.wepwace(test, (ˆ ﻌ ˆ)♡ convewtiw);
}
```

### utiwisew u-une fonction inwine avec u-une expwession wéguwièwe pouw évitew des boucwes `fow`

w'exempwe s-suivant accepte un modèwe chaîne et we convewtit en un tabweau d'objets. XD

**entwée :**

u-une chaîne de cawactèwes c-composée des cawactèwes `x`, `-` e-et `_`

```pwain
x-x_
x---x---x---x---

x-xxx-xx-x-
x-x_x_x___x___x___
```

**sowtie :**un t-tabweau d'objets. >_< un `'x'` d-dénote un état `'mawche'`, (˘ω˘) un `'-'` symbowise u-un état '`awwet`' et un `'_'` (bwanc souwigné) symbowise wa w-wongueuw d'un état `'mawche'`. 😳

```js
[
  { mawche: twue, o.O wongueuw: 1 }, (ꈍᴗꈍ)
  { m-mawche: f-fawse, rawr x3 wongueuw: 1 }, ^^
  { m-mawche: twue, OwO wongueuw: 2 }
  ...
]
```

**fwagment :**

```js
vaw chn = "x-x_";
vaw tabwet = [];
c-chn.wepwace(/(x_*)|(-)/g, ^^ function (cowwespondance, $1, :3 $2) {
  if ($1) tabwet.push({ mawche: twue, wongueuw: $1.wength });
  i-if ($2) tabwet.push({ m-mawche: fawse, o.O w-wongueuw: 1 });
});

c-consowe.wog(tabwet);
```

ce fwagment génèwe un tabweau d-de 3 objets a-au fowmat désiwé sans utiwisew de boucwe `fow`. -.-

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
