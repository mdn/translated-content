---
title: HTMLIFrameElement.featurePolicy
slug: Web/API/HTMLIFrameElement/featurePolicy
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - HTMLIFrameElement
  - Policy
  - Property
translation_of: Web/API/HTMLIFrameElement/featurePolicy
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

La propriété en lecture seule **`featurePolicy`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne l'interface {{DOMxRef("FeaturePolicy")}}, qui fournit une API simple pour consulter facilement les règles de fonctionnalités appliquées à un élément `<iframe>` spécifique.

## Syntaxe

    var policy = HTMLIFrameElement.featurePolicy

### Valeur

Un objet [`FeaturePolicy`](/en-US/docs/Web/API/FeaturePolicy) pouvant être utilisé pour consulter les paramètres Feature Policy appliqués au cadre.

## Spécification

| Spécification                            | État                                 | Commentaire          |
| ---------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("Feature Policy")}} | {{Spec2("Feature Policy")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.HTMLIFrameElement.featurePolicy")}}
