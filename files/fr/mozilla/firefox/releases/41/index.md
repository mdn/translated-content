---
title: Firefox 41 note de version pour les développeurs
short-title: Firefox 41
slug: Mozilla/Firefox/Releases/41
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Pour tester les dernières fonctionnalités pour les développeur·euse·s de Firefox, installez Firefox Developer Edition <sup>(angl.)</sup>](https://www.firefox.com/en-US/channel/desktop/developer/)
Firefox 41 a été publié le 22 septembre 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Faire une capture d'écran d'un nœud DOM <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Copier au format HAR/enregistrer au format HAR <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copysave-all-as-har)
- [Bouton «&nbsp;Ajouter une règle&nbsp;» dans la vue Règles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#add-rules)
- [Afficher le code source dans un onglet <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (Désactivé par défaut)
- [Plus d'options pour copier les règles CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#copy-rules)
- [Copier l'image en tant qu'URL de données dans la vue Règles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/view_background_images/index.html)
- Ajout d'une commande à _GCLI_ pour afficher les informations CSP.

[Tous les bogues des outils de développement corrigés entre Firefox 40 et Firefox 41 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-06-29&query_format=advanced&chfield=resolution&chfieldfrom=2015-05-11&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503)&nbsp;: notez que bon nombre de ces bogues, en particulier ceux liés aux outils de performance, ont été reportés vers Firefox 40.

### CSS

- La prise en charge de la mise en page des scripts verticaux a été activée par défaut ([bogue Firefox 1138384 <sup>(angl.)</sup>](https://bugzil.la/1138384)). Cela signifie que les propriétés CSS suivantes sont désormais disponibles&nbsp;:
  - Choisir la direction de l'écriture&nbsp;: {{CSSxRef("writing-mode")}}.
  - Contrôler l'orientation des caractères&nbsp;: {{CSSxRef("text-orientation")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("width")}} et {{CSSxRef("height")}}&nbsp;: {{CSSxRef("block-size")}} et {{CSSxRef("inline-size")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}}&nbsp;: {{CSSxRef("min-block-size")}} et {{CSSxRef("min-inline-size")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}&nbsp;: {{CSSxRef("max-block-size")}} et {{CSSxRef("max-block-size")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}&nbsp;: {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}&nbsp;: {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} et {{CSSxRef("border-left")}} et ces versions longues pour la largeur, le style et la couleur&nbsp;: {{CSSxRef("border-block-start")}}, {{CSSxRef("border-block-start-width")}}, {{CSSxRef("border-block-start-style")}}, {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end")}}, {{CSSxRef("border-block-end-width")}}, {{CSSxRef("border-block-end-style")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start")}}, {{CSSxRef("border-inline-start-width")}}, {{CSSxRef("border-inline-start-style")}}, {{CSSxRef("border-inline-start-color")}}, {{CSSxRef("border-inline-end")}}, {{CSSxRef("border-inline-end-width")}}, {{CSSxRef("border-inline-end-style")}} et {{CSSxRef("border-inline-end-color")}}.
  - Équivalents indépendants de la direction de {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}&nbsp;: `offset-block-start`, `offset-block-end`, `offset-inline-start` et `offset-inline-end`.

- Prise en charge de la propriété {{CSSxRef("transform-origin")}} dans SVG et mise en œuvre de la propriété {{CSSxRef("transform-box")}} ([bogue Firefox 923193 <sup>(angl.)</sup>](https://bugzil.la/923193)).

### HTML

- {{HTMLElement("a")}} sans attribut `href` n'est plus classé comme contenu interactif. Cliquer dessus à l'intérieur de {{HTMLElement("label")}} active le contenu étiqueté ([bogue Firefox 1167816 <sup>(angl.)</sup>](https://bugzil.la/1167816)).
- Les icônes SVG sont désormais prises en charge pour les icônes de site, c'est-à-dire les favicons et les icônes de raccourci ([bogue Firefox 366324 <sup>(angl.)</sup>](https://bugzil.la/366324)).
- L'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/link#crossorigin) est désormais pris en charge pour [`<link rel='preconnect'>`](/fr/docs/Web/HTML/Reference/Elements/link) ([bogue Firefox 1174152 <sup>(angl.)</sup>](https://bugzil.la/1174152)).
- L'élément `<picture>` ne réagit pas aux changements de taille/zone d'affichage ([bogue Firefox 1135812 <sup>(angl.)</sup>](https://bugzil.la/1135812)).

### JavaScript

- `Date.prototype` est désormais un objet ordinaire, et non plus une instance de {{JSxRef("Date")}} ([bogue Firefox 861219 <sup>(angl.)</sup>](https://bugzil.la/861219)).
- {{JSxRef("Date.prototype.toString")}} est désormais une méthode générique ([bogue Firefox 861219 <sup>(angl.)</sup>](https://bugzil.la/861219)).
- {{JSxRef("Symbol.species")}} a été ajouté ([bogue Firefox 1131043 <sup>(angl.)</sup>](https://bugzil.la/1131043)).
- Les accesseurs [`Map[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species) et [`Set[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species) ont été ajoutés ([bogue Firefox 1131043 <sup>(angl.)</sup>](https://bugzil.la/1131043)).
- La prise en charge des [expressions `let`](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#expressions_2) non standard a été supprimée ([bogue Firefox 1023609 <sup>(angl.)</sup>](https://bugzil.la/1023609)).
- Les {{JSxRef("Functions/Default_parameters#paramètre_par_défaut_et_décomposition_des_paramètres", "paramètres déstructurés avec affectation de valeur par défaut", "", 1)}} sont désormais pris en charge ([bogue Firefox 1018628 <sup>(angl.)</sup>](https://bugzil.la/1018628)).
- Conformément à ES2015, les accolades sont désormais requises pour les [définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions). La syntaxe sans elles échoue dorénavant ([bogue Firefox 1150855 <sup>(angl.)</sup>](https://bugzil.la/1150855)).
- Les [définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) (sauf pour les méthodes génératrices) ne sont plus constructibles ([bogue Firefox 1059908 <sup>(angl.)</sup>](https://bugzil.la/1059908) et [bogue Firefox 1166950 <sup>(angl.)</sup>](https://bugzil.la/1166950)).
- Dans le cadre de la conformité à la spécification ES2015, les modèles de [destructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) entre parenthèses, comme `([a, b]) = [1, 2]` ou `({a, b}) = { a: 1, b: 2 }`, sont désormais considérés comme invalides et déclenchent une {{JSxRef("SyntaxError")}}. Voir [le billet de blog de Jeff Walden <sup>(angl.)</sup>](https://whereswalden.com/2015/06/20/new-changes-to-make-spidermonkeys-and-firefoxs-parsing-of-destructuring-patterns-more-spec-compliant/) pour plus de détails.
- La syntaxe [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target) a été ajoutée ([bogue Firefox 1141865 <sup>(angl.)</sup>](https://bugzil.la/1141865)).

### Interfaces/APIs/DOM

#### L'API HTML Editing

- La gestion des commandes couper, copier et coller a été repensée et permet désormais la copie et la coupe programmatiques depuis JS pour le contenu Web&nbsp;:
  - Avec la commande `'paste'` comme argument, {{DOMxRef("Document.queryCommandSupported()")}} retourne désormais `false` si les privilèges sont insuffisants pour effectuer réellement l'action ([bogue Firefox 1161721 <sup>(angl.)</sup>](https://bugzil.la/1161721)).
  - Avec la commande `'cut'` ou `'copy'` comme argument, {{DOMxRef("Document.queryCommandSupported()")}} retourne désormais `true` si elle est appelée dans le contexte d'un code initié par l'utilisateur·ice ou privilégié ([bogue Firefox 1162952 <sup>(angl.)</sup>](https://bugzil.la/1162952)).
  - Avec la commande `'cut'` ou `'copy'` comme argument, {{DOMxRef("Document.execCommand()")}} fonctionne désormais, mais uniquement dans le contexte d'un code initié par l'utilisateur·ice ou privilégié ([bogue Firefox 1012662 <sup>(angl.)</sup>](https://bugzil.la/1012662)).
  - Au lieu de lever une exception, {{DOMxRef("Document.execCommand()")}} lorsque la commande n'est pas prise en charge ou activée ([bogue Firefox 1027560 <sup>(angl.)</sup>](https://bugzil.la/1027560)).

#### Évènements

- La méthode non standard `initCloseEvent()` de l'évènement {{DOMxRef("CloseEvent")}} et la possibilité de créer un {{DOMxRef("CloseEvent")}} en utilisant la méthode {{DOMxRef("Document/createEvent", "document.createEvent('CloseEvent')")}} ont été supprimées&nbsp;; utilisez le constructeur standard, {{DOMxRef("CloseEvent.CloseEvent", "CloseEvent()")}} à la place ([bogue Firefox 1161950 <sup>(angl.)</sup>](https://bugzil.la/1161950)).
- Sur Desktop, {{DOMxRef("PointerEvent")}} est désormais activé par défaut dans Nightly&nbsp;; il n'est pas activé dans Developer Edition, Beta ou Release et ne l'est pas pour au moins certaines versions ([bogue Firefox 1166347 <sup>(angl.)</sup>](https://bugzil.la/1166347)).
- La version non préfixée de {{DOMxRef("MouseEvent.movementX")}} et {{DOMxRef("MouseEvent.movementY")}} a été ajoutée&nbsp;; les versions préfixées sont obsolètes et sont supprimées à un moment donné dans le futur ([bogue Firefox 1164981 <sup>(angl.)</sup>](https://bugzil.la/1164981)).

#### Web Crypto

- {{DOMxRef("SubtleCrypto.importKey()")}} et {{DOMxRef("SubtleCrypto.exportKey()")}} prennent désormais en charge les clés `ECDH` ([bogue Firefox 1050175 <sup>(angl.)</sup>](https://bugzil.la/1050175)).

#### Canvas API

- {{DOMxRef("HTMLCanvasElement.captureStream()")}} et `CanvasCaptureMediaStream` ont été ajoutés et permettent de diffuser l'affichage d'un {{HTMLElement("canvas")}} en temps réel ([bogue Firefox 1032848 <sup>(angl.)</sup>](https://bugzil.la/1032848)).
- {{DOMxRef("MediaStream.id")}} retourne désormais l'identifiant unique d'un flux ([bogue Firefox 1089798 <sup>(angl.)</sup>](https://bugzil.la/1089798)).
- La valeur initiale de {{DOMxRef("CanvasRenderingContext2D.filter")}} est désormais correctement définie sur `none` ([bogue Firefox 1163124 <sup>(angl.)</sup>](https://bugzil.la/1163124)).

#### Service Workers

- Amélioration de notre implémentation expérimentale de [Service Worker](/fr/docs/Web/API/Service_Worker_API)&nbsp;:
  - {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} a été implémenté ([bogue Firefox 1131352 <sup>(angl.)</sup>](https://bugzil.la/1131352)).
  - {{DOMxRef("Clients.claim()")}} a été ajouté ([bogue Firefox 1130684 <sup>(angl.)</sup>](https://bugzil.la/1130684)).
  - Les autres évènements fonctionnels des Service Workers ont été rendus héritables de {{DOMxRef("ExtendableEvent")}}, leur donnant accès à la méthode {{DOMxRef("ExtendableEvent.waitUntil","waitUntil()")}} ([bogue Firefox 1160527 <sup>(angl.)</sup>](https://bugzil.la/1160527)).

- Les interfaces {{DOMxRef("CacheStorage")}} et {{DOMxRef("Cache")}} sont désormais prises en charge ([bogue Firefox 1110144 <sup>(angl.)</sup>](https://bugzil.la/1110144)).

#### WebGL

- L'attribut de contexte WebGL `failIfMajorPerformanceCaveat` a été ajouté et peut être défini lors de la création d'un contexte WebGL avec {{DOMxRef("HTMLCanvasElement.getContext()")}} pour indiquer si la création d'un contexte doit échouer si les performances du système sont faibles ([bogue Firefox 1164970 <sup>(angl.)</sup>](https://bugzil.la/1164970)).

#### WebRTC

- Firefox ne propose plus de serveur STUN par défaut à utiliser si aucun n'est défini lors de la construction d'une nouvelle {{DOMxRef("RTCPeerConnection")}}. Vous devez en fournir un pour établir avec succès une connexion WebRTC.

#### Divers

- Sur OS X et Windows, {{DOMxRef("Navigator.onLine")}} change désormais en fonction de la connectivité réseau (il renvoyait toujours `true`, sauf si le mode "Travailler hors ligne" était sélectionné) auparavant ([bogue Firefox 654579 <sup>(angl.)</sup>](https://bugzil.la/654579)).
- {{DOMxRef("MessagePort")}} et {{DOMxRef("MessageChannel")}} sont désormais disponibles dans les [Web workers](/fr/docs/Web/API/Web_Workers_API), et sont activés par défaut dans tous les contextes ([bogue Firefox 952139 <sup>(angl.)</sup>](https://bugzil.la/952139)) et ([bogue Firefox 911972 <sup>(angl.)</sup>](https://bugzil.la/911972)).
- L'API User Timing est désormais disponible dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 1155761 <sup>(angl.)</sup>](https://bugzil.la/1155761)).
- [L'API Notifications](/fr/docs/Web/API/Notifications_API) est désormais disponible dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 916893 <sup>(angl.)</sup>](https://bugzil.la/916893)).
- `DOMRequest` et `DOMCursor` sont désormais disponibles dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 1167650 <sup>(angl.)</sup>](https://bugzil.la/1167650)).
- [L'API CSS Font Loading](/fr/docs/Web/API/CSS_Font_Loading_API) a été complètement implémentée et est désormais activée par défaut ([bogue Firefox 1149381 <sup>(angl.)</sup>](https://bugzil.la/1149381)).
- Les shared workers ne peuvent plus être partagés entre des documents privés (c'est-à-dire naviguant dans une fenêtre privée) et non privés (voir [bogue Firefox 1177621 <sup>(angl.)</sup>](https://bugzil.la/1177621)).
- La propriété {{DOMxRef("URL.searchParams")}} est désormais en lecture seule ([bogue Firefox 1174731 <sup>(angl.)</sup>](https://bugzil.la/1174731)).
- La propriété {{DOMxRef('HTMLAnchorElement.hash')}} ne décode plus le fragment URL ([bogue Firefox 1093611 <sup>(angl.)</sup>](https://bugzil.la/1093611)).

### MathML

#### Nouvelle gestion des polices par défaut et de secours

Les formules mathématiques nécessitent des polices spéciales. Jusqu'à présent, ces polices étaient codées en dur dans la feuille de style de l'agent utilisateur `mathml.css` (qui définit la famille de polices sur la balise {{MathMLElement("math")}}) et dans l'option de préférence `font.mathfont-family` (qui définit les polices de secours à utiliser pour les opérateurs extensibles et grands). Firefox 41 introduit un langage interne `x-math` qui est automatiquement défini sur la balise `<math>` ainsi que les options de préférence correspondantes (par exemple, `font.name.serif.x-math`). La feuille de style de l'agent utilisateur définit désormais la famille de polices sur serif pour la balise `<math>` et l'option de préférence `font.mathfont-family` est remplacée par `font.name.serif.x-math`. Toutes les plateformes utilisent désormais essentiellement la même liste de polices de secours, avec "Latin Modern Math" comme première. Les polices par défaut/de secours peuvent être configurées à partir du menu de préférences de polices par langue standard. Pour plus de détails, voir [bogue Firefox 947654 <sup>(angl.)</sup>](https://bugzil.la/947654) et [bogue Firefox 1160456 <sup>(angl.)</sup>](https://bugzil.la/1160456).

### SVG

- Les icônes de site (favicons, icônes de raccourci) prennent désormais en charge le format SVG ([bogue Firefox 366324 <sup>(angl.)</sup>](https://bugzil.la/366324)).

### Audio/Vidéo

- La préférence `media.autoplay.enabled` s'applique désormais également aux invocations non fiables de {{DOMxRef("HTMLMediaElement.play()")}}, c'est-à-dire aux appels provenant de scripts non activés par l'utilisateur·ice ([bogue Firefox 659285 <sup>(angl.)</sup>](https://bugzil.la/659285)).

## Réseau

- L'en-tête `X-Content-Duration` n'est plus pris en charge ([bogue Firefox 1160695 <sup>(angl.)</sup>](https://bugzil.la/1160695)).
- Les versions brouillon du protocole HTTP/2 ne sont plus prises en charge ([bogue Firefox 1132357 <sup>(angl.)</sup>](https://bugzil.la/1132357)).

## Sécurité

- La [directive](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) [CSP](/fr/docs/Web/HTTP/Guides/CSP) 1.1 `manifest-src` est désormais prise en charge ([bogue Firefox 1089255 <sup>(angl.)</sup>](https://bugzil.la/1089255)).
- Les versions précédentes de Firefox s'attendaient incorrectement à ce que la valeur de la directive de référent [Content Security Policy](/fr/docs/Web/HTTP/Guides/CSP) `origin-when-cross-origin` soit orthographiée `origin-when-crossorigin`. Cela a été corrigé pour inclure le tiret manquant.

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### XUL

_Pas de changement._

### Modules de code JavaScript

_Pas de changement._

### XPCOM

### Interfaces

_Pas de changement._

### Autres

- Une nouvelle API interne, uniquement disponible dans le contexte chrome, permet de rendre le composant racine d'une fenêtre dans un {{HTMLElement("canvas")}}&nbsp;: `CanvasRenderingContext2D.drawWidgetAsOnScreen()`. Cette API utilise le système d'exploitation pour capturer le widget à l'écran. Pour plus de détails, voir [bogue Firefox 1167477 <sup>(angl.)</sup>](https://bugzil.la/1167477).
