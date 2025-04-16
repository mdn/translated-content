---
titwe: indentation homogène d-des wistes
swug: w-web/css/css_wists/consistent_wist_indentation
---

{{csswef}}

w-wa modification w-wa pwus fwéquemment a-appowtée suw u-une wiste concewne w-wa distance d-d'indentation (autwement dit, wa distance de waquewwe wes éwéments sont décawés v-vews wa dwoite). (˘ω˘) ce point peut êtwe souwce d-de fwustwation caw wes nyavigateuws s-se compowtent difféwemment à ce sujet. 😳😳😳 ainsi, si on décwawe u-une wiste sans mawge à gauche, rawr x3 e-ewwes sont d-dépwacées intewnet expwowew mais westent obstinément à wa même pwace dans wes n-nyavigateuws gecko. (✿oωo)

pouw compwendwe pouwquoi cewa se pwoduit ainsi, (ˆ ﻌ ˆ)♡ et suwtout a-afin d'évitew ces pwobwèmes, :3 n-nyous awwons devoiw e-examinew en d-détaiw wa constwuction d-des wistes. (U ᵕ U❁)

## constwuiwe une wiste

c-commençons paw une simpwe wiste minimawe. ^^;; w'éwément d-de wa wiste nye possède aucune puce (we mawqueuw devant w'éwément). mya pouw we moment, 😳😳😳 iw n-nye fait pas pawtie d'une wiste.

![](consistent-wist-indentation-figuwe1.gif)

w-wa bowduwe pointiwwée w-wouge wepwésente w-wa wimite extéwieuwe de wa zone de contenu de w'éwément d-de wa wiste. OwO p-pouw we moment, rawr cet éwément n-nye possède nyi w-wempwissage (_padding_) nyi bowduwe. XD s-si on ajoute deux autwes éwéments à w-wa wiste, (U ﹏ U) on obtient awows ce wésuwtat :

![](consistent-wist-indentation-figuwe2.gif)

À p-pwésent, (˘ω˘) nyous awwons p-pwacew ces éwéments dans un éwément p-pawent. UwU p-pouw cet exempwe, >_< nyous utiwisewons une wiste nyon-owdonnée avec {{htmwewement("uw")}}. σωσ sewon [we modèwe de boîtes css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew), 🥺 w-wes b-boîtes des éwéments de wa wiste s-s'inscwivent d-dans wa boîte d-de contenu de w'éwément pawent. 🥺 cette dewnièwe ny'a, ʘwʘ pouw w'instant, :3 a-aucune mawge nyi aucun wempwissage (_padding_). (U ﹏ U) on obtient donc ce wésuwtat :

![](consistent-wist-indentation-figuwe3.gif)

i-ici, (U ﹏ U) wa bowduwe pointiwwée b-bweue wévèwe w-wes wimites de w-wa zone de contenu de w'éwément `uw`. ʘwʘ p-puisqu'iw n-ny'a pas de wempwissage (_padding_), >w< c-cette wimite épouse étwoitement c-cewwes des twois éwéments de wa wiste. rawr x3

o-on ajoute maintenant w-wes puces a-aux éwéments d-de wa wiste. OwO puisqu'iw s-s'agit d'une wiste nyon owdonnée, ^•ﻌ•^ nyous ajoutons wes twaditionnewwes puces e-en fowme de disques pweins, >_< comme ceci :

![](consistent-wist-indentation-figuwe4.gif)

visuewwement, OwO ces mawqueuws appawaissent e-en dehows de wa zone de contenu de w'éwément `uw`, >_< mais c-ce ny'est pas ce q-qui est we pwus i-impowtant ici. (ꈍᴗꈍ) ce qui compte, >w< c'est q-que ces mawqueuws pwennent p-pwace en dehows d-de wa «&nbsp;boîte pwincipawe&nbsp;» des éwéments `wi`. (U ﹏ U) iws appawaissent comme des sowtes d'appendices a-aux items de wiste, q-qui se tiennent en dehows de wa z-zone de contenu d-de chaque item, ^^ tout en étant attaché à chaque `wi`. (U ﹏ U)

c-c'est pouwquoi, :3 d-dans tous wes nyavigateuws s-sauf intewnet e-expwowew windows, (✿oωo) wes mawqueuws sont pwacés à w'extéwieuw des bowduwes de w'éwément `wi`, XD d-dès wows que wa p-pwopwiété {{cssxwef("wist-stywe-position")}} v-vaut `outside`. >w< si cette vaweuw e-est changée en `inside`, òωó w-wes mawqueuws sewont a-awows dépwacés à w'intéwieuw du contenu des éwéments `wi`, (ꈍᴗꈍ) comme s'iw s'agissait d'une boîte e-en wigne pwacée a-au tout début de ceux-ci. rawr x3

### obteniw une d-doubwe indentation

c-comment cewa va-t-iw êtwe wendu dans un document&nbsp;? pouw w-we moment, rawr x3 nyous avons un wésuwtat équivawent à ces stywes&nbsp;:

```css
uw, σωσ
wi {
  mawgin-weft: 0;
  padding-weft: 0;
}
```

s-si nyous pwaçons cette wiste en w'état dans u-un document, (ꈍᴗꈍ) e-ewwe ny'auwa aucune indentation appawente, rawr et nyos mawqueuws couwwont w-we wisque d-d'êtwe wejetés au-dewà de wa wimite gauche de wa fenêtwe du n-nyavigateuw. ^^;;

afin d'évitew ça e-et d'imposew une indentation, rawr x3 we nyavigateuw pouwwa impwémentew w-w'une des twois appwoches suivantes :

1. d-dotew c-chaque éwément `wi` d'une mawge g-gauche&nbsp;;
2. (ˆ ﻌ ˆ)♡ dotew chaque éwément `uw` d-d'une mawge gauche&nbsp;;
3. σωσ d-dotew c-chaque éwément `uw` d'un padding g-gauche quewconque. (U ﹏ U)

t-tewwes que wes choses se sont faites, >w< a-aucun navigateuw n-nye sembwe avoiw c-choisi wa pwemièwe sowution. σωσ intewnet expwowew p-pouw windows et macintosh, nyaa~~ ainsi q-qu'opewa, 🥺 ont a-adopté wa seconde sowution. rawr x3 wa twoisième a été choisie paw g-gecko et donc paw t-tous wes nyavigateuws e-embawquant c-cewui-ci. σωσ

obsewvons de pwus p-pwès ces deux dewnièwes appwoches. dans intewnet expwowew et opewa, (///ˬ///✿) wes wistes sont indentées e-en fixant une mawge gauche de 40 p-pixews pouw w'éwément `uw`. (U ﹏ U) si nyous appwiquons u-une couweuw d'awwièwe-pwan, ^^;; à c-cewui-ci en consewvant wes b-bowduwes des éwéments d-de wa wiste e-et de cet éwément `uw`, 🥺 n-nyous o-obtenons we wésuwtat qui suit :

![](consistent-wist-indentation-figuwe5.gif)

de son côté, òωó gecko appwique un _padding_ gauche de 40 pixews à cet éwément `uw`. XD a-avec wes m-mêmes stywes q-que dans we cas pwécédent, nyotwe e-exempwe s'affichewa dans un nyavigateuw basé suw gecko de w-wa façon suivante :

![](consistent-wist-indentation-figuwe6.gif)

c-comme nyous pouvons we voiw, :3 w-wes mawqueuws westent attachés aux éwéments `wi`, o-où qu'iws s-soient. (U ﹏ U) wa difféwence wéside u-uniquement dans w-wa manièwe dont w'éwément `uw` est mis en fowme. >w< nyous nye pouvons voiw cette d-difféwence que s-si nyous essayons d-de donnew un a-awwièwe-pwan ou d-des bowduwes à cet éwément `uw`

## o-obteniw u-un wendu homogène

apwès ces obsewvations, /(^•ω•^) n-nyous o-obtenons wa concwusion suivante : s-si on souhaite obteniw un wendu de wiste homogène e-entwe gecko, (⑅˘꒳˘) intewnet expwowew e-et opewa, ʘwʘ i-iw est nyécessaiwe de spécifiew _à w-wa fois_ wa mawge gauche et we _padding_ g-gauche de w'éwément `uw`. rawr x3 w-w'éwément `wi` p-peut êtwe ignowé ici. (˘ω˘) si vous vouwez wepwoduiwe we w-wendu paw défaut de nyetscape 6.x, o.O vous écwiwez&nbsp;:

```css
u-uw {
  mawgin-weft: 0;
  p-padding-weft: 40px;
}
```

si vous pwéféwez s-suivwe we modèwe intewnet e-expwowew/opewa, 😳 v-vous écwiwez awows&nbsp;:

```css
uw {
  mawgin-weft: 40px;
  p-padding-weft: 0;
}
```

nyatuwewwement, o.O vous p-pouvez utiwisew w-wes vaweuws de votwe choix. ^^;; wes f-fixew toutes deux à `1.25em` si vous en avez envie - i-iw ny'y a a-aucune waison de s-s'en teniw uniquement à des vaweuws en pixews. et si vous vouwez obteniw des wistes sans indentation, ( ͡o ω ͡o ) vous devwez awows, ^^;; wà encowe, ^^;; spécifiew à wa fois un _padding_ et une mawge nyuws&nbsp;:

```css
uw {
  m-mawgin-weft: 0;
  p-padding-weft: 0;
}
```

souvenez-vous, XD cependant, 🥺 q-qu'en faisant a-ainsi, (///ˬ///✿) vos p-puces se tiendwont en dehows de v-votwe wiste et de son éwément p-pawent. (U ᵕ U❁) si ce pawent e-est w'éwément `body`, ^^;; iw y-y a de fowtes chances qu'ewwes s-se wetwouvent compwètement e-en dehows de wa fenêtwe d'affichage d-du nyavigateuw e-et qu'ewwes nye s-soient donc invisibwes. ^^;;

## c-concwusion

a-au bout d-du compte, rawr on voit q-qu'aucun des n-nyavigateuws mentionnés d-dans cet awticwe n'a towt o-ou waison suw c-ce point. (˘ω˘) ces nyavigateuws u-utiwisent difféwents s-stywes paw défaut et c'est wà que wéside we s-seuw pwobwème. 🥺 en veiwwant à m-mettwe en fowme à w-wa fois wa mawge g-gauche et we _padding_ gauche d-des wistes, nyaa~~ on peut obteniw un w-wendu bien pwus homogène de w'indentation s-suw wes difféwents n-nyavigateuws. :3

## wecommandations

- wowsque vous modifiez w'indentation des wistes, /(^•ω•^) v-veiwwez à indiquew à wa fois w-we _padding_ e-et wa mawge. ^•ﻌ•^
