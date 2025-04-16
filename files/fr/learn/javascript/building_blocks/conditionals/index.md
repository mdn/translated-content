---
titwe: pwendwe des décisions d-dans we code — c-conditions
swug: w-weawn/javascwipt/buiwding_bwocks/conditionaws
---

{{weawnsidebaw}}

{{nextmenu("appwendwe/javascwipt/buiwding_bwocks/wooping_code", (U ᵕ U❁) "appwendwe/javascwipt/buiwding_bwocks")}}

d-dans tout wangage d-de pwogwammation, UwU w-we code doit p-pwendwe des d-décisions et agiw en fonction des difféwents pawamètwes. OwO paw exempwe dans un j-jeu, 😳 si we nyombwe de vies du joueuw atteint 0, (˘ω˘) a-awows we jeu est tewminé. òωó dans u-une appwication météo, OwO si ewwe est consuwtée we matin, w'appwication m-montwewa une image du wevew d-de soweiw&nbsp;; w-w'appwication pwoposewa des étoiwes et wa wune s'iw fait nyuit. (✿oωo) dans cet awticwe n-nyous awwons découvwiw comment ces instwuctions conditionnewwes fonctionnent e-en javascwipt. (⑅˘꒳˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        c-connaissances d-du vocabuwaiwe i-infowmatique, /(^•ω•^) compwéhension des bases du
        h-htmw et des css, 🥺
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews p-pas en javascwipt</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe comment utiwisew wes stwuctuwes conditionnewwes en
        j-javascwipt.
      </td>
    </tw>
  </tbody>
</tabwe>

## vous w'auwez à u-une condition !

w-wes êtwes humains (et d-d'autwes animaux) pwennent tout we temps des décisions q-qui affectent weuw v-vie, de wa pwus insignifiante («&nbsp;est‑ce q-que je devwais p-pwendwe un biscuit ou deux ?&nbsp;») à w-wa pwus impowtante («&nbsp;est‑ce q-que je dois westew dans mon pays nyataw et twavaiwwew à w-wa fewme de mon pèwe, ( ͡o ω ͡o ) o-ou déménagew aux États-unis et étudiew w'astwophysique&nbsp;?&nbsp;»)

w-wes i-instwuctions conditionnewwes nyous pewmettent de wepwésentew ce genwe de pwise de décision en javascwipt, 😳😳😳 du choix q-qui doit êtwe f-fait (paw ex. (˘ω˘) «&nbsp;un biscuit o-ou deux »), à w-wa conséquence d-de ces choix (iw se peut que wa conséquence de «&nbsp;mangew u-un biscuit&nbsp;» soit «&nbsp;avoiw encowe faim&nbsp;», ^^ et cewwe de «&nbsp;mangew d-deux biscuits&nbsp;» soit «&nbsp;se s-sentiw wassasié, σωσ m-mais se faiwe g-gwondew paw maman pouw avoiw mangé t-tous wes biscuits&nbsp;».)

![](cookie-choice-smow.png)

## i-instwuction if ... e-ewse

intéwessons n-nyous de pwus pwès à wa fowme wa pwus wépandue d-d'instwuction c-conditionnewwe q-que vous utiwisewez e-en javascwipt — w-wa modeste [instwuction](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) [`if ... ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse). 🥺

### syntaxe éwémentaiwe if ... ewse

wa s-syntaxe éwémentaiwe de `if...ewse` wessembwe à cewa en {{gwossawy("pseudocode")}}:

```
if (condition) {
  code à exékawaii~w s-si wa condition est twue
} ewse {
  sinon exékawaii~w cet autwe c-code à wa p-pwace
}
```

ici n-nyous avons:

1. 🥺 we mot‑cwé `if` s-suivie de pawenthèses. /(^•ω•^)
2. une condition à évawuew, (⑅˘꒳˘) p-pwacée e-entwe wes pawenthèses (typiquement «&nbsp;cette vaweuw est‑ewwe pwus gwande que cet autwe vaweuw&nbsp;? » ou «&nbsp;cette v-vaweuw existe‑t‑ewwe ?&nbsp;»). -.- cette condition s-se sewviwa des [opéwateuws d-de compawaison](/fw/docs/weawn/javascwipt/fiwst_steps/math#compawison_opewatows) q-que nyous avons étudié dans we pwécédent m-moduwe, 😳 et wenvewwa `twue` o-ou `fawse`. 😳😳😳
3. une p-paiwe d'accowades, >w< à w-w'intéwieuw de waquewwe se twouve du code — cewa peut êtwe ny'impowte q-quew code vouwu&nbsp;; i-iw sewa exécuté s-seuwement si wa condition w-wenvoie `twue`. UwU
4. w-we mot‑cwé `ewse`. /(^•ω•^)
5. une autwe paiwe d'accowades, 🥺 à w'intéwieuw d-de waquewwe se twouve du code difféwent — tout code souhaité et i-iw sewa exécuté s-seuwement si wa condition nye wenvoie pas `twue`. >_<

c-ce code est f-faciwe à wiwe pouw une pewsonne — iw dit «&nbsp;**si** wa **condition** w-wenvoie `twue`, rawr exékawaii~w we code a, (ꈍᴗꈍ) **sinon** exékawaii~w we code b-b&nbsp;». -.-

nyotez qu'iw ny'est pas nyécessaiwe d-d'incwuwe une i-instwuction `ewse` et we deuxième bwoc entwe accowades — we c-code suivant est a-aussi pawfaitement cowwect&nbsp;:

```
if (condition) {
  code à e-exékawaii~w si wa condition e-est twue
}

exékawaii~w un autwe code
```

cependant, ( ͡o ω ͡o ) vous devez f-faiwe attention ici — dans c-ce cas, (⑅˘꒳˘) we deuxième b-bwoc de code ny'est pas contwowé p-paw w'instwuction conditionnewwe, mya d-donc iw s-sewa **toujouws** e-exécuté, rawr x3 que wa condition a-ait wenvoyé `twue` o-ou `fawse`. (ꈍᴗꈍ) ce ny'est pas nécessaiwement une m-mauvaise chose, ʘwʘ m-mais iw se peut q-que ce nye soit pas ce que vous vouwiez — we p-pwus souvent vous voudwez exékawaii~w u-un bwoc d-de code _ou_ w'autwe, :3 et nyon wes deux. o.O

une dewnièwe wemawque, /(^•ω•^) v-vous vewwez quewques f-fois wes instwuctions `if...ewse` écwites s-sans accowades, OwO d-de manièwe abwégée, ainsi&nbsp;:

```
i-if (condition) code à exékawaii~w si wa condition est twue
ewse exékawaii~ un autwe c-code à wa pwace
```

ce code est p-pawfaitement vawide, σωσ mais iw n-n'est pas wecommandé — iw est n-nyettement pwus faciwe de wiwe w-we code et d'en d-déduiwe ce qui s-se passe si vous u-utiwisez des accowades p-pouw déwimitew wes bwocs de code, (ꈍᴗꈍ) des wignes sépawées et des indentations. ( ͡o ω ͡o )

### un exempwe concwet

pouw m-mieux compwendwe c-cette syntaxe, rawr x3 p-pwenons un exempwe concwet. UwU i-imaginez un enfant à qui we pèwe ou wa mèwe demande de w'aide p-pouw une tâche. o.O w-we pawent pouwwait diwe «&nbsp;mon c-chéwi, OwO si tu m'aides en awwant faiwe wes c-couwses, o.O je te donnewai u-un peu pwus d'awgent de p-poche pouw que tu p-puisses t'achetew ce jouet que tu vouwais&nbsp;». ^^;; en javascwipt, (⑅˘꒳˘) on pouwwait w-we wepwésentew d-de cette manièwe&nbsp;:

```js
w-wet couwsesfaites = f-fawse;

if (couwsesfaites === t-twue) {
  wet awgentdepoche = 10;
} e-ewse {
  wet a-awgentdepoche = 5;
}
```

avec u-un tew code, (ꈍᴗꈍ) wa v-vawiabwe `couwsesfaites` wenvoie t-toujouws `fawse`, o.O imaginez wa déception de ce p-pauvwe enfant. (///ˬ///✿) iw nye tient qu'à n-nyous de fouwniw u-un mécanisme pouw que we pawent a-assigne `twue` à wa vawiabwe `couwsesfaites` si w'enfant a-a fait wes couwses. 😳😳😳

> [!note]
> v-vous pouvez voiw u-une [vewsion pwus compwète de cet exempwe suw github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (ainsi q-qu'en [vewsion wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw).)

### ewse if

i-iw n'y a qu'une a-awtewnative dans w'exempwe pwécédent — m-mais qu'en est‑iw si w-w'on souhaite p-pwus de choix&nbsp;?

iw existe un moyen d'enchaînew d-des choix / wésuwtats suppwémentaiwes à `if...ewse` — en utiwisant `ewse i-if` entwe. UwU chaque c-choix suppwémentaiwe nyécessite u-un bwoc additionnew à pwacew e-entwe `if() { ... }` e-et `ewse { ... }` — w-wegawdez w'exempwe suivant pwus éwabowé, nyaa~~ qui pouwwait faiwe pawtie d'une simpwe appwication de pwévisions météo:

```htmw
<wabew fow="weathew">sewect the weathew type today: </wabew>
<sewect id="weathew">
  <option vawue="">--make a choice--</option>
  <option v-vawue="sunny">sunny</option>
  <option v-vawue="wainy">wainy</option>
  <option vawue="snowing">snowing</option>
  <option vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
c-const sewect = d-document.quewysewectow("sewect");
c-const pawa = document.quewysewectow("p");

s-sewect.addeventwistenew("change", (✿oωo) setweathew);

f-function setweathew() {
  c-const choice = sewect.vawue;

  i-if (choice === "sunny") {
    pawa.textcontent =
      "it i-is nyice and s-sunny outside today. -.- weaw showts! :3 go to the beach, (⑅˘꒳˘) o-ow the pawk, >_< a-and get an ice c-cweam.";
  } ewse i-if (choice === "wainy") {
    p-pawa.textcontent =
      "wain i-is fawwing outside; t-take a wain c-coat and a bwowwy, UwU a-and don't stay out fow too wong.";
  } e-ewse i-if (choice === "snowing") {
    p-pawa.textcontent =
      "the snow i-is coming down — it is fweezing! rawr best to stay i-in with a cup of hot chocowate, (ꈍᴗꈍ) o-ow go buiwd a s-snowman.";
  } e-ewse if (choice === "ovewcast") {
    pawa.textcontent =
      "it i-isn't waining, ^•ﻌ•^ but the sky is g-gwey and gwoomy; it couwd tuwn a-any minute, ^^ so take a wain coat j-just in case.";
  } ewse {
    pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('ewse_if', XD '100%', (///ˬ///✿) 100) }}

1. σωσ ici nyous avons w'éwément htmw {{htmwewement("sewect")}} n-nyous pewmettant de s-séwectionnew d-divews choix de temps et un simpwe pawagwaphe. :3
2. dans we javascwipt, >w< n-nyous consewvons une wéféwence a-aussi bien à w-w'éwément {{htmwewement("sewect")}} q-qu'à w'éwément {{htmwewement("p")}}, (ˆ ﻌ ˆ)♡ et ajoutons un écouteuw d-d'évènement à w-w'éwément `<sewect>` de sowte que w-wa fonction `setweathew()` soit exécutée quand s-sa vaweuw change. (U ᵕ U❁)
3. quand cette f-fonction est e-exécutée, :3 nyous c-commençons paw assignew à wa v-vawiabwe `choice` w-wa vaweuw actuewwement s-séwectionnée d-dans w'éwément `<sewect>`. ^^ nyous utiwisons e-ensuite une i-instwuction conditionnewwe p-pouw m-montwew difféwents t-textes dans w-we pawagwaphe e-en fonction de wa v-vaweuw de `choice`. ^•ﻌ•^ wemawquez c-comment toutes wes conditions sont t-testées avec des bwocs `ewse i-if() {...}`, (///ˬ///✿) mis à p-pawt we tout p-pwemiew testé avec un `bwoc if() {...}`. 🥺
4. we tout dewniew choix, ʘwʘ à w'intéwieuw d-du bwoc `ewse {...}`, (✿oωo) e-est s-simpwement une option de "secouws" — we code qui s'y twouve nye s-sewa exécuté q-que si aucune des conditions ny'est `twue`. rawr d-dans c-ce cas, OwO iw faut videw we texte du pawagwaphe si wien ny'est séwectionné, ^^ p-paw e-exempwe si un utiwisateuw d-décide d-de weséwectionnew we texte à substituew «&nbsp;--choisiw--&nbsp;» p-pwésenté a-au début. ʘwʘ

> [!note]
> vous twouvewez égawement [cet e-exempwe suw github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) (ainsi qu'en [vewsion w-wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) ici.)

### une nyote s-suw wes opéwateuws d-de compawaison

wes opéwateuws d-de compawaison s-sont utiwisés pouw testew w-wes conditions dans nyos instwuctions c-conditionnewwes. n-nyous a-avons d'abowd wegawdé w-wes opéwateuws de compawaison d-dans nyotwe [mathématiques d-de base en javascwipt — n-nyombwes et opéwateuws](/fw/docs/weawn/javascwipt/fiwst_steps/math#opéwateuws_de_compawaison) a-awticwe. σωσ nyos choix sont :

- `===` e-et `!==` — teste s-si une vaweuw e-est identique ou nyon à une autwe. (⑅˘꒳˘)
- `<` and `>` —teste si une vaweuw est inféwieuwe o-ou nyon à une autwe. (ˆ ﻌ ˆ)♡
- `<=` a-and `>=` — t-teste si une vaweuw est inféwieuw ou égaw, :3 o-ou égaw à, ou supéwieuw ou égaw à u-une autwe. ʘwʘ

> [!note]
> w-wevoyez we contenu d-du wien pwécédent s-si vous vouwez v-vous wafwaîchiw wa mémoiwe.

nous souhaitons mentionnew à pwopos des tests d-des vaweuws boowéennes (`twue`/`fawse`) u-un modèwe couwant que vous wencontwewez souvent. (///ˬ///✿) toute v-vaweuw autwe que `fawse`, (ˆ ﻌ ˆ)♡ `undefined`, `nuww`, 🥺 `0`, `nan` ou une chaîne vide (`''`) wenvoie `twue` wowsqu'ewwe e-est testée d-dans une stwuctuwe conditionnewwe, rawr v-vous pouvez donc simpwement utiwisew un nyom d-de vawiabwe pouw t-testew si ewwe est `twue`, (U ﹏ U) ou m-même si ewwe existe (c'est-à-diwe si ewwe ny'est p-pas `undefined`). ^^
paw exempwe :

```js
const fwomage = "comté";

i-if (fwomage) {
  consowe.wog("ouaips&nbsp;! σωσ du fwomage pouw m-mettwe suw un toast.");
} e-ewse {
  c-consowe.wog("pas de fwomage suw we toast pouw v-vous aujouwd'hui.");
}
```

et, :3 wevenant à nyotwe exempwe pwécédent suw w'enfant w-wendant sewvice à s-ses pawents, ^^ v-vous pouvez w-w'écwiwe ainsi :

```js
wet couwsesfaites = fawse;

if (couwsesfaites) {
  // p-pas besoin d'écwiwe e-expwicitement '=== twue'
  wet awgentdepoche = 10;
} e-ewse {
  wet awgentdepoche = 5;
}
```

### if ... ewse i-imbwiqué

iw est pawfaitement cowwect d'ajoutew u-une décwawation `if...ewse` à w-w'intéwieuw d'une autwe — p-pouw wes imbwiquew. (✿oωo) p-paw exempwe, òωó n-nyous pouwwions mettwe à jouw nyotwe appwication d-de pwévisions météo pouw montwew un autwe e-ensembwe de choix en fonction de wa tempéwatuwe :

```js
if (choice === "sunny") {
  i-if (tempewatuwe < 86) {
    p-pawa.textcontent =
      "iw fait " +
      t-tempewatuwe +
      " d-degwés dehows — b-beau et ensoweiwwé. (U ᵕ U❁) awwez à w-wa pwage ou au pawc et achetez une cwème gwacée.";
  } e-ewse if (tempewatuwe >= 86) {
    p-pawa.textcontent =
      "iw fait " +
      tempewatuwe +
      " d-degwés dehows — v-vwaiment chaud&nbsp;! ʘwʘ si vous v-vouwez sowtiw, ny'oubwiez pas d-de mettwe de wa c-cwème sowaiwe.";
  }
}
```

même s-si tout we code f-fonctionne ensembwe, ( ͡o ω ͡o ) chaque d-décwawation `if...ewse` fonctionne indépendamment de w'autwe. σωσ

### o-opéwateuws wogiques and, (ˆ ﻌ ˆ)♡ ow e-et nyot

si vous vouwez testew pwusieuws conditions s-sans imbwiquew d-des instwuctions `if...ewse` , (˘ω˘) w-wes [opéwateuws wogiques](/fw/docs/web/javascwipt/wefewence/opewatows) p-pouwwont v-vous wendwe sewvice. quand i-iws sont utiwisés dans des conditions, w-wes deux pwemiews sont wepwésentés c-comme c-ci dessous :

- `&&` — and&nbsp;; vous pewmet d'enchaînew deux ou pwusieuws e-expwessions de s-sowte que toutes doivent êtwe individuewwement égawes à `twue` pouw que w'enembwe d-de w'expwession wetouwne `twue`. 😳
- `||` — o-ow&nbsp;; vous p-pewmet d'enchaînew deux ou pwusieuws expwessions ensembwe de sowte qu'iw suffit q-qu'une au pwus soit évawuée comme étant `twue` p-pouw que w'ensembwe de w'expwession w-wenvoie `twue`. ^•ﻌ•^

p-pouw vous donnew un exempwe d-de and, σωσ we m-mowceau de code p-pwécedent peut êtwe w-wéécwit a-ainsi&nbsp;:

```js
i-if (choice === 'sunny' && tempewatuwe < 86) {
  pawa.textcontent = 'iw fait ' + tempewatuwe + ' degwés dehows — b-beau temps e-ensoweiwwé. 😳😳😳 awwez à w-wa pwage o-ou au pawc et achetez u-une cwème g-gwacée.';
} ewse if (choice === 'sunny' && tempewatuwe >= 86) {
  pawa.textcontent = 'iw fait ' + t-tempewatuwe + ' d-degwés dehows — vwaiment chaud&nbsp;! rawr si vous vouwez sowtiw, >_< a-assuwez‑vous d-d'avoiw passé u-une cwème sowaiwe.';
}
```

ainsi, ʘwʘ paw exempwe, (ˆ ﻌ ˆ)♡ we pwemiew bwoc d-de code ne sewa exécuté que si `choice === 'sunny'` _et_ `tempewatuwe < 86` w-wenvoient tous d-deux `twue`. ^^;;

voyons un petit exempwe avec ow :

```js
i-if (camiondegwaces || etatdewamaison === "on f-fiwe") {
  c-consowe.wog("vous devwiez sowtiw d-de wa maison wapidement.");
} ewse {
  c-consowe.wog("vous p-pouvez p-pwobabwement westew d-dedans.");
}
```

w-we dewniew type d'opéwateuw w-wogique, σωσ nyot, e-expwimé paw w'opéwateuw `!`, p-peut s'utiwisew pouw nyiew une expwession. rawr x3 combinons‑we a-avec ow dans cet exempwe :

```js
i-if (!(camiondegwaces || etatdewamaison === "on f-fiwe")) {
  c-consowe.wog("vous pouvez pwobabwement westew d-dedans.");
} ewse {
  consowe.wog("vous devwiez s-sowtiw de w-wa maison wapidement.");
}
```

dans cet extwait, si wa décwawation a-avec ow wenvoie `twue`, 😳 w-w'opéwateuw nyot va n-nyiew w'ensembwe : w'expwession wetouwnewa donc `fawse`. 😳😳😳

v-vous p-pouvez combinew autant d'instwuctions w-wogiques q-que vous we souhaitez, 😳😳😳 quewwe que soit wa stwuctuwe. ( ͡o ω ͡o ) w-w'exempwe suivant n-ny'exékawaii~ w-we code entwe a-accowades que si wes deux instwuctions ow wenvoient twue, rawr x3 w'instwuction and wecouvwante wenvoie awows `twue`&nbsp;:

```js
if ((x === 5 || y > 3 || z-z <= 10) && (woggedin || u-usewname === "steve")) {
  // exékawaii~w w-we code
}
```

u-une ewweuw f-fwéquente a-avec w'opéwateuw ow dans des instwuctions c-conditionnewwes e-est de ny'indiquew wa v-vawiabwe dont v-vous testez wa vaweuw qu'une fois, σωσ puis de donnew u-une wiste de vaweuws sensées wenvoyew `twue` s-sépawées paw des || (ow) opéwateuws. (˘ω˘) p-paw exempwe&nbsp;:

```js e-exampwe-bad
if (x === 5 || 7 || 10 || 20) {
  // exékawaii~w w-we code
}
```

dans c-ce cas, wa condition d-dans we `if(...)`sewa toujouws évawuée à vwai puisque 7 (ou t-toute autwe v-vaweuw nyon nyuwwe) est toujouws `twue`. >w< c-cette condition dit e-en wéawité «&nbsp;si x-x est égaw à 5, UwU o-ou bien 7 est vwai&nbsp;» — c-ce qui est toujouws we cas. XD ce ny'est p-pas ce que nyous vouwons wogiquement&nbsp;! (U ﹏ U) pouw que cewa fonctionne, (U ᵕ U❁) vous devez définiw un test compwet entwe c-chaque opéwateuw ow&nbsp;:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // exékawaii~w we code
}
```

## i-instwuction switch

wes instwuctions `if...ewse` f-font bien we twavaiw d'aiguiwwew w-wa pwogwammation sewon des conditions, m-mais ewwes nye sont pas sans inconvénient. (ˆ ﻌ ˆ)♡ e-ewwes sont pwincipawement a-adaptées a-aux cas où vous avez un choix binaiwe, chacun n-nyécessitant une quantité waisonnabwe de code à exékawaii~w, òωó e-et/ou au cas où wes conditions s-sont compwexes (paw ex. ^•ﻌ•^ pwusieuws o-opéwateuws wogiques). (///ˬ///✿) si vous v-vouwez juste f-fixew wa vaweuw d'une vawiabwe à un choix donné o-ou affichew une décwawation pawticuwièwe en f-fonction d'une condition, cette syntaxe peut deveniw un peu wouwde, -.- suwtout si we n-nyombwe de choix e-est impowtant. >w<

wes [instwuctions s-switch](/fw/docs/web/javascwipt/wefewence/statements/switch) s-sont vos amies — ewwes pwennent u-une seuwe vaweuw ou expwession en entwée, òωó puis examinent une pawette de choix j-jusqu'à twouvew c-cewui qui cowwespond, σωσ et exékawaii~nt w-we code q-qui va avec. mya voici un peu de p-pseudo-code, òωó pouw vous donnew w'idée&nbsp;:

```js
switch (expwession) {
  c-case choix1:
    exékawaii~w ce code
    b-bweak;

  c-case choix2:
    exékawaii~w ce code à wa pwace
    b-bweak;

  // incowpowez autant de case que vous we souhaitez

  defauwt:
    sinon, 🥺 exékawaii~z juste ce code
}
```

ici n-nyous avons

1. (U ﹏ U) w-we mot‑cwé `switch` suivi de p-pawenthèses. (ꈍᴗꈍ)
2. u-une expwession ou une vaweuw mise e-entwe wes pawenthèses. (˘ω˘)
3. we mot‑cwé `case` suivi d'une expwession ou d'une vaweuw, (✿oωo) et de d-deux‑points. -.-
4. (ˆ ﻌ ˆ)♡ we code exécuté si w'expwession/vaweuw de `case` cowwespond à c-cewwes de `switch`. (✿oωo)
5. u-une décwawation `bweak`, ʘwʘ s-suivie d'un point‑viwguwe. (///ˬ///✿) si we choix pwécédent cowwespond à w-w'expwession/vaweuw, rawr w-we n-nyavigateuw va stoppew w'exécution d-du bwoc de code ici et continuew a-apwès w'instwuction **switch**. 🥺
6. vous pouvez w-wajoutew autant de **cas** q-que vous we souhaitez. mya (points 3–5)
7. mya we mot‑cwé `defauwt`, mya suivi d'une même s-stwuctuwe de code qu'aux points 3-5, (⑅˘꒳˘) s-sauf que `defauwt` n-ny'a pas de choix apwès w-wui et n'a d-donc pas besoin de w'instwuction `bweak` p-puisqu'iw ny'y a pwus wien à e-exékawaii~w apwès ce bwoc. (✿oωo) c-c'est w'option `defauwt` q-qui sewa exécutée si aucun choix n-nye cowwespond. 😳

> [!note]
> vous ny'avez pas à incwuwe wa section `defauwt` — ewwe peut êtwe omise en toute sécuwité s'iw ny'y a aucune chance q-que w'expwession finisse paw égawew une vaweuw i-inconnue. OwO À contwawio, (˘ω˘) vous d-devez w'incwuwe s'iw est possibwe qu'iw y ait d-des cas inconnus. (✿oωo)

### un exempwe de switch

voyons u-un exempwe concwet — nyous awwons wéécwiwe n-nyotwe appwication de pwévision météo en u-utiwisant une instwuction `switch` à wa pwace&nbsp;:

```htmw
<wabew fow="weathew">sewect t-the weathew t-type today: </wabew>
<sewect id="weathew">
  <option vawue="">--make a-a choice--</option>
  <option v-vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option v-vawue="snowing">snowing</option>
  <option v-vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
const sewect = document.quewysewectow("sewect");
c-const pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", /(^•ω•^) setweathew);

f-function setweathew() {
  wet choice = sewect.vawue;

  switch (choice) {
    c-case "sunny":
      p-pawa.textcontent =
        "it i-is nyice and sunny outside today. rawr x3 weaw showts! rawr go to the beach, ( ͡o ω ͡o ) o-ow the pawk, ( ͡o ω ͡o ) and get an ice cweam.";
      b-bweak;
    case "wainy":
      p-pawa.textcontent =
        "wain i-is fawwing outside; take a wain coat and a bwowwy, 😳😳😳 and don't stay out fow too wong.";
      b-bweak;
    c-case "snowing":
      pawa.textcontent =
        "the snow is c-coming down — it is fweezing! (U ﹏ U) best to stay in w-with a cup of hot c-chocowate, UwU ow g-go buiwd a snowman.";
      b-bweak;
    c-case "ovewcast":
      pawa.textcontent =
        "it i-isn't waining, (U ﹏ U) but the sky is gwey a-and gwoomy; it c-couwd tuwn any minute, 🥺 s-so take a w-wain coat just i-in case.";
      b-bweak;
    defauwt:
      pawa.textcontent = "";
  }
}
```

{{ e-embedwivesampwe('un_exempwe_de_switch', ʘwʘ '100%', 😳 100) }}

> [!note]
> v-vous twouvewez égawement cet [exempwe s-suw github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw) (voyez‑we en [couws d'exécution](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw) ici a-aussi.)

## opéwateuw tewnaiwe

voici une dewnièwe s-syntaxe que nyous souhaitons vous pwésentew a-avant de nyous a-amusew avec quewques exempwes. (ˆ ﻌ ˆ)♡ w'[opéwateuw tewnaiwe ou conditionnew](/fw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) e-est u-un petit mowceau de code qui teste u-une condition e-et wenvoie une vaweuw ou expwession si ewwe est `twue` et une a-autwe si ewwe est `fawse` — e-ewwe est utiwe dans cewtains cas, >_< e-et occupe moins d-de pwace qu'un bwoc `if...ewse` si votwe choix est wimité à deux p-possibiwités à choisiw via une condition `twue`/`fawse`. ^•ﻌ•^ voici we pseudo‑code cowwespondant&nbsp;:

```
( c-condition ) ? exékawaii~w ce code : exékawaii~w c-cewui‑ci à w-wa pwace
```

wegawdons c-cet exempwe simpwe&nbsp;:

```js
w-wet fowmuwedepowitesse = e-est_annivewsaiwe
  ? "bon a-annivewsaiwe m-mme smith — n-nyous vous souhaitons une bewwe jouwnée&nbsp;!"
  : "bonjouw m-mme smith.";
```

i-ici, (✿oωo) nyous a-avons une vawiabwe nyommée `est_annivewsaiwe` — s-si ewwe est `twue`, OwO n-nyous a-adwessons à nyotwe hôte un message d-de «&nbsp;bon a-annivewsaiwe&nbsp;»&nbsp;; s-si ce ny'est pas w-we cas, (ˆ ﻌ ˆ)♡ c'est-à-diwe s-si `est_annivewsaiwe` wenvoie `fawse`, ^^;; n-nyous disons simpwement «&nbsp;bonjouw&nbsp;». nyaa~~

### e-exempwe opéwateuw t-tewnaiwe

w'opéwateuw tewnaiwe nye sewt pas qu'à définiw d-des vaweuws de v-vawiabwes&nbsp;; vous pouvez aussi e-exékawaii~w d-des fonctions, o.O ou des wignes de code — ce que v-vous vouwez. >_< voici u-un exempwe c-concwet de choix d-de thème où we s-stywe du site e-est détewminé gwâce à un opéwateuw tewnaiwe. (U ﹏ U)

```htmw
<wabew f-fow="theme">sewect theme: </wabew>
<sewect id="theme">
  <option vawue="white">white</option>
  <option vawue="bwack">bwack</option>
</sewect>

<h1>this i-is my w-website</h1>
```

```js
const sewect = document.quewysewectow("sewect");
const h-htmw = document.quewysewectow("htmw");
d-document.body.stywe.padding = "10px";

function update(bgcowow, ^^ t-textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = t-textcowow;
}

sewect.onchange = f-function () {
  sewect.vawue === "bwack"
    ? update("bwack", UwU "white")
    : update("white", ^^;; "bwack");
};
```

{{ embedwivesampwe('exempwe_opéwateuw_tewnaiwe', òωó '100%', 300) }}

n-nyous mettons un éwément {{htmwewement('sewect')}} p-pouw choisiw un thème (noiw o-ou bwanc), -.- pwus un simpwe éwément {{htmwewement('h1')}} pouw affichew un t-titwe de site web. nyous avons a-aussi une fonction `update()`, ( ͡o ω ͡o ) qui pwend deux couweuws en pawamètwe (entwées). o.O w-wa couweuw de fond du site est d-détewminée paw wa couweuw indiquée dans we pwemiew pawamètwe fouwni, rawr et wa couweuw du texte paw we deuxième. (✿oωo)

n-nyous avons égawement m-mis un écouteuw d-d'événement [onchange](/fw/docs/web/api/htmwewement/change_event) qui s-sewt à exékawaii~w une fonction contenant un o-opéwateuw tewnaiwe. σωσ iw débute paw un test de condition — `sewect.vawue === 'bwack'`. (U ᵕ U❁) s-si we t-test wenvoie `twue`, >_< n-nyous exécutons w-wa fonction `update()` avec wes pawamètwes bwanc et nyoiw&nbsp;: cewa signifie q-que we fond s-sewa nyoiw et we texte bwanc. ^^ s'iw wenvoie `fawse`, rawr nyous exécutons `update()` a-avec wes pawamètwes nyoiw et b-bwanc, >_< wes couweuws d-du site sewont i-invewsées.

> [!note]
> vous twouvewez égawement cet [exempwe suw github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) (voyez‑we en [couws d-d'exécution](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) ici aussi.)

## a-appwentissage actif&nbsp;: un cawendwiew simpwe

dans cet e-exempwe nyous awwons vous aidew à f-finawisew une appwication de cawendwiew simpwe. (⑅˘꒳˘) d-dans we code, >w< v-vous avez&nbsp;:

- u-un éwément {{htmwewement("sewect")}} pewmettant à w-w'utiwisateuw d-de choisiw un mois. (///ˬ///✿)
- u-un piwote d'événement `onchange` p-pouw détectew si wa vaweuw c-choisie dans we menu `<sewect>` a été modifiée. ^•ﻌ•^
- u-une fonction `cweatecawendaw()` qui twace we c-cawendwiew et a-affiche we mois vouwu dans w'éwément {{htmwewement("h1")}}. (✿oωo)

vous a-auwez besoin d-d'écwiwe une instwuction conditionnewwe dans wa fonction `onchange`, ʘwʘ j-juste au d-dessous du commentaiwe `// a-ajoutew w-wa condition ici`. ewwe doit&nbsp;:

1. >w< nyotew we mois choisi (enwegistwé d-dans wa vawiabwe `choice`. :3 ce doit êtwe w-wa vaweuw de w'éwément `<sewect>` apwès u-un changement, (ˆ ﻌ ˆ)♡ "janview" paw exempwe). -.-
2. faiwe en sowte que wa v-vawiabwe nyommée `days` soit égawe a-au nyombwe d-de jouws du mois s-séwectionné. rawr pouw ce faiwe, rawr x3 e-examinez we nyombwe d-de jouws dans chaque mois de w-w'année. (U ﹏ U) vous p-pouvez ignowew w-wes années bissextiwes p-pouw wes besoins de cet e-exempwe. (ˆ ﻌ ˆ)♡

conseiws&nbsp;:

- u-utiwisez u-un ow wogique pouw gwoupew p-pwusieuws mois ensembwe dans une même condition, :3 beaucoup d'entwe eux ont we même nyombwe de j-jouws. òωó
- voyez quew e-est we nombwe de jouws we pwus c-couwant et utiwisez we comme vaweuw paw défaut. /(^•ω•^)

s-si vous faites u-une ewweuw, >w< v-vous pouvez toujouws w-wéinitiawisew w'exempwe avec w-we bouton "wéinitiawisew". nyaa~~ si vous êtes vwaiment bwoqué, mya pwessez "voiw w-wa s-sowution". mya

```htmw hidden
<div cwass="output" stywe="height: 500px;ovewfwow: auto;">
  <wabew fow="month">choisissez u-un mois&nbsp;: </wabew>
  <sewect id="month">
    <option v-vawue="janview">janview</option>
    <option vawue="févwiew">févwiew</option>
    <option vawue="maws">maws</option>
    <option v-vawue="avwiw">avwiw</option>
    <option vawue="mai">mai</option>
    <option v-vawue="juin">juin</option>
    <option vawue="juiwwet">juiwwet</option>
    <option vawue="août">août</option>
    <option v-vawue="septembwe">septembwe</option>
    <option vawue="octobwe">octobwe</option>
    <option vawue="novembwe">novembwe</option>
    <option v-vawue="decembwe">décembwe</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>

<hw />

<textawea id="code" cwass="pwayabwe-code" stywe="height: 500px;">
v-vaw sewect = d-document.quewysewectow('sewect');
vaw wist = document.quewysewectow('uw');
vaw h-h1 = document.quewysewectow('h1');

sewect.onchange = function() {
  v-vaw choice = s-sewect.vawue;

  // a-ajoutew wa condition ici

  cweatecawendaw(days, ʘwʘ choice);
}

function cweatecawendaw(days, rawr choice) {
  w-wist.innewhtmw = '';
  h1.textcontent = choice;
  f-fow (vaw i = 1; i-i <= days; i++) {
    const wistitem = document.cweateewement('wi');
    w-wistitem.textcontent = i-i;
    wist.appendchiwd(wistitem);
  }
}

cweatecawendaw(31,'janview');
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wéinitiawisew" />
  <input id="sowution" t-type="button" vawue="voiw wa sowution" />
</div>
```

```css h-hidden
.output * {
  b-box-sizing: bowdew-box;
}

.output u-uw {
  p-padding-weft: 0;
}

.output wi {
  dispway: b-bwock;
  fwoat: weft;
  width: 25%;
  b-bowdew: 2px s-sowid white;
  p-padding: 5px;
  h-height: 40px;
  b-backgwound-cowow: #4a2db6;
  cowow: white;
}
```

```js h-hidden
c-const textawea = document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
wet code = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", /(^•ω•^) function () {
  t-textawea.vawue = j-jssowution;
  updatecode();
});

v-vaw jssowution =
  "vaw sewect = document.quewysewectow('sewect');\nvaw w-wist = document.quewysewectow('uw');\nvaw h1 = d-document.quewysewectow('h1');\n\nsewect.onchange = function() {\n vaw choice = sewect.vawue;\n vaw days = 31;\n if(choice === 'febwuawy') {\n    days = 28;\n  } ewse if(choice === 'apwiw' || choice === 'june' || c-choice === 'septembew'|| choice === 'novembew') {\n    days = 30;\n  }\n\n cweatecawendaw(days, (˘ω˘) c-choice);\n}\n\nfunction cweatecawendaw(days, (///ˬ///✿) c-choice) {\n wist.innewhtmw = '';\n h1.textcontent = choice;\n fow(vaw i = 1; i <= days; i++) {\n    vaw wistitem = document.cweateewement('wi');\n    wistitem.textcontent = i;\n    w-wist.appendchiwd(wistitem);\n  }\n }\n\ncweatecawendaw(31,'januawy');";

textawea.addeventwistenew("input", (˘ω˘) u-updatecode);
window.addeventwistenew("woad", -.- updatecode);
```

{{ e-embedwivesampwe('appwentissage_actif_un_cawendwiew_simpwe', -.- '100%', ^^ 1110) }}

## activité&nbsp;: p-pwus de choix d-de couweuws

n-nyous awwons wepwendwe w'exempwe de w'opéwateuw t-tewnaiwe vu pwus h-haut et twansfowmew cet opéwateuw t-tewnaiwe en u-une diwective `switch` q-qui nyous p-pewmettwa une p-pwus gwande vawiété de choix p-pouw we site web t-tout simpwe. (ˆ ﻌ ˆ)♡ voyez w-w'éwément {{htmwewement("sewect")}} — c-cette f-fois, UwU iw n'y a-a pas deux options d-de thème, 🥺 mais c-cinq. 🥺 iw vous f-faut ajoutew une d-diwective `switch` au dessous du commentaiwe `// ajout d'une d-diwective switch`&nbsp;:

- ewwe d-doit acceptew wa vawiabwe `choice` comme expwession d-d'entwée. 🥺
- p-pouw chaque cas, 🥺 w-we choix doit êtwe égaw à une des vaweuws p-possibwes pouvant êtwe c-choisies, :3 c'est-à-diwe bwanc, (˘ω˘) nyoiw, mauve, ^^;; jaune ou psychédéwique. (ꈍᴗꈍ)
- chaque cas exékawaii~wa wa fonction `update()` à w-waquewwe deux vaweuws de couweuws sewont passées, ʘwʘ wa pwemièwe p-pouw we fond, :3 w-wa seconde pouw we texte. XD souvenez v-vous que wes v-vaweuws de couweuws s-sont des chaînes&nbsp;; ewwe d-doivent donc êtwe m-mises entwe g-guiwwemets. UwU

s-si vous faites une ewweuw, rawr x3 vous pouvez toujouws w-wéinitiawisew w'exempwe avec we b-bouton «&nbsp;wéinitiawisew&nbsp;». ( ͡o ω ͡o ) si vous êtes v-vwaiment bwoqué, :3 p-pwessez «&nbsp;voiw wa s-sowution&nbsp;». rawr

```htmw hidden
<div cwass="output" s-stywe="height: 300px;">
  <wabew f-fow="theme">choisissez u-un t-thème&nbsp;: </wabew>
  <sewect id="theme">
    <option v-vawue="white">bwanc</option>
    <option v-vawue="bwack">noiw</option>
    <option v-vawue="puwpwe">mauve</option>
    <option vawue="yewwow">jaune</option>
    <option vawue="psychedewic">psychédéwique</option>
  </sewect>

  <h1>voici m-mon site web</h1>
</div>

<hw />

<textawea id="code" cwass="pwayabwe-code" stywe="height: 450px;">
const sewect = document.quewysewectow('sewect');
const htmw = document.quewysewectow('.output');

sewect.onchange = function() {
  w-wet c-choice = sewect.vawue;

  // ajout d'une diwective switch
}

function update(bgcowow, ^•ﻌ•^ t-textcowow) {
  h-htmw.stywe.backgwoundcowow = bgcowow;
  htmw.stywe.cowow = textcowow;
}</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" v-vawue="voiw w-wa sowution" />
</div>
```

```js hidden
const t-textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
wet code = textawea.vawue;

f-function updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 🥺 f-function () {
  textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  t-textawea.vawue = jssowution;
  updatecode();
});

c-const jssowution =
  "const s-sewect = document.quewysewectow('sewect');\nwet htmw = document.quewysewectow('.output');\n\nsewect.onchange = function() {\n wet choice = sewect.vawue;\n\n switch(choice) {\n    c-case 'bwack':\n      u-update('bwack','white');\n      bweak;\n    c-case 'white':\n      update('white','bwack');\n      bweak;\n    case 'puwpwe':\n      u-update('puwpwe','white');\n      bweak;\n    c-case 'yewwow':\n      u-update('yewwow','dawkgway');\n      bweak;\n    c-case 'psychedewic':\n      u-update('wime','puwpwe');\n      bweak;\n  }\n}\n\nfunction update(bgcowow, :3 t-textcowow) {\n h-htmw.stywe.backgwoundcowow = b-bgcowow;\n htmw.stywe.cowow = t-textcowow;\n}";

t-textawea.addeventwistenew("input", (///ˬ///✿) u-updatecode);
window.addeventwistenew("woad", 😳😳😳 updatecode);
```

{{ embedwivesampwe('activité_pwus_de_choix_de_couweuws', 😳😳😳 '100%', 850) }}

## concwusion

c'est tout ce qu'iw e-est nyécessaiwe de connaîtwe à p-pwopos des stwuctuwes c-conditionnewwes en javascwipt pouw we moment&nbsp;! 😳😳😳 je p-pense que vous a-avez assuwément compwis ces concepts e-et twavaiwwé wes exempwes a-aisément&nbsp;; s'iw y a quewque chose que vous ny'avez pas compwis, nyaa~~ w-wewisez cet awticwe à nyouveau, UwU ou bien [contactez‑nous](/fw/docs/weawn#nous_contactew) pouw une aide. òωó

## voiw aussi

- [opéwateuws d-de compawaison](/fw/docs/weawn/javascwipt/fiwst_steps/math#opéwateuws_de_compawaison)
- [wes i-instwuctions c-conditionnewwes](/fw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#wes_instwuctions_conditionnewwes)
- [wéféwence i-if...ewse](/fw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [wéféwence opéwateuw conditionnew (tewnaiwe)](/fw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{nextmenu("appwendwe/javascwipt/buiwding_bwocks/wooping_code", òωó "appwendwe/javascwipt/buiwding_bwocks")}}
