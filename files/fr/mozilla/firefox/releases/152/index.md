---
title: Firefox 152 note de version pour les développeurs
short-title: Firefox 152
slug: Mozilla/Firefox/Releases/152
l10n:
  sourceCommit: bfaf90116752cffcff6098be4d40f843b8e9f6ee
---

Cet article présente les informations concernant les changements de Firefox 152 qui concernent les développeur·euse·s.
Firefox 152 est sorti le [16 juin 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=152).

## Changements pour les développeur·euse·s web

### Outils de développement

- Les outils de développement disposent désormais d'une option «&nbsp;Afficher les commentaires&nbsp;» pour basculer l'affichage des nœuds de commentaires HTML dans l'Inspecteur.
  Cette option se trouve dans le [panneau des paramètres <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([bogue Firefox 1455294 <sup>(angl.)</sup>](https://bugzil.la/1455294)).

### HTML

Pas de changements notables.

### SVG

- La propriété en lecture seule {{DOMxRef("SVGTextPathElement.side")}} est désormais prise en charge, indiquant si le texte est dessiné du côté gauche ou du côté droit d'un chemin de texte.
  Cela reflète l'attribut correspondant {{SVGAttr("side")}} sur l'élément {{SVGElement("textPath")}}.
  ([bogue Firefox 2034371 <sup>(angl.)</sup>](https://bugzil.la/2034371)).

### CSS

- La propriété CSS {{CSSxRef("field-sizing")}} permet de contrôler le comportement de taille des éléments de contrôle de formulaire. Cette propriété a deux valeurs&nbsp;: `content` permet aux éléments de s'ajuster à la taille de leur contenu, et `fixed` définit une taille fixe pour les éléments.
  ([bogue Firefox 2036620 <sup>(angl.)</sup>](https://bugzil.la/2036620)).

### JavaScript

Pas de changements notables.

### APIs

- Les propriétés {{DOMxRef("PerformanceResourceTiming.firstInterimResponseStart","firstInterimResponseStart")}} et {{DOMxRef("PerformanceResourceTiming.finalResponseHeadersStart","finalResponseHeadersStart")}} de l'interface {{DOMxRef("PerformanceResourceTiming")}} sont prises en charge.
  Celles-ci peuvent être utilisées pour mesurer le temps nécessaire au navigateur pour recevoir les réponses HTTP intermédiaires et la réponse HTTP finale après l'envoi d'une requête, respectivement.
  ([bogue Firefox 2006340 <sup>(angl.)</sup>](https://bugzil.la/2006340)).
- Les propriétés {{DOMxRef("AnimationEvent.animation")}} et {{DOMxRef("TransitionEvent.animation")}} sont désormais prises en charge.
  Celles-ci offrent un moyen plus ergonomique d'accéder à l'animation associée que d'appeler {{DOMxRef("element.getAnimations()")}} et de filtrer sur le nom de l'animation (`animationName`) ou le nom de la propriété (`propertyName`) de l'évènement.
  ([bogue Firefox 1929118 <sup>(angl.)</sup>](https://bugzil.la/1929118)).

#### DOM

- La propriété en lecture seule {{DOMxRef("Notification/actions", "actions")}} et la propriété statique en lecture seule {{DOMxRef("Notification/maxActions_static", "maxActions")}} de l'interface {{DOMxRef("Notification")}} sont prises en charge.
  Celles-ci contiennent les actions de notification définies avec {{DOMxRef("ServiceWorkerRegistration.showNotification()")}}, et le nombre maximum d'actions pouvant être définies pour une notification, respectivement.
  ([bogue Firefox 1959931 <sup>(angl.)</sup>](https://bugzil.la/1959931)).
- La méthode {{DOMxRef("Element.getAnimations()")}} peut désormais accepter le paramètre [`options.pseudoElement`](/fr/docs/Web/API/Element/getAnimations#pseudoelement).
  Cela permet de cibler directement un pseudo-élément spécifique, plutôt que de filtrer les résultats de `{ subtree: true }`.
  ([bogue Firefox 1935557 <sup>(angl.)</sup>](https://bugzil.la/1935557)).
- La méthode {{DOMxRef("Element.requestPointerLock()")}} prend désormais en charge le paramètre [`options.unadjustedMovement`](/fr/docs/Web/API/Element/requestPointerLock#unadjustedmovement).
  Cela permet de désactiver l'accélération de la souris au niveau du système d'exploitation et d'utiliser les entrées brutes de la souris, ce qui est utile dans les cas où un contrôle lent et précis du mouvement de la souris est nécessaire.
  ([bogue Firefox 2037802 <sup>(angl.)</sup>](https://bugzil.la/2037802)).

#### Média, WebRTC et Web Audio

- La propriété `receiveTime` est désormais incluse dans les métadonnées retournées par [`RTCEncodedVideoFrame.getMetadata()`](/fr/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) et [`RTCEncodedAudioFrame.getMetadata()`](/fr/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime), et peut être passée aux constructeurs [`RTCEncodedVideoFrame()`](/fr/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) et [`RTCEncodedAudioFrame()`](/fr/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) en tant que propriété dans le paramètre `options`.
  ([bogue Firefox 2033420 <sup>(angl.)</sup>](https://bugzil.la/2033420)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Amélioration des commandes de capture d'écran Marionette et WebDriver BiDi pour appliquer les dimensions maximales autorisées. ([bogue Firefox 2020302 <sup>(angl.)</sup>](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Extension de la commande `webExtension.install` pour prendre en charge l'installation d'extensions Web dans Firefox activé en mode de navigation privée. ([bogue Firefox 1947679 <sup>(angl.)</sup>](https://bugzil.la/1947679)).
- Amélioration de la commande `browser.setDownloadBehavior` pour permettre de remplacer le dossier de destination du téléchargement avant la création du fichier temporaire. ([bogue Firefox 2017252 <sup>(angl.)</sup>](https://bugzil.la/2017252)).
- Correction des évènements réseau pour ne transmettre que les réponses JavaScript mises en cache en mémoire lorsqu'il existe un collecteur d'évènements réseau correspondant, évitant ainsi la transmission de données inutile. ([bogue Firefox 2018237 <sup>(angl.)</sup>](https://bugzil.la/2018237)).

#### Marionette

- Amélioration des commandes `WebDriver:Navigate` et `WebDriver:Refresh` pour signaler correctement les erreurs lorsque le déclenchement de la navigation échoue, au lieu de les ignorer silencieusement. ([bogue Firefox 2033769 <sup>(angl.)</sup>](https://bugzil.la/2033769)).

## Changements pour les développeur·euse·s d'extensions

- La capacité des extensions à exécuter dynamiquement du code dans leurs documents `moz-extension:` avec {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} et {{WebExtAPIRef("scripting.removeCSS")}} a été supprimée. Cette fonctionnalité était obsolète depuis Firefox 149. ([bogue Firefox 2015559 <sup>(angl.)</sup>](https://bugzil.la/2015559))

  À la place, une extension peut exécuter du code dans ses documents de manière dynamique en enregistrant un écouteur {{WebExtAPIRef("runtime.onMessage")}} dans le script du document, puis en envoyant un message pour déclencher l'exécution du code requis.

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 152 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Vérifier si une configuration d'encodage/décodage multimédia est prise en charge pour WebRTC**&nbsp;: `media.mediacapabilities.webrtc.enabled`

  Le type `webrtc` peut désormais être passé en option pour [`MediaCapabilities.decodingInfo()`](/fr/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) et [`MediaCapabilities.encodingInfo()`](/fr/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) afin de vérifier si une configuration d'encodage/décodage peut être utilisée pour WebRTC.
  Cela remplace le type non standard [`transmission`](/fr/docs/Web/API/MediaCapabilities/encodingInfo#transmission), qui était auparavant utilisé comme alias dans Firefox.
  ([bogue Firefox 1825286 <sup>(angl.)</sup>](https://bugzil.la/1825286)).

- **Proposition TC39 Iterator includes**&nbsp;: `javascript.options.experimental.iterator_includes`

  La méthode [`Iterator.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) teste si l'itérateur produit une valeur définie.
  ([bogue Firefox 2025779 <sup>(angl.)</sup>](https://bugzil.la/2025779)).

- **Proposition TC39 Intl.Locale info**&nbsp;: `javascript.options.experimental.intl_locale_info`

  La [proposition TC39 Intl.Locale info <sup>(angl.)</sup>](https://github.com/tc39/proposal-intl-locale-info) est désormais prise en charge dans les versions nightly si la préférence est activée.
  Cela inclut toutes [les méthodes d'instance `Intl.Locale` préfixées par `get`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#méthodes_dinstance).
  ([bogue Firefox 1693576 <sup>(angl.)</sup>](https://bugzil.la/1693576)).

- **Importation de modules texte**&nbsp;: `javascript.options.experimental.import_text`

  La clause `with` [`{ type: "text" }`](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_de_texte_type_text) permet d'importer le code source d'un module en tant que valeur de chaîne de caractères.
  Le type de média de la réponse est ignoré, et le contenu est analysé comme du texte même si la source contient des scripts ou d'autres codes exécutables.
  ([bogue Firefox 2024854 <sup>(angl.)</sup>](https://bugzil.la/2024854)).
