---
title: window
slug: Web/API/Window
---

{{APIRef}}

L'objet `window` représente une fenêtre contenant un document DOM ; la propriété `document` pointe vers le [document DOM](/fr-FR/docs/DOM/document) chargé dans cette fenêtre. Une fenêtre pour un document donné peut être obtenue en utilisant la propriété {{Domxref("document.defaultView")}}.

Cette section fournit une brève référence pour toutes les méthodes, propriétés et événements disponibles via l'objet DOM `window`. L'objet `window` implémente l'interface `Window`, qui à son tour hérite de l'interface [`AbstractView`](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView). Certaines fonctions globales supplémentaires, espaces de noms, objets, interfaces et constructeurs, non typiquement associés à la fenêtre, mais disponibles sur celle-ci, sont répertoriés dans la [Référence JavaScript](/fr-FR/docs/JavaScript/Reference) et la [Référence DOM](/fr-FR/docs/Web/API/Document_Object_Model).

Dans un navigateur utilisant des onglets, comme Firefox, chaque onglet contient son propre objet `window` (et si vous écrivez une extension, la fenêtre du navigateur elle-même est un objet `window` séparé — consultez [Travailler avec des fenêtres dans du code chrome](/fr/docs/Mozilla/Working_with_windows_in_chrome_code#Fen.C3.AAtres_de_contenu) pour plus d'informations). C'est-à-dire que l'objet `window` n'est pas partagé entre les onglets dans la même fenêtre. Certaines méthodes, notamment {{ Domxref("window.resizeTo") }} et {{ Domxref("window.resizeBy") }}, s'appliquent à la fenêtre entière et non à l'onglet spécifique auquel l'objet `window` appartient. En général, ce qui ne peut raisonnablement pas concerner un onglet se rapporte à la fenêtre à la place.

{{InheritanceDiagram}}

## Propriétés

_Cette interface hérite des propriétés de l'interface {{domxref("EventTarget")}}._

Notez que les propriétés qui sont des objets (par exemple, pour redéfinir le prototype d'éléments intrinsèques) sont répertoriées dans une section distincte ci-dessous.

- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : Cette propriété indique si la fenêtre en cours est fermée ou non.
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Renvoie une référence à l'objet console qui fournit l'accès à la console de débogage du navigateur.
- {{domxref("Window.content")}} et `Window._content` {{Non-standard_inline}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Renvoie une référence à l'élément de contenu dans la fenêtre en cours. Depuis Firefox 57 (initialement Nightly uniquement), les deux versions sont uniquement disponibles à partir du code chrome (privilégié) et ne sont plus disponibles sur le Web.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Renvoie les objets du contrôleur XUL pour la fenêtre chrome en cours.
- {{domxref("Window.customElements")}}{{ReadOnlyInline}}
  - : renvoie une référence à l'objet {{domxref("CustomElementRegistry")}}, qui peut être utilisée pour enregistrer de nouveaux [éléments personnalisés](/fr-FR/docs/Web/Web_Components/Using_custom_elements) et obtenir des informations à propos d'éléments personnalisés précédemment enregistrés.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Retourne l'objet crypto du navigateur.
- {{domxref("Window.defaultStatus")}} {{deprecated_inline}}
  - : Récupère / définit le texte de la barre d'état pour la fenêtre donnée.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Renvoie le rapport entre les pixels physiques et les pixels indépendants du périphérique dans l'affichage en cours.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Récupère les arguments passés à la fenêtre (si c'est une boîte de dialogue) au moment où {{domxref ("window.showModalDialog()")}} a été appelé. C'est un `nsIArray`.
- {{domxref("Window.directories")}} {{deprecated_inline}}
  - : Synonyme de {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Renvoie une référence au document que la fenêtre contient.
- {{domxref("Window.DOMMatrix")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMMatrix")}} représentant des matrices 4x4, adapté aux opérations 2D et 3D.
- {{domxref("Window.DOMMatrixReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMMatrixReadOnly")}} représentant des matrices 4x4, adapté aux opérations 2D et 3D.
- {{domxref("Window.DOMPoint")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMPoint")}} représentant un point 2D ou 3D dans un système de coordonnées.
- {{domxref("Window.DOMPointReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMPointReadOnly")}} représentant un point 2D ou 3D dans un système de coordonnées.
- {{domxref("Window.DOMQuad")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMQuad")}}, qui fournit un objet quadrilatère, c'est-à-dire, ayant quatre coins et quatre côtés.
- {{domxref("Window.DOMRect")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRect")}} object, which represents a rectangle.
- {{domxref("Window.DOMRectReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à un objet {{domxref("DOMRectReadOnly")}} représentant un rectangle.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Renvoie l'élément dans lequel la fenêtre est intégrée, ou null si la fenêtre n'est pas intégrée.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Renvoie un tableau des sous-cadres dans la fenêtre en cours.
- {{domxref("Window.fullScreen")}}
  - : Cette propriété indique si la fenêtre est affichée en plein écran ou non.
- {{domxref("Window.globalStorage")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Non supporté depuis Gecko 13 (Firefox 13). Utilisez {{domxref("Window.localStorage")}} à la place.
    Était : divers objets de stockage utilisés pour stocker des données sur plusieurs pages.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet d'historique.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : Récupère la hauteur de la zone de contenu de la fenêtre du navigateur, y compris, si affichée, la barre de défilement horizontale.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : Récupère la largeur de la zone de contenu de la fenêtre du navigateur, y compris, si affichée, la barre de défilement verticale.
- {{domxref("Window.isSecureContext")}} {{readOnlyInline}}
  - : Indique si un contexte est capable d'utiliser des fonctionnalités nécessitant des contextes sécurisés.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Renvoie le nombre de cadres dans la fenêtre. Voir également {{domxref("window.frames")}}.
- {{domxref("Window.location")}}
  - : Récupère/définit l'emplacement, ou l'URL en cours, de l'objet de fenêtre.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Renvoie l'objet de la barre d'adresse, dont la visibilité peut être inversée dans la fenêtre.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : Renvoie une référence à l'objet de stockage local utilisé pour stocker les données accessibles uniquement par l'origine qui les a créées.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Renvoie l'objet barre de menus, dont la visibilité peut être inversée dans la fenêtre.
- {{domxref("Window.messageManager")}}
  - : Renvoie l'objet [gestionnaire de messages](/fr-FR/docs/The_message_manager) pour cette fenêtre.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}} {{Deprecated_inline}}
  - : Le temps en millisecondes depuis l'instant auquel le cycle d'animation en cours a commencé.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}}{{non-standard_inline}}
  - : Renvoie la coordonnée horizontale (X) du coin supérieur gauche du point de vue de la fenêtre, en coordonnées d'écran. Cette valeur est restituée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` dans `nsIDOMWindowUtils` pour un facteur de conversion pour s'adapter aux pixels de l'écran si nécessaire.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Renvoie la coordonnée verticale (Y) du coin supérieur gauche du point de vue de la fenêtre, en coordonnées d'écran. Cette valeur est indiquée en pixels CSS. Voir `mozScreenPixelsPerCSSPixel` pour un facteur de conversion pour s'adapter aux pixels de l'écran si nécessaire.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Renvoie le nombre de fois où le document en cours a été réaffiché à l'écran dans cette fenêtre. Cela peut être utilisé pour calculer les performances d'affichage.
- {{domxref("Window.name")}}
  - : Récupère / définit le nom de la fenêtre.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Renvoie une référence à l'objet navigateur.
- {{domxref("Window.NetworkInformation")}} {{readOnlyInline}} {{experimental_inline}}
  - : Renvoie une référence à l'interface {{domxref("NetworkInformation")}}, qui fournit des informations sur la connexion qu'un périphérique est en train d'utiliser pour communiquer avec le réseau et fournit un moyen pour les scripts d'être notifiés si le type de connexion change.
- {{domxref("Window.opener")}}
  - : Renvoie une référence à la fenêtre qui a ouvert la fenêtre en cours.
- {{domxref("Window.orientation")}}{{non-standard_inline}}{{deprecated_inline}}{{readOnlyInline}}
  - : Renvoie l'orientation en degrés (par incréments de 90 degrés) du point de vue par rapport à l'orientation naturelle du périphérique.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : Récupère la hauteur de l'extérieur de la fenêtre du navigateur.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : Récupère la largeur de l'extérieur de la fenêtre du navigateur.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : Un alias pour {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}}{{readOnlyInline}}
  - : Un alias pour {{domxref("window.scrollY")}}
- {{domxref("Window.sessionStorage")}} {{readOnlyInline}}
  - : Renvoie une référence à l'objet de stockage de session utilisé pour stocker les données accessibles uniquement par l'origine qui les a créées..
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Renvoie une référence au parent de la fenêtre ou du sous-cadre en cours.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Renvoie un objet {{domxref("Performance")}}, qui inclut les attributs {{domxref("Performance.timing", "timing")}} et {{domxref("Performance.navigation", "navigation")}}, dont chacun est un objet fournissant des données liées aux performances. Voir aussi [Utilisation de Chronométrage de Navigation](/fr-FR/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) pour plus d'informations et d'exemples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Renvoie l'objet barre personnelle, dont la visibilité peut être inversée dans la fenêtre.
- {{domxref("Window.pkcs11")}} {{deprecated_inline}}
  - : Fournissait précédemment un accès pour installer et supprimer des modules PKCS11.
- {{domxref("Window.returnValue")}}
  - : La valeur de retour à renvoyer à la fonction qui a appelé {{domxref("window.showModalDialog()")}} pour afficher la fenêtre comme boîte de dialogue modale.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Renvoie une référence à l'objet écran associé à la fenêtre.
- {{domxref("Window.screenX")}} {{readOnlyInline}}
  - : Renvoie la distance horizontale de la bordure gauche du navigateur de l'utilisateur à partir du côté gauche de l'écran.
- {{domxref("Window.screenY")}} {{readOnlyInline}}
  - : Renvoie la distance verticale de la bordure supérieure du navigateur de l'utilisateur à partir du haut de l'écran.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Renvoie l'objet barres de défilement, dont la visibilité peut être modifiée dans la fenêtre.
- {{domxref("Window.scrollMaxX")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Le décalage maximal dont la fenêtre peut étre décalée horizontalement, c'est-à-dire la largeur du document moins la largeur du point de vue.
- {{domxref("Window.scrollMaxY")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Le décalage maximal dont la fenêtre peut étre décalée verticalement (c'est-à-dire, la hauteur du document moins la hauteur du point de vue).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Renvoie le nombre de pixels dont le document a déjà été décalé horizontalement.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Renvoie le nombre de pixels dont le document a déjà été décalé verticalement.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Renvoie une référence d'objet à l'objet fenêtre lui-même.
- {{domxref("Window.sessionStorage")}}
  - : Renvoie un objet de stockage pour stocker des données dans une session de page unique.
- {{domxref("Window.sidebar")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Renvoie une référence à l'objet fenêtre de la barre latérale.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Renvoie un objet {{domxref("SpeechSynthesis")}}, qui est le point d'entrée pour l'utilisation de la fonctionnalité de synthèse vocale de l'[API Web Speech](/fr-FR/docs/Web/API/Web_Speech_API).
- {{domxref("Window.status")}}
  - : Récupère/définit le texte dans la barre d'état en bas du navigateur.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Renvoie l'objet barre d'état, dont la visibilité peut être inversée dans la fenêtre.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Renvoie l'objet barre d'outils, dont la visibilité peut être inversée dans la fenêtre.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Renvoie une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres. Cette propriété est en lecture seule.
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : Renvoie un objet {{domxref("VisualViewport")}} représentant le point de vue visuel pour une fenêtre donnée.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Renvoie une référence à la fenêtre en cours.
- `window[0]`, `window[1]`, etc.
  - : Renvoie une référence à l'objet `window` dans les cadres. Voir {{domxref("Window.frames")}}} pour plus de détails.

### Propriétés implémentées depuis ailleurs

- [`caches`](/fr/docs/Web/API/caches) {{readOnlyinline}}
  - : Renvoie l'objet {{domxref("CacheStorage")}} associé au contexte en cours. Cet objet active des fonctionnalités telles que le stockage des ressources pour une utilisation hors connexion, et la génération de réponses personnalisées aux requêtes.
- [`indexedDB`](/fr/docs/Web/API/indexedDB) {{readonlyInline}}
  - : Fournit un mécanisme permettant aux applications d'accéder de manière asynchrone à des bases de données indexées ; renvoie un objet {{domxref("IDBFactory")}}.
- [`isSecureContext`](/fr/docs/Web/API/isSecureContext) {{readOnlyinline}}
  - : Renvoie un booléen indiquant si le contexte actuel est sécurisé (`true`) ou non (`false`).
- [`origin`](/fr/docs/Web/API/origin) {{readOnlyinline}}
  - : Renvoie l'origine de l'objet global, sérialisé comme une chaîne. (Cela ne semble pas encore être implémenté dans aucun navigateur.)

## Méthodes

_Cette interface hérite des méthodes de l'interface {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Affiche une boîte de message d'alerte.
- {{domxref("Window.back()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Recule d'une page dans l'historique de la fenêtre.
- {{domxref("Window.blur()")}}
  - : Déplace la focalisation hors de la fenêtre.
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : Vous permet d'annuler un rappel précédemment planifié avec {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Vous permet d'annuler un rappel précédemment planifié avec {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_inline}}
  - : Enregistre la fenêtre pour qu'elle capture tous les évènements du type spécifié.
- {{domxref("Window.clearImmediate()")}}
  - : Annule l'exécution répétée définie en utilisant `setImmediate`.
- {{domxref("Window.close()")}}
  - : Ferme la fenêtre en cours.
- {{domxref("Window.confirm()")}}
  - : Affiche une boîte de dialogue avec un message auquel l'utilisateur doit répondre.
- {{domxref("Window.disableExternalCapture()")}} {{deprecated_inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.dispatchEvent()")}}
  - : Utilisé pour déclencher un évènement.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Écrit un message à la console.
- {{domxref("Window.enableExternalCapture()")}} {{deprecated_inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.find()")}}
  - : Recherche la chaîne de caractères donnée dans une fenêtre.
- {{domxref("Window.focus()")}}
  - : Donne la focalisation à la fenêtre en cours.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Avance la fenêtre d'un document dans l'historique.
- {{domxref("Window.getAttention()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Fait flasher l'icône de l'application.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.getComputedStyle()")}}
  - : Récupère un style calculé pour l'élément donné. Un style calculé indique les valeurs de toutes les propriétés CSS de l'élément.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Récupère le style calculé par défaut pour l'élément indiqué, en ignorant les feuilles de style d'auteur.
- {{domxref("Window.getSelection()")}}
  - : Renvoie l'objet de sélection représentant les éléments sélectionnés.
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Renvoie le navigateur à la page d'accueil.
- {{domxref("Window.matchMedia()")}}
  - : Renvoie un objet {{domxref("MediaQueryList")}} représentant la chaîne d'interrogation de média spécifiée.
- {{domxref("Window.maximize()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Minimize la fenêtre.
- {{domxref("Window.moveBy()")}}
  - : Déplace la fenêtre en cours de la quantité indiquée.
- {{domxref("Window.moveTo()")}}
  - : Déplace la fenêtre vers les coordonnées spécifiées.
- {{domxref("Window.open()")}}
  - : Ouvre une nouvelle fenêtre.
- {{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Ouvre une nouvelle fenêtre de dialogue.
- {{domxref("Window.postMessage()")}}
  - : Fournit un moyen sécurisé pour une fenêtre d'envoyer une chaîne de données à une autre fenêtre, qui n'a pas besoin d'être dans le même domaine que la première.
- {{domxref("Window.prompt()")}}
  - : Ouvre la boîte de dialogue d'impression du document en cours.
- {{domxref("Window.prompt()")}}
  - : Renvoie le texte saisi par l'utilisateur dans une boîte de dialogue à invite.
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Annule la capture des évènements d'un certain type par la fenêtre.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Indique au navigateur qu'une animation est en cours, en demandant au navigateur de planifier une redessinage de la fenêtre lors de l'image d'animation suivante.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Active la planification de tâches pendant les périodes d'inactivité du navigateur.
- {{domxref("Window.resizeBy()")}}
  - : Redimensionne la fenêtre en cours d'une certaine quantité.
- {{domxref("Window.resizeTo()")}}
  - : Redimensionne dynamiquement la fenêtre.
- {{domxref("Window.restore()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.routeEvent()")}} {{deprecated_inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.scroll()")}}
  - : Fait défiler la fenêtre à un endroit particulier dans le document.
- {{domxref("Window.scrollBy()")}}
  - : Fait défiler le document dans la fenêtre de la quantité indiquée.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_inline}}
  - : Fait défiler le document du nombre de lignes indiqué.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_inline}}
  - : Fait défiler le document en cours du nombre de pages indiqué.
- {{domxref("Window.scrollTo()")}}
  - : Fait défiler à un jeu de coordonnées particulier dans le document.
- {{domxref("Window.setCursor()")}} {{Non-standard_inline}} (top-level XUL windows only)
  - : Change le curseur pour la fenêtre en cours.
- {{domxref("Window.setImmediate()")}}
  - : Exécute une fonction après que le navigateur a terminé d'autres tâches lourdes
- {{domxref("Window.setResizable()")}} {{Non-standard_inline}}
  - : Inverse la possibilité pour un utilisateur de redimensionner une fenêtre.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_inline}}
  - : Dimensionne la fenêtre en fonction de son contenu.
- {{domxref("Window.stop()")}}
  - : Cette méthode arrête le chargement de la fenêtre.
- {{domxref("Window.updateCommands()")}} {{Non-standard_inline}}
  - : Met à jour l'état des commandes de la fenêtre chrome en cours (IU).

### Méthodes implémentées depuis ailleurs

- {{domxref("EventTarget.addEventListener()")}}
  - : Enregistre un gestionnaire d'événement pour un type d'événement spécifique dans la fenêtre.
- [`atob()`](/fr/docs/Web/API/atob)
  - : Décode une chaîne de données qui a été codée en utilisant l'encodage en base 64.
- [`btoa()`](/fr/docs/Web/API/btoa)
  - : Crée une chaîne ASCII codée en base 64 à partir d'une chaîne de données binaires.
- [`clearInterval()`](/fr/docs/Web/API/clearInterval)
  - : Annule l'exécution répétée définie en utilisant [`setInterval()`](/fr/docs/Web/API/setInterval).
- [`clearTimeout()`](/fr/docs/Web/API/atob)
  - : Annule l'exécution différée définie en utilisant [`setTimeout()`](/fr/docs/Web/API/setTimeout).
- [`createImageBitmap()`](/fr/docs/Web/API/createImageBitmap)
  - : Accepte une variété de sources d'images différentes, et renvoie un {{domxref("Promise")}} qui se résout en une {{domxref("ImageBitmap")}}. En option, la source est détourée avec le rectangle des pixels d'origine en (sx, sy) et de largeur sw, et de hauteur sh.
- [`fetch()`](/fr/docs/Web/API/fetch)
  - : Démarre le processus de récupération d'une ressource à partir du réseau.
- {{domxref("EventTarget.removeEventListener")}}
  - : Supprime un gestionnaire d'événement de la fenêtre.
- [`setInterval()`](/fr/docs/Web/API/setInterval)
  - : Planifie une fonction à exécuter à chaque fois qu'un nombre donné de millisecondes s'est écoulé.
- [`setTimeout()`](/fr/docs/Web/API/setTimeout)
  - : Planifie une fonction à exécuter dans un laps de temps donné.

### Méthodes obsolètes

- {{domxref("Window.showModalDialog()")}} {{deprecated_inline}}
  - : Affiche un dialogue modal. **Cette méthode a été complètement supprimée dans Chrome 43, et dans Firefox 55**.

## Gestionnaires d'évènements

Ce sont des propriétés de l'objet window qui peuvent être définies pour établir des gestionnaires d'événements pour les différentes choses qui peuvent se produire dans la fenêtre et qui pourraient être intéressantes.

_Cette interface hérite des gestionnaires d'événements de l'interface {{domxref("EventTarget")}} et elle implémente les gestionnaires d'événements de {{domxref("WindowEventHandlers")}}._

> **Note :** à partir de Gecko 9.0, vous pouvez maintenant utiliser la syntaxe `if ("onabort" in window)` pour déterminer si une propriété de gestionnaire d'événements donnée existe ou non. Cela est dû au fait que les interfaces du gestionnaire d'événements ont été mises à jour pour être des interfaces Web IDL correctes. Voir les gestionnaires d'événements DOM pour plus de détails.

- {{domxref("GlobalEventHandlers.onabort")}}

  - : Appelé quand le chargement d'une ressource a été avorté, comme par le fait qu'un utilisateur annule un chargement alors qu'il était encore en cours.

<!---->

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Appelé lorsque la boîte de dialogue d'impression est fermée. Voir l'événement [`afterprint`](/fr/docs/Web/API/Window/afterprint_event).
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Appelé lorsque la boîte de dialogue d'impression est ouverte. Voir l'événement [`beforeprint`](/fr/docs/Web/API/Window/beforeprint_event).
- {{domxref("Window.onbeforeinstallprompt")}}
  - : Propriété de gestionnaire d'événements qui est déclenchée avant qu'un utilisateur ne soit invité à enregistrer un site Web sur un écran d'accueil sur mobile.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Propriété de gestionnaire d'événements pour les événements avant-déchargement dans la fenêtre.

<!---->

- {{domxref("GlobalEventHandlers.onblur")}}
  - : Appelé après que la fenêtre a perdu la focalisation, comme en raison d'une fenêtre contextuelle.

<!---->

- {{domxref("GlobalEventHandlers.onchange")}}
  - : Propriété de gestionnaire d'événements pour les événements de changement dans la fenêtre.

<!---->

- {{domxref("GlobalEventHandlers.onclick")}}
  - : Appelé après qu'un QUELCONQUE bouton de la souris est pressé & relâché.

<!---->

- {domxref("GlobalEventHandlers.ondblclick")}}
  - : Appelé quand un double clic est fait avec un QUELCONQUE bouton de la souris.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Appelé après la fermeture de la fenêtre.

<!---->

- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Appelé lorsque le bouton DROIT de la souris est enfoncé.

<!---->

- {{domxref("Window.ondevicelight")}}
  - : Propriété de gestionnaire d'événements pour tous les changements de niveaux de luminosité ambiante.
- {{domxref("Window.ondevicemotion")}}
  - : Appelé si l'accéléromètre détecte un changement (pour les appareils mobiles).
- {{domxref("Window.ondeviceorientation")}}
  - : Appelé lorsque l'orientation est modifiée (pour les appareils mobiles).
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}} Chrome only
  - : Propriété de gestionnaire d'événements pour tout changement d'orientation de l'appareil.
- {{domxref("Window.ondeviceproximity")}}
  - : Propriété de gestionnaire d'événement pour l'événement de proximité de l'appareil.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Appelé lorsqu'une ressource ne se charge pas OU lorsqu'une erreur se produit lors de l'exécution. Voir l'événement [`error`](/fr/docs/Web/API/Window/error_event).
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Appelé après que la fenêtre a reçu ou récupéré la focalisation. Voir les événements [`focus`](/fr/docs/Web/API/Window/focus_event).
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Propriété de gestionnaire d'événements pour les événements [`hashchange`](/fr/docs/Web/API/Window/hashchange_event) dans la fenêtre ; appelé lorsque la partie de l'URL après la marque hash ("#") change.
- {{domxref("Window.onappinstalled")}}
  - : Appelé lorsque la page est installée en tant que webapp. Voir l'événement [`appinstalled`](/fr/docs/Web/API/Window/appinstalled_event).
- {{domxref("Window.ongamepadconnected")}}
  - : Représente un gestionnaire d'événements qui sera exécuté lorsqu'une manette de jeu est branchée (lorsque l'événement [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) se déclenche).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Représente un gestionnaire d'événements qui s'exécutera quand une manette de jeu est débranchée (lorsque l'événement [`gamepaddisconnected`](/fr/docs/Web/API/Window/gamepaddisconnected_event) se déclenche).
- {{domxref("Window.oninput")}}
  - : Appelée lorsque la valeur d'un élément \<input> change.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : Propriété de gestionnaire d'événements pour les événements [`languagechange`](/fr/docs/Web/API/Window/languagechange_event) dans la fenêtre.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Appelé après que toutes les ressources et les DOM ont été entièrement chargés. NE SERA PAS appelé lorsque la page est chargée à partir du cache, comme avec le bouton arrière.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Appelé quand un bouton QUELCONQUE de la souris est pressé.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Appelé en continu quand la souris est déplacée dans la fenêtre.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Appelé lorsque le pointeur quitte la fenêtre.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Appelé lorsque le pointeur entre dans la fenêtre.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Appelé quand un bouton QUELCONQUE de la souris est relâché.
- {{domxref("Window.onmozbeforepaint")}}
  - : Propriété de gestionnaire d'événements pour l'événement MozBeforePaint, qui est déclenché avant de repeindre la fenêtre si l'événement a été demandé par un appel à la méthode {{domxref("Window.mozRequestAnimationFrame()")}}.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Appelé lorsque la connexion réseau est perdue. Voir l'événement [`offline`](/fr/docs/Web/API/Window/offline_event).
- {{domxref("WindowEventHandlers.ononline")}}
  - : Appelé lorsque la connexion réseau est établie. Voir l'événement [`online`](/fr/docs/Web/API/Window/online_event).
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Appelé lorsque l'utilisateur quitte la page, avant l'événement onunload. Voir l'événement [`pagehide`](/fr/docs/Web/API/Window/pagehide_event).
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Appelé après toutes les ressources et les DOM ont été entièrement chargés. Voir l'événement [`pageshow`](/fr/docs/Web/API/Window/pageshow_event).
- {{domxref("Window.onpaint")}}
  - : Propriété de gestionnaire d'évènement pour les évènements de dessin de la fenêtre.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Appelé quand le bouton arrière est pressé.
- {{domxref("Window.onrejectionhandled")}} {{experimental_inline}}
  - : Gestionnaire d'événements pour les événements de rejet {{jsxref("Promise")}} gérés.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Appelé lorsqu'un formulaire est réinitialisé
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Appelé en continu lorsque vous redimensionnez la fenêtre.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Appelé lorsque la barre de défilement est déplacée par un moyen QUELCONQUE. Si la ressource correspond entièrement à la fenêtre, cet événement ne peut pas être invoqué.
- {{domxref("GlobalEventHandlers.onwheel")}}
  - : Appelé lorsque la roue de la souris est tournée autour d'un axe quelconque.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Appelé après le texte dans un champ de saisie est sélectionné.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Appelé en cas de changement dans le stockage de session ou le stockage local. Voir l'événement [`storage`](/fr/docs/Web/API/Window/storage_event).
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Appelé lorsqu'un formulaire est soumis.
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : Gestionnaire d'événements pour les événements de rejet {{jsxref("Promise")}} non gérés.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Appelé lorsque l'utilisateur quitte la page.
- {{domxref("Window.onuserproximity")}}
  - : Propriété de gestionnaire d'événements pour les événements de proximité d'utilisateur.
- {{domxref("Window.onvrdisplayconnect")}}
  - : Représente un gestionnaire d'événements qui s'exécutera lorsqu'un périphérique RV compatible a été connecté à l'ordinateur (lorsque l'événement [`vrdisplayconnect`](/fr/docs/Web/API/Window/vrdisplayconnect_event) se déclenche).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Représente un gestionnaire d'événements qui s'exécutera lorsqu'un périphérique RV compatible a été déconnecté de l'ordinateur (lorsque l'événement [`vrdisplaydisconnect`](/fr/docs/Web/API/Window/vrdisplaydisconnect_event) se déclenche).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Représente un gestionnaire d'événements qui s'exécutera lorsqu'un affichage peut être présenté (lorsque l'événement [`vrdisplayactivate`](/fr/docs/Web/API/Window/vrdisplayactivate_event) se déclenche), par exemple si un HMD a été déplacé pour sortir de veille, ou a été réveillé en le mettant sur soi.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Représente un gestionnaire d'événements qui s'exécute lorsqu'un affichage ne peut plus être présenté (lorsque l'événement [`vrdisplaydeactivate`](/fr/docs/Web/API/Window/vrdisplaydeactivate_event) se déclenche), par exemple si un HMD est passé en veille ou en hibernation en raison d'une période d'inactivité.
- {{domxref("Window.onvrdisplayblur")}}
  - : Représente un gestionnaire d'événements qui s'exécutera lorsque la présentation sur un affichage a été suspendue pour une raison quelconque par le navigateur, le SE ou le matériel de RV (lorsque l'événement [`vrdisplayblur`](/fr/docs/Web/API/Window/vrdisplayblur_event) se déclenche - par exemple, lorsque l'utilisateur interagit avec un menu système ou un navigateur, pour empêcher le suivi ou la perte d'expérience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Représente un gestionnaire d'événements qui sera exécuté lorsque la présentation sur un afficheur a repris après avoir perdu la focalisation (lorsque l'événement [`vrdisplayfocus`](/fr/docs/Web/API/Window/vrdisplayfocus_event) se déclenche).
- {{domxref("Window.onvrdisplaypresentchange")}}
  - : Représente un gestionnaire d'événements qui s'exécute lorsque l'état de présentation d'un périphérique de RV change, c'est-à-dire qu'il passe de présentation à non présentation, ou vice versa (lorsque l'événement [`vrdisplaypresentchange`](/fr/docs/Web/API/Window/vrdisplaypresentchange_event) se déclenche).

## Constructeurs

Voir aussi les [Interfaces DOM](/fr-FR/docs/DOM/DOM_Reference).

- {{domxref("DOMParser")}}
  - : `DOMParser` peut analyser un source XML ou HTML stocké dans une chaîne de caractères en un [Document](/fr-FR/docs/DOM/document) DOM. `DOMParser` est spécifié dans [DOM Parsing et Serialization](https://w3c.github.io/DOM-Parsing/).
- {{domxref("Window.GeckoActiveXObject")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Image")}}
  - : Used for creating an {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Used for creating an {{domxref("HTMLOptionElement")}}
- {{domxref("Window.QueryInterface")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XMLSerializer")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Worker")}}
  - : Used for creating a [Web worker](/fr/docs/DOM/Using_web_workers)
- {{domxref("Window.XPCNativeWrapper")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : {{todo("NeedsContents")}}

## Interfaces

Voir [Référence du DOM](/fr/docs/Web/API/Document_Object_Model)

## Voir aussi

- [Travailler avec des fenêtres dans le code chrome](/fr/docs/Mozilla/Working_with_windows_in_chrome_code)
