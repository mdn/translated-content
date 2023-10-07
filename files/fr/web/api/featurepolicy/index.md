---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
---

{{APIRef("Feature Policy")}}

L'interface `FeaturePolicy` de l'[API Feature Policy](/fr/docs/Web/HTTP/Feature_Policy) représente l'ensemble des règles appliquées au contexte d'exécution courant.

## Méthodes de FeaturePolicy

- {{DOMxRef("FeaturePolicy.allowsFeature")}}
  - : Retourne un Boolean indiquant si une fonctionnalité particulière est activée ou non dans le contexte spécifié.
- {{DOMxRef("FeaturePolicy.features")}}
  - : Retourne une liste des noms de toutes les fonctionnalités supportées par l'agent utilisateur. Une fonctionnalité dont le nom est dans la liste pourrait ne pas être autorisée par le Feature Policy du contexte courant d'exécution ou n'être pas accessible à cause des permissions de l'utilisateur.
- {{DOMxRef("FeaturePolicy.allowedFeatures")}}
  - : Retourne une liste des noms des fonctionnalités supportées par l'agent utilisateur et autorisées par le Feature Policy. Notee que les fonctionnaltiés dont le nom est dans la liste pourraient toujours être bloquées par l'absence de permission de l'utilisateur.

<!---->

- {{DOMxRef("FeaturePolicy.getAllowlistForFeature")}}
  - : Retourne la liste de permissions pour la fonctionnalité spécifiée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Feature-Policy")}}
- [Anonymat et vie privée, permissions et informations sur la sécurité](/fr/docs/Web/Privacy)
