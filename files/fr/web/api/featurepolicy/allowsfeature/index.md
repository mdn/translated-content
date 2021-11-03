---
title: FeaturePolicy.allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - Reference
translation_of: Web/API/FeaturePolicy/allowsFeature
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

La méthode **`allowsFeature()`** de l'interface {{DOMxRef("FeaturePolicy")}} permet l'introspection de directives du Feature Policy sur lequel la méthode est appelée. Elle retourne un {{JSxRef("Boolean")}} valant `true` si et seulement si la fonctionnalité dont le nom de directive est fourni est permise dans le contexte spécifié (ou le contexte par défaut si aucun contexte n'est spécifié).

## Syntaxe

    const listePermissions = FeaturePolicy.allowsFeature(<nomDirective>)

ou

    const listePermissions = FeaturePolicy.allowsFeature(<nomDirective>, <origine>)

### Paramètres

#### `Nom de directive`

Le nom de la directive associée à une fonctionnalité.

#### `Origine` {{Optional_inline}}

Une URL d'origine sur lequel vérifier la disponibilité de la fonctionnalité. Si omise, sa valeur par défaut est utilisée.

### Valeur de retour

Un {{JSxRef("Boolean")}} valant `true` si et seulement si la fonctionnalité est permise.

## Exemple

Cet exemple demande au document s'il lui est permis par Feature Policy d'utiliser l'API Camera (appareil photo). Notez que l'API Camera pourrait être restreinte par l'API Permissions si l'utilisateur n'a pas encore accordé la permission.

```js
// D'abord, récupère le Feature Policy
const featurePolicy = document.featurePolicy

// Demande si la fonctionnalité est disponible
const estPermise = featurePolicy.allowsFeature("camera")

if (estPermise)
  console.log("FP autorise l'appareil photo.")

else
  console.log("FP n'autorise pas l'appareil photo.")
```

## Spécifications

| Spécification                                                    | Statut                               | Commentaire          |
| ---------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("Feature Policy","","allowsFeature")}} | {{Spec2("Feature Policy")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.FeaturePolicy.allowsFeature")}}
