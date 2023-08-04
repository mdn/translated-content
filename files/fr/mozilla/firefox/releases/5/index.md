---
title: Firefox 5 pour les développeurs
slug: Mozilla/Firefox/Releases/5
---

{{FirefoxSidebar}}

Firefox 5, basé sur Gecko 5.0, est sorti le 21 juin 2011. Cet article fournit des informations à propos des changements qui affectent les développeurs dans cette version.

## Changements pour les développeurs Web

### HTML

- Tous les éléments HTML ont maintenant l'attribut {{domxref("element.accessKey", "accessKey")}}, ainsi que les méthodes {{domxref("element.blur()", "blur()")}}, {{domxref("element.click()", "click()")}} et {{domxref("element.focus()", "focus()")}}. Elles sont spécifiées dans l'interface {{domxref("HTMLElement")}}.
- Afin d'être conforme à la spécification HTML5, le support des [jeux de caractères](/fr/docs/Character_Sets_Supported_by_Gecko) UTF-7 et UTF-32 a été retiré.
- Lorsque l'on est en mode quirks, les {{HTMLElement("map")}} vides ne sont plus ignorées en faveur des non-vides quand elles correspondent. Pour plus de détails, voir [les notes de Gecko](/fr/docs/HTML/Element/map#Gecko_notes) sur l'élément {{HTMLElement("map")}}.
- Firefox mobile pour Android supporte désormais les polices WOFF pour {{cssxref("@font-face")}}.
- WebGL [ne charge plus les textures provenant d'autres domaines que celui d'origine](/fr/docs/WebGL/Cross-Domain_Textures), par mesure de sécurité. Le support [du contrôle d'accès d'HTTP](/fr/HTTP_access_control) devrait arriver dans le futur pour que le chargement des textures se fasse en toute sécurité.

#### Améliorations de Canvas

- L'environnement de dessin 2D {{HTMLElement("canvas")}} supporte désormais la spécification d'un objet `ImageData` en entrée de la méthode `createImageData()` ; cela [créé un nouvel objet `ImageData`](/fr/docs/HTML/Canvas/Pixel_manipulation_with_canvas#Creating_an_ImageData_object) qui est initialisé avec les mêmes dimensions que l'objet spécifié, mais tous les pixels sont toujours prédéfinis en noir transparent. ceci a été documenté comme déjà mis en oeuvre alors que ça ne l'était pas.
- Spécifier des valeurs non finies lors de l'ajout de couleur arrête l'ajout via un appel à `addColorStop()` de la méthode {{domxref("CanvasGradient")}} en renvoyant désormais `INDEX_SIZE_ERR` à la place de `SYNTAX_ERR`.
- La méthode {{domxref("HTMLCanvasElement")}} `toDataURL()` now correctly lower-cases the specified MIME type before matching.
- `getImageData()` accepte maintenant correctement les rectangles qui vont au-delà des limites de la zone, les pixels qui sont en dehors de la zone sont mis en noir transparent.
- `drawImage()` et `createImageData()` traitent désormais les arguments négatifs conformément à la spécification, en retournant le rectangle autour de l'axe approprié. **Nous avons besoin d'un article sur [CSS sizing](http://dev.w3.org/csswg/css3-images/#default-sizing) et son fonctionnement.**
- La spécification de valeurs non-finies lors de l'appel de `createImageData()` renvoi maintenant l'exception `NOT_SUPPORTED_ERR`.
- `createImageData()` et `getImageData()` retournent maintenant correctement une valeur d'un pixel en données d'image si un rectangle plus petit qu'un petit qu'un pixel est spécifié.
- La spécification d'un angle négatif lors de l'appel de `createRadialGradient()` renvoi désormais `INDEX_SIZE_ERR`.
- La spécification d'une image `null` ou `undefined` lors de l'appel de `createPattern()` ou `drawImage()` renvoi désormais l'exception `TYPE_MISMATCH_ERR`.
- La spécification de valeurs incorrectes pour `globalAlpha` ne renvoie plus l'exception `SYNTAX_ERR`, cela est désormais ignoré silencieusement.
- La spécification de valeurs incorrectes lors de l'appel de `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` ou `arc()` ne renvoie plus une exception ; ces appels sont désormais ingorés silencieusement.
- Le réglage de la valeur de `shadowOffsetX`, `shadowOffsetY` ou `shadowBlur` avec une valeur incorrecte est désormais ignoré silencieusement.
- Le réglage de la valeur de `rotate` ou `scale` avec une valeur incorrecte est désormais ignoré silencieusement.

### CSS

- [Animations CSS](/fr/docs/CSS/Animations_CSS)
  - : Le support pour les animations CSS a été ajouté, pour l'instant il faut utilisé le préfixe `-moz-`.

### DOM

- L'objet {{domxref("selection")}} de la méthode [`modify()`](/fr/docs/DOM/Selection/modify) a été modifiée afin que la sélection de la granularité "mot" ne contienne plus les espaces à la fin, ce qui est plus cohérent et correspond au comportement de WebKit.
- La méthode {{domxref("window.setTimeout()")}} veille maintenant à ne plus envoyer de délai d'attente dans les onglets inactifs. En plus, le délai est imbriqué à la valeur minimale autorisée par la spécification HTML5 : 4 ms (au lieu de 10 ms qui sert à fixer).
- De même, la méthode {{domxref("window.setInterval()")}} ne serre pas plus d'un intervalle par seconde dans les onglets inactifs.
- [`XMLHttpRequest`](/fr/docs/XMLHttpRequest) supporte maintenant [l'évènement `loadend`](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Detecting_any_load_end_condition). C'est envoyé après qu'un transfert soit terminé (c'est-à-dire après l'évènement `abort`, `error` ou `load`). Vous pouvez utiliser cette fonction pour gérer les tâches qui doivent être exécutées indépendamment de la réussite ou l'échec d'un transfert.
- {{domxref("Blob")}} et, par extension, les objets de {{domxref("File")}} de la méthode `slice()` ont été supprimés et remplacés par une nouvelle, avec une syntaxe qui la rend mieux compatible avec les méthodes [`Array.slice()`](/fr/docs/JavaScript/Reference/Global_Objects/Array/slice) et [`String.slice()`](/fr/docs/JavaScript/Reference/Global_Objects/String/slice) dans JavaScript. Cette méthode s'appelle pour l'instant [`mozSlice()`](</fr/docs/DOM/Blob#mozSlice()>).
- La valeur de {{domxref("window.navigator.language")}} est maintenant déterminée en examinant la valeur de [l'en-tête HTTP](/fr/docs/HTTP/Headers) `Accept-Language`.
- La propriété {{domxref("Node.prefix")}} est maintenant en lecture seule, comme l'exige la spécification DOM.
- {{domxref("HTMLVideoElement")}} supporte maintenant des propriétés expérimentales qui permettent d'obtenir des informations sur les statistiques des vidéos comme le nombres d'images par seconde.

### JavaScript

- Les expressions régulières ne sont plus appelable comme si il s'agissait de fonctions, ce changement a été fait de concert avec l'équipe de WebKit afin d'assurer la compatibilité (voir [la bogue WebKit 28285](https://webkit.org/b/28285). Cette fonctionnalité existait depuis longtemps déjà mais n'a jamais été documentée (du moins, pas sur MDN).
- La méthode [`Function.prototype.isGenerator()`](/fr/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) est désormais supportée, ce qui vous permet de déterminer si une fonction est [génératrice](/fr/docs/JavaScript/Guide/Iterators_and_Generators#Generators.3a_a_better_way_to_build_Iterators).
- Les [mots suivants ont été réservés](/fr/docs/JavaScript/Reference/Reserved_Words) : `class`, `enum`, `export`, `extends`, `import` et `super`. Auparavant, ils étaient uniquement considérés comme réservés en mode strict.
- Les documents DOM crées dans le chrome ne peuvent plus être exposés à des scripts en sandbox.
- Le parser JSON a été ré-écrit pour améliorer la vitesse et la conformité. Ce qui inclut un correctif pour le [bug Firefox 572279](https://bugzil.la/572279).

### SVG

- L'attribut SVG {{SVGAttr("class")}} peut maintenant être animé.
- Les interfaces SVG suivantes sont liées à des interfaces DOM représentant les listes d'objets qui sont maintenant indexables et peuvent être consultées comme des tableaux ; en outre, ils ont une propriété `length` indiquant le nombre d'éléments dans les listes : {{domxref("SVGLengthList")}}, {{domxref("SVGNumberList")}}, {{domxref("SVGPathSegList")}} et {{domxref("SVGPointList")}}.

### HTTP

- Firefox n'envoi plus l'en-tête HTTP `Keep-Alive`, nous n'avons pas pu le formater correctement et il était redondant car on retrouve la valeur "keep-alive" dans l'en-tête {{httpheader("Connection")}} ou {{httpheader("Proxy-Connection")}}.
- Le modèle de transaction HTTP a été mis à jour pour être plus intelligent sur la réutilisation des connexions dans le pool de connexions persistantes, au lieu de traiter le pool pool comme une [file d'attente](<https://fr.wikipedia.org/wiki/File_(structure_de_données)>), Necko tente maintenant de trier le pool avec des connexions avec la fenêtre qui a le plus de [fenêtre de congestion (CWND)](https://fr.wikipedia.org/wiki/Algorithme_TCP#Définitions) en premier. Cela peut réduire le temps d'aller-retour (RTT) des transactions HTTP en évitant la nécessité de développer des connexions fenêtres dans de nombreux cas.
- Firefox gère désormais l'en-tête de réponse HTTP `Content-Disposition` plus efficacement si les deux paramètres `filename` et `filename*` sont fournis, il regarde à travers tous les noms fournis, en utilisant le paramètre `filename*` si il est disponible, même si un paramètre `filename` est inclus en premier. Auparavant, le premier paramètre correspondant était utilisé, ce qui empêchait l'utilisation d'un nom plus approprié. Voir [bug Firefox 588781](https://bugzil.la/588781).

### MathML

- Support des [opérateurs embellis](http://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Outils pour les développeurs

- [L'objet `Console` de la Console Web](/fr/docs/Tools/Web_Console#The_console_object) a maintenant une méthode `debug()`, qui est un alias pour la méthode `log()`, cela améliore la compatibilité avec certains sites.

## Changements pour les développeurs de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions pour Firefox 5, voir [Updating add-ons for Firefox 5](/fr/docs/Firefox/Updating_add-ons_for_Firefox_5).

> **Note :** Firefox 5 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires](/fr/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces).

### Changements dans les modules de code JavaScript

#### Nouveau module de code JavaScript

- Le module de code [`Dict.jsm`](/fr/docs/JavaScript_code_modules/Dict.jsm) a été ajouté, il fournit une API pour les dictionnaires de paires clé/valeur.

#### NetUtil.jsm

- La méthode [`asyncFetch()`](</fr/docs/JavaScript_code_modules/NetUtil.jsm#asyncFetch()>) supporte désormais la spécification de la source en tant que `nsIInputStream`.

### Changements dans les interfaces

- L'interface `nsIHttpChannelInternal` a maintenant de nouveaux attributs donnant accès à des informations sur les points finaux des canaux des adresses et des ports. Ces informations sont fournies principalement à des fins de débogage.
- Les attributs [`width`](/fr/docs/Web/HTML/Element/canvas#width) et [`height`](/fr/docs/Web/HTML/Element/canvas#height) de l'élément {{HTMLElement("canvas")}} sont désormais inclus dans IDL comme des entiers non signés au lieu d'être signés (voir [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement)).
- Les interfaces `nsIAppStartup2` et `nsIAppStartup_MOZILLA_2_0` ont été fusionnées avec l'interface `nsIAppStartup`.
- L'interface `nsIDocShell_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIDocShell`.
- L'interface `nsIFocusManager_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIFocusManager`.
- L'interface `nsIHTMLEditor_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIHTMLEditor`.

#### Nouvelle interface

- Ajout de `nsIDOMAnimationEvent`. {{domxref("AnimationEvent")}}

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :

- `nsICiter` (voir [bug Firefox 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (voir [bug Firefox 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (voir [bug Firefox 619996](https://bugzil.la/619996))

### Aide au débogage

- La nouvelle aide [`DebugOnly<T>`](/fr/docs/Namespace/Mozilla/DebugOnly%3CT%3E) permet de déclarer des variables seulement pour les versions `DEBUG`.

### API JavaScript (SpiderMonkey)

- [`JS_DoubleToInt32()`](/fr/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) et [`JS_DoubleToUint32()`](/fr/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) ont été ajoutés, pour convertir des valeurs [`jsdouble`](/fr/docs/SpiderMonkey/JSAPI_Reference/jsdouble) en nombres entiers de type C et en entiers non-signés.

### Changement dans le système de compilation

- Vous pouvez désormais compiler Firefox sans le fichier `mozconfig`, [`l'option --enable-application`](/fr/docs/Configuring_Build_Options#Choose_an_application) paramètre par défaut à "browser". Après avoir extrait ou téléchargé le code, vous pouvez tout simplement faire `configure && make` (ou `make -f client.mk`) pour compiler Firefox.

## Voir aussi

{{Firefox_for_developers('4')}}
