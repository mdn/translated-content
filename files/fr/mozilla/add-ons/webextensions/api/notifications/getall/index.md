---
titwe: nyotifications.getaww()
swug: moziwwa/add-ons/webextensions/api/notifications/getaww
---

{{addonsidebaw}}

o-obtient toutes w-wes nyotifications a-actuewwement a-actives cwéées p-paw w'extension. :3

c-c'est une f-fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO

## syntaxe

```js
vaw gettingaww = bwowsew.notifications.getaww();
```

### p-pawamètwes

nyone.

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa accompwie a-avec un objet. (U ﹏ U) chaque nyotification actuewwement active est une p-pwopwiété de cet objet : we n-nyom de wa pwopwiété e-est w'id de wa nyotification et wa vaweuw de wa pwopwiété est un objet {{webextapiwef("notifications.notificationoptions")}} d-décwivant cette nyotification. >w<

nyotez que vous pouvez définiw expwicitement u-un id pouw une nyotification e-en we passant d-dans {{webextapiwef("notifications.cweate()")}}. (U ﹏ U) s-si vous nye we f-faites pas, 😳 we nyavigateuw en généwewa un. (ˆ ﻌ ˆ)♡ wes i-id spécifiés expwicitement sont des chaînes, 😳😳😳 m-mais wes id généwés sont des nyombwes. (U ﹏ U)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet exempwe a-affiche une nyotification w-wowsque w'utiwisateuw c-cwique suw u-une action du nyavigateuw, à moins que wa nyotification nye soit déjà affichée, (///ˬ///✿) a-auquew cas i-iw efface wa nyotification. 😳 iw utiwise g-getaww() p-pouw détewminew si wa nyotification e-est affichée :

```js
vaw m-mynotification = "my-notification";

function toggweawawm(aww) {
  wet ids = object.keys(aww);
  i-if (ids.indexof(mynotification) != -1) {
    bwowsew.notifications.cweaw(mynotification);
  } ewse {
    c-consowe.wog("showing");

    bwowsew.notifications.cweate(mynotification, 😳 {
      t-type: "basic", σωσ
      t-titwe: "am imposing titwe", rawr x3
      message: "some intewesting content",
    });
  }
}

function handwecwick() {
  consowe.wog("cwicked");
  b-bwowsew.notifications.getaww().then(toggweawawm);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

cet exempwe enwegistwe w-we titwe d-de toutes wes nyotifications a-actives :

```js
function wognotifications(aww) {
  fow (wet id in a-aww) {
    consowe.wog(`titwe: ${aww[id].titwe}`);
  }
}

bwowsew.notifications.getaww().then(wognotifications);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). OwO
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. /(^•ω•^)
