---
title: Firefox 9 note de version pour les développeurs
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 9, basé sur Gecko 9.0, est sorti le 20 décembre 2011 sur Windows. La version 9.0.1, qui corrige un problème de plantage découvert au dernier moment, est sortie le 21 décembre 2011, sur Mac et Linux.

## Changements pour les développeur·euse·s Web

### Outils de développement

- La console Web supporte désormais [les chaînes de caractères de substitutions <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) basiques dans ses méthodes d'exploitation.
- Vous pouvez désormais [créer des blocs imbriqués pour la sortie <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) dans la console web, pour faciliter la lecture.

### HTML

- L'attribut `value` de {{HTMLElement("li")}} peut désormais être négatif comme c'est indiqué dans HTML5. Auparavant les valeurs négatives été converties à 0.
- Vous pouvez désormais [définir le début et la fin du temps d'un média](/fr/docs/Web/Media/Guides/Audio_and_video_delivery#définir_la_plage_de_lecture) dans l'URI en utilisant les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}.
- Les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}} respectent désormais la valeur de l'attribut `lang` lors de l'appel du correcteur orthographique.
- Firefox sur Android permet désormais la prise de photo avec le téléphone sans devoir quitter le navigateur lorsque l'élément {{HTMLElement("input")}} est utilisé avec `type="file"` et `accept="image/*"`.
- Les images ICO de style PNG de Windows Vista sont à présent supportée.
- Les images dessinées qui utilisent l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour demander l'accès à CORS [n'altère plus le canvas](/fr/docs/Web/HTML/How_to/CORS_enabled_image#canevas_corrompu_et_sécurité) quand CORS est accordé.
- La valeur de l'attribut [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan) peut désormais aller jusqu'à 65 534, contre 8 190 avant.

### CSS

- La propriété {{CSSxRef("font-stretch")}} est à présent supportée.
- La propriété {{CSSxRef("columns")}} est à présent supportée, avec le préfixe `-moz`. C'est un raccourci des propriétés suivantes&nbsp;: {{CSSxRef("column-width")}} et {{CSSxRef("column-count")}}.
- Quand une feuille de style incluse à l'aide de l'élément {{HTMLElement("link")}} a été entièrement chargée et analysée (mais pas encore appliquée au document), [l'évènement `load`](/fr/docs/Web/HTML/Reference/Elements/link#évènements_de_chargement_de_feuille_de_style) est désormais déclenché. En outre, si une erreur survient durant le traitement d'une feuille de style, l'évènement `error` est déclenché.
- Vous pouvez à présent définir les paramètres de débordement pour les bords, à la fois à gauche et à droite, du contenu en utilisant une nouvelle syntaxe de deux valeurs pour {{CSSxRef("text-overflow")}}.

### DOM

- [Utilisation du mode plein écran](/fr/docs/Web/API/Fullscreen_API)
  - : La nouvelle API pour le plein écran offre un moyen de présenter le contenu en utilisant la totalité de l'écran, sans l'interface du navigateur. C'est très bien pour les vidéos et les jeux. Cette API est encore expérimentale et préfixée.

<!---->

- La méthode {{DOMxRef("Node.contains()")}} est désormais implémentée, elle vous permet de déterminer si un nœud donné est un descendant d'un autre nœud.
- L'attribut {{DOMxRef("Node.parentElement")}} a été implémenté, ça retourne un {{DOMxRef("Element")}} parent d'un nœud DOM, ou `null` si le parent n'est pas un élément.
- [Les évènements de composition](/fr/docs/Web/API/CompositionEvent) du DOM Level 3 sont à présent pris en charge.
- L'attribut {{DOMxRef("Document.scripts")}} a été implémenté, il retourne un objet {{DOMxRef("HTMLCollection")}} de tous les éléments {{HTMLElement("script")}} du document.
- la méthode {{DOMxRef("Document.queryCommandSupported()")}} a été implémentée.
- L'ensemble des évènements qui peuvent être écoutés sur les éléments {{HTMLElement("body")}} a été révisé pour correspondre à la dernière version de la spécification HTML5. La liste des évènements dans la [référence d'évènements DOM](/fr/docs/Web/API/Document_Object_Model/Events#index_des_évènements) reflète ceux qui peuvent être écoutés sur les {{HTMLElement("body")}}.
- L'évènement `readystatechange` est désormais uniquement tiré sur le document, comme prévu.
- Les gestionnaires d'évènements sont désormais implémentés comme des interfaces IDL standard. Dans la plupart des cas, cela n'affecte pas le contenu, mais il y a des exceptions.
- Un nouveau type de réponse, `"moz-json"`, a été ajouté à `XMLHttpRequest`, laissant `XMLHttpRequest` analyser automatiquement les chaînes de caractères {{Glossary("JSON")}}, quand vous demandez ce type, une chaîne de caractères JSON est analysée, afin que la valeur de la propriété `response` est la résultante de l'objet JavaScript.
- [Les évènements de progression de `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#connaître_lavancement) sont à présent correctement envoyés pour chaque bloc de données reçu, dans le passé il était possible pour que le dernier bloc de données reçu ne déclenche pas un évènement de progression. Maintenant, vous pouvez suivre uniquement la progression des évènements de progression, au lieu d'avoir également à surveiller les évènements "load" pour détecter la réception du dernier bloc de données.
- Dans le passé, l'appel de [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) avec un écouteur `null` renvoyait une exception. maintenant il ne retourne plus d'erreur et est sans effet.
- La nouvelle propriété {{DOMxRef("Navigator.doNotTrack")}} permet à votre contenu de déterminer facilement si l'utilisateur·ice a activé la préférence do-no-track, si la valeur est "oui", vous ne devez pas suivre l'utilisateur·ice.
- Les objets {{DOMxRef("Range")}} et {{DOMxRef("Selection")}} se comportent désormais selon leurs spécifications lorsque {{DOMxRef("Text.splitText()", "splitText()")}} et {{DOMxRef("Node.normalize", "normalize()")}} sont appelés.
- La valeur de {{DOMxRef("Node.ownerDocument")}} pour les nœuds de doctype est désormais le document sur lequel [`createDocumentType()`](/fr/docs/Web/API/DOMImplementation/createDocumentType) a été appelé pour créer le nœud, au lieu de `null`.
- `window.navigator.taintEnabled` a été retiré, il n'est plus supporté depuis plusieurs années.

### Workers

- Les workers implémentés dans les URLs blob étaient cassés sous Firefox 8, et sont de nouveaux disponibles à partir de Firefox 9.

### WebGL

- Dans le cadre de [WebGL](/fr/docs/Web/API/WebGL_API) les attributs `drawingBufferWidth` et `drawingBufferHeight` sont à présent supportés.

### MathML

- La valeur non-standard `restyle` pour les attributs `actiontype` des éléments {{MathMLElement("maction")}} a été retirée.
- Alors qu'il n'était pas encore supporté, l'utilisation de l'élément `<mlabeledtr>` ne casse plus complètement le rendu. Voir [le bogue Firefox 689641 <sup>(angl.)</sup>](https://bugzil.la/689641) pour l'avancement du support de cet élément.

### Réseau

- Vous pouvez désormais envoyer le contenu de [tableaux JavaScript typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays) (c'est, le contenu d'un objet {{JSxRef("ArrayBuffer")}}) [en utilisant XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).
- Les connexions WebSocket permettent désormais des non-caractères autres que UTF-8 des trames de données devant être reçues, au lieu d'échouer.
- L'en-tête HTTP `Accept` pour les requêtes XSLT a été changée pour `*/*` pour simplifier. Puisque l'extraction d'XSLT est toujours retombée à `*/*`, il était logique de faire la simplification.
- Les tentatives faites par un serveur pour utiliser les codes de réponses `301 Moved Permanently` ou `307 Temporary Redirect` pour rediriger l'utilisateur·ice vers une URI `javascript:` donne désormais lieu à l'erreur «&nbsp;connexion incorrecte&nbsp;» au lieu de vraiment rediriger. Cela évite certaines attaques de type script inter-site.
- Le contenu servi par {{HTTPHeader("Content-Disposition")}} vide avait déjà été traité comme si {{HTTPHeader("Content-Disposition")}} était une «&nbsp;pièce jointe&nbsp;», ce qui ne fonctionnait pas toujours comme prévu. C'est désormais traité comme si {{HTTPHeader("Content-Disposition")}} était «&nbsp;embarqué&nbsp;».
- La taille maximale par défaut d'un élément dans le cache disque a été augmentée à 50 Mo, auparavant, seuls les éléments jusqu'à 5 Mo étaient mis en cache.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Voir [Mise à jour des modules complémentaires pour Firefox 9](/fr/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) pour un aperçu des modifications que vous devez apporter pour rendre vos extensions compatibles avec Firefox 9.

### XUL

- L'élément `<xul:tab>` dispose à présent d'un attribut `pending`, dont la valeur est `true`, lorsque l'onglet est en train d'être rétabli par le service de sauvegarde de session. Il peut être utilisé pour le style de l'onglet dans les thèmes. L'attribut n'est pas présent sur les onglets qui ne sont pas en attente.
- L'élément `<xul:tab>` dispose à présent d'un attribut `unread`, dont la valeur est `true`, lorsque l'onglet a changé depuis la dernière fois qu'il était actif ou si il n'a pas été sélectionné depuis que la session en cours a commencé. L'attribut n'est pas présent sur les onglets qui ne sont pas lus.
- Vous pouvez désormais utiliser `<xul:panel>` comme une image glissée pour les opérations DOM de glisser-déposer. Cela vous permet d'utiliser l'API standard drag & drop pour [glisser et déposer du contenu XUL](/fr/docs/Web/API/HTML_Drag_and_Drop_API).
- La méthode `<xul:notificationbox>` de l'élément `appendNotification` vous permet désormais de définir un rappel qui est appelé pour des évènements intéressants liés à la zone de notification. Actuellement, le seul évènement est «&nbsp;supprimé&nbsp;», qui vous indique la zone qui a été retirée de sa fenêtre.

### Changements dans le module de code JavaScript

- `FileUtils.jsm` dispose désormais du constructeur `File` qui retourne l'objet `nsIFile` représentant un fichier défini par son chemin d'accès.

### Changement dans le service

- Le service de préférence du contenu gère désormais le mode de navigation privée (voir [le bogue Firefox 679784 <sup>(angl.)</sup>](https://bugzil.la/679784)).

### NSPR

- NSPR dispose désormais d'un module `"append"`, qui vous permet d'ajouter de nouvelles données à la fin d'un journal existant.

### Changements dans les interfaces

#### Interface supprimée

- `nsIGlobalHistory3` a été enlevée lors de la réduction de Places et du code DocShell.

#### Divers changements dans les interfaces

- L'interface `nsISound` a une nouvelle constante `EVENT_EDITOR_MAX_LEN`. Elle permet de lire le son du système quand plus de caractères que le maximum autorisé sont entrés dans un champ de texte. Actuellement, ce n'est utilisé que sous Windows.
- L'interface `nsIScriptError2` a de nouvelles propriétés, `timeStamp` et `innerWindowID`&nbsp;; en plus, la méthode `initWithWindowID()` prend désormais un ID de fenêtre intérieure au lieu d'un ID de fenêtre extérieure.
- L'attribut `nsIBidiKeyboard.haveBidiKeyboards` a été ajouté, il vous permet de vérifier que le système a au moins un clavier installé dans chaque sens&nbsp;: de gauche à droite ou de droite à gauche.
- Le nouvel attribut `nsIEditor.isSelectionEditable` vous permet de déterminer si l'ancre de sélection en cours est modifiable. Cela permet de supporter les cas où seules certaines parties du document sont modifiables, en vous permettant de voir si la sélection actuelle est dans une partie modifiable.
- Les méthodes `nsIBrowserHistory.registerOpenPage()` et `nsIBrowserHistory.unregisterOpenPage()` ont été supprimées dans le cadre d'une refonte des performances dans le système Places. A la place, vous pouvez utiliser les méthodes correspondantes de `mozIPlacesAutoComplete`.
- La méthode `nsIDOMWindowUtils.wrapDOMFile()` a été ajoutée, elle retourne un objet DOM {{DOMxRef("File")}} pour un `nsIFile` donné.
- La méthode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` a été ajouté pour supporter la suppression des scripts de chargement différé. Les extensions amorcées doivent l'utilisée, lors de l'arrêt, pour éliminer tous les scripts chargés à l'aide de `nsIChromeFrameMessageManager.loadFrameScript()` avec l'indicateur de charge différé. Cela expose des extensions comme `browser.messageManager.removeDelayedFrameScript()`.
- L'interface `nsIAppStartup` a un nouvel attribut `interrupted`, qui vous permet de savoir si la procédure de démarrage a été interrompue à tout moment par une commande interactive invitée. Cela peut être utile, par exemple, lors de la synchronisation du démarrage pendant l'évaluation des performances, pour être en mesure de déposer le nombre de sessions qui ont été interrompues.
- L'interface `nsIEditorSpellCheck` a été revue pour supporter le choix des sites de dictionnaires pour la vérification orthographique.

### Parseur IDL

Le parseur IDL ne supporte plus la notion de pointeurs unique qui n'a jamais été entièrement implémentée.

### Changements dans le système de compilation

- L'option `--enable-application=standalone` pour la compilation autonome de XPConnect a été retirée, elle n'a pas été utilisée depuis 2007.
- Le support de la compilation autonome de Necko et Transformiix XSLT a été retiré, vous ne pouvez plus utilisez `--enable-application=network` ou `--enable-application=content/xslt`.
- Le système de compilation cherche désormais `.mozconfig` à `$topsrcdir/.mozconfig` ou `$topsrcdir/mozconfig`, et pas ailleurs, sauf si vous remplacez le chemin `.mozconfig` en utilisant la variable d'environnement `MOZCONFIG`.
- L'utilitaire `xpidl` a été remplacé dans le SDK avec `pyxpidl`.

### Autres changements

- Le correcteur orthographique n'a plus de limite arbitraire de 130 caractères sur la longueur des mots qu'il tente de vérifier. Cette limite était auparavant en place pour éviter les plantages qui se produisaient dans le correcteur orthographique, mais les bogues sous-jacents ont depuis été corrigés.
- Vous pouvez désormais enregistrer des composants pour ajouter des fonctionnalités à l'objet {{DOMxRef("Window.navigator")}} en utilisant la catégorie `"JavaScript-navigator-property"`.
