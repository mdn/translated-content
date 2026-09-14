---
title: "Document : propriété compatMode"
short-title: compatMode
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

La propriété en lecture seule **`compatMode`** de l'interface {{DOMxRef("Document")}} indique si le document est rendu en [mode Quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) ou en mode Standards.

## Valeur

Une chaîne de caractères qui est l'une des suivantes&nbsp;:

- `"BackCompat"` si le document est en mode Quirks.
- `"CSS1Compat"` si le document est en mode sans Quirks (également connu sous le nom de «&nbsp;standards&nbsp;») ou en mode Quasi-standards (également connu sous le nom de «&nbsp;quasi standards&nbsp;»).

> [!NOTE]
> Tous ces modes sont désormais standardisés, donc les anciens noms «&nbsp;standards&nbsp;» et «&nbsp;quasi standards&nbsp;» sont obsolètes et ne sont plus utilisés dans les standards.

## Exemples

```js
if (document.compatMode == "BackCompat") {
  // en mode Quirks
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
