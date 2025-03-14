---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}

Renvoi le paramètre utilisateur de **do-not-track**. Cette valeur est "1" si l´utilisateur a demandé de ne pas être suivi par les sites web, le contenu ou la publicité.

## Syntaxe

```js
dnt = navigator.doNotTrack;
```

La valeur reflète celle de l'en-tête "do-not-track" _(ne pas suivre)_, c'est-à-dire {"1", "0", "unspecified" }. Note : Avant Gecko 32, Gecko a utilisé les valeurs { "yes", "no", "unspecified"} ([bug 887703](https://bugzilla.mozilla.org/show_bug.cgi?id=887703)).

## Exemple

```js
dump(window.navigator.doNotTrack);
//  écrit "1" si DNT est activé; "0" si l'utilisateur a opté pour le suivi; sinon c'est "unspecified" (non spécifié)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide pratique Do Not Track](/fr/docs/Web/HTTP/Headers/DNT)
