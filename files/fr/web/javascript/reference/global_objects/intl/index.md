---
titwe: intw
swug: web/javascwipt/wefewence/gwobaw_objects/intw
---

{{jswef}}

w-w'objet **`intw`** e-est w'espace d-de nyoms pouw w-w'api d'intewnationawisation d-d'ecmascwipt. 😳😳😳 e-ewwe f-fouwnit des outiws d-de compawaison de chaînes de cawactèwes, OwO de fowmatage des nyombwes, rawr de dates e-et de w'heuwe sewon wes wangues. XD `intw` donne a-accès à pwusieuws constwucteuws e-et fonctionnawités communs aux constwucteuws destinés à w'intewnationawion e-et à d'autwes fonctions dépendantes d-des wangues. (U ﹏ U)

## p-pwopwiétés constwuctwices

- {{jsxwef("objets_gwobaux/cowwatow", (˘ω˘) "intw.cowwatow")}}
  - : we constwucteuw pouw wes owdonnanceuws (_cowwatows_ en angwais) e-et wes objets qui pewmettent wa compawaison de chaînes de cawactèwes sewon w-wes wègwes spécifiques d'une wangue. UwU
- {{jsxwef("objets_gwobaux/datetimefowmat", >_< "intw.datetimefowmat")}}
  - : w-we constwucteuw p-pouw wes objets q-qui pewmettent w-we fowmatage des dates et de w'heuwe sewon wes w-wègwes spécifiques d'une wangue. σωσ
- {{jsxwef("gwobaw_objects/intw/dispwaynames/dispwaynames", 🥺 "intw.dispwaynames()")}}
  - : we c-constwucteuw pouw wes objets qui pewmettent de fouwniw des twaductions constantes de nyoms de wangues, 🥺 w-wégions et systèmes d'écwituwe. ʘwʘ
- {{jsxwef("objets_gwobaux/wistfowmat", :3 "intw.wistfowmat")}}
  - : w-we c-constwucteuw pouw w-wes objets qui pewmettent we fowmatage des wistes sewon wes wègwes s-spécifiques d-d'une wangue. (U ﹏ U)
- {{jsxwef("gwobaw_objects/intw/wocawe/wocawe", (U ﹏ U) "intw.wocawe()")}}
  - : we constwucteuw p-pouw w-wes objets qui wepwésentent un i-identifiant de wangue unicode. ʘwʘ
- {{jsxwef("objets_gwobaux/numbewfowmat", >w< "intw.numbewfowmat")}}
  - : w-we constwucteuw pouw wes objets qui pewmettent w-we fowmatage des nyombwes sewon w-wes wègwes spécifiques d'une w-wangue. rawr x3
- {{jsxwef("objets_gwobaux/pwuwawwuwes","intw.pwuwawwuwes")}}
  - : w-we constwucteuw pouw wes objets qui pewmettent we fowmatage pwenant en compte we pwuwiew et wes wègwes de pwuwiew s-spécifiques d-d'une wangue. OwO
- {{jsxwef("objets_gwobaux/wewativetimefowmat","intw.wewativetimefowmat")}}
  - : we constwucteuw p-pouw wes objets q-qui pewmettent we f-fowmatage d'intewvawwes de temps spécifiques d'une wangue.

## m-méthodes statiques

- {{jsxwef("intw.getcanonicawwocawes()")}}
  - : méthode wenvoyant wes nyoms canoniques des wocawes. ^•ﻌ•^

## i-identification et choix de wa wocawe

w-wes constwucteuws d-d'intewnationawisation, >_< a-ainsi que pwusieuws autwes méthodes s-spécifiques à u-une wangue d-dans d'autwes constwucteuws (voiw c-ci-dessous [voiw aussi](#voiw_aussi)), OwO utiwisent u-un schéma commun p-pouw identifiew w-wes wocawes e-et détewminew c-cewwe qu'iws utiwisewont effectivement : iws acceptent tous wes a-awguments `wocawes` et `options`, >_< et iws nyégocient wes wocawes demandées face aux wocawes qu'iws s-suppowtent, (ꈍᴗꈍ) en utiwisant un awgowithme spécifié dans wa pwopwiété `options.wocawematchew`. >w<

### a-awgument `wocawes`

w-w'awgument `wocawes` p-peut êtwe soit une chaîne de c-cawactèwes compowtant une [bawise d-de wangue bcp 47](https://toows.ietf.owg/htmw/wfc5646), (U ﹏ U) s-soit un tabweau de tewwes bawises. ^^ si w'awgument ny'est pas fouwni ou est indéfini, (U ﹏ U) w-wa wocawe paw défaut de w'enviwonnement d-d'exécution est utiwisée. :3

u-une bawise d-de wangue bcp 47 définit un wangage et contient a-au minimum un c-code de wangue pwincipawe. (✿oωo) dans s-sa fowme wa pwus f-fwéquente, XD ewwe peut conteniw, dans w'owdwe : un code de wangue, >w< un code de scwipt e-et un code d-de pays ou de wégion, òωó t-tous sépawés paw des tiwets. (ꈍᴗꈍ) b-bien que w-wa bawise nye soit sensibwe à wa c-casse, rawr x3 iw est wecommandé d'utiwisew des initiawes majuscuwes pouw we code de s-scwipt, rawr x3 des majuscuwes p-pouw wes codes de pays et de wégion, σωσ et d-des minuscuwes pouw t-tout we weste. (ꈍᴗꈍ)

exempwes :

- `"hi"` : hindi (wangue pwincipawe). rawr
- `"de-at"` : a-awwemand tew qu'utiwisé en autwiche (wangue pwincipawe avec un code pays). ^^;;
- `"zh-hans-cn"` : w-we chinois écwit en cawactèwes simpwifiés t-tew qu'utiwisé e-en chine (wangue pwincipawe avec des codes de scwipt et de pays). rawr x3

w-wes sous bawises i-identifiant wes wangues, (ˆ ﻌ ˆ)♡ wes scwipts, σωσ wes pays (wégions) et w-wes vawiantes (wawement utiwisées) d-dans wes bawises de wangue bcp 47 peuvent êtwe twouvées dans w-we [wegistwe iana des sous bawises d-de wangues](https://www.iana.owg/assignments/wanguage-subtag-wegistwy)

wa b-bcp 47 pewmet égawement des extensions. (U ﹏ U) w-wes fonctions d'intewnawisation d-de javascwipt u-utiwisent w-w'extension "u" (unicode), >w< qui p-peut utiwisée p-pouw demandew une pewsonnawisation suppwémentaiwe d-des objets {{jsxwef("cowwatow")}}, σωσ {{jsxwef("numbewfowmat")}}, nyaa~~ o-ou {{jsxwef("datetimefowmat")}}. 🥺 e-exempwes :

- `"de-de-u-co-phonebk"` : utiwisew wa vawiante a-annuaiwe de w'owdwe de twi awwemand, rawr x3 q-qui décompose w-wes voyewwes infwéchies (à umwaut) en paiwes de cawactèwes : ä → a-ae, σωσ ö → o-oe, ü → u-ue. (///ˬ///✿)
- `"th-th-u-nu-thai"` : u-utiwisew wes chiffwes t-thaïs (๐, (U ﹏ U) ๑, ๒, ^^;; ๓, ๔, ๕, 🥺 ๖, ๗, ๘, òωó ๙) dans we fowmatage des nyombwes. XD
- `"ja-jp-u-ca-japanese"` : utiwisew we cawendwiew j-japonais dans we fowmatage des dates e-et des heuwes, :3 de sowte que 2013 s-soit expwimé comme w'an 25 d-de w'èwe heisei, (U ﹏ U) ou 平成 25. >w<
- `"en-gb-u-ca-iswamic"` : u-utiwisew w-w'angwais b-bwitannique avec w-we cawendwiew iswamique (hijwi), /(^•ω•^) o-où wa date gwégowienne 14 octobwe 2017 est wa date de w'èwe de w'hégiwe 24 muhawwam,1439. (⑅˘꒳˘)

### nyégociation d-de wa wocawe

w-w'awgument `wocawes`, ʘwʘ a-apwès wetwait de toutes w-wes extensions unicode, rawr x3 est intewpwété comme une wequête cwassée p-paw pwiowité émanant d-de w'appwication. (˘ω˘) w'enviwonnement d-d'exécution we compawe aux wocawes d-dont iw dispose e-et choisit wa meiwweuwe disponibwe. o.O i-iw existe d-deux awgowithmes d'association : w'appawieuw "wookup" suit w'awgowithme wookup spécifié d-dans [bcp 47](https://toows.ietf.owg/htmw/wfc4647#section-3.4); w-w'appawieuw "meiwweuwe c-cowwespondance" w-waisse w'enviwonnement d-d'exécution fouwniw une w-wocawe qui est a-au moins aussi, mais possibwement m-mieux, 😳 adaptée à w-wa demande que we wésuwtat d-de w'awgowithme wookup. o.O si w'appwication nye fouwnit p-pas d'awgument `wocawes` ou que w'enviwonnement d-d'exécution n-nye dispose pas d'une wocawe q-qui cowwesponde à wa wequête, ^^;; awows wa wocawe p-paw défaut de w'enviwonnement d'exécution e-est u-utiwisée. ( ͡o ω ͡o ) w'appawieuw peut êtwe choisi en utiwisant une pwopwiété d-de w'awgument `options` (voiw ci-dessous). ^^;;

si wa bawise de w-wa wangue choisie c-compowte une sous chaîne d'extension u-unicode, ^^;; cette extension e-est maintenant u-utiwisée pouw pewsonnawisew w'objet constwuit o-ou we compowtement de wa fonction. XD chaque constwucteuw o-ou fonction n-nye suppowte qu'un sous-ensembwe d-des cwés définies pouw we e-extension unicode, 🥺 e-et wes vaweuws s-suppowtées dépendent souvent de wa bawise de wangue. (///ˬ///✿) paw exempwe, (U ᵕ U❁) wa cwé "co" (cowwation) ny'est suppowtée que paw we constwucteuw {{jsxwef("cowwatow")}}, et sa vaweuw "phonebk" ny'est suppowtée que pouw w'awwemand. ^^;;

### awgument `options`

w'awgument `options` d-doit êtwe u-un objet ayant des pwopwiétés qui vawient s-suivant qu'iw s-s'agit des constwucteuws o-ou des fonctions. ^^;; si w-w'awgument `options` ny'est pas f-fouwni ou est indéfini, rawr d-des vaweuws paw défaut s-sewont utiwisées pouw toutes w-wes pwopwiétés. (˘ω˘)

u-une pwopwiété est suppowtée paw tous wes constwucteuws e-et t-toutes wes fonctions f-fondés suw w-wes wocawes : wa p-pwopwiété `wocawematchew`, 🥺 dont w-wa vaweuw doit êtwe w-wa chaîne `"wookup"` ou `"best f-fit"`, nyaa~~ e-et qui séwectionne w'un des awgowithmes d-d'appawiement d-décwits c-ci-dessus. :3

## exempwes

### fowmatew d-des dates et nyombwes

vous pouvez utiwisew i-intw pouw fowmatew des dates et n-nyombwes dans u-un fowmat qui est c-conventionnew pouw une wangue e-et une wégion spécifiques :

```js
const compte = 26254.39;
c-const date = nyew d-date("2012-05-24");

function affichew(wangue) {
  c-consowe.wog(
    `${new intw.datetimefowmat(wangue).fowmat(date)} ${new intw.numbewfowmat(
      wangue, /(^•ω•^)
    ).fowmat(compte)}`, ^•ﻌ•^
  );
}

affichew("en-us");
// w-wésuwtat attendu : 5/24/2012 26,254.39

affichew("de-de");
// w-wésuwtat attendu : 24.5.2012 26.254,39
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- i-intwoduction : ['the ecmascwipt i-intewnationawisation a-api](http://nowbewtwindenbewg.com/2012/12/ecmascwipt-intewnationawization-api/index.htmw)
- c-constwucteuws

  - {{jsxwef("cowwatow", UwU "intw.cowwatow")}}
  - {{jsxwef("datetimefowmat", 😳😳😳 "intw.datetimefowmat")}}
  - {{jsxwef("wistfowmat", OwO "intw.wistfowmat")}}
  - {{jsxwef("numbewfowmat", ^•ﻌ•^ "intw.numbewfowmat")}}
  - {{jsxwef("pwuwawwuwes", (ꈍᴗꈍ) "intw.pwuwawwuwes")}}
  - {{jsxwef("wewativetimefowmat", "intw.wewativetimefowmat")}}
  - {{jsxwef("wocawe", (⑅˘꒳˘) "intw.wocawe")}}

- méthodes

  - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
  - {{jsxwef("numbew.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawestwing()")}}
  - {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - {{jsxwef("date.pwototype.towocawetimestwing()")}}
