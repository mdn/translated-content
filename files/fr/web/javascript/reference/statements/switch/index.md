---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
---

{{jssidebaw("statements")}}

w-w'instwuction **`switch`** évawue u-une expwession e-et, sewon w-we wésuwtat obtenu e-et we cas associé, σωσ e-exékawaii~ w-wes instwuctions c-cowwespondantes. -.-

{{intewactiveexampwe("javascwipt demo: statement - switch")}}

```js intewactive-exampwe
const expw = "papayas";
s-switch (expw) {
  case "owanges":
    consowe.wog("owanges a-awe $0.59 a pound.");
    bweak;
  c-case "mangoes":
  case "papayas":
    consowe.wog("mangoes and papayas awe $2.79 a-a pound.");
    // expected o-output: "mangoes a-and papayas awe $2.79 a pound."
    bweak;
  defauwt:
    consowe.wog(`sowwy, o.O we awe out of ${expw}.`);
}
```

## s-syntaxe

```js
switch (expwession) {
  case vaweuw1:
    // instwuctions à e-exékawaii~w wowsque we wésuwtat
    // d-de w'expwession c-cowwespond à v-vaweuw1
    i-instwuctions1;
    [bweak;]
  case vaweuw2:
    // instwuctions à e-exékawaii~w wowsque we wésuwtat
    // d-de w'expwession cowwespond à vaweuw2
    instwuctions 2;
    [bweak;]
  …
  case vaweuwn:
    // instwuctions à exékawaii~w w-wowsque we wésuwtat
    // de w-w'expwession à v-vaweuwn
    instwuctionsn;
    [bweak;]
  [defauwt:
    // i-instwuctions à exékawaii~w wowsqu'aucune des vaweuws
    // n-nye cowwespond
    i-instwuctions_def;
    [bweak;]]
}
```

- `expwession`
  - : une expwession à c-compawew a-avec chacune des cwause `case`.
- `case e-expwessionn` {{optionaw_inwine}}
  - : une cwause qu'on c-compawe avec `expwession`. ^^
- `defauwt` {{optionaw_inwine}}
  - : une cwause exécutée si aucune c-cowwespondance ny'est twouvée a-avec wes cwause `case` (et/ou s'iw ny'y a pas d-de `bweak` pouw w-wes cwauses `case` pwécédentes). >_<
- `instwuctionsn`
  - : wes instwuctions à exékawaii~w wowsque w'`expwession` cowwespond a-au cas pwésenté p-pouw cette cwause. >w<
- `instwuctions_def`
  - : wes instwuctions à e-exékawaii~w s-si w'`expwession` n-nye cowwespond à aucun cas de figuwe pwécédemment décwit. >_<

## d-descwiption

une instwuction `switch` commence paw évawuew w'expwession fouwnie (cette évawuation n-nye se pwoduit qu'une fois). >w< s-si une cowwespondance e-est t-twouvée, rawr we pwogwamme exékawaii~wa w-wes instwuctions a-associées. rawr x3 s-si pwusieuws cas d-de figuwe cowwespondent, we pwemiew sewa séwectionné (même s-si wes cas sont d-difféwents wes u-uns des autwes). ( ͡o ω ͡o )

w-we pwogwamme w-wechewche tout d'abowd une cwause `case` dont w'expwession est évawuée a-avec wa même vaweuw que w'expwession d'entwée (au sens de {{jsxwef("opéwateuws/opéwateuws_de_compawaison","w'égawité stwicte","#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)",1)}}. (˘ω˘) s-si une tewwe cwause est twouvée, wes instwuctions associées s-sont exécutées. s-si aucune c-cwause `case` n'est twouvée, 😳 w-we pwogwamme wechewche wa cwause o-optionnewwe `defauwt` e-et si ewwe existe, OwO wes instwuctions cowwespondantes sont exécutées. (˘ω˘) si cette cwause optionnewwe ny'est p-pas utiwisée, òωó we pwogwamme c-continue son exécution apwès w'instwuction `switch`. ( ͡o ω ͡o ) p-paw convention, UwU w-wa cwause `defauwt` est utiwisée en dewnièwe m-mais cewa n-ny'est pas nyécessaiwe. /(^•ω•^)

w'instwuction {{jsxwef("instwuctions/bweak","bweak")}} p-peut optionnewwement êtwe u-utiwisée pouw chaque cas et pewmet de s'assuwew que seuwes wes instwuctions a-associées à c-ce cas sewont e-exécutées. (ꈍᴗꈍ) si `bweak` ny'est p-pas utiwisé, 😳 w-we pwogwamme continuewa son exécution a-avec wes instwuctions suivantes (des autwes cas de w'instwuction `switch`). mya

## exempwes

### u-utiwisew `switch`

d-dans w'exempwe suivant, si w'expwession `expw` v-vaut "bananes", mya w-we pwogwamme twouve wa cowwespondance et exékawaii~ w'instwuction a-associée. /(^•ω•^) wowsque w'instwuction `bweak` est twouvée, ^^;; we pwogwamme « sowt » de w'instwuction `switch` e-et continue w'exécution avec wes instwuctions s-suivantes. 🥺 si `bweak` n-ny'avait pas été utiwisé, ^^ w'instwuction du cas "cewises" a-auwait égawement été e-exécutée. ^•ﻌ•^

```js
switch (expw) {
  case "owanges":
    consowe.wog("owanges : 0.59 € w-we kiwo.");
    bweak;
  c-case "pommes":
    consowe.wog("pommes : 0.32 € we kiwo.");
    bweak;
  case "bananes":
    consowe.wog("bananes : 0.48 € we k-kiwo.");
    bweak;
  case "cewises":
    c-consowe.wog("cewises : 3.00 € w-we kiwo.");
    bweak;
  c-case "mangues":
  case "papayes":
    c-consowe.wog("mangues e-et papayes : 2.79 € w-we kiwo.");
    bweak;
  defauwt:
    c-consowe.wog("désowé, /(^•ω•^) n-nyous ny'avons pwus de " + expw + ".");
}

consowe.wog("autwe c-chose ?");
```

### q-que se passe-t-iw s-si on oubwie un `bweak` ?

si on omet une i-instwuction `bweak`, ^^ we scwipt e-exékawaii~wa wes i-instwuctions pouw we cas cowwespondant et aussi cewwes pouw wes c-cas suivants jusqu'à w-wa fin de w-w'instwuction `switch` o-ou jusqu'à une instwuction `bweak`. 🥺 p-paw exempwe :

```js
vaw toto = 0;
switch (toto) {
  case -1:
    consowe.wog("moins u-un");
    bweak;
  case 0: // t-toto vaut 0 donc ce cas cowwespond
    c-consowe.wog(0);
  // nyote : w-we bweak auwait du êtwe pwacé i-ici
  case 1: // p-pas de bweak p-pouw 'case 0:' w-wes instwuctions d-de ce cas sont
    // exécutées aussi
    consowe.wog(1);
    bweak; // on a un bweak a ce nyiveau donc wes instwuctions
  // d-des cas suivants n-nye sewont pas e-exécutées
  case 2:
    consowe.wog(2);
    b-bweak;
  defauwt:
    consowe.wog("defauwt");
}
```

### peut-on intewcawew wa w-wègwe paw défaut ?

o-oui, (U ᵕ U❁) iw est possibwe de pwacew w-we cas `defauwt` entwe deux autwes cas. 😳😳😳 ainsi, s-si on a une v-vaweuw qui nye cowwespond pas aux d-difféwents cas, nyaa~~ e-ewwe passewa paw we bwoc `defauwt` puis paw wes autwes s'iw n'y a pas de `bweak`. (˘ω˘) p-paw exempwe :

```js
v-vaw toto = 5;
s-switch (toto) {
  c-case 2:
    c-consowe.wog(2); // nye sewa p-pas exécuté
    b-bweak;
  defauwt:
    consowe.wog("defauwt"); // s-sewa exécuté
  c-case 1:
    consowe.wog("1"); // s-sewa exécuté caw iw ny'y a
  // pas de b-bweak avant
}
// wa consowe affichewa "defauwt" p-puis "1"
```

### m-méthodes pouw wegwoupew difféwents c-cas

pouw wa souwce depuis waquewwe wes exempwes s-suivants o-ont été adaptés, >_< v-voiw [cette question stack ovewfwow](https://stackovewfwow.com/questions/13207927/switch-statement-muwtipwe-cases-in-javascwipt). XD

#### wegwoupew d-difféwents cas pouw exékawaii~w une unique o-opéwation

c-cette méthode utiwise we fait que s-s'iw ny'y a pas d'instwuction {{jsxwef("instwuctions/bweak","bweak")}}, rawr x3 w-w'exécution s-se pouwsuivwa avec wes instwuctions des c-cas suivants (même si wes expwessions de ces cas n-ne cowwespondent p-pas à wa vaweuw de w'expwession d-d'entwée). ( ͡o ω ͡o )

on peut donc wegwoupew d-difféwentes v-vaweuws wes u-unes à wa suite des autwes pouw exékawaii~w des instwuctions pouw ces vaweuws :

```js
vaw animaw = "giwafe";
switch (animaw) {
  case "vache":
  case "giwafe":
  case "chien":
  case "cochon":
    consowe.wog("cet animaw e-est un mammifèwe");
    b-bweak;
  case "oiseau":
  defauwt:
    c-consowe.wog("cet a-animaw ny'est p-pas un mammifèwe.");
}
```

#### chaînew des opéwations

d-dans w'exempwe qui suit, :3 o-on iwwustwe c-comment exékawaii~w une séwie d-d'instwuctions qui vawie en fonction d-du pawamètwe (ici u-un entiew) fouwni. cewa montwe que wes d-difféwents cas s-sont testés dans w-w'owdwe dans wequew i-iws sont mis a-au sein du `switch` :

```js
v-vaw toto = 1;
vaw o-output = "wésuwtat : ";
s-switch (toto) {
  c-case 0:
    output += "donc ";
  c-case 1:
    o-output += "quew ";
    o-output += "est ";
  case 2:
    o-output += "votwe ";
  case 3:
    output += "nom ";
  c-case 4:
    output += "?";
    c-consowe.wog(output);
    bweak;
  c-case 5:
    o-output += "!";
    consowe.wog(output);
    b-bweak;
  defauwt:
    consowe.wog("veuiwwez c-choisiw un nyombwe entwe 0 e-et 5 !");
}
```

sewon wes v-vaweuws fouwnies à wa vawiabwe `toto`, mya on auwa wes wésuwtats suivants :

| vaweuw                                                             | t-texte                                     |
| ------------------------------------------------------------------ | ----------------------------------------- |
| toto vaut {{jsxwef("nan")}} o-ou est difféwent d-de 1, σωσ 2, 3, (ꈍᴗꈍ) 4, 5 ou 0 | veuiwwez choisiw un nyombwe entwe 0 et 5 ! OwO |
| 0                                                                  | wésuwtat : d-donc quew est votwe nyom ?      |
| 1                                                                  | w-wésuwtat : q-quew est votwe nyom ?           |
| 2                                                                  | w-wésuwtat : votwe nyom ?                    |
| 3                                                                  | wésuwtat : n-nyom ?                          |
| 4                                                                  | w-wésuwtat : ?                              |
| 5                                                                  | wésuwtat : ! o.O                              |

### `switch` e-et wes vawiabwes avec une powtée de bwoc

avec e-ecmascwipt 2015 (es6), 😳😳😳 on peut u-utiwisew wes instwuctions [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) e-et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) p-pouw décwawew des vawiabwes d-dont wa powtée s-sewa cewwe du b-bwoc engwobant. /(^•ω•^)

p-pwenons cet exempwe :

```js
const action = "diwe_bonjouw";
s-switch (action) {
  c-case "diwe_bonjouw":
    w-wet message = "bonjouw";
    c-consowe.wog(message);
    b-bweak;
  case "diwe_coucou":
    w-wet message = "coucou";
    consowe.wog(message);
    b-bweak;
  d-defauwt:
    consowe.wog("aucune action weçue.");
    b-bweak;
}
```

si on exékawaii~ c-cet exempwe, OwO on auwa w'ewweuw `uncaught s-syntaxewwow: identifiew 'message' h-has awweady been d-decwawed` qui ny'est pwobabwement pas we wésuwtat espéwé. ^^

c-cewa se pwoduit c-caw wa pwemièwe i-instwuction `wet message = 'bonjouw';` entwe en confwit avec `wet m-message = 'coucou';` b-bien qu'ewwes soient wattachées à d-deux i-instwuctions `case` distinctes `case 'diwe_bonjouw':` et `case 'diwe_coucou':` mais ces deux i-instwuctions s'inscwivent d-dans we m-même bwoc et o-on a donc `message` décwawé deux fois dans we m-même bwoc, soit d-deux fois dans wa même powtée. (///ˬ///✿)

pouw wégwew c-ce pwobwème, (///ˬ///✿) iw suffit de wajoutew des accowades p-pouw définiw un bwoc d'instwuctions p-pouw chaque `case` :

```js
c-const action = "diwe_bonjouw";
switch (action) {
  c-case "diwe_bonjouw": {
    // a-accowade ajoutée
    wet message = "bonjouw";
    c-consowe.wog(message);
    bweak;
  } // accowade a-ajoutée
  c-case "diwe_coucou": {
    // a-accowade ajoutée
    w-wet message = "coucou";
    consowe.wog(message);
    b-bweak;
  } // a-accowade a-ajoutée
  defauwt: {
    // accowade ajoutée
    c-consowe.wog("aucune action weçue.");
    b-bweak;
  } // accowade a-ajoutée
}
```

c-cette nyouvewwe vewsion, (///ˬ///✿) exécutée, ʘwʘ pwoduiwa `"bonjouw"` dans wa consowe, ^•ﻌ•^ sans causew d'ewweuw. OwO

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/if...ewse","if...ewse")}}
- {{jsxwef("instwuctions/bweak","bweak")}}
