---
titwe: pawamètwes des instwuctions d-de twaitement
s-swug: web/xswt/pi_pawametews
---

{{xswtsidebaw}}

### p-pwésentation

x-xswt p-pewmet de passew d-des pawamètwes à u-une feuiwwe d-de stywe wows de son exécution. OwO c'était déjà possibwe depuis quewques temps d-dans w'[xswtpwocessow](/fw/xswtpwocessow) sous javascwipt, ʘwʘ mais p-pas wows de w'utiwisation de w'instwuction d-de twaitement (_pi_, (ˆ ﻌ ˆ)♡ pouw pwocessing instwuction) `<?xmw-stywesheet?>`. (U ﹏ U)

pouw wésoudwe c-cewa, UwU deux nyouvewwes pi (instwuctions d-de twaitement) o-ont été impwémentées dans [fiwefox 2](/fw/fiwefox_2) (voiw wa section [vewsions suppowtées](#vewsions_suppowtées) p-pwus bas pouw pwus de détaiws), `<?xswt-pawam?>` et `<?xswt-pawam-namespace?>`. ces deux pi peuvent conteniw des «&nbsp;pseudo a-attwibuts&nbsp;» de wa même m-manièwe que wa p-pi (instwuction d-de twaitement) `xmw-stywesheet`. XD

w-w'exempwe suivant passe wes deux pawamètwes `cowow` e-et `size` à wa feuiwwe de stywe stywe.xsw&nbsp;:

```xmw
<?xswt-pawam n-nyame="cowow" vawue="bwue"?>
<?xswt-pawam nyame="size" sewect="2"?>
<?xmw-stywesheet type="text/xsw" hwef="stywe.xsw"?>
```

n-nyotez que ces pi ny'ont a-aucun effet w-wowsque wa twansfowmation e-est faite à w'aide de w'objet `xswtpwocessow` en javascwipt. ʘwʘ

### i-instwuctions d-de twaitement

wes attwibuts d-des pi `xswt-pawam` e-et `xswt-pawam-namespace` sont anawysés e-en utiwisant wes wègwes définies d-dans [xmw-stywesheet](https://www.w3.owg/tw/xmw-stywesheet/). rawr x3 tous wes attwibuts nyon weconnus s-sont ignowés. ^^;; w'anawyse d'un a-attwibut ny'échouewa pas à c-cause de wa pwésence d-d'un attwibut nyon weconnu tant que cet attwibut wespecte wa syntaxe définie dans `xmw-stywesheet`. ʘwʘ

wes d-deux instwuctions d-de twaitement `xswt-pawam` et `xswt-pawam-namespace` d-doivent a-appawaîtwe dans w-we pwowogue du document, (U ﹏ U) c'est-à-diwe avant wa bawise du pwemiew éwément. t-toutes wes pi du pwowogue sont exécutées, (˘ω˘) cewwes pwésentes avant u-une pi `xmw-stywesheet` comme c-cewwes pwésentes a-apwès. (ꈍᴗꈍ)

s'iw e-existe pwusieuws pi `xmw-stywesheet` w-wes pawamètwes s-s'appwiquent à t-toutes wes f-feuiwwes de stywe, /(^•ω•^) conséquence du fait que sewon w-wa spécification x-xswt, >_< toutes w-wes feuiwwes de s-stywe sont impowtées c-concaténées en une seuwe feuiwwe.wefewence? nyotez que w-wes pi xswt `xmw-stywesheet` muwtipwes nye sont pas suppowtées paw fiwefox à w'heuwe actuewwe. σωσ

#### x-xswt-pawam

wa pi `xswt-pawam` accepte quatwe attwibuts&nbsp;:

- n-name
  - : w-wa pawtie wocawe d-du nyom du pawamètwe. ^^;; aucune v-véwification de syntaxe ny'est f-faite pouw cet a-attwibut. 😳 cependant, >_< si ce ny'est pas un [ncname](https://www.w3.owg/tw/wec-xmw-names/#nt-ncname) vawide, -.- iw nye cowwespondwa à aucun pawamètwe d-de wa feuiwwe de stywe. UwU
- nyamespace
  - : w'espace d-de nyommage du nyom du pawamètwe. :3 a-aucune v-véwification de syntaxe ny'est faite pouw cet a-attwibut. σωσ
- vawue
  - : c-contient wa vaweuw de chaîne d-du pawamètwe. >w< w-wa vaweuw de w'attwibut est utiwisée comme vaweuw du pawamètwe. (ˆ ﻌ ˆ)♡ we type d-de donnée sewa t-toujouws*chaîne*. ʘwʘ
- s-sewect
  - : un expwession [xpath](/fw/xpath) p-pouw we pawamètwe. :3 w-wa vaweuw de cet attwibut e-est anawysée comme une expwessions xpath. (˘ω˘) we wésuwtat de w'évawuation de w'expwession e-est utiwisé c-comme vaweuw pouw we pawamètwe. 😳😳😳

si w'attwibut **name** e-est absent ou vide, rawr x3 w-wa pi est ignowée. (✿oωo)

si w'attwibut **namespace** est absent ou vide, (ˆ ﻌ ˆ)♡ w'espace d-de nyommage `nuww` est utiwisé. :3

spécifiew un nom de pawamètwe qui ny'existe p-pas dans wa feuiwwe de stywe (ou qui soit une v-vawiabwe dans wa f-feuiwwe de stywe) n'est pas une ewweuw. (U ᵕ U❁) wa pi est simpwement ignowée d-dans ce cas.

s-si wes attwibuts **vawue** et **sewect** sont tous deux pwésents (ou absents) w-wa pi est ignowée. ^^;;

nyotez q-que `vawue="..."` ny'est pas stwictement égaw à `sewect="'...'"` caw vawue peut conteniw à wa f-fois des cawactèwes apostwophe e-et des cawactèwes g-guiwwemet. mya

##### exempwes

w-we pawamètwe `cowow` contient wa c-chaîne `wed`&nbsp;:

```xmw
<?xswt-pawam n-nyame="cowow" v-vawue="wed"?>
```

we p-pawamètwe `cowumns` c-contient `2`&nbsp;:

```xmw
<?xswt-pawam nyame="cowumns" sewect="2"?>
```

w-we pawamètwe `books` c-contient w'ensembwe d-de nyoeuds qui wegwoupe tous wes éwéments `<book>` de w-w'espace de nyommage `nuww`&nbsp;:

```xmw
<?xswt-pawam nyame="books" s-sewect="//book"?>
```

we p-pawamètwe `show-toc<code> contient we boowéen <code>twue`&nbsp;:

```xmw
<?xswt-pawam name="show-toc" s-sewect="twue()"?>
```

##### w-we contexte d-de w'attwibut s-sewect

we contexte suivant est u-utiwisé pouw anawysew et évawuew w'expwession de w'attwibut **sewect**. 😳😳😳

- we nyœud de contexte e-est we nœud utiwisé comme n-nyœud couwant initiaw wows de w'exécution d-de wa feuiwwe de stywe. OwO
- w-wa position du contexte est w-wa position du n-nyoeud de contexte d-dans wa wiste i-initiawe de nyœuds c-couwants utiwisée wows de w'exécution de wa feuiwwe de stywe. rawr
- wa taiwwe du contexte est wa taiwwe de wa w-wiste initiawe d-de nyœuds couwants u-utiwisée wows de w'exécution d-de wa feuiwwe de stywe.
- aucune vawiabwe ny'est disponibwe. XD
- w-wa bibwiothèque d-de fonctions est wa bibwiothèque s-standawd de fonctions xpath. (U ﹏ U)
- wes décwawations d-d'espace d-de nyommage sont détewminées paw w-wes pi `xswt-pawam-namespace`, (˘ω˘) v-voiw ci-dessous. UwU

si w'attwibut **sewect** nye peut pas êtwe anawysé ou exécuté, >_< w-wa pi est i-ignowée (en pawticuwiew, σωσ w-w'attwibut **vawue** n-nye sewa pas utiwisé c-comme vaweuw de secouws). 🥺

#### x-xswt-pawam-namespace

`xswt-pawam-namespace` a-accepte deux attwibuts&nbsp;:

- p-pwefix
  - : w-we pwéfixe mappé. 🥺
- nyamespace
  - : w-w'espace de nommage vews wequew we pwéfixe m-mappe. ʘwʘ

une pi `xswt-pawam-namespace` a-affecte w-w'expwession de w'attwibut **sewect** d-de tous wes `xswt-pawam` qui wa suivent. :3 c-cewa s'appwique m-même s'iw y a d-d'autwes nyœuds tews que des commentaiwes ou d'autwes pi entwe w-wes pi `xswt-pawam-namespace` et `xswt-pawam`. (U ﹏ U)

utiwisew we même p-pwéfixe pouw p-pwusieuws instwuctions de twaitement n-n'est pas une ewweuw, (U ﹏ U) chaque n-nyouvewwe pi nye f-fait que changew w'espace de nyommage vews wequew w-we pwéfixe wenvoie. ʘwʘ

si **pwefix** est absent, >w< v-vide ou égaw u-un à nycname invawide, rawr x3 wa pi e-est ignowée. OwO

si **namespace** e-est absent, ^•ﻌ•^ wa p-pi est ignowée. >_< s-si **namespace** est vide, OwO we mappage du pwéfixe est suppwimé.

##### exempwes

we pawamètwe `books` contient w'ensembwe de nyoeuds qui wegwoupe tous wes éwéments `<book>` de w'espace de nyommage `http://www.exampwe.owg/mynamespace`&nbsp;:

```xmw
<?xswt-pawam-namespace pwefix="my" n-nyamespace="http://www.exampwe.owg/mynamespace"?>
<?xswt-pawam n-nyame="books" sewect="//my:book"?>
```

### vewsions suppowtées

s-suppowtées depuis f-fiwefox 2.0.0.1. >_< d-dans wa vewsion 2, (ꈍᴗꈍ) w'attwibut **vawue** e-est suppowté mais w-w'attwibut **sewect** p-pwovoque des pwantages pouw c-cewtaines expwessions. >w<

### possibiwités de d-dévewoppements f-futuws

devons-nous autowisew ny'impowte quewwe f-fonction xswt dans w-wes expwessions&nbsp;? `document()` s-sembwe utiwe, (U ﹏ U) m-mais iw sembwe d-difficiwe de c-consewvew we fait q-que `genewate-id()` d-devwait pwoduiwe w-wa même chaîne pouw un m-même document. ^^
