---
title: Firefox 39 for developers
slug: Mozilla/Firefox/Releases/39
tags:
  - Firefox
  - Releases
  - TopicStub
translation_of: Mozilla/Firefox/Releases/39
---
{{FirefoxSidebar}}

Firefox 39 est sorti le 2 juillet 2015. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeurs Web, mais également pour les développeurs Firefox et Gecko ainsi que pour les développeurs d'add-on.

## Changements pour les développeurs Web

### Outils de développement

Points forts:

- [WebIDE prend désormais en charge le débogage des appareils Firefox OS via Wi-Fi](/fr/docs/Tools/WebIDE/Setting_up_runtimes#Connecting_over_WiFi)
- [WebIDE soutient désormais les projets Cordova](/fr/docs/Tools/WebIDE/Working_with_Cordova_apps_in_WebIDE)
- [Affichage des animations: rembobinage, avance rapide et passage à une heure spécifique](/fr/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_39)
- [L'éditeur de courbe de Bézier cubique comprend désormais 31 préréglages](/fr/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_39)
- [Glissez et déposez des éléments dans l'inspecteur de page](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Drag_and_drop)
- [L'historique des commandes de la console Web est désormais conservé entre les sessions](/fr/docs/Tools/Web_Console#Command_history)
- [Commande $\_ console pour imprimer le dernier résultat évalué](/fr/docs/Tools/Web_Console#Helper_commands)
- [Meilleur mise en évidence du modèle de boîte pour les éléments en ligne](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#Firefox_39)

[Tous les bogues de devtools corrigés entre Firefox 38 et Firefox 39](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026).

### CSS

- Prise en charge du type {{cssxref("&lt;string&gt;")}} sur {{cssxref("list-style-type")}}, ainsi que sa propriété abrégée {{cssxref("list-style")}} a été implémenté ({{bug(1144607)}}).
- CSS Scroll Snapping a été implémenté ({{bug(945584)}} et {{bug(1138658)}}).
- La cascade des animations CSS et des transitions CSS a été réécrite pour correspondre à la dernière spécification ({{bug(1125455)}}).
- La prise en charge des scripts verticaux, avec le {{cssxref("writing-mode")}} est maintenant activée par défaut sur Nightly et Developer Edition, mais pas sur Firefox Beta et Firefox Release ({{bug(1099032)}}). Notez que l'implémentation n'est pas encore terminée et que certains widgets, comme les tables, n'obéiront pas à toutes les valeurs.

### HTML

- Un nouveau rôle {{glossary("ARIA")}}, `switch`, est maintenant supporté ({{bug(1136563)}}).
- Le support de `<link rel="preconnect">` permettant d'anticiper une future connexion sans révéler aucune information a été implémenté ({{bug(1135160)}}).

### JavaScript

- Le [constructeur `RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) ne se lance plus lorsque le premier argument est un `RegExp` et que le second argument `flags` est présent ({{bug(1108949)}}).
- La propriété {{jsxref("Object.noSuchMethod", "Object.prototype.__noSuchMethod__")}} est désormais obsolète et émet un avertissement de console (voir {{bug(1140428)}} et cette [annonce de plate-forme](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)).
- L'implémentation de l'objet {{jsxref("Proxy")}} a été mise à jour pour se conformer davantage à la spécification ES6 :

  - Les gestionnaires {{jsxref("Global_Objects/Proxy/handler/defineProperty", "defineProperty")}} et {{jsxref("Global_Objects/Proxy/handler/set", "set")}} doivent maintenant renvoyer explicitement `true` pour réussir, sinon une exception {{jsxref("TypeError")}} sera lancée en mode strict ({{bug(1132522)}}).
  - Si l'objet {{domxref("window")}} est défini comme cible, ces gestionnaires lancent désormais une `TypeError` ({{bug(828137)}}).

- Lors de l'utilisation des [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`), un terminateur de ligne (`\n`) n'est plus autorisé après les arguments de fonction fléchée (`() \n => {}`) ({{bug(1141392)}}).
- {{jsxref("RegExp.prototype.toString")}} est maintenant une fonction générique ({{bug(1079919)}}).
- L'argument de `flags` non standard de {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.search()")}}, et {{jsxref("String.prototype.replace()")}} est désormais obsolètee et émet un avertissement de console ({{bug(1142351)}}).
- Le comportement try/catch de {{jsxref("Object.assign()")}} a été supprimé pour se conformer au dernier projet ES6 ({{bug(1103344)}}).

### Interfaces/APIs/DOM

- La méthode expérimentale {{domxref("CanvasRenderingContext2D.addHitRegion()")}} accepte désormais une option de `path`, qui vous permet d'ajouter des [régions hit](/fr/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility#Hit_regions) aux objets {{domxref("Path2D")}} ({{bug(1129147)}}).
- De nouvelles méthodes ont été ajoutées pour manipuler les objets {{domxref("FormData")}} ({{bug(1085283)}}) et `FormData` est désormais supporté par les workers Web ({{bug(739173)}}).
- La méthode non standard {{domxref("XMLHttpRequest.sendAsBinary()")}} a été supprimée ({{bug(853162)}}).
- Progression dans notre implémentation expérimentale des animations Web : {{domxref("AnimationPlayer.startTime")}} est désormais accessible en écriture ({{bug(1073379)}}).
- Progression de notre implémentation expérimentale de [Service Workers](/fr/docs/Web/API/ServiceWorker_API): les interfaces {{domxref("Cache")}} et {{domxref("CacheStorage")}} sont désormais implémentées ({{bug(940273)}}).
- L'[API Fetch](/fr/docs/Web/API/Fetch_API) expérimentale a été activée par défaut ({{bug(1133861)}}).
- Progression de notre implémentation expérimentale de WebGL2: {{domxref("WebGLSync")}} est maintenant implémenté ({{bug(1048721)}}).
- La prise en charge de {{domxref("MouseEvent.offsetX")}} et {{domxref("MouseEvent.offsetY")}} a été ajoutée sur le desktop ({{bug(69787)}}, mais pas sur Firefox pour Android ou Firefox OS (ils seront ajoutés dans [Firefox 43](/fr/docs/Mozilla/Firefox/Releases/43)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

### Miscelleanous

- Le support des polices [WOFF2](/fr/docs/Web/Guide/WOFF) est désormais activé par défaut dans la version finale de Firefox (Beta et Release, en plus de Nightly et Developer Edition) ({{bug(1084026)}}).
- L'option de ligne de commande [`-remote`](/fr/docs/Mozilla/Command_Line_Options#-remote_remote_command) a été supprimée ({{bug(1080319)}}).
- Prise en charge des nouveaux [emoji de couleur chair Unicode 8.0](http://www.bbc.co.uk/newsbeat/article/32220611/diverse-thumbs-up-emojis-with-different-skin-tones-finally-here) ({{bug(1153460)}}).

## La mise en réseau

- La prise en charge de SSLv3 a été complètement supprimée ({{bug(1106470)}}).

## Sécurité

_Pas de changement._

## Changements pour les développeurs d'add-on et de Mozilla

_Pas de changement._

## Anciennes versions

{{Firefox_for_developers('38')}}
