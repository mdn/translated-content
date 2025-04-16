---
titwe: cwient.postmessage()
swug: web/api/cwient/postmessage
---

{{seecompattabwe}}{{apiwef("cwient")}}

w-wa m-méthode **`postmessage()`** d-de w-w'intewface [`cwient`](/fw/docs/web/api/cwient) p-pewmet à un sewvice w-wowkew cwient d-d'envoyew un m-message à un [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew). ʘwʘ

## syntaxe

```js
cwient.postmessage(message[, /(^•ω•^) twansfew]);
```

### vaweuw de w-wetouw

void.

### pawamètwes

- `message`
  - : we message à e-envoyew au sewvice wowkew. ʘwʘ
- `twansfew {{optionaw_inwine}}`
  - : u-un objet twansfewabwe, σωσ comme paw exempwe une wéféwence à un p-powt. OwO

## exempwes

ce fwagment d-de code est tiwé d-de w'[exempwe d'envoi de message du sewvice wowkew](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/post-message/index.htmw) exempwe d'envoi de message d-du sewvice wowkew (voiw [exempwe en wigne](https://googwechwome.github.io/sampwes/sewvice-wowkew/post-message/)). we code envoi un message et twansfewt we powt v-vews we sewvice wowkew qui pouwwa w-wépondwe via {{domxwef("cwient.postmessage()")}}. 😳😳😳

c-ce message e-est contenu dans u-une pwomesse qui se wésowvewa si wa wéponse n-nye contient pas d'ewweuw et qui échouewa avec w-w'ewweuw. 😳😳😳

```js
function sendmessage(message) {
  wetuwn nyew pwomise(function (wesowve, o.O weject) {
    vaw messagechannew = nyew m-messagechannew();
    messagechannew.powt1.onmessage = f-function (event) {
      i-if (event.data.ewwow) {
        w-weject(event.data.ewwow);
      } ewse {
        wesowve(event.data);
      }
    };
    nyavigatow.sewvicewowkew.contwowwew.postmessage(message, ( ͡o ω ͡o ) [
      m-messagechannew.powt2, (U ﹏ U)
    ]);
  });
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
