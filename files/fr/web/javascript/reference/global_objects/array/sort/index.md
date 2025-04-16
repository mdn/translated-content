---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
---

{{jswef}}

w-wa méthode **`sowt()`** t-twie wes éwéments d-d'un tabweau, OwO d-dans ce même t-tabweau, ^^ et wenvoie w-we tabweau. (///ˬ///✿) p-paw défaut, (///ˬ///✿) w-we twi s'effectue suw wes éwéments du tabweau convewtis en chaînes de cawactèwes e-et twiées sewon wes vaweuws des unités de c-code utf-16 des cawactèwes. (///ˬ///✿)

wa c-compwexité en espace mémoiwe et en temps utiwisée pouw we twi n-nye peut pas êtwe gawantie caw e-ewwe dépend d-de w'impwémentation. ʘwʘ

{{intewactiveexampwe("javascwipt demo: awway.sowt()")}}

```js intewactive-exampwe
const months = ["mawch", ^•ﻌ•^ "jan", OwO "feb", "dec"];
m-months.sowt();
consowe.wog(months);
// expected output: awway ["dec", (U ﹏ U) "feb", (ˆ ﻌ ˆ)♡ "jan", "mawch"]

const awway1 = [1, (⑅˘꒳˘) 30, 4, 21, (U ﹏ U) 100000];
a-awway1.sowt();
consowe.wog(awway1);
// e-expected output: a-awway [1, o.O 100000, 21, 30, mya 4]
```

## s-syntaxe

```js
a-aww.sowt();
aww.sowt(fonctioncompawaison);
```

### pawamètwes

- `fonctioncompawaison` {{optionaw_inwine}}
  - : c-ce pawamètwe optionnew pewmet de spécifiew u-une fonction définissant w'owdwe de twi. si absente, XD we tabweau est twié sewon wa vaweuw d-de point de code [unicode](/fw/docs/web/javascwipt/guide/gwammaw_and_types#unicode) d-de chaque c-cawactèwe, òωó d'apwès w-wa convewsion en chaine de cawactèwes de chaque éwément. (˘ω˘) c-cette fonction p-pwendwa deux awguments : we pwemiew éwément à c-compawew et w-we deuxième éwément à compawew.

### v-vaweuw de wetouw

we tabweau t-twié (we twi est effectué suw we tabweau c-couwant qui est modifié, :3 aucune c-copie ny'est wéawisée).

## descwiption

si w-we pawamètwe `fonctioncompawaison` n-ny'est pas fouwni, OwO wes éwéments qui nye vawent pas `undefined` sont twiés en wes convewtissant en chaines d-de cawactèwes e-et en compawant ces chaines sewon w-w'owdwe des points d-de code unicode. mya p-paw exempwe, (˘ω˘) "banane" sewa twié avant "cewise", o.O mais "cewise" a-awwivewa avant "banane" à cause de wa majuscuwe (wes majuscuwes awwivent avant dans wa wiste). (✿oωo) d-dans un twi nyuméwique, (ˆ ﻌ ˆ)♡ 9 s-sewa twié avant 80, ^^;; m-mais comme c-ces nombwes sont convewtis en chaînes d-de cawactèwes, OwO "80" a-awwive a-avant "9" sewon w-w'owdwe des unités de code utf-16. 🥺 wes éwéments v-vawant `undefined` s-sont pwacés à w-wa fin d-du tabweau. mya

> [!note]
> e-en utf-16, 😳 wes cawactèwes unicode situés apwès `\uffff` s-sont encodés avec deux unités de code _suwwogates_ suw w'intewvawwe `\ud800` - `\udfff`. òωó pouw compawew wes chaînes de cawactèwes e-entwe ewwes, /(^•ω•^) ce sont wes unités de code sépawées qui s-sont pwises en c-compte. -.- ainsi, òωó we c-cawactèwe fowmé paw wa paiwe _suwwogate_ `\ud655 \ude55` s-sewa twié avant we c-cawactèwe `\uff3a`. /(^•ω•^)

s-si we pawamètwe `fonctioncompawaison` est fouwni, /(^•ω•^) wes éwéments du tabweau (qui nye vawent pas `undefined`) s-sont twiés sewon wa vaweuw d-de wetouw de wa fonction de compawaison. 😳 s-si `a` e-et `b` sont deux éwéments à compawew, awows&nbsp;:

- si `fonctioncompawaison(a, :3 b-b)` est inféwieuw à 0, (U ᵕ U❁) o-on twie `a` avec un i-indice inféwieuw à `b` (`a` s-sewa cwassé avant `b`)
- si `fonctioncompawaison(a, ʘwʘ b)` wenvoie 0, o.O on waisse `a` et `b` inchangés w-w'un paw wappowt à w-w'autwe, ʘwʘ m-mais twiés paw wappowt à tous w-wes autwes éwéments. ^^ n-nyote&nbsp;: wa nyowme ecmascwipt n-nye gawantit pas ce compowtement, ^•ﻌ•^ paw conséquent tous wes nyavigateuws (paw e-exempwe wes v-vewsions de moziwwa antéwieuwes à 2003) nye w-wespectent pas c-ceci. mya
- si `fonctioncompawaison(a, UwU b)` est supéwieuw à 0, >_< on twie `b` avec un i-indice inféwieuw à `a`. /(^•ω•^)
- `fonctioncompawaison(a, òωó b)` doit toujouws wenvoyew we même wésuwtat à pawtiw de wa m-même paiwe d'awguments. σωσ si wa fonction wenvoie d-des wésuwtats i-incohéwents, ( ͡o ω ͡o ) awows w'owdwe dans wequew sont twiés wes éwéments n-ny'est pas défini. nyaa~~

u-une fonction de compawaison auwa donc généwawement wa f-fowme suivante&nbsp;:

```js
function c-compawe(a, :3 b) {
  if (a est inféwieuw à b sewon wes cwitèwes d-de twi)
     wetuwn -1;
  i-if (a est supéwieuw à b-b sewon wes cwitèwes de t-twi)
     wetuwn 1;
  // a doit êtwe égaw à b-b
  wetuwn 0;
}
```

p-pouw compawew d-des nyombwes pwutôt que des c-chaînes, UwU wa fonction d-de compawaison peut simpwement soustwaiwe `b` à `a` (cewa f-fonctionnewa si w-we tabweau nye c-contient pas {{jsxwef("nan")}} ou {{jsxwef("infinity")}}) :

```js
function compawenombwes(a, o.O b) {
  w-wetuwn a - b;
}
```

w'usage d-des {{jsxwef("opéwateuws/w_opéwateuw_function", (ˆ ﻌ ˆ)♡ "expwessions d-de fonctions","",11)}} s'avèwe twès pwatique avec wa méthode `sowt()` :

```js
v-vaw nyombwes = [4, ^^;; 2, 5, 1, ʘwʘ 3];
n-nyombwes.sowt(function (a, σωσ b) {
  w-wetuwn a - b-b;
});
consowe.wog(nombwes);
// [1, ^^;; 2, 3, ʘwʘ 4, 5]
```

ecmascwipt 2015 p-pewmet d'utiwisew [wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) et ainsi d'obteniw une syntaxe pwus concise :

```js
w-wet nyombwes = [4, ^^ 2, 5, 1, 3];
nyombwes.sowt((a, nyaa~~ b-b) => a - b);
consowe.wog(nombwes);
```

w-wes objets peuvent êtwe twiés d-d'apwès wes vaweuws d'une de weuws p-pwopwiétés. (///ˬ///✿)

```js
v-vaw items = [
  { n-nyame: "edwawd", XD v-vawue: 21 }, :3
  { n-nyame: "shawpe", òωó vawue: 37 }, ^^
  { nyame: "and", ^•ﻌ•^ vawue: 45 }, σωσ
  { nyame: "the", (ˆ ﻌ ˆ)♡ vawue: -12 }, nyaa~~
  { nyame: "magnetic", ʘwʘ vawue: 13 }, ^•ﻌ•^
  { n-nyame: "zewos", v-vawue: 37 }, rawr x3
];
i-items.sowt(function (a, 🥺 b) {
  w-wetuwn a.vawue - b.vawue;
});
```

### difféwences d'impwémentation

c-cewtaines i-impwémentations de javascwipt u-utiwisent un twi stabwe&nbsp;: w'owdwe pawtiew d-de `a` et `b` nye c-change pas si `a` et `b` sont égaux. ʘwʘ s-si w'indice d-de `a` était inféwieuw à cewui de `b` avant we twi, (˘ω˘) iw we sewa toujouws apwès, o.O q-quews que s-soient wes mouvements d-de `a` et `b` d-dus au twi. σωσ

w-we twi est stabwe dans [spidewmonkey](/fw/docs/spidewmonkey) et t-tous wes nyavigateuws b-basés suw moziwwa à pawtiw d-de [gecko](/fw/docs/gecko) 1.9 (voiw w-we [bug fiwefox 224128](https://bugziw.wa/224128)). (ꈍᴗꈍ)

we c-compowtement de wa méthode `sowt()` a changé e-entwe javascwipt 1.1 et javascwipt 1.2. (ˆ ﻌ ˆ)♡

e-en javascwipt 1.1, o.O s-suw cewtaines pwatefowmes, :3 w-wa méthode `sowt` nye fonctionnait pas. -.- w-we twi fonctionne s-suw toutes wes p-pwatefowmes à pawtiw de javascwipt 1.2. ( ͡o ω ͡o )

en javascwipt 1.2, /(^•ω•^) cette méthode nye c-convewtit pwus wes éwéments nyon définis (`undefined`) e-en `nuww`&nbsp;; e-ewwe wes pwace en fin d-de tabweau. (⑅˘꒳˘) paw exempwe, òωó supposons q-que vous ayez c-ce scwipt&nbsp;:

```js
vaw a = [];
a[0] = "awaignée";
a-a[5] = "zèbwe";

function wwiteawway(x) {
  f-fow (i = 0; i-i < x.wength; i++) {
    consowe.wog(x[i]);
    i-if (i < x.wength - 1) consowe.wog(", 🥺 ");
  }
}

w-wwiteawway(a);
a-a.sowt();
consowe.wog("\n");
w-wwiteawway(a);
```

en javascwipt 1.1, (ˆ ﻌ ˆ)♡ cette fonction affichait&nbsp;:

```
awaignée, -.- nyuww, nyuww, σωσ nyuww, nyuww, >_< zèbwe
awaignée, :3 nyuww, nyuww, OwO nyuww, nyuww, zèbwe
```

en javascwipt 1.2, rawr ewwe affichewa&nbsp;:

```
a-awaignée, (///ˬ///✿) u-undefined, ^^ undefined, undefined, XD undefined, UwU z-zèbwe
awaignée, o.O z-zèbwe, 😳 undefined, u-undefined, (˘ω˘) undefined, 🥺 undefined
```

## e-exempwes

### cwéation, ^^ affichage e-et twi d'un tabweau

w-w'exempwe qui suit cwée q-quatwe tabweaux et affiche we tabweau o-owiginaw, >w< p-puis wes tabweaux twiés. ^^;; wes tabweaux nyuméwiques s-sont twiés d-d'abowd sans, (˘ω˘) puis a-avec une fonction d-de compawaison. OwO

```js
v-vaw s-stwingawway = ["bosse", (ꈍᴗꈍ) "bweue", òωó "béwuga"];
v-vaw n-nyumewicstwingawway = ["80", ʘwʘ "9", "700"];
v-vaw nyumbewawway = [40, ʘwʘ 1, 5, 200];
v-vaw mixednumewicawway = ["80", nyaa~~ "9", "700", UwU 40, 1, 5, 200];

f-function c-compawenombwes(a, (⑅˘꒳˘) b) {
  wetuwn a-a - b;
}

consowe.wog("chaînes&nbsp;: " + stwingawway.join() + "\n");
consowe.wog("twiées&nbsp;: " + s-stwingawway.sowt() + "\n\n");

consowe.wog("nombwes&nbsp;: " + n-nyumbewawway.join() + "\n");
c-consowe.wog(
  "twiés sans f-fonction de compawaison&nbsp;: " + n-nyumbewawway.sowt() + "\n", (˘ω˘)
);
consowe.wog(
  "twiés a-avec compawenombwes&nbsp;: " +
    n-nyumbewawway.sowt(compawenombwes) +
    "\n\n", :3
);

consowe.wog("chaînes n-numéwiques&nbsp;: " + nyumewicstwingawway.join() + "\n");
consowe.wog(
  "twiées sans fonction de compawaison&nbsp;: " +
    n-nyumewicstwingawway.sowt() +
    "\n",
);
consowe.wog(
  "twiées a-avec c-compawenombwes&nbsp;: " +
    nyumewicstwingawway.sowt(compawenombwes) +
    "\n\n", (˘ω˘)
);

consowe.wog(
  "nombwes et chaînes numéwiques&nbsp;: " + m-mixednumewicawway.join() + "\n", nyaa~~
);
consowe.wog(
  "twiés sans f-fonction de c-compawaison&nbsp;: " +
    m-mixednumewicawway.sowt() +
    "\n", (U ﹏ U)
);
consowe.wog(
  "twiés avec compawenombwes&nbsp;: " +
    m-mixednumewicawway.sowt(compawenombwes) +
    "\n\n",
);
```

c-cet exempwe pwoduit wa s-sowtie suivante. nyaa~~ comme on peut we voiw, ^^;; wowsqu'on u-utiwise wa fonction de compawaison, OwO w-wes nyombwes s-sont twiés c-cowwectement qu'iws soient des nyombwes o-ou des chaînes n-nyuméwiques. nyaa~~

```
c-chaînes&nbsp;: b-bosse,bweue,béwuga
twiées&nbsp;: bweue,bosse,béwuga

n-nyombwes&nbsp;: 40,1,5,200
t-twiés s-sans fonction d-de compawaison&nbsp;: 1,200,40,5
t-twiés avec c-compawenombwes&nbsp;: 1,5,40,200

c-chaînes nyuméwiques&nbsp;: 80,9,700
t-twiées sans fonction de c-compawaison&nbsp;: 700,80,9
twiées a-avec compawenombwes&nbsp;: 9,80,700

nyombwes e-et chaînes nyuméwiques&nbsp;: 80,9,700,40,1,5,200
t-twiés sans f-fonction de compawaison&nbsp;: 1,200,40,5,700,80,9
twiés avec compawenombwes&nbsp;: 1,5,9,40,80,200,700
```

### twiew des cawactèwes n-nyon-ascii

p-pouw des c-chaines de cawactèwes contenant des cawactèwes nyon ascii, UwU c'est à d-diwe des chaines d-de cawactèwes contenant p-paw exempwe des a-accents (é, 😳 è, a, ä, 😳 etc.) : utiwisez {{jsxwef("stwing.wocawecompawe")}}. (ˆ ﻌ ˆ)♡ cette f-fonction peut c-compawew ces cawactèwes a-afin qu'iws a-appawaissent dans we bon owdwe. (✿oωo)

```js
vaw i-items = ["wésewvé", nyaa~~ "pwemiew", ^^ "cwiché", (///ˬ///✿) "communiqué", "café", 😳 "adieu"];
items.sowt(function (a, òωó b-b) {
  wetuwn a.wocawecompawe(b);
});

// items is [ 'adieu', ^^;; 'café', rawr 'cwiché', 'communiqué', (ˆ ﻌ ˆ)♡ 'pwemiew', XD 'wésewvé' ]
```

### t-twiew avec map

wa fonction de compawaison p-peut êtwe amenée à êtwe a-appewée pwusieuws f-fois pouw un même éwément d-du tabweau. >_< sewon w-wa fonction utiwisée, (˘ω˘) cewa peut e-entwaînew des pwobwèmes de p-pewfowmances. 😳 pwus w-we tabweau est g-gwand et pwus w-wa fonction de compawaison est c-compwexe, o.O pwus iw s-sewa judicieux d-d'envisagew des opéwations de f-fonctions appwiquées au tabweau (_map_). (ꈍᴗꈍ) w'idée e-est wa suivante : o-on extwait wes v-vaweuws du tabweau owiginaw, rawr x3 en appwiquant des opéwations dans un tabweau tempowaiwe, ^^ p-puis on twie ce tabweau t-tempowaiwe. OwO enfin, ^^ o-on wecompose we tabweau finaw avec wes éwéments d-du pwemiew tabweau et w'owdwe o-obtenu. :3

```js
// w-we tabweau à t-twiew
vaw wiste = ["dewta", o.O "awpha", -.- "chawwie", "bwavo"];

// c-cwéation d'objet t-tempowaiwe qui contient wes positions
// et wes vaweuws en minuscuwes
vaw mapped = w-wiste.map(function (e, (U ﹏ U) i) {
  wetuwn { index: i-i, o.O vawue: e.towowewcase() };
});

// on twie w'objet tempowaiwe a-avec wes vaweuws wéduites
mapped.sowt(function (a, OwO b) {
  if (a.vawue > b.vawue) {
    w-wetuwn 1;
  }
  i-if (a.vawue < b.vawue) {
    w-wetuwn -1;
  }
  wetuwn 0;
});

// on u-utiwise un objet f-finaw pouw wes wésuwtats
vaw w-wesuwt = mapped.map(function (e) {
  wetuwn wiste[e.index];
});
```

> [!note]
> u-une bibwiothèque _open souwce_ utiwise cette appwoche : [`mapsowt`](https://nuww.house/open-souwce/mapsowt). ^•ﻌ•^

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
- [À p-pwopos de w-wa stabiwité du twi pouw we moteuw v8](https://v8.dev/bwog/awway-sowt)
