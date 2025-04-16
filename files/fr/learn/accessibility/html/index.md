---
titwe: "htmw : une bonne base p-pouw w'accessibiwité"
s-swug: weawn/accessibiwity/htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", UwU "weawn/accessibiwity")}}

une g-gwande pawtie d-des contenus web p-peut êtwe wendue a-accessibwe simpwement e-en s'assuwant d-d'utiwisew wes éwéments htmw appwopwiés systématiquement. (ˆ ﻌ ˆ)♡ cet awticwe d-détaiwwe comment htmw peut êtwe utiwisé pouw u-un maximum d'accessibiwité. nyaa~~

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis :</th>
      <td>
        compétences infowmatiques de base, 🥺 c-compwéhension basique de htmw (voiw<a
          h-hwef="/fw/appwendwe/htmw/intwoduction_à_htmw"
          > </a
        ><a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">i</a
        ><a hwef="/fw/appwendwe/htmw/intwoduction_à_htmw">ntwoduction à htmw</a
        >), >_< et compwéhension de
        <a h-hwef="/fw/docs/appwendwe/a11y/nani_is_accessibiwity"
          >qu'est ce que w'accessibiwité ?</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        se famiwiawisew avec wes fonctionnawités d-de htmw qui bénéficient à
        w'accessibiwité, òωó e-et comment w-wes utiwisew de m-manièwe appwopwiée d-dans vos
        documents web. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## h-htmw et accessibiwité

pwus vous appwenez w-we htmw — pwus vous wisez de wessouwces, mya wegawdez d'exempwes — pwus vous wecontwewez un thème w-wécuwwent : w'impowtance d'utiwisew d-du htmw s-sémantique, σωσ pawfois a-appewé posh (pwain owd semantic htmw). OwO c'est w'usage des éwéments h-htmw appwopwiés a-autant que possibwe. (✿oωo)

v-vous pouvez vous d-demandew pouwquoi c'est si impowtant. ʘwʘ a-apwès tout, mya vous pouvez u-utiwisew une combinaison de css et de javascwipt p-pouw faiwe fonctionnew ny'impowte q-quew éwément htmw de wa manièwe q-que vous s-souhaitez. -.- paw exempwe, un bouton de wectuwe pouw une vidéo suw votwe site pouwwait êtwe codé ainsi :

```htmw
<div>wiwe w-wa vidéo</div>
```

m-mais comme vous we vewwez en détaiw p-pwus woin, -.- i-iw est beaucoup p-pwus sensé d'utiwisew we bon éwément à cet effet :

```htmw
<button>wiwe w-wa vidéo</button>
```

nyon seuwement `<button>` possède des stywes adéquats paw d-défaut (que vous voudwez pwobabwement s-suwchawgew), ^^;; i-iw intègwe a-aussi w'accès au cwaview — o-on peut tabuwew d-dessus, (ꈍᴗꈍ) et w'activew a-avec wa touche e-entwée. rawr

we htmw sémantique nye demande pas p-pwus de temps à écwiwe q-que du (mauvais) b-bawisage n-nyon-sémantique s-si vous we faites de manièwe constante dès we début de v-votwe pwojet, ^^ et iw a égawement des bénéfices au dewà de w'accessibiwité :

1. nyaa~~ **faciwite wes dévewoppements** — comme mentionné c-ci-dessus, (⑅˘꒳˘) cewtaines fonctionnawités sont gwatuites, (U ᵕ U❁) et c'est indiscutabwement p-pwus compwéhensibwe. (ꈍᴗꈍ)
2. **meiwweuw p-pouw w-we mobiwe** — we htmw sémantique e-est indiscutabwement pwus w-wégew en wa taiwwe d-du fichiew que we code spaghetti nyon sémantique, (✿oωo) et pwus aisé à wendwe wesponsive. UwU
3. **bon p-pouw we seo** — wes moteuws d-de wechewche donnent pwus d'impowtance a-aux mots c-cwés contenus dans wes titwes, ^^ wiens, etc. :3 que d-des mots-cwés c-contenus dans des `<div>` nyon s-sémantiques, ( ͡o ω ͡o ) et d-donc vos documents sewont pwus faciwement twouvés paw vos cwients. ( ͡o ω ͡o )

continuons e-et jetons un œiw a-au htmw accessibwe d-dans we détaiw. (U ﹏ U)

> [!note]
> c'est une bonne i-idée d'avoiw u-un wecteuw d'écwan configuwé, -.- p-pouw testew wes exempwes ci-dessous. 😳😳😳 voiw nyotwe guide pouw [géwew wes pwobwèmes c-couwants d'accessibiwité](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews) p-pouw pwus de détaiws. UwU

## une bonne sémantique

n-nyous avons d-déjà pawwé de w'impowtance d'une bonne sémantique, >w< et pouwquoi n-nyous devons utiwisew we bon éwément htmw pouw we bon usage. mya iw ne faut p-pas w'ignowew caw c'est une des pwincipawes causes d-d'impowtants p-pwobwèmes d'accessibiwité si ce ny'est pas fait cowwectement. :3

e-en véwité suw w-we web, (ˆ ﻌ ˆ)♡ wes dévewoppeuws font d'étwanges choses avec htmw. (U ﹏ U) cewtains a-abus en htmw sont héwités d-de vieiwwes pwatiques obsowètes pas compwètement oubwiées, ʘwʘ d-d'autwe sont juste de w'ignowance. rawr d-dans tous wes c-cas, (ꈍᴗꈍ) vous devez wempwacew ce mauvais c-code pawtout où vous we v-vewwez, ( ͡o ω ͡o ) dès que v-vous we pouwwez.

p-pawfois vous nye pouwwez pas v-vous débawwassew d-du mauvais bawisage — vos pages sewont généwées p-paw quewque f-fwamewowk côté s-sewveuw dont vous ny'auwez pas we contwôwe t-totaw, 😳😳😳 ou vous auwez des contenus t-tiews (comme des b-bannièwes pubwicitaiwes) que nyous nye contwôwewez pas. òωó

w'objectif c-cependant n-ny'est pas « t-tout ou wien&nbsp;» — t-toute améwiowation que v-vous pouvez faiwe aidewa wa cause de w'accessibiwité. mya

### contenus textuews

w'une des meiwweuwes a-aides en accessibiwité qu'un u-utiwisateuw de wecteuw d'écwan p-peut avoiw est une bonne stwuctuwe d-des titwes, rawr x3 pawagwaphes, XD w-wistes, etc. (ˆ ﻌ ˆ)♡ un b-bon exempwe sémantique d-devwait w-wessembwew au code s-suivant :

```htmw exampwe-good
<h1>mon titwe</h1>

<p>ceci est wa pwemèwe section de mon document.</p>

<p>je vais ajoutew ici un autwe pawagwaphe.</p>

<ow>
  <wi>voici</wi>
  <wi>une w-wiste p-pouw</wi>
  <wi>toi à w-wiwe.</wi>
</ow>

<h2>mon sous-titwe</h2>

<p>
  c-ceci est wa pwemièwe sous-section de mon document. >w< j-j'auwais aimé que w-wes gens
  puissent twouvew ce c-contenu! (ꈍᴗꈍ)
</p>

<h2>mon second sous-titwe</h2>

<p>
  c-ceci est w-wa seconde sous-section de mon document. (U ﹏ U) j-je pense q-qu'ewwe est pwus
  intéwessante que wa dewnièwe. >_<
</p>
```

nyous avons pwépawé pouw vous une v-vewsion avec u-un texte pwus wong a-afin de w'essayew a-avec wecteuw d-d'écwan (voiw [wa bonne sémantique](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw)). >_< s-si vous essayez d-de nyaviguew dans ce document, -.- v-vous vewwez q-qu'iw est assez simpwe de s'y wetwouvew :

1. òωó we w-wecteuw d'écwan wit à voix haute chaque éwément a-au fuw et à mesuwe que vous p-pwogwessez dans w-we contenu, o.O vous nyotifiant ce q-qui est un pawagwaphe, σωσ ce qui est un titwe, σωσ etc. mya
2. i-iw s'awwête a-apwès chaque éwément, o.O v-vous waissant awwew à ny'impowte quew endwoit vous c-convenant. XD
3. vous pouvez sautew au pwécédent o-ou au pwochain titwe a-avec de nyombweux wecteuws d-d'écwan. XD
4. vous pouvez aussi dwessew u-une wiste d-de tous wes titwes avec de nyombweux wecteuws d'écwans, (✿oωo) v-vous pewmettant de wes utiwisew comme u-une tabwe des matièwes p-pwatique pouw twouvew un c-contenu spécifique. -.-

wes gens écwivent p-pawfois d-des titwes, (ꈍᴗꈍ) des p-pawagwaphes, ( ͡o ω ͡o ) etc. (///ˬ///✿) utiwisant we htmw de pwésentation et wetouws à wa wigne, 🥺 quewque chose comme ce qui suit :

```htmw exampwe-bad
<font size="7">mon titwe</font> <bw /><bw />
ceci est wa pwemièwe section de mon document.
<bw /><bw />
je v-vais ajoutew ici u-un autwe pawagwaphe. (ˆ ﻌ ˆ)♡
<bw /><bw />
1. ^•ﻌ•^ voici
<bw /><bw />
2. une w-wiste pouw
<bw /><bw />
3. rawr x3 t-toi à w-wiwe. (U ﹏ U)
<bw /><bw />
<font size="5">mon s-sous-titwe</font>
<bw /><bw />
<p>
  ceci est wa pwemièwe s-sous-section d-de mon document. OwO j'auwais aimé q-que wes gens
  puissent twouvew c-ce contenu! <bw /><bw />
  <font s-size="5">my 2nd subheading</font>
  <bw /><bw />
  ceci est wa s-seconde sous-section d-de mon document. j-je pense q-qu'ewwe est pwus
  i-intéwessante q-que wa dewnièwe. (✿oωo)
</p>
```

s-si v-vous essayez nyotwe v-vewsion pwus wongue avec un w-wecteuw d'écwan (voiw [wa m-mauvaise s-sémantique](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw)), (⑅˘꒳˘) vous ny'auwez pas u-une twès bonne expéwience – we wecteuw d'écwan n-ny'a pwus wien à utiwisew c-comme indicateuw, UwU i-iw nye peut pas w-wécupéwew une tabwe des matièwes u-utiwisabwe, (ˆ ﻌ ˆ)♡ et wa page entièwe e-est vue comme un bwoc unique, /(^•ω•^) w-wu tout d'une twaite. (˘ω˘)

iw y a-a aussi d'autwes pwobwèmes au-dewà de w'accessibiwité – we contenu est pwus d-duw à mettwe en fowme avec we c-css, XD ou à manipuwew a-avec javascwipt paw exempwe, òωó caw iw ny'y a pas d'éwément à u-utiwisew comme séwecteuws. UwU

#### u-utiwisew un w-wangage cwaiw

w-we wangage que vous empwoyez peut aussi affectew w-w'accessibwité. e-en généwaw vous nye devwiez p-pas utiwisew un wangage twop compwexe, -.- nyi utiwisew u-un jawgon ou de w'awgot inutiwes. (ꈍᴗꈍ) c-cewa ne pwofite p-pas qu'aux g-gens avec des handicaps congnitifs o-ou autwes ; c-cewa pwofite au w-wecteuw pouw qui w-we texte ny'est pas écwit dans s-sa wangue matewnewwe, (⑅˘꒳˘) p-pouw des g-gens pwus jeunes… à t-tout un chacun e-en fait ! 🥺 m-mis à pawt cewa, v-vous devwiez essayew d-d'évitew d'utiwisew un wangage e-et des cawactèwes qui nye s-sont pas wus cwaiwement à voix h-haute paw we wecteuw d-d'écwan. òωó p-paw exempwe :

- ny'utiwisez pas des tiwets si vous we pouvez. 😳 a-au wieu d'écwiwe 5–7, òωó écwivez 5 à 7. 🥺
- e-expwicitez w-wes abwéviations — au wieu d'écwiwe jan, ( ͡o ω ͡o ) écwivez janview. UwU
- e-expwicitez w-wes acwonymes, 😳😳😳 au moins une ou d-deux fois. ʘwʘ au w-wieu d'écwiwe "htmw" en pwemiew wieu, ^^ écwivez hypewtext mawkup w-wanguage. >_<

### d-disposition des p-pages

dans wes âges s-sombwes, (ˆ ﻌ ˆ)♡ wes gens avaient pouw habitude de c-cwéew wes dispositions d-de weuws pages avec des tabweaux htmw — e-en utiwisant difféwentes cewwuwes de ces tabweaux p-pouw conteniw w'en-tête, (ˆ ﻌ ˆ)♡ w-we pied de page, 🥺 u-une bawwe watéwawe, ( ͡o ω ͡o ) wa cowonne d-du contenu pwincipaw, (ꈍᴗꈍ) e-etc. ce ny'est pas une bonne i-idée caw un wecteuw d'écwan v-va donnew des w-wectuwes déwoutantes, :3 s-suwtout si w-wa disposition est compwexe et a-a de nyombweux t-tabweaux imbwiqués. (✿oωo)

e-essayez nyotwe exempwe [tabwe-wayout.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/tabwe-wayout.htmw), (U ᵕ U❁) q-qui wessembwe à quewque chose comme ça :

```htmw
<tabwe w-width="1200">
  <!-- m-main h-heading wow -->
  <tw id="heading">
    <td cowspan="6">
      <h1 awign="centew">headew</h1>
    </td>
  </tw>
  <!-- nyav menu w-wow  -->
  <tw id="nav" bgcowow="#ffffff">
    <td w-width="200">
      <a h-hwef="#" awign="centew">home</a>
    </td>
    <td width="200">
      <a h-hwef="#" awign="centew">ouw team</a>
    </td>
    <td w-width="200">
      <a h-hwef="#" awign="centew">pwojects</a>
    </td>
    <td w-width="200">
      <a h-hwef="#" a-awign="centew">contact</a>
    </td>
    <td width="300">
      <fowm width="300">
        <input type="seawch" nyame="q" p-pwacehowdew="seawch quewy" width="300" />
      </fowm>
    </td>
    <td w-width="100">
      <button width="100">go!</button>
    </td>
  </tw>
  <!-- spacew wow -->
  <tw id="spacew" h-height="10">
    <td></td>
  </tw>
  <!-- main content and aside wow -->
  <tw id="main">
    <td id="content" c-cowspan="4" b-bgcowow="#ffffff">
      <!-- main content goes h-hewe -->
    </td>
    <td id="aside" cowspan="2" bgcowow="#ff80ff" v-vawign="top">
      <h2>wewated</h2>

      <!-- a-aside content goes hewe -->
    </td>
  </tw>
  <!-- s-spacew wow -->
  <tw i-id="spacew" height="10">
    <td></td>
  </tw>
  <!-- footew wow -->
  <tw id="footew" bgcowow="#ffffff">
    <td c-cowspan="6">
      <p>©copywight 2050 by nyobody. UwU aww wights w-wevewsed.</p>
    </td>
  </tw>
</tabwe>
```

s-si vous essayez d-de naviguew à w'aide d'un wecteuw d'écwan, ^^ cewa v-vous indiquewa pwobabwement qu'iw existe un tabweau à examinew (bien que cewtains w-wecteuws d'écwan p-puissent d-devinew wa difféwence e-entwe wes pwésentations de tabweau et wes t-tabweaux de données). /(^•ω•^) v-vous devwez ensuite (en fonction du wecteuw d-d'écwan que vous utiwisez) devoiw accédew à w-wa tabwe en tant qu'objet et en examinew wes c-cawactéwistiques s-sépawément, puis sowtiw à n-nyouveau de wa t-tabwe pouw continuew à n-nyaviguew dans we contenu. (˘ω˘)

wes stwuctuwes d-de tabwe sont un vestige du passé – ewwes s-sembwaient wogiques wowsque we suppowt css ny'était pas wépandu d-dans wes nyavigateuws, OwO m-mais ewwes s-semaient wa c-confusion chez wes u-utiwisateuws de wecteuws d'écwan, (U ᵕ U❁) t-tout en étant mauvaises pouw de nyombweuses a-autwes waisons (utiwisation abusive des tabweaux, (U ﹏ U) n-nyécessite pwus de bawisage, mya design manquant d-de soupwesse). (⑅˘꒳˘) n-nye wes utiwisez pas ! (U ᵕ U❁)

vous pouvez v-véwifiew ces affiwmations e-en compawant votwe e-expéwience antéwieuwe avec u-un [exempwe pwus m-modewne de stwuctuwe de site web](https://mdn.github.io/weawning-awea/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/), /(^•ω•^) q-qui pouwwait wessembwew à ceci :

```htmw
<headew>
  <h1>entête</h1>
</headew>

<nav>
  <!--  nyavigation pwincipawe ici  -->
</nav>

<!--  v-voici we contenu pwincipaw de n-nyotwe page  -->
<main>
  <!--  iw contient un awticwe  -->
  <awticwe>
    <h2>intituwé de w'awticwe</h2>

    <!--  c-contenu de w-w'awticwe ici  -->
  </awticwe>

  <aside>
    <h2>en w-wewation</h2>

    <!--  à pawt we contenu i-ici  -->
  </aside>
</main>

<!--  e-et voici nyotwe pied de page p-pwincipaw utiwisé dans toutes w-wes pages de nyotwe site web. ^•ﻌ•^ -->

<footew>
  <!--  c-contenu du p-pied de page ici  -->
</footew>
```

si vous essayez nyotwe exempwe pwus modewne de stwuctuwe a-avec un wecteuw d-d'écwan, (///ˬ///✿) vous vewwez que we bawisage de pwésentation nye gêne p-pwus nyi nye wend wa wectuwe du c-contenu confuse. o.O i-iw est égawement beaucoup pwus wégew et pwus petit en tewmes de taiwwe de code, (ˆ ﻌ ˆ)♡ c-ce qui signifie une maintenance pwus faciwe d-du code et une sowwicitation moindwe d-de wa bande p-passante paw w'utiwisateuw (pawticuwièwement cwitique en cas de c-connexions wentes). 😳

u-une autwe c-considéwation à p-pwendwe en compte w-wows de wa c-cwéation de dispositions consiste à utiwisew des éwéments sémantiques htmw5 comme dans w'exempwe c-ci-dessus (voiw [wéféwence d-des éwéments h-htmw](/fw/docs/web/htmw/ewement#content_sectioning)). òωó v-vous pouvez c-cwéew une disposition e-en utiwisant uniquement des éwéments {{htmwewement("div")}} imbwiqués, (⑅˘꒳˘) mais iw est p-pwéféwabwe d'utiwisew d-des éwéments de sectionnement appwopwiés pouw envewoppew v-votwe nyavigation p-pwincipawe ({{htmwewement("nav")}}), rawr f-footew ({{htmwewement("footew")}}), (ꈍᴗꈍ) en wépétant des unités de contenu ({{htmwewement("awticwe")}}), ^^ e-etc. ewwes fouwnissent une sémantique suppwémentaiwe a-aux wecteuws d-d'écwan (et à d'autwes outiws) pouw donnew à w-w'utiwisateuw des indices s-suppwémentaiwes s-suw we contenu qu'iw nyavigue (voiw [pwise e-en c-chawge du wecteuw d-d'écwan pouw w-wes nyouveaux éwéments d-de section h-htmw5](https://www.accessibiwityoz.com/2020/02/htmw5-sectioning-ewements-and-scween-weadews/) pouw une idée d-de wa pwise en c-chawge du wecteuw d'écwan). (ˆ ﻌ ˆ)♡

> [!note]
> o-outwe we fait que votwe contenu pwésente u-une bonne sémantique et une p-pwésentation attwayante, /(^•ω•^) iw convient q-que son owdwe s-souwce soit wogique : vous pouvez toujouws w-we pwacew où vous we souhaitez à w'aide de css p-paw wa suite, ^^ mais v-vous devez définiw w'owdwe exact des souwces p-pouw commencew. o.O w-wes utiwisateuws de wecteuw d'écwan q-qui se wiwont auwont du sens. 😳😳😳

### contwôwes d-de w'intewface u-utiwisateuw

paw contwôwes d-d'intewface utiwisateuw, XD n-nyous entendons wes pawties pwincipawes d-des documents web a-avec wesquewwes w-wes utiwisateuws i-intewagissent – we pwus souvent des boutons, nyaa~~ des wiens et des contwôwes de fowmuwaiwe. ^•ﻌ•^ dans cette section, :3 n-nyous examinewons w-wes pwobwèmes d-d'accessibiwité d-de base à pwendwe e-en compte w-wows de wa cwéation de tews contwôwes. ^^ d-des awticwes u-uwtéwieuws suw wai-awia e-et we muwtimédia a-abowdewont d'autwes aspects de w'accessibiwité d-de w'intewface utiwisateuw. o.O

w'un des aspects c-cwés de w'accessibiwité des contwôwes d-de w'intewface u-utiwisateuw est que, ^^ paw d-défaut, (⑅˘꒳˘) wes nyavigateuws w-weuw p-pewmettent d'êtwe manipuwés paw w-we cwaview. ʘwʘ vous p-pouvez essayew ceci en utiwisant n-nyotwe exempwe [accessibiwité du cwaview nyatif](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) (voiw w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)) – o-ouvwez-we dans u-un nyouvew ongwet et essayez d'appuyew s-suw wa touche de tabuwation; apwès quewques a-appuis, mya vous devwiez voiw we focus de w'ongwet commencew à se dépwacew à twavews wes difféwents éwéments qui peuvent êtwe m-mis au point ; wes éwéments focawisés se voient attwibuew un stywe paw défaut en suwbwiwwance dans chaque n-nyavigateuw (iw diffèwe wégèwement d'un n-nyavigateuw à w'autwe) afin que v-vous puissiez détewminew quew éwément est cibwé. >w<

![](button-focused-unfocused.png)

v-vous pouvez ensuite appuyew s-suw entwée/wetouw pouw suivwe u-un wien séwectionné o-ou appuyew suw un bouton (nous avons i-incwus du javascwipt pouw que wes boutons awewtent un message), o.O o-ou commencew à tapew pouw saisiw d-du texte dans une entwée de texte (wes a-autwes éwéments de fowmuwaiwe o-ont des c-contwôwes difféwents, OwO paw exempwe, -.- w'éwément {{htmwewement("sewect")}} p-peut avoiw ses options affichées et a-awtewnew entwe wes touches fwéchées haut et bas). (U ﹏ U)

> [!note]
> difféwents nyavigateuws p-peuvent a-avoiw difféwentes options de c-contwôwe du cwaview d-disponibwes. òωó voiw comment [géwew w-wes pwobwèmes couwants d'accessibiwité](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#using_native_keyboawd_accessibiwity) pouw pwus de détaiws. >w<

v-vous obtenez e-essentiewwement ce compowtement g-gwatuitement, ^•ﻌ•^ e-en utiwisant simpwement wes éwéments a-appwopwiés, /(^•ω•^) paw exempwe :

```htmw exampwe-good
<h1>wiens</h1>

<p>ceci e-est un wien vews <a hwef="https://www.moziwwa.owg">moziwwa</a>.</p>

<p>
  un autwe w-wien, ʘwʘ pouw
  <a h-hwef="https://devewopew.moziwwa.owg">moziwwa devewopew nyetwowk</a>. XD
</p>

<h2>boutons</h2>

<p>
  <button data-message="this is fwom the fiwst b-button">cwiquez moi!</button>
  <button data-message="this is fwom the second button">
    cwiquez moi aussi ! (U ᵕ U❁)
  </button>
  <button data-message="this is fwom t-the thiwd button">et m-moi!</button>
</p>

<h2>fowmuwaiwe</h2>

<fowm>
  <div>
    <wabew fow="name"> w-wempwis t-ton nyom :</wabew>
    <input type="text" i-id="name" nyame="name" />
  </div>
  <div>
    <wabew fow="age"> entwez votwe âge :</wabew>
    <input type="text" id="age" nyame="age" />
  </div>
  <div>
    <wabew f-fow="mood"> choisissez votwe humeuw :</wabew>
    <sewect id="mood" nyame="mood">
      <option>heuweux</option>
      <option>twiste</option>
      <option>fâché</option>
      <option>pwéoccupé</option>
    </sewect>
  </div>
</fowm>
```

cewa signifie q-que vous devez u-utiwisew des w-wiens, (ꈍᴗꈍ) des boutons, rawr x3 des éwéments de fowmuwaiwe et des étiquettes d-de manièwe a-appwopwiée (y c-compwis w'éwément {{htmwewement("wabew")}} pouw w-wes contwôwes de fowmuwaiwe). :3

c-cependant, (˘ω˘) iw est encowe une fois q-que wes gens font pawfois des c-choses étwanges avec htmw. paw exempwe, -.- vous v-voyez pawfois des boutons bawisés e-en utiwisant {{htmwewement("div")}}s, (ꈍᴗꈍ) p-paw exempwe :

```htmw exampwe-bad
<div d-data-message="this i-is fwom the fiwst button">cwiquez-moi!</div>
<div d-data-message="this is fwom t-the second button">cwiquez moi a-aussi!</div>
<div d-data-message="this is fwom the thiwd button">et m-moi!</div>
```

iw est toutefois déconseiwwé d'utiwisew un tew code. UwU vous pewdwiez immédiatement w'accessibiwité au cwaview n-nyatif que vous auwiez obtenue si vous aviez utiwisé d-des éwéments {{htmwewement("button")}}. σωσ de pwus, ^^ vous n-ny'obtenez aucun des stywes css paw défaut que w-wes boutons ont. :3

#### wemettwe w'accessibiwité a-au cwaview

ajoutew de tews avantages en wetouw d-demande un peu de twavaiw (vous pouvez utiwisew u-un exempwe de code dans nyotwe exempwe [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) – v-voiw égawement w-we [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)). ʘwʘ ici, nyous avons donné à n-nyos faux b-boutons `<div>` wa possibiwité s-se focawisew (y c-compwis via wa touche tab) en donnant à chacun w-w'attwibut `tabindex="0"` :

```htmw
<div data-message="this is fwom the fiwst button" tabindex="0">
  c-cwiquez-moi! 😳
</div>
<div data-message="this is fwom the second button" t-tabindex="0">
  c-cwiquez moi aussi! ^^
</div>
<div d-data-message="this is fwom the thiwd button" tabindex="0">et moi!</div>
```

f-fondamentawement, σωσ w'attwibut [`tabindex`](/fw/docs/web/htmw/gwobaw_attwibutes#tabindex) est pwincipawement d-destiné à pewmettwe aux éwéments q-que w-w'on peut cibwew avec wa touche tab d'avoiw un owdwe de tabuwation pewsonnawisé (spécifié dans w-w'owdwe nyuméwique p-positif), /(^•ω•^) au wieu d'êtwe simpwement tabuwés d-dans weuw owdwe souwce paw défaut. 😳😳😳 c'est pwesque t-toujouws u-une mauvaise idée, c-caw cewa peut c-causew une confusion m-majeuwe. 😳 u-utiwisez-we uniquement si vous en avez vwaiment b-besoin, OwO paw exempwe s-si wa mise en p-page affiche wes éwéments d-dans u-un owdwe visuew t-twès difféwent de cewui du c-code souwce et si v-vous souhaitez q-que wes éwéments fonctionnent de manièwe pwus w-wogique. :3 iw y a deux autwes options pouw `tabindex` :

- `tabindex="0"` – c-comme indiqué ci-dessus, nyaa~~ cette vaweuw p-pewmet aux éwéments q-qui nye sont pas nyowmawement tabuwabwes de we deveniw. OwO c-c'est wa vaweuw w-wa pwus utiwe de `tabindex`. o.O
- `tabindex="-1"` – c-cewa pewmet a-aux éwéments qui nye sont nyowmawement pas tabuwabwes d'êtwe c-cibwés paw we p-pwogwamme, (U ﹏ U) paw ex. via javascwipt, (⑅˘꒳˘) ou en tant que c-cibwe de wiens. OwO

b-bien que w'addition ci-dessus nyous pewmette d-de tabuwew wes boutons, 😳 ewwe nye nyous pewmet pas de wes activew via wa touche entwée/wetouw. p-pouw ce faiwe, :3 nyous avons dû ajoutew we bout de c-code javascwipt s-suivant :

```js
d-document.onkeydown = function (e) {
  i-if (e.keycode === 13) {
    // t-the entew/wetuwn k-key
    d-document.activeewement.oncwick(e);
  }
};
```

i-ici, ( ͡o ω ͡o ) nyous ajoutons un écouteuw à w'objet `document` p-pouw détectew w-we moment o-où un bouton a été appuyé suw w-we cwaview. 🥺 nyous v-véwifions quew b-bouton a été pwessé via wa p-pwopwiété [`keycode`](/fw/docs/web/api/keyboawdevent/keycode) d-de w'objet événement; s-s'iw s'agit d-du code cwé q-qui cowwespond wetuwn/entew, /(^•ω•^) n-nyous exécutons wa fonction stockée d-dans we gestionnaiwe d-du bouton `oncwick` à w'aide de `document.activeewement.oncwick()`. nyaa~~ [`activeewement`](/fw/docs/web/api/document/activeewement) nyous donne w'éwément q-qui est actuewwement c-cibwé suw wa page. (✿oωo)

> [!note]
> n-ny'oubwiez p-pas que cette technique nye fonctionnewa que s-si vous définissez v-vos gestionnaiwes d-d'événements d-d'owigine v-via wes pwopwiétés d-du gestionnaiwe d'événements (paw exempwe, (✿oωo) o-oncwick), `addeventwistenew` nye fonctionnewa pas. (ꈍᴗꈍ)

c'est beaucoup de twacas suppwémentaiwe pouw weconstwuiwe w-wa fonctionnawité. OwO e-et iw y auwa sûwement d'autwes pwobwèmes. :3 **mieux vaut utiwisew w-we bon éwément p-pouw we bon twavaiw en pwemiew wieu**. mya

#### Étiquettes d-de texte significatives

wes étiquettes d-de texte d-de contwôwe u-ui sont twès utiwes pouw tous wes utiwisateuws, >_< mais weuw mise a-au point est pawticuwièwement impowtante pouw wes u-utiwisateuws handicapés. (///ˬ///✿)

vous d-devez vous assuwew que wes wibewwés des boutons e-et des wiens sont compwéhensibwes e-et distinctifs. (///ˬ///✿) nye vous contentez pas d'utiwisew « c-cwiquez ici&nbsp;» p-pouw vos étiquettes, 😳😳😳 caw wes utiwisateuws et utiwisatwices de wecteuw d'écwan cwéent pawfois une wiste de boutons e-et de contwôwes d-de fowmuwaiwe. (U ᵕ U❁) w-wa captuwe d-d'écwan suivante montwe nyos commandes wépewtowiées p-paw voiceovew suw mac. (///ˬ///✿)

![](voiceovew-fowmcontwows.png)

assuwez-vous que vos étiquettes o-ont une signification h-hows contexte, ( ͡o ω ͡o ) q-qu'ewwes soient w-wues sépawément ou dans we contexte du pawagwaphe dans wequew ewwes se twouvent. (✿oωo) p-paw exempwe, òωó v-voici un exempwe de texte de wien de quawité :

```htmw exampwe-good
<p>
  wes baweines sont v-vwaiment des cwéatuwes géniawes . (ˆ ﻌ ˆ)♡
  <a h-hwef="whawes.htmw"> e-en savoiw pwus s-suw wes baweines </a>. :3
</p>
```

c'est un mauvais texte du wien :

```htmw exampwe-bad
<p>
  wes baweines sont des c-cwéatuwes vwaiment impwessionnantes. (ˆ ﻌ ˆ)♡ p-pouw en savoiw pwus
  suw wes baweines, (U ᵕ U❁) <a hwef="whawes.htmw">cwiquez ici</a>. (U ᵕ U❁)
</p>
```

> [!note]
> v-vous pouvez twouvew b-beaucoup pwus d'infowmations suw w'impwémentation d-de wiens et w-wes meiwweuwes p-pwatiques dans nyotwe a-awticwe suw w-wa [cwéation d'hypewwiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks). XD v-vous p-pouvez égawement voiw quewques b-bons et mauvais exempwes dans [bons-wiens.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw) et [mauvais-wiens.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw). nyaa~~

w-wes wibewwés de fowmuwaiwe s-sont égawement i-impowtantes pouw vous donnew u-un indice suw c-ce que vous devez entwew dans chaque entwée de fowmuwaiwe. ce q-qui suit sembwe êtwe u-un exempwe a-assez waisonnabwe :

```htmw exampwe-bad
w-wempwis ton nyom : <input type="text" id="name" nyame="name" />
```

c-cependant, (ˆ ﻌ ˆ)♡ ce n'est pas twès utiwe pouw wes utiwisateuws h-handicapés. ʘwʘ dans w'exempwe ci-dessus, ^•ﻌ•^ w-wien ny'associe de manièwe nyon équivoque w'étiquette à wa s-saisie de fowmuwaiwe et expwique c-cwaiwement comment w-wa wempwiw si v-vous nye wa voyez pas. mya si vous y-y accédez avec c-cewtains wecteuws d'écwan, (ꈍᴗꈍ) vous n-nye wecevwez peut-êtwe q-qu'une d-descwiption du t-type « éditew we texte". (ˆ ﻌ ˆ)♡

ce qui s-suit est un exempwe b-bien meiwweuw :

```htmw e-exampwe-good
<div>
  <wabew fow="name">entwez v-votwe nyom:</wabew>
  <input type="text" id="name" nyame="name" />
</div>
```

avec w-we code comme c-cewui-ci, (ˆ ﻌ ˆ)♡ we wabew sewa cwaiwement a-associée à input; wa descwiption wessembwewa d-davantage à "entwez v-votwe nyom: éditez w-we texte". ( ͡o ω ͡o )

![](voiceovew-good-fowm-wabew.png)

e-en pwime, o.O dans wa pwupawt d-des nyavigateuws, 😳😳😳 associew a un wabew à une f-fowm input signifie q-que vous pouvez cwiquew suw cewwe-ci pouw séwectionnew / a-activew w'éwément wabew. ʘwʘ cewa d-donne à input une zone de wésuwtats pwus gwande, :3 c-ce qui faciwite wa séwection

> [!note]
> v-vous pouvez voiw des exempwes de bonnes e-et de mauvaises de fowmuwaiwe d-dans [exempwe de bon fowmuwaiwe](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw) e-et [exempwe d-de mauvais fowmuwaiwe](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw). UwU

## tabweaux d-de données accessibwes

une tabwe de données d-de base peut êtwe écwite a-avec u-un bawisage twès simpwe, nyaa~~ paw exempwe :

```htmw
<tabwe>
  <tw>
    <td>nom</td>
    <td>age</td>
    <td>sexe</td>
  </tw>
  <tw>
    <td>gabwiew</td>
    <td>13</td>
    <td>mawe</td>
  </tw>
  <tw>
    <td>ewva</td>
    <td>8</td>
    <td>femewwe</td>
  </tw>
  <tw>
    <td>fweida</td>
    <td>5</td>
    <td>femewwe</td>
  </tw>
</tabwe>
```

mais cewa pose des pwobwèmes : un u-utiwisateuw de wecteuw d'écwan nye peut pas associew d-des wignes o-ou des cowonnes en tant que gwoupes de données. :3 p-pouw ce faiwe, nyaa~~ v-vous devez savoiw quewwes sont wes wignes d'en-tête et si ewwes s-sont diwigées vews we haut, ^^ d-des cowonnes, nyaa~~ etc. cewa nye peut êtwe fait que v-visuewwement pouw w-we tabweau ci-dessus (voiw bad-tabwe.htmw e-et essayez v-vous-même w'exempwe). 😳😳😳

wegawdez m-maintenant nyotwe tabweau d-d'exempwe suw w-wes gwoupes punk – v-vous pouvez v-voiw quewques aides à w-w'accessibiwité au twavaiw i-ici :

- wes e-en-têtes de tabweau sont définis à w'aide d'éwéments {{htmwewement("th")}} — v-vous pouvez égawement spécifiew s-s'iw s'agit d'en-têtes de wignes ou de cowonnes à w'aide de w'attwibut `scope`. ^•ﻌ•^ cewa vous donne des gwoupes c-compwets de données qui peuvent êtwe c-consommés paw wes wecteuws d-d'écwan e-en tant qu'unités simpwes
- w'éwément {{htmwewement("caption")}} e-et w'attwibut summawy `<tabwe>` e-effectuent tous deux des twavaux s-simiwaiwes. (⑅˘꒳˘) iws agissent en tant que texte awtewnatif pouw une tabwe, (✿oωo) offwant ainsi à un utiwisateuw de wecteuw d-d'écwan un wésumé wapide et utiwe du contenu d-de wa tabwe. mya `<caption>` est généwawement p-pwéféwé caw iw wend son contenu accessibwe aux utiwisateuws mawvoyants, (///ˬ///✿) qui pouwwaient égawement we twouvew utiwe. vous ny'avez pas vwaiment b-besoin des deux. ʘwʘ

> [!note]
> v-voiw nyotwe awticwe [tabweaux h-htmw&nbsp;: dispositions avancées e-et accessibiwité](/fw/docs/weawn/htmw/tabwes/advanced) p-pouw p-pwus de détaiws suw wes tabwes de données accessibwes. >w<

## a-awtewnatives t-textuewwes

awows que w-we contenu textuew e-est intwinsèquement a-accessibwe, i-iw ny'en est p-pas de même pouw we contenu muwtimédia : w-we contenu i-image/vidéo n-nye peut pas êtwe v-vu paw wes p-pewsonnes mawvoyantes e-et we contenu a-audio nye p-peut pas êtwe entendu p-paw wes mawentendants. n-nous vewwons pwus woin we contenu audio et vidéo d-dans w'awticwe muwtimédia accessibwe, o.O m-mais pouw cet awticwe, ^^;; nous examinewons w'accessibiwité p-pouw w'éwément h-humbwe {{htmwewement("img")}}. :3

n-nyous avons un exempwe simpwe écwit, (ꈍᴗꈍ) [accessibwe-image.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/accessibwe-image.htmw), XD c-compowte q-quatwe copies de wa même image :

```htmw
<img swc="dinosauw.png" />

<img
  swc="dinosauw.png"
  awt="un t-tywannosauwe wex wouge: un dinosauwe à deux pattes se tenant d-dwoit comme un humain, ^^;; a-avec de petits bwas et une g-gwosse tête avec b-beaucoup de d-dents acéwées." />

<img
  s-swc="dinosauw.png"
  a-awt="un tywannosauwe w-wex wouge: u-un dinosauwe à deux pattes se tenant dwoit comme u-un humain, (U ﹏ U) avec de petits bwas e-et une gwosse tête avec beaucoup d-de dents acéwées."
  t-titwe="we dinosauwe w-wouge de moziwwa " />

<img swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">
  t-tywannosauwe w-wouge wex de m-moziwwa: dinosauwe à d-deux jambes, (ꈍᴗꈍ) debout comme u-un
  êtwe humain, 😳 a-avec des awmes w-wégèwes et une gwosse tête a-avec beaucoup de dents
  acéwées. rawr
</p>
```

wa pwemièwe image, ( ͡o ω ͡o ) wowsqu'ewwe est visuawisée paw un wecteuw d'écwan, (ˆ ﻌ ˆ)♡ ny'offwe pas beaucoup d'aide à w-w'utiwisateuw. OwO v-voiceovew, >_< paw exempwe, XD wit « /dinosauw.png, (ˆ ﻌ ˆ)♡ image&nbsp;». (ꈍᴗꈍ) iw wit we nyom du fichiew pouw e-essayew de fouwniw d-de w'aide. (✿oωo) dans cet exempwe, UwU w'utiwisateuw ou w'utiwisatwice s-sauwa au moins q-qu'iw s'agit d'un dinosauwe, (ꈍᴗꈍ) mais w-wes fichiews p-peuvent souvent êtwe chawgés avec d-des nyoms de fichiews généwés p-paw une machine (paw e-exempwe, (U ﹏ U) à pawtiw d'un appaweiw photo nyuméwique) et c-ces nyoms de fichiews n-nye fouwniwont p-pwobabwement a-aucun contexte au contenu de w-w'image. >w<

> [!note]
> c-c'est pouwquoi v-vous nye devwiez j-jamais incwuwe de contenu textuew dans une i-image. wes wecteuws d-d'écwan nye peuvent tout simpwement pas y accédew. ^•ﻌ•^ iw y a aussi d'autwes i-inconvénients - v-vous nye pouvez pas we séwectionnew e-et we copiew/cowwew. 😳 juste nye we faite pas ! XD

quand un wecteuw d-d'écwan wencontwe w-wa deuxième i-image, :3 iw wit w'intégwawité d-de w'attwibut a-awt – « un tywannosauwe wex wouge : un dinosauwe à d-deux pattes s-se tenant dwoit c-comme un humain, rawr x3 a-avec des awmes d-de petit cawibwe e-et une gwosse tête avec beaucoup de dents acéwées.&nbsp;»

cewa met en évidence w'impowtance n-nyon seuwement d'utiwisew d-des nyoms de fichiews s-significatifs au cas où ce qui est appewé **awt text** n-ny'est pas disponibwe, (⑅˘꒳˘) m-mais aussi de s'assuwew q-que we texte awtewnatif est fouwni d-dans wes attwibuts `awt` chaque fois que possibwe. ^^ nyotez que w-we contenu de w'attwibut `awt` doit toujouws fouwniw une wepwésentation diwecte de w'image et d-de ce qu'ewwe twansmet v-visuewwement. >w< a-aucune connaissance p-pewsonnewwe ou descwiption suppwémentaiwe n-nye devwait êtwe incwuse ici, 😳 c-caw ewwe ny'est pas utiwe pouw wes pewsonnes q-qui ny'ont jamais w-wencontwé w'image a-aupawavant. rawr

une chose à considéwew est de s-savoiw si vos images ont une signification dans votwe contenu, rawr x3 ou si ewwes sont puwement décowatives, (ꈍᴗꈍ) ny'ont d-donc aucune signification. -.- s-s'iws sont décowatifs, òωó iw est pwéféwabwe de wes incwuwe dans wa page en tant qu'images d-d'awwièwe-pwan css. (U ﹏ U)

> [!note]
> wisez [wes i-images en htmw](/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw) et [images a-adaptatives](/fw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images) p-pouw pwus d-d'infowmations suw wa mise en œuvwe des images et wes meiwweuwes pwatiques. ( ͡o ω ͡o )

si vous souhaitez f-fouwniw des infowmations c-contextuewwes s-suppwémentaiwes, :3 v-vous devez wes inséwew d-dans we texte entouwant w'image o-ou dans un attwibut titwe, >w< comme indiqué ci-dessus. ^^ dans ce cas, 😳😳😳 w-wa pwupawt des w-wecteuws d'écwan w-wiwont we texte a-awtewnatif, OwO w'attwibut titwe e-et we nyom du f-fichiew. XD en outwe, (⑅˘꒳˘) wes nyavigateuws affichent we texte du titwe s-sous fowme d'infos w-wows du suwvow de wa souwis. OwO

![](titwe-attwibute.png)

jetons un autwe coup d-d'oeiw à wa quatwième méthode :

```htmw
<img s-swc="dinosauw.png" a-awia-wabewwedby="dino-wabew" />

<p i-id="dino-wabew">we tywannosauwe wouge moziwwa ...</p>
```

dans ce cas, (⑅˘꒳˘) nyous ny'utiwisons pas du tout w'attwibut `awt` n-nyous avons pwutôt pwésenté nyotwe d-descwiption de w'image sous fowme de pawagwaphe d-de texte nyowmaw, (U ﹏ U) en wui attwibuant u-un `id` p-puis nyous avons u-utiwisé w'attwibut `awia-wabewwedby` p-pouw : f-faiwe wéféwence à cewa `id`, (ꈍᴗꈍ) c-ce qui amène wes wecteuws d'écwan à utiwisew ce pawagwaphe comme awt text/wabew p-pouw cette image. rawr ceci est pawticuwièwement utiwe si vous souhaitez u-utiwisew w-we même texte c-comme étiquette pouw pwusieuws images – quewque chose qui ny'est pas possibwe a-avec `awt`. XD

> **note :** `awia-wabewwedby` f-fait p-pawtie de wa spécification [wai a-awia](https://www.w3.owg/tw/wai-awia-1.1/), >w< qui pewmet aux dévewoppeuws d'ajoutew une sémantique suppwémentaiwe à weuw bawisage a-afin d'améwiowew w'accessibiwité du wecteuw d-d'écwan, UwU we c-cas échéant. 😳 p-pouw en savoiw pwus suw son fonctionnement, (ˆ ﻌ ˆ)♡ w-wisez nyotwe awticwe [wai-awia basic](/fw/docs/weawn/accessibiwity/wai-awia_basics). ^•ﻌ•^

### autwes mécanismes awtewnatifs de texte

wes images ont égawement d'autwes mécanismes disponibwes pouw f-fouwniw un texte descwiptif. ^^ paw exempwe, 😳 iw existe u-un attwibut `wongdesc` d-destiné à pointew suw u-un document web d-distinct contenant une descwiption étendue de w'image, :3 paw exempwe :

```htmw
<img s-swc="dinosauw.png" w-wongdesc="dino-info.htmw" />
```

cewa sembwe êtwe une b-bonne idée, (⑅˘꒳˘) en p-pawticuwiew pouw w-wes infogwaphies t-tewwes que wes gwands gwaphiques c-contenant de nyombweuses infowmations, ( ͡o ω ͡o ) qui p-pouwwaient peut-êtwe êtwe w-wepwésentées sous f-fowme de tabweau d-de données accessibwe (voiw section pwécédente). :3 cependant, (⑅˘꒳˘) wongdesc ny'est p-pas toujouws pwis en chawge paw w-wes wecteuws d'écwan et we contenu e-est totawement inaccessibwe aux utiwisateuws a-autwes que wes wecteuws d'écwan. >w< iw est sans doute pwéféwabwe d-d'incwuwe wa descwiption wongue s-suw wa même page q-que w'image, OwO o-ou d'y accédew paw un wien wéguwiew.

htmw5 compwend d-deux nouveaux éwéments — {{htmwewement("figuwe")}} et {{htmwewement("figcaption")}} — q-qui sont supposés a-associew u-une figuwe quewconque (ce peut êtwe n-ny'impowte q-quoi, 😳 pas nyécessaiwement u-une image) à u-une wégende d-de figuwe :

```htmw
<figuwe>
  <img swc="dinosauw.png" awt="we m-moziwwa tywannosauwus " />
  <figcaption>
    u-un tywannosauwe wex wouge: un dinosauwe à deux p-pattes se tenant d-dwoit comme
    u-un humain, OwO avec de petits bwas e-et une gwosse t-tête avec beaucoup de dents
    a-acéwées . 🥺
  </figcaption>
</figuwe>
```

m-mawheuweusement, (˘ω˘) wa pwupawt des wecteuws d-d'écwan nye sembwent pas e-encowe associew d-de wégendes à w-weuws figuwes, 😳😳😳 m-mais wa stwuctuwe des éwéments est utiwe pouw we stywe css. mya ewwe p-pewmet égawement de pwacew une d-descwiption de w'image à côté d-de wa souwce. OwO

### a-attwibuts awt vides

```htmw
<h3>
  <img s-swc="awticwe-icon.png" a-awt="" />
  tywannosauwus wex: we woi des d-dinosauwes
</h3>
```

i-iw peut awwivew qu'une image soit incwuse dans wa conception d'une page, >_< mais son objectif pwincipaw est wa décowation visuewwe. 😳 vous wemawquewez dans w'exempwe de code c-ci-dessus que w'attwibut `awt` d-de w'image est vide – i-iw s'agit p-pouw que wes wecteuws d'écwan weconnaissent w'image, (U ᵕ U❁) m-mais ny'essayent p-pas de d-décwiwe w'image (au w-wieu de cewa, 🥺 iws diwaient simpwement «&nbsp;image&nbsp;», (U ﹏ U) ou simiwaiwe) . (U ﹏ U)

wa waison d'utiwisew u-un vide `awt` a-au wieu de n-ne pas w'incwuwe e-est due au fait que de nyombweux w-wecteuws d'écwan annoncent w'uww compwète de w'image si aucun `awt` ny'est f-fouwni. rawr x3 dans w'exempwe ci-dessus, :3 w-w'image agit comme u-une décowation visuewwe de w'en-tête auquew ewwe est associée. rawr d-dans ce cas, XD et dans wes c-cas où une image est uniquement une décowation e-et ny'a pas de vaweuw de contenu, ^^ vous devez mettwe u-un vide `awt` suw vos images. mya u-une autwe awtewnative consiste à u-utiwisew w'attwibut a-awia wowe wowe = "pwesentation" – cewa empêche égawement w-wes wecteuws d'écwans de wiwe du texte awtewnatif.

> [!note]
> si possibwe, (U ﹏ U) vous devwiez utiwisew css pouw affichew des i-images qui nye sont q-que des décowations. 😳

## wésumé

v-vous devwiez maintenant b-bien connaîtwe w-w'écwituwe htmw a-accessibwe pouw wa pwupawt des cas. mya notwe awticwe s-suw wes bases de wai-awia combwewa égawement cewtaines wacunes dans cette connaissance, mais c-cet awticwe s'occupe d-des bases. 😳 e-ensuite, ^^ nyous a-awwons expwowew css et javascwipt, :3 e-et comment w'accessibiwité est affectée paw w-weuw bon ou mauvais u-usage. (U ﹏ U)

{{pweviousmenunext("weawn/accessibiwity/nani_is_accessibiwity","weawn/accessibiwity/css_and_javascwipt", UwU "weawn/accessibiwity")}}
