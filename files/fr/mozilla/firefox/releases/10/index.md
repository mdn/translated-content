---
title: Firefox 10 note de version pour les développeurs
short-title: Firefox 10
slug: Mozilla/Firefox/Releases/10
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 10 est sorti le 31 janvier 2012. Cet article fournit des informations sur les nouvelles fonctionnalités et les principaux bugs corrigés dans cette version, ainsi que des liens vers une documentation plus détaillée pour les développeur·euse·s web et les développeur·euse·s de modules complémentaires.

> [!NOTE]
> Firefox 10 est la première version de ce navigateur à avoir deux chiffres. Cela peut poser des problèmes avec certains scripts de détection de l'UA. Assurez-vous de les vérifier, ainsi que ceux contenus dans les logiciels tiers que vous intégrez dans vos pages, comme les bibliothèques. Pour plus d'informations à ce sujet, consultez l'article [Firefox passe à deux chiffres sur hacks.mozilla.org <sup>(angl.)</sup>](https://hacks.mozilla.org/2012/01/firefox-goes-2-digit-time-to-check-your-ua-sniffing-scripts/).

## Changements pour les développeur·euse·s web

### HTML

- Le nouvel élément HTML5 {{HTMLElement("bdi")}}, isolation bidirectionnelle, permettant l'isolation de parties de texte avec une direction différente, a été implémenté. C'est particulièrement utile lors de l'affichage de texte avec une direction inconnue, provenant par exemple d'une base de données, au milieu d'un texte avec une direction connue et potentiellement différente.
- Vous pouvez maintenant définir un fragment «&nbsp;haut&nbsp;» pour l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) afin de créer un lien vers le haut de la page. Cela fonctionnait auparavant, puis a disparu pendant un certain temps, et maintenant c'est de retour, pour être compatible avec la spécification HTML5. Par exemple&nbsp;: `<a href="#top">Retour en haut de la page</a>`.

### JavaScript

- La méthode `WeakMap.set()` retourne maintenant `undefined`, au lieu de retourner elle-même.
- Un bogue a été introduit dans la gestion des expressions régulières dans Firefox 7&nbsp;; il a été corrigé. Voir [le bogue Firefox 683838 <sup>(angl.)</sup>](https://bugzil.la/683838) si vous voulez les détails sanglants.
- Vous ne pouvez plus utiliser la syntaxe ECMAScript pour XML (E4X) obsolète en mode strict [ECMAScript 5](/fr/docs/Web/JavaScript/Reference/Strict_mode) (c'est-à-dire après `"use strict;"`).

### DOM

#### Évènements DOM3

- La méthode DOM Event {{DOMxRef("Event.stopImmediatePropagation")}} a été implémentée.
- Les évènements de souris `mouseenter` et `mouseleave` ont été implémentés.

#### DOM4

- L'attribut {{DOMxRef("Document.xmlVersion")}} (qui était uniquement accessible en lecture et non modifiable) a été supprimé, car il est obsolète dans la spécification DOM4. L'article consacré à {{DOMxRef("Document.xmlVersion")}} suggère maintenant une manière de détecter si le document est HTML ou XML sans utiliser cette propriété.
- L'attribut `document.xmlStandalone` a été supprimé, car il est obsolète dans la spécification DOM4.
- L'attribut {{DOMxRef("Document.xmlEncoding")}} a été supprimé, car il est obsolète dans la spécification DOM4.
- L'attribut `text.isElementContentWhiteSpace` a été supprimé, car il est obsolète dans la spécification DOM4.
- La méthode `text.replaceWholeText` a été supprimée, car elle est obsolète dans la spécification DOM4.
- La méthode {{DOMxRef("Node.isSameNode")}} a été supprimée, car elle est obsolète dans la spécification DOM4. Au lieu de `node1.isSameNode(node2)`, vous pouvez utiliser l'opérateur `===`, comme ceci&nbsp;: `node1 === node2`.

#### L'API Page Visibility

- [L'API Page Visibility](/fr/docs/Web/API/Page_Visibility_API) a été implémentée (préfixée)&nbsp;: `document.mozHidden`, `document.mozVisibilityState` sont disponibles et l'évènement `mozvisibilitychanged` est envoyé lorsque l'état est modifié.

#### L'API Full Screen

- La prise en charge de {{DOMxRef("Document.fullscreenEnabled")}} a été ajoutée.
- La nouvelle propriété `:-moz-full-screen-ancestor` a été ajoutée. Cela vous permet de faire correspondre les éléments qui sont des ancêtres d'un élément en mode plein écran.

#### L'API Battery

- La prise en charge expérimentale de `navigator.mozBattery` a été ajoutée (peut être activée en définissant la préférence `dom.battery.enabled` sur `true` et sera activée par défaut à partir de Firefox 11).

#### Canvas

- La méthode {{DOMxRef("CanvasRenderingContext2D.createPattern", "createPattern()")}} lève désormais une exception si un canevas source de taille nulle est défini.
- Si vous utilisez une valeur non finie pour l'un des paramètres numériques de {{DOMxRef("CanvasRenderingContext2D.putImageData", "putImageData()")}}, l'appel est désormais ignoré silencieusement au lieu de lancer une exception, conformément à la spécification.

#### WebGL

- Firefox 10 prend désormais en charge l'extension [`OES_standard_derivatives` <sup>(angl.)</sup>](https://registry.khronos.org/webgl/extensions/OES_standard_derivatives/).
- [De nouvelles préférences ont été ajoutées](/fr/docs/Web/API/WebGL_API#webgl_debugging_and_testing) pour aider à tester le code WebGL pour la compatibilité avec des appareils minimalement capables sur votre plateforme de développement complète.

#### Web Workers

- L'attribut `XMLHttpRequest.responseType` et `XMLHttpRequest.response` sont désormais disponibles depuis l'intérieur des [Workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).
- Le constructeur [`Worker()`](/fr/docs/Web/API/Worker/Worker) accepte désormais les [URL de données](/fr/docs/Web/URI/Reference/Schemes/data).

#### IndexedDB

De grands progrès ont été réalisés pour mettre à jour IndexedDB selon la dernière spécification provisoire. Cet effort se poursuivra dans Firefox 11.

- Les méthodes {{DOMxRef("IDBIndex.count()")}} et {{DOMxRef("IDBObjectStore.count()")}} ont été ajoutées.
- La méthode {{DOMxRef("IDBCursor.advance()")}} a été ajoutée.
- Lors de la rencontre d'un paramètre optionnel inconnu dans {{DOMxRef("IDBObjectStore.createIndex()")}} ou {{DOMxRef("IDBDatabase.createObjectStore()")}}, Gecko ne déclenche plus d'exception, mais l'ignore.
- Lorsque {{DOMxRef("IDBTransaction.abort()")}} est appelé, toutes les {{DOMxRef("IDBRequest")}} en attente ont leur `errorCode` défini sur `ABORT_ERROR`.
- Les méthodes {{DOMxRef("IDBObjectStore.delete()")}} et {{DOMxRef("IDBCursor.delete()")}} définissent désormais l'attribut `result` de la {{DOMxRef("IDBRequest")}} retournée sur `undefined`.
- La méthode `IDBDatabase.setVersion()` a été supprimée, car elle a été retirée de la dernière spécification. La version de la base de données est donnée par la méthode {{DOMxRef("IDBFactory.open()")}} qui a été mise à jour et le rappel `onupgradeneeded` permet de mettre à jour le schéma de la base de données. La version elle-même a été changée d'un `DOMString` à un `unsigned long long`. L'interface `IDBVersionChangeRequest` a été supprimée et remplacée par la nouvelle interface {{DOMxRef("IDBOpenDBRequest")}}.
- Lors de l'ouverture d'une base de données avec {{DOMxRef("IDBFactory.open()")}}, si le paramètre `version` n'est pas fourni et que la base de données n'existe pas, elle est créée avec une version de `1`.
- La méthode {{DOMxRef("IDBFactory.deleteDatabase()")}} a été ajoutée.
- Les méthodes qui recherchent avec un {{DOMxRef("IDBKeyRange")}} (comme {{DOMxRef("IDBObjectStore.openCursor")}} et {{DOMxRef("IDBIndex.getKey")}}) peuvent accepter soit une seule clé, soit une plage de clés.

#### Autres

- Lorsque le type MIME approprié est passé, `image/svg+xml`, le `DOMParser` crée désormais un `SVGDocument` lorsqu'il reçoit une chaîne de caractères contenant du SVG.
- Par le passé, lorsque {{DOMxRef("Element.setAttribute()")}} analysait des entiers, il signalait une erreur si l'entier contenait des caractères non numériques (par exemple «&nbsp;42toto&nbsp;»). Maintenant, il tronque correctement cela en tant que nombre 42, conformément à la spécification.
- La touche ESC ne déclenche plus incorrectement le gestionnaire {{DOMxRef("Element.keydown_event", "onkeydown")}}.
- L'interface `NameList` n'est plus implémentée&nbsp;; elle avait auparavant une implémentation sans moyen d'y accéder réellement.
- La méthode {{DOMxRef("document.createProcessingInstruction()")}} fonctionne désormais sur les documents HTML ainsi que sur les documents XML. Les nœuds {{DOMxRef("ProcessingInstruction")}} ne sont toujours pris en charge que sur les documents XML, mais comme les nœuds peuvent être déplacés entre les documents, il est utile de pouvoir les créer également sur les documents HTML.
- Le `responseType` `"moz-json"` de {{DOMxRef("XMLHttpRequest")}} [introduit dans Firefox 9](/fr/docs/Mozilla/Firefox/Releases/9#dom) a été mis à jour selon le dernier projet de spécification et n'a plus de préfixe. Voir la note dans [le bogue Firefox 707142 <sup>(angl.)</sup>](https://bugzil.la/707142#c13).

### CSS

- Les transformations 3D en CSS sont désormais prises en charge. Cela inclut la prise en charge des propriétés {{CSSxRef("transform-style")}}, {{CSSxRef("perspective")}}, {{CSSxRef("perspective-origin")}} et {{CSSxRef("backface-visibility")}}, ainsi que des fonctions de transformation 3D dans les propriétés {{CSSxRef("transform")}} et {{CSSxRef("transform-function")}}. Voir [Utilisation des transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using#propriétés_3d_spécifiques_à_css) pour plus de détails.
- Deux nouvelles valeurs pour la propriété CSS {{CSSxRef("unicode-bidi")}} ont été ajoutées&nbsp;: `-moz-isolation` et `-moz-plaintext`. La valeur `-moz-isolation` isole, du point de vue de la direction, l'élément de son environnement, lui permettant d'avoir une direction différente. Un élément avec `unicode-bidi:-moz-isolation` se comporte comme un élément {{HTMLElement("bdi")}}. La valeur `-moz-plaintext` indique au navigateur d'utiliser Unicode euristique pour déterminer la direction et non la propriété CSS {{CSSxRef("direction")}}.
- Les propriétés CSS {{CSSxRef("gradient/linear-gradient")}} et {{CSSxRef("gradient/repeating-linear-gradient")}} ont été mises à jour pour prendre en charge la nouvelle syntaxe `to` et l'algorithme _de coin magique_. Cela permet de donner une couleur précise sur le coin d'une boîte remplie de dégradé.
- La gestion de la propriété {{CSSxRef("text-overflow")}} dans les cas où la boîte déborde des deux côtés alors que la propriété `text-overflow` est définie pour déborder d'un seul côté a été corrigée.
- La gestion de la propriété {{CSSxRef("position")}} sur les éléments à l'intérieur des éléments {{HTMLElement("table")}} positionnés a été corrigée. **Ce changement affecte la mise en page des pages&nbsp;; cependant, nous respectons désormais la spécification CSS et les autres navigateurs, donc cela doit être facile à corriger.**
- La fusion des marges autour des éléments {{HTMLElement("table")}} a été corrigée pour correspondre à la spécification CSS. Auparavant, les marges des éléments de table ne se fusionnaient pas avec les autres éléments adjacents, ce qui entraînait une mise en page incorrecte. **Ce changement affecte la mise en page des pages&nbsp;; cependant, nous respectons désormais la spécification CSS et les autres navigateurs, donc cela doit être facile à corriger.**

### SVG

- L'élément {{SVGElement("mask")}} a été mis à jour pour prendre en charge à la fois sRGB et linearRGB, et utilise désormais sRGB par défaut, conformément à la dernière révision de la spécification SVG 1.1.

### Réseau

- L'en-tête HTTP `Accept-Charset` n'est plus envoyé dans les requêtes HTTP.
  En son absence, les serveurs doivent répondre en envoyant UTF-8.

### Outils de développement

- L'objet {{DOMxRef("console")}} dispose de deux nouvelles méthodes, {{DOMxRef("console/time_static", "console.time()")}} et {{DOMxRef("console/timeEnd_static", "console.timeEnd()")}}, qui peuvent être utilisées pour définir des minuteries sur une page.
- Le nouvel [Inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) a été ajouté, offrant un excellent moyen d'examiner et de manipuler le HTML et le CSS derrière votre contenu.

## Changements pour les développeur·euse·s Mozilla et d'extensions

Pour un aperçu des problèmes susceptibles de survenir lors de la mise à jour de vos extensions pour prendre en charge Firefox 10, consultez [Mise à jour des extensions pour Firefox 10](/fr/docs/Mozilla/Firefox/Releases/10/Updating_add-ons).

> [!NOTE]
> L'ancien type de données [`PRBool` <sup>(angl.)</sup>](https://web.archive.org/web/20210224213411/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSPR/Reference/PRBool) a été retiré&nbsp;! Partout dans la documentation où il est mentionné, le type standard C++ `bool` est désormais utilisé. La documentation sera mise à jour à l'avenir, mais pour l'instant, gardez cela à l'esprit.

### Manifestes

- La prise en charge de [`<em:strictCompatibility>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#strictcompatibility) a été ajoutée au manifeste d'installation. Elle permet aux auteur·ice·s d'extensions de choisir de vérifier la version maximale de leur extension. Si elle est définie sur `true`, l'extension est désactivée si la version de l'application est supérieure à `<em:maxVersion>`. Par défaut, Firefox 10 considère les extensions comme compatibles, quelle que soit leur version maximale définie. Ce drapeau remplace cette préférence. Vous devez le définir si votre extension effectue des actions susceptibles d'être perturbées par les mises à jour de Firefox, **mais pas** si votre extension contient un composant binaire, car ces extensions sont toujours strictement vérifiées (rappelez-vous que les composants binaires doivent toujours être recompilés pour chaque version majeure de Firefox).
- Si vous souhaitez revenir à l'ancien comportement — c'est-à-dire à la vérification stricte de la compatibilité pour toutes les extensions, quelle que soit la valeur du drapeau `strictCompatibility` dans leurs manifestes, vous pouvez définir la préférence `extensions.strictCompatibility` sur `true`.

### XUL

- Les modules complémentaires amorcés utilisant un fichier `chrome.manifest` ont désormais le fichier manifeste enregistré automatiquement. Voir la section [Ajouter une interface utilisateur avec un `chrome.manifest` <sup>(angl.)</sup>](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) pour plus de détails.

### XPConnect

- Plusieurs nouvelles propriétés et méthodes ont été ajoutées à `Components.utils`, permettant d'accéder à diverses informations liées au débogage.

### Changements d'interface

- Les interfaces `mozISpellCheckingEngine` et `nsIEditorSpellCheck` ont été mises à jour pour permettre aux modules complémentaires sans redémarrage d'ajouter des dictionnaires au correcteur orthographique.
- L'attribut `nsIBrowserHistory.lastPageVisited` a été supprimé.
- L'interface `nsIDocumentViewer` a été fusionnée avec `nsIContentViewer`.
- L'interface `nsIURIFixup` dispose d'un nouveau drapeau, `FIXUP_FLAG_USE_UTF8`, qui permet de lui indiquer d'utiliser UTF-8 au lieu du jeu de caractères de la plateforme lors des conversions.

### Changements d'extension

- La nouvelle variable `NPNVdocumentOrigin` a été ajoutée&nbsp;; elle retourne l'origine du document et est plus sécurisée que {{ DOMxRef("window.location") }}.

### Changements du système de compilation

- L'option de compilation `--disable-rdf`, qui rendait en réalité impossible une compilation réussie, a été supprimée. Des travaux sont en cours pour pouvoir supprimer entièrement la prise en charge de RDF, mais pour l'instant, XUL en a encore besoin pour fonctionner. Voir [le bogue Firefox 559505 <sup>(angl.)</sup>](https://bugzil.la/559505) pour suivre les progrès sur la suppression des derniers vestiges de RDF.
- L'option de compilation `--disable-smil` a été supprimée.
