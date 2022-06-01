---
title: FeaturePolicy.getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - Reference
translation_of: Web/API/FeaturePolicy/getAllowlistForFeature
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

La méthode **`getAllowlistForFeature()`** de {{DOMxRef("FeaturePolicy")}} permet d'obtenir la liste des permissions associée à une fonctionnalité pour ce Feature Policy.

## Syntaxe

    const listePermissions = FeaturePolicy.getAllowlistForFeature(<fonctionnalité>)

### Parameter

#### Nom de fonctionnalité

Un nom de fonctionnalité doit être fourni.

### Valeur de retour

Une [liste de permissions](fr/Web/HTTP/Feature_Policy/Using_Feature_Policy) pour la fonctionnalité demandée est retournée.

## Erreurs

La fonction jettera un avertissement si la directive de Feature Policy demandée est inconnue. Toutefois, elle retournera aussi un tableau vide, indiquant que l'utilisation de cette fonctionnalité n'est permise pour aucune origine.

## Exemple

Cet exemple affiche toutes les origines à qui la directive Feature Policy permet d'utiliser l'API Camera (appareil photo). Notez que l'API Camera pourrait être restreinte par l'API Permissions si l'utilisateur n'a pas encore accordé la permission.

```js
// D'abord, récupère l'objet Feature Policy
const featurePolicy = document.featurePolicy

// Puis demande la liste pour la fonctionnalité "camera"
const listePermissions = featurePolicy.getAllowlistForFeature("camera")

for (const origine of listePermissions)
  console.log(origine)
```

## Spécification

| Spécification                                                                | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("Feature Policy","","getAllowlistForFeature")}} | {{Spec2("Feature Policy")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.FeaturePolicy.getAllowlistForFeature")}}
