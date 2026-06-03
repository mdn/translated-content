---
title: Firefox 38 note de version pour les développeurs
short-title: Firefox 38
slug: Mozilla/Firefox/Releases/38
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Firefox 38 a été publié le 12 mai 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Contourner les nœuds audio dans l'éditeur Web Audio <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- [Commande «&nbsp;copy&nbsp;» dans la console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [Mettre en évidence et filtrer les XmlHttpRequests dans la console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [Voir les variables optimisées dans le débogueur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [Voir les avertissements de sécurité dans le moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Voir les tailles transférées dans le moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Lire/mettre en pause toutes les animations de la page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[Tous les bogues des outils de développement corrigés entre Firefox 37 et Firefox 38 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- La prise en charge pour {{CSSxRef("ruby-position")}} et {{CSSxRef("ruby-align")}} a été ajoutée et est disponible par défaut ([bogue Firefox 1055676 <sup>(angl.)</sup>](https://bugzil.la/1055676), [bogue Firefox 1123917 <sup>(angl.)</sup>](https://bugzil.la/1123917) et [bogue Firefox 1039006 <sup>(angl.)</sup>](https://bugzil.la/1039006)).
- La pseudo-classe `:unresolved` a été implémentée pour les éléments personnalisés ([bogue Firefox 1111633 <sup>(angl.)</sup>](https://bugzil.la/1111633)).
- Le style prédéfini {{CSSxRef("list-style-type", "ethiopic-numeric")}} utilise désormais un espace, au lieu d'un point, comme suffixe pour correspondre à un changement récent de la spécification ([bogue Firefox 1120721 <sup>(angl.)</sup>](https://bugzil.la/1120721)).
- Les transitions CSS sur le contenu généré (avec {{CSSxRef("::before")}} et {{CSSxRef("::after")}}) sur à la fois un élément en ligne et le bloc qui les sépare commencent désormais comme prévu par la spécification ([bogue Firefox 1110277 <sup>(angl.)</sup>](https://bugzil.la/1110277)).
- La mise en œuvre des propriétés logiques CSS a fait de grands progrès. Les propriétés suivantes sont disponibles derrière le drapeau `layout.css.vertical-text.enabled` (`false` par défaut):
  - Équivalents indépendants de la direction de {{CSSxRef("width")}} et {{CSSxRef("height")}}&nbsp;: {{CSSxRef("block-size")}} et {{CSSxRef("inline-size")}} ([bogue Firefox 1117983 <sup>(angl.)</sup>](https://bugzil.la/1117983)).
  - Équivalents indépendants de la direction de {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}}&nbsp;: {{CSSxRef("min-block-size")}} et {{CSSxRef("min-inline-size")}} ([bogue Firefox 1117983 <sup>(angl.)</sup>](https://bugzil.la/1117983)).
  - Équivalents indépendants de la direction de {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}&nbsp;: {{CSSxRef("max-block-size")}} et {{CSSxRef("max-block-size")}} ([bogue Firefox 1117983 <sup>(angl.)</sup>](https://bugzil.la/1117983)).
  - Équivalents indépendants de la direction de {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}&nbsp;: {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}} ([bogue Firefox 649142 <sup>(angl.)</sup>](https://bugzil.la/649142)).
  - Équivalents indépendants de la direction de {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}&nbsp;: {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}} ([bogue Firefox 649142 <sup>(angl.)</sup>](https://bugzil.la/649142)).
  - Équivalents indépendants de la direction de {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} et {{CSSxRef("border-left")}} et leur versions longues pour la largeur, le style et la couleur&nbsp;: {{CSSxRef("border-block-start")}}, {{CSSxRef("border-block-start-width")}}, {{CSSxRef("border-block-start-style")}}, {{CSSxRef("border-block-start-color")}}, {{CSSxRef("border-block-end")}}, {{CSSxRef("border-block-end-width")}}, {{CSSxRef("border-block-end-style")}}, {{CSSxRef("border-block-end-color")}}, {{CSSxRef("border-inline-start")}}, {{CSSxRef("border-inline-start-width")}}, {{CSSxRef("border-inline-start-style")}}, {{CSSxRef("border-inline-start-color")}}, {{CSSxRef("border-inline-end")}}, {{CSSxRef("border-inline-end-width")}}, {{CSSxRef("border-inline-end-style")}} et {{CSSxRef("border-inline-end-color")}} ([bogue Firefox 649142 <sup>(angl.)</sup>](https://bugzil.la/649142)).
  - Équivalents indépendants de la direction de {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}&nbsp;: {{CSSxRef("inset-block-start")}}, `offset-block-end`, `offset-inline-start` et `offset-inline-end` ([bogue Firefox 1120283 <sup>(angl.)</sup>](https://bugzil.la/1120283)).

- La façon dont les [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using) commencent a été modifiée pour correspondre à un changement récent des spécifications, visant à avoir un comportement interopérable entre les navigateurs ([bogue Firefox 960465 <sup>(angl.)</sup>](https://bugzil.la/960465)).

### HTML

- L'élément {{HTMLElement("label")}} ne déclenche plus d'évènements vers l'élément cible de l'étiquette si du contenu interactif est trouvé entre l'élément cible de l'évènement et l'étiquette ([bogue Firefox 229925 <sup>(angl.)</sup>](https://bugzil.la/229925)).
- L'élément {{HTMLElement("picture")}} a été activé par défaut ([bogue Firefox 1017875 <sup>(angl.)</sup>](https://bugzil.la/1017875)).
- Le `<meta name="referrer">` est pris en charge pour les navigations depuis le menu contextuel ou avec un clic du milieu ([bogue Firefox 1113431 <sup>(angl.)</sup>](https://bugzil.la/1113431)).

### JavaScript

- {{JSxRef("Generator.return", "Generator.prototype.return()")}} est ajouté ([bogue Firefox 1115868 <sup>(angl.)</sup>](https://bugzil.la/1115868)).
- {{JSxRef("Functions.set", "Setter")}} avec un {{JSxRef("Functions.rest_parameters", "paramètre rest", "", 1)}} est désormais une {{JSxRef("SyntaxError")}} ([bogue Firefox 1089632 <sup>(angl.)</sup>](https://bugzil.la/1089632)).
- La propriété {{JSxRef("Function.name", "name")}} des fonctions est désormais configurable ([bogue Firefox 1084019 <sup>(angl.)</sup>](https://bugzil.la/1084019)).
- Plusieurs méthodes {{JSxRef("Array")}} ont également été ajoutées pour les [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)&nbsp;:
  - Les méthodes {{JSxRef("TypedArray.of", "of()")}} et {{JSxRef("TypedArray.from", "from()")}} ([bogue Firefox 896608 <sup>(angl.)</sup>](https://bugzil.la/896608)).
  - La méthode {{JSxRef("TypedArray.forEach", "forEach()")}} ([bogue Firefox 1107645 <sup>(angl.)</sup>](https://bugzil.la/1107645)).
  - Les méthodes {{JSxRef("TypedArray.filter", "filter()")}} et {{JSxRef("TypedArray.map", "map()")}} ([bogue Firefox 1121936 <sup>(angl.)</sup>](https://bugzil.la/1121936)).
  - La méthode {{JSxRef("TypedArray.slice", "slice()")}} ([bogue Firefox 1121935 <sup>(angl.)</sup>](https://bugzil.la/1121935)).

- Le nom de paramètre dupliqué n'est plus autorisé lorsqu'un paramètre rest est présent ([bogue Firefox 1096376 <sup>(angl.)</sup>](https://bugzil.la/1096376)).
- Le nom de paramètre dupliqué n'est plus autorisé dans les fonctions fléchées ([bogue Firefox 1096377 <sup>(angl.)</sup>](https://bugzil.la/1096377)).
- Le nom de paramètre dupliqué n'est plus autorisé dans les définitions de méthodes concises ([bogue Firefox 1096378 <sup>(angl.)</sup>](https://bugzil.la/1096378)).
- Un avertissement est affiché lorsque le constructeur {{JSxRef("Map")}}/{{JSxRef("Set")}}/{{JSxRef("WeakMap")}} est appelé sans {{JSxRef("new")}} ([bogue Firefox 1108930 <sup>(angl.)</sup>](https://bugzil.la/1108930)).
- Les méthodes {{JSxRef("WeakMap.get", "get")}}, {{JSxRef("WeakMap.has", "has")}} et {{JSxRef("WeakMap.delete", "delete")}} des objets {{JSxRef("WeakMap")}} ne lèvent plus d'exception lorsque le paramètre `key` n'est pas un objet ([bogue Firefox 1127827 <sup>(angl.)</sup>](https://bugzil.la/1127827)).
- Le second paramètre optionnel et non standard `fallback` pour {{JSxRef("WeakMap.prototype.get()")}} a été supprimé ([bogue Firefox 1127827 <sup>(angl.)</sup>](https://bugzil.la/1127827)).
- Lors de la définition d'une [méthode génératrice](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions), `set` et `get` ne sont plus des noms invalides ([bogue Firefox 1073809 <sup>(angl.)</sup>](https://bugzil.la/1073809)).
- {{JSxRef("RegExp.prototype.source")}} retourne désormais «&nbsp;(?:)&nbsp;» au lieu d'une chaîne de caractères vide pour les expressions régulières vides ([bogue Firefox 1130798 <sup>(angl.)</sup>](https://bugzil.la/1130798)).
- {{JSxRef("RegExp.prototype.source")}} et {{JSxRef("RegExp.prototype.toString()")}} échappent désormais correctement les motifs d'expressions régulières (par exemple, les terminaisons de ligne, «&nbsp;\n&nbsp;») ([bogue Firefox 1130860 <sup>(angl.)</sup>](https://bugzil.la/1130860)).
- Les propriétés {{JSxRef("Regexp.global", "global")}}, {{JSxRef("Regexp.ignoreCase", "ignoreCase")}}, {{JSxRef("Regexp.multiline", "multiline")}} et {{JSxRef("Regexp.sticky", "sticky")}} sont désormais des propriétés d'accès prototype plutôt que des propriétés de données propres aux instances de `RegExp` ([bogue Firefox 1120169 <sup>(angl.)</sup>](https://bugzil.la/1120169)).
- La propriété {{JSxRef("RegExp.prototype.source")}} est désormais une propriété d'accès prototype plutôt qu'une propriété de données propre aux instances de `RegExp` ([bogue Firefox 1120169 <sup>(angl.)</sup>](https://bugzil.la/1120169)). Disponible uniquement dans la version non finale, en raison du [bogue Firefox 1150297](https://bugzil.la/1150297).
- {{JSxRef("Function.prototype.toString()")}} lève désormais une exception pour les objets {{JSxRef("Proxy")}} ([bogue Firefox 1100936 <sup>(angl.)</sup>](https://bugzil.la/1100936)).

### Interfaces/APIs/DOM

- La méthode de l'API Fetch {{DOMxRef("Window/fetch", "fetch()")}} a été ajoutée ([bogue Firefox 1039846 <sup>(angl.)</sup>](https://bugzil.la/1039846)).
- L'API {{DOMxRef("BroadcastChannel")}} a été implémentée et est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 966439 <sup>(angl.)</sup>](https://bugzil.la/966439) et [bogue Firefox 1121420 <sup>(angl.)</sup>](https://bugzil.la/1121420)).
- L'API Console est désormais disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).
- `CanvasRenderingContext2D.clearHitRegions()` a été implémentée ([bogue Firefox 1119527 <sup>(angl.)</sup>](https://bugzil.la/1119527)).
- Les constantes de {{DOMxRef("KeyboardEvent.location")}}, `DOM_KEY_LOCATION_MOBILE` et `DOM_KEY_LOCATION_JOYSTICK`, ont été supprimées, car elles ont été retirées de la spécification DOM Level 3 ([bogue Firefox 936313 <sup>(angl.)</sup>](https://bugzil.la/936313)).
- {{DOMxRef("KeyboardEvent.code")}} est désormais disponible&nbsp;; auparavant, elle n'était disponible que dans les versions préliminaires. ([bogue Firefox 1126673 <sup>(angl.)</sup>](https://bugzil.la/1126673))
- {{DOMxRef("KeyboardEvent.code")}} prend désormais en charge les touches spéciales des claviers Sun sous Linux, Android et Firefox OS. ([bogue Firefox 1020139 <sup>(angl.)</sup>](https://bugzil.la/1020139))
- Le constructeur {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}} a été modifié pour correspondre à la spécification&nbsp;: lorsqu'un paramètre invalide est passé, une {{DOMxRef("DOMException")}} `RangeError` est désormais levée, plutôt qu'une {{JSxRef("TypeError")}} erronée ([bogue Firefox 1125766 <sup>(angl.)</sup>](https://bugzil.la/1125766)).
- L'API User Timing, ajoutant {{DOMxRef("Performance.mark()")}}, {{DOMxRef("Performance.clearMarks()")}}, {{DOMxRef("Performance.measure()")}} et {{DOMxRef("Performance.clearMeasures()")}}, a été implémentée ([bogue Firefox 782751 <sup>(angl.)</sup>](https://bugzil.la/782751)).
- La version préfixée de {{DOMxRef("Window.indexedDB")}}, `mozIndexedDB`, a été supprimée ([bogue Firefox 975699 <sup>(angl.)</sup>](https://bugzil.la/975699)).
- L'évènement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}} n'est plus annulable ([bogue Firefox 1134559 <sup>(angl.)</sup>](https://bugzil.la/1134559)).
- Vous pouvez désormais utiliser les [WebSockets](/fr/docs/Web/API/WebSockets_API) dans les [Workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 504553 <sup>(angl.)</sup>](https://bugzil.la/504553)).
- Les propriétés {{DOMxRef("XMLHttpRequest.responseType")}} et {{DOMxRef("XMLHttpRequest.withCredentials")}} peuvent désormais être définies avant d'appeler {{DOMxRef("XMLHttpRequest.open()")}} ([bogue Firefox 707484 <sup>(angl.)</sup>](https://bugzil.la/707484)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Vidéo

_Pas de changement._

## Réseau

_Pas de changement._

## Sécurité

- Dans Firefox, l'attribut [`autocomplete=false`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) est désormais ignoré lorsqu'il s'agit d'un formulaire de connexion ([bogue Firefox 1025703 <sup>(angl.)</sup>](https://bugzil.la/1025703)). Cela vise à encourager l'utilisation de mots de passe plus sécurisés en permettant aux outils de gestion de mots de passe de fonctionner de manière plus fiable.
- RC4 est désormais désactivé lors de l'utilisation de TLS, sauf pour quelques sites Web spécifiquement autorisés. Cette liste blanche est une mesure provisoire jusqu'à ce que ces sites soient corrigés ([bogue Firefox 1124039 <sup>(angl.)</sup>](https://bugzil.la/1124039)). Ce repli est contrôlé par la préférence `security.tls.unrestricted_rc4_fallback`, `true` par défaut pour le moment ([bogue Firefox 1138882 <sup>(angl.)</sup>](https://bugzil.la/1138882)).
- Les sites Web nécessitant un retour à une version non sécurisée de TLS pour fonctionner sont désormais dans une liste blanche codée en dur qui diminue avec le temps ([bogue Firefox 1114816 <sup>(angl.)</sup>](https://bugzil.la/1114816)). La liste blanche peut être désactivée en définissant `security.tls.insecure_fallback_hosts.use_static_list` sur `false`.

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### SDK d'extension

#### Points forts

- `sdk/context-menu@2` a été ajouté ([bogue Firefox 1070952 <sup>(angl.)</sup>](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` a été ajouté ([bogue Firefox 1075541 <sup>(angl.)</sup>](https://bugzil.la/1075541)).
- `sdk/windows/loader` a été supprimé ([bogue Firefox 970135 <sup>(angl.)</sup>](https://bugzil.la/970135)).
- Correction de la détection de la langue par défaut sur Linux ([bogue Firefox 1114712 <sup>(angl.)</sup>](https://bugzil.la/1114712)).
- `toolkit/loader` dispose désormais d'une vérification de compatibilité des modules sur option, activée pour toutes les extensions jpm ([bogue Firefox 1037235 <sup>(angl.)</sup>](https://bugzil.la/1037235)).

#### Mises à jour d'Electrolysis (E10s)

- `sdk/page-worker` mises à jour e10s ([bogue Firefox 1116004 <sup>(angl.)</sup>](https://bugzil.la/1116004)).
- `sdk/content/worker` mises à jour e10s ([bogue Firefox 1116544 <sup>(angl.)</sup>](https://bugzil.la/1116544)).
- `sdk/tabs` mises à jour e10s ([bogue Firefox 1033838 <sup>(angl.)</sup>](https://bugzil.la/1033838)).

#### Détails

- [Instantanés GitHub faits entre Firefox 37 et Firefox 38 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_Pas de changement._

### Modules de code JavaScript

#### Downloads.jsm

- Les objets [`DownloadTarget` <sup>(angl.)</sup>](https://web.archive.org/web/20210623121639/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget) disposent désormais des propriétés `exists` et `size`, permettant de déterminer l'existence et la taille du fichier cible du téléchargement sur le disque, ainsi qu'une nouvelle méthode `refresh()`, qui demande la mise à jour de ces valeurs.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` et `"@mozilla.org/network/safe-file-output-stream;1"` lancent désormais une exception si `PR_APPEND` est passé sans `PR_TRUNCATE` ([bogue Firefox 1117580 <sup>(angl.)</sup>](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` et `nsIDOMWindowUtils.sendCompositionEvent()` ont été supprimés. Utilisez plutôt `nsITextInputProcessor`. ([bogue Firefox 917322 <sup>(angl.)</sup>](https://bugzil.la/917322))
- `nsIDOMWindowUtils.sendKeyEvent()` est désormais obsolète. Utilisez plutôt `nsITextInputProcessor` ([bogue Firefox 1119609 <sup>(angl.)</sup>](https://bugzil.la/1119609)).
