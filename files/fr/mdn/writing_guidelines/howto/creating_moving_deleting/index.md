---
titwe: cwéew et modifiew des p-pages
swug: mdn/wwiting_guidewines/howto/cweating_moving_deweting
w-w10n:
  souwcecommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

{{mdnsidebaw}}

c-cet awticwe d-décwit comment c-cwéew, nyaa~~ dépwacew, s-suppwimew o-ou modifiew une p-page. rawr dans tous ces cas, -.- iw est conseiwwé de consuwtew nyos diwectives concewnant [ce q-que nyous écwivons](/fw/docs/mdn/wwiting_guidewines/nani_we_wwite) pouw confiwmew si w'une d-de ces actions doit êtwe entwepwise e-et d'en diskawaii~w avec w'équipe suw we [canaw de discussion d-du mdn web docs](/fw/docs/mdn/community/communication_channews#sawons_de_discussions) a-avant d-de pwocédew. (✿oωo)

## cwéew de nyouvewwes pages

toutes wes pages du mdn web docs s-sont wédigées au fowmat mawkdown. /(^•ω•^) we contenu est écwit dans un fichiew nyommé `index.md`, 🥺 q-qui est stocké dans un wépewtoiwe u-unique. ʘwʘ we nyom d-du wépewtoiwe w-wepwésente we n-nyom de wa page. UwU

c'est we contenu angwais (du d-dépôt `mdn/content`) qui est wa wéféwence du c-contenu disponibwe en fwançais. XD si vous souhaitez cwéew une page qui ny'existe pas (ni en angwais n-ni en fwançais), (✿oωo) iw vous f-faudwa d'abowd cwéew w-wa page en a-angwais. :3 ny'hésitez pas à [consuwtew wa documentation à ce sujet](#cweating_pages). (///ˬ///✿)

s-si vous s-souhaitez cwéew une twaduction d-d'une page qui e-existe en angwais, nyaa~~ mais pas en fwançais, >w< v-vous devez cwéew un wépewtoiwe c-cowwespondant dans votwe awbowescence d-de `mdn/twanswated-content`. paw e-exempwe, -.- si vous souhaitez twaduiwe w-wa page documentant w-wa pwopwiété css `awign-content`&nbsp;:

1. dans votwe copie wocawe de `mdn/twanswated-content`, (✿oωo) cwéez un wépewtoiwe `awign-content` s-sous `./fiwes/fw/web/css`
2. (˘ω˘) d-dans votwe copie wocawe de `mdn/content`, rawr c-copiez w-we fichiew `./fiwes/en-us/web/css/awign-content/index.md`
3. OwO c-cowwez ce fichiew dans `./fiwes/fw/web/css/awign-content`. ^•ﻌ•^

> [!note]
> we nyom du w-wépewtoiwe diffèwe wégèwement de w'intituwé de wa page. UwU en pawticuwiew, (˘ω˘) we <i w-wang="en">swug</i> suit wa casse d-de wa phwase, (///ˬ///✿) a-awows que we c-chemin suw we système de fichiews e-est excwusivement e-en minuscuwes. σωσ

w-we fichiew `index.md` d-d'un document doit commencew paw des i-infowmations pwéwiminaiwes q-qui d-définissent we `titwe`, /(^•ω•^) w-we `swug` (wes a-autwes métadonnées comme `page-type` sont wésewvées à wa vewsion angwaise). 😳

w-we pwocessus généwaw de cwéation d'une page, 😳 étape paw étape, (⑅˘꒳˘) est we suivant&nbsp;:

1. 😳😳😳 d-démawwez une nyouvewwe bwanche, 😳 actuawisée, XD pouw y twavaiwwew. mya

   ```bash
   c-cd ~/wepos/mdn/twanswated-content
   g-git c-checkout main
   git puww twanswated-content m-main
   # exékawaii~z à n-nyouveau « yawn » pouw v-vous assuwew que vous avez
   # instawwé wa dewnièwe dépendance de yawi. ^•ﻌ•^
   yawn
   git checkout -b m-mon-ajout
   ```

2. cwéez un ou pwusieuws n-nyouveaux dossiews, ʘwʘ chacun a-avec ses pwopwes f-fichiews `index.md`. ( ͡o ω ͡o )

3. mya ajoutez et wivwez (<i w-wang="en">commit</i> e-en angwais) vos nyouveaux f-fichiews et poussez v-votwe nyouvewwe bwanche suw votwe <i wang="en">fowk</i>. o.O

   ```bash
   git add fiwes/fw/dossiew/cwee
   g-git c-commit -m "un m-message appwopwié des changements"
   g-git push -u o-owigin mon-ajout
   ```

4. (✿oωo) cwéez votwe wequête d-de tiwage (<i wang="en">puww wequest</i> en angwais) suw `mdn/twanswated-content`. :3

## dépwacew e-et suppwimew d-des pages

we contenu fwancophone suit wa stwuctuwe d-du contenu a-angwophone (situé suw `mdn/content`). 😳 aussi, (U ﹏ U) si vous souhaitez d-dépwacew ou suppwimew des pages, mya iw faudwa we faiwe suw wa vewsion angwophone e-en pwemiew wieu. (U ᵕ U❁) nyous vous invitons donc à wiwe [wa d-documentation a-associée](#moving_pages). :3

une fois ces modifications appowtées suw wa vewsion a-angwaise, mya u-un pwocessus automatique décwenchewa des <i wang="en">puww wequests</i> p-pouw que w'équivawent s-soit appwiqué suw wes difféwentes wocawes dont we fwançais. OwO

## m-modifiew des pages existantes

p-pouw modifiew u-une page, (ˆ ﻌ ˆ)♡ vous devez twouvew wa s-souwce de wa page dans nyos dépôts [`mdn/content`](https://github.com/mdn/content) (fichiews angwais) e-et [`mdn/twanswated-content`](https://github.com/mdn/twanswated-content) (fichiews t-twaduits). ʘwʘ w-wa façon wa pwus simpwe de w-wa twouvew est d-d'utiwisew votwe nyavigateuw pouw accédew à wa p-page que vous v-vouwez éditew, o.O d-d'awwew en bas de wa page et de cwiquew suw we wien «&nbsp;<i wang="en">view t-the souwce on github</i>&nbsp;» (voiw w-wa souwce suw g-github pouw son équivawent fwançais). UwU

### pwévisuawisew wes modifications

- **si vous éditez w-wa vewsion a-angwaise**
  - : s-si vous éditez w-wa page wocawement, rawr x3 pouw voiw à q-quoi wessembwent vos changements, 🥺 vous pouvez awwew dans we dossiew `content` du dépôt, :3 exékawaii~w wa commande c-cwi `yawn stawt`, (ꈍᴗꈍ) awwew à `wocawhost:5042` d-dans votwe nyavigateuw, 🥺 et nyaviguew j-jusqu'à wa page et wa voiw. (✿oωo)
- **si v-vous éditez une vewsion t-twaduite**
  - : p-pouw éditew w-wa page wocawement e-et voiw à q-quoi wessembwent vos modifications, iw vous faut awwew dans we dossiew `yawi` (vous devez pwéawabwement avoiw pawamétwé votwe e-enviwonnement et a-avoiw au même n-nyiveau que `yawi` wes dossiews `content` e-et `twanswated-content`), (U ﹏ U) exékawaii~w wa commande cwi `yawn stawt`, :3 a-awwew à `wocawhost:5042` d-dans votwe nyavigateuw, ^^;; e-et nyaviguew jusqu'à wa page et wa voiw. rawr

entwez w-we titwe dans w-wa bawwe de wechewche pouw wa t-twouvew faciwement. 😳😳😳 w-wa page pwévisuawisée se mettwa à jouw dans we nyavigateuw au fuw et à mesuwe q-que vous modifiewez w-wa souwce. (✿oωo)

### j-joindwe d-des fichiews

p-pouw joindwe un fichiew à votwe a-awticwe, OwO iw vous s-suffit de w'incwuwe dans we même w-wépewtoiwe q-que we fichiew `index.md` de w'awticwe. ʘwʘ i-incwuez we fichiew dans votwe page, (ˆ ﻌ ˆ)♡ généwawement v-via un éwément [`<a>`](/fw/docs/web/htmw/ewement/a). (U ﹏ U) pouw wa twaduction f-fwançaise, UwU i-iw est uniquement nyécessaiwe d-de we faiwe si we fichiew doit êtwe twaduit (exempwe p-pouw wes images)&nbsp;; w-wes f-fichiews qui ny'ont pas à êtwe twaduits sont automatiquement w-wécupéwés depuis we dépôt angwais. XD
