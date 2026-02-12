---
title: Firefox 39 pour les développeurs
short-title: Firefox 39
slug: Mozilla/Firefox/Releases/39
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 39 est sorti le 2 juillet 2015. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeurs Web, mais également pour les développeurs Firefox et Gecko ainsi que pour les développeurs d'add-on.

## Changements pour les développeurs Web

### Outils de développement

Points forts&nbsp;:

- _WebIDE_ prend désormais en charge le débogage des appareils Firefox OS via Wi-Fi
- _WebIDE_ soutient désormais les projets Cordova
- [Affichage des animations: rembobinage, avance rapide et passage à une heure spécifique <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-39)
- [L'éditeur de courbe de Bézier cubique comprend désormais 31 préréglages <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-39)
- [Glissez et déposez des éléments dans l'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#drag-and-drop)
- [L'historique des commandes de la console Web est désormais conservé entre les sessions <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#command-history)
- [Commande $\_ console pour imprimer le dernier résultat évalué <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [Meilleur mise en évidence du modèle de boîte pour les éléments en ligne <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#firefox-39)

[Tous les bogues de devtools corrigés entre Firefox 38 et Firefox 39 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026)

### CSS

- Prise en charge du type {{CSSxRef("&lt;string&gt;")}} sur {{CSSxRef("list-style-type")}}, ainsi que sa propriété abrégée {{CSSxRef("list-style")}} a été implémenté ([bogue Firefox 1144607 <sup>(angl.)</sup>](https://bugzil.la/1144607)).
- CSS Scroll Snapping a été implémenté ([bogue Firefox 945584 <sup>(angl.)</sup>](https://bugzil.la/945584) et [bogue Firefox 1138658 <sup>(angl.)</sup>](https://bugzil.la/1138658)).
- La cascade des animations CSS et des transitions CSS a été réécrite pour correspondre à la dernière spécification ([bogue Firefox 1125455 <sup>(angl.)</sup>](https://bugzil.la/1125455)).
- La prise en charge des scripts verticaux, avec le {{CSSxRef("writing-mode")}} est maintenant activée par défaut sur Nightly et Developer Edition, mais pas sur Firefox Beta et Firefox Release ([bogue Firefox 1099032 <sup>(angl.)</sup>](https://bugzil.la/1099032)). Notez que l'implémentation n'est pas encore terminée et que certains widgets, comme les tables, n'obéiront pas à toutes les valeurs.

### HTML

- Un nouveau rôle {{Glossary("ARIA")}}, `switch`, est maintenant supporté ([bogue Firefox 1136563 <sup>(angl.)</sup>](https://bugzil.la/1136563)).
- Le support de `<link rel="preconnect">` permettant d'anticiper une future connexion sans révéler aucune information a été implémenté ([bogue Firefox 1135160 <sup>(angl.)</sup>](https://bugzil.la/1135160)).

### JavaScript

- Le [constructeur `RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) ne se lance plus lorsque le premier argument est un `RegExp` et que le second argument `flags` est présent ([bogue Firefox 1108949 <sup>(angl.)</sup>](https://bugzil.la/1108949)).
- La propriété `Object.prototype.__noSuchMethod__` est désormais obsolète et émet un avertissement de console (voir [bogue Firefox 1140428 <sup>(angl.)</sup>](https://bugzil.la/1140428) et cette [annonce de plate-forme <sup>(angl.)</sup>](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)).
- L'implémentation de l'objet {{JSxRef("Proxy")}} a été mise à jour pour se conformer davantage à la spécification ES2015&nbsp;:
  - Les gestionnaires {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "defineProperty")}} et {{JSxRef("Global_Objects/Proxy/Proxy/set", "set")}} doivent maintenant renvoyer explicitement `true` pour réussir, sinon une exception {{JSxRef("TypeError")}} sera lancée en mode strict ([bogue Firefox 1132522 <sup>(angl.)</sup>](https://bugzil.la/1132522)).
  - Si l'objet {{DOMxRef("window")}} est défini comme cible, ces gestionnaires lancent désormais une `TypeError` ([bogue Firefox 828137 <sup>(angl.)</sup>](https://bugzil.la/828137)).

- Lors de l'utilisation des [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`), un terminateur de ligne (`\n`) n'est plus autorisé après les arguments de fonction fléchée (`() \n => {}`) ([bogue Firefox 1141392 <sup>(angl.)</sup>](https://bugzil.la/1141392)).
- {{JSxRef("RegExp.prototype.toString")}} est maintenant une fonction générique ([bogue Firefox 1079919 <sup>(angl.)</sup>](https://bugzil.la/1079919)).
- L'argument de `flags` non standard de {{JSxRef("String.prototype.match()")}}, {{JSxRef("String.prototype.search()")}}, et {{JSxRef("String.prototype.replace()")}} est désormais obsolètee et émet un avertissement de console ([bogue Firefox 1142351 <sup>(angl.)</sup>](https://bugzil.la/1142351)).
- Le comportement try/catch de {{JSxRef("Object.assign()")}} a été supprimé pour se conformer au dernier projet ES6 ([bogue Firefox 1103344 <sup>(angl.)</sup>](https://bugzil.la/1103344)).

### Interfaces/APIs/DOM

- La méthode expérimentale `CanvasRenderingContext2D.addHitRegion()` accepte désormais une option de `path`, qui vous permet d'ajouter des régions touchées par les objets {{DOMxRef("Path2D")}} ([bogue Firefox 1129147 <sup>(angl.)</sup>](https://bugzil.la/1129147)).
- De nouvelles méthodes ont été ajoutées pour manipuler les objets {{DOMxRef("FormData")}} ([bogue Firefox 1085283 <sup>(angl.)</sup>](https://bugzil.la/1085283)) et `FormData` est désormais supporté par les workers Web ([bogue Firefox 739173 <sup>(angl.)</sup>](https://bugzil.la/739173)).
- La méthode non standard `XMLHttpRequest.sendAsBinary()` a été supprimée ([bogue Firefox 853162 <sup>(angl.)</sup>](https://bugzil.la/853162)).
- Progression dans notre implémentation expérimentale des animations Web&nbsp;: {{DOMxRef("AnimationPlayer.startTime")}} est désormais accessible en écriture ([bogue Firefox 1073379 <sup>(angl.)</sup>](https://bugzil.la/1073379)).
- Progression de notre implémentation expérimentale de [Service Workers](/fr/docs/Web/API/Service_Worker_API): les interfaces {{DOMxRef("Cache")}} et {{DOMxRef("CacheStorage")}} sont désormais implémentées ([bogue Firefox 940273 <sup>(angl.)</sup>](https://bugzil.la/940273)).
- [L'API Fetch](/fr/docs/Web/API/Fetch_API) expérimentale a été activée par défaut ([bogue Firefox 1133861 <sup>(angl.)</sup>](https://bugzil.la/1133861)).
- Progression de notre implémentation expérimentale de WebGL2: {{DOMxRef("WebGLSync")}} est maintenant implémenté ([bogue Firefox 1048721 <sup>(angl.)</sup>](https://bugzil.la/1048721)).
- La prise en charge de {{DOMxRef("MouseEvent.offsetX")}} et {{DOMxRef("MouseEvent.offsetY")}} a été ajoutée sur le desktop ([bogue Firefox 69787 <sup>(angl.)</sup>](https://bugzil.la/69787)), mais pas sur Firefox pour Android ou Firefox OS (ils seront ajoutés dans [Firefox 43](/fr/docs/Mozilla/Firefox/Releases/43)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

### Divers

- Le support des polices [WOFF2](/fr/docs/Web/CSS/Guides/Fonts/WOFF) est désormais activé par défaut dans la version finale de Firefox (Beta et Release, en plus de Nightly et Developer Edition) ([bogue Firefox 1084026 <sup>(angl.)</sup>](https://bugzil.la/1084026)).
- L'option de ligne de commande [`-remote`](https://wiki.mozilla.org/Firefox/CommandLineOptions#-remote_remote_command) a été supprimée ([bogue Firefox 1080319 <sup>(angl.)</sup>](https://bugzil.la/1080319)).
- Prise en charge des nouveaux [emoji de couleur chair Unicode 8.0](https://www.bbc.co.uk/newsbeat/article/32220611/diverse-thumbs-up-emojis-with-different-skin-tones-finally-here) ([bogue Firefox 1153460 <sup>(angl.)</sup>](https://bugzil.la/1153460)).

## La mise en réseau

- La prise en charge de SSLv3 a été complètement supprimée ([bogue Firefox 1106470 <sup>(angl.)</sup>](https://bugzil.la/1106470)).

## Sécurité

_Pas de changement._

## Changements pour les développeurs d'add-on et de Mozilla

_Pas de changement._
