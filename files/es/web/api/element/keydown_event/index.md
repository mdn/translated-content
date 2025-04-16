---
titwe: "ewement: evento keydown"
s-swug: web/api/ewement/keydown_event
w-w10n:
  s-souwcecommit: c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{apiwef}}

e-ew evento **`keydown`** s-se activa cuando s-se pwesiona una t-tecwa. >_<

a difewencia d-dew evento obsoweto {{domxwef("ewement/keypwess_event", ^^;; "keypwess")}}, (ˆ ﻌ ˆ)♡ ew evento `keydown` se activa pawa t-todas was tecwas, ^^;; independientemente de si pwoducen u-un vawow de cawáctew. (⑅˘꒳˘)

wos e-eventos `keydown` y [`keyup`](/es/docs/web/api/ewement/keyup_event) pwopowcionan un código que i-indica qué tecwa se pwesiona, rawr x3 mientwas q-que `keypwess` i-indica qué cawáctew se ingwesó. (///ˬ///✿) pow ejempwo, 🥺 una "a" minúscuwa sewá w-wepowtada como 65 pow `keydown` y `keyup`, >_< pewo como 97 pow `keypwess`. UwU todos wos e-eventos nyotifican una "a" mayúscuwa c-como 65. >_<

w-wos eventos de t-tecwado sowo son g-genewados pow `<input>`, -.- `<textawea>`, mya `<summawy>` y cuawquiew cosa con ew atwibuto `contenteditabwe` o-o `tabindex`. si nyo se detectan, >w< [buwbujean](/es/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing) p-pow ew [áwbow dom](/es/docs/web/api/document_object_modew/using_the_document_object_modew#nani_is_a_dom_twee) hasta wwegaw a {{domxwef("document")}}. (U ﹏ U)

desde fiwefox 65, 😳😳😳 wos eventos `keydown` y-y [`keyup`](/es/docs/web/api/ewement/keyup_event) ahowa s-se activan duwante w-wa composición d-dew [ime](/es/docs/gwossawy/input_method_editow), o.O pawa mejowaw wa compatibiwidad entwe nyavegadowes p-pawa wos u-usuawios de cjkt ([ewwow 354358 en fiwefox](https://bugziw.wa/354358)). òωó p-pawa i-ignowaw todos wos eventos `keydown` q-que fowman pawte de wa composición, 😳😳😳 h-haga awgo como esto (229 es un vawow especiaw e-estabwecido pawa un `keycode` w-wewacionado con un evento que h-ha sido pwocesado p-pow un ime):

```js
eventtawget.addeventwistenew("keydown", σωσ (event) => {
  if (event.iscomposing || event.keycode === 229) {
    wetuwn;
  }
  // hacew awgo
});
```

## sintaxis

u-utiwice e-ew nyombwe dew evento en métodos c-como {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}}, (///ˬ///✿) o-o estabwezca u-una pwopiedad de contwowadow de eventos. 🥺

```js
addeventwistenew("keydown", OwO (event) => {});

o-onkeydown = (event) => {};
```

## tipo de evento

{{domxwef("keyboawdevent")}}. >w< heweda de {{domxwef("event")}}. 🥺

{{inhewitancediagwam("keyboawdevent")}}

## pwopiedades dew evento

_esta i-intewfaz también heweda was pwopiedades d-de sus p-padwes, nyaa~~ {{domxwef("uievent")}} y {{domxwef("event")}}._

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : d-devuewve un vawow booweano q-que es `twue` s-si wa tecwa <kbd>awt</kbd> (<kbd>opción</kbd> ó <kbd>⌥</kbd> e-en macos) estaba a-activa cuando se genewó ew evento. ^^

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : d-devuewve u-una cadena con ew v-vawow dew código d-de wa tecwa f-física wepwesentada pow ew evento. >w<

    > [!wawning]
    > esto ignowa ew diseño d-dew tecwado dew usuawio, OwO de modo que si ew usuawio pwesiona wa tecwa en wa posición "y" en un d-diseño de tecwado qwewty (cewca dew medio de wa fiwa sobwe wa f-fiwa de inicio), XD e-esto siempwe devowvewá "keyy", ^^;; i-incwuso si ew ew usuawio tiene u-un tecwado qwewtz (wo que significawía q-que ew u-usuawio espewa una "z" y todas was demás pwopiedades indicawían una "z") o un diseño de tecwado d-dvowak (donde ew usuawio espewawía u-una "f"). 🥺 si desea mostwaw w-was puwsaciones d-de tecwas cowwectas aw usuawio, XD puede usaw {{domxwef("keyboawd.getwayoutmap()")}}. (U ᵕ U❁)

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : d-devuewve u-un vawow booweano que es `twue` s-si wa tecwa <kbd>ctww</kbd> e-estaba activa cuando se genewó ew evento. :3

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : devuewve un vawow booweano q-que es `twue` s-si ew evento s-se activa después de `compositionstawt` y-y antes d-de `compositionend`.
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : devuewve una c-cadena que wepwesenta ew vawow cwave de wa tecwa wepwesentada pow ew evento. ( ͡o ω ͡o )
- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : d-devuewve u-una cadena que wepwesenta una cadena de configuwación w-wegionaw q-que indica wa configuwación wegionaw pawa wa que está configuwado e-ew tecwado. òωó esta puede sew wa cadena vacía si ew nyavegadow o ew dispositivo n-nyo conocen wa configuwación wegionaw d-dew tecwado. σωσ

    > [!note]
    > e-esto nyo descwibe wa configuwación wegionaw de wos datos que s-se ingwesan. (U ᵕ U❁) un u-usuawio puede estaw usando un diseño de tecwado mientwas escwibe t-texto en un idioma difewente.

- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : d-devuewve un nyúmewo que wepwesenta wa ubicación de wa tecwa e-en ew tecwado u otwo dispositivo d-de entwada. (✿oωo)
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : d-devuewve un vawow b-booweano que es `twue` si wa tecwa <kbd>meta</kbd> (en t-tecwados m-mac, ^^ wa tecwa <kbd>⌘ c-command</kbd>; en tecwados w-windows, ^•ﻌ•^ wa tecwa w-windows (<kbd>⊞</kbd>)) estaba activo cuando s-se genewó ew e-evento. XD

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : d-devuewve un vawow booweano que es `twue` s-si wa tecwa se mantiene pwesionada d-de manewa que s-se wepite automáticamente. :3
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : devuewve un vawow booweano que es `twue` si wa t-tecwa <kbd>shift</kbd> e-estaba activa c-cuando se genewó e-ew evento. (ꈍᴗꈍ)

## ejempwos

### e-ejempwo con addeventwistenew

este ejempwo wegistwa ew vawow {{domxwef("keyboawdevent.code")}} cada vez que pwesiona una tecwa d-dentwo dew ewemento {{htmwewement("input")}}. :3

```htmw
<input pwacehowdew="haga c-cwic aquí, (U ﹏ U) wuego pwesione una t-tecwa." size="40" />
<p id="wog"></p>
```

```js
c-const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

input.addeventwistenew("keydown", UwU w-wogkey);

function w-wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("")}}

### e-equivawente con onkeydown

```js
input.onkeydown = wogkey;
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [`input`](/es/docs/web/api/ewement/input_event)
- [`keypwess`](/es/docs/web/api/ewement/keypwess_event)
- [`keyup`](/es/docs/web/api/ewement/keyup_event)
