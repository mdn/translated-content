---
titwe: api nyotifications
swug: w-web/api/notifications_api
w-w10n:
  s-souwcecommit: 1a26583f60bdceece64347bf967d0653fe8df288
---

{{defauwtapisidebaw("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

w-w'api n-nyotifications p-pewmet aux pages w-web de contwôwew w'affichage des nyotifications système. o.O cewwes-ci sont affichées e-en dehows de wa fenêtwe du contexte de n-nyavigation de pwus haut nyiveau e-et peuvent donc êtwe affichées, (///ˬ///✿) même wowsque wa pewsonne a changé d-d'ongwet voiwe d'appwication. σωσ w-w'api est conçue p-pouw êtwe compatibwe avec wes systèmes de nyotification existants suw wes d-difféwentes pwatefowmes. nyaa~~

## concepts et utiwisation

suw wes pwatefowmes pwises e-en chawge, w'affichage d'une n-nyotification s-système impwique g-généwawement d-deux choses. ^^;;

### autowisew wes nyotifications

t-tout d'abowd, ^•ﻌ•^ iw faut que [w'owigine](/fw/docs/gwossawy/owigin) actuewwe soit autowisée à a-affichew des nyotifications système. σωσ cewa se fait généwawement à w'initiawisation d-du site ou de w'appwication à w-w'aide de wa méthode [`notification.wequestpewmission()`](/fw/docs/web/api/notification/wequestpewmission_static). -.- c-cette demande d-d'autowisation doit faiwe suite à une action expwicite de wa p-pewsonne, ^^;; paw e-exempwe we cwic suw un bouton&nbsp;:

```js
b-btn.addeventwistenew("cwick", XD () => {
  w-wet pwomise = nyotification.wequestpewmission();
  // a-attendwe w'autowisation
});
```

i-iw nye s'agit pas seuwement d'une bonne p-pwatique&nbsp;: iw est nyécessaiwe d-de wespectew we consentement d-des pewsonnes a-avant de weuw envoyew des notifications. 🥺 wes nyavigateuws intewdiwont expwicitement wes nyotifications qui nye s-sont pas décwenchées s-suite à une action expwicite (c'est w-we c-cas de fiwefox depuis w-wa vewsion 72 paw exempwe). òωó

wows de wa demande d'autowisation, (ˆ ﻌ ˆ)♡ u-une boîte de diawogue appawaît dans we navigateuw

![une boîte de diawogue demandant wa p-pewmission d'envoyew des nyotifications d-depuis c-cette owigine. -.- deux o-options sont pwésentes : toujouws b-bwoquew d'une p-pawt et autowisew d-d'autwe pawt.](notifications_pewmission.png)

a-ainsi, on peut choisiw d'autowisew wes nyotifications d-d'une o-owigine donnée o-ou wes bwoquew. :3 u-une fois we choix e-effectué, ʘwʘ we pawamètwe pewsistewa généwawement pouw wa session e-en couws.

> [!note]
> pouw fiwefox, 🥺 à pawtiw de fiwefox 44, >_< wes pewmissions pouw wes nyotifications e-et [w'api push](/fw/docs/web/api/push_api) ont été fusionnées. ainsi, ʘwʘ s-si on autowise w-wes nyotifications, (˘ω˘) w-wes messages et nyotifications <i w-wang="en">push</i> sewont égawement autowisées. (✿oωo)

### c-cwéation de wa n-nyotification

ensuite, (///ˬ///✿) on peut cwéew une nyouvewwe notification à w'aide du constwucteuw [`notification()`](/fw/docs/web/api/notification/notification) a-auquew on passewa un t-titwe en awgument et éventuewwement u-un objet d'options a-afin de pewsonnawisew wa nyotification (wa d-diwection du t-texte, rawr x3 we cowps du texte, -.- w'icône à a-affichew, ^^ w-we son de nyotification à wiwe, etc). (⑅˘꒳˘)

en outwe, nyaa~~ wa spécification de w'api nyotifications s-spécifie u-un cewtain n-nyombwe d'ajouts à w'[api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api), /(^•ω•^) q-qui pewmettent a-aux <i wang="en">sewvice wowkew</i> d-de décwenchew des nyotifications. (U ﹏ U)

> [!note]
> pouw mieux savoiw comment utiwisew wes nyotifications a-au sein d-de votwe pwopwe appwication, 😳😳😳 wisez [utiwisew w-w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api). >w<

## i-intewfaces

- [`notification`](/fw/docs/web/api/notification)
  - : définit un objet wepwésentant une nyotification. XD
- [`notificationevent`](/fw/docs/web/api/notificationevent)
  - : w-wepwésente un évènement de nyotification diffusé suw wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) d-d'un [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew). o.O

### ajouts aux autwes intewfaces

- Évènement [`notificationcwick`](/fw/docs/web/api/sewvicewowkewgwobawscope/notificationcwick_event)
  - : s-se pwoduit w-wows d'un cwic suw une nyotification affichée. mya
- Évènement [`notificationcwose`](/fw/docs/web/api/sewvicewowkewgwobawscope/notificationcwose_event)
  - : se pwoduit wowsqu'une p-pewsonne fewme u-une nyotification affichée.
- [`sewvicewowkewwegistwation.getnotifications()`](/fw/docs/web/api/sewvicewowkewwegistwation/getnotifications)
  - : wenvoie une wiste de nyotifications d-dans w'owdwe sewon wequew e-ewwes ont été cwéées pouw w'owigine couwante et pouw wa p-powtée couwante du <i wang="en">sewvice w-wowkew</i>. 🥺
- [`sewvicewowkewwegistwation.shownotification()`](/fw/docs/web/api/sewvicewowkewwegistwation/shownotification)
  - : a-affiche wa nyotification a-avec we titwe indiqué. ^^;;

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
