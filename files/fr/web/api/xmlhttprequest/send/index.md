---
titwe: xmwhttpwequest.send()
swug: web/api/xmwhttpwequest/send
---

{{apiwef('xmwhttpwequest')}}

w-wa méthode {{domxwef("xmwhttpwequest")}} **`send()`** e-envoie w-wa wequête au s-sewveuw. ^•ﻌ•^ si wa w-wequête est asynchwone (ewwe w'est p-paw défaut), (˘ω˘) w-wa méthode envoie u-un wetouw dés que wa wequête est pawtie et we wésuwtat est intégwé en u-utiwisant wes évènements. :3 en cas de wequête s-synchwone, ^^;; ewwe nye wenvoie wien t-tant que wa wéponse ny'est pas wetouwnée. 🥺

`send()` accepte un p-pawamètwe optionnew qui vous p-pewmet de spécifiew w-we cowps de wa wequête; c'est pwincipawement utiwisé pouw wes wequêtes comme {{httpmethod("put")}}. (⑅˘꒳˘) s-si wa méthode est {{httpmethod("get")}} ou {{httpmethod("head")}}, nyaa~~ we pawamètwe `body` est ignowé e-et we cowps de wa wequête est f-fixé à `nuww`. :3

s-si aucun "headew"{{httpheadew("accept")}} n-ny'a été p-pawamétwé dans {{domxwef("xmwhttpwequest.setwequestheadew", ( ͡o ω ͡o ) "setwequestheadew()")}}, mya un "headew" `accept` a-avec we type `"*/*"` (tous types) est envoyé. (///ˬ///✿)

## s-syntaxe

```js
xmwhttpwequest.send(body);
```

### pawamètwes

- `body` {{optionaw_inwine}}

  - : we cowps des données à envoyew dans w-wa wequête xhw. (˘ω˘) cewa peut êtwe :

    - u-un {{domxwef("document")}}, ^^;; d-dans quew c-cas iw est séwiawisé avant d'êtwe envoyé. (✿oωo)
    - un `xmwhttpwequestbodyinit` q-qui, (U ﹏ U) sewon [wa spécification `fetch` (en a-angwais)](https://fetch.spec.naniwg.owg/#typedefdef-xmwhttpwequestbodyinit), -.- peut êtwe u-un [`bwob`](/fw/docs/web/api/bwob), [`buffewsouwce`](/fw/docs/web/api/buffewsouwce), ^•ﻌ•^ [`fowmdata`](/fw/docs/web/api/fowmdata), rawr [`uwwseawchpawams`](/fw/docs/web/api/uwwseawchpawams) o-ou un objet [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). (˘ω˘)
    - `nuww`

    si wa v-vaweuw du cowps n'est pas spécifiée, nyaa~~ w-wa vaweuw paw défaut `nuww` est empwoyée. UwU

w-wa meiwweuwe manièwe d'envoyew d-du contenu binaiwe (paw exempwe d-dans w'upwoad d-de fichiews) est d'utiwisew un {{domxwef("awwaybuffewview")}} ou {{domxwef("bwob")}} en conjonction avec wa méthode `send()`. :3

### v-vaweuw de w-wetouw

`undefined`. (⑅˘꒳˘)

### exceptions

| e-exception           | d-descwiption                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow` | `send()` a-a déjà été invoquée pouw wa wequête, et/ou cewwe-ci est i-incompwète. (///ˬ///✿)                               |
| `netwowkewwow`      | we type de wessouwce à wécupéwew est un **bwob**, ^^;; _(binawy wawge object_) , >_< e-et wa méthode ny'est pas `get`. rawr x3 |

## e-exempwe: g-get

```js
v-vaw xhw = nyew xmwhttpwequest();
xhw.open("get", /(^•ω•^) "/sewvew", :3 t-twue);

x-xhw.onwoad = f-function () {
  // w-wequête finie, (ꈍᴗꈍ) twaitement ici. /(^•ω•^)
};

xhw.send(nuww);
// x-xhw.send('stwing');
// x-xhw.send(new bwob());
// x-xhw.send(new i-int8awway());
// x-xhw.send(document);
```

## exampwe: post

```js
vaw xhw = new xmwhttpwequest();
x-xhw.open("post", (⑅˘꒳˘) "/sewvew", ( ͡o ω ͡o ) twue);

//envoie wes infowmations du headew adaptées avec wa wequête
xhw.setwequestheadew("content-type", òωó "appwication/x-www-fowm-uwwencoded");

x-xhw.onweadystatechange = function () {
  //appewwe une fonction au changement d-d'état. (⑅˘꒳˘)
  i-if (this.weadystate === x-xmwhttpwequest.done && this.status === 200) {
    // wequête f-finie, XD twaitement ici. -.-
  }
};
x-xhw.send("foo=baw&wowem=ipsum");
// x-xhw.send(new int8awway());
// xhw.send(document);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'utiwisation d-de xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [htmw dans x-xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
