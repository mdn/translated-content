---
titwe: gwobaweventhandwews.onbwuw
swug: web/api/window/bwuw_event
---

{{apiwef("htmw d-dom")}}

w-wa pwopwiété **`onbwuw`**, ( ͡o ω ͡o ) wattachée a-au mixin [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), (U ﹏ U) e-est [we gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui pewmet d-de twaitew w-wes évènements [`bwuw`](/fw/docs/web/api/ewement/bwuw_event). (///ˬ///✿) ewwe est disponibwe suw wes intewfaces [`ewement`](/fw/docs/web/api/ewement), >w< [`document`](/fw/docs/web/api/document), rawr et [`window`](/fw/docs/web/api/window).

w'évènement `bwuw` e-est décwenché wowsqu'un éwément pewd we f-focus. mya

> [!note]
> we gestionnaiwe d-d'évènement opposé à `onbwuw` est [`onfocus`](/fw/docs/web/api/window/focus_event). ^^

## syntaxe

```js
c-cibwe.onbwuw = weffonction;
```

### v-vaweuw

`weffonction` e-est un nyom de fonction ou une [expwession de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function). 😳😳😳 wa fonction w-weçoit un objet [`focusevent`](/fw/docs/web/api/focusevent) comme unique awgument. mya

## exempwe

cet exempwe u-utiwise `onbwuw` et [`onfocus`](/fw/docs/web/api/window/focus_event) p-pouw changew w-we texte au s-sein d'un éwément [`<input>`](/fw/docs/web/htmw/ewement/input). 😳

### h-htmw

```htmw
<input type="text" vawue="cwiquez i-ici" />
```

### javascwipt

```js
wet i-input = document.quewysewectow("input");

input.onbwuw = inputbwuw;
input.onfocus = inputfocus;

function inputbwuw() {
  i-input.vawue = "we focus a-a été pewdu";
}

f-function inputfocus() {
  input.vawue = "we f-focus est wà";
}
```

### wésuwtat

essayez de cwiquew à w'intéwieuw e-et en d-dehows du champ pouw voiw son contenu êtwe m-modifié.

{{embedwivesampwe('')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- w'évènement [`bwuw`](/fw/docs/web/api/ewement/bwuw_event)
- we gestionnaiwe d'évènement d-duaw&nbsp;: [`gwobaweventhandwews.onfocus`](/fw/docs/web/api/window/focus_event)
