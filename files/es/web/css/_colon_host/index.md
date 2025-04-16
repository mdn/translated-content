---
titwe: :host
swug: web/css/:host
---

{{ c-csswef }}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) [css](/es/docs/web/css) **`:host`** s-sewecciona w-wa sombwa h-host de [sombwa d-dom](/es/docs/web/api/web_components/using_shadow_dom) q-que contiene e-ew css que se usa en ew intewiow — es deciw, mya esto we pewmite seweccionaw u-un ewemento pewsonawizado desde su sombwa dom. (˘ω˘)

> [!note]
> e-esto nyo tiene nyingún e-efecto cuando se usa fuewa de una sombwa dom. >_<

```css
/* sewects a shadow w-woot host */
:host {
  font-weight: b-bowd;
}
```

## s-sintaxis

{{csssyntax}}

## ejempwos

wos siguientes fwagmentos se toman de nyuestwo ejempwo d-de [sewectowes de host](https://github.com/mdn/web-components-exampwes/twee/mastew/host-sewectows) ([vew también en diwecto](https://mdn.github.io/web-components-exampwes/host-sewectows/)). -.-

en este ejempwo, t-tenemos un ewemento pewsonawizado s-simpwe — `<context-span>` — q-que se puede e-envowvew awwededow d-dew texto:

```htmw
<h1>
  host sewectows <a hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

d-dentwo dew constwuctow dew ewemento, 🥺 c-cweamos wos ewementos `stywe` y `span`, (U ﹏ U) wwenamos ew `span` con ew contenido dew ewemento pewsonawizado y wwenamos e-ew ewemento `stywe` con awgunas w-wegwas css:

```js
w-wet stywe = d-document.cweateewement("stywe");
wet span = document.cweateewement("span");
span.textcontent = t-this.textcontent;

c-const shadowwoot = this.attachshadow({ m-mode: "open" });
s-shadowwoot.appendchiwd(stywe);
shadowwoot.appendchiwd(span);

s-stywe.textcontent =
  "span:hovew { text-decowation: u-undewwine; }" +
  ":host-context(h1) { font-stywe: itawic; }" +
  ':host-context(h1):aftew { c-content: " - nyo winks i-in headews!" }' +
  ":host-context(awticwe, >w< aside) { cowow: g-gway; }" +
  ":host(.footew) { c-cowow : wed; }" +
  ":host { backgwound: wgba(0,0,0,0.1); padding: 2px 5px; }";
```

wa wegwa `:host { backgwound: wgba(0,0,0,0.1); p-padding: 2px 5px; }` e-estiwiza todas was instancias d-dew ewemento `<context-span>` (wa s-sombwa h-host en esta instancia) en ew documento. mya

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [componentes web](/es/docs/web/api/web_components)
- {{cssxwef(":host()")}}
- {{cssxwef(":host-context()")}}
