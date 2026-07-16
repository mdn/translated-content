---
title: Firefox 5 note de version pour les développeurs
short-title: Firefox 5
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 5, basé sur Gecko 5.0, est sorti le 21 juin 2011. Cet article fournit des informations à propos des changements qui affectent les développeur·euse·s dans cette version.

## Changements pour les développeur·euse·s Web

### HTML

- Tous les éléments HTML ont maintenant l'attribut {{DOMxRef("HTMLElement/accessKey", "accessKey")}}, ainsi que les méthodes {{DOMxRef("HTMLElement.blur", "blur()")}}, {{DOMxRef("HTMLElement.click", "click()")}} et {{DOMxRef("HTMLElement.focus", "focus()")}}. Elles sont définies dans l'interface {{DOMxRef("HTMLElement")}}.
- Afin d'être conforme à la spécification HTML5, la prise en charge des [jeux de caractères <sup>(angl.)</sup>](https://web.archive.org/web/20210612224236/https://developer.mozilla.org/en-US/docs/Gecko/Character_sets_supported_by_Gecko) UTF-7 et UTF-32 a été retirée.
- Lorsque l'on est en mode quirks, les {{HTMLElement("map")}} vides ne sont plus ignorées en faveur des non-vides quand elles correspondent.
- Firefox mobile pour Android prend désormais en charge les polices WOFF pour {{CSSxRef("@font-face")}}.
- WebGL [ne charge plus les textures provenant d'autres domaines que celui d'origine](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#textures_inter-domaines), par mesure de sécurité. Le support [du contrôle d'accès d'HTTP](/fr/docs/Web/HTTP/Guides/CORS) doit arriver dans le futur pour que le chargement des textures se fasse en toute sécurité.

#### Améliorations de Canvas

- L'environnement de dessin 2D {{HTMLElement("canvas")}} supporte désormais la spécification d'un objet `ImageData` en entrée de la méthode `createImageData()`&nbsp;; cela [créé un nouvel objet `ImageData`](/fr/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#création_dun_objet_imagedata) qui est initialisé avec les mêmes dimensions que l'objet défini, mais tous les pixels sont toujours prédéfinis en noir transparent. ceci a été documenté comme déjà mis en œuvre alors que ça ne l'était pas.
- Définir des valeurs non finies lors de l'ajout de couleur arrête l'ajout avec un appel à `addColorStop()` de la méthode {{DOMxRef("CanvasGradient")}} en renvoyant désormais `INDEX_SIZE_ERR` à la place de `SYNTAX_ERR`.
- La méthode `toDataURL()` de {{DOMxRef("HTMLCanvasElement")}} convertit désormais correctement le type MIME défini en minuscules avant de procéder à la correspondance.
- `getImageData()` accepte maintenant correctement les rectangles qui vont au-delà des limites de la zone, les pixels qui sont en dehors de la zone sont mis en noir transparent.
- `drawImage()` et `createImageData()` traitent désormais les arguments négatifs conformément à la spécification, en retournant le rectangle autour de l'axe approprié. **Nous avons besoin d'un article sur [le dimensionnement CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-images-3/) et son fonctionnement.**
- La spécification de valeurs non-finies lors de l'appel de `createImageData()` renvoi maintenant l'exception `NOT_SUPPORTED_ERR`.
- `createImageData()` et `getImageData()` retournent maintenant correctement une valeur d'un pixel en données d'image si un rectangle plus petit qu'un petit qu'un pixel est défini.
- La spécification d'un angle négatif lors de l'appel de `createRadialGradient()` renvoi désormais `INDEX_SIZE_ERR`.
- La spécification d'une image `null` ou `undefined` lors de l'appel de `createPattern()` ou `drawImage()` renvoi désormais l'exception `TYPE_MISMATCH_ERR`.
- La spécification de valeurs incorrectes pour `globalAlpha` ne retourne plus l'exception `SYNTAX_ERR`, c'est désormais ignoré silencieusement.
- La spécification de valeurs incorrectes lors de l'appel de `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` ou `arc()` ne retourne plus une exception&nbsp;; ces appels sont désormais ignorés silencieusement.
- Le réglage de la valeur de `shadowOffsetX`, `shadowOffsetY` ou `shadowBlur` avec une valeur incorrecte est désormais ignoré silencieusement.
- Le réglage de la valeur de `rotate` ou `scale` avec une valeur incorrecte est désormais ignoré silencieusement.

### CSS

- [Animations CSS](/fr/docs/Web/CSS/Guides/Animations)
  - : Le support pour les animations CSS a été ajouté, pour l'instant il faut utilisé le préfixe `-moz-`.

### DOM

- L'objet {{DOMxRef("selection")}} de la méthode {{DOMxRef("Selection.modify", "modify()")}} a été modifiée afin que la sélection de la granularité "mot" ne contienne plus les espaces à la fin, ce qui est plus cohérent et correspond au comportement de WebKit.
- Les méthodes {{DOMxRef("Window.setTimeout", "setTimeout()")}} et {{DOMxRef("WorkerGlobalScope.setTimeout", "setTimeout()")}} veillent désormais à ne plus envoyer de délai d'attente dans les onglets inactifs. En plus, le délai est imbriqué à la valeur minimale autorisée par la spécification HTML5&nbsp;: 4 ms (au lieu de 10 ms qui sert à fixer).
- De même, les méthodes {{DOMxRef("window.setInterval()")}} et {{DOMxRef("WorkerGlobalScope.setInterval()")}} ne serrent pas plus d'un intervalle par seconde dans les onglets inactifs.
- [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) supporte désormais [l'évènement `loadend`](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#connaître_lavancement). C'est envoyé après qu'un transfert soit terminé (c'est-à-dire après l'évènement `abort`, `error` ou `load`). Vous pouvez utiliser cette fonction pour gérer les tâches qui doivent être exécutées indépendamment de la réussite ou l'échec d'un transfert.
- {{DOMxRef("Blob")}} et, par extension, les objets de {{DOMxRef("File")}} de la méthode `slice()` ont été supprimés et remplacés par une nouvelle, avec une syntaxe qui la rend mieux compatible avec les méthodes {{JSxRef("Array.slice()")}} et {{JSxRef("String.slice()")}} dans JavaScript. Cette méthode s'appelle pour l'instant `mozSlice()`.
- La valeur de {{DOMxRef("Navigator.language")}} est désormais déterminée en examinant la valeur de [l'en-tête HTTP](/fr/docs/Web/HTTP/Reference/Headers) `Accept-Language`.
- La propriété {{DOMxRef("Element.prefix")}} est désormais en lecture seule, comme l'exige la spécification DOM.
- {{DOMxRef("HTMLVideoElement")}} supporte désormais des propriétés expérimentales qui permettent d'obtenir des informations sur les statistiques des vidéos comme le nombres d'images par seconde.

### JavaScript

- Les expressions régulières ne sont plus appelable comme si il s'agissait de fonctions, ce changement a été fait de concert avec l'équipe de WebKit afin d'assurer la compatibilité (voir [la bogue WebKit 28285 <sup>(angl.)</sup>](https://webkit.org/b/28285)). Cette fonctionnalité existait depuis longtemps déjà mais n'a jamais été documentée (du moins, pas sur MDN).
- La méthode `Function.prototype.isGenerator()` est désormais supportée, ce qui vous permet de déterminer si une fonction est [génératrice](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators#fonctions_génératrices).
- Les [mots suivants ont été réservés](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#mots-clés) étaient auparavant uniquement considérés comme réservés en mode strict&nbsp;; désormais, ils sont toujours considérés comme réservés&nbsp;: `class`, `enum`, `export`, `extends`, `import` et `super`.
- Les documents DOM crées dans le chrome ne peuvent plus être exposés à des scripts en sandbox.
- L'analyseur JSON a été ré-écrit pour améliorer la vitesse et la conformité. Ce qui inclut un correctif pour le [bogue Firefox 572279 <sup>(angl.)</sup>](https://bugzil.la/572279).

### SVG

- L'attribut SVG {{SVGAttr("class")}} peut maintenant être animé.
- Les interfaces SVG suivantes sont liées à des interfaces DOM représentant les listes d'objets qui sont maintenant indexables et peuvent être consultées comme des tableaux&nbsp;; en outre, ils ont une propriété `length` indiquant le nombre d'éléments dans les listes&nbsp;: {{DOMxRef("SVGLengthList")}}, {{DOMxRef("SVGNumberList")}}, `SVGPathSegList` et {{DOMxRef("SVGPointList")}}.

### HTTP

- Firefox n'envoi plus l'en-tête HTTP `Keep-Alive`, nous n'avons pas pu le formater correctement et il était redondant, car on retrouve la valeur "keep-alive" dans l'en-tête {{HTTPHeader("Connection")}} ou `Proxy-Connection`.
- Le modèle de transaction HTTP a été mis à jour pour être plus intelligent sur la réutilisation des connexions dans le pool de connexions persistantes, au lieu de traiter le pool pool comme une [file d'attente <sup>(angl.)</sup>](<https://fr.wikipedia.org/wiki/File_(structure_de_données)>), Necko tente maintenant de trier le pool avec des connexions avec la fenêtre qui a le plus de [fenêtre de congestion (CWND) <sup>(angl.)</sup>](https://fr.wikipedia.org/wiki/Algorithme_TCP#Définitions) en premier. Cela peut réduire le temps d'aller-retour (RTT) des transactions HTTP en évitant la nécessité de développer des connexions fenêtres dans de nombreux cas.
- Firefox gère désormais l'en-tête de réponse HTTP `Content-Disposition` plus efficacement si les deux paramètres `filename` et `filename*` sont fournis, il regarde à travers tous les noms fournis, en utilisant le paramètre `filename*` si il est disponible, même si un paramètre `filename` est inclus en premier. Auparavant, le premier paramètre correspondant était utilisé, ce qui empêchait l'utilisation d'un nom plus approprié. Voir [le bogue Firefox 588781 <sup>(angl.)</sup>](https://bugzil.la/588781).

### MathML

- Support des [opérateurs embellis <sup>(angl.)</sup>](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Outils pour les développeur·euse·s

- [L'objet `Console` de la Console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the_console_object) a maintenant une méthode `debug()`, qui est un alias pour la méthode `log()`, cela améliore la compatibilité avec certains sites.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions pour Firefox 5, voir [Mise à jour des modules complémentaires pour Firefox 5](/fr/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires <sup>(angl.)</sup>](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Changements dans les modules de code JavaScript

#### Nouveau module de code JavaScript

- Le module de code [`Dict.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210517202711/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Dict.jsm) a été ajouté, il fournit une API pour les dictionnaires de paires clé/valeur.

#### NetUtil.jsm

- La méthode `asyncFetch()` supporte désormais la spécification de la source en tant que `nsIInputStream`.

### Changements dans les interfaces

- L'interface `nsIHttpChannelInternal` a maintenant de nouveaux attributs donnant accès à des informations sur les points finaux des canaux des adresses et des ports. Ces informations sont fournies principalement à des fins de débogage.
- Les attributs [`width`](/fr/docs/Web/HTML/Reference/Elements/canvas#width) et [`height`](/fr/docs/Web/HTML/Reference/Elements/canvas#height) de l'élément {{HTMLElement("canvas")}} sont désormais inclus dans IDL comme des entiers non signés au lieu d'être signés (voir [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement)).
- Les interfaces `nsIAppStartup2` et `nsIAppStartup_MOZILLA_2_0` ont été fusionnées avec l'interface `nsIAppStartup`.
- L'interface `nsIDocShell_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIDocShell`.
- L'interface `nsIFocusManager_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIFocusManager`.
- L'interface `nsIHTMLEditor_MOZILLA_2_0_BRANCH` a été fusionnée avec l'interface `nsIHTMLEditor`.

#### Nouvelle interface

- Ajout de `nsIDOMAnimationEvent`. {{DOMxRef("AnimationEvent")}}

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées, car elles n'étaient plus indispensables&nbsp;:

- `nsICiter` (voir [bogue Firefox 633066 <sup>(angl.)</sup>](https://bugzil.la/633066))
- `nsIDOM3Document` (voir [bogue Firefox 639849 <sup>(angl.)</sup>](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (voir [bogue Firefox 619996 <sup>(angl.)</sup>](https://bugzil.la/619996))

### Aide au débogage

- La nouvelle aide [`DebugOnly<T>` <sup>(angl.)</sup>](https://web.archive.org/web/20160805223656/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Namespace/Mozilla) permet de déclarer des variables seulement pour les versions `DEBUG`.

### API JavaScript (SpiderMonkey)

- [`JS_DoubleToInt32()` <sup>(angl.)</sup>](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) et [`JS_DoubleToUint32()` <sup>(angl.)</sup>](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) ont été ajoutés, pour convertir des valeurs [`jsdouble` <sup>(angl.)</sup>](https://web.archive.org/web/20210512110527/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/jsdouble) en nombres entiers de type C et en entiers non-signés.

### Changement dans le système de compilation

- Vous pouvez désormais compiler Firefox sans le fichier `mozconfig`, [`l'option --enable-application` <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) paramètre par défaut à `"browser"`. Après avoir extrait ou téléchargé le code, vous pouvez tout simplement faire `configure && make` (ou `make -f client.mk`) pour compiler Firefox.
