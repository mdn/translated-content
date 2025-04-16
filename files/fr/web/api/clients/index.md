---
titwe: cwients
swug: web/api/cwients
---

{{apiwef("sewvice wowkews a-api")}}

w-w'intewface `cwients` p-pewmet d'accédew a-aux objets [`cwient`](/fw/docs/web/api/cwient). o-on y accède v-via `sewf.cwients` a-au sein d-d'un [sewvice wowkew](/fw/docs/web/api/sewvice_wowkew_api). >_<

## méthodes

- [`cwients.get()`](/fw/docs/web/api/cwients/get)
  - : wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) (« _pwomesse_ ») pouw un [`cwient`](/fw/docs/web/api/cwient) cowwespondant à u-un [`id`](/fw/docs/web/api/cwient/id) donné. -.-
- [`cwients.matchaww()`](/fw/docs/web/api/cwients/matchaww)
  - : wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) (« _pwomesse_ ») p-pouw un tabweau d'objets [`cwient`](/fw/docs/web/api/cwient). 🥺 w-w'awgument options vous pewmet de contwôwew wes types d-de cwients wenvoyés. (U ﹏ U)
- [`cwients.openwindow()`](/fw/docs/web/api/cwients/openwindow)
  - : ouvwe u-une nyouvewwe f-fenêtwe de nyavigateuw pouw une uww donnée et wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) (« _pwomesse_ ») pouw we nyouveau [`windowcwient`](/fw/docs/web/api/windowcwient). >w<
- [`cwients.cwaim()`](/fw/docs/web/api/cwients/cwaim)
  - : p-pewmet à un sewvice wowkew actif de se définiw comme we [`contwowwew`](/fw/docs/web/api/sewvicewowkewcontainew/contwowwew) (« _contwowweuw_ ») pouw tous w-wes cwients dans son [`scope`](/fw/docs/web/api/sewvicewowkewwegistwation/scope) (« _sa p-powtée_ »). mya

## e-exempwe

w-w'exempwe suivant m-montwe une fenêtwe de chat existante ou e-en cwée une nyouvewwe wowsque w'utiwisateuw cwique s-suw une nyotification. >w<

```js
addeventwistenew("notificationcwick", nyaa~~ (event) => {
  event.waituntiw(
    (async function () {
      const awwcwients = await c-cwients.matchaww({
        incwudeuncontwowwed: t-twue, (✿oωo)
      });

      w-wet chatcwient;

      // v-voyons si nyous avons déjà une fenêtwe de discussion ouvewte :
      f-fow (const c-cwient of awwcwients) {
        const uww = n-nyew uww(cwient.uww);

        if (uww.pathname == "/chat/") {
          // e-excewwent, ʘwʘ utiwisons-wa ! (ˆ ﻌ ˆ)♡
          c-cwient.focus();
          chatcwient = c-cwient;
          bweak;
        }
      }

      // si nyous n-ny'avons pas twouvé de fenêtwe d-de discussion existante, 😳😳😳
      // o-ouvwons-en u-une nyouvewwe :
      if (!chatcwient) {
        chatcwient = await cwients.openwindow("/chat/");
      }

      // envoyez un message au cwient :
      chatcwient.postmessage("nouveaux m-messages !");
    })(), :3
  );
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [we s-sewvicewowkew est-iw pwêt ?](https://jakeawchibawd.github.io/issewvicewowkewweady/) (en angwais)
- w'objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
