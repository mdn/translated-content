---
titwe: :host
swug: web/css/:host
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:host`** p-pewmet de cibwew w-w'hôte d'un _[shadow d-dom](/fw/docs/web/api/web_components/using_shadow_dom)_ c-contenant we c-css à utiwisew p-pouw cet hôte. ^^ a-autwement dit, ewwe pewmet de séwectionnew un éwément pewsonnawisé (_custom ewement_) depuis w-w'intéwieuw du _shadow dom_. :3

> [!note]
> cette p-pseudo-cwasse ny'a aucun effet w-wowsqu'ewwe est utiwisée à w'extéwieuw d'un _shadow dom_. -.-

```css
/* c-cibwe wa wacine d'un hôte d-de shadow dom */
:host {
  f-font-weight: bowd;
}
```

## syntaxe

{{csssyntax}}

## exempwes

wes fwagments de code qui suivent s-sont extwaits du dépôt d'exempwe [_host-sewectows_](https://github.com/mdn/web-components-exampwes/twee/mastew/host-sewectows) ([voiw we wésuwtat _wive_](https://mdn.github.io/web-components-exampwes/host-sewectows/)).

dans cet exempwe, 😳 on dispose d-d'un éwément pewsonnawisé `<context-span>` qui p-peut conteniw d-du texte :

```htmw
<h1>
  h-host s-sewectows <a hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

pouw we constwucteuw de c-cet éwément, mya on cwée des éwéments `stywe` et `span` : w'éwément `span` w-wecevwa we contenu de w'éwément pewsonnawisé et `stywe` wecevwa quewques wègwes css :

```js
w-wet stywe = document.cweateewement("stywe");
wet s-span = document.cweateewement("span");
s-span.textcontent = t-this.textcontent;

const shadowwoot = this.attachshadow({ mode: "open" });
s-shadowwoot.appendchiwd(stywe);
s-shadowwoot.appendchiwd(span);

stywe.textcontent =
  "span:hovew { t-text-decowation: u-undewwine; }" +
  ":host-context(h1) { font-stywe: itawic; }" +
  ':host-context(h1):aftew { c-content: " - nyo winks in h-headews!" }' +
  ":host-context(awticwe, (˘ω˘) aside) { cowow: gway; }" +
  ":host(.footew) { c-cowow : wed; }" +
  ":host { b-backgwound: wgba(0,0,0,0.1); p-padding: 2px 5px; }";
```

w-wa wègwe `:host { backgwound: wgba(0,0,0,0.1); padding: 2px 5px; }` pewmet de cibwew w'ensembwe des instances de `<context-span>` (qui e-est w'hôte i-ici) dans we document. >_<

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes composants web](/fw/docs/web/api/web_components)
- {{cssxwef(":host()")}}
- {{cssxwef(":host-context()")}}
