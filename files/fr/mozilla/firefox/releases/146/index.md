---
title: Firefox 146 pour les développeurs
short-title: Firefox 146
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 30487c754854c3f21157827914eefb94d0e5bd4d
---

Cet article présente les informations concernant les changements de Firefox 146 qui concernent les développeur·euse·s.
Firefox 146 est sorti le [9 décembre 2025 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=146).

## Changements pour les développeur·euse·s web

### Outils de développement

- Dans la vue Règles de l'Inspecteur, lorsqu'un jeu de règles affiché déclare 10 [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) ou plus qui ne sont pas utilisées, ces propriétés sont masquées par défaut. Cela réduit l'encombrement et dans certains cas, accélère aussi le rendu du panneau Inspecteur. Dans ce cas, les propriétés masquées peuvent être affichées via un bouton «&nbsp;Afficher…&nbsp;» fourni en bas du jeu de règles.
  ([Firefox bug 1719461 <sup>(angl.)</sup>](https://bugzil.la/1719461)).

### HTML

Aucun changement notable.

### MathML

- Le miroir d'opérateurs en modes de droite à gauche (<abbr title="Right-To-Left">RTL</abbr>) et l'étirement fonctionnent désormais correctement lorsqu'ils sont utilisés en combinaison.
  ([Firefox bug 1994172 <sup>(angl.)</sup>](https://bugzil.la/1994172)).
- La propriété CSS {{CSSxRef("math-shift")}} est désormais prise en charge. Elle permet aux développeur·euse·s d'indiquer si le rendu des exposants dans les formules MathML doit être normal ou compact, ce qui influe sur la hauteur à laquelle le texte en exposant est décalé.
  ([Firefox bug 1994171 <sup>(angl.)</sup>](https://bugzil.la/1994171)).

### CSS

- La fonction {{CSSxRef("color_value/contrast-color()")}} est désormais prise en charge. Cette fonction prend une valeur de type {{CSSxRef("&lt;color&gt;")}} et retourne une couleur contrastée qui assure au moins le contraste minimum [WCAG AA <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum).
  ([Firefox bug 1682439 <sup>(angl.)</sup>](https://bugzil.la/1682439)).

- Le type de donnée {{CSSxRef("&lt;color&gt;")}} prend désormais en charge l'espace colorimétrique `display-p3-linear`. Cet espace est similaire à [`display-p3`](/fr/docs/Glossary/Color_space#display-p3), mais il utilise une fonction de transfert en lumière linéaire et n'a pas de codage gamma, ce qui permet une plus grande précision des couleurs affichées.
  ([Firefox bug 1996318 <sup>(angl.)</sup>](https://bugzil.la/1996318)).

- La propriété {{CSSxRef("text-decoration-inset")}} est désormais prise en charge, elle permet d'ajuster les points de début et de fin de la {{CSSxRef("text-decoration")}} d'un élément afin de la raccourcir, l'allonger ou en décaler la position par rapport au texte rendu.
  ([Firefox bug 1979915 <sup>(angl.)</sup>](https://bugzil.la/1979915), [Firefox bug 1997157 <sup>(angl.)</sup>](https://bugzil.la/1997157), [Firefox bug 1993043 <sup>(angl.)</sup>](https://bugzil.la/1993043)).

- La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@scope")}} est désormais activée par défaut. Elle vous permet de sélectionner des éléments dans des sous-arbres DOM spécifiques, ciblant les éléments précisément sans écrire des sélecteurs trop spécifiques difficiles à outrepasser, et sans coupler excessivement vos sélecteurs à la structure DOM. ([Firefox bug 1991105 <sup>(angl.)</sup>](https://bugzil.la/1991105)).

- Le mot-clé obsolète [`-webkit-fill-available`](/fr/docs/Web/CSS/Reference/Webkit_extensions#propriétés_de_valeurs_préfixées_par_-webkit) est désormais pris en charge comme valeur pour les propriétés CSS {{CSSxRef("width")}} et {{CSSxRef("height")}} afin d'améliorer la compatibilité web.
  Ce mot-clé est un alias du mot-clé récemment standardisé `stretch` (c'est-à-dire [`width: stretch`](/fr/docs/Web/CSS/Reference/Properties/width#stretch) et [`height: stretch`](/fr/docs/Web/CSS/Reference/Properties/height#stretch)), qui n'est pas encore pris en charge dans Firefox.
  ([Firefox bug 1988938 <sup>(angl.)</sup>](https://bugzil.la/1988938), [Firefox bug 1789477 <sup>(angl.)</sup>](https://bugzil.la/1789477)).

### JavaScript

- Les objets {{JSxRef("WeakMap")}} et {{JSxRef("WeakSet")}} acceptent désormais des objets {{JSxRef("Symbol")}} en tant que clés, excepté ceux qui sont [enregistrés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_dans_le_registre_global_des_symboles). ([Firefox bug 1966745 <sup>(angl.)</sup>](https://bugzil.la/1966745)).

### APIs

- La méthode {{DOMxRef("SubtleCrypto.importKey()")}} permet désormais d'importer des clés définies comme des points de courbe elliptique compressés lors de l'utilisation des algorithmes [ECDSA](/fr/docs/Web/API/SubtleCrypto/sign#ecdsa) ou [ECDH](/fr/docs/Web/API/SubtleCrypto/deriveKey#ecdh). ([Firefox bug 1971499 <sup>(angl.)</sup>](https://bugzil.la/1971499)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mise à jour de la commande `emulation.setLocaleOverride` pour outrepasser la valeur de retour de `navigator.language` et `navigator.languages` en plus des API JS. ([Firefox bug 1994396 <sup>(angl.)</sup>](https://bugzil.la/1994396)).
- Mise à jour du comportement de réinitialisation des commandes `emulation.setLocaleOverride` et `emulation.setTimezoneOverride` pour correspondre aux récents changements de spécification. Lors de l'appel de cette commande pour réinitialiser la surcharge d'un contexte de navigation spécifique, les surcharges configurées pour un contexte utilisateur possédant ce contexte de navigation continueront de s'appliquer. ([Firefox bug 1988725 <sup>(angl.)</sup>](https://bugzil.la/1988725)).
- Ajout du support du localisateur `context` à la commande `browsingContext.locateNodes` ce qui permet de récupérer le conteneur de contextes de navigation non de niveau supérieur, comme les éléments de cadre intégré (`iframe`). ([Firefox bug 1941270 <sup>(angl.)</sup>](https://bugzil.la/1941270)).
- Implémentation de la commande `network.setExtraHeaders` qui peut être utilisée pour définir des en-têtes de requête qui seront automatiquement ajoutés aux requêtes déclenchées dans les contextes de navigation ou contextes utilisateur fournis. ([Firefox bug 1979731 <sup>(angl.)</sup>](https://bugzil.la/1979731)).
- Mise à jour de toutes nos commandes de collecte de données réseau (`network.addDataCollector`, `network.getData` et `network.disownData`) pour prendre en charge le type de données `request` ce qui permet de collecter et de récupérer les données POST des requêtes. ([Firefox bug 1988955 <sup>(angl.)</sup>](https://bugzil.la/1988955)).
- Amélioration de notre implémentation de `network.getData` pour prendre également en charge les requêtes utilisant le schéma `data:`. ([Firefox bug 1992210 <sup>(angl.)</sup>](https://bugzil.la/1992210)).
- Correction d'un bug pour `network.getData` qui ne levait pas l'erreur attendue `no such network data` pour les requêtes non prises en charge. ([Firefox bug 1992214 <sup>(angl.)</sup>](https://bugzil.la/1992214)).
- Correction d'un bug dans nos évènements `network` où différentes requêtes réutilisaient le même identifiant, impactant principalement les URL de données ou les requêtes en cache. ([Firefox bug 1992348 <sup>(angl.)</sup>](https://bugzil.la/1992348)).

#### Marionette

- Correction d'une régression dans `WebDriver:GetElementText` qui provoquait une capitalisation incorrecte du texte contenant des caractères accentués (par exemple, «&nbsp;ó&nbsp;»). ([Firefox bug 1986392 <sup>(angl.)</sup>](https://bugzil.la/1986392)).
- Correction d'un bug dans la désérialisation JSON de `WebFrame` qui levait incorrectement une erreur `no such window` au lieu de `no such frame` lors du traitement d'images invalides. ([Firefox bug 1996540 <sup>(angl.)</sup>](https://bugzil.la/1996540)).
- Ajout d'une extension WebDriver pour contrôler le signal de [Global Privacy Control <sup>(angl.)</sup>](https://w3c.github.io/gpc/). ([Firefox bug 1969865 <sup>(angl.)</sup>](https://bugzil.la/1969865)).

## Changements pour les développeur·euse·s d'extensions

- Les méthodes {{WebExtAPIRef("browsingData.removeLocalStorage()")}} et {{WebExtAPIRef("browsingData.remove()")}} (lorsque `localStorage` est défini dans {{WebExtAPIRef("browsingData.DataTypeSet")}}) suppriment désormais les objets de [`sessionStorage`](/fr/docs/Web/API/Window/sessionStorage). ([Firefox bug 1886894 <sup>(angl.)</sup>](https://bugzil.la/1886894))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 146 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **`<meta name="rating">`** (Nightly)&nbsp;: `security.restrict_to_adults.always` et `security.restrict_to_adults.respect_platform`

  L'élément `<meta name="rating">` permet aux sites web de s'auto-identifier comme contenu restreint/adulte. Les navigateurs qui reconnaissent cet élément peuvent alors prendre des mesures pour restreindre l'accès des utilisateurs·rices à ce contenu. Voir [Restreindre le contenu adulte avec `<meta name="rating">`](/fr/docs/Mozilla/Firefox/Experimental_features#restreindre_le_contenu_pour_adultes_avec_meta_namerating) pour plus de détails.
  ([Firefox bug 1991135 <sup>(angl.)</sup>](https://bugzil.la/1991135)).

- **Navigation API** (Nightly)&nbsp;: `dom.navigation.webidl.enabled`

  Les versions Nightly prennent désormais en charge l'API Navigation, qui permet d'initier, d'intercepter et de gérer les actions de navigation du navigateur. Elle permet aussi d'examiner les entrées d'historique d'une application. Il s'agit d'un successeur de fonctionnalités précédentes de la plateforme web telles que {{DOMxRef("History API", "l'API History", "", "nocode")}} et {{DOMxRef("window.location")}}, qui corrige leurs limites et s'adresse spécifiquement aux besoins des {{Glossary("SPA", "applications à page unique (SPAs)")}}.
  ([Firefox bug 1979288 <sup>(angl.)</sup>](https://bugzil.la/1979288)).

- **Points de contrôle relatifs dans les commandes de courbe CSS `shape()`**&nbsp;: `layout.css.basic-shape-shape.enabled`

  Vous pouvez utiliser des valeurs [`<relative-control-point>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) lorsque vous définissez une [`<curve-command>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) ou une [`<smooth-command>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) dans une fonction CSS `shape()`. Ces valeurs vous permettent de définir des points de contrôle positionnés par rapport au point de départ ou d'arrivée de la commande en cours, ou par rapport à l'origine (coin supérieur gauche) du conteneur dans lequel la forme est dessinée.

- **Requêtes médias personnalisées**&nbsp;: `layout.css.custom-media.enabled`

  La règle @ [`@custom-media`](/fr/docs/Web/CSS/Reference/At-rules/@custom-media) définit des alias pour des requêtes médias longues ou complexes. Plutôt que de répéter le même `<media-query-list>` codé en dur dans plusieurs `@media`, il peut être défini une fois dans une règle `@custom-media` et référencé dans la feuille de style chaque fois que nécessaire. ([Firefox bug 1744292 <sup>(angl.)</sup>](https://bugzil.la/1744292)).
