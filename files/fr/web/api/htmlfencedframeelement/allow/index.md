---
title: "HTMLFencedFrameElement : propriété allow"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

La propriété **`allow`** de l'interface {{domxref("HTMLFencedFrameElement")}} obtient et définit la valeur de l'attribut `allow` correspondant sur l'élément HTML {{htmlelement("fencedframe")}}, qui représente une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) appliquée au contenu lors de sa première intégration.

Toutes les politiques d'autorisations ne sont pas autorisées dans les cadres protégés. Les autorisations permises sont listées dans [Politiques d'autorisations disponibles pour les cadres protégés](/fr/docs/Web/HTML/Reference/Elements/fencedframe#politiques_dautorisations_disponibles_pour_les_cadres_protégés)&nbsp;: elles sont requises pour que le contenu du cadre protégé provenant des API spécifiées puisse se charger. Si vous ne définissez pas l'attribut `allow`, ces autorisations seront permises par défaut. Si vous souhaitez restreindre l'ensemble des autorisations, vous devez vous assurer que toutes les autorisations requises pour les API utilisées sont bien présentes dans l'attribut `allow`.

## Valeur

Une chaîne de caractères représentant une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy).

## Exemples

```js
const frame = document.createElement("fencedframe");
console.log(frame.allow);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
