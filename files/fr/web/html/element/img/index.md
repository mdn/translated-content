---
title: '<img> : l''élément d''image embarquée'
slug: Web/HTML/Element/Img
tags:
  - Content
  - Element
  - Graphics
  - HTML
  - HTML Graphics
  - HTML Images
  - HTML Photos
  - HTML Pictures
  - HTML embedded content
  - Image
  - Image Element
  - Media
  - Multimedia
  - Photos
  - Pictures
  - Reference
  - Web
translation_of: Web/HTML/Element/img
browser-compat: html.elements.img
---
{{HTMLRef}}

L'élément HTML **`<img>`** intègre une image dans le document.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Dans l'exemple qui précède, on utilise l'élément `<img>` simplement.

- L'attribut `src` est obligatoire et contient le chemin de l'image qu'on souhaite afficher.
- L'attribut `alt` contient une description textuelle de l'image, qui n'est pas obligatoire mais qui est **incroyablement utile** pour l'accessibilité — les lecteurs d'écran lisent cette description à leurs utilisateurs pour qu'ils sachent ce que signifie l'image. Le texte Alt est également affiché sur la page si l'image ne peut pas être chargée pour une raison quelconque : par exemple, erreurs de réseau, blocage du contenu ou linkrot.

Il existe d'autres attributs qui peuvent être utilisés dans différents cas. Ces attributs sont détaillés ci-après. Entre autres, on pourra utiliser :

- [Referrer](/fr/docs/Web/HTTP/Headers/Referrer-Policy)/[CORS](/fr/docs/Glossary/CORS) contrôle pour la sécurité et la confidentialité : voir [`crossorigin`](#attr-crossorigin) et [`referrerpolicy`](#attr-referrerpolicy).
- [`width`](#attr-width) et [`height`](#attr-height) pour définir la taille intrinsèque de l'image, ce qui lui permet d'occuper de l'espace avant son chargement, afin d'atténuer les décalages de présentation du contenu.
- Des indications d'images adaptatives avec [`sizes`](#attr-sizes) et [`srcset`](#attr-srcset). (voir aussi l'élément [`<picture>`](/fr/docs/Web/HTML/Element/picture) et notre [Tutoriel sur les images adaptatives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)).

## Formats d'image pris en charge

La norme HTML ne donne pas de liste des formats d'image qui doivent être pris en charge, de sorte que chaque [agent utilisateur](/fr/docs/Glossary/User_agent) prend en charge un ensemble différent de formats.

{{page("/fr/docs/Web/Media/Formats/Types_des_images", "table-of-image-file-types")}}

> **Note :** Voir le [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Formats/Image_types) pour des informations plus complètes sur les formats d'image pris en charge par les navigateurs web. Cela inclut les formats d'image pris en charge mais non recommandés pour le contenu web (par exemple, ICO, BMP, etc.).

## Erreurs de chargement des images

Si une erreur se produit lors du chargement ou de l'affichage de l'image et qu'un gestionnaire d'événement [`onerror`](/fr/docs/Web/HTML/Global_attributes#attr-onerror) a été paramétré afin d'écouter l'événement [error](/fr/docs/Web/Reference/Events/error), le gestionnaire d'événement sera invoqué. Cela peut se produire lorsque :

- L'attribut [`src`](#attr-src) est vide (`""`) ou vaut `null`.
- L'[URL](/fr/docs/Glossary/URL) indiquée dans l'attribut `src` est la même URL que celle de la page sur laquelle se trouve l'utilisateur.
- L'image indiquée est corrompue et ne peut pas être chargée.
- Les métadonnées de l'image sont corrompues et il est impossible de récupérer ses dimensions et aucune dimension n'est indiquée dans les attributs de l'élément `<img>`.
- Le format de l'image n'est pas pris en charge par l'agent utilisateur.

## Attributs

Cet élément inclut les [attributs globaux](/fr/docs/Web/HTML/Global_attributes).

- `alt`

  - : Cet attribut définit le texte alternatif utilisé lorsqu'il est impossible d'afficher l'image (par exemple si l'URL est incorrecte ou si l'image n'est pas encore téléchargée).

    > **Note :**
    >
    > Les navigateurs n'affichent pas toujours les images. Il existe un certain nombre de situations dans lesquelles un navigateur peut ne pas afficher les images, par exemple :
    >
    > - Navigateurs non visuels (tels que ceux utilisés par les personnes souffrant de déficiences visuelles)
    > - L'utilisateur choisit de ne pas afficher les images (économie de bande passante, raisons de confidentialité).
    > - L'image n'est pas valide ou le [type n'est pas pris en charge](#supported_image_formats).
    >
    > Dans ces cas, le navigateur peut remplacer l'image par le texte de l'attribut `alt` de l'élément. Pour ces raisons et d'autres, fournissez une valeur utile pour `alt` dans la mesure du possible.

    Omettre complètement `alt` indique que l'image est un élément clé du contenu et qu'aucun équivalent textuel n'est disponible. Définir cet attribut sur une chaîne vide (`alt=""`) indique que cette image n'est _pas_ un élément clé du contenu (il s'agit d'une décoration ou d'un pixel de suivi), et que les navigateurs non visuels peuvent l'omettre au [rendu](/fr/docs/Glossary/Rendering_engine). Les navigateurs visuels masqueront également l'icône d'image brisée si le `alt` est vide et que l'image n'a pas réussi à s'afficher.

    Cet attribut est également utilisé pour copier et coller l'image dans du texte, ou pour enregistrer une image liée dans un signet.

- `crossorigin`

  - : Indique si la récupération de l'image doit être effectuée à l'aide d'une requête [CORS](/fr/docs/Glossary/CORS). Les données d'image d'une [image compatible avec le système CORS](/fr/docs/Web/HTML/CORS_enabled_image) renvoyées par une requête CORS peuvent être réutilisées dans l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sans être marquées « [corrompu](/fr/docs/Web/HTML/CORS_enabled_image#what_is_a_tainted_canvas) ».

    Si l'attribut `crossorigin` _n'est pas_ spécifié, une requête non-CORS est envoyée (sans l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin)), et le navigateur marque l'image comme étant corrompue et restreint l'accès à ses données d'image, empêchant son utilisation dans les éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).

    Si l'attribut `crossorigin` _est_ spécifié, alors une requête CORS est envoyée (avec l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin)) ; mais si le serveur n'autorise pas l'accès croisé aux données de l'image par le site d'origine (en n'envoyant pas d'en-tête de réponse [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) ou en n'incluant pas l'origine du site dans l'en-tête de réponse [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) qu'il envoie), le navigateur bloque le chargement de l'image et enregistre une erreur CORS dans la console devtools.

    Valeurs autorisées :

    - `anonymous`
      - : Une requête entre deux origines est effectuée (avec l'en-tête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin)) mais aucune information d'authentification n'est transmise (aucun cookie, aucun certificat X.5090, aucune authentification simple par HTTP). Si le serveur ne fournit pas d'informations d'authentification pour le site d'origine (en n'utilisant pas l'en-tête HTTP [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)), l'image sera corrompue et son utilisation sera restreinte.
    - `use-credentials`
      - : Une requête entre deux origines est effectuée (avec l'en-tête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin)) avec des informations d'authentification qui sont envoyées (par exemple un cookie, un certificat et une authentification HTTP). Si le serveur ne fournit pas d'informations d'authentification au site d'origine (via l'en-tête HTTP [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)), l'image sera corrompue et son utilisation sera restreinte.

    Lorsque cet attribut est absent, la ressource est récupérée sans requête _CORS_ (c'est-à-dire sans envoyer l'en-tête HTTP [`origin`](/fr/docs/Web/HTTP/Headers/Origin)) ce qui empêche de l'utiliser dans un [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sans qu'elle soit considérée comme corrompue. Si la valeur de l'attribut est invalide, elle sera considérée comme **`anonymous`**. Voir la page [réglage des attributs CORS](/fr/docs/Web/HTML/Attributes/crossorigin) pour plus d'informations.

- `decoding`

  - : Cet attribut fournit une indication à l'agent utilisateur pour le décodage de l'information. Les valeurs possibles sont :

    - `sync`
      - : L'image est décodée de façon synchrone afin d'être présentée de façon atomique avec le reste du contenu.
    - `async`
      - : L'image est décodée de façon asynchrone afin de réduire le temps nécessaire à la présentation du reste du contenu.
    - `auto`
      - : Le mode par défaut qui indique l'absence de préférence pour le mode de décodage. Dans ce cas, l'agent utilisateur décide de la meilleure stratégie.

- `height`
  - : La hauteur intrinsèque de l'image, en pixels. Doit être un nombre entier sans unité.
- `intrinsicsize` {{deprecated_inline}}
  - : Cet attribut indique au navigateur d'ignorer la taille intrinsèque réelle de l'image et d'utiliser la taille fournie par les attributs. La matrice contenant l'image aurait donc ces dimensions et calculer `naturalWidth`/`naturalHeight` sur de telles images renverrait les valeurs de cet attribut. [Explications](https://github.com/ojanvafai/intrinsicsize-attribute), [exemples](https://googlechrome.github.io/samples/intrinsic-size/index.html).
- `ismap`

  - : Un attribut booléen dont la valeur indique si l'image fait partie d'une carte cliquable. Si c'est le cas, les coordonnées du clic seront envoyées au serveur.

    > **Note :** Cet attribut est uniquement autorisé si l'élément `<img>` descend d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a) dont l'attribut [`href`](/fr/docs/Web/HTML/Element/a#attr-href) est valide.

- `loading` {{experimental_inline}}

  - : Indique comment le navigateur doit charger l'image :

    - `eager` : Charge l'image immédiatement, que l'image se trouve ou non dans le viewport visible (c'est la valeur par défaut).
    - `lazy` : Diffère le chargement de l'image au moment où elle atteint une certaine distance de la fenêtre de visualisation, telle que définie par le navigateur. Le but est d'éviter que le réseau et la zone de stockage nécessaires à la manipulation de l'image ne soient utilisés tant qu'il n'est pas relativement sûr que celle-ci sera nécessaire. Cela permet généralement d'améliorer les performances du contenu dans la plupart des cas d'utilisation typiques.

      > **Note :** Le chargement n'est différé que lorsque JavaScript est activé. Il s'agit d'une mesure anti-pistage, car si un agent utilisateur prenait en charge le chargement différé lorsque les scripts sont désactivés, il serait toujours possible pour un site de suivre la position de défilement approximative d'un utilisateur tout au long d'une session, en plaçant stratégiquement des images dans le balisage d'une page de sorte qu'un serveur puisse suivre le nombre d'images demandées et le moment où elles le sont.

- `referrerpolicy` {{experimental_inline}}

  - : Une chaîne de caractères indiquant le référent à utiliser lors de la récupération de la ressource :

    - `no-referrer` : l'en-tête HTTP [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) ne sera pas envoyé.
    - `no-referrer-when-downgrade` : aucun en-tête HTTP [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) n'est envoyé lorsqu'on navigue vers une origine sans [HTTPS](/fr/docs/Glossary/https). Cette valeur est le comportement par défaut de l'agent utilisateur si aucune valeur n'est fournie.
    - `origin` : l'en-tête HTTP [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) contiendra le schéma, l'[hôte](/fr/docs/Glossary/Host) et le [port](/fr/docs/Glossary/Port) de la page d'origine.
    - `origin-when-cross-origin` : lorsque la navigation se fait vers d'autres origines, les données du référent se limiteront au schéma, à l'hôte et au part. Si on navigue sur la même origine, le chemin complet de la ressource sera indiqué.
    - `unsafe-url` : l'en-tête HTTP [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) incluera l'origine et le chemin mais aucun fragment, mot de passe ou nom d'utilisateur. Ce cas de figure n'est pas sécurisé, car il peut laisser fuire des origines et des chemins de ressources protégées par TLS vers des origines non-sécurisées.

- `sizes`

  - : Une ou plusieurs chaînes de caractères séparées par des virgules, indiquant un ensemble de tailles sources. Chaque taille source est composée de :

    1.  D'une [condition sur le média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries#syntax). Qui doit être absente pour le dernier élément de la liste.
    2.  Une valeur de taille de la source.

    Les conditions de média décrivent les propriétés de la _fenêtre de visualisation_ (ou « viewport »), et non de l'_image_. Par exemple, `(max-height : 500px) 1000px` propose d'utiliser une source de 1000px de largeur, si la _fenêtre de visualisation_ n'est pas supérieure à 500px.

    Les valeurs de taille de la source spécifient la taille d'affichage prévue de l'image. [Les agents utilisateurs](/fr/docs/Glossary/User_agent) utilisent la taille actuelle de la source pour sélectionner l'une des sources fournies par l'attribut `srcset`, lorsque ces sources sont décrites à l'aide de descripteurs de largeur (`w`). La taille de la source sélectionnée affecte la [taille intrinsèque](/fr/docs/Glossary/Intrinsic_size) de l'image (la taille d'affichage de l'image si aucun style [CSS](/fr/docs/Glossary/CSS) n'est appliqué). Si l'attribut `srcset` est absent, ou ne contient aucune valeur avec un descripteur de largeur, alors l'attribut `sizes` n'a aucun effet.

- `src`
  - : L'[URL](/fr/docs/Glossary/URL) de l'image. Cet attribut est obligatoire pour l'élément `<img>`. Pour les [navigateurs](/fr/docs/Glossary/Browser) qui prennent en charge `srcset`, `src` est considéré comme une image candidate dont la densité de pixel vaut `1x` si aucune autre image avec cette densité n'est définie via `srcset` ou si `srcset` contient des descripteurs « `w` ».
- `srcset`

  - : Une liste de une ou plusieurs chaînes de caractères, séparées par des virgules, qui indiquent un ensemble d'images sources parmi lequel l'agent utilisateur pourra choisir la meilleure image à afficher. Chaque chaîne de caractères se compose :

    1.  D'une [URL](/fr/docs/Glossary/URL) vers une image,
    2.  Éventuellement d'un espace suivi :

        - D'un descripteur de largeur ou un entier positif directement suivi par « `w` ». Le descripteur de largeur est divisé par la taille de la condition de taille définie dans l'attribut `sizes` afin de calculer la densité de pixel réelle.
        - D'un descripteur de densité de pixel qui est un nombre décimal directement suivi par « `x` ».

    Si aucun descripteur n'est utilisé, la source aura un descripteur par défaut qui vaut `1x`.

    Au sein d'un même attribut `srcset`, on ne peut pas mélanger des descripteurs exprimés en densité de pixels et des descripteurs exprimés en largeur. Il est également invalide d'avoir deux sources pour lesquelles le descripteur est le même (par exemple, deux sources décrites par « `2x` »).

    L'agent utilisateur sélectionne l'une des sources disponibles à sa discrétion. Il dispose ainsi d'une marge de manœuvre importante pour adapter sa sélection en fonction de choses comme les préférences de l'utilisateur ou les conditions de [bande passante](/fr/docs/Glossary/Bandwidth). Voir notre [Tutoriel sur les images responsives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) pour un exemple.

- `width`
  - : La largeur intrinsèque de l'image en pixels. Doit être un nombre entier sans unité.
- `usemap`

  - : Le fragment d'URL (commençant avec #) d'une [carte d'images](/fr/docs/Web/HTML/Element/map) associée à cet élément.

    > **Note :** Cet attribut ne peut pas être utilisé si l'élément `<img>` est un descendant d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a) ou d'un élément [`<button>`](/fr/docs/Web/HTML/Element/Button).

### Attributs obsolètes

- `align` {{deprecated_inline}}

  - : L'alignement de l'image selon le contexte qui l'entoure. En HTML5, on privilégiera les propriétés CSS [`float`](/fr/docs/Web/CSS/float) et/ou [`vertical-align`](/fr/docs/Web/CSS/vertical-align) voire la propriété [`object-position`](/fr/docs/Web/CSS/object-position) qui permet de positionner l'image au sein de la boîte de l'élément. Les valeurs autorisées sont :

    - `top`
      - : Équivalent à `vertical-align: top;` ou à `vertical-align: text-top;`
    - `middle`
      - : Équivalent à `vertical-align: -moz-middle-with-baseline;`
    - `bottom`
      - : La valeur utilisée par défaut. Équivalent à `vertical-align: unset;` ou à `vertical-align: initial;`
    - `left`
      - : Équivalent à `float: left;`
    - `right`
      - : Équivalent à `float: right;`

- `border` {{deprecated_inline}}
  - : La largeur d'une bordure autour de l'image. Utilisez plutôt la propriété [CSS](/fr/docs/Glossary/CSS) [`border`](/fr/docs/Web/CSS/border).
- `hspace` {{deprecated_inline}}
  - : Le nombre de pixels blancs à insérer à droite et à gauche de l'image. En HTML5, on privilégiera la propriété CSS [`margin`](/fr/docs/Web/CSS/margin).
- `longdesc` {{deprecated_inline}}

  - : Un lien vers une description plus détaillée de l'image. Les valeurs possibles sont une URL ou un identifiant ([`id`](/fr/docs/Web/HTML/Global_attributes#attr-id)) d'un élément.

    > **Note :** Cet attribut est mentionné dans la dernière version du [W3C](/fr/docs/Glossary/W3C), [HTML 5.2](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc), mais a été supprimé du [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) du [WHATWG](/fr/docs/Glossary/WHATWG). Son avenir est incertain ; les auteurs devraient utiliser une alternative [WAI](/fr/docs/Glossary/WAI)-[ARIA](/fr/docs/Glossary/ARIA) telle que [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) ou [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- `name` {{deprecated_inline}}
  - : Un nom pour l'élément. Utilisez plutôt l'attribut [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id).
- `vspace` {{deprecated_inline}}
  - : Le nombre de pixels blancs à insérer en dessous et au-dessus de l'image. En HTML5, on privilégiera la propriété CSS [`margin`](/fr/docs/Web/CSS/margin).

## Mettre en forme avec CSS

`<img>` est un [élément remplacé](/fr/docs/Web/CSS/Replaced_element) ; il a une valeur [`display`](/fr/docs/Web/CSS/display) de `inline` par défaut, mais ses dimensions par défaut sont définies par les valeurs intrinsèques de l'image intégrée, comme s'il s'agissait de `inline-block`. Vous pouvez définir des propriétés comme [`border`](/fr/docs/Web/CSS/border)/[`border-radius`](/fr/docs/Web/CSS/border-radius), [`padding`](/fr/docs/Web/CSS/padding)/[`margin`](/fr/docs/Web/CSS/margin), [`width`](/fr/docs/Web/CSS/width), [`height`](/fr/docs/Web/CSS/height), etc. sur une image.

`<img>` n'a pas de ligne de base, donc lorsque les images sont utilisées dans un contexte de mise en forme en ligne avec [`vertical-align`](/fr/docs/Web/CSS/vertical-align)`: baseline`, le bas de l'image sera placé sur la ligne de base du texte.

Vous pouvez utiliser la propriété [`object-position`](/fr/docs/Web/CSS/object-position) pour positionner l'image dans la boîte de l'élément, et la propriété [`object-fit`](/fr/docs/Web/CSS/object-fit) pour ajuster la taille de l'image dans la boîte (par exemple, si l'image doit s'adapter à la boîte ou la remplir même si un découpage est nécessaire).

En fonction de son type, une image peut avoir une largeur et une hauteur intrinsèques. Pour certains types d'images, cependant, les dimensions intrinsèques sont inutiles. Les images [SVG](/fr/docs/Glossary/SVG), par exemple, n'ont pas de dimensions intrinsèques si leur élément [`<svg>`](/fr/docs/Web/SVG/Element/svg) n'a pas de `width` ou de `height` défini sur lui.

## Exemples

### Texte alternatif

L'exemple suivant intègre une image dans la page et inclut un texte alternatif pour l'accessibilité.

```html
<img src="favicon144.png"
  alt="MDN logo">
```

{{EmbedLiveSample('Texte_alternatif', '100%', '160')}}

### Lien image

Cet exemple s'appuie sur le précédent, en montrant comment transformer l'image en lien. Pour ce faire, immergez la balise `<img>` à l'intérieur de l'élément [`<a>`](/fr/docs/Web/HTML/Element/a). Vous devez faire en sorte que le texte alternatif décrive la ressource vers laquelle le lien pointe, comme si vous utilisiez un lien texte à la place.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visitez le site du MDN">
</a>
```

{{EmbedLiveSample('Lien_image', '100%', '160')}}

### Créer un lien avec une image

Dans cet exemple, nous incluons un attribut `srcset` avec une référence à une version haute résolution du logo ; celle-ci sera chargée à la place de l'image `src` sur les appareils haute résolution. L'image référencée dans l'attribut `src` est comptée comme un candidat `1x` dans [agent utilisateur](/fr/docs/Glossary/User_agent) qui supporte `srcset`.

```html
<img src="favicon72.png"
  alt="Logo MDN"
  srcset="favicon144.png 2x">
```

{{EmbedLiveSample('Créer_un_lien_avec_une_image', '100%', '160')}}

### Utiliser les attributs `srcset` et `sizes`

L'attribut `src` est ignoré lorsque l'agent utilisateur prend en charge `srcset` et que ce dernier contient des descripteurs avec '`w`'. Dans cet exemple, lorsque la condition `(min-width: 600px)` est vérifiée pour le média utilisé, la largeur de l'image sera 200px, sinon, elle occupera `50vw` (ce qui correspond à 50% de la largeur de la zone d'affichage (_viewport_)).

```html
<img src="clock-demo-200px.png"
  alt="Clock"
  srcset="clock-demo-200px.png 200w,
          clock-demo-400px.png 400w"
  sizes="(min-width: 600px) 200px, 50vw">
```

{{EmbedLiveSample("Utiliser_les_attributs_srcset_et_sizes", "100%", 450)}}

> **Note :** Pour observer l'effet du redimensionnement, vous devrez consulter [l'exemple sur une page séparée](/fr/docs/Web/HTML/Element/img/Using_the_srcset_and_sizes_attributes) afin de pouvoir modifier la taille de la zone.

## Sécurité et vie privée

Bien que les éléments `<img>` soient la plupart du temps utilisés respectueusement, ils peuvent permettre de récupérer des informations précises, parfois utilisées pour pister les utilisateurs. Voir la page [sur l'en-tête referer](/fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns) pour plus d'informations et des façons de résoudre ces problèmes.

## Problèmes d'accessibilité

### Création de descriptions alternatives significatives

L'attribut `alt` doit décrire le contenu de l'image de façon claire et concise. L'attribut ne doit pas décrire la présence même de l'image ou le nom du fichier. Si l'attribut `alt` n'est pas utilisé, car l'image ne possède pas d'équivalent textuel, il faudra utiliser d'autres méthodes alternatives pour présenter le contenu que l'image doit véhiculer.

#### Ce qu'il ne faut pas faire

```html example-bad
<img alt="image" src="manchot.jpg">
```

#### Ce qu'il faut faire

```html example-good
<img alt="Un manchot Rockhopper se tenant sur une plage." src="manchot.jpg">
```

Lorsque l'attribut `alt` n'est pas présent, certains lecteurs d'écran peuvent énoncer le nom du fichier. Cela peut être source de confusion, car le nom du fichier n'est pas représentatif du contenu de l'image.

- [_An alt Decision Tree • Images • WAI Web Accessibility Tutorials_ (en anglais)](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [_Alt-texts: The Ultimate Guide — Axess Lab_ (en anglais)](https://axesslab.com/alt-texts/)
- [_How to Design Great Alt Text: An Introduction - Deque_ (en anglais)](https://www.deque.com/blog/great-alt-text-introduction/)
- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [_Understanding Success Criterion 1.1.1 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### L'attribut `title`

L'attribut [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) n'a pas vocation à remplacer l'attribut `alt`. De plus, on évitera d'utiliser la même valeur pour `alt` et `title`, car certains lecteurs d'écran répèteraient deux fois la description, entraînant une certaine confusion.

L'attribut `title` ne doit pas non plus être utilisé comme une source d'information complémentaire à la description fournie par `alt`. Si l'image nécessite une légende, on utilisera plutôt les éléments [`<figure>`](/fr/docs/Web/HTML/Element/figure) et [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption).

La valeur de l'attribut `title` est généralement présentée sous la forme d'une bulle d'information lorsqu'on immobilise le curseur au-dessus de l'image. Bien que cette méthode puisse être utilisée pour fournir des informations supplémentaires, on ne doit pas partir du principe que ce contenu sera nécessairement vu. Si les informations présentées par `title` sont importantes, il faudra les présenter d'une autre façon (cf. ci-avant) pour que les utilisateurs puissent réellement en bénéficier.

- [_Utiliser l'attribut HTML `title` - The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >. Si l'élément possède un attribut
        <a href="#attr-usemap"><code>usemap</code></a
        >, c'est également un
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Aucun, cet élément est un
        <a href="/fr/docs/Glossary/Empty_element">élément vide</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        Cet élément doit avoir une balise de début et ne doit pas avoir de
        balise de fin.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <ul>
          <li>
            avec un attribut <code>alt</code> non vide ou sans attribut
            <code>alt</code> :
            <code
              ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Role_Img"
                >img</a
              ></code
            >
          </li>
          <li>
            avec un attribut <code>alt</code> vide :
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
              >pas de rôle correspondant</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>
            avec un attribut <code>alt</code> non vide :
            <ul>
              <li>
                <code
                  ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="https://w3c.github.io/aria/#link">link</a></li>
              <li>
                <a href="https://w3c.github.io/aria/#menuitem">menuitem</a>
              </li>
              <li>
                <a href="https://w3c.github.io/aria/#menuitemcheckbox"
                  >menuitemcheckbox</a
                >
              </li>
              <li>
                <a href="https://w3c.github.io/aria/#menuitemradio"
                  >menuitemradio</a
                >
              </li>
              <li><a href="https://w3c.github.io/aria/#option">option</a></li>
              <li>
                <a href="https://w3c.github.io/aria/#progressbar"
                  >progressbar</a
                >
              </li>
              <li>
                <a href="https://w3c.github.io/aria/#scrollbar">scrollbar</a>
              </li>
              <li>
                <a href="https://w3c.github.io/aria/#separator">separator</a>
              </li>
              <li><a href="https://w3c.github.io/aria/#slider">slider</a></li>
              <li>
                <code
                  ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                    >tab</a
                  ></code
                >
              </li>
              <li>
                <a href="https://w3c.github.io/aria/#treeitem">treeitem</a>
              </li>
            </ul>
          </li>
          <li>
            avec un attribut <code>alt</code> vide,
            <a href="https://w3c.github.io/aria/#none">none</a> ou
            <a href="https://w3c.github.io/aria/#presentation">presentation</a>
          </li>
          <li>
            sans attribut <code>alt</code>, aucun <code>role</code> autorisé
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLImageElement"
          ><code>HTMLImageElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Images en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Formats/Image_types)
- [Images responsives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- Les éléments [`<picture>`](/fr/docs/Web/HTML/Element/picture), [`<object>`](/fr/docs/Web/HTML/Element/object) et [`<embed>`](/fr/docs/Web/HTML/Element/embed)
- Autres propriétés CSS relatives aux images : [`object-fit`](/fr/docs/Web/CSS/object-fit), [`object-position`](/fr/docs/Web/CSS/object-position), [`image-orientation`](/fr/docs/Web/CSS/image-orientation), [`image-rendering`](/fr/docs/Web/CSS/Image-rendering) et [`image-resolution`](/fr/docs/Web/CSS/image-resolution).
