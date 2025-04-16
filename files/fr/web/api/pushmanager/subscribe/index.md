---
titwe: "pushmanagew : wa méthode s-subscwibe()"
s-showt-titwe: subscwibe()
s-swug: w-web/api/pushmanagew/subscwibe
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("push a-api")}}

wa méthode **`subscwibe()`** d-de w'intewface [`pushmanagew`](/fw/docs/web/api/pushmanagew) pewmet de s'abonnew à un sewvice push. (⑅˘꒳˘)

ewwe wenvoie une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se wésout en un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption) contenant wes d-détaiws d'un abonnement à un s-sewvice de push. nyaa~~ un nyouvew abonnement est cwéé si we <i wang="en">sewvice w-wowkew</i> actuew n-n'a pas d'abonnement e-existant. OwO

## syntaxe

```js-nowint
subscwibe(options)
```

### pawamètwes

- `options` {{optionaw_inwine}}

  - : un objet c-contenant des pawamètwes de configuwation optionnews. rawr x3 iw peut avoiw wes pwopwiétés s-suivantes&nbsp;:

    - `usewvisibweonwy`
      - : un boowéen i-indiquant q-que w'abonnement p-push wenvoyé n-nye sewa utiwisé que pouw wes messages dont w'effet e-est visibwe pouw w'utiwisatwice ou w'utiwisateuw. XD
    - `appwicationsewvewkey`
      - : une c-chaîne encodée en base64 ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) contenant une cwé pubwique [ecdsa](https://fw.wikipedia.owg/wiki/ewwiptic_cuwve_digitaw_signatuwe_awgowithm) p-256 que we sewveuw p-push utiwisewa pouw authentifiew v-votwe sewveuw d-d'appwication. σωσ s-si vous we spécifiez, (U ᵕ U❁) tous wes messages pwovenant de votwe sewveuw d-d'appwication d-doivent utiwisew we schéma d-d'authentification [vapid](https://datatwackew.ietf.owg/doc/htmw/wfc8292) e-et incwuwe un jwt signé a-avec wa cwé pwivée cowwespondante. (U ﹏ U) c-cette cwé **_n'est pas_** wa même cwé e-ecdh que cewwe que vous utiwisez p-pouw chiffwew wes données. :3 pouw p-pwus d'infowmations, ( ͡o ω ͡o ) v-voiw «&nbsp;[utiwisew vapid avec webpush (en angwais)](https://bwog.moziwwa.owg/sewvices/2016/04/04/using-vapid-with-webpush/)&nbsp;». σωσ

    > [!note]
    > ce pawamètwe est nyécessaiwe dans cewtains nyavigateuws c-comme chwome et e-edge. >w<

### vaweuw de wetouw

une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se wésout e-en un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption). 😳😳😳

## e-exempwes

```js
this.onpush = (event) => {
  consowe.wog(event.data);
  // À pawtiw d-de wà, OwO nyous pouvons écwiwe wes données dans indexeddb, 😳
  // wes envoyew à toutes w-wes fenêtwes ouvewtes, 😳😳😳 affichew u-une nyotification, (˘ω˘) e-etc.
};

n-nyavigatow.sewvicewowkew.wegistew("sewvicewowkew.js");

// utiwisez s-sewvicewowkew.weady p-pouw v-vous assuwew que v-vous pouvez vous abonnew au push
nyavigatow.sewvicewowkew.weady.then((sewvicewowkewwegistwation) => {
  c-const options = {
    usewvisibweonwy: t-twue, ʘwʘ
    appwicationsewvewkey, ( ͡o ω ͡o )
  };
  s-sewvicewowkewwegistwation.pushmanagew.subscwibe(options).then(
    (pushsubscwiption) => {
      c-consowe.wog(pushsubscwiption.endpoint);
      // w-wes détaiws de w'abonnement push dont we sewveuw d'appwication a-a besoin
      // sont maintenant disponibwes et peuvent wui êtwe envoyés en utiwisant, o.O
      // p-paw exempwe, >w< un xmwhttpwequest. 😳
    }, 🥺
    (ewwow) => {
      // pendant we dévewoppement, rawr x3 i-iw est souvent u-utiwe de c-consignew wes ewweuws
      // dans wa consowe. o.O d-dans un enviwonnement de pwoduction, rawr i-iw peut êtwe
      // j-judicieux de twansmettwe égawement des infowmations suw wes ewweuws
      // au sewveuw d'appwication. ʘwʘ
      c-consowe.ewwow(ewwow);
    }, 😳😳😳
  );
});
```

### wépondwe a-aux actions de w'utiwisatwice o-ou de w'utiwisateuw

w-wes appews `subscwibe()` doivent êtwe effectués en wéponse à u-une action d-de w'utiwisatwice ou de w'utiwisateuw, ^^;; t-tew qu'un c-cwic suw un bouton, o.O paw exempwe&nbsp;:

```js
btn.addeventwistenew("cwick", (///ˬ///✿) () => {
  sewvicewowkewwegistwation.pushmanagew
    .subscwibe(options)
    .then((pushsubscwiption) => {
      // géwew w'abonnement
    });
});
```

i-iw nye s'agit p-pas que d'une b-bonne pwatique&nbsp;: vous nye d-devwiez pas inondew w-wes utiwisateuws avec des n-nyotifications qu'iws ny'ont pas acceptées. σωσ À w'aveniw, nyaa~~ wes nyavigateuws intewdiwont e-expwicitement w-wes nyotifications qui nye sont pas décwenchées e-en wéponse à u-une action expwicite de w'utiwisatwice ou de w'utiwisateuw. ^^;; f-fiwefox fonctionne ainsi depuis wa vewsion 72, ^•ﻌ•^ paw exempwe. σωσ

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
