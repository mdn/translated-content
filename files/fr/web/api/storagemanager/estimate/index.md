---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
---

{{securecontext_header}}{{APIRef("Storage")}}

La méthode **`estimate()`**, rattachée à l'interface [`StorageManager`](/fr/docs/Web/API/StorageManager), demande au gestionnaire de stockage l'espace occupé (`usage`) et l'espace disponible (`quota`) pour [l'origine](/fr/docs/Glossary/Same-origin_policy) courante.

Cette méthode est asynchrone est renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue lorsque l'information est disponible. Le gestionnaire de réussite de la promesse est appelé avec un objet contenant les données pour l'usage actuel et le quota restant.

## Syntaxe

```js
estimate();
```

### Paramètres

Aucun.

### Valeur de retour

Une promesse (un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)) qui est résolue avec un objet doté des propriétés suivantes&nbsp;:

- `quota`
  - : Une valeur numérique, exprimée en octets, qui fournit une approximation prudente de l'espace de stockage disponible sur l'appareil ou l'ordinateur de la personne pour cette origine ou cette application web. Il est possible que davantage d'espace soit disponible, mais ce n'est pas nécessairement le cas.
- `usage`
  - : Une valeur numérique, exprimée en octets, qui fournit une approximation de l'espace de stockage actuellement utilisé par le site ou l'application, par rapport à l'espace total disponible indiqué par `quota`.
- `usageDetails` {{Non-standard_Inline}}
  - : Un objet contenant une décomposition de `usage` par système de stockage. Toutes les propriétés incluses sur cet objet auront un `usage` supérieur à 0 et tout système de stockage avec `usage` à 0 ne sera pas fourni comme propriété de cet objet.

> **Note :** Les valeurs renvoyées ne sont pas précisément exactes. Cela est lié à la compression, la déduplication de données et au masquage des informations pour des raisons de sécurité.

Vous pourrez observer que `quota` varie en fonction des origines. Cette variation est basée sur plusieurs facteurs dont&nbsp;:

- La fréquence de visite du site
- Les données publiques quant à la popularité du site
- Les signaux d'engagement fournis par la personne comme la mise en favori, l'inscription à l'écran d'accueil, ou l'acceptation des notifications <i lang="en">push</i>.

## Exemples

Dans cet exemple, on récupère les estimations de l'espace utilisé et du quota total afin de présenter un pourcentage de l'espace actuellement occupé sur la page.

### HTML

```html
<label>
  Vous utilisez actuellement <output id="percent"> </output>% du stockage
  disponible.
</label>
```

### JavaScript

```js
navigator.storage.estimate().then(function (estimate) {
  document.getElementById("percent").value = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
});
```

### Résultat

{{EmbedLiveSample('', 600, 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Storage](/fr/docs/Web/API/Storage_API)
- [`Storage`](/fr/docs/Web/API/Storage), l'objet renvoyé par [`Window.localStorage`](/fr/docs/Web/API/Window/localStorage)
- [`StorageManager`](/fr/docs/Web/API/StorageManager)
- [`navigator.storage`](/fr/docs/Web/API/Navigator/storage)
