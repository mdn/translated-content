---
title: Firefox 161 note de version pour les développeurs
short-title: Firefox 161
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 5b678632840c829c7f0ac157372e46cfcb60bc91
---

Cet article présente les informations concernant les changements de Firefox 161 qui concernent les développeur·euse·s.
Firefox 161 est sorti le [24 novembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=161).

## Changements pour les développeur·euse·s web

### HTML

Pas de changements notables.

### SVG

- L'attribut [`referrerpolicy`](/fr/docs/Web/SVG/Reference/Attribute/referrerpolicy) est désormais pris en charge sur les éléments {{SVGElement("image")}}, {{SVGElement("script")}} et {{SVGElement("feImage")}}, ainsi que sur les propriétés correspondantes {{DOMxRef("SVGImageElement.referrerPolicy")}}, {{DOMxRef("SVGScriptElement.referrerPolicy")}} et {{DOMxRef("SVGFEImageElement.referrerPolicy")}}.
  Ces éléments contrôlent la quantité d'informations de référent envoyées dans l'en-tête {{HTTPHeader("Referer")}} lorsque l'élément récupère la ressource référencée par son attribut `href`. Cela fonctionne de la même manière que l'attribut `referrerpolicy` sur les éléments HTML {{HTMLElement("img")}} et {{HTMLElement("script")}}.
  ([bogue Firefox 2079321 <sup>(angl.)</sup>](https://bugzil.la/2079321)).

### CSS

- La fonction CSS {{CSSxRef("random")}} est désormais prise en charge. Elle génère une valeur aléatoire dans une plage définie et peut éventuellement limiter les valeurs possibles à des incréments d'une taille de pas définie. Un paramètre optionnel `<random-key>` peut être utilisé pour partager une valeur de base aléatoire entre les fonctions `random()`, par exemple sur différents éléments ou dans différentes propriétés. ([bogue Firefox 2072252 <sup>(angl.)</sup>](https://bugzil.la/2072252)).
- Les fonctions CSS {{CSSxRef("var")}}, {{CSSxRef("attr")}} et {{CSSxRef("env")}} acceptent désormais des fonctions imbriquées dans leur premier paramètre. Par exemple, `var(attr(data-theme-prop type(<custom-ident>)))` et `env(var(--safe-area-block-start))` sont désormais pris en charge. ([bogue Firefox 2080511 <sup>(angl.)</sup>](https://bugzil.la/2080511)).

### JavaScript

Pas de changements notables.

### HTTP

- Le [Compression Dictionary Transport](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) est désormais pris en charge. Un serveur peut marquer une réponse comme dictionnaire en utilisant l'en-tête {{HTTPHeader("Use-As-Dictionary")}}. Le navigateur liste ensuite le dictionnaire stocké dans l'en-tête {{HTTPHeader("Available-Dictionary")}} des requêtes correspondantes, et le serveur peut répondre avec une réponse compressée contre celui-ci, en utilisant les valeurs {{HTTPHeader("Content-Encoding")}} `dcb` (Brotli) ou `dcz` (Zstandard). Cela peut considérablement réduire la taille des ressources qui changent peu entre les versions, comme les bundles JavaScript. ([bogue Firefox 2039320 <sup>(angl.)</sup>](https://bugzil.la/2039320)).

### APIs

- Les propriétés {{DOMxRef("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} et {{DOMxRef("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} de l'interface `WebTransport` sont désormais prises en charge, ainsi que les propriétés `options` correspondantes qui peuvent être utilisées pour les définir dans le constructeur {{DOMxRef("WebTransport/WebTransport", "WebTransport()")}}.
  Ces propriétés représentent respectivement le nombre maximum de flux unidirectionnels et bidirectionnels entrants que l'application s'attend à ce que le serveur ait ouverts en même temps.
  ([bogue Firefox 2007825 <sup>(angl.)</sup>](https://bugzil.la/2007825)).
- [L'API Clipboard](/fr/docs/Web/API/Clipboard_API) prend désormais en charge les [formats de presse-papiers personnalisés](/fr/docs/Web/API/Clipboard_API#custom_clipboard_formats), ce qui permet aux applications web d'écrire et de lire leurs propres formats de données en utilisant {{DOMxRef("Clipboard.write()")}} et {{DOMxRef("Clipboard.read()")}}.
  Un format personnalisé est un type MIME préfixé par `"web "`, par exemple `"web text/x-my-format"`.
  Les formats personnalisés ne peuvent être lus que par une page ayant la même origine que la page qui les a écrits.
  ([bogue Firefox 2053725 <sup>(angl.)</sup>](https://bugzil.la/2053725), [bogue Firefox 2086505 <sup>(angl.)</sup>](https://bugzil.la/2086505)).

- La propriété {{DOMxRef("NavigationTransition.to")}} de [l'API Navigation](/fr/docs/Web/API/Navigation_API) est désormais prise en charge.
  Elle retourne un {{DOMxRef("NavigationDestination")}} pour la navigation en cours, de sorte que le code en dehors du gestionnaire d'évènements {{DOMxRef("Navigation/navigate_event", "navigate")}} peut savoir où la navigation se dirige.
  Par exemple, un gestionnaire {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}} peut l'utiliser pour signaler quelle navigation a échoué.
  ([bogue Firefox 1991959 <sup>(angl.)</sup>](https://bugzil.la/1991959)).
- [L'API CSS Typed Object Model](/fr/docs/Web/API/CSS_Typed_OM_API) est désormais prise en charge.
  Cela permet aux scripts de lire et d'écrire des valeurs CSS en tant qu'objets JavaScript typés au lieu de chaînes de caractères, par exemple avec {{DOMxRef("Element.computedStyleMap()")}} et {{DOMxRef("HTMLElement.attributeStyleMap")}}.
  Les interfaces de valeurs de couleur, telles que `CSSColorValue` et `CSSRGB`, ne sont pas prises en charge dans Firefox ni dans aucun autre navigateur.
  ([bogue Firefox 2089681 <sup>(angl.)</sup>](https://bugzil.la/2089681)).

#### Média, WebRTC et Web Audio

- La méthode {{DOMxRef("RTCRtpSender.setParameters()")}} prend désormais en charge le paramètre optionnel [`setParameterOptions`](/fr/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions).
  Cela permet de demander à l'encodeur de générer une image clé dans le même appel que celui utilisé pour modifier les paramètres d'encodage de l'expéditeur, tels que `active` ou `scaleResolutionDownBy`. Les récepteurs peuvent alors éviter de demander une image clé après la modification.
  ([bogue Firefox 2057265 <sup>(angl.)</sup>](https://bugzil.la/2057265)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mise à jour de la commande `script.callFunction` pour retourner une erreur `invalid argument` lorsqu'un argument ou la valeur `this` contient une valeur locale avec un `type` inconnu, y compris les valeurs imbriquées. Auparavant, ces valeurs étaient remplacées silencieusement par `undefined`. ([bogue Firefox 2084105 <sup>(angl.)</sup>](https://bugzil.la/2084105)).
- Mise à jour des commandes `script.evaluate` et `script.callFunction` pour ne plus effacer un indicateur d'activation utilisateur préexistant lorsqu'elles sont appelées avec `userActivation: false`. ([bogue Firefox 2084107 <sup>(angl.)</sup>](https://bugzil.la/2084107)).
- Correction d'un problème où les commandes `browsingContext.navigate` et `browsingContext.reload` pouvaient se bloquer ou échouer avec la mauvaise erreur lorsqu'une navigation commençait alors que le document précédent était encore en cours de chargement. ([bogue Firefox 2088640 <sup>(angl.)</sup>](https://bugzil.la/2088640)).
- Correction d'un problème de performance où chaque appel à la commande `browsingContext.setViewport` devenait plus lent au cours de la session. ([bogue Firefox 2084362 <sup>(angl.)</sup>](https://bugzil.la/2084362)).
- Correction de la commande `network.continueRequest` afin que le remplacement du corps d'une requête qui a déjà un corps mette également à jour l'en-tête `Content-Length`. Auparavant, le serveur pouvait recevoir un corps tronqué ou incomplet. ([bogue Firefox 2088814 <sup>(angl.)</sup>](https://bugzil.la/2088814)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 161 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Propriété `margin-trim`**&nbsp;: `layout.css.margin-trim.enabled`

  La propriété {{CSSxRef("margin-trim")}} est désormais prise en charge pour les conteneurs de blocs et est activée par défaut dans Nightly. Elle supprime les marges de l'axe de bloc des éléments enfants au bord de début, au bord de fin ou aux deux bords du conteneur, tout en conservant les marges entre les éléments voisins.
  ([bogue Firefox 2051240 <sup>(angl.)</sup>](https://bugzil.la/2051240)).

- **Transitions de vue inter-documents** (Nightly)&nbsp;: `dom.viewTransitions.cross-document.enabled`

  Les [transitions de vue inter-documents](/fr/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) sont désormais activées par défaut dans Nightly.
  Celles-ci peuvent être utilisées pour animer la transition entre des pages de même origine dans une application multi-pages.
  ([bogue Firefox 2084340 <sup>(angl.)</sup>](https://bugzil.la/2084340)).

- **Blocage du rendu** (Nightly)&nbsp;: `dom.element.blocking.enabled`

  L'attribut `blocking="render"` des éléments `{{HTMLElement("link#blocking","&lt;link&gt;")}}`, `{{HTMLElement("script#blocking","&lt;script&gt;")}}` et `{{HTMLElement("style#blocking","&lt;style&gt;")}}` est désormais activé par défaut dans Nightly.
  Cela permet de bloquer le rendu de la page jusqu'à ce que la feuille de style marquée soit chargée ou que le script soit exécuté, afin que la page n'apparaisse pas d'abord sans mise en forme ou incomplète.
  ([bogue Firefox 2084340 <sup>(angl.)</sup>](https://bugzil.la/2084340)).

- **Valeur `match-parent` pour `quotes`** (Nightly)&nbsp;: `layout.css.quotes.match-parent.enabled`

  La propriété CSS {{CSSxRef("quotes")}} prend désormais en charge la valeur {{CSSxRef("quotes", "match-parent", "#match-parent")}}, qui fait qu'un élément utilise les guillemets du même ensemble de paires de guillemets que son élément parent.
  ([bogue Firefox 1752382 <sup>(angl.)</sup>](https://bugzil.la/1752382)).

- **Propriété `text-autospace-size`**&nbsp;: `layout.css.text-autospace-size.enabled`

  La propriété {{CSSxRef("text-autospace-size")}} est désormais prise en charge et est activée par défaut dans Nightly. Elle définit la quantité d'espace que {{CSSxRef("text-autospace")}} ajoute entre les caractères chinois/japonais/coréens (CJK) et les caractères non-CJK.
  ([bogue Firefox 2086765 <sup>(angl.)</sup>](https://bugzil.la/2086765)).

- **`prefers-color-scheme` reflète `<meta name="color-scheme">`**&nbsp;: `layout.css.prefers-color-scheme.meta-tag.enabled`

  La caractéristique média {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}} reflète désormais le schéma de couleurs déclaré par un élément [`<meta name="color-scheme">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme), lorsque l'élément définit un seul schéma. Cela permet une meilleure sélection des images et des vidéos en fonction du schéma de couleurs. Cela facilite également la mise en œuvre des commutateurs de thème. La préférence est activée par défaut dans Nightly. ([bogue Firefox 2085572 <sup>(angl.)</sup>](https://bugzil.la/2085572)).
