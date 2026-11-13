---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
---

{{APIRef("Feature Policy")}}

L'interface `FeaturePolicy` de [l'API Feature Policy](/fr/docs/Web/HTTP/Guides/Permissions_Policy) représente l'ensemble des règles appliquées au contexte d'exécution courant.

## Méthodes de FeaturePolicy

- {{DOMxRef("FeaturePolicy.allowsFeature")}}
  - : Retourne un Boolean indiquant si une fonctionnalité particulière est activée ou non dans le contexte défini.
- {{DOMxRef("FeaturePolicy.features")}}
  - : Retourne une liste des noms de toutes les fonctionnalités supportées par l'agent utilisateur. Une fonctionnalité dont le nom est dans la liste peut ne pas être autorisée par le Feature Policy du contexte courant d'exécution ou n'être pas accessible à cause des permissions de l'utilisateur·ice.
- {{DOMxRef("FeaturePolicy.allowedFeatures")}}
  - : Retourne une liste des noms des fonctionnalités supportées par l'agent utilisateur et autorisées par le Feature Policy. Notez que les fonctionnalités dont le nom est dans la liste peuvent toujours être bloquées par l'absence de permission de l'utilisateur·ice.

<!---->

- {{DOMxRef("FeaturePolicy.getAllowlistForFeature")}}
  - : Retourne la liste de permissions pour la fonctionnalité définie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}}
- [Anonymat et vie privée, permissions et informations sur la sécurité](/fr/docs/Web/Privacy)
