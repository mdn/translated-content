---
title: dns
slug: Mozilla/Add-ons/WebExtensions/API/dns
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Permet à une extension de résoudre les noms de domaine. Pour utiliser cette API, une extension doit demander la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "dns" dans son fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

> [!NOTE]
> La résolution DNS échouera avec l'erreur NS_ERROR_UNKNOWN_PROXY_HOST si le proxy DNS via SOCKS est activé.

## Fonctions

- {{WebExtAPIRef("dns.resolve()")}}
  - : Résout le nom d'hôte donné en un enregistrement DNS

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}
