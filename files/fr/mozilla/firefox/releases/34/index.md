---
title: Firefox 34 note de version pour les développeurs
short-title: Firefox 34
slug: Mozilla/Firefox/Releases/34
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 34 a été publié le 1er décembre 2014. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Inspecteur de stockage&nbsp;: un nouvel outil permettant de visualiser les données stockées par les pages web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Outil de performance&nbsp;: interface du profileur repensée et chronologie du taux de rafraîchissement <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Changement de cadre&nbsp;: pointer les outils de développement vers un iframe spécifique dans la page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html)
- [Prise en charge de `console.table`](/fr/docs/Web/API/console/table_static)
- [Les évènements jQuery sont visibles dans l'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html)

[Tous les bogues des outils de développement corrigés entre Firefox 33 et Firefox 34 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Notre mise en œuvre expérimentale de CSS Fonts Level 3 avance. Les nouvelles fonctionnalités ajoutées sont les suivantes&nbsp;:
  - l'algorithme de repli de {{CSSxRef("font-variant-position")}}, qui génère des variantes synthétiques pour les glyphes manquants, en fonction des mesures d'indice et d'exposant fournies par la police ([bogue Firefox 1024804 <sup>(angl.)</sup>](https://bugzil.la/1024804)).
  - La préférence `layout.css.font-features.enabled` a été supprimée, ce qui signifie que les propriétés suivantes sont désormais activées par défaut&nbsp;:
    - La version CSS Font Level 3 de {{CSSxRef("font-variant")}}, qui est désormais une propriété raccourcie.
    - Les propriétés longues {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-numeric")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-variant-east-asian")}}, {{CSSxRef("font-variant-ligatures")}} et {{CSSxRef("font-variant-alternates")}}.
    - Les propriétés {{CSSxRef("font-kerning")}} et {{CSSxRef("font-synthesis")}}
    - Les propriétés {{CSSxRef("font-feature-settings")}} et {{CSSxRef("font-language-override")}} ne sont plus préfixées. Les versions préfixées restent disponibles pendant un certain temps afin de faciliter la transition.

- La valeur `auto` a été ajoutée à {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}} avec un comportement différent de la dernière fois ([bogue Firefox 984711 <sup>(angl.)</sup>](https://bugzil.la/984711) et [bogue Firefox 1015474 <sup>(angl.)</sup>](https://bugzil.la/1015474)).
- Une implémentation expérimentale, désactivée par défaut, des valeurs fonctionnelles de filtre de la propriété {{CSSxRef("filter")}} a été mise en œuvre. Elle est contrôlée par la préférence `layout.css.filters.enabled` ([bogue Firefox 948265 <sup>(angl.)</sup>](https://bugzil.la/948265)).
- Correction du démarrage des transitions CSS qui commencent en même temps que les modifications de {{CSSxRef("display")}}, {{CSSxRef("position")}}, {{CSSxRef("overflow")}}, et des propriétés similaires ([bogue Firefox 625289 <sup>(angl.)</sup>](https://bugzil.la/625289))

### HTML

_Pas de changement._

### JavaScript

- La syntaxe ES2015 pour [les noms de propriétés calculés dans les littéraux d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#propriétés_nommées_calculées) a été ajoutée ([bogue Firefox 924688 <sup>(angl.)</sup>](https://bugzil.la/924688)).
  - Cela inclut également les noms de méthodes [accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) et [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set) ([bogue Firefox 1048384 <sup>(angl.)</sup>](https://bugzil.la/1048384)) et peut également être utilisé avec [la déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#computed_object_property_names_and_destructuring).

- La syntaxe ES2015 [raccourcie pour définir des méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) sur les objets a été ajoutée ([bogue Firefox 924672 <sup>(angl.)</sup>](https://bugzil.la/924672)).
- La méthode ES2015 `Object` {{JSxRef("Object.assign()")}} a été ajoutée ([bogue Firefox 937855 <sup>(angl.)</sup>](https://bugzil.la/937855)).
- Les [chaînes de caractères de modèles](/fr/docs/Web/JavaScript/Reference/Template_literals) ES2015 et la méthode {{JSxRef("String.raw()")}} sont maintenant prises en charge ([bogue Firefox 1038259 <sup>(angl.)</sup>](https://bugzil.la/1038259), [bogue Firefox 1039774 <sup>(angl.)</sup>](https://bugzil.la/1039774)).
- Un nouvel objet ES2015 {{JSxRef("WeakSet")}} a été ajouté ([bogue Firefox 792439 <sup>(angl.)</sup>](https://bugzil.la/792439)).
- Les [Symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ES2015 (disponibles uniquement dans le canal Nightly) ont été mis à jour pour se conformer aux récents changements de spécification ([bogue Firefox 1042602 <sup>(angl.)</sup>](https://bugzil.la/1042602)):
  - Lors de la tentative de conversion d'un symbole en nombre, une {{JSxRef("TypeError")}} est désormais levée.
  - Lors de l'utilisation de l'égalité lâche, `Object(sym) == sym` retourne désormais `true`.

- La méthode expérimentale `TypedArray.prototype.move()` (disponible uniquement dans les anciens canaux Nightly et Aurora) a été remplacée par la méthode standard ES2015 {{JSxRef("TypedArray.prototype.copyWithin()")}} désormais ajoutée ([bogue Firefox 1021379 <sup>(angl.)</sup>](https://bugzil.la/1021379)).
- En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), définir un [nom de propriété en double dans les littéraux d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names) ne déclenche plus de `SyntaxError` conformément à la spécification ES2015 ([bogue Firefox 1041128 <sup>(angl.)</sup>](https://bugzil.la/1041128)).
- Dans les expressions régulières (y compris `String.replace`), le texte correspondant à un groupe capturant est désormais `undefined` au lieu de la chaîne de caractères vide lorsque ce groupe capturant n'a pas été consulté en raison des quantificateurs qui ont empêché son exercice (voir [bogue Firefox 369778 <sup>(angl.)</sup>](https://bugzil.la/369778) et [cet exemple de code](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#notes_spécifiques_à_firefox)). Notez qu'en raison de la compatibilité Web, `RegExp.$N` retourne toujours une chaîne de caractères vide ([bogue Firefox 1053944 <sup>(angl.)</sup>](https://bugzil.la/1053944)).
- [L'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ES2015 est désormais pris en charge dans la [déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) ([bogue Firefox 933276 <sup>(angl.)</sup>](https://bugzil.la/933276)).
- L'opérateur de [destructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) utilise désormais le protocole d'itérateur au lieu du protocole de type tableau ([bogue Firefox 933276 <sup>(angl.)</sup>](https://bugzil.la/933276)).
- {{JSxRef("Proxy.revocable()")}} a été ajouté ([bogue Firefox 978279 <sup>(angl.)</sup>](https://bugzil.la/978279)).

### Interfaces/APIs/DOM

- La méthode {{DOMxRef("Element.matches()")}} a été ajoutée&nbsp;; elle fait ce que faisait la méthode non standard `mozMatchesSelector()` ([bogue Firefox 886308 <sup>(angl.)</sup>](https://bugzil.la/886308)).
- La méthode {{DOMxRef("Performance.now()")}} est désormais disponible pour les Web workers ([bogue Firefox 908390 <sup>(angl.)</sup>](https://bugzil.la/908390)).
- L'interface non standard `MozNamedAttrMap` a été renommée en {{DOMxRef("NamedNodeMap")}} standard et {{DOMxRef("Element.attributes")}} a été adapté pour l'utiliser ([bogue Firefox 1055467 <sup>(angl.)</sup>](https://bugzil.la/1055467)).
- La méthode {{DOMxRef("Path2D.addPath()")}} a été ajoutée ([bogue Firefox 985801 <sup>(angl.)</sup>](https://bugzil.la/985801)).
- L'API non standard Device Storage est désormais également activée pour les applications privilégiées installées sur Android ([bogue Firefox 886627 <sup>(angl.)</sup>](https://bugzil.la/886627)).
- L'API Web Crypto est activée par défaut ([bogue Firefox 1074001 <sup>(angl.)</sup>](https://bugzil.la/1074001)).
- La méthode {{DOMxRef("MediaStreamTrack.stop()")}} a été ajoutée ([bogue Firefox 1057955 <sup>(angl.)</sup>](https://bugzil.la/1057955)).
- Notre implémentation expérimentale de l'EME continue. La méthode `MediaKeySession.getUsableKeyIds()` a été ajoutée ([bogue Firefox 1057171 <sup>(angl.)</sup>](https://bugzil.la/1057171)).
- Concernant [WebRTC](/fr/docs/Web/API/WebRTC_API)&nbsp;:
  - une implémentation expérimentale de `RTPSender` et `RTPReceiver` fonctionnant avec {{DOMxRef("RTCPeerConnection")}} a été mise en place ([bogue Firefox 1032835 <sup>(angl.)</sup>](https://bugzil.la/1032835)).
  - le partage de fenêtre d'application a été ajouté à {{DOMxRef("Navigator.getUserMedia()")}} ([bogue Firefox 1036653 <sup>(angl.)</sup>](https://bugzil.la/1036653)) et `MediaTrackConstraintSet` prend désormais en charge `browserWindow` et `scrollWithPage`, permettant de choisir l'onglet d'une fenêtre à partager sans afficher la boîte de dialogue de sélection d'onglet ([bogue Firefox 1041700 <sup>(angl.)</sup>](https://bugzil.la/1041700)).
  - `"browser"` est désormais une valeur acceptée de MediaSourceEnum, utilisée pour définir les contraintes ([bogue Firefox 1041493 <sup>(angl.)</sup>](https://bugzil.la/1041493)).

- Pour les Web Components, le changement de cible des évènements est désormais implémenté ([bogue Firefox 887541 <sup>(angl.)</sup>](https://bugzil.la/887541)).
- L'interface {{DOMxRef("Headers")}} a été implémentée ([bogue Firefox 1029620 <sup>(angl.)</sup>](https://bugzil.la/1029620)). Elle est contrôlée par la préférence `dom.fetch.enabled` qui est définie sur `false` par défaut.
- Concernant notre implémentation expérimentale des Web Animations, l'interface {{DOMxRef("AnimationEffect")}} a été ajoutée, avec la seule propriété `AnimationEffect.name` ([bogue Firefox 1045993 <sup>(angl.)</sup>](https://bugzil.la/1045993)). Les Web Animations ne sont pas activées par défaut et sont contrôlées par la préférence `dom.animations-api.core.enabled`.
- Les méthodes de défilement fluide de CSSOM View ont été ajoutées&nbsp;: {{DOMxRef("Window.scroll()")}}, {{DOMxRef("Window.scrollTo()")}}, et {{DOMxRef("Window.scrollBy()")}} ([bogue Firefox 1022818 <sup>(angl.)</sup>](https://bugzil.la/1022818)).
- Le `MozSmsSegmentInfo` non standard n'est plus visible sur l'objet global ([bogue Firefox 916607 <sup>(angl.)</sup>](https://bugzil.la/916607)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

## Sécurité et réseau

- SSLv3 est désormais désactivé par défaut ([bogue Firefox 1030963 <sup>(angl.)</sup>](https://bugzil.la/1030963)).
- Un avertissement est envoyé à la console lorsqu'un site utilise la directive CSS `reflected-xss` ([bogue Firefox 1045902 <sup>(angl.)</sup>](https://bugzil.la/1045902)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

- localstore.rdf a été supprimé ([bogue Firefox 559505 <sup>(angl.)</sup>](https://bugzil.la/559505)).

### SDK d'extension

#### Points forts

- Nouvelle API&nbsp;: [dev/panel <sup>(angl.)</sup>](https://web.archive.org/web/20210517043357/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/Low-Level_APIs/dev_panel) permet d'étendre les outils de développement de Firefox.
- [jpm <sup>(angl.)</sup>](https://web.archive.org/web/20210221222338/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/Tools/jpm) version bêta publiée.
- `"./my-file"` introduit partout comme alias pour `require("sdk/self").data.url("my-file")`
- Ajout de la possibilité de [joindre des feuilles de style à des onglets individuels](/fr/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#manipuler_les_onglets_css).

#### Détails

[Instantanés GitHub faits entre Firefox 33 et Firefox 34 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox33...firefox34). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

[Bogues corrigés entre Firefox 33 et Firefox 34 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.
