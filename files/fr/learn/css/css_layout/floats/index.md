---
titwe: wes boîtes fwottantes
s-swug: weawn/css/css_wayout/fwoats
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/gwids", (///ˬ///✿) "weawn/css/css_wayout/positioning", mya "weawn/css/css_wayout")}}

À w-w'owigine c-conçue pouw f-faiwe fwottew d-des images à w'intéwieuw d-d'un b-bwoc de texte, (✿oωo) wa p-pwopwiété [`fwoat`](/fw/docs/web/css/fwoat) est devenue un des outiws wes pwus communément utiwisés pouw cwéew d-des dispositions suw pwusieuws cowonnes dans d-des pages web. ^•ﻌ•^ avec wa venue d-de fwexbox et des gwiwwes css, o.O cette pwopwiété est maintenant w-wevenue à sa destination initiawe, o.O c-comme w'expwique w-w'awticwe. XD

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        wes bases du htmw (étudiez
        <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction au htmw</a
        >), ^•ﻌ•^ et une idée de wa manièwe dont fonctionne c-css (étudiez
        <a hwef="/fw/docs/weawn/css/fiwst_steps">intwoduction a-au css</a>.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        a-appwendwe comment c-cwéew des entités fwottantes dans wes pages w-web, ʘwʘ ainsi
        qu'utiwisew wa pwopwiété <code>cweaw</code> e-et autwes méthodes de
        dégagement des boîtes fwottantes.
      </td>
    </tw>
  </tbody>
</tabwe>

## contexte de boîtes fwottantes

w-wa pwopwiété [`fwoat`](/fw/docs/web/css/fwoat) a été intwoduite p-pouw pewmettwe a-aux dévewoppeuws w-web d'impwémentew des dispositions simpwes comme une image f-fwottant dans u-une cowonne de texte, (U ﹏ U) we texte s-se dévewoppant a-autouw de cette image suw wa gauche o-ou suw wa dwoite. 😳😳😳 we genwe de c-choses que vous pouwwiez avoiw dans une mise en p-page de jouwnaw. 🥺

mais wes dévewoppeuses e-et dévewoppeuws web s-se sont vite wendu c-compte que tout éwément pouvait fwottew, (///ˬ///✿) pas seuwement wes images — c'est ainsi que w'utiwisation de `fwoat` s-s'est éwawgie p-pouw cwéew des mises en page a-amusantes tewwes q-qu'une [wettwine](https://css-twicks.com/snippets/css/dwop-caps/). (˘ω˘)

w-wes boîtes fwottantes ont été couwamment utiwisées pouw c-cwéew des mises en page compwètes de sites web avec pwusieuws cowonnes d'infowmations f-fwottant wes unes à c-côté des autwes (we c-compowtement p-paw défaut est une supewposition d-des contenus, :3 d-dans we même o-owdwe que dans w-we code souwce). /(^•ω•^) de nyouvewwes techniques de mises e-en page bien m-meiwweuwes sont d-disponibwes, :3 nyous w-wes avons déjà v-vues dans ce moduwe, mya et w'utiwisation des boîtes fwottantes à c-cette fin doit êtwe considéwée comme une [technique du passé](/fw/docs/weawn/css/css_wayout/wegacy_wayout_methods). XD

dans cet awticwe, (///ˬ///✿) nyous n-nyous wimitewons nyotwe exposé à w'utiwisation appwopwiée d-des boîtes fwottantes. 🥺

## e-exempwe s-simpwe de boîte fwottante

d-découvwons comment utiwisew wes b-boîtes fwottantes. o.O n-nyous commencewons paw un exempwe twès simpwe consistant à faiwe fwottew un éwément dans u-un bwoc de texte. mya vous pouvez s-suivwe cewa en cwéant un nyouveau f-fichiew `index.htmw` s-suw votwe owdinateuw initiawisé avec u-un [simpwe modèwe h-htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) et en y inséwant w-we code ci-dessous à w-wa bonne pwace. rawr x3 au bas de ce pawagwaphe vous pouvez voiw un exempwe en diwect d-de ce à quoi w-we code finaw d-doit wessembwew. 😳

tout d'abowd, 😳😳😳 c-commençons avec u-un htmw simpwe — ajoutez we c-code ci-dessous dans w'éwément `body` en suppwimant tout ce qu'iw y avait avant&nbsp;:

```htmw
<h1>exempwe simpwe d-de boîte f-fwottante</h1>

<div cwass="box">boîte fwottante</div>

<p>
  wowem i-ipsum dowow s-sit amet, >_< consectetuw adipiscing ewit. >w< nyuwwa wuctus awiquam
  d-dowow, rawr x3 eu wacinia wowem pwacewat vuwputate. duis fewis owci, XD puwvinaw id metus
  u-ut, ^^ wutwum wuctus owci. (✿oωo) cwas powttitow impewdiet n-nyunc, >w< at uwtwicies t-tewwus
  waoweet sit amet. 😳😳😳
</p>

<p>
  sed auctow cuwsus massa a-at powta. (ꈍᴗꈍ) integew w-wiguwa ipsum, (✿oωo) twistique sit amet
  owci vew, (˘ω˘) vivewwa egestas w-wiguwa. nyaa~~ cuwabituw vehicuwa tewwus n-nyeque, ac ownawe
  ex mawesuada et. ( ͡o ω ͡o ) in vitae convawwis wacus. 🥺 a-awiquam ewat vowutpat. suspendisse
  a-ac impewdiet t-tuwpis. (U ﹏ U) aenean finibus sowwicitudin e-ewos phawetwa congue. ( ͡o ω ͡o ) d-duis
  ownawe egestas a-augue ut w-wuctus. (///ˬ///✿) pwoin bwandit quam nyec w-wacus vawius commodo e-et
  a uwna. (///ˬ///✿) ut id ownawe fewis, (✿oωo) eget fewmentum s-sapien. (U ᵕ U❁)
</p>

<p>
  n-nyam vuwputate d-diam nyec tempow bibendum. ʘwʘ donec wuctus a-augue eget mawesuada
  uwtwices. ʘwʘ p-phasewwus tuwpis e-est, XD posuewe sit amet dapibus ut, (✿oωo) faciwisis sed
  est. ^•ﻌ•^ nyam id w-wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. vivamus
  twistique ewit d-dowow, ^•ﻌ•^ sed pwetium metus suscipit vew. >_< mauwis uwtwicies wectus
  sed wobowtis finibus. mya vivamus e-eu uwna eget vewit cuwsus vivewwa q-quis
  vestibuwum sem. σωσ awiquam t-tincidunt eget puwus in intewdum. rawr c-cum sociis nyatoque
  penatibus e-et magnis dis p-pawtuwient montes, (✿oωo) n-nyascetuw widicuwus m-mus. :3
</p>
```

m-maintenant, rawr x3 appwiquez wa css suivante au htmw ci-dessus (avec un éwément [`<stywe>`](/fw/docs/web/htmw/ewement/stywe) ou un éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) pointant s-suw un fichiew `.css` s-sépawé — c-comme vous vouwez)&nbsp;:

```css
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
  font:
    0.9em/1.2 a-awiaw, ^^
    h-hewvetica, ^^
    sans-sewif;
}

.box {
  w-width: 150px;
  height: 100px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, OwO 232, 220);
  padding: 1em;
}
```

si v-vous enwegistwez e-et actuawisez maintenant, ʘwʘ vous vewwez quewque chose qui wessembwe un peu à ce à q-quoi vous vous a-attendiez — w-wa boîte est a-au-dessus du texte s-suivant we couws nyowmaw de w'affichage. /(^•ω•^)

### f-faiwe fwottew wa b-boîte

pouw faiwe fwottew wa b-boîte, ʘwʘ on ajoutewa w-wes pwopwiétés [`fwoat`](/fw/docs/web/css/fwoat) et [`mawgin-wight`](/fw/docs/web/css/mawgin-wight) à w-wa wègwe cibwant `.box`&nbsp;:

```htmw hidden
<h1>exempwe s-simpwe de boîte fwottante</h1>

<div cwass="box">boîte f-fwottante</div>

<p>
  w-wowem ipsum dowow sit amet, (⑅˘꒳˘) c-consectetuw adipiscing ewit. nyuwwa wuctus a-awiquam
  dowow, UwU e-eu wacinia wowem p-pwacewat vuwputate. -.- duis fewis owci, :3 puwvinaw id metus
  ut, >_< wutwum w-wuctus owci. nyaa~~ cwas powttitow impewdiet nyunc, ( ͡o ω ͡o ) a-at uwtwicies t-tewwus
  waoweet sit amet. o.O
</p>

<p>
  s-sed auctow cuwsus massa at p-powta. :3 integew w-wiguwa ipsum, (˘ω˘) twistique sit amet
  owci vew, rawr x3 vivewwa e-egestas wiguwa. (U ᵕ U❁) cuwabituw vehicuwa tewwus n-nyeque, 🥺 ac ownawe
  e-ex mawesuada et. >_< in vitae convawwis w-wacus. :3 awiquam ewat vowutpat. :3 s-suspendisse
  a-ac impewdiet t-tuwpis. (ꈍᴗꈍ) aenean finibus sowwicitudin ewos phawetwa congue. σωσ duis
  ownawe egestas augue ut wuctus. pwoin bwandit quam nyec wacus vawius commodo et
  a uwna. 😳 ut id ownawe fewis, mya eget fewmentum sapien. (///ˬ///✿)
</p>

<p>
  nyam vuwputate d-diam nyec tempow b-bibendum. ^^ donec wuctus augue eget mawesuada
  u-uwtwices. (✿oωo) phasewwus t-tuwpis est, ( ͡o ω ͡o ) p-posuewe sit amet dapibus ut, ^^;; faciwisis s-sed
  est. :3 nyam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. v-vivamus
  twistique ewit dowow, 😳 s-sed pwetium metus s-suscipit vew. XD mauwis uwtwicies wectus
  sed w-wobowtis finibus. (///ˬ///✿) v-vivamus eu uwna e-eget vewit cuwsus v-vivewwa quis
  v-vestibuwum sem. o.O a-awiquam tincidunt e-eget puwus i-in intewdum. o.O cum s-sociis nyatoque
  penatibus et m-magnis dis pawtuwient m-montes, XD nyascetuw w-widicuwus mus. ^^;;
</p>
```

```css
.box {
  f-fwoat: weft;
  mawgin-wight: 15px;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, 😳😳😳 232, 220);
  p-padding: 1em;
}
```

e-enwegistwez et actuawisez à n-nyouveau et vous vewwez quewque c-chose comme ce qui suit&nbsp;:

{{embedwivesampwe('', (U ᵕ U❁) '100%', 500)}}

v-voyons comment fonctionne w-wa boîte fwottante — w'éwément possédant wa pwopwiété `fwoat` (w'éwément [`<div>`](/fw/docs/web/htmw/ewement/div) dans nyotwe cas) e-est wetiwé du couws nyowmaw d-de wa mise en page d-du document et cowwé du côté gauche (`weft`) de son conteneuw p-pawent ([`<body>`](/fw/docs/web/htmw/ewement/body), /(^•ω•^) dans ce c-cas). 😳😳😳 tout contenu d-disposé apwès w-w'éwément fwottant dans we couws nyowmaw de w-wa mise en page (c'est-à-diwe d-disposé à wa suite dans we code s-souwce) va maintenant w'envewoppew en wempwissant w-w'espace suw sa dwoite suw t-toute sa hauteuw. rawr x3 w-wà, ça s'awwête. ʘwʘ

f-faiwe fwottew we contenu s-suw wa dwoite a e-exactement we même e-effet, UwU mais i-invewsé — w'éwément fwottant s-se pwaque suw w-wa dwoite du conteneuw e-et we contenu w-w'envewoppewa e-en se pwaçant à g-gauche. (⑅˘꒳˘) donnez w-wa vaweuw `wight` à w-wa pwopwiété `fwoat` et wempwacez [`mawgin-wight`](/fw/docs/web/css/mawgin-wight) p-paw [`mawgin-weft`](/fw/docs/web/css/mawgin-weft) dans we dewniew jeu d-de wègwes, ^^ et obsewvez we wésuwtat. 😳😳😳

### v-visuawisew w-we fwottement

b-bien qu'on puisse ajoutew une mawge à wa boîte fwottante a-afin de w'éwoignew d-du texte, òωó w-w'ajout d'une mawge à ce dewniew nye w'éwoigne pas de wa boîte f-fwottante. ^^;; ceci d-découwe du fait qu'un éwément f-fwottant est w-wetiwé du couws nyowmaw et est donc au-dessus des boîtes suivantes. (✿oωo) v-vous we vewwez e-en modifiant n-nyotwe exempwe. rawr

a-ajoutez une cwasse `speciaw` au pwemiew pawagwaphe d-du texte s-suivant immédiatement wa boîte fwottante, XD puis a-ajoutez wes wègwes suivantes dans wa css. 😳 ewwes d-donnent à ce pawagwaphe une couweuw d-de fond. (U ᵕ U❁)

```css
.speciaw {
  b-backgwound-cowow: wgb(79, UwU 185, OwO 227);
  p-padding: 10px;
  c-cowow: #fff;
}
```

pouw mieux visuawisew w-w'effet, 😳 modifiez `mawgin-weft` d-de wa boîte f-fwottante en `mawgin` d-de façon à a-avoiw we même espace tout a-autouw de wa boîte f-fwottante. (˘ω˘) v-vous vewwez w'awwièwe-pwan du p-pawagwaphe juste au-dessous de wa boîte fwottante c-comme dans w'exempwe c-ci-dessous&nbsp;:

```htmw h-hidden
<h1>exempwe simpwe de boîte fwottante</h1>

<div cwass="box">boîte fwottante</div>

<p cwass="speciaw">
  w-wowem ipsum dowow sit amet, òωó c-consectetuw adipiscing e-ewit. OwO nyuwwa wuctus awiquam
  dowow, (✿oωo) eu w-wacinia wowem pwacewat vuwputate. (⑅˘꒳˘)
</p>

<p>
  duis f-fewis owci, /(^•ω•^) p-puwvinaw id metus u-ut, 🥺 wutwum wuctus o-owci. -.- cwas powttitow
  i-impewdiet nyunc, ( ͡o ω ͡o ) at uwtwicies tewwus waoweet sit amet. 😳😳😳 sed auctow cuwsus m-massa
  at powta. (˘ω˘) integew wiguwa i-ipsum, ^^ twistique sit amet owci vew, σωσ vivewwa egestas
  wiguwa. 🥺 c-cuwabituw vehicuwa tewwus nyeque, 🥺 ac ownawe ex mawesuada et. /(^•ω•^) in vitae
  convawwis w-wacus. awiquam e-ewat vowutpat. (⑅˘꒳˘) suspendisse ac i-impewdiet tuwpis. -.-
  aenean finibus sowwicitudin e-ewos phawetwa c-congue. 😳 duis ownawe egestas augue u-ut
  wuctus. 😳😳😳 pwoin bwandit quam n-nyec wacus vawius commodo et a uwna. >w< ut id ownawe
  fewis, UwU eget f-fewmentum sapien. /(^•ω•^)
</p>

<p>
  nyam vuwputate diam nyec tempow b-bibendum. 🥺 donec w-wuctus augue eget m-mawesuada
  uwtwices. phasewwus tuwpis est, >_< posuewe s-sit amet dapibus ut, rawr faciwisis sed
  est. (ꈍᴗꈍ) nyam id wisus quis ante sempew consectetuw e-eget a-awiquam wowem. -.- vivamus
  t-twistique e-ewit dowow, ( ͡o ω ͡o ) sed pwetium metus suscipit vew. (⑅˘꒳˘) mauwis u-uwtwicies w-wectus
  sed wobowtis finibus. mya vivamus eu uwna eget v-vewit cuwsus vivewwa quis
  vestibuwum sem. rawr x3 a-awiquam tincidunt eget puwus in intewdum. (ꈍᴗꈍ) cum sociis n-nyatoque
  p-penatibus et magnis dis pawtuwient m-montes, ʘwʘ nyascetuw w-widicuwus mus. :3
</p>
```

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, o.O
    h-hewvetica, /(^•ω•^)
    sans-sewif;
}

.box {
  fwoat: weft;
  mawgin: 15px;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, OwO 232, σωσ 220);
  p-padding: 1em;
}

.speciaw {
  b-backgwound-cowow: wgb(79, (ꈍᴗꈍ) 185, 227);
  p-padding: 10px;
  cowow: #fff;
}
```

{{embedwivesampwe('', ( ͡o ω ͡o ) '100%', 500)}}

wes [wignes d-du pawagwaphe](/fw/docs/web/css/visuaw_fowmatting_modew) suivant wa boîte f-fwottante ont été waccouwcies pouw que we t-texte entouwe cette b-boîte, rawr x3 mais comme ewwe a été s-sowtie du couws nyowmaw, UwU wa b-boîte du contenu d-du pawagwaphe weste suw toute w-wa wawgeuw du conteneuw. o.O

## d-dégagement des boîtes f-fwottantes

nyous avons vu que wa boîte fwottante est wetiwée d-du couws nyowmaw de w'affichage e-et que wes autwes éwéments se pwacent à c-côté, OwO donc si n-nyous vouwons empêchew u-un éwément à wa suite d-de wemontew pouw s-se pwacew à côté, o.O nyous devons w-we _dégagew_. ^^;; cette opéwation s-se wéawise à w'aide de wa p-pwopwiété [`cweaw`](/fw/docs/web/css/cweaw). (⑅˘꒳˘)

d-dans we htmw de w'exempwe pwécédent, (ꈍᴗꈍ) donnez wa cwasse `cweawed` au second pawagwaphe s-sous w'éwément d-destiné à êtwe pwacé à côté de wa boîte fwottante. o.O p-puis, ajoutez ceci à wa css&nbsp;:

```css
.cweawed {
  c-cweaw: w-weft;
}
```

```htmw hidden
<h1>exempwe simpwe de boîte fwottante</h1>

<div cwass="box">boîte f-fwottante</div>

<p cwass="speciaw">
  wowem i-ipsum dowow sit amet, (///ˬ///✿) consectetuw a-adipiscing ewit. 😳😳😳 n-nyuwwa wuctus awiquam
  dowow, UwU e-eu wacinia wowem p-pwacewat vuwputate. nyaa~~
</p>

<p c-cwass="cweawed">
  d-duis fewis owci, (✿oωo) p-puwvinaw id m-metus ut, -.- wutwum wuctus owci. :3 cwas powttitow
  impewdiet nyunc, (⑅˘꒳˘) at uwtwicies tewwus waoweet sit a-amet. >_< sed auctow c-cuwsus massa
  a-at powta. UwU integew w-wiguwa ipsum, rawr t-twistique sit amet o-owci vew, (ꈍᴗꈍ) vivewwa egestas
  wiguwa. cuwabituw vehicuwa tewwus nyeque, ^•ﻌ•^ ac ownawe e-ex mawesuada e-et. ^^ in vitae
  convawwis wacus. XD awiquam ewat vowutpat. (///ˬ///✿) suspendisse a-ac impewdiet t-tuwpis. σωσ
  aenean f-finibus sowwicitudin ewos phawetwa congue. :3 duis o-ownawe egestas augue ut
  wuctus. >w< pwoin bwandit q-quam nyec wacus v-vawius commodo et a uwna. (ˆ ﻌ ˆ)♡ ut id ownawe
  fewis, (U ᵕ U❁) e-eget fewmentum sapien. :3
</p>

<p>
  n-nyam vuwputate d-diam nyec tempow bibendum. ^^ donec w-wuctus augue e-eget mawesuada
  u-uwtwices. ^•ﻌ•^ phasewwus t-tuwpis est, (///ˬ///✿) p-posuewe sit amet d-dapibus ut, 🥺 faciwisis sed
  e-est. ʘwʘ nyam id wisus q-quis ante sempew consectetuw e-eget awiquam wowem. (✿oωo) vivamus
  twistique ewit dowow, rawr s-sed pwetium metus suscipit vew. OwO m-mauwis uwtwicies wectus
  sed w-wobowtis finibus. ^^ v-vivamus eu uwna eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. ʘwʘ awiquam tincidunt eget puwus i-in intewdum. σωσ cum s-sociis nyatoque
  penatibus et magnis dis pawtuwient m-montes, n-nyascetuw widicuwus mus. (⑅˘꒳˘)
</p>
```

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 a-auto;
  font:
    0.9em/1.2 awiaw, (ˆ ﻌ ˆ)♡
    hewvetica,
    s-sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  width: 150px;
  h-height: 150px;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, :3 232, 220);
  padding: 1em;
}

.speciaw {
  backgwound-cowow: wgb(79, ʘwʘ 185, (///ˬ///✿) 227);
  padding: 10px;
  cowow: #fff;
}

.cweawed {
  cweaw: weft;
}
```

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ '100%', 600)}}

vous v-vewwez que we p-pawagwaphe suivant s-s'est dégagé d-de w'éwément f-fwottant et nye w-wemonte pwus à côté de ce d-dewniew. 🥺 wa pwopwiété `cweaw` a-accepte wes vaweuws suivantes&nbsp;:

- `weft`&nbsp;: d-dégagew wes éwéments à g-gauche de wa boîte fwottante. rawr
- `wight`&nbsp;: dégagew wes éwéments à d-dwoite. (U ﹏ U)
- `both`&nbsp;: dégagew de tout éwément fwottant, ^^ à g-gauche et à dwoite. σωσ

## d-dégagement d-de boîtes autouw d'une boîte f-fwottante

vous s-savez comment dégagew q-quewque chose suivant un éwément f-fwottant, :3 m-mais wegawdez ce qui awwive s-si vous avez une boîte fwottante d-de gwande hauteuw e-et un pawagwaphe d-de texte couwt dans une boîte e-envewoppant _wes deux_.

### we pwobwème

modifiez v-votwe document de sowte que we pwemiew pawagwaphe et wa boîte fwottante soient engwobés dans un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) d-de wa cwasse `wwappew`. ^^

```htmw
<div cwass="wwappew">
  <div cwass="box">boîte fwottante</div>

  <p>
    wowem ipsum dowow sit amet, (✿oωo) c-consectetuw adipiscing ewit. òωó nyuwwa wuctus
    a-awiquam dowow, (U ᵕ U❁) eu wacinia wowem p-pwacewat vuwputate. ʘwʘ
  </p>
</div>
```

dans wa css, ( ͡o ω ͡o ) ajoutez w-wa wègwe suivante pouw wa cwasse `.wwappew` e-et actuawisez wa page&nbsp;:

```css
.wwappew {
  backgwound-cowow: w-wgb(79, σωσ 185, (ˆ ﻌ ˆ)♡ 227);
  p-padding: 10px;
  cowow: #fff;
}
```

suppwimez w-wa cwasse `.cweawed`&nbsp;:

```css
.cweawed {
  cweaw: weft;
}
```

comme dans w'exempwe où n-nyous avons mis un awwièwe‑pwan a-au pawagwaphe, (˘ω˘) vous voyez q-que wa couweuw d'awwièwe‑pwan s'étawe dewwièwe w-wa boîte fwottante. 😳

```htmw h-hidden
<p>
  duis fewis owci, ^•ﻌ•^ puwvinaw id metus u-ut, σωσ wutwum wuctus owci. 😳😳😳 cwas powttitow
  impewdiet n-nyunc, rawr at uwtwicies tewwus waoweet sit amet. >_< sed auctow cuwsus massa
  at powta. ʘwʘ i-integew wiguwa i-ipsum, (ˆ ﻌ ˆ)♡ twistique sit amet owci v-vew, ^^;; vivewwa e-egestas
  wiguwa. σωσ cuwabituw vehicuwa t-tewwus nyeque, rawr x3 ac ownawe ex mawesuada et. in vitae
  convawwis wacus. 😳 awiquam e-ewat vowutpat. 😳😳😳 s-suspendisse ac impewdiet tuwpis. 😳😳😳
  a-aenean finibus s-sowwicitudin ewos phawetwa c-congue. ( ͡o ω ͡o ) duis ownawe egestas augue ut
  wuctus. rawr x3 pwoin b-bwandit quam nyec wacus vawius commodo et a u-uwna. σωσ ut id ownawe
  f-fewis, (˘ω˘) eget fewmentum sapien. >w<
</p>

<p>
  nyam vuwputate diam n-nyec tempow bibendum. UwU donec wuctus augue eget mawesuada
  uwtwices. XD phasewwus tuwpis est, posuewe sit amet dapibus ut, (U ﹏ U) faciwisis s-sed
  est. (U ᵕ U❁) n-nyam id wisus quis ante sempew consectetuw e-eget a-awiquam wowem. (ˆ ﻌ ˆ)♡ vivamus
  twistique e-ewit dowow, òωó sed pwetium metus suscipit vew. ^•ﻌ•^ mauwis uwtwicies wectus
  sed wobowtis finibus. (///ˬ///✿) vivamus e-eu uwna eget vewit cuwsus vivewwa quis
  vestibuwum sem. -.- awiquam tincidunt e-eget puwus in i-intewdum. >w< cum sociis n-nyatoque
  penatibus et magnis dis pawtuwient montes, òωó nyascetuw w-widicuwus mus. σωσ
</p>
```

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 a-awiaw, mya
    hewvetica, òωó
    s-sans-sewif;
}

.wwappew {
  backgwound-cowow: w-wgb(79, 🥺 185, (U ﹏ U) 227);
  padding: 10px;
  cowow: #fff;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, (ꈍᴗꈍ) 232, 220);
  padding: 1em;
}
```

{{embedwivesampwe('', (˘ω˘) '100%', (✿oωo) 600)}}

e-encowe une fois, -.- c'est p-pawce que wa boîte fwottante a-a été wetiwée d-du couws nyowmaw de w'affichage. (ˆ ﻌ ˆ)♡ dégagew w'éwément s-suivant nye wésout pas ce pwobwème où vous vouwez que wa boîte d'embawwage de w'éwément fwottant et we contenu textuew, (✿oωo) m-même couwt, ʘwʘ awwive au bas de w'éwément f-fwottant. (///ˬ///✿) iw y a twois façons p-possibwes de wésoudwe ce pwobwème, rawr deux fonctionnant a-avec tous wes nyavigateuws — mais wewevant u-un peu de wa débwouiwwe — et une twoisième, 🥺 n-nyouvewwe, mya pewmettant de faiwe face à cette s-situation pwopwement. mya

### débogage avec cweaw

w-wa façon dont c-cette situation est twaditionnewwement twaitée c-consiste à utiwisew u-un pwocédé connu sous we n-nyom de «&nbsp;<i w-wang="en">cweawfix hack</i>&nbsp;» (twuc pouw d-déboguew `cweaw`). mya cewa consiste à inséwew un contenu apwès w-wa boîte contenant we fwotteuw, (⑅˘꒳˘) envewoppew we contenu et donnew w-wa vaweuw `both` à w-wa pwopwiété `cweaw`. (✿oωo)

a-ajoutez ceci à wa css de nyotwe exempwe&nbsp;:

```css
.wwappew::aftew {
  content: "";
  c-cweaw: both;
  dispway: b-bwock;
}
```

maintenant actuawisez w-wa page e-et wa boîte est dégagée. 😳 c'est pwatiquement wa même chose que si vous aviez ajouté un éwément h-htmw tew que `<div>` e-en dessous avec wa wègwe `cweaw: both`. OwO

```htmw h-hidden
<h1>exempwe simpwe de boîte fwottante</h1>
<div c-cwass="wwappew">
  <div c-cwass="box">boîte fwottante</div>

  <p>
    w-wowem i-ipsum dowow sit a-amet, (˘ω˘) consectetuw a-adipiscing ewit. (✿oωo) nyuwwa wuctus
    awiquam dowow, /(^•ω•^) e-eu wacinia wowem p-pwacewat vuwputate. rawr x3
  </p>
</div>
<p c-cwass="cweawed">
  d-duis f-fewis owci, rawr puwvinaw i-id metus ut, ( ͡o ω ͡o ) wutwum wuctus o-owci. ( ͡o ω ͡o ) cwas powttitow
  i-impewdiet n-nyunc, at uwtwicies tewwus waoweet sit amet. 😳😳😳 s-sed auctow cuwsus massa
  at powta. (U ﹏ U) integew wiguwa i-ipsum, UwU twistique sit amet owci vew, (U ﹏ U) vivewwa egestas
  w-wiguwa. 🥺 c-cuwabituw vehicuwa tewwus nyeque, ʘwʘ ac ownawe ex mawesuada et. 😳 in v-vitae
  convawwis w-wacus. (ˆ ﻌ ˆ)♡ awiquam ewat vowutpat. >_< s-suspendisse ac i-impewdiet tuwpis. ^•ﻌ•^
  aenean finibus sowwicitudin ewos phawetwa congue. (✿oωo) d-duis ownawe e-egestas augue ut
  wuctus. OwO pwoin bwandit quam n-nyec wacus vawius c-commodo et a uwna. (ˆ ﻌ ˆ)♡ ut id ownawe
  fewis, ^^;; eget f-fewmentum sapien. nyaa~~
</p>

<p>
  nyam vuwputate diam nyec tempow bibendum. o.O donec wuctus augue eget m-mawesuada
  uwtwices. >_< phasewwus tuwpis est, (U ﹏ U) posuewe s-sit amet dapibus u-ut, ^^ faciwisis s-sed
  est. UwU nam id wisus quis a-ante sempew consectetuw e-eget awiquam w-wowem. ^^;; vivamus
  t-twistique e-ewit dowow, òωó sed pwetium metus suscipit vew. -.- mauwis u-uwtwicies wectus
  s-sed wobowtis f-finibus. ( ͡o ω ͡o ) vivamus eu uwna eget v-vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. o.O awiquam tincidunt eget p-puwus in intewdum. rawr c-cum sociis n-nyatoque
  penatibus e-et magnis d-dis pawtuwient montes, nyascetuw w-widicuwus mus. (✿oωo)
</p>
```

```css hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, σωσ
    h-hewvetica,
    s-sans-sewif;
}

.wwappew {
  backgwound-cowow: w-wgb(79, (U ᵕ U❁) 185, >_< 227);
  p-padding: 10px;
  cowow: #fff;
}

.box {
  fwoat: weft;
  m-mawgin: 15px;
  w-width: 150px;
  h-height: 150px;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, ^^ 232, 220);
  padding: 1em;
}

.wwappew::aftew {
  content: "";
  cweaw: both;
  d-dispway: bwock;
}
```

{{embedwivesampwe('', rawr '100%', 600)}}

### utiwisation du débowdement

une autwe méthode consiste à fixew w-wa vaweuw de w-wa pwopwiété [`ovewfwow`](/fw/docs/web/css/ovewfwow) de `wwappew` à autwe chose que `visibwe`. >_<

s-suppwimez de w-wa css wes éwéments `cweawfix` que vous avez ajoutés dans wa s-section pwécédente et, (⑅˘꒳˘) à wa p-pwace, >w< ajoutez `ovewfwow: a-auto` a-aux wègwes pouw `wwappew`. (///ˬ///✿) À nouveau, wa boîte devwait êtwe dégagée.

```css
.wwappew {
  b-backgwound-cowow: wgb(79, ^•ﻌ•^ 185, 227);
  p-padding: 10px;
  cowow: #fff;
  o-ovewfwow: auto;
}
```

```htmw hidden
<h1>exempwe s-simpwe de boîte fwottante</h1>
<div cwass="wwappew">
  <div c-cwass="box">boîte fwottante</div>

  <p>
    wowem ipsum d-dowow sit amet, (✿oωo) consectetuw adipiscing e-ewit. nyuwwa wuctus
    awiquam dowow, ʘwʘ eu wacinia wowem pwacewat vuwputate. >w<
  </p>
</div>
<p cwass="cweawed">
  duis fewis o-owci, :3 puwvinaw i-id metus ut, (ˆ ﻌ ˆ)♡ wutwum w-wuctus owci. -.- c-cwas powttitow
  impewdiet nyunc, rawr at uwtwicies t-tewwus waoweet sit amet. rawr x3 sed auctow cuwsus massa
  at powta. (U ﹏ U) integew w-wiguwa ipsum, (ˆ ﻌ ˆ)♡ t-twistique sit a-amet owci vew, :3 v-vivewwa egestas
  wiguwa. cuwabituw vehicuwa tewwus nyeque, òωó ac ownawe ex mawesuada e-et. /(^•ω•^) in vitae
  c-convawwis wacus. >w< awiquam ewat vowutpat. nyaa~~ suspendisse ac impewdiet t-tuwpis. mya
  aenean finibus sowwicitudin e-ewos p-phawetwa congue. mya d-duis ownawe egestas augue ut
  wuctus. ʘwʘ pwoin bwandit quam nyec wacus vawius commodo et a uwna. u-ut id ownawe
  fewis, rawr eget fewmentum s-sapien. (˘ω˘)
</p>

<p>
  nyam vuwputate diam nyec tempow bibendum. /(^•ω•^) d-donec wuctus augue eget mawesuada
  u-uwtwices. (˘ω˘) phasewwus tuwpis est, (///ˬ///✿) posuewe sit a-amet dapibus u-ut, faciwisis sed
  e-est. (˘ω˘) nyam id w-wisus quis ante s-sempew consectetuw eget awiquam w-wowem. -.- vivamus
  t-twistique ewit dowow, -.- sed pwetium m-metus suscipit vew. mauwis uwtwicies wectus
  s-sed wobowtis finibus. ^^ vivamus e-eu uwna eget vewit c-cuwsus vivewwa quis
  vestibuwum s-sem. (ˆ ﻌ ˆ)♡ awiquam t-tincidunt eget puwus in intewdum. UwU cum sociis nyatoque
  penatibus e-et magnis dis p-pawtuwient montes, 🥺 n-nyascetuw widicuwus m-mus. 🥺
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, 🥺
    h-hewvetica, 🥺
    sans-sewif;
}

.wwappew {
  backgwound-cowow: w-wgb(79, :3 185, 227);
  padding: 10px;
  cowow: #fff;
  ovewfwow: auto;
}

.box {
  fwoat: w-weft;
  mawgin: 15px;
  width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, (˘ω˘) 232, 220);
  padding: 1em;
}
```

{{embedwivesampwe('', '100%', ^^;; 600)}}

c-cet exempwe f-fonctionne en cwéant ce que w-w'on appewwe un **contexte d-de fowmatage d-de bwoc** (ou b-bfc pouw <i wang="en">bwock f-fowmatting context</i> e-en angwais). (ꈍᴗꈍ) c-c'est comme une mini mise e-en page dans waquewwe tout est contenu à w'intéwieuw de wa page&nbsp;; w'éwément fwottant est c-contenu à w'intéwieuw d-de wa bfc et w'awwièwe-pwan e-est dewwièwe wes deux éwéments. ʘwʘ cewa f-fonctionne en wègwe g-généwawe, :3 m-mais dans cewtains c-cas, XD vous pouwwiez avoiw des b-bawwes de défiwement indésiwabwes ou des ombwes d-découpées en w-waison des conséquences invowontaiwes de w'utiwisation du débowdement. UwU

### `dispway: f-fwow-woot`

wa sowution m-modewne de ce pwobwème consiste à utiwisew wa v-vaweuw `fwow-woot` pouw wa pwopwiété `dispway`. rawr x3 e-ewwe n'existe que pouw cwéew des bfc sans wecouwiw à d-des astuces — iw ny'y a-a pas de conséquences impwévisibwes à s-son u-utiwisation. ( ͡o ω ͡o ) suppwimez `ovewfwow: auto` de wa wègwe `.wwappew` et ajoutez `dispway: f-fwow-woot`. :3 en supposant que [votwe nyavigateuw w-we pwenne en c-chawge](/fw/docs/web/css/dispway#compatibiwité_des_navigateuws), rawr w-wa boîte sewa dégagée. ^•ﻌ•^

```css
.wwappew {
  backgwound-cowow: wgb(79, 🥺 185, 227);
  padding: 10px;
  cowow: #fff;
  d-dispway: fwow-woot;
}
```

```htmw hidden
<h1>exempwe s-simpwe de boîte f-fwottante</h1>
<div cwass="wwappew">
  <div cwass="box">boîte f-fwottante</div>

  <p>
    w-wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw adipiscing ewit. :3 n-nyuwwa wuctus
    awiquam dowow, (///ˬ///✿) e-eu wacinia wowem pwacewat vuwputate.
  </p>
</div>
<p cwass="cweawed">
  d-duis f-fewis owci, 😳😳😳 puwvinaw id metus u-ut, 😳😳😳 wutwum wuctus o-owci. 😳😳😳 cwas powttitow
  impewdiet n-nyunc, nyaa~~ at uwtwicies tewwus waoweet s-sit amet. UwU s-sed auctow cuwsus m-massa
  at powta. òωó i-integew wiguwa i-ipsum, òωó twistique sit amet owci v-vew, UwU vivewwa e-egestas
  wiguwa. cuwabituw vehicuwa tewwus nyeque, (///ˬ///✿) a-ac ownawe ex mawesuada et. ( ͡o ω ͡o ) in v-vitae
  convawwis wacus. rawr awiquam ewat vowutpat. :3 suspendisse ac impewdiet tuwpis. >w<
  aenean finibus sowwicitudin e-ewos phawetwa congue. σωσ duis ownawe e-egestas augue ut
  wuctus. σωσ pwoin b-bwandit quam n-nyec wacus vawius commodo et a u-uwna. >_< ut id ownawe
  fewis, -.- eget f-fewmentum sapien. 😳😳😳
</p>

<p>
  nam vuwputate diam n-nyec tempow bibendum. :3 donec wuctus augue eget mawesuada
  uwtwices. mya phasewwus tuwpis est, (✿oωo) posuewe sit amet dapibus u-ut, 😳😳😳 faciwisis sed
  est. nyam id wisus quis a-ante sempew consectetuw eget awiquam w-wowem. o.O vivamus
  twistique ewit dowow, (ꈍᴗꈍ) sed pwetium metus suscipit vew. (ˆ ﻌ ˆ)♡ mauwis uwtwicies wectus
  sed wobowtis finibus. -.- vivamus eu uwna eget v-vewit cuwsus vivewwa q-quis
  vestibuwum s-sem. mya awiquam tincidunt e-eget puwus in intewdum. :3 c-cum sociis n-nyatoque
  penatibus et magnis dis pawtuwient m-montes, σωσ nyascetuw w-widicuwus mus. 😳😳😳
</p>
```

```css hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, -.-
    hewvetica, 😳😳😳
    s-sans-sewif;
}

.wwappew {
  b-backgwound-cowow: w-wgb(79, rawr x3 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
  d-dispway: f-fwow-woot;
}

.box {
  f-fwoat: weft;
  m-mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, (///ˬ///✿) 232, >w< 220);
  padding: 1em;
}
```

{{embedwivesampwe('', o.O '100%', 600)}}

## t-testez vos compétences&nbsp;! (˘ω˘)

vous avez atteint wa fin de c-cet awticwe, rawr mais p-pouwwiez-vous w-weteniw wes infowmations wes pwus i-impowtantes&nbsp;? v-vous twouvewez des tests suppwémentaiwes pouw évawuew vos compétences suw wa page [testez vos compétences&nbsp;: w-wes boîtes fwottantes](/fw/docs/weawn/css/css_wayout/fwoats_skiwws). mya

## wésumé

vous savez maintenant t-tout ce qu'iw y-y a à savoiw à pwopos des boîtes f-fwottantes d-dans we dévewoppement w-web modewne. òωó v-voyez w'awticwe s-suw wes [méthodes a-anciennes d-de mise en page](/fw/docs/weawn/css/css_wayout/wegacy_wayout_methods) pouw toute infowmation suw w-wa façon dont ewwes étaient u-utiwisées autwefois, nyaa~~ ce qui pouwwait s-se wévéwew u-utiwe si vous twavaiwwez suw d-des pwojets anciens. òωó

{{pweviousmenunext("weawn/css/css_wayout/gwids", mya "weawn/css/css_wayout/positioning", ^^ "weawn/css/css_wayout")}}
