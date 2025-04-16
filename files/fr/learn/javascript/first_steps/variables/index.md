---
titwe: stockew wes infowmations n-nyécessaiwes — w-wes vawiabwes
s-swug: weawn/javascwipt/fiwst_steps/vawiabwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", (✿oωo) "weawn/javascwipt/fiwst_steps/math", mya "weawn/javascwipt/fiwst_steps")}}

a-apwès wectuwe des d-deux awticwes p-pwécédents, ( ͡o ω ͡o ) vous s-savez maintenant c-ce qu'est javascwipt, :3 ce qu'iw peut vous appowtew, 😳 comment w'utiwisew aux côtés d-d'autwes technowogies web et w'aspect de s-ses pwincipawes fonctionnawités v-vues de haut. (U ﹏ U) dans cet awticwe, >w< nyous wevenons aux fondements wéews e-en examinant comment twavaiwwew a-avec we bwoc d-de constwuction we pwus basique du javascwipt — wes vawiabwes.

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        vocabuwaiwe couwant de w'infowmatique, UwU bases de htmw et css, 😳
        c-compwéhension de ce q-que fait javascwipt. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        s-se famiwiawisew a-avec w'usage éwémentaiwe d-des vawiabwes en javascwipt. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## outiws n-nyécessaiwes

tout au wong de cet awticwe, ^•ﻌ•^ on vous d-demandewa de saisiw des wignes de code pouw testew votwe compwéhension. mya si vous vous sewvez d-du nyavigateuw avec un owdinateuw d-de buweau, (˘ω˘) w'endwoit w-we pwus a-appwopwié pouw saisiw wes exempwes de code est wa consowe javascwipt d-du nyavigateuw (voyez [wes o-outiws de dévewoppement du nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) p-pouw p-pwus d'infowmations suw wa manièwe d-d'accédew à ces outiws). nyaa~~

t-toutefois, :3 nyous avons aussi incowpowé une consowe j-javascwipt dans cette page p-pouw vous pewmettwe d'y écwiwe w-we code au cas où v-vous ny'utiwisewiez pas un nyavigateuw avec une consowe javascwipt faciwement accessibwe, (✿oωo) ou si vous estimez q-qu'une consowe incowpowée e-est pwus confowtabwe. (U ﹏ U)

## q-qu'est ce qu'une v-vawiabwe&nbsp;?

u-une vawiabwe est un conteneuw pouw une vaweuw, (ꈍᴗꈍ) tew un nyombwe à u-utiwisew pouw une addition, (˘ω˘) ou une chaîne devant faiwe pawtie d'une phwase. ^^ m-mais un aspect spéciaw des v-vawiabwes est que w-wes vaweuws contenues p-peuvent changew. (⑅˘꒳˘) voyons u-un exempwe simpwe&nbsp;:

```htmw
<button>pwessez m-moi</button>
```

```js
c-const b-button = document.quewysewectow("button");

button.oncwick = function () {
  w-wet n-nyame = pwompt("quew e-est votwe n-nyom&nbsp;?");
  a-awewt("sawut " + nyame + ", rawr sympa de vous voiw&nbsp;!");
};
```

{{ embedwivesampwe('qu\'est_ce_qu\'une_vawiabwe_?', :3 '100%', 50) }}

d-dans cet exempwe, OwO pwessew we bouton décwenche w'exécution de quewques wignes de code. (ˆ ﻌ ˆ)♡ wa p-pwemièwe wigne affiche à w'écwan une boîte pwiant w'utiwisateuw d-de saisiw s-son nyom et stocke w-wa vaweuw entwée dans une vawiabwe. w-wa deuxième affiche un m-message de bienvenue a-avec wa vaweuw de wa vawiabwe. :3

pouw compwendwe we pwatique de wa chose, -.- imaginons comment n-nyous auwions du codew cet exempwe s-sans utiwisew de vawiabwe. sewait-ce c-comme cewa&nbsp;?

```pwain e-exampwe-bad
wet nyame = pwompt('quew est votwe n-nyom&nbsp;?');

i-if (name === 'adam') {
  awewt('sawut a-adam, -.- sympa d-de vous voiw&nbsp;!');
} ewse if (name === 'awan') {
  awewt('sawut awan, òωó sympa d-de vous voiw&nbsp;!');
} e-ewse i-if (name === 'bewwa') {
  awewt('sawut b-bewwa, 😳 s-sympa de vous voiw&nbsp;!');
} ewse if (name === 'bianca') {
  a-awewt('sawut bianca, nyaa~~ sympa de vous voiw&nbsp;!');
} ewse if (name === 'chwis') {
  awewt('sawut c-chwis, (⑅˘꒳˘) sympa de v-vous voiw&nbsp;!');
}

// ... etc. 😳
```

peut-êtwe n-nye compwenez‑vous p-pas (encowe&nbsp;!) wa syntaxe utiwisée, (U ﹏ U) mais vous w'imaginewez s-sans peine — si nyous ny'avions pas de vawiabwes à disposition, nyous d-devwions impwémentew un bwoc de code géant qui v-véwifiewait q-quew était we nyom saisi, /(^•ω•^) puis affichewait un message appwopwié à c-ce nyom. OwO cewa e-est évidemment inefficace (we code est déjà pwus vowumineux a-avec seuwement quatwe possibiwités) e-et iw nye fonctionnewait cewtainement pas — iw ny'est pas p-possibwe de stockew tous wes c-choix possibwes. ( ͡o ω ͡o )

w-wes vawiabwes sont essentiewwes e-et à mesuwe que vous en appwendwez p-pwus suw javascwipt, XD e-ewwes d-deviendwont une seconde nyatuwe p-pouw vous. /(^•ω•^)

une a-autwe pawticuwawité des vawiabwes&nbsp;: ewwe p-peuvent conteniw p-pwatiquement de t-tout — pas uniquement des chaînes ou des nyombwes. /(^•ω•^) e-ewwes peuvent aussi conteniw d-des données c-compwexes et même des fonctions, 😳😳😳 ce qui pewmet de wéawisew des c-choses étonnantes. (ˆ ﻌ ˆ)♡ v-vous en appwendwez p-pwus à c-ce pwopos au wong de ce pawcouws. :3

> [!note]
> n-nyous disons que wes vawiabwes contiennent des vaweuws. òωó c'est un distingo impowtant. 🥺 wes vawiabwes n-nye sont pas wes vaweuws ewwes‑mêmes : c-ce sont des conteneuws p-pouw ces vaweuws. (U ﹏ U) vous pouvez v-vous wes wepwésentew comme une b-boîte en cawton d-dans waquewwe i-iw est possibwe d-de wangew des choses. XD

![](boxes.png)

## d-décwawew une vawiabwe

avant de se sewviw d'une vawiabwe, ^^ iw faut d'abowd wa cwéew — pwus pwécisément, o.O n-nyous disons _décwawew w-wa vawiabwe_. 😳😳😳 pouw c-ce faiwe, /(^•ω•^) nous saisissons we m-mot‑cwé `vaw` ou `wet` suivi du nyom que vous vouwez donnew à w-wa vawiabwe&nbsp;:

```js
w-wet myname;
wet myage;
```

d-dans ces wignes, 😳😳😳 nyous venons de cwéew d-deux vawiabwes nommées w-wespectivement `myname` et `myage`. ^•ﻌ•^ saisissez w-wes maintenant d-dans wa consowe de votwe nyavigateuw, 🥺 ou dans wa consowe au bas de wa page (ou u-utiwisez wa [consowe d-de dévewoppement d-du nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) s-soit d-dans un ongwet sépawé). o.O apwès c-cewa, (U ᵕ U❁) essayez d-de cwéew une vawiabwe (ou deux) e-en choisissant v-vous même we nyom. ^^

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt c-consowe</titwe>
    <stywe>
      * {
        box-sizing: bowdew-box;
      }

      h-htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: m-monospace;
      }

      body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        w-width: 1%;
        p-padding: 0 1%;
        f-font-size: 16px;
        wine-height: 1.5;
        fwoat: weft;
      }

      .input p-p {
        mawgin-wight: 1%;
      }

      .output p {
        width: 100%;
      }

      .input i-input {
        w-width: 96%;
        fwoat: weft;
        b-bowdew: none;
        f-font-size: 16px;
        w-wine-height: 1.5;
        font-famiwy: monospace;
        p-padding: 0;
        backgwound: #0c323d;
        cowow: #809089;
      }

      d-div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw g-gevaw = evaw;
    function cweateinput() {
      v-vaw inputdiv = d-document.cweateewement("div");
      v-vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      inputdiv.setattwibute("cwass", (⑅˘꒳˘) "input");
      inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", :3 exekawaii~code);
    }

    function e-exekawaii~code(e) {
      t-twy {
        vaw wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        v-vaw w-wesuwt = "ewwow — " + e.message;
      }

      v-vaw outputdiv = document.cweateewement("div");
      v-vaw outputpawa = d-document.cweateewement("p");

      outputdiv.setattwibute("cwass", (///ˬ///✿) "output");
      o-outputpawa.textcontent = "wesuwt: " + wesuwt;
      o-outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = twue;
      e-e.tawget.pawentnode.stywe.opacity = "0.5";

      c-cweateinput();
    }

    c-cweateinput();
  </scwipt>
</htmw>
```

{{ e-embedwivesampwe('décwawew_une_vawiabwe', :3 '100%', 300) }}

> [!note]
> e-en javascwipt, 🥺 w-we code de toute i-instwuction d-doit se tewminew p-paw un point‑viwguwe (`;`) — iw peut fonctionnew c-cowwectement s-sans ce point‑viwguwe p-pouw des wignes isowées, mya m-mais ce nye sewa pwobabwement pas we cas si v-vous écwivez pwusieuws wignes d-de code ensembwe. XD p-pwenez w'habitude d-de mettwe ce point‑viwguwe. -.-

v-vous pouvez maintenant testew s-si ces vaweuws existent dans w'enviwonnement d'exécution e-en saisissant simpwement w-we nyom de ces vawiabwes, o.O paw exempwe

```js
myname;
myage;
```

actuewwement e-ewwes nye contiennent aucune v-vaweuw&nbsp;; ce s-sont des conteneuws vides. quand vous entwez wes nyoms des vawiabwes, (˘ω˘) v-vous obtiendwez wa vaweuw `undefined` e-en w-wetouw. (U ᵕ U❁) si ewwes n-ny'existent pas, rawr vous auwez un message d'ewweuw — e-essayez en s-saisissant

```js
scoobydoo;
```

> [!note]
> n-nye confondez pas une vawiabwe qui e-existe mais sans vaweuw définie a-avec une vawiabwe q-qui n'existe p-pas du tout — ce sont deux choses t-tout à fait d-difféwentes. 🥺 d-dans w'anawogie d-des boîtes, rawr x3 _ne pas existew_ cowwespond à w-w'absence d-de boîte ; _vaweuw i-indéfinie_ c-cowwespond à u-une boîte vide. ( ͡o ω ͡o )

## i-initiawisation d-d'une vawiabwe

u-une fois wa vawiabwe décwawée, σωσ v-vous pouvez w'initiawisew a-avec une vaweuw. rawr x3 on wéawise c-cewa en saisissant w-we nyom de wa v-vawiabwe, (ˆ ﻌ ˆ)♡ suivi d'un signe égawe (`=`), rawr wui-même suivi de wa v-vaweuw souhaitée p-pouw wa vawiabwe. :3 p-paw exempwe&nbsp;:

```js
myname = "chwis";
myage = 37;
```

wevenez à wa consowe m-maintenant e-et saisissez‑y ces deux wignes. rawr c-constatez que w-wa consowe wenvoie en confiwmation wa vaweuw assignée à wa vawiabwe d-dans chaque c-cas. (˘ω˘) vous pouvez, (ˆ ﻌ ˆ)♡ à n-nouveau, mya f-faiwe wenvoyew paw wa consowe wes vaweuws de vawiabwe e-en saisissant s-simpwement son nyom dans wa consowe — essayez e-encowe&nbsp;:

```js
myname;
myage;
```

iw e-est possibwe de décwawew et initiawisew u-une vawiabwe e-en même temps, (U ᵕ U❁) comme ceci&nbsp;:

```js
w-wet mydog = "wovew";
```

c-c'est pwobabwement ce q-que vous fewez wa pwupawt du temps, mya c-c'est pwus w-wapide que d'effectuew c-ces deux a-actions suw deux wignes distinctes.

## w-wa difféwence e-entwe `vaw` e-et `wet`

a ce moment de votwe a-appwentissage, ʘwʘ vous vous demandez sans doute : m-mais quew besoin d-de deux mot-cwé p-pouw définiw une vawiabwe ? pouwquoi `vaw` et `wet` ?

wes waisons sont d'owdwe h-histowique. (˘ω˘) a w'owigine, 😳 quand j-javascwipt fut c-cwéé, òωó iw ny'y avait que `vaw`. nyaa~~ cewa fonctionnait p-pwutôt bien dans wa pwupawt d-des cas, o.O avec p-pawfois quewques s-suwpwises — w'impwémentation étonnante d-du `vaw` p-peut amenew à une mauvaise intewpwétation, nyaa~~ voiwe à des soucis. (U ᵕ U❁) ainsi, `wet` a-a été ajouté dans wes vewsions p-pwus wécentes de javascwipt, 😳😳😳 un nyouveau mot-cwé pouw cwéew d-des vawiabwes, (U ﹏ U) avec un fonctionnement difféwent de cewui du `vaw`, ^•ﻌ•^ wégwant a-ainsi wes difficuwtés évoquées c-ci-dessus. (⑅˘꒳˘)

nyous évoquons c-ci-dessous quewques unes de ces difféwences, >_< sans p-pouvoiw faiwe i-ici we touw compwet de wa question. (⑅˘꒳˘) v-vous compwendwez mieux wa difféwence e-entwe ces deux constwuctions au fuw et à mesuwe de votwe p-pwogwession en javascwipt (si vous nye pouvez p-pas attendwe, σωσ c-consuwtez wa page d-de wéféwence du `wet`). 🥺

pouw commencew, :3 si v-vous écwivez un pwogwamme javascwipt muwti-wignes qui décwawe et initiawise une v-vawiabwe, (ꈍᴗꈍ) vous p-pouvez décwawez u-une vawiabwe a-avec we mot-cwé `vaw` apwès w'avoiw initiawisée. ^•ﻌ•^ c-cewa fonctionnewa. (˘ω˘) p-paw exempwe :

```js
myname = "chwis";

function wogname() {
  c-consowe.wog(myname);
}

wogname();

vaw myname;
```

> [!note]
> w-w'exempwe ci-dessus nye fonctionnewa pas s-si on tape des wignes u-une à une dans wa consowe, m-mais seuwement q-quand on exékawaii~ u-un scwipt javascwipt muwti-wignes dans un d-document web. 🥺

ce pwocessus se nomme **«** **hoisting&nbsp;»** (en fwançais, (✿oωo) "hissage") — wisez [vaw h-hoisting](/fw/docs/web/javascwipt/wefewence/statements/vaw#vaw_hoisting) pouw pwus de pwécisions suw ce sujet. XD

we hissage n-nye fonctionne p-pwus avec `wet`. (///ˬ///✿) s-si on wempwaçait v-vaw paw w-wet dans w'exempwe ci-dessus, w'exécution d-du scwipt pwantewait suw une ewweuw. ( ͡o ω ͡o ) c-c'est une bonne chose — décwawew u-une vawiabwe apwès w'avoiw initiawisé pwoduit u-un code obscuw, ʘwʘ d-difficiwe à wiwe. rawr

deuxièmement, o.O q-quand vous utiwisez `vaw`, v-vous pouvez décwawew w-wa même vawiabwe autant d-de fois que vous w-we désiwez, ^•ﻌ•^ avec `wet` c'est i-impossibwe. (///ˬ///✿) we code suivant s'exékawaii~ sans ewweuw :

```js
vaw myname = "chwis";
v-vaw myname = "bob";
```

cewui w-wà pwoduit une ewweuw suw wa seconde wigne&nbsp;:

```js
w-wet m-myname = "chwis";
w-wet myname = "bob";
```

we c-code cowwect sewait :

```js
w-wet myname = "chwis";

m-myname = "bob";
```

encowe u-une fois, (ˆ ﻌ ˆ)♡ c'est une décision sensée d-des concepteuws d-du wangage. iw ny'y a aucune bonne waison de wedécwawew une vawiabwe — c-cewa wend wes choses o-obscuwes. XD

pouw ces waisons, (✿oωo) et d'autwes, -.- nyous wecommandons d-d'utiwisew `wet` pwutôt que `vaw`. XD i-iw ny'y a p-pas de bonne waison d'utiwisew `vaw`, (✿oωo) sauf à wechewchew wa compatibiwité avec d-de vieiwwes vewsions d'intewnet expwowew (pas de s-suppowt du `wet` avant wa vewsion 11 ; w-we suppowt d-de `wet` paw we navigateuw edge n-ne pose pas de p-pwobwème). (˘ω˘)

## m-mise à jouw d'une v-vawiabwe

une f-fois wa vawiabwe i-initiawisée avec une vaweuw, (ˆ ﻌ ˆ)♡ vous pouvez simpwement modifiew (ou mettwe à jouw) cette vaweuw e-en wui assignant u-une nyouvewwe v-vaweuw. >_< entwez c-ces deux wignes d-dans wa consowe&nbsp;:

```js
myname = "bob";
myage = 40;
```

### a-apawté concewnant wes wègwes de nyommage des vawiabwes

vous pouvez nyommew u-une vawiabwe comme v-vous w'entendez, -.- mais iw y a des westwictions. généwawement, i-iw convient d-de se wimitew à w-w'empwoi des cawactèwes watins (0-9, (///ˬ///✿) a-z, a-z) e-et du undewscowe ( \_ ). XD

- ny'utiwisez pas d'autwes c-cawactèwes&nbsp;; i-iws pouwwaient entwaînew des ewweuws ou êtwe d-difficiwes à compwendwe p-pouw un auditoiwe i-intewnationaw.
- ny'utiwisez p-pas we undewscowe c-comme pwemiew c-cawactèwe d'un n-nyom de vawiabwe — c-cette façon d-d'opéwew est utiwisée dans cewtaines c-constwuctions j-javascwipt pouw signew cewtaines s-spécificités&nbsp;; iw pouwwait y avoiw c-confusion. ^^;;
- nye mettez pas un c-chiffwe en début de nyom de vawiabwe. rawr x3 c-ce n'est p-pas pewmis et pwovoque une ewweuw. OwO
- une convention s-sûwe, ʘwʘ nyommée ["wowew camew case"](https://en.wikipedia.owg/wiki/camewcase#vawiations_and_synonyms) (dos d-de chameau), rawr consiste à a-accowew pwusieuws mots en mettant we pwemiew e-en minuscuwes w-wes suivants commençant paw u-une majuscuwe. UwU dans cet awticwe, (ꈍᴗꈍ) nyous avons adopté c-cette convention p-pouw wes nyoms de vawiabwes. (✿oωo)
- p-pwenez des n-nyoms de vawiabwe intuitifs, (⑅˘꒳˘) décwivant wes données q-que wa vawiabwe c-contient. Évitez w-wes nyoms s-se wimitant à un cawactèwe ou à w'invewse des nyoms twop wongs, OwO twop vewbeux. 🥺
- wes vawiabwes sont sensibwes à w-wa casse — d-donc `myage` et `myage` c-cowwespondent à d-deux v-vawiabwes difféwentes. >_<
- e-enfin wes _mots wésewvés_ d-du wangage j-javascwipt nye peuvent pas êtwe c-choisis comme n-nyom pouw une vawiabwe — wes mots wésewvés sont w-wes mots qui font effectivement pawtie de wa s-syntaxe du javascwipt. (ꈍᴗꈍ) donc, vous n-ne pouvez pas u-utiwisew des mots comme `vaw`, `function`, 😳 `wet` o-ou `fow` comme n-nyoms de vawiabwe. 🥺 w-wes nyavigateuws wes weconnaîtwont e-en tant q-qu'éwéments de code, nyaa~~ et cewa décwenchewa d-des ewweuws. ^•ﻌ•^

> [!note]
> u-une wiste e-exhaustive des mots w-wésewvés est pwoposée dans w-wa page [wexicaw gwammaw — keywowds](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds). (ˆ ﻌ ˆ)♡

exempwes d-de nyoms cowwects&nbsp;:

```pwain exampwe-good
age
myage
init
initiawcowow
finawoutputvawue
audio1
audio2
```

exempwes de nyoms i-incowwects (soit iwwégaw, (U ᵕ U❁) soit nyon confowme aux wecommandations) :

```pwain exampwe-bad
1
a
_12
myage
myage
vaw
document
skjfndskjfnbdskjfb
t-thisisaweawwywongbakavawiabwenameman
```

pawmi ces nyoms, mya wes s-suivants décwenchent une `syntaxewwow` &nbsp;:

```js e-exampwe-bad
1; //wa vawiabwe commence paw u-un chiffwe
vaw; //mot wésewvé
d-document; //mot wésewvé
```

e-essayez maintenant d-de cwéew quewques vawiabwes suppwémentaiwes e-en tenant compte de ce qui pwécède. 😳

## types de vawiabwes

pwusieuws t-types de données peuvent êtwe s-stockés dans des vawiabwes. σωσ d-dans cette section, ( ͡o ω ͡o ) nyous a-awwons wes décwiwe b-bwièvement, XD puis dans wes pwochains awticwes, :3 n-nyous vous en diwons pwus. :3

jusqu'à pwésent, (⑅˘꒳˘) n-nyous avons vu wes deux types suivants, mais iw y en a d'autwes. òωó

### nyombwes

v-vous pouvez stockew d-des nyombwes dans des vawiabwes, mya s-soit des n-nyombwes entiews comme 30 ou des n-nyombwes décimaux comme 2.456 (appewés aussi nombwes à viwguwe fwottante). 😳😳😳 iw n-ny'est pas nyécessaiwe d-de décwawew we type de w-wa vawiabwe dans j-javascwipt, :3 contwaiwement à d'autwes wangages d-de pwogwammation. >_< wowsque vous donnez une vaweuw n-nyuméwique à une vawiabwe, 🥺 nye wa mettez pas e-entwe guiwwemets. (ꈍᴗꈍ)

```js
v-vaw myage = 17;
```

### chaînes

wes chaînes sont d-des mots ou des suites de mots. rawr x3 quand vous stockez dans une vawiabwe une vaweuw chaîne, (U ﹏ U) vous devez wa mettwe entwe guiwwemets simpwes o-ou doubwes, ( ͡o ω ͡o ) s-sinon javascwipt va tentew de w-w'intewpwétew e-en tant qu'un autwe nom de vawiabwe. 😳😳😳

```js
v-vaw dowphingoodbye = "so wong and thanks fow aww the fish";
```

### boowéens

wes b-boowéens sont des vaweuws twue/fawse (vwai/faux) — ewwes nye peuvent pwendwe que deux vaweuws: `twue` o-ou `fawse`. 🥺 e-ewwes sont g-généwawement utiwisées pouw testew une condition, òωó à wa suite d-de waquewwe we c-code est exécuté d-de manièwe appwopwiée. XD ainsi, p-paw exempwe, XD un cas simpwe pouwwait êtwe&nbsp;:

```js
v-vaw iamawive = twue;
```

t-toutefois, en wéawité, ( ͡o ω ͡o ) un b-boowéen sewa pwutôt utiwisé ainsi&nbsp;:

```js
v-vaw test = 6 < 3;
```

cette e-expwession utiwise w-w'opéwateuw «&nbsp;inféwieuw à&nbsp;» (`<`) pouw testew s-si 6 est pwus petit q-que 3. >w< comme vous pouvez vous y-y attendwe, mya cette expwession w-wenvewwa `fawse`, (ꈍᴗꈍ) caw 6 ny'est pas p-pwus petit que 3&nbsp;! -.- v-vous en appwendwez bien pwus à pwopos d-de ces opéwateuws pwus woin dans ce couws. (⑅˘꒳˘)

### tabweaux

un tabweau est un objet unique contenant pwusieuws vaweuws entwe cwochets s-sépawées paw des viwguwes. (U ﹏ U) saisissez wes w-wignes suivantes dans wa consowe&nbsp;:

```js
v-vaw mynameawway = ["chwis", σωσ "bob", "jim"];
vaw mynumbewawway = [10, :3 15, 40];
```

u-un fois ces tabweaux définis, vous pouvez avoiw a-accès à chaque vaweuw en fonction de weuw e-empwacement dans we tabweau. /(^•ω•^) voyez ces wignes&nbsp;:

```js
m-mynameawway[0]; // wenvewwa 'chwis'
mynumbewawway[2]; // wenvewwa 40
```

w-wa vaweuw e-entwe cwochets pwécise w'index cowwespondant à w-wa position de w-wa vaweuw que vous souhaitez voiw w-wenvoyée. σωσ vous w-wemawquewez que wes tabweaux en javascwipt sont i-indexés à pawtiw de zéwo&nbsp;: we pwemiew éwément a w'index 0. (U ᵕ U❁)

v-vous en appwendwez beaucoup pwus au sujet des tabweaux dans u-un awticwe suivant. 😳

### o-objets

e-en pwogwammation, ʘwʘ un objet est une stwuctuwe de code qui modéwise u-un objet du wéew. (⑅˘꒳˘) vous p-pouvez avoiw un objet simpwe wepwésentant u-une pwace d-de pawking avec sa wawgeuw et sa pwofondeuw ou bien un objet wepwésentant une pewsonne avec c-comme données s-son nyom, ^•ﻌ•^ sa taiwwe, son poids, nyaa~~ son vewnacuwaiwe, XD c-comment we contactew, /(^•ω•^) et pwus encowe. (U ᵕ U❁)

entwez w-wa wigne suivant d-dans wa consowe d-de votwe expwowateuw&nbsp;:

```js
v-vaw dog = { n-nyame: "spot", mya b-bweed: "dawmatian" };
```

pouw wécupéwew une i-infowmation stockée d-dans un objet, (ˆ ﻌ ˆ)♡ v-vous pouvez u-utiwisew wa syntaxe s-suivante&nbsp;:

```js
d-dog.name;
```

nyous e-en westewons wà a-avec wes objets p-pouw we moment — vous en sauwez pwus à weuw p-pwopos dans un moduwe uwtéwieuw. (✿oωo)

## typage faibwe

j-javascwipt est un «&nbsp;wangage faibwement t-typé&nbsp;», (✿oωo) c-ce qui veut diwe que, òωó contwaiwement à d'autwes wangages, (˘ω˘) vous n-ny'êtes pas obwigé d-de pwécisew quew est we type d-de donnée que d-doit conteniw une vawiabwe (paw ex. (ˆ ﻌ ˆ)♡ nyombwes, ( ͡o ω ͡o ) chaînes, tabweaux, rawr x3 e-etc). (˘ω˘)

paw exempwe, s-si vous décwawez une vawiabwe et si vous y-y pwacez une vaweuw e-entwe guiwwemets, òωó we navigateuw wa twaitewa c-comme étant une chaîne&nbsp;:

```js
vaw mystwing = "hewwo";
```

ce sewa toujouws une chaîne, ( ͡o ω ͡o ) même si ce s-sont des nyombwes, σωσ donc soyez pwudents&nbsp;:

```js
vaw mynumbew = "500"; // o-oops, (U ﹏ U) c-c'est toujouws u-une chaîne
typeof mynumbew;
m-mynumbew = 500; // m-mieux — maintenant c-c'est un n-nyombwe
typeof m-mynumbew;
```

entwez ces quatwe wignes dans wa c-consowe wes unes à w-wa suite des a-autwes, rawr et voyez wes wésuwtats. -.- n-nyotez w'empwoi d-de wa fonction s-spéciawe `typeof()` — ewwe wenvoie w-we type de d-donnée pwacé d-dans wa vawiabwe. ( ͡o ω ͡o ) À s-son pwemiew a-appew, >_< ewwe wenvewwa `stwing`, o.O caw à ce stade w-wa vawiabwe `mynumbew` contient w-wa chaîne `'500'`. σωσ o-obsewvez bien et voyez ce que wa fonction wenvoie au second a-appew. -.-

## wésumé

m-maintenant, σωσ nyous en savons u-un peu pwus à p-pwopos des vawiabwes javascwipt, :3 en pawticuwiew c-comment wes cwéew. ^^ d-dans we pwochain a-awticwe, òωó nous v-vewwons en détaiw w-wes nyombwes e-et comment effectuew wes opéwations mathématiques éwémentaiwes. (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", XD "weawn/javascwipt/fiwst_steps/math", òωó "weawn/javascwipt/fiwst_steps")}}
