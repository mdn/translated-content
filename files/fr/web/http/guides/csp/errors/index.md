---
title: Erreurs et avertissements de ma politique de sécurité du contenu
short-title: Erreurs et avertissements
slug: Web/HTTP/Guides/CSP/Errors
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Lorsqu'un des messages suivants est enregistré dans la console des outils de développement du navigateur, cela indique qu'un problème lié à la [CSP](/fr/docs/Web/HTTP/Guides/CSP) s'est produit.

- [Les paramètres de la page ont empêché le chargement d'une ressource&nbsp;: %1$S](/fr/docs/Web/HTTP/Guides/CSP/Errors/CSPViolation).
- Les paramètres de la page ont empêché le chargement d'une ressource à %2$S («&nbsp;%1$S&nbsp;»).
- Une violation s'est produite pour une politique CSP en mode rapport uniquement («&nbsp;%1$S&nbsp;»). Le comportement a été autorisé et un rapport CSP a été envoyé.
- Les paramètres de la page ont observé le chargement d'une ressource à %2$S («&nbsp;%1$S&nbsp;»). Un rapport CSP est en cours d'envoi.
- Tentative d'envoi d'un rapport à une URI invalide&nbsp;: «&nbsp;%1$S&nbsp;».
- Impossible d'analyser l'URI du rapport&nbsp;: %1$S.
- Impossible de traiter la directive inconnue «&nbsp;%1$S&nbsp;».
- Ignore l'option inconnue «&nbsp;%1$S&nbsp;».
- Ignore la source en double «&nbsp;%1$S&nbsp;».
- Ignore la source «&nbsp;%1$S&nbsp;» (Non pris en charge lorsqu'elle est fournie par un élément meta).
- Ignore «&nbsp;%1$S&nbsp;» dans script-src ou style-src&nbsp;: nonce-source ou hash-source défini.
- Ignore «&nbsp;%1$S&nbsp;» dans script-src&nbsp;: «&nbsp;strict-dynamic&nbsp;» défini.
- Ignore la source «&nbsp;%1$S&nbsp;» (Pris en charge uniquement dans script-src).
- Le mot-clé «&nbsp;strict-dynamic&nbsp;» dans «&nbsp;%1$S&nbsp;» sans {{Glossary("Nonce", "nombre unique")}} ou hash valide peut bloquer le chargement de tous les scripts.
- L'URI du rapport (%1$S) doit être une URI HTTP ou HTTPS.
- Ce site (%1$S) a une politique en mode rapport uniquement sans URI de rapport. La CSP ne bloque pas et ne peut pas signaler les violations de cette politique.
- Échec de l'analyse d'une source non reconnue %1$S.
- Une tentative d'exécution de scripts en incise a été bloquée.
- Une tentative d'application de feuilles de style en incise a été bloquée.
- Une tentative d'appel de JavaScript à partir d'une chaîne de caractères (à l'aide d'une fonction telle que eval) a été bloquée.
- Mise à niveau de la requête non sécurisée «&nbsp;%1$S&nbsp;» pour utiliser «&nbsp;%2$S&nbsp;»
- Ignore srcs pour la directive «&nbsp;%1$S&nbsp;».
- Interprétation de %1$S comme un nom d'hôte, et non comme un mot-clé. Si vous souhaitiez qu'il s'agisse d'un mot-clé, utilisez «&nbsp;%2$S&nbsp;» (entre guillemets simples).
- La directive «&nbsp;%1$S&nbsp;» n'est pas prise en charge. La directive et ses valeurs sont ignorées.
- Blocage de la requête non sécurisée «&nbsp;%1$S&nbsp;».
- Ignore «&nbsp;%1$S&nbsp;», car il ne contient aucun paramètre.
- Ignore la directive sandbox lorsqu'elle est fournie dans une politique en mode rapport uniquement «&nbsp;%1$S&nbsp;».
- La directive Referrer «&nbsp;%1$S&nbsp;» est obsolète. Veuillez utiliser l'en-tête Referrer-Policy à la place.
- Ignore «&nbsp;%1$S&nbsp;» en raison de la directive «&nbsp;%2$S&nbsp;».
- Impossible d'analyser la source non valide %1$S.
- Impossible d'analyser l'hôte non valide %1$S.
- Impossible d'analyser le schéma dans %1$S.
- Impossible d'analyser le port dans %1$S.
- Détection de directives en double «&nbsp;%1$S&nbsp;». Toutes les instances sauf la première sont ignorées.
- La directive «&nbsp;%1$S&nbsp;» est obsolète. Veuillez utiliser la directive «&nbsp;worker-src&nbsp;» pour contrôler les workers, ou la directive «&nbsp;frame-src&nbsp;» pour contrôler les cadres.
- Impossible d'analyser le drapeau sandbox non valide «&nbsp;%1$S&nbsp;».

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}}
