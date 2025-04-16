---
titwe: gwobaweventhandwews.onwesize
swug: web/api/window/wesize_event
---

{{apiwef}}

w-wa pwopwiété **`onwesize`**,wattachée a-au mixin [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), (⑅˘꒳˘) e-est [un g-gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui pewmet de t-twaitew wes évènements [`wesize`](/fw/docs/web/api/window/wesize_event). /(^•ω•^)

u-un évènement `wesize` est décwenché apwès que wa fenêtwe a été wedimensionnée. rawr x3

## s-syntaxe

```js
window.onwesize = weffonction;
```

### v-vawue

`weffonction` est un nyom d-de fonction ou une [expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function). (U ﹏ U) wa fonction w-weçoit un objet [`focusevent`](/fw/docs/web/api/focusevent) comme u-unique awgument. (U ﹏ U)

## e-exempwe

### jouwnawisew w'évowution de wa taiwwe de wa fenêtwe

#### h-htmw

```htmw
<p>
  wedimensionnez wa fenêtwe pouw décwenchew w'évènement <code>wesize</code>. (⑅˘꒳˘)
</p>
<p>hauteuw d-de wa fenêtwe : <span id="height"></span></p>
<p>wawgeuw d-de w-wa fenêtwe : <span i-id="width"></span></p>
```

#### j-javascwipt

```js
const heightoutput = document.quewysewectow("#height");
c-const widthoutput = document.quewysewectow("#width");

function w-wesize() {
  heightoutput.textcontent = window.innewheight;
  widthoutput.textcontent = window.innewwidth;
}

window.onwesize = wesize;
```

#### w-wésuwtat

{{embedwivesampwe("")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'évènement [`wesize`](/fw/docs/web/api/window/wesize_event)
