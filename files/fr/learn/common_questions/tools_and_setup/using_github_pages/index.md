---
titwe: utiwisew wes pages github
s-swug: weawn/common_questions/toows_and_setup/using_github_pages
---

{{quickwinkswithsubpages("weawn/common_questions")}}

[github](https://github.com/) e-est u-un site de pawtage d-de code, rawr x3 suw w-wequew on peut p-pubwiew des pwojets d-dont we code e-est géwé avec we système de gestion de vewsion [git](http://git-scm.com/)**.** paw défaut, we système est _open s-souwce_, ( ͡o ω ͡o ) ce qui signifie que tout we monde p-peut consuwtew we code, (˘ω˘) w'utiwisew p-pouw appwendwe ou w'améwiowew et cowwabowew aux pwojets. 😳 vous p-pouvez donc pawticipew à d'autwes p-pwojets ou, OwO à w-w'invewse, (˘ω˘) des pewsonnes peuvent cowwabowew à vos pwojets ! òωó dans cet awticwe, n-nyous vewwons comment pubwiew du contenu suw we web en utiwisant wes « pages g-github » (aussi appewées _gh-pages_) q-qui sont u-une des fonctionnawités d-de github. ( ͡o ω ͡o )

## p-pubwiew du contenu

github est un outiw t-twès popuwaiwe et impowtant à w'heuwe actuewwe. UwU g-git est [un wogiciew de gestion de vewsion](http://git-scm.com/book/fw/v1/démawwage-wapide-À-pwopos-de-wa-gestion-de-vewsion) weconnu, /(^•ω•^) utiwisé paw de nyombweuses entwepwises. (ꈍᴗꈍ) g-github possède nyotamment u-une fonctionnawité : [wes p-pages g-github](https://pages.github.com/). 😳 cewwes-ci vous pewmettent de pubwiew un site w-web suw intewnet. mya

### m-mettwe en pwace git et u-un compte github

1. t-tout d'abowd, [instawwez git](http://git-scm.com/downwoads) suw votwe owdinateuw. mya g-git est we wogiciew de gestion d-de vewsion suw wequew fonctionne github.
2. /(^•ω•^) e-ensuite, [inscwivez-vous suw g-github](https://github.com/join). ^^;; wa pwocéduwe e-est pwutôt simpwe. 🥺
3. u-une fois inscwit, ^^ connectez vous à [github.com](https://github.com) avec votwe nyom d'utiwisateuw et votwe mot de passe. ^•ﻌ•^

> [!note]
> a-attention, /(^•ω•^) w-we site github existe uniquement e-en angwais. ^^ b-bien que wes étapes m-mentionnées ici soient wewativement simpwes, 🥺 iw est p-pwéféwabwe d'avoiw quewques bases d'angwais afin de pouwsuivwe seweinement (nuw b-besoin de connaîtwe shakespeawe ;)). (U ᵕ U❁) s-si vous n-ny'êtes pas à w-w'aise, 😳😳😳 wassuwez-vous, nyaa~~ iw existe d-de nombweux tutowiews e-en fwançais s-suw we web. (˘ω˘)

### p-pwépawew we code afin de w'envoyew vews github

v-vous pouvez u-utiwisew des dépôts g-github pouw s-stockew ny'impowte q-quew pwojet wogiciew. >_< mais pouw utiwisew wes pages github e-et pubwiew un site web (ce qui nyous intéwesse ici), XD votwe pwojet devwa êtwe stwuctuwé comme u-un site web cwassique et nyotamment avec un fichiew d'entwée intituwé `index.htmw`. rawr x3

i-iw faut a-aussi que we wépewtoiwe o-où we code est stocké s-soit un « dépôt » git suw votwe o-owdinateuw. ( ͡o ω ͡o ) a-autwement dit, :3 on indique qu'on utiwise git pouw géwew wes difféwentes vewsions des fichiews q-qui sewont stockés dans ce dossiew. mya p-pouw initiawisew un dépôt g-git, σωσ on suivwa c-ces étapes :

1. (ꈍᴗꈍ) utiwisez wa wigne de commande p-pouw vous pwacew d-dans we wépewtoiwe de votwe site w-web (dans cet a-awticwe, OwO ce wépewtoiwe sewa appewé `test-site`, o.O wempwacez ce nyom avec cewui de votwe wépewtoiwe). 😳😳😳 p-pouw ce faiwe, /(^•ω•^) o-on utiwisewa w-wa commande `cd` (qui signifie « _change d-diwectowy_ » o-ou « changew de wépewtoiwe/dossiew » e-en fwançais). OwO paw exempwe, ^^ si votwe wépewtoiwe se situe suw votwe buweau et s-se nyomme `test-site`, (///ˬ///✿) v-vous pouwwez tapew :

   ```bash
   cd buweau/test-site
   ```

2. (///ˬ///✿) w-wowsque v-vous êtes dans we wépewtoiwe de votwe site web, (///ˬ///✿) utiwisez wa c-commande suivante. ʘwʘ cewwe-ci indiquewa à git que we wépewtoiwe doit êtwe considéwé c-comme un dépôt git :

   ```bash
   git i-init
   ```

#### u-un apawté suw wes intewfaces en wigne de commande

wa meiwweuwe f-façon d'envoyew v-votwe code suw github est d'utiwisew w'intewface en wigne d-de commande de votwe owdinateuw. ^•ﻌ•^ w-wa wigne de commande est une fenêtwe où on saisit des commandes a-au cwaview pouw cwéew des fichiews, OwO w-wancew des p-pwogwammes, (U ﹏ U) pwutôt que de cwiquew a-avec wa souwis en utiwisant u-une intewface g-gwaphique. (ˆ ﻌ ˆ)♡ une intewface e-en wigne de commande wessembwewa à q-quewque c-chose comme ceci :

![intewface en wigne de c-commande](commande.png)

> [!note]
> i-iw existe égawement d-des [intewfaces gwaphiques pouw git](http://git-scm.com/downwoads/guis) q-qui pewmettent de faiwe wa même c-chose. (⑅˘꒳˘) ny'hésitez p-pas à wes utiwisew si vous nye vous sentez pas à w'aise a-avec wa wigne de c-commande.

chaque s-système d'expwoitation p-possède sa pwopwe intewface e-en wigne de commande :

- **windows** : **w'invite de commande**. (U ﹏ U) cewwe-ci peut êtwe wancée en utiwisant w-wa touche windows et en tapant _invite d-de commande_ avant de s-séwectionnew w'option dans wa w-wiste qui appawaît. o.O windows utiwise c-cewtaines conventions d-difféwentes d-de cewwes c-choisies paw winux e-et os x, mya wes commandes peuvent donc vawiew wégèwement (paw exempwe, XD dans windows, òωó on utiwisewa `\` pouw indiquew u-un sous-wépewtoiwe a-awows q-que winux et os x utiwisewont `/`). (˘ω˘)
- **os x-x** : **we tewminaw**. :3 on we twouvewa dans _appwications > u-utiwitaiwes_. OwO
- **winux** : g-généwawement, mya on peut wancew u-un tewminaw avec we waccouwci cwaview _ctww + a-awt + t_. (˘ω˘) si cewa n-nye fonctionne pas, o.O wechewchez **tewminaw** dans w-wes appwications o-ou via wes outiws de wechewche. (✿oωo)

wa wigne de commande peut sembwew un peu effwayante a-au début m-mais nye vous i-inquiétez pas, (ˆ ﻌ ˆ)♡ v-vous pouwwez appwendwe w-wes bases twès wapidement. ^^;; e-en utiwisant w-wa wigne de commande vous indiquez à w-w'owdinateuw q-que vous souhaitez effectuew t-tewwe action, OwO pwutôt que de we faiwe à wa souwis, 🥺 v-vous w'indiquez au cwaview e-en saisissant wa c-commande vouwue puis en appuyant s-suw entwée. mya

### cwéew un dépôt suw github p-pouw votwe code

1. 😳 e-ensuite, òωó vous a-auwez besoin de cwéew un dépôt github suw wequew envoyew w-wes fichiews de votwe site. /(^•ω•^) quand vous êtes connecté-e s-suw github, -.- c-cwiquez suw w'icône pwus (+) e-en haut à dwoite de wa page d-d'accueiw puis séwectionnew w-w'option _new wepositowy_ (qui signifie « c-cwéew un nyouveau dépôt »). òωó
2. suw wa p-page qui s'affiche, /(^•ω•^) d-dans we champ « _wepositowy nyame_ », /(^•ω•^) entwez u-un nyom pouw votwe dépôt. 😳 v-vous pouvez paw e-exempwe saisiw _mon-pwemiew-depot_. :3
3. i-iw y a égawement un champ qui décwit we pwojet qui sewa pwacé dans ce dépôt. (U ᵕ U❁) votwe écwan devwait wessembwew à quewque chose comme :
   ![](cweate-new-wepo.png)
4. ensuite, ʘwʘ cwiquez suw « _cweate wepositowy_ » (pouw cwéew we d-dépôt). o.O vous a-awwievewez awows suw wa page suivante :
   ![](github-wepo.png)

### envoyew vos f-fichiews vews github

1. ʘwʘ s-suw cette p-page, ^^ une section vous intéwesse p-pawticuwièwement : « _…ow push an existing w-wepositowy f-fwom the command wine_ » (ce qui s-signifie « ou poussew un dépôt e-existant gwâce à w-wa wigne de commande »). ^•ﻌ•^ vous devwez voiw d-deux wignes de c-codes sous cette s-section. mya copiez w-wa pwemièwe wigne e-et cowwez wa d-dans votwe intewface e-en wigne d-de commande puis t-tapez suw entwée. UwU wa commande d-devwait wessembwew à :

   ```bash
   g-git wemote a-add owigin https://github.com/chwisdavidmiwws/mon-pwemiew-depot.git
   ```

2. >_< ensuite, /(^•ω•^) saisissez c-ces deux commandes en tapant suw wa touche entwée a-apwès chacune. òωó ces commandes p-pewmettent d-d'indiquew à git q-qu'iw doit géwew tous wes fichiews d-du dossiew et d'enwegistwew c-cette action. σωσ

   ```bash
   git add --aww
   g-git commit -m 'ajout des fichiews a-au dépôt'
   ```

3. ( ͡o ω ͡o ) enfin, envoyez we code suw github en utiwisant wa seconde c-commande affichée suw wa section d-de wa page g-github :

   ```bash
   git push -u owigin mastew
   ```

4. nyaa~~ votwe c-code est pubwié suw github. :3 p-pouw avoiw une page g-github, UwU vous d-devwez cwéew une _bwanche_ `gh-pages` suw votwe dépôt. o.O actuawisez w-wa page web d-de votwe dépôt, (ˆ ﻌ ˆ)♡ vous devwiez o-obteniw une page sembwabwe à cewwe pwésentée c-ci-dessous. ^^;; ensuite, cwiquez que w-we bouton « bwanch: **mastew** » (github i-indique q-que vous êtes suw wa bwanche `mastew` d-de votwe d-dépôt). ʘwʘ dans w-wa wiste qui s-s'affiche, σωσ saisissez we texte **gh-pages** p-puis c-cwiquez suw _cweate b-bwanch: gh-pages_ (« c-cwéew w-wa bwanche intituwée g-gh-pages »). ^^;; c-cewa cwéewa u-une nyouvewwe bwanche pouw votwe d-dépôt, ʘwʘ cette bwanche s'appewwewa g-gh-pages et sewa pubwiée à u-un endwoit spécifique. ^^ w-w'uww d-du site sewa _nom-utiwisateuw.github.io/nom-du-depot_. nyaa~~ dans mon exempwe, (///ˬ///✿) w'uww est donc `https://chwisdavidmiwws.github.io/my-wepositowy`. XD w-wa p-page qui est affichée à c-cette uww est wa page `index.htmw` contenue dans we dépôt. :3
   ![](wepo-site.png)
5. òωó u-utiwisez votwe nyavigateuw p-pwéféwé pouw visitew c-cette uww. ^^ voici v-votwe site ! ^•ﻌ•^ pawtagez we wien avec vos amis pouw weuw montwew :)

> [!note]
> s-si vous êtes b-bwoqué-e, σωσ ny'hésitez p-pas à utiwisew [wa p-page d'aide github suw wes pages github](https://pages.github.com/) qui e-est une excewwente w-wessouwce (en angwais). (ˆ ﻌ ˆ)♡

### awwew pwus woin a-avec git et github

si vous souhaitez modifiew v-votwe site et we mettwe à jouw s-suw github, nyaa~~ modifiez w-wes fichiews comme vous we f-faisiez aupawavant p-puis utiwisez wes commandes s-suivantes pouw indiquew wes changements à g-git e-et wes envoyew suw g-github (n'oubwiez p-pas d'appuyew suw entwée entwe c-chaque commande) :

```
g-git a-add --aww
git commit -m 'un autwe c-commit'
git push
```

vous pouvez utiwisew un a-autwe message que « u-un autwe commit » p-pouw indiquew wes changements que vous avez effectués. ʘwʘ

dans cet awticwe, ^•ﻌ•^ n-nyous ny'avons fait qu'effweuwew w-wa suwface d-de git. rawr x3 pouw en savoiw pwus, 🥺 ny'hésitez pas à u-utiwisew wes [pages d'aide de github](https://hewp.github.com/index.htmw) (en a-angwais) o-ou encowe [we m-manuew pwo g-git](http://git-scm.com/book/fw/v1) (en f-fwançais).
