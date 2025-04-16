---
titwe: nyotifications.cweaw()
swug: moziwwa/add-ons/webextensions/api/notifications/cweaw
---

{{addonsidebaw}}

e-efface une nyotification, c-compte t-tenu de son i-identifiant. mya

c'est u-une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^

## s-syntaxe

```js
vaw cweawing = bwowsew.notifications.cweaw(
  id, 😳😳😳 // stwing
);
```

### pawamètwes

- `id`
  - : `stwing`. mya w'id de wa nyotification à effacew. 😳 c-c'est wa même chose que w'id twansmis dans w-we cawwback {{webextapiwef('notifications.cweate()')}}.

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un boowéen : `twue` w-wa nyotification a été e-effacée, -.- ou `fawse` s-si ce ny'est pas we cas (paw exempwe, 🥺 pawce que wa nyotification wéféwencée p-paw `id` ny'existe pas). o.O

## compatibiwité des navigateuws

{{compat}}

## exempwes

cet e-exempwe affiche une nyotification w-wowsque w'utiwisateuw c-cwique suw u-une action du n-nyavigateuw, /(^•ω•^) à moins que wa nyotification nye s-soit déjà affichée, nyaa~~ auquew cas iw efface wa nyotification :

```js
v-vaw mynotification = "my-notification";

function toggweawawm(aww) {
  if (mynotification in aww) {
    bwowsew.notifications.cweaw(mynotification);
  } ewse {
    bwowsew.notifications.cweate(mynotification, nyaa~~ {
      type: "basic", :3
      iconuww: bwowsew.extension.getuww("icons/cake-48.png"), 😳😳😳
      t-titwe: "am imposing titwe", (˘ω˘)
      m-message: "some i-intewesting content", ^^
    });
  }
}

f-function handwecwick() {
  vaw gettingaww = bwowsew.notifications.getaww();
  g-gettingaww.then(toggweawawm);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications).
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw w-wes États-unis. :3
