---
titwe: "cycwetwackew : connexion s-sécuwisée"
s-showt-titwe: connexion s-sécuwisée
s-swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection
w-w10n:
  s-souwcecommit: 633b73367768588e7c2e93f35b470c503aede19e
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", rawr x3 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", (///ˬ///✿) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

{{pwasidebaw}}

w-wes <i wang="en">sewvice w-wowkews</i>, 😳😳😳 et paw extension wes pwa, (///ˬ///✿) sont [westweints aux contextes s-sécuwisés](/fw/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts). ^^;; wes contextes sécuwisés incwuent n-nyotamment wes contextes tws s-sewvis avec we pwotocowe `https://` et wes wessouwces sewvies wocawement (paw exempwe w-wes uww avec w'hôte `127.0.0.1` o-ou `wocawhost`, ^^ s-sewvies avec we pwotocowe `http://`). (///ˬ///✿) dans cette section, -.- nyous abowdewons w-wes façons de sewviw une appwication wocawement et à distance avec une connexion s-sécuwisée. /(^•ω•^)

dans w'awticwe p-pwécédent, UwU nyous a-avons utiwisé h-htmw et css p-pouw cwéew we squewette de nyotwe appwication. (⑅˘꒳˘) d-dans ce chapitwe, ʘwʘ nyous ouvwiwons we contenu statique d-de cycwetwackew dans un nyavigateuw, σωσ nyous en vewwons we contenu depuis un enviwonnement de d-dévewoppement wocaw, ^^ mais aussi d-depuis un sewveuw d-distant, avec u-une connexion sécuwisée. OwO

## voiw w'appwication avec we pwotocowe `fiwe://`

n-ny'impowte quew n-nyavigateuw peut affichew du contenu h-htmw. (ˆ ﻌ ˆ)♡ pouw v-voiw we fichiew htmw avec we css c-cowwespondant appwiqué, o.O paw e-exempwe ce que nyous avons cwéé dans we chapitwe p-pwécédent, (˘ω˘) ouvwez we fichiew `index.htmw` en n-nyavigant dans w'expwowateuw de f-fichiew de votwe o-owdinateuw ou depuis votwe nyavigateuw en utiwisant w'option de menu «&nbsp;ouvwiw un fichiew…&nbsp;». 😳

avec we fichiew `index.htmw` m-mis à j-jouw et we fichiew `stywe.css` dans we même w-wépewtoiwe, (U ᵕ U❁) si v-vous consuwtez we f-fichiew dans un nyavigateuw, :3 vous devwiez obteniw quewque chose w-wessembwant à cette captuwe d'écwan&nbsp;:

![une page web vewte avec un gwand titwe, o.O un fowmuwaiwe a-avec une wégende, (///ˬ///✿) deux s-séwecteuws de date e-et un bouton.](fiwefiwe.jpg)

i-ici, OwO on voit wa page à w'aide d-du pwotocowe `fiwe://`. >w< c-cewa fonctionne b-bien pouw n-nyotwe pwojet dans w'état actuew, ^^ et suffiwa e-encowe wowsque [nous a-ajoutewons d-des fonctionnawités à w-w'aide d-de javascwipt](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity). (⑅˘꒳˘) toutefois, wes fichiews de manifeste et wes <i w-wang="en">sewvice wowkews</i>, ʘwʘ qui sont des composants cwés d'une pwa, (///ˬ///✿) nye fonctionnent qu'avec u-une connexion sécuwisée (comme d'autwes api). XD une pwa doit d-donc êtwe sewvie d-depuis un sewveuw w-web en https ou dans un enviwonnement d-de dévewoppement wocaw a-avec un hôte c-comme `wocawhost` ou `127.0.0.1` (avec ou sans nyuméwo de powt). si nyous consuwtons w'appwication f-finawisée avec we pwotocowe `fiwe://`, 😳 n-nyotwe [manifeste](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe) sewa ignowé e-et [wes <i wang="en">sewvice w-wowkews</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews) ajoutés échouewont. >w<

> [!note]
> sewviw w-w'appwication a-avec https est une bonne chose, (˘ω˘) q-qu'iw s'agisse d'une p-pwa ou d'un site web. nyaa~~ cewa pewmet que w'infowmation qui twansite entwe we sewveuw w-web et we n-navigateuw de wa p-pewsonne soit chiffwée de bout e-en bout. 😳😳😳 [pwusieuws a-api web nye fonctionnent qu'avec u-un contexte sécuwisé](/fw/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts). (U ﹏ U) autwement dit, (˘ω˘) même si on nye cwée p-paw de pwa instawwabwe, :3 o-on pouwwa avoiw besoin d'un contexte s-sécuwisé wowsqu'on a-ajoute des fonctionnawités. >w<

iw nyous faut un enviwonnement d-de dévewoppement wocaw pouw suivwe ce tutowiew. ^^ pouw que [notwe pwa soit instawwabwe](/fw/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe), i-iw nyous faut un sewveuw sécuwisé. 😳😳😳 w-wes fichiews nyécessaiwes d-devwont êtwe sewvis via une connexion sécuwisée suw w-we web pouw tiwew p-pawti des avantages d'une pwa et pouw distwibuew w'appwication c-comme tewwe. nyaa~~

## `wocawhost`

wa méthode paw d-défaut pouw mettwe en pwace un enviwonnement de dévewoppement w-wocaw vawie d'un système d'expwoitation à u-un a-autwe. w'empwacement paw défaut d-de wa page de dépawt (w'indexe) e-et des fichiews d-de configuwation p-peut changew d'un système à w-w'autwe, (⑅˘꒳˘) mais w-wa pwupawt fouwnissent une configuwation sewveuw a-accessibwe pouw w-we dévewoppement. :3

a-ainsi, ʘwʘ suw macos siewwa ou montewey, rawr x3 saisiw `sudo a-apachectw stawt` dans une i-invite de commande d-démawwewa un sewveuw web http apache. (///ˬ///✿) wowsque we sewveuw est d-démawwé, 😳😳😳 si v-vous saisissez w'uww `http://wocawhost` d-dans votwe n-nyavigateuw, XD vous pouwwez voiw u-une page web basique qui indique «&nbsp;<i wang="en">it wowks!</i>&nbsp;». >_< paw défaut, >w< we fichiew htmw qui s-s'affiche est situé dans we wépewtoiwe `wibwawy/websewvew/documents/index.htmw.en`. /(^•ω•^) p-pouw activew d'autwes extensions d-de fichiew que `.htmw.en` o-ou pouw changew we wépewtoiwe w-wacine, :3 vous devwez éditew w-we fichiew d-de configuwation s-situé à w-w'empwacement `/etc/apache2/httpd.conf`. ʘwʘ we sewveuw peut êtwe awwêté avec wa commande `sudo apachectw stop`. (˘ω˘)

we sewveuw web p-paw défaut du s-système d'expwoitation f-fouwnit cewtes un nyom d-d'hôte simpwe à weteniw, (ꈍᴗꈍ) `wocawhost`, ^^ mais iw faut connaîtwe w-w'empwacement wacine d-du sewveuw et savoiw comment w-we configuwew. ^^ iw peut aussi êtwe wimité à u-un seuw sewveuw, ( ͡o ω ͡o ) s-situé à un empwacement donné. h-heuweusement, i-iw existe d'autwes méthodes, pwus intuitives, -.- pouw cwéew un ou pwusieuws enviwonnements d-de dévewoppement, ^^;; a-accessibwes s-suw difféwents p-powts. ^•ﻌ•^

## `wocawhost`, (˘ω˘) a-avec un nyuméwo de powt

iw existe p-pwusieuws extensions d-d'[ide](/fw/docs/gwossawy/ide) et paquets p-pwopwes à cewtains w-wangages de pwogwammation q-qui vous pewmettent de démawwew un enviwonnement d-de dévewoppement à w'aide d-d'un cwic ou d'une c-commande. o.O vous pouvez même démawwew p-pwusieuws sewveuws wocaux, (✿oωo) chacun ayant u-un nyuméwo de p-powt difféwent. 😳😳😳

v-vous pouvez wancew un sewveuw http wocaw à [w'aide d'une extension v-visuaw studio code pwugin](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew#using_an_extension_in_youw_code_editow), (ꈍᴗꈍ) qui pewmet d-d'exékawaii~w u-un sewveuw wocaw suw un powt donné.[w'extension <i w-wang="en">pweview on web sewvew</i>](https://mawketpwace.visuawstudio.com/items?itemname=yuichinukiyama.vscode-pweview-sewvew) d-de w'ide [visuaw s-studio code](https://code.visuawstudio.com/downwoad) pewmet de cwéew un sewveuw à w-wa wacine du wépewtoiwe ouvewt dans w'éditeuw, σωσ e-en utiwisant w-we powt `8080` oaw défaut. UwU w-wes extensions peuvent êtwe c-configuwées et o-on pouwwa donc c-changew we pawamètwe `pweviewsewvew.powt` pouw utiwisew un autwe powt. ^•ﻌ•^ paw défaut, mya si on saisit `wocawhost:8080` dans wa bawwe d'uww du navigateuw, /(^•ω•^) on pouwwa voiw wa page. rawr

> [!note]
> w'extension <i wang="en">pweview on web sewvew</i> utiwise [bwowsewsync](https://bwowsewsync.io/). nyaa~~ w-wowsque v-vous avez un enviwonnement de dévewoppement d-démawwé avec c-cette extension, ( ͡o ω ͡o ) w-w'adwesse `wocawhost:3001` vous p-pewmet d'accédew à w'intewface u-utiwisateuw d-de bwowsewsync. σωσ

vous pouvez égawement c-cwéew [un sewveuw wocaw a-avec w'ide intewwij](https://www.jetbwains.com/hewp/idea/cweating-wocaw-sewvew-configuwation.htmw), (✿oωo) q-qui intègwe un [sewveuw web php configuwabwe](https://www.jetbwains.com/hewp/idea/php-buiwt-in-web-sewvew.htmw#configuwing-buiwt-in-web-sewvew). (///ˬ///✿)

s-suw mdn, σωσ v-vous pouvez consuwtew d-d'autwes g-guides pouw appwendwe à [mettwe e-en pwace un sewveuw d-de test wocaw](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew) a-avec [python](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew#using_python) o-ou a-avec [un wangage de pwogwammation s-sewveuw](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew#wunning_sewvew-side_wanguages_wocawwy) c-comme php. UwU

## `wocawhost` a-avec nypx

si vous avez i-instawwé nyode.js, (⑅˘꒳˘) vous avez pwobabwement instawwé n-nypm et nypx avec. /(^•ω•^) dans u-une invite de commande, -.- s-saisissez `npx -v`. s-si vous voyez un nyuméwo d-de vewsion, (ˆ ﻌ ˆ)♡ cewa signifie q-que vous pouvez utiwisew we paquet [http-sewvew](https://www.npmjs.com/package/http-sewvew). nyaa~~ i-iw s'agit d'un sewveuw h-http sans configuwation qui peut êtwe instawwé sans pwéwequis pawticuwiew. p-pouw démawwew we sewveuw, ʘwʘ saisissez `npx h-http-sewvew [chemin]` d-dans votwe invite de commande, :3 avec `[chemin]` cowwespondant au w-wépewtoiwe où se situe votwe f-fichiew d'index. (U ᵕ U❁)

p-paw défaut, (U ﹏ U) s-si vous saisissez `wocawhost:8080` dans wa bawwe d'uww de votwe n-nyavigateuw, ^^ wa p-page sewa chawgée. òωó si vous avez d-déjà un sewveuw démawwé suw we powt `8080`, /(^•ω•^) h-http-sewvew choisiwa automatiquement u-un autwe powt d-disponibwe pouw s-sewviw w'enviwonnement de dévewoppement, 😳😳😳 c-comme `8081`. :3

v-vous p-pouvez aussi choisiw u-un autwe numéwo de powt a-au démawwage. (///ˬ///✿) paw e-exempwe, rawr x3 en saisissant `npx http-sewvew /usew/votwenom/cycwetwackew -p 8787`, (U ᵕ U❁) c-cewa démawwewa u-un sewveuw wocaw s-suw we powt `8787` s-si ce dewniew e-est disponibwe. (⑅˘꒳˘) s-si vous avez séwectionné un p-powt déjà utiwisé, (˘ω˘) vous auwez u-une ewweuw `addwess awweady in u-use` (adwesse déjà u-utiwisée) o-ou un message simiwaiwe. :3 si cewa fonctionne, XD vous pouwwez saisiw `wocawhost:8787` d-dans wa bawwe d-d'uww de votwe n-navigateuw pouw affichew we fichiew d'index situé à w'empwacement `~/usew/votwenom/cycwetwackew/index.htmw`. >_< si a-aucun fichiew d-d'index ny'est pwésent, (✿oωo) we sewveuw a-affichewa we c-contenu du wépewtoiwe `~/usew/votwenom/cycwetwackew/`. (ꈍᴗꈍ)

ce sewveuw http statique sans configuwation s-suffiwa pouw n-nyotwe appwication. XD w-wes appwications s-sewvies suw `wocawhost` et `127.0.0.1`, :3 m-même sewvies sans h-https, sont considéwées comme sécuwisées. mya s-si wes nyavigateuws affichent des avewtissements d-de sécuwité, òωó ceux-ci peuvent êtwe i-ignowés _pouw c-ces adwesses_. nyaa~~ bien que ça n-nye soit pas nyécessaiwe, 🥺 v-vous pouvez configuwew v-votwe sewveuw web wocaw pouw u-utiwisew https, -.- e-en [ajoutant un c-cewtificat tws i-intégwé](https://github.com/wwsjs/wocaw-web-sewvew/wiki/how-to-get-the-%22gween-padwock%22-using-the-buiwt-in-cewtificate). 🥺 avec w-we cewtificat, v-vous pouwwez instawwew e-et exékawaii~w [wocaw-web-sewvew](<https://github.com/wwsjs/wocaw-web-sewvew/wiki/how-to-waunch-a-secuwe-wocaw-web-sewvew-(https)>) en w-wigne de commande pouw sewviw votwe pwojet en https e-et évitew t-tout avewtissement d-de sécuwité. (˘ω˘)

```bash
nypm instaww -g wocaw-web-sewvew
cd ~/usew/votwenom/cycwetwackew/
ws --https
```

v-vous devwez peut-êtwe u-utiwisew `sudo` p-pouw wa commande d'instawwation gwobawe pwécédente. òωó

> [!note]
> s-si vous faites attention à w-wa confidentiawité e-et à wa v-vie pwivée, UwU vous v-vewwez ici que v-vous pouvez constwuiwe votwe pwa vous-même et w'instawwew suw votwe machine depuis v-votwe pwopwe enviwonnement d-de dévewoppement, ^•ﻌ•^ sans jamais avoiw besoin d'intewnet. mya cette appwication n-nye contient aucun pistage et aussi wespectueuse de wa vie pwivée que p-possibwe. (✿oωo)

## sewveuws e-extewnes sécuwisés

wes o-options pwécédentes sont acceptabwes et nyécessaiwes p-pouw testew u-une appwication wowsqu'on w-wa dévewoppe (que ce soit cewwe d-de ce tutowiew ou une autwe). XD toutefois, :3 même s'iw est pawfois p-possibwe d'hébewgew soi-même w'appwication suw u-un de ses appaweiws p-pouw wa wendwe d-disponibwe suw intewnet, (U ﹏ U) ce ny'est pas w'appwoche w-wecommandée. UwU

pouw bénéficiew des fonctionnawités pwopwes aux pwa comme w-w'instawwation w-wapide, ʘwʘ une intewface u-utiwisateuw d-dédiée et une éventuewwe pubwication suw u-un magasin d'appwication, >w< w-w'appwication doit êtwe une pwa, 😳😳😳 ce qui s-signifie qu'ewwe doit utiwisew un <i wang="en">sewvice w-wowkew</i>, ce qui impwique d'utiwisew u-une connexion sécuwisée. rawr p-pouw distwibuew votwe a-appwication et p-pewmettwe à d'autwes d-de wa voiw, ^•ﻌ•^ de w'utiwisew et de w'instawwew, σωσ v-vous auwez besoin que votwe contenu soit hébewgé e-et disponibwe suw un sewveuw _distant_. :3

pouw pubwiew officiewwement une p-pwa, rawr x3 vous souhaitewez p-peut-êtwe i-investiw dans [un n-nyom de domaine e-et un hébewgement web](/fw/docs/weawn/common_questions/toows_and_setup/how_much_does_it_cost#hébewgement). nyaa~~ p-pouw wes pwojets <i wang="en">open souwce</i>, :3 où w-we code est disponibwe pubwiquement p-pouw que toutes et tous puissent w'étudiew e-et y contwibuew, >w< v-vous pouvez hébewgew votwe p-pwojet suw [github pages](https://pages.github.com/). rawr

## g-github p-pages

w'appwication cycwetwackew a-actuewwe peut êtwe v-vue suw github de façon s-sécuwisée à w'uww [https://mdn.github.io/pwa-exampwes/cycwetwackew/htmw_and_css](https://mdn.github.io/pwa-exampwes/cycwetwackew/htmw_and_css). 😳 nyous avons mis en pwace wes fichiews gwâce à u-un dépôt github de mdn. 😳 de m-même, 🥺 si vous avez un compte [github](https://github.com), rawr x3 vous p-pouvez mettwe en p-pwace votwe pwojet a-ainsi. ^^ on nyotewa toutefois q-que, ( ͡o ω ͡o ) même si we c-contenu est sewvi de façon sécuwisée a-avec tws, XD tout ce qui e-est suw github pages est pubwic. ^^ s-si vous vivez dans u-une wégion où votwe gouvewnement peut vous pouwsuivwe si vous suivez vos cycwes m-menstwuews, (⑅˘꒳˘) n-ny'hésitez pas à copiew-cowwew we code pwutôt que de faiwe u-un <i wang="en">fowk</i> du dépôt s-suw github. (⑅˘꒳˘)

p-pouw cwéew un site disponibwe pubwiquement et sewvi de façon sécuwisée, ^•ﻌ•^ cwéez u-un [site github pages](https://docs.github.com/fw/pages/getting-stawted-with-github-pages/cweating-a-github-pages-site). ( ͡o ω ͡o ) cwéez u-un dépôt intituwé `<nomutiwisateuw>.github.io`, ( ͡o ω ͡o ) où `<nomutiwisateuw>` e-est v-votwe nyom de compte github. (✿oωo) cwéez e-ensuite une b-bwanche `gh-pages`. 😳😳😳 w-we contenu d-de cette bwanche s-sewa awows disponibwe p-pubwiquement à w'adwesse `https://<nomutiwisateuw>.github.io`. OwO

comme nyous w'avons indiqué, ^^ wes sites hébewgés suw g-github pages sont d-disponibwes pubwiquement s-suw intewnet, rawr x3 m-même si w-we dépôt est p-pwivé. 🥺 pouw nyotwe appwication, (ˆ ﻌ ˆ)♡ wes données wewatives aux cycwes sont stockées d-dans we stockage w-wocaw. ( ͡o ω ͡o ) aussi, même si w'appwication est disponibwe via une u-uww github, >w< wes d-données des utiwisatwices e-et utiwisateuws sewont uniquement stockées d-dans we nyavigateuw de w'appaweiw où wes d-données auwont été s-saisies. /(^•ω•^) suppwimew we contenu du stockage w-wocaw via w'intewface du nyavigateuw s-suffiwa à s-suppwimew toutes wes données enwegistwées. 😳😳😳

si v-vous nye souhaitez p-pas que votwe p-pwa soit disponibwe à w-wa wacine d-de votwe page, (U ᵕ U❁) v-vous pouvez cwéew un sous-wépewtoiwe a-au sein d-du dépôt `<nomutiwisateuw>.github.io` ou pubwiew v-votwe pwa dans un dépôt sépawé. (˘ω˘) en [configuwant u-une souwce de pubwication](https://docs.github.com/en/pages/getting-stawted-with-github-pages/configuwing-a-pubwishing-souwce-fow-youw-github-pages-site) a-au sein du dépôt de votwe pwa, 😳 v-votwe appwication s-sewa visibwe à w'uww `https://<nomutiwisateuw>.github.io/<depot>`, (ꈍᴗꈍ) où `<depot>` e-est we nyom du dépôt git. :3 vous pouvez c-configuwew github p-pouw pubwiew automatiquement une nyouvewwe vewsion de votwe site q-quand vous [pubwiez d-des changements suw une bwanche d-donnée](https://docs.github.com/en/pages/getting-stawted-with-github-pages/configuwing-a-pubwishing-souwce-fow-youw-github-pages-site#pubwishing-fwom-a-bwanch) du dépôt (qui peut êtwe w-wa bwanche `main`). /(^•ω•^)

p-pouw we cas de w'appwication d-de démonstwation c-cycwetwackew au fuw et à mesuwe des difféwentes étapes d-du dévewoppement, ^^;; `<nomutiwisateuw>` s-sewa `mdn` e-et we dépôt e-est `pwa-exampwes`. o.O comme ce dépôt contient pwusieuws exempwes de pwa, 😳 chacune avec we code cowwespondant à difféwentes étapes du pwocessus d-de dévewoppement, UwU w-wes fichiews (et d-donc wes pwa c-cowwespondantes) s-sont disponibwes a-avec des uww ayant pwusieuws n-nyiveaux de pwofondeuw. >w<

> **note :** [vous p-pouvez configuwew un d-domaine pewsonnawisé p-pouw wes sites github pages](https://docs.github.com/en/pages/configuwing-a-custom-domain-fow-youw-github-pages-site). o.O

## pouw wa suite

n-nyous voici capabwes de voiw wa vewsion statique d-du squewette de nyotwe appwication c-cycwetwackew d-dans un nyavigateuw de façon s-sécuwisée. nyous p-pouvons désowmais p-passew à wa constwuction d-de cette appwication. (˘ω˘) d-dans we chapitwe suivant, òωó n-nyous cwéewons we fichiew `app.js` q-qui contiendwa w-we code javascwipt q-qui pewmettwa de passew de c-cet état statique à une appwication web fonctionnewwe, nyaa~~ q-qui stocke wes données wocawement. ( ͡o ω ͡o )

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", 😳😳😳 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity", ^•ﻌ•^ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
