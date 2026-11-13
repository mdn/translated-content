---
title: Firefox 160 note de version pour les développeurs
short-title: Firefox 160
slug: Mozilla/Firefox/Releases/160
l10n:
  sourceCommit: 4bf4746470a4d0bd53e4ae7d320849d0c912bb10
---

Cet article présente les informations concernant les changements de Firefox 160 qui concernent les développeur·euse·s.
Firefox 160 est sorti le [10 novembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=160).

## Changements pour les développeur·euse·s web

### HTML

Pas de changements notables.

### CSS

- Le pseudo-élément `::-webkit-input-placeholder` est désormais pris en charge comme alias de {{CSSxRef("::placeholder")}}, pour assurer la compatibilité avec les sites web qui l'utilisent pour mettre en forme le texte de l'espace réservé des éléments HTML {{HTMLElement("input")}} et {{HTMLElement("textarea")}}. ([bogue Firefox 2083700 <sup>(angl.)</sup>](https://bugzil.la/2083700)).

### JavaScript

Pas de changements notables.

### APIs

- Le constructeur {{DOMxRef("WebTransport.WebTransport", "WebTransport()")}} accepte désormais l'option [`headers`](/fr/docs/Web/API/WebTransport/WebTransport#headers), qui ajoute des en-têtes HTTP personnalisés à la requête [`CONNECT` étendue](/fr/docs/Web/HTTP/Reference/Methods/CONNECT#connect_étendue) qui initialise la session.
  Les en-têtes que le serveur envoie dans sa réponse sont disponibles dans la propriété {{DOMxRef("WebTransport.responseHeaders")}} une fois la session établie.
  ([bogue Firefox 2081470 <sup>(angl.)</sup>](https://bugzil.la/2081470), [bogue Firefox 2033220 <sup>(angl.)</sup>](https://bugzil.la/2033220)).
- La méthode {{DOMxRef("WebTransport.exportKeyingMaterial()")}} a été mise à jour pour correspondre à la spécification actuelle.
  L'argument `context` est désormais obligatoire, et un nouvel argument [`outputLength`](/fr/docs/Web/API/WebTransport/exportKeyingMaterial#outputlength) définit le nombre d'octets de matériel de clé à dériver.
  Auparavant, la méthode renvoyait toujours 32 octets.
  Le code qui omet l'un ou l'autre argument doit être mis à jour.
  ([bogue Firefox 2079306 <sup>(angl.)</sup>](https://bugzil.la/2079306)).
- Les propriétés {{DOMxRef("WebTransportDatagramDuplexStream.incomingMaxBufferedDatagrams", "incomingMaxBufferedDatagrams")}} et {{DOMxRef("WebTransportDatagramDuplexStream.outgoingMaxBufferedDatagrams", "outgoingMaxBufferedDatagrams")}} de l'interface {{DOMxRef("WebTransportDatagramDuplexStream")}} sont désormais prises en charge.
  Elles remplacent les propriétés non standard {{DOMxRef("WebTransportDatagramDuplexStream.incomingHighWaterMark", "incomingHighWaterMark")}} et {{DOMxRef("WebTransportDatagramDuplexStream.outgoingHighWaterMark", "outgoingHighWaterMark")}}, qui ont été supprimées.
  Ces propriétés représentent le nombre maximum de datagrammes entrants pouvant être mis en file d'attente en attendant d'être lus, et le nombre maximum de datagrammes sortants pouvant être mis en file d'attente pour l'envoi avant que la contre-pression ne soit appliquée.
  ([bogue Firefox 2023587 <sup>(angl.)</sup>](https://bugzil.la/2023587)).
- Le constructeur {{DOMxRef("WebTransport.WebTransport", "WebTransport()")}} prend désormais en charge l'option [`datagramsReadableType`](/fr/docs/Web/API/WebTransport/WebTransport#datagramsreadabletype).
  La définir sur `bytes` fait du flux de datagrammes entrants du transport, {{DOMxRef("WebTransportDatagramDuplexStream.readable", "transport.datagrams.readable")}}, un [flux d'octets lisible](/fr/docs/Web/API/Streams_API/Using_readable_byte_streams).
  Vous pouvez ensuite utiliser un {{DOMxRef("ReadableStreamBYOBReader")}} pour lire chaque datagramme dans un tampon que vous fournissez et réutilisez, au lieu de recevoir un nouveau {{JSxRef("Uint8Array")}} pour chaque datagramme.
  ([bogue Firefox 2007755 <sup>(angl.)</sup>](https://bugzil.la/2007755)).
- Les propriétés {{DOMxRef("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} et {{DOMxRef("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} de l'interface `WebTransport` sont désormais prises en charge, ainsi que les propriétés `options` correspondantes qui peuvent être utilisées pour les définir dans le constructeur {{DOMxRef("WebTransport/WebTransport", "WebTransport()")}}.
  Ces propriétés représentent le nombre maximum de flux unidirectionnels et bidirectionnels entrants, respectivement, que l'application s'attend à ce que le serveur ait ouverts en même temps.
  ([bogue Firefox 2007825 <sup>(angl.)</sup>](https://bugzil.la/2007825)).
- La [reconnaissance vocale sur l'appareil](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) utilisant [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API) est désormais disponible sur le bureau, permettant la conversion en temps réel de la parole en texte sur l'appareil dans 40 langues.
  La reconnaissance n'est pas prise en charge sur Android, et la reconnaissance distante (cloud) non plus.
  ([bogue Firefox 2080908 <sup>(angl.)</sup>](https://bugzil.la/2080908)).

#### Suppressions

- L'évènement non standard `MozScrolledAreaChanged` n'est plus envoyé aux pages web. Il était déclenché sur le document lorsque la taille de la zone défilable de la page changeait. Il est désormais disponible uniquement pour l'interface utilisateur de Firefox. Vous pouvez restaurer l'évènement pour les pages web en définissant la préférence `layout.scrolled-area-changed.content.enabled` sur `true`. ([bogue Firefox 2079865 <sup>(angl.)</sup>](https://bugzil.la/2079865)).

## Changements pour les développeur·euse·s d'extensions

- {{WebExtAPIRef("runtime.PlatformInfo")}} retourne désormais `arch` comme `arm64` pour les plateformes ARM64. Auparavant, il retournait `aarch64`. Cela aligne la valeur retournée par Firefox pour les plateformes ARM64 avec Chrome. ([bogue Firefox 2080310 <sup>(angl.)</sup>](https://bugzil.la/2080310)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 160 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Blocage du rendu**&nbsp;: `dom.element.blocking.enabled`

  L'attribut et la valeur `blocking="render"` sont désormais pris en charge pour les éléments HTML `{{HTMLElement("link#blocking","&lt;link&gt;")}}`, `{{HTMLElement("script#blocking","&lt;script&gt;")}}` et `{{HTMLElement("style#blocking","&lt;style&gt;")}}`. Cela permet de bloquer le rendu jusqu'à ce que la feuille de style de l'élément soit chargée ou que son script ait été exécuté, y compris pour les éléments qui ne bloquent pas le rendu par défaut, tels que les scripts et les feuilles de style ajoutés avec JavaScript. ([bogue Firefox 1751383 <sup>(angl.)</sup>](https://bugzil.la/1751383)).

- **Chargement paresseux pour la vidéo et l'audio**&nbsp;: `media.lazy_loading.enabled`

  L'attribut `loading` des éléments {{HTMLElement("video", "", "#loading")}} et {{HTMLElement("audio", "", "#loading")}}, ainsi que la propriété {{DOMxRef("HTMLMediaElement.loading")}} qui le reflète, sont désormais pris en charge. Avec `loading="lazy"`, le navigateur reporte le chargement du média, le chargement de l'image d'affiche de la vidéo et le démarrage de la lecture `autoplay` jusqu'à ce que l'élément soit proche de la zone visible. ([bogue Firefox 2005072 <sup>(angl.)</sup>](https://bugzil.la/2005072)).

- **Règles de spéculation&nbsp;: en-tête `Speculation-Rules`**&nbsp;: `dom.speculation_rules.enabled`

  La prise en charge de l'en-tête de réponse HTTP {{HTTPHeader("Speculation-Rules")}} est activée par défaut dans Nightly. Il répertorie les URL des fichiers externes contenant des [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API), comme alternative à un élément HTML [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules) en incise. L'en-tête ne s'applique qu'aux documents de premier niveau, et chaque fichier doit être servi avec le type MIME `application/speculationrules+json`. ([bogue Firefox 2020709 <sup>(angl.)</sup>](https://bugzil.la/2020709)).

- **Méthodes arithmétiques de `CSSNumericValue`**&nbsp;: `layout.css.typed-om.enabled`

  Les méthodes {{DOMxRef("CSSNumericValue.add()", "add()")}}, {{DOMxRef("CSSNumericValue.sub()", "sub()")}}, {{DOMxRef("CSSNumericValue.mul()", "mul()")}} et {{DOMxRef("CSSNumericValue.div()", "div()")}} de l'interface {{DOMxRef("CSSNumericValue")}} dans [l'API CSS Typed Object Model](/fr/docs/Web/API/CSS_Typed_OM_API) sont désormais prises en charge dans Nightly.
  Elles additionnent, soustraient, multiplient ou divisent respectivement des valeurs numériques&nbsp;; par exemple, `CSS.px(10).add(CSS.px(5))` additionne deux valeurs en pixels.
  Le résultat est un {{DOMxRef("CSSUnitValue")}} (`15px` dans cet exemple) lorsqu'il peut être simplifié en une seule unité, ou une expression mathématique telle qu'un {{DOMxRef("CSSMathSum")}} lorsqu'il ne peut pas être simplifié (par exemple, lors de l'addition de `px` à `%`). ([bogue Firefox 2081689 <sup>(angl.)</sup>](https://bugzil.la/2081689)).

- **Espace colorimétrique Canvas 2D**&nbsp;: `gfx.canvas.colorspace.enabled`

  L'option [`colorSpace`](/fr/docs/Web/API/HTMLCanvasElement/getContext#colorspace) de {{DOMxRef("HTMLCanvasElement.getContext()")}} et {{DOMxRef("OffscreenCanvas.getContext()")}} est désormais prise en charge pour les contextes `2d`. {{DOMxRef("CanvasRenderingContext2D.getContextAttributes()")}} retourne l'espace colorimétrique sélectionné. Les données d'image ont également un espace colorimétrique&nbsp;: la propriété {{DOMxRef("ImageData.colorSpace")}} le retourne. Le paramètre `colorSpace` du constructeur {{DOMxRef("ImageData.ImageData", "ImageData()")}} et des méthodes {{DOMxRef("CanvasRenderingContext2D.createImageData()", "createImageData()")}} et {{DOMxRef("CanvasRenderingContext2D.getImageData()", "getImageData()")}} le définit. Les valeurs prises en charge sont `"srgb"` et `"display-p3"`. Les données de pixels ne sont pas encore converties entre les espaces colorimétriques, donc `getImageData()` retourne les mêmes pixels quel que soit l'espace colorimétrique demandé. ([bogue Firefox 1841326 <sup>(angl.)</sup>](https://bugzil.la/1841326)).
