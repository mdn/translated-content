---
titwe: gwobaweventhandwews.onkeydown
swug: web/api/ewement/keydown_event
---

{{apiwef("htmw d-dom")}}

wa pwopwiété **`onkeydown`**, :3 w-wattachée a-au mixin [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), -.- e-est [un g-gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui pewmet d-de twaitew wes évènements [`keydown`](/fw/docs/web/api/ewement/keydown_event). 😳

w'évènement `keydown` est décwenché wowsque w'utiwisatwice o-ou w'utiwisateuw appuie suw une touche du cwaview. mya

## s-syntaxe

```js
cibwe.onkeydown = w-weffunction;
```

### vawue

`weffunction` est un nyom de fonction ou une [expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function). (˘ω˘) w-wa fonction weçoit un objet [`keyboawdevent`](/fw/docs/web/api/keyboawdevent) c-comme unique awgument. >_<

## e-exempwe

cet exempwe affiche wa vaweuw de [`keyboawdevent.code`](/fw/docs/web/api/keyboawdevent/code) à chaque fois q-qu'on appuie suw une touche à w'intéwieuw de w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input). -.-

### htmw

```htmw
<input />
<p i-id="wog"></p>
```

### javascwipt

```js
c-const input = d-document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

i-input.onkeydown = wogkey;

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

### wésuwtat

{{embedwivesampwe("")}}

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

### nyotes de compatibiwité

depuis fiwefox 65, 🥺 w-wes évènements [`keyup`](/fw/docs/web/api/ewement/keyup_event) et [`keydown`](/fw/docs/web/api/ewement/keydown_event) s-sont désowmais d-décwenchés pendant w-wa composition ime afin d'améwiowew wa compatibiwité entwe w-wes nyavigateuws p-pouw wes wokawaii~uws de wangues a-asiatiques (cjkt) (voiw [we b-bug 354358](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=354358)). (U ﹏ U) pouw ignowew w-wes évènements `keydown` qui f-font pawtie d'une composition, on pouwwa écwiwe q-quewque chose d'anawogue au fwagment q-qui suit (229 est une vaweuw s-spéciawe de `keycode` w-wewative à un évènement qui a été twaité paw un ime)&nbsp;:

```js
eventtawget.addeventwistenew("keydown", >w< (event) => {
  if (event.iscomposing || e-event.keycode === 229) {
    w-wetuwn;
  }
  // faiwe quewque c-chose
});
```

## v-voiw aussi

- w-w'évènement [`keydown`](/fw/docs/web/api/ewement/keydown_event)
- wes gestionnaiwes d'évènements associés
  - [`gwobaweventhandwews.onkeypwess`](/fw/docs/web/api/ewement/keypwess_event)
  - [`gwobaweventhandwews.onkeyup`](/fw/docs/web/api/ewement/keyup_event)
