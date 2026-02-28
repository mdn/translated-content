---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("DOM")}}

L'interface **`Window`** représente une fenêtre contenant un document {{Glossary("DOM")}}&nbsp;; la propriété `document` pointe vers le [document DOM](/fr/docs/Web/API/Document) chargé dans cette fenêtre.

Vous pouvez obtenir la fenêtre d'un document donné à l'aide de la propriété {{DOMxRef("document.defaultView")}}.

Une variable globale, `window`, représentant la fenêtre dans laquelle le script s'exécute, est exposée au code JavaScript.

L'interface `Window` regroupe de nombreuses fonctions, espaces de noms, objets et constructeurs qui ne sont pas forcément liés directement à la notion de fenêtre d'interface utilisateur. Cependant, c'est l'endroit approprié pour inclure ces éléments qui doivent être disponibles globalement. Beaucoup d'entre eux sont documentés dans la [Référence JavaScript](/fr/docs/Web/JavaScript/Reference) et la [Référence DOM](/fr/docs/Web/API/Document_Object_Model).

Dans un navigateur à onglets, chaque onglet est représenté par son propre objet `Window`&nbsp;; la variable globale `window` vue par le code JavaScript exécuté dans un onglet représente toujours cet onglet. Cela dit, même dans un navigateur à onglets, certaines propriétés et méthodes s'appliquent à la fenêtre globale qui contient l'onglet, comme {{DOMxRef("Window.resizeTo", "resizeTo()")}} et {{DOMxRef("Window.innerHeight", "innerHeight")}}. De manière générale, tout ce qui ne peut pas raisonnablement concerner un onglet concerne la fenêtre elle-même.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de l'interface {{DOMxRef("EventTarget")}}._

Notez que les propriétés qui sont des objets (par exemple, pour surcharger le prototype d'éléments natifs) sont listées dans une section séparée ci-dessous.

- {{DOMxRef("Window.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne l'objet {{DOMxRef("CacheStorage")}} associé au contexte courant. Cet objet permet, par exemple, de stocker des ressources pour une utilisation hors ligne et de générer des réponses personnalisées aux requêtes.
- {{DOMxRef("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : Un alias pour {{DOMxRef("Window.navigator")}}.
- {{DOMxRef("Window.closed")}} {{ReadOnlyInline}}
  - : Indique si la fenêtre courante est fermée ou non.
- {{DOMxRef("Window.cookieStore")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Retourne une référence à l'objet {{DOMxRef("CookieStore")}} pour le contexte du document courant.
- {{DOMxRef("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un booléen indiquant si le document courant a été chargé dans une {{HTMLElement("iframe")}} sans identifiants. Voir [IFrame credentialless](/fr/docs/Web/Security/IFrame_credentialless) pour plus de détails.
- {{DOMxRef("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Retourne un booléen indiquant si le site web est en état d'isolation inter-origine.
- {{DOMxRef("Window.crypto")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("Crypto")}} associé à l'objet global.
- {{DOMxRef("Window.customElements")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet {{DOMxRef("CustomElementRegistry")}}, qui permet d'enregistrer de nouveaux [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) et d'obtenir des informations sur ceux déjà enregistrés.
- {{DOMxRef("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Retourne le rapport entre les pixels physiques et les pixels indépendants du périphérique sur l'affichage courant.
- {{DOMxRef("Window.document")}} {{ReadOnlyInline}}
  - : Retourne une référence vers le document contenu dans la fenêtre.
- {{DOMxRef("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Retourne une référence vers la fenêtre [Picture-in-Picture du document](/fr/docs/Web/API/Document_Picture-in-Picture_API) pour le contexte du document courant.
- {{DOMxRef("Window.fence")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne une instance de l'objet {{DOMxRef("Fence")}} pour le contexte du document courant. Disponible uniquement pour les documents intégrés dans une {{HTMLElement("fencedframe")}}.
- {{DOMxRef("Window.frameElement")}} {{ReadOnlyInline}}
  - : Retourne l'élément dans lequel la fenêtre est intégrée, ou null si la fenêtre n'est pas intégrée.
- {{DOMxRef("Window.frames")}} {{ReadOnlyInline}}
  - : Retourne un tableau des sous-fenêtres (frames) de la fenêtre courante.
- {{DOMxRef("Window.fullScreen")}} {{Non-standard_Inline}}
  - : Indique si la fenêtre est affichée en plein écran ou non.
- {{DOMxRef("Window.history")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet d'historique.
- {{DOMxRef("Window.indexedDB")}} {{ReadOnlyInline}}
  - : Fournit un mécanisme permettant aux applications d'accéder de façon asynchrone aux bases de données indexées&nbsp;; Retourne un objet {{DOMxRef("IDBFactory")}}.
- {{DOMxRef("Window.innerHeight")}} {{ReadOnlyInline}}
  - : Obtient la hauteur de la zone de contenu de la fenêtre du navigateur, y compris, si elle est affichée, la barre de défilement horizontale.
- {{DOMxRef("Window.innerWidth")}} {{ReadOnlyInline}}
  - : Obtient la largeur de la zone de contenu de la fenêtre du navigateur, y compris, si elle est affichée, la barre de défilement verticale.
- {{DOMxRef("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : Retourne un booléen indiquant si le contexte courant est sécurisé (`true`) ou non (`false`).
- {{DOMxRef("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Lorsqu'une [application web progressive](/fr/docs/Web/Progressive_web_apps) (PWA) est lancée avec une valeur `client_mode` de [`launch_handler`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) égale à `focus-existing`, `navigate-new` ou `navigate-existing`, alors `launchQueue` donne accès à la classe {{DOMxRef("LaunchQueue")}}, permettant d'implémenter une gestion personnalisée de la navigation au lancement de la PWA.
- {{DOMxRef("Window.length")}} {{ReadOnlyInline}}
  - : Retourne le nombre de frames dans la fenêtre. Voir aussi {{DOMxRef("window.frames")}}.
- {{DOMxRef("Window.localStorage")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet de stockage local utilisé pour stocker des données accessibles uniquement par l'origine qui les a créées.
- {{DOMxRef("Window.location")}}
  - : Obtient ou définit l'emplacement (URL courante) de l'objet window.
- {{DOMxRef("Window.locationbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet locationbar.
- {{DOMxRef("Window.menubar")}} {{ReadOnlyInline}}
  - : Retourne l'objet menubar.
- {{DOMxRef("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la coordonnée horizontale (X) du coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) de la fenêtre, en coordonnées écran. Cette valeur est exprimée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` dans `nsIDOMWindowUtils` pour convertir en pixels écran si besoin.
- {{DOMxRef("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la coordonnée verticale (Y) du coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) de la fenêtre, en coordonnées écran. Cette valeur est exprimée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` pour convertir en pixels écran si besoin.
- {{DOMxRef("Window.name")}}
  - : Obtient ou définit le nom de la fenêtre.
- {{DOMxRef("Window.navigation")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("Navigation")}} associé à la fenêtre courante. Point d'entrée de l'[API Navigation](/fr/docs/Web/API/Navigation_API).
- {{DOMxRef("Window.navigator")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet navigator.
- {{DOMxRef("Window.opener")}}
  - : Retourne une référence à la fenêtre qui a ouvert la fenêtre courante.
- {{DOMxRef("Window.origin")}} {{ReadOnlyInline}}
  - : Retourne l'origine de l'objet global, sous forme de chaîne de caractères.
- {{DOMxRef("Window.originAgentCluster")}} {{ReadOnlyInline}}
  - : Retourne `true` si cette fenêtre appartient à un cluster d'agent lié à une origine.
- {{DOMxRef("Window.outerHeight")}} {{ReadOnlyInline}}
  - : Obtient la hauteur extérieure de la fenêtre du navigateur.
- {{DOMxRef("Window.outerWidth")}} {{ReadOnlyInline}}
  - : Obtient la largeur extérieure de la fenêtre du navigateur.
- {{DOMxRef("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : Un alias pour {{DOMxRef("window.scrollX")}}.
- {{DOMxRef("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : Un alias pour {{DOMxRef("window.scrollY")}}.
- {{DOMxRef("Window.parent")}} {{ReadOnlyInline}}
  - : Retourne une référence au parent de la fenêtre ou sous-fenêtre courante.
- {{DOMxRef("Window.performance")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("Performance")}}, qui inclut les attributs {{DOMxRef("Performance.timing", "timing")}} et {{DOMxRef("Performance.navigation", "navigation")}}, chacun fournissant des données [liées aux performances](/fr/docs/Web/API/Performance_API/Navigation_timing). Voir aussi [Utiliser Navigation Timing](/fr/docs/Web/API/Performance_API/Navigation_timing) pour plus d'informations et d'exemples.
- {{DOMxRef("Window.personalbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet personalbar.
- {{DOMxRef("Window.scheduler")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("Scheduler")}} associé au contexte courant. Point d'entrée pour utiliser l'[API Prioritized Task Scheduling](/fr/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{DOMxRef("Window.screen")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet screen associé à la fenêtre.
- {{DOMxRef("Window.screenX")}} and {{DOMxRef("Window.screenLeft")}} {{ReadOnlyInline}}
  - : Les deux propriétés Retournent la distance horizontale entre le bord gauche de la zone d'affichage (<i lang="en">viewport</i> en anglais) du navigateur de l'utilisateur·ice et le bord gauche de l'écran.
- {{DOMxRef("Window.screenY")}} and {{DOMxRef("Window.screenTop")}} {{ReadOnlyInline}}
  - : Les deux propriétés Retournent la distance verticale entre le bord supérieur de la zone d'affichage (<i lang="en">viewport</i> en anglais) du navigateur de l'utilisateur·ice et le bord supérieur de l'écran.
- {{DOMxRef("Window.scrollbars")}} {{ReadOnlyInline}}
  - : Retourne l'objet scrollbars.
- {{DOMxRef("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Le décalage maximal auquel la fenêtre peut être défilée horizontalement, c'est-à-dire la largeur du document moins la largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais).
- {{DOMxRef("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Le décalage maximal auquel la fenêtre peut être défilée verticalement (c'est-à-dire la hauteur du document moins la hauteur de la zone d'affichage (<i lang="en">viewport</i> en anglais)).
- {{DOMxRef("Window.scrollX")}} {{ReadOnlyInline}}
  - : Retourne le nombre de pixels déjà défilés horizontalement dans le document.
- {{DOMxRef("Window.scrollY")}} {{ReadOnlyInline}}
  - : Retourne le nombre de pixels déjà défilés verticalement dans le document.
- {{DOMxRef("Window.self")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet window lui-même.
- {{DOMxRef("Window.sessionStorage")}}
  - : Retourne une référence à l'objet de stockage de session utilisé pour stocker des données accessibles uniquement par l'origine qui les a créées.
- {{DOMxRef("Window.sharedStorage")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Retourne l'objet {{DOMxRef("WindowSharedStorage")}} pour l'origine courante. Point d'entrée principal pour écrire des données dans le stockage partagé avec l'[API Shared Storage](/fr/docs/Web/API/Shared_Storage_API).
- {{DOMxRef("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("SpeechSynthesis")}}, point d'entrée pour utiliser la synthèse vocale de l'[API Web Speech](/fr/docs/Web/API/Web_Speech_API).
- {{DOMxRef("Window.statusbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet statusbar.
- {{DOMxRef("Window.toolbar")}} {{ReadOnlyInline}}
  - : Retourne l'objet toolbar.
- {{DOMxRef("Window.top")}} {{ReadOnlyInline}}
  - : Retourne une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres. Cette propriété est en lecture seule.
- {{DOMxRef("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("TrustedTypePolicyFactory")}} associé à l'objet global, point d'entrée pour utiliser l'{{DOMxRef("Trusted Types API", "API Trusted Types", "", "nocode")}}.
- {{DOMxRef("Window.viewport")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Retourne une instance d'objet {{DOMxRef("Viewport")}}, qui fournit des informations sur l'état courant de la zone d'affichage (<i lang="en">viewport</i> en anglais) du périphérique.
- {{DOMxRef("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("VisualViewport")}} représentant la zone d'affichage visuelle (<i lang="en">visual viewport</i> en anglais) pour une fenêtre donnée.
- {{DOMxRef("Window.window")}} {{ReadOnlyInline}}
  - : Retourne une référence à la fenêtre courante.
- `window[0]`, `window[1]`, etc.
  - : Retourne une référence à l'objet `window` dans les frames. Voir {{DOMxRef("Window.frames")}} pour plus de détails.
- Propriétés nommées
  - : Certains éléments du document sont également exposés comme propriétés de window&nbsp;:
    - Pour chaque élément {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} et {{HTMLElement("object")}}, son `name` (s'il n'est pas vide) est exposé.
      Par exemple, si le document contient `<form name="my_form">`, alors `window["my_form"]` (et son équivalent `window.my_form`) renverra une référence vers cet élément.
    - Pour chaque élément HTML, son `id` (s'il n'est pas vide) est exposé.

  Si une propriété correspond à un seul élément, cet élément est directement renvoyé. Si la propriété correspond à plusieurs éléments, alors un objet {{DOMxRef("HTMLCollection")}} contenant tous ces éléments est renvoyé. Si l'un des éléments est une `<iframe>` ou un `<object>` navigable, alors la propriété {{DOMxRef("HTMLIFrameElement/contentWindow", "contentWindow")}} du premier iframe de ce type est renvoyée à la place.

### Propriétés dépréciées

- {{DOMxRef("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne l'**événement courant**, c'est-à-dire l'événement actuellement traité par le contexte du code JavaScript, ou `undefined` si aucun événement n'est en cours de traitement. Il est recommandé d'utiliser l'objet {{DOMxRef("Event")}} passé directement aux gestionnaires d'événements.
- {{DOMxRef("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne un objet avec des fonctions permettant d'ajouter des fournisseurs de recherche externes au navigateur.
- {{DOMxRef("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne l'orientation, en degrés (par incréments de 90°), de la zone d'affichage (<i lang="en">viewport</i> en anglais) par rapport à l'orientation naturelle du périphérique.
- {{DOMxRef("Window.status")}} {{Deprecated_Inline}}
  - : Obtient ou définit le texte affiché dans la barre d'état en bas du navigateur.

## Méthodes d'instance

_Cette interface hérite des méthodes de l'interface {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Window.atob()")}}
  - : Décode une chaîne de données encodée en base 64.
- {{DOMxRef("Window.alert()")}}
  - : Affiche une boîte de dialogue d'alerte.
- {{DOMxRef("Window.blur()")}} {{Deprecated_Inline}}
  - : Retire la sélection de la fenêtre.
- {{DOMxRef("Window.btoa()")}}
  - : Crée une chaîne ASCII encodée en base 64 à partir d'une chaîne de données binaires.
- {{DOMxRef("Window.cancelAnimationFrame()")}}
  - : Permet d'annuler un rappel précédemment planifié avec {{DOMxRef("Window.requestAnimationFrame")}}.
- {{DOMxRef("Window.cancelIdleCallback()")}}
  - : Permet d'annuler un rappel précédemment planifié avec {{DOMxRef("Window.requestIdleCallback")}}.
- {{DOMxRef("Window.clearInterval()")}}
  - : Annule l'exécution répétée définie avec {{DOMxRef("Window.setInterval()")}}.
- {{DOMxRef("Window.clearTimeout()")}}
  - : Annule l'exécution différée définie avec {{DOMxRef("Window.setTimeout()")}}.
- {{DOMxRef("Window.close()")}}
  - : Ferme la fenêtre courante.
- {{DOMxRef("Window.confirm()")}}
  - : Affiche une boîte de dialogue avec un message auquel l'utilisateur·ice doit répondre.
- {{DOMxRef("Window.createImageBitmap()")}}
  - : Accepte différentes sources d'images et Retourne une promesse {{JSxRef("Promise")}} résolue avec un objet {{DOMxRef("ImageBitmap")}}. La source peut être recadrée à un rectangle de pixels d'origine _(sx, sy)_ de largeur sw et hauteur sh.
- {{DOMxRef("Window.dump()")}} {{Non-standard_Inline}}
  - : Écrit un message dans la console.
- {{DOMxRef("Window.fetch()")}}
  - : Démarre le processus de récupération d'une ressource sur le réseau.
- {{DOMxRef("Window.fetchLater()")}} {{Experimental_Inline}}
  - : Crée une récupération différée, envoyée lorsque la page est quittée (détruite ou placée dans le {{Glossary("bfcache")}}, ou après un délai `activateAfter` fourni — selon ce qui arrive en premier.
- {{DOMxRef("Window.find()")}} {{Non-standard_Inline}}
  - : Recherche dans une chaîne de caractères donnée dans une fenêtre.
- {{DOMxRef("Window.focus()")}}
  - : Donne la sélection à la fenêtre courante.
- {{DOMxRef("Window.getComputedStyle()")}}
  - : Obtient le style calculé pour l'élément spécifié. Le style calculé indique les valeurs calculées de toutes les propriétés CSS de l'élément.
- {{DOMxRef("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Obtient le style calculé par défaut pour l'élément spécifié, en ignorant les feuilles de style de l'auteur·ice.
- {{DOMxRef("Window.getScreenDetails()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Retourne une promesse {{JSxRef("Promise")}} résolue avec une instance de l'objet {{DOMxRef("ScreenDetails")}} représentant les détails de tous les écrans disponibles sur le périphérique de l'utilisateur·ice.
- {{DOMxRef("Window.getSelection()")}}
  - : Retourne l'objet de sélection représentant l'élément ou les éléments sélectionnés.
- {{DOMxRef("Window.matchMedia()")}}
  - : Retourne un objet {{DOMxRef("MediaQueryList")}} représentant la chaîne de requête média spécifiée.
- {{DOMxRef("Window.moveBy()")}}
  - : Déplace la fenêtre courante d'une certaine distance.
- {{DOMxRef("Window.moveTo()")}}
  - : Déplace la fenêtre aux coordonnées spécifiées.
- {{DOMxRef("Window.open()")}}
  - : Ouvre une nouvelle fenêtre.
- {{DOMxRef("Window.postMessage()")}}
  - : Permet à une fenêtre d'envoyer de façon sécurisée une chaîne de données à une autre fenêtre, même si elle n'est pas du même domaine.
- {{DOMxRef("Window.print()")}}
  - : Ouvre la boîte de dialogue d'impression pour imprimer le document courant.
- {{DOMxRef("Window.prompt()")}}
  - : Retourne le texte saisi par l'utilisateur·ice dans une boîte de dialogue de saisie.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Retourne une promesse {{JSxRef("Promise")}} résolue avec un tableau d'objets {{DOMxRef("FontData")}} représentant les polices disponibles localement.
- {{DOMxRef("Window.queueMicrotask()")}}
  - : Place une micro-tâche dans la file d'attente pour exécution à un moment sûr avant que le contrôle ne revienne à la boucle d'événements du navigateur.
- {{DOMxRef("Window.reportError()")}}
  - : Signale une erreur dans un script, simulant une exception non gérée.
- {{DOMxRef("Window.requestAnimationFrame()")}}
  - : Indique au navigateur qu'une animation est en cours et demande de planifier un rafraîchissement de la fenêtre pour la prochaine image d'animation.
- {{DOMxRef("Window.requestIdleCallback()")}}
  - : Permet de planifier des tâches pendant les périodes d'inactivité du navigateur.
- {{DOMxRef("Window.resizeBy()")}}
  - : Redimensionne la fenêtre courante d'une certaine valeur.
- {{DOMxRef("Window.resizeTo()")}}
  - : Redimensionne dynamiquement la fenêtre.
- {{DOMxRef("Window.scroll()")}}
  - : Fait défiler la fenêtre à un endroit particulier du document.
- {{DOMxRef("Window.scrollBy()")}}
  - : Fait défiler le document dans la fenêtre de la valeur indiquée.
- {{DOMxRef("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Fait défiler le document du nombre de lignes indiqué.
- {{DOMxRef("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Fait défiler le document courant du nombre de pages spécifié.
- {{DOMxRef("Window.scrollTo()")}}
  - : Fait défiler le document jusqu'aux coordonnées spécifiées.
- {{DOMxRef("Window.setInterval()")}}
  - : Planifie l'exécution d'une fonction à chaque intervalle de temps donné en millisecondes.
- {{DOMxRef("Window.setTimeout()")}}
  - : Planifie l'exécution d'une fonction après un certain délai.
- {{DOMxRef("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur de dossier permettant à l'utilisateur·ice de choisir un dossier.
- {{DOMxRef("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur de fichiers permettant à l'utilisateur·ice de choisir un ou plusieurs fichiers.
- {{DOMxRef("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Affiche un sélecteur permettant à l'utilisateur·ice d'enregistrer un fichier.
- {{DOMxRef("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Ajuste la taille de la fenêtre en fonction de son contenu.
- {{DOMxRef("Window.stop()")}}
  - : Cette méthode arrête le chargement de la fenêtre.
- {{DOMxRef("Window.structuredClone()")}}
  - : Crée une [copie profonde](/fr/docs/Glossary/Deep_copy) d'une valeur donnée à l'aide de l'[algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Méthodes dépréciées

- {{DOMxRef("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Enregistre la fenêtre pour capturer tous les événements du type spécifié.
- {{DOMxRef("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Annule l'exécution répétée définie avec `setImmediate()`.
- {{DOMxRef("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Libère la fenêtre de la capture d'événements d'un type spécifique.
- {{DOMxRef("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Permet à un site web ou une application d'accéder à un système de fichiers isolé pour son propre usage.
- {{DOMxRef("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Exécute une fonction après que le navigateur a terminé d'autres tâches lourdes.
- {{DOMxRef("Window.setResizable()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ne fait rien (no-op). Conservé pour la compatibilité avec Netscape 4.x.
- {{DOMxRef("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforme un {{DOMxRef("WebKitPoint")}} du système de coordonnées du nœud vers celui de la page.
- {{DOMxRef("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforme un {{DOMxRef("WebKitPoint")}} du système de coordonnées de la page vers celui du nœud.

## Événements

Écoutez ces événements à l'aide de [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou en assignant un écouteur d'événement à la propriété `oneventname` de cette interface. En plus des événements listés ci-dessous, de nombreux événements peuvent remonter depuis le {{DOMxRef("Document")}} contenu dans l'objet window.

- {{DOMxRef("Window/error_event", "error")}}
  - : Se déclenche lorsqu'une ressource n'a pas pu être chargée ou utilisée. Par exemple, si un script rencontre une erreur d'exécution ou si une image est introuvable ou invalide.
- {{DOMxRef("Window/languagechange_event", "languagechange")}}
  - : Se déclenche sur l'objet global lorsque la langue préférée de l'utilisateur·ice change.
- {{DOMxRef("Window/resize_event", "resize")}}
  - : Se déclenche lorsque la fenêtre a été redimensionnée.
- {{DOMxRef("Window/storage_event", "storage")}}
  - : Se déclenche lorsqu'une zone de stockage (`localStorage` ou `sessionStorage`) a été modifiée dans le contexte d'un autre document.

### Événements de connexion

- {{DOMxRef("Window/offline_event", "offline")}}
  - : Se déclenche lorsque le navigateur perd l'accès au réseau et que la valeur de `navigator.onLine` passe à `false`.
- {{DOMxRef("Window/online_event", "online")}}
  - : Se déclenche lorsque le navigateur retrouve l'accès au réseau et que la valeur de `navigator.onLine` passe à `true`.

### Événements d'orientation de l'appareil

- {{DOMxRef("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : Se déclenche à intervalles réguliers, indiquant la force d'accélération physique reçue par le périphérique et, si disponible, le taux de rotation.
- {{DOMxRef("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : Se déclenche lorsque de nouvelles données du capteur d'orientation du magnétomètre sont disponibles concernant l'orientation actuelle du périphérique par rapport au repère terrestre.
- {{DOMxRef("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : Se déclenche lorsque de nouvelles données du capteur d'orientation du magnétomètre sont disponibles concernant l'orientation absolue du périphérique par rapport au repère terrestre.

### Événements de ciblage

- {{DOMxRef("Window/blur_event", "blur")}}
  - : Se déclenche lorsqu'un élément perd la sélection.
- {{DOMxRef("Window/focus_event", "focus")}}
  - : Se déclenche lorsqu'un élément reçoit la sélection.

### Événements de manette de jeu

- {{DOMxRef("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été connectée ou lors de la première utilisation d'un bouton ou axe de la manette.
- {{DOMxRef("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été déconnectée.

### Événements d'historique

- {{DOMxRef("Window/hashchange_event", "hashchange")}}
  - : Se déclenche lorsque l'identifiant de fragment de l'URL a changé (la partie de l'URL commençant par et suivant le symbole `#`).
- {{DOMxRef("Window/pagehide_event", "pagehide")}}
  - : Se déclenche lorsque le navigateur masque le document courant lors du passage à un autre document de l'historique de session (par exemple, lors d'un clic sur le bouton Précédent ou Suivant).
- {{DOMxRef("Window.pagereveal_event", "pagereveal")}}
  - : Se déclenche lorsqu'un document est affiché pour la première fois, soit lors du chargement depuis le réseau, soit lors de l'activation depuis le {{Glossary("bfcache")}} ou le {{Glossary("Prerender", "prérendu")}}.
- {{DOMxRef("Window/pageshow_event", "pageshow")}}
  - : Se déclenche lorsque le navigateur rend le document visible à la suite d'une navigation, que ce soit lors du premier chargement ou lors d'un retour sur la page dans le même onglet.
- {{DOMxRef("Window.pageswap_event", "pageswap")}}
  - : Se déclenche lorsqu'un document va être déchargé à cause d'une navigation.
- {{DOMxRef("Window/popstate_event", "popstate")}}
  - : Se déclenche lorsque l'entrée d'historique active change.

### Événements de chargement et de déchargement

- {{DOMxRef("Window/beforeunload_event", "beforeunload")}}
  - : Se déclenche lorsque la fenêtre, le document et ses ressources vont être déchargés.
- {{DOMxRef("Window/load_event", "load")}}
  - : Se déclenche lorsque la page entière a été chargée, y compris toutes les ressources dépendantes comme les feuilles de style et les images.
- {{DOMxRef("Window/unload_event", "unload")}} {{Deprecated_Inline}}
  - : Se déclenche lorsque le document ou une ressource enfant est en cours de déchargement.

### Événements du manifeste

- {{DOMxRef("Window/appinstalled_event", "appinstalled")}}
  - : Se déclenche lorsque le navigateur a installé une page en tant qu'application.
- {{DOMxRef("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Se déclenche lorsqu'un·e utilisateur·ice va être invité·e à installer une application web.

### Événements de messagerie

- {{DOMxRef("Window/message_event", "message")}}
  - : Se déclenche lorsque la fenêtre reçoit un message, par exemple via {{DOMxRef("Window/postMessage", "Window.postMessage()")}} depuis un autre contexte de navigation.
- {{DOMxRef("Window/messageerror_event", "messageerror")}}
  - : Se déclenche lorsqu'un objet `Window` reçoit un message qui ne peut pas être désérialisé.

### Événements d'impression

- {{DOMxRef("Window/afterprint_event", "afterprint")}}
  - : Se déclenche après le début de l'impression du document associé ou la fermeture de l'aperçu avant impression.
- {{DOMxRef("Window/beforeprint_event", "beforeprint")}}
  - : Se déclenche lorsque le document associé va être imprimé ou affiché en aperçu avant impression.

### Événements de rejet de promesse

- {{DOMxRef("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Se déclenche chaque fois qu'une promesse {{JSxRef("Promise")}} JavaScript est rejetée, qu'il y ait ou non un gestionnaire pour intercepter ce rejet.
- {{DOMxRef("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Se déclenche lorsqu'une promesse {{JSxRef("Promise")}} JavaScript est rejetée sans gestionnaire pour intercepter ce rejet.

### Événements de défilement

- {{DOMxRef("Window/scrollsnapchange_event", "scrollsnapchange")}} {{Experimental_Inline}}
  - : Se déclenche sur le conteneur de défilement à la fin d'une opération de défilement lorsqu'une nouvelle cible d'ancrage a été sélectionnée.
- {{DOMxRef("Window/scrollsnapchanging_event", "scrollsnapchanging")}} {{Experimental_Inline}}
  - : Se déclenche sur le conteneur de défilement lorsque le navigateur détermine qu'une nouvelle cible d'ancrage est en attente, c'est-à-dire qu'elle sera sélectionnée à la fin du geste de défilement en cours.

### Événements dépréciés

- {{DOMxRef("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Se déclenche lorsque l'orientation du périphérique a changé.
- {{DOMxRef("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un affichage peut être présenté.
- {{DOMxRef("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un périphérique VR compatible a été connecté à l'ordinateur.
- {{DOMxRef("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un périphérique VR compatible a été déconnecté de l'ordinateur.
- {{DOMxRef("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsqu'un affichage ne peut plus être présenté.
- {{DOMxRef("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se déclenche lorsque l'état de présentation d'un périphérique VR change (passe de présenté à non présenté, ou inversement).

### Événements propagés

Tous les événements qui remontent ne peuvent pas atteindre l'objet `Window`. Seuls les événements suivants le peuvent et peuvent être écoutés sur l'objet `Window`&nbsp;:

- `abort`
- {{DOMxRef("Element/auxclick_event", "auxclick")}}
- {{DOMxRef("Element/beforeinput_event", "beforeinput")}}
- {{DOMxRef("Element/beforematch_event", "beforematch")}}
- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
- `cancel`
- {{DOMxRef("HTMLMediaElement/canplay_event", "canplay")}}
- {{DOMxRef("HTMLMediaElement/canplaythrough_event", "canplaythrough")}}
- {{DOMxRef("HTMLElement/change_event", "change")}}
- {{DOMxRef("Element/click_event", "click")}}
- {{DOMxRef("HTMLDialogElement/close_event", "close")}}
- {{DOMxRef("HTMLCanvasElement/contextlost_event", "contextlost")}}
- {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- {{DOMxRef("HTMLCanvasElement/contextrestored_event", "contextrestored")}}
- {{DOMxRef("Element/copy_event", "copy")}}
- {{DOMxRef("HTMLTrackElement/cuechange_event", "cuechange")}}
- {{DOMxRef("Element/cut_event", "cut")}}
- {{DOMxRef("Element/dblclick_event", "dblclick")}}
- {{DOMxRef("HTMLElement/drag_event", "drag")}}
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
- {{DOMxRef("HTMLMediaElement/durationchange_event", "durationchange")}}
- {{DOMxRef("HTMLMediaElement/emptied_event", "emptied")}}
- {{DOMxRef("HTMLMediaElement/ended_event", "ended")}}
- {{DOMxRef("HTMLFormElement/formdata_event", "formdata")}}
- {{DOMxRef("Element/input_event", "input")}}
- {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}
- {{DOMxRef("Element/keydown_event", "keydown")}}
- {{DOMxRef("Element/keypress_event", "keypress")}}
- {{DOMxRef("Element/keyup_event", "keyup")}}
- {{DOMxRef("HTMLMediaElement/loadeddata_event", "loadeddata")}}
- {{DOMxRef("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}}
- {{DOMxRef("HTMLMediaElement/loadstart_event", "loadstart")}}
- {{DOMxRef("Element/mousedown_event", "mousedown")}}
- {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- {{DOMxRef("Element/mousemove_event", "mousemove")}}
- {{DOMxRef("Element/mouseout_event", "mouseout")}}
- {{DOMxRef("Element/mouseover_event", "mouseover")}}
- {{DOMxRef("Element/mouseup_event", "mouseup")}}
- {{DOMxRef("Element/paste_event", "paste")}}
- {{DOMxRef("HTMLMediaElement/pause_event", "pause")}}
- {{DOMxRef("HTMLMediaElement/play_event", "play")}}
- {{DOMxRef("HTMLMediaElement/playing_event", "playing")}}
- {{DOMxRef("HTMLMediaElement/progress_event", "progress")}}
- {{DOMxRef("HTMLMediaElement/ratechange_event", "ratechange")}}
- {{DOMxRef("HTMLFormElement/reset_event", "reset")}}
- {{DOMxRef("Element/scrollend_event", "scrollend")}}
- {{DOMxRef("Element/securitypolicyviolation_event", "securitypolicyviolation")}}
- {{DOMxRef("HTMLMediaElement/seeked_event", "seeked")}}
- {{DOMxRef("HTMLMediaElement/seeking_event", "seeking")}}
- {{DOMxRef("HTMLInputElement/select_event", "select")}}
- {{DOMxRef("HTMLSlotElement/slotchange_event", "slotchange")}}
- {{DOMxRef("HTMLMediaElement/stalled_event", "stalled")}}
- {{DOMxRef("HTMLFormElement/submit_event", "submit")}}
- {{DOMxRef("HTMLMediaElement/suspend_event", "suspend")}}
- {{DOMxRef("HTMLMediaElement/timeupdate_event", "timeupdate")}}
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
- {{DOMxRef("HTMLMediaElement/volumechange_event", "volumechange")}}
- {{DOMxRef("HTMLMediaElement/waiting_event", "waiting")}}
- {{DOMxRef("Element/wheel_event", "wheel")}}

## Interfaces

Voir la [Référence DOM](/fr/docs/Web/API/Document_Object_Model).

## Écouter des événements sur Window

Les éléments HTML offrent trois façons d'écouter des événements&nbsp;:

- Ajouter un écouteur d'événement à l'élément avec la méthode {{DOMxRef("EventTarget.addEventListener")}}.
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
