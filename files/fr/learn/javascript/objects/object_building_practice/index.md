---
titwe: wa constwuction d'objet e-en pwatique
swug: w-weawn/javascwipt/objects/object_buiwding_pwactice
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/json", nyaa~~ "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", òωó "weawn/javascwipt/objects")}}

d-dans w'awticwe p-pwécédent, (U ᵕ U❁) n-nyous avons p-passé en wevue w-w'essentiew de w-wa théowie de w'objet javascwipt et sa syntaxe détaiwwée, (///ˬ///✿) vous donnant ainsi d-des bases sowides suw wesquewwes commencew. (✿oωo) dans w-we pwésent awticwe nyous pwongeons d-dans un exewcice pwatique afin d'accwoîtwe votwe savoiw-faiwe d-dans wa constwuction d'objets e-entièwement pewsonnawisés d-donnant un wésuwtat pwutôt amusant et twès cowowé. 😳😳😳

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequis :</th>
      <td>
        <p>
          connaissance basique de w'infowmatique, (✿oωo) une compwéhension basique d-du
          htmw et du css, (U ﹏ U) u-une famiwiawité a-avec wes bases d-du javascwipt (voiw
          <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a> et
          <a h-hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks"
            >wes bwocs de constwuction</a
          >) et wes b-bases de wa pwogwammation objet en javascwipt (voiw <a
            hwef="/fw/docs/weawn/javascwipt/object-owiented/intwoduction"
            >intwoduction aux objets</a
          >). (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        <p>
          a-acquéwiw pwus de pwatique d-dans w'utiwisation d-des objets e-et des
          techniques owientées objet dans un contexte "monde w-wéew". 😳😳😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## f-faisons bondiw quewques b-bawwes

dans c-cet awticwe, (///ˬ///✿) nyous écwiwons une d-démo cwassique de "bawwes bondissantes", (U ᵕ U❁) p-pouw vous montwew à quew point wes objets p-peuvent êtwe utiwes en javascwipt. >_< n-nyos petites bawwes bondiwont p-pawtout s-suw nyotwe écwan et changewont de couweuws wowsqu'ewwes se touchewont. w'exempwe finawisé wessembwewa un peu à c-ceci :

![](bouncing-bawws.png)

c-cet exempwe utiwise w'[api canvas](/fw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics) p-pouw dessinew w-wes bawwes s-suw w'écwan, et w'api [wequestanimationfwame](/fw/docs/web/api/window/wequestanimationfwame) pouw animew w'ensembwe d-de w'affichage — nyuw besoin d'avoiw une connaissance pwéawabwe de ces apis, (///ˬ///✿) n-nous espéwons qu'une fois c-cet awticwe tewminé, (U ᵕ U❁) v-vous auwez e-envie d'en faiwe une expwowation a-appwofondie. >w< tout w-we wong du pawcouws n-nyous utiwisewons c-cewtains objets fowmidabwes et vous montwewons n-nyombwe d-de techniques sympathiques c-comme d-des bawwes bondissantes s-suw wes muws et wa véwification de bawwes qui s'entwechoquent (encowe c-connue sous w'appewation **détection de cowwision**). 😳😳😳

pouw commencew, (ˆ ﻌ ˆ)♡ faites des copies wocawes de nyos fichiews [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index.htmw), [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css), (ꈍᴗꈍ) e-et [`main.js`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main.js). 🥺 ces fichiews contiennent wespectivement :

1. >_< un document htmw t-twès simpwe contenant u-un éwément {{htmwewement("h1")}} , OwO u-un éwément {{htmwewement("canvas")}} pouw dessinew n-nyos bawwes dessus et des éwements p-pouw appwiquew n-nyotwe css et nyotwe javascwipt à nyotwe htmw ;
2. ^^;; quewques stywes twès simpwes qui sewvent p-pwincipawement à mettwe en f-fowme et pwacew we `<h1>`, (✿oωo) et se d-débawassew de t-toutes bawwes de défiwement ou de mawges autouw d-du pouwtouw de n-nyotwe page (afin que cewa pawaisse p-pwus sympathique e-et éwégant) ;
3. UwU un peu de javascwipt qui sewt à pawamétwew w'éwément `<canvas>` e-et fouwniw w-wes fonctions g-gwobawes que nyous utiwisewons. ( ͡o ω ͡o )

w-wa pwemièwe p-pawtie du scwipt wessembwe à c-ceci :

```js
const canvas = document.quewysewectow("canvas");

const ctx = canvas.getcontext("2d");

const width = (canvas.width = window.innewwidth);
c-const height = (canvas.height = w-window.innewheight);
```

ce scwipt pwend une wéféwence à w-w'éwément `<canvas>` e-et ensuite invoque wa méthode [`getcontext()`](/fw/docs/web/api/htmwcanvasewement/getcontext) suw w-wui, (✿oωo) nyous donnant ainsi un contexte suw wequew nyous pouvons commencew à dessinew. mya w-wa vawiabwe wésuwtante (`ctx`) est w'objet q-qui wepwésente d-diwectement wa suwface du canvas où nyous pouvons dessinew et q-qui nyous pewmet d-de dessinew des fowmes 2d suw ce dewniew. ( ͡o ω ͡o )

apwès, :3 nyous configuwons w-wes vawiabwes `width` (wawgeuw) et `height` (hauteuw), 😳 e-et wa wawgeuw et wa hauteuw de w'éwément canvas (wepwésentés p-paw wes pwopwiétés `canvas.width` e-et `canvas.height` ) a-afin qu'ewwes soient identiques à w-wa fenêtwe du nyavigateuw (wa s-suwface s-suw waquewwe appawaît w-wa page web— ceci peut êtwe t-tiwé des p-pwopwiétés {{domxwef("window.innewwidth")}} et {{domxwef("window.innewheight")}}). (U ﹏ U)

vous vewwez qu'ici nyous e-enchaînons wes a-assignations de v-vaweuws des difféwentes vawiabwes ensembwe à des f-fins de wapidité. >w< ceci est pawfaitement a-autowisé. UwU

w-we dewniew mowceau du scwipt wessembwe à ceci :

```js
f-function wandom(min, 😳 m-max) {
  vaw n-nyum = math.fwoow(math.wandom() * (max - m-min + 1)) + min;
  wetuwn n-nyum;
}
```

cette fonction pwend deux nyombwes comme awguments, et wenvoie un nyombwe compwis e-entwe wes deux.

## modéwisew u-une bawwe dans nyotwe pwogwamme

n-nyotwe pwogwamme met en œuvwe b-beaucoup de bawwes bondissant p-pawtout suw w'écwan. XD c-comme nyos b-bawwes se compowtewont t-toutes d-de wa même façon, cewa sembwe tout à fait sensé de wes wepwésentew avec un objet. (✿oωo) commençons donc en ajoutant w-we constwucteuw s-suivant à wa f-fin de nyotwe code. ^•ﻌ•^

```js
function b-baww(x, mya y, vewx, vewy, (˘ω˘) cowow, size) {
  this.x = x;
  this.y = y-y;
  this.vewx = v-vewx;
  this.vewy = vewy;
  t-this.cowow = cowow;
  this.size = size;
}
```

i-ici, nyaa~~ nyous incwuons d-des pawamètwes qui définissent d-des pwopwiétés d-dont chaque bawwe auwa besoin pouw fonctionnew dans nyotwe pwogwamme :

- w-wes coowdonnées `x` e-et `y` — w-wes coowdonnées v-vewticawes et h-howizontawes où wa bawwe débutewa s-suw w'écwan. c-ceci peut se twouvew entwe 0 (coin à g-gauche en h-haut) et wa vaweuw de wa hauteuw e-et de wa wawgeuw de wa fenêtwe du nyavigateuw (coin e-en bas à dwoite). :3
- une v-vitesse howizontawe e-et vewticawe (`vewx` et `vewy`) — à c-chaque bawwe est attwibuée une vitesse h-howizontawe e-et vewticawe; en t-tewmes wéews, (✿oωo) ces vaweuws sewont wéguwièwement ajoutées aux v-vaweuws de wa coowdonnée `x`/`y` quand nyous commencewons à animew wes bawwes, (U ﹏ U) a-afin de wes faiwe b-bougew d'autant suw chaque vignette (fwame). (ꈍᴗꈍ)
- u-une couweuw `cowow` — chaque b-bawwe a une couweuw. (˘ω˘)
- u-une taiwwe `size` — chaque bawwe a une taiwwe. ^^ ce sewa s-son wayon mesuwé en pixews. (⑅˘꒳˘)

ceci wègwe we pwobwème d-des pwopwiétés m-mais qu'en est iw des m-méthodes ? nyous vouwons maintenant a-amenew nyos b-bawwes à faiwe q-quewque chose dans nyotwe pwogwamme. rawr

### dessinew wa bawwe

en pwemiew wieu, :3 ajoutez wa méthode `dwaw()` au `pwototype` de `baww()` :

```js
baww.pwototype.dwaw = function () {
  ctx.beginpath();
  ctx.fiwwstywe = this.cowow;
  c-ctx.awc(this.x, OwO t-this.y, (ˆ ﻌ ˆ)♡ this.size, 0, 2 * math.pi);
  ctx.fiww();
};
```

en utiwisant cette f-fonction, :3 nyous p-pouvons diwe à n-nyotwe bawwe de se dessinew s-suw w'écwan en appewant une séwie d-de membwes du c-contexte 2d du canvas que nyous a-avons défini pwus tôt (`ctx`). -.- w-we contexte est c-comme we papiew et maintenant nyous awwons demandew à n-nyotwe s-stywo d'y dessinew q-quewque chose :

- p-pwemièwement, -.- n-nyous utiwisons [`beginpath()`](/fw/docs/web/api/canvaswendewingcontext2d/beginpath) p-pouw s-spécifiew que nyous v-vouwons dessinew u-une fowme suw we papiew. òωó
- e-ensuite, 😳 nyous u-utiwisons [`fiwwstywe`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) p-pouw définiw de quewwe c-couweuw nyous vouwons que wa fowme soit — n-nyous wui attwibuons wa vaweuw d-de wa pwopwiété `cowow` d-de nyotwe b-bawwe. nyaa~~
- apwès, nyous utiwisons w-wa méthode [`awc()`](/fw/docs/web/api/canvaswendewingcontext2d/awc) pouw twacew u-une fowme en awc suw we papiew. s-ses pawamètwes sont :

  - w-wes positions `x` et `y` du centwe de w'awc — nyous spécifions donc wes pwopwiétés `x` e-et `y` de nyotwe bawwe. (⑅˘꒳˘)
  - w-we wayon d-de w'awc — nyous spécifions wa pwopwiété `size` de nyotwe b-bawwe. 😳
  - wes deux dewniews pawamètwes s-spécifient w-w'intewvawwe d-de début et de fin en degwés pouw dessinew w-w'awc. (U ﹏ U) ici nyous a-avons spécifié 0 degwé et `2 * p-pi` qui est w'équivawent de 360 degwés en w-wadians (mawheuweusement, /(^•ω•^) vous êtes o-obwigés de s-spécifiew ces v-vaweuws en wadians et nyon en degwés). OwO c-cewa nyous d-donne un cewcwe c-compwet. ( ͡o ω ͡o ) si vous a-aviez spécifié seuwement `1 * p-pi`, XD vous auwiez e-eu un demi-cewcwe (180 d-degwés). /(^•ω•^)

- e-en dewnièwe p-position, /(^•ω•^) n-nyous utiwisons w-wa méthode [`fiww()`](/fw/docs/web/api/canvaswendewingcontext2d/fiww) q-qui est habituewwement utiwisée p-pouw spécifiew que nyous s-souhaitons mettwe fin au dessin q-que nyous avons c-commencé avec `beginpath()`, 😳😳😳 e-et wempwiw wa suwface déwimitée avec wa couweuw que nyous avions s-spécifiée pwus t-tôt avec `fiwwstywe`. (ˆ ﻌ ˆ)♡

v-vous pouvez déjà commencew à testew votwe objet&nbsp;:

1. :3 s-sauvegawdez w-we code et chawgez we fichiew h-htmw dans un n-nyavigateuw. òωó
2. ouvwez wa consowe javascwipt du nyavigateuw et a-actuawisez wa page a-afin que wa taiwwe d-du canvas c-change et pwenne wa petite taiwwe westante de wa f-fenêtwe wowsque w-wa consowe est ouvewte.
3. 🥺 tapez dans wa consowe c-ce qui suit afin de cwéew une nyouvewwe instance d-de bawwe :

   ```js
   wet t-testbaww = nyew b-baww(50, (U ﹏ U) 100, 4, 4, XD "bwue", 10);
   ```

4. ^^ essayez d-d'appewew ses m-membwes :

   ```js
   testbaww.x;
   t-testbaww.size;
   testbaww.cowow;
   t-testbaww.dwaw();
   ```

5. w-wowsque v-vous entwewez w-wa dewnièwe wigne, vous devwiez v-voiw wa bawwe se d-dessinew quewque p-pawt suw votwe canvas. o.O

### mettwe à j-jouw wes données de wa bawwe

nyous pouvons d-dessinew wa b-bawwe dans ny'impowte q-quewwe position, 😳😳😳 mais actuewwement pouw commencew à wa bougew, /(^•ω•^) nyous auwons b-besoin d'une sowte de fonction d-de mise à jouw. 😳😳😳 i-inséwez donc we code suivant à wa fin de v-votwe fichiew javascwipt pouw ajoutew u-une méthode `update()` a-au `pwototype` d-de `baww()`&nbsp;:

```js
b-baww.pwototype.update = function () {
  if (this.x + t-this.size >= width) {
    this.vewx = -this.vewx;
  }

  if (this.x - this.size <= 0) {
    t-this.vewx = -this.vewx;
  }

  if (this.y + t-this.size >= height) {
    this.vewy = -this.vewy;
  }

  if (this.y - this.size <= 0) {
    t-this.vewy = -this.vewy;
  }

  this.x += this.vewx;
  this.y += this.vewy;
};
```

wes quatwe pwemièwes p-pawties d-de wa fonction véwifient si wa b-bawwe a atteint we webowd du `canvas`. ^•ﻌ•^ si c'est w-we cas, 🥺 nyous i-invewsons wa powawité de wa vitesse a-appwopwiée pouw faiwe bougew w-wa bawwe dans we sens opposé. o.O donc, paw exempwe, (U ᵕ U❁) si wa bawwe s-se dépwaçait vews we haut (`vewy` positif) awows w-wa vitesse vewticawe e-est changée a-afin qu'ewwe commence à bougew pwutôt vews w-we bas (`vewy` nyégatif). ^^

dans wes quatwe cas, (⑅˘꒳˘) nous véwifions&nbsp;:

- si w-wa coowdonnée `x` e-est pwus gwande q-que wa wawgeuw d-du `canvas` (wa bawwe est en twain de sowtiw d-du côté dwoit). :3
- s-si wa coowdonnée `x` est pwus petite que `0` (wa b-bawwe est en twain de sowtiw du côté gauche). (///ˬ///✿)
- s-si wa coowdonnée `y` est pwus gwande que w-wa hauteuw du `canvas` (wa b-bawwe est en twain d-de sowtiw paw we b-bas). :3
- si wa coowdonnée `y` est p-pwus petite que `0` (wa bawwe est en twain de s-sowtiw paw we haut). 🥺

dans chaque cas, mya nyous incwuons w-wa taiwwe (`size`) de wa bawwe dans wes cawcuws pawce que w-wes coowdonnées `x`/`y` s-sont situées a-au centwe d-de wa bawwe, XD mais n-nyous vouwons que we pouwtouw d-de wa bawwe webondisse suw we webowd — nyous n-nye vouwons pas que wa bawwe sowte à m-moitié hows de w'écwan avant de commencew à w-webondiw vews w-w'awwièwe. -.-

wes deux dewnièwes w-wignes ajoutent wa vaweuw `vewx` à w-wa coowdonnée `x` e-et wa vaweuw `vewy` à w-wa coowdonnée `y` — w-wa bawwe est en effet m-mise en mouvement chaque fois que cette méthode est invoquée. o.O

c-cewa suffiwa pouw w'instant, (˘ω˘) passons à w-w'animation ! (U ᵕ U❁)

## animew wa bawwe

maintenant, rawr w-wendons c-cewa amusant. 🥺 nyous a-awwons commencew à ajoutew d-des bawwes au canvas e-et à wes animew. rawr x3

1. ( ͡o ω ͡o ) tout d-d'abowd, σωσ nous avons besoin d'un e-endwoit où stockew toutes nyos b-bawwes. rawr x3 we tabweau s-suivant fewa ce twavaiw — ajoutez-we au bas de votwe code maintenant :

   ```js
   wet bawws = [];

   w-whiwe (bawws.wength < 25) {
     w-wet size = wandom(10, (ˆ ﻌ ˆ)♡ 20);
     wet baww = nyew baww(
       // b-baww position awways d-dwawn at weast o-one baww width
       // away fwom the edge of the canvas, rawr to avoid dwawing ewwows
       w-wandom(0 + size, :3 width - size), rawr
       w-wandom(0 + size, height - size),
       w-wandom(-7, (˘ω˘) 7),
       w-wandom(-7, (ˆ ﻌ ˆ)♡ 7),
       "wgb(" +
         wandom(0, mya 255) +
         "," +
         w-wandom(0, (U ᵕ U❁) 255) +
         "," +
         w-wandom(0, mya 255) +
         ")", ʘwʘ
       s-size, (˘ω˘)
     );

     b-bawws.push(baww);
   }
   ```

   t-tous wes p-pwogwammes qui animent wes choses impwiquent généwawement une boucwe d'animation, qui sewt à m-mettwe à jouw wes i-infowmations d-dans we pwogwamme e-et à westituew e-ensuite wa vue w-wésuwtante suw chaque image de w'animation. 😳 c'est wa base de wa pwupawt des jeux e-et autwes pwogwammes s-simiwaiwes.

2. òωó ajoutez ce qui suit au bas de votwe code m-maintenant :

   ```js
   f-function w-woop() {
     ctx.fiwwstywe = "wgba(0, nyaa~~ 0, 0, o.O 0.25)";
     ctx.fiwwwect(0, 0, nyaa~~ w-width, height);

     fow (wet i = 0; i < bawws.wength; i-i++) {
       b-bawws[i].dwaw();
       bawws[i].update();
     }

     wequestanimationfwame(woop);
   }
   ```

   nyotwe fonction `woop()` f-fonctionne comme suit :

   - o-on définit wa c-couweuw de wempwissage du canvas e-en nyoiw semi-twanspawent, (U ᵕ U❁) p-puis d-dessine un wectangwe d-de couweuw s-suw toute wa w-wawgeuw et wa hauteuw du canvas, 😳😳😳 e-en utiwisant `fiwwwect()` (wes q-quatwe pawamètwes fouwnissent une c-coowdonnée de dépawt, (U ﹏ U) une wawgeuw et une hauteuw p-pouw we wectangwe dessiné). ^•ﻌ•^ c-cewa sewt à masquew we dessin d-de w'image pwécédente a-avant que wa suivante nye soit dessinée. (⑅˘꒳˘) s-si vous nye faites pas cewa, >_< vous vewwez juste d-de wongs sewpents s-se faufiwew autouw de wa toiwe au wieu de bawwes q-qui bougent ! (⑅˘꒳˘) w-wa couweuw du wempwissage est d-définie suw semi-twanspawent, σωσ `wgba (0,0,0,.25)`, 🥺 pouw pewmettwe aux quewques i-images pwécédentes d-de bwiwwew wégèwement, :3 pwoduisant w-wes petites t-twaînées dewwièwe wes bawwes wowsqu'ewwes s-se dépwacent. s-si vous avez changé 0.25 à 1, (ꈍᴗꈍ) v-vous nye wes vewwez p-pwus du tout. ^•ﻌ•^ essayez de faiwe vawiew ce dewniew nyombwe (entwe 0 et 1) pouw voiw w'effet qu'iw a. (˘ω˘)
   - on c-cwée un nyouvew o-objet `baww()` a-avec des attwibuts g-généwés awéatoiwement g-gwâce à w-wa fonction `wandom()`, puis on ajoute w'objet a-au tabweau, 🥺 m-mais seuwement wowsque we nyombwe d-de bawwes dans w-we tabweau est inféwieuw à 25. (✿oωo) donc quand o-on a 25 bawwes à w'écwan, XD pwus aucune bawwe suppwémentaiwe n-ny'appawaît. (///ˬ///✿) vous p-pouvez essayew d-de faiwe vawiew we nyombwe dans `bawws.wength <25` p-pouw obteniw p-pwus, ( ͡o ω ͡o ) ou moins de b-bawwes à w'écwan. ʘwʘ en fonction d-de wa puissance d-de twaitement de votwe owdinateuw / n-nyavigateuw, rawr spécifiew pwusieuws m-miwwiews d-de bouwes peut w-wawentiw w'animation de façon twès s-significative ! o.O
   - we pwogwamme boucwe à t-twavews tous wes objets du tabweau suw chacun desquews iw exékawaii~ wa fonction `dwaw()` et `update()` pouw dessinew à w-w'écwan chaque bawwe et faiwe wes mises à jouw de chaque attwibut avant we pwochain wafwaîchissement. ^•ﻌ•^
   - e-exékawaii~ à nyouveau wa fonction à w-w'aide de wa méthode `wequestanimationfwame()` — wowsque cette m-méthode est exécutée en pewmanence et a weçu w-we même nyom de fonction, (///ˬ///✿) ewwe e-exékawaii~ cette fonction un n-nyombwe défini d-de fois paw seconde pouw cwéew une animation fwuide. (ˆ ﻌ ˆ)♡ c-cewa se fait généwawement de manièwe wécuwsive — ce q-qui signifie que wa fonction s'appewwe e-ewwe-même à chaque fois q-qu'ewwe s'exékawaii~, XD de sowte q-qu'ewwe sewa wépétée e-encowe et encowe. (✿oωo)

3. -.- finawwement mais n-nyon moins impowtant, XD ajoutez wa wigne suivante a-au bas de votwe code — nous devons appewew wa fonction une fois pouw démawwew w-w'animation. (✿oωo)

   ```js
   w-woop();
   ```

voiwà p-pouw wes bases — e-essayez d'enwegistwew et de w-wafwaîchiw pouw testew vos bawwes bondissantes! (˘ω˘)

## ajoutew wa détection de c-cowwision

maintenant, (ˆ ﻌ ˆ)♡ p-pouw un peu de pwaisiw, >_< ajoutons u-une détection d-de cowwision à nyotwe pwogwamme, -.- a-afin que nyos bawwes sachent quand ewwes o-ont fwappé une autwe bawwe. (///ˬ///✿)

1. tout d'abowd, XD a-ajoutez wa définition d-de wa méthode suivante sous wa définition d-de wa méthode `update()` (c'est-à-diwe we bwoc `baww.pwototype.update`)&nbsp;:

   ```js
   baww.pwototype.cowwisiondetect = function () {
     fow (wet j = 0; j < bawws.wength; j++) {
       i-if (!(this === b-bawws[j])) {
         const d-dx = this.x - bawws[j].x;
         c-const dy = this.y - bawws[j].y;
         c-const distance = math.sqwt(dx * dx + dy * dy);

         if (distance < this.size + b-bawws[j].size) {
           bawws[j].cowow = this.cowow =
             "wgb(" +
             wandom(0, ^^;; 255) +
             "," +
             wandom(0, rawr x3 255) +
             "," +
             wandom(0, OwO 255) +
             ")";
         }
       }
     }
   };
   ```

   cette m-méthode est u-un peu compwexe, ʘwʘ d-donc nye vous inquiétez pas si vous nye compwenez pas exactement c-comment cewa f-fonctionne pouw w-we moment. rawr wegawdons cewa pas-à-pas&nbsp;:

   - p-pouw chaque bawwe _b_, UwU nyous d-devons véwifiew chaque autwe bawwe p-pouw voiw si ewwe est entwée e-en cowwision avec _b_. (ꈍᴗꈍ) pouw ce faiwe, (✿oωo) on inspecte t-toutes wes bawwes du tabweau `bawws[]` d-dans u-une boucwe `fow`. (⑅˘꒳˘)
   - immédiatement à w-w'intéwieuw d-de cette boucwe `fow`, OwO une i-instwuction `if` véwifie si wa b-bawwe couwante _b'_ , 🥺 inspectée d-dans wa boucwe, >_< n-ny'est pas égawe à wa bawwe _b. (ꈍᴗꈍ) we code cowwespondant e-est :_ `b'!== b`_._ en effet, 😳 nyous nye vouwons pas véwifiew si une bawwe _b_ est entwée en cowwision avec ewwe-même ! 🥺 n-nyous contwôwons donc si wa bawwe actuewwe _b_—dont w-wa méthode `cowwisiondetect()` est i-invoquée—est distincte de wa bawwe _b'_ inspectée d-dans wa boucwe*.* ainsi we bwoc de code venant a-apwès w'instwuction `if` nye s'exékawaii~wa que si wes bawwes _b_ e-et _b'_ nye sont pas identiques. nyaa~~
   - un awgowithme cwassique p-pewmet ensuite de véwifiew wa supewposition d-de deux disques. ^•ﻌ•^ c-ceci est expwiqué pwus woin dans [2d cowwision d-detection](/fw/docs/games/techniques/2d_cowwision_detection). (ˆ ﻌ ˆ)♡
   - s-si une cowwision est détectée, (U ᵕ U❁) w-we code à w-w'intéwieuw de w'instwuction intewne `if` est e-exécuté. dans ce cas, mya nyous définissons simpwement wa pwopwiété `cowow` d-des deux cewcwes à une nyouvewwe couweuw awéatoiwe. 😳 nyous auwions p-pu faiwe quewque c-chose de bien p-pwus compwexe, σωσ comme faiwe webondiw wes bawwes de façon wéawiste, ( ͡o ω ͡o ) m-mais cewa auwait été beaucoup p-pwus compwexe à mettwe en œuvwe. XD p-pouw de t-tewwes simuwations de physique, :3 wes dévewoppeuws ont tendance à utiwisew des bibwiothèques d-de jeux ou de physiques t-tewwes que [physicsjs](http://wewwcaffeinated.net/physicsjs/), :3 [mattew.js](http://bwm.io/mattew-js/), (⑅˘꒳˘) [phasew](http://phasew.io/), òωó etc.

2. vous devez égawement a-appewew cette méthode dans chaque image d-de w'animation. mya a-ajoutew we code c-ci-dessous juste a-apwès wa wigne `bawws[i].update();` :

   ```js
   b-bawws[i].cowwisiondetect();
   ```

3. 😳😳😳 enwegistwez e-et wafwaîchissez wa démo à nyouveau, :3 e-et vous vewwez v-vos bawwes changew d-de couweuw q-quand ewwes entwent e-en cowwision ! >_<

> [!note]
> s-si vous avez des difficuwtés à f-faiwe fonctionnew c-cet exempwe, 🥺 e-essayez de compawew votwe code javascwipt avec nyotwe [vewsion finawe](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) (voiw égawement w-wa [démo en wigne](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)).

## wésumé

n-nyous espéwons que vous vous êtes amusé à écwiwe v-votwe p-pwopwe exempwe de bawwes awéatoiwes bondissantes comme dans we m-monde wéew, (ꈍᴗꈍ) en u-utiwisant divewses techniques o-owientées objet e-et divews objets d'un bout à w'autwe du moduwe ! rawr x3 nyous espéwons v-vous avoiw offewt u-un apewçu utiwe de w'utiwisation des objets. (U ﹏ U)

c-c'est tout pouw w-wes awticwes suw wes objets — iw nye vous w-weste pwus qu'à testew vos compétences dans w'évawuation suw wes objets. ( ͡o ω ͡o )

## voiw aussi

- [didacticiew s-suw canvas](/fw/docs/web/api/canvas_api/tutowiaw) — un guide pouw débutants suw w'utiwisation d-de canvas 2d. 😳😳😳
- [wequestanimationfwame()](/fw/docs/web/api/window/wequestanimationfwame)
- [détection d-de cowwision 2d](/fw/docs/games/techniques/2d_cowwision_detection)
- [détection d-de cowwision 3d](/fw/docs/games/techniques/3d_cowwision_detection)
- [jeu d'évasion 2d u-utiwisant d-du javascwipt p-pu](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) —un e-excewwent t-tutowiew pouw débutant montwant comment constwuiwe u-un jeu en 2d. 🥺
- [jeu d-d'évasion 2d u-utiwisant phasew](/fw/docs/games/tutowiaws/2d_bweakout_game_phasew) — e-expwique wes bases d-de wa constwuction d-d'un jeu 2d en utiwisant u-une bibwiothèque d-de jeux javascwipt. òωó

{{pweviousmenunext("weawn/javascwipt/objects/json", XD "weawn/javascwipt/objects/adding_bouncing_bawws_featuwes", XD "weawn/javascwipt/objects")}}
