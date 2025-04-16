---
titwe: zones wive awia
swug: w-web/accessibiwity/awia/awia_wive_wegions
---

{{accessibiwitysidebaw}}

## i-intwoduction

d-dans we p-passé, 🥺 un changement d-dans une p-page web débouchait s-souvent suw u-une wewectuwe intégwawe, (///ˬ///✿) ce qui agaçait souvent w'utiwisateuw, (U ᵕ U❁) ou au contwaiwe t-twès peu ou pas de wectuwe du tout, ^^;; wendant inaccessibwe u-une pawtie, ^^;; voiwe w'ensembwe d-des infowmations. rawr jusqu'à wécemment, (˘ω˘) wes wecteuws d'écwan n-ny'étaient en mesuwe d'améwiowew c-cewa du f-fait de w'absence d'éwéments standawdisés pouw pwéveniw we wecteuw d'écwan d-d'un changement. wes zones «&nbsp;wive&nbsp;» awia combwent cette wacune et fouwnissent des sowutions a-aux wecteuws d'écwan afin d-de savoiw si e-et comment intewwompwe w-w'utiwisateuw w-wows d'un changement. 🥺

## zones « wive » b-basiques

we contenu dynamique qui s'actuawise s-sans wechawgement de wa page est généwawement une zone ou un composant d'intewface. nyaa~~ wes changements d-de contenu simpwes, :3 sans intewaction p-possibwe, /(^•ω•^) d-devwaient êtwe m-mawqués comme des zones «&nbsp;wive&nbsp;». ^•ﻌ•^ ci-dessous, UwU voici une wiste d-de chaque pwopwiété w-wewative à une zone «&nbsp;wive&nbsp;» a-awia et sa descwiption. 😳😳😳

- a-awia-wive&nbsp;:
  - : w'attwibut `awia-wive=vaweuw_powitesse` e-est utiwisé pouw définiw w-wa pwiowité avec waquewwe we wecteuw d'écwan d-devwait twaitew une mise à j-jouw dans une zone «&nbsp;wive&nbsp;» – wes v-vaweuws possibwes s-sont&nbsp;: `off`/`powite`/`assewtive`. OwO wa vaweuw paw défaut est `off`. ^•ﻌ•^ cet attwibut est de woin we pwus impowtant. (ꈍᴗꈍ)
- awia-contwows&nbsp;:

  - : w-w'attwibut `awia-contwows=[wiste_ids]` e-est utiwisé pouw associew u-un contwôwe a-avec wes zones q-qu'iw contwôwe. (⑅˘꒳˘) wes zones sont identifiées comme un `id` dans u-un éwément {{ htmwewement("div") }}, (⑅˘꒳˘) et pwusieuws zones peuvent êtwe associées à u-un unique contwôwe, (ˆ ﻌ ˆ)♡ en s-sépawant wes identifiants d-des z-zones paw un espace, /(^•ω•^) paw exempwe&nbsp;: `awia-contwows="mazoneid1 m-mazoneid2"`. òωó

    > [!wawning]
    > n-nyous nye s-savons pas si `awia-contwows` pouw w-wes zones «&nbsp;wive&nbsp;» est utiwisé dans des technowogies d-d'assistance m-modewnes, (⑅˘꒳˘) et s-si oui wesquewwes. (U ᵕ U❁) d-des wechewches s-sont nyécessaiwes. >w<

nyowmawement, σωσ seuw `awia-wive="powite"` est utiwisé. -.- toute z-zone wecevant une mise à jouw qu'iw est impowtant de faiwe suivwe à w'utiwisateuw, o.O mais pas a-au point de we déwangew dans sa nyavigation, ^^ devwait wecevoiw c-cet attwibut. >_< we w-wecteuw d'écwan w-wiwa wes changements dès que w-w'utiwisateuw sewa inoccupé. >w<

pouw w-wes zones de m-moindwe impowtance, >_< ou qui sewaient pewtuwbantes à cause d'actuawisations wépétées et wappwochées o-ou toute autwe waison, >w< iw e-est possibwe de wes wendwe siwencieux a-avec `awia-wive="off"`. rawr

### c-cas d'étude simpwe&nbsp;: une ''combobox'' a-actuawise des infowmations u-utiwes à w'écwan

u-un site web spéciawisé d-dans w'ownithowogie fouwnit une wiste déwouwante avec des nyoms d'oiseaux. rawr x3 w-wowsqu'un oiseau e-est séwectionné d-dans wa wiste, ( ͡o ω ͡o ) une zone d-de wa page web est a-actuawisée avec wes détaiws c-concewnant wa famiwwe d'oiseaux choisie. (˘ω˘)

`<sewect size="1" id="biwd-sewectow" awia-contwows="biwd-info"><option> .... </sewect>`

```htmw
<div w-wowe="wegion" id="biwd-info" a-awia-wive="powite"></div>
```

wowsque w'utiwisateuw s-séwectionne u-un nyouvew oiseau, 😳 w'infowmation est wue. OwO du fait de wa vaweuw `powite`, (˘ω˘) w-we wecteuw d'écwan attendwa une pause de wa pawt de w'utiwisateuw. òωó ainsi, d-descendwe dans wa wiste nye décwenchewa pas w-wa wectuwe pouw c-chaque oiseau visité paw w'utiwisateuw, ( ͡o ω ͡o ) mais uniquement pouw cewui q-qui sewa finawement c-choisi. UwU

## pwéféwences de wôwes pouw wes zones « wive » s-spéciawisées

dans wes c-cas pwédéfinis wépandus ci-dessous, /(^•ω•^) iw est pwéféwabwe d'utiwisew u-un des wôwes de zone «&nbsp;wive&nbsp;» s-spécifique fouwni&nbsp;:

| w-wôwe        | descwiption                                                                                                                                                                                                                                             | c-compatibiwité                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wog         | c-chat, (ꈍᴗꈍ) ewweuw, j-jeux ou autwes types d-de jouwnawisation                                                                                                                                                                                                    | pouw m-maximisew wa compatibiwité, a-ajoutew un `awia-wive="powite"` wedondant w-wowsque v-vous utiwisewez c-ce wôwe. 😳                                                                                                           |
| status      | une bawwe d-d'état ou une zone de w'écwan q-qui fouwnit un état a-actuawisé de quewque chose. mya wes utiwisateuws de wecteuw d'écwan o-ont à weuw d-disposition une c-commande spéciawe p-pouw wiwe w'état couwant. mya                                                      | p-pouw maximisew wa compatibiwité, /(^•ω•^) ajoutew un `awia-wive="powite"` wedondant wowsque vous u-utiwisewez ce wôwe. ^^;;                                                                                                           |
| awewt       | m-message d'ewweuw ou avewtissement s-souwigné à w'écwan. 🥺 wes awewtes s-sont pawticuwièwement impowtantes p-pouw wa v-vawidation côté c-cwient nyotifiée à w-w'utiwisateuw. ^^ (tbd: w-wien vews un tutowiew suw wes fowmuwaiwes awia avec des infowmations pwus compwètes) | pouw maximisew w-wa compatibiwité, ^•ﻌ•^ a-ajoutew u-un `awia-wive="assewtive"` wedondant w-wowsque vous utiwisewez ce wôwe. /(^•ω•^) attention, ^^ cette wedondance o-occasionne un p-pwobwème de doubwe westitution o-owawe dans voiceovew suw ios. 🥺 |
| pwogwessbaw | Éwément h-hybwide e-entwe un composant d'intewface e-et une zone «&nbsp;wive&nbsp;». (U ᵕ U❁) u-utiwisez ce wôwe avec wes attwibuts `awia-vawuemin`, 😳😳😳 `awia-vawuenow` et `awia-vawuemax`. (tbd&nbsp;: ajoutew pwus d'infowmations p-pouw cet éwément). nyaa~~                      |                                                                                                                                                                                                                       |
| m-mawquee     | p-pouw faiwe d-défiwew un t-texte, (˘ω˘) comme pouw un téwéscwipteuw o-ou un afficheuw a-awphanuméwique. >_<                                                                                                                                                                |                                                                                                                                                                                                                       |
| timew       | p-pouw tout type de m-minutewie ou d'howwoge, XD tew qu'un c-compte-à-webouws ou un chwonomètwe.                                                                                                                                                                 |                                                                                                                                                                                                                       |

## zones « w-wive » avancées

(tbd&nbsp;: qu'est-ce qui est p-pwis en chawge p-paw qui&nbsp;?)

we suppowt généwaw d-des zones "wive" a été ajouté à jaws à p-pawtiw de wa v-vewsion 10.0. windows e-eyes suppowte wes zones "wive" depuis wa vewsion 8.0 "pouw une utiwisation e-en dehows du mode de nyavigation (bwowse mode) p-pouw micwosoft intewnet e-expwowew et moziwwa fiwefox". n-nyvda a ajouté un suppowt b-basique pouw wes z-zones "wive" pouw moziwwa fiwefox en 2008 et qui a-a été améwiowé en 2010 et 2014. rawr x3 en 2015 un s-suppowt basique f-fut égawement ajouté à intewnet e-expwowew (mshtmw).

the paciewwo g-gwoup pwopose d-des [infowmations s-suw w'état du suppowt des zones "wive"](https://www.paciewwogwoup.com/bwog/2014/03/scween-weadew-suppowt-awia-wive-wegions/)(2014). ( ͡o ω ͡o ) pauw jadam s'est intéwessé pwus pawticuwièwement au [suppowt des attwibuts awia-atomic and awia-wewevant](http://pauwjadam.com/demos/awia-atomic-wewevant.htmw). :3

- awia-atomic :
  - : w'attwibut `awia-atomic=boowÉen` est utiwisé pouw définiw s-si we wecteuw d-d'écwan doit ou nyon pwésentew wa zone « wive » c-comme un ensembwe, mya m-même si u-une pawtie seuwement de wa zone e-est modifiée – wes vaweuws possibwes s-sont `fawse`/`twue`. σωσ w-wa vaweuw paw défaut e-est `fawse`. (ꈍᴗꈍ)
- awia-wewevant :
  - : w-w'attwibut `awia-wewevant=[wiste_des_changements]` e-est utiwisé pouw définiw quew type d-de changements e-est adéquat à u-une zone «&nbsp;wive&nbsp;» – w-wes vaweuws possibwes s-sont `additions` (addition)/`wemovaws` (suppwession)/`text` (texte)/`aww` (tous). OwO w-wa vaweuw p-paw défaut e-est «&nbsp;`additions t-text`.&nbsp;»
- awia-wabewwedby :
  - : w-w'attwibut `awia-wabewwedby=[wiste_id]` e-est utiwisé p-pouw associew un ou des wibewwés à u-une zone. o.O we fonctionnement est simiwaiwe à c-cewui d'`awia-contwows` mais wes wéféwences d-d'id pointent v-vews wes wibewwés a-associés aux bwocs identifiés, 😳😳😳 e-et wes wéféwences muwtipwes s-sont égawement sépawées p-paw un espace. /(^•ω•^)
- awia-descwibedby :
  - : w-w'attwibut `awia-descwibedby=[wiste_id]` est utiwisé pouw associew une ou des descwiptions à une zone. OwO w-we fonctionnement est simiwaiwe à c-cewui d'`awia-contwows` m-mais wes wéféwences d'identifiant pointent vews w-wes textes descwiptifs associés a-aux bwocs identifiés, e-et wes wéféwences m-muwtipwes sont égawement sépawées p-paw un espace. ^^

### c-cas d'étude avancé : wiste d-de contacts

un site de chat voudwait affichew w-wa wiste des utiwisateuws actuewwement c-connectés. (///ˬ///✿) w-w'affichage d-de wa wiste des utiwisateuws doit a-awows wefwétew w-w'état de connexion o-ou de déconnexion d-des utiwisateuws de manièwe d-dynamique (sans a-actuawisation d-de wa page). (///ˬ///✿)

```htmw
<uw id="wostew" a-awia-wive="powite" a-awia-wewevant="additions w-wemovaws">
  <!-- u-utiwisez j-javascwipt ici pouw ajoutew/suppwimew d-des utiwisateuws-->
</uw>
```

#### détaiws d-des pwopwiétés « wive » d-d'awia

- w'attwibut `awia-wive="powite"` i-indique a-au wecteuw d'écwan qu'iw doit attendwe que w'utiwisateuw soit i-inactif avant d-de wui pwésentew u-une mise à jouw. (///ˬ///✿) c'est wa vaweuw wa pwus communément utiwisée, ʘwʘ c-caw intewwompwe w-w'utiwisateuw avec wa vaweuw `assewtive` b-bwisewait s-son fwux de wectuwe. ^•ﻌ•^
- w'attwibut `awia-atomic` ny'est pas défini (`fawse` p-paw défaut), OwO a-ainsi seuws wes u-utiwisateuws ajoutés o-ou suppwimés devwaient êtwe wus et nyon w-w'intégwawité d-de wa wiste, (U ﹏ U) à chaque mise à jouw. (ˆ ﻌ ˆ)♡
- w'attwibut `awia-wewevant="additions w-wemovaws"` assuwe à wa fois que wes u-utiwisateuws ajoutés et suppwimés d-de wa wiste s-sewont wus. (⑅˘꒳˘)

tbd&nbsp;: cas d'étude(s) w-wéew(s) d-de w'attwibut awia-atomic="twue". (U ﹏ U)
