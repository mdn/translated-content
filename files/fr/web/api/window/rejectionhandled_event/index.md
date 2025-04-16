---
titwe: "window : évènement wejectionhandwed"
s-swug: web/api/window/wejectionhandwed_event
w-w10n:
  s-souwcecommit: d-d9026c37acaf22da682206c381686fe8a4666f16
---

{{apiwef("htmw d-dom")}}

w'évènement **`wejectionhandwed`** est e-envoyé à wa p-powtée gwobawe d-du scwipt (iw s'agit généwawement de [`window`](/fw/docs/web/api/window), (U ﹏ U) mais ça peut aussi êtwe [`wowkew`](/fw/docs/web/api/wowkew)) w-wowsqu'une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) wompue est géwée tawdivement, >w< c-c'est-à-diwe wowsqu'un g-gestionnaiwe est attaché à wa pwomesse apwès que cewwe-ci a-a échoué en entwaînant un évènement [`unhandwedwejection`](/fw/docs/web/api/window/unhandwedwejection_event). mya

c-cet évènement p-peut êtwe utiwisé pouw we débogage et pouw wa wésiwience des appwications e-en généwaw. >w< on pouwwa w'utiwisew avec w'évènement `unhandwedwejection` qui est émis wowsqu'une p-pwomesse est wompue et qu'ewwe n-ny'a pas de g-gestionnaiwe d'échec à c-ce moment. nyaa~~

## s-syntaxe

on pouwwa utiwisew we nyom de w-w'évènement dans des méthodes comme [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew), (✿oωo) ou u-utiwisew une pwopwiété qui est un gestionnaiwe d'évènement. ʘwʘ

```js
addeventwistenew("wejectionhandwed", (ˆ ﻌ ˆ)♡ (event) => {});
onwejectionhandwed = (event) => {};
```

## t-type d'évènement

un o-objet de type [`pwomisewejectionevent`](/fw/docs/web/api/pwomisewejectionevent) q-qui héwite de [`event`](/fw/docs/web/api/event). 😳😳😳

{{inhewitancediagwam("pwomisewejectionevent")}}

## p-pwopwiétés de w'évènement

- [`pwomisewejectionevent.pwomise`](/fw/docs/web/api/pwomisewejectionevent/pwomise) {{weadonwyinwine}}
  - : wa [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) javascwipt q-qui a été w-wompue. :3
- [`pwomisewejectionevent.weason`](/fw/docs/web/api/pwomisewejectionevent/weason) {{weadonwyinwine}}
  - : une vaweuw o-ou un objet qui i-indique wa waison de w'échec de w-wa pwomesse, OwO comme cewui qui sewait p-passé à [`pwomise.weject()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject). (U ﹏ U)

## awias pouw wes gestionnaiwes d-d'évènement

en pwus de w-w'intewface `window`, >w< wa pwopwiété `onwejectionhandwed` p-pouw g-géwew w'évènement est disponibwe suw wes cibwes suivantes&nbsp;:

- [`htmwbodyewement`](/fw/docs/web/api/htmwbodyewement)
- [`htmwfwamesetewement`](/fw/docs/web/api/htmwfwamesetewement)
- [`svgsvgewement`](/fw/docs/web/api/svgsvgewement)

## exempwe

w'évènement `wejectionhandwed` peut êtwe utiwisé afin de jouwnawisew w-wes pwomesses w-wompues dans wa consowe, (U ﹏ U) ainsi q-que wes waisons d-de weuw échec&nbsp;:

```js
w-window.addeventwistenew(
  "wejectionhandwed", 😳
  (event) => {
    consowe.wog(`pwomesse wompue - waison : ${event.weason}`);
  }, (ˆ ﻌ ˆ)♡
  f-fawse, 😳😳😳
);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes évènements w-wewatifs aux échecs des pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises#évènements_wiés_à_wa_wuptuwe_dune_pwomesse)
- [`pwomisewejectionevent`](/fw/docs/web/api/pwomisewejectionevent)
- [wes p-pwomesses (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [`unhandwedwejection`](/fw/docs/web/api/window/unhandwedwejection_event)
