---
title: Firefox 144 note de version pour les développeurs
short-title: Firefox 144
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: a2f381f4fbe5a3f66981080c1cd004d3063648f9
---

Cet article présente les changements de Firefox 144 qui concernent les développeur·euse·s.
Firefox 144 est sorti le [14 octobre 2025 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=144).

## Changements pour les développeur·euse·s web

### HTML

- Les attributs [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command) et [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) de l'élément HTML {{HTMLElement("button")}} sont désormais pris en charge. L'attribut `command` permet de définir l'action à effectuer, et l'attribut `commandfor` permet d'associer le bouton à un autre élément sur lequel la commande agit. La commande peut être une valeur prédéfinie comme `close` ou une [valeur personnalisée](/fr/docs/Web/HTML/Reference/Elements/button#valeurs_personnalisées) définie par vous. ([bogue Firefox 1983523 <sup>(angl.)</sup>](https://bugzil.la/1983523)).

### MathML

#### Suppressions

- La prise en charge de l'ancienne police MathML STIXGeneral a été supprimée. Le paramètre `mathml.stixgeneral_operator_stretching.disabled` a également été supprimé. ([bogue Firefox 1336058 <sup>(angl.)</sup>](https://bugzil.la/1336058)).

### CSS

- Les [fonctionnalités CSS](/fr/docs/Web/API/View_Transition_API#ajouts_css) pour les transitions de vue dans les applications monopage ({{Glossary("SPA")}}) sont désormais prises en charge. Cela permet de styliser les différentes parties d'une animation de transition de vue. ([bogue Firefox 1985809](https://bugzil.la/1985809)). Cela inclut&nbsp;:
  - La pseudo-classe {{CSSxRef(":active-view-transition")}}
  - La propriété {{CSSxRef("view-transition-class")}}
  - La propriété {{CSSxRef("view-transition-name")}}
  - Le pseudo-élément {{CSSxRef("::view-transition")}}
  - Le pseudo-élément {{CSSxRef("::view-transition-group()")}}
  - Le pseudo-élément {{CSSxRef("::view-transition-image-pair()")}}
  - Le pseudo-élément {{CSSxRef("::view-transition-new()")}}
  - Le pseudo-élément {{CSSxRef("::view-transition-old()")}}

### JavaScript

- Les méthodes d'instance {{JSxRef("Map.prototype.getOrInsert()")}}, {{JSxRef("Map.prototype.getOrInsertComputed()")}}, {{JSxRef("WeakMap.prototype.getOrInsert()")}} et {{JSxRef("WeakMap.prototype.getOrInsertComputed()")}} sont désormais prises en charge.
  Toutes ces méthodes retournent la valeur correspondant à une clé donnée si elle est présente.
  Si la clé n'est pas présente, `getOrInsert()` insère et retourne un élément pour la clé et une valeur par défaut fournie, tandis que `getOrInsertComputed()` insère et retourne une valeur calculée dans une fonction de rappel fournie. ([bogue Firefox 1979917 <sup>(angl.)</sup>](https://bugzil.la/1979917)).

### APIs

- Les méthodes [`lock()`](/fr/docs/Web/API/ScreenOrientation/lock) et [`unlock()`](/fr/docs/Web/API/ScreenOrientation/unlock) de l'interface {{DOMxRef("ScreenOrientation")}} sont désormais prises en charge sur Android et sur les tablettes Windows. ([bogue Firefox 1983483 <sup>(angl.)</sup>](https://bugzil.la/1983483)).
- L'[API View Transition](/fr/docs/Web/API/View_Transition_API) est désormais prise en charge pour les {{Glossary("SPA", "applications monopage")}}. Cela fournit un mécanisme pour créer facilement des transitions animées entre différentes vues d'un site web. ([bogue Firefox 1985809 <sup>(angl.)</sup>](https://bugzil.la/1985809)).
- L'interface {{DOMxRef("CSSStyleProperties")}} du [modèle objet CSS (CSSOM)](/fr/docs/Web/API/CSS_Object_Model) est maintenant implémentée (elle a été renommée depuis l'interface non standard `CSS2Properties`). La nouvelle interface est présente mais pas encore utilisée. ([bogue Firefox 1919582 <sup>(angl.)</sup>](https://bugzil.la/1919582)).
- La propriété {{DOMxRef("PerformanceEventTiming.interactionId", "interactionId")}} de l'interface {{DOMxRef("PerformanceEventTiming")}} est un identifiant unique qui associe des évènements liés à une même interaction utilisateur. Cela peut être utilisé pour calculer la métrique {{Glossary("Interaction to next paint", "d'interaction à la prochaine peinture")}}, qui aide à analyser la réactivité aux interactions utilisateur tout au long de la vie d'une page. ([bogue Firefox 1956809 <sup>(angl.)</sup>](https://bugzil.la/1956809)).
- La méthode {{DOMxRef("Navigation.navigate()")}} de l'interface {{DOMxRef("Navigation API", "de l'API Navigation", "", "nocode")}} n'accepte plus les URL avec un schéma `javascript`. Appeler `navigate()` avec une URL `javascript:` génère désormais une exception `NotSupportedError`. ([bogue Firefox 1981104 <sup>(angl.)</sup>](https://bugzil.la/1981104)).

#### DOM

- La méthode `moveBefore()` est désormais prise en charge sur les interfaces {{DOMxRef("Element.moveBefore()","Element")}}, {{DOMxRef("DocumentFragment.moveBefore()","DocumentFragment")}} et {{DOMxRef("Document.moveBefore()","Document")}}. Cela permet de déplacer un enfant immédiat de l'objet, avant un autre de ses enfants. Contrairement à {{DOMxRef("Node.insertBefore()")}}, les éléments déplacés conservent leur état. ([bogue Firefox 1983688 <sup>(angl.)</sup>](https://bugzil.la/1983688)).

#### Média, WebRTC et Web Audio

- Les HTML {{HTMLElement("iframe")}} inter-origines nécessitent désormais soit une interaction de l'utilisateur·ice ({{Glossary("sticky activation", "activation persistante")}}), soit une autorisation explicite pour rediriger la page de niveau supérieur via `window.top.location`.
  Voir [Navigation de niveau supérieur dans les frames inter-origines](/fr/docs/Web/HTML/Reference/Elements/iframe#navigation_supérieure_dans_les_cadres_dorigine_croisée) pour plus d'informations. ([bogue Firefox 1419501 <sup>(angl.)</sup>](https://bugzil.la/1419501)).
- Les instances de {{DOMxRef("RTCDataChannel")}} sont désormais des [objets transférables](/fr/docs/Web/API/Web_Workers_API/Transferable_objects), et peuvent donc être passées aux [workers](/fr/docs/Web/API/Worker). ([bogue Firefox 1209163 <sup>(angl.)</sup>](https://bugzil.la/1209163)).
- L'évènement [`closing`](/fr/docs/Web/API/RTCDataChannel/closing_event) et le gestionnaire d'évènement `onclosing()` sont désormais pris en charge sur l'interface {{DOMxRef("RTCDataChannel")}}. ([bogue Firefox 1611953 <sup>(angl.)</sup>](https://bugzil.la/1611953)).
- Les méthodes {{DOMxRef("MediaDevices/getUserMedia","getUserMedia()")}} et {{DOMxRef("MediaDevices/getDisplayMedia","getDisplayMedia()")}} de l'interface {{DOMxRef("MediaDevices")}} prennent désormais en charge la contrainte [`resizeMode`](/fr/docs/Web/API/MediaTrackConstraints#resizemode).
  Cette contrainte permet aux développeur·euse·s de demander une vidéo qui respecte d'autres contraintes, comme la résolution et le taux de rafraîchissement, même si les contraintes demandées ne sont pas prises en charge par le matériel sous-jacent.
  Le navigateur peut alors rogner, réduire la résolution ou diminuer le taux de rafraîchissement de la vidéo capturée par une caméra, ou réduire la résolution (mais pas rogner) de la vidéo capturée à partir d'un écran ou d'une fenêtre. ([bogue Firefox 1286945 <sup>(angl.)</sup>](https://bugzil.la/1286945)).

#### Suppressions

- Les évènements obsolètes et non standard suivants ont été supprimés&nbsp;: [l'évènement `afterscriptexecute`](/fr/docs/Web/API/Document/afterscriptexecute_event) et [l'évènement `beforescriptexecute`](/fr/docs/Web/API/Document/beforescriptexecute_event) de l'interface `Document`, ainsi que [l'évènement `afterscriptexecute`](/fr/docs/Web/API/Element/afterscriptexecute_event) et [l'évènement `beforescriptexecute`](/fr/docs/Web/API/Element/beforescriptexecute_event) de l'interface `Element`. ([bogue Firefox 1584269 <sup>(angl.)</sup>](https://bugzil.la/1584269)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implémentation du nouvel évènement `browsingContext.downloadWillBegin`, émis lorsqu'un nouveau téléchargement est lancé, soit en cliquant sur un lien avec l'attribut `download`, soit en réponse à une requête réseau avec un en-tête `Content-Disposition` indiquant une pièce jointe. ([bogue Firefox 1874365 <sup>(angl.)</sup>](https://bugzil.la/1874365)).

- Implémentation de la nouvelle commande `emulation.setScreenOrientationOverride`, qui permet aux clients d'émuler différentes orientations d'écran. Cette commande ne se limite pas aux appareils mobiles, mais fonctionne aussi pour les applications de bureau. ([bogue Firefox 1974167 <sup>(angl.)</sup>](https://bugzil.la/1974167)).

- Implémentation de la nouvelle commande `emulation.setTimezoneOverride`, qui permet aux clients de simuler un fuseau horaire spécifique. ([bogue Firefox 1978027 <sup>(angl.)</sup>](https://bugzil.la/1978027)).

- Amélioration de la commande `emulation.setLocaleOverride` pour appliquer également les paramètres spécifiés aux bacs à sable précédemment créés via WebDriver BiDi. ([bogue Firefox 1983807 <sup>(angl.)</sup>](https://bugzil.la/1983807)).

- Correction d'un bogue où la substitution de langue définie via `emulation.setLocaleOverride` était parfois partagée de manière incorrecte entre différents contextes de navigation au sein d'un même processus. ([bogue Firefox 1980211 <sup>(angl.)</sup>](https://bugzil.la/1980211)).

- Amélioration de la commande `browsingContext.navigate` pour éviter les erreurs `NS_BINDING_ABORTED` causées par des redirections ou des interruptions survenant après la validation de la navigation. ([bogue Firefox 1914407 <sup>(angl.)</sup>](https://bugzil.la/1914407)).

#### Marionette

- L'algorithme [`Scroll Into View` de WebDriver <sup>(angl.)</sup>](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), utilisé par plusieurs commandes classiques WebDriver dans Marionette, revient à toujours utiliser le comportement de défilement `instant`. Cela annule le changement introduit dans Firefox&nbsp;97, qui avait modifié le comportement en `auto`. Ce retour en arrière vise à éviter des conditions de concurrence lors du défilement d'éléments utilisant le comportement `smooth`. ([bogue Firefox 1986238 <sup>(angl.)</sup>](https://bugzil.la/1986238)).

- Prise en charge de {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} pour {{WebExtAPIRef("storage.local")}} et {{WebExtAPIRef("storage.managed")}}. ([bogue Firefox 1385832 <sup>(angl.)</sup>](https://bugzil.la/1385832)).

## Changements pour les développeur·euse·s d'extensions

- Ajout de la possibilité de définir l'origine du style pour les injections CSS à partir de la clé de manifeste [`"content_scripts"`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), dans {{WebExtAPIRef("scripting.registerContentScripts()")}} avec la propriété `cssOrigin` sur {{WebExtAPIRef("scripting.RegisteredContentScript")}}, et la propriété `cssOrigin` dans {{WebExtAPIRef("contentScripts.register")}}. L'origine du style peut être `"user"` (pour ajouter le CSS comme feuille de style utilisateur) ou `"author"` (pour l'ajouter comme feuille de style auteur). Par défaut, l'origine est `"author"`. Ces propriétés ne sont pas sensibles à la casse. De plus, la valeur de la propriété [`origin`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) de {{WebExtAPIRef("scripting.insertCSS()")}} n'est désormais plus sensible à la casse. ([bogue Firefox 1679997 <sup>(angl.)</sup>](https://bugzil.la/1679997)).
- Prise en charge de {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} pour {{WebExtAPIRef("storage.local")}} et {{WebExtAPIRef("storage.managed")}}. ([bogue Firefox 1385832 <sup>(angl.)</sup>](https://bugzil.la/1385832)).
- Prise en charge de {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} pour {{WebExtAPIRef("storage.local")}} et {{WebExtAPIRef("storage.managed")}}. ([bogue Firefox 1385832 <sup>(angl.)</sup>](https://bugzil.la/1385832)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 144 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.

Vous pouvez trouver d'autres fonctionnalités de ce type sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Sélecteur d'heure dans les éléments de champs `datetime-local` et `time`**&nbsp;: `dom.forms.datetime.timepicker`.

  Les éléments HTML `{{HTMLElement("input/datetime-local", "&lt;input type=\"datetime-local\"&gt;")}}` et `{{HTMLElement("input/time", "&lt;input type=\"time\"&gt;")}}` prennent désormais en charge un sélecteur d'heure. ([bogue Firefox 1726108 <sup>(angl.)</sup>](https://bugzil.la/1726108)).

- **:heading()**&nbsp; `layout.css.heading-selector.enabled`

  La fonction de pseudo-classe {{CSSxRef(":heading_function", ":heading()")}} a désormais une syntaxe beaucoup plus simple qui prend une liste d'entiers séparés par des virgules correspondant au niveau des titres. ([bogue Firefox 1974386 <sup>(angl.)</sup>](https://bugzil.la/1974386) & [bogue Firefox 1984310 <sup>(angl.)</sup>](https://bugzil.la/1984310)).
