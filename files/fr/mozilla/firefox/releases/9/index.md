---
title: Firefox 9 pour les développeurs
slug: Mozilla/Firefox/Releases/9
tags:
  - Firefox
  - Firefox 9
translation_of: Mozilla/Firefox/Releases/9
original_slug: Mozilla/Firefox/Versions/9
---
1.  Notes de versions pour développeurs

    1.  [Notes de versions pour développeurs](/fr/docs/Mozilla/Firefox/Releases)

2.  Modules complémentaires

    1.  [WebExtensions](/fr/Add-ons/WebExtensions)
    2.  [Thèmes](/fr/Add-ons/Themes)

3.  Fonctionnement interne de Firefox

    1.  [Le projet Mozilla](/fr/docs/Mozilla/)
    2.  [Gecko](/fr/docs/Mozilla/Gecko)
    3.  [Mode « headless »](/fr/docs/Mozilla/Firefox/Headless_mode)
    4.  [Modules de code Javascript](/fr/docs/Mozilla/JavaScript_code_modules)
    5.  [JS-ctypes](/fr/docs/Mozilla/js-ctypes)
    6.  [Le projet MathML](/fr/docs/Mozilla/MathML_Project)
    7.  [MFBT](/fr/docs/Mozilla/MFBT)
    8.  [Les projets Mozilla](/fr/docs/Mozilla/Projects)
    9.  [Le système de préférences](/fr/docs/Mozilla/Preferences)
    10. [Connexions WebIDL](/fr/docs/Mozilla/WebIDL_bindings)
    11. [XPCOM](/fr/docs/Mozilla/Tech/XPCOM)
    12. [XUL](/fr/docs/Mozilla/Tech/XUL)

4.  Développer et contribuer

    1.  [Instructions de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions)
    2.  [Configuration des options de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options)
    3.  [Fonctionnement de la compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works)
    4.  [Code source de Mozilla](/fr/docs/Mozilla/Developer_guide/Source_Code/Mercurial)
    5.  [Localisation](/fr/docs/Mozilla/Localization)
    6.  [Mercurial](/fr/docs/Mozilla/Mercurial)
    7.  [Assurance qualité](/fr/docs/Mozilla/QA)
    8.  [Utilisation de code Mozilla dans d'autres projets](/fr/docs/Mozilla/Using_Mozilla_code_in_other_projects)

Firefox 9, basé sur Gecko 9.0, est sorti le 20 décembre 2011 sur Windows. La version 9.0.1, qui corrige un problème de plantage découvert au dernier moment, est sortie le 21 décembre 2011, sur Mac et Linux.

## Changements pour les développeurs Web

### HTML

- L'attribut `value` de [`<li>`](/fr/docs/Web/HTML/Element/li) peut désormais être négatif comme c'est indiqué dans HTML5. Auparavant les valeurs négatives été converties à 0.
- Vous pouvez désormais [specifier le début et la fin du temps d'un média](/fr/docs/Using_HTML5_audio_and_video#Specifying_playback_range) dans l'URI en utilisant les éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio) et [`<video>`](/fr/docs/Web/HTML/Element/video).
- Les éléments [`<input>`](/fr/docs/Web/HTML/Element/input) et [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) [respectent désormais la valeur de l'attribut `lang`](/fr/docs/HTML/Controlling_spell_checking_in_HTML_forms#Controlling_the_spellchecker_language) lors de l'appel du correcteur orthographique.
- Firefox sur Android permet désormais la prise de photo avec le téléphone sans devoir quitter le navigateur lorsque l'élément [`<input>`](/fr/docs/Web/HTML/Element/input) est utilisé avec `type="file"` et `accept="image/*"`.
- Les images ICO de style PNG de Windows Vista sont à présent supportée.
- Les images dessinées qui utilisent l'attribut [`crossorigin`](/en/HTML/CORS_settings_attributes) pour demander l'accès à CORS [n'altère plus le canvas](/en/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F) quand CORS est accordé.
- La valeur de l'attribut [`rowspan`](/fr/docs/Web/HTML/Element/td#attr-rowspan) peut désormais aller jusqu'à 65 534, contre 8190 avant.

### CSS

- La propriété [`font-stretch`](/fr/docs/Web/CSS/font-stretch) est à présent supportée.
- La propriété [`columns`](/fr/docs/Web/CSS/columns) est à présent supportée, avec le préfixe `-moz`. C'est un raccourci des propriétés suivantes : [`column-width`](/fr/docs/Web/CSS/column-width) et [`column-count`](/fr/docs/Web/CSS/column-count).
- Quand une feuille de style incluse à l'aide de l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) a été entièrement chargée et analysée (mais pas encore appliquée au document), l'[`load` event](/fr/docs/HTML/Element/link#Stylesheet_load_events) est désormais déclenché. En outre, si une erreur survient durant le traitement d'une feuille de style, l'événement `error` est déclenché.
- Vous pouvez à présent spécifier les paramètres de débordement pour les bords, à la fois à gauche et à droite, du contenu en utilisant une nouvelle syntaxe de deux valeurs pour [`text-overflow`](/fr/docs/Web/CSS/text-overflow).

### DOM

- [Utilisation du mode plein écran](/fr/docs/DOM/Using_full-screen_mode)
  - : La nouvelle API pour le plein écran offre un moyen de présenter le contenu en utilisant la totalité de l'écran, sans l'interface du navigateur. C'est très bien pour les vidéos et les jeux. Cette API est encore expérimentale et préfixée.

<!---->

- La méthode [`Node.contains()`](/fr/docs/Web/API/Node/contains) est désormais implémentée, elle vous permet de déterminer si un nœud donné est un descendant d'un autre noeud.
- L'attribut [`Node.parentElement`](/fr/docs/Web/API/Node/parentElement) a été implémenté, cela renvoie l'[`Element`](/fr/docs/Web/API/Element) parent d'un noeud DOM, ou `null` si le parent n'est pas un élément.
- [Les évènements de composition](/fr/docs/DOM/CompositionEvent) du DOM Level 3 sont à présent supportés.
- L'attribut [`Document.scripts`](/fr/docs/Web/API/Document/scripts) a été implémenté, il renvoie [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) de tous les éléments [`<script>`](/fr/docs/Web/HTML/Element/script) du document.
- la méthode [`Document.queryCommandSupported()`](/fr/docs/Web/API/Document/queryCommandSupported) a été implémentée.
- L'ensemble des événements qui peuvent être écoutés sur les éléments [`<body>`](/fr/docs/Web/HTML/Element/body) a été révisé pour correspondre à la dernière version de la spécification HTML5. La liste des événements dans la [référence d'événements DOM](/en/DOM/DOM_event_reference) reflète ceux qui peuvent être écoutés sur les [`<body>`](/fr/docs/Web/HTML/Element/body).
- L'évènement `readystatechange` est désormais uniquement tiré sur le document, comme prévu.
- Les gestionnaires d'événements sont désormais implémentés comme des interfaces IDL standard. Dans la plupart des cas, cela n'affectera pas le contenu, mais [il y a des exceptions](/fr/docs/DOM/DOM_event_handlers#Event_handler_changes_in_Firefox_9).
- Un nouveau type de réponse, "`moz-json`", a été ajouté à `XMLHttpRequest`, laissant `XMLHttpRequest` analyser automatiquement les chaînes [JSON](/fr/docs/JSON), quand vous demandez ce type, une chaîne JSON est analysé, afin que la valeur de la propriété `response` est la résultante de l'objet JavaScript.
- [Les évènements "progress" de `XMLHttpRequest`](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress) sont à présent correctement envoyé pour chaque bloc de données reçu, dans le passé il était possible pour que le dernier bloc de données reçu ne déclenche pas un évènement "progress". Maintenant, vous pouvez suivre uniquement la progression des évènements "progress", au lieu d'avoir également à surveiller les évènements "load" pour détecter la réception du dernier bloc de données.
- Dans le passé, l'appel de [`addEventListener()`](/fr/docs/DOM/element.addEventListener) avec un écouteur `null` renvoyait une exception. maintenant il ne retourne plus d'erreur et est sans effet.
- La nouvelle propriété [`navigator.doNotTrack`](/fr/docs/Web/API/Navigator/doNotTrack 'Renvoi le paramètre utilisateur de do-not-track. Cette valeur est "1" si l´utilisateur a demandé de ne pas être suivi par les sites web, le contenu ou la publicité.') permet à votre contenu de déterminer facilement si l'utilisateur a activé la préférence do-no-track, si la valeur est "oui", vous ne devez pas suivre l'utilisateur.
- Les objets [`Range`](/fr/docs/Web/API/Range) et [`Selection`](/fr/docs/Web/API/Selection) se comportent désormais selon leurs spécifications lorsque [`splitText()`](/fr/docs/Web/API/Text/splitText) et [`normalize()`](/fr/docs/Web/API/Node/normalize) sont appelés.
- La valeur de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument) pour les noeuds de doctype est désormais le document sur lequel [`createDocumentType()`](/fr/docs/DOM/DOMImplementation.createDocumentType) a été appelé pour créer le noeud, au lieu de `null`.
- `window.navigator.taintEnabled` a été retiré, il n'est plus supporté depuis plusieurs années.

### Workers

- Les workers implémentés dans les URLs blob étaient cassés sous Firefox 8, et sont de nouveaux disponibles à partir de Firefox 9.

### WebGL

- Dans le cadre de [WebGL](/fr/docs/WebGL) les attributs `drawingBufferWidth` et `drawingBufferHeight` sont à présent supportés.

### MathML

- La valeur non-standard `restyle` pour les attributs `actiontype` des éléments [`<maction>`](/fr/docs/Web/MathML/Element/maction) a été retirée.
- Alors qu'il n'était pas encore supporté, l'utilisation de l'élément [`<mlabeledtr>`](/fr/docs/Web/MathML/Element/mlabeledtr) ne casse plus complètement le rendu. Voir le [bug 689641](https://bugzilla.mozilla.org/show_bug.cgi?id=689641) pour l'avancement du support de cet élément.

### Réseau

- Vous pouvez désormais envoyer le contenu de [tableaux JavaScript typés](/fr/docs/JavaScript_typed_arrays) (c'est, le contenu d'un objet [`ArrayBuffer`](/fr/docs/JavaScript_typed_arrays/ArrayBuffer)) [en utilisant XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Sending_typed_arrays_as_binary_data).
- Les connexions WebSocket permettent désormais des non-caractères autres que UTF-8 des trames de données devant être reçues, au lieu d'échouer.
- L'en-tête HTTP `Accept` pour les réquêtes XSLT a été changée pour "\*/\*" pour simplifier. Puisque l'extraction d'XSLT est toujours retombée à "\* / \*", il était logique de faire la simplification.
- Les tentatives faites par un serveur pour utiliser les codes de réponses `301 Moved Permanently` ou `307 Temporary Redirect` pour rediriger l'utilisateur vers une URI `javascript:` donne désormais [lieu à l'erreur "connexion incorrecte"](/fr/docs/HTTP#More_on_redirection_responses) au lieu de vraiment rediriger. Cela évite certaines attaques de type cross-site scripting.
- Le contenu servi par [`Content-Disposition`](/fr/docs/Web/HTTP/Headers/Content-Disposition) vide avait déjà été traité comme si [`Content-Disposition`](/fr/docs/Web/HTTP/Headers/Content-Disposition) était attachment", ce qui ne fonctionnait pas toujours comme prévu. C'est désormais traité comme si [`Content-Disposition`](/fr/docs/Web/HTTP/Headers/Content-Disposition) était "inline".
- La taille maximale par défaut d'un élément dans le cache disque a été augmentée à 50 Mo, auparavant, seuls les éléments jusqu'à 5 Mo étaient mis en cache.

### Outils de développement

- La console Web supporte désormais [les chaînes de substitutions](/fr/docs/Tools/Web_Console#String_substitutions) basiques dans ses méthodes d'exploitation.
- Vous pouvez désormais [créer des blocs imbriqués pour la sortie](/fr/docs/Tools/Web_Console#Using_groups_in_the_console) dans la console web, pour faciliter la lecture.

## Changements pour les développeurs de Mozilla et de modules complémentaires

Voir [Updating add-ons for Firefox 9](/fr/docs/Firefox/Updating_add-ons_for_Firefox_9) pour un aperçu des modifications que vous devriez apporter pour rendre vos extensions compatibles avec Firefox 9.

### XUL

- L'élément [`tab`](/fr/docs/Mozilla/Tech/XUL/tab) dispose à présent d'un attribut [`pending`](/fr/docs/Mozilla/Tech/XUL/Attributs/pending), dont la valeur est `true`, lorsque l'onglet est en train d'être rétabli par le service de sauvegarde de session. Il peut être utilisé pour le style de l'onglet dans les thèmes. L'attribut n'est pas présent sur les onglets qui ne sont pas en attente.
- L'élément [`tab`](/fr/docs/Mozilla/Tech/XUL/tab) dispose à présent d'un attribut [`unread`](/fr/docs/Mozilla/Tech/XUL/Attributs/unread), dont la valeur est `true`, lorsque l'onglet a changé depuis la dernière fois qu'il était actif ou si il n'a pas été sélectionné depuis que la session en cours a commencé. L'attribut n'est pas présent sur les onglets qui ne sont pas lus.
- Vous pouvez désormais utiliser [`panel`](/fr/docs/Mozilla/Tech/XUL/panel) comme une image glissée pour les opérations DOM de glisser-déposer. Cela vous permet d'utiliser l'API standard drag & drop pour [glisser et déposer du contenu XUL](/fr/docs/DragDrop/Drag_Operations#Using_XUL_panels_as_drag_images).
- La méthode [`appendNotification`](/fr/docs/Mozilla/Tech/XUL/Méthodes/appendNotification) de l'élément [`notificationbox`](/fr/docs/Mozilla/Tech/XUL/notificationbox) vous permet désormais de spécifier un rappel qui est appelé pour des événements intéressants liés à la zone de notification. Actuellement, le seul événement est "removed", qui vous indique la zone qui a été retirée de sa fenêtre.

### Changements dans le module de code JavaScript

- [`FileUtils.jsm`](/fr/docs/JavaScript_code_modules/FileUtils.jsm) dispose désormais du constructeur `File` qui renvoie l'objet [`nsIFile`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile) représentant un fichier spécifié par son chemin d'accès.

### Changement dans le service

- Le service de préférence du contenu gère désormais [le mode de navigation privée](/fr/docs/Using_content_preferences#private-browsing) (voir [bug 679784](https://bugzilla.mozilla.org/show_bug.cgi?id=679784)).

### NSPR

- NSPR dispose désormais d'un module "append", qui vous permet d'ajouter de nouvelles données à la fin d'un journal existant.

### Changements dans les interfaces

#### Interface supprimée

- [`nsIGlobalHistory3`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGlobalHistory3) a été enlevée lors de la réduction de Places et du code DocShell.

#### Divers changements dans les interfaces

- L'interface [`nsISound`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISound) a une nouvelle constante `EVENT_EDITOR_MAX_LEN`. Elle permet de lire le son du système quand plus de caractères que le maximum autorisé sont entrés dans un champ de texte. Actuellement, ce n'est utilisé que sous Windows.
- L'interface [`nsIScriptError2`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptError2) a de nouvelles propriétés, `timeStamp` et `innerWindowID` ; en plus, la méthode `initWithWindowID()` prend désormais un ID de fenêtre intérieure au lieu d'un ID de fenêtre extérieure.
- L'attribut [`nsIBidiKeyboard.haveBidiKeyboards`](/fr/docs/XPCOM_Interface_Reference/nsIBidiKeyboard#haveBidiKeyboards) a été ajouté, il vous permet de vérifier que le système a au moins un clavier installé dans chaque sens : de gauche à droite ou de droite à gauche.
- Le nouvel attribut [`nsIEditor.isSelectionEditable`](/fr/docs/XPCOM_Interface_Reference/nsIEditor#isSelectionEditable) vous permet de déterminer si l'ancre de sélection en cours est modifiable. Cela permet de supporter les cas où seules certaines parties du document sont modifiables, en vous permettant de voir si la sélection actuelle est dans une partie modifiable.
- Les méthodes [`nsIBrowserHistory.registerOpenPage()`](</fr/docs/XPCOM_Interface_Reference/nsIBrowserHistory#registerOpenPage()>) et [`nsIBrowserHistory.unregisterOpenPage()`](</fr/docs/XPCOM_Interface_Reference/nsIBrowserHistory#unregisterOpenPage()>) ont été supprimées dans le cadre d'une refonte des performances dans le système Places. A la place, vous pouvez utiliser les méthodes correspondantes de [`mozIPlacesAutoComplete`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIPlacesAutoComplete).
- La méthode [`nsIDOMWindowUtils.wrapDOMFile()`](</fr/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils#wrapDOMFile()>) a été ajoutée, elle retourne un objet DOM [`File`](/fr/docs/Web/API/File) pour un [`nsIFile`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile) donné.
- La méthode [`nsIChromeFrameMessageManager.removeDelayedFrameScript()`](</fr/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#removeDelayedFrameScript()>) a été ajouté pour supporter la suppression des scripts de chargement différé. Les extensions amorcées doivent l'utilisée, lors de l'arrêt, pour éliminer tous les scripts chargés à l'aide de [`nsIChromeFrameMessageManager.loadFrameScript()`](</fr/docs/XPCOM_Interface_Reference/nsIChromeFrameMessageManager#loadFrameScript()>) avec l'indicateur de charge différé. Cela expose des extensions comme `browser.messageManager.removeDelayedFrameScript()`.
- L'interface [`nsIAppStartup`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup) a un nouvel attribut `interrupted`, qui vous permet de savoir si la procédure de démarrage a été interrompue à tout moment par une commande interactive invitée. Cela peut être utile, par exemple, lors de la synchronisation du démarrage pendant l'évaluation des performances, pour être en mesure de déposer le nombre de sessions qui ont été interrompues.
- L'interface [`nsIEditorSpellCheck`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEditorSpellCheck) a été revue pour supporter le choix des sites de dictionnaires pour la vérification orthographique.

### Parseur IDL

Le parseur IDL ne supporte plus la notion de pointeurs unique qui n'a jamais été entièrement implémentée.

### Changements dans le système de compilation

- L'option `--enable-application=standalone` pour la compilation autonome d'XPConnect a été retirée, elle n'a pas été utilisée depuis 2007.
- Le support de la compilation autonome de Necko et Transformiix XSLT a été retiré, vous ne pouvez plus utilisez `--enable-application=network` ou `--enable-application=content/xslt`.
- Le système de compilation cherche désormais `.mozconfig` à `$topsrcdir/.mozconfig` ou `$topsrcdir/mozconfig`, et pas ailleurs, sauf si vous remplacez le chemin `.mozconfig` en utilisant la variable d'environnement `MOZCONFIG`.
- L'utilitaire `xpidl` a été remplacé dans le SDK avec [pyxpidl](/fr/docs/XPIDL/pyxpidl).

### Autres changements

- Le correcteur orthographique n'a plus la limite de 130 caractères sur la longueur des mots à vérifier. Cette limite était précédemment en place pour éviter les plantages qui sont survenus dans le correcteur orthographique, mais les bogues sous-jacents ont depuis été corrigés.
- Vous pouvez désormais enregistrer des composants pour ajouter des fonctionnalités à l'objet [`window.navigator`](/fr/docs/Web/API/Window/navigator "Renvoie une référence à l'objet

  navigator
  , qui peut être interrogé pour obtenir des informations concernant l'application exécutant le script.") à l'aide de la catégorie "JavaScript-navigator-property". Voir [Ajout des APIs de l'objet navigator](/En/Developer_Guide/Adding_APIs_to_the_navigator_object) pour plus de détails et des exemples.

## Voir également

- [Firefox 8 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/8)
- [Firefox 7 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/7)
- [Firefox 6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/6)
- [Firefox 5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/5)
- [Firefox 4 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/4)
- [Firefox 3.6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.6)
- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/1.5)
