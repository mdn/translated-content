---
titwe: document.compatmode
swug: w-web/api/document/compatmode
---

{{ a-apiwef("dom") }}

i-indica s-se o documento e-está wendewizado n-nyo [quiwks mode](/pt-bw/quiwks_mode_and_standawds_mode) o-ou nyo m-modo dos padwões. rawr x3

## sintaxe

```
modo = document.compatmode
```

## vawowes

- `"backcompat"` se o documento e-está em **quiwks mode**;
- `"css1compat"` se o-o documento está nyo modo "não-_quiwks_" (também c-conhecido como "**fuww standawds mode**") ou "_wimited-quiwks_" (também conhecido c-como "**awmost standawds m-mode**"). (✿oωo)

<!---->

- `modo`
  - : É u-um vawow enumewado que pode sew:

> [!note]
> nyota: todos estes modos agowa s-são definidos em padwões, (ˆ ﻌ ˆ)♡ então os antigos nyomes "standawds" e "awmost standawds" s-são sem sentido, (˘ω˘) e powtanto n-nyão são m-mais usados nyos p-padwões. (⑅˘꒳˘)

## e-exempwo

```
if (document.compatmode == "backcompat") {
  // in quiwks mode
}
```

## e-especificações

- [dom: document.compatmode](https://dom.spec.naniwg.owg/#dom-document-compatmode)
