---
title: "HTMLAnchorElement : propriété host"
short-title: host
slug: Web/API/HTMLAnchorElement/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

La propriété **`host`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères contenant l'hôte, c'est-à-dire le nom d'hôte {{domxref("HTMLAnchorElement.hostname", "hostname")}}, puis, si le {{glossary("port")}} de l'URL n'est pas vide, un `":"` suivi du {{domxref("HTMLAnchorElement.port", "port")}} de l'URL. Si l'URL ne possède pas de `hostname`, cette propriété contient une chaîne vide (`""`).

Voir {{domxref("URL.host")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/fr/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";

anchor.href = "https://developer.mozilla.org:443/fr/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";
// Le numéro de port n'est pas inclus car 443 est le port par défaut du schéma

anchor.href = "https://developer.mozilla.org:4097/fr/HTMLAnchorElement";
anchor.host === "developer.mozilla.org:4097";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("HTMLAnchorElement")}} à laquelle elle appartient.
