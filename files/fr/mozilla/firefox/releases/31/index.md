---
title: Firefox 31 note de version pour les développeurs
short-title: Firefox 31
slug: Mozilla/Firefox/Releases/31
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 31 a été publié le 22 juillet 2014. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Outil Pipette pour sélectionner des couleurs dans les pages web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html)
- [Traces complètes pour les messages d'erreur de la console <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [Vue du modèle de boîte modifiable <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html)
- [Formatage %c pour mettre en forme les messages de la console <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)
- [Commande "copier en tant que cURL" dans le Moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#copy-as-curl)
- [Raccourcis clavier Sublime Text dans l'éditeur de code source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html#source-editor)
- [Option pour rendre les journaux du Moniteur réseau persistants <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-list)
- [Avertissements JavaScript activés par défaut dans la console web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#javascript-errors-and-warnings)
- [Alt+clic pour développer tous les descendants d'un nœud <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#page-inspector-ui-tour-html-pane)

[Tous les bogues des outils de développement corrigés entre Firefox 30 et Firefox 31 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-04-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-17&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox&list_id=10022921).

### CSS

- Changement du préfixe `var-` des variables CSS en `--` pour refléter la modification finale de la spécification ([bogue Firefox 985838 <sup>(angl.)</sup>](https://bugzil.la/985838)).
- La propriété {{CSSxRef("hyphens")}} prend désormais en charge les règles de césure polonaises ([bogue Firefox 987668 <sup>(angl.)</sup>](https://bugzil.la/987668)).
- Suppression d'un espace blanc indésirable pour les multiples de 10 000 dans les styles de compteur coréens ([bogue Firefox 985186 <sup>(angl.)</sup>](https://bugzil.la/985186)).
- Transition d'opacité CSS cassée avec pseudo-élément parent `:before` et `overflow: auto` ([bogue Firefox 990340 <sup>(angl.)</sup>](https://bugzil.la/990340)).
- Le pseudo-élément `::-moz-math-stretchy` a été supprimé ([bogue Firefox 1000879 <sup>(angl.)</sup>](https://bugzil.la/1000879)).

### HTML

- {{HTMLElement("track")}} a été implémenté ([bogue Firefox 629350 <sup>(angl.)</sup>](https://bugzil.la/629350)).

### JavaScript

Nouvelles fonctionnalités ECMAScript 2015 implémentées&nbsp;:

- Nouveau `Array` intégré&nbsp;: {{JSxRef("Array.prototype.fill()")}} ([bogue Firefox 911147 <sup>(angl.)</sup>](https://bugzil.la/911147))
- Nouvelle fonction `Math`&nbsp;: {{JSxRef("Math.clz32()")}} ([bogue Firefox 925123 <sup>(angl.)</sup>](https://bugzil.la/925123))
- Nouveau `String` intégré&nbsp;: {{JSxRef("String.prototype.normalize()")}} est disponible dans Firefox Desktop ([bogue Firefox 918987 <sup>(angl.)</sup>](https://bugzil.la/918987)).
- Nouvelle méthode `Object`&nbsp;: {{JSxRef("Object.setPrototypeOf()")}}.
- Nouvelles constantes `Number`&nbsp;: {{JSxRef("Number.MAX_SAFE_INTEGER")}} et {{JSxRef("Number.MIN_SAFE_INTEGER")}}.
- Le piège ES2015 Proxy {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "isExtensible")}} a été implémenté ([bogue Firefox 978235 <sup>(angl.)</sup>](https://bugzil.la/978235)).

### Interfaces/APIs/DOM

- Le constructeur de `KeyboardEvent` a été implémenté ([bogue Firefox 930893 <sup>(angl.)</sup>](https://bugzil.la/930893)).
- L'API Resource Timing a été implémentée (voir [bogue Firefox 822480 <sup>(angl.)</sup>](https://bugzil.la/822480)).
- L'attribut `KeyboardEvent.isComposing` a été implémenté ([bogue Firefox 993234 <sup>(angl.)</sup>](https://bugzil.la/993234)).
- L'interface `InputEvent` a été implémentée ([bogue Firefox 993253 <sup>(angl.)</sup>](https://bugzil.la/993253)).
- L'attribut `InputEvent.isComposing` a été implémenté ([bogue Firefox 993253 <sup>(angl.)</sup>](https://bugzil.la/993253)).
- {{DOMxRef("CSS.escape_static", "CSS.escape()")}} a été implémenté ([bogue Firefox 955860 <sup>(angl.)</sup>](https://bugzil.la/955860)).
- {{DOMxRef("Element/mousemove_event", "mousemove")}} est désormais annulable comme dans les autres navigateurs ([bogue Firefox 704423 <sup>(angl.)</sup>](https://bugzil.la/704423)). Appeler `preventDefault()` ne fait que définir l'attribut `defaultPrevented` à `true`&nbsp;; aucun autre comportement n'est modifié. Par exemple, il ne peut pas empêcher la définition de l'état `:hover`.
- L'interface {{DOMxRef("Path2D")}} a été implémentée.
- Les méthodes {{DOMxRef("CanvasRenderingContext2D.isPointInPath()")}}, {{DOMxRef("CanvasRenderingContext2D.isPointInStroke()")}}, {{DOMxRef("CanvasRenderingContext2D.clip()")}}, {{DOMxRef("CanvasRenderingContext2D.fill()")}} et {{DOMxRef("CanvasRenderingContext2D.stroke()")}} ont été mises à jour pour accepter éventuellement un objet {{DOMxRef("Path2D")}}.
- {{DOMxRef("HTMLMediaElement.fastSeek()")}} a été implémenté.
- L'interface `Connection` a été renommée en {{DOMxRef("NetworkInformation")}} et a été modifiée pour correspondre à la nouvelle spécification ([bogue Firefox 960426 <sup>(angl.)</sup>](https://bugzil.la/960426)).
- La méthode {{DOMxRef("Navigator.sendBeacon()")}} a été implémentée&nbsp;; cela permet la transmission asynchrone de données analytiques ou autres de manière à ne pas dépendre du maintien de la page émettrice chargée, de sorte qu'elle peut être utilisée dans un gestionnaire {{DOMxRef("Window/unload_event", "unload")}} ou {{DOMxRef("Window.beforeunload_event", "beforeunload")}}.

### MathML

- Implémentation partielle de la [table OpenType MATH <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/typography/opentype/spec/math), section 6.3.6 ([bogue Firefox 407059 <sup>(angl.)</sup>](https://bugzil.la/407059)). Pour plus de détails, essayez le [test de torture MathML <sup>(angl.)</sup>](https://web.archive.org/web/20210605072117/https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/MathML_Torture_Test).
- Le pseudo-élément `::-moz-math-stretchy` a été supprimé ([bogue Firefox 1000879 <sup>(angl.)</sup>](https://bugzil.la/1000879)).
- Lorsque disponible, les caractères alphanumériques mathématiques Unicode sont utilisés pour les variantes mathématiques en gras, italique et gras-italique ([bogue Firefox 930504 <sup>(angl.)</sup>](https://bugzil.la/930504)).

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

## Security

- [Le code privilégié obtient désormais une vision Xray pour les instances de `Date` <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays_for_javascript_objects).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

- L'attribut `align` sur le `urlbar-wrapper` (anciennement sur le `urlbar-container`) qui était défini sur `center` depuis toujours, a été supprimé. C'est connu pour affecter les thèmes tiers. Vous devez examiner attentivement quelle est la bonne solution pour votre thème, mais pour maintenir l'effet équivalent, vous pouvez ajouter la règle CSS suivante à votre thème&nbsp;:

  ```css
  #urlbar-wrapper {
    -moz-box-align: center;
  }
  ```

- `nsIDOMWindowUtils.sendQueryContentEvent()` et `nsIDOMWindowUtils.sendSelectionSetEvent()` ont `aAdditionalFlags` comme argument optionnel. Si vous avez appelé `nsIDOMWindowUtils.sendSelectionSetEvent()` avec `true` pour `aReverse`, le comportement est cassé par ce changement. Voir [explication de chaque drapeau <sup>(angl.)</sup>](https://web.archive.org/web/20210518041413/https://developer.mozilla.org/en-US/docs/mozilla/tech/xpcom/reference/interface/nsidomwindowutils#constants) (`QUERY_CONTENT_FLAG_*` et `SELECTION_SET_FLAG_*`) pour le détail de `aAdditionalFlags`.

### SDK d'extension

Points forts&nbsp;:

- [Débogueur d'extensions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/debugging/)
- Ajout de la possibilité de convertir [entre les objets BrowserWindow de haut niveau et les fenêtres DOM <sup>(angl.)</sup>](https://web.archive.org/web/20201201230444/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/windows#converting_to_dom_windows), et [entre les objets Tab de haut niveau et les onglets XUL <sup>(angl.)</sup>](https://web.archive.org/web/20210117200824/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/tabs#converting_to_xul_tabs).
- Mise à jour du thème par défaut utilisé pour les panneaux sur Mac OS X.
- Ajout des options [contentStyle et contentStyleFile <sup>(angl.)</sup>](https://web.archive.org/web/20201201022417/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/panel#styling_panel_content) aux panneaux.

[Les instantanés GitHub faits entre Firefox 30 et Firefox 31 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox30...firefox31). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

[Les bogues corrigés entre Firefox 30 et Firefox 31 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-04-29&chfield=resolution&query_format=advanced&chfieldfrom=2014-03-18&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.
