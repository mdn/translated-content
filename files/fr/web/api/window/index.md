---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

{{APIRef("DOM")}}

L'interface **`Window`** représente une fenêtre contenant un document {{Glossary("DOM")}}&nbsp;; la propriété `document` pointe vers le [document DOM](/fr/docs/Web/API/Document) chargé dans cette fenêtre.

Vous pouvez obtenir la fenêtre d'un document donné à l'aide de la propriété {{domxref("document.defaultView")}}.

Une variable globale, `window`, représentant la fenêtre dans laquelle le script s'exécute, est exposée au code JavaScript.

L'interface `Window` regroupe de nombreuses fonctions, espaces de noms, objets et constructeurs qui ne sont pas forcément liés directement à la notion de fenêtre d'interface utilisateur. Cependant, c'est l'endroit approprié pour inclure ces éléments qui doivent être disponibles globalement. Beaucoup d'entre eux sont documentés dans la [Référence JavaScript](/fr/docs/Web/JavaScript/Reference) et la [Référence DOM](/fr/docs/Web/API/Document_Object_Model).

Dans un navigateur à onglets, chaque onglet est représenté par son propre objet `Window`&nbsp;; la variable globale `window` vue par le code JavaScript exécuté dans un onglet représente toujours cet onglet. Cela dit, même dans un navigateur à onglets, certaines propriétés et méthodes s'appliquent à la fenêtre globale qui contient l'onglet, comme {{Domxref("Window.resizeTo", "resizeTo()")}} et {{Domxref("Window.innerHeight", "innerHeight")}}. De manière générale, tout ce qui ne peut pas raisonnablement concerner un onglet concerne la fenêtre elle-même.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de l'interface {{domxref("EventTarget")}}._

Notez que les propriétés qui sont des objets (par exemple, pour surcharger le prototype d'éléments natifs) sont listées dans une section séparée ci-dessous.

- {{domxref("Window.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne l'objet {{domxref("CacheStorage")}} associé au contexte courant. Cet objet permet, par exemple, de stocker des ressources pour une utilisation hors ligne et de générer des réponses personnalisées aux requêtes.
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : Un alias pour {{domxref("Window.navigator")}}.
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : Indique si la fenêtre courante est fermée ou non.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne une référence à l'objet {{domxref("CookieStore")}} pour le contexte du document courant.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un booléen indiquant si le document courant a été chargé dans une {{htmlelement("iframe")}} sans identifiants. Voir [IFrame credentialless](/fr/docs/Web/Security/IFrame_credentialless) pour plus de détails.
- {{domxref("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Retourne un booléen indiquant si le site web est en état d'isolation inter-origine.
- {{domxref("Window.crypto")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{domxref("Crypto")}} associé à l'objet global.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet {{domxref("CustomElementRegistry")}}, qui permet d'enregistrer de nouveaux [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) et d'obtenir des informations sur ceux déjà enregistrés.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Retourne le rapport entre les pixels physiques et les pixels indépendants du périphérique sur l'affichage courant.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Retourne une référence vers le document contenu dans la fenêtre.
- {{domxref("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Retourne une référence vers la fenêtre [Picture-in-Picture du document](/fr/docs/Web/API/Document_Picture-in-Picture_API) pour le contexte du document courant.
- {{domxref("Window.fence")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Retourne une instance de l'objet {{domxref("Fence")}} pour le contexte du document courant. Disponible uniquement pour les documents intégrés dans une {{htmlelement("fencedframe")}}.
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : Retourne l'élément dans lequel la fenêtre est intégrée, ou null si la fenêtre n'est pas intégrée.
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : Retourne un tableau des sous-fenêtres (frames) de la fenêtre courante.
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : Indique si la fenêtre est affichée en plein écran ou non.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet d'historique.
- {{domxref("Window.indexedDB")}} {{ReadOnlyInline}}
  - : Fournit un mécanisme permettant aux applications d'accéder de façon asynchrone aux bases de données indexées&nbsp;; Retourne un objet {{domxref("IDBFactory")}}.
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : Obtient la hauteur de la zone de contenu de la fenêtre du navigateur, y compris, si elle est affichée, la barre de défilement horizontale.
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : Obtient la largeur de la zone de contenu de la fenêtre du navigateur, y compris, si elle est affichée, la barre de défilement verticale.
- {{domxref("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : Retourne un booléen indiquant si le contexte courant est sécurisé (`true`) ou non (`false`).
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Lorsqu'une [application web progressive](/fr/docs/Web/Progressive_web_apps) (PWA) est lancée avec une valeur `client_mode` de [`launch_handler`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) égale à `focus-existing`, `navigate-new` ou `navigate-existing`, alors `launchQueue` donne accès à la classe {{domxref("LaunchQueue")}}, permettant d'implémenter une gestion personnalisée de la navigation au lancement de la PWA.
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : Retourne le nombre de frames dans la fenêtre. Voir aussi {{domxref("window.frames")}}.
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet de stockage local utilisé pour stocker des données accessibles uniquement par l'origine qui les a créées.
- {{domxref("Window.location")}}
  - : Obtient ou définit l'emplacement (URL courante) de l'objet window.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet locationbar.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Retourne l'objet menubar.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la coordonnée horizontale (X) du coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) de la fenêtre, en coordonnées écran. Cette valeur est exprimée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` dans `nsIDOMWindowUtils` pour convertir en pixels écran si besoin.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la coordonnée verticale (Y) du coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) de la fenêtre, en coordonnées écran. Cette valeur est exprimée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` pour convertir en pixels écran si besoin.
- {{domxref("Window.name")}}
  - : Obtient ou définit le nom de la fenêtre.
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne l'objet {{domxref("Navigation")}} associé à la fenêtre courante. Point d'entrée de l'[API Navigation](/fr/docs/Web/API/Navigation_API).
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet navigator.
- {{domxref("Window.opener")}}
  - : Retourne une référence à la fenêtre qui a ouvert la fenêtre courante.
- {{domxref("Window.origin")}} {{ReadOnlyInline}}
  - : Retourne l'origine de l'objet global, sous forme de chaîne de caractères.
- {{domxref("Window.originAgentCluster")}} {{ReadOnlyInline}}
  - : Retourne `true` si cette fenêtre appartient à un cluster d'agent lié à une origine.
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : Obtient la hauteur extérieure de la fenêtre du navigateur.
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : Obtient la largeur extérieure de la fenêtre du navigateur.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : Un alias pour {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : Un alias pour {{domxref("window.scrollY")}}.
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : Retourne une référence au parent de la fenêtre ou sous-fenêtre courante.
- {{domxref("Window.performance")}} {{ReadOnlyInline}}
  - : Retourne un objet {{domxref("Performance")}}, qui inclut les attributs {{domxref("Performance.timing", "timing")}} et {{domxref("Performance.navigation", "navigation")}}, chacun fournissant des données [liées aux performances](/fr/docs/Web/API/Performance_API/Navigation_timing). Voir aussi [Utiliser Navigation Timing](/fr/docs/Web/API/Performance_API/Navigation_timing) pour plus d'informations et d'exemples.
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet personalbar.
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{domxref("Scheduler")}} associé au contexte courant. Point d'entrée pour utiliser l'[API Prioritized Task Scheduling](/fr/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet screen associé à la fenêtre.
- {{domxref("Window.screenX")}} and {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : Les deux propriétés Retournent la distance horizontale entre le bord gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) du navigateur de l'utilisateur·ice et le bord gauche de l'écran.
- {{domxref("Window.screenY")}} and {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : Les deux propriétés Retournent la distance verticale entre le bord supérieur de la zone d'affichage (<i lang="en">viewport</i> en anglais) du navigateur de l'utilisateur·ice et le bord supérieur de l'écran.
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : Retourne l'objet scrollbars.
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Le décalage maximal auquel la fenêtre peut être défilée horizontalement, c'est-à-dire la largeur du document moins la largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais).
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Le décalage maximal auquel la fenêtre peut être défilée verticalement (c'est-à-dire la hauteur du document moins la hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais)).
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : Retourne le nombre de pixels déjà défilés horizontalement dans le document.
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : Retourne le nombre de pixels déjà défilés verticalement dans le document.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet window lui-même.
- {{domxref("Window.sessionStorage")}}
  - : Retourne une référence à l'objet de stockage de session utilisé pour stocker des données accessibles uniquement par l'origine qui les a créées.
- {{domxref("Window.sharedStorage")}} {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Retourne l'objet {{domxref("WindowSharedStorage")}} pour l'origine courante. Point d'entrée principal pour écrire des données dans le stockage partagé avec l'[API Shared Storage](/fr/docs/Web/API/Shared_Storage_API).
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Retourne un objet {{domxref("SpeechSynthesis")}}, point d'entrée pour utiliser la synthèse vocale de l'[API Web Speech](/fr/docs/Web/API/Web_Speech_API).
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet statusbar.
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet toolbar.
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : Retourne une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres. Cette propriété est en lecture seule.
- {{domxref("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{domxref("TrustedTypePolicyFactory")}} associé à l'objet global, point d'entrée pour utiliser l'{{domxref("Trusted Types API", "API Trusted Types", "", "nocode")}}.
- {{domxref("Window.viewport")}} {{Experimental_inline}} {{ReadOnlyInline}}
  - : Retourne une instance d'objet {{domxref("Viewport")}}, qui fournit des informations sur l'état courant de la zone d'affichage (<i lang="en">viewport</i> en anglais) du périphérique.
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Retourne un objet {{domxref("VisualViewport")}} représentant la zone d'affichage visuelle (<i lang="en">visual viewport</i> en anglais) pour une fenêtre donnée.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Retourne une référence à la fenêtre courante.
- `window[0]`, `window[1]`, etc.
  - : Retourne une référence à l'objet `window` dans les frames. Voir {{domxref("Window.frames")}} pour plus de détails.
- Propriétés nommées
  - : Certains éléments du document sont également exposés comme propriétés de window&nbsp;:
    - Pour chaque élément {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} et {{HTMLElement("object")}}, son `name` (s'il n'est pas vide) est exposé.
      Par exemple, si le document contient `<form name="my_form">`, alors `window["my_form"]` (et son équivalent `window.my_form`) renverra une référence vers cet élément.
    - Pour chaque élément HTML, son `id` (s'il n'est pas vide) est exposé.

  Si une propriété correspond à un seul élément, cet élément est directement renvoyé. Si la propriété correspond à plusieurs éléments, alors un objet {{domxref("HTMLCollection")}} contenant tous ces éléments est renvoyé. Si l'un des éléments est une `<iframe>` ou un `<object>` navigable, alors la propriété {{domxref("HTMLIFrameElement/contentWindow", "contentWindow")}} du premier iframe de ce type est renvoyée à la place.

### Propriétés dépréciées

- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne l'**événement courant**, c'est-à-dire l'événement actuellement traité par le contexte du code JavaScript, ou `undefined` si aucun événement n'est en cours de traitement. Il est recommandé d'utiliser l'objet {{domxref("Event")}} passé directement aux gestionnaires d'événements.
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne un objet avec des fonctions permettant d'ajouter des fournisseurs de recherche externes au navigateur.
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne l'orientation, en degrés (par incréments de 90°), de la zone d'affichage (<i lang="en">viewport</i> en anglais) par rapport à l'orientation naturelle du périphérique.
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : Obtient ou définit le texte affiché dans la barre d'état en bas du navigateur.

## Méthodes d'instance

_Cette interface hérite des méthodes de l'interface {{domxref("EventTarget")}}._

- {{domxref("Window.atob()")}}
  - : Décode une chaîne de données encodée en base 64.
- {{domxref("Window.alert()")}}
  - : Affiche une boîte de dialogue d'alerte.
- {{domxref("Window.blur()")}} {{deprecated_inline}}
  - : Retire la sélection de la fenêtre.
- {{domxref("Window.btoa()")}}
  - : Crée une chaîne ASCII encodée en base 64 à partir d'une chaîne de données binaires.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : Permet d'annuler un rappel précédemment planifié avec {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}}
  - : Permet d'annuler un rappel précédemment planifié avec {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.clearInterval()")}}
  - : Annule l'exécution répétée définie avec {{domxref("Window.setInterval()")}}.
- {{domxref("Window.clearTimeout()")}}
  - : Annule l'exécution différée définie avec {{domxref("Window.setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Ferme la fenêtre courante.
- {{domxref("Window.confirm()")}}
  - : Affiche une boîte de dialogue avec un message auquel l'utilisateur·ice doit répondre.
- {{domxref("Window.createImageBitmap()")}}
  - : Accepte différentes sources d'images et Retourne une promesse {{jsxref("Promise")}} résolue avec un objet {{domxref("ImageBitmap")}}. La source peut être recadrée à un rectangle de pixels d'origine _(sx, sy)_ de largeur sw et hauteur sh.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : Écrit un message dans la console.
- {{domxref("Window.fetch()")}}
  - : Démarre le processus de récupération d'une ressource sur le réseau.
- {{domxref("Window.fetchLater()")}} {{experimental_inline}}
  - : Crée une récupération différée, envoyée lorsque la page est quittée (détruite ou placée dans le {{Glossary("bfcache")}}, ou après un délai `activateAfter` fourni — selon ce qui arrive en premier.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : Recherche dans une chaîne de caractères donnée dans une fenêtre.
- {{domxref("Window.focus()")}}
  - : Donne la sélection à la fenêtre courante.
- {{domxref("Window.getComputedStyle()")}}
  - : Obtient le style calculé pour l'élément spécifié. Le style calculé indique les valeurs calculées de toutes les propriétés CSS de l'élément.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Obtient le style calculé par défaut pour l'élément spécifié, en ignorant les feuilles de style de l'auteur·ice.
- {{domxref("Window.getScreenDetails()")}} {{experimental_inline}} {{securecontext_inline}}
  - : Retourne une promesse {{jsxref("Promise")}} résolue avec une instance de l'objet {{domxref("ScreenDetails")}} représentant les détails de tous les écrans disponibles sur le périphérique de l'utilisateur·ice.
- {{domxref("Window.getSelection()")}}
  - : Retourne l'objet de sélection représentant l'élément ou les éléments sélectionnés.
- {{domxref("Window.matchMedia()")}}
  - : Retourne un objet {{domxref("MediaQueryList")}} représentant la chaîne de requête média spécifiée.
- {{domxref("Window.moveBy()")}}
  - : Déplace la fenêtre courante d'une certaine distance.
- {{domxref("Window.moveTo()")}}
  - : Déplace la fenêtre aux coordonnées spécifiées.
- {{domxref("Window.open()")}}
  - : Ouvre une nouvelle fenêtre.
- {{domxref("Window.postMessage()")}}
  - : Permet à une fenêtre d'envoyer de façon sécurisée une chaîne de données à une autre fenêtre, même si elle n'est pas du même domaine.
- {{domxref("Window.print()")}}
  - : Ouvre la boîte de dialogue d'impression pour imprimer le document courant.
- {{domxref("Window.prompt()")}}
  - : Retourne le texte saisi par l'utilisateur·ice dans une boîte de dialogue de saisie.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Retourne une promesse {{jsxref("Promise")}} résolue avec un tableau d'objets {{domxref("FontData")}} représentant les polices disponibles localement.
- {{domxref("Window.queueMicrotask()")}}
  - : Place une micro-tâche dans la file d'attente pour exécution à un moment sûr avant que le contrôle ne revienne à la boucle d'événements du navigateur.
- {{domxref("Window.reportError()")}}
  - : Signale une erreur dans un script, simulant une exception non gérée.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Indique au navigateur qu'une animation est en cours et demande de planifier un rafraîchissement de la fenêtre pour la prochaine image d'animation.
- {{domxref("Window.requestIdleCallback()")}}
  - : Permet de planifier des tâches pendant les périodes d'inactivité du navigateur.
- {{domxref("Window.resizeBy()")}}
  - : Redimensionne la fenêtre courante d'une certaine valeur.
- {{domxref("Window.resizeTo()")}}
  - : Redimensionne dynamiquement la fenêtre.
- {{domxref("Window.scroll()")}}
  - : Fait défiler la fenêtre à un endroit particulier du document.
- {{domxref("Window.scrollBy()")}}
  - : Fait défiler le document dans la fenêtre de la valeur indiquée.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Fait défiler le document du nombre de lignes indiqué.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Fait défiler le document courant du nombre de pages spécifié.
- {{domxref("Window.scrollTo()")}}
  - : Fait défiler le document jusqu'aux coordonnées spécifiées.
- {{domxref("Window.setInterval()")}}
  - : Planifie l'exécution d'une fonction à chaque intervalle de temps donné en millisecondes.
- {{domxref("Window.setTimeout()")}}
  - : Planifie l'exécution d'une fonction après un certain délai.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur de dossier permettant à l'utilisateur·ice de choisir un dossier.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur de fichiers permettant à l'utilisateur·ice de choisir un ou plusieurs fichiers.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur permettant à l'utilisateur·ice d'enregistrer un fichier.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Ajuste la taille de la fenêtre en fonction de son contenu.
- {{domxref("Window.stop()")}}
  - : Cette méthode arrête le chargement de la fenêtre.
- {{domxref("Window.structuredClone()")}}
  - : Crée une [copie profonde](/fr/docs/Glossary/Deep_copy) d'une valeur donnée à l'aide de l'[algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Méthodes dépréciées

- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Enregistre la fenêtre pour capturer tous les événements du type spécifié.
- {{domxref("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Annule l'exécution répétée définie avec `setImmediate()`.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Libère la fenêtre de la capture d'événements d'un type spécifique.
- {{domxref("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Permet à un site web ou une application d'accéder à un système de fichiers isolé pour son propre usage.
- {{domxref("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Exécute une fonction après que le navigateur a terminé d'autres tâches lourdes.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Ne fait rien (no-op). Conservé pour la compatibilité avec Netscape 4.x.
- {{domxref("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforme un {{domxref("WebKitPoint")}} du système de coordonnées du nœud vers celui de la page.
- {{domxref("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforme un {{domxref("WebKitPoint")}} du système de coordonnées de la page vers celui du nœud.

## Événements

Écoutez ces événements à l'aide de [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou en assignant un écouteur d'événement à la propriété `oneventname` de cette interface. En plus des événements listés ci-dessous, de nombreux événements peuvent remonter depuis le {{domxref("Document")}} contenu dans l'objet window.

- {{domxref("Window/error_event", "error")}}
  - : Se déclenche lorsqu'une ressource n'a pas pu être chargée ou utilisée. Par exemple, si un script rencontre une erreur d'exécution ou si une image est introuvable ou invalide.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Se déclenche sur l'objet global lorsque la langue préférée de l'utilisateur·ice change.
- {{domxref("Window/resize_event", "resize")}}
  - : Se déclenche lorsque la fenêtre a été redimensionnée.
- {{domxref("Window/storage_event", "storage")}}
  - : Se déclenche lorsqu'une zone de stockage (`localStorage` ou `sessionStorage`) a été modifiée dans le contexte d'un autre document.

### Événements de connexion

- {{domxref("Window/offline_event", "offline")}}
  - : Se déclenche lorsque le navigateur perd l'accès au réseau et que la valeur de `navigator.onLine` passe à `false`.
- {{domxref("Window/online_event", "online")}}
  - : Se déclenche lorsque le navigateur retrouve l'accès au réseau et que la valeur de `navigator.onLine` passe à `true`.

### Événements d'orientation de l'appareil

- {{domxref("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : Se déclenche à intervalles réguliers, indiquant la force d'accélération physique reçue par le périphérique et, si disponible, le taux de rotation.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : Se déclenche lorsque de nouvelles données du capteur d'orientation du magnétomètre sont disponibles concernant l'orientation actuelle du périphérique par rapport au repère terrestre.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : Se déclenche lorsque de nouvelles données du capteur d'orientation du magnétomètre sont disponibles concernant l'orientation absolue du périphérique par rapport au repère terrestre.

### Événements de ciblage

- {{domxref("Window/blur_event", "blur")}}
  - : Se déclenche lorsqu'un élément perd la sélection.
- {{domxref("Window/focus_event", "focus")}}
  - : Se déclenche lorsqu'un élément reçoit la sélection.

### Événements de manette de jeu

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été connectée ou lors de la première utilisation d'un bouton ou axe de la manette.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été déconnectée.

### Événements d'historique

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Se déclenche lorsque l'identifiant de fragment de l'URL a changé (la partie de l'URL commençant par et suivant le symbole `#`).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Se déclenche lorsque le navigateur masque le document courant lors du passage à un autre document de l'historique de session (par exemple, lors d'un clic sur le bouton Précédent ou Suivant).
- {{domxref("Window.pagereveal_event", "pagereveal")}}
  - : Se déclenche lorsqu'un document est affiché pour la première fois, soit lors du chargement depuis le réseau, soit lors de l'activation depuis le {{Glossary("bfcache")}} ou le {{Glossary("Prerender", "prérendu")}}.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Se déclenche lorsque le navigateur rend le document visible à la suite d'une navigation, que ce soit lors du premier chargement ou lors d'un retour sur la page dans le même onglet.
- {{domxref("Window.pageswap_event", "pageswap")}}
  - : Se déclenche lorsqu'un document va être déchargé à cause d'une navigation.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Se déclenche lorsque l'entrée d'historique active change.

### Événements de chargement et de déchargement

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Se déclenche lorsque la fenêtre, le document et ses ressources vont être déchargés.
- {{domxref("Window/load_event", "load")}}
  - : Se déclenche lorsque la page entière a été chargée, y compris toutes les ressources dépendantes comme les feuilles de style et les images.
- {{domxref("Window/unload_event", "unload")}} {{deprecated_inline}}
  - : Se déclenche lorsque le document ou une ressource enfant est en cours de déchargement.

### Événements du manifeste

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Se déclenche lorsque le navigateur a installé une page en tant qu'application.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Se déclenche lorsqu'un·e utilisateur·ice va être invité·e à installer une application web.

### Événements de messagerie

- {{domxref("Window/message_event", "message")}}
  - : Se déclenche lorsque la fenêtre reçoit un message, par exemple via {{domxref("Window/postMessage", "Window.postMessage()")}} depuis un autre contexte de navigation.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Se déclenche lorsqu'un objet `Window` reçoit un message qui ne peut pas être désérialisé.

### Événements d'impression

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Se déclenche après le début de l'impression du document associé ou la fermeture de l'aperçu avant impression.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Se déclenche lorsque le document associé va être imprimé ou affiché en aperçu avant impression.

### Événements de rejet de promesse

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Se déclenche chaque fois qu'une promesse {{jsxref("Promise")}} JavaScript est rejetée, qu'il y ait ou non un gestionnaire pour intercepter ce rejet.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Se déclenche lorsqu'une promesse {{jsxref("Promise")}} JavaScript est rejetée sans gestionnaire pour intercepter ce rejet.

### Événements de défilement

- {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
  - : Se déclenche sur le conteneur de défilement à la fin d'une opération de défilement lorsqu'une nouvelle cible d'ancrage a été sélectionnée.
- {{domxref("Window/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}
  - : Se déclenche sur le conteneur de défilement lorsque le navigateur détermine qu'une nouvelle cible d'ancrage est en attente, c'est-à-dire qu'elle sera sélectionnée à la fin du geste de défilement en cours.

### Événements dépréciés

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Se déclenche lorsque l'orientation du périphérique a changé.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un affichage peut être présenté.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un périphérique VR compatible a été connecté à l'ordinateur.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un périphérique VR compatible a été déconnecté de l'ordinateur.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un affichage ne peut plus être présenté.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsque l'état de présentation d'un périphérique VR change (passe de présenté à non présenté, ou inversement).

### Événements propagés

Tous les événements qui remontent ne peuvent pas atteindre l'objet `Window`. Seuls les événements suivants le peuvent et peuvent être écoutés sur l'objet `Window`&nbsp;:

- `abort`
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/beforeinput_event", "beforeinput")}}
- {{domxref("Element/beforematch_event", "beforematch")}}
- {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}
- `cancel`
- {{domxref("HTMLMediaElement/canplay_event", "canplay")}}
- {{domxref("HTMLMediaElement/canplaythrough_event", "canplaythrough")}}
- {{domxref("HTMLElement/change_event", "change")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("HTMLDialogElement/close_event", "close")}}
- {{domxref("HTMLCanvasElement/contextlost_event", "contextlost")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("HTMLCanvasElement/contextrestored_event", "contextrestored")}}
- {{domxref("Element/copy_event", "copy")}}
- {{domxref("HTMLTrackElement/cuechange_event", "cuechange")}}
- {{domxref("Element/cut_event", "cut")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("HTMLElement/drag_event", "drag")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
- {{domxref("HTMLMediaElement/durationchange_event", "durationchange")}}
- {{domxref("HTMLMediaElement/emptied_event", "emptied")}}
- {{domxref("HTMLMediaElement/ended_event", "ended")}}
- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
- {{domxref("Element/input_event", "input")}}
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
- {{domxref("Element/keydown_event", "keydown")}}
- {{domxref("Element/keypress_event", "keypress")}}
- {{domxref("Element/keyup_event", "keyup")}}
- {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}}
- {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}}
- {{domxref("HTMLMediaElement/loadstart_event", "loadstart")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/paste_event", "paste")}}
- {{domxref("HTMLMediaElement/pause_event", "pause")}}
- {{domxref("HTMLMediaElement/play_event", "play")}}
- {{domxref("HTMLMediaElement/playing_event", "playing")}}
- {{domxref("HTMLMediaElement/progress_event", "progress")}}
- {{domxref("HTMLMediaElement/ratechange_event", "ratechange")}}
- {{domxref("HTMLFormElement/reset_event", "reset")}}
- {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}}
- {{domxref("HTMLMediaElement/seeked_event", "seeked")}}
- {{domxref("HTMLMediaElement/seeking_event", "seeking")}}
- {{domxref("HTMLInputElement/select_event", "select")}}
- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}
- {{domxref("HTMLMediaElement/stalled_event", "stalled")}}
- {{domxref("HTMLFormElement/submit_event", "submit")}}
- {{domxref("HTMLMediaElement/suspend_event", "suspend")}}
- {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}
- {{domxref("HTMLElement/toggle_event", "toggle")}}
- {{domxref("HTMLMediaElement/volumechange_event", "volumechange")}}
- {{domxref("HTMLMediaElement/waiting_event", "waiting")}}
- {{domxref("Element/wheel_event", "wheel")}}

## Interfaces

Voir la [Référence DOM](/fr/docs/Web/API/Document_Object_Model).

## Écouter des événements sur Window

Les éléments HTML offrent trois façons d'écouter des événements&nbsp;:

- Ajouter un écouteur d'événement à l'élément avec la méthode {{domxref("EventTarget.addEventListener")}}.
- Assigner un gestionnaire d'événement à la propriété `oneventname` de l'élément en JavaScript.
- Ajouter un attribut préfixé par `on` à l'élément dans le HTML.

Pour écouter des événements sur les objets `Window`, en général, seules les deux premières méthodes sont possibles, car `Window` n'a pas d'élément HTML correspondant. Cependant, un groupe spécifique d'événements peut voir leurs écouteurs ajoutés à l'élément {{HTMLElement("body")}} (ou l'élément déprécié {{HTMLElement("frameset")}}) du document de la fenêtre, en utilisant la deuxième ou la troisième méthode. Ces événements sont&nbsp;:

- `afterprint`
- `beforeprint`
- `beforeunload`
- `blur`
- `error`
- `focus`
- `hashchange`
- `languagechange`
- `load`
- `message`
- `messageerror`
- `offline`
- `online`
- `pagehide`
- `pagereveal`
- `pageshow`
- `pageswap`
- `popstate`
- `rejectionhandled`
- `resize`
- `scroll`
- `storage`
- `unhandledrejection`
- `unload`

Cela signifie que les exemples suivants sont strictement équivalents&nbsp;:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

Dans les trois cas, vous verrez l'objet `Window` affiché comme `currentTarget`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
