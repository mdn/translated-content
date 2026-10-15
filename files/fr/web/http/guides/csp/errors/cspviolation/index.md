---
title: "Politique de Sécurité du Contenu : Les paramètres de la page ont empêché le chargement d'une ressource : xyz"
slug: Web/HTTP/Guides/CSP/Errors/CSPViolation
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'avertissement «&nbsp;Politique de Sécurité du Contenu&nbsp;: Les paramètres de la page ont bloqué le chargement d'une ressource&nbsp;: xyz&nbsp;» se produit lorsque la configuration CSP de la page donnée par `xyz` empêche la ressource d'être chargée dans le contexte du document.

## Message

### Firefox

`Politique de Sécurité du Contenu : Les paramètres de la page ont empêché le chargement d'une ressource : xyz`

En anglais&nbsp;:

`Content Security Policy: The page's settings blocked the loading of a resource: xyz`

avec&nbsp;:

- `xyz`
  - : Le nom de la directive CSP qui a bloqué la ressource. Cela peut être exprimé soit uniquement par le nom de la directive, soit par l'ensemble de la chaîne de caractères de la directive de politique.
- `uvw`
  - : Texte fournissant des informations qui peuvent vous aider à résoudre le problème, y compris éventuellement des modifications spécifiques que vous pouvez apporter à la configuration CSP.

### Chrome

- `Refused to apply inline style because it violates the following Content Security Policy Directive: "xyz". uvw.`
- `Refused to execute inline script because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to run the JavaScript URL because it violates the following Content Security Policy directive: "xyz". uvw.`
- `Refused to execute inline event handler because it violates the following Content Security Policy directive: "xyz". uvw.`

avec&nbsp;:

- `xyz`
  - : Le nom de la directive CSP qui a bloqué la ressource. Cela peut être exprimé soit uniquement par le nom de la directive, soit par l'ensemble de la chaîne de caractères de la directive de politique.
- `uvw`
  - : Texte fournissant des informations qui peuvent vous aider à résoudre le problème, y compris éventuellement des modifications spécifiques que vous pouvez apporter à la configuration CSP.

## Quel est le problème ?

Ce message d'avertissement signifie qu'en raison de l'existence d'une directive CSP particulière, une ressource n'a pas été chargée.

## Voir aussi

- [Erreurs et avertissements CSP](/fr/docs/Web/HTTP/Guides/CSP/Errors)
- [Politique de Sécurité du Contenu](/fr/docs/Web/HTTP/Guides/CSP)
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}
