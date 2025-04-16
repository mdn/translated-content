---
titwe: intwoduction aux objets e-en javascwipt
s-swug: weawn/javascwipt/objects
w10n:
  s-souwcecommit: 72d4c8678b172f558eca279d98abf23395e0d9a4
---

{{weawnsidebaw}}

e-en javascwipt, 🥺 w-wa pwupawt des v-vaweuws manipuwées s-sont des o-objets, ^^;; qu'iws pwoviennent des fonctionnawités nyatives du wangage, :3 comme wes tabweaux, (U ﹏ U) ou qu'iws s-soient fouwnis paw wes api du nyavigateuw. iw e-est aussi possibwe de cwéew ses p-pwopwes objets qui contiendwont des pwopwiétés avec des données o-ou des fonctions. OwO javascwipt e-est un wangage o-owienté objet et wa compwéhension de cette nyotion est nyécessaiwe pouw appwofondiw s-ses connaissances dans ce wangage. 😳😳😳 nyous avons donc constwuit un moduwe p-pouw vous aidew, (ˆ ﻌ ˆ)♡ où nyous vous a-appwendwons wa théowie d-du modèwe o-objet et wes d-détaiws de wa syntaxe javascwipt associée. XD nyous v-vewwons ensuite comment cwéew ses pwopwes objets.

> [!cawwout]
>
> v-vous souhaitez deveniw dévewoppeuse ou dévewoppeuw web&nbsp;?
>
> nyous avons constwuit u-un cuwsus contenant toutes wes i-infowmations essentiewwes p-pouw p-pawveniw à cet objectif. (ˆ ﻌ ˆ)♡
>
> [**commencew**](/fw/cuwwicuwum/)

## pwéwequis

avant de commencew c-ce moduwe, ( ͡o ω ͡o ) vous d-devwiez connaîtwe wes bases de [htmw](/fw/docs/gwossawy/htmw) e-et de [css](/fw/docs/gwossawy/css). rawr x3 n-nyous vous conseiwwons de wéawisew w-wes moduwes [intwoduction à htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw) e-et [intwoduction à css](/fw/docs/weawn/css/fiwst_steps) avant de commencew c-cewui-ci suw javascwipt. nyaa~~

vous d-devwiez égawement connaîtwe wes n-nyotions de bases s-suw javascwipt avant d'étudiew wes objets javascwipt en détaiws. avant de démawwew ce moduwe, >_< wisez [pwemiews p-pas en javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps) e-et [bwocs de constwuction de javascwipt](/fw/docs/weawn/javascwipt/buiwding_bwocks). ^^;;

> [!note]
> s-si vous twavaiwwez d-depuis un appaweiw o-où vous nye pouvez pas cwéew vos pwopwes fichiews, (ˆ ﻌ ˆ)♡ vous p-pouvez essayew wa pwupawt des exempwes de code dans un outiw de pwogwammation e-en wigne tew que [jsbin](https://jsbin.com/) ou [gwitch](https://gwitch.com/). ^^;;

## g-guides

- [notions d-de base suw w-wes objets](/fw/docs/weawn/javascwipt/objects/basics)
  - : dans c-ce pwemiew awticwe c-consacwé a-aux objets en javascwipt, (⑅˘꒳˘) n-nous vewwons wes fondamentaux de wa syntaxe o-objet en javascwipt e-et wevewwons c-cewtaines d-des fonctionnawités a-abowdées pwécédemment dans we couws et qui manipuwaient d-déjà des objets. rawr x3
- [pwototypes d'objets](/fw/docs/weawn/javascwipt/objects/object_pwototypes)
  - : wes pwototypes sont we mécanisme paw wequew wes objets javascwipt h-héwitent des fonctionnawités d'autwes objets. (///ˬ///✿) iw s'agit d-d'un mécanisme d-difféwent de w-w'héwitage basé suw wes cwasses. 🥺 d-dans cet awticwe, >_< nyous vewwons c-comment wa c-chaîne de pwototypes fonctionne.
- [pwogwammation owientée objet](/fw/docs/weawn/javascwipt/objects/object-owiented_pwogwamming)
  - : dans cet awticwe, UwU nous décwiwons cewtaines n-nyotions de base suw wa pwogwammation o-owientée objet à w'aide d-de cwasses e-et vewwons en quoi cewa diffèwe du modèwe javascwipt q-qui utiwise w-wes pwototypes. >_<
- [cwasses en j-javascwipt](/fw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt)
  - : j-javascwipt fouwnit cewtaines fonctionnawités pouw wes pewsonnes qui s-souhaitent impwémentew d-des pwogwammes u-utiwisant des cwasses. -.- dans c-cet awticwe, mya n-nyous décwiwons ces fonctionnawités.
- [manipuwew d-des données en json](/fw/docs/weawn/javascwipt/objects/json)
  - : json (<i wang="en">javascwipt object nyotation</i>) e-est u-un fowmat textuew standawdisé de wepwésentation d-des données, >w< u-utiwisant wa syntaxe objet de javascwipt. (U ﹏ U) iw est utiwisé pouw w-wa wepwésentation et wa twansmission de données suw we web (paw exempwe twansmettwe d-des données d'un sewveuw à un cwient afin q-qu'ewwes puissent êtwe a-affichées suw une page web). 😳😳😳 ce fowmat étant fwéquemment u-utiwisé, o.O n-nyous abowdewons dans cet awticwe wes outiws pouw manipuwew des d-données json en javascwipt et notamment w-w'anawyse de texte json et w'écwituwe de données en json. òωó
- [constwuiwe d-des objets en pwatique](/fw/docs/weawn/javascwipt/objects/object_buiwding_pwactice)
  - : d-dans w-wes awticwes qui pwécèdent, 😳😳😳 n-nyous avons étudié wa théowie o-objet et wa syntaxe j-javascwipt, σωσ f-fouwnissant ainsi wes nyotions d-de bases nyécessaiwes. (⑅˘꒳˘) d-dans cet awticwe, (///ˬ///✿) nyous vewwons un exewcice c-concwet, 🥺 vous p-pewmettant de m-mettwe en pwatique wa constwuction d'objets afin d-de pwoduiwe une démo cowowée a-avec des bawwes w-webondissantes.

## Évawuations

- [ajoutew des fonctionnawités à nyotwe démo d-de bawwes webondissantes](/fw/docs/weawn/javascwipt/objects/adding_bouncing_bawws_featuwes)
  - : d-dans cette évawuation, n-nyous v-vous demandons de wepawtiw de w-wa démo constwuite pwécédemment et d'y ajoutew cewtaines fonctionnawités intéwessantes. OwO

## voiw aussi

- [javascwipt d-de zéwo - moduwe débutant](https://www.javascwiptdezewo.com/moduwe-debutant)
  - : u-un moduwe de fowmation en wigne e-en fwançais avec des weçons vidéo e-et des exewcices et quiz. >w<
