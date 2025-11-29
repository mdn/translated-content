---
title: "HTMLAreaElement : propriété host"
short-title: host
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`host`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant l'hôte, c'est-à-dire le {{DOMxRef("HTMLAreaElement.hostname", "hostname")}}, puis, si le {{Glossary("port")}} de l'URL n'est pas vide, un `":"` suivi du {{DOMxRef("HTMLAreaElement.port", "port")}} de l'URL. Si l'URL ne possède pas de `hostname`, cette propriété contient une chaîne vide, `""`.

Voir {{DOMxRef("URL.host")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/fr/docs/Web/API/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/fr/docs/Web/API/HTMLAreaElement";
area.host === "developer.mozilla.org";
// Le numéro de port n'est pas inclus car 443 est le port par défaut du schéma

area.href =
  "https://developer.mozilla.org:4097/fr/docs/Web/API/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
