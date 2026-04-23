---
title: "HTMLFormElement : propriété enctype"
short-title: enctype
slug: Web/API/HTMLFormElement/enctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`enctype`** de l'interface {{DOMxRef("HTMLFormElement")}} correspond au {{Glossary("MIME_type", "type MIME")}} du contenu utilisé pour soumettre le formulaire au serveur. Les valeurs possibles sont&nbsp;:

- `application/x-www-form-urlencoded`&nbsp;: le type initial par défaut.
- `multipart/form-data`&nbsp;: le type qui permet aux éléments {{HTMLElement("input")}} de type fichier de téléverser des données de fichier.
- `text/plain`&nbsp;: format ambigu, contenu lisible par un humain et non interprétable de façon fiable par un ordinateur.

Cette valeur peut être remplacée par l'attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/button#formenctype) sur un élément HTML {{HTMLElement("button")}} ou {{HTMLElement("input")}}.

## Valeur

Une chaîne de caractères.

## Exemple

```js
form.enctype = "application/x-www-form-urlencoded";
```

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
