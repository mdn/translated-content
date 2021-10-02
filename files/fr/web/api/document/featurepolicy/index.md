---
title: Document.featurePolicy
slug: Web/API/Document/featurePolicy
tags:
  - API
  - Document
  - Feature Policy
  - Feature-Policy
  - Reference
translation_of: Web/API/Document/featurePolicy
---
{{APIRef("Feature Policy")}}

La propriété en lecture seule **`featurePolicy`** de l'interface {{domxref("Document")}} retourne l'interface {{domxref("FeaturePolicy")}}, qui fournit une API permettant de consulter facilement les règles de fonctionnalités appliquées sur un document spécifique.

## Syntaxe

    var policy = iframeElement.featurePolicy

### Valeur

Un objet {{domxref("FeaturePolicy")}} pouvant être utilisé pour consulter les paramètres de Feature Policy appliqués au document.

## Spécification

| Spécification                            | Statut                               | Commentaire          |
| ---------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("Feature Policy")}} | {{Spec2("Feature Policy")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.featurePolicy")}}
