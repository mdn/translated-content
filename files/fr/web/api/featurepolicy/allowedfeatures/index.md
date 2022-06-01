---
title: FeaturePolicy.allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
tags:
  - API
  - Directive
  - Feature Policy
  - Feature-Policy
  - Reference
translation_of: Web/API/FeaturePolicy/allowedFeatures
---
{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

La méthode **`allowedFeatures()`** de l'interface {{DOMxRef("FeaturePolicy")}} retourne la liste des noms des directives de fonctionnalités permises par ce Feature Policy. Elle permet l'introspection de directives spécifiques du Feature Policy sur lequel la méthode est appelée. Ainsi, la méthode `allowedFeatures()` retourne un sous-ensemble de la liste des noms de directives retournée par {{DOMxRef("FeaturePolicy.features", "features()")}}.

## Syntaxe

    const permissions = FeaturePolicy.allowedFeatures()

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaines de caractères représentant les noms des directives Feature Policy dont l'utilisation de la fonctionnalité associée est permise par le Feature Policy sur laquel est appelée cette méthode.

## Exemple

L'exemple suivant affiche toutes les directives permises pour le présent document. Notez que ces fonctionnalités pourraient être restreintes par l'API Permissions, si l'utilisateur n'a pas encore accordé les droits correspondants.

```js
// D'abord, récupère l'objet Feature Policy
const featurePolicy = document.featurePolicy

// Puis demande la liste des foncitonnalités permises
const permissions = featurePolicy.allowedFeatures()

for (const directive of permissions)
  console.log(directive)
```

## Spécifications

| Spécification                                                    | Statut                               | Commentaire         |
| ---------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("Feature Policy","","allowsFeature")}} | {{Spec2("Feature Policy")}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.FeaturePolicy.allowedFeatures")}}
