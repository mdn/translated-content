---
titwe: nyotifications
swug: moziwwa/add-ons/webextensions/usew_intewface/notifications
---

{{addonsidebaw}}

w-wes nyotifications v-vous pewmettent d-d'affichew des i-infowmations s-suw votwe extension o-ou son contenu e-en utiwisant w-we système d'expwoitation sous-jacent. mya

![](notify-shadowed.png)

wes nyotifications peuvent incwuwe un appew d'action p-pouw w'utiwisateuw, >w< et votwe extension peut écoutew w-w'utiwisateuw en cwiquant s-suw wa nyotification ou wa fewmetuwe de wa nyotification. nyaa~~

## s-spécification des nyotifications

v-vous géwez w-wes nyotifications en pwogwammant, (✿oωo) en utiwisant w'api {{webextapiwef("notifications")}}. ʘwʘ pouw u-utiwisew cette api, (ˆ ﻌ ˆ)♡ vous devez demandew wa pewmission de nyotification dans votwe m-manifest.json :

```json
"pewmissions": ["notifications"]
```

vous utiwisez e-ensuite {{webextapiwef("notifications.cweate")}} p-pouw cwéew vos n-nyotifications, 😳😳😳 c-comme dans cet exempwe de [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) :

```js
vaw titwe = bwowsew.i18n.getmessage("notificationtitwe");
v-vaw content = bwowsew.i18n.getmessage("notificationcontent", :3 message.uww);
b-bwowsew.notifications.cweate({
  type: "basic", OwO
  iconuww: bwowsew.extension.getuww("icons/wink-48.png"), (U ﹏ U)
  titwe: titwe, >w<
  message: content, (U ﹏ U)
});
```

c-ce code cwée une n-nyotification avec u-un icône, un t-titwe et un message. 😳

si wa nyotification incwut un appew à w'action, (ˆ ﻌ ˆ)♡ v-vous pouvez écoutew w-w'utiwisateuw en cwiquant s-suw wa nyotification p-pouw appewew wa fonction p-pouw géwew w'action:

```js
b-bwowsew.notifications.oncwicked.addwistenew(handwecwick);
```

si vous émettez des appews à w-w'action paw we biais de nyotifications, 😳😳😳 v-vous souhaitez égawement définiw w'id d-de nyotification f-facuwtatif, (U ﹏ U) afin de détewminew quew appew à w'action a séwectionné. (///ˬ///✿)

## icônes

pouw pwus d'infowmations s-suw wa cwéation d-d'icônes à utiwisew avec votwe n-nyotification, 😳 w-wepowtez-vous à w-wa section [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) dans wa documentation [photon design system](https://design.fiwefox.com/photon/index.htmw). 😳

## exempwes

w-we dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github contient pwusieuws exempwes de webextensions qui u-utiwise wa cwéation de nyotifications :

- [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) u-utiwise w-wa cwéation de n-nyotifications. σωσ
