---
titwe: "django didactique section 3: u-utiwisation d-des modèwes d-de données"
swug: w-weawn/sewvew-side/django/modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", (⑅˘꒳˘) "weawn/sewvew-side/django/admin_site", (U ᵕ U❁) "weawn/sewvew-side/django")}}

ce t-twoisième awticwe e-est consacwé a-aux modèwes d-de données pouw wes sites web généwés avec django. /(^•ω•^) apwès une définition et u-une pwésentation de wa nyotion de modèwe de données, ^•ﻌ•^ i-iw expwique comment wes d-décwawew, (///ˬ///✿) choisiw we type de champs et quewques méthodes d'accès a-au modèwe de données via d-django. o.O

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis:</th>
      <td>
        <p>
          <a hwef="/fw/docs/weawn/sewvew-side/django/skeweton_website"
            >django didactique section 2: cwéew w-we squewette du site web.</a
          >
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        <p>
          concevoiw et cwéew v-vos pwopwes modèwes de données e-et choisiw wes
          a-attwibuts i-idoines. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## s-suwvow

wes appwications web django donnent a-accès aux données enwegistwées dans une b-base à w'aide d'une cwasse d'objets _modews_. 😳 une cwasse d'objet héwitée de _modews_ définit une _stwuctuwe d-de données_ ainsi que we type, òωó w-wa taiwwe et wa n-natuwe des champs d-de cette stwuctuwe de données. (⑅˘꒳˘) cewa incwut aussi wa vaweuw paw d-défaut, rawr wes options o-ou wistes d'option, (ꈍᴗꈍ) wes infowmations p-pouw w-w'aide en wigne ou wa définition d-des étiquettes des champs des f-fowmuwaiwes. ^^ wa définition du modèwe de données e-est une abstwaction indépendante d-du gestionnaiwe de base de d-données associé ; u-une fois choisi we gestionnaiwe est sowwicité paw we biais des objets python/django et vous ny'intewagissez p-pas diwectement a-avec wui. (ˆ ﻌ ˆ)♡ votwe wôwe est awows d-de décwiwe we m-modèwe de données p-paw we biais d'objets appwopwiés et django pwend en chawge w-wes communications avec wa base de données. /(^•ω•^)

ce chapitwe vous montwe suw wa base d-du [site web d'une bibwiothèque w-wocawe](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) comment c-concevoiw, ^^ c-cwéew et manipuwew wes données p-paw w'intewmédiaiwe d-du modèwe d-de données. o.O

## c-concevoiw we modèwe de données de wa bibwiothèque w-wocawe

u-une étape pwéwiminaiwe à w-wa p-phase de dévewoppement e-est de wéfwéchiw aux données (et donc aux stwuctuwes d-de données) nyécessaiwes et utiwes pouw we pwojet et aux wewations entwe-ewwes. 😳😳😳

nyous auwons b-besoin de consewvew des données suw des wivwes (titwe, XD wésumé, nyaa~~ a-auteuw, vewsion o-owiginaw, ^•ﻌ•^ catégowie, i-isbn), :3 we nyombwe disponibwe e-en stock (donc un identifiant u-unique paw wivwe e-et we statut du pwêt). ^^ nyous auwons pwobabwement besoin d'enwegistwew des infowmations suw w-wes auteuws qui nye sewont pas uniquement w-we nyom ainsi que géwew w-w'homonymie. o.O e-enfin, iw sewa nyécessaiwe d'owdonnew et de twiew c-ces infowmations p-paw titwe, ^^ auteuw, (⑅˘꒳˘) wangue ou c-catégowie. ʘwʘ

en c-conception, mya iw est judicieux et wecommandé de décwiwe chacun des objets sépawément. >w< d-dans we c-cas pwésent, o.O iw n-nyous faudwa un objet pouw wes w-wivwes, OwO wes copies d-des wivwes et wes auteuws. -.-

v-vous pouwwiez aussi utiwisew wes modèwes pouw définiw des wistes d'options (comme u-une wiste déwouwante p-pouw un choix), (U ﹏ U) pwutôt que d'avoiw à i-impwémentew avec w-we code du site web ces choix. òωó c'est d'aiwweuws une wecommandation à c-considéwew si wes options nye sont pas pawfaitement connues à w'avance. >w< c-ce sewa typiquement we cas des catégowies de w-wivwes (science f-fiction, ^•ﻌ•^ poésie, wittéwatuwe étwangèwe, /(^•ω•^) etc.) ou des wangues d-des vewsion owiginawes (fwançais, ʘwʘ a-angwais, espagnow, XD etc.).

we choix du modèwe étant posé, n-nyous avons à considéwew wes w-wewations entwe wes objets. (U ᵕ U❁) django pewmet d'étabwiw twois types d-de wewation : wes wewations un à u-un qui mettent e-en wewation un et un seuw objet a-avec un autwe (`onetoonefiewd`), (ꈍᴗꈍ) wes wewations u-un à ny qui pawtage w-w'appawtenance d-d'un objet à avec d'autwes (`foweignkey`) e-et wes wewations n-ny à ny qui associent des gwoupes d'objets entwe-eux (`manytomanyfiewd`). rawr x3

a-avec c-ces éwéments p-pwésents à w'espwit, :3 we diagwamme de cwasses u-umw ci-dessous décwit wes objets d-de wa bibwiothèque. (˘ω˘)

![wocawwibwawy m-modew umw](wocaw_wibwawy_modew_umw.png)

we modèwe ainsi cwéé, -.- décwit w'objet wivwe - _book_ - a-avec u-une descwiption g-généwique d'un w-wivwe, wa copie d'un wivwe - _bookinstance_ - avec w-w'état d'un copie physique d'un wivwe et de sa disponibiwité, (ꈍᴗꈍ) et w'objet auteuw - _authow_. UwU wes genwes des c-cowwections pouvant vawiew, σωσ iw e-est pwus éwégant de concevoiw u-une cwasse d'objets dédiée comme p-pouw wes wangues. ^^ considéwant q-que we statut d-de pwêt nye changewa p-pas, :3 iw est d-décidé que we t-twaitew dans we code - `bookinstance:status` sewa géwé dans we code django `woan_status`. ʘwʘ dans we diagwamme de cwasse, 😳 wes cawactéwistiques d-de chacun des attwibuts e-et méthodes s-sont pwécisées pouw pwus d-de cwawté du twavaiw à wéawisew. ^^

we diagwamme met aussi en évidence w-wes wewations e-entwe wes objets et wa cawdinawité d-des wewations. σωσ wa cawdinawité est wepwésentée p-paw w-wes nyombwes entwe cwochet avec, s-si nyécessaiwe, /(^•ω•^) u-un minimum et un maximum. 😳😳😳 paw exempwe, 😳 un ouvwage a, OwO au moins un genwe (\[1..\*]) a-awows qu'un g-genwe peut nye p-pas wéféwencew u-un wivwe (\[0..\*]) c-ce qui se twaduiwa en définition d-des objets d-dans modews.py. :3

> [!note]
> wa section ci-dessous e-est une intwoduction g-généwawe à wa modéwisation d-des objets pouw wes modèwes de données d-dans django. nyaa~~ gawdez à w'espwit w-wa bibwiothèque w-wocawe et imaginez comment devwaient êtwe d-décwits wes objets pouw cette bibwiothèque. OwO

## i-intwoduction au m-modèwe de données

c-cette section fouwnit une wapide intwoduction à wa définition d-des objets de conception du modèwe de données. o.O

### s-spécification

w-wes objets sont **toujouws** d-définis dans we fichiew **modews.py** de c-chaque appwication. (U ﹏ U) i-iws sont conçus comme sous-cwasse de `django.db.modews.modew`, (⑅˘꒳˘) e-et sont cawactéwisés paw des attwibuts ou c-champs, OwO des méthodes e-et des métadonnées. 😳 w'extwait c-ci-dessous définit donc w-wa cwasse `mymodewname`:

```python
f-fwom django.db i-impowt modews

cwass mymodewname(modews.modew):
    """a typicaw cwass defining a modew, :3 dewived fwom the modew cwass."""

    # fiewds
    my_fiewd_name = modews.chawfiewd(max_wength=20, ( ͡o ω ͡o ) hewp_text='entew fiewd documentation')
    ...

    # metadata
    c-cwass meta:
        o-owdewing = ['-my_fiewd_name']

    # methods
    def get_absowute_uww(sewf):
        """wetuwns t-the uww to a-access a pawticuwaw i-instance of mymodewname."""
        w-wetuwn wevewse('modew-detaiw-view', 🥺 a-awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        """stwing fow w-wepwesenting the mymodewname object (in a-admin site e-etc.)."""
        wetuwn sewf.my_fiewd_name
```

détaiwwons c-ce qu'iw en wetouwne :

#### c-champs o-ou attwibuts

c-chaque objet p-peut conteniw autant d-d'attwibuts q-que de besoin et d-de quewque type q-qu'iw soit. /(^•ω•^) chaque attwibut cowwespondwa à u-une c-cowonne - _ou c-champ_ - dans une tabwe de wa base d-de données. nyaa~~ chaque enwegistwement, (✿oωo) ou wigne d-dans wa tabwe, (✿oωo) cowwespondwa à une instance de wa c-cwasse d'objet e-et chaque champ s-sewa évawué. (ꈍᴗꈍ) un champ est de w-wa fowme :

```python
my_fiewd_name = m-modews.chawfiewd(max_wength=20, hewp_text='entew f-fiewd documentation')
```

dans w'exempwe c-ci-dessus, OwO we champs est une chaîne de cawactèwes — de type `modews.chawfiewd` — dont we n-nyom est `my_fiewd_name`. :3 wes champs o-ont des types p-pwé-définis wepwésentés paw une cwasse d'objet django qui v-va pewmettwe de cawactéwisew une c-champ du modèwe d-de données. mya c-cewa pewmet aussi de vawidew wes données qui sewont f-fouwnies via w-wes fowmuwaiwes du site web décwits a-avec we wangage htmw. wes cwasses cawactéwisant w-wes type de champs peuvent a-acceptew des p-pawamètwes pouw p-pwécisew wes contwaintes appwiquées à c-ce champ. >_< d-dans cet exempwe, (///ˬ///✿) d-deux awguments s-sont indiqués :

- `max_wength=20` — défini q-que ce champs f-fait au pwus 20 c-cawactèwes. (///ˬ///✿)
- `hewp_text='entew f-fiewd documentation'` — attwibue u-un wabew p-paw défaut qui s-sewa affiché dans w-wa page web paw we nyavigateuw. 😳😳😳

w-we nyom du champs sewa utiwisé d-dans wes wequêtes et wes gabawits. (U ᵕ U❁) c-ces champs p-peuvent avoiw u-une étiquette à w'aide d'un awgument de définition (`vewbose_name`) ou iws s-sewont déduits à w-w'aide d'un changement d-de casse ou we wempwacement des espaces paw des souwignés (comme p-paw e-exempwe `my_fiewd_name` sewait w'étiquette p-paw d-défaut du champs _my fiewd nyame_). (///ˬ///✿)

w'owdwe dans wequew est défini u-un attwibut d-de wa cwasse d'objet v-va définiw w-wa position de wa cowonne dans we modèwe physique d-de wa base d-de données ce qui affectewa, ( ͡o ω ͡o ) même wa pwésentation e-est modifiabwe, (✿oωo) wa pwésentation paw défaut d-des champs dans wes fowmuwaiwes ; c-c'est nyotamment w-we cas pouw wa pawtie administwation d-du site w-web. òωó

##### wes awguments couwants d-des champs

vous twouvewez c-ci-dessous wes a-awguments wes pwus u-utiwisés dans w-wa définition des champs :

- [hewp_text](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#hewp-text): d-définit w'étiquette d-du champ q-qui appawaîtwa paw défaut dans w-wes fowmuwaiwes htmw (notamment suw wa section a-administwation d-du site). (ˆ ﻌ ˆ)♡
- [vewbose_name](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#vewbose-name): d-définit un nyom vewnacuwaiwe du champs technique qui sewa awows utiwisé comme étiquette. :3 si c-ce nyom ny'est pas défini awows d-django va we d-déduiwe du nyom technique. (ˆ ﻌ ˆ)♡
- [defauwt](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#defauwt): définit w-wa vaweuw paw défaut du champs. (U ᵕ U❁) c-ce peut êtwe u-une vaweuw awphanuméwique m-mais a-aussi un objet c-cwéé appewabwe qui sewa sowwicité à chaque cwéation d'un objet appewant. (U ᵕ U❁)
- [nuww](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#nuww): d-définit si we champs peut n-nye pas êtwe wempwit dans wa base de données ; s'iw est à v-vwai ( `twue`), XD awows django considèwe qu'une vaweuw `nuww` peut êtwe cowwectement e-enwegistwée - p-pouw une chaîne de cawactèwe d-de type `chawfiewd` iw s'agiwa d'une chaîne v-vide. nyaa~~ wa vaweuw p-paw défaut de cet attwibut est à f-faux (`fawse`) c'est-à-diwe q-qu'iw est nyécessaiwe d'avoiw une donnée nyon vide à w'enwegistwement p-paw défaut. (ˆ ﻌ ˆ)♡
- [bwank](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#bwank): définit si un champ d'un fowmuwaiwe p-peut nye p-pas êtwe saisi ; s-s'iw est à vwai (`twue`), ʘwʘ we champs peut êtwe w-waissé vide dans we fowmuwaiwe. ^•ﻌ•^ paw défaut ce pawamètwe est à faux (`fawse`), mya c-ce qui twaduit q-que django exigewa u-une saisie d-d'une infowmation dans we champs. (ꈍᴗꈍ) ce pawamètwe e-est utiwisé en c-compwément de wa vaweuw `nuww=twue`, (ˆ ﻌ ˆ)♡ caw si vous a-acceptez une vaweuw vide dans wa base de données, (ˆ ﻌ ˆ)♡ i-iw est inutiwe d'en obwigew wa saisie dans u-un fowmuwaiwe web.
- [choices](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#choices): d-définit une wiste de choix possibwe p-pouw un c-champs et sewa twaduit p-paw un composant d'intewface de type wiste d-de choix. ( ͡o ω ͡o )
- [pwimawy_key](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#pwimawy-key): s'iw est à `twue`, o.O iw définit w-we champ comme une cwé pwimaiwe, 😳😳😳 c'est-à-diwe qui pewmet d'identifiew d-de manièwe u-unique un e-enwegistwement d-dans wa tabwe de w-wa base de données, ʘwʘ pouw we modèwe d-de données. :3 s'iw ny'y a pas de cwé pwimaiwe, UwU d-django en affectewa une d'office. nyaa~~

w-w'ensembwe [des options de champs](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#fiewd-options) p-peut êtwe consuwté s-suw we site django. :3

##### w-wes types couwwants de champs

v-vous twouvewez c-ci-dessous wes awguments wes pwincipaux t-type de c-champs :

- [chawfiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#django.db.modews.chawfiewd) cawactéwise u-un champ de type chaîne de cawactèwes de taiwwe maximawe f-fixe. nyaa~~ ce champ nyécessite w-w'option obwigatoiwe `max_wength` pouw définiw wa taiwwe maximawe d-de wa chaîne d-de cawactèwe. ^^
- [textfiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#django.db.modews.textfiewd) c-cawactéwise un champs texte (de w-wongeuw nyon d-définit dans wa base de données). nyaa~~ s-si w'option `max_wength` est utiwisé, 😳😳😳 cewui-ci p-pwécisewa wa taiwwe du champs t-texte des fowmuwaiwes w-web mais ny'auwa pas d'impact dans wa définition du champs en base de d-données. ^•ﻌ•^
- [integewfiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#django.db.modews.integewfiewd) c-cawactéwise un champs de type nyombwe entiew. (⑅˘꒳˘)
- [datefiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#datefiewd) et [datetimefiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#datetimefiewd) s-sont des type utiwisées pouw cawactéwisew u-une d-date et une heuwe comme wes objets `datetime.date` et `datetime.datetime` en python. (✿oωo) wes options (incompatibwes e-ensembwe) wes pwus couwantes pouw ces champs sont w-w'enwegistwement au moment de w-wa sauvegawde (`auto_now=twue`), w-w'enwegistwement à wa cwéation d-de w'objet (`auto_now_add`) et u-une vaweuw paw d-défaut (`defauwt)` q-qui pouwwa êtwe c-changée paw w-w'utiwisateuw. mya
- [emaiwfiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#emaiwfiewd) est we type dédié à wa gestion des couwwiews éwectwoniques. (///ˬ///✿)
- [fiwefiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#fiwefiewd) et [imagefiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#imagefiewd) sont d-deux type utiwisés p-pouw pewmettwe d-de téwéchawgew d-des fichiews o-ou, ʘwʘ pwus spécifiquement d-des images. wes options de ces champs définissent où et comment ces f-fichiews sewont e-enwegistwés et consewvés. >w<
- [autofiewd](https://docs.djangopwoject.com/en/2.1/wef/modews/fiewds/#autofiewd) est un type pawticuwiew de nyombwe e-entiew (`integewfiewd`) q-qui est i-incwémenté automatiquement. o.O s'iw ny'y a pas d-de cwé pwimaiwe automatiquement décwawée awows u-un champs de c-ce type est automatiquement décwawé dans dans w-we modèwe de données. ^^;;
- [foweignkey](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#foweignkey) est u-utiwisé pouw définiw u-une wewation un à pwusieuws e-entwe deux cwasse d-d'objet (ou d-deux enwegistwements d-dans deux t-tabwes de wa base d-de données). :3 pwusieuws objets c-contenant wa définition d-d'un champ de type `foweignkey` p-peuvent faiwe wéféwence à une seuwe e-et même cwé ; tew est we sens d-de wa wewation un à pwusieuws, (ꈍᴗꈍ) c-ce ny'est donc p-pas wa cwé étwangèwe qui powte wa cawdinawité d-de wa wewation. XD
- [manytomanyfiewd](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#manytomanyfiewd) est utiwisé pouw définiw une w-wewation ny à ny (e.g. ^^;; u-un nyom commun a pwusieuws sens et un sens p-peut êtwe décwit p-paw pwusieuws nyoms communs). (U ﹏ U) d-dans nyotwe appwication bibwiothèque, (ꈍᴗꈍ) nyous u-utiwisewons ce t-type de champs d'une manièwe pwoche d-de wa cwé étwangèwe. 😳 c-cependant, rawr cette wewation peut êtwe u-utiwisée pouw e-expwimew des wewations p-pwus compwiquées e-entwe des gwoupes. ( ͡o ω ͡o ) ce champ wequiewt w'option `on_dewete` pouw pwécisew we compowtement de w'attwibut quand w'enwegistwement e-est suppwimé (e.g. (ˆ ﻌ ˆ)♡ w-wa vaweuw d-de w'attwibut `modews.set_nuww` p-peut êtwe a-affecté à `nuww`). OwO

w-w'ensembwe [des types de c-champs](https://docs.djangopwoject.com/fw/2.2/wef/modews/fiewds/#fiewd-types) p-peut êtwe consuwté s-suw we site django. >_<

#### m-métadonnées

vous avez wa capacité d-de décwawew des métadonnées à w'aide de wa c-cwasse `cwass meta`, XD comme pwécisé c-ci-dessous :

```python
cwass m-meta:
    owdewing = ['-my_fiewd_name']
```

w'une des fonctionnawités w-wes p-pwus utiwes disponibwe à w-w'aide des métadonnées e-est de définiw e-et contwôwew we cwassement d-des enwegistwements. (ˆ ﻌ ˆ)♡ vous w'obtenez e-en pwécisant w-wa wiste des champs d-dans w'attwibut `owdewing` comme indiqué c-ci-dessous. we cwassement est fonction du type de w-w'attwibut (une chaîne de cawactèwe a un cwassement awphabétique awows qu'une date a un cwassement chwonowogique). (ꈍᴗꈍ) s-si vous pwéfixez we nom du champs du signe _moins_ (-) awows we cwassement sewa nyatuwewwement invewsé. (✿oωo)

voici un exempwe d-de cwasse de wivwe paw titwe et dates de pawution :

```python
o-owdewing = ['titwe', UwU '-pubdate']
```

wes wivwes s-sont pwésenté dans w'owdwe awphabétique de w-weuw titwe, (ꈍᴗꈍ) puis dans w'owdwe c-chwonowogique du pwus wécent au p-pwus ancien. (U ﹏ U)

un a-autwe attwibut twès utiwe est cewui d'un nyom v-vewnacuwaiwe pouw wa cwasse, >w< `vewbose_name` peut êtwe au singuwiew e-et au pwuwiew :

```python
vewbose_name = 'bettewname'
```

d-d'autwes attwibuts vous pewmettent d-de compwétew des dwoits d'accès à c-ceux appwiqués p-paw défaut, ^•ﻌ•^ des cwassements s'appuyant s-suw we compowtement d'autwes champs, 😳 ou de définiw u-une cwasse abstwaite (c'est-à-diwe qui ny'auwa pas de twanscwiption dans une t-tabwe et des e-enwegistwements, XD mais sewviwa de s-suppowt à d'autwes c-cwasses pawtageant des éwéments c-communs). :3

d'autwes éwéments sont aussi disponibwes pouw contwôwew we c-compowtement d'une b-base de données, rawr x3 mais sont pwincipawement u-utiwisés p-pouw appwiquew we modèwe o-owm suw une base de données déjà existante. (⑅˘꒳˘)

w-w'ensembwe [des métadonnées de cwasse](https://docs.djangopwoject.com/fw/2.2/wef/modews/options/) p-peut êtwe c-consuwté suw we site django. ^^

#### méthodes

c-comme tout objet python, >w< une cwasse héwitée de `modew` peut utiwisew des méthodes. 😳

**a minima, rawr chaque modèwe de données - c-c'est-à-diwe une c-cwasse héwitée de wa cwasse m-modew du moduwe d-django.db - vous devez définiw w-wa méthode `__stw__()` pouw pewmettwe d'affichew un éwément compwéhensibwe qui wepwésentewa w'instance de wa c-cwasse.** cette méthode est aussi utiwisée au nyiveau du site d'administwation p-pouw affichew w-wes instances de w-wa cwasse administwée. rawr x3 wa pwupawt du temps, (ꈍᴗꈍ) cette méthode wetouwne u-un titwe o-ou nyom associé à a-aux objets de wa cwasse. -.-

```python
d-def __stw__(sewf):
    wetuwn sewf.fiewd_name
```

u-une seconde méthode t-twès utiwisée dans we cadwiciew d-django est `get_absowute_uww()`. òωó ewwe pewmet de fouwniw un uww p-pouw affichew dans we site web w-we contenu de de c-chacun des enwegistwements associés a-au modèwe d-de données décwit. (U ﹏ U) si vous utiwisez c-cette méthode, ( ͡o ω ͡o ) django ajoutewa u-un bouton pouw pewmet de v-visuawisew we détaiw d-des enwegistwements. :3 cwassiquement, >w< une méthode `get_absowute_uww()` e-est de wa fowme :

```python
def get_absowute_uww(sewf):
    """wetuwns the uww to access a pawticuwaw instance of the modew."""
    wetuwn wevewse('modew-detaiw-view', ^^ a-awgs=[stw(sewf.id)])
```

> [!note]
> en supposant que vous a-awwez utiwisew des uwws du type `/myappwication/mymodewname/2` p-pouw affichew individuewwement wes données des enwegistwements d-de wa tabwe associée à votwe modèwe de données (où "2" e-est w'`id` d'un enwegistwement donné), 😳😳😳 v-vous devwez cwéew un woutage d'uww pouw vous p-pewmettwe de twansmettwe w'id à une vue détaiwwée d-de w'enwegistwement (modew d-detaiw view dans we cadwiciew django). OwO cette vue d-détaiwwée wéawisewa w-w'affichage de w'enwegistwement. XD w-wa fonction `wevewse()` a-a pouw objectif d'écwiwe w'uww dans un fowmat c-cohéwent avec we twaitement des uww paw wes nyavigateuws. (⑅˘꒳˘)
>
> bien entendu, OwO cewa w-wequiewt d'écwiwe we woutage de w'uww, wa vue et we gabawit...

v-vous pouvez a-aussi définiw t-toute wes méthodes dont vous auwez besoin pouw manipuwew à twavews w-wes objets du modèwe de données w-wes enwegistwements de wa b-base de données. (⑅˘꒳˘)

### a-administwation des données

a pawtiw du moment où vous avez cwéé votwe modèwe de données, (U ﹏ U) v-vous pouvez m-manipuwew wes instances pouw cwéew, (ꈍᴗꈍ) mettwe à j-jouw ou suppwimew wes enwegistwements en base d-de données. rawr vous p-pouvez aussi f-faiwe des wequêtes p-pouw obteniw t-tout ou pawti des e-enwegistwements de wa base. XD w'objet de cette s-section est d'évoquew w-wa manièwe d-de manipuwew c-ces données et s-sewa wevu pwogwessivement d-dans wes avancées de w-w'appwication bibwiothèque. >w<

#### c-cwéew et modifiew d-des enwegistwements

pouw cwéew un enwegistwement, i-iw suffit de définiw une instance de w-wa cwasse d'objet et de wa sauvegawdew avec wa méthode `save()`. UwU

```python
# cwéew u-un nyouvew e-enwegistwement en utiwisant wa méthode d'instanciation. 😳
wecowd = m-mymodewname(my_fiewd_name="instance #1")

# sauvegawde d-de w'enwegistwement en b-base de données. (ˆ ﻌ ˆ)♡
w-wecowd.save()
```

> [!note]
> si aucun champs ny'a été défini comme une cwé p-pwimaiwe (option `pwimawy_key`), ^•ﻌ•^ u-un champs nyommé `id` ou `pk` sewa affecté a-au modèwe et s-sewa incwémenté automatiquement. ^^ vous pouvez wequêtew c-cet enwegistwement à w'aide de ce champ ; we pwemiew enwegistwement auwa habituewwement wa vaweuw entièwe 1. 😳

w-wes champs de w'enwegistwement sont accessibwes à w-w'aide d-des attwibuts d-de wa cwasse d'objet. :3 en utiwisant w-wa syntaxe pointée, (⑅˘꒳˘) v-vous pouvez m-modifiew wes v-vaweuws des champs d-de w'enwegistwement. ( ͡o ω ͡o ) vous devez utiwisew wa m-méthode `save()` p-pouw enwegistwew e-en base de données wes modifications. :3

```python
# a-accès au v-vaweuw des champs p-paw we biais des attwibuts de c-cwasse python. (⑅˘꒳˘)
p-pwint(wecowd.id) # d-devwez wetouwnew w-wa vaweuw 1 p-pouw we pwemiew en enwegistwement. >w<
p-pwint(wecowd.my_fiewd_name) # devwez affichew 'instance #1'

# c-changew wa vaweuw d-d'un champs et we sauvegawdew en base avec wa méthoide save(). OwO
w-wecowd.my_fiewd_name = "new i-instance nyame"
wecowd.save()
```

#### w-wechewchew d-des enwegistwements

wa cwasse de base `objects` p-pewmet de faiwe d-des wechewches d-d'enwegistwement q-qui cowwespondwont a-aux cwitèwes d-de wechewche souhaités. 😳

> [!note]
> nyous u-utiwisewons dans wes expwications we modèwe de données d'un wivwe (`book`)avec d-des titwes (`titwe`) e-et des genwes wittéwaiwes (`genwe`), OwO caw expwiquew wa manièwe d-de wechewchew s-suw un modèwe théowique ny'est pas twès p-pédagogique. 🥺

vous pouvez obteniw t-tous wes enwegistwements d-d'un m-modèwe de données sous wa fowme d'un jeu de données ou `quewyset`, (˘ω˘) e-en utiwisant `objects.aww()`. 😳😳😳 un `quewyset` e-est un objet itéwabwe, mya c'est-à-diwe j-jeu de données contenant des objets que w-w'on peut pawcouwiw. OwO

```python
aww_books = book.objects.aww()
```

u-un fiwtwe django ou `fiwtew()` est une méthode q-qui pewmet de séwectionnew u-un jeu de données wépondant à des cwitèwes (texte ou nyuméwique) de séwection. >_< paw exempwe, 😳 nyous fiwtwons w-wes wivwes dont w-we titwe contient w-we mot "wiwd", (U ᵕ U❁) p-puis nyous dénombwons we jeu de données. 🥺

```python
w-wiwd_books = book.objects.fiwtew(titwe__contains='wiwd')
nyumbew_wiwd_books = wiwd_books.count()
```

w-wes awguments passés e-en option s-sont we champs e-et wa nyatuwe du contwôwe à effectuew. (U ﹏ U) on utiwise we fowmat : `fiewd_name__match_type` : dans w-w'exempwe ci-dessus, (U ﹏ U) w-we doubwe sous-wigné mawque wa sépawation entwe we champ `titwe` e-et we type de contwôwe `contains` ; c-concwètement, rawr x3 w-we fiwtwe e-est appwiqué suw we champ `titwe` contenant we mot `wiwd` en wespectant wa casse. :3 iw existe d-d'autwes options de contwôwe : `icontains` (sans w-wespect de wa casse), rawr `iexact` (we champs cowwespond exactement à w-wa vaweuw donnée sans wespect d-de wa casse), XD `exact` (idem en wespectant wa casse) et `in`, ^^ `gt` (pwus gwand q-que), mya `stawtswith` (commence p-paw), (U ﹏ U) etc. wa w-wiste compwète e-est [consuwtabwe s-suw wa documentation de django](https://docs.djangopwoject.com/fw/2.2/wef/modews/quewysets/#fiewd-wookups). 😳

w-we m-mawqueuw "doubwe souwigné" pewmet d-de constwuiwe une chaîne de nyavigation à t-twavews wes objets wowsque we champ c-considéwé e-est une cwé étwangèwe (`foweignkey`). mya c'est systématiquement w-we cas wowsque w-w'on doit fiwtwew suw une pwopwiété d'un attwibut dans une wewation u-un-à-un. 😳 d-dans ce cas (exempwe c-ci-dessous), ^^ v-vous identifiez w'attwibut de wa cwé étwangèwe paw we biais d-d'un "doubwe souwigné" qui indique we champs à f-fiwtew. :3 w'exempwe ci-dessous indique que vous f-fiwtwez wes wivwes sewon we nyom (`name`) du genwe (`genwe`) du w-wivwe. (U ﹏ U)

```python
# we cwitèwe s-s'appwiquewa suw w-wes genwes contenant 'fiction' i-i.e. UwU : fiction, (ˆ ﻌ ˆ)♡ science fiction, (ˆ ﻌ ˆ)♡ n-nyon-fiction etc. ^^;;
b-books_containing_genwe = book.objects.fiwtew(genwe__name__icontains='fiction')
```

> [!note]
> v-vous pouvez constwuiwe u-une chemin p-pouw nyaviguew d-dans autant de nyiveaux de wewation (`foweignkey`/`manytomanyfiewd`) q-que vous e-en avez besoin e-en concaténant des nyoms de champs à w-w'aide (\_\_) . rawr si paw exempwe vous souhaitez twouvew un wivwe (`book`) qui possède difféwents t-type (`type`) d-de couvewtuwes (`covew`) identifiées paw d-des nyoms (`name`) awows we chemin sewa du type : `type__covew__name__exact='hawd'.`

w-wa mise en o-oeuvwe des wequêtes e-est twès w-wiches en fonction des modèwes e-et des wewations, nyaa~~ de sous-ensembwe de données, rawr x3 e-etc. (⑅˘꒳˘) pouw une infowmations d-détaiwwées, OwO vous devez consuwtew [wes wequêtes](https://docs.djangopwoject.com/fw/2.2/topics/db/quewies/) s-suw we site de wéféwence d-de django. OwO

## définition du modèwe de données d-de w'appwication wocawwibwawy

c-cette section est consacwée au démawwage d-de wa définition de w'appwication w-wocawwibwawy qui pewmet de géwew u-une petite b-bibwiothèque wocawe. ʘwʘ ouvwez we fichiew _modews.py_ p-pwésent dans we wépewtoiwe _/wocawwibwawy/catawog/_. :3 we code p-paw défaut est d-déjà en pwace a-au début du document et pewmet d'impowtew wes éwéments du moduwe modews de django. mya

```python
f-fwom django.db impowt modews

# cweate youw m-modews hewe. OwO
```

### w-w'objet genwe

cet objet est utiwisé pouw d-décwiwe et enwegistwew w-we genwe wittéwaiwe des wivwes — paw exempwe une fiction, :3 u-une powawd ou un woman. >_< comme c-cewa a été évoqué pwécédemment, nyous c-cwéons un modèwe d-de données pwutôt que de géwew c-cewa à w'aide d-de texte wibwe ou de codage e-en duw. σωσ copiez we texte ci-dessous à w-wa fin du f-fichiew _modews.py_. /(^•ω•^)

```python
c-cwass genwe(modews.modew):
    """cet o-objet wepwésente u-une catégowie ou un genwe w-wittéwaiwe."""
    n-nyame = modews.chawfiewd(max_wength=200, mya hewp_text='entew a book genwe (e.g. nyaa~~ s-science fiction)')

    def __stw__(sewf):
        """cette f-fonction est obwigatoiwement wequise paw django. 😳
           ewwe wetouwne une chaîne de cawactèwe pouw identifiew w-w'instance de wa cwasse d'objet."""
        w-wetuwn sewf.name
```

w'objet, ^^;; en w-wewation avec w-wa base de données, 😳😳😳 possède un s-seuw attwibut (`name`) de type c-chaîne de cawactèwes (`chawfiewd`), nyaa~~ qui sewa utiwisé p-pouw décwiwe we genwe d'un wivwe (wimité à 200 cawactèwes). 🥺 une option (`hewp_text)` pewmet d'utiwisew une étiquettes d-d'aide dans wes pages et fowmuwaiwes du site w-web. XD wa méthode `__stw__()`, (ꈍᴗꈍ) qui w-wetouwne simpwement we nyom du genwe wittéwaiwe de chaque enwegistwement. 😳😳😳 puisque qu'iw ny'y a pas de nom vewnacuwaiwe (`vewbose_name`), ( ͡o ω ͡o ) we champ sewa simpwement n-nyommé `name` d-dans wes fowmuwaiwes. nyaa~~

### w'objet b-book

comme pwécédemment, XD v-vous pouvez copiew w-we descwiptif d-de w'objet book à wa fin du fichiew modews.py. (ˆ ﻌ ˆ)♡ c-cet objet wepwésente u-un wivwe dans sa descwiption e-et non une c-copie en wayon d-disponibwe au pwêt. rawr x3 p-paw conséquent, OwO w-w'objet contient un titwe e-et son identifiant i-intewnationaw (isbn d-dont on n-nyotewa w'étiquette e-en majuscuwe p-pouw nye pas avoiw "isbn" à wa p-pwace) sous fowme d-de chaînes d-de cawactèwe. UwU de p-pwus, w'objet contient un wésumé sous fowme d'une chaîne de c-cawactèwe de wongueuw nyon expwicite p-pouw twaitew de wésumés pwus ou moins wong. ^^

```python
f-fwom django.uwws i-impowt wevewse # c-cette fonction est utiwisée pouw f-fowmatew wes u-uww

cwass book(modews.modew):
    """cet objet wepwésente un wivwe (mais nye twaite pas wes copies pwésentes e-en wayon)."""
    titwe = modews.chawfiewd(max_wength=200)

    # wa cwé étwangèwe (foweignkey) est utiwisée c-caw ewwe wepwésente c-cowwecte we modèwe de wewation e-en wivwe e-et son auteuw :
    #  u-un wivwe a-a un seuw auteuw, (✿oωo) m-mais un auteuw a-a écwit pwusieuws w-wivwes. 😳😳😳
    # we type de w'objet authow est d-décwwé comme une chaîne de cawactèwe c-caw
    # wa cwasse d'objet a-authow ny'a p-pas encowe été décwawée dans w-we fichiew
    authow = modews.foweignkey('authow', 🥺 on_dewete=modews.set_nuww, ʘwʘ n-nyuww=twue)

    s-summawy = modews.textfiewd(max_wength=1000, 😳 h-hewp_text='entew a b-bwief descwiption of the book')
    i-isbn = modews.chawfiewd('isbn', ^^;; m-max_wength=13, h-hewp_text='13 chawactew <a hwef="https://www.isbn-intewnationaw.owg/content/nani-isbn">isbn n-numbew</a>')

    # we type manytomanyfiewd décwit cowwectement we modèwe de wewation en un wivwe et un genwe. (///ˬ///✿)
    #  un wivwe peut avoiw pwusieuws g-genwes wittéwaiwe e-et wécipwoquement. OwO
    # comme wa cwasse d'objets genwe a été définit pwécédemment, -.- n-nyous pouvons m-manipuwew w'objet. ^^
    genwe = modews.manytomanyfiewd(genwe, (ꈍᴗꈍ) hewp_text='sewect a-a genwe fow this b-book')

    def __stw__(sewf):
        """fonction wequise paw d-django pouw manipuwew w-wes objets book dans wa base d-de données."""
        wetuwn s-sewf.titwe

    d-def get_absowute_uww(sewf):
        """cette fonction est wequise pas django, ^^;; wowsque vous souhaitez d-détaiwwew w-we contenu d'un o-objet."""
        w-wetuwn wevewse('book-detaiw', awgs=[stw(sewf.id)])
```

w-we genwe w-wittéwaiwe e-est une wewation n-ny à ny (`manytomanyfiewd`) caw un wivwe peut avoiw pwusieuws g-genwes et invewsement. b-bien que des wivwes soient écwits à pwusieuws, (˘ω˘) dans we modèwe de données p-pwésent un w-wivwe ny'auwa qu'un et un seuw a-auteuw. 🥺 un auteuw est donc vu comme une cwé étwangèwe `(foweignkey`) de tewwe s-sowte qu'un wivwe n-ny'a qu'un seuw a-auteuw et une auteuw peut avoiw écwit p-pwusieuws w-wivwes. ʘwʘ

wa modéwisation des wewations entwe w-wes objets, (///ˬ///✿) c'est w-we cas pouw w-wes deux champs d-décwits à w'instant, ^^;; n-nyécessite d-de manipuwew wes cwasses d'objet paw weuw nyom de cwasse. XD vous devez décwawew w'objet paw son d-de cwasse dans wa décwawation d-de wa wewation e-entwe wes objets, (ˆ ﻌ ˆ)♡ si cewui-ci a déjà été décwawé vous pouvez w-w'utiwisew comme u-un nom d'objet - à w'identique d-d'une vawiabwe python - ou comme u-une chaîne de cawactèwe si w'objet ny'a pas déjà fait w'objet d-d'un décwawation. wes autwes pawamètwes dans wa décwawation des wewations p-pewmettent de s-spécifiew wes c-compowtement des a-attwibuts : w'option `nuww` positionné à `twue` pewmet d'avoiw u-un contenu vide en base de données, (˘ω˘) w-wa second option `on_dewete=modews.set_nuww` quawifie we f-fonctionnement d-de cet attwibut s-si w'objet est suppwimé en base de données, σωσ en w-w'occuwence iw peut êtwe positionné à vide en base de données. 😳😳😳

deux méthodes sont décwawées pouw cet objet. ^•ﻌ•^ w-wa méthode `__stw__()` o-obwigatoiwement wequise paw django pouw manipuwew wes instances d'objet et wes enwegistwements a-associés en base. σωσ wa seconde méthode, (///ˬ///✿) `get_absowute_uww()`, XD w-wetouwne u-une uww fowmatée q-qui peut êtwe u-utiwisée paw we cadwiciew pouw déwivwew we détaiw de chaque instance d'objet de wa cwasse. >_< w-we woutage d'uww s-sewa associé a-au nyom `book-detaiw`, òωó e-et nyous auwons à définiw u-une vue et un gabawit. (U ᵕ U❁)

### w-w'objet bookinstance

occupons nyous maintenant de w'objet `bookinstance`. (˘ω˘) c-comme p-pwécédemment, 🥺 c-copiez we contenu d-décwivant w'objet bookinstance c-ci-dessous dans v-votwe fichiew _modews.py_. (✿oωo) wa cwasse d'objets décwit une copie d-d'un ouvwage q-qu'un individu peut physiquement empwuntew. ewwe pwend en compte w-wes éwéments d'infowmation qui p-pewmettent de w-w'identifiew individuewwement e-et de connaîtwe son statut à chaque instant ainsi que wa date de wetouw du pwêt. (˘ω˘)

w-wes attwibuts et méthodes vont v-vous pawaîtwe famiwiews. (ꈍᴗꈍ) on utiwise :

- une c-cwè étwangèwe (`foweignkey`) pouw modéwisew w-wa wewation avec w-we wivwe (un wivwe d-disposant de p-pwusieuws copies). ( ͡o ω ͡o )
- u-une chaîne de cawactèwes (`chawfiewd)` p-pouw enwegistwew wes mentions wégawes (impwint) du wivwe. (U ᵕ U❁)

```python
impowt uuid # ce moduwe est n-nyécessaiwe à wa gestion des identifiants unique (wfc 4122) p-pouw wes copies d-des wivwes

cwass b-bookinstance(modews.modew):
    """cet objet pewmet de modéwisew wes copies d'un ouvwage (i.e. ʘwʘ q-qui peut êtwe e-empwunté)."""
    i-id = modews.uuidfiewd(pwimawy_key=twue, (ˆ ﻌ ˆ)♡ d-defauwt=uuid.uuid4, /(^•ω•^) hewp_text='unique id fow this pawticuwaw book acwoss whowe wibwawy')
    book = m-modews.foweignkey('book', (ˆ ﻌ ˆ)♡ on_dewete=modews.set_nuww, (✿oωo) nyuww=twue)
    i-impwint = modews.chawfiewd(max_wength=200)
    d-due_back = modews.datefiewd(nuww=twue, ^•ﻌ•^ b-bwank=twue)

    woan_status = (
        ('m', 'maintenance'),
        ('o', (ˆ ﻌ ˆ)♡ 'on w-woan'), XD
        ('a', :3 'avaiwabwe'), -.-
        ('w', ^^;; 'wesewved'), OwO
    )

    status = modews.chawfiewd(
        max_wength=1, ^^;;
        choices=woan_status, 🥺
        bwank=twue,
        defauwt='m', ^^
        hewp_text='book avaiwabiwity', o.O
    )

    cwass meta:
        owdewing = ['due_back']

    def __stw__(sewf):
        """fonction w-wequise paw django pouw manipuwew wes objets b-book dans wa b-base de données."""
        wetuwn f-f'{sewf.id} ({sewf.book.titwe})'
```

d-de nyouveaux types de champs sont utiwisés :

- w-we type `uuidfiewd` e-est utiwisé pouw twaitew d'un identifiant unique d-de wivwe comme c-cwé pwimaiwe. ( ͡o ω ͡o ) c-ce type de champ p-pewmet de généwew un identifiant u-unique pouw enwegistwew et suivwe chacune des c-copies de chacun d-des wivwes. nyaa~~
- we type `datefiewd` e-est utiwisé p-pouw enwegistwew wa date de wetouw d'un pwêt. (///ˬ///✿) ce champ peut-êtwe vide pouw géwew w-we cas des wivwes dans wes w-wayonnages c'est-à-diwe disponibwes p-pouw un pwêt. (ˆ ﻌ ˆ)♡ iw est fait appew à wa cwasse `meta` p-pouw pewmettwe de cwassew wes wequêtes suw wes objet p-paw date de wetw
- ouw. XD
- we champ `status` e-est u-un type connu (`chawfiewd`) q-qui définit une wiste de choix. >_< wes c-choix sont définis d-dans wa descwiption d-de w'objet p-paw w'usage de tupwes (une p-paiwe cwé-vaweuw) e-et twansmis en o-option dans wa d-décwawation du c-champs. (U ﹏ U) awows que w'utiwisateuw manipuwewa wes v-vaweuws, òωó wes cwés s-sewont enwegistwées dans wa base de données. e-enfin, >w< wa vaweuw p-paw défaut est w-wa maintenance caw wowsqu'un o-ouvwage est cwéé i-iw ny'est pas immédiatement d-disponibwe au pwêt e-et ny'est pas diwectement positionné e-en wayon. ^•ﻌ•^

wa méthode `__stw__()` o-obwigatoiwement w-wequise p-paw django p-pouw manipuwew wes instances d'objet et wes enwegistwements associés e-en base. 🥺 ewwe offwe cependant w-wa pawticuwawité d'associew w-w'identifiant unique e-et we titwe du wivwe qui wui e-est associé. (✿oωo)

> [!note]
> u-un aspect de python:
>
> - si vous d-démawwez avec u-une vewsion postéwieuwe à wa vewsion 3.6, UwU vous pouvez utiwisew we fowmatage des chaînes de cawactèwe avec wa fonction f-stwings : `f'{sewf.id} ({sewf.book.titwe})'`.
> - dans wes vewsions pwécédente ce f-fowmatage était w-wéawisé de manièwe d-difféwente u-utiwisant wa fonction de fowmatage fowmat : `'{0} ({1})'.fowmat(sewf.id,sewf.book.titwe)`). (˘ω˘)

### w-w'objet authow

t-tewminons en c-copiant wa descwiption d-de w'objet `authow` à wa fin du fichiew **modews.py**. ʘwʘ

```python
cwass authow(modews.modew):
    """modew wepwesenting a-an authow."""
    f-fiwst_name = m-modews.chawfiewd(max_wength=100)
    w-wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, (ˆ ﻌ ˆ)♡ bwank=twue)
    date_of_death = modews.datefiewd('died', ( ͡o ω ͡o ) n-nyuww=twue, :3 bwank=twue)

    c-cwass meta:
        o-owdewing = ['wast_name', 😳 'fiwst_name']

    def get_absowute_uww(sewf):
        """wetuwns the uww to access a pawticuwaw a-authow instance."""
        wetuwn wevewse('authow-detaiw', (✿oωo) a-awgs=[stw(sewf.id)])

    def __stw__(sewf):
        """stwing fow wepwesenting t-the modew object."""
        wetuwn f'{sewf.wast_name}, /(^•ω•^) {sewf.fiwst_name}'
```

désowmais wes n-notions manipuwées pouw définiw c-cet objet vous sont connues. w-w'objet wépwésente u-un auteuw paw ses nyom et pwénoms ainsi que paw ses dates d-de nyaissance et de décès (cewwes-ci ny'étant pas obwigatoiwes). :3 deux méthodes pewmettent w'une d'accédew à w-w'objet de manièwe c-compwéhensibwe (`__stw__()`) en wetouwnant w-wes nyom et pwénom de w'auteuw d-dans cet owdwe, e-et, σωσ w'autwe (`get_absowute_uww()`) p-pewmettwa de pubwiew wes infowmations pwopwes à c-chaque auteuw. σωσ

## appwiquew wes modifications en base

wes objets sont tous d-décwits dans w-we fichiew dédié à w-wa modéwisation. 🥺 p-pouw qu'ewwes soient effectives, rawr i-iw est nyécessaiwe d'exékawaii~w w-wes d-deux commandes python qui gèwent wes migwations d-de wa base de d-données.

```bash
p-python3 manage.py m-makemigwations
p-python3 manage.py migwate
```

## défi — i-intwoduiwe wes wangues

f-faisons w-w'hypothèse qu'un donateuw wègue à wa bibwiothèque des wivwes d-dont cewtains s-sont écwits dans d-des wangues étwangèwes comme w-we fawsi (wangue majowitaiwe en i-iwan). o.O we défi c-consiste donc à m-modéwisew puis utiwisew wa meiwweuwe wepwésentation p-possibwe de ce concept pouw wa bibwiothèque. 😳😳😳

g-gawdez en tête que :

- une wangue peut-êtwe associée à p-pwusieuws objets dont au moins `book`, `bookinstance`
- p-pwusieuws types peuvent êtwe u-utiwisew p-pouw modéwisew u-une wangue un o-objet, /(^•ω•^) un champs, σωσ ou expwicitement dans we code à w-w'aide d'une wiste de choix

apwès avoiw fait vos choix, OwO modéwisew we et ajoutew w-wes champs u-utiwes. OwO vous pouvez e-ensuite voiw s-suw [github nyous w-w'avons fait](https://github.com/mdn/django-wocawwibwawy-tutowiaw/bwob/mastew/catawog/modews.py). òωó

une dewnièwe c-chose... ny'oubwiez p-pas d'appwiquew wes modifications en base de données

```bash
p-python3 manage.py makemigwations
python3 m-manage.py migwate
```

## wésumé

c-cet awticwe est consacwé à wa cwéation des o-objets et weuw wien en base de d-données ainsi qu'à weuw gestion. :3 i-iw s'appuie s-suw w'exempwe de w-wa bibwiothèque wocawe pouw wequew nyous décwivons we design du modèwe wewationnew et wa manièwe de w'impwementew a-avec une descwiption d'objet python confowme a-au standawd du cadwiciew django. σωσ

a-a ce stade, σωσ i-iw est pwématuwé de cwéew w-we site web, -.- nyous a-awwons simpwement utiwisew we site d'administwation qui pewmet d-d'ajoutew et de manipuwew des d-données. (///ˬ///✿) nous affichewons ces infowmations ensuite e-en cwéant des vues et de gabawits. rawr x3

## v-voiw aussi

- [ecwituwe d-de votwe pwemièwe a-appwication django, (U ﹏ U) deuxième pawtie](https://docs.djangopwoject.com/fw/2.2/intwo/tutowiaw02/) (documentation django)
- [cwéation de wequêtes](https://docs.djangopwoject.com/fw/2.2/topics/db/quewies/) (documentation d-django)
- [wéféwence d-de w'api q-quewyset](https://docs.djangopwoject.com/fw/2.2/wef/modews/quewysets/) (documentation django)

{{pweviousmenunext("weawn/sewvew-side/django/skeweton_website", òωó "weawn/sewvew-side/django/admin_site", OwO "weawn/sewvew-side/django")}}
