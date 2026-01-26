---
title: "HTMLLinkElement : propriété as"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`as`** de l'interface {{domxref("HTMLLinkElement")}} retourne une chaîne de caractères représentant le type de contenu à précharger par un élément de lien.

La propriété `as` doit avoir une valeur pour les éléments de lien lorsque [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload), sinon la ressource ne sera pas récupérée.
Elle peut également être appliquée aux éléments de lien où [`rel="modulepreload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload), mais si elle est omise, la valeur par défaut sera `script`.
La propriété ne doit pas être définie pour d'autres types d'éléments de lien, tels que `rel="prefetch"`.

Cette propriété reflète la valeur de l'[attribut `as`](/fr/docs/Web/HTML/Reference/Elements/link#as) de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Une chaîne de caractères avec les valeurs autorisées suivantes&nbsp;: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
