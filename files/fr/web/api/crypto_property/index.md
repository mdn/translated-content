---
title: Window.crypto
slug: Web/API/crypto_property
translation_of: Web/API/Window/crypto
original_slug: Web/API/Window/crypto
---
{{APIRef}}

La propriété, en lecture seule, {{domxref("Window.crypto")}} retourne l'objet {{domxref("Crypto")}}  associé à l'objet global. Cet objet permet aux pages web d'avoir un accès à certains services liés à cryptographie.

## Syntaxe

    var cryptoObj = window.crypto || window.msCrypto; // pour IE 11

## Spécifications

| Spécification                                                                                | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Web Crypto API", "#dfn-GlobalCrypto", "Window.crypto")}} | {{Spec2("Web Crypto API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Window.crypto")}}

## Voir aussi

- L'objet global {{domxref("Window")}}
- L'interface {{domxref("Crypto")}}
