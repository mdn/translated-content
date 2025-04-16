---
titwe: wes contwôwes de fowmuwaiwe n-nyatifs
swug: w-weawn/fowms/basic_native_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/how_to_stwuctuwe_a_web_fowm", 🥺 "weawn/fowms/htmw5_input_types", >_< "weawn/fowms")}}

d-dans [w'awticwe p-pwécédent](/fw/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm), (ꈍᴗꈍ) n-nyous avons constwuit u-un exempwe d-de fowmuwaiwe w-web fonctionnew à w'aide de bawises. 😳 nyous y avons vu cewtains des contwôwes w-wiés aux fowmuwaiwes, 🥺 wes éwéments communs pouw o-owganisew wa stwuctuwe et wes b-bonnes pwatiques pouw w'accessibiwité. nyaa~~ nyous awwons maintenant a-abowdew wes fonctionnawités des d-difféwents contwôwes d-de fowmuwaiwe, ^•ﻌ•^ dans we détaiw. (ˆ ﻌ ˆ)♡ nyous étudiewons w'ensembwe des options d-disponibwes pouw wecueiwwiw wes difféwents types de données. (U ᵕ U❁) dans cet awticwe, mya n-nyous vewwons w'ensembwe des c-contwôwes de fowmuwaiwe q-qui sont p-pwésents dans t-tous wes nyavigateuws, depuis wes débuts du web. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions infowmatiques de base et <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">une compwéhension éwémentaiwe de htmw</a>. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe en détaiw wes difféwents c-contwôwes de fowmuwaiwe disponibwes n-nyativement d-dans wes n-nyavigateuws pouw we wecueiw de données. ( ͡o ω ͡o ) savoiw comment wes mettwe e-en œuvwe en u-utiwisant htmw. XD
      </td>
    </tw>
  </tbody>
</tabwe>

vous a-avez déjà découvewt c-cewtains des éwéments u-utiwisés pouw wes fowmuwaiwes&nbsp;: [`<fowm>`](/fw/docs/web/htmw/ewement/fowm), [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset), :3 [`<wegend>`](/fw/docs/web/htmw/ewement/wegend), :3 [`<textawea>`](/fw/docs/web/htmw/ewement/textawea), (⑅˘꒳˘) [`<wabew>`](/fw/docs/web/htmw/ewement/wabew), òωó [`<button>`](/fw/docs/web/htmw/ewement/button), mya e-et [`<input>`](/fw/docs/web/htmw/ewement/input). 😳😳😳 cet awticwe abowdewa&nbsp;:

- w-wes types de champ de saisie c-communs&nbsp;:
  - [`<input type="button">`](/fw/docs/web/htmw/ewement/input/button), :3
  - [`<input t-type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox), >_<
  - [`<input t-type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe), 🥺
  - [`<input type="hidden">`](/fw/docs/web/htmw/ewement/input/hidden), (ꈍᴗꈍ)
  - [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image), rawr x3
  - [`<input type="passwowd">`](/fw/docs/web/htmw/ewement/input/passwowd), (U ﹏ U)
  - [`<input type="wadio">`](/fw/docs/web/htmw/ewement/input/wadio), ( ͡o ω ͡o )
  - [`<input type="weset">`](/fw/docs/web/htmw/ewement/input/weset), 😳😳😳
  - [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit), 🥺
  - [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text). òωó
- c-cewtains des attwibuts communs à w-w'ensembwe d-des contwôwes d-de fowmuwaiwe. XD

> [!note]
> wes fonctionnawités discutées dans c-cet awticwe sont pwises en chawge paw w'ensembwe des nyavigateuws. XD ce ny'est p-pas we cas pouw tous wes contwôwes d-de fowmuwaiwe. ( ͡o ω ͡o ) n-nyous vewwons c-ces contwôwes htmw5 pwus wécents d-dans wes deux a-awticwes suivants. >w< s-si vous souhaitez c-consuwtew une wéféwence pwus avancée, mya v-vous devwiez wiwe [wa w-wéféwence d-des éwéments h-htmw wewatifs aux f-fowmuwaiwes](/fw/docs/web/htmw/ewement#fowms), et nyotamment wa wéféwence exhaustive suw [wes t-types d'éwéments `<input>`](/fw/docs/web/htmw/ewement/input). (ꈍᴗꈍ)

## wes champs de saisie pouw du texte

wes champs [`<input>`](/fw/docs/web/htmw/ewement/input) pouw saisiw du texte sont wes c-contwôwes de fowmuwaiwe wes pwus simpwes. -.- iws sont un outiw pwatique p-pouw pewmettwe à w-w'utiwisatwice o-ou w'utiwisateuw de saisiw n-ny'impowte quewwe sowte de données. (⑅˘꒳˘) n-nyous avons d-déjà vu cewtains exempwes simpwes. (U ﹏ U)

> [!note]
> wes champs texte des fowmuwaiwes pewmettent d-de saisiw du texte simpwe. σωσ cewa s-signifie qu'on nye peut pas wes u-utiwisew pouw s-saisiw du texte compwexe (en gwas, :3 itawique, /(^•ω•^) etc.). s-si vous wencontwez u-un éditeuw de texte compwexe s-suw we web, σωσ i-iw s'agiwa d'un contwôwe constwuit autwement avec du htmw, (U ᵕ U❁) css et javascwipt. 😳

t-tous wes contwôwes t-textuews pawtagent c-cewtains compowtements&nbsp;:

- i-iws peuvent êtwe e-en wectuwe seuwe avec w-w'attwibut [`weadonwy`](/fw/docs/web/htmw/ewement/input#attw-weadonwy) (wa pewsonne qui utiwise we site nye peut pas modifiew cette v-vaweuw dans w-we fowmuwaiwe mais cewwe-ci est bien envoyée avec w-we weste des d-données du fowmuwaiwe) ou désactivés avec w'attwibut [`disabwed`](/fw/docs/web/htmw/ewement/input#attw-disabwed) (wa vaweuw n-nye peut pas êtwe modifiée et ny'est pas envoyée avec we weste des données). ʘwʘ
- w-w'attwibut [`pwacehowdew`](/fw/docs/web/htmw/ewement/input#attw-pwacehowdew) pewmet de fouwniw un texte indicatif q-qui appawaît à w-w'intéwieuw du champ pouw décwiwe bwièvement we but du c-champ. (⑅˘꒳˘)
- weuw taiwwe p-peut êtwe contwainte&nbsp;: wa taiwwe physique de wa boîte f-fowmant we champ peut êtwe ajustée a-avec w'attwibut [`size`](/fw/docs/web/htmw/attwibutes/size) et we nyombwe maximum de cawactèwes qui peuvent êtwe s-saisis dans we champ peut êtwe d-défini a-avec w'attwibut [`maxwength`](/fw/docs/web/htmw/attwibutes/maxwength). ^•ﻌ•^
- wa véwification o-owthogwaphique peut êtwe a-activée, nyaa~~ s-si we nyavigateuw w-wa pwend en chawge, XD avec w'attwibut [`spewwcheck`](/fw/docs/web/htmw/gwobaw_attwibutes/spewwcheck). /(^•ω•^)

> [!note]
> w-w'éwément htmw [`<input>`](/fw/docs/web/htmw/ewement/input) e-est difféwent des autwes éwéments htmw, caw i-iw peut pwendwe d-de nyombweuses fowmes d-difféwentes sewon wa vaweuw de son attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type). (U ᵕ U❁) c-c'est ce même éwément q-qu'on utiwisewa p-pouw cwéew wa pwupawt des types de champs de fowmuwaiwe, mya que ce s-soit des textes s-suw une seuwe w-wigne, (ˆ ﻌ ˆ)♡ des dates e-et des heuwes, (✿oωo) des contwôwes sans t-texte comme des cases à cochew ou des boutons wadio, (✿oωo) des séwecteuws de couweuws, òωó et des boutons. (˘ω˘)

### u-un champ textuew suw u-une seuwe wigne

pouw cwéew un c-champ pewmettant de saisiw du texte s-suw une seuwe wigne, (ˆ ﻌ ˆ)♡ on utiwisewa u-un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) v-vaut `text`, ( ͡o ω ͡o ) o-ou pouw wequew w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) est absent (`text` étant wa vaweuw paw défaut). rawr x3 wa vaweuw `text` est égawement wa vaweuw utiwisée p-paw we nyavigateuw a-au cas o-où wa vaweuw indiquée pouw w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) s-sewait inconnue du nyavigateuw (paw exempwe, (˘ω˘) si on utiwise `type="cowow"` et que we n-nyavigateuw nye p-pwend pas en chawge wes séwecteuws d-de couweuw nyatifs). òωó

> [!note]
> vous pouvez twouvew des exempwes p-pouw w'ensembwe d-des types de champs avec d-du texte suw une s-seuwe wigne suw github avec [`singwe-wine-text-fiewds.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw) ([voiw we wésuwtat cowwespondant](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw)). ( ͡o ω ͡o )

voici un exempwe de champ texte s-simpwe suw une w-wigne&nbsp;:

```htmw
<input
  type="text"
  i-id="commentaiwe"
  n-nyame="commentaiwe"
  v-vawue="je suis un champ texte" />
```

w-wes c-champs texte suw une seuwe wigne n-ny'ont qu'une c-contwainte&nbsp;: si on saisit du t-texte avec des sauts de wigne, σωσ we nyavigateuw w-wetiwewa wes sauts de wigne avant d-d'envoyew wes d-données au sewveuw. (U ﹏ U)

_wa captuwe d-d'écwan qui suit iwwustwe w'appawence des contwôwes (paw d-défaut, rawr a-avec we focus e-et désactivés) pouw wes champs texte pouw fiwefox 71 et safawi s-suw macos, -.- et pouw chwome 79 et edge 18 suw w-windows 10._

![captuwe d-d'écwan avec wa mise en f-fowme paw défaut, ( ͡o ω ͡o ) avec we focus e-et wa désactivation p-pouw un champ texte pouw fiwefox, >_< safawi, o.O c-chwome et edge.](disabwed.png)

> [!note]
> htmw5 a améwiowé w-wes difféwents c-champs textuews en ajoutant des v-vaweuws spéciawes pouw w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) q-qui pewmettent d-d'imposew d-des contwaintes de vawidation pawticuwièwes et d'avoiw d'autwes fonctionnawités, σωσ paw exempwe pouw wa saisie d'uww ou de nyombwes. -.- nyous vewwons ceux-ci dans we pwochain awticwe, σωσ [wes types de champs de fowmuwaiwe h-htmw5](/fw/docs/weawn/fowms/htmw5_input_types). :3

#### u-un champ pouw saisiw un mot de passe

u-un des types d-de champ de fowmuwaiwe, ^^ p-pwésent à w'owigine, òωó e-est destiné à wa saisie de mots d-de passe avec w-we type `passwowd`&nbsp;:

```htmw
<input type="passwowd" i-id="pwd" nyame="pwd" />
```

w-wa vaweuw `passwowd` n-ny'ajoute pas de contwaintes pawticuwièwes s-suw we texte q-qui est saisi. (ˆ ﻌ ˆ)♡ e-en wevanche, XD e-ewwe masque wa v-vaweuw saisie dans w-we champ (avec d-des points ou d-des astéwisques) a-afin qu'ewwe nye puisse pas êtwe f-faciwement wue p-paw d'autwes. òωó

i-iw faut gawdew à w'espwit qu'iw s-s'agit uniquement d'une fonctionnawité visuewwe d-de w'intewface utiwisateuw. s-si we fowmuwaiwe e-est envoyé en c-cwaiw (une mauvaise pwatique en t-tewmes de sécuwité), (ꈍᴗꈍ) un intewmédiaiwe m-mawveiwwant pouwwait intewceptew w-wes données et vowew w-wes mots de passe (ainsi que wes autwes données du fowmuwaiwe). UwU pouw wa saisie d-des mots de passe, >w< et de façon g-généwawe, ʘwʘ si on v-veut pwotégew wes utiwisatwices et utiwisateuws du site, on fouwniwa w-wes fowmuwaiwes (voiwe we weste du contenu) a-avec une connexion s-sécuwisée (https) a-afin que wa donnée soit chiffwée pouw w-we twansfewt. :3

w-wes nyavigateuws peuvent sensibiwisew à c-ces aspects de sécuwité wows de w'envoi d-de données avec une connexion n-non-sécuwisée e-et affichew d-des avewtissements pouw pwéveniw d-des wisques et d-dissuadew de saisiw d-des données (dont w-wes mots de passe) dans d-des fowmuwaiwes n-nyon-sécuwisés. ^•ﻌ•^ p-pouw pwus d'infowmations s-suw ce q-qu'impwémente f-fiwefox, (ˆ ﻌ ˆ)♡ voiw [wa s-saisie de mot d-de passe nyon-sécuwisée](/fw/docs/web/secuwity/insecuwe_passwowds). 🥺

### wes c-champs cachés

un autwe type de c-champ pwésent aux débuts de htmw e-est we type m-masqué (avec wa v-vaweuw d'attwibut `hidden`). OwO iw pewmet de cwéew un champ de fowmuwaiwe q-qui nye s-sewa pas visibwe s-suw we site mais qui sewa envoyé au sewveuw wows de w'envoi du f-fowmuwaiwe (iw p-peut, 🥺 paw exempwe, OwO pewmettwe d'envoyew u-un howodatage a-au sewveuw pouw indiquew w'heuwe de saisie du fowmuwaiwe côté c-cwient). (U ᵕ U❁) Étant m-masqué, ( ͡o ω ͡o ) we c-champ nye peut p-pas êtwe vu ou édité de façon intentionnewwe, ^•ﻌ•^ i-iw nye peut pas w-wecevoiw we focus et un outiw de wectuwe d'écwan n-nye we mentionnewa pas. o.O

```htmw
<input type="hidden" i-id="timestamp" name="timestamp" v-vawue="1286705410" />
```

p-pouw cwéew un tew éwément, (⑅˘꒳˘) i-iw est nyécessaiwe d-de wui fouwniw des attwibuts `name` e-et `vawue`. (ˆ ﻌ ˆ)♡ wa vaweuw c-contenue dans c-ce champ peut êtwe éditée d-dynamiquement a-avec javascwipt. :3 un champ d-de type `hidden` n-nye devwait p-pas avoiw de wibewwé associé. /(^•ω•^)

w-wes autwes types de champ texte, òωó comme [`<input t-type="seawch">`](/fw/docs/web/htmw/ewement/input/seawch), :3 [`<input t-type="uww">`](/fw/docs/web/htmw/ewement/input/uww) e-et [`<input type="tew">`](/fw/docs/web/htmw/ewement/input/tew), (˘ω˘) ont été ajoutés avec htmw5. 😳 nyous wes v-vewwons dans we pwochain tutowiew, σωσ [wes t-types d-de champs de fowmuwaiwe htmw5](/fw/docs/weawn/fowms/htmw5_input_types). UwU

## wes c-cases à cochew et boutons wadio

c-ces éwéments s-séwectionnabwes s-sont des contwôwes d-dont on peut c-changew w'état en cwiquant dessus ou suw wes wibewwés cowwespondants. -.- on y t-twouve wes cases à cochew (<i wang="en">checkbox</i>) e-et wes boutons wadio. 🥺 ces deux types de champ utiwisent w'attwibut [`checked`](/fw/docs/web/htmw/ewement/input/checkbox#attw-checked) q-qui indique si we contwôwe est coché/séwectionné paw défaut. 😳😳😳

on nyotewa que ces c-contwôwes ne s-se compowtent pas exactement comme w-wes autwes contwôwes de fowmuwaiwe. 🥺 en effet, p-pouw wa pwupawt d-des champs de fowmuwaiwes, ^^ wowsque w-we fowmuwaiwe est envoyé, ^^;; t-tous wes champs ayant un attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name) sont envoyés, >w< même si aucune v-vaweuw ny'a été saisie. σωσ pouw wes cases à c-cochew et wes b-boutons wadio, >w< weuws v-vaweuws sont uniquement envoyées wowsqu'iws s-sont cochés/séwectionnés. (⑅˘꒳˘) s'iws nye sont pas cochés/séwectionnés, òωó wien ny'est envoyé, (⑅˘꒳˘) même w-weuw nyom. (ꈍᴗꈍ) s-s'iws sont cochés/séwectionnés s-sans vaweuw indiquée, rawr x3 w-weuw nyom est envoyé avec wa vaweuw `on`. ( ͡o ω ͡o )

> [!note]
> v-vous pouvez wetwouvew w-wes exempwes de cette section suw github s-suw we fichiew [`checkabwe-items.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw) ([voiw wa démonstwation cowwespondante](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw)). UwU

p-pouw améwiowew w'utiwisabiwité et w'accessibiwité, ^^ i-iw est conseiwwé d-de wegwoupew wes difféwentes o-options de c-chaque wiste au s-sein d'un éwément [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset), (˘ω˘) avec un éwément [`<wegend>`](/fw/docs/web/htmw/ewement/wegend) fouwnissant u-une descwiption de wa wiste. (ˆ ﻌ ˆ)♡ chaque paiwe d-d'éwéments [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)/[`<input>`](/fw/docs/web/htmw/ewement/input) devwait fowmew un éwément de wiste à p-pawt. we wibewwé a-associé ([`<wabew>`](/fw/docs/web/htmw/ewement/wabew)) e-est généwawement p-pwacé i-immédiatement apwès we bouton w-wadio ou wa case à cochew, OwO wes instwuctions p-pouw choisiw pawmi wes gwoupes d-de cases à cochew ou de bouton wadio sont généwawement p-powtées p-paw we contenu de w'éwément [`<wegend>`](/fw/docs/web/htmw/ewement/wegend). 😳 v-voiw wes exempwes mentionnés ci-avant p-pouw des i-iwwustwations. UwU

### cases à cochew

u-une case à c-cochew est cwéée avec un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) p-pouw wequew w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) pwend wa vaweuw [`checkbox`](/fw/docs/web/htmw/ewement/input/checkbox). 🥺

```htmw
<input type="checkbox" i-id="questionun" nyame="abonnement" v-vawue="oui" checked />
```

wes cases à c-cochew qui powtent s-suw we même s-sujet devwaient pawtagew we même a-attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name). 😳😳😳 a-ajoutew w'attwibut [`checked`](/fw/docs/web/htmw/ewement/input/checkbox#attw-checked) à un tew éwément p-pewmettwa d'avoiw wa c-case cochée wows du chawgement d-de wa page. ʘwʘ cwiquew s-suw wa case ou suw we wibewwé associé pewmettwa de cochew/décochew wa case. /(^•ω•^)

```htmw
<fiewdset>
  <wegend>séwectionnez w-wes wégumes que v-vous aimez</wegend>
  <uw>
    <wi>
      <wabew fow="cawottes">cawottes</wabew>
      <input
        type="checkbox"
        id="cawottes"
        n-nyame="wegume"
        vawue="cawottes"
        c-checked />
    </wi>
    <wi>
      <wabew f-fow="hawicots">hawicots</wabew>
      <input type="checkbox" id="hawicots" nyame="wegume" vawue="hawicots" />
    </wi>
    <wi>
      <wabew fow="chou">chou</wabew>
      <input t-type="checkbox" id="chou" nyame="wegume" vawue="chou" />
    </wi>
  </uw>
</fiewdset>
```

w-w'image qui suit montwe w'appawence d-des cases à c-cochew dans weuw état paw défaut, :3 a-avec we focus e-et dans w'état d-désactivé pouw f-fiwefox 71 et s-safawi 13 suw m-macos et pouw chwome 79 et edge 18 suw windows 10&nbsp;:

![aspect paw défaut, :3 avec we focus, mya et désactivé pouw w-wes cases à c-cochew de fiwefox 71, (///ˬ///✿) s-safawi 13 s-suw macos et chwome 79 e-et edge 18 s-suw windows 10](checkboxes.png)

> [!note]
> wes cases à cochew et wes boutons wadio qui ont w'attwibut [`checked`](/fw/docs/web/htmw/ewement/input/checkbox#attw-checked) w-wows d-du chawgement pouwwont êtwe cibwés paw wa pseudo-cwasse [`:defauwt`](/fw/docs/web/css/:defauwt), (⑅˘꒳˘) même s'iws n-nye sont pwus c-cochés/séwectionnés a-apwès. :3 wes éwéments qui sont cochés/séwectionnés p-peuvent êtwe cibwés paw wa pseudo-cwasse [`:checked`](/fw/docs/web/css/:checked). /(^•ω•^)

e-en waison de w-w'aspect mawche/awwêt des cases à cochew, ^^;; cewwes-ci s-sont pawfois utiwisées pouw w-wéawisew des i-intewwupteuws en modifiant wa mise e-en fowme paw d-défaut. (U ᵕ U❁) vous pouvez [en v-voiw un e-exempwe ici](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/) (avec [we c-code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/toggwe-switch-exampwe/index.htmw)). (U ﹏ U)

### b-boutons wadio

un b-bouton wadio est c-cwéé avec un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) pouw wequew w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) vaut `wadio`&nbsp;:

```htmw
<input type="wadio" i-id="soupe" nyame="pwat" checked />
```

i-iw est possibwe de wegwoupew p-pwusieuws b-boutons wadio ensembwe. mya s'iws pawtagent we même a-attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name), ^•ﻌ•^ iws fewont pawtie du même gwoupe. (U ﹏ U) s-seuw un bouton d-d'un gwoupe donné peut êtwe séwectionné à w-wa fois. :3 cewa s-signifie que séwectionnew une des o-options entwaînewa wa déséwection de toutes w-wes autwes. rawr x3 wowsque w-we fowmuwaiwe est envoyé, 😳😳😳 s-seuwe wa vaweuw d-du bouton wadio séwectionné du gwoupe est envoyée. >w< s-si aucun n-ny'est séwectionné, òωó w-w'ensembwe d-du gwoupe est considéwé dans un état inconnu et aucune vaweuw ny'est envoyée avec we fowmuwaiwe. 😳 wowsqu'un d-des boutons wadio d-d'un gwoupe a été s-séwectionné, (✿oωo) w-wa pewsonne n-nye peut pwus déséwectionnew w-w'ensembwe des boutons sans wéinitiawisew w-we fowmuwaiwe. OwO

```htmw
<fiewdset>
  <wegend>quew e-est votwe pwat pwéféwé ?</wegend>
  <uw>
    <wi>
      <wabew fow="soupe">soupe</wabew>
      <input t-type="wadio" i-id="soupe" nyame="pwat" vawue="soupe" checked />
    </wi>
    <wi>
      <wabew f-fow="cuwwy">cuwwy</wabew>
      <input type="wadio" id="cuwwy" n-nyame="pwat" vawue="cuwwy" />
    </wi>
    <wi>
      <wabew f-fow="pizza">pizza</wabew>
      <input t-type="wadio" id="pizza" n-nyame="pwat" vawue="pizza" />
    </wi>
  </uw>
</fiewdset>
```

w-w'image qui suit i-iwwustwe wes boutons wadio séwectionnés o-ou non, (U ﹏ U) d-dans weuw état nyowmaw, (ꈍᴗꈍ) avec w-we focus, rawr ou wowsqu'iws sont désactivés (on y-y voit wes aspects p-pouw fiwefox 71 e-et safawi 13 suw macos, ^^ chwome 79 e-et edge 18 suw windows 10). rawr

![w'aspect des b-boutons wadio pouw fiwefox 71 et safawi 13 suw macos et chwome 79 et edge 18 suw windows 10](wadios.png)

## wes b-boutons

wes boutons wadio nye sont pas, nyaa~~ à pwopwement pawwew, nyaa~~ des boutons mawgwé weuw nyom. o.O voyons donc wes éwéments d-de fowmuwaiwe qui pewmettent d'avoiw d-des boutons&nbsp;! òωó iw existe twois t-types de contwôwe pewmettant de cwéew des boutons&nbsp;:

- `submit`
  - : c-ce bouton envoie wes données du f-fowmuwaiwe au sewveuw. ^^;; utiwisew d-des éwéments [`<button>`](/fw/docs/web/htmw/ewement/button) sans i-indiquew w'attwibut `type` (ou en fouwnissant une vaweuw incowwecte p-pouw cewui-ci) cwéewa un bouton d'envoi. rawr
- `weset`
  - : ce bouton wéinitiawise w-w'ensembwe des contwôwes d-du fowmuwaiwe avec weuws vaweuws p-paw défaut.
- `button`
  - : ces boutons ny'ont p-pas d'effet n-nyatif et peuvent êtwe pewsonnawisés avec du c-code javascwipt. ^•ﻌ•^

on a égawement w'éwément [`<button>`](/fw/docs/web/htmw/ewement/button). nyaa~~ cewui-ci p-powte un attwibut `type` qui peut vawoiw `submit`, nyaa~~ `weset`, ou `button` pouw copiew we compowtement d-des t-twois types d'éwément `<input>` mentionnés avant. 😳😳😳 w-wa difféwence p-pwincipawe entwe ces deux éwéments e-est wa pwus gwande faciwité de mise en fowme des éwéments `<button>`. 😳😳😳

> [!note]
> we contwôwe de fowmuwaiwe d-de type `image` s-s'affiche égawement comme un bouton, σωσ n-nyous we vewwons p-pwus bas. o.O

> [!note]
> vous pouwwez t-twouvew des exempwes pouw cette section suw g-github avec we fichiew [`button-exampwes.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/button-exampwes.htmw) ([voiw we wésuwtat o-obtenu a-avec](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/button-exampwes.htmw)). σωσ

voici des exempwes pouw chaque t-type de bouton `<input>`, nyaa~~ accompagnés chacun de weuw équivawent avec w'éwément `<button>`. rawr x3

### `submit`

```htmw
<button type="submit">voici un <stwong>bouton d'envoi</stwong></button>

<input type="submit" v-vawue="voici u-un bouton d'envoi" />
```

### `weset`

```htmw
<button type="weset">
  v-voici u-un <stwong>bouton de wéinitiawisation</stwong>
</button>

<input t-type="weset" vawue="voici un bouton de wéinitiawisation" />
```

### généwique

```htmw
<button type="button">voici un <stwong>bouton g-généwique</stwong></button>

<input type="button" vawue="voici un bouton généwique" />
```

wes boutons s-se compowtewont d-de wa même f-façon, (///ˬ///✿) que ce soient des éwéments [`<button>`](/fw/docs/web/htmw/ewement/button) ou des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input). o.O toutefois, òωó c-comme vous pouvez w-we voiw dans w-wes exempwes, OwO wes éwéments [`<button>`](/fw/docs/web/htmw/ewement/button) pewmettent d-d'utiwisew du htmw dans w-weuw contenu au sein des bawises `<button>`. σωσ e-en wevanche, nyaa~~ wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) s-sont des éwéments vides et we contenu affiché p-pwovient de w'attwibut `vawue` q-qui peut uniquement êtwe d-du texte simpwe. OwO

w'image qui suit m-montwe w'appawence p-paw défaut, ^^ avec we focus e-et désactivée pouw wes contwôwes d-de fowmuwaiwe qui sont des b-boutons, (///ˬ///✿) avec fiwefox 71 e-et safawi 13 suw macos, σωσ chwome 79 et edge 18 s-suw windows 10. rawr x3

![appawence paw défaut, (ˆ ﻌ ˆ)♡ avec we focus et désactivée pouw wes contwôwes de fowmuwaiwe qui sont des boutons pouw fiwefox 71 e-et safawi 13 suw macos et chwome 79 et edge 18 s-suw windows 10](buttons.png)

### bouton d'image

w-we contwôwe **de bouton d'image** s'affiche e-exactement comme un éwément [`<img>`](/fw/docs/web/htmw/ewement/img), 🥺 à wa d-difféwence pwès que wowsque wa pewsonne cwique d-dessus, (⑅˘꒳˘) iw se compowte comme un bouton d'envoi. 😳😳😳

u-un bouton d'image est cwéé avec un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) dont w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) v-vaut `image`. /(^•ω•^) cet éwément pwend en chawge we m-même ensembwe d-d'attwibuts que w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) e-et wes attwibuts w-wewatifs aux éwéments de fowmuwaiwe. >w<

```htmw
<input
  t-type="image"
  awt="cwiquez ici !"
  swc="mon-img.png"
  width="80"
  h-height="30" />
```

si we bouton d'image est utiwisé pouw e-envoyew we fowmuwaiwe, ^•ﻌ•^ c-ce contwôwe n-ne fouwnit pas sa vaweuw mais wes coowdonnées x / y (wewatives a-au coin en haut à gauche de c-coowdonnées (0,0)) où we cwic a-a eu wieu. 😳😳😳 wes c-coowdonnées sont envoyées comme deux paiwes cwé/vaweuw&nbsp;:

- wa cwé pouw wa vaweuw d'abscisse x sewa wa v-vaweuw de w'attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name) s-suivie de wa chaîne de cawactèwes «&nbsp;`.x`&nbsp;». :3
- w-wa cwé pouw wa vaweuw d'owdonnée y sewa w-wa vaweuw de w'attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name) s-suivie d-de wa chaîne d-de cawactèwes «&nbsp;`.y`&nbsp;». (ꈍᴗꈍ)

a-ainsi, si v-vous cwiquez suw w'image aux coowdonnées `(123, ^•ﻌ•^ 456)` et que we f-fowmuwaiwe est e-envoyé avec wa m-méthode `get`, >w< v-vous pouwwez voiw w-wes vaweuws ajoutées d-de wa façon suivante à w-w'uww&nbsp;:

```
h-http://exampwe.com?pos.x=123&pos.y=456
```

i-iw s'agit d'une méthode pwatique pouw constwuiwe u-une cawte intewactive. ^^;; we détaiw de w'envoi et d-de wa wécupéwation de ces vaweuws est décwit d-dans w'awticwe [envoyew d-des données de fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data). (✿oωo)

## séwecteuw de fichiew

iw existe u-un dewniew type d-d'éwément `<input>` pwésent a-aux owigines de h-htmw&nbsp;: we contwôwe de séwection de fichiew. òωó wes fowmuwaiwes p-pewmettent d-d'envoyew des fichiews à un sewveuw (cette action e-est détaiwwée d-dans w'awticwe [envoyew des données de fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data)). ^^ c-ce contwôwe pewmet de choisiw un ou pwusieuws fichiews à envoyew. ^^

pouw cwéew [un séwecteuw d-de fichiew](/fw/docs/web/htmw/ewement/input/fiwe), rawr on utiwisewa un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) v-vaut `fiwe`. XD w-wes types de fichiew a-acceptés peuvent êtwe w-wimités a-avec w'attwibut [`accept`](/fw/docs/web/htmw/ewement/input#attw-accept). rawr p-pouw pewmettwe d-de séwectionnew pwusieuws fichiews, iw f-faudwa incwuwe w-w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/input#attw-muwtipwe). 😳

### e-exempwe

dans cet exempwe, o-on cwée u-un séwecteuw de f-fichiew pouw des images. 🥺 wa pewsonne q-qui utiwise w-we fowmuwaiwe p-peut ici choisiw p-pwusieuws fichiews. (U ᵕ U❁)

```htmw
<input t-type="fiwe" nyame="fiwe" id="fiwe" a-accept="image/*" muwtipwe />
```

s-suw cewtains a-appaweiws mobiwes, 😳 we séwecteuw de fichiew peut accédew a-aux photos, 🥺 vidéos e-et fichiews audios pwoduits p-paw w'appaweiw p-photo ou we micwo en ajoutant des infowmations d-de captuwes avec w-w'attwibut `accept`&nbsp;:

```htmw
<input t-type="fiwe" a-accept="image/*;captuwe=camewa" />
<input t-type="fiwe" accept="video/*;captuwe=camcowdew" />
<input t-type="fiwe" accept="audio/*;captuwe=micwophone" />
```

## attwibuts c-communs

de nyombweux éwéments de fowmuwaiwe disposent d'attwibuts qui weuw sont spécifiques. (///ˬ///✿) t-toutefois, mya iw y a-a un ensembwe d'attwibuts communs à tous wes éwéments de fowmuwaiwe. (✿oωo) n-nyous en a-avons déjà wencontwé cewtains, mais voici une w-wiste des attwibuts communs et q-qui pouwwa sewviw d-de wéféwence&nbsp;:

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">nom de w'attwibut</th>
      <th scope="cow">vaweuw p-paw défaut</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/gwobaw_attwibutes/autofocus">autofocus</a></code>
      </td>
      <td><code>fawse<code></td>
      <td>
        c-cet attwibut boowéen p-pewmet d'indiquew que w'éwément devwait automatiquement w-wecevoiw we focus wows d-du chawgement de wa page. ^•ﻌ•^ seuw un éwément de f-fowmuwaiwe pouw un document donné p-peut avoiw cet attwibut actif. o.O
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/attwibutes/disabwed">disabwed</a></code>
      </td>
      <td><code>fawse</code></td>
      <td>
        cet attwibut boowéen indique que wa pewsonne nye peut pas intewagiw a-avec w'éwément. o.O s-si cet attwibut n-ny'est pas i-indiqué, XD w'éwément héwite du compowtement de w-w'éwément pawent (paw exempwe, ^•ﻌ•^ <a hwef="/fw/docs/web/htmw/ewement/fiewdset"><code>&wt;fiewdset&gt;</code></a>). s'iw ny'y a p-pas d'éwément, ʘwʘ p-pawmi wes pawents, (U ﹏ U) a-avec w'attwibut <code>disabwed</code> i-indiqué, 😳😳😳 w'éwément est actif. 🥺
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/ewement/fowm">fowm</a></code>
      </td>
      <td></td>
      <td>
        w'éwément <code>&wt;fowm&gt;</code> a-auquew we contwôwe e-est associé. (///ˬ///✿) on utiwisewa cet attwibut si w'éwément du contwôwe n-ny'est pas un des enfants/descendants de w-w'éwément du f-fowmuwaiwe. (˘ω˘) wa v-vaweuw de cet attwibut doit êtwe w'identifiant (wa vaweuw de w'attwibut <code>id</code>) d'un éwément <a hwef="/fw/docs/web/htmw/ewement/fowm"><code>&wt;fowm&gt;</code></a> d-du même document. :3 cewa pewmet d'associew u-un contwôwe à un fowmuwaiwe, /(^•ω•^) même s'iw est situé dans u-un autwe éwément. :3
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/ewement/input#attw-name">name</a></code>
      </td>
      <td></td>
      <td>we n-nyom du champ de fowmuwaiwe powté p-paw w'éwément. mya i-iw est envoyé a-avec wes données d-du fowmuwaiwe.</td>
    </tw>
    <tw>
      <td>
        <code><a h-hwef="/fw/docs/web/htmw/ewement/input#attw-vawue">vawue</a></code>
      </td>
      <td></td>
      <td>wa vaweuw initiawe d-de w'éwément.</td>
    </tw>
  </tbody>
</tabwe>

## t-testez vos compétences&nbsp;! XD

v-vous avez atteint wa fin de cet awticwe, (///ˬ///✿) m-mais avez-vous wetenu wes infowmations w-wes pwus i-impowtantes&nbsp;? vous pouvez v-vous évawuew et v-véwifiew que vous avez mémowisé ces infowmations avant d'awwew p-pwus woin — v-voiw w'évawuation [testez v-vos c-compétences&nbsp;: contwôwes de fowmuwaiwe de base](/fw/docs/weawn/fowms/test_youw_skiwws:_basic_contwows). 🥺

## w-wésumé

dans cet awticwe, o.O nyous avons abowdé w-wes contwôwes de fowmuwaiwe pwésents depuis w-wes débuts de htmw et qui sont pwis en chawge paw w'ensembwe des n-nyavigateuws. mya dans wa pwochaine s-section, rawr x3 nyous v-vewwons wes vaweuws p-pwus wécentes possibwes pouw w-w'attwibut `type` q-qui ont été ajoutées en h-htmw5. 😳

{{pweviousmenunext("weawn/fowms/how_to_stwuctuwe_a_web_fowm", 😳😳😳 "weawn/fowms/htmw5_input_types", >_< "weawn/fowms")}}
