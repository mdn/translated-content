---
title: "Navigator : propriété doNotTrack"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

La propriété **`doNotTrack`** de l'interface {{DOMxRef("Navigator")}} retourne le paramètre «&nbsp;<i lang="en">Do Not Track</i>&nbsp;» (ou «&nbsp;Ne Pas Suivre&nbsp;» en français) de l'utilisateur·ice, qui indique si celui·celle-ci demande aux sites web et aux annonceurs de ne pas appliquer de suivi.

La valeur de la propriété reflète celle de l'en-tête HTTP {{HTTPHeader("DNT")}}, c'est-à-dire les valeurs `"1"`, `"0"` ou `null`.

Toute la spécification <abbr>DNT</abbr> (<i lang="en">Do Not Track</i>) a été abandonnée. La conception du mécanisme était défaillante, car il s'agissait d'une fonctionnalité coopérative entre utilisateur·ice·s, sites web et navigateurs. L'idée était que l'utilisateur·ice demande au _site web_ de ne pas le·la suivre, et que le _site web_ s'y conforme. Cependant, il n'y a aucune application stricte de cette politique, donc les sites publicitaires ignoraient l'en-tête <abbr>DNT</abbr> et traquaient les utilisateur·ice·s malgré tout. La fonctionnalité est donc inutile. De plus, elle est nuisible car elle laisse une {{Glossary("Fingerprinting", "empreinte")}} supplémentaire dans l'en-tête, qui peut être utilisée pour suivre encore plus les utilisateur·ice·s.

Les navigateurs explorent d'autres fonctionnalités de confidentialité plus contraignantes, telles que le [contrôle global de la confidentialité](/fr/docs/Web/API/Navigator/globalPrivacyControl), la restriction des cookies tiers, et d'autres encore.

## Valeur

Une chaîne de caractères ou `null`.

## Examples

```js
console.log(navigator.doNotTrack);
// affiche "1" si DNT est activé ;
// "0" si l'utilisateur·ice a accepté le pistage ;
// sinon null
```

## Spécifications

Faisait partie de la spécification abandonnée [Tracking Preference Expression (DNT) <sup>(angl.)</sup>](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dom-navigator-donottrack).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("DNT")}}
