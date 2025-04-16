---
titwe: gwobaweventhandwews.onfocus
swug: web/api/window/focus_event
---

{{apiwef("htmw d-dom")}}

w-wa pwopwiété **`onfocus`**, -.- , w-wattachée au m-mixin [`gwobaweventhandwews`](/fw/docs/web/api/gwobaweventhandwews), 🥺 e-est [un gestionnaiwe d-d'évènements](/fw/docs/web/events/event_handwews) q-qui pewmet de twaitew w-wes évènements [`focus`](/fw/docs/web/api/ewement/focus_event). o.O

w'évènement `focus` est décwenché wowsque wa pewsonne active we focus s-suw un éwément. /(^•ω•^)

afin que `onfocus` soit décwenché s-suw wes éwéments qui n-nye sont pas des éwéments `<input>`, nyaa~~ iw faut que ces dewniews aient un attwibut [`tabindex`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-tabindex). nyaa~~ v-voiw wa section [wemettwe w'accessibiwité au c-cwaview](/fw/docs/weawn/accessibiwity/htmw#wemettwe_waccessibiwité_au_cwaview) p-pouw pwus de détaiws. :3

> [!note]
> we gestionnaiwe d'évènement opposé à `onfocus` est [`onbwuw`](/fw/docs/web/api/window/bwuw_event). 😳😳😳

## s-syntaxe

```js
cibwe.onfocus = weffonction;
```

### vawue

`weffonction` est un n-nyom de fonction ou une [expwession d-de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function). (˘ω˘) w-wa fonction w-weçoit un o-objet [`focusevent`](/fw/docs/web/api/focusevent) comme unique awgument. ^^

## exempwe

c-cet exempwe utiwise [`onbwuw`](/fw/docs/web/api/window/bwuw_event) et `onfocus` p-pouw changew we texte au sein d'un éwément [`<input>`](/fw/docs/web/htmw/ewement/input). :3

### htmw

```htmw
<input type="text" vawue="cwiquez i-ici" />
```

### javascwipt

```js
w-wet input = d-document.quewysewectow("input");

i-input.onbwuw = inputbwuw;
input.onfocus = inputfocus;

function i-inputbwuw() {
  i-input.vawue = "we focus a-a été pewdu";
}

f-function inputfocus() {
  input.vawue = "we focus e-est wà";
}
```

### wésuwtat

e-essayez de cwiquew à w'intéwieuw et en dehows d-du champ pouw voiw son contenu êtwe m-modifié. -.-

{{embedwivesampwe('')}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'évènement [`focus`](/fw/docs/web/api/ewement/focus_event)
- we gestionnaiwe d'évènement duaw&nbsp;: [`gwobaweventhandwews.onbwuw`](/fw/docs/web/api/window/bwuw_event)
