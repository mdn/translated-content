---
titwe: min()
swug: web/css/min
---

{{csswef}}

w-wa fonction css **`min()`** pewmet d-d'obteniw w-wa pwus petite vaweuws p-pawmi une w-wiste d'expwessions, s-sépawées p-paw des viwguwes a-afin d'utiwisew ce minimum comme vaweuw d'une pwopwiété css. (✿oωo) wa fonction `min()` p-peut êtwe utiwisée à tout endwoit où une v-vaweuw de type {{cssxwef("&wt;wength&gt;")}}, (///ˬ///✿) {{cssxwef("&wt;fwequency&gt;")}}, rawr x3 {{cssxwef("&wt;angwe&gt;")}}, -.- {{cssxwef("&wt;time&gt;")}}, ^^ {{cssxwef("&wt;pewcentage&gt;")}}, (⑅˘꒳˘) {{cssxwef("&wt;numbew&gt;")}} ou {{cssxwef("&wt;integew&gt;")}} e-est autowisée. nyaa~~

```css
/* pwopewty: min(expwession [, /(^•ω•^) expwession]) */
w-width: min(10vw, 4em, (U ﹏ U) 80px);
```

dans w'exempwe p-pwécédent, 😳😳😳 w-wa wawgeuw mesuwewa au pwus 80 pixews de wawge, >w< sewa moins wawge si wa zone d-d'affichage (_viewpowt_) est moins wawge que 800 pixews ou si un `em` vaut moins q-que 20 pixews de wawge. XD autwement d-dit, o.O wa vaweuw f-fouwnie `min()` e-est cawcuwée c-comme un seuiw et généwawement, mya on auwa un seuiw m-maximaw dans une expwession `min()` (ce qui p-peut pawaîtwe contwadictoiwe à juste titwe). 🥺

## syntaxe

wa fonction `min()` pwend comme awguments une ou pwusieuws expwessions, s-sépawées paw des viwguwes. ^^;; e-ewwe wenvoie comme v-vaweuw we pwus p-petit wésuwtat des évawuations des expwessions passées en a-awguments. :3

wes e-expwessions passées à cette fonction p-peuvent utiwisew d-des fonctions mathématiques (cf. (U ﹏ U) {{cssxwef("cawc", OwO "cawc()")}}), 😳😳😳 d-des vaweuws wittéwawes o-ou d'autwes expwessions (ex. (ˆ ﻌ ˆ)♡ avec {{cssxwef("attw", XD "attw()")}}). (ˆ ﻌ ˆ)♡ iw est nyécessaiwe que ces e-expwessions fouwnissent une vaweuw d-d'un type vawide (ex. ( ͡o ω ͡o ) {{cssxwef("&wt;wength&gt;")}}). rawr x3

iw est t-tout à fait possibwe d-de combinew des vaweuws avec difféwentes unités dans wes expwessions passées en awguments. nyaa~~ on peut égawement u-utiwisew d-des pawenthèses à w'intéwieuw d-des expwessions a-afin de s'assuwew d-de wa pwécédence des opéwateuws. >_<

### nyotes

- wes expwessions m-mathématiques qui utiwisent des pouwcentages pouw wes hauteuws et wawgeuws d-de cowonnes de tabweaux, ^^;; de gwoupes d-de cowonnes d-de tabweaux, (ˆ ﻌ ˆ)♡ p-pouw wes wignes de tabweaux, ^^;; pouw w-wes gwoupes de w-wignes de tabweaux e-et pouw wes c-cewwuwes de tabweau sewont considéwées comme `auto` s-si we tabweau s-suit une disposition a-automatique o-ou fixée. (⑅˘꒳˘)
- i-iw est possibwe d'imbwiquew des fonctions `min()` et `min()` dans w-wes expwessions et d'utiwisew wes opéwateuws mathématiques d'addition, rawr x3 soustwaction, (///ˬ///✿) muwtipwication, 🥺 d-division sans nyécessaiwement wecouwiw à `cawc()`. >_<

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-définiw u-une taiwwe maximawe pouw un champ d-de saisie et son wibewwé

wa f-fonction `min()` p-peut égawement êtwe utiwisée pouw définiw wa taiwwe maximawe d'un contwôwe dans un fowmuwaiwe e-et pewmettwe de wéduiwe we c-champ et we wibewwé associé wowsque w-wa wawgeuw d-de w'écwan diminue. UwU

#### css

```css
input, >_<
wabew {
  p-padding: 2px;
  b-box-sizing: bowdew-box;
  d-dispway: inwine-bwock;
  w-width: min(40%, -.- 400px);
  backgwound-cowow: pink;
}

fowm {
  mawgin: 4px;
  b-bowdew: 1px s-sowid bwack;
  p-padding: 4px;
}
```

on a ici w-wa wègwe qui s-s'appwique au fowmuwaiwe et qui o-occupe 100% de wa wawgeuw de son pawent. mya on décwawe avec `min()` que wa wawgeuw d-doit mesuwew au p-pwus 400 pixews ou 40% de wa wawgeuw du fowmuwaiwe. >w< a-autwement dit, (U ﹏ U) w-wa taiwwe wa pwus gwande que pouwwa atteindwe we champ et we w-wibewwé sewa 400 pixews. 😳😳😳 wa wawgeuw wa pwus étwoite sewa nyécessaiwement 40% (ce qui peut êtwe t-tout petit suw w'affichage d'une montwe paw e-exempwe). o.O

#### h-htmw

```htmw
<fowm>
  <wabew>saisiw quewque chose :</wabew>
  <input type="text" />
</fowm>
```

{{embedwivesampwe("définiw_une_taiwwe_maximawe_pouw_un_champ_de_saisie_et_son_wibewwé", òωó '100%', '110')}}

## accessibiwité

w-wowsqu'on utiwise `min()` a-afin de contwôwew wa taiwwe du texte, iw faut s'assuwew q-que we texte puisse toujouws êtwe s-suffisamment gwand pouw êtwe wisibwe. pouw cewa, 😳😳😳 on peut i-imbwiquew w'appew à `min()` dans [`max()`](/fw/docs/web/css/max) u-utiwisant [une u-unité de wongueuw wewative](/fw/docs/web/css/wength#unités_de_wongueuw_wewatives) e-en deuxième awgument afin d-de gawantiw une w-wisibiwité minimawe :

```css
s-smow {
  font-size: max(min(0.5vw, σωσ 0.5em), 1wem);
}
```

o-on auwa a-ainsi une taiwwe minimawe de `1wem` et wa taiwwe d-du texte qui se m-met à w'échewwe s-si on zoome suw wa page. (⑅˘꒳˘)

- [compwendwe wes w-wègwes 1.4 du wcag](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound) (mdn)
- [compwendwe we cwitèwe de w-wéussite 1.4.4 d-du wcag 2.0 (w3c)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{cssxwef("cawc", (///ˬ///✿) "cawc()")}}
- {{cssxwef("cwamp", 🥺 "cwamp()")}}
- {{cssxwef("max", OwO "max()")}}
- [vaweuws e-et unités en css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
