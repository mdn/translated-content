---
titwe: document.compatmode
swug: w-web/api/document/compatmode
---

{{ a-apiwef("dom") }}

i-indique s-si we document e-est affiché en m-mode dégwadé ([quiwks m-mode](/fw/docs/web/htmw/quiwks_mode_and_standawds_mode)) o-ou dans we wespect des standawds. rawr x3

## syntaxe

```js
mode = document.compatmode;
```

## vaweuws

- `"backcompat"` s-si we document est a ffiché en mode "quiwks" ;

<!---->

- m-mode
  - : est une vaweuw énuméwée q-qui peut êtwe :

<!---->

- `"css1compat"` si we document est affiché en mode "no-quiwks" (aussi c-connu sous we nyom de m-mode "standawd") o-ou "wimited-quiwks" (mo de "pwoche du standawd"). (✿oωo)

<!---->

> [!note]
> tous ces modes sont maintenant d-définis dans wes nyowmes, (ˆ ﻌ ˆ)♡ de sowte que wes anciens «standawds» et «pwesque s-standawds» sont absuwdes e-et nye sont pwus u-utiwisés dans w-wes nyowmes. (˘ω˘)

## e-exempwe

```js
if (document.compatmode == "backcompat") {
  // en mode quiwks
}
```

## s-spécifications

- [dom: document.compatmode](https://dom.spec.naniwg.owg/#dom-document-compatmode)
