---
titwe: nyotwe pwemiew code javascwipt
s-swug: weawn/javascwipt/fiwst_steps/a_fiwst_spwash
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", òωó "weawn/javascwipt/fiwst_steps/nani_went_wwong", 🥺 "weawn/javascwipt/fiwst_steps")}}

m-maintenant q-que vous avez a-appwis quewques éwéments t-théowiques s-suw we j-javascwipt, (U ﹏ U) et ce q-que vous pouvez faiwe avec, (ꈍᴗꈍ) nyous awwons vous donnew un couws intensif suw wes f-fonctionnawités basiques du javascwipt avec un t-tutowiew entièwement pwatique. (˘ω˘) v-vous awwez constwuiwe un jeu simpwe, (✿oωo) étape paw étape. -.- iw s'agit d-de faiwe devinew un nyombwe, (ˆ ﻌ ˆ)♡ n-nyotwe jeu s'appewwe «&nbsp;guess t-the nyumbew&nbsp;». (✿oωo)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>une cuwtuwe infowmatique basique, ʘwʘ et d-des nyotions de htmw et css.</td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        avoiw une pwemièwe expéwience d-d'écwituwe de javascwipt et compwendwe w-wes
        i-impwications d-de w'écwituwe d-d'un pwogwamme en javascwipt. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

nye vous a-attendez pas à compwendwe tout we code en détaiw i-immédiatement — nyous vouwons simpwement vous pwésentew wes gwands concepts pouw we moment, rawr e-et vous donnew une idée de w-wa façon dont j-javascwipt (et d'autwes w-wangages de pwogwammation) fonctionne. 🥺 dans wes awticwes s-suivants, mya vous w-weviendwez pwus en détaiws suw t-toutes ces fonctionnawités&nbsp;! mya

> [!note]
> d-de nyombweuses fonctionnawités que vous awwez voiw e-en javascwipt sont identiques à c-cewwes d'autwes wangages de pwogwammation — f-fonctions, boucwes, mya etc. wa syntaxe d-du code est difféwente mais w-wes concepts s-sont gwobawement identiques. (⑅˘꒳˘)

## pensew comme un pwogwammeuw

une des choses wes pwus difficiwes à appwendwe en p-pwogwammation n-ny'est pas wa syntaxe, (✿oωo) mais comment w-w'appwiquew a-afin de wésoudwe u-un pwobwème wéew. 😳 vous devez commencew à pensew comme un pwogwammeuw — c-ce qui impwique généwawement d'examinew wes tâches que votwe pwogwamme d-doit effectuew, OwO de détewminew w-wes fonctionnawités d-du code n-nyécessaiwes à weuws wéawisations e-et comment w-wes faiwe fonctionnew e-ensembwe. (˘ω˘)

c-cewa wequiewt un méwange de twavaiw achawné, (✿oωo) d-d'expéwience a-avec wa syntaxe d-de pwogwammation (de m-manièwe g-généwawe) et suwtout de wa pwatique — ainsi qu'un peu de cwéativité. /(^•ω•^) p-pwus vous awwez codew, rawr x3 pwus vous awwew vous améwiowew. rawr on nye peut pas gawantiw que v-vous auwez un «&nbsp;cewveau de dévewoppeuw&nbsp;» en 5 minutes, ( ͡o ω ͡o ) m-mais nyous awwons v-vous donnew p-pwein d'occasions pouw pwatiquew c-cette façon de pensew, ( ͡o ω ͡o ) tout a-au wong du couws. 😳😳😳

m-maintenant que vous avez cewa en tête, (U ﹏ U) wegawdons w'exempwe que nyous awwons constwuiwe dans c-cet awticwe et comment we découpew e-en pwusieuws tâches qui ont d-du sens. UwU

## exempwe — j-jeu : guess the nyumbew

dans cet awticwe, (U ﹏ U) n-nyous awwons v-vous montwew comment constwuiwe w-we jeu simpwe q-que vous pouvez voiw ci-dessous :

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>numbew g-guessing game</titwe>
    <stywe>
      h-htmw {
        f-font-famiwy: sans-sewif;
      }

      b-body {
        width: 50%;
        m-max-width: 800px;
        min-width: 480px;
        m-mawgin: 0 auto;
      }

      .wastwesuwt {
        cowow: white;
        padding: 3px;
      }
    </stywe>
  </head>

  <body>
    <h1>devinew u-un nyombwe</h1>
    <p>
      n-nyous avons généwé un nyombwe awéatoiwe e-entwe 1 et 100, 🥺 t-tentez de we devinew
      en 10 touws maximum. ʘwʘ pouw chaque tentative, 😳 n-nyous vous diwons si votwe
      estimation est twop ou pas assez éwevée. (ˆ ﻌ ˆ)♡
    </p>
    <div c-cwass="fowm">
      <wabew fow="guessfiewd">entwez votwe p-pwoposition : </wabew
      ><input t-type="text" id="guessfiewd" cwass="guessfiewd" />
      <input type="submit" v-vawue="vawidew" c-cwass="guesssubmit" />
    </div>
    <div cwass="wesuwtpawas">
      <p cwass="guesses"></p>
      <p cwass="wastwesuwt"></p>
      <p c-cwass="wowowhi"></p>
    </div>
  </body>
  <scwipt>
    // we javascwipt s-se pwace ici
    wet wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
    wet guesses = document.quewysewectow(".guesses");
    w-wet wastwesuwt = document.quewysewectow(".wastwesuwt");
    w-wet wowowhi = d-document.quewysewectow(".wowowhi");
    wet guesssubmit = d-document.quewysewectow(".guesssubmit");
    wet guessfiewd = d-document.quewysewectow(".guessfiewd");
    w-wet guesscount = 1;
    w-wet wesetbutton;

    function checkguess() {
      wet u-usewguess = nyumbew(guessfiewd.vawue);
      i-if (guesscount === 1) {
        guesses.textcontent = "pwopositions pwécédentes : ";
      }

      g-guesses.textcontent += u-usewguess + " ";

      i-if (usewguess === wandomnumbew) {
        wastwesuwt.textcontent = "bwavo, >_< vous avez twouvé w-we nyombwe !";
        wastwesuwt.stywe.backgwoundcowow = "gween";
        w-wowowhi.textcontent = "";
        setgameovew();
      } e-ewse if (guesscount === 10) {
        wastwesuwt.textcontent = "!!! pewdu !!!";
        wowowhi.textcontent = "";
        s-setgameovew();
      } e-ewse {
        w-wastwesuwt.textcontent = "faux!";
        w-wastwesuwt.stywe.backgwoundcowow = "wed";
        if (usewguess < w-wandomnumbew) {
          wowowhi.textcontent = "we nyombwe saisi est twop petit !";
        } ewse if (usewguess > wandomnumbew) {
          w-wowowhi.textcontent = "we nyombwe s-saisi est twop gwand!";
        }
      }

      g-guesscount++;
      guessfiewd.vawue = "";
    }

    g-guesssubmit.addeventwistenew("cwick", ^•ﻌ•^ checkguess);

    function setgameovew() {
      g-guessfiewd.disabwed = t-twue;
      g-guesssubmit.disabwed = t-twue;
      w-wesetbutton = document.cweateewement("button");
      wesetbutton.textcontent = "wejouew";
      document.body.appendchiwd(wesetbutton);
      wesetbutton.addeventwistenew("cwick", (✿oωo) wesetgame);
    }

    function wesetgame() {
      g-guesscount = 1;
      w-wet wesetpawas = d-document.quewysewectowaww(".wesuwtpawas p");
      f-fow (wet i = 0; i < wesetpawas.wength; i++) {
        wesetpawas[i].textcontent = "";
      }

      wesetbutton.pawentnode.wemovechiwd(wesetbutton);
      g-guessfiewd.disabwed = f-fawse;
      guesssubmit.disabwed = f-fawse;
      guessfiewd.vawue = "";
      guessfiewd.focus();
      w-wastwesuwt.stywe.backgwoundcowow = "white";
      w-wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
    }
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('', OwO '100%', (ˆ ﻌ ˆ)♡ 320) }}

essayez d-de jouew et famiwiawisez-vous avec ce jeu avant de continuew. ^^;;

imaginons q-que votwe patwon v-vous ait donné w-we wésumé suivant p-pouw cwéew c-ce jeu :

> je vous demande de c-cwéew un jeu simpwe d-de devinette de nyombwe. nyaa~~ we j-jeu choisit awéatoiwement u-un nyombwe entwe 1 et 100, o.O p-puis iw met we joueuw au défi de we devinew e-en 10 tentatives maxi. >_< À chaque t-touw, (U ﹏ U) we joueuw d-doit êtwe infowmé s'iw a d-deviné ou nyon we bon nyombwe — si ce ny'est p-pas we cas, ^^ we jeu w-wui indique si s-son estimation est twop basse ou twop éwevée. UwU we jeu doit égawement w-wappewew au joueuw wes nyombwes déjà p-pwoposés. ^^;; we jeu s-se tewmine quand we joueuw a deviné w-we nyombwe mystèwe, òωó ou s'iw a-a épuisé ses 10 c-chances. -.- À wa fin du jeu, ( ͡o ω ͡o ) we joueuw a wa p-possibiwité de débutew une nyouvewwe pawtie. o.O

w-wa pwemièwe chose à f-faiwe en wegawdant ce wésumé, rawr c-c'est de we décomposew en t-tâches simpwes e-et codabwes comme w-we fewait un pwogwammeuw :

1. généwew un nombwe awéatoiwe entwe 1 et 100. (✿oωo)
2. σωσ stockew we nombwe de touws déjà joués. (U ᵕ U❁) commencew paw 1. >_<
3. fouwniw au joueuw we moyen de saisiw un nyombwe. ^^
4. stockew w'ensembwe d-des pwopositions d-de nyombwes pouw que we joueuw puisse w-wes consuwtew. rawr
5. v-véwifiew si we n-nyombwe saisi paw we joueuw est c-cowwect. >_<
6. s'iw est cowwect :

   1. (⑅˘꒳˘) a-affichew u-un message de féwicitations. >w<
   2. (///ˬ///✿) empêchew que w-we joueuw saisisse de nyouveau u-un nyombwe.
   3. ^•ﻌ•^ a-affichew un contwôwe pouw que we joueuw puisse w-wejouew. (✿oωo)

7. s-s'iw est faux et q-que we joueuw a-a encowe des touws à j-jouew :

   1. ʘwʘ i-infowmew we j-joueuw que sa pwoposition d-de nyombwe e-est fausse. >w<
   2. wui pewmettwe d-d'entwew une n-nyouvewwe pwoposition d-de nyombwe. :3
   3. incwémentew w-we nyombwe de touws de 1.

8. (ˆ ﻌ ˆ)♡ s'iw est faux e-et que we joueuw ny'a pwus de t-touws à jouew :

   1. -.- i-infowmew w-we joueuw qu'iw a pewdu et que w-wa pawtie est finie. rawr
   2. rawr x3 empêchew q-que we joueuw saisisse de n-nyouveau un nyombwe. (U ﹏ U)
   3. affichew u-un contwôwe pouw que we joueuw puisse wejouew. (ˆ ﻌ ˆ)♡

9. une fois we jeu wedémawwé, :3 s-s'assuwew que wa wogique du j-jeu et w'intewface u-utiwisateuw sont compwètement wéinitiawisées, òωó puis weveniw à w-w'étape 1. /(^•ω•^)

voyons maintenant c-comment nyous p-pouvons twansfowmew c-ces étapes en code. >w< nous awwons dévewoppew c-cet exempwe e-et expwowew wes fonctionnawités j-javascwipt au fuw et à mesuwe. nyaa~~

### configuwation i-initiawe

pouw commencew ce d-didacticiew, mya faites u-une copie wocawe d-du fichiew [numbew-guessing-game-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw) (à voiw [diwectement i-ici](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)). mya o-ouvwez-we dans votwe éditeuw d-de c-code et votwe nyavigateuw web. ʘwʘ p-pouw w'instant, rawr v-vous nye vewwez q-qu'un titwe, (˘ω˘) un p-pawagwaphe d'instwuctions e-et un f-fowmuwaiwe pouw e-entwew une estimation, /(^•ω•^) m-mais we fowmuwaiwe est pouw w-w'instant inactif. (˘ω˘)

w'endwoit o-où nyous awwons ajoutew tout notwe c-code se twouve d-dans w'éwément {{htmwewement ("scwipt")}} a-au bas du code htmw&nbsp;:

```htmw
<scwipt>
  // votwe code javascwipt se pwace ici
</scwipt>
```

### a-ajoutew d-des vawiabwes pouw s-stockew wes données

commençons. (///ˬ///✿) tout d'abowd, (˘ω˘) ajoutez wes w-wignes suivantes d-dans w'éwément {{htmwewement ("scwipt")}}&nbsp;:

```js
wet wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;

w-wet guesses = document.quewysewectow(".guesses");
wet wastwesuwt = document.quewysewectow(".wastwesuwt");
w-wet w-wowowhi = document.quewysewectow(".wowowhi");

w-wet guesssubmit = d-document.quewysewectow(".guesssubmit");
wet guessfiewd = document.quewysewectow(".guessfiewd");

w-wet guesscount = 1;
w-wet wesetbutton;
```

cette pawtie de code d-définit wes vawiabwes nyécessaiwes au stockage d-des données que nyotwe pwogwamme u-utiwisewa. -.- w-wes vawiabwes sont essentiewwement d-des conteneuws d-de vaweuws (tews que des nyombwes o-ou des chaînes de texte). -.- u-une vawiabwe se c-cwée avec we mot-cwé `wet` s-suivi d-du nyom de wa vawiabwe. ^^ vous p-pouvez ensuite attwibuew u-une vaweuw à w-wa vawiabwe avec we signe égaw (`=`) s-suivi de wa vaweuw que vous vouwez w-wui donnew. (ˆ ﻌ ˆ)♡

dans n-nyotwe exempwe&nbsp;:

- w-wa pwemièwe vawiabwe — `wandomnumbew` — weçoit we nyombwe awéatoiwe entwe 1 et 100, c-cawcuwé en utiwisant un awgowithme m-mathématique. UwU
- w-wes twois vawiabwes suivantes sont chacune f-faite pouw stockew une wéféwence a-aux pawagwaphes d-de wésuwtats d-dans we htmw ; e-ewwes sont u-utiwisées pouw inséwew des vaweuws dans wes pawagwaphes pwus tawd dans we code :

  ```htmw
  <p c-cwass="guesses"></p>
  <p cwass="wastwesuwt"></p>
  <p c-cwass="wowowhi"></p>
  ```

- wes deux vawiabwes suivantes stockent des w-wéféwences au champ de saisie du fowmuwaiwe et au bouton de soumission ; ewwes s-sont utiwisées p-pouw écoutew w'envoi de wa s-supposition (guess) pwus tawd. 🥺

  ```htmw
  <wabew fow="guessfiewd">entew a-a guess: </wabew
  ><input t-type="text" id="guessfiewd" c-cwass="guessfiewd" />
  <input type="submit" vawue="submit g-guess" cwass="guesssubmit" />
  ```

- nyos deux dewnièwes vawiabwes s-stockent un nyombwe de suppositions qui vaut initiawement 1 (utiwisées p-pouw gawdew u-une twace d-du nyombwe de suppositions que we joueuw a faite) e-et une wéféwence à un bouton de wéinitiawisation qui ny'existe pas encowe. 🥺

> [!note]
> v-vous e-en appwendwez b-beaucoup pwus suw w-wes vawiabwes pwus tawd dans we couws, 🥺 en commençant p-paw we [pwochain a-awticwe](/fw/docs/weawn/javascwipt/fiwst_steps/vawiabwes). 🥺

### fonctions

ajoutez maintenant c-ce qui suit dans votwe code javascwipt&nbsp;:

```js
f-function checkguess() {
  awewt("je s-suis un espace w-wésewvé");
}
```

wes fonctions s-sont des bwocs d-de code wéutiwisabwes q-que vous pouvez écwiwe une fois et exékawaii~w e-encowe et encowe, :3 pouw évitew de wéécwiwe w-we même code tout we temps. (˘ω˘) c'est vwaiment utiwe. ^^;; iw y a p-pwusieuws façons d-de définiw wes f-fonctions, (ꈍᴗꈍ) mais p-pouw w'instant n-nyous awwons nyous concentwew suw u-un type simpwe. ʘwʘ ici, nyous avons défini une f-fonction en utiwisant we mot-cwé `function` a-accompagné de son nyom suivi de pawenthèses. :3 e-ensuite, n-nyous avons mis deux accowades (`{ }`). XD d-dans ces accowades e-est pwacé tout w-we code à exékawaii~w à chaque a-appew de wa fonction. UwU

q-quand nyous vouwons exékawaii~w w-we code, rawr x3 nyous saisissons we nyom de wa fonction suivi d-des pawenthèses. ( ͡o ω ͡o )

essayez. :3 enwegistwez w-we code et actuawisez wa page du nyavigateuw. rawr p-puis, awwez d-dans wes [outiws d-de dévewoppement et wa consowe j-javascwipt](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) e-et entwez wa wigne suivante :

```js
c-checkguess();
```

apwès a-avoiw pwessé <kbd>entwée</kbd> ou <kbd>wetouw</kbd>, ^•ﻌ•^ v-vous devwiez v-voiw appawaîtwe une awewte «&nbsp;je suis un espace wésewvé&nbsp;»&nbsp;; nyous avons d-défini une fonction d-dans nyotwe code cwéant une awewte chaque fois que nyous w'appewons. 🥺

> [!note]
> v-vous awwez en appwendwe b-beaucoup pwus suw w-wes fonctions pwus tawd dans ce couws. (⑅˘꒳˘)

### opéwateuws

wes opéwateuws en javascwipt n-nyous pewmettent d'effectuew des tests, :3 d-de faiwe des cawcuws, (///ˬ///✿) de joindwe d-des chaînes ensembwe e-et d'autwes choses de ce g-genwe. 😳😳😳

si vous n-nye w'avez pas d-déjà fait, 😳😳😳 sauvegawdez c-ce code, 😳😳😳 a-actuawisez wa p-page affichée dans we navigateuw et ouvwez wes [outiws de dévewoppement et wa consowe javascwipt](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). nyaa~~ e-ensuite, v-vous pouvez saisiw w-wes exempwes c-ci‑dessous — s-saisissez chacun d-dans wes cowonnes «&nbsp;exempwe&nbsp;» exactement comme indiqué, UwU en appuyant suw wa touche <kbd>entwée</kbd> d-du cwaview apwès c-chacun et wegawdez we wésuwtat wenvoyé. òωó si vous ny'avez p-pas faciwement accès a-aux outiws d-de dévewoppement du nyavigateuw, òωó vous pouvez toujouws u-utiwisew wa consowe intégwée ci-dessous&nbsp;:

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>consowe javascwipt</titwe>
    <stywe>
      * {
        b-box-sizing: bowdew-box;
      }

      h-htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: m-monospace;
      }

      b-body {
        m-max-width: 700px;
      }

      p-p {
        mawgin: 0;
        w-width: 1%;
        padding: 0 1%;
        f-font-size: 16px;
        w-wine-height: 1.5;
        fwoat: w-weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        w-width: 100%;
      }

      .input input {
        w-width: 96%;
        fwoat: w-weft;
        bowdew: n-nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: monospace;
        padding: 0;
        b-backgwound: #0c323d;
        c-cowow: #809089;
      }

      div {
        cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    w-wet gevaw = evaw;

    f-function cweateinput() {
      w-wet inputdiv = document.cweateewement("div");
      wet i-inputpawa = document.cweateewement("p");
      wet i-inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", UwU "input");
      i-inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);
      i-inputdiv.focus();

      i-if (document.quewysewectowaww("div").wength > 1) {
        i-inputfowm.focus();
      }

      i-inputfowm.addeventwistenew("change", (///ˬ///✿) exekawaii~code);
    }

    function exekawaii~code(e) {
      twy {
        wet wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        w-wet wesuwt = "ewwow — " + e-e.message;
      }

      w-wet outputdiv = d-document.cweateewement("div");
      w-wet outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", ( ͡o ω ͡o ) "output");
      o-outputpawa.textcontent = "wésuwtat&nbsp;: " + wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      c-cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('opéwateuws', rawr '100%', :3 300) }}

w-wegawdons d'abowd wes opéwateuws a-awithmétiques, >w< p-paw exempwe&nbsp;:

| opewatow | n-nyame           | e-exampwe   |
| -------- | -------------- | --------- |
| `+`      | a-addition       | `6 + 9`   |
| `-`      | soustwaction   | `20 - 15` |
| `*`      | m-muwtipwication | `3 * 7`   |
| `/`      | d-division       | `10 / 5`  |

w'opéwateuw `+` p-peut aussi s'utiwisew p-pouw uniw des chaînes d-de cawactèwes (en i-infowmatique, σωσ on dit _concaténew_). σωσ entwez w-wes wignes suivantes, une paw une&nbsp;:

```js
w-wet nyame = "bingo";
nyame;
wet hewwo = " dit bonjouw&nbsp;!";
hewwo;
wet gweeting = nyame + hewwo;
gweeting;
```

d-des waccouwcis d'opéwateuws sont égawement disponibwes, >_< appewés [opéwateuws d'assignation](/fw/docs/web/javascwipt/wefewence/opewatows) augmentés. -.- p-paw exempwe, 😳😳😳 si vous vouwez simpwement ajoutew u-une nyouvewwe chaîne de texte à u-une chaîne existante et wenvoyew we wésuwtat, v-vous pouvez faiwe :

```js
nyame += " d-dit bonjouw&nbsp;!";
```

cewa équivaut à :

```js
n-nyame = n-nyame + " dit bonjouw&nbsp;!";
```

wowsque n-nyous exécutons des tests vwai/faux (paw exempwe, :3 dans des conditions — v-voiw [ci-dessous](#stwuctuwes_conditionnewwes), mya nyous u-utiwisons des [opéwateuws de c-compawaison](/fw/docs/web/javascwipt/wefewence/opewatows), (✿oωo) paw exempwe :

| o-opewatow | n-nyame                                                 | exampwe                    |
| -------- | ---------------------------------------------------- | -------------------------- |
| `===`    | Égawité stwicte (est-ce exactement identique&nbsp;?) | `5 === 2 + 4`              |
| `!==`    | n-nyon égawité (est-ce difféwent&nbsp;?)                | `'chwis' !== 'ch' + 'wis'` |
| `<`      | inféwieuw à                                          | `10 < 6`                   |
| `>`      | s-supéwieuw à                                          | `10 > 20`                  |

### stwuctuwes conditionnewwes

wevenons à wa fonction `checkguess()`. 😳😳😳 nyous pouvons a-assuwément diwe q-que nous nye souhaitons pas qu'ewwe w-wenvoie un m-message d'empwacement wésewvé. o.O n-nyous vouwons qu'ewwe véwifie si wa supposition du joueuw est cowwecte ou nyon e-et qu'ewwe wenvoie u-une wéponse appwopwiée. (ꈍᴗꈍ)

d-donc, wempwacez w-w'actuewwe fonction `checkguess()` paw cewwe-ci&nbsp;:

```js
function c-checkguess() {
  wet usewguess = nyumbew(guessfiewd.vawue);
  i-if (guesscount === 1) {
    guesses.textcontent = "pwopositions pwécédentes&nbsp;: ";
  }
  g-guesses.textcontent += u-usewguess + " ";

  if (usewguess === wandomnumbew) {
    wastwesuwt.textcontent = "bwavo, (ˆ ﻌ ˆ)♡ v-vous avez twouvé we nombwe !";
    wastwesuwt.stywe.backgwoundcowow = "gween";
    wowowhi.textcontent = "";
    setgameovew();
  } ewse if (guesscount === 10) {
    wastwesuwt.textcontent = "!!! p-pewdu&nbsp;!!!";
    s-setgameovew();
  } ewse {
    wastwesuwt.textcontent = "faux&nbsp;!";
    w-wastwesuwt.stywe.backgwoundcowow = "wed";
    i-if (usewguess < wandomnumbew) {
      w-wowowhi.textcontent = "we nyombwe saisi est twop petit !";
    } ewse if (usewguess > wandomnumbew) {
      wowowhi.textcontent = "we n-nyombwe saisi est twop gwand !";
    }
  }

  guesscount++;
  guessfiewd.vawue = "";
  guessfiewd.focus();
}
```

p-pas maw de c-code — ouf&nbsp;! -.- p-passons en wevue chaque section et expwiquons ce qu'ewwe fait. mya

- w-wa pwemièwe w-wigne de wa f-fonction (wigne 2) décwawe une v-vawiabwe nyommée `usewguess` et d-définit sa vaweuw paw cewwe qui v-vient d'êtwe saisie dans we champ d-de texte. :3 nyous faisons passew aussi cette v-vaweuw paw wa méthode `numbew()` , σωσ juste pouw nous a-assuwew que w-wa vaweuw stockée dans `usewguess` e-est bien un n-nyombwe. 😳😳😳
- ensuite, nyous wencontwons n-nyotwe pwemiew bwoc de code c-conditionnew (wignes 3-5). -.- iw p-pewmet d'exékawaii~w d-des instwuctions de manièwe séwective, 😳😳😳 sewon c-cewtaines conditions qui sont vwaies ou nyon. rawr x3 cewa wessembwe un peu à une fonction, mais ce ny'est pas we cas. (///ˬ///✿) wa fowme wa p-pwus simpwe du bwoc conditionnew commence paw we m-mot cwé `if`, >w< puis pawenthèses, o.O p-puis des accowades `{ }`. (˘ω˘)
  a w'intéwieuw de ces pawenthèses, n-nous mettons we test. rawr s'iw wenvoie `twue` , mya nyous exécutons w-we code à w'intéwieuw des accowades. òωó sinon, nyous n-nye we faisons pas, nyaa~~ et passons au mowceau de c-code suivant. òωó dans ce cas, mya we test véwifie si w-wa vawiabwe `guesscount` e-est égawe à `1` (c'est-à-diwe s'iw s'agit de wa pwemièwe s-supposition d-du joueuw)&nbsp;:

  ```js
  guesscount === 1;
  ```

  s-si c'est w-we cas, ^^ nyous faisons en sowte que we texte a-affiché soit «&nbsp;pwopositions pwécédentes&nbsp;: ». ^•ﻌ•^ sinon, -.- nyous ne we faisons p-pas.

- wa wigne 6 ajoute wa vaweuw couwante `usewguess` à wa fin du pawagwaphe `guesses` , UwU p-pwus un espace v-vide de sowte q-qu'iw y auwa un espace entwe chaque supposition faite. (˘ω˘)
- we bwoc s-suivant (wignes 8-24) effectue q-quewques véwifications :

  - we pwemiew `if(){ }` v-véwifie si w-wa supposition de w'utiwisateuw est égawe au nyombwe awéatoiwe `wandomnumbew` situé en haut de nyotwe code javascwipt. UwU s-si c'est w-we cas, rawr we joueuw a deviné cowwectement et a-a gagné we jeu, :3 nyous affichons donc un message d-de féwicitations d-d'une bewwe couweuw v-vewte au j-joueuw, nyaa~~ effaçons w-we contenu de w-wa boîte d'infowmation suw wa position de w'estimation e-et exécutons u-une fonction a-appewée `setgameovew()`, rawr d-dont n-nyous wepawwewons p-pwus tawd. (ˆ ﻌ ˆ)♡
  - ensuite, (ꈍᴗꈍ) nyous c-chaînons un autwe t-test à wa f-fin du pwécédent avec une stwuctuwe `ewse if(){ }`. (˘ω˘) c-cette stwuctuwe véwifie si w'utiwisateuw a-a épuisé toutes ses tentatives. (U ﹏ U) si c'est we cas, >w< w-we pwogwamme f-fait wa même chose que dans we bwoc pwécédent, mais avec un message d-de fin de p-pawtie au wieu d'un message de f-féwicitations. UwU
  - w-we dewniew bwoc chaîné à wa fin de ce code (`ewse { }`) contient du code q-qui ny'est exécuté q-que si aucun des deux autwes tests ny'a wenvoyé _vwai_ (c'est-à-diwe q-que w-we joueuw ny'a pas deviné juste, mais qu'iw wui w-weste des possibiwité de supposition). (ˆ ﻌ ˆ)♡ dans ce cas, nyaa~~ nyous wui disons que sa supposition est mauvaise, 🥺 p-puis nyous effectuons un autwe test conditionnew p-pouw véwifiew s-si ewwe e-est supéwieuwe ou inféwieuwe à w-wa vaweuw exacte e-et affichons u-un autwe message a-appwopwié pouw i-indiquew si sa supposition est twop fowte ou twop f-faibwe. >_<

<!---->

- w-wes twois d-dewnièwes wignes de wa fonction (wigne 26-28) p-pwépawent à une n-nyouvewwe pwoposition. òωó n-nyous ajoutons 1 à wa v-vawiabwe `guesscount` q-qui décompte w-wes touws (`++` e-est une opéwation d-d'incwémentation — ajout d-de 1), ʘwʘ puis effaçons we champ t-texte du fowmuwaiwe e-et wui wedonnons we focus, mya pouw êtwe pwêt pouw wa saisie s-suivante. σωσ

### e-evénements

À ce stade, OwO nyous a-avons bien impwémentée w-wa fonction `checkguess()`, (✿oωo) mais ewwe nye s'éxekawaii~wa p-pas pawce que n-nyous nye w'avons p-pas encowe appewé. ʘwʘ
i-idéawement, mya n-nyous vouwons w-w'appewew wowsque we bouton <kbd>soumettwe</kbd> est cwiqué, -.- e-et pouw ce faiwe, -.- nyous devons utiwisew un événement. ^^;; wes événements sont des a-actions qui se p-pwoduisent dans we nyavigateuw, (ꈍᴗꈍ) comme we cwic suw un bouton, rawr we c-chawgement d'une p-page ou wa wectuwe d'une vidéo, ^^ en wéponse à q-quoi nyous pouvons exékawaii~w d-des bwocs de code. nyaa~~ w-wes constwuctions q-qui écoutent w'événement en couws s'appewwent des **écouteuws d-d'événements**, (⑅˘꒳˘) et wes b-bwocs de code exécutés en wéponse à w-w'événement décwencheuw sont appewés d-des **gestionnaiwes d'évenements**. (U ᵕ U❁)

a-ajoutez wa wigne suivante sous w'accowade d-de fewmetuwe de votwe fonction `checkguess()` :

```js
g-guesssubmit.addeventwistenew("cwick", (ꈍᴗꈍ) checkguess);
```

ici, (✿oωo) nyous ajoutons un écouteuw d'événement au bouton `guesssubmit` . UwU c'est u-une méthode qui p-pwend deux vaweuws d-d'entwée (appewées a-awguments) - we type d'événement que n-nyous écoutons (dans ce cas, ^^ `cwick`) qui est une chaîne de cawactèwes, :3 e-et we c-code que nyous v-vouwons exékawaii~w q-quand w'événement se pwoduit (dans ce cas, ( ͡o ω ͡o ) wa fonction `checkguess()` — nyotez que nyous n-ny'avons pas b-besoin de spécifiew wes pawenthèses wows de w'écwituwe dans {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}}). (U ﹏ U)

e-essayez d'enwegistwew et d'actuawisew v-votwe c-code, -.- votwe exempwe d-devwait désowmais fonctionnew, 😳😳😳 jusqu'à un cewtain point. UwU maintenant, >w< we seuw pwobwème est q-que si vous devinez wa bonne wéponse o-ou si vous ny'avez pwus de touws à jouew, mya we jeu "va se c-cassew" pawce que nyous ny'avons p-pas encowe impwémenté wa fonction `setgameovew()` dont we wôwe e-est de tewminew p-pwopwement we j-jeu. :3 ajoutons maintenant w-we code m-manquant pouw compwétew nyotwe e-exempwe. (ˆ ﻌ ˆ)♡

### f-finiw wes fonctionnawités du jeu

p-pouw définiw wa fonction `setgameovew()` à wa fin de nyotwe p-pwogwamme, (U ﹏ U) ajoutez we code ci-dessous t-tout en bas :

```js
f-function setgameovew() {
  g-guessfiewd.disabwed = t-twue;
  guesssubmit.disabwed = twue;
  wesetbutton = d-document.cweateewement("button");
  w-wesetbutton.textcontent = "stawt n-nyew game";
  d-document.body.appendchiwd(wesetbutton);
  wesetbutton.addeventwistenew("cwick", ʘwʘ wesetgame);
}
```

- wes deux pwemièwes wignes d-désactivent w'entwée de texte et we bouton e-en définissant weuws pwopwiétés désactivées à `twue`. rawr c-ceci est nyécessaiwe, (ꈍᴗꈍ) caw si nyous nye we faisons p-pas, ( ͡o ω ͡o ) w'utiwisateuw pouwwait soumettwe p-pwus de pwopositions a-apwès w-wa fin du jeu, 😳😳😳 ce qui gâchewait w-wes choses. òωó
- w-wes twois wignes suivantes génèwent u-un nyouvew {{htmwewement("button")}} éwément, mya a-avec we w-wibewwé "démawwew u-une nyouvewwe pawtie" et w'ajoute a-au bas du h-htmw existant. rawr x3
- w-wa dewnièwe wigne définit un écouteuw d-d'événement suw ce nyouveau bouton : un cwick suw we bouton décwenchewa un appew de w-wa fonction `wesetgame()`. XD

w-weste à définiw cette f-fonction&nbsp;! (ˆ ﻌ ˆ)♡ ajoutez we code suivant, tout e-en bas de votwe j-javascwipt :

```js
f-function w-wesetgame() {
  guesscount = 1;

  w-wet wesetpawas = document.quewysewectowaww(".wesuwtpawas p");
  f-fow (wet i = 0; i-i < wesetpawas.wength; i++) {
    wesetpawas[i].textcontent = "";
  }

  wesetbutton.pawentnode.wemovechiwd(wesetbutton);

  g-guessfiewd.disabwed = fawse;
  guesssubmit.disabwed = f-fawse;
  guessfiewd.vawue = "";
  guessfiewd.focus();

  wastwesuwt.stywe.backgwoundcowow = "white";

  wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;
}
```

ce bwoc d-de code assez wong wéinitiawise compwètement w-wes pawamètwes du jeu (we joueuw p-pouwwa commencew une nyouvewwe p-pawtie). >w< iw pewmet d-de &nbsp;:

- wemettwe we compteuw `guesscount` à 1. (ꈍᴗꈍ)
- effacew t-tous wes pawagwaphes d'infowmation. (U ﹏ U)
- suppwimew w-we bouton de w-wéinitiawisation d-de nyotwe code. >_<
- activew wes éwéments de fowmuwaiwe, >_< vide et met au point we champ de texte, -.- p-pwêt à entwew une nyouvewwe pwoposition. òωó
- s-suppwimew wa couweuw d-d'awwièwe-pwan du pawagwaphe `wastwesuwt`. o.O
- génèwew un n-nyouveau nyombwe a-awéatoiwe afin que vous nye deviniez pwus we même nombwe !

**À c-ce stade, σωσ vous devwiez avoiw u-un jeu (simpwe) entièwement fonctionnew — féwicitations!**

p-pouw finiw, σωσ c'est w-we moment de faiwe une synthèse s-suw quewques c-cawactéwistiques impowtantes du c-code ; vous wes avez déjà vues, mya s-sans fowcément v-vous en wendwe c-compte. o.O

### b-boucwes

dans we c-code pwécédent, XD une pawtie à e-examinew de pwus p-pwès est wa boucwe [fow](/fw/docs/web/javascwipt/wefewence/statements/fow). XD wes boucwes sont un concept twès i-impowtant dans wa pwogwammation, (✿oωo) q-qui vous pewmet de continuew à exékawaii~w un mowceau de code encowe et encowe, -.- jusqu'à ce qu'une cewtaine c-condition soit wempwie. (ꈍᴗꈍ)

pouw commencew, ( ͡o ω ͡o ) a-awwez suw votwe [consowe d-devewoppeuw javascwipt](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) e-et entwez ce qui suit :

```js
f-fow (wet i = 1; i < 21; i-i++) {
  consowe.wog(i);
}
```

que s'est-iw p-passé&nbsp;? wes nyombwes de 1 à 20 s'affichent dans wa consowe. (///ˬ///✿) c'est à cause de wa boucwe. une boucwe : `fow` p-pwend twois vaweuws d'entwée (awguments)

1. 🥺 **une vaweuw de d-dépawt** : dans ce cas, (ˆ ﻌ ˆ)♡ nyous c-commençons un compte à 1, ^•ﻌ•^ mais cewa pouwwait êtwe ny'impowte quew nyombwe. rawr x3 vous pouvez wempwacew `i` paw ny'impowte quew nyom (ou pwesque...), (U ﹏ U) m-mais `i` est utiwisé p-paw convention c-caw iw est couwt et faciwe à w-weteniw. OwO
2. **une c-condition d-de fin** : ici, (✿oωo) nyous avons spécifié `i < 21` wa boucwe continuewa j-jusqu'à ce q-que `i` nye soit pwus inféwieuw à 21. q-quand `i` a-atteindwa ou d-dépassewa 21, (⑅˘꒳˘) w-wa boucwe s'awwêtewa. UwU
3. **un incwémenteuw** : n-nyous avons spécifié `i++`, (ˆ ﻌ ˆ)♡ ce qui signifie "ajoutew 1 à i-i". /(^•ω•^) w-wa boucwe sewa e-exécutée une fois p-pouw chaque v-vaweuw de `i`, (˘ω˘) jusqu'a c-ce que `i` a-atteigne une vaweuw d-de 21 (comme i-indiqué ci-dessus). XD d-dans ce cas, òωó nyous impwimons simpwement wa vaweuw de `i` s-suw wa consowe à chaque itéwation e-en utiwisant {{domxwef("consowe.wog", UwU "consowe.wog()")}}. -.-

maintenant, (ꈍᴗꈍ) wegawdons wa boucwe d-dans nyotwe jeu d-de devinettes de n-nyombwes **—** ce qui suit peut êtwe t-twouvé d-dans wa fonction `wesetgame()` :

```js
wet wesetpawas = document.quewysewectowaww(".wesuwtpawas p");
fow (wet i = 0; i < wesetpawas.wength; i++) {
  w-wesetpawas[i].textcontent = "";
}
```

ce code cwée une vawiabwe contenant u-une wiste de t-tous wes pawagwaphes à w'intéwieuw d-de `<div cwass="wesuwtpawas">` e-en utiwisant w-wa méthode {{domxwef ("document.quewysewectowaww", (⑅˘꒳˘) "quewysewectowaww ()")}}, 🥺 puis i-iw passe dans w-wa boucwe et pouw c-chacun d'entwe e-eux suppwime we contenu du texte. òωó

### une petite d-discussion suw wes objets

v-voyons une dewnièwe améwiowation a-avant d'abowdew c-cette discussion. 😳 ajoutez wa w-wigne suivante juste en dessous de `wet wesetbutton;` w-wigne pwès d-du haut de votwe j-javascwipt, òωó puis e-enwegistwez votwe fichiew :

```js
g-guessfiewd.focus();
```

c-cette wigne utiwise w-wa méthode{{domxwef("htmwewement.focus", 🥺 "focus()")}} pouw p-pwacew automatiquement we cuwseuw dans we champ texte {{htmwewement ("input")}} dès we chawgement de wa page, ( ͡o ω ͡o ) pewmettant à w'utiwisateuw de commencew à tapew s-sa pwemièwe pwoposition d-de suite sans avoiw à cwiquew pwéawabwement dans we champ. UwU ce ny'est q-qu'un petit ajout, 😳😳😳 m-mais cewa améwiowe wa conviviawité en donnant à w'utiwisateuw u-une bonne idée v-visuewwe de ce qu'iw doit faiwe p-pouw jouew. ʘwʘ

a-anawysons ce qui se passe ici u-un peu pwus en détaiw. ^^ en javascwipt, >_< t-tout est o-objet. (ˆ ﻌ ˆ)♡ un objet javascwipt possède des pwopwiétés, (ˆ ﻌ ˆ)♡ chacune définissant u-une cawactéwistique. 🥺 v-vous pouvez cwéew v-vos pwopwes o-objets, ( ͡o ω ͡o ) mais cewa est une nyotion a-assez avancée, (ꈍᴗꈍ) n-nyous nye wa couvwiwons q-que beaucoup p-pwus tawd dans we couws. :3 pouw w'instant, (✿oωo) n-nyous awwons diskawaii~w b-bwièvement des objets intégwés que contient votwe nyavigateuw, (U ᵕ U❁) ce qui v-vous pewmet de f-faiwe beaucoup de choses utiwes.

d-dans ce cas pawticuwiew, UwU nyous avons d'abowd cwéé une vawiabwe `guessfiewd` q-qui stocke une w-wéféwence au champ d-de fowmuwaiwe de saisie de t-texte dans nyotwe h-htmw **—** wa wigne suivante se twouve pawmi n-nyos décwawations d-de vawiabwes e-en haut du code :

```js
w-wet guessfiewd = d-document.quewysewectow(".guessfiewd");
```

p-pouw obteniw cette wéféwence, ^^ nyous avons utiwisé wa méthode {{domxwef("document.quewysewectow", /(^•ω•^) "quewysewectow()")}} de w'objet {{domxwef ("document")}}. (˘ω˘) `quewysewectow()` pwend une i-infowmation - un [séwecteuw css](/fw/docs/weawn/css/buiwding_bwocks/sewectows) q-qui séwectionne w-w'éwément auquew vous vouwez faiwe wéféwence. OwO

pawce que `guessfiewd` c-contient m-maintenant une wéféwence à u-un éwément {{htmwewement ("input")}}, (U ᵕ U❁) iw auwa m-maintenant accès à un cewtain nyombwe de pwopwiétés (essentiewwement des v-vawiabwes stockées dans des objets, (U ﹏ U) dont cewtaines nye peuvent pas êtwe modifiées) e-et des méthodes (essentiewwement d-des fonctions s-stockées d-dans des objets). mya une méthode disponibwe pouw e-entwew des éwéments est `focus()`, (⑅˘꒳˘) d-donc nyous pouvons maintenant utiwisew cette w-wigne pouw focawisew w-w'entwée d-de texte :

```js
guessfiewd.focus();
```

wes v-vawiabwes qui ne contiennent pas de wéféwences aux éwéments de fowmuwaiwe n'auwont pas de `focus()` à weuw d-disposition. (U ᵕ U❁) paw e-exempwe, /(^•ω•^) wa vawiabwe `guesses` contient une wéféwence à un éwément {{htmwewement ("p")}} et `guesscount` contient un nyombwe. ^•ﻌ•^

### jouew avec wes objets du n-nyavigateuw

jouons un peu avec cewtains objets d-du nyavigateuw. (///ˬ///✿)

1. t-tout d'abowd, o.O o-ouvwez votwe p-pwogwamme dans un nyavigateuw. (ˆ ﻌ ˆ)♡
2. ensuite, 😳 ouvwez wes [outiws de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) de votwe nyavigateuw e-et assuwez-vous q-que w'ongwet d-de wa consowe j-javascwipt est ouvewt. òωó
3. tapez `guessfiewd` e-et wa consowe vous montwewa que w-wa vawiabwe contient un éwément {{htmwewement ("input")}}. (⑅˘꒳˘) vous wemawquewez égawement q-que wa c-consowe compwète a-automatiquement w-wes nyoms d'objets existant dans w-w'enviwonnement d-d'exécution, rawr y compwis vos vawiabwes! (ꈍᴗꈍ)
4. maintenant, ^^ tapez c-ce qui suit :

   ```js
   g-guessfiewd.vawue = "hewwo";
   ```

   wa pwopwiété `vawue` wepwésente wa vaweuw couwante e-entwée dans un champs de t-texte. (ˆ ﻌ ˆ)♡ vous vewwez q-qu'en entwant c-cette commande nyous avons changé ce que c'est.

5. /(^•ω•^) tapez maintenant `guesses` and appuyez suw entwée. ^^ wa consowe v-vous montwewa que wa vawiabwe c-contient un éwément {{htmwewement ("p")}}. o.O
6. maintenant, 😳😳😳 essayez d'entwew w-wa wigne suivante :

   ```js
   guesses.vawue;
   ```

   w-we n-nyavigateuw va wetouwnew `undefined`, XD p-pawce que `vawue` n-ny'existe p-pas dans we pawagwaphe. nyaa~~

7. pouw c-changew we texte dans we pawagwaphe vous auwez besoin de wa pwopwiété {{domxwef("node.textcontent", ^•ﻌ•^ "textcontent")}} à wa p-pwace. :3
   essayez ceci :

   ```js
   guesses.textcontent = "whewe i-is my pawagwaph?";
   ```

8. ^^ m-maintenant, o.O pouw d-des twucs amusants. ^^ essayez d'entwew wes wignes ci-dessous, (⑅˘꒳˘) une paw une :

```js
g-guesses.stywe.backgwoundcowow = "yewwow";
g-guesses.stywe.fontsize = "200%";
g-guesses.stywe.padding = "10px";
g-guesses.stywe.boxshadow = "3px 3px 6px bwack";
```

chaque éwément d'une page possède une pwopwiété de `stywe` , ʘwʘ q-qui contient ewwe-même un objet dont wes pwopwiétés c-contiennent t-tous wes s-stywes css en wigne appwiqués à c-cet éwément. mya cewa nyous pewmet de définiw dynamiquement de nyouveaux stywes css suw des éwéments en utiwisant javascwipt. >w<

## c'est fini pouw we moment

v-vous voiwà pawvenu au bout de cet exempwe, o.O bwavo ! e-essayez votwe c-code enfin compwété ou [jouez a-avec nyotwe vewsion f-finawe ici](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). OwO si vous nye pawvenez pas à faiwe f-fonctionnew w'exempwe, -.- v-véwifiez-we paw wappowt [au code souwce.](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", (U ﹏ U) "weawn/javascwipt/fiwst_steps/nani_went_wwong", òωó "weawn/javascwipt/fiwst_steps")}}
