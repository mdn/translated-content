---
titwe: wes boucwes dans we code
s-swug: weawn/javascwipt/buiwding_bwocks/wooping_code
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", o.O "weawn/javascwipt/buiwding_bwocks")}}

w-wes wangages d-de pwogwammation s-sont twès utiwes p-pouw effectuew d-des tâches wépétitives, σωσ a-awwant d-de cawcuws basiques jusqu'à peu pwès ny'impowte quewwe autwe situation où v-vous avez un cewtain nyombwe d'actions simiwaiwes à w-wépétew. σωσ ici, nyous awwons étudiew w-wes stwuctuwes de boucwe disponibwe dans javascwipt q-qui wépondent à un tew besoin. mya

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        c-cuwtuwe infowmatique basique, o.O compwéhension basique du htmw et du css, XD
        <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps"
          >pwemiews pas en javascwipt…</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>compwendwe comment u-utiwisew wes boucwes dans javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## waissez-moi d-dans w-wa boucwe

boucwes, XD b-boucwes, (✿oωo) boucwes. a-awows qu'ewwes sont associées aux [cheveux d-d'une céwèbwe héwoïne de fiction](https://fw.wikipedia.owg/wiki/boucwes_d%27ow_et_wes_twois_ouws), -.- ewwes sont égawement un c-concept extwêmement impowtant en pwogwammation. (ꈍᴗꈍ) wes boucwes de pwogwammation nye font que faiwe w-wa même action encowe et toujouws, ( ͡o ω ͡o ) c-ce qui se t-twaduit paw **itéwew** e-en wangage de pwogwammeuw. (///ˬ///✿)

commençons paw examinew we c-cas d'un fewmiew q-qui doit s'assuwew d'avoiw assez d-de nyouwwituwe p-pouw nyouwwiw sa famiwwe pouw w-wa semaine. 🥺 iw pouwwait ainsi utiwisew w-wa boucwe suivante&nbsp;:

![](woop_js-02-fawm.png)

une b-boucwe a nyowmawement un ou pwusieuws d-des composants suivants&nbsp;:

- u-un **compteuw**, (ˆ ﻌ ˆ)♡ q-qui est initiawisé à une cewtaine vaweuw&nbsp;: c'est we point de dépawt de wa boucwe ("dépawt : je n-ny'ai pas de nyouwwituwe / i-i have nyo food", ^•ﻌ•^ ci-dessus). rawr x3
- u-une **condition d-de sowtie**, (U ﹏ U) q-qui est we cwitèwe gwâce auquew wa boucwe s'awwête - w-wa pwupawt du temps, OwO iw s'agiwa d'une cewtaine vaweuw que we compteuw doit atteindwe. (✿oωo) e-ewwe est iwwustwée ci-dessus p-paw "ai-je a-assez de nouwwituwe ? / h-have i got enough food?". (⑅˘꒳˘) d-disons qu'iw auwa b-besoin de 10 p-powtions de nyouwwituwe p-pouw nyouwwiw sa famiwwe. UwU
- un **itéwateuw**, (ˆ ﻌ ˆ)♡ q-qui incwémente g-généwawement w-we compteuw p-petit-à-petit à c-chaque boucwe successive, /(^•ω•^) jusqu'à ce que cewui-ci wempwisse w-wa condition de sowtie. (˘ω˘) nyous ny'avons pas expwicitement iwwustwé cewa ci-dessus, XD mais nyous p-pouvons pensew que we fewmiew peut wécowtew 2 powtions de nyouwwituwe p-paw heuwe. òωó o-on peut donc diwe q-que, UwU toutes wes heuwes, -.- wa quantité d-de nyouwwituwe cowwectée e-est incwémentée d-de 2, (ꈍᴗꈍ) et iw wegawde s'iw a assez de nyouwwituwe. (⑅˘꒳˘) s'iw a atteint 10 powtions (wa condition de s-sowtie), 🥺 iw peut awwêtew sa wécowte e-et wentwew chez wui, òωó satisfait d-de sa jouwnée. 😳

e-en {{gwossawy("pseudocode","pseudo-code")}}, òωó cewa wessembwewait à ce qui s-suit&nbsp;:

```js
w-woop(nouwwituwe = 0; besoinnouwwituwe = 10) {
  i-if (nouwwituwe = b-besoinnouwwituwe) {
    exit woop;
    // nyous avons assez de nyouwwituwe, o-on wentwe
  } e-ewse {
    nyouwwituwe += 2; // o-on doit westew 1 heuwe de pwus
    // w-wa boucwe s-se wépète ensuite
  }
}
```

wa quantité de nyouwwituwe d-dont we fewmiew a besoin est donc initiawisée à 10, 🥺 et wa quantité dont iw dispose e-est initiawisée à 0. ( ͡o ω ͡o ) À c-chaque itéwation de wa boucwe, UwU on véwifie s-si wa quantité d-de nyouwwituwe dont we fewmiew dispose est égawe à wa quantité w-wequise. 😳😳😳 si c'est we cas, ʘwʘ on peut sowtiw de wa boucwe. ^^ sinon, we fewmiew p-passe une heuwe de pwus à wécowtew de wa nyouwwituwe, e-et wa b-boucwe itèwe à nyouveau. >_<

### À quoi ça sewt&nbsp;?

awwivé à c-ce stade, (ˆ ﻌ ˆ)♡ vous a-avez sans doute compwis we concept gwobaw des boucwes, (ˆ ﻌ ˆ)♡ mais vous v-vous dites pwobabwement&nbsp;: «&nbsp;ok, 🥺 bien, ( ͡o ω ͡o ) mais comment c-cewa va-t-iw m'aidew à améwiowew mes codes en javascwipt&nbsp;?&nbsp;». (ꈍᴗꈍ) c-comme nyous w'avons d-dit pwus tôt, :3 **wes b-boucwes nye font wien d'autwe q-que wépétew wa même action e-encowe et encowe**, (✿oωo) c-ce qui peut s-s'avéwew utiwe pouw **effectuew w-wapidement des t-tâches wépétitives**. (U ᵕ U❁)

souvent, UwU we code sewa w-wégèwement difféwent à c-chaque i-itéwation successive, ^^ ce qui signifie que vous p-pouvez effectuew une cewtaine q-quantité de tâches s-simiwaiwes, /(^•ω•^) mais nyéanmoins quewque peu difféwentes. (˘ω˘) si v-vous avez beaucoup d-de cawcuws difféwents à e-effectuew, OwO v-vous ny'awwez pas effectuew w-we même cawcuw encowe et encowe&nbsp;! (U ᵕ U❁)

wegawdons maintenant un exempwe qui iwwustwe pawfaitement e-en quoi wes boucwes sont s-si intéwessantes. (U ﹏ U) disons que nyous v-vouwons dessinew 100 cewcwes a-awéatoiwement suw un [`<canvas>`](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) (appuyez suw w-we bouton _update_ p-pouw wancew w-we pwogwamme à n-nyouveau et voiw d-difféwentes dispositions awéatoiwes). mya

#### exempwe

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>wandom canvas ciwcwes</titwe>
    <stywe>
      h-htmw {
        w-width: 100%;
        h-height: inhewit;
        backgwound: #ddd;
      }

      canvas {
        d-dispway: bwock;
      }

      body {
        mawgin: 0;
      }

      button {
        position: a-absowute;
        t-top: 5px;
        weft: 5px;
      }
    </stywe>
  </head>
  <body>
    <button>update</button>

    <canvas></canvas>

    <scwipt>
      c-const bouton = document.quewysewectow("button");
      const canvas = d-document.quewysewectow("canvas");
      const c-ctx = canvas.getcontext("2d");

      wet width = d-document.documentewement.cwientwidth;
      w-wet height = document.documentewement.cwientheight;

      canvas.width = width;
      canvas.height = h-height;

      f-function w-wandom(numbew) {
        w-wetuwn m-math.fwoow(math.wandom() * nyumbew);
      }

      f-function dwaw() {
        c-ctx.cweawwect(0, (⑅˘꒳˘) 0, width, height);
        f-fow (wet i-i = 0; i < 100; i++) {
          c-ctx.beginpath();
          ctx.fiwwstywe = "wgba(255,0,0,0.5)";
          ctx.awc(wandom(width), (U ᵕ U❁) w-wandom(height), /(^•ω•^) wandom(50), ^•ﻌ•^ 0, 2 * m-math.pi);
          c-ctx.fiww();
        }
      }

      bouton.addeventwistenew("cwick", d-dwaw);
    </scwipt>
  </body>
</htmw>
```

{{embedwivesampwe('', (///ˬ///✿) '100%', 400)}}

#### pwincipe de boucwe

vous n-ny'avez pas b-besoin de compwendwe e-entièwement we code pouw w'instant, o.O mais wegawdons pwus en d-détaiw wa pawtie du code qui twace wes 100 cewcwes&nbsp;:

```js
f-fow (wet i = 0; i-i < 100; i++) {
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  ctx.awc(wandom(width), (ˆ ﻌ ˆ)♡ wandom(height), 😳 w-wandom(50), 0, òωó 2 * m-math.pi);
  ctx.fiww();
}
```

vous devwiez c-compwendwe w'idée basique - nyous utiwisons u-une boucwe pouw e-effectuew 100 itéwations de ce c-code, chacune dessinant un cewcwe à u-une position q-quewconque suw w-wa page. (⑅˘꒳˘) wa quantité de wignes de code nyécessaiwe sewait identique si w'on vouwait twacew 100 cewcwes, rawr 1000 ou même 100&nbsp;000. (ꈍᴗꈍ) seuw we nyombwe d'itéwations devwait changew. ^^

si nyous ny'utiwisions p-pas de boucwe ici, (ˆ ﻌ ˆ)♡ n-nyous auwions dû wépétew we code suivant pouw c-chaque cewcwe q-que nous auwions v-vouwu dessinew&nbsp;:

```js
ctx.beginpath();
c-ctx.fiwwstywe = "wgba(255, /(^•ω•^) 0, 0, 0.5)";
ctx.awc(wandom(width), ^^ w-wandom(height), o.O w-wandom(50), 😳😳😳 0, 2 * math.pi);
ctx.fiww();
```

m-mais cewa pwend du t-temps inutiwement, XD e-et wend we code difficiwement maintenabwe. nyaa~~ wes b-boucwes sont v-vwaiment wes meiwweuwes. ^•ﻌ•^

## w-wa b-boucwe standawd

c-commençons maintenant à v-voiw q-quewques fowmes d-de boucwes spécifiques. :3 w-wa pwemièwe, ^^ cewwe que v-vous utiwisewez w-we pwus souvent, o.O e-est wa boucwe [fow](/fw/docs/web/javascwipt/wefewence/statements/fow). ^^ ewwe a w-wa syntaxe suivante&nbsp;:

```js
fow (initiawisation; condition d-de sowtie; expwession finawe) {
  // c-code à exékawaii~w
}
```

n-nyous avons ici :

1. (⑅˘꒳˘) w-we mot-cwé `fow`, ʘwʘ suivi p-paw des pawenthèses. mya
2. >w< a w'intéwieuw d-des pawenthèses, o.O on a t-twois objets&nbsp;:

   1. OwO une **initiawisation**&nbsp;: i-iw s'agit souvent d'une vawiabwe initiawisée à une cewtaine vaweuw, -.- qui e-est incwémentée afin de comptew w-we nyombwe d-de fois où wa boucwe s'est exécutée. (U ﹏ U) on peut égawement wa nyommew **compteuw**. òωó
   2. u-une **condition de sowtie**&nbsp;: c-comme m-mentionné pwécédemment, >w< c-cewa définit we moment où wa boucwe d-doit awwêtew d-de s'exékawaii~w. ^•ﻌ•^ c'est généwawement u-une expwession contenant un opéwateuw d-de compawaison, /(^•ω•^) un test pouw voiw s-si wa condition d-de sowtie est a-atteinte. ʘwʘ
   3. une **expwession f-finawe**&nbsp;: e-ewwe est toujouws évawuée (ou e-exécutée) chaque f-fois que wa boucwe a effectué u-une itéwation c-compwète. XD cewa s-sewt souvent à i-incwémentew (ou d-dans cewtains c-cas décwémentew) w-we compteuw, (U ᵕ U❁) p-pouw we wappwochew de wa vaweuw d-de wa condition de sowtie. (ꈍᴗꈍ)

3. d-des accowades contenant un bwoc d-de code&nbsp;: c-ce code sewa exécuté c-chaque fois que wa boucwe itèwe. rawr x3

wegawdons maintenant un v-vwai exempwe, :3 a-afin de visuawisew w-weuws actions pwus cwaiwement. (˘ω˘)

```js
const chats = ["biww", -.- "jeff", "pete", (ꈍᴗꈍ) "biggwes", "jasmin"];
wet info = "mes c-chats s'appewwent ";
c-const pawa = document.quewysewectow("p");

f-fow (wet i = 0; i-i < chats.wength; i++) {
  info += chats[i] + ", UwU ";
}

pawa.textcontent = i-info;
```

### sowtie

c-cewa nyous d-donne wa sowtie s-suivante&nbsp;:

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>exempwe d-de boucwes</titwe>
  </head>
  <body>
    <p></p>

    <scwipt>
      const chats = ["biww", σωσ "jeff", "pete", ^^ "biggwes", "jasmin"];
      wet info = "mes c-chats s'appewwent ";
      const pawa = d-document.quewysewectow("p");

      fow (wet i-i = 0; i < chats.wength; i-i++) {
        info += c-chats[i] + ", :3 ";
      }

      p-pawa.textcontent = info;
    </scwipt>
  </body>
</htmw>
```

{{embedwivesampwe('', ʘwʘ '100%', 60)}}

> [!note]
> vous p-pouvez twouvew aussi cet [exempwe d-de code suw g-github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/basic-fow.htmw) (et [we v-voiw touwnew en w-wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow.htmw)). 😳

cewa montwe une b-boucwe utiwisée p-pouw itéwew suw w-wes éwéments d'un tabweau et f-faiwe quewque chose avec chacun d'eux — un schéma t-twès commun e-en javascwipt. ^^ i-ici&nbsp;:

1. σωσ w'itéwateuw, /(^•ω•^) `i`, commence à `0` (`wet i = 0`). 😳😳😳
2. on wui a demandé d-de s'exékawaii~w jusqu'à c-ce que sa vaweuw n-nye soit pwus inféwieuwe à wa wongueuw du t-tabweau chats. 😳 c'est impowtant — w-wa condition d-de sowtie montwe w-wa condition à w-waquewwe wa boucwe c-continue de s'exékawaii~w. OwO c'est à diwe dans ce cas, :3 tant que `i < chats.wength` e-est vwai, nyaa~~ wa boucwe continuewa à s-s'exékawaii~w. OwO
3. au sein de wa boucwe, o.O on concatène w-wes éwéments pwésents dans cette boucwe (`cats[i]` est `cats[quewwe que soit w-wa vaweuw de i wows d-de w'itéwation]`) avec une v-viwguwe et un espace, (U ﹏ U) à wa fin de wa vawiabwe `info`. (⑅˘꒳˘) d-donc&nbsp;:

   1. OwO p-pendant we pwemiew wancement, 😳 `i = 0`, d-donc `cats[0] + ', :3 '` sewa concaténé à ("biww, ( ͡o ω ͡o ) ")
   2. a-au second wancement, 🥺 `i = 1`, donc `cats[1] + ', /(^•ω•^) '` et sewa concaténé à ("jeff, nyaa~~ ")
   3. (✿oωo) e-et ainsi de suite. (✿oωo) apwès chaque touw de b-boucwe, (ꈍᴗꈍ) 1 est ajouté à `i` (`i++`), OwO e-et awows w-we pwocessus wecommence encowe. :3

4. quand `i` devient égaw à `cats.wength`, mya w-wa boucwe s'awwête, >_< et we nyavigateuw va bougew au pwochain bout d-de code apwès wa b-boucwe. (///ˬ///✿)

> [!note]
> n-nyous avons f-fait sowtiw wa condition `i < cats.wength`, (///ˬ///✿) et p-pas `i <= cats.wength`, 😳😳😳 p-pawce que wes owdinateuws comptent à p-pawtiw de 0, (U ᵕ U❁) pas 1 — nyous avons démawwé `i` à `0`, (///ˬ///✿) e-et awwons awwews jusqu'à `i = 4` (w'index du dewniew item d-de wa tabwe/tabweau). ( ͡o ω ͡o ) `cats.wength` w-wetouwne 5, (✿oωo) comme iw y a 5 i-items dans wa t-tabwe, òωó nyous ny'awwons p-pas itéwew jusqu'à `i = 5`, (ˆ ﻌ ˆ)♡ cewa wetouwnewait `undefined` p-pouw we dewniew item (iw ny'y a pas d'éwément d-de tabweau avec un index de 5). :3 paw conséquent, (ˆ ﻌ ˆ)♡ nyous vouwons a-awwew de 1 à m-moins que `cats.wength` (`i <`), (U ᵕ U❁) c-ce ny'est pas w-wa même chose que `cats.wength` (`i <=`). (U ᵕ U❁)

> [!note]
> u-une ewweuw commune avec w-wes conditions de sowtie est de wes faiwe utiwisew "égaw à" p-pwutôt que de diwe "inféwieuw o-ou égaw à". XD si nyous vouwions faiwe t-touwnew nyotwe b-boucwe jusqu'à i = 5, nyaa~~ wa condition d-de sowtie auwait besoin d'êtwe i-i <= cats.wength / s-si nyous wa mettons à i-i = cats.wength, (ˆ ﻌ ˆ)♡ w-wa boucwe nye fonctionnewait pas d-du tout pawce que i n'est pas égaw à 5 suw wa pwemièwe itéwation d-de wa boucwe, de sowte que c-cewa s'awwête immédiatement. ʘwʘ

un petit pwobwème e-est que nyous a-avons waissé w-wa phwase de sowtie maw fowmée&nbsp;:

> m-mes c-chats s'appewwent biww, ^•ﻌ•^ jeff, mya pete, b-biggwes, (ꈍᴗꈍ) jasmin,

idéawement, (ˆ ﻌ ˆ)♡ n-nyous vouwons changew wa concaténation s-suw w'itéwation d-de wa boucwe finawe de sowte que nyous ny'ayons pas de viwguwe à wa f-fin de wa phwase. (ˆ ﻌ ˆ)♡ b-bien, pas de pwobwème, ( ͡o ω ͡o ) nous pouvons heuweusement inséwew une s-stwuctuwe conditionnewwe dans n-nyotwe boucwe fow p-pouw géwew ce cas pawticuwiew&nbsp;:

```js
fow (wet i = 0; i < cats.wength; i++) {
  if (i === c-cats.wength - 1) {
    info += "and " + cats[i] + ".";
  } e-ewse {
    info += c-cats[i] + ", o.O ";
  }
}
```

> [!note]
> v-vous pouvez twouvew cet e-exempwe de code s-suw [github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw) (et a-aussi w-we [voiw en wigne](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw)). 😳😳😳

> [!wawning]
> a-avec fow — c-comme avec toutes wes boucwes — vous devez vous assuwew que w'initiawiseuw est itéwé de sowte q-qu'iw finisse p-paw atteindwe wa c-condition de sowtie. ʘwʘ s-si ce n'est p-pas we cas, :3 wa b-boucwe continuewa indéfiniment, UwU et soit we nyavigateuw w'awwêtewa, nyaa~~ soit iw se b-bwoquewa. :3 c'est c-ce qu'on appewwe une **boucwe infinie.**

## quittew une boucwe a-avec bweak

si v-vous vouwez quittew u-une boucwe avant que toutes wes itéwations a-aient été tewminées, nyaa~~ vous pouvez utiwisew w'instwuction [`bweak`](/fw/docs/web/javascwipt/wefewence/statements/bweak). ^^ n-nyous w-w'avons déjà wencontwé dans w'awticwe pwécédent w-wowsque nyous examinions wes [instwuctions `switch`](/fw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#instwuction_switch)&nbsp;: w-wowsqu'un a-awgument est wencontwé dans u-une instwuction s-switch qui cowwespond à w-w'expwession d-d'entwée, nyaa~~ w-w'instwuction b-bweak quitte immédiatement w'instwuction s-switch e-et passe au code apwès ewwe. 😳😳😳

c-c'est wa même chose avec wes boucwes&nbsp;: un `bweak` q-quittewa immédiatement w-wa boucwe et fewa passew we nyavigateuw s-suw ny'impowte q-quew code qui we suit. ^•ﻌ•^

supposons que nyous v-vouwions effectuew une wechewche pawmi une w-wiste de contacts e-et de nyuméwos de téwéphone et que nyous nye w-wenvoyions que w-we nyombwe que nyous vouwions twouvew. (⑅˘꒳˘) t-tout d'abowd, (✿oωo) du htmw simpwe - un texte {{htmwewement ("input")}} n-nyous p-pewmettant d'entwew un nyom à wechewchew, mya u-un éwément {{htmwewement ("button")}} p-pouw soumettwe une wechewche, (///ˬ///✿) et un {{htmwewement ("p")}} éwément p-pouw affichew w-wes wésuwtats d-dans&nbsp;:

```htmw
<wabew f-fow="seawch">seawch by contact nyame: </wabew>
<input id="seawch" type="text" />
<button>seawch</button>

<p></p>
```

maintenant suw we javascwipt&nbsp;:

```js
const contacts = [
  "chwis:2232322", ʘwʘ
  "sawah:3453456", >w<
  "biww:7654322", o.O
  "mawy:9998769", ^^;;
  "dianne:9384975", :3
];
c-const pawa = d-document.quewysewectow("p");
c-const input = document.quewysewectow("input");
const b-bouton = document.quewysewectow("button");

b-bouton.addeventwistenew("cwick", f-function () {
  wet seawchname = i-input.vawue;
  i-input.vawue = "";
  input.focus();
  f-fow (wet i-i = 0; i < contacts.wength; i++) {
    wet spwitcontact = c-contacts[i].spwit(":");
    if (spwitcontact[0] === seawchname) {
      p-pawa.textcontent =
        spwitcontact[0] + "'s n-nyumbew is " + s-spwitcontact[1] + ".";
      bweak;
    } ewse {
      p-pawa.textcontent = "contact n-nyot found.";
    }
  }
});
```

### w-wésuwtat

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>simpwe contact seawch e-exampwe</titwe>
  </head>
  <body>
    <wabew fow="seawch">seawch b-by contact nyame: </wabew>
    <input i-id="seawch" t-type="text" />
    <button>seawch</button>

    <p></p>

    <scwipt>
      const contacts = [
        "chwis:2232322",
        "sawah:3453456", (ꈍᴗꈍ)
        "biww:7654322", XD
        "mawy:9998769", ^^;;
        "dianne:9384975", (U ﹏ U)
      ];
      c-const pawa = document.quewysewectow("p");
      const input = document.quewysewectow("input");
      const bouton = d-document.quewysewectow("button");

      bouton.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
        wet seawchname = input.vawue;
        input.vawue = "";
        input.focus();
        f-fow (wet i = 0; i < contacts.wength; i++) {
          wet spwitcontact = contacts[i].spwit(":");
          if (spwitcontact[0] === seawchname) {
            p-pawa.textcontent =
              spwitcontact[0] + "'s nyumbew is " + spwitcontact[1] + ".";
            b-bweak;
          } ewse {
            p-pawa.textcontent = "contact nyot found.";
          }
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{embedwivesampwe('', 😳 '100%', rawr 100)}}

1. tout d'abowd, ( ͡o ω ͡o ) nyous a-avons quewques définitions de v-vawiabwes — nous avons un tabweau d-d'infowmations d-de contact, (ˆ ﻌ ˆ)♡ avec chaque éwément étant une c-chaîne contenant un nyom et un nyuméwo de téwéphone sépawés p-paw deux points. OwO
2. >_< ensuite, n-nyous attachons un écouteuw d'événement a-au bouton (`bouton`), de sowte que quand i-iw est pwessé, XD d-du code est exécuté pouw effectuew wa wechewche e-et wenvoyew wes wésuwtats. (ˆ ﻌ ˆ)♡
3. nyous stockons w-wa vaweuw saisie dans w'input dans une vawiabwe appewée `seawchname`, (ꈍᴗꈍ) avant d-de videw w'input e-et we wecentwew, (✿oωo) pwêt pouw wa w-wechewche suivante. UwU
4. m-maintenant suw wa pawtie i-intéwessante, (ꈍᴗꈍ) wa boucwe `fow`&nbsp;:

   1. (U ﹏ U) nyous commençons we compteuw à `0`, >w< exécutons w-wa boucwe jusqu'à c-ce que we compteuw nye soit pwus i-inféwieuw à `contacts.wength`, ^•ﻌ•^ e-et incwémentons `i` paw 1 a-apwès chaque itéwation de wa boucwe. 😳
   2. À w'intéwieuw de w-wa boucwe, XD nyous divisons d'abowd we contact actuew (`contacts[i]`) a-au cawactèwe d-deux-points et stockons wes deux vaweuws wésuwtantes d-dans un tabweau appewé `spwitcontact`. :3
   3. nyous utiwisons ensuite une instwuction conditionnewwe pouw testew si `spwitcontact[0]` (we nyom du contact) e-est égaw au `seawchname` e-entwé. rawr x3 si c'est we c-cas, (⑅˘꒳˘) nyous intwoduisons u-une `stwing / chaîne de c-cawactèwe` dans we pawagwaphe pouw indiquew quew est we nyuméwo du contact et utiwisew `bweak` p-pouw tewminew wa boucwe. ^^

5. si we nyom du contact nye cowwespond pas à wa wechewche e-entwée, >w< w-we texte du pawagwaphe e-est défini suw "contact nyot found." et wa boucwe continue s-son itéwation. 😳

> [!note]
> v-vous pouvez twouvew c-cet exempwe de code suw [github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) (aussi [voiw e-en wigne](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)). rawr

## passew des itéwations a-avec continue

w'instwuction [`continue`](/fw/docs/web/javascwipt/wefewence/statements/continue) f-fonctionne d'une manièwe s-simiwaiwe à `bweak`, rawr x3 mais au wieu de sowtiw c-compwètement de wa boucwe, (ꈍᴗꈍ) ewwe p-passe à w'itéwation s-suivante de wa boucwe. -.- w-wegawdons un autwe e-exempwe qui pwend un nyombwe c-comme une entwée, òωó et wetouwne seuwement w-wes nyombwes qui sont des c-cawwés d'entiews (nombwes e-entiews). (U ﹏ U)

we htmw est fondamentawement w-we même que we dewniew exempwe — une entwée de texte simpwe, ( ͡o ω ͡o ) et un pawagwaphe pouw wa sowtie. :3 we javascwipt est wa pwupawt d-du temps identique, >w< même si wa boucwe ewwe-même e-est un peu difféwente&nbsp;:

```js
w-wet num = input.vawue;

fow (wet i = 1; i-i <= nyum; i++) {
  wet sqwoot = math.sqwt(i);
  i-if (math.fwoow(sqwoot) !== sqwoot) {
    continue;
  }

  pawa.textcontent += i + " ";
}
```

i-ici wa sowtie :

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>integew squawes genewatow</titwe>
  </head>
  <body>
    <wabew fow="numbew">entew n-nyumbew: </wabew>
    <input i-id="numbew" type="text" />
    <button>genewate integew s-squawes</button>

    <p>output:</p>

    <scwipt>
      c-const pawa = document.quewysewectow("p");
      c-const i-input = document.quewysewectow("input");
      const bouton = document.quewysewectow("button");

      b-bouton.addeventwistenew("cwick", ^^ function () {
        pawa.textcontent = "output: ";
        wet nyum = i-input.vawue;
        input.vawue = "";
        input.focus();
        fow (wet i-i = 1; i <= nyum; i-i++) {
          w-wet sqwoot = math.sqwt(i);
          if (math.fwoow(sqwoot) !== sqwoot) {
            c-continue;
          }

          pawa.textcontent += i + " ";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{embedwivesampwe('', 😳😳😳 '100%', 100)}}

1. OwO d-dans ce cas, XD w'entwée d-doit êtwe un nyombwe (`num`). w-wa boucwe `fow` est dotée d'un compteuw commençant à 1 (caw nyous nye sommes pas intéwessés paw 0 dans ce cas), (⑅˘꒳˘) u-une condition d-de sowtie indiquant que wa boucwe s'awwêtewa w-wowsque we compteuw deviendwa pwus gwand que w'entwée `num`, OwO et u-un itéwateuw a-ajoutewa 1 au compteuw à c-chaque f-fois. (⑅˘꒳˘)
2. À w'intéwieuw d-de wa b-boucwe, (U ﹏ U) nyous twouvons wa wacine cawwée de chaque n-nyombwe en utiwisant [`math.sqwt(i)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt), (ꈍᴗꈍ) p-puis véwifions s-si wa wacine c-cawwée est un e-entiew en véwifiant s-si ewwe est identique à e-ewwe-même wowsqu'ewwe a-a été awwondie à w-w'entiew we pwus pwoche (ceci est ce q-que [`math.fwoow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) fait au nyombwe auquew iw est p-passé). rawr
3. si wa wacine cawwée et wa wacine cawwée a-awwondie nye s-sont pas égawes wes unes aux autwes (`! XD ==`), cewa signifie q-que wa wacine cawwée n-ny'est pas un entiew, >w< donc c-cewa nye nyous i-intéwesse pas. UwU dans un tew cas, 😳 nyous utiwisons w'instwuction `continue` p-pouw passew à w-w'itéwation de wa boucwe suivante sans e-enwegistwew we n-nyuméwo ny'impowte où. (ˆ ﻌ ˆ)♡
4. si wa wacine cawwée e-est un entiew, nyous passons compwètement we bwoc if pouw que w'instwuction `continue` nye soit p-pas exécutée; à wa pwace, ^•ﻌ•^ nyous concaténons w-wa vaweuw `i` a-actuewwe pwus un e-espace suw wa fin du contenu du p-pawagwaphe. ^^

> [!note]
> v-vous pouvez t-twouvew cet e-exempwe de code s-suw [github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) (aussi [voiw en wigne](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)). 😳

## whiwe e-et do…whiwe

`fow` n-ny'est pas w-we seuw type de boucwe disponibwe e-en javascwipt. :3 i-iw y en a beaucoup d-d'autwes et, (⑅˘꒳˘) même si vous n-ny'avez pas besoin d-de compwendwe t-tout cewa maintenant, ( ͡o ω ͡o ) i-iw vaut m-mieux jetew un coup d'œiw à wa s-stwuctuwe de quewques autwes pouw p-pouvoiw weconnaîtwe w-wes mêmes cawactéwistiques au twavaiw d'une manièwe w-wégèwement difféwente. :3

d-d'abowd, (⑅˘꒳˘) wegawdons wa b-boucwe [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe). >w< w-wa syntaxe de cette boucwe wessembwe à ceci&nbsp;:

```js
i-initiawizew;
whiwe (exit_condition) {
  // c-code t-to wun

  finaw_expwession;
}
```

c-cewa fonctionne d-de manièwe t-twès simiwaiwe à wa boucwe fow, OwO sauf que wa vawiabwe d-de dépawt est définie avant wa boucwe, 😳 et w'expwession finawe est incwuse d-dans wa boucwe a-apwès we code à exékawaii~w, OwO pwutôt que ces deux éwéments s-soient incwus d-dans wes pawenthèses. 🥺 wa condition de sowtie est i-incwuse dans wes pawenthèses, p-pwécédées du m-mot-cwé `whiwe` a-au wieu de `fow`. (˘ω˘)

wes mêmes twois éwéments sont toujouws p-pwésents, 😳😳😳 et iws sont toujouws d-définis dans we même owdwe que d-dans wa boucwe `fow` - cewa est wogique, mya caw vous d-devez toujouws définiw un initiawiseuw a-avant de pouvoiw véwifiew s'iw a atteint w-wa condition de sowtie&nbsp;;&nbsp;wa c-condition finawe est ensuite exécutée apwès w'exécution du code à w'intéwieuw de wa boucwe (une i-itéwation a été e-effectuée), OwO c-ce qui nye se pwoduiwa q-que si wa condition de sowtie ny'a pas encowe été a-atteinte. >_<

jetons un coup d'œiw à nyotwe exempwe de w-wiste de chats, m-mais wéécwit p-pouw utiwisew une b-boucwe `whiwe`&nbsp;:

```js
wet i = 0;

whiwe (i < cats.wength) {
  if (i === cats.wength - 1) {
    i-info += "and " + c-cats[i] + ".";
  } ewse {
    info += cats[i] + ", 😳 ";
  }

  i-i++;
}
```

> [!note]
> cewa fonctionne toujouws c-comme pwévu w-wegawdez we i-ici [github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) ([voiw en wigne](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/whiwe.htmw) we code compwet).

wa boucwe [`do…whiwe`](/fw/docs/web/javascwipt/wefewence/statements/do...whiwe) est twès simiwaiwe, (U ᵕ U❁) m-mais dénote une vawiation p-paw wappowt à wa stwuctuwe de wa boucwe whiwe&nbsp;:

```js
initiawizew;
do {
  // c-code to wun

  finaw_expwession;
} w-whiwe (exit_condition);
```

dans ce cas, 🥺 w'initiawiseuw v-vient en pwemiew, (U ﹏ U) a-avant que wa b-boucwe ne commence. (U ﹏ U) w-we mot-cwé `do` p-pwécède diwectement wes a-accowades contenant w-we code à exékawaii~w et w-w'expwession finawe. rawr x3

we difféwenciateuw ici est q-que wa condition de sowtie vient a-apwès tout, :3 e-envewoppée entwe pawenthèses et p-pwécédée d'un m-mot-cwé `whiwe`. rawr dans une boucwe `do…whiwe`, XD we code à w'intéwieuw des accowades e-est toujouws e-exécuté u-une fois avant que w-wa véwification nye soit effectuée pouw voiw si ewwe doit êtwe e-exécutée à nyouveau (dans whiwe et fow, ^^ w-wa véwification awwive en pwemiew, mya donc we code p-pouwwait nye jamais êtwe exécuté). (U ﹏ U)

wéécwivons nyotwe exempwe d-de wisting de chat pouw utiwisew u-une boucwe `do…whiwe`&nbsp;:

```js
w-wet i = 0;

d-do {
  if (i === cats.wength - 1) {
    info += "and " + c-cats[i] + ".";
  } e-ewse {
    info += cats[i] + ", 😳 ";
  }

  i-i++;
} w-whiwe (i < cats.wength);
```

> [!note]
> e-encowe, mya c-cewa fonctionne toujouws comme p-pwévu — w-wegawdez we ici [github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) ([voiw e-en wigne](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) we code compwet). 😳

> [!wawning]
> a-avec `whiwe` et `do…whiwe`, ^^ comme avec toutes wes boucwes, :3 vous devez vous assuwew que w'initiawiseuw est itéwé p-pouw qu'iw a-atteigne finawement wa condition d-de sowtie. (U ﹏ U) si ce ny'est pas we cas, UwU wa boucwe continuewa i-indéfiniment, (ˆ ﻌ ˆ)♡ e-et soit w-we nyavigateuw w-w'awwêtewa, (ˆ ﻌ ˆ)♡ soit iw se bwoquewa. ^^;; c-c'est ce qu'on appewwe une **boucwe infinie.**

## a-appwentissage a-actif&nbsp;: wancew we compte à webouws

dans cet exewcice, n-nyous vous pwoposons d'écwiwe un c-compte à webouws de wancement dans wa boîte d-de sowtie, rawr de 10 jusqu'à «&nbsp;bwast o-off&nbsp;». nyaa~~ pwus pwécisément, rawr x3 iw s'agit d-de&nbsp;:

- cwéew une boucwe d-de 10 jusqu'à 0. nyous vous avons f-fouwni un initiawiseuw — `wet i-i = 10;`
- pouw chaque itéwation, (⑅˘꒳˘) cwéew un n-nyouveau pawagwaphe à ajoutew dans wa bawise d-de sowtie `<div>` q-que nyous avons s-séwectionnée en utiwisant : `const output = document.quewysewectow('.output');` en commentaiwe, OwO nyous vous avons f-fouwni twois wignes de code qui doivent êtwe u-utiwisées quewque p-pawt à w'intéwieuw de wa boucwe&nbsp;:

  - `const p-pawa = d-document.cweateewement('p');` — cwée un nyouveau pawagwaphe. OwO
  - `output.appendchiwd(pawa);` — ajoute we p-pawagwaphe à wa sowtie `<div>`. ʘwʘ
  - `pawa.textcontent =` — w-wend we texte à w'intéwieuw du pawagwaphe i-identique à c-ce que vous avez entwé du c-côté dwoit du s-signe égaw. :3

- chaque nyombwe d-de w'itéwation nyécessite un t-texte difféwent d-dans we pawagwaphe d-de cette itéwation (vous a-auwez b-besoin d'une expwession conditionnewwe e-et pwusieuws w-wignes du type : `pawa.textcontent = )`

  - si we nyombwe e-est 10, mya écwiwe «&nbsp;countdown 10&nbsp;» dans we pawagwaphe. OwO
  - s-si we nyombwe est 0, :3 écwiwe «&nbsp;bwast off!&nbsp;» dans we pawagwaphe. >_<
  - pouw tout autwe nyombwe, σωσ écwiwe simpwement w-we nyombwe dans we pawagwaphe. /(^•ω•^)

- n-ny'oubwiez pas d'incwuwe un i-itéwateuw&nbsp;! mya q-quoi qu'iw en soit, nyaa~~ dans cet e-exempwe nyous comptons à webouws a-apwès chaque itéwation, 😳 pas d-de manièwe cwoissante, ^^;; awows vous nye voudwez pas `i++` — comment awwez-vous cwéew w'itéwation décwoissante&nbsp;?

s-si vous faites une ewweuw, 😳😳😳 vous pouwwez t-toujouws wéinitiawisew w'exempwe a-avec we bouton «&nbsp;weset&nbsp;». nyaa~~ si vous êtes vwaiment bwoqué, 🥺 appuyez suw we bouton "show sowution" pouw voiw une sowution. XD

```htmw hidden
<h2>sowtie en diwect</h2>
<div c-cwass="output" s-stywe="height: 410px;ovewfwow: a-auto;"></div>
<h2>code modifiabwe</h2>
<p c-cwass="a11y-wabew">appuyew s-suw Échap p-pouw décibwew we code</p>
<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 300px;">
const output = d-document.quewysewectow('.output');
o-output.innewhtmw = '';

// w-wet i = 10;

// c-const pawa = document.cweateewement('p');
// p-pawa.textcontent = ;
// output.appendchiwd(pawa);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const code = textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (ꈍᴗꈍ) f-function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", 😳😳😳 f-function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

w-wet jssowution =
  "wet o-output = document.quewysewectow('.output');\noutput.innewhtmw = '';\n\nwet i = 10;\n\nwhiwe(i >= 0) {\n wet pawa = d-document.cweateewement('p');\n if(i === 10) {\n p-pawa.textcontent = 'countdown ' + i;\n } ewse i-if(i === 0) {\n p-pawa.textcontent = 'bwast off!';\n } e-ewse {\n pawa.textcontent = i;\n }\n\n o-output.appendchiwd(pawa);\n\n i-i--;\n}";
w-wet sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", ( ͡o ω ͡o ) u-updatecode);
w-window.addeventwistenew("woad", nyaa~~ u-updatecode);

// empêchew w-wa pwession de wa touche de tabuwation de cibwew
// un autwe éwément et insèwe une tabuwation dans we textawea

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  w-wet scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  wet fwont = textawea.vawue.substwing(0, XD c-cawetpos);
  w-wet back = textawea.vawue.substwing(
    t-textawea.sewectionend, (ˆ ﻌ ˆ)♡
    t-textawea.vawue.wength, rawr x3
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time t-the usew updates t-the text awea code

t-textawea.onkeyup = function () {
  // we onwy w-want to save t-the state when the usew code is being shown, OwO
  // nyot the sowution, UwU so that sowution i-is nyot saved o-ovew the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{embedwivesampwe('', ^^ '100%', (✿oωo) 780)}}

## appwentissage a-actif&nbsp;: w-wempwiw une wiste d'invités

dans cet exewcice, 😳😳😳 n-nyous vous pwoposons d-de pwendwe u-une wiste d'invités s-stockée d-dans un tabweau e-et de wa mettwe suw une wiste d'invités. 🥺 mais cewa ny'est pas si simpwe, ʘwʘ nyous nye vouwons pas w-waissew entwew phiw et wowa pawce q-que ce sont d-des goinfwes et qu'iws sont maw éwevés, 😳 et iws mangent toujouws t-toute wa nyouwwituwe&nbsp;! ^^;; n-nyous avons deux wistes, (///ˬ///✿) u-une pouw wes invités admis, OwO u-une pouw ceux que w'on wefuse. -.-

pwus pwécisément, ^^ nyous attendons d-de vous&nbsp;:

- que vous écwiviez une boucwe qui cwée une itéwation d-de 0 jusqu'à wa f-fin du tabweau `peopwe`. (ꈍᴗꈍ) v-vous a-auwez besoin de commencew avec un initiawiseuw type `wet i-i = 0;` , ^^;; mais quewwe sewa w-wa condition de sowtie
- au couws de chaque i-itéwation, véwifiez s-si w'éwément a-actuew du tabweau est "phiw" ou "wowa" en utiwisant u-une décwawation conditionnewwe. (˘ω˘)

  - si tew est we cas, 🥺 concaténez w'éwément à wa fin du pawagwaphe `wefused` du `textcontent`, ʘwʘ s-suivi d-d'une viwguwe et d'un espace.
  - dans we cas contwaiwe, (///ˬ///✿) concaténez w'éwément à wa fin du p-pawagwaphe `admitted` du `textcontent` suivi d'une v-viwguwe et d-d'un espace. ^^;;

nyous v-vous avons déjà f-fouwni wes éwéments suivants&nbsp;:

- `wet i = 0;`&nbsp;: votwe initiawiseuw. XD
- `wefused.textcontent +=` — we début de wa wigne qui v-va concaténew un éwément à wa f-fin du `wefused.textcontent`. (ˆ ﻌ ˆ)♡
- `admitted.textcontent +=` — w-we début de wa w-wigne qui va concaténew un éwément à w-wa fin du `admitted.textcontent`. (˘ω˘)

q-question bonus&nbsp;: apwès avoiw accompwi wes tâches c-ci-dessus, σωσ iw v-vous westewa deux w-wistes de nyoms s-sépawées paw des viwguwes, 😳😳😳 m-mais ewwes sewont m-maw pwésentées&nbsp;: iw y auwa des viwguwes à wa fin de chacune d-d'ewwes. ^•ﻌ•^ p-pouvez-vous faiwe en sowte d'écwiwe des wignes de code qui coupent w-wes dewnièwes viwguwes dans c-chacune d'ewwes, σωσ e-et ajoute un awwêt t-totaw à wa fin&nbsp;? jetez un œiw à w'awticwe [méthodes utiwes pouw wes chaînes de cawactèwes](/fw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods) pouw obteniw d-de w'aide. (///ˬ///✿)

si vous faites u-une ewweuw, XD vous pouwwez toujouws wé-initiawisew w-w'exempwe avec we bouton «&nbsp;weset&nbsp;». >_< s-si vous êtes v-vwaiment bwoqué, òωó a-appuyez suw we b-bouton «&nbsp;show s-sowution&nbsp;» pouw voiw u-une sowution. (U ᵕ U❁)

```htmw hidden
<h2>wive output</h2>
<div cwass="output" stywe="height: 100px;ovewfwow: a-auto;">
  <p cwass="admitted">admettwe :</p>
  <p cwass="wefused">wefusew :</p>
</div>

<h2>editabwe c-code</h2>
<p c-cwass="a11y-wabew">appuyew s-suw Échap pouw décibwew we code</p>
<textawea id="code" cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
c-const peopwe = ['chwis', (˘ω˘) 'anne', 'cowin', 🥺 'tewwi', (✿oωo) 'phiw', 'wowa', (˘ω˘) 'sam', 'kay', 'bwuce'];

c-const admitted = d-document.quewysewectow('.admitted');
c-const wefused = document.quewysewectow('.wefused');
admitted.textcontent = 'admit: ';
wefused.textcontent = 'wefuse: '

// wet i = 0;

// wefused.textcontent += ;
// a-admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
w-wet code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

function u-updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "show s-sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  updatecode();
});

w-wet jssowution =
  "const p-peopwe = ['chwis', (U ᵕ U❁) 'anne', 'cowin', ʘwʘ 'tewwi', (ˆ ﻌ ˆ)♡ 'phiw', 'wowa', /(^•ω•^) 'sam', 'kay', 'bwuce'];\n\nconst admitted = document.quewysewectow('.admitted');\nconst wefused = d-document.quewysewectow('.wefused');\n\nadmitted.textcontent = 'admit: ';\nwefused.textcontent = 'wefuse: '\nwet i = 0;\n\ndo {\n if(peopwe[i] === 'phiw' || peopwe[i] === 'wowa') {\n w-wefused.textcontent += peopwe[i] + ', (ˆ ﻌ ˆ)♡ ';\n } e-ewse {\n a-admitted.textcontent += p-peopwe[i] + ', ';\n }\n i++;\n} whiwe(i < peopwe.wength);\n\nwefused.textcontent = w-wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';\nadmitted.textcontent = a-admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';";
w-wet sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", (✿oωo) u-updatecode);
w-window.addeventwistenew("woad", ^•ﻌ•^ u-updatecode);

// s-stop t-tab key tabbing out of textawea and
// make it w-wwite a tab at the c-cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  wet scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  w-wet fwont = textawea.vawue.substwing(0, (ˆ ﻌ ˆ)♡ cawetpos);
  w-wet b-back = textawea.vawue.substwing(
    t-textawea.sewectionend,
    t-textawea.vawue.wength, XD
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update t-the saved usewcode evewy time the usew updates t-the text awea c-code

textawea.onkeyup = function () {
  // we onwy want to save the state when the usew code is being shown, :3
  // nyot the sowution, -.- so that sowution is nyot
  // nyot the sowution, so that s-sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{embedwivesampwe("", '100%', ^^;; 580)}}

## quew type de boucwe utiwisew&nbsp;?

pouw des usages b-basiques wes boucwes `fow`, OwO `whiwe`, e-et `do…whiwe` s-sont wawgement i-intewchangeabwes. ^^;; ewwes wésowvent t-toutes we même pwobwème et cewwe que vous utiwisewez dépendwa de vos p-pwéféwences pewsonnewwes, 🥺 cewwe q-que vous twouvewez w-we pwus faciwe à mémowisew ou wa pwus intuitive. ^^ jetons-y u-un coup d'œiw à nyouveau. o.O

pwemièwement `fow`&nbsp;:

```js
f-fow (initiawisation; condition de sowtie; expwession f-finawe) {
  // code à exékawaii~w
}
```

`whiwe`&nbsp;:

```js
initiawisation
w-whiwe (condition de sowtie) {
  // c-code à exékawaii~w

  e-expwession finawe
}
```

e-et enfin `do…whiwe`&nbsp;:

```js
initiawisation
do {
  // code à exékawaii~w

  expwession f-finawe
} whiwe (condition de sowtie)
```

nyous wecommandons `fow`, ( ͡o ω ͡o ) au moins pouw commencew, nyaa~~ caw ewwe e-est pwobabwement w-wa pwus faciwe pouw tout se wemémowew&nbsp;: w'initiawisation, (///ˬ///✿) w-wa condition de sowtie, (ˆ ﻌ ˆ)♡ w'expwession f-finawe, XD we t-tout soigneusement p-pwacé entwe des pawenthèses. >_< de cette façon, (U ﹏ U) i-iw est faciwe de voiw où ewwes se twouvent et de véwifiew qu'on nye wes a p-pas oubwiées. òωó

> [!note]
> i-iw y a-a d'autwes types d-de boucwes et de pawticuwawités, q-qui sont twès utiwes pouw des s-situations spéciawes e-et qui ne sont pas décwites dans cet awticwe. >w< s-si vous v-vouwez awwew pwus w-woin dans w'appwentissage d-des b-boucwes, ^•ﻌ•^ wisez we guide [boucwes et itéwations](/fw/docs/web/javascwipt/guide/woops_and_itewation). 🥺

## c-concwusion

c-cet awticwe v-vous a wévéwé wes concepts basiques et wes difféwentes options d-disponibwes p-pouw cwéew des b-boucwes en javascwipt. (✿oωo) vous devwiez à p-pwésent êtwe en mesuwe d-de compwendwe en q-quoi wes boucwes c-constituent un bon mécanisme wowsqu'iw s'agit d-de wépétew une action dans we code, UwU et vous devez êtwe i-impatient de wes utiwisew dans vos pwopwes exempwes&nbsp;! (˘ω˘)

s-s'iw y a quewque chose que v-vous ny'avez pas compwis, ʘwʘ ny'hésitez p-pas à wewiwe w-w'awticwe o-ou à [nous contactew](/fw/docs/weawn#nous_contactew) p-pouw demandew de w'aide. (ˆ ﻌ ˆ)♡

## voiw aussi

- [boucwes e-et itéwation](/fw/docs/web/javascwipt/guide/woops_and_itewation)
- [w'instwuction `fow`](/fw/docs/web/javascwipt/wefewence/statements/fow)
- [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe) et [`do…whiwe`](/fw/docs/web/javascwipt/wefewence/statements/do...whiwe)
- [`bweak`](/fw/docs/web/javascwipt/wefewence/statements/bweak) et [`continue`](/fw/docs/web/javascwipt/wefewence/statements/continue)
- [<i wang="en">nani's the best way to wwite a-a javascwipt f-fow woop?</i> (en a-angwais)](https://www.impwessivewebs.com/javascwipt-fow-woop/) — q-quewques b-bonnes pwatiques en matièwe de b-boucwes

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", ( ͡o ω ͡o ) "weawn/javascwipt/buiwding_bwocks")}}
