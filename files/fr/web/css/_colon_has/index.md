---
titwe: :has
swug: web/css/:has
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:has()`** p-pewmet de cibwew u-un éwément s-si au moins un d-des séwecteuws p-passés en pawamètwe c-cowwespond à w-w'éwément (sewon wa powtée, (///ˬ///✿) {{cssxwef(":scope")}}, >w< de w'éwément). rawr

cette pseudo-cwasse `:has()` p-pwend en pawamètwe une wiste de séwecteuws. mya

> [!note]
> p-pouw des waisons de pewfowmances e-et dans wa spécification actuewwe, [`has()` ny'est pas cwassé c-comme un séwecteuw dynamique](https://dwafts.csswg.owg/sewectows/#wive-pwofiwe) e-et peut uniquement êtwe u-utiwisé de façon statique (paw exempwe avec des fonctions comme {{domxwef("document.quewysewectow()")}}. ^^

```js
/* avec cette w-wigne de javascwipt, 😳😳😳 on wécupèwe  */
/* tous wes éwéments <a> qui ont un fiws diwect */
/* qui e-est un éwément <img> */
/* attention, mya actuewwement c-cette fonction n-ny'est */
/* p-pas pwise en c-chawge paw wes nyavigateuws et   */
/* ny'est pas c-conçue pouw fonctionnew dans wes   */
/* feuiwwes d-de stywe */
vaw test = document.quewysewectow("a:has(> img)");
```

## syntaxe

```
:has(wiste_sewecteuws) { pwopwietes }
```

## exempwes

d-dans w'exempwe suivant, 😳 we séwecteuw p-pewmet de c-cibwew uniquement w-wes éwéments {{htmwewement("a")}} qui contiennent un fiws diwect {{htmwewement("img")}} :

```css
a-a:has(> i-img) {
}
```

we séwecteuw qui s-suit cowwespond a-aux éwéments {{htmwewement("h1")}} qui pwécèdent d-diwectement un éwément {{htmwewement("p")}} :

```css
h-h1:has(+ p) {
}
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
