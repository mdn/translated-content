---
title: Firefox 30 note de version pour les développeurs
short-title: Firefox 30
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 30 a été publié le [10 juin 2014 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=30). Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s Web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### Outils de développement

- Un surligneur de modèle de boîte a été implémenté ([bogue Firefox 663778 <sup>(angl.)</sup>](https://bugzil.la/663778)).
- Partout où un nœud DOM apparaît dans la sortie de la console, il est mis en surbrillance lorsque vous survolez cette sortie de la console ([bogue Firefox 757866 <sup>(angl.)</sup>](https://bugzil.la/757866)). De même, toutes les fonctions et les objets JS sont mis en évidence dans la sortie de la console ([bogue Firefox 584733 <sup>(angl.)</sup>](https://bugzil.la/584733)). Vous pouvez trouver plus d'informations sur l'amélioration de la console dans cet [article de blog <sup>(angl.)</sup>](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- La prise en charge de {{DOMxRef("console/count_static", "console.count()")}} a été ajoutée ([bogue Firefox 922208 <sup>(angl.)</sup>](https://bugzil.la/922208)).

### CSS

- La propriété {{CSSxRef("background-blend-mode")}} a été activée par défaut ([bogue Firefox 970600 <sup>(angl.)</sup>](https://bugzil.la/970600)).
- La propriété non standard `overflow-clip-box` a été implémentée pour une utilisation dans les feuilles de style de l'agent utilisateur uniquement ([bogue Firefox 966992 <sup>(angl.)</sup>](https://bugzil.la/966992)).
- La propriété {{CSSxRef("line-height")}} affecte désormais les entrées de texte sur une seule ligne (types `<input type=text|password|email|search|tel|url|unknown>`) bien qu'elle ne puisse pas les réduire en dessous d'une hauteur de ligne de `1.0` ([bogue Firefox 349259 <sup>(angl.)</sup>](https://bugzil.la/349259)).
- La propriété {{CSSxRef("line-height")}} affecte désormais également `type=button`, sans aucune restriction ([bogue Firefox 697451 <sup>(angl.)</sup>](https://bugzil.la/697451)).
- Le changement du nom des images clés n'affecte pas les éléments actuels ([bogue Firefox 978648 <sup>(angl.)</sup>](https://bugzil.la/978648)).
- Les éléments de tableau internes positionnés ne sont pas des blocs contenant absolus (position relative pour les lignes de tableau) ([bogue Firefox 63895](https://bugzil.la/63895)).

### HTML

_Pas de changement._

### JavaScript

- Nouvelles [compréhensions de tableaux](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) compatibles ES2015 `[for (item of iterable) item]` et [compréhensions de générateur](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` ont été implémentées ([bogue Firefox 979865 <sup>(angl.)</sup>](https://bugzil.la/979865)).
- [Les tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#accès_aux_propriétés) sont désormais extensibles et prennent en charge de nouvelles propriétés nommées ([bogue Firefox 695438 <sup>(angl.)</sup>](https://bugzil.la/695438)).
- La propriété {{JSxRef("Error.prototype.stack")}} contient désormais des numéros de colonne ([bogue Firefox 762556 <sup>(angl.)</sup>](https://bugzil.la/762556)) et a été améliorée [lors de l'utilisation des appels `Function()` et `eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#description). Cela peut vous aider à mieux déboguer le code JavaScript minifié ou généré.
- La méthode `Promise.cast()` a été renommée {{JSxRef("Promise.resolve()")}} ([bogue Firefox 966348 <sup>(angl.)</sup>](https://bugzil.la/966348)).

### Interfaces/APIs/DOM

- {{DOMxRef("Navigator.sendBeacon")}} a été implémenté, facilitant la collecte des données de télémétrie ([bogue Firefox 936340 <sup>(angl.)</sup>](https://bugzil.la/936340)).
- Ajout d'une propriété `relList` renvoyant un {{DOMxRef("DOMTokenList")}} à {{DOMxRef("HTMLLinkElement")}}, {{DOMxRef("HTMLAreaElement")}} et {{DOMxRef("HTMLAnchorElement")}} ([bogue Firefox 968637 <sup>(angl.)</sup>](https://bugzil.la/968637)).
- Conformément à la dernière spécification, le premier argument de {{DOMxRef("AudioScheduledSourceNode.start")}} et {{DOMxRef("AudioScheduledSourceNode.stop")}} est désormais facultatif et vaut par défaut `0` ([bogue Firefox 982541 <sup>(angl.)</sup>](https://bugzil.la/982541)).
- La méthode `Navigator.requestWakeLock()` et la méthode non standard `MozWakeLock` ne sont plus disponibles sur le Web sur le Desktop ([bogue Firefox 963366 <sup>(angl.)</sup>](https://bugzil.la/963366)).
- La constante `DOM_VK_ENTER` a été supprimée de {{DOMxRef("KeyboardEvent")}} ([bogue Firefox 969247 <sup>(angl.)</sup>](https://bugzil.la/969247)).
- Les composants Web `Document.register()` ont été adaptés pour suivre le comportement décrit dans la dernière version de la spécification ([bogue Firefox 856140 <sup>(angl.)</sup>](https://bugzil.la/856140)).
- Le non standard, et obsolète depuis Firefox 15, `Blob.mozSlice` n'est plus supporté ([bogue Firefox 961804 <sup>(angl.)</sup>](https://bugzil.la/961804)).
- Les non standards `ArchiveReader` et `ArchiveRequest` ne sont plus exposés au Web ([bogue Firefox 968883 <sup>(angl.)</sup>](https://bugzil.la/968883)).
- Les [constructeurs WebIDL <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/dom/webidl/) ne peuvent plus être appelés en tant que fonctions. Ils doivent être précédés du mot-clé `new` ([bogue Firefox 916644 <sup>(angl.)</sup>](https://bugzil.la/916644)).
- Ajout du support d'une nouvelle valeur (`alpha`) pour le deuxième paramètre, optionnel, de la méthode {{DOMxRef("HTMLCanvasElement.getContext()")}} permettant de définir si le mélange alpha doit être stocké ou non pour ce contexte. Dans le cas contraire, la valeur alpha par pixel dans ce magasin est toujours de `1.0`. Cela permet au back-end de mettre en œuvre une procédure accélérée ([bogue Firefox 982480 <sup>(angl.)</sup>](https://bugzil.la/982480)).
- `WorkerGlobalScope.console` retourne maintenant pour l'objet {{DOMxRef("Console")}} normal&nbsp;; `WorkerConsole` a été supprimé ([bogue Firefox 965860 <sup>(angl.)</sup>](https://bugzil.la/965860)).
- L'extension {{DOMxRef("WEBGL_debug_shaders")}} WebGL a été implémentée ([bogue Firefox 968374 <sup>(angl.)</sup>](https://bugzil.la/968374)).

### MathML

_Pas de changement._

### SVG

- {{SVGElement("feDropShadow")}}, et son interface {{DOMxRef("SVGFEDropShadowElement")}}, du module Filter Effects sont désormais supportés ([bogue Firefox 964200 <sup>(angl.)</sup>](https://bugzil.la/964200)).

### Audio/Vidéo

- Sous Linux, Gstreamer 1.0 est désormais supporté (au lieu de 0.10) ([bogue Firefox 806917 <sup>(angl.)</sup>](https://bugzil.la/806917)).

## Sécurité

- `<form autocomplete="off">` ne empêche plus les mots de passe d'être enregistrés. Voir [Gestion de l'autocomplétion pour les champs de connexion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#gérer_le_remplissage_automatique_des_champs_de_connexion) pour plus d'informations. ([bogue Firefox 956906 <sup>(angl.)</sup>](https://bugzil.la/956906)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

- L'interface `nsIDOMWindowUtils` supporte désormais l'attribut booléen `audioMuted` et `audioVolume`, un nombre à virgule flottante dans la plage `[0.0, 1.0]`, permettant de contrôler le son produit par une fenêtre (c'est-à-dire n'importe quel onglet ou cadre intégré). Il n'y a pas d'interface utilisateur pour cela, mais est disponible pour les extensions. ([bogue Firefox 923247 <sup>(angl.)</sup>](https://bugzil.la/923247))
