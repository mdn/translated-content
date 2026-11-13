---
title: Firefox 158 note de version pour les développeurs
short-title: Firefox 158
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: bd4e1a75486ccdf2d36aef41c63d22ec5536b6a6
---

Cet article présente les informations concernant les changements de Firefox 158 qui concernent les développeur·euse·s.
Firefox 158 est sorti le [13 octobre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=158).

## Changements pour les développeur·euse·s web

### Accessibilité

- L'attribut [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) est désormais pris en charge dans Firefox pour Android (la prise en charge sur ordinateur de bureau est disponible depuis longtemps). Cet état ARIA indique si un élément est en cours de modification. Il permet aux technologies d'assistance d'attendre que les modifications du contenu soient terminées avant d'informer les utilisateur·ice·s de la mise à jour. Par exemple, un lecteur d'écran peut attendre qu'une [région dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions) ait fini de se mettre à jour avant d'annoncer les changements. ([bogue Firefox 908042 <sup>(angl.)</sup>](https://bugzil.la/908042)).

### HTML

Pas de changements notables.

### CSS

- [L'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) est désormais prise en charge, ce qui permet d'utiliser des fonctions telles que {{CSSxRef("calc()")}} pour diviser deux valeurs du même type de données, même si elles utilisent des unités différentes. Les quotients sans unité résultants peuvent ensuite être convertis en d'autres types de données, créant des relations utiles entre différentes valeurs sur une page. ([bogue Firefox 2067411 <sup>(angl.)</sup>](https://bugzil.la/2067411)).

### JavaScript

Pas de changements notables.

### HTTP

- L'en-tête HTTP [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept), par défaut pour les requêtes d'images, inclut désormais `image/jxl`, suite à la prise en charge du format d'image [JPEG XL](/fr/docs/Web/Media/Guides/Formats/Image_types#image_jpeg_xl). La nouvelle valeur est `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (voir [Liste des valeurs Accept par défaut](/fr/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#valeurs_pour_une_image)). ([bogue Firefox 2065096 <sup>(angl.)</sup>](https://bugzil.la/2065096)).

### APIs

- La méthode {{DOMxRef("WebTransport.getStats()")}} est désormais prise en charge. Cette méthode retourne des statistiques sur la connexion sous-jacente du transport et ses datagrammes. ([bogue Firefox 2007202 <sup>(angl.)</sup>](https://bugzil.la/2007202)).
- La propriété statique {{DOMxRef("WebTransport.supportsReliableOnly_static", "WebTransport.supportsReliableOnly")}} est désormais prise en charge. Cette propriété indique si le navigateur prend en charge les sessions [WebTransport](/fr/docs/Web/API/WebTransport_API) sur des protocoles de transport exclusivement fiables, tels que HTTP/2. Firefox ne prend pas encore en charge WebTransport sur HTTP/2, donc cette propriété retourne toujours `false`. ([bogue Firefox 2007783 <sup>(angl.)</sup>](https://bugzil.la/2007783)).
- L'option `navigate` du constructeur {{DOMxRef("Notification.Notification", "Notification()")}} et de la méthode {{DOMxRef("ServiceWorkerRegistration.showNotification()")}} est désormais prise en charge. Cette option permet de définir l'URL vers laquelle l'utilisateur·ice est redirigé·e après avoir cliqué sur la notification système générée. Une fois la notification créée, vous pouvez récupérer l'URL à partir de la propriété {{DOMxRef("Notification.navigate")}}. ([bogue Firefox 2069920 <sup>(angl.)</sup>](https://bugzil.la/2069920)).
- La fonctionnalité [WebGPU](/fr/docs/Web/API/WebGPU_API) `float32-blendable` est désormais prise en charge (voir {{DOMxRef("GPUSupportedFeatures")}}). Cela permet le [mélange](/fr/docs/Web/API/GPUDevice/createRenderPipeline#blend) de {{DOMxRef("GPUTexture")}} utilisant le [`format`](/fr/docs/Web/API/GPUDevice/createTexture#format) `r32float`, `rg32float` ou `rgba32float` [`format`](/fr/docs/Web/API/GPUDevice/createTexture#format). ([bogue Firefox 1931630 <sup>(angl.)</sup>](https://bugzil.la/1931630)).
- La fonctionnalité [WebGPU](/fr/docs/Web/API/WebGPU_API) `clip-distances` est désormais prise en charge sous macOS (voir {{DOMxRef("GPUSupportedFeatures")}}). Cela permet aux shaders de sommets de générer des [`clip_distances` <sup>(angl.)</sup>](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) en WGSL, qui suppriment les parties d'un triangle ou d'une ligne situées d'un côté d'un plan personnalisé, tandis que le reste est toujours dessiné. Cette fonctionnalité est utile pour des effets tels que les reflets dans l'eau ou les vues en coupe dans les applications de CAO. ([bogue Firefox 1931629 <sup>(angl.)</sup>](https://bugzil.la/1931629)).
- L'extension [WebGL](/fr/docs/Web/API/WebGL_API) {{DOMxRef("EXT_polygon_offset_clamp")}} est désormais disponible sur les appareils compatibles. Sa méthode {{DOMxRef("EXT_polygon_offset_clamp.polygonOffsetClampEXT()", "polygonOffsetClampEXT()")}} fonctionne comme {{DOMxRef("WebGLRenderingContext.polygonOffset()", "polygonOffset()")}}, avec un argument supplémentaire qui limite le décalage de profondeur. Cela permet d'éviter l'apparition de trous dans les ombres lors de l'utilisation du rendu d'ombres. ([bogue Firefox 1854003 <sup>(angl.)</sup>](https://bugzil.la/1854003)).
- La propriété {{DOMxRef("PerformanceResourceTiming.deliveryType")}} est désormais prise en charge, elle indique comment une ressource a été fournie. La version initiale prend en charge la valeur `cache`, qui indique que la ressource provient du cache. ([bogue Firefox 1914120 <sup>(angl.)</sup>](https://bugzil.la/1914120), [bogue Firefox 2071913 <sup>(angl.)</sup>](https://bugzil.la/2071913)).

#### DOM

- La méthode {{DOMxRef("SVGGraphicsElement.getBBox()")}} respecte désormais les propriétés `fill` et `stroke` de son argument [`options`](/fr/docs/Web/API/SVGGraphicsElement/getBBox#options) lorsqu'elle est appelée sur les éléments SVG {{SVGElement("tspan")}} et {{SVGElement("textPath")}}. Cela vous permet d'obtenir une boîte englobante qui inclut le trait d'un segment de texte, comme vous pouvez déjà le faire pour un élément SVG {{SVGElement("text")}} entier. ([bogue Firefox 2072680 <sup>(angl.)</sup>](https://bugzil.la/2072680)).
- L'option [`javascriptURLs`](/fr/docs/Web/API/SanitizerConfig#javascripturls) de la configuration de [l'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API) et la méthode {{DOMxRef("Sanitizer.setJavascriptURLs()")}} sont désormais prises en charge. Elles définissent si un assainisseur supprime les attributs contenant des URL [`javascript:`](/fr/docs/Web/URI/Reference/Schemes/javascript), comme `<a href="javascript:…">`, lorsqu'il est utilisé avec une méthode non sécurisée comme {{DOMxRef("Element.setHTMLUnsafe()")}}. Les méthodes sécurisées, comme {{DOMxRef("Element.setHTML()")}}, les suppriment toujours. En conséquence, les méthodes non sécurisées suppriment désormais les URL `javascript:` lorsqu'elles sont utilisées avec l'assainisseur par défaut, ou avec un assainisseur après l'appel de {{DOMxRef("Sanitizer.removeUnsafe()")}}. ([bogue Firefox 2068934 <sup>(angl.)</sup>](https://bugzil.la/2068934)).

#### Média, WebRTC et Web Audio

- Lors de l'envoi de vidéo H.264 ou AV1 avec [WebRTC](/fr/docs/Web/API/WebRTC_API), Firefox réduit désormais la résolution et la fréquence d'images au besoin afin de respecter le niveau de codec négocié avec le pair distant, défini par le paramètre `profile-level-id` pour [H.264](/fr/docs/Web/Media/Guides/Formats/WebRTC_codecs#avc_h.264) et `level-idx` pour [AV1](/fr/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1). Par conséquent, {{DOMxRef("MediaCapabilities.encodingInfo()")}} indique désormais qu'une configuration `webrtc` est prise en charge même si sa résolution et sa fréquence d'images dépassent le niveau de son `contentType`. ([bogue Firefox 2013936 <sup>(angl.)</sup>](https://bugzil.la/2013936)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Ajout de la prise en charge de la définition des permissions `camera` et `microphone` avec la commande `permissions.setPermission` dans WebDriver BiDi et la commande `WebDriver:SetPermission` dans Marionette. Cela permet aux tests d'autoriser ou de refuser l'accès aux appareils multimédias sans solliciter l'utilisateur·ice. ([bogue Firefox 2070577 <sup>(angl.)</sup>](https://bugzil.la/2070577)).
- Les tolérances de début et de déplacement du toucher passent à zéro en automatisation, afin que les actions tactiles fassent défiler la page exactement depuis la position où elles sont déclenchées, sans absorber les petits déplacements initiaux. ([bogue Firefox 2055661 <sup>(angl.)</sup>](https://bugzil.la/2055661)).

#### WebDriver BiDi

- Ajout de la prise en charge de l'argument `imageSize` à la commande `browsingContext.captureScreenshot`, qui permet aux clients de définir la taille maximale de l'image de capture d'écran obtenue. ([bogue Firefox 2069002 <sup>(angl.)</sup>](https://bugzil.la/2069002)).
- Ajout de la prise en charge de l'argument `destinationFolder` à la commande `browsingContext.startScreencast`, qui permet aux clients de choisir le dossier où le fichier vidéo enregistré est sauvegardé. ([bogue Firefox 2072616 <sup>(angl.)</sup>](https://bugzil.la/2072616)).

#### Marionette

- Correction de la commande `WebDriver:TakeScreenshot` afin qu'elle retourne une erreur `unable to capture screen` lorsque la largeur ou la hauteur de l'image capturée est égale à zéro. ([bogue Firefox 1492357 <sup>(angl.)</sup>](https://bugzil.la/1492357)).

### Autre

- La prise en charge du format d'image [JPEG XL](/fr/docs/Web/Media/Guides/Formats/Image_types#image_jpeg_xl) (`image/jxl`) est désormais activée par défaut. JPEG XL est un format d'image matricielle libre de droits qui prend en charge la compression avec et sans perte, la transparence, l'animation et la HDR. Il peut aussi transcoder sans perte les images JPEG existantes. ([bogue Firefox 2065096 <sup>(angl.)</sup>](https://bugzil.la/2065096)).

## Changements pour les développeur·euse·s d'extensions

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} déclenche désormais une erreur lorsqu'il reçoit un nom d'hôte invalide, au lieu de retourner `false`. ([bogue Firefox 2066620 <sup>(angl.)</sup>](https://bugzil.la/2066620))
- Ajout de [`runtime.getVersion()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) pour retourner la version de l'extension telle qu'elle est déclarée dans le manifeste. ([bogue Firefox 1992418 <sup>(angl.)</sup>](https://bugzil.la/1992418))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 158 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **La fonction CSS `random()`**&nbsp;: `layout.css.random.enabled`

  La fonction CSS {{CSSxRef("random")}} génère une valeur aléatoire dans une plage définie, avec la possibilité de limiter les valeurs disponibles à des intervalles de taille déterminée entre ces limites. Un paramètre facultatif `<random-key>` détermine quelles fonctions `random()` partagent une valeur aléatoire, par exemple entre plusieurs éléments ou propriétés.
  ([bogue Firefox 2071165 <sup>(angl.)</sup>](https://bugzil.la/2071165)).

- **Les propriétés `corner-shape`**&nbsp;: `layout.css.corner-shape.enabled`

  La propriété raccourcie {{CSSxRef("corner-shape")}} et ses propriétés longues constitutives sont désormais prises en charge dans Nightly. Elles permettent de personnaliser la forme des coins à l'aide d'une des clés et valeurs de {{CSSxRef("corner-shape-value")}} ou de la fonction {{CSSxRef("superellipse")}}.
  ([bogue Firefox 2070927 <sup>(angl.)</sup>](https://bugzil.la/2070927)).

- **Évaluation différée des modules** (Nightly)&nbsp;: `javascript.options.experimental.defer_import_eval`

  La déclaration [`import defer`](/fr/docs/Web/JavaScript/Reference/Statements/import/defer) et la syntaxe [`import.defer()`](/fr/docs/Web/JavaScript/Reference/Operators/import/defer) sont désormais disponibles dans Nightly derrière une préférence. Elles chargent un module et ses dépendances en amont, mais n'exécutent le code du module que lorsqu'un de ses exports est consulté pour la première fois. Les modules qui ne sont pas nécessaires immédiatement ne ralentissent donc pas le démarrage. Les modules qui utilisent `await` au niveau supérieur s'exécutent tout de même immédiatement. ([bogue Firefox 1952263 <sup>(angl.)</sup>](https://bugzil.la/1952263)).

- **La reconnaissance vocale sur l'appareil**&nbsp;: `media.webspeech.recognition.enable`

  [La reconnaissance vocale sur l'appareil](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) est désormais prise en charge dans Nightly, uniquement sur bureau. Cela vous permet d'effectuer la reconnaissance vocale par le biais de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API) directement dans le navigateur, plutôt que de dépendre d'un service cloud.
  ([bogue Firefox 2069803 <sup>(angl.)</sup>](https://bugzil.la/2069803)).

- **Règles de spéculation&nbsp;: anticipation modérée**&nbsp;: `dom.speculation_rules.enabled`

  [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) fournit un mécanisme permettant d'améliorer les performances des navigations futures en définissant quelles ressources doivent être préchargées ou pré-rendues en fonction de facteurs tels que le comportement de l'utilisateur·ice vis-à-vis des liens. Firefox 158 Nightly ajoute la prise en charge de la propension [`moderate`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate)&nbsp;: un préchargement correspondant démarre une fois que l'utilisateur·ice survole un lien pendant un court instant (200 millisecondes par défaut).
  ([bogue Firefox 2061013 <sup>(angl.)</sup>](https://bugzil.la/2061013)).

- **Les corps de requête en flux**&nbsp;: `dom.fetch.streaming_upload`

  Activée uniquement dans Nightly, cette fonctionnalité permet de définir un {{DOMxRef("ReadableStream")}} comme corps de requête (par exemple, avec le constructeur {{DOMxRef("Request.Request", "Request()")}} ou la méthode {{DOMxRef("Window.fetch()")}}). Vous pouvez ainsi envoyer les données progressivement au lieu d'attendre que le corps entier soit disponible.
  ([bogue Firefox 1594633 <sup>(angl.)</sup>](https://bugzil.la/1594633)).

- **`CSSNumericValue.equals()`**&nbsp;: `layout.css.typed-om.enabled`

  La méthode {{DOMxRef("CSSNumericValue.equals()")}} de [l'API CSS Typed Object Model](/fr/docs/Web/API/CSS_Typed_OM_API) est désormais prise en charge dans Nightly. Elle retourne `true` si chaque valeur qui lui est passée est identique à la valeur numérique sur laquelle elle est appelée, et `false` sinon. Les valeurs sont comparées telles qu'elles sont écrites, sans conversion d'unités. Par exemple, `1in` et `2.54cm` sont différentes, tout comme `calc(1px + 2px)` et `calc(2px + 1px)`. ([bogue Firefox 2074503 <sup>(angl.)</sup>](https://bugzil.la/2074503)).
