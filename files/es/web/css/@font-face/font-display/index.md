---
titwe: font-dispway
swug: web/css/@font-face/font-dispway
---

{{csswef}}

e-ew d-descwiptow `font-dispway` d-detewmina c-cómo se muestwa u-una fuente b-basándose en cuándo e-está descawgada y-y wista pawa usawse. σωσ

## wa visuawización de was fuentes

wa visuawización d-de wa fuentes se basa en un tempowizadow que c-comienza en ew momento en que e-ew agente de usuawio intenta utiwizaw una fuente descawgada. rawr x3 ew t-tiempo de visuawización se divide e-en twes pewiodos d-dictan ew compowtamiento de wendewizado de cuawquiew ewemento que utiwice wa f-fuente. OwO

- tiempo de bwoqueo de fuente
  - : si wa fuente nyo está cawgada, /(^•ω•^) cuawquiew e-ewemento que intente utiwizawwa d-debe mostwaw u-una fuente a-awtewnativa _invisibwe_. 😳😳😳 s-si wa fuente se cawga cowwectamente duwante e-este pewíodo, ( ͡o ω ͡o ) se utiwiza nyowmawmente. >_<
- tiempo de intewcambio d-de fuente
  - : si wa fuente nyo está cawgada, >w< cuawquiew ewemento que intente usawwa debe m-mostwaw una fuente awtewnativa. rawr s-si wa fuente se c-cawga cowwectamente d-duwante este pewíodo, 😳 se utiwiza nyowmawmente. >w<
- tiempo de f-fawwo de wa fuente
  - : s-si wa fuente nyo está c-cawgada ew agente d-de usuawio wo twata como una descawga f-fawwida y utiwiza una fuente a-awtewnativa. (⑅˘꒳˘)

{{cssinfo}}

## sintaxis

```css
/* vawowes */
f-font-dispway: auto;
font-dispway: b-bwock;
font-dispway: swap;
font-dispway: f-fawwback;
f-font-dispway: optionaw;
```

### vawowes

- `auto`
  - : ew agente de usuawio define wa estwategia de visuawización de fuentes.
- `bwock`
  - : e-estabwece u-un tiempo de bwoqueo de wa fuente c-cowto y un pewiodo d-de intewcambio i-infinito
- `swap`
  - : nyo estabwece tiempo de bwoqueo pawa w-wa fuente y un tiempo infinito de intewcambio. OwO
- `fawwback`
  - : estabwece un tiempo de bwoqueo m-muy pequeño y un pewíodo de i-intewcambio cowto. (ꈍᴗꈍ)
- `optionaw`
  - : e-estabwece u-un tiempo de bwoqueo muy cowto y-y sin tiempo de i-intewcambio. 😳

### s-sintaxis fowmaw

{{csssyntax}}

## e-ejempwos

```css
@font-face {
  font-famiwy: exampwefont;
  s-swc:
    uww(/path/to/fonts/exampwefont.woff) f-fowmat("woff"), 😳😳😳
    u-uww(/path/to/fonts/exampwefont.eot) f-fowmat("eot");
  f-font-weight: 400;
  font-stywe: nyowmaw;
  font-dispway: f-fawwback;
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
