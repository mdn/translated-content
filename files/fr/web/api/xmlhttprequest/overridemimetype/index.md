---
title: "XMLHttpRequest : méthode overrideMimeType()"
short-title: overrideMimeType()
slug: Web/API/XMLHttpRequest/overrideMimeType
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`overrideMimeType()`** de l'interface {{DOMxRef("XMLHttpRequest")}} définit un type MIME autre que celui fourni par le serveur, qui est utilisé à la place lors de l'interprétation des données transférées dans une requête.

Cela peut être utilisé, par exemple, pour forcer un flux à être traité et analysé comme `"text/xml"`, même si le serveur ne le signale pas comme tel. Cette méthode doit être appelée avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}}.

## Syntaxe

```js-nolint
overrideMimeType(mimeType)
```

### Paramètres

- `mimeType`
  - : Une chaîne de caractères définissant le type MIME à utiliser à la place de celui défini par le serveur. Si le serveur ne définit pas de type, `XMLHttpRequest` suppose `"text/xml"`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple définit un type MIME de `"text/plain"`, remplaçant le type indiqué par le serveur pour les données reçues.

> [!NOTE]
> Si le serveur ne fournit pas d'en-tête {{HTTPHeader("Content-Type")}}, {{DOMxRef("XMLHttpRequest")}} suppose que le type MIME est `"text/xml"`. Si le contenu n'est pas un XML valide, une erreur «&nbsp;XML Parsing Error: not well-formed&nbsp;» se produit. Vous pouvez éviter cela en appelant `overrideMimeType()` pour définir un type différent.

```js
// Interprète les données reçues comme du texte brut

req = new XMLHttpRequest();
req.overrideMimeType("text/plain");
req.addEventListener("load", callback);
req.open("get", url);
req.send();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- La propriété {{DOMxRef("XMLHttpRequest.responseType")}}
