---
title: "Document : évènement visibilitychange"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
l10n:
  sourceCommit: 923b4568e8df696bea2c42262619514de118cc6e
---

{{APIRef("DOM")}}

L'évènement `visibilitychange` de l'interface {{DOMxRef("Document")}} est déclenché sur le document lorsque son état de visibilité change — par exemple, lorsque l'utilisateur·ice change d'onglet dans le navigateur, navigue vers une nouvelle page, minimise ou ferme le navigateur, ou sur mobile, passe à une autre application.

L'évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("visibilitychange", (event) => { })

onvisibilitychange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Notes d'utilisation

L'évènement n'inclut pas l'état de visibilité mis à jour du document, mais vous pouvez obtenir cette information à partir de la propriété {{DOMxRef("Document.visibilityState", "visibilityState")}} du document.

Cet évènement se déclenche avec un `visibilityState` qui vaut `hidden` lorsque l'utilisateur·ice navigue vers une nouvelle page, change d'onglet, ferme l'onglet, minimise ou ferme le navigateur, ou, sur mobile, passe du navigateur à une autre application. La transition vers `hidden` est le dernier évènement qui peut être observé de manière fiable par la page, donc les développeur·euse·s devraient le considérer comme la fin probable de la session de l'utilisateur·ice (par exemple, pour [envoyer des données analytiques](/fr/docs/Web/API/Navigator/sendBeacon)).

La transition vers `hidden` est également un bon moment pour que les pages arrêtent de mettre à jour l'interface utilisateur et interrompent toute tâche que l'utilisateur·ice ne souhaite pas voir s'exécuter en arrière-plan.

## Exemples

### Mettre la musique en pause lors du passage à l'état caché

Cet exemple met en pause la lecture audio lorsque la page est cachée et reprend la lecture lorsque la page redevient visible.
Pour un exemple complet, consultez la documentation [L'API Page Visibility&nbsp;: Mettre en pause l'audio lorsque la page est cachée](/fr/docs/Web/API/Page_Visibility_API#metre_en_pause_laudio_lorsque_la_page_est_cachée).

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else if (playingOnHide) {
    // Reprendre la lecture si l'audio était « en lecture cachée »
    audio.play();
  }
});
```

### Envoyer des analytiques de fin de session lors de la transition vers l'état caché

Cet exemple considère la transition vers `hidden` comme la fin de la session de l'utilisateur·ice et envoie les analytiques appropriées en utilisant l'API {{DOMxRef("Navigator.sendBeacon()")}}&nbsp;:

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Page Visibility](/fr/docs/Web/API/Page_Visibility_API)
- La propriété {{DOMxRef("Document.visibilityState")}}
- La propriété {{DOMxRef("Document.hidden")}}
- [Ne perdez pas l'état de l'utilisateur·ice et de l'application, utilisez Page Visibility <sup>(angl.)</sup>](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explique en détail pourquoi vous devriez utiliser `visibilitychange`, et non `beforeunload`/`unload`.
- [L'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) fournit des conseils sur les meilleures pratiques pour gérer le comportement du cycle de vie des pages dans vos applications web.
