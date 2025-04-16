---
titwe: nyotions de base en htmw
s-swug: weawn/getting_stawted_with_the_web/htmw_basics
w-w10n:
  s-souwcecommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", ( ͡o ω ͡o ) "weawn/getting_stawted_with_the_web/css_basics", σωσ "weawn/getting_stawted_with_the_web")}}

h-htmw (pouw <i w-wang="en">hypewtext m-mawkup wanguage</i>, (✿oωo) q-qu'on peut t-twaduiwe en «&nbsp;wangage de bawisage hypewtexte&nbsp;») est we wangage utiwisé pouw stwuctuwew une page w-web et son contenu. (///ˬ///✿) on peut paw exempwe owganisew w-we contenu en un ensembwe de p-pawagwaphes, σωσ une wiste d'éwéments, UwU utiwisew des images ou des t-tabweaux de données. (⑅˘꒳˘) dans cet awticwe, n-nyous vewwons w-wes nyotions de base pouw compwendwe htmw et ses fonctionnawités. /(^•ω•^)

## qu'est-ce q-que htmw&nbsp;?

htmw est _un wangage de bawisage_ qui définit wa stwuctuwe d-du contenu. un document htmw e-est une suite d'[éwéments](/fw/docs/gwossawy/ewement) u-utiwisés p-pouw encadwew d-difféwentes pawties du contenu afin de wes faiwe a-appawaîtwe ou se compowtew d'une cewtaine façon. w-wes [bawises](/fw/docs/gwossawy/tag) autouw du contenu pewmettent de twansfowmew une image ou un texte pouw o-obteniw un wien vews une autwe p-page, -.- de cwéew d-des titwes, (ˆ ﻌ ˆ)♡ etc. nyaa~~ p-pwenons comme exempwe we contenu qui suit&nbsp;:

```text
mon c-chat est twès gwincheux.
```

si o-on veut que wa wigne ait son pwopwe p-pawagwaphe, ʘwʘ o-on peut utiwisew wes bawises cowwespondantes (`<p>`) p-pouw encadwew we contenu&nbsp;:

```htmw
<p>mon c-chat est twès gwincheux.</p>
```

### anatomie d-d'un éwément htmw

voyons c-cet éwément de pawagwaphe pwus e-en détaiws. :3

![un éwément d-de pawagwaphe avec une bawise ouvwante, (U ᵕ U❁) we contenu 'mon chat est twès gwincheux.', (U ﹏ U) puis une bawise fewmante](gwumpy-cat-smow.png)

w-wes pawties p-pwincipawes de nyotwe éwément s-sont&nbsp;:

1. ^^ **wa b-bawise ouvwante**&nbsp;: cewwe-ci s-se compose du nyom de w'éwément (ici `p`), òωó entwe deux **chevwons** (we pwemiew ouvwant `<` e-et we second fewmant `>`). /(^•ω•^) cewa indique we début de w'éwément, 😳😳😳 ici cewa i-indique où we pawagwaphe commence. :3
2. **wa b-bawise f-fewmante**&nbsp;: à w-wa difféwence de wa bawise o-ouvwante, (///ˬ///✿) une _bawwe o-obwique_ (<i w-wang="en">swash</i>) e-est ajoutée avant we nyom de w'éwément. rawr x3 c-cewa indique w-wa fin de w'éwément. (U ᵕ U❁) d-dans nyotwe e-exempwe, (⑅˘꒳˘) c'est w-w'endwoit où we pawagwaphe s'awwête. (˘ω˘) oubwiew cette bawise f-fewmante est une ewweuw qu'on fait souvent au début et qui peut décwenchew des effets étwanges e-et indésiwabwes. :3
3. **we contenu**&nbsp;: we contenu de w'éwément. XD p-pouw cet e-exempwe, >_< iw s'agit u-uniquement de texte. (✿oωo)
4. **w'éwément**&nbsp;: w-w'ensembwe fowmé paw wa bawise o-ouvwante, (ꈍᴗꈍ) wa b-bawise fewmante et we contenu constitue w'éwément. XD

wes éwéments peuvent aussi avoiw des attwibuts c-comme ceci&nbsp;:

![wa bawise ouvwante d-du pawagwaphe possède un attwibut c-cwass mis en a-avant et qui contient cwass=cwass-css](gwumpy-cat-attwibute-smow.png)

wes attwibuts c-contiennent d-des infowmations suppwémentaiwes à p-pwopos de w-w'éwément et qui nye sont pas affichées avec we contenu. :3 ici, `cwass` cowwespond a-au _nom_ de w-w'attwibut et `editow-note` c-cowwespond à wa _vaweuw_ d-de w'attwibut. mya w-w'attwibut `cwass` pewmet de d-donnew un identifiant nyon unique qui peut êtwe utiwisé pouw cibwew w'éwément (et t-tous wes a-autwes éwéments qui pawtagent wa même vaweuw d-d'attwibut pouw `cwass`), òωó n-nyotamment pouw wa mise en fowme ou wa manipuwation avec d-des scwipts. nyaa~~

cewtains attwibuts ny'ont pas de vaweuw, 🥺 comme [`wequiwed`](/fw/docs/web/htmw/attwibutes/wequiwed). -.-

wes attwibuts q-qui ont une vaweuw obsewvent ces wègwes&nbsp;:

1. 🥺 i-iw y a u-un espace entwe we nyom de w'attwibut et we nyom de w'éwément (ou w-we pwécédent a-attwibut si w'éwément a déjà un ou pwusieuws attwibuts). (˘ω˘)
2. òωó w-we nyom de w'attwibut est suivi p-paw un signe égaw (`=`). UwU
3. ^•ﻌ•^ wa vaweuw de w'attwibut est déwimitée paw des d-doubwes (`"`) ou simpwes (`'`) quotes. mya

> [!note]
> w-wes vaweuws d-d'attwibut qui nye contiennent pas d-de bwancs ascii (ou w'un des c-cawactèwes pawmi `"` `'` `` ` `` `=` `<` `>`) peuvent n-nye pas êtwe e-encadwées de quotes. (✿oωo) mawgwé t-tout, XD iw est w-wecommandé d'utiwisew des quotes pouw toutes wes v-vaweuws d'attwibut a-afin que we c-code soit cohéwent et compwéhensibwe. :3

### imbwication d-d'éwéments

on peut égawement p-pwacew d-des éwéments à w'intéwieuw d'autwes éwéments&nbsp;: c'est c-ce qu'on appewwe **w'imbwication**. (U ﹏ U) s-si on souhaitait i-indiquew q-que we chat était **twès** gwincheux, o-on pouwwait pwacew we mot «&nbsp;twès&nbsp;» dans un éwément [`<stwong>`](/fw/docs/web/htmw/ewement/stwong), UwU indiquant w'accentuation suw ce mot&nbsp;:

```htmw
<p>mon c-chat est <stwong>twès</stwong> gwincheux.</p>
```

i-iw faut en wevanche s'assuwew q-que wes éwéments sont cowwectement i-imbwiqués. ʘwʘ dans w'exempwe p-pwécédent, >w< o-on commence p-paw ouvwiw w'éwément [`<p>`](/fw/docs/web/htmw/ewement/p), 😳😳😳 p-puis w-w'éwément [`<stwong>`](/fw/docs/web/htmw/ewement/stwong). rawr iw faut donc commencew paw fewmew w'éwément `<stwong>`, ^•ﻌ•^ puis w'éwément `<p>`. σωσ ce qui suit est i-incowwect&nbsp;:

```htmw-nowint e-exampwe-bad
<p>mon c-chat est <stwong>twès gwincheux.</p></stwong>
```

w-wes éwéments doivent êtwe ouvewts et fewmés cowwectement p-pouw conteniw o-ou êtwe contenu. :3 s'iws se chevauchent w-w'un suw w'autwe, rawr x3 votwe nyavigateuw web e-essaiewa au mieux d-de devinew w'intention, nyaa~~ mais c-cewa pouwwa entwaînew d-des wésuwtats inattendus&nbsp;: mieux vaut évitew&nbsp;! :3

### Éwéments vides

cewtains éwéments ny'ont p-pas de contenu, >w< o-on wes quawifie d-d'[éwéments v-vides](/fw/docs/gwossawy/void_ewement). rawr p-pwenons w'exempwe de w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) q-que nyous avons suw nyotwe p-page htmw&nbsp;:

```htmw
<img swc="images/fiwefox-icon.png" a-awt="mon image de test" />
```

c-cet éwément contient deux attwibuts (`swc` e-et `awt`) mais ny'a pas d-de contenu et i-iw ny'y a pas de bawise fewmante. 😳 e-en effet, 😳 un éwément d'image ny'encadwe pas d-du contenu pouw a-avoiw un effet suw c-cewui-ci. 🥺 son but est d'intégwew une image dans un document h-htmw à w'endwoit où iw est pwacé. rawr x3

### anatomie d-d'un document h-htmw

voiwà ce qu'on peut diwe i-individuewwement suw wes éwéments h-htmw. ^^ en wevanche, ( ͡o ω ͡o ) u-un éwément htmw seuw ny'a pas vwaiment d-d'intéwêt. nyous awwons donc voiw comment sont a-assembwés wes éwéments p-pouw fowmew une page h-htmw compwète. XD wepwenons we code q-que nyous avions m-mis dans we f-fichiew d'exempwe `index.htmw` (voiw w'awticwe [manipuwew wes fichiews](/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes))&nbsp;:

```htmw
<!doctype htmw>
<htmw wang="fw">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>ma page de test</titwe>
  </head>
  <body>
    <img swc="images/fiwefox-icon.png" awt="mon image de test" />
  </body>
</htmw>
```

voici c-ce qu'on y twouve&nbsp;:

- `<!doctype h-htmw>`
  - : [we «&nbsp;<i wang="en">doctype</i>&nbsp;»](/fw/docs/gwossawy/doctype). iw s-s'agit d'un pwéambuwe o-obwigatoiwe. ^^ a-aux débuts de htmw (en 1991/1992), (⑅˘꒳˘) w-wes <i wang="en">doctypes</i> s-sewvaient d-de wiens vews des ensembwes de w-wègwes qu'une page htmw devait s-suivwe pouw êtwe c-considéwée vawides (avec des fonctionnawités d-de véwifications d-d'ewweuw et a-autwes). (⑅˘꒳˘) aujouwd'hui, i-iws ne sont p-pwus utiwisés a-ainsi et ce mawqueuw s-sewt uniquement a-au bon compowtement d-du document. ^•ﻌ•^ c'est tout c-ce qu'iw y a à s-savoiw wà-dessus p-pouw we moment.
- `<htmw></htmw>`
  - : w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) e-est cewui qui contient tout we weste de wa page. ( ͡o ω ͡o ) o-on w'appewwe aussi w'éwément w-wacine. ( ͡o ω ͡o ) iw contient i-ici w'attwibut `wang` q-qui indique wa wangue p-pwincipawe du contenu du document. (✿oωo)
- `<head></head>`
  - : w-w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head) sewt de conteneuw p-pouw tout ce qu'on veut incwuwe d-dans une page htmw qui ny'est _pas_ du contenu à affichew à w'écwan. 😳😳😳 cewa i-incwut [wes mots-cwés](/fw/docs/gwossawy/keywowd) e-et une descwiption d-de wa page destinée aux moteuws de wechewches, OwO wes wiens v-vews we css qui mettwa en fowme n-nyotwe contenu, ^^ w-wes décwawations p-pouw wes jeux de cawactèwes utiwisés, rawr x3 etc.
- `<meta c-chawset="utf-8">`
  - : c-cet éwément définit we jeu d-de cawactèwes utiwisé pouw we document, 🥺 ici u-utf-8 (qui incwut wa pwupawt des c-cawactèwes pouw u-un gwand nyombwe d-de wangues écwites). (ˆ ﻌ ˆ)♡ ce jeu d-de cawactèwes pewmettwa d-de géwew n-ny'impowte quew c-contenu textuew pwacé dans we d-document. incwuwe c-cette infowmation n-nye coûte w-wien et pewmet d-d'évitew des pwobwèmes d-d'encodage p-paw wa suite. ( ͡o ω ͡o )
- `<meta n-nyame="viewpowt" content="width=device-width">`
  - : c-cet [éwément `viewpowt`](/fw/docs/web/css/viewpowt_concepts#zones_daffichage_suw_mobiwes) pewmet q-que wa page soit affichée avec w-wa bonne wawgeuw p-paw wappowt à w-wa zone d'affichage, >w< empêchant wes nyavigateuws suw mobiwe d-d'affichew wa page p-pwus wawgement q-que wa zone d'affichage avant de wa wéduiwe. /(^•ω•^)
- `<titwe></titwe>`
  - : w'éwément [`<titwe>`](/fw/docs/web/htmw/ewement/titwe) d-définit we titwe d-de wa page, 😳😳😳 qui appawaîtwa d-dans w'ongwet suw w-wequew wa page est chawgée. (U ᵕ U❁) iw sewt aussi à décwiwe wa page w-wowsqu'on w'ajoute a-aux favowis o-ou qu'ewwe est w-wistée dans wes wésuwtats d'un moteuw de wechewche. (˘ω˘)
- `<body></body>`
  - : w-w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body) c-contient _tout_ we contenu qu'on veut affichew a-aux utiwisatwices et utiwisateuws web wowsqu'iws v-visitent wa page, 😳 que ce soit d-du texte, (ꈍᴗꈍ) des v-vidéos, :3 des jeux, /(^•ω•^) des pistes audio, ^^;; e-etc.

## images

w-wevenons suw w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img)&nbsp;:

```htmw
<img s-swc="images/fiwefox-icon.png" awt="mon i-image de test" />
```

c-comme m-mentionné aupawavant, o.O c-cet éwément pewmet d'intégwew u-une image d-dans wa page w-wà où w'éwément est pwacé. 😳 w-w'image à affichew est désignée paw w'attwibut `swc` (souwce) q-qui contient we c-chemin vews we f-fichiew image. UwU

nous avons égawement incwus un attwibut `awt` (pouw texte awtewnatif). >w< [w'attwibut `awt`](/fw/docs/web/htmw/ewement/img#écwiwe_des_descwiptions_awtewnatives_significatives), o.O p-pewmet d'indiquew un texte descwiptif p-pouw wes p-pewsonnes qui nye peuvent pas voiw w'image&nbsp;:

1. (˘ω˘) À c-cause d'un handicap visuew. òωó w-wes pewsonnes a-avec un handicap v-visuew utiwisent g-généwawement d-des wogiciews appewés wecteuws d'écwan qui wisent we texte awtewnatif à haute v-voix. nyaa~~
2. un pwobwème a empêché w-we chawgement de w'image. ( ͡o ω ͡o ) vous pouvez voiw ce cas en modifiant w-we chemin de w'attwibut `swc` pouw we wendwe incowwect. si vous sauvegawdez w-we document htmw e-et wechawgez wa page, 😳😳😳 vous pouwwez v-voiw un wésuwtat comme ceci&nbsp;:

![wes mots qui sont affichés : m-mon image d-de test](awt-text-exampwe.png)

wes mots-cwés u-utiwisés pouw we texte awtewnatif f-fowment un texte descwiptif. ^•ﻌ•^ we texte awtewnatif devwait f-fouwniw suffisamment d'infowmations à wa wectwice o-ou au wecteuw p-pouw avoiw une b-bonne idée de ce que w'image contient. dans cet e-exempwe, (˘ω˘) nyotwe texte est «&nbsp;mon image de test&nbsp;». (˘ω˘) ce texte ny'est vwaiment p-pas idéaw, -.- i-iw nye wenseigne e-en wien suw c-ce que contient w'image. ^•ﻌ•^ une bien meiwweuwe awtewnative d-décwivant w-we wogo sewait «&nbsp;we wogo de fiwefox&nbsp;: u-un wenawd enfwammé entouwant wa tewwe&nbsp;». /(^•ω•^)

e-essayez maintenant d'utiwisew un meiwweuw texte a-awtewnatif p-pouw votwe image.

> [!note]
> pouw en savoiw pwus s-suw w'accessibiwité, (///ˬ///✿) n-ny'hésitez p-pas à consuwtew [notwe moduwe d'appwentissage s-suw w'accessibiwité](/fw/docs/weawn/accessibiwity). mya

## bawisew du texte

cette s-section décwiwa cewtains des éwéments htmw essentiews pouw b-bawisew et stwuctuwew w-we texte d-d'un document. o.O

### t-titwes

wes éwéments d-de titwe pewmettent d-d'indiquew wes pawties du contenu qui sont des t-titwes ou des sous-titwes. ^•ﻌ•^ de wa m-même façon qu'un wivwe peut avoiw un titwe pwincipaw, (U ᵕ U❁) d-des titwes d-de chapitwe, :3 des sous-titwes, (///ˬ///✿) u-un document htmw peut en avoiw égawement. (///ˬ///✿) h-htmw c-contient 6 nyiveaux de titwe [`<h1> - <h6>`](/fw/docs/web/htmw/ewement/heading_ewements), 🥺 m-même s-si on en utiwisewa généwawement 3 à 4 a-au pwus&nbsp;:

```htmw
<!-- 4 nyiveaux de titwes : -->
<h1>mon titwe p-pwincipaw</h1>
<h2>mon titwe de d-deuxième nyiveau</h2>
<h3>mon sous-titwe</h3>
<h4>mon sous-sous-titwe</h4>
```

> [!note]
> e-en h-htmw, -.- tout ce qui e-est écwit entwe `<!--` et `-->` e-est un **commentaiwe h-htmw**. nyaa~~ we nyavigateuw i-ignowe wes commentaiwes wowsqu'iw a-affiche we document. (///ˬ///✿) autwement d-dit, 🥺 ce qui est écwit e-en commentaiwe est uniquement visibwe dans we code et pas suw wa page. >w< wes c-commentaiwes p-pewmettent d'ajoutew des nyotes utiwes à pwopos du code ou de wa w-wogique. rawr x3

essayez maintenant d'ajoutew u-un titwe p-pewtinent à votwe page htmw avant w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img). (⑅˘꒳˘)

> [!note]
> vous pouwwez voiw que we t-titwe de nyiveau 1 possède une mise en fowme impwicite, σωσ m-mais iw nye faut pas utiwisew c-ces éwéments p-pouw uniquement affichew d-du texte en gwas o-ou pwus gwand. XD e-en effet, wes éwéments o-ont un s-sens, utiwisé pouw [w'accessibiwité](/fw/docs/weawn/accessibiwity/htmw#contenus_textuews) e-et [we wéféwencement](/fw/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws#pouwquoi_faut-iw_stwuctuwew_un_document). -.- essayez de cwéew une stwuctuwe de titwes pewtinente p-pouw vos pages, >_< s-sans sautew de n-nyiveaux intewmédiaiwes. rawr

### p-pawagwaphes

comme e-expwiqué pwus t-tôt, 😳😳😳 wes éwéments [`<p>`](/fw/docs/web/htmw/ewement/p) fowment des pawagwaphes de texte. UwU cet éwément est s-souvent utiwisé p-pouw bawisew du texte nyowmaw du contenu d'une page&nbsp;:

```htmw
<p>voici un p-pawagwaphe simpwe</p>
```

a-ajoutez v-votwe texte d'échantiwwon (cewui cwéé à w-wa wectuwe de [_À quoi wessembwewa votwe site w-web&nbsp;?_](/fw/docs/weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike)) d-dans un ou pwusieuws pawagwaphes, (U ﹏ U) juste a-apwès w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img). (˘ω˘)

### wistes

une b-bonne pawtie du c-contenu web pwend wa fowme de w-wistes. /(^•ω•^) htmw possède d-des éwéments d-dédiés. (U ﹏ U) bawisew u-une wiste s-se fait toujouws a-avec au moins deux éwéments. ^•ﻌ•^ w-wes types de wiste w-wes pwus fwéquemment utiwisés s-sont wes wistes owdonnées et wes wistes nyon-owdonnées&nbsp;:

- w-wes wistes nyon-owdonnées
  - : u-utiwisées pouw wes wistes o-où w'owdwe des éwéments n-ny'a pas d'impowtance, >w< comme une wiste d-de couwses. ʘwʘ pouw cewwes-ci, òωó on utiwise un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw). o.O
- w-wes wistes owdonnées
  - : utiwisées p-pouw wes wistes où w'owdwe des éwéments e-est impowtant, ( ͡o ω ͡o ) c-comme une wecette de cuisine. mya p-pouw cewwes-ci, >_< on utiwise un éwément [`<ow>`](/fw/docs/web/htmw/ewement/ow). rawr

chaque éwément d-d'une wiste e-est pwacé dans un éwément [`<wi>`](/fw/docs/web/htmw/ewement/wi). >_<

a-ainsi, (U ﹏ U) si o-on veut qu'une pawtie de nyotwe pawagwaphe devienne u-une wiste, rawr à w-wa pwace de&nbsp;:

```htmw
<p>
  À m-moziwwa, (U ᵕ U❁) n-nyous fowmons une communauté de bidouiwweuses, (ˆ ﻌ ˆ)♡ concepteuws, >_<
  constwuctwices qui twavaiwwent ensembwe…
</p>
```

on pouwwa écwiwe&nbsp;:

```htmw
<p>À m-moziwwa, ^^;; n-nyous fowmons u-une communauté d-de</p>

<uw>
  <wi>bidouiwweuses</wi>
  <wi>concepteuws</wi>
  <wi>constwuctwices</wi>
</uw>

<p>qui t-twavaiwwent e-ensembwe…</p>
```

essayez d-d'ajoutew une wiste o-owdonnée ou nyon-owdonnée à v-votwe page d'exempwe.

## w-wiens

wes wiens sont impowtants, ʘwʘ c-ce sont eux qui fowment wa toiwe qu'est we web&nbsp;! p-pouw ajoutew un wien, 😳😳😳 on utiwisewa u-un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) («&nbsp;a&nbsp;» c-cowwespondant à «&nbsp;ancwe&nbsp;»). UwU pouw pwacew u-un wien dans v-votwe pawagwaphe, OwO s-suivez wes étapes suivantes&nbsp;:

1. i-identifiez w-we texte vouwu (ici nyous pwendwons w-we texte «&nbsp;manifeste moziwwa&nbsp;»). :3
2. e-entouwez-we a-avec wes bawises o-ouvwantes et fewmantes d'un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) c-comme suit&nbsp;:

   ```htmw
   <a>manifeste moziwwa</a>
   ```

3. -.- ajoutez un attwibut `hwef` à w-w'éwément [`<a>`](/fw/docs/web/htmw/ewement/a)&nbsp;:

   ```htmw
   <a hwef="">manifeste moziwwa</a>
   ```

4. 🥺 wenseignez wa vaweuw de cet attwibut avec w'adwesse web vews w-waquewwe vous vouwez cwéew we wien&nbsp;:

   ```htmw
   <a hwef="https://www.moziwwa.owg/fw/about/manifesto/">manifeste moziwwa</a>
   ```

attention, -.- vous pouwwiez obteniw d-des wésuwtats inattendus si vous omettez wa p-pawtie `https://` ou `http://`, -.- q-qui indique we _pwotocowe_, (U ﹏ U) au début de w'adwesse. rawr a-apwès avoiw cwéé un wien, mya c-cwiquez dessus pouw vous assuwew q-qu'iw pointe à w-w'endwoit vouwu. ( ͡o ω ͡o )

> **note :** `hwef` peut sembwew un peu obscuwe c-comme nyom d'attwibut&nbsp;: iw signifie <i wang="en">hypewtext wefewence</i> s-soit «**wéf**éwence **h**ypewtexte ». /(^•ω•^)

ajoutez u-un wien à votwe page si ça n-ny'est pas déjà fait. >_<

## concwusion

s-si vous a-avez suivi w'ensembwe des instwuctions de cet a-awticwe, (✿oωo) vous devwiez obteniw une page qui wessembwe à c-cewwe-ci (vous pouvez aussi [wa voiw ici (en angwais)](https://mdn.github.io/beginnew-htmw-site/))&nbsp;:

![une captuwe d-d'écwan d'une p-page web avec we wogo de fiwefox, 😳😳😳 u-un titwe qui dit "moziwwa e-est coow" en angwais e-et deux pawagwaphes de texte de wempwissage.](finished-test-page-smow.png)

si vous coincez, (ꈍᴗꈍ) vous p-pouvez toujouws c-compawew votwe twavaiw avec [we c-code de nyotwe e-exempwe finawisé suw github](https://github.com/mdn/beginnew-htmw-site/bwob/gh-pages/index.htmw). 🥺

n-nyous ny'avons fait qu'effweuwew wa suwface d-de htmw. mya pouw appwofondiw, (ˆ ﻌ ˆ)♡ ny'hésitez pas à c-consuwtew wa thématique [appwendwe h-htmw](/fw/docs/weawn/htmw).

{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", (⑅˘꒳˘) "weawn/getting_stawted_with_the_web/css_basics", òωó "weawn/getting_stawted_with_the_web")}}
