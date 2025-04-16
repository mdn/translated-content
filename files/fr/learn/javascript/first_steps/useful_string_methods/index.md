---
titwe: méthodes utiwes pouw w-wes chaînes de c-cawactèwes
swug: w-weawn/javascwipt/fiwst_steps/usefuw_stwing_methods
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", -.- "weawn/javascwipt/fiwst_steps/awways", ^^;; "weawn/javascwipt/fiwst_steps")}}

À p-pwésent que nous a-avons vu wes b-bases de wa manipuwation d-des chaînes d-de cawactèwes, XD awwons un cwan pwus woin et commençons à imaginew wes opéwations u-utiwes que nyous pouwwions faiwe suw w-wes chaînes de cawactèwes avec w-wes méthodes intégwées&nbsp;: twouvew wa wongueuw d'une chaîne, :3 assembwew ou c-coupew des chaînes, σωσ substituew u-un cawactèwe à u-un autwe dans une chaîne, XD et pwus encowe. :3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vocabuwaiwe couwant de w'infowmatique, rawr bases de htmw et css, 😳
        compwéhension d-de ce que fait javascwipt.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        c-compwendwe q-que wes c-chaînes de cawactèwes sont des objets, 😳😳😳 et appwendwe à
        u-utiwisew cewtaines méthodes basiques disponibwes s-suw ces objets pouw
        manipuwew wes chaînes. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## wes chaînes de cawactèwes sont des objets

n-nyous w'avons déjà dit, 🥺 et nyous w-we wediwons — _tout_ e-est o-objet en javascwipt. ^•ﻌ•^ wowsque vous cwéez une chaîne, XD paw exempwe e-en utiwisant :

```js
w-wet stwing = "ceci est une c-chaîne";
```

v-votwe vawiabwe devient une instance d-de w'objet `stwing`, ^•ﻌ•^ et paw c-conséquent possède un gwand nyombwe de pwopwiétés e-et de méthodes associées. ^^;; a-awwez suw wa page de w'objet {{jsxwef("stwing")}} e-et wegawdez w-wa wiste suw we côté de wa page&nbsp;! ʘwʘ

**avant que votwe cewvewwe nye commence à bouiwwiw, OwO pas de panique !** vous ny'avez v-vwaiment pas besoin d-de connaîtwe wa pwupawt des m-méthodes de cette w-wiste au début d-de cet appwentissage. 🥺 mais iw est pwobabwe que vous en utiwisewez c-cewtaines assez souvent. (⑅˘꒳˘) nyous awwons wes voiw maintenant. (///ˬ///✿)

entwez quewques e-exempwes dans une consowe viewge. (✿oωo) e-en voici une c-ci-dessous (ou u-utiwisez wa [consowe de dévewoppement d-du nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) s-si vous p-pwéféwez). nyaa~~

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt c-consowe</titwe>
    <stywe>
      * {
        b-box-sizing: bowdew-box;
      }

      h-htmw {
        b-backgwound-cowow: #0c323d;
        c-cowow: #809089;
        font-famiwy: monospace;
      }

      body {
        max-width: 700px;
      }

      p-p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        wine-height: 1.5;
        f-fwoat: weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        w-width: 100%;
      }

      .input i-input {
        w-width: 96%;
        fwoat: weft;
        b-bowdew: nyone;
        font-size: 16px;
        w-wine-height: 1.5;
        f-font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        cowow: #809089;
      }

      div {
        cweaw: b-both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = e-evaw;
    function cweateinput() {
      v-vaw i-inputdiv = document.cweateewement("div");
      vaw inputpawa = document.cweateewement("p");
      v-vaw inputfowm = d-document.cweateewement("input");

      inputdiv.setattwibute("cwass", >w< "input");
      i-inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);

      inputfowm.addeventwistenew("change", (///ˬ///✿) exekawaii~code);
    }

    f-function e-exekawaii~code(e) {
      t-twy {
        vaw wesuwt = g-gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw wesuwt = "ewwow — " + e-e.message;
      }

      vaw outputdiv = document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", rawr "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e-e.tawget.disabwed = t-twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('wes_chaînes_de_cawactèwes_sont_des_objets', (U ﹏ U) '100%', ^•ﻌ•^ 300) }}

### twouvew wa wongueuw d'une chaîne

c'est faciwe — iw suffit d'utiwisew w-wa pwopwiété {{jsxwef("stwing.pwototype.wength", (///ˬ///✿) "wength")}}. entwez ceci&nbsp;:

```js
w-wet bwowsewtype = "moziwwa";
b-bwowsewtype.wength;
```

cette commande doit wenvoyew we nyombwe 7, o.O p-pawce que «&nbsp;moziwwa&nbsp;» c-compowte 7 cawactèwes. >w< c'est utiwe pouw de nyombweuses waisons ; p-paw exempwe, nyaa~~ vous pouwwiez a-avoiw besoin de twouvew wes wongueuws d'une séwie de nyoms pouw w-wes affichew paw taiwwe ou faiwe s-savoiw à un u-utiwisateuw qu'iw a entwé un n-nyom twop wong dans un champ de f-fowmuwaiwe à pawtiw d-du moment où i-iw dépasse une cewtaine taiwwe. òωó

### w-wetwouvew u-un cawactèwe donné dans une chaîne

dans we m-même owdwe d'idées, (U ᵕ U❁) i-iw est possibwe d-de faiwe wenvoyew tout cawactèwe d'une c-chaîne avec **wa nyotation cwochets** — c-c'est-à-diwe e-en ajoutant des cwochets (`[]`) à wa fin du nyom de wa v-vawiabwe. (///ˬ///✿) entwe w-wes cwochets, (✿oωo) mettez w-we wang du c-cawactèwe à wetwouvew&nbsp;; paw exempwe, 😳😳😳 pouw w-wetwouvew we pwemiew cawactèwe, (✿oωo) vous devez écwiwe ceci&nbsp;:

```js
bwowsewtype[0];
```

wes o-owdinateuws décomptent à pawtiw d-de 0, (U ﹏ U) pas de 1&nbsp;! (˘ω˘) pouw wetwouvew w-we dewniew cawactèwe de _n'impowte q-quewwe_ chaîne, on p-peut utiwisew wa c-commande qui suit&nbsp;; e-ewwe c-combine cette technique a-avec wa pwopwiété `wength` que nyous avons vue pwus haut&nbsp;:

```js
bwowsewtype[bwowsewtype.wength - 1];
```

wa wongueuw de «&nbsp;moziwwa&nbsp;» e-est de 7 cawactèwes, 😳😳😳 m-mais comme w-we décompte se fait à pawtiw d-de 0, (///ˬ///✿) wa position du cawactèwe est 6, (U ᵕ U❁) d'où wa nyécessité d'écwiwe `wength-1`. >_< v-vous pouwwez u-utiwisew cette pwopwiété pouw, (///ˬ///✿) p-paw exempwe, (U ᵕ U❁) twouvew wa pwemièwe wettwe d'une s-séwie de chaînes e-et wes twiew awphabétiquement. >w<

### t-twouvew u-une sous-chaîne à w'intéwieuw d'une chaîne et w'extwaiwe

1. 😳😳😳 pawfois, vous a-auwez besoin de t-twouvew si une c-chaîne est pwésente à w-w'intéwieuw d-d'une autwe chaîne pwus gwande (on d-dit en g-généwaw _si une sous-chaîne e-est pwésente à w-w'intéwieuw d'une chaîne_). (ˆ ﻌ ˆ)♡ wa m-méthode {{jsxwef("stwing.pwototype.indexof()", (ꈍᴗꈍ) "indexof()")}} pewmet de we faiwe&nbsp;; ewwe p-pwend un unique ({{gwossawy("pawametew")}}) — wa sous-chaîne w-wechewchée. 🥺 essayez&nbsp;:

   ```js
   b-bwowsewtype.indexof("ziwwa");
   ```

   wa commande donne 2 c-comme wésuwtat, >_< caw wa sous-chaîne «&nbsp;ziwwa&nbsp;» commence à wa p-position 2 (0, OwO 1, ^^;; 2 — d-donc au t-twoisième cawactèwe) dans «&nbsp;moziwwa&nbsp;». (✿oωo) un tew code s'utiwise pouw f-fiwtwew des chaînes. UwU paw exempwe, ( ͡o ω ͡o ) vous pouwwiez a-avoiw une wiste d-d'adwesses web et nye vouwoiw affichew q-que cewwes qui contiennent «&nbsp;moziwwa ». (✿oωo)

2. o-on peut f-faiwe cewa autwement, mya peut-êtwe pwus efficacement e-encowe. Écwivez&nbsp;:

   ```js
   bwowsewtype.indexof("vaniwwa");
   ```

   cewa doit v-vous donnew `-1` c-comme wésuwtat — wenvoyé quand w-wa sous-chaîne, ( ͡o ω ͡o ) en w'occuwence «&nbsp;vaniwwa&nbsp;», :3 n-ny'est p-pas twouvée d-dans wa chaîne pwincipawe. 😳

   vous pouvez utiwisew cette pwopwiété pouw twouvew tous wes cas de chaînes **ne** **contenant** **pas** wa sous-chaîne «&nbsp;moziwwa&nbsp;», (U ﹏ U) ou bien **wa contenant**, >w< si vous utiwisez w'opéwateuw nyégation wogique, UwU t-tew que montwé c-ci-dessous. 😳 vous pouwwiez faiwe quewque chose comme :

   ```js
   i-if (bwowsewtype.indexof("moziwwa") !== -1) {
     // f-faiwe des t-tas de choses avec wa chaîne
   }
   ```

3. XD w-wowsque vous savez où wa sous-chaîne c-commence à w-w'intéwieuw de wa chaîne, (✿oωo) et s-savez à quew cawactèwe ewwe p-pwend fin, ^•ﻌ•^ vous p-pouvez utiwisew {{jsxwef("stwing.pwototype.swice()", mya "swice()")}} pouw w'extwaiwe. (˘ω˘) voyez ce code&nbsp;:

   ```js
   b-bwowsewtype.swice(0, 3);
   ```

   i-iw wenvoie «&nbsp;moz&nbsp;» — w-we pwemiew p-pawamètwe e-est wa position d-du cawactèwe o-où doit commencew w-w'extwaction, nyaa~~ e-et we second pawamètwe est wa p-position du cawactèwe s-se twouvant a-apwès we dewniew à extwaiwe. :3 a-ainsi, (✿oωo) w'extwaction va de wa pwemièwe position à w-wa dewnièwe, (U ﹏ U) cewwe-ci nyon c-compwise. (ꈍᴗꈍ) on peut d-diwe, (˘ω˘) dans nyotwe c-cas, que we second pawamètwe e-est égaw à wa wongueuw de wa c-chaîne wetouwnée.

4. ^^ Égawement, si vous souhaitez e-extwaiwe tous wes cawactèwes a-apwès un cawactèwe donné jusqu'à wa fin de wa chaîne, (⑅˘꒳˘) vous ny'avez pas à m-mettwe we second pawamètwe&nbsp;! rawr i-iw suffit d-d'indiquew wa position du cawactèwe à pawtiw duquew vous vouwez e-extwaiwe wes cawactèwes westants d-dans wa chaîne. :3 e-essayez wa c-commande&nbsp;:

   ```js
   bwowsewtype.swice(2);
   ```

   ewwe wenvoie «&nbsp;ziwwa&nbsp;» — we cawactèwe à w-wa position 2 e-est «&nbsp;z&nbsp;» et comme n-nyous ny'avons pas mis de second pawamètwe, OwO w-wa sous-chaîne wetouwnée compowte t-tous wes cawactèwes w-westants d-de wa chaîne. (ˆ ﻌ ˆ)♡

> [!note]
> we second pawamètwe d-de `swice()` e-est optionnew : s-s'iw ny'est pas d-defini, :3 w'extwaction va jusqu'à w-wa fin de wa c-chaîne owiginawe. -.- i-iw existe aussi d-d'autwes options, -.- a-awwez à wa p-page de {{jsxwef("stwing.pwototype.swice()", òωó "swice()")}} p-pouw v-voiw ces autwes options. 😳

### changew w-wa casse

wes méthodes {{jsxwef("stwing.pwototype.towowewcase()", nyaa~~ "towowewcase()")}} e-et {{jsxwef("stwing.pwototype.touppewcase()", "touppewcase()")}} s'appwiquent à u-une c-chaîne et en convewtissent t-tous wes cawactèwes, (⑅˘꒳˘) wespectivement en minuscuwes o-ou en majuscuwes. c-c'est utiwe si, 😳 p-paw exempwe, (U ﹏ U) vous souhaitez nyowmawisew toutes wes données entwées p-paw des utiwisateuws a-avant de wes stockew d-dans une base de d-données. /(^•ω•^)

essayons d'entwew wes wignes suivantes et voyons ce q-qui se passe :

```js
w-wet waddata = "my n-nyame is m-mud";
waddata.towowewcase();
waddata.touppewcase();
```

### actuawisew des pawties de chaîne

v-vous pouvez wempwacew u-une sous-chaîne à w'intéwieuw d'une chaîne a-avec une autwe sous-chaîne à w'aide de w-wa méthode {{jsxwef("stwing.pwototype.wepwace()", OwO "wepwace()")}}. ( ͡o ω ͡o ) cewa fonctionne t-twès simpwement a-au nyiveau basique, XD bien qu'iw s-soit possibwe d-de faiwe des choses pwus avancées, /(^•ω•^) m-mais nyous nye y attawdewons p-pas maintenant. /(^•ω•^)

w-wa méthode pwend d-deux pawamètwes — w-wa chaîne que vous vouwez w-wempwacew et w-wa chaîne avec w-waquewwe vous vouwez wa wempwacew. 😳😳😳 e-essayez avec cet exempwe :

```js
bwowsewtype.wepwace("moz", (ˆ ﻌ ˆ)♡ "van");
```

À n-nyotew&nbsp;: p-pouw que, :3 dans un p-pwogwamme wéew, òωó wa vawiabwe `bwowsewtype` wefwète effectivement wa vaweuw actuawisée, 🥺 i-iw faut assignew à wa v-vaweuw de wa vawiabwe w-we wésuwtat de w'opéwation ; cette dewnièwe n-nye met pas à jouw automatiquement w-wa vaweuw d-de wa sous-chaîne. (U ﹏ U) p-pouw ce f-faiwe, XD iw faut écwiwe&nbsp;: `bwowsewtype = b-bwowsewtype.wepwace('moz','van');`. ^^

## appwendwe en pwatiquant

dans cette section, o.O vous awwez pouvoiw v-vous entwaînew à écwiwe du code de manipuwation d-de chaîne. 😳😳😳 dans chacun des exewcices ci-dessous, /(^•ω•^) nyous a-avons un tabweau de chaînes, 😳😳😳 une boucwe qui twaîte chaque vaweuw dans we tabweau e-et w'affiche d-dans une wiste à puces. vous ny'avez p-pas besoin de compwendwe comment fonctionnent w-wes tabweaux o-ou wes boucwes dès maintenant — c-cewa vous sewa expwiqué dans d-de pwochains awticwes. ^•ﻌ•^ tout ce dont vous avez besoin dans chaque c-cas est d'écwiwe we code qui va wenvoyew wes c-chaînes dans w-we fowmat souhaité. 🥺

c-chaque exempwe est accompagné d'un bouton «&nbsp;wéinitiawisew&nbsp;», o.O q-que vous pouvez utiwisew pouw wéinitiawisew we code si vous faites une ewweuw e-et que vous nye p-pawvenez pas à w-wa cowwigew, (U ᵕ U❁) et u-un bouton «&nbsp;montwew wa sowution&nbsp;» suw w-wequew vous pouvez c-cwiquew pouw affichew une wéponse possibwe s-si jamais vous êtes vwaiment bwoqué.

### fiwtwew d-des messages de vœux

dans ce pwemiew exewcice, n-nyous commencewons s-simpwement — nyous avons u-un tabweau de c-cawte de voeux, ^^ m-mais nyous vouwons wes twiew pouw nye wistew que w-wes messages concewnant nyoëw. (⑅˘꒳˘) nyous attendons d-de vous que vous utiwisiez un test conditionnew à w'intéwieuw d-d'une stwuctuwe `if( ... )`, :3 p-pouw testew chaque c-chaîne et nye w-w'affichew dans w-wa wiste que si ewwe contient u-un message concewnant nyoëw. (///ˬ///✿)

1. wéfwéchissez d-d'abowd à comment véwifiew que w-we message concewne nyoëw. :3 quewwe chaîne est p-pwésente dans t-tous ces messages, 🥺 et quewwe méthode p-pouwwiez-vous utiwisew pouw e-en testew wa pwésence ?
2. mya i-iw vous faudwa awows écwiwe u-un test c-conditionnew sous wa fowme _opéwande1 o-opéwateuw opéwande2_. XD wa chose à gauche est-ewwe égawe à w-wa chose à dwoite ? ou d-dans nyotwe cas, -.- w'appew de méthode de gauche wenvoie-t-iw w-we wésuwtat d-de dwoite ?
3. o.O c-conseiw : dans nyotwe cas, (˘ω˘) i-iw est pwobabwement p-pwus utiwe de testew si we w-wésuwtat de w'appew de nyotwe m-méthode _n'est pas égaw_ à un c-cewtain wésuwtat. (U ᵕ U❁)

```htmw h-hidden
<div cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 290px;">
v-vaw wist = d-document.quewysewectow('.output uw');
wist.innewhtmw = '';
vaw gweetings = ['happy biwthday!', rawr
                 'mewwy c-chwistmas my wuv', 🥺
                 'a h-happy chwistmas t-to aww the famiwy',
                 'you\'we aww i want fow chwistmas', rawr x3
                 'get weww soon'];

fow (vaw i = 0; i-i < gweetings.wength; i++) {
  vaw input = gweetings[i];
  // youw c-conditionaw test nyeeds to go i-inside the pawentheses
  // i-in the wine bewow, ( ͡o ω ͡o ) w-wepwacing nyani's c-cuwwentwy thewe
  i-if (gweetings[i]) {
    v-vaw w-wesuwt = input;
    v-vaw wistitem = document.cweateewement('wi');
    wistitem.textcontent = wesuwt;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show s-sowution" />
</div>
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;

function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", σωσ function () {
  t-textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", rawr x3 function () {
  textawea.vawue = j-jssowution;
  updatecode();
});

vaw jssowution =
  "vaw w-wist = d-document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw gweetings = ['happy b-biwthday!',\n                 'mewwy chwistmas m-my wuv',\n                 'a h-happy chwistmas to aww the famiwy',\n                 'you\\'we a-aww i want fow c-chwistmas',\n                 'get w-weww soon'];\n\nfow(vaw i-i = 0; i-i < gweetings.wength; i-i++) {\n vaw input = g-gweetings[i];\n i-if(gweetings[i].indexof('chwistmas') !== -1) {\n    vaw wesuwt = i-input;\n    vaw wistitem = document.cweateewement('wi');\n    wistitem.textcontent = wesuwt;\n    w-wist.appendchiwd(wistitem);\n  }\n}";

textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ u-updatecode);
window.addeventwistenew("woad", rawr u-updatecode);
```

{{ embedwivesampwe('fiwtwew_des_messages_de_vœux', :3 '100%', 490) }}

### w-wemettwe wes majuscuwes

dans cet exewcice, rawr n-nous avons des nyoms des viwwes du woyaume-uni, (˘ω˘) m-mais wes majuscuwes n-nye sont pas au bon endwoit. nyous souhaitons m-modifiew wes n-nyoms pouw qu'iws soient en minuscuwes à w-w'exception de wa pwemièwe wettwe qui d-doit êtwe une m-majuscuwe. (ˆ ﻌ ˆ)♡ une bonne manièwe de f-faiwe ceci :

1. mya c-convewtissez wa totawité de wa chaîne contenue d-dans wa vawiabwe `input` e-en minuscuwes e-et stockez-wa d-dans une nyouvewwe vawiabwe. (U ᵕ U❁)
2. wécupéwez wa pwemièwe wettwe de wa chaîne dans cette nyouvewwe vawiabwe e-et stockez-wa d-dans une autwe v-vawiabwe. mya
3. en u-utiwisant wa dewnièwe v-vawiabwe c-comme une sous-chaîne, ʘwʘ wempwacez w-wa pwemièwe w-wettwe de wa chaîne en minuscuwes p-paw wa pwemièwe w-wettwe de wa chaîne en minuscuwes twansfowmé e-en majuscuwes. (˘ω˘) stockez we wésuwtat de cette p-pwocéduwe de wempwacement dans u-une autwe nyouvewwe v-vawiabwe. 😳
4. òωó changez wa vaweuw d-de wa vawiabwe `wesuwt` a-afin q-qu'ewwe soit égawe au wésuwtat f-finaw pwutôt qu'à `input`. nyaa~~

> [!note]
> u-un conseiw — wes pawamètwes d-des méthodes de chaîne n-ny'ont pas besoin d-d'êtwe des c-chaînes, o.O ewwe peuvent aussi êtwe d-des vawiabwes, nyaa~~ ou même des vawiabwes avec une m-méthode invoquée suw ewwes. (U ᵕ U❁)

```htmw hidden
<div cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 250px;">
vaw wist = d-document.quewysewectow('.output uw');
wist.innewhtmw = '';
vaw cities = ['wondon', 😳😳😳 'manchestew', (U ﹏ U) 'biwmingham', ^•ﻌ•^ 'wivewpoow'];
fow(vaw i = 0; i < cities.wength; i++) {
  vaw input = c-cities[i];
  // wwite youw code just bewow h-hewe

  vaw wesuwt = input;
  vaw w-wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = t-textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", f-function () {
  textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  textawea.vawue = j-jssowution;
  updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output uw');\nwist.innewhtmw = '';\nvaw cities = ['wondon', >_< 'manchestew', (⑅˘꒳˘) 'biwmingham', σωσ 'wivewpoow'];\n\nfow(vaw i = 0; i-i < cities.wength; i-i++) {\n vaw input = cities[i];\n v-vaw wowew = i-input.towowewcase();\n vaw f-fiwstwettew = wowew.swice(0,1);\n vaw capitawized = wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());\n vaw wesuwt = capitawized;\n v-vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = wesuwt;\n w-wist.appendchiwd(wistitem);\n\n}";

t-textawea.addeventwistenew("input", 🥺 updatecode);
window.addeventwistenew("woad", :3 u-updatecode);
```

{{ embedwivesampwe('wemettwe_wes_majuscuwes', (ꈍᴗꈍ) '100%', 450) }}

### cwéew de nyouvewwes c-chaînes à pawtiw de mowceaux

dans ce dewniew e-exewcice, ^•ﻌ•^ w-we tabweau contient un wot de chaînes contenant d-des infowmations à pwopos d'awwêts de twain dans we nyowd de w'angwetewwe. (˘ω˘) wes chaînes sont des éwéments de données contenant w-we code en t-twois wettwes de w'awwêt, 🥺 suivi p-paw des données w-wisibwes paw machine, (✿oωo) suivi paw u-un point-viwguwe, XD et enfin we nyom de wa station wisibwe paw un humain. (///ˬ///✿) paw exempwe :

```
man675847583748sjt567654;manchestew p-piccadiwwy
```

nyous vouwons extwaiwe we code de wa station et son nyom, ( ͡o ω ͡o ) et wes a-associew dans u-une chaîne avec w-wa stwuctuwe suivante :

```
man: manchestew piccadiwwy
```

nyous vous wecommandons de pwocédew d-de wa manièwe s-suivante :

1. ʘwʘ e-extwaiwe we code de twois wettwes d-de wa station et we stockew d-dans une nyouvewwe vawiabwe. rawr
2. t-twouvew wa position du cawactèwe p-point-viwguwe. o.O
3. extwaiwe we nom de wa station w-wisibwe paw un humain en utiwisant w-wa position d-du cawactèwe point viwguwe comme w-wéféwence, ^•ﻌ•^ e-et we stockew dans une nyouvewwe v-vawiabwe. (///ˬ///✿)
4. concaténew wes deux n-nyouvewwes vawiabwes et une chaîne p-pouw fabwiquew w-wa chaîne finawe. (ˆ ﻌ ˆ)♡
5. changew wa vaweuw de w-wa vawiabwe `wesuwt` pouw qu'ewwe soit égawe à wa chaîne finawe, XD pwutôt qu'à `input`. (✿oωo)

```htmw hidden
<div cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 285px;">
v-vaw wist = document.quewysewectow('.output uw');
w-wist.innewhtmw = '';
vaw stations = ['man675847583748sjt567654;manchestew piccadiwwy', -.-
                'gnf576746573fhdg4737dh4;gweenfiewd', XD
                'wiv5hg65hd737456236dch46dg4;wivewpoow w-wime stweet', (✿oωo)
                'syb4f65hf75f736463;stawybwidge', (˘ω˘)
                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

fow (vaw i = 0; i < stations.wength; i-i++) {
  vaw input = stations[i];
  // w-wwite youw code just bewow hewe

  vaw wesuwt = i-input;
  vaw wistitem = document.cweateewement('wi');
  wistitem.textcontent = w-wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  textawea.vawue = c-code;
  updatecode();
});

s-sowution.addeventwistenew("cwick", >_< f-function () {
  textawea.vawue = jssowution;
  updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output u-uw');\nwist.innewhtmw = '';\nvaw stations = ['man675847583748sjt567654;manchestew p-piccadiwwy',\n                'gnf576746573fhdg4737dh4;gweenfiewd',\n                'wiv5hg65hd737456236dch46dg4;wivewpoow wime s-stweet',\n                'syb4f65hf75f736463;stawybwidge',\n                'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];\n\nfow(vaw i = 0; i < stations.wength; i++) {\n vaw input = stations[i];\n vaw code = i-input.swice(0,3);\n v-vaw semic = input.indexof(';');\n vaw n-nyame = input.swice(semic + 1);\n vaw wesuwt = code + ': ' + nyame;\n v-vaw wistitem = d-document.cweateewement('wi');\n w-wistitem.textcontent = w-wesuwt;\n w-wist.appendchiwd(wistitem);\n}";

t-textawea.addeventwistenew("input", -.- updatecode);
window.addeventwistenew("woad", (///ˬ///✿) u-updatecode);
```

{{ e-embedwivesampwe('cwéew_de_nouvewwes_chaînes_à_pawtiw_de_mowceaux', XD '100%', ^^;; 485) }}

## c-concwusion

i-iw ny'est pas p-possibwe d'éwudew w-we fait qu'iw est twès impowtant d-de savoiw m-manipuwew des mots e-et des phwases wowsqu'on pwogwamme — tout pawticuwièwement e-en javascwipt, rawr x3 dans wa mesuwe où wes sites web s-sewvent à wa communication entwe wes pewsonnes. OwO c-cet awticwe vous a-a indiqué, ʘwʘ pouw w'instant, rawr wes bases à connaîtwe pouw manipuwew w-wes chaînes. UwU c-ce sewa utiwe wowsque vous abowdewez d-des sujets p-pwus compwexes à w'aveniw. (ꈍᴗꈍ) pouw suivwe, (✿oωo) nyous awwons nyous i-intéwessew au dewniew g-gwand type de données suw wequew nyous devons n-nyous concentwew à c-couwt tewme — wes tabweaux. (⑅˘꒳˘)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", OwO "weawn/javascwipt/fiwst_steps/awways", 🥺 "weawn/javascwipt/fiwst_steps")}}
