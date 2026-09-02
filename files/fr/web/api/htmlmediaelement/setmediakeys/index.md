---
title: "HTMLMediaElement : méthode setMediaKeys()"
short-title: setMediaKeys()
slug: Web/API/HTMLMediaElement/setMediaKeys
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("HTML DOM")}}{{SecureContext_Header}}

La méthode **`setMediaKeys()`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit les {{DOMxRef("MediaKeys")}} qui sont utilisés pour déchiffrer les médias pendant la lecture.

Elle retourne une promesse ({{JSxRef("Promise")}}) qui se complète si les nouvelles clés sont correctement définies, ou se rompt si les clés ne peuvent pas être définies.

## Syntaxe

```js-nolint
setMediaKeys(mediaKeys)
```

### Paramètres

- `mediaKeys`
  - : Un objet {{DOMxRef("MediaKeys")}} que le {{DOMxRef("HTMLMediaElement")}} peut utiliser pour le déchiffrement des données médias pendant la lecture.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se complète avec {{JSxRef("undefined")}}.

### Exceptions

La promesse retournée peut rejeter une erreur&nbsp;:

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Les clés de média sont déjà en cours d'attachement, ou les clés précédentes ne peuvent pas être supprimées pour le moment (par exemple, parce que l'implémentation particulière ne permet pas la suppression pendant la lecture).
- {{DOMxRef("QuotaExceededError")}}
  - : Les clés passées sont déjà utilisées par un autre élément, ou le navigateur ne peut pas les utiliser avec cet élément pour d'autres raisons.
- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Les clés de média actuellement associées au média ne peuvent pas être dissociées, car cela n'est pris en charge ni par le CDM ni par le navigateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
