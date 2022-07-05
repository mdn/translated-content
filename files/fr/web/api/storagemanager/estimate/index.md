---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
translation_of: Web/API/StorageManager/estimate
---
{{securecontext_header}}{{APIRef("Storage")}}

La méthode **`estimate()`** de l’interface {{domxref("StorageManager")}} demande au gestionnaire de stockage d’obtenir des informations de quota et d’usage pour l’origine actuelle. Cette méthode opère de manière asynchrone, elle renvoie donc une {{jsxref("Promise")}} qui se résoud une fois que l’information est disponible. La fonction gérant la résolution de la promesse reçoit en entrée un {{domxref("StorageEstimate")}} avec les données de quota et d’usage.

## Syntaxe

    var estimatePromise = StorageManager.estimate();

### Paramètres

Aucun.

### Valeur de retour

Une {{jsxref('Promise')}} qui se résoud en un objet qui se conforme au dictionnaire {{domxref('StorageEstimate')}}. Ce dictionnaire contient des estimations de la quantité d’espace disponible à l’origine ou à l’application (dans {{domxref("StorageEstimate.quota")}}), ainsi que la quantité d’espace actuellement utilisé (dans {{domxref("StorageEstimate.usage")}}). Ces nombres ne sont pas exacts&nbsp;; entre la compression, la dé-duplication, et l’obfuscation pour des raisons de sécurité, ils ne seront pas précis.

Il est possible de constater que le `quota` varie d’application en application, basé sur des facteurs tels que la fréquence à laquelle l’utilisateur ou l’utilisatrice la visite, des données de popularité de sites bien connus, et ainsi de suite.

## Exemple

Dans cet exemple, nous obtenons des estimations d’usage et présentons le pourcentage de capacité de stockage actuellement utilisé à l’utilisateur ou à l’utilisatrice.

### Contenu HTML

```html
<p>
  Vous utilisez actuellement environ <span id="percent">
  </span>% de votre espace disponible.
</p>
```

### Contenu JavaScript

```js
navigator.storage.estimate().then(function(estimate) {
  document.getElementById("percent").textContent =
      (estimate.usage / estimate.quota).toFixed(2);
});
```

### Résultat

{{ EmbedLiveSample('Exemple', 600, 40) }}

## Spécifications

| Spécification                                                                            | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Storage','#dom-storagemanager-estimate','estimate()')}} | {{Spec2('Storage')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.StorageManager.estimate")}}

## Voir aussi

- l’API Storage
- {{domxref("Storage")}}, l’objet renvoyé par {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
