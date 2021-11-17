---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
tags:
  - Firefox
  - Firefox for Developers
  - TopicStub
translation_of: Mozilla/Firefox/Releases/30
---
{{FirefoxSidebar}}

## Changements pour les développeurs Web

### Outils de développement

- Un surligneur de modèle de boîte a été implémenté ({{bug(663778)}}).
- Partout où un nœud DOM apparaît dans la sortie de la console, il est mis en surbrillance lorsque vous survolez cette sortie de la console ({{bug(757866)}}). De même, toutes les fonctions et les objets JS sont mis en évidence dans la sortie de la console ({{bug(584733)}}). Vous trouverez plus d'informations sur l'amélioration de la console dans cet [article de blog](http://www.robodesign.ro/mihai/blog/web-console-improvements-episode-30).
- La prise en charge de {{domxref("Console.count()")}} a été ajoutée ({{bug(922208)}}).

### CSS

- La propriété {{cssxref("background-blend-mode")}} a été activée par défaut ({{bug(970600)}}).
- La propriété non standard {{cssxref("overflow-clip-box")}} a été implémentée pour une utilisation dans les feuilles de style UA uniquement ({{bug(966992)}}).
- La propriété {{cssxref("line-height")}} affecte désormais les entrées de texte sur une seule ligne (types `<input type=text|password|email|search|tel|url|unknown>`) bien qu'elle ne puisse pas les réduire en dessous d'une hauteur de ligne de `1.0` ({{bug(349259)}}).
- La propriété {{cssxref("line-height")}} affecte désormais également `type=button`, sans aucune restriction ({{bug(697451)}}).
- Le changement du nom des images clés n'affecte pas les éléments actuels ({{bug(978648)}}).

### HTML

_Pas de changement._

### JavaScript

- Nouvelles [compréhensions de tableaux](/fr/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) compatibles ES6 `[for (item of iterable) item]` et [compréhensions de générateur](/fr/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) `(for (item of iterable) item)` ont été implémentées ({{bug(979865)}}).
- [Les tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Property_access) sont désormais extensibles et prennent en charge de nouvelles propriétés nommées ({{bug(695438)}}).
- La propriété {{jsxref("Error.prototype.stack")}} contient désormais des numéros de colonne ({{bug(762556)}}) et a été améliorée [lors de l'utilisation des appels `Function()` et `eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack#Stack_of_eval'ed_code). Cela peut vous aider à mieux déboguer le code JavaScript minifié ou généré.
- La méthode `Promise.cast()` a été renommée {{jsxref("Promise.resolve()")}} ({{bug(966348)}}).

### Interfaces/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} a été implémenté, facilitant la collecte des données de télémétrie ({{bug(936340)}}).
- Ajout d'une propriété `relList` renvoyant un {{domxref("DOMTokenList")}} à {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} et {{domxref("HTMLAnchorElement")}} ({{bug(968637)}}).
- Conformément à la dernière spécification, le premier argument de {{domxref("OscillatorNode.start")}} et {{domxref("OscillatorNode.stop")}} est désormais facultatif et vaut par défaut `0` ({{bug(982541)}}).
- La méthode {{domxref("Navigator.requestWakeLock()")}} et la méthode non standard {{domxref("MozWakeLock")}} ne sont plus disponibles sur le Web sur le Desktop ({{bug(963366)}}).
- La constante `DOM_VK_ENTER` a été supprimée de {{domxref("KeyboardEvent")}} ({{bug(969247)}}).
- Les composants Web {{domxref("Document.register")}} ont été adaptés pour suivre le comportement décrit dans la dernière version de la spécification ({{bug(856140)}}).
- La prise en charge de base des régions Hit sur canvas a été ajouté: les méthodes {{domxref("CanvasRenderingContext2D.addHitRegion()")}} et {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} ont été ajoutées. Ceux-ci sont désactivés par défaut; pour les activer, définissez la préférence `canvas.hitregions.enabled` sur `true` ({{bug(966591)}}).
- Le non standard, et obsolète depuis Firefox 15, {{domxref("Blob.mozSlice")}} n'est plus supporté ({{bug(961804)}}).
- Les non standards {{domxref("ArchiveReader")}} et {{domxref("ArchiveRequest")}} ne sont plus exposés au Web ({{bug(968883)}}).
- Les [constructeurs WebIDL](http://dxr.mozilla.org/mozilla-central/source/dom/webidl/) ne peuvent plus être appelés en tant que fonctions. Ils doivent être précédés du mot-clé `new` ({{bug(916644)}}).
- Ajout du support d'une nouvelle valeur (`alpha`) pour le deuxième paramètre, optionnel, de la méthode {{domxref("HTMLCanvasElement.getContext()")}} permettant de définir si le mélange alpha doit être stocké ou non pour ce contexte. Dans le cas contraire, la valeur alpha par pixel dans ce magasin est toujours de `1.0`. Cela permet au back-end de mettre en œuvre une procédure accélérée ({{bug(982480)}}).
- {{domxref("GlobalWorkerScope.consle")}} renvoie maintenant pour le {{domxref("Console")}} normal ; {{domxref("WorkerConsole")}} a été supprimé ({{bug(965860)}}).
- L'extension {{domxref("WebGL_debug_shaders")}} WebGL a été implémentée ({{bug(968374)}}).

### MathML

_Pas de changement._

### SVG

- {{SVGElement("feDropShadow")}}, et son interface {{domxref("SVGFEDropShadowElement")}}, du module Filter Effects sont désormais supportés ({{bug(964200)}}).

### Audio/Vidéo

- Sous Linux, Gstreamer 1.0 est désormais supporté (au lieu de 0.10) ({{bug(806917)}}).

## Sécurité

_Pas de changement._

## Changements pour les développeurs d'add-on et de Mozilla

- L'interface `nsIDOMWindowUtils` supporte désormais l'attribut booléen `audioMuted` et `audioVolume`, un float dans la plage `[0.0` ,  `1.0]`, permettant de contrôler le son produit par une fenêtre (c'est-à-dire n'importe quel onglet ou iframe). Il n'y a pas d'interface utilisateur pour cela, mais est disponible pour les add-ons. ({{bug(923247)}})

## Voir aussi

### Anciennes versions

{{Firefox_for_developers('29')}}
