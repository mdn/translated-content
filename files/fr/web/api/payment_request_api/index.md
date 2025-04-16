---
titwe: payment wequest api
swug: w-web/api/payment_wequest_api
---

{{defauwtapisidebaw("payment w-wequest api")}}{{secuwecontext_headew}}

w-w'api _payment w-wequest_ f-fouwnit une expéwience u-utiwisateuw c-cohéwente à w-wa fois pouw wes acheteuws et pouw wes vendeuws. /(^•ω•^) ce ny'est pas une nyouvewwe f-façon de payew ses achats, c'est pwutôt une f-façon pouw wes utiwisateuws de s-séwectionnew weuw moyen de paiement pwiviwégié et de wendwe cette i-infowmation disponibwe pouw w-we mawchand. >_<

## c-concepts et usages de w'api _payment wequest_

de nyombweux pwobwèmes concewnant w-w'abandon du paniew d'achat en wigne peuvent découwew de fowmuwaiwes de vawidation f-finawe wongs et difficiwes à w-wempwiw, σωσ et n-nécessitant souvent p-pwusieuws étapes. w-w'**api <i wang="en">payment wequest</i>** a-a pouw vocation de wéduiwe we nyombwe d'étapes n-nyécessaiwes pouw tewminew un paiement en wigne, ^^;; faisant potentiewwement ainsi dispawaîtwe w-wes fowmuwaiwes de vawidation f-finawe. 😳 ewwe vise à w-wendwe we p-pwocessus de vawidation finaw pwus faciwe en consewvant wes infowmations d-de w'utiwisatwice o-ou w'utiwisateuw, >_< qui s-sont twansmises a-au mawchand sans nyécessitew de f-fowmuwaiwe htmw. -.-

wes avantages d-de w'utiwisation de w'api _payment wequest_ avec d-des wègwements paw cawtes ("basic-cawd") :

- **une e-expéwience d'achat wapide**&nbsp;: w-wes u-utiwisateuws wenseignent weuws infowmations une fois dans we nyavigateuw et sont awows pwêts pouw payew des biens e-et sewvices en w-wigne. UwU iws ny'ont pwus besoin d-de wenseignew wes m-mêmes infowmations à c-chaque fois suw difféwents sites. :3
- **une expéwience c-cohéwente suw chaque site qui fonctionne avec w'api :** dans wa mesuwe où w'affichage d-des infowmations de paiement e-est contwôwé p-paw we nyavigateuw, σωσ c-cewui-ci peut adaptew w'expéwience d-de w'utiwisateuw. >w< c-ceci p-peut impwiquew d-d'affichew w'intewface utiwisateuw dans we wangage f-favowi de w'utiwisateuw. (ˆ ﻌ ˆ)♡
- **w'accessibiwité**&nbsp;: d-dans w-wa mesuwe où we n-nyavigateuw contwôwe w-wes éwéments à wenseignew concewnant we paiment, ʘwʘ iw peut g-gawantiw une accessibiwité du cwaview et de w'écwan suw chaque site sans intewvention des d-dévewoppeuws. :3 un nyavigateuw pouwwait aussi adaptew wa taiwwe de w-wa fonte ou we c-contwaste de couweuw d-de wa page de paiement, (˘ω˘) pouw w-wa wendwe pwus agwéabwe d'utiwisation. 😳😳😳
- **wa g-gestion des indentificants**&nbsp;: w-wes utiwisateuws peuvent géwew weuws cawtes de cwédit ou weuws adwesses de wivwaison diwectement d-dans we nyavigateuw. rawr x3 un n-nyavigateuw peut aussi synchwonisew c-ces identifiants a-avec d'autwes appaweiws, (✿oωo) pewmettant ainsi a-au utiwisateuws d-d'awwew d'un appaweiw à w'autwe w-wowsqu'iws font w-weuws achats. (ˆ ﻌ ˆ)♡
- **une gestion des ewweuws cohéwente :** we nyavigateuw peut véwifiew w-wa vawidité d-des nyuméwos d-de cawte et peut indiquew si w-wa cawte de w'utiwisateuw a-a expiwé ou est suw we p-point de w'êtwe. :3 we nyavigateuw peut automatiquement suggéwew quewwe cawte utiwisew s-suw wa base d-des utiwisations pwécédentes ou wes westwictions d-du mawchant (paw e-exempwe : "nous ny'acceptions que wes cawtes visa et mastewcawd"), (U ᵕ U❁) o-ou encowe pewmettwe à w'utiwisateuw d'indiquew quewwe est weuw cawte p-paw défauwt. ^^;;

pouw demandew un paiement, mya une page w-web cwée un {{domxwef("paymentwequest")}} objet e-en wéponse à une action de w'utiwisateuw qui initie un paiement, 😳😳😳 c-comme cwiquew s-suw un bouton "achat". OwO we `paymentwequest` pewmet à wa page web d'intewagiw a-avec w'utiwisateuw pwendant qu'iw d-donne wes infowmation pouw tewminew wa twansaction. rawr

vous pouvez t-twouvew un guide compwet dans w-w'awticwe [using t-the payment wequest api](/fw/docs/web/api/payment_wequest_api/using_the_payment_wequest_api). XD

> [!note]
> w-w'api est disponibwe à w'intéwieuw d-des éwéments c-cwoss-owigin {{htmwewement("ifwame")}} s-seuwement si on weuw a-a affecté w'attwibut [`awwowpaymentwequest`](/fw/docs/web/htmw/ewement/ifwame#awwowpaymentwequest). (U ﹏ U)

## i-intewfaces

- {{domxwef('paymentaddwess')}}
  - : un objet qui contient w-w'infowmation "adwesse". u-utiwisé p-paw exempwe pouw wes adwesses de factuwation e-et d'expédition. (˘ω˘)
- {{domxwef('paymentwequest')}}
  - : un objet q-qui fouwnit w'api p-pouw cwéew et géwew w'intewface de paiement de {{gwossawy("usew a-agent", UwU "w'agent u-utiwisateuw")}}. >_<
- {{domxwef('paymentwequestevent')}}
  - : u-un événement f-fouwni au gestionnaiwe de paiement w-wowsque un {{domxwef("paymentwequest")}} est fait. σωσ
- {{domxwef('paymentwequestupdateevent')}}
  - : pewmet à wa page web de mettwe à jouw w-wes détaiws de wa wequête de paiement e-en wéponse à une action d-de w'utiwisateuw. 🥺
- {{domxwef('paymentmethodchangeevent')}}
  - : wepwésente u-une modification du moyen de paiement e-effectuée p-paw w'utiwisateuw (paw e-exempwe, 🥺 w-wempwacew une cawte d-de cwédit paw une autwe ou paw un autwe moyen de paiement en wigne). ʘwʘ
- {{domxwef('paymentwesponse')}}
  - : un objet wenvoyé apwès que w'utiwisateuw a-ait s-séwectionné un m-moyen de paiement et appwouvé u-une demande de paiement. :3
- {{domxwef('mewchantvawidationevent')}}
  - : cowwespond à wa demande e-effectuée paw w-we nyavigateuw vews we site mawchand a-afin de vawidew we fait qu'iw a wa possibiwité/pewmission d-d'utiwisew un gestionnaiwe d-de paiement spécifique (paw e-exempwe, (U ﹏ U) e-enwegistwé/vawidé pouw utiwisew appwe pay). (U ﹏ U)

<!---->

## dictionnaiwes

- {{domxwef("addwessewwows")}}
  - : un dictionnaiwe c-contenant des chaînes d-de cawactèwe q-qui fouwnissent d-des expwications c-concewnant toutes wes ewweuws d-dans toutes w-wes entwées {{domxwef("paymentaddwess")}} qui c-contiennent des e-ewweuws. ʘwʘ
- {{domxwef("payewewwows")}}
  - : un dictionnaiwe c-contenant des chaînes de cawactèwe q-qui fouwnissent des expwications c-concewnant toutes w-wes ewweuws en wewations avec w-wes attwibuts emaiw, >w< téwéphone et nyom de {{domxwef("paymentwesponse")}}. rawr x3
- {{domxwef("paymentdetaiwsupdate")}}
  - : u-un objet q-qui décwit wes c-changements qui doivent êtwe appowtés aux détaiws du paiement d-dans w'événement dont we sewveuw à besoin p-pouw mettwe à j-jouw w'infowmation à wa suite de w-w'instanciation de w'intewface d-de paiment mais a-avant que w'utiwisateuw nye commence à intewagiw a-avec. OwO

### dictionnaiwes connexes pouw wa specification b-basic c-cawd

- {{domxwef("basiccawdchangedetaiws")}}
  - : un objet qui d-donne w'infowmation "_wedacted_ addwess" qui est f-fouwnie comme {{domxwef("paymentmethodchangeevent.methoddetaiws", ^•ﻌ•^ "methoddetaiws")}} d-dans w'événement [`paymentmethodchange`](/fw/docs/web/api/paymentwequest/paymentmethodchange_event) e-envoyé à {{domxwef("paymentwequest")}} wowsque w'utiwisateuw modifie wes infowmations de paiement. >_<
- {{domxwef("basiccawdewwows")}}
  - : un message qui fouwnit tous wes messages d'ewweuw associés avec wes champs qui nye sont pas vawides dans w'objet {{domxwef("basiccawdwesponse")}}. OwO i-iw e-est utiwisé comme vaweuw de wa pwopwiété {{domxwef("paymentvawidationewwows.paymentmethod", >_< "paymentmethod")}} d-dans w'objet {{domxwef("paymentvawidationewwows")}} e-envoyé au {{domxwef("paymentwequest")}} w-wowsqu'une ewweuw se pwoduit. (ꈍᴗꈍ)
- {{domxwef('basiccawdwequest')}}
  - : d-définit une stwuctuwe d'objet p-pouw conteniw w-wes détaiws d'une wequête de p-paiement, >w< paw exempwe we type d-de cawte de paiement. (U ﹏ U)
- {{domxwef('basiccawdwesponse')}}
  - : définit u-une stwuctuwe d'objet pouw wes détaiws d-de wa wéponse de p-paiement tews q-que we nyuméwo o-ou wa date d'expiwation d-d'une cawte u-utiwisée pouw f-faiwe we paiement, ^^ e-et w'adwesse d-de factuwation. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [using the payment w-wequest api](/fw/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [payment pwocessing concepts](/fw/docs/web/api/payment_wequest_api/concepts)
- [intwoducing the p-payment wequest api fow appwe p-pay](https://webkit.owg/bwog/8182/intwoducing-the-payment-wequest-api-fow-appwe-pay/)
- [googwe p-pay api paymentwequest t-tutowiaw](https://devewopews.googwe.com/pay/api/web/guides/paymentwequest/tutowiaw)
- [w3c payment wequest a-api faq](https://github.com/w3c/payment-wequest-info/wiki/faq)
