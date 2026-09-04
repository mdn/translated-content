---
title: Mise à jour des modules complémentaires pour Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

Cet article présente un aperçu des modifications que vous devez apporter à vos extensions pour qu'elles fonctionnent correctement dans Firefox 5. Vous trouvez la liste complète des modifications destinées aux développeur·euse·s dans Firefox 5 sur la page [Firefox 5 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/5).

## Faut-il faire quelque chose du tout ?

Si votre extension est distribuée sur [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/) (AMO), elle a été vérifiée par un outil automatisé de vérification de compatibilité. Les extensions qui n'utilisent pas d'API ayant changé dans Firefox 5 et qui n'ont pas de composants binaires (qui doivent être recompilés pour chaque version majeure de Firefox) ont été automatiquement mises à jour sur AMO pour indiquer qu'elles fonctionnent dans Firefox 5.

Vous devez commencer par visiter AMO et vérifier si votre extension nécessite des modifications.

> [!NOTE]
> Vous devez toujours tester votre extension sur Firefox 5, même si elle a été automatiquement mise à jour. Il existe des cas particuliers qui peuvent ne pas être détectés automatiquement.

Une fois que vous avez confirmé que vous devez apporter des modifications, revenez sur cette page et continuez à lire.

## Changements liés à l'interface utilisateur

En raison du court cycle de développement (même pour notre cycle de publication rapide&nbsp;; Firefox 5 a suivi un calendrier extra-court pour des raisons de temps), il y a très peu de changements liés à l'interface utilisateur dans Firefox 5.

### Déterminer la langue de l'interface utilisateur

Dans le passé, la propriété DOM {{DOMxRef("Navigator.language", "window.navigator.language")}} reflétait la langue de l'interface utilisateur de Firefox. Ce n'est plus le cas&nbsp;; elle reflète désormais la valeur de l'en-tête `Accept-Language` pour le document actuel. Si vous devez détecter la langue de l'interface utilisateur, vous devez plutôt consulter la valeur de la préférence `general.useragent.locale`.

## Changements liés au DOM

Les comportements de {{DOMxRef("Window.setTimeout()")}}, {{DOMxRef("WorkerGlobalScope.setTimeout()")}}, {{DOMxRef("Window.setInterval()")}} et {{DOMxRef("WorkerGlobalScope.setInterval()")}} ont changé&nbsp;; le temps minimum autorisé a changé, et [varie en fonction de la situation](/fr/docs/Web/API/Window/setTimeout#raisons_pour_lesquelles_la_durée_effective_est_plus_longue). De plus, les délais et intervalles sont limités à un par seconde dans les onglets inactifs (c'est-à-dire les onglets que l'utilisateur ne regarde pas actuellement).

## Changements liés à JavaScript

Les mots-clés suivants sont désormais réservés en JavaScript, même lorsque vous n'êtes pas en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)&nbsp;:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

N'utilisez pas ces mots-clés n'importe où dans votre code, même comme noms de propriétés d'objet.

> [!NOTE]
> C'est l'une de ces choses que l'outil de mise à jour automatique d'AMO peut ne pas toujours détecter, alors vérifiez votre code pour ces mots-clés si votre extension a été mise à jour automatiquement mais ne fonctionne toujours pas correctement.

## Changements d'interface

Instancier certains services, y compris le `nsICertOverrideService`, au démarrage peut rendre Firefox inutilisable ([bogue Firefox 650858 <sup>(angl.)</sup>](https://bugzil.la/650858)). Cela se produit uniquement si vous essayez d'instancier un service avant que l'évènement `load` ne soit déclenché.

Pour résoudre ce problème, déplacez l'instanciation de ces services dans votre gestionnaire d'évènements `load`&nbsp;:

```js
const MonObjet = {
  comp: null,
  init() {
    this.comp = Components.classes["…"].getService(/* … */);
  },
  // …
};
window.addEventListener(
  "load",
  function () {
    MonObjet.init();
  },
  false,
);
```

Une solution encore meilleure, bien sûr, est de suivre les meilleures pratiques de performance et de ne pas instancier les services tant que vous n'avez pas besoin de les utiliser.

## Voir aussi

- [Firefox 5 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/5)
