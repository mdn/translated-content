---
title: FeaturePolicy.features()
slug: Web/API/FeaturePolicy/features
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

La méthode **`features()`** de l'interface {{DOMxRef("FeaturePolicy")}} retourne la liste des noms de directives de fonctionnalités supportées par l'agent utilisateur. Une fonctionnalité dont le nom apparait dans la liste pourrait n'être pas autorisée par le Feature Policy du contexte courant d'exécution ou n'être pas accessible à cause des permissions de l'utilisateur.

## Syntaxe

```js
const fonctionnalitésSupportées = FeaturePolicy.features();
```

### Paramètres

Aucun.

### Valeur de retour

Un tableau de chaines de caractères représentant les noms des directives Feature Policy dont la fonctionnalité associée est supportée par l'agent utilisateur.

## Exemple

Cet exemple affiche dans la console toutes les directives supportées par votre agent utilisateur :

```js
// Récupère l'objet Feature Policy
const featurePolicy = document.featurePolicy;

// Récupère la liste des noms de directives de Feature Policy dont les fonctionnalités sont supportées
const fonctionnalitésSupportées = featurePolicy.features();

// Affiche chaque directive dans la console
for (const directive of fonctionnalitésSupportées) console.log(directive);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
