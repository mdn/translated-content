---
title: Firefox 12 note de version pour les développeurs
short-title: Firefox 12
slug: Mozilla/Firefox/Releases/12
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 12 a été publié le 24 avril 2012. Cette page résume les changements dans Firefox 12 qui affectent les développeur·euse·s. Cet article fournit des informations sur les nouvelles fonctionnalités et les principaux bugs corrigés dans cette version, ainsi que des liens vers une documentation plus détaillée pour les développeur·euse·s web et les développeur·euse·s de modules complémentaires.

## Changements pour les développeur·euse·s Web

### HTML

- L'attribut `title` supporte désormais les caractères de saut de ligne pour permettre de multiples lignes dans les info-bulles.
- Si JavaScript est désactivé, l'élément {{HTMLElement("canvas")}} était rendu au lieu d'afficher le contenu de secours selon la [spécification <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/canvas.html). Désormais, c'est le contenu de secours qui est rendu.
- L'attribut `crossorigin` est à présent supporté par {{HTMLElement("video")}}.

### CSS

- Le support de la propriété {{CSSxRef("text-align-last")}} a été ajouté (préfixée).

### JavaScript

- Le support des variables sharp (extension non-standard de Netscape) a été abandonné.
- {{JSxRef("ArrayBuffer.prototype.slice()")}} a été implémenté.

### DOM

- {{DOMxRef("DOMParser")}} supporte désormais l'analyse de fragments de documents HTML.
- {{DOMxRef("XMLHttpRequest")}} supporte désormais des délais d'attente en utilisant la propriété `timeout` et l'évènement «&nbsp;de délais dépassé&nbsp;», ainsi que le gestionnaire d'évènements `ontimeout` de l'interface {{DOMxRef("XMLHttpRequestEventTarget")}}.
- {{DOMxRef("XMLHttpRequest")}} peut désormais se charger à partir des [URIs `data:`](/fr/docs/Web/URI/Reference/Schemes/data).
- Lors du téléchargement de grandes quantités de données, les gestionnaires d'évènements {{DOMxRef("XMLHttpRequest")}} de progression sont désormais appelés régulièrement avec l'ensemble `responseType` vers "moz-blob" et la réponse étant un {{DOMxRef("Blob")}} contenant toutes les données reçues jusqu'ici. Cela permet aux gestionnaires de progression de commencer le traitement des données sans avoir à tout attendre.
- Gecko supporte désormais [l'appui multiple](/fr/docs/Web/API/Touch_events) (au lieu d'une touche à la fois) sur Android.
- Lorsque vous éditez du texte à l'aide d'un IME, l'évènement `input` est à présent envoyé chaque fois que le contenu de l'élément en cours d'édition a été changé, ce qui se passe après l'évènement `compositionupdate` est envoyé pour indiquer que le texte de l'IME a été modifié. Vous pouvez donc utiliser le gestionnaire d'évènements `input`, pour suivre l'évolution du contenu réel de l'élément.
- {{DOMxRef("DOMError")}} a été implémenté selon la spécification DOM 4.
- La méthode {{DOMxRef("Document.createNodeIterator()")}} a été mise à jour suivant la spécification DOM4. Cela rend les paramètres `whatToShow` et `filter` facultatifs et supprime le quatrième paramètre non-standard, `entityReferenceExpansion`.
- La méthode `slice()` de l'interface {{DOMxRef("Blob")}} a été touché par un bogue qui l'empêchait d'accepter correctement le début et la fin des valeurs hors de la portée d'un entier de 64 bits signé, cela a été corrigé.
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}} considère désormais l'effet des [transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) lors du calcul des délimitations du rectangle de l'élément.
- La propriété `crossOrigin` est à présent supportée par {{DOMxRef("HTMLMediaElement")}}.

#### Nouvelles API Web

- L'API Information Réseau&nbsp;: Ajout de la prise en charge expérimentale de {{DOMxRef("Navigator.connection", "window.navigator.connection")}} (préfixé).
- L'API WebTelephony&nbsp;: `window.navigator.mozTelephony` a été implémenté et fournit un support pour composer, répondre, et gérer les appels téléphoniques sur un appareil.
- L'API WebSMS&nbsp;: `window.navigator.mozSms` est à présent disponible pour les appareils mobiles pour envoyer des SMS.
- L'API Screen brightness&nbsp;: `window.screen.mozEnabled` et `window.screen.mozBrightness` ont été ajoutés pour contrôler l'écran de l'appareil.

### SVG

- Firefox implémente désormais l'API DOM `SVGTests`, voir [bogue Firefox 607854 <sup>(angl.)</sup>](https://bugzil.la/607854)
- L'interface DOM {{DOMxRef("SVGStringList")}} supporte la propriété non standard `length`, voir [bogue Firefox 711958 <sup>(angl.)</sup>](https://bugzil.la/711958)

### MathML

- Pour contrôler la direction des formules de MathML, l'attribut `dir` est désormais supporté par les éléments {{MathMLElement("math")}}, {{MathMLElement("mrow")}} et {{MathMLElement("mstyle")}} ainsi que par les [éléments MathML Token](/fr/docs/Web/MathML/Reference/Element#éléments_textuels). C'est particulièrement important pour certaines [notations mathématiques Arabes <sup>(angl.)</sup>](https://www.w3.org/TR/arabic-math/).
- L'attribut d'alignement `align` définit dans MathML3 a été implémenté pour {{MathMLElement("munder")}}, {{MathMLElement("mover")}} et {{MathMLElement("munderover")}}.

### Réseau

- Auparavant, Gecko rapportait le code de fermeture `CLOSE_NORMAL` quand un canal WebSocket était fermé en raison d'une erreur inattendue ou d'une condition d'erreur que la spécification ne couvre pas. Désormais, `CLOSE_GOING_AWAY` est rapporté à la place.

### Outils de développement

- La [console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) met à présent en cache les message d'erreurs et les entrées du journal ajoutés grâce à {{domxref("console.log()")}} si la console n'est pas ouverte actuellement, et les affichent lorsque qu'elle s'ouvre.
- Vous pouvez désormais réinitialiser le niveau de zoom, panoramique et de rotation dans la [vue 3D <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) en appuyant sur la touche "r".
- Vous pouvez désormais masquer les nœuds dans la [vue 3D <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) en appuyant sur la touche "x" après les avoir sélectionnés.
- L'[éditeur de source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#Source_editor) a plusieurs nouvelles fonctionnalités d'édition et de raccourcis clavier, voir [Utilisation de l'éditeur de source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#Source_editor) pour plus de détails

Mozilla travaille sur l'intégration des ses propres outils de développement Web qui complètent l'add-on populaire [Firebug <sup>(angl.)</sup>](https://getfirebug.com/). Vous pouvez obtenir plus d'informations sur ces outils et également voir une liste de ressources externes à Firefox qui vous aident dans le développement Web. La liste se trouve dans les [outils de développement Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html).

### Changements divers

- Le jeu de caractères GEOSTD8, qui n'a jamais été entièrement supporté, n'est plus du tout pris en charge.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

### Modules de code JavaScript

#### source-editor.jsm

- La méthode `resetUndo()` a été ajoutée, elle vous permet d'effacer la pile d'annulation.
- L'éditeur de source offre à présent des méthodes pour apporter des capacités de recherche&nbsp;: `find()`, `findNext()` et `findPrevious()`.

### XUL

- La définition des valeurs pour l'attribut `chromemargin` a été légèrement modifié, pour que ce soit plus facile de faire du code XUL multi-plateforme qui rend bien sur les plateformes avec des largeurs par défaut des bordures de fenêtres différentes.

### XPCOM

- Les mandataires `nsISupports` ne sont plus pris en charge. A la place, vous devez utiliser des exécutables.
- Firefox 11 a changé le comportement de `Components.utils.getWeakReference()` pour générer une exception lorsque la référence de l'objet est nulle, l'ancien comportement qui était silencieux a été rétabli.

### XPConnect

- Le type de données `PRUint64` été mal utilisé puisqu'il est sensiblement identique à `PRint64` lorsqu'il est utilisé avec XPConnect. Cela a été corrigé.

### Changements dans les interfaces

- L'interface `nsIScreen_MOZILLA_2_0_BRANCH` a été intégré dans `nsIScreen`. Les API définies dans cette interface (pour contrôler la luminosité de l'écran) n'avaient pas encore été documentées, mais désormais elles le sont.
- L'interface `nsIScriptError2` a été intégré dans `nsIScriptError`.
- `nsIDownloadManager.addDownload()` est à présent géré de manière asynchrone plutôt que de façon synchrone.
- La méthode `imgIContainerObserver.frameChanged()` reçoit désormais le premier paramètre d'un objet `imgIRequest` qui identifie la demande correspondante.
- La méthode `nsIDOMWindowUtils.sendTouchEvent()` a été ajoutée pour permettre de synthétiser les évènements tactiles.
- Vous pouvez désormais faire défiler le contenu défini verticalement au centre de la vue en définissant `SCROLL_CENTER_VERTICALLY` lors de l'appel de la constante de défilement `nsISelectionController.scrollSelectionIntoView()`.
- Le nouvel attribut `nsIMemoryMultiReporter.explicitNonHeap` a été ajouté&nbsp;; C'est un moyen plus efficace d'obtenir la somme de toutes les mesures du multi-rapporteur qui mesure ceux qui ont un chemin commençant par `"explicit"` **et** qui sont de type `KIND_NONHEAP`.
- L'attribut `nsIDOMWindowUtils.paintingSuppressed` a été ajouté&nbsp;; cette valeur booléenne indique si oui ou non la toile est en train d'être supprimée de la fenêtre. C'est utilisé sur mobile pour éviter le rendu sautillant qui se produit lorsque les tentatives pour dessiner la page commencent avant que le contenu disponible soit insuffisant pour le faire.
- Les interfaces `nsIDocCharset` et `nsIDocumentCharsetInfo` ont été intégrées dans `nsIDocShell`. Dans le cadre de ce travail, le vieil attribut `forcedDetector` a été enlevé, il n'a jamais rien fait.

### SpiderMonkey

- `JSThread` a été supprimé.
- `JSThreadData` a été intégré dans `JSRuntime`.

### Compilation

- Lors de la compilation sous Windows, vous devez avoir le SDK de Windows 7 installé.

### Autres changements

- Le composant d'édition (appelé Midas) n'accepte désormais que les évènements provenant du code privilégié.
