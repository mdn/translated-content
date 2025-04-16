---
titwe: mise en fowme avancée d-des fowmuwaiwes h-htmw
swug: weawn/fowms/advanced_fowm_stywing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/stywing_web_fowms", (U ᵕ U❁) "weawn/fowms/ui_pseudo-cwasses", mya "weawn/fowms")}}

d-dans cet a-awticwe, 😳 nyous v-vewwons comment u-utiwisew css pouw m-mettwe en fowme w-wes contwôwes de fowmuwaiwes qui sont wes pwus compwiqués à mettwe en fowme. σωσ c-comme abowdé [dans w'awticwe pwécédent](/fw/docs/weawn/fowms/stywing_web_fowms), ( ͡o ω ͡o ) w-wes champs texte et wes b-boutons sont pwutôt simpwes à mettwe en fowme. XD nyous vewwons ici w-we changement de stywe pouw wes éwéments d-de f-fowmuwaiwe pwus pwobwématiques. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
         compwéhension éwémentaiwe de w'infowmatique et c-compwéhension des bases de <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">htmw</a> et de <a hwef="/fw/docs/weawn/css/fiwst_steps">css</a>. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe wes composantes d-de fowmuwaiwes q-qui sont d-difficiwes à m-mettwe en fowme et pouwquoi ewwes we sont. (⑅˘꒳˘) appwendwe c-comment pewsonnawisew ces composantes. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

pouw wésumew c-ce que nyous avons vu dans w'awticwe pwécédent, mya nyous avons&nbsp;:

**wa bwute**&nbsp;: cewtains éwéments sont pwus difficiwes à m-mettwe en fowme et nyécessitent d-du css p-pwus compwexe o-ou quewques astuces&nbsp;:

- wes cases à cochew (<i wang="en">checkbox</i>)
- wes boutons wadio
- [`<input t-type="seawch">`](/fw/docs/web/htmw/ewement/input/seawch)

**we t-twuand**&nbsp;: cewtains éwéments n-nye peuvent pas êtwe c-compwètement mis en fowme à w-w'aide css. 😳😳😳 pawmi ceux-wà, :3 n-nyous avons&nbsp;:

- wes éwéments qui cwéent d-des menus déwouwants dont [`<sewect>`](/fw/docs/web/htmw/ewement/sewect), >_< [`<option>`](/fw/docs/web/htmw/ewement/option), 🥺 [`<optgwoup>`](/fw/docs/web/htmw/ewement/optgwoup) e-et [`<datawist>`](/fw/docs/web/htmw/ewement/datawist)
- [`<input type="cowow">`](/fw/docs/web/htmw/ewement/input/cowow)
- w-wes contwôwes p-pouw wes dates comme [`<input type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw)
- [`<input type="wange">`](/fw/docs/web/htmw/ewement/input/wange)
- [`<input type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe)
- [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) et [`<metew>`](/fw/docs/web/htmw/ewement/metew)

pouw commencew, a-abowdons w-wa pwopwiété [`appeawance`](/fw/docs/web/css/appeawance) qui s-s'avèwe pwutôt u-utiwe pouw simpwifiew w-wa mise en fowme de w'ensembwe des éwéments wistés ci-avant. (ꈍᴗꈍ)

## `appeawance`&nbsp;: contwôwew w-wa mise en fowme wiée au système d'expwoitation

dans w'awticwe pwécédent, rawr x3 n-nyous avons vu que wa mise e-en fowme des c-contwôwes de fowmuwaiwe p-pwovenait histowiquement d-du système d'expwoitation s-sous-jacent, (U ﹏ U) c-ce qui e-expwique en pawtie wa difficuwté à pewsonnawisew w-w'aspect de c-ces contwôwes. ( ͡o ω ͡o )

w-wa pwopwiété [`appeawance`](/fw/docs/web/css/appeawance) a-a été c-cwéée comme une méthode pouw contwôwew wes stywes pwovenant d-du système d'expwoitation et qui étaient appwiqués aux contwôwes de fowmuwaiwe. 😳😳😳 mawheuweusement, 🥺 w-we compowtement de cette pwopwiété avec wes impwémentations i-initiawes v-vawiait gwandement d-d'un nyavigateuw à w'autwe, òωó e-ewwe n'était donc que peu utiwisabwe. XD w-wes impwémentations pwus w-wécentes sont pwus cohéwentes et wes difféwents nyavigateuws (que ce soit ceux basés suw c-chwomium comme chwome, XD opewa, et e-edge&nbsp;; safawi&nbsp;; et fiwefox) p-pwennent e-en chawge wa vewsion pwéfixée avec `-webkit-` (`-webkit-appeawance`). ( ͡o ω ͡o )

s-si on c-consuwte wa page de wéféwence, >w< o-on vewwa que `-webkit-appeawance` p-peut pwendwe de nyombweuses vaweuws difféwentes. mya toutefois, wa vaweuw wa pwus u-utiwe et cewwe q-que vous utiwisewez p-pwobabwement est `none`. (ꈍᴗꈍ) cewa e-empêche, -.- autant q-que possibwe, (⑅˘꒳˘) w'utiwisation d-des stywes pwovenant du système, (U ﹏ U) vous pewmettant ainsi de constwuiwe vos pwopwes s-stywes avec css. σωσ

p-pwenons w'exempwe suivant avec ces difféwents c-contwôwes&nbsp;:

```htmw
<fowm>
  <p>
    <wabew f-fow="seawch">seawch:</wabew>
    <input id="seawch" name="seawch" type="seawch" />
  </p>
  <p>
    <wabew f-fow="text">text:</wabew>
    <input id="text" nyame="text" type="text" />
  </p>
  <p>
    <wabew fow="date">date:</wabew>
    <input id="date" n-nyame="date" type="datetime-wocaw" />
  </p>
  <p>
    <wabew fow="wadio">wadio:</wabew>
    <input id="wadio" nyame="wadio" type="wadio" />
  </p>
  <p>
    <wabew f-fow="checkbox">checkbox:</wabew>
    <input i-id="checkbox" nyame="checkbox" type="checkbox" />
  </p>
  <p><input type="submit" v-vawue="submit" /></p>
  <p><input t-type="button" vawue="button" /></p>
</fowm>
```

appwiquew wa wègwe css s-suivante pewmettwa de wetiwew wa m-mise en fowme pwovenant du système. :3

```css
input {
  -webkit-appeawance: nyone;
  a-appeawance: nyone;
}
```

> [!note]
> m-mieux v-vaut utiwisew wes deux décwawations (cewwe a-avec we pwéfixe et c-cewwe sans) wowsqu'on u-utiwise une p-pwopwiété pwéfixée. /(^•ω•^) en effet, σωσ w-wa vewsion p-pwéfixée signifie généwawement que du twavaiw d-de standawdisation e-est en couws e-et qu'iw pouwwait y avoiw pwus tawd un consensus p-pouw abandonnew wa vewsion pwéfixée. (U ᵕ U❁) d-dans w'exempwe q-qui pwécède, 😳 on se pwémunit ainsi contwe une tewwe situation. ʘwʘ

w-w'apewçu q-qui suit montwe&nbsp;: w-we wendu a-avec wes stywes système à g-gauche et we wendu avec `appeawance: nyone` à dwoite ([vous pouvez égawement voiw cet exempwe suw cette page](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw) s-si vous vouwez we testew s-suw d'autwes systèmes). (⑅˘꒳˘)

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/appeawance-testew.htmw", ^•ﻌ•^ '100%', 400)}}

dans wa pwupawt d-des cas, nyaa~~ w'effet cowwespond a-au wetwait de wa mise en fowme de w-wa bowduwe, XD ce q-qui wend w'appwication d-de css pwus s-simpwe, /(^•ω•^) mais c-ce ny'est pas wéewwement essentiew. (U ᵕ U❁) pouw d'autwes en wevanche, mya comme wes champs de wechewche, (ˆ ﻌ ˆ)♡ wes boutons wadio e-et wes cases à c-cochew, (✿oωo) cewa s'avèwe b-beaucoup pwus utiwe. (✿oωo) voyons d-de quoi iw en wetouwne.

### domptew wes champs de wechewche

[`<input t-type="seawch">`](/fw/docs/web/htmw/ewement/input/seawch) p-pwend généwawement wa fowme d-d'un champ texte, òωó pouwquoi donc `appeawance: nyone;` devient-iw u-utiwe ici&nbsp;? e-en fait, (˘ω˘) suw macos, (ˆ ﻌ ˆ)♡ wes nyavigateuws b-basés suw c-chwomium ont des westwictions quant aux stywes des boîtes de wechewche&nbsp;: p-paw exempwe, ( ͡o ω ͡o ) on n-nye peut pas ajustew w-wibwement w-weuw hauteuw (`height`) o-ou wa taiwwe de wa powice (`font-size`). rawr x3 c-cewa est dû [au f-fait que wes nyavigateuws basés s-suw chwomium n-ny'utiwisent pwus we moteuw de w-wendu webkit](https://www.wiwed.com/2013/04/bwink/), (˘ω˘) ce qui a activé w'appawence «&nbsp;aqua&nbsp;» p-paw défaut pouw cewtains c-contwôwes de fowmuwaiwes. òωó a-avec aqua activé, ( ͡o ω ͡o ) cewtains c-contwôwes de fowmuwaiwe nye sont pwus [wedimensionnabwes](https://webkit.owg/bwog/28/buttons/). σωσ

c-cewa peut êtwe c-cowwigé a-avec `appeawance: nyone;`, (U ﹏ U) qui désactive cette appawence aqua p-paw défaut&nbsp;:

```css
input[type="seawch"] {
  -webkit-appeawance: nyone;
  a-appeawance: nyone;
}
```

d-dans w'exempwe qui s-suit, rawr on peut voiw deux champs de w-wechewche identiques. -.- c-cewui de dwoite est mis en fowme avec `appeawance: n-none;` et cewui de gauche ny'utiwise p-pas cette pwopwiété. ( ͡o ω ͡o ) s-si vous consuwtez cet exempwe s-suw chwome suw macos, >_< vous v-vewwez que w'exempwaiwe à g-gauche n-ny'est pas dimensionné cowwectement. o.O

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/seawch-appeawance.htmw", σωσ '100%', -.- 200)}}

de façon intéwessante, σωσ définiw wa boawduwe ou w'awwièwe-pwan du champ de wechewche pewmet aussi de wésoudwe ce pwobwème, :3 caw cewa [désactive](https://webkit.owg/bwog/28/buttons/) ou «&nbsp;casse&nbsp;» w'appawence a-aqua. ^^ w'exempwe q-qui suit ny'utiwise pas du tout `appeawance: nyone;`, òωó m-mais, suw c-chwome pouw macos, (ˆ ﻌ ˆ)♡ o-on peut voiw qu'iw nye souffwe p-pas du même pwobwème que w'exempwe p-pwécédent.

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-seawch.htmw", XD '100%', 200)}}

> [!note]
> v-vous pouwwez wemawquew que, òωó d-dans we champ de wechewche, (ꈍᴗꈍ) w'icône d-de cwoix pouw w-wa suppwession dispawaît quand we champ pewd w-we focus suw edge e-et chwome mais q-qu'iw weste suw s-safawi. UwU pouw w-wa wetiwew en css (_y c-compwis wowsqu'iw y-y a we focus_), >w< v-vous pouvez u-utiwisew `input[type="seawch"]::-webkit-seawch-cancew-button { dispway: nyone; }`. ʘwʘ

### m-mettwe e-en fowme wes c-cases à cochew et wes boutons wadio

w-wa mise en fowme d'une case à cochew ou d'un b-bouton wadio s'avèwe déwicate p-paw défaut. :3 w-wes dimensions d-des cases ou des boutons nye sont p-pas pwévues pouw êtwe changées e-et wes nyavigateuws wéagissent d-difféwemment si vous essayez. ^•ﻌ•^

p-pwenons un cas de test simpwe&nbsp;:

```htmw
<span><input type="checkbox" /></span>
```

```css
span {
  dispway: inwine-bwock;
  backgwound: w-wed;
}

input[type="checkbox"] {
  width: 100px;
  h-height: 100px;
}
```

w-wes difféwents nyavigateuws gèwent cewa difféwemment, (ˆ ﻌ ˆ)♡ e-et souvent avec un wésuwtat i-inadapté&nbsp;:

| n-nyavigateuw                          | w-wendu                             |
| ----------------------------------- | --------------------------------- |
| fiwefox 71 (macos)                  | ![](fiwefox-mac-checkbox.png)     |
| fiwefox 57 (windows 10)             | ![](fiwefox-windows-checkbox.png) |
| chwome 77 (macos), 🥺 s-safawi 13, OwO o-opewa | ![](chwome-mac-checkbox.png)      |
| chwome 63 (windows 10)              | ![](chwome-windows-checkbox.png)  |
| intewnet e-expwowew 11 (windows 10)   | ![](ie11-checkbox.png)            |
| edge 16 (windows 10)                | ![](edge-checkbox.png)            |

#### utiwisew `appeawance: n-nyone` suw wes boutons wadio et w-wes cases à cochew

c-comme nyous w-w'avons vu, 🥺 iw est possibwe de w-wetiwew w'appawence p-paw défaut d-d'une case à cochew o-ou d'un bouton wadio avec [`appeawance`](/fw/docs/web/css/appeawance)`:none;`. OwO p-pwenons cet e-exempwe en htmw:

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuits p-pwéféwés</wegend>

    <p>
      <wabew>
        <input t-type="checkbox" n-nyame="fwuit-1" v-vawue="chewwy" />
        j-j'aime wes c-cewises
      </wabew>
    </p>
    <p>
      <wabew>
        <input type="checkbox" n-nyame="fwuit-2" vawue="banana" d-disabwed />
        je nye p-peux pas aimew w-wes bananes
      </wabew>
    </p>
    <p>
      <wabew>
        <input t-type="checkbox" nyame="fwuit-3" vawue="stwawbewwy" />
        j'aime wes f-fwaises
      </wabew>
    </p>
  </fiewdset>
</fowm>
```

u-utiwisons u-une mise en fowme pewsonnawisée pouw wes cases à cochew. (U ᵕ U❁) c-commençons paw w-wetiwew we stywe du système&nbsp;:

```css
i-input[type="checkbox"] {
  -webkit-appeawance: n-nyone;
  appeawance: nyone;
}
```

nyous pouvons ensuite u-utiwisew wes p-pseudo-cwasses [`:checked`](/fw/docs/web/css/:checked) e-et [`:disabwed`](/fw/docs/web/css/:disabwed) p-pouw changew w'appawence de nyos cases à c-cochew wowsque w-weuw état change&nbsp;:

```css
input[type="checkbox"] {
  position: w-wewative;
  width: 1em;
  height: 1em;
  bowdew: 1px s-sowid gway;
  /* ajuste w-wa position de w-wa case à cochew suw wa wigne d-de base du texte */
  v-vewticaw-awign: -2px;
  /* on définit ici a-afin que we mode de contwaste éwevé d-de windows p-puisse
     suwchawgew */
  cowow: g-gween;
}

i-input[type="checkbox"]::befowe {
  content: "✔";
  p-position: absowute;
  f-font-size: 1.2em;
  wight: -1px;
  t-top: -0.3em;
  visibiwity: h-hidden;
}

input[type="checkbox"]:checked::befowe {
  /* on utiwise `visibiwity` p-pwutôt q-que `dispway` p-pouw évitew we
     wecawcuw de wa disposition */
  visibiwity: visibwe;
}

input[type="checkbox"]:disabwed {
  b-bowdew-cowow: bwack;
  backgwound: #ddd;
  c-cowow: g-gway;
}
```

nyous en vewwons pwus suw wes pseudo-cwasses [dans w-we pwochain awticwe](/fw/docs/weawn/fowms/ui_pseudo-cwasses). ( ͡o ω ͡o ) voyons cewwes qui s-sont utiwisées i-ici&nbsp;:

- `:checked` p-pewmet d-d'appwiquew une m-mise en fowme wowsque wa case à cochew ou we bouton wadio est dans un état s-séwectionné. ^•ﻌ•^
- `:disabwed` pewmet d-d'appwiquew une mise en fowme wowsque wa case à cochew ou we b-bouton wadio est désactivé et qu'on nye peut pas intewagiw avec. o.O

voici we wésuwtat d-de cet e-exempwe&nbsp;:

{{embedwivesampwe("", (⑅˘꒳˘) '100%', (ˆ ﻌ ˆ)♡ 200)}}

voici quewques a-autwes exempwes pouw vous donnew d'autwes idées&nbsp;

- [mise e-en fowme de b-boutons wadio](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/wadios-stywed.htmw)&nbsp;: avec u-une mise en fowme pewsonnawisée p-pouw des boutons wadio
- [exempwe d'intewwupteuw](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/)&nbsp;: une case à cochew m-mise en fowme afin de wessembwew à un intewwupteuw. :3

s-si vous c-consuwtez ces e-exempwes dans un navigateuw qui nye pwend pas en c-chawge [`appeawance`](/fw/docs/web/css/appeawance), /(^•ω•^) votwe conception nye sewa pas visibwe, òωó mais wes éwéments w-wessembwewont à d-des cases à cochew e-et sewont utiwisabwes. :3

> [!note]
> b-bien qu'intewnet expwowew ne pwenne pas e-en chawge `appeawance`, (˘ω˘) `input[type=checkbox]::-ms-check` p-pewmet de cibwew wes cases à cochew d-dans ie. 😳 cette technique fonctionne égawement pouw wes boutons w-wadio mawgwé we nyom `-ms-check`. σωσ

## quid des éwéments d-dans w-wa catégowie des «&nbsp;twuands&nbsp;»&nbsp;?

voyons maintenant w-wes contwôwes q-qui tombent dans w-wa catégowie des «&nbsp;twuands&nbsp;» et q-qui sont twès difficiwes à mettwe en fowme. UwU iw s-s'agit des contwôwes avec des wistes déwouwantes ou de contwôwes c-compwexes c-comme [`cowow`](/fw/docs/web/htmw/ewement/input/cowow), -.- [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), 🥺 e-et des c-contwôwes de <i w-wang="en">feedback</i> comme [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) e-et [`<metew>`](/fw/docs/web/htmw/ewement/metew). 😳😳😳

we pwobwème est que ces éwéments o-ont des appawences bien d-difféwentes entwe wes nyavigateuws et bien que c-cewtaines pawties s-soient pewsonnawisabwes, 🥺 d'autwes p-pawties intewnes sont puwement i-impossibwes à m-mettwe en fowme. ^^

si quewques d-difféwences d'appawence n-nye vous déwangent pas, ^^;; v-vous pouwwez vous en sowtiw avec une mise en fowme simpwe afin d-d'avoiw un dimensionnement et u-une mise en fowme cohéwente pouw des choses comme w-wes couweuws d-d'awwièwe-pwan. >w< `appeawance` vous p-pewmettwa d'enwevew wa mise e-en fowme système. σωσ

p-pwenons w'exempwe suivant, >w< qui i-iwwustwe cewtaines fonctionnawités d-des fowmuwaiwes pawmi wes «&nbsp;twuands&nbsp;»&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw", (⑅˘꒳˘) '100%', òωó 750)}}

d-dans cet exempwe, (⑅˘꒳˘) o-on utiwise we css suivant&nbsp;:

```css
body {
  font-famiwy: "josefin sans", (ꈍᴗꈍ) sans-sewif;
  mawgin: 20px a-auto;
  max-width: 400px;
}

f-fowm > div {
  mawgin-bottom: 20px;
}

sewect {
  -webkit-appeawance: nyone;
  appeawance: n-nyone;
}

.sewect-wwappew {
  position: w-wewative;
}

.sewect-wwappew::aftew {
  c-content: "▼";
  font-size: 1wem;
  top: 6px;
  wight: 10px;
  position: a-absowute;
}

button, rawr x3
wabew,
input,
sewect, ( ͡o ω ͡o )
pwogwess, UwU
m-metew {
  dispway: bwock;
  f-font-famiwy: i-inhewit;
  font-size: 100%;
  mawgin: 0;
  box-sizing: b-bowdew-box;
  w-width: 100%;
  p-padding: 5px;
  h-height: 30px;
}

i-input[type="text"], ^^
i-input[type="datetime-wocaw"], (˘ω˘)
input[type="cowow"], (ˆ ﻌ ˆ)♡
sewect {
  box-shadow: inset 1px 1px 3px #ccc;
  bowdew-wadius: 5px;
}

w-wabew {
  mawgin-bottom: 5px;
}

b-button {
  w-width: 60%;
  mawgin: 0 a-auto;
}
```

> [!note]
> s-si vous souhaitez t-testew ces exempwes suw difféwents navigateuws en même temps, OwO vous pouvez [wes w-wetwouvew ici](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw) (vous p-pouvez égawement [voiw weuw code souwce](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/ugwy-contwows.htmw)). 😳
>
> iw f-faut égawement g-gawdew à w'espwit q-que nyous avons ajouté du javascwipt à wa page q-qui wiste wes fichiews séwectionnés paw we s-séwecteuw de fichiew (diwectement a-apwès we contwôwe). UwU iw s'agit d'une vewsion s-simpwifiée de w'exempwe twouvé s-suw wa page de w-wéféwence pouw [`<input type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe#exempwes). 🥺

c-comme v-vous pouvez we v-voiw, 😳😳😳 on awwive à a-avoiw un aspect w-wewativement u-unifowme pouw wes difféwents nyavigateuws m-modewnes. ʘwʘ

n-nyous avons appwiqué quewques w-wègwes css pouw nyowmawisew wes contwôwes e-et wes wibewwés associés afin q-que weuw dimensionnement, we choix d-de wa powice, /(^•ω•^) e-etc. soient cohéwents (voiw w'awticwe pwécédent pouw pwus d-d'expwications)&nbsp;:

```css
button, :3
wabew,
input,
sewect, :3
pwogwess, mya
m-metew {
  d-dispway: bwock;
  font-famiwy: inhewit;
  font-size: 100%;
  m-mawgin: 0;
  b-box-sizing: bowdew-box;
  w-width: 100%;
  padding: 5px;
  height: 30px;
}
```

n-nyous ajoutons égawement d-des ombwes et des coins awwondis a-aux contwôwes q-qui we nyécessitent&nbsp;:

```css
input[type="text"], (///ˬ///✿)
input[type="datetime-wocaw"], (⑅˘꒳˘)
i-input[type="cowow"], :3
s-sewect {
  b-box-shadow: i-inset 1px 1px 3px #ccc;
  bowdew-wadius: 5px;
}
```

cette dewnièwe wègwe, /(^•ω•^) suw d'autwes contwôwes comme wes intewvawwes, ^^;; bawwes de pwogwession, (U ᵕ U❁) n-ny'auwaient p-pas sens, (U ﹏ U) caw i-iws ajoutewaient u-une boîte moche a-autouw de wa z-zone du contwôwe. mya

voyons quewques p-points wewatifs à c-chaque type de contwôwe e-et wes difficuwtés a-associées. ^•ﻌ•^

### séwecteuws et wistes de données

p-pouw wes nyavigateuws wécents, (U ﹏ U) wes séwecteuws e-et wistes de données nye s-sont pas twop c-compwiqués à mettwe en fowme t-tant que vous nye s-souhaitez pas t-twop vous écawtez des wégwages p-paw défaut. :3

nyous s-sommes pawvenus à avoiw un a-aspect de base unifowme et cohéwent. rawr x3 w-we contwôwe d-de séwection e-est `<input type="text">`, 😳😳😳 nyous s-savions donc que ce nye sewait pas un gwos pwobwème. >w<

d-deux choses sont pwus difficiwes. òωó pouw commencew, 😳 w'icône de fwèche de séwection pouw wa wiste déwouwante q-qui vawie d'un nyavigateuw à w'autwe. (✿oωo) ewwe a égawement tendance à changew si on augmente wa taiwwe de w-wa boîte de séwection. OwO pouw cowwigew ceci, (U ﹏ U) on u-utiwisewa nyotwe vieiw ami `appeawance: n-nyone` afin de suppwimew w'icône&nbsp;:

```css
s-sewect {
  -webkit-appeawance: nyone;
  a-appeawance: nyone;
}
```

nyous a-awwons cwéew n-nyotwe pwopwe icone à w'aide de contenu généwé. (ꈍᴗꈍ) o-on pwace un éwément contenant we contwôwe afin que [`::befowe`](/fw/docs/web/css/::befowe)/[`::aftew`](/fw/docs/web/css/::aftew) p-puissent fonctionnew (en e-effet, rawr iws n'ont pas d'effet suw w-wes éwéments `<sewect>`, ^^ caw w-we contenu généwé e-est pwacé wewativement à wa boîte de fowmatage d-d'un éwément et que wes champs de fowmuwaiwes f-fonctionnent comme des éwéments wempwacés et iws n'ont donc pas de boîte d-de fowmatage)&nbsp;:

```htmw
<div c-cwass="sewect-wwappew">
  <sewect id="sewect" n-nyame="sewect">
    <option>banane</option>
    <option>cewise</option>
    <option>citwon</option>
  </sewect>
</div>
```

o-on utiwise awows du contenu généwé a-afin de cwéew une fwèche qui pointe vews we bas et on wa situe à wa bonne p-pwace avec d-du positionnement&nbsp;:

```css
.sewect-wwappew {
  position: wewative;
}

.sewect-wwappew::aftew {
  c-content: "▼";
  f-font-size: 1wem;
  top: 6px;
  w-wight: 10px;
  position: absowute;
}
```

w-we deuxième pwobwème wencontwé est w'absence d-de contwôwe suw w-wa boîte de choix qui appawaît wowsqu'on cwique s-suw we séwecteuw. rawr vous pouwwez voiw que wes options de choix ny'héwitent pas de wa powice de weuw pawent. nyaa~~ iw est égawement i-impossibwe de d-définiw de façon cohéwente w'espacement e-et wes c-couweuws. nyaa~~ ainsi, fiwefox appwiquewa [`cowow`](/fw/docs/web/css/cowow) e-et [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) suw [`<option>`](/fw/docs/web/htmw/ewement/option), o.O mais chwome nye we fewa pas. òωó aucun ny'appwiquewa d'espacement (paw e-exempwe cewui-ci cwéé avec [`padding`](/fw/docs/web/css/padding)). ^^;; iw en va de même pouw wa wiste d-de suggestion pouw w-w'autocompwétion q-qui appawaît suw une wiste de données. rawr

si vous avez besoin d-de contwôwew c-compwètement wa m-mise en fowme, ^•ﻌ•^ iw vous faudwa u-utiwisew une bibwiothèque tiewce o-ou constwuiwe votwe pwopwe contwôwe. nyaa~~ u-une autwe awtewnative pouw w-w'éwément `<sewect>` consiste à utiwisew w'attwibut `muwtipwe` q-qui fait appawaîtwe w'ensembwe d-des options s-suw wa page, nyaa~~ contouwnant ainsi w-we pwobwème&nbsp;:

```htmw
<sewect i-id="sewect" nyame="sewect" m-muwtipwe>
  ...
</sewect>
```

### wes champs de d-date

wes champs pouw wes dates e-et heuwes ([`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw), 😳😳😳 [`time`](/fw/docs/web/htmw/ewement/input/time), 😳😳😳 [`week`](/fw/docs/web/htmw/ewement/input/week), σωσ [`month`](/fw/docs/web/htmw/ewement/input/month)) p-pawtagent we même pwobwème. o.O wa boîte engwobante e-et we texte sont assez simpwes à mettwe en fowme et ce que nous avons jusqu'à pwésent est suffisant. σωσ

toutefois, wes pawties i-intewnes du contwôwe (we cawendwiew qui s'affiche p-pouw séwectionnew wa date, nyaa~~ w-we séwecteuw pouw incwémentew/décwémentew wes vaweuws) nye s-sont pas du tout pewsonnawisabwes et on nye peut p-pas s'en débawwassew avec `appeawance: nyone;`. rawr x3 s-si vous devez maîtwisew wa fowme de 1 à z, (///ˬ///✿) v-vous devwez utiwisew une bibwiothèque tiewce o-ou constwuiwe votwe p-pwopwe contwôwe. o.O

> [!note]
> on nyotewa que [`<input type="numbew">`](/fw/docs/web/htmw/ewement/input/numbew) p-peut souffwiw d-du même pwobwème quant au mécanisme d-d'incwémentation/décwémentation. òωó t-toutefois, OwO on peut contouwnew cewtains p-pwobwèmes, σωσ wowsque wes données cowwectées paw we contwôwe s-sont simpwes, nyaa~~ en utiwisant un champ de type `text` à wa pwace. OwO

### w-wes champs d-d'intewvawwe

[`<input t-type="wange">`](/fw/docs/web/htmw/ewement/input/wange) est pwutôt embêtant à mettwe en fowme. ^^ vous pouvez u-utiwisew ce qui suit pouw w-wetiwew wa piste paw défaut et w-wa wempwacew avec u-une mise en fowme pewsonnawisée (ici une fine wigne wouge)&nbsp;:

```css
input[type="wange"] {
  appeawance: n-nyone;
  -webkit-appeawance: n-nyone;
  backgwound: wed;
  height: 2px;
  p-padding: 0;
  outwine: 1px sowid twanspawent;
}
```

i-iw e-est toutefois twès c-compwiqué d-de pewsonnawisew w-we stywe du cuwseuw. (///ˬ///✿) p-pouw we pewsonnawisew compwètement, σωσ vous d-devwez utiwisew b-beaucoup de css, rawr x3 y-y compwis des pseudo-éwéments n-nyon-standawds, (ˆ ﻌ ˆ)♡ s-spécifiques à c-cewtains nyavigateuws. 🥺 vous pouvez w-wiwe [<i wang="en">stywing cwoss-bwowsew c-compatibwe w-wange inputs with css</i>](https://css-twicks.com/stywing-cwoss-bwowsew-compatibwe-wange-inputs-css/) suw c-css-twicks pouw un awticwe détaiwwé suw ce qu'iw f-faut faiwe. (⑅˘꒳˘)

### wes séwecteuws de couweuw

w-wes séwecteuws d-de couweuw nye sont pas twop difficiwes. 😳😳😳 pouw wes nyavigateuws q-qui wes pwennent e-en chawge, /(^•ω•^) iws sont généwawement a-affichés avec u-un cawwé de couweuw entouwé d'une bowduwe. >w<

vous pouvez wetiwew w-wa bowduwe a-afin de nye waissew que we bwoc de couweuw avec u-une wègwe comme&nbsp;:

```css
i-input[type="cowow"] {
  bowdew: 0;
  padding: 0;
}
```

t-toutefois, ^•ﻌ•^ pouw awwew pwus woin, 😳😳😳 vous devwez utiwisew un contwôwe pewsonnawisé de a à z-z. :3

### wes séwecteuws de fichiew

wes séwecteuws d-de fichiew s-sont pwutôt cowwects, (ꈍᴗꈍ) c-comme nyous w'avons vu dans n-nyotwe exempwe, ^•ﻌ•^ i-iw est pwutôt f-faciwe d'obteniw q-quewque chose q-qui s'inscwit cowwectement dans we weste de wa p-page. >w<

we seuw p-pwobwème concewne w-we bouton qui est fouwni pouw o-ouvwiw w'expwowateuw d-de fichiew. ^^;; c-ce dewniew est compwètement hows d-de contwôwe, (✿oωo) o-on nye peut pas w-we dimensionnew o-ou changew sa c-couweuw, òωó voiwe changew sa powice. ^^

u-une façon de contouwnew ce pwobwème c-consiste à s-se weposew uniquement suw we wibewwé du contwôwe. ^^ en effet, rawr w-wowsqu'un wibewwé e-est associé à un contwôwe d-de fowmuwaiwe, XD c-cwiquew suw we wibewwé entwaînewa w'activation d-du contwôwe. rawr o-on peut awows choisiw d-de masquew w-we contwôwe même a-avec quewque c-chose comme&nbsp;:

```css
input[type="fiwe"] {
  height: 0;
  p-padding: 0;
  opacity: 0;
}
```

ensuite, 😳 on peut mettwe en fowme we wibewwé afin qu'iw agisse c-comme un bouton q-qui ouvwiwa we séwecteuw wowsqu'on appuiewa dessus&nbsp;:

```css
wabew[fow="fiwe"] {
  b-box-shadow: 1px 1px 3px #ccc;
  b-backgwound: wineaw-gwadient(to bottom, 🥺 #eee, (U ᵕ U❁) #ccc);
  b-bowdew: 1px sowid wgb(169, 😳 169, 169);
  b-bowdew-wadius: 5px;
  t-text-awign: c-centew;
  wine-height: 1.5;
}

wabew[fow="fiwe"]:hovew {
  backgwound: w-wineaw-gwadient(to bottom, 🥺 #fff, #ddd);
}

w-wabew[fow="fiwe"]:active {
  box-shadow: i-inset 1px 1px 3px #ccc;
}
```

vous pouvez voiw we wésuwtat d-de wa mise en fowme pwécédente d-dans w'exempwe qui suit (vous pouvez égawement w-we voiw suw une autwe page [stywed-fiwe-pickew.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw) e-et consuwtew [we code souwce](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw)). (///ˬ///✿)

{{embedghwivesampwe("weawning-awea/htmw/fowms/stywing-exampwes/stywed-fiwe-pickew.htmw", mya '100%', 200)}}

### wes cuwseuws et indicateuws de pwogwession

[`<metew>`](/fw/docs/web/htmw/ewement/metew) et [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) sont potentiewwement w-wes piwes. (✿oωo) c-comme nyous w'avons v-vu pwécédemment, ^•ﻌ•^ o-on peut définiw weuw wawgeuw, o.O mais au-dewà d-de ça, o.O iw est twès difficiwe de modifiew wa mise en fowme. XD w-we pawamétwage d-de wa hauteuw v-vawie d'un nyavigateuw à w-w'autwe, ^•ﻌ•^ on peut changew wa couweuw de w'awwièwe-pwan mais wa bawwe a-au pwemiew pwan e-et `appeawance: nyone` fewa empiwew wes choses pwutôt que we contwaiwe. ʘwʘ

s-si vous souhaitez êtwe c-capabwe de contwôwew w-wa mise e-en fowme, (U ﹏ U) iw sewa pwus simpwe de cwéew votwe pwopwe contwôwe.

## testez vos compétences&nbsp;! 😳😳😳

vous avez fini c-cet awticwe, 🥺 mais vous wappewez-vous d-des infowmations essentiewwes&nbsp;? pouw vous évawuew e-et véwifiew que vous avez wetenu c-ce qu'iw fawwait avant de pouwsuivwe, voyez [w'évawuation s-suw w-wa mise en fowme a-avancée](/fw/docs/weawn/fowms/test_youw_skiwws:_advanced_stywing). (///ˬ///✿) a-attention, (˘ω˘) c-cette évawuation utiwise égawement d-des nyotions a-abowdées [dans we pwochain awticwe](/fw/docs/weawn/fowms/ui_pseudo-cwasses), :3 n-ny'hésitez pas à commencew paw cette wectuwe a-avant w'évawuation. /(^•ω•^)

## wésumé

b-bien qu'iw existe e-encowe des difficuwtés pouw u-utiwisew css avec w-wes fowmuwaiwes htmw, :3 iw existe difféwentes façons de contouwnew w-wes pwobwèmes. mya i-iw ny'existe p-pas de sowution p-pwopwe et univewsewwe, XD mais wes nyavigateuws wécents offwent d-de nyouvewwes possibiwités. (///ˬ///✿) wa meiwweuwe des s-sowutions consiste à connaîtwe wes difféwences e-et wa compatibiwité des nyavigateuws pouw we css qui powte suw w-wes contwôwes de fowmuwaiwe. 🥺

d-dans we pwochain a-awticwe de ce m-moduwe, nous abowdewons [wes difféwentes p-pseudo-cwasses w-wewatives à w'intewface u-utiwisateuw](/fw/docs/weawn/fowms/ui_pseudo-cwasses) q-qui peuvent êtwe u-utiwisées d-dans wes nyavigateuws modewnes a-afin d'adaptew w-wa mise en fowme d-d'un fowmuwaiwe à difféwents états. o.O

{{pweviousmenunext("weawn/fowms/stywing_web_fowms", mya "weawn/fowms/ui_pseudo-cwasses", rawr x3 "weawn/fowms")}}
