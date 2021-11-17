---
title: Firefox 12 pour les développeurs
slug: Mozilla/Firefox/Releases/12
tags:
  - Firefox
  - Firefox 12
translation_of: Mozilla/Firefox/Releases/12
original_slug: Mozilla/Firefox/Versions/12
---
{{FirefoxSidebar}}

Firefox 12, basé sur Gecko 12.0, est sorti le 24 avril 2012. Cette page résume les principaux changements dans Firefox 12 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'attribut `title` supporte désormais les caractères de saut de ligne pour permettre des multi-lignes dans les info-bulles.
- Si JavaScript est désactivé, l'élément {{HTMLElement("canvas")}} était rendu au lieu d'afficher le contenu de secours selon la [spécification](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html). Désormais, c'est le contenu de secours qui est rendu.
- L'attribut `crossorigin` est à présent supporté par {{HTMLElement("video")}}.

### CSS

- Le support de la propriété {{cssxref("text-align-last")}} a été ajouté (prefixée).

### JavaScript

- Le support des [variables sharp](/fr/docs/JavaScript/Sharp_variables_in_JavaScript) (extension non-standard de Netscape) a été abandonné.

### DOM

- {{domxref("DOMParser")}} supporte désormais l'analyse de fragments de documents HTML.
- {{domxref("XMLHttpRequest")}} supporte désormais des délais d'attente en utilisant la propriété `timeout` et l'évènement "timeout", ainsi que le gestionnaire d'évènements `ontimeout` de l'interface {{domxref("XMLHttpRequestEventTarget")}}.
- {{domxref("XMLHttpRequest")}} peut désormais se charger à partir des [URIs `data:`](/fr/docs/data_URIs).
- Lors du téléchargement de grandes quantités de données, les gestionnaires d'événements {{domxref("XMLHttpRequest")}} de progression sont désormais appelés régulièrement avec l'ensemble `responseType` vers "moz-blob" et la réponse étant un {{domxref("Blob")}} contenant toutes les données reçues jusqu'ici. Cela permet aux gestionnaires de progression de commencer le traitement des données sans avoir à tout attendre.
- Gecko supporte désormais le [multi-touch](/fr/docs/DOM/Touch_events) (au lieu d'une touche à la fois) sur Android.
- Lorsque vous éditez du texte à l'aide d'un IME, l'événement `input` est à présent envoyé chaque fois que le contenu de l'élément en cours d'édition a été changé, ce qui se passe après l'événement `compositionupdate` est envoyé pour indiquer que le texte de l'IME a été modifié. Vous pouvez donc utiliser le gestionnaire d'événements `input`, pour suivre l'évolution du contenu réel de l'élément.
- {{domxref("DOMError")}} a été implémenté selon la spécification DOM 4.
- La méthode {{domxref("Document.createNodeIterator()")}} a été mise à jour suivant la spécification DOM4. Cela rend les paramètres `whatToShow` et `filter` facultatifs et supprime le quatrième paramètre non-standard, `entityReferenceExpansion`.
- La méthode `slice()` de l'interface {{domxref("Blob")}} a été touché par un bug qui l'empêchait d'accepter correctement le début et la fin des valeurs hors de la portée d'un entier de 64 bits signé, cela a été corrigé.
- La méthode {{domxref("element.getBoundingClientRect()")}} considère désormais l'effet des [transformations CSS](/fr-/docs/CSS/Utilisation_des_transformations_CSS) lors du calcul des délimitations du rectangle de l'élément.
- La propriété `crossOrigin` est à présent supportée par {{domxref("HTMLMediaElement")}}.

#### Nouvelles WebAPIs

- API Information Réseau : Ajout du support expérimental de {{domxref("window.navigator.connection")}} (prefixé).
- API WebTelephony : {{domxref("window.navigator.mozTelephony")}} a été implémenté et fournit un support pour composer, répondre, et gérer les appels téléphoniques sur un appareil.
- API WebSMS : {{domxref("window.navigator.mozSms")}} est à présent disponible pour les appareils mobiles pour envoyer des SMS.
- API Screen brightness : {{domxref("window.screen.mozEnabled")}} et {{domxref("window.screen.mozBrightness")}} ont été ajoutés pour contrôler l'écran de l'appareil.

### SVG

- Firefox implémente désormais l'API DOM {{domxref("SVGTests")}}, voir {{bug(607854)}}
- L'interface DOM {{domxref("SVGStringList")}} supporte la propriété non-standard `length`, voir {{bug(711958)}}

### MathML

- Pour contrôler la directionnalité des formules de MathML, l'attribut `dir` est désormais supporté par les éléments {{MathMLElement("math")}}, {{MathMLElement("mrow")}} et {{MathMLElement("mstyle")}} ainsi que par les [éléments MathML Token](/Special:Tags?tag=MathML:Token+Elements). C'est particulièrement important pour certaines [notations mathématiques Arabes](http://www.w3.org/TR/arabic-math/).
- L'attribut d'alignement `align` definit dans MathML3 a été implementé pour {{MathMLElement("munder")}}, {{MathMLElement("mover")}} et {{MathMLElement("munderover")}}.

### Réseau

- Auparavant, Gecko rapportait le code de fermeture `CLOSE_NORMAL` quand un canal WebSocket était fermé en raison d'une erreur inattendue ou d'une condition d'erreur que la spécification ne couvre pas. Désormais, `CLOSE_GOING_AWAY` est rapporté à la place.

### Outils de développement

- La [console Web/a> met à présent en cache les message d'erreurs et les entrées du journal ajoutés grâce à {{domxref("console.log()")}} si la console n'est pas ouverte actuellement, et les affichent lorsque qu'elle s'ouvre.](/fr/docs/Tools/Web_Console)
- [Vous pouvez désormais réinitialiser le niveau de zoom, panoramique et de rotation dans la ](/fr/docs/Tools/Web_Console)[vue 3D](/fr/docs/Tools/Page_Inspector/3D_view) en appuyant sur la touche "r".
- Vous pouvez désormais masquer les nœuds dans la [vue 3D](/fr/docs/Tools/Page_Inspector/3D_view) en appuyant sur la touche "x" après les avoir sélectionnés.
- L'[éditeur de source](/fr/docs/Tools/Using_the_Source_Editor) a plusieurs nouvelles fonctionnalités d'édition et de raccourcis clavier, voir [Utilisation de l'éditeur de source](/fr/docs/Tools/Using_the_Source_Editor) pour plus de détails

Mozilla travaille sur l'intégration des ses propres outils de développement Web qui complètent l'add-on populaire [Firebug](http://getfirebug.com/). Vous pouvez obtenir plus d'informations sur ces outils et également voir une liste de ressources externes à Firefox qui vous aideront dans le développement Web. La liste se trouve dans les [outils de développement Web](/fr/docs/Outils).

### Changements divers

- Le jeu de caractères GEOSTD8, qui n'a jamais été entièrement supporté, n'est plus du tout pris en charge.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Modules de code JavaScript

#### source-editor.jsm

- La méthode [`resetUndo()`](/fr/docs/JavaScript_code_modules/source-editor.jsm#resetUndo%28%29) a été ajoutée, elle vous permet d'effacer la pile d'annulation.
- L'éditeur de source offre à présent des méthodes pour apporter des capacités de recherche : [`find()`](</fr/docs/JavaScript_code_modules/source-editor.jsm#find()>), [`findNext()`](</fr/docs/JavaScript_code_modules/source-editor.jsm#findNext()>), and [`findPrevious()`](</fr/docs/JavaScript_code_modules/source-editor.jsm#findPrevious()>).

### XUL

- La définition des valeurs pour l'attribut {{XULAttr("chromemargin")}} a été légèrement modifié, pour que ce soit plus facile de faire du code XUL multi-plateforme qui rend bien sur les plateformes avec des largeurs par défaut des bordures de fenêtres différentes.

### XPCOM

- [Les proxys `nsISupports`](/fr/docs/nsISupports_proxies) ne sont plus supportés. A la place, vous devez utiliser des exécutables ; voir [Faire des appels inter-thread exécutables](/fr/docs/XPCOM/Making_cross-thread_calls_using_runnables).
- Firefox 11 a changé le comportement de [`Components.utils.getWeakReference()`](/fr/docs/Components.utils.getWeakReference) pour générer une exception lorsque la référence de l'objet est nulle, l'ancien comportement qui était silencieux a été rétabli.

### XPConnect

- Le type de données [`PRUint64`](/fr/docs/PRUint64) été mal utilisé puisqu'il est sensiblement identique à [`PRint64`](/fr/docs/PRInt64) lorsqu'il est utilisé avec XPConnect. Cela a été corrigé.

### Changements dans les interfaces

- L'interface `nsIScreen_MOZILLA_2_0_BRANCH` a été intégré dans {{interface("nsIScreen")}}. Les API définies dans cette interface (pour contrôler la luminosité de l'écran) n'avaient pas encore été documentées, mais désormais elles le sont.
- L'interface {{interface("nsIScriptError2")}} a été intégré dans {{interface("nsIScriptError")}}.
- {{ifmethod("nsIDownloadManager", "addDownload")}} est à présent géré de manière asynchrone plutôt que de façon synchrone.
- La méthode {{ifmethod("imgIContainerObserver", "frameChanged")}} reçoit désormais le premier paramètre d'un objet {{interface("imgIRequest")}} qui identifie la demande correspondante.
- La méthode {{ifmethod("nsIDOMWindowUtils", "sendTouchEvent")}} a été ajoutée pour permettre de synthétiser les événements tactiles.
- Vous pouvez désormais faire défiler le contenu spécifié verticalement au centre de la vue en spécifiant `SCROLL_CENTER_VERTICALLY` lors de l'appel de la constante de défilement {{ifmethod("nsISelectionController", "scrollSelectionIntoView")}}.
- Le nouvel attribut {{ifattribute("nsIMemoryMultiReporter", "explicitNonHeap")}} a été ajouté ; C'est un moyen plus efficace d'obtenir la somme de toutes les mesures du multi-rapporteur qui mesure ceux qui ont un chemin commençant par "explicit" **et** qui sont de type `KIND_NONHEAP`.
- L'attribut {{ifattribute("nsIDOMWindowUtils", "paintingSuppressed")}} a été ajouté ; cette valeur booléenne indique si oui ou non la toile est en train d'être supprimée de la fenêtre. C'est utilisé sur mobile pour éviter le rendu sautillant qui se produit lorsque les tentatives pour dessiner la page commencent avant que le contenu disponible soit insuffisant pour le faire.
- Les interfaces `nsIDocCharset` et `nsIDocumentCharsetInfo` ont été intégrées dans {{interface("nsIDocShell")}}. Dans le cadre de ce travail, le vieil attribut `forcedDetector` a été enlevé, il n'a jamais rien fait.

### SpiderMonkey

- `JSThread` a été supprimé.
- `JSThreadData` a été intégré dans `JSRuntime`.

### Compilation

- Lors de la compilation sous Windows, vous devez avoir le SDK de Windows 7 installé.

### Autres changements

- Le composant d'édition (appelé [Midas](/fr/docs/Midas)) [n'accepte désormais que les évènements](/fr/docs/Using_the_Editor_from_XUL#Editor_event_handling) provenant du code privilégié.

## Voir également

{{Firefox_for_developers('11')}}
