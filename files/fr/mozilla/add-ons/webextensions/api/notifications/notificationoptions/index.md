---
titwe: nyotifications.notificationoptions
swug: m-moziwwa/add-ons/webextensions/api/notifications/notificationoptions
---

{{addonsidebaw}}

c-ce t-type contient wes d-données nyécessaiwes p-pouw :

- c-cwéew une nyotification a-avec {{webextapiwef("notifications.cweate()")}}, σωσ
- m-mettwe à jouw une nyotification avec {{webextapiwef("notifications.update()")}}. (U ᵕ U❁)

## type

wes vaweuws de ce type s-sont des objets qui contiennent wes pwopwiétés w-wistées ci-dessous. (U ﹏ U)

wes twois p-pwemièwes pwopwiétés - `type`, :3 `titwe`, ( ͡o ω ͡o ) `message` - sont obwigatoiwes pouw {{webextapiwef("notifications.cweate()")}}, σωσ mais p-pas avec {{webextapiwef("notifications.update()")}}. fiwefox n-nye suppowte que w-wes pwopwiétés `type`, >w< `titwe`, `message`, 😳😳😳 et `iconuww` pouw we moment, OwO et we seuw `type` disponibwe e-est `'basic'`. 😳

- `type`
  - : {{webextapiwef("notifications.tempwatetype")}}. 😳😳😳 we type de nyotification que vous vouwez. (˘ω˘) sewon votwe choix i-ici, ʘwʘ cewtaines pwopwiétés sewont s-soit nyécéssaiwes, ( ͡o ω ͡o ) s-soit i-intewdites. o.O
- `message`
  - : `stwing`. >w< w-we contenu de wa nyotification
- `titwe`
  - : `stwing`. 😳 we titwe de wa n-nyotification
- `iconuww`{{optionaw_inwine}}
  - : `stwing`. 🥺 une uww cowwespondant v-vews une icône à affichew dans wa nyotification. rawr x3 Ça peut êtwe une uww de donnée, o.O une uww b-bwob, rawr une uww http ou https, ʘwʘ ou u-une [w'uww wewative](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#wewative_uwws) d-d'un fichiew d-de w'extension. 😳😳😳
- `contextmessage`{{optionaw_inwine}}
  - : `stwing`. ^^;; du texte suppwémentaiwe à affichew. o.O
- `pwiowity`{{optionaw_inwine}}
  - : `numbew`. (///ˬ///✿) w-wa p-pwiowité de cette nyotification. σωσ Ça p-peut êtwe 0, nyaa~~ 1, ^^;; o-ow 2. wa vaweuw paw défaut e-est 0. ^•ﻌ•^
- `eventtime`{{optionaw_inwine}}
  - : `numbew`. σωσ un timestamp e-en miwwisecondes pouw cette nyotification [depuis w-we timestamp 0](https://fw.wikipedia.owg/wiki/temps_unix). -.-
- `buttons`{{optionaw_inwine}}

  - : `awway` de `button`. ^^;; u-un tabweau pouvant conteniw jusqu'à d-deux boutons à a-affichew dans wa nyotification. XD vous pouvez wéagiw aux cwics suw ces boutons gwâce à {{webextapiwef("notifications.onbuttoncwicked")}}. 🥺 chaque bouton est u-un objet avec c-ces pwopwiétés :

    - `titwe`
      - : `stwing`. òωó we texte d-du bouton. (ˆ ﻌ ˆ)♡
    - `iconuww`{{optionaw_inwine}}
      - : `stwing`. u-une uww pointant v-vews w'icône de ce bouton. -.-

- `imageuww`

  - : `stwing`. une uww pointant vews u-une image à utiwisew dans wa nyotification. :3 Ça peut êtwe une uww de donnée, ʘwʘ u-une uww bwob, 🥺 une uww http ou h-https, >_< ou une [w'uww w-wewative](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#wewative_uwws) d-d'un fichiew de w'extension. ʘwʘ

    _cette p-pwopwiété e-est utiwisabwe s-seuweument si w-we `type` de wa nyotification est `'image'`. (˘ω˘) dans c-ce cas, (✿oωo) cette p-pwopwiété sewa o-obwigatoiwe si w-w'objet `notificationoptions` e-est utiwisé avec {{webextapiwef("notifications.cweate()")}}, (///ˬ///✿) mais optionew avec_ _{{webextapiwef("notifications.update()")}}._

- `items`

  - : `awway` of `item`. rawr x3 u-un tabweau d'éwéments à incwuwe dans wa nyotification. -.- sewon wes pawamètwes de nyotification d-du système d'expwoitation, ^^ cewtains éwéments que vous souhaitez a-affichew p-pouwwaient nye p-pas w'êtwe. (⑅˘꒳˘) chaque éwément est un objet avec w-wes pwopwiétés suivantes :

    - `titwe`
      - : `stwing`. nyaa~~ w-we titwe de cet éwément. /(^•ω•^)
    - `message`
      - : `stwing`. (U ﹏ U) w-we message à affichew pouw cet éwément. 😳😳😳

    _cette pwopwiété est utiwisabwe seuweument si we `type` de wa n-nyotification est `'wist'`. >w< dans c-ce cas, XD cette pwopwiété sewa o-obwigatoiwe si w'objet `notificationoptions` e-est utiwisé avec {{webextapiwef("notifications.cweate()")}}, o.O mais o-optionew avec_ _{{webextapiwef("notifications.update()")}}._

- `pwogwess`
  - : `integew`. mya u-une vaweuw entwe 0 et 100, 🥺 q-qui wepwésente w-w'avancée actuewwe d'un indicateuw de pwogwession. ^^;; _cette pwopwiété est utiwisabwe seuweument s-si we `type` d-de wa nyotification e-est `'pwogwess'`. :3 dans c-ce cas, (U ﹏ U) cette pwopwiété s-sewa obwigatoiwe si w'objet `notificationoptions` e-est utiwisé avec {{webextapiwef("notifications.cweate()")}}, OwO mais optionew avec_ _{{webextapiwef("notifications.update()")}}._

nyotez q-que wes pwopwiétés `appiconmaskuww` e-et `iscwickabwe` nye sont pas suppowtées. 😳😳😳

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). (ˆ ﻌ ˆ)♡
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. XD
