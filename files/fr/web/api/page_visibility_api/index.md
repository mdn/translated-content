---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

**L'API _Page Visibility_** («&nbsp;visibilité de la page&nbsp;») permet de savoir quand une page web est visible ou a le focus.

Avec la navigation par onglets, il y a une probabilité raisonnable qu'une page web donnée soit en arrière-plan, donc masquée pour l'utilisateur. Quand celui-ci minimise la page ou bascule vers un autre onglet, l'API émet un évènement [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event) correspondant à la visibilité de la page. Vous pouvez détecter cet évènement et réaliser différentes actions ou modifier un comportement. Par exemple, si votre application web est en train de lire une vidéo, elle peut mettre cette dernière en pause au moment où l'utilisateur regarde un autre onglet, et reprendre la lecture quand la personne revient à l'onglet. L'utilisateur ne perd pas le fil de la vidéo et peut continuer à la regarder.

L'état de visibilité d'une {{HTMLElement("iframe")}} est le même que celui du document parent. Masquer l'iframe via une propriété CSS ne déclenche pas d'évènement de visibilité, ni ne change l'état du document contenu.

### Avantages

L'API est particulièrement utile pour économiser des ressources. Elle donne aux développeurs l'opportunité de ne pas réaliser des tâches non nécessaires quand la page web est invisible.

### Cas d'utilisation

Quelques exemples&nbsp;:

- Un site comportant un carrousel qui ne doit pas passer à l'image suivante si l'utilisateur ne regarde pas la page.
- Une application présentant un panneau d'informations, qui ne doit pas demander au serveur une mise à jour des données quand la page n'est pas visible.
- Une page qui cherche à detecter quand elle est _prerendered_ (pré-calculée), afin de tenir un compte précis du nombre de vues.
- Un site qui cherche à désactiver les sons quand un appareil est en mode veille (l'utilisateur presse le bouton d'alimentation pour éteindre l'écran).

Historiquement, les développeurs ont utilisé des solutions de remplacement imparfaites pour détecter de tels changements. Par exemple, inscrire un gestionnaire onblur/onfocus sur la fenêtre est utile quand votre page n'est pas la page active, mais cela ne vous dit pas si votre page est masquée pour l'utilisateur. L'API _Page Visibility_ corrige ce problème. (Lorsqu'on compare avec un gestionnaire onblur/onfocus sur la fenêtre, une différence notable est que la page ne devient _pas_ cachée quand une autre fenêtre est rendue active et le navigateur perd le focus. Une page devient cachée seulement quand l'utilisateur bascule vers un autre onglet ou minimise la fenêtre du navigateur.)

### Politiques de performance des pages en arrière-plan

En parallèle avec l'API _Page Visibility,_ un certain nombre de politiques sont en place pour atténuer l'impact négatif sur les performances lié aux onglets en arrière-plan&nbsp;:

- Les appels à {{domxref("Window.requestAnimationFrame()")}} sont suspendus dans la plupart des navigateurs lorsqu'ils sont effectués dans un onglet en arrière-plan ou une {{ HTMLElement("iframe") }} cachée, afin d'améliorer les performances et l'autonomie de la batterie.
- Les timers tels que {{domxref("WindowOrWorkerGlobalScope.setTimeout")}} sont retardés dans les onglets inactifs ou en arrière-plan pour aider à l'amélioration des performances. Voir [_Reasons for delays longer than specified_](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified) pour plus de détails.
- Les navigateurs modernes (Firefox 58+, Chrome 57+) ont mis en œuvre un retardement basé sur un budget pour les timeouts en arrière-plan. Cela place une limite supplémentaire sur la consommation de CPU des timers en arrière-plan. Cette limite opère de manière similaire dans tous les navigateurs modernes, avec les détails qui suivent&nbsp;:

  - Dans Firefox, les fenêtres d'onglets en arrière-plan ont chacune leur propre budget de temps en millisecondes — une valeur maximum et minimum de +50 ms et -150 ms, respectivement. Chrome est très similaire, excepté que le budget est spécifié en secondes.
  - Les fenêtres sont sujettes au retardement après 30 secondes, avec les mêmes règles de délai de retardement que spécifiées pour les timers (encore une fois, voir _[Reasons for delays longer than specified](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified)_). Pour Chrome, cette valeur est de 10 secondes.
  - Les tâches de timers sont permises seulement quand le budget est non négatif.
  - Quand un timer a été exécuté, son temps d'exécution est retranché au budget de la fenêtre depuis laquelle le timer a été appelé.
  - Le budget regénère à un taux de 10 ms par seconde, sous Firefox et sous Chrome.

- Certaines opérations sont exemptées de retardement&nbsp;:

  - Les applications qui jouent du son sont considérées comme en avant-plan, et donc ne sont pas retardées.
  - Les applications avec des connexions en temps réel ([WebSockets](/fr/docs/Web/API/WebSockets_API) et [WebRTC](/fr/docs/Web/API/WebRTC_API)), afin d'éviter que ces connexions soient fermées par timeout.
  - Les opérations [IndexedDB](/fr/docs/Web/API/IndexedDB_API).

## Exemple

Voir [l'exemple en direct](http://daniemon.com/tech/webapps/page-visibility/) (vidéo avec son).

Cet exemple, qui met la vidéo en pause quand vous basculez vers un autre onglet, et reprend la lecture quand vous y revenez, a été créé avec le code suivant&nbsp;:

```js
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
  if (document.hidden) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (
  typeof document.addEventListener === "undefined" ||
  typeof document.hidden === "undefined"
) {
  console.log(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
  );
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // When the video pauses, set the title.
  // This shows the paused
  videoElement.addEventListener(
    "pause",
    function () {
      document.title = "Paused";
    },
    false,
  );

  // When the video plays, set the title.
  videoElement.addEventListener(
    "play",
    function () {
      document.title = "Playing";
    },
    false,
  );
}
```

## Propriétés

- {{domxref("document.hidden")}}
  - : Retourne `true` si la page est dans un état considéré comme masqué à l'utilisateur, et `false` dans le cas contraire.
- {{domxref("document.visibilityState")}}

  - : Une `string` représentant l'état de visibilité du document. Valeurs possibles&nbsp;:

    - `visible`&nbsp;: le contenu de la page peut être au moins partiellement visible. En pratique, cela signifie que la page est l'onglet actif d'une fenêtre non minimisée.
    - `hidden`&nbsp;: le contenu de la page n'est pas visible pour l'utilisateur. En pratique, cela signifie que le document est soit dans un onglet en arrière-plan, soit dans une fenêtre minimizée&nbsp;; ou bien que l'écran de verrouillage de l'OS est actif.
    - `prerender`&nbsp;: le contenu de la page est en train d'être précalculé et n'est pas visible pour l'utilisateur (il est considéré masqué pour `document.hidden`). Le document peut être dans cet état initialement, mais ne passera jamais à cet état depuis une autre valeur. Note&nbsp;: le support des navigateurs est optionnel.
    - `unloaded`&nbsp;: la page est en train d'être déchargée de la mémoire. Note&nbsp;: le support des navigateurs est optionnel.

    ```js
    //startSimulation and pauseSimulation defined elsewhere
    function handleVisibilityChange() {
      if (document.hidden) {
        pauseSimulation();
      } else {
        startSimulation();
      }
    }
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false,
    );
    ```

- {{domxref("document.onvisibilitychange")}}
  - : Un gestionnaire d'évènement représentant le code à appeler quand l'évènement [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event) est émis.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La description de [l'API Page Visibility](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) sur l'IEBlog
- La description de [l'API Page Visibility](http://code.google.com/chrome/whitepapers/pagevisibility.html) par Google
