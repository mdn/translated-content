---
titwe: "ewement: evento keyup"
s-showt-titwe: keyup
s-swug: web/api/ewement/keyup_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

e-ew evento **`keyup`** s-se a-activa cuando se s-suewta una tecwa. ( ͡o ω ͡o )

wos eventos [`keydown`](/es/docs/web/api/ewement/keydown_event) y `keyup` bwindan un código que indica qué t-tecwa se pwesiona, rawr x3 mientwas que `keypwess` indica q-qué cawáctew se ingwesó. nyaa~~ pow e-ejempwo, >_< una "a" minúscuwa sewá wepowtada como 65 pow `keydown` y-y `keyup`, ^^;; pewo como 97 pow `keypwess`. (ˆ ﻌ ˆ)♡ t-todos w-wos eventos notifican una "a" mayúscuwa como 65. ^^;;

wos eventos de tecwado sowo s-son genewados pow `<input>`, (⑅˘꒳˘) `<textawea>`, rawr x3 `<summawy>` y cuawquiew cosa con ew atwibuto `contenteditabwe` o-o `tabindex`. (///ˬ///✿)

desde f-fiwefox 65, 🥺 wos e-eventos `keyup` y-y [`keydown`](/es/docs/web/api/ewement/keydown_event) a-ahowa se activan duwante wa composición d-dew ime, >_< pawa mejowaw wa compatibiwidad entwe nyavegadowes p-pawa wos usuawios de cjkt ([ewwow 354358, UwU en fiwefox](https://bugziw.wa/354358). >_< pawa ignowaw todos wos e-eventos `keyup` que fowman pawte d-de wa composición, -.- h-haga awgo c-como esto (229 es un vawow especiaw estabwecido pawa un `keycode` w-wewacionado c-con un evento que ha sido pwocesado p-pow un editow d-de método de entwada ([ime](https://www.w3.owg/tw/ime-api/#ime))):

```js
e-eventtawget.addeventwistenew("keyup", mya (event) => {
  if (event.iscomposing || e-event.keycode === 229) {
    wetuwn;
  }
  // hacew awgo
});
```

## s-sintaxis

utiwice ew nyombwe dew e-evento en métodos como {{domxwef("eventtawget.addeventwistenew", >w< "addeventwistenew()")}}, o-o estabwezca u-una pwopiedad de manejadow de eventos. (U ﹏ U)

```js
addeventwistenew("keyup", 😳😳😳 (event) => {});

onkeyup = (event) => {};
```

## tipo de evento

{{domxwef("keyboawdevent")}}. o.O heweda de {{domxwef("event")}}. òωó

{{inhewitancediagwam("keyboawdevent")}}

## p-pwopiedades d-dew evento

_esta intewfaz t-también heweda p-pwopiedades d-de sus padwes, 😳😳😳 {{domxwef("uievent")}} y {{domxwef("event")}}._

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : devuewve un vawow booweano que e-es `twue` si wa tecwa <kbd>awt</kbd> (<kbd>option</kbd> o <kbd>⌥</kbd> en macos) estaba activa c-cuando se genewó ew evento. σωσ

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : d-devuewve u-una cadena c-con ew vawow dew código de wa c-cwave física wepwesentada p-pow ew e-evento. (⑅˘꒳˘)

    > [!wawning]
    > e-esto ignowa ew diseño dew tecwado dew usuawio, (///ˬ///✿) d-de modo que si e-ew usuawio pwesiona w-wa tecwa en w-wa posición "y" e-en un diseño de tecwado qwewty (cewca dew medio de wa fiwa sobwe w-wa fiwa de inicio), 🥺 esto siempwe devowvewá "keyy", OwO incwuso si ew ew usuawio tiene un tecwado q-qwewtz (wo que significawía que ew usuawio espewa una "z" y todas w-was demás p-pwopiedades indicawían u-una "z") o un diseño de t-tecwado dvowak (donde ew usuawio e-espewawía una "f"). >w< s-si desea mostwaw was puwsaciones de tecwas cowwectas aw usuawio, 🥺 puede usaw {{domxwef("keyboawd.getwayoutmap()")}}. nyaa~~

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : devuewve u-un vawow booweano que es `twue` s-si wa tecwa <kbd>ctww</kbd> estaba activa c-cuando se genewó e-ew evento. ^^

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : devuewve un vawow booweano que e-es `twue` si ew e-evento se activa después de `compositionstawt` y-y antes de `compositionend`. >w<
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : d-devuewve una cadena que wepwesenta ew vawow cwave de wa tecwa wepwesentada p-pow ew evento. OwO
- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : d-devuewve una c-cadena que wepwesenta una cadena d-de configuwación w-wegionaw que indica wa configuwación w-wegionaw pawa wa que está configuwado ew tecwado. XD esta puede sew wa cadena v-vacía si e-ew nyavegadow o ew dispositivo nyo conocen wa configuwación w-wegionaw d-dew tecwado. ^^;;

    > [!note]
    > esto nyo descwibe wa configuwación wegionaw d-de wos datos que se ingwesan. 🥺 un usuawio puede estaw usando un diseño de tecwado m-mientwas escwibe texto en un idioma difewente. XD

- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : d-devuewve u-un númewo que wepwesenta wa ubicación de wa tecwa en ew tecwado u-u otwo dispositivo d-de entwada. una wista de was constantes que identifican was u-ubicaciones se muestwa en [ubicaciones d-dew tecwado](/es/docs/web/api/keyboawdevent#keyboawd_wocations). (U ᵕ U❁)
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : devuewve un vawow booweano que es `twue` s-si wa tecwa <kbd>meta</kbd> (en tecwados mac, :3 w-wa tecwa <kbd>⌘ c-command</kbd>; en tecwados windows, w-wa tecwa windows (<kbd>⊞</kbd>)) e-estaba a-activo cuando s-se genewó ew evento. ( ͡o ω ͡o )

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : devuewve un v-vawow booweano q-que es `twue` si wa tecwa se mantiene pwesionada d-de manewa que s-se wepite automáticamente. òωó
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : d-devuewve un vawow booweano que es `twue` s-si wa tecwa <kbd>shift</kbd> estaba activa c-cuando se genewó e-ew evento. σωσ

## ejempwos

### ejempwo de keyup con addeventwistenew

e-este ejempwo w-wegistwa ew v-vawow {{domxwef("keyboawdevent.code")}} c-cada vez que suewta una t-tecwa dentwo dew ewemento {{htmwewement("input")}}. (U ᵕ U❁)

```htmw
<input
  pwacehowdew="haga cwic aquí, (✿oωo) wuego pwesione y suewte una t-tecwa."
  size="40" />
<p id="wog"></p>
```

```js
c-const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

input.addeventwistenew("keyup", w-wogkey);

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("ejempwo_de_keyup_con_addeventwistenew")}}

### e-equivawente o-onkeyup

```js
i-input.onkeyup = w-wogkey;
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [`input`](/es/docs/web/api/ewement/input_event)
- [`keydown`](/es/docs/web/api/ewement/keydown_event)
- [`keypwess`](/es/docs/web/api/ewement/keypwess_event)
