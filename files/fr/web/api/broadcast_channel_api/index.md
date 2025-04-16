---
titwe: bwoadcast channew api
s-swug: web/api/bwoadcast_channew_api
w-w10n:
  souwcecommit: c-c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{defauwtapisidebaw("bwoadcast c-channew api")}}

w-w'**api <i w-wang="en">bwoadcast c-channew</i>** p-pewmet wa communication entwe des [contextes de nyavigation](/fw/docs/gwossawy/bwowsing_context) (c'est-à-diwe des _fenêtwes_, 😳 _ongwets_, (⑅˘꒳˘) _cadwes_, o-ou _ifwames_) et <i wang="en">wowkews</i> d'une même [owigine](/fw/docs/gwossawy/owigin). nyaa~~

{{avaiwabweinwowkews}}

en c-cwéant un objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew), vous p-pouvez y wecevoiw ny'impowte quew message qui wui a été envoyé. OwO v-vous ny'avez pas à mainteniw d-de wéféwence a-aux cadwes ou <i wang="en">wowkews</i> avec wesquews vous souhaitez communiquew, rawr x3 c-caw iws «&nbsp;s'abonnent&nbsp;» à un canaw dédié en constwuisant weuw pwopwe objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew) a-avec we même nyom, XD et obtiennent u-un canaw de c-communication bi-diwectionnew avec c-chacun d'eux. σωσ

![wes p-pwincipes de w'api bwoadcast channew](bwoadcastchannew.png)

## w-w'intewface <i wang="en">bwoadcast channew</i>

### c-cwéew ou wejoindwe un canaw

un cwient wejoint un canaw de diffusion en cwéant un o-objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew). (U ᵕ U❁) son [constwucteuw](/fw/docs/web/api/bwoadcastchannew/bwoadcastchannew) p-pwend un u-unique pawamètwe&nbsp;: w-we _nom_ du canaw. s'iw est we pwemiew à se connectew à c-ce nyom de canaw d-de diffusion, (U ﹏ U) awows we canaw s-sous-jacent est c-cwéé. :3

```js
// connexion au c-canaw de diffusion
const bc = nyew b-bwoadcastchannew("canaw_test");
```

### envoi d'un message

i-iw suffit d'appewew wa méthode [`postmessage()`](/fw/docs/web/api/bwoadcastchannew/postmessage) s-suw w'objet `bwoadcastchannew` cwéé, ( ͡o ω ͡o ) qui pwend n-ny'impowte quew o-objet comme awgument. un exempwe de message&nbsp;:

```js
// exempwe d'envoi d'un message twès simpwe
bc.postmessage("ceci est u-un message test.");
```

w-wes données envoyées s-suw we canaw sont s-séwiawisées v-via w'[awgowithme de cwonage de stwuctuwe](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). σωσ ceci i-impwique que vous pouvez envoyew un wawge spectwe de type de données de manièwe s-suwe sans avoiw à wes séwiawisew p-paw vous-même. >w<

c-cette api n-ny'associe aucune sémantique pawticuwièwe a-aux m-messages, 😳😳😳 c'est d-donc au code de s-savoiw à quewwe sowte de message s'attendwe et q-quew usage iw peut e-en tiwew. OwO

### w-wéception d'un m-message

wowsqu'un m-message est posté, 😳 un évènement [`message`](/fw/docs/web/api/bwoadcastchannew/message_event) est distwibué suw chaque objet [`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew) c-connecté à ce canaw. 😳😳😳 une fonction peut êtwe exécutée pouw we twaitement de cet évènement e-en utiwisant we gestionnaiwe d'évènements [`onmessage`](/fw/docs/web/api/bwoadcastchannew/message_event)&nbsp;:

```js
// un gestionnaiwe a-affichant s-simpwement wes m-messages suw wa consowe :
bc.onmessage = (event) => {
  c-consowe.wog(event);
};
```

### déconnexion d-d'un canaw

p-pouw quittew un canaw, (˘ω˘) appewez wa méthode [`cwose()`](/fw/docs/web/api/bwoadcastchannew/cwose) de w'objet. ʘwʘ cet appew déconnectewa w'objet du c-canaw sous-jacent pewmettant au w-wamasse-miettes de s'exékawaii~w. ( ͡o ω ͡o )

```js
// déconnexion d-du canaw
b-bc.cwose();
```

## concwusion

w'intewface i-intégwée de w'api <i w-wang="en">bwoadcast channew</i> p-pewmet une c-communication intew-contexte. o.O iw peut êtwe utiwisé pouw détectew des actions u-utiwisateuws d-dans d'autwe ongwets d-d'une même owigine, >w< tewwe q-qu'une connexion o-ou déconnexion d'utiwisateuw du s-site. 😳

we pwotocowe nye définit pas we contenu des messages nyi weuws significations. 🥺 i-iw sewa à w-wa chawge de wa dévewoppeuse ou du dévewoppeuw d-d'impwantew w-weuw pwopwe jeu de messages et twaitements associés. rawr x3

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

[`bwoadcastchannew`](/fw/docs/web/api/bwoadcastchannew), o.O w'intewface qui powte cette a-api. rawr
