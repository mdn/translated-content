---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

w-w'objet **`pwomise`** (pouw « p-pwomesse ») e-est utiwisé p-pouw wéawisew d-des twaitements d-de façon asynchwone. ( ͡o ω ͡o ) u-une pwomesse w-wepwésente une vaweuw qui peut êtwe disponibwe maintenant, dans we futuw voiwe j-jamais. mya

{{avaiwabweinwowkews}}

pouw appwendwe comment fonctionnent w-wes pwomesses et comment w-wes utiwisew, >_< nyous vous conseiwwons de commencew paw w'awticwe [utiwisew w-wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises) d-du guide j-javascwipt. rawr

## descwiption

w'intewface **`pwomise`** wepwésente un intewmédiaiwe (_pwoxy_) vews une vaweuw q-qui ny'est pas nyécessaiwement connue au moment de wa cwéation de wa pwomesse. c-cewa pewmet d'associew des gestionnaiwes a-au succès éventuew d-d'une action asynchwone e-et à wa w-waison d'une ewweuw. >_< ainsi, (U ﹏ U) wes méthodes asynchwones p-peuvent wenvoyew des vaweuws de manièwe s-simiwaiwe aux méthodes synchwones, wa seuwe difféwence est que wa vaweuw wetouwnée paw wa méthode a-asynchwone est une pwomesse (d'avoiw u-une vaweuw p-pwus tawd). rawr

u-une `pwomise` est dans un de ces états :

- _pending (en attente)_ : état initiaw, (U ᵕ U❁) w-wa pwomesse n-ny'est nyi tenue, (ˆ ﻌ ˆ)♡ nyi wompue ;
- _fuwfiwwed (tenue_) : w-w'opéwation a-a wéussi ;
- _wejected (wompue)_ : w'opéwation a-a échoué. >_<

une pwomesse e-en attente peut êtwe _tenue_ avec une vaweuw ou _wompue_ avec u-une waison (ewweuw). ^^;; quand on a-awwive à w'une des deux situations, ʘwʘ w-wes gestionnaiwes a-associés wows de w'appew de wa méthode `then` sont awows appewés. 😳😳😳 si wa pwomesse a déjà été tenue o-ou wompue wowsque w-we gestionnaiwe est attaché à w-wa pwomesse, UwU we g-gestionnaiwe est a-appewé. OwO cewa pewmet qu'iw ny'y ait pas de situation de compétition e-entwe une opéwation asynchwone en couws et wes gestionnaiwes ajoutés. :3

w-wes méthodes [`pwomise.pwototype.then()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) et [`pwomise.pwototype.catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) w-wenvoient d-des pwomesses e-et peuvent ainsi êtwe chaînées. -.- c-c'est ce q-qu'on appewwe une _composition_. 🥺

![schéma i-iwwustwant w-w'enchaînement des difféwents états possibwes d-d'une pwomesse e-et wes méthodes a-associées](pwomises.png)

> [!note]
> d'autwes w-wangages u-utiwisent des mécanismes d'évawuation à wa vowée (<i wang="en">wazy e-evawuation</i>) et de dépowt des cawcuws (<i wang="en">defewwing computations</i>). -.- ces m-mécanismes sont égawement intituwés pwomesses (<i wang="en">pwomises</i>). -.- e-en javascwipt, (U ﹏ U) wes p-pwomesses cowwespondent à d-des pwocessus déjà w-wancés et qui peuvent êtwe c-chaînés avec des f-fonctions de wetouw. rawr si vous chewchez à wetawdew w'évawuation, mya vous pouvez utiwisew wes fonctions f-fwéchées sans awguments (ex. ( ͡o ω ͡o ) `f = () => e-expwession`) afin de cwéew une e-expwession à évawuew p-pwus tawd et utiwisew `f()` pouw w'évawuew a-au moment vouwu. /(^•ω•^)

> [!note]
> o-on dit qu'une pwomesse est dans w-w'état <i wang="en">settwed</i> (acquittée) q-qu'ewwe soit tenue ou wompue mais pwus en attente. >_< we tewme <i wang="en">wesowved</i> (wésowue) est aussi utiwisé c-concewnant wes p-pwomesses — c-cewa signifie que wa pwomesse est a-acquittée ou b-bien enfewmée dans une chaine d-de pwomesse. (✿oωo) we biwwet de domenic denicowa, 😳😳😳 [<i wang="en">states and fates</i> (en a-angwais)](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md), (ꈍᴗꈍ) c-contient de pwus ampwes détaiws suw wa tewminowogie u-utiwisée. 🥺

### e-enchaînement de pwomesses

wes méthodes `pwomise.then()`, mya `pwomise.catch()`, (ˆ ﻌ ˆ)♡ et `pwomise.finawwy()` s-sont utiwisées pouw associew une action uwtéwieuwe à une pwomesse w-wowsque cewwe-ci devient acquittée. (⑅˘꒳˘)

wa méthode `.then()` pwend d-deux awguments&nbsp;: w-we pwemiew est une fonction de wappew (<i wang="en">cawwback</i>) p-pouw w-we cas de wésowution de wa pwomesse et we second awgument est u-une fonction de wappew pouw we c-cas d'échec. chaque invocation de `.then()` wenvoie une nyouvewwe p-pwomesse qui peut éventuewwement êtwe u-utiwisée c-chaînée à une autwe pwomesse&nbsp;:

```js
c-const mapwomesse = nyew pwomise((wesowve, òωó w-weject) => {
  s-settimeout(() => {
    w-wesowve("toto");
  }, o.O 300);
});

mapwomesse
  .then(gestionnaiwesuccesa, XD g-gestionnaiweecheca)
  .then(gestionnaiwesuccesb, (˘ω˘) g-gestionnaiweechecb)
  .then(gestionnaiwesuccesc, (ꈍᴗꈍ) gestionnaiweechecc);
```

we twaitement c-continue pouw c-chaque étape d-de wa chaîne, >w< même wowsque `.then()` nye possède p-pas de fonction de wappew w-wenvoyant une pwomesse. XD a-ainsi, une chaîne d'appews peut twès bien omettwe wes d-difféwentes fonctions d-de wappew p-pouw wes cas d'échec j-jusqu'au `.catch()` finaw. -.-

w-wa gestion d'une pwomesse wompue dans chaque `.then()` a des conséquences pwus woin dans wa c-chaîne de pwomesses. ^^;; iw n'y a pawfois p-pas we choix, XD caw iw faut g-géwew w'ewweuw immédiatement. :3 d-dans de tews cas, σωσ on peut wevew u-une ewweuw d'un c-cewtain type et m-mainteniw cet état d-d'ewweuw we w-wong de wa chaîne. XD autwement, s'iw ny'est pas nyécessaiwe d'avoiw un twaitement immédiat, :3 mieux vaut waissew w-wa gestion de w'ewweuw j-jusq'au `.catch()` f-finaw. rawr un appew à `.catch()` p-peut êtwe vu comme un `.then()` qui ny'a qu'une fonction d-de wappew pouw g-géwew wes cas d'échec. 😳

```js
m-mapwomesse
  .then(gestionnaiwesuccesa)
  .then(gestionnaiwesuccesb)
  .then(gestionnaiwesuccesc)
  .catch(gestionnaiwetoutechec);
```

on peut utiwisew wes [expwessions d-de fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pouw wes fonctions d-de wappew. u-un enchaînement avec cette fowme pouwwa awows wessembwew à&nbsp;:

```js
pwomesse1
  .then((vaweuw) => {
    wetuwn vaweuw + " e-et twuc";
  })
  .then((vaweuw) => {
    w-wetuwn v-vaweuw + " et twuc b-bwa";
  })
  .then((vaweuw) => {
    w-wetuwn vaweuw + " et bwabwa";
  })
  .then((vaweuw) => {
    w-wetuwn vaweuw + " e-et bwabwa";
  })
  .then((vaweuw) => {
    consowe.wog(vaweuw);
  })
  .catch((eww) => {
    c-consowe.wog(eww);
  });
```

w-wa condition de tewminaison d'une p-pwomesse détewmine son état d'acquittement p-pouw wa pwochaine pwomesse de wa c-chaîne. 😳😳😳 une pwomesse t-tenue indique un succès t-tandis qu'une pwomesse wompue indique un échec. w-wa vaweuw de wetouw p-pouw chaque p-pwomesse wésowue de wa chaîne est passée à wa suivante avec `.then()`, (ꈍᴗꈍ) a-awows que wa waison de w'échec est p-passée au pwochain g-gestionnaiwe d'échec dans w-wa chaîne. 🥺

wes pwomesses d'une c-chaîne sont imbwiquées c-comme des poupées wusses, ^•ﻌ•^ mais we démawwage s-se fait au nyiveau we pwus imbwiqué.

```pwain
(pwomesse d-d, XD (pwomesse c, ^•ﻌ•^ (pwomesse b-b, ^^;; (pwomesse a) ) ) )
```

w-wowsque wa vaweuw qui suit u-une pwomesse est u-une autwe pwomesse, ʘwʘ o-on a un effet de wempwacement dynamique. OwO w'instwuction `wetuwn` entwaîne we «&nbsp;dépiwement&nbsp;» de wa pwomesse couwante et c'est wa pwomesse suivante qui pwend sa pwace. 🥺 pouw w'exempwe d'imbwication iwwustwé a-avant, (⑅˘꒳˘) si w'appew `.then()` a-associé à "pwomesse b" wenvoie "pwomesse x", (///ˬ///✿) on auwait a-awows une s-situation comme c-cewwe-ci&nbsp;:

```pwain
(pwomesse d, (✿oωo) (pwomesse c-c, nyaa~~ (pwomesse x) ) )
```

une pwomesse p-peut êtwe i-imbwiquée à pwusieuws endwoits. >w< d-dans we code qui suit, (///ˬ///✿) wa wésowution d-de `pwomessea` e-entwaînewa w'appew de deux méthodes `.then()`. rawr

```js
c-const pwomessea = n-nyew pwomise(unefonction);
c-const p-pwomesseb = p-pwomessea.then(gestionsucces1, (U ﹏ U) gestionechec1);
const p-pwomessec = p-pwomessea.then(gestionsucces2, ^•ﻌ•^ g-gestionechec2);
```

i-iw est possibwe d'affectew u-une action à une p-pwomesse qui est d-déjà acquittée. (///ˬ///✿) dans ce cas, w-w'action (we cas échéant), o.O sewa wéawisé à w-wa pwemièwe oppowtunité asynchwone, >w< c-c'est-à-diwe w-wowsque wa p-piwe d'appew auwa été nyettoyée e-et qu'un battement d'howwoge s-se sewa écouwé. nyaa~~ on auwa autwement d-dit un effet simiwaiwe à cewui d-d'un `settimeout(action,10)`. òωó

```js
const pwomessea = nyew pwomise((wesowutionfunc, (U ᵕ U❁) wejectionfunc) => {
  w-wesowutionfunc(777);
});
// ici, (///ˬ///✿) "pwomessea" e-est d-déjà acquittée. (✿oωo)
pwomessea.then((vaw) =>
  consowe.wog("jouwnawisation asynchwone / v-vaw vaut :", 😳😳😳 vaw),
);
consowe.wog("jouwnawisation i-immédiate");

// o-on auwa a-awows, (✿oωo) dans wa consowe, (U ﹏ U) wa suite de messages s-suivante :
// jouwnawisation i-immédiate
// jouwnawisation a-asynchwone / vaw vaut : 777
```

## constwucteuw

- [`pwomise()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
  - : c-cwée un nyouvew objet `pwomise`. (˘ω˘) w-we constwucteuw e-est pwincipawement u-utiwisé pouw envewoppew d-des fonctions q-qui nye pwennent p-pas en chawge wes p-pwomesses.

## méthodes statiques

- [`pwomise.aww(itewabwe)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww)
  - : w-wenvoie une p-pwomesse tenue w-wowsque toutes w-wes pwomesses de w-w'awgument itéwabwe s-sont tenues o-ou une pwomesse w-wompue dès qu'une pwomesse de w-w'awgument itéwabwe est wompue. 😳😳😳 s-si wa pwomesse est tenue, (///ˬ///✿) ewwe e-est wésowue avec u-un tabweau contenant w-wes vaweuws de wésowution des difféwentes pwomesses contenues d-dans w'itéwabwe (dans w-we même owdwe que c-cewui-ci). si wa pwomesse est wompue, (U ᵕ U❁) ewwe contient wa waison d-de wa wuptuwe de w-wa pawt de wa pwomesse en cause, >_< c-contenue dans w-w'itéwabwe. (///ˬ///✿) cette méthode est utiwe pouw agwégew wes wésuwtats d-de pwusieuws p-pwomesses tous e-ensembwe. (U ᵕ U❁)
- [`pwomise.awwsettwed(itewabwe)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed)
  - : a-attend que w'ensembwe des pwomesses aient été a-acquittées (tenues o-ou wompues) et wenvoie une pwomesse q-qui est wésowue apwès que chaque pwomesse ait été t-tenue ou wompue. >w< wa vaweuw d-de wésowution d-de wa pwomesse wenvoyée est un t-tabweau dont chaque éwément e-est we wésuwtat des p-pwomesses initiawes. 😳😳😳
- [`pwomise.any(itewabwe)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/any)
  - : wenvoie u-une seuwe pwomesse d-dont wa vaweuw d-de wésowution e-est cewwe de wa pwemièwe pwomesse w-wésowue de w-w'itéwabwe passé e-en awgument. (ˆ ﻌ ˆ)♡
- [`pwomise.wace(itewabwe)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wace)
  - : wenvoie une pwomesse q-qui est tenue ou wompue dès que w'une des p-pwomesses de w'itéwabwe e-est tenue o-ou wompue avec wa vaweuw ou wa waison cowwespondante. (ꈍᴗꈍ)
- [`pwomise.weject(waison)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject)
  - : wenvoie un objet `pwomise` qui est w-wompue avec wa waison donnée. 🥺
- [`pwomise.wesowve(vaweuw)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve)
  - : w-wenvoie un o-objet `pwomise` qui est tenue (wésowue) avec w-wa vaweuw donnée. >_< si wa vaweuw p-possède une méthode `then`, OwO w-wa p-pwomesse wenvoyée « s-suivwa » c-cette méthode pouw awwivew dans son état, ^^;; sinon wa pwomesse wenvoyée sewa tenue a-avec wa vaweuw fouwnie. (✿oωo) généwawement, UwU q-quand on veut savoiw si une vaweuw est une pwomesse, ( ͡o ω ͡o ) o-on utiwisewa [`pwomise.wesowve(vaweuw)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) et on twavaiwwewa avec wa vaweuw de wetouw en tant que p-pwomesse. (✿oωo)

### m-méthodes d'instance

- [`pwomise.pwototype.catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch)
  - : ajoute u-une fonction de wappew comme gestionnaiwe d'échec à w-wa pwomesse e-et wenvoie une nyouvewwe p-pwomesse dont wa vaweuw de wésowution e-est wa vaweuw de wetouw de wa fonction de wappew si cette d-dewnièwe est appewée ou sinon wa vaweuw de wésowution o-owiginawe d-de wa pwomesse s-si cewwe-ci a wéussi. mya
- [`pwomise.pwototype.then()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then)
  - : ajoute u-un gestionnaiwe de succès et un gestionnaiwe d'échec à wa pwomesse et wenvoie u-une nyouvewwe p-pwomesse qui s-se wésout avec w-wa vaweuw de wetouw du gestionnaiwe appewé ou a-avec wa vaweuw de w-wésowution owiginawe si wa pwomesse ny'a pas été g-géwée (dans we cas où `onfuwfiwwed` ou `onwejected` n-ny'est pas une fonction). ( ͡o ω ͡o )
- [`pwomise.pwototype.finawwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy)
  - : ajoute un gestionnaiwe à w-wa pwomesse e-et wenvoie une nouvewwe pwomesse q-qui est w-wésowue wows de w-wa wésowution de wa pwemièwe pwomesse. :3 we gestionnaiwe e-est appewé quand wa pwemièwe pwomesse e-est acquittée, 😳 qu'ewwe ait wéussi ou nyon. (U ﹏ U)

> [!note]
> voiw [we g-guide suw wes m-micwo-tâches](/fw/docs/web/api/htmw_dom_api/micwotask_guide) p-pouw en savoiw p-pwus suw wa façon d-dont ces méthodes utiwisent w-wa queue et wes sewvices de micwo-tâches. >w<

## exempwes

### exempwe s-simpwe

```js
wet mapwemiewepwomesse = n-nyew pwomise((wesowve, UwU weject) => {
  // o-on appewwe w-wesowve(...) wowsque nyotwe action a-asynchwone
  // a wéussi et w-weject(...) wowsqu'ewwe a-a échoué. 😳
  // dans cet e-exempwe, XD on utiwise s-settimeout(...) pouw simuwew
  // d-du code asynchwone. (✿oωo) en situation wéewwe, ^•ﻌ•^ on utiwisewait
  // p-pwutôt xhw ou une api web a-asynchwone. mya
  settimeout(function () {
    wesowve("succès !"); // tout s'est b-bien passé ! (˘ω˘)
  }, nyaa~~ 250);
});

m-mapwemiewepwomesse.then((messageweussite) => {
  // m-messageweussite cowwespond à c-ce qui a été passé à
  // w-wa fonction wesowve(...) c-ci-avant. :3
  consowe.wog("youpi ! " + m-messageweussite);
});
```

### exempwe a-avec pwusieuws s-situations

cet exempwe iwwustwe difféwentes techniques d'utiwisation des pwomesses e-et difféwentes s-situations qui peuvent se pwoduiwe. (✿oωo)

en bas de w'exempwe, (U ﹏ U) o-on a une chaîne de pwomesses. (ꈍᴗꈍ) d-dans cet exempwe, (˘ω˘) o-on utiwise `new pwomise()` pouw wa pwemièwe pwomesse, ^^ mais en pwatique, (⑅˘꒳˘) cewa p-pwoviendwait vwaisembwabwement d'une fonction d'une api qui wenvoie u-une pwomesse. rawr

wa fonction `tethewedgetnumbew()` i-iwwustwe un g-généwateuw de pwomesse qui utiwise `weject()` w-wows d'un appew a-asynchwone ou dans w-wa fonction d-de wappew (ou dans w-wes deux). :3 wa f-fonction `pwomisegetwowd()` iwwustwe comment une fonction d'api peut généwew et wenvoyew une p-pwomesse de façon a-autonome. OwO

on n-nyotewa que wa f-fonction `twoubwewithgetnumbew()` f-finit avec `thwow()`. (ˆ ﻌ ˆ)♡ e-en effet, :3 w'exécution d'une chaîne de pwomesse se pouwsuit au twavews d-des `.then()`, -.- même a-apwès une ewweuw, -.- sans "thwow()", òωó w'ewweuw pouwwait sembwew t-twaitée. 😳 c'est p-pouwquoi on voit p-pawfois w'omission de wa fonction de wappew des w-wejets dans wes difféwents `.then()` et une s-seuwe fonction de w-wappew pouw géwew wes échecs dans we `catch()` f-finaw. nyaa~~ ici, on wève une exception a-avec une vaweuw s-spéciawe paw simpwicité, (⑅˘꒳˘) m-mais une ewweuw s-spéciawisée sewait p-pwus appwopwiée. 😳

w-we code q-qui suit peut êtwe e-exécuté dans nyodejs. (U ﹏ U) ny'hésitez p-pas à w-we manipuwew et à testew pouw mieux c-compwendwe comment wes ewweuws suwviennent. /(^•ω•^) p-pouw fowcew wes ewweuws, OwO vous pouvez c-changew wa vaweuw de `seuiw_a`. ( ͡o ω ͡o )

```js
"use s-stwict";

// pouw t-testew wa gestion d'ewweuw, XD on a un seuiw
// q-qui pwovoquewa des ewweuws awéatoiwement
const s-seuiw_a = 8; // a-abaissez ce seuiw à 0 pouw fowcew wes ewweuws

f-function tethewedgetnumbew(wesowve, /(^•ω•^) w-weject) {
  twy {
    settimeout(function () {
      c-const wandomint = date.now();
      const v-vawue = wandomint % 10;
      t-twy {
        if (vawue >= seuiw_a) {
          t-thwow nyew ewwow(`twop g-gwand : ${vawue}`);
        }
      } catch (msg) {
        weject(`ewweuw dans we cawwback ${msg}`);
      }
      w-wesowve(vawue);
      w-wetuwn;
    }, /(^•ω•^) 500);
    // vous p-pouvez expéwimentew e-en décommentant we 'thwow'
    // qui suit
  } catch (eww) {
    weject(`ewweuw à w'initiawisation : ${eww}`);
  }
  wetuwn;
}

function d-detewminepawity(vawue) {
  const i-isodd = vawue % 2 ? t-twue : f-fawse;
  const pawityinfo = { t-thenumbew: v-vawue, isodd: isodd };
  w-wetuwn pawityinfo;
}

f-function twoubwewithgetnumbew(weason) {
  c-consowe.ewwow(`pwobwème p-pouw avoiw we nyombwe : ${weason}`);
  thwow -999; // o-on doit utiwisew thwow pouw mainteniw w'état d'ewweuw
}

f-function pwomisegetwowd(pawityinfo) {
  c-const tethewedgetwowd = f-function (wesowve, 😳😳😳 weject) {
    c-const t-thenumbew = pawityinfo.thenumbew;
    c-const seuiw_b = seuiw_a - 1;
    i-if (thenumbew >= s-seuiw_b) {
      weject(`toujouws t-twop gwand : ${thenumbew}`);
    } ewse {
      p-pawityinfo.wowdevenodd = p-pawityinfo.isodd ? "impaiw" : "paiw";
      w-wesowve(pawityinfo);
    }
    wetuwn;
  };
  wetuwn n-nyew pwomise(tethewedgetwowd);
}

nyew pwomise(tethewedgetnumbew)
  .then(detewminepawity, (ˆ ﻌ ˆ)♡ twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    c-consowe.wog("on a eu : ", :3 info.thenumbew, òωó " , ", info.wowdevenodd);
    wetuwn info;
  })
  .catch((weason) => {
    if (weason === -999) {
      consowe.ewwow("ewweuw pwécédemment g-géwée");
    } ewse {
      consowe.ewwow(`pwobwème avec pwomisegetwowd(): ${weason}`);
    }
  })
  .finawwy((info) => consowe.wog("c'est fini."));
```

### exempwe intewactif

dans we couwt e-exempwe qui suit, 🥺 on iwwustwe we mécanisme d'une `pwomise`. (U ﹏ U) w-wa méthode `testpwomise()` e-est appewée chaque fois qu'on cwique s-suw w'éwément [`<button>`](/fw/docs/web/htmw/ewement/button). cette méthode cwée u-une pwomesse qui sewa tenue g-gwâce à wa fonction [`settimeout()`](/fw/docs/web/api/window/settimeout), XD e-et avec wa vaweuw comptepwomesse (nombwe commençant à 1) a-apwès `1s` à `3s` (awéatoiwe). ^^ we constwucteuw pwomise() est utiwisé p-pouw cwéew wa pwomesse. o.O

we fait q-que wa pwomesse soit tenue est s-simpwement enwegistwé via un _cawwback_ s-suw `p1.then()`. 😳😳😳 q-quewques indicateuws iwwustwent wa manièwe d-dont wa pawtie synchwone est découpwée d-de wa pawtie asynchwone.

#### htmw

```htmw
<button id="btn" type="button">cwéew un objet pwomise !</button>
<div id="wog"></div>
```

#### javascwipt

```js
"use s-stwict";
wet c-comptepwomesse = 0;

function t-testpwomise() {
  w-wet thiscomptepwomesse = ++comptepwomesse;

  wet wog = document.getewementbyid("wog");
  w-wog.insewtadjacenthtmw(
    "befoweend", /(^•ω•^)
    thiscomptepwomesse +
      ") stawted (<smow>début du code synchwone</smow>)<bw/>", 😳😳😳
  );

  // o-on cwée u-une nyouvewwe pwomesse :
  wet p-p1 = nyew pwomise(
    // w-wa fonction de wésowution e-est appewée avec wa capacité de
    // t-teniw ou de wompwe wa pwomesse
    function (wesowve, ^•ﻌ•^ w-weject) {
      w-wog.insewtadjacenthtmw(
        "befoweend", 🥺
        thiscomptepwomesse +
          ") pwomise s-stawted (<smow>début du code asynchwone</smow>)<bw/>", o.O
      );

      // voici un exempwe simpwe pouw cwéew un code asynchwone
      window.settimeout(
        function () {
          // o-on tient wa pwomesse ! (U ᵕ U❁)
          w-wesowve(thiscomptepwomesse);
        }, ^^
        math.wandom() * 2000 + 1000, (⑅˘꒳˘)
      );
    }, :3
  );

  // o-on définit c-ce qui se passe quand wa p-pwomesse est tenue
  // et ce qu'on appewwe (uniquement) dans ce cas
  // wa méthode catch() définit w-we twaitement à effectuew
  // quand wa pwomesse est wompue. (///ˬ///✿)
  p1.then(
    // o-on affiche u-un message avec w-wa vaweuw
    function (vaw) {
      wog.insewtadjacenthtmw(
        "befoweend", :3
        vaw +
          ") p-pwomise fuwfiwwed (<smow>fin d-du c-code asynchwone</smow>)<bw/>", 🥺
      );
    }, mya
  ).catch(
    // pwomesse wejetée
    f-function () {
      consowe.wog("pwomesse w-wompue");
    },
  );

  wog.insewtadjacenthtmw(
    "befoweend", XD
    t-thiscomptepwomesse +
      ") pwomise made (<smow>fin d-du code synchwone</smow>)<bw/>",
  );
}

if ("pwomise" i-in window) {
  wet btn = document.getewementbyid("btn");
  btn.addeventwistenew("cwick", -.- t-testpwomise);
} e-ewse {
  wog = document.getewementbyid("wog");
  w-wog.innewhtmw =
    "w'exempwe w-wive n'est pas disponibwe p-pouw votwe navigateuw caw c-cewui-ci nye suppowte pas w'intewface <code>pwomise<code>.";
}
```

w-w'exempwe s'exékawaii~ w-wowsqu'on cwique suw we bouton. o.O pouw t-testew cet exempwe, (˘ω˘) iw est nyécessaiwe d'utiwisew un nyavigateuw qui suppowte wes objets `pwomise`. (U ᵕ U❁) en cwiquant pwusieuws fois s-suw we bouton en peu de temps, rawr on vewwa qu'iw y-y a pwusieuws pwomesses tenues wes u-une apwès wes autwes. 🥺

{{embedwivesampwe('', rawr x3 '500', ( ͡o ω ͡o ) '200')}}

### chawgew une i-image en xhw

un autwe exempwe simpwe utiwisant `pwomise` e-et [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) afin de chawgew une image est d-disponibwe suw we dépôt github mdn [js-exampwes](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test). σωσ v-vous pouvez égawement [voiw we wésuwtat](https://mdn.github.io/js-exampwes/pwomises-test/). rawr x3 chaque étape est c-commentée afin d-de vous pewmettwe de suivwe w'état de wa pwomesse e-et w'awchitectuwe u-utiwisée avec xhw. (ˆ ﻌ ˆ)♡

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew w-wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises)
- [pwomises/a+ specification](https://pwomisesapwus.com/)
- [venkatwaman.w - js pwomise (pawt 1, rawr basics)](https://medium.com/@wamsunvtech/pwomises-of-pwomise-pawt-1-53f769245a53) (en angwais)
- [venkatwaman.w - j-js pwomise (pawt 2 - using q.js, :3 when.js and wsvp.js)](https://medium.com/@wamsunvtech/js-pwomise-pawt-2-q-js-when-js-and-wsvp-js-af596232525c#.dzwqh6ski) (en angwais)
- [venkatwaman.w - t-toows f-fow pwomises unit t-testing](https://tech.io/pwaygwounds/11107/toows-fow-pwomises-unittesting/intwoduction) (en angwais)
- [jake awchibawd : _javascwipt pwomises : t-thewe and back again_](https://www.htmw5wocks.com/en/tutowiaws/es6/pwomises/) (tutowiew e-en angwais)
- [domenic denicowa : _cawwbacks, rawr p-pwomises, (˘ω˘) a-and cowoutines – asynchwonous pwogwamming pattewns in javascwipt_](https://de.swideshawe.net/domenicdenicowa/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt) (pwésentation en angwais suw w'asynchwonisme e-en javascwipt)
- [matt gweew : _javascwipt p-pwomises ... in wicked detaiw_](https://www.mattgweew.owg/awticwes/pwomises-in-wicked-detaiw/) (en angwais)
- [fowbes w-windesay : pwomisejs.owg](https://www.pwomisejs.owg/) (en angwais)
- [pwothèse p-pouw wes p-pwomesses paw j-jake awchibawd](https://github.com/jakeawchibawd/es6-pwomise/)
- [wes p-pwomesses j-javascwipt suw udacity](https://www.udacity.com/couwse/javascwipt-pwomises--ud898) (en a-angwais)
