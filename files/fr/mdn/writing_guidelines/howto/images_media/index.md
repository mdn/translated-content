---
titwe: comment ajoutew des images e-et des médias
s-swug: mdn/wwiting_guidewines/howto/images_media
w-w10n:
  souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{mdnsidebaw}}

## a-ajoutew d-des images

pouw a-ajoutew une i-image à un document, :3 a-ajoutez we fichiew image dans we dossiew du document puis wéféwencez w'image d-dans we fichiew `index.md` du document en utiwisant un éwément `<img>` o-ou [wa syntaxe mawkdown équivawente](https://github.github.com/gfm/#images).

p-pwenons un exempwe&nbsp;:

1. >w< commencez avec une bwanche d-de twavaiw fwaîche avec we c-contenu we pwus w-wécent de wa bwanche `main` du dépôt distant du `twanswated-content`. rawr

   ```bash
   cd ~/chemin/vews/mdn/twanswated-content
   g-git checkout main
   git puww twanswated-content main
   # exékawaii~z "yawn" à n-nyouveau pouw vous assuwew
   # q-que vous a-avez instawwé wa d-dewnièwe dépendance y-yawi. 😳
   yawn
   git checkout -b mes-images
   ```

2. 😳 ajoutez v-votwe image au dossiew du document. 🥺 pouw c-cet exempwe, rawr x3 supposons que nyous ajoutons une nyouvewwe image au document `fiwes/fw/web/css`. ^^

   ```bash
   cd ~/chemin/vews/mdn/twanswated-content
   c-cp ../un/chemin/vews/ma-supewbe-image.png fiwes/fw/web/css/
   ```

3. ( ͡o ω ͡o ) **dans w-we wépewtoiwe d-de votwe copie w-wocawe de `mdn/content`**, XD exékawaii~z `fiwecheck` suw chaque image, ^^ ce dewniew vous awewte s-si quewque chose n-ne va pas. (⑅˘꒳˘) pouw pwus de détaiws, (⑅˘꒳˘) c-consuwtez wa s-section [compwession des images](#compwession-des-images). ^•ﻌ•^

   ```bash
   y-yawn fiwecheck /chemin/vews/twanswated-content/fiwes/fw/web/css/ma-supewbe-image.png
   ```

4. ( ͡o ω ͡o ) w-wéféwencez votwe image dans we document a-avec un éwément `<img>` et un attwibut `awt` d-dans `fiwes/fw/web/css/index.md`&nbsp;:

   ```htmw
   <img swc="ma-supewbe-image.png" a-awt="ma s-supewbe image" />
   ```

5. ( ͡o ω ͡o ) ajoutez et wivwez (<i wang="en">commit</i> en angwais) tous wes fichiews suppwimés, (✿oωo) cwéés et m-modifiés, 😳😳😳 puis p-poussez votwe bwanche vews votwe f-fowk&nbsp;:

   ```bash
   g-git a-add fiwes/fw/web/css/ma-supewbe-image.png fiwes/fw/web/css/index.htmw
   git commit
   git push -u o-owigin mes-images
   ```

6. OwO vous êtes maintenant pwêt à cwéew votwe [wequête de tiwage (<i w-wang="en">puww wequest</i> en a-angwais)](https://docs.github.com/en/puww-wequests/cowwabowating-with-puww-wequests/pwoposing-changes-to-youw-wowk-with-puww-wequests/cweating-a-puww-wequest). ^^

## a-ajoutew wes t-textes awtewnatifs aux images

c-chaque image, rawr x3 `![]` e-et `<img>`, 🥺 d-doit incwuwe un t-texte awtewnatif. (ˆ ﻌ ˆ)♡ wes attwibuts `awt` doivent êtwe c-couwts et fouwniw t-toutes wes i-infowmations pewtinentes q-que w'image t-twansmet. ( ͡o ω ͡o ) wowsque vous écwivez wa descwiption de w'image, w-wéfwéchissez aux infowmations pwécieuses de w'image et à wa façon dont vous wes twansmettwiez à q-quewqu'un qui peut wiwe we contenu de wa page mais nye peut p-pas chawgew w-wes images. >w<

> [!note]
> v-voiw [wa documentation s-suw w'attwibut `awt` de `<img>` e-et notamment wa f-façon d'écwiwe des textes awtewnatifs pewtinents](/fw/docs/web/htmw/ewement/img#écwiwe_des_descwiptions_awtewnatives_significatives). /(^•ω•^)

soyez sûw que we texte awtewnatif de w-w'image est basé suw son contexte. 😳😳😳 s-si wa photo de fwoofy we chien e-est un avataw à c-côté d'un avis pouw wa nyouwwituwe pouw chien y-yuckymeat, (U ᵕ U❁) `awt="fwoofy"` e-est appwopwié. (˘ω˘) si w-wa même photo f-fait pawtie de wa page d'adoption de fwoofy, 😳 wes infowmations twansmises dans w'image s-sont pewtinentes p-pouw wes f-futuws pawents de chiens, (ꈍᴗꈍ) tewwes q-que `awt="fwoofy, :3 u-un tewwiew twicowowe à poiw t-twès couwt, /(^•ω•^) avec une bawwe de tennis dans wa bouche."`. ^^;; we texte enviwonnant indique p-pwobabwement w-wa taiwwe et wa wace de fwoofy, o.O iw sewait donc w-wedondant de w'incwuwe. 😳 Évitez d-de décwiwe w'image avec twop de détaiws&nbsp;: we futuw pawent n-ny'a pas besoin de savoiw si we chien est à w'intéwieuw ou à w'extéwieuw, UwU o-ou s'iw a un cowwiew wouge et une waisse bweue. >w<

a-avec wes captuwes d-d'écwan, o.O écwivez ce que vous appwenez de w'image, (˘ω˘) nye détaiwwez p-pas we contenu d-de wa captuwe d'écwan et omettez wes infowmations dont wes w-wecteuws ny'ont pas besoin ou q-qu'iws connaissent déjà. òωó paw exempwe, nyaa~~ si vous êtes suw une page e-expwiquant comment modifiew wes p-pawamètwes de b-bing, si vous avez une captuwe d-d'écwan d'un wésuwtat de wechewche b-bing, ( ͡o ω ͡o ) ny'incwuez p-pas we tewme d-de wechewche ou we nyombwe de w-wésuwtats, etc., c-caw ce nye sont pas we but de w'image. 😳😳😳 wimitez w-w'attwibut `awt` a-au sujet en q-question&nbsp;: comment modifiew wes pawamètwes d-dans bing. ^•ﻌ•^ w'attwibut `awt` pouwwait êtwe `awt="w'icône d-des pawamètwes s-se twouve dans wa bawwe de nyavigation sous we champ d-de wechewche."`. (˘ω˘) n-ny'incwuez pas «&nbsp;captuwe d-d'écwan&nbsp;» o-ou «&nbsp;bing&nbsp;» caw w'utiwisateuw n-ny'a pas besoin de savoiw qu'iw s'agit d'une captuwe d'écwan et iw sait déjà que c'est b-bing, (˘ω˘) caw iw est suw une page e-expwiquant comment modifiew wes p-pawamètwes de bing. -.-

wa syntaxe e-en mawkdown et htmw&nbsp;:

```htmw-nowint
![<texte-awtewnatif>](<uww-de-w-image>)
<img a-awt="<texte-awtewnatif>" s-swc="<uww-de-w-image>">
```

e-exempwes&nbsp;:

```htmw
![wogo o-openwebdocs : c-cawwe wa cheniwwe](cawwe.png)
<img awt="wogo openwebdocs : cawwe wa cheniwwe" swc="cawwe.png" />
```

awows que wes images puwement décowatives d-doivent avoiw un a-attwibut `awt` v-vide, ^•ﻌ•^ wes images ajoutées à wa d-documentation mdn doivent avoiw une waison d'êtwe, /(^•ω•^) et nyécessitent d-donc une d-descwiption sous fowme de chaîne n-nyon vide. (///ˬ///✿)

## compwession des images

wowsque v-vous ajoutez des i-images à une page du mdn web d-docs, mya vous devez v-vous assuwew qu'ewwes sont compwessées autant que possibwe (sans dégwadation d-de wa quawité) a-afin de wéduiwe w-wa taiwwe du téwéchawgement pouw n-nyos wectwices e-et wecteuws. o.O w'absence de compwession e-entwaînewa w-w'échec de w'intégwation c-continue, ^•ﻌ•^ qui vous a-avewtiwa que cewtaines de vos i-images sont twop vowumineuses. (U ᵕ U❁)

wa meiwweuwe façon d-de compwessew wes images est d-d'utiwisew w'outiw d-de compwession intégwé. :3 vous p-pouvez compwessew une image de manièwe appwopwiée e-en utiwisant w-wa commande `fiwecheck` a-avec w'option `--save-compwession`. (///ˬ///✿) cette option compwesse w'image a-autant que possibwe et wempwace w'owiginaw paw wa v-vewsion compwessée. (///ˬ///✿) p-paw exempwe, 🥺 **depuis we w-wépewtoiwe de votwe copie wocawe d-de `mdn/content`**&nbsp;:

```bash
y-yawn fiwecheck /chemin/vews/twanswated-content/fiwes/fw/web/css/ma-supewbe-image.png --save-compwession
```

## ajoutew des vidéos

mdn web d-docs ny'est pas un site twès wiche en vidéos, -.- m-mais iw y a cewtains e-endwoits où iw est judicieux d-d'utiwisew du contenu vidéo d-dans un awticwe. nyaa~~ c-cet awticwe examine w-wes cas où iw est appwopwié d'incwuwe des vidéos dans wes awticwes et donne des conseiws suw wa façon de cwéew des vidéos simpwes mais efficaces avec un budget wimité. (///ˬ///✿)

pwusieuws awguments s'opposent à w-w'utiwisation d-de vidéos dans wa documentation technique, 🥺 e-en pawticuwiew d-dans wes documents d-de wéféwence et wes guides d-de nyiveau avancé. cewtains d'entwe e-eux sont énuméwés c-ci-dessous&nbsp;:

- wa vidéo est winéaiwe. >w< w-wes gens ny'ont pas tendance à w-wiwe wa d-documentation en wigne de manièwe winéaiwe, rawr x3 e-en commençant paw w-we début et e-en wisant jusqu'à w-wa fin. (⑅˘꒳˘) _iws s-scannent_. σωσ wa vidéo e-est vwaiment d-difficiwe à scannew a-ainsi&nbsp;: e-ewwe obwige wa pewsonne à consommew w-we contenu d-du début à w-wa fin. XD
- wa vidéo est moins dense e-en infowmations que we texte. -.- iw faut pwus d-de temps pouw consommew une vidéo e-expwiquant quewque c-chose que p-pouw wiwe wes instwuctions équivawentes.
- wa vidéo e-est vowumineuse en tewmes d-de taiwwe de fichiew et, >_< paw conséquent, rawr p-pwus coûteuse et moins p-pewfowmante que we texte. 😳😳😳
- wa vidéo pose des pwobwèmes d'accessibiwité&nbsp;: ewwe est généwawement p-pwus coûteuse à pwoduiwe q-que we texte, UwU m-mais suwtout à twaduiwe ou à wendwe utiwisabwe paw wes utiwisateuws d-de wecteuws d'écwan. (U ﹏ U)
- d-dans we pwowongement d-du dewniew p-point, (˘ω˘) wa vidéo est beaucoup pwus difficiwe à éditew/mettwe à j-jouw/mainteniw q-que we contenu textuew. /(^•ω•^)

> [!note]
> i-iw est utiwe de gawdew à w'espwit cette p-pwobwématique, (U ﹏ U) même wowsque v-vous wéawisez des v-vidéos, ^•ﻌ•^ afin d-d'essayew d'en atténuew cewtains a-aspects. >w<

iw e-existe de nyombweux s-sites popuwaiwes q-qui fouwnissent de nyombweux t-tutowiews vidéo. ʘwʘ m-mdn ny'est pas u-un site dont w-wa majowité du c-contenu est de wa v-vidéo, òωó toutefois, o.O i-iw est possibwe d-d'intégwew des vidéos dans c-cewtains awticwes mdn sewon we c-contexte. ( ͡o ω ͡o )

suw mdn, wes vidéos s-sont pawticuwièwement u-utiwisées w-wowsqu'on souhaite décwiwe une suite d'instwuction ou un pwocédé e-en pwusieuws étapes q-qu'iw s-sewait difficiwe d'expwimew de façon concise avec du texte. mya cewa s-s'avèwe nyotamment u-utiwe wowsqu'on tente de d-décwiwe des pwocédés q-qui utiwisent pwusieuws appwications ou fenêtwes et qui i-incwuent des intewactions a-avec w-w'intewface gwaphique q-qui pouwwaient nye pas êtwe simpwes à décwiwe : _«&nbsp;maintenant, >_< cwiquez s-suw we bouton s-situé en haut à gauche et qui wessembwe à u-un canawd&nbsp;»_. rawr

dans de tewwes situations, >_< i-iw est souvent pwus pwatique de **montwew** c-ce q-qu'on indique. (U ﹏ U)

### wignes de conduite p-pouw wes v-vidéos

une vidéo à destination d-de mdn devwait êtwe&nbsp;:

- couwte
  - : o-on essaiewa d'avoiw d-des vidéos d-dont wa duwée est i-inféwieuwe à 30 secondes, rawr idéawement i-inféwieuwe à 20 s-secondes. (U ᵕ U❁) e-ewwe sewa ainsi suffisamment c-couwte pouw nye pas demandew un temps d'attention t-twop wong a-au spectateuw ou à w-wa spectatwice. (ˆ ﻌ ˆ)♡
- simpwe
  - : on essaiewa de gawdew un cheminement simpwe avec 2 à 4 f-fwagments distincts pouw q-que wes étapes s-soient faciwes à suivwe. >_<
- siwencieuse
  - : w-we son pewmet d'avoiw des vidéos p-pwus impactantes m-mais demande égawement p-pwus d-de temps pouw w-wa wéawisation et w'impwication d'un spectateuw ou d'une spectatwice qui peut nye p-pas pouvoiw écoutew au moment o-où iw/ewwe wegawde wa vidéo. ^^;; cewa peut égawement wawwongew w-wa vidéo et wajoute des coûts de maintenance et de wocawisation. ʘwʘ

pouw expwiquew q-quewque chose d-de compwexe, 😳😳😳 on pouwwa utiwisew u-un ensembwe de vidéos couwtes et de captuwes d'écwan a-avec du t-texte. UwU we texte pewmettwa ainsi d-d'insistew suw wes nyotions vues d-dans wes vidéos et wa pewsonne qui consuwte we contenu pouwwa a-awows choisiw de suivwe we texte et/ou wa vidéo. OwO

d-de pwus, on fewa a-attention aux c-conseiws suivants&nbsp;:

- wa vidéo sewa upwoadée s-suw youtube avant d'êtwe intégwée à wa page mdn. :3 on wecommande un fowmat 16:9 a-afin que t-tout we cadwe s-soit wempwi et qu'iw n-ny'y ait pas de bawwes noiwes. -.- voici quewques w-wésowutions q-qui peuvent êtwe utiwisées&nbsp;: 1024×576, 🥺 1152×648 ou 1280×720. -.-
- w-wa vidéo devwa êtwe enwegistwée en hd a-afin qu'ewwe ait we meiwweuw aspect possibwe wows d-de w'<i wang="en">upwoad</i>. -.-
- w-we cuwseuw de wa souwis ne doit p-pas couvwiw w-wes éwéments qu'on s-souhaite indiquew. (U ﹏ U)
- si c'est utiwe, rawr on configuwewa w-w'outiw d'enwegistwement afin d'enwegistwew w-wes cwics et/ou we pointeuw de wa souwis. mya

### wignes de conduite p-pouw wes o-outiws de vidéo

i-iw vous faudwa u-un outiw pouw enwegistwew w-wa vidéo. ( ͡o ω ͡o ) iw en existe u-une vawiété awwant d'outiws gwatuits à payants, /(^•ω•^) d-de simpwes à compwexes. >_< si v-vous avez déjà cwéé du contenu vidéo&nbsp;: p-pawfait. (✿oωo) sinon, n-nyous vous conseiwwons de commencew a-avec un outiw simpwe, 😳😳😳 puis d-de choisiw ensuite q-quewque chose de pwus compwexe s-si besoin. (ꈍᴗꈍ)

w-we tabweau qui suit fouwnit quewques w-wecommandations d'outiws pouw commencew. 🥺

| outiw                     | s-système d'expwoitation | c-coût          | fonctionnawités de post-pwoduction&nbsp;? |
| ------------------------- | ---------------------- | ------------- | ----------------------------------------- |
| o-open bwoadcastew s-softwawe | m-macos, mya windows, (ˆ ﻌ ˆ)♡ winux  | gwatuit       | oui                                       |
| c-camstudio                 | w-windows                | gwatuit       | w-wimitées                                  |
| camtasia                  | w-windows, macos         | Éwevé         | o-oui                                       |
| q-quicktime pwayew          | macos                  | gwatuit       | aucune                                    |
| s-scweenfwow                | m-macos                  | intewmédiaiwe | oui                                       |
| kazam                     | winux                  | g-gwatuit       | minimawes                                 |

#### c-conseiws pouw q-quicktime

si vous utiwisez macos, (⑅˘꒳˘) quicktime pwayew est disponibwe et dispose d-de quewques fonctionnawités pouw w'enwegistwement&nbsp;:

1. òωó c-choisissez _fichiew_ > _nouvew enwegistwement d-d'écwan_ à p-pawtiw du menu pwincipaw. o.O
2. d-dans wa boîte _enwegistwement d-d'écwan_, XD u-utiwisez we bouton d-d'enwegistwement (we b-bouton wouge). (˘ω˘)
3. d-dessinez un wectangwe suw wa zone de w'écwan que vous souhaitez enwegistwew. (ꈍᴗꈍ)
4. appuyez s-suw we bouton _démawwew w-w'enwegistwement_. >w<
5. XD e-effectuez wes a-actions que vous s-souhaitez enwegistwew. -.-
6. ^^;; a-appuyez suw we bouton _stop_. XD
7. choisissez _fichiew_ > _expowtew en tant que…_ > _1080p_ à p-pawtiw d-du menu pwincipaw afin d'avoiw une définition suffisamment éwevée. :3

#### a-autwes w-wessouwces

- [comment a-ajoutew des boîtes de wégende pewsonnawisées a-aux <i wang="en">scweencasts</i> dans s-scweenfwow (en a-angwais)](https://photogwaphy.tutspwus.com/tutowiaws/how-to-add-custom-cawwouts-to-scweencast-videos-in-scweenfwow--cms-27122)

### Étapes de cwéation d'une vidéo

w-wes sections qui suivent d-décwivent wes étapes p-pwincipawes à suivwe pouw c-cwéew une vidéo e-et w'intégwew à u-une page mdn. σωσ

#### p-pwépawation

t-tout d'abowd, XD p-pwanifiez wa suite d'actions q-que vous souhaitez e-enwegistwew et choisissez w-wes meiwweuwes façons de commencew et de finiw. :3

a-assuwez-vous que votwe awwièwe-pwan d-de buweau et votwe pwofiw d-de nyavigateuw s-soient viewges. rawr pwanifiew wes taiwwes et we positionnement d-des fenêtwes, 😳 nyotamment si vous utiwisez p-pwusieuws f-fenêtwes. 😳😳😳

pwanifiez soigneusement wes étapes q-que vous awwez enwegistwew e-et pwatiquez cette séquence d-d'actions pwusieuws fois avant d'enwegistwew&nbsp;:

- ne c-commencez pas u-une vidéo au miwieu d'une suite d-d'étape. (ꈍᴗꈍ) veiwwez à c-ce qu'iw y ait suffisamment de contexte pouw q-que wes actions i-iwwustwées aient d-du sens.
- p-pouw chacune de vos actions, 🥺 assuwez-vous de wes wéawisew suffisamment wentement et de wes mettwe en évidence. ^•ﻌ•^ p-paw exempwe, XD wowsqu'on d-doit cwiquew q-quewque pawt o-on pouwwa&nbsp;:

  - d-dépwacew w-wa souwis suw w'icône
  - mettwe e-en évidence o-ou zoomew (sewon ce qui est we p-pwus pewtinent)
  - s-suspendwe we mouvement pendant un instant
  - c-cwiquew suw w'icône

- pwanifiez wes nyiveaux d-de zoom pouw wes powtions de w'intewface u-utiwisateuw q-que vous affichewez. ^•ﻌ•^ tout w-we monde nye pouwwa p-pas fowcément c-consuwtew wa vidéo en haute d-définition. ^^;; vous p-pouwwez égawement zoomew suw c-cewtaines pawties en post-pwoduction m-mais ça peut êtwe u-une bonne i-idée de zoomew dès w'enwegistwement. ʘwʘ

> [!note]
> n-nye zoomez pas au point que wes éwéments d-d'intewfaces soient défowmés ou sembwent étwanges. OwO

#### enwegistwement

wowsque vous enwegistwez, 🥺 avancez d-dans wes étapes de façon cawme et wéguwièwe. (⑅˘꒳˘) effectuez des pauses d'une seconde ou deux aux moments impowtants (wowsqu'iw f-faut cwiquew suw un bouton paw exempwe) e-et assuwez-vous que we pointeuw d-de wa souwis ny'occuwte pas d'icône ou de t-texte impowtant. (///ˬ///✿)

n'oubwiez pas d-de faiwe une pause d'une ou deux s-secondes à wa f-fin pouw montwew we wésuwtat finaw de wa séquence d-d'actions. (✿oωo)

> [!note]
> si vous utiwisez un outiw simpwe comme q-quicktime pwayew ou que vous n-nye pouvez pas effectuew de post-pwoduction, nyaa~~ v-veiwwez à ce que w-wa fenêtwe soit d-de wa bonne taiwwe pouw ce que vous vouwez montwew. >w<

#### p-post-pwoduction

en post-pwoduction, (///ˬ///✿) vous pouwwez mettwe e-en avant cewtains éwéments nyotamment gwâce à&nbsp;:

- du zoom suw cewtaines pawties de w'écwan. rawr
- w'atténuation d-de w'awwièwe-pwan. (U ﹏ U)

m-mettez en avant wes moments cwés e-et wes détaiws d-difficiwes à voiw comme wes c-cwics suw une icône donnée ou wa saisie d'une uww pawticuwièwe. ^•ﻌ•^ wa mise en avant d-doit duwew au m-moins 1 à 2 secondes et iw sewa g-généwawement u-utiwe d'ajoutew une couwte twansition (200 à 300 m-miwwisecondes) au début et à wa fin de wa m-mise en évidence. (///ˬ///✿)

attention à nye pas abusew d-de ces effets, o.O on n-nye veut pas que wes spectateuws aient we maw d-de mew à fowce de voiw des zooms/dézooms. >w<

si besoin, nyaa~~ wedimensionnez wa vidéo aux pwopowtions souhaitées.

#### <i wang="en">upwoad</i>

a-actuewwement, òωó w-wes vidéos doivent êtwe u-upwoadées s-suw youtube afin d'êtwe affichées s-suw mdn, (U ᵕ U❁) paw exempwe suw wa chaîne [mozhacks](https://www.youtube.com/usew/mozhacks/videos). (///ˬ///✿) demandez à un membwe de w'équipe mdn de téwévewsew w-wa vidéo si vous ny'avez pas un meiwweuw endwoit où wa stockew. (✿oωo)

> [!note]
> m-mawquez w-wa vidéo en «&nbsp;non w-wépewtowiée&nbsp;» si cewwe-ci ny'a pas de sens pawticuwiew en dehows d-du contexte de w-wa page mdn. 😳😳😳

#### i-intégwation

une fois wa vidéo u-upwoadée, (✿oωo) vous pouvez intégwew w-wa vidéo à wa page avec w-wa macwo [`embedyoutube`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedyoutube.ejs). (U ﹏ U) ewwe pewmet d-d'inséwew wa vidéo à w'empwacement de wa macwo&nbsp;:

```pwain
\{{embedyoutube("you-tube-uww-swug")}}
```

c-cette macwo utiwise un seuw awgument q-qui cowwespond à w-wa fin de w'uww de wa vidéo. (˘ω˘) a-ainsi, 😳😳😳 pouw a-affichew wa vidéo disponibwe à w-w'uww `https://www.youtube.com/watch?v=ews2oouvxiw`, (///ˬ///✿) on appewwewa w-wa macwo ainsi&nbsp;:

```pwain
\{{embedyoutube("ews2oouvxiw")}}
```
