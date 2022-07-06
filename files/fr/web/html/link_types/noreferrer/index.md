---
title: "Types de liens\_: noreferrer"
slug: Web/HTML/Link_types/noreferrer
translation_of: Web/HTML/Link_types/noreferrer
browser-compat: html.elements.a.rel.noreferrer
---
Le mot-clé **`noreferrer`** de l'attribut [`rel`](/fr/docs/Web/HTML/Attributes/rel) des éléments {{HTMLElement("a")}}, {{HTMLElement("area")}} et {{HTMLElement("form")}} indique au navigateur, lorsque celui-ci ouvre la ressource cible, d'omettre l'en-tête {{HTTPHeader("Referer")}} et de ne divulguer aucune information de <i lang="en">referrer</i>. Lorsque `noreferrer` est indiqué, le navigateur se comporte également comme si le mot-clé `noopener` avait été spécifié (il n'est donc pas utile d'indiquer les deux).

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}
