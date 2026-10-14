---
title: "Window : évènement unload"
short-title: unload
slug: Web/API/Window/unload_event
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{APIRef("UI Events")}}

> [!WARNING]
> Les développeur·euse·s doivent éviter d'utiliser cet évènement. Voir les «&nbsp;Notes d'utilisation&nbsp;» ci-dessous.

L'évènement **`unload`** est déclenché lorsque le document ou une ressource enfant est en train d'être déchargé.

Il est déclenché après&nbsp;:

- {{DOMxRef("Window/beforeunload_event", "beforeunload")}} (évènement annulable)
- {{DOMxRef("Window/pagehide_event", "pagehide")}}

Le document se trouve alors dans un état particulier&nbsp;:

- Toutes les ressources existent encore (img, iframe etc.)
- Plus rien n'est encore visible par l'utilisateur·ice final·e
- Les interactions avec l'interface sont désactivées ({{DOMxRef("window.open")}}, {{DOMxRef("window.alert", "alert")}}, {{DOMxRef("window.confirm", "confirm")}}, etc.)
- Aucune erreur ne vient interrompre le flux de déchargement.

Veuillez noter que l'évènement de déchargement suit également l'arborescence du document&nbsp;: le déchargement du cadre parent se produit **avant** le déchargement (`unload`) du cadre enfant (voir l'exemple ci-dessous).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété de gestionnaire d'évènement `onunload` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Notes d'utilisation

Les développeur·euse·s doivent éviter d'utiliser cet évènement.

Surtout sur mobile, l'évènement `unload` n'est pas déclenché de manière fiable. Par exemple, l'évènement `unload` n'est pas déclenché du tout dans le scénario suivant&nbsp;:

1. Un·e utilisateur·ice mobile visite votre page.
2. L'utilisateur·ice passe ensuite à une autre application.
3. Plus tard, l'utilisateur·ice ferme le navigateur depuis le gestionnaire d'applications.

De plus, l'évènement `unload` n'est pas compatible avec le [cache arrière/avant <sup>(angl.)</sup>](https://web.dev/articles/bfcache) (bfcache), car de nombreuses pages utilisant cet évènement supposent que la page n'existe plus après le déclenchement de l'évènement. Pour remédier à cela, certains navigateurs (comme Firefox) ne placent pas les pages dans le bfcache si elles ont des écouteurs `unload`, ce qui est mauvais pour les performances.

Pour ces raisons, Chrome a [cessé de déclencher les évènements `unload` par défaut <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/deprecating-unload). Une page qui dépend encore de `unload` peut se réactiver en utilisant la directive [`unload`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/unload) de l'en-tête {{HTTPHeader("Permissions-Policy")}}.

À la place de `unload`, utilisez les évènements suivants, qui sont tous deux compatibles avec le bfcache&nbsp;:

- L'évènement [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event) est déclenché lorsque {{DOMxRef("Document.visibilityState")}} passe de `visible` à `hidden`, ou inversement. C'est le dernier évènement qui est déclenché de manière fiable, donc c'est le meilleur endroit pour sauvegarder l'état de l'application ou envoyer des données analytiques. Notez que `visibilitychange` est déclenché lorsque l'utilisateur·ice change d'onglet, quitte la page actuelle ou la ferme.
- L'évènement [`pagehide`](/fr/docs/Web/API/Window/pagehide_event) est déclenché lorsque le navigateur masque la page actuelle dans le processus de présentation d'une autre page à partir de l'historique de la session. Cela est utile si vous essayez spécifiquement de détecter que l'utilisateur·ice quitte la page. Cependant, comme `unload`, il n'est pas déclenché de manière fiable, surtout sur mobile, donc préférez `visibilitychange` lorsque c'est possible.

Par exemple, au lieu d'envoyer des données dans un écouteur `unload`&nbsp;:

```js example-bad
window.addEventListener("unload", () => {
  navigator.sendBeacon("/log", analyticsData);
});
```

Envoyez-le lorsque la page devient cachée&nbsp;:

```js example-good
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

Voir le guide de [l'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) pour plus d'informations sur les problèmes associés à l'évènement `unload`.

## Exemples

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Cadre parent</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("Je suis le premier 1er.");
      });
      window.addEventListener("unload", (event) => {
        console.log("Je suis le premier 3e.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

Ci-dessous, le contenu de `child-frame.html`&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Cadre enfant</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("Je suis le premier 2e.");
      });
      window.addEventListener("unload", (event) => {
        console.log("Je suis le premier 4e et dernier…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

Lorsque le cadre parent est déchargé, les évènements sont déclenchés dans l'ordre décrit par les messages `console.log()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;: {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{DOMxRef("Document/readystatechange_event", "readystatechange")}}, {{DOMxRef("Window/load_event", "load")}}
- [Décharger les documents — décharger un document <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- L'évènement [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event)
- [Ne perdez pas l'état de l'utilisateur·ice et de l'application, utilisez la visibilité de la page <sup>(angl.)</sup>](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explique en détail pourquoi vous devez utiliser `visibilitychange` et non `beforeunload`/`unload`.
- [L'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) donne des conseils sur les bonnes pratiques pour gérer le comportement du cycle de vie des pages dans vos applications web.
- [PageLifecycle.js <sup>(angl.)</sup>](https://github.com/GoogleChromeLabs/page-lifecycle)&nbsp;: une bibliothèque JavaScript qui gère les incohérences entre navigateurs dans le comportement du cycle de vie des pages.
- [Cache arrière/avant <sup>(angl.)</sup>](https://web.dev/articles/bfcache) explique ce qu'est le cache arrière/avant et ses implications pour divers évènements du cycle de vie des pages.
