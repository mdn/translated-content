---
title: Firefox 145 pour les développeurs
short-title: Firefox 145
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 08f01e6cd0103ac0a472f9e3cf2482bb9fc2f25a
---

Cet article présente les informations concernant les changements de Firefox 145 qui concernent les développeur·euse·s.
Firefox 145 est sorti le [11 novembre 2025 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=145).

## Changements pour les développeur·euse·s web

### HTML

Aucun changement notable.

### CSS

- La propriété {{CSSxRef("text-autospace")}} est désormais prise en charge, permettant des ajustements automatiques de l'espacement entre des caractères de systèmes d'écriture différents ([bogue Firefox 1981086 <sup>(angl.)</sup>](https://bugzil.la/1981086), [bogue Firefox 1869577 <sup>(angl.)</sup>](https://bugzil.la/1869577)).

- La famille de polices générique [`math`](/fr/docs/Web/CSS/Reference/Properties/font-family#math) est maintenant prise en charge comme valeur de la propriété `font-family`, permettant aux expressions mathématiques d'utiliser des polices adaptées ([bogue Firefox 1788937 <sup>(angl.)</sup>](https://bugzil.la/1788937)).

- Les séparateurs peuvent apparaître dans les menus {{HTMLElement("select")}} depuis l'implémentation de {{HTMLElement("hr")}} dans `<select>`.
  Ceux-ci sont désormais aussi pris en charge dans Firefox pour Android ([bogue Firefox 1867045 <sup>(angl.)</sup>](https://bugzil.la/1867045), [bogue Firefox 1830909 <sup>(angl.)</sup>](https://bugzil.la/1830909)).

### JavaScript

- Firefox prend désormais en charge la méthode statique {{JSxRef("Atomics.waitAsync()")}}, qui permet la synchronisation des threads en fonction de la valeur d'une zone mémoire partagée.
  La méthode attend de façon asynchrone la valeur et retourne un objet représentant le résultat de l'opération. Elle est non bloquante et utilisable sur le fil d'exécution principal ([bogue Firefox 1884148 <sup>(angl.)</sup>](https://bugzil.la/1884148)).

### HTTP

- Les en-têtes HTTP {{HTTPHeader("Integrity-Policy")}} et {{HTTPHeader("Integrity-Policy-Report-Only")}} sont désormais pris en charge pour les ressources de type script. Ils permettent aux sites web d'appliquer des [garanties d'intégrité de sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) pour les _scripts_.
  Notez que la clé [`endpoints`](/fr/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) n'est pas encore prise en charge (les violations sont consignées dans la console) ([bogue Firefox 1984973 <sup>(angl.)</sup>](https://bugzil.la/1984973)).

### APIs

- La propriété {{DOMxRef("ToggleEvent/source", "source")}} de l'interface {{DOMxRef("ToggleEvent")}} est désormais prise en charge.
  Si un [popover](/fr/docs/Web/API/Popover_API) est ouvert ou fermé par un élément HTML tel qu'un {{HTMLElement("button")}}, la propriété `source` de l'événement contiendra l'élément qui a déclenché le popover ([bogue Firefox 1968987 <sup>(angl.)</sup>](https://bugzil.la/1968987)).
- Une instance de {{DOMxRef("CSSStyleProperties")}} est désormais retournée pour la propriété `style` sur {{DOMxRef("HTMLElement.style", "HTMLElement")}}, {{DOMxRef("MathMLElement.style", "MathMLElement")}}, {{DOMxRef("SVGElement.style", "SVGElement")}} et {{DOMxRef("CSSStyleRule.style", "CSSStyleRule")}}, ainsi que par la méthode {{DOMxRef("Window.getComputedStyle()")}}. Auparavant, une instance de {{DOMxRef("CSSStyleDeclaration")}} était retournée ([bogue Firefox 1989925 <sup>(angl.)</sup>](https://bugzil.la/1989925)).

#### Média, WebRTC et Web Audio

- {{DOMxRef("RTCEncodedVideoFrame")}} et {{DOMxRef("RTCEncodedAudioFrame")}} sont désormais des {{Glossary("Serializable object", "objets sérialisables")}}, et les constructeurs avec copie {{DOMxRef("RTCEncodedAudioFrame/RTCEncodedAudioFrame", "RTCEncodedAudioFrame()")}} et {{DOMxRef("RTCEncodedVideoFrame/RTCEncodedVideoFrame", "RTCEncodedVideoFrame()")}} sont pris en charge. Ces changements permettent de cloner les trames et de les partager entre les workers et le fil d'exécution principal ([bogue Firefox 1868223 <sup>(angl.)</sup>](https://bugzil.la/1868223) et [bogue Firefox 1975032 <sup>(angl.)</sup>](https://bugzil.la/1975032)).

- Le [conteneur Matroska](/fr/docs/Web/Media/Guides/Formats/Containers) (`.mkv`) est désormais pris en charge pour les codecs les plus courants&nbsp;: AVC, HEVC, VP8, VP9, AV1, AAC, Opus et Vorbis ([bogue Firefox 1991752 <sup>(angl.)</sup>](https://bugzil.la/1991752)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implémentation de la commande `emulation.setUserAgentOverride`, qui permet de remplacer la chaîne user-agent utilisée par le navigateur pour un ensemble de contextes, des contextes utilisateur ou globalement. ([bogue Firefox 1987935 <sup>(angl.)</sup>](https://bugzil.la/1987935)).
- Implémentation de l'événement `browsingContext.downloadEnd`, émis lorsqu'un téléchargement se termine (qu'il soit réussi ou annulé) ([bogue Firefox 1970293 <sup>(angl.)</sup>](https://bugzil.la/1970293)).
- Mise à jour de la propriété `destination` de l'événement `network.beforeRequestSent` à `document` pour les navigations de niveau supérieur. ([bogue Firefox 1985552 <sup>(angl.)</sup>](https://bugzil.la/1985552)).
- Mise à jour des événements de téléchargement `browsingContext` pour réutiliser le même identifiant de navigation que l'événement précédent `browsingContext.navigationStarted`. ([bogue Firefox 1986938 <sup>(angl.)</sup>](https://bugzil.la/1986938)).
- Correction d'un bogue lors de la collecte de données réseau, où les caractères non-ASCII dans les corps de réponse n'étaient pas correctement encodés. ([bogue Firefox 1986022 <sup>(angl.)</sup>](https://bugzil.la/1986022)).
- Correction d'un bogue avec la commande `network.getData`, qui échouait pour les requêtes avec un corps de réponse vide. ([bogue Firefox 1986025 <sup>(angl.)</sup>](https://bugzil.la/1986025)).
- Correction d'un bogue où certains événements `network` pouvaient être signalés comme bloqués alors qu'ils ne l'étaient pas. ([bogue Firefox 1989919 <sup>(angl.)</sup>](https://bugzil.la/1989919)).

## Changements pour les développeur·euse·s d'extensions

- Les cookies créés avec {{WebExtAPIRef("cookies.set()")}} sont désormais validés, et les cookies invalides sont rejetés. Ce changement a été implémenté uniquement dans Nightly à partir de Firefox 142 ([bogue Firefox 1976509 <sup>(angl.)</sup>](https://bugzil.la/1976509)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 145 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Positionnement d'ancre CSS** (Nightly)&nbsp;: `layout.css.anchor-positioning.enabled`

  Les versions Nightly prennent désormais en charge le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) par défaut, ce qui permet d'attacher des éléments entre eux.
  Les éléments positionnés par ancre peuvent alors avoir leur taille et leur position définies par rapport à la taille et à la position des éléments d'ancrage auxquels ils sont liés.
  (Général&nbsp;: [bogue Firefox 1988224 <sup>(angl.)</sup>](https://bugzil.la/1988224), {{CSSxRef("position-area")}}&nbsp;: [bogue Firefox 1924086 <sup>(angl.)</sup>](https://bugzil.la/1924086), solutions de repli personnalisées {{CSSxRef("@position-try")}}&nbsp;: [bogue Firefox 1962598 <sup>(angl.)</sup>](https://bugzil.la/1962598)).

- **Scripts modules CSS&nbsp;:** (Nightly) et `layout.css.module-scripts.enabled`.

  Les scripts modules CSS sont désormais pris en charge, permettant de charger une feuille de style dans un script comme instance de {{DOMxRef("CSSStyleSheet")}} à l'aide du mot-clé [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) et de l'attribut d'import [`type`](/fr/docs/Web/JavaScript/Reference/Statements/import/with) défini à `type="css"` ([bogue Firefox 1720570 <sup>(angl.)</sup>](https://bugzil.la/1720570)).

- **text-decoration-trim**&nbsp;: `layout.css.text-decoration-trim.enabled`

  La propriété CSS `text-decoration-trim` est prise en charge mais désactivée par défaut.
  Elle permet de définir les décalages de début et de fin de {{CSSxRef("text-decoration")}} pour raccourcir, allonger ou déplacer la position des décorations de texte par rapport au texte ([bogue Firefox 1979915 <sup>(angl.)</sup>](https://bugzil.la/1979915)).

- **API Trusted Types** pour les scripts (Nightly/Early Beta)&nbsp;: `dom.security.trusted_types.enabled`

  L'[API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) est désormais activée dans les versions bêta précoces ([bogue Firefox 1976656 <sup>(angl.)</sup>](https://bugzil.la/1976656)).

  Les changements incluent&nbsp;:
  - Ajout des interfaces {{DOMxRef("TrustedTypePolicyFactory")}}, {{DOMxRef("TrustedTypePolicy")}}, {{DOMxRef("TrustedHTML")}}, {{DOMxRef("TrustedScript")}}, {{DOMxRef("TrustedScriptURL")}} et de la propriété `trustedTypes` sur {{DOMxRef("Window/trustedTypes", "Window")}} et {{DOMxRef("WorkerGlobalScope/trustedTypes", "WorkerGlobalScope")}}.
  - Mises à jour des API [d'interfaces de point d'injection (<i lang="en">injection sink interfaces</i>)](/fr/docs/Web/API/Trusted_Types_API#interfaces_de_points_dinjection), telles que {{DOMxRef("Element.innerHTML")}} et {{DOMxRef("Document.write()", "document.write()")}}, pour permettre le passage de `TrustedHTML`, `TrustedScript`, `TrustedScriptURL` ainsi que des chaînes de caractères.
  - Prise en charge des directives [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) et [`trusted-types`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) et du mot-clé [`'trusted-types-eval'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) de l'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}}.
    Ceux-ci peuvent être utilisés pour imposer les types de confiance à la place des chaînes, nommer les politiques spécifiques autorisées, et permettre l'utilisation de [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) et de fonctions similaires lorsque [Trusted Types](/fr/docs/Web/API/Trusted_Types_API) sont pris en charge et appliqués.

- **En-têtes Storage Access** (Nightly)&nbsp;: `dom.storage_access.headers.enabled`.
  Les en-têtes HTTP {{HTTPHeader("Sec-Fetch-Storage-Access")}} et {{HTTPHeader("Activate-Storage-Access")}} sont désormais pris en charge, permettant un flux de travail plus efficace avec l'[API Storage Access](/fr/docs/Web/API/Storage_Access_API) ([bogue Firefox 1991688 <sup>(angl.)</sup>](https://bugzil.la/1991688)).
