---
title: URL.toJSON()
slug: Web/API/URL/toJSON
tags:
  - API
  - Méthode
  - Reference
  - URL
  - toJSON()
translation_of: Web/API/URL/toJSON
---
{{APIRef("URL API")}}

La méthode **`toJSON()`** de l'interface {{domxref("URL")}} retourne un {{domxref("USVString")}} contenant une version sérialisé de l'URL, même si dans la pratique, il semble avoir le même effet que {{domxref("URL.toString()")}}.

{{AvailableInWorkers}}

## Syntax

    json = url.toJSON();

### Paramètres

Aucun.

### Valeur retournée

A {{domxref("USVString")}}.

## Exemples

    const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
    url.toJSON()

## Spécifications

| Spécification                                                        | Statut               | Commentaire          |
| -------------------------------------------------------------------- | -------------------- | -------------------- |
| {{SpecName('URL', '#dom-url-tojson', 'toJSON()')}} | {{Spec2('URL')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.URL.toJSON")}}
