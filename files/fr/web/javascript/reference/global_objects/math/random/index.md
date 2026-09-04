---
title: "Math : méthode statique random()"
short-title: random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.random()`** retourne un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus), selon une distribution approximativement uniforme sur cet intervalle — ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle. L'implémentation choisit la graine initiale de l'algorithme de génération de nombres aléatoires&nbsp;; elle ne peut pas être choisie ou réinitialisée par l'utilisateur·ice.

> [!NOTE]
> `Math.random()` _ne_ fournit _pas_ de nombres aléatoires cryptographiques sécurisés. Ne les utilisez pas pour quoi que ce soit lié à la sécurité. Utilisez plutôt l'API Web Crypto, et plus précisément la méthode {{DOMxRef("Crypto.getRandomValues()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Résultat attendu : 0, 1 ou 2

console.log(getRandomInt(1));
// Résultat attendu : 0

console.log(Math.random());
// Résultat attendu : un nombre de 0 à <1
```

## Syntaxe

```js-nolint
Math.random()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre flottant pseudo-aléatoire, généré entre 0 (inclus) et 1 (exclus).

## Exemples

Notez que comme les nombres en JavaScript sont flottants selon la norme IEEE 754 avec un comportement d'arrondi au plus proche pair, les intervalles revendiqués pour les fonctions ci-dessous (à l'exception de celle pour `Math.random()` elle-même) ne sont pas exacts. En général, la borne supérieure revendiquée n'est pas atteignable, mais si `Math.random()` retourne un nombre très proche de 1, la petite différence peut ne pas être représentable à la valeur maximale demandée, ce qui entraîne l'atteinte de la borne supérieure.

### Obtenir un nombre aléatoire entre 0 (inclus) et 1 (exclus)

```js
function getRandom() {
  return Math.random();
}
```

### Obtenir un nombre aléatoire entre deux valeurs

Cet exemple retourne un nombre aléatoire compris entre les valeurs spécifiées. La valeur retournée n'est pas inférieure à `min` (et peut éventuellement être égale) et est inférieure à `max` (et non égale).

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Obtenir un entier aléatoire entre deux valeurs

Cet exemple retourne un _entier_ aléatoire entre deux valeurs définies. La valeur n'est pas inférieure à `min` (ou au prochain entier supérieur à `min` si `min` n'est pas un entier), et est inférieure à (mais pas égale à) `max`.

```js
function getRandomInt(min, max) {
  const plafondMinimum = Math.ceil(min);
  const plancherMaximum = Math.floor(max);
  return Math.floor(
    Math.random() * (plancherMaximum - plafondMinimum) + plafondMinimum,
  ); // Le maximum est exclusif et le minimum est inclusif
}
```

> [!NOTE]
> Il peut être tentant d'utiliser {{JSxRef("Math.round()")}} pour y parvenir, mais cela fait que vos nombres aléatoires suivent une distribution non uniforme, ce qui peut ne pas être acceptable pour vos besoins.

### Obtenir un entier aléatoire entre deux valeurs, inclusivement

Alors que la fonction `getRandomInt()` ci-dessus est inclusive au minimum, elle est exclusive au maximum. Que faire si vous avez besoin que les résultats soient inclusifs à la fois au minimum et au maximum&nbsp;? La fonction `getRandomIntInclusive()` ci-dessous y parvient.

```js
function getRandomIntInclusive(min, max) {
  const plafondMinimum = Math.ceil(min);
  const plancherMaximum = Math.floor(max);
  return Math.floor(
    Math.random() * (plancherMaximum - plafondMinimum + 1) + plafondMinimum,
  ); // Le maximum est inclusif et le minimum est inclusif
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode API {{DOMxRef("Crypto.getRandomValues()")}}
