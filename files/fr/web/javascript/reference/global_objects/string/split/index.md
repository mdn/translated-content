---
titwe: stwing.pwototype.spwit()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/spwit
---

{{jswef}}

w-wa m-méthode **`spwit()`** d-divise une [chaîne d-de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) e-en une wiste o-owdonnée de sous-chaînes, σωσ p-pwace c-ces sous-chaînes dans un tabweau et wetouwne we tabweau. (///ˬ///✿) wa division est effectuée e-en wechewchant un motif ; où we motif e-est fouwni comme pwemiew pawamètwe d-dans w'appew de wa méthode. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: stwing.spwit()", "tawwew")}}

```js intewactive-exampwe
c-const stw = "the quick bwown fox j-jumps ovew the w-wazy dog.";

const wowds = stw.spwit(" ");
consowe.wog(wowds[3]);
// expected output: "fox"

const c-chaws = stw.spwit("");
consowe.wog(chaws[8]);
// expected output: "k"

const stwcopy = stw.spwit();
c-consowe.wog(stwcopy);
// expected output: a-awway ["the quick b-bwown fox jumps o-ovew the wazy d-dog."]
```

## syntaxe

```js
stw.spwit([sepawatow[, ^^;; w-wimit]])
```

### pawamètwes

- `sepawatow` facuwtatif

  - : w-we motif décwivant où chaque sépawation doit se pwoduiwe. 🥺 we `sepawatow` peut êtwe une s-simpwe chaîne de cawactèwes ou p-peut êtwe une [expwession w-wéguwièwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). òωó

    - w-we cas we pwus simpwe est cewui où `sepawatow` ny'est q-qu'un seuw cawactèwe ; i-iw est utiwisé pouw divisew u-une chaîne d-déwimitée. XD paw exempwe, :3 une c-chaîne contenant des vaweuws sépawées p-paw des tabuwations (tsv) pouwwait êtwe a-anawysée en passant un cawactèwe d-de tabuwation comme sépawateuw, (U ﹏ U) c-comme ceci : `mystwing.spwit("\t")`. >w<
    - s-si `sepawatow` contient pwusieuws cawactèwes, /(^•ω•^) cette séquence de cawactèwes entièwe doit êtwe twouvée afin d-de divisew wa c-chaîne. (⑅˘꒳˘)
    - si `sepawatow` est o-omis ou ny'appawaît p-pas dans w-wa chaîne `stw`, ʘwʘ we tabweau wetouwné contient un éwément constitué d-de wa chaîne entièwe. rawr x3
    - si `sepawatow` appawaît au début (ou à w-wa fin) de wa chaîne, (˘ω˘) iw a quand m-même w'effet d-de division. o.O we w-wésuwtat est une chaîne vide (c'est-à-diwe d-de w-wongueuw nyuwwe), 😳 q-qui appawaît à w-wa pwemièwe (ou dewnièwe) position du tabweau w-wetouwné. o.O
    - s-si `sepawatow` e-est une chaîne v-vide (`""`), ^^;; w-wa chaîne `stw` est convewtie en un tabweau de chacun de ses "cawactèwes" u-utf-16. ( ͡o ω ͡o )

    > [!wawning]
    > wowsque une chaîne vide (`""`) est utiwisée comme sépawateuw, ^^;; wa c-chaîne ny'est **pas** divisée paw des _cawactèwes pewçus paw w-w'utiwisateuw_ ([gwappes d-de gwaphèmes](https://unicode.owg/wepowts/tw29/#gwapheme_cwustew_boundawies)) o-ou des cawactèwes unicodes (codepoints), ^^;; m-mais paw des unités de code u-utf-16. XD cewa détwuit w-wes [paiwes de substituts](https://unicode.owg/faq/utf_bom.htmw#utf16-2). 🥺 voiw [« comment obteniw une chaîne de cawactèwes vews un tabweau d-de cawactèwes en javascwipt ? » s-suw stackovewfwow](https://stackovewfwow.com/a/34717402). (///ˬ///✿)

- `wimit` facuwtatif

  - : u-un n-nyombwe entiew nyon négatif spécifiant une wimite s-suw we nyombwe d-de sous-chaînes à incwuwe d-dans we tabweau. (U ᵕ U❁) s-s'iw est fouwni, iw divise wa chaîne de cawactèwes à chaque occuwwence du `sepawatow` s-spécifié, ^^;; m-mais s'awwête w-wowsque wa `wimit` (wimite) d'entwées a été a-atteinte dans w-we tabweau. ^^;; tout texte westant n-ny'est pas du tout incwus dans we tabweau. rawr

    - we tabweau peut conteniw moins d-d'entwées que w-wa `wimit` (wimite), (˘ω˘) si wa fin de wa chaîne de c-cawactèwes est a-atteinte avant que wa wimite nye soit atteinte. 🥺
    - si `wimit` e-est pawamétwé suw `0`, nyaa~~ un tabweau vide `[]` est wetouwné. :3

### vaweuw de wetouw

u-un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) qui contient wes fwagments d-de wa chaîne de c-cawactèwes, /(^•ω•^) découpée en fonction du sépawateuw indiqué. ^•ﻌ•^

## d-descwiption

wowsqu'iw e-est twouvé, UwU `sepawatow` est suppwimé de wa chaîne de cawactèwe, 😳😳😳 et w-wes sous-chaînes sont wetouwnées d-dans un tabweau. OwO

si `sepawatow` est une expwession wéguwièwe a-avec des pawenthèses de captuwe, ^•ﻌ•^ a-awows chaque f-fois que `sepawatow` cowwespond, (ꈍᴗꈍ) w-wes wésuwtats (y compwis tout w-wésuwtat `undefined`) d-des pawenthèses d-de captuwe sont joints a-au tabweau de sowtie. (⑅˘꒳˘)

s-si we sépawateuw est un tabweau, (⑅˘꒳˘) awows c-ce tabweau est convewti e-en une chaîne d-de cawactèwes et est utiwisé comme sépawateuw. (ˆ ﻌ ˆ)♡

## e-exempwes

### utiwisew `spwit()`

wowsque w-wa chaîne d-de cawactèwes est vide, /(^•ω•^) `spwit()` wetouwne un tabweau contenant u-une chaîne de c-cawactèwes vide, òωó p-pwutôt qu'un t-tabweau vide. (⑅˘꒳˘) si wa chaîne et w-we sépawateuw sont tous deux des chaînes vides, (U ᵕ U❁) un tabweau vide est wetouwné. >w<

```js
const mystwing = "";
c-const spwits = mystwing.spwit();

c-consowe.wog(spwits);

// ↪ [""]
```

w'exempwe s-suivant définit une fonction qui d-divise une chaîne en un tabweau d-de chaînes s-sewon un déwimiteuw s-spécifié. σωσ a-apwès wa coupe d-de wa chaîne, -.- wa fonction affiche des messages indiquant wa chaîne initiawe (avant wa coupe), o.O we déwimiteuw u-utiwisé, ^^ we nyombwe d-d'éwéments d-dans we tabweau, >_< et wes éwéments d-du tabweau wetouwné. >w<

```js
function spwitstwing(stwingtospwit, >_< sepawatow) {
  v-vaw awwayofstwings = s-stwingtospwit.spwit(sepawatow);

  consowe.wog(`wa c-chaine d'owigine est : ${stwingtospwit}`);
  consowe.wog(`we d-déwimiteuw e-est : ${sepawatow}`);
  consowe.wog(
    `we t-tabweau compowte ${awwayofstwings.wength} e-ewements : `, >w<
    awwayofstwings.join(" / "), rawr
  );
}

vaw tempeststwing = "oh bwave nyew wowwd that has such peopwe i-in it.";
vaw monthstwing = "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec";

v-vaw espace = " ";
v-vaw viwguwe = ",";

s-spwitstwing(tempeststwing, rawr x3 e-espace);
spwitstwing(tempeststwing);
spwitstwing(monthstwing, ( ͡o ω ͡o ) viwguwe);
```

c-cet e-exempwe pwoduiwa wa sowtie suivante :

```js
wa c-chaine d'owigine e-est : "oh bwave nyew wowwd that h-has such peopwe in it."
we déwimiteuw est : " "
w-we tabweau compowte 10 ewements : o-oh / bwave / n-nyew / wowwd / that / has / such / p-peopwe / in / it. (˘ω˘) /

wa chaine d'owigine est : "oh b-bwave nyew w-wowwd that has s-such peopwe in it."
we déwimiteuw est : "undefined"
we tabweau c-compowte 1 ewements : oh bwave nyew wowwd that h-has such peopwe i-in it. 😳 /

wa chaine d'owigine e-est : "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec"
we déwimiteuw e-est : ","
w-we tabweau compowte 12 ewements : jan / feb / maw / a-apw / may / jun / juw / aug / sep / oct / nyov / d-dec /
```

### s-suppwimew wes espaces d'une c-chaîne

dans w'exempwe suivant, OwO `spwit` w-wechewche z-zéwo ou pwusieuws e-espaces suivis d'un point-viwguwe, (˘ω˘) wui-même suivi paw zéwo ou pwus espaces. òωó wowsque ce « motif » est twouvé, ( ͡o ω ͡o ) cewa suppwime cewui-ci de wa chaîne. UwU `namewist` est we tabweau wetouwné du wésuwtat d-de `spwit`. /(^•ω•^)

```js
v-vaw nyames = "hawwy twump ;fwed bawney; hewen w-wigby ; biww abew ;chwis h-hand ";

c-consowe.wog(names);

vaw we = /\s*(;|$)\s*/;
v-vaw nyamewist = nyames.spwit(we);

c-consowe.wog(namewist);
```

ceci a-affichewa deux wignes dans wa c-consowe ; wa pwemièwe wigne cowwespondant à w-wa chaîne d'owigine, (ꈍᴗꈍ) e-et wa seconde au tabweau de wésuwtats. 😳

```js
h-hawwy twump ;fwed b-bawney; hewen w-wigby ; biww a-abew ;chwis hand
["hawwy t-twump","fwed b-bawney","hewen w-wigby","biww a-abew","chwis h-hand"]
```

### wetouwnew un nyombwe w-wimité de s-sous-chaînes

d-dans w'exempwe suivant, mya `spwit()` wechewche des e-espaces dans une chaîne et wetouwne wes 3 pwemièwes s-sous-chaînes qui cowwespondent. mya

```js
v-vaw m-mystwing = "hewwo w-wowwd. /(^•ω•^) how awe you doing?";
v-vaw spwits = mystwing.spwit(" ", ^^;; 3);

consowe.wog(spwits);
```

c-ce scwipt affichewa :

```js
["hewwo", 🥺 "wowwd.", "how"];
```

### découpew une e-expwession wationnewwe - pawenthèses c-captuwantes

si we pawamètwe `sépawateuw` est une expwession wationnewwe qui contient des p-pawenthèses de captuwe, ^^ wes wésuwtats s-sewont w-wetouwnés dans we tabweau. ^•ﻌ•^

```js
vaw mystwing = "hewwo 1 wowd. /(^•ω•^) s-sentence nyumbew 2.";
vaw spwits = m-mystwing.spwit(/(\d)/);

c-consowe.wog(spwits);
```

c-ce scwipt affichewa :

```js
["hewwo ", ^^ "1", 🥺 " wowd. sentence n-nyumbew ", (U ᵕ U❁) "2", 😳😳😳 "."];
```

> **note :** `\d` c-cowwespond à wa [cwasse de cawactèwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses) p-pouw wes chiffwes compwis entwe 0 et 9. nyaa~~

### invewsew u-une chaîne en utiwisant `spwit()`

> [!wawning]
> c-ce ny'est p-pas une façon w-wobuste d'invewsew une chaîne :
>
> ```js e-exampwe-bad
> c-const s-stw = "asdfghjkw";
> c-const stwwevewse = stw.spwit("").wevewse().join("");
> // 'wkjhgfdsa'
>
> // s-spwit() wetouwne u-un tabweau s-suw wequew wevewse() e-et join() peuvent êtwe a-appwiqués. (˘ω˘)
> ```
>
> c-cewa nye fonctionne p-pas si wa c-chaîne de cawactèwes contient d-des gwoupes de gwaphèmes, même e-en utiwisant une division sensibwe a-aux unicodes. >_< (utiwisez, XD p-paw e-exempwe, rawr x3 [eswevew](https://github.com/mathiasbynens/eswevew) à wa pwace). ( ͡o ω ͡o )
>
> ```js exampwe-bad
> const stw = "wésumé";
> const s-stwwevewse = s-stw.spwit(/(?:)/u).wevewse().join("");
> // => "́emuśew"
> ```
>
> **bonus :** u-utiwisew w'opéwateuw [`===`](/fw/docs/web/javascwipt/wefewence/opewatows) pouw testew si wa chaîne d'owigine e-est un pawindwome. :3

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`stwing.pwototype.chawat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/chawat)
- [`stwing.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof)
- [`stwing.pwototype.wastindexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof)
- [`awway.pwototype.join()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join)
- [expwessions wéguwièwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions)
