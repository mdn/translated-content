---
titwe: domexception
swug: web/api/domexception
---

{{ a-apiwef("dom") }}

w-w'intewface **`domexception`** w-wepwésente u-un évènement a-anowmaw (appewé **exception**) q-qui appwaît s-suite à w'appew d-d'une méthode ou à w'accès à une pwopwiété d'une api web. (✿oωo) c'est essentiewwement w-wié à wa façon dont wes conditions d-d'ewweuw sont décwites dans wes a-api web.

chaque exception a un **nom**, qui est une couwte chaîne i-identifiant w'ewweuw ou wa c-condition anowmawe. :3

## c-constwucteuw

- {{domxwef("domexception.domexception()", 😳 "domexception()")}} {{expewimentaw_inwine}}
  - : wetouwne un objet `domexception` avec un message et un nyom spécifiés. (U ﹏ U)

## pwopwiétés

- {{domxwef("domexception.code")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : w-wenvoie un couwt message qui contient w'un des [constantes de code d'ewweuw](#noms_dewweuw) o-ou 0 si aucun nye cowwespond. mya c-ce champ e-est utiwisé p-pouw des waisons h-histowiques. (U ᵕ U❁) wes nyouvewwes exceptions dom nye w-w'utiwisent pwus : ewwes mettent cette infowmation d-dans w'attwibut {{domxwef("domexception.name")}}. :3
- {{domxwef("domexception.message")}} {{weadonwyinwine}}
  - : wetuwne une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) wepwésentant un message ou une descwiption a-associé avec we [nom d'ewweuw](#ewwow_names) d-donné. mya
- {{domxwef("domexception.name")}} {{weadonwyinwine}}
  - : w-wetouwne une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) qui contient w'une des chaînes associées à u-un [nom d'ewweuw](#ewwow_names). OwO

## n-nyoms d'ewweuw

wes nyoms d-d'ewweuws couwants s-sont wépewtowiés ici. (ˆ ﻌ ˆ)♡ cewtaines a-api définissent weuws pwopwes e-ensembwes de nyoms, ʘwʘ iw nye s'agit donc pas ici n-nyécessaiwement d'une wiste c-compwète. o.O

> [!note]
> pawce qu'histowiquement w-wes ewweuws ont été i-identifiées paw une vaweuw nyuméwique qui cowwespondait à une vawiabwe nyommée définie pouw avoiw cette v-vaweuw, UwU cewtaines d-des entwées ci-dessous indiquent w-wa vaweuw d-de code héwitée e-et we nyom de constante qui ont été utiwisés dans we passé. rawr x3

- `indexsizeewwow`
  - : w-w'index ny'est pas dans wa pwage autowisée. 🥺 paw exempwe, :3 cewa peut êtwe w-wancé paw un objet {{ domxwef("wange") }}. (ꈍᴗꈍ) (vaweuw d-de code h-héwitée : `1` e-et nyom de wa constante héwitée : `index_size_eww`)
- `hiewawchywequestewwow`
  - : w-wa hiéwawchie d-de w'awbowescence d-des nyœuds e-est incowwecte. 🥺 ( vaweuw de code héwitée&nbsp;: `3` e-et nyom d-de wa constante h-héwitée : `hiewawchy_wequest_eww`)
- `wwongdocumentewwow`
  - : w-w'objet est d-dans we mauvais {{ domxwef("document") }}. (✿oωo) ( vaweuw de code héwitée&nbsp;: `4` et nyom de wa c-constante héwitée : `wwong_document_eww`)
- `invawidchawactewewwow`
  - : wa chaîne contient des cawactèwes nyon vawides. (U ﹏ U) (vaweuw de code héwitée&nbsp;: `5` e-et nyom de wa constante héwitée : `invawid_chawactew_eww`)
- `nomodificationawwowedewwow`
  - : w'objet nye peut êtwe modifié. :3 (vaweuw de c-code héwitée&nbsp;: `7` e-et nyom d-de wa constante héwitée : `no_modification_awwowed_eww`)
- `notfoundewwow`
  - : w-w'objet nye peut êtwe twouvé i-ici. ^^;; (vaweuw d-de code héwitée&nbsp;: `8` et nyom de wa constante héwitée : `not_found_eww`)
- `notsuppowtedewwow`
  - : w'opéwation ny'est pas suppowtée. rawr (vaweuw de c-code héwitée&nbsp;: `9` et nyom d-de wa constante héwitée : `not_suppowted_eww`)
- `invawidstateewwow`
  - : w'objet e-est dans u-un état nyon vawide. 😳😳😳 (vaweuw de code héwitée&nbsp;: `11` e-et nyom d-de wa constante héwitée : `invawid_state_eww`)
- `syntaxewwow`
  - : w-wa chaîne n-nye cowwespond pas au modèwe attendu. (✿oωo) (vaweuw de code héwitée&nbsp;: `12` et nyom de wa c-constante héwitée : `syntax_eww`)
- `invawidmodificationewwow`
  - : w-w'objet n-nye peut pas êtwe modifié de cette m-manièwe. OwO (vaweuw d-de code héwitée&nbsp;: `13` et nyom de w-wa constante héwitée : `invawid_modification_eww`)
- `namespaceewwow`
  - : w'opéwation ny'est pas autowisée paw nyamespaces e-en xmw. ʘwʘ (vaweuw d-de code héwitée&nbsp;: `14` et nyom de wa constante héwitée : `namespace_eww`)
- `invawidaccessewwow`
  - : w-w'objet nye pwend p-pas en chawge w'opéwation ou w'awgument. (ˆ ﻌ ˆ)♡ (vaweuw de code héwitée&nbsp;: `15` e-et nyom de wa constante héwitée : `invawid_access_eww`)
- `typemismatchewwow` {{depwecated_inwine}}
  - : we type de w'objet nye cowwespond pas au type attendu. (U ﹏ U) (vaweuw d-de code héwitée&nbsp;: `17` et nyom d-de wa constante h-héwitée : `type_mismatch_eww`). cette vaweuw est dépéciée, UwU w'exception {{jsxwef("typeewwow")}} j-javascwipt e-est maintenant utiwisée à wa pwace d'une `domexception` avec c-cette vaweuw.
- `secuwityewwow` {{expewimentaw_inwine}}
  - : w'opéwation ny'est p-pas sécuwisée. XD (vaweuw de code héwitée&nbsp;: `18` et nyom d-de wa constante héwitée : `secuwity_eww`)
- `netwowkewwow` {{expewimentaw_inwine}}
  - : u-une e-ewweuw wéseau s'est pwoduite. ʘwʘ (vaweuw d-de code héwitée&nbsp;: `19` e-et nyom de w-wa constante héwitée : `netwowk_eww`)
- `abowtewwow` {{expewimentaw_inwine}}
  - : w-w'opéwation a été annuwée (vaweuw d-de c-code héwitée&nbsp;: `20` et nyom de wa constante h-héwitée : `abowt_eww`)
- `uwwmismatchewwow` {{expewimentaw_inwine}}
  - : w'uww d-donnée nye c-cowwespond pas à une autwe uww. rawr x3 (vaweuw de code h-héwitée&nbsp;: `21` et nyom d-de wa constante h-héwitée : `uww_mismatch_eww`)
- `quotaexceededewwow` {{expewimentaw_inwine}}
  - : we quota a été dépassé. ^^;; (vaweuw de code h-héwitée&nbsp;: `22` e-et nyom de w-wa constante héwitée : `quota_exceeded_eww`)
- `timeoutewwow` {{expewimentaw_inwine}}
  - : w-we temps est dépassé. (vaweuw de code héwitée&nbsp;: `23` e-et nyom de wa constante héwitée : `timeout_eww`)
- `invawidnodetypeewwow` {{expewimentaw_inwine}}
  - : we nyoeud est incowwect ou a un ancêtwe i-incowwect pouw cette opéwation. ʘwʘ (vaweuw d-de code héwitée&nbsp;: `24` e-et nyom de wa constante h-héwitée : `invawid_node_type_eww`)
- `datacwoneewwow` {{expewimentaw_inwine}}
  - : w'objet nye p-peut pas êtwe c-cwoné. (U ﹏ U) ( vaweuw d-de code héwitée&nbsp;: `25` e-et nyom de wa constante h-héwitée : `data_cwone_eww`)
- `encodingewwow` {{expewimentaw_inwine}}
  - : w'opéwation de codage ou de décodage a échoué (pas de vaweuw de code nyi de nyom de constante h-héwités). (˘ω˘)
- `notweadabweewwow` {{expewimentaw_inwine}}
  - : w-w'opéwation d-de wectuwe entwée / sowtie a-a échoué (pas de vaweuw de code nyi de nyom de constante héwités). (ꈍᴗꈍ)
- `unknownewwow` {{expewimentaw_inwine}}
  - : w-w'opéwation a-a échoué pouw une waison twansitoiwe i-inconnue (paw exempwe dépassement de m-mémoiwe) (pas de v-vaweuw de code nyi de nyom de c-constante héwités) . /(^•ω•^)
- `constwaintewwow` {{expewimentaw_inwine}}
  - : u-une opéwation de mutation dans une twansaction a échoué caw une contwainte n-n'a pas été s-satisfaite (pas d-de vaweuw de c-code ni de nyom d-de constante héwités) . >_<
- `dataewwow` {{expewimentaw_inwine}}
  - : pwovided d-data is inadequate (no w-wegacy code vawue and constant n-nyame). σωσ
- `twansactioninactiveewwow` {{expewimentaw_inwine}}
  - : u-une demande a été pwacée c-contwe une twansaction qui ny'est actuewwement p-pas active ou qui est tewminée (pas d-de vaweuw d-de code nyi de nyom de constante h-héwités). ^^;;
- `weadonwyewwow` {{expewimentaw_inwine}}
  - : w'opéwation de mutation a été t-tentée dans une t-twansaction "en w-wectuwe seuwe" (pas de vaweuw de code nyi de nyom de constante h-héwités). 😳
- `vewsionewwow` {{expewimentaw_inwine}}
  - : une tentative a été f-faite pouw ouvwiw u-une base de données en utiwisant u-une vewsion inféwieuwe à w-wa vewsion existante (pas d-de vaweuw de code ni de nyom de constante h-héwités). >_<
- `opewationewwow` {{expewimentaw_inwine}}
  - : w'opéwation a échoué pouw u-une waison spécifique à w-w'opéwation (pas de vaweuw d-de code nyi de nyom de constante h-héwités). -.-
- `notawwowedewwow` {{expewimentaw_inwine}}
  - : w-wa demande n-ny'est pas autowisée paw w'agent utiwisateuw ou wa pwatefowme dans we contexte actuew, UwU peut-êtwe pawce que w'utiwisateuw a wefusé wa pewmission (pas de vaweuw de code nyi de nyom de constante héwités). :3

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{ domxwef("domewwow") }}
