---
title: Firefox 35 note de version pour les développeurs
short-title: Firefox 35
slug: Mozilla/Firefox/Releases/35
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 35 a été publié le 13 janvier 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changement concernant les développeur·euse·s

### Outils de développement

Points forts&nbsp;:

- [Voir les pseudo-éléments `::before` et `::after` dans l'Inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)
- [Les correspondances de source CSS sont désormais disponibles par défaut <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)
- [«&nbsp;Afficher les propriétés DOM&nbsp;» depuis l'Inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Tous les bogues des outils de développement corrigés entre Firefox 34 et Firefox 35 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- La propriété {{CSSxRef("mask-type")}} a été activée par défaut ([bogue Firefox 1058519 <sup>(angl.)</sup>](https://bugzil.la/1058519)).
- La propriété {{CSSxRef("filter")}} est maintenant activée par défaut ([bogue Firefox 1057180 <sup>(angl.)</sup>](https://bugzil.la/1057180)).
- La règle @font-face {{CSSxRef("@font-face")}} prend désormais en charge les polices WOFF2 ([bogue Firefox 1064737 <sup>(angl.)</sup>](https://bugzil.la/1064737)).
- La notation fonctionnelle {{CSSxRef("symbols", "symbols()")}} est maintenant prise en charge ([bogue Firefox 966168 <sup>(angl.)</sup>](https://bugzil.la/966168)).
- L'API CSS Font Loading a été implémentée ([bogue Firefox 1028497 <sup>(angl.)</sup>](https://bugzil.la/1028497)).
- L'utilisation de `-moz-appearance` avec la valeur `none` sur une boîte combinée supprime désormais le bouton déroulant ([bogue Firefox 649849 <sup>(angl.)</sup>](https://bugzil.la/649849)).
- L'accesseur de propriété `element.style["css-property-name"]` a été ajouté pour correspondre aux autres navigateurs ([bogue Firefox 958887 <sup>(angl.)</sup>](https://bugzil.la/958887)).

### HTML

- Les obsolètes et non conformes `bottommargin`, `leftmargin`, `rightmargin` et `topmargin` attributs de l'élément `<body>` ont été activés en mode non-quirks ([bogue Firefox 95530 <sup>(angl.)</sup>](https://bugzil.la/95530)).

### JavaScript

- La «&nbsp;[zone temporelle morte](/fr/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)&nbsp;» pour les déclarations [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) a été implémentée. Conformément à la sémantique ES2015 de `let`, les situations suivantes génèrent désormais des erreurs. Voir également cette [annonce de groupe de discussion <sup>(angl.)</sup>](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) et [bogue Firefox 1001090 <sup>(angl.)</sup>](https://bugzil.la/1001090).
  - Redéclarer des variables ou des arguments existants en utilisant `let` dans le même scope dans les corps de fonction est désormais une erreur de syntaxe.
  - Utiliser une variable déclarée avec `let` dans les corps de fonction avant que la déclaration ne soit atteinte et évaluée est désormais une erreur d'exécution.

- Les {{JSxRef("Global_Objects/Symbol", "Symbols")}} ES2015 (seulement disponibles dans le canal Nightly) ont été mis à jour pour se conformer aux récents changements de spécification&nbsp;:
  - `String(Symbol("1"))` ne génère plus de {{JSxRef("TypeError")}}&nbsp;; à la place, une chaîne de caractères (`"Symbol(1)"`) est retournée ([bogue Firefox 1058396 <sup>(angl.)</sup>](https://bugzil.la/1058396)).

- Les différents constructeurs [_TypedArray_](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#objets_typedarray) ont désormais pour `[[Prototype]]` une seule fonction, notée `%TypedArray%` dans ES2015 (mais autrement non exposée directement). Chaque prototype de tableau typé hérite désormais de `%TypedArray%.prototype`. (`%TypedArray%` et `%TypedArray%.prototype` héritent respectivement de [`Function.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) et [`Object.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object), de sorte que les constructeurs et instances de tableaux typés conservent les propriétés trouvées sur ces objets.) Les propriétés des fonctions de tableau typé résident désormais sur `%TypedArray%.prototype` et fonctionnent sur n'importe quel tableau typé. Voir [_TypedArray_](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) et [bogue Firefox 896116 <sup>(angl.)</sup>](https://bugzil.la/896116) pour plus d'informations.
- La sémantique ES2015 pour [les mutations de prototype utilisant des littéraux d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) a été implémentée ([bogue Firefox 1061853 <sup>(angl.)</sup>](https://bugzil.la/1061853)).
  - Désormais, un seul membre noté `__proto__:value` modifie le `[[Prototype]]` dans la syntaxe de littéral d'objet.
  - Les membres de méthode comme `__proto__() {}` ne remplacent plus le `[[Prototype]]`.

### Interfaces/APIs/DOM

- {{DOMxRef("WorkerNavigator.language", "navigator.language")}} et {{DOMxRef("WorkerNavigator.languages", "navigator.languages")}} sont désormais disponibles pour les workers sur {{DOMxRef("WorkerNavigator")}} ([bogue Firefox 925849 <sup>(angl.)</sup>](https://bugzil.la/925849)).
- La méthode {{DOMxRef("Element.closest()")}} retourne l'ancêtre le plus proche de l'élément actuel ([bogue Firefox 1055533 <sup>(angl.)</sup>](https://bugzil.la/1055533)).
- La prise en charge expérimentale de la propriété {{DOMxRef("CanvasRenderingContext2D.filter")}} a été ajoutée derrière le drapeau `canvas.filters.enabled` ([bogue Firefox 927892 <sup>(angl.)</sup>](https://bugzil.la/927892)).
- Notre implémentation expérimentale des animations Web progresse avec l'ajout de la propriété `Animation.target`. Cela reste toujours derrière la préférence `dom.animations-api.core.enabled`, désactivée par défaut ([bogue Firefox 1067701 <sup>(angl.)</sup>](https://bugzil.la/1067701)).
- La méthode {{DOMxRef("Element.hasAttributes", "hasAttributes()")}} a été déplacée de {{DOMxRef("Node")}} à {{DOMxRef("Element")}} comme requis par la spécification ([bogue Firefox 1055773 <sup>(angl.)</sup>](https://bugzil.la/1055773)).
- L'attribut réfléchi `crossOrigin` de {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("HTMLLinkElement")}}, {{DOMxRef("HTMLMediaElement")}}, {{DOMxRef("HTMLScriptElement")}} et {{DOMxRef("SVGScriptElement")}} n'accepte que des valeurs valides, et `""` ne l'est pas, `null` doit être utilisé à la place ([bogue Firefox 880997 <sup>(angl.)</sup>](https://bugzil.la/880997)).
- L'API Resource Timing a été activée par défaut ([bogue Firefox 1002855 <sup>(angl.)</sup>](https://bugzil.la/1002855)).
- Pour correspondre à la spécification, le premier argument de {{DOMxRef("Selection.containsNode()")}} ne peut plus être `null` ([bogue Firefox 1068058 <sup>(angl.)</sup>](https://bugzil.la/1068058)).
- La nouvelle API {{DOMxRef("ImageCapture")}} a été implémentée&nbsp;: {{DOMxRef("ImageCapture.takePhoto()")}} est disponible ([bogue Firefox 916643 <sup>(angl.)</sup>](https://bugzil.la/916643)).
- Les requêtes {{DOMxRef("XMLHttpRequest")}} non HTTP retournent désormais `200` en cas de succès (au lieu de `0` erroné) ([bogue Firefox 716491 <sup>(angl.)</sup>](https://bugzil.la/716491)).
- {{DOMxRef("XMLHttpRequest.responseURL")}} a été adapté à la dernière spécification et n'inclut pas le fragment (`'#xyz'`) de l'URL, le cas échéant ([bogue Firefox 1073882 <sup>(angl.)</sup>](https://bugzil.la/1073882)).
- La propriété interne non standard `File.mozFullPath` n'est plus visible depuis le contenu ([bogue Firefox 1048293 <sup>(angl.)</sup>](https://bugzil.la/1048293)).
- Le constructeur de {{DOMxRef("File")}} a été étendu pour correspondre à la spécification ([bogue Firefox 1047483 <sup>(angl.)</sup>](https://bugzil.la/1047483)).
- Une implémentation expérimentale de `AbortablePromise`, une promesse qui peut être annulée par une entité différente de celle qui l'a créée, a été ajoutée. Elle est préfixée par `Moz` et contrôlée par la propriété `dom.abortablepromise.enabled`, désactivée par défaut ([bogue Firefox 1035060 <sup>(angl.)</sup>](https://bugzil.la/1035060)).
- La propriété non standard `Navigator.mozIsLocallyAvailable` a été supprimée ([bogue Firefox 1066826 <sup>(angl.)</sup>](https://bugzil.la/1066826)).
- La préférence `network.websocket.enabled`, activée par défaut, a été supprimée&nbsp;; l'API [WebSocket](/fr/docs/Web/API/WebSockets_API) ne peut plus être désactivée ([bogue Firefox 1091016 <sup>(angl.)</sup>](https://bugzil.la/1091016)).
- Les méthodes et propriétés non standard de {{DOMxRef("Crypto")}} ont été supprimées ([bogue Firefox 1030963 <sup>(angl.)</sup>](https://bugzil.la/1030963)). Seules les méthodes et propriétés définies dans l'API WebCrypto standard sont conservées.
- Notre implémentation expérimentale de WebGL 2.0 progresse&nbsp;!
  - La méthode {{DOMxRef("WebGL2RenderingContext.copyBufferSubData()")}} a été implémentée ([bogue Firefox 1048668 <sup>(angl.)</sup>](https://bugzil.la/1048668)).

### MathML

- La fonction `dtls` OpenType (avec les CSS {{CSSxRef("font-feature-settings")}} sur la feuille de styles par défaut) est maintenant appliquée automatiquement aux éléments MathML lors du positionnement des scripts au-dessus (par exemple, i sans point avec chapeau mathématique).

### SVG

_Pas de changement._

### Audio/Vidéo

_Pas de changement._

## Réseau & Sécurité

- Le HTTP/2 a été implémenté et activé, avec uniquement des chiffrements AEAD ([bogue Firefox 1027720 <sup>(angl.)</sup>](https://bugzil.la/1027720) et [bogue Firefox 1047594 <sup>(angl.)</sup>](https://bugzil.la/1047594)).
- L'en-tête HTTP/2 `alt-svc` est maintenant pris en charge ([bogue Firefox 1003448 <sup>(angl.)</sup>](https://bugzil.la/1003448)).
- L'extension Public Key Pinning pour HTTP (HPKP) a été implémentée ([bogue Firefox 787133 <sup>(angl.)</sup>](https://bugzil.la/787133)).
- La directive `base-uri` de la CSP 1.1 est maintenant prise en charge ([bogue Firefox 1045897 <sup>(angl.)</sup>](https://bugzil.la/1045897)).
- Le chemin de la source est maintenant également pris en compte lors de la correspondance des sources hôtes dans la CSP ([bogue Firefox 808292 <sup>(angl.)</sup>](https://bugzil.la/808292)).

## Changements pour les développeur·euse·s Mozilla et d'extensions

### XUL & Modules

- La méthode privée `_getTabForBrowser()` sur l'élément `<xul:tabbrowser>` a été remplacée. À la place, nous avons ajouté une nouvelle méthode publique appelée `getTabForBrowser`. Elle retourne assez prévisiblement l'élément `<xul:tab>` qui contient le spécifique `<xul:browser>`.
- `Components.utils.now()`, correspondant à {{DOMxRef("Performance.now()")}} a été implémenté pour les codes Chrome sans fenêtre ouverte ([bogue Firefox 969490 <sup>(angl.)</sup>](https://bugzil.la/969490)).

### SDK d'extension

#### Points forts

- Ajout des clés d'accès pour le menu contextuel.
- Suppression de `isPrivateBrowsing` de `BrowserWindow`.
- Ajout de la méthode `toJSON` aux instances de `URL`.

#### Détails

[Instantanés GitHub faits entre Firefox 34 et Firefox 35](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

[Bugs corrigés entre Firefox 34 et Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.
