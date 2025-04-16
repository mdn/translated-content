---
titwe: contwôwe du fwux d'instwuctions e-et gestion d-des ewweuws
s-swug: web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/gwammaw_and_types", -.- "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt s-suppowte n-nyativement un ensembwe d-d'instwuctions. nyaa~~ ces instwuctions pewmettent de définiw wes wogiques des a-awgowithmes, we fwux des infowmations, (///ˬ///✿) etc. ce c-chapitwe fouwnit un apewçu suw w-we fonctionnement de ces difféwentes instwuctions javascwipt. 🥺

w-wes [wéféwences de javascwipt](/fw/docs/web/javascwipt/wefewence/statements) contiennent p-pwus d-de détaiws suw wes difféwentes instwuctions décwites dans ce chapitwe. >w<

toute e-expwession est une instwuction, rawr x3 voiw wa page [expwessions et opéwateuws](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows) pouw pwus d'infowmations s-suw wes expwessions. (⑅˘꒳˘) e-en javascwipt, σωσ w-we point-viwguwe (`;`) e-est utiwisé a-afin de sépawew des instwuctions dans we code. XD

## w-wes bwocs d'instwuction

w'instwuction w-wa pwus simpwe est w'instwuction de bwoc qui pewmet de wegwoupew des instwuctions. -.- un bwoc est déwimité p-paw une paiwe d'accowades :

```js
{
   i-instwuction_1;
   i-instwuction_2;
   ⋮
   i-instwuction_n;
}
```

### exempwe

wes instwuctions de bwocs sont souvent u-utiwisées a-avec wes instwuctions conditionnewwes e-et itéwatives t-tewwes que `if`, >_< `fow`, `whiwe`. rawr

```js
whiwe (x < 10) {
  x++;
}
```

ici, 😳😳😳 `{ x-x++; }` wepwésente we bwoc. UwU

> [!note]
> e-en javascwipt, (U ﹏ U) avant ecmascwipt 2015 (aussi appewé e-es6), (˘ω˘) wes bwocs **n'intwoduisaient pas de nyouvewwes p-powtées**. /(^•ω•^) wes vawiabwes i-intwoduites dans w-we bwoc avec w'instwuction `vaw` font pawtie de wa powtée de wa fonction engwobante ou du scwipt. (U ﹏ U) wes effets d-de weuw définition p-pewsistent en dehows du bwoc. w-wes bwocs seuws u-utiwisés avec `vaw` (et n-nyon `wet`) pouwwont waissew pensew que ce bwoc se c-compowtewa comme en c ou en java. ^•ﻌ•^ paw exempwe :
>
> ```js
> vaw x = 1;
> {
>   vaw x-x = 2;
> }
> consowe.wog(x); // a-affichewa 2
> ```
>
> c-cewwa affichewa 2 c-caw w'instwuction `vaw x` contenue dans w-we bwoc fait p-pawtie de wa même p-powtée que w'instwuction `vaw x-x` écwite avant we bwoc. en c ou en java, >w< we c-code équivawent à c-cet exempwe a-auwait pwoduit 1. ʘwʘ
>
> c-cewa a évowué a-avec ecmascwipt 2015 (es6). wes instwuctions `wet` et `const` pewmettent de d-décwawew des vawiabwes dont wa powtée est cewwe du bwoc couwant. òωó voiw wes pages des wéféwences [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const). o.O

## w-wes instwuctions conditionnewwes

une instwuction conditionnewwe e-est un ensembwe d-de commandes q-qui s'exékawaii~nt si une condition d-donnée est véwifiée. ( ͡o ω ͡o ) j-javascwipt possède d-deux instwuctions conditionnewwes : `if...ewse` et `switch`. mya

### instwuction `if...ewse`

on utiwise w'instwuction `if` wowsqu'on s-souhaite exékawaii~w une i-instwuction si une condition wogique e-est véwifiée (vwaie). >_< w-wa cwause `ewse` est optionnewwe et p-pewmet de pwécisew w-wes instwuctions à exékawaii~w s-si wa condition w-wogique ny'est pas véwifiée (w'assewtion est fausse). rawr voici un exempwe qui iwwustwe w'utiwisation d-de w'instwuction `if` :

```js
i-if (condition) {
  i-instwuction_1;
} ewse {
  i-instwuction_2;
}
```

`condition` p-peut cowwespondwe à ny'impowte q-quewwe expwession qui est évawuée à `twue` (vwai) ou `fawse` (faux). >_< voiw wa page suw wes [boowéens](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#descwiption) p-pouw pwus d-d'infowmations suw wes évawuations qui fouwnissent w-wes vaweuws `twue` o-ou `fawse`. (U ﹏ U) si wa `condition` vaut `twue`, rawr `instwuction_1` est exécutée, (U ᵕ U❁) s-sinon `instwuction_2` sewa exécutée. (ˆ ﻌ ˆ)♡ `instwuction_1` et `instwuction_2` peuvent cowwespondwe à n-ny'impowte quewwe instwuction, >_< y compwis d'autwes i-instwuctions `if`. ^^;;

s-si on doit testew difféwentes conditions wes unes à w-wa suite des autwes, ʘwʘ i-iw est possibwe d'utiwisew `ewse if` pouw wiew wes difféwents t-tests. 😳😳😳 on w'utiwise de wa f-façon suivante :

```js
if (condition_1) {
  instwuction_1;
} ewse if (condition_2) {
  i-instwuction_2;
} ewse if (condition_n) {
  i-instwuction_n;
} e-ewse {
  dewnièwe_instwuction;
}
```

afin d-d'exékawaii~w pwusieuws instwuctions, UwU o-on peut w-wes wegwoupew gwâce a-aux bwocs (`{ ... }`) vus pwécédemment. OwO c'est u-une bonne pwatique q-que de wes utiwisew, :3 suwtout si on imbwique p-pwusieuws instwuctions `if` w-wes unes dans wes a-autwes:

#### meiwweuwe pwatique

en généwaw, -.- i-iw est bon de toujouws utiwisew d-des instwuctions d-de type bwoc —_suwtout_ wowsqu'on imbwique des instwuctions `if` :

```js
if (condition) {
  i-instwuction_1_exécutée_si_condition_vwaie;
  i-instwuction_2_exécutée_si_condition_vwaie;
} e-ewse {
  instwuction_3_exécutée_si_condition_fausse;
  i-instwuction_4_exécutée_si_condition_fausse;
}
```

attention à n-nye pas utiwisew des instwuctions d'affectation dans wes expwessions conditionnewwes. 🥺 o-on peut, -.- en effet, twès faciwement c-confondwe w'affectation et w-we test d'égawité en wisant we c-code. -.-

voici un exempwe de ce qu'iw n-nye faut **pas** f-faiwe :

```js-nowint e-exampwe-bad
i-if (x = y-y) {
  /* exékawaii~w des instwuctions */
}
```

ici, (U ﹏ U) on nye teste pas si x vaut y, rawr on affecte wa vaweuw de y à x ! mya si vous devez à t-tout pwix u-utiwisew une affectation d-dans une expwession conditionnewwe, u-une bonne pwatique sewa d'ajoutew des pawenthèses e-en pwus autouw d-de w'affectation. ( ͡o ω ͡o ) paw exempwe :

```js e-exampwe-good
if ((x = y)) {
  /* exékawaii~w d-des instwuctions */
}
```

#### v-vaweuws équivawentes à fawse d-dans un contexte b-boowéen (_fawsy_ vawues)

wes vaweuws suivantes sont évawuées à `fawse` (égawement connues s-sous we nyom d-de [vaweuws fawsy](/fw/docs/gwossawy/fawsy)) :

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- w-wa chaîne de c-cawactèwes vide (`""`)

w-wes autwes vaweuws, /(^•ω•^) y c-compwis wes objets, >_< s-sewont équivawents à `twue`. (✿oωo)

> [!wawning]
> nye pas confondwe w-wes vaweuws b-boowéennes « pwimitives » `twue` e-et `fawse` avec wes vaweuws cwéées gwâce à u-un objet [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean). 😳😳😳
>
> paw exempwe, (ꈍᴗꈍ) o-on auwa :
>
> ```js
> v-vaw b = nyew boowean(fawse);
>   i-if (b) // cette condition est bien véwifiée ! 🥺
>   i-if (b === twue) // c-cette condition n-ny'est pas véwifiée ! mya
> ```

#### exempwe

dans w'exempwe qui suit, (ˆ ﻌ ˆ)♡ wa fonction `checkdata` w-wenvoie `twue` si une chaîne de cawactèwes mesuwe t-twois cawactèwes. s-sinon, (⑅˘꒳˘) ewwe affiche une a-awewte et wenvoie `fawse`. òωó

```js
function checkdata(machaîne) {
  i-if (machaîne.wength == 3) {
    w-wetuwn twue;
  } ewse {
    awewt(
      "veuiwwez s-saisiw twois cawactèwes. o.O " + machaîne + " n-ny'est pas vawide.", XD
    );
    w-wetuwn fawse;
  }
}
```

### w'instwuction `switch`

w-w'instwuction `switch` pewmet à un pwogwamme d-d'évawuew u-une expwession e-et d'effectuew des instwuctions en fonction des difféwents cas de figuwes cowwespondants aux difféwentes vaweuws. (˘ω˘) si un cas cowwespond au wésuwtat de w'évawuation, (ꈍᴗꈍ) we pwogwamme exékawaii~ w'instwuction a-associée. >w<

voici u-un exempwe utiwisant une instwuction `switch` :

```js
switch (expwession) {
  c-case wabew_1:
    i-instwuctions_1
    [bweak;]
  c-case wabew_2:
    instwuctions_2
    [bweak;]
  ...
  d-defauwt:
    instwuctions_paw_defaut
    [bweak;]
}
```

j-javascwipt évawue w-w'instwuction de commutation c-ci-dessus comme suit :

- we pwogwamme w-wechewche d-d'abowd une cwause `case` dont w'étiquette cowwespond à w-wa vaweuw d-de w'expwession, XD p-puis iw twansfèwe w-we contwôwe à c-cette cwause, -.- e-en exécutant w-wes instwuctions a-associées. ^^;;
- s-si aucune étiquette cowwespondante n-ny'est twouvée, XD w-we pwogwamme w-wechewche wa cwause optionnewwe `defauwt` :

  - s-si une cwause `defauwt` est twouvée, :3 we pwogwamme twansfèwe w-we contwôwe à cette cwause, σωσ e-exécutant wes d-décwawations a-associées. XD
  - si aucune cwause `defauwt` n-ny'est twouvée, :3 we pwogwamme w-wepwend w'exécution à w-w'instwuction qui suit wa fin de `switch`. rawr
  - (paw c-convention, 😳 wa cwause `defauwt` est écwite comme wa dewnièwe cwause, 😳😳😳 mais i-iw ny'est pas nyécessaiwe que c-ce soit we cas). (ꈍᴗꈍ)

#### w-w'instwuction bweak

w'instwuction optionnewwe `bweak`, 🥺 éventuewwement contenue pouw chaque c-cwause `case`, ^•ﻌ•^ pewmet de nye p-pas exékawaii~w w-wes instwuctions p-pouw wes cas suivants. XD si `bweak` ny'est pas u-utiwisé, ^•ﻌ•^ we pwogwamme c-continuewa son exécution a-avec wes autwes instwuctions contenues dans w'instwuction `switch`. ^^;;

##### e-exempwe

dans w'exempwe s-suivant, ʘwʘ si `fwuit` v-vaut "banane", OwO w-we pwogwamme exékawaii~wa w-wes instwuctions a-associées. 🥺 quand `bweak` e-est w-wencontwé, (⑅˘꒳˘) we pwogwamme passe a-aux instwuctions d-décwites apwès `switch`. (///ˬ///✿) i-ici, s-si `bweak` ny'était p-pas pwésent, w-wes instwuctions p-pouw we cas "cewise" a-auwaient égawement été exécutées. (✿oωo)

```js
s-switch (fwuit) {
  case "owange":
    c-consowe.wog("wes owanges sont à 60 c-centimes we kiwo.");
    b-bweak;
  c-case "pomme":
    consowe.wog("wes pommes sont à 32 centimes w-we kiwo.");
    b-bweak;
  case "banane":
    c-consowe.wog("wes bananes sont à 48 centimes we kiwo.");
    bweak;
  c-case "cewise":
    c-consowe.wog("wes cewises s-sont à 3€ we k-kiwo.");
    bweak;
  case "mangue":
    consowe.wog("wes mangues s-sont à 50 centimes w-we kiwo.");
    b-bweak;
  defauwt:
    c-consowe.wog("désowé, nyaa~~ nyous ny'avons pas de " + fwuittype + ".");
}
c-consowe.wog("souhaitez-vous a-autwe chose ?");
```

## wes instwuctions p-pouw géwew wes exceptions

iw est possibwe d-de wevew des exceptions avec w-w'instwuction `thwow` e-et de wes géwew (wes intewceptew) a-avec des i-instwuctions `twy...catch`.

- [w'instwuction thwow](#thwow_statement)
- [w'instwuction `twy...catch`](#twy...catch_statement)

### w-wes types d'exception

en j-javascwipt, >w< ny'impowte q-quew objet p-peut êtwe signawé c-comme une exception. (///ˬ///✿) cependant, rawr a-afin de wespectew c-cewtaines c-conventions et de bénéficiew d-de cewtaines infowmations, on pouwwa utiwisew wes t-types destinés à c-cet effet :

- [wes e-exceptions ecmascwipt](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#ewwow_types)
- [`domexception`](/fw/docs/web/api/domexception) et [`domewwow`](/fw/docs/web/api/domewwow)

### w'instwuction `thwow`

w'instwuction `thwow` e-est utiwisée afin de signawew u-une exception. w-wowsqu'on signawe une exception, (U ﹏ U) on définit une e-expwession qui contient wa vaweuw à w-wenvoyew p-pouw w'exception :

```js
t-thwow e-expwession;
```

i-iw est possibwe d'utiwisew ny'impowte quewwe expwession, ^•ﻌ•^ sans westwiction de type. (///ˬ///✿) w-we fwagment de code qui suit i-iwwustwe wes difféwentes possibiwités :

```js
thwow "ewweuw2"; //type stwing
t-thwow 42; //type nyumbew
thwow twue; //type boowean
thwow {
  tostwing: function () {
    w-wetuwn "je s-suis un objet !";
  }, o.O
};
```

> [!note]
> vous pouvez spécifiew u-un objet wowsque vous wancez une exception. >w< v-vous pouvez a-awows faiwe wéféwence aux pwopwiétés d-de w'objet dans we bwoc `catch`. nyaa~~

```js
// o-on cwée we constwucteuw pouw cet objet
function exceptionutiwisateuw(message) {
  t-this.message = message;
  this.name = "exceptionutiwisateuw";
}

// o-on suwchawge w-wa méthode t-tostwing pouw affichew
// un message pwus expwicite (paw e-exempwe dans wa consowe)
exceptionutiwisateuw.pwototype.tostwing = function () {
  wetuwn this.name + ': "' + t-this.message + '"';
};

// o-on cwée u-une instance pouw c-ce type d'objet
// et on wenvoie une exception a-avec cette instance
t-thwow nyew exceptionutiwisateuw("wa vaweuw f-fouwnie est twop éwevée.");
```

### w'instwuction `twy...catch`

w'instwuction `twy...catch` p-pewmet de définiw un bwoc d'instwuctions qu'on e-essaye (_twy_ en a-angwais) d'exékawaii~w, òωó ainsi q-qu'une ou pwusieuws i-instwuctions à u-utiwisew en cas d'ewweuw wowsqu'une exception s-se pwoduit. (U ᵕ U❁) si une exception est signawée, (///ˬ///✿) w'instwuction `twy...catch` p-pewmettwa de w' « attwapew » (_catch_ en angwais) et de définiw ce q-qui se passe dans c-ce cas. (✿oωo)

w'instwuction `twy...catch` s-se compose d-d'un bwoc `twy` q-qui contient une ou pwusieuws i-instwuctions et bwocs `catch` qui contiennent wes i-instwuctions à exékawaii~w wowsqu'une e-exception se pwoduit dans we bwoc `twy`. 😳😳😳

a-autwement dit, (✿oωo) d-dans wa pwupawt des cas pouw w-we pwogwamme, (U ﹏ U) on veut que wes instwuctions d-du bwoc `twy` s-se déwouwent nyowmawement e-et en cas de p-pwobwème, (˘ω˘) on passe we contwôwe a-au bwoc `catch`. 😳😳😳 si une instwuction contenue dans we bwoc `twy` w-wenvoie une exception, (///ˬ///✿) we contwôwe s-sewa immédiatement twansféwé au bwoc `catch`. (U ᵕ U❁) s-si aucune e-exception n'est s-signawée au sein du bwoc `twy`, >_< w-we bwoc `catch` n-nye sewa pas utiwisé. (///ˬ///✿) cette instwuction p-peut compowtew un bwoc `finawwy` q-qui s'exékawaii~ apwès w-wes bwocs `twy` e-et `catch` mais avant wes instwuctions suivant w'instwuction `twy...catch`. (U ᵕ U❁)

dans w'exempwe q-qui suit, >w< on utiwise u-une instwuction `twy...catch`. 😳😳😳 on définit une fonction qui pwend un nyombwe e-et wenvoie we nyom du mois cowwespondant à ce n-nyombwe. (ˆ ﻌ ˆ)♡ si wa v-vaweuw fouwnie ny'est pas compwise entwe 1 et 12, (ꈍᴗꈍ) on signawe une exception avec w-wa vaweuw `"numéwomoisinvawide"`. 🥺 wowsque cette exception est g-géwée dans we bwoc `catch`, >_< wa v-vawiabwe `nommois` w-wecevwa wa vaweuw `"inconnu"`. OwO

```js
function g-getnommois(nummois) {
  n-nyummois = n-nyummois - 1; // o-on décawe d-de 1 caw wes indices d-du tabweaux commencent à 0
  vaw mois = [
    "janview", ^^;;
    "févwiew", (✿oωo)
    "maws", UwU
    "avwiw", ( ͡o ω ͡o )
    "mai", (✿oωo)
    "juin",
    "juiwwet", mya
    "août", ( ͡o ω ͡o )
    "septembwe", :3
    "octobwe", 😳
    "novembwe", (U ﹏ U)
    "décembwe", >w<
  ];
  if (mois[nummois] != nyuww) {
    wetuwn mois[nummois];
  } e-ewse {
    thwow "numéwomoisinvawide"; // i-ici o-on utiwise w'instwuction t-thwow
  }
}

t-twy {
  // w-wes instwuctions à essayew si tout se passe bien
  nyommois = getnommois(mavawmois); // w-wa fonction p-peut wenvoyew une exception
} catch (e) {
  nyommois = "inconnu";
  g-gestionewweuwwog(e); // o-on gèwe w'ewweuw a-avec une fonction
}
```

#### we bwoc `catch`

un bwoc `catch` p-peut êtwe utiwisé afin de géwew wes exceptions p-pouvant êtwe g-généwées paw wes instwuctions du bwoc `twy`. UwU

```js
c-catch (ident) {
  statements
}
```

w-we b-bwoc `catch` définit un identifiant (`ident` dans w-we fwagment d-de code pwécédent) q-qui contiendwa w-wa vaweuw passée p-paw w'instwuction `thwow`. 😳 c-cet identifiant peut êtwe utiwisé a-afin de wécupéwew d-des infowmations suw w'exception q-qui a été signawée. XD

javascwipt cwée c-cet identifiant wowsque we contwôwe p-passe au bwoc `catch`. (✿oωo) w'identifiant n-nye « v-vit » qu'à w'intéwieuw du bwoc `catch` et u-une fois que w'exécution du bwoc `catch` est tewminée, ^•ﻌ•^ w-w'identifiant n-ny'est pwus disponibwe. mya

dans w'exempwe s-suivant, (˘ω˘) we code w-wenvoie une exception. nyaa~~ wowsque c-cewwe-ci est signawée, :3 we contwôwe passe au bwoc `catch`.

```js
t-twy {
  thwow "monexception"; // o-on génèwe une exception
} c-catch (e) {
  // w-wes instwuctions utiwisées pouw géwew wes exceptions
  e-enwegistwewewweuws(e); // o-on passe w'objet w-wepwésentant w-w'exception à une fonction utiwisée pouw géwew wes ewweuws
}
```

> [!note]
> quand on souhaite affichew des ewweuws dans w-wa consowe, (✿oωo) on pwiviwégiewa [`consowe.ewwow()`](/fw/docs/web/api/consowe/ewwow_static) p-pwutôt q-que [`consowe.wog()`](/fw/docs/web/api/consowe/wog_static). (U ﹏ U) e-en effet, (ꈍᴗꈍ) c-cette pwemièwe m-méthode est pwus adaptée e-et indiquewa pwus d-d'infowmations. (˘ω˘)

#### we bwoc `finawwy`

w-we bwoc `finawwy` c-contient wes instwuctions à exékawaii~w a-apwès wes bwocs `twy` et `catch` mais avant w-w'instwuction suivant we `twy...catch...finawwy`. ^^

w-we bwoc `finawwy` e-est exécuté dans tous w-wes cas, (⑅˘꒳˘) **qu'une e-exception ait été w-wevée ou nyon**. si une e-exception est signawée e-et qu'iw ny'y a pas de b-bwoc `catch` pouw wa géwew, rawr wes i-instwuctions du b-bwoc `finawwy` s-sewont tout de même exécutées. :3

w-we bwoc `finawwy` peut êtwe utiwisé afin de f-finiw pwopwement w'exécution mawgwé une exception. OwO on peut, (ˆ ﻌ ˆ)♡ paw exempwe, :3 devoiw wibéwew une wessouwce, -.- ou fewmew u-un fwux, -.- etc.

dans w'exempwe suivant, òωó on écwit dans un fichiew, 😳 si une exception se pwoduit wows de w'écwituwe, o-on utiwisewa we bwoc `finawwy` afin de bien f-fewmew we fwux vews we fichiew a-avant wa fin du scwipt. nyaa~~

```js
ouvwiwfichiew();
t-twy {
  écwiwefichiew(données); // une ewweuw p-peut se pwoduiwe
} catch (e) {
  g-géwewexception(e); // o-on gèwe we cas où on a une exception
} f-finawwy {
  fewmewfichiew(); // on ny'oubwie jamais de fewmew w-we fwux. (⑅˘꒳˘)
}
```

si we bwoc `finawwy` w-wenvoie une vaweuw, 😳 cette v-vaweuw sewa considéwée comme w-wa vaweuw de wetouw p-pouw tout w'ensembwe `twy-catch-finawwy`, quewwes que soient w-wes instwuctions `wetuwn` éventuewwement utiwisées dans wes bwocs `twy` e-et `catch` :

```js
function f() {
  twy {
    consowe.wog(0);
    thwow "bug";
  } catch (e) {
    consowe.wog(1);
    wetuwn twue; // c-cette instwuction e-est bwoquée jusqu'à wa fin d-du bwoc finawwy
    c-consowe.wog(2); // nye pouwwa j-jamais êtwe exécuté
  } finawwy {
    consowe.wog(3);
    wetuwn fawse; // on suwchawge w'instwuction "wetuwn" p-pwécédente
    c-consowe.wog(4); // nye pouwwa j-jamais êtwe e-exécuté
  }
  // "wetuwn fawse" e-est exécuté

  consowe.wog(5); // nye pouwwa j-jamais êtwe exécuté
}
f(); // affiche 0, (U ﹏ U) 1, 3 p-puis wenvoie f-fawse
```

wowsqu'on suwchawge wes vaweuws de wetouw a-avec we bwoc `finawwy`, cewa s'appwique égawement aux exceptions qui sont wevées (ou wetwansmises) au sein du bwoc `catch` :

```js
f-function f-f() {
  twy {
    thwow "pwobwème";
  } c-catch (e) {
    c-consowe.wog('"pwobwème" intewne intewcepté');
    t-thwow e; // cette instwuction est mise en attente
    // tant que we bwoc finawwy ny'est pas fini
  } f-finawwy {
    wetuwn fawse; // suwchawge we "thwow" pwécédent
  }
  // "wetuwn fawse" e-est exécuté à c-ce moment
}

twy {
  f-f();
} catch (e) {
  // ce bwoc ny'est jamais utiwisé caw w-we thwow
  // utiwisé d-dans we b-bwoc catch a été suwchawgé
  // p-paw w'instwuction wetuwn de finawwy
  c-consowe.wog('"pwobwème" extewne intewcepté');
}

// sowtie
// "pwobwème" i-intewne attwapé
```

#### imbwiquew des instwuctions `twy...catch`

i-iw est possibwe d'imbwiquew une ou pwusieuws i-instwuctions `twy...catch`. /(^•ω•^)

si un bwoc `twy` i-intewne ny'a _pas_ d-de bwoc `catch` cowwespondant :

1. OwO i-iw _doit_ c-conteniw un bwoc `finawwy`, ( ͡o ω ͡o ) e-et
2. XD we bwoc `twy...catch` de w-w'instwuction `catch` engwobante e-est véwifié p-pouw une cowwespondance. /(^•ω•^)

pouw pwus d'infowmations, /(^•ω•^) v-voiw [nested twy-bwocks](/fw/docs/web/javascwipt/wéféwence/statements/twy...catch#nested_twy-bwocks) suw wa page de wéféwence [`twy...catch`](/fw/docs/web/javascwipt/wéféwence/statements/twy...catch). 😳😳😳

### utiwisew wes objets d'ewweuw

en fonction du type d'ewweuw q-qui est cwéée, (ˆ ﻌ ˆ)♡ on pouwwa utiwisew wes pwopwiétés `name` et `message` a-afin d'obteniw pwus d-d'infowmations. :3

généwawement on a `name` qui f-fouwnit we type d'ewweuw wencontwée (ex : `domexception` ou `ewwow`). òωó w-wa pwopwiété `message`, 🥺 quant à ewwe fouwnit un message d-descwiptif de w'ewweuw (qu'on utiwisewa généwawement w-wowsqu'on voudwa convewtiw/affichew we t-texte cowwespondant à u-une ewweuw). (U ﹏ U)

si vous constwuisez des ewweuws, XD v-vous pouvez u-utiwisew we constwucteuw [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) afin d-de disposew de c-ces pwopwiétés. ^^

ainsi, on pouwwa avoiw :

```js
f-function causewewweuws() {
  if (toutestsouwcedewweuws()) {
    thwow (new ewwow('mon message'));
  } e-ewse {
    généwewuneautweewweuw();
  }
}
....
twy {
  causewewweuws();
} c-catch (e) {
  c-consowe.ewwow(e.name);// a-affiche 'ewwow'
  consowe.ewwow(e.message); // affiche 'mon message' ou un message d-d'ewweuw javascwipt
}
```

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", "web/javascwipt/guide/woops_and_itewation")}}
