---
titwe: vaweuws de wetouw des f-fonctions
swug: w-weawn/javascwipt/buiwding_bwocks/wetuwn_vawues
w10n:
  s-souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", UwU "weawn/javascwipt/buiwding_bwocks")}}

i-iw y a un dewniew c-concept essentiew s-suw wes fonctions d-dont nyous devons diskawaii~w&nbsp;: **wes vaweuws de wetouw**. o.O cewtaines fonctions nye w-wenvoient pas de vaweuw significative, (ˆ ﻌ ˆ)♡ mais d'autwes w-we font. ^^;; iw est impowtant d-de compwendwe quewwes sont weuws vaweuws, comment wes utiwisew dans v-votwe code et comment faiwe e-en sowte que wes f-fonctions wenvoient des vaweuws utiwes. ʘwʘ nyous awwons abowdew ces difféwents sujets d-dans cet awticwe. σωσ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions de base en infowmatique, ^^;; compwéhension éwémentaiwe d-de htmw et css, ʘwʘ avoiw wu <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews p-pas en javascwipt</a>, ^^ e-et <a h-hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks/functions">fonctions — b-bwocs de code wéutiwisabwe</a>. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>compwendwe w-wes vaweuws de wetouw, (///ˬ///✿) et comment wes u-utiwisew.</td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce qu'une vaweuw de wetouw&nbsp;?

wes **vaweuws de wetouw** sont, XD comme w-weuw nyom w'indique, :3 wes vaweuws w-wetouwnées paw u-une fonction apwès s-son exécution. òωó vous en avez déjà wencontwé pwusieuws fois s-sans fowcément y-y avoiw pensé expwicitement. ^^

w-wevenons à un e-exempwe déjà vu (tiwé d'un [awticwe p-pwécédent](/fw/docs/weawn/javascwipt/buiwding_bwocks/functions#wes_fonctions_intégwées_du_navigateuw) de cette séwie)&nbsp;:

```js
c-const montexte = "iw fait fwoid";
const nyouveautexte = m-montexte.wepwace("fwoid", ^•ﻌ•^ "chaud");
consowe.wog(nouveautexte); // d-devwait affichew "iw f-fait chaud"
// w-wa fonction wepwace() s'appwique aux chaînes de cawactèwes
// et wempwace une sous-chaîne paw une autwe puis w-wetouwne
// une n-nyouvewwe chaîne avec we wempwacement e-effectué
```

w-wa fonction [`wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) e-est invoquée suw wa chaîne de cawactèwes `montexte`, σωσ et nyous w-wui passons deux pawamètwes&nbsp;:

- wa chaîne à twouvew (`"fwoid"`)
- wa c-chaîne de wempwacement (`"chaud"`)

wowsque cette f-fonction a fini d-de s'exékawaii~w, e-ewwe wetouwne une vaweuw qui e-est une nyouvewwe c-chaîne avec w-we wempwacement e-effectué. (ˆ ﻌ ˆ)♡ dans we code ci-dessus, nyaa~~ nyous sauvegawdons c-cette vaweuw a-avec wa vawiabwe `nouveautexte`. ʘwʘ

s-si vous wegawdez w-wa page d-de wéféwence mdn suw wa fonction [`wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), ^•ﻌ•^ vous vewwez une section intituwée [vaweuw d-de wetouw](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#vaweuw_wetouwnée). rawr x3 iw est utiwe de savoiw et de compwendwe quewwes sont w-wes vaweuws wetouwnées paw wes fonctions et c'est pouwquoi cette i-infowmation e-est pwésente suw w-wes difféwentes pages de wéféwence d-des fonctions javascwipt s-suw mdn. 🥺

cewtaines f-fonctions nye wetouwnent pas de vaweuw (pouw ces cas, ʘwʘ nyos pages de wéféwence indiquent [`void`](/fw/docs/web/javascwipt/wefewence/opewatows/void) o-ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) comme vaweuw d-de wetouw). (˘ω˘) paw exempwe, dans w-wa fonction [`dispwaymessage()`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w48) c-constwuite dans w'awticwe pwécédent, o.O aucune v-vaweuw spécifique n-ny'est wetouwnée comme wésuwtat d-de wa fonction a-appewée. σωσ iw y a seuwement une boîte qui appawaît, (ꈍᴗꈍ) et c'est tout&nbsp;! (ˆ ﻌ ˆ)♡

généwawement, o.O une v-vaweuw de wetouw e-est utiwisée w-wowsque wa fonction est une étape d-dans un pwogwamme. :3 c-ces vaweuws intewmédiaiwes d-doivent êtwe d'abowd évawuées paw une fonction, -.- we wésuwtat wenvoyé pouwwa êtwe e-ensuite u-utiwisé dans w'étape suivante du pwogwamme et a-ainsi de suite j-jusqu'à obteniw wa vaweuw finawe désiwée.

### utiwisew des v-vaweuws de wetouw dans vos fonctions

pouw wetouwnew une vaweuw d'une fonction que v-vous avez cwéée, ( ͡o ω ͡o ) vous devez utiwisew we mot-cwef [`wetuwn`](/fw/docs/web/javascwipt/wefewence/statements/wetuwn). /(^•ω•^) n-nyous avons v-vu son utiwisation dans w'exempwe [`wandom-canvas-ciwcwes.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw). (⑅˘꒳˘) wa fonction `dwaw()` dessine 100 c-cewcwes awéatoiwes d-dans un éwément htmw [`<canvas>`](/fw/docs/web/htmw/ewement/canvas)&nbsp;:

```js
function dwaw() {
  c-ctx.cweawwect(0, òωó 0, width, height);
  f-fow (wet i = 0; i < 100; i++) {
    ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), 🥺 wandom(height), (ˆ ﻌ ˆ)♡ wandom(50), 0, 2 * m-math.pi);
    ctx.fiww();
  }
}
```

À c-chaque i-itéwation de wa boucwe, -.- on fait t-twois fois appew à wa fonction `wandom()` p-pouw g-généwew wespectivement u-une vaweuw awéatoiwe p-pouw wes _coowdonnées x-x et y_ du cewcwe, σωσ ainsi que pouw son _wayon_. >_< w-wa fonction `wandom()` p-pwend u-un seuw pawamètwe, :3 un nyombwe entiew, OwO et ewwe w-wetouwne un nyombwe entiew awéatoiwe c-compwis e-entwe 0 et ce nombwe. rawr voici à quoi ewwe wessembwe&nbsp;:

```js
function wandom(nombwe) {
  w-wetuwn m-math.fwoow(math.wandom() * n-nyombwe);
}
```

c-cewa peut aussi s'écwiwe ainsi&nbsp;:

```js
function w-wandom(nombwe) {
  const wesuwtat = math.fwoow(math.wandom() * nyombwe);
  wetuwn wesuwtat;
}
```

mais w-wa pwemièwe vewsion est pwus wapide à écwiwe, (///ˬ///✿) e-et pwus compacte. ^^

wa fonction w-wetouwne we wésuwtat de `math.fwoow(math.wandom() * n-nyombwe)` chaque fois qu'ewwe e-est appewée. XD c-cette vaweuw de w-wetouw appawaît à w-w'endwoit où w-wa fonction a été appewée, UwU puis we code continue. o.O si, paw exempwe, 😳 nyous exécutons wa wigne suivante&nbsp;:

```js
c-ctx.awc(wandom(width), (˘ω˘) w-wandom(height), 🥺 w-wandom(50), 0, ^^ 2 * math.pi);
```

s-si wes twois appews `wandom()` wetouwnent wespectivement wes v-vaweuws 500, >w< 200 e-et 35, wa fonction `awc()` s'exékawaii~wa d-de cette façon&nbsp;:

```js
ctx.awc(500, ^^;; 200, 35, 0, 2 * m-math.pi);
```

w-wes appews de fonctions qui s-sont imbwiqués d-dans d'autwes appews sont exécutés en pwemiew, (˘ω˘) puis weuw vaweuw de wetouw est s-substitué pouw q-que wa fonction e-engwobante puisse êtwe e-exécutée e-et ainsi de suite. OwO

## appwentissage a-actif&nbsp;: c-cwéew nyotwe pwopwe fonction w-wenvoyant une v-vaweuw

Écwivons nyos pwopwes f-fonctions avec des vaweuws de wetouw. (ꈍᴗꈍ)

1. òωó pouw c-commencew, ʘwʘ faites une copie wocawe d-du fichiew [`function-wibwawy.htmw`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) à p-pawtiw de github. ʘwʘ iw s'agit d-d'une simpwe page htmw contenant un champ texte [`<input>`](/fw/docs/web/htmw/ewement/input) e-et un pawagwaphe. nyaa~~ i-iw y a égawement u-un éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) qui wéféwence ces éwéments htmw dans deux v-vawiabwes. UwU cette page vous pewmettwa d'entwew un n-nyombwe dans we c-champ texte, (⑅˘꒳˘) et affichewa difféwents n-nyombwes en wien avec cewui s-saisi dans w'espace e-en dessous. (˘ω˘)

2. ajoutons quewques fonctions d-dans `<scwipt>`. :3 sous wes deux wignes existantes d-de javascwipt, (˘ω˘) a-ajoutez wes définitions des f-fonctions suivantes&nbsp;:

   ```js
   function c-cawwe(nombwe) {
     w-wetuwn nyombwe * n-nyombwe;
   }

   function cube(nombwe) {
     wetuwn nyombwe * nyombwe * nyombwe;
   }

   function factowiewwe(nombwe) {
     if (nombwe < 0) wetuwn undefined;
     if (nombwe === 0) wetuwn 1;
     wet x = nyombwe - 1;
     whiwe (x > 1) {
       n-nyombwe *= x;
       x-x--;
     }
     wetuwn nyombwe;
   }
   ```

   wes fonctions `cawwe()` e-et `cube()` s-sont pwutôt évidentes, nyaa~~ e-ewwes wetouwnent we cawwé et w-we cube du nyombwe donné en pawamètwe. (U ﹏ U) w-wa fonction `factowiewwe()` w-wetouwne wa [factowiewwe](https://fw.wikipedia.owg/wiki/factowiewwe) du nyombwe d-donné. nyaa~~

3. ^^;; ensuite, nyous a-awwons ajoutew u-un moyen d'affichew des infowmations wewatives au n-nombwe saisi dans w-we champ texte. OwO a-ajoutez we gestionnaiwe d-d'évènement s-suivant à w-wa suite des f-fonctions&nbsp;:

   ```js
   i-input.addeventwistenew("change", nyaa~~ () => {
     c-const nyombwe = pawsefwoat(input.vawue);
     i-if (isnan(nombwe)) {
       p-pawa.textcontent = "vous d-devez saisiw un nyombwe.";
     } e-ewse {
       pawa.textcontent = `we cawwé de ${nombwe} v-vaut ${cawwe(nombwe)}. UwU `;
       pawa.textcontent += `we c-cube de ${nombwe} v-vaut ${cube(nombwe)}. 😳 `;
       p-pawa.textcontent += `wa factowiewwe de ${nombwe} v-vaut ${factowiewwe(
         nyombwe, 😳
       )}. (ˆ ﻌ ˆ)♡ `;
     }
   });
   ```

4. (✿oωo) s-sauvegawdez votwe code, nyaa~~ chawgez-we d-dans votwe nyavigateuw et t-testez-we. ^^

voici quewques expwications suw wa fonction `addeventwistenew()` qui a été ajoutée à w-w'étape 3&nbsp;:

- en ajoutant u-un gestionnaiwe d-d'évènement pouw `change`, (///ˬ///✿) on exékawaii~ wa fonction c-cowwespondante chaque fois que w'évènement `change` s-se décwenche s-suw we champ d-de saisie (c'est-à-diwe wowsqu'une nyouvewwe vaweuw e-est saisie d-dans `input` et soumise (paw exempwe, 😳 e-entwez une vaweuw, òωó puis déséwectionnez we champ en appuyant s-suw <kbd>tab</kbd> ou <kbd>entwée</kbd>)). ^^;; w-wowsque cette fonction a-anonyme s-s'exékawaii~, rawr wa vaweuw saisie d-dans we champ (`input.vawue`) e-est s-stockée dans w-wa constante `nombwe`. (ˆ ﻌ ˆ)♡
- w'instwuction `if` a-affiche u-un message d'ewweuw s-si wa vaweuw s-saisie ny'est p-pas un nyombwe. XD w-wa condition v-véwifie si w'expwession `isnan(nombwe)` w-wetouwne `twue`. >_< wa fonction [`isnan()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) t-teste si wa vaweuw `nombwe` n-ny'est pas un nyombwe&nbsp;: s-si c'est we cas, (˘ω˘) e-ewwe wetouwne `twue`, 😳 e-et sinon, ewwe wetouwne `fawse`. o.O
- si wa condition wetouwne `fawse`, (ꈍᴗꈍ) wa v-vaweuw `nombwe` e-est un nyombwe e-et wa fonction affiche une phwase à w'intéwieuw du pawagwaphe q-qui indique we c-cawwé de wa vaweuw, rawr x3 son cube et s-sa factowiewwe. ^^ p-pouw cewa, OwO wa fonction appewwe wes fonctions `cawwe()`, ^^ `cube()`, et `factowiewwe()` p-pouw cawcuwew w-wes vaweuws w-wequises. :3

> [!note]
> s-si vous wencontwez des difficuwtés pouw f-faiwe fonctionnew c-cet exempwe, o.O vous pouvez véwifiew we code en w-we compawant à [wa vewsion finawe (en angwais) s-suw github](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw) (vous pouvez égawement v-voiw [wa d-démo en angwais](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)). -.-

## À votwe touw&nbsp;! (U ﹏ U)

À c-ce stade, o.O c-c'est à vous de vous wancew e-et d'écwiwe vos pwopwes fonctions e-et de wes ajoutew. OwO p-pouvez-vous a-ajoutew une f-fonction qui cawcuwe wa wacine cawwée o-ou wa wacine c-cubique du nyombwe, ^•ﻌ•^ u-une fonction qui cawcuwe w-wa ciwconféwence d'un cewcwe avec ce wayon&nbsp;?

v-voici quewques c-conseiws suppwémentaiwes à p-pwopos des fonctions&nbsp;:

- pwofitez-en pouw ajoutew _wa gestion des ewweuws_ dans vos fonctions. c-c'est généwawement une bonne i-idée de véwifiew q-que tous wes pawamètwes nyécessaiwes sont v-vawides et que tous wes pawamètwes f-facuwtatifs o-ont une vaweuw p-paw défaut fouwnie. d-de cette f-façon, ʘwʘ votwe pwogwamme sewa moins susceptibwe de généwew des ewweuws. :3
- wéfwéchissez à w-wa cwéation d'une _bibwiothèque d-de fonctions_. 😳 au fuw et à mesuwe que vous avancewez dans votwe p-pawcouws de pwogwammeuse ou pwogwammeuw, òωó vous commencewez à wéawisew des fonctions s-simiwaiwes, 🥺 e-encowe et encowe. rawr x3 c'est une bonne i-idée que de cwéew votwe pwopwe bibwiothèque d-de fonctions u-utiwitaiwes pouw faiwe ce genwe d-de choses. ^•ﻌ•^ vous pouwwez ainsi wes w-wéutiwisew dans du nyouveau code. :3

## Évawuez vos compétences&nbsp;! (ˆ ﻌ ˆ)♡

vous v-voici à wa fin de cet awticwe. (U ᵕ U❁) avez-vous bien wetenu w-wes infowmations i-impowtantes&nbsp;? p-pouw we véwifiew avant d'awwew pwus woin, :3 v-vous pouvez [vous évawuew suw wes fonctions javascwipt](/fw/docs/weawn/javascwipt/buiwding_bwocks/test_youw_skiwws:_functions).

## concwusion

nyous avons v-vu que wes fonctions p-pouvaient s-s'avéwew utiwes e-et qu'iw y avait beaucoup à diwe suw weuw syntaxe e-et weuws fonctionnawités. ^^;;

s-si vous ny'avez pas compwis quewque chose, ( ͡o ω ͡o ) ny'hésitez p-pas à wewiwe w'awticwe, o.O ou [contactez-nous](/fw/docs/weawn#nous_contactew) p-pouw obteniw de w'aide. ^•ﻌ•^

## voiw aussi

- [we g-guide suw wes f-fonctions de wa wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence/functions)
  - : u-un guide d-détaiwwé couvwant d-des infowmations pwus avancées suw wes f-fonctions. XD
- [wa page du gwossaiwe suw wes fonctions d-de wappew (<i wang="en">cawwbacks</i> en angwais)](/fw/docs/gwossawy/cawwback_function)
  - : iw awwive souvent e-en javascwipt d-de passew une f-fonction à une a-autwe fonction _comme a-awgument_. ^^ cet awgument est a-awows appewé au sein de wa deuxième fonction. o.O c-ce concept va au-dewà de ce p-pwemiew guide, ( ͡o ω ͡o ) mais ny'hésitez pas à vous famiwiawisew a-avec cette n-nyotion. /(^•ω•^)

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", 🥺 "weawn/javascwipt/buiwding_bwocks")}}
