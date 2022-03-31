---
title: '<img> : l''élément d''image embarquée'
slug: Web/HTML/Element/Img
translation_of: Web/HTML/Element/img
browser-compat: html.elements.img
---
{{HTMLRef}}

L'élément [HTML](/fr/docs/Web/HTML) **`<img>`** permet d'intégrer une image dans un document.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

L'exemple qui précède illustre l'utilisation de l'élément `<img>`&nbsp;:

- L'attribut `src` est **obligatoire**, et contient le chemin vers l'image qu'on veut intégrer.
- L'attribut `alt` contient une description textuelle de l'image, ce qui n'est pas obligatoire mais **extrêmement utile** pour l'accessibilité. En effet, les outils de lecture d'écran utilisent cette description pour la lire afin que les personnes sachent ce que l'image représente. Ce texte alternatif sera également affiché sur la page si l'image ne peut pas être chargée (par exemple s'il y a des erreurs réseau, du blocage de contenu ou un lien périmé).

Il existe de nombreux autres attributs&nbsp;:

- Le contrôle du [référent](/fr/docs/Web/HTTP/Headers/Referrer-Policy) et de la politique de gestion des ressources d'origines multiples ([CORS](/fr/docs/Glossary/CORS)) avec les attributs `crossorigin` et `referrerpolicy`.
- `width` et `height` qui permettent de définir la taille intrinsèque de l'image, lui permettant ainsi de prendre l'espace nécessaire avant son chargement (évitant ainsi d'avoir des décalages indésirables lors du chargement de la page).
- Des indications <i lang="en">responsives</i> avec `sizes` et `srcset` (voir également l'élément [`<picture>`](/fr/docs/Web/HTML/Element/picture) et [le tutoriel sur les images adaptatives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)).

## Formats d'image pris en charge

Le standard HTML n'indique pas les formats d'image qui doivent être pris en charge, les agents utilisateurs peuvent prendre en charge différents formats.

> **Note :** [Le guide sur les types de fichier et formats d'image](/fr/docs/Web/Media/Formats/Image_types) contient de nombreuses informations sur les formats d'image et leur prise en charge dans les navigateurs. La section qui suit n'est qu'un résumé&nbsp;!

Les formats d'image qu'on rencontre le plus fréquemment sur le Web sont&nbsp;:

- [APNG (<i lang="en">Animated Portable Network Graphics</i>)](/fr/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) pour les séquences animées avec une compression sans perte (le format GIF est moins performant)
- [AVIF (<i lang="en">AV1 Image File Format</i>)](/fr/docs/Web/Media/Formats/Image_types#avif) pour les images et les images animées avec de hautes performances
- [GIF (<i lang="en">Graphics Interchange Format</i>)](/fr/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) pour les images et animations _simples_
- [JPEG (<i lang="en">Joint Photographic Expert Group image</i>)](/fr/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) pour une compression avec pertes d'images statiques, il s'agit du format le plus utilisé
- [PNG (<i lang="en">Portable Network Graphics</i>)](/fr/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) pour une compression avec pertes d'images statiques, de meilleure qualité que le JPEG
- [SVG (<i lang="en">Scalable Vector Graphics</i>)](/fr/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) pour un format d'image vectorielle (qui permet de dessiner une image précisément à différentes échelles)
- [WebP (<i lang="en">Web Picture format</i>)](/fr/docs/Web/Media/Formats/Image_types#webp) pour les images statiques et animées

Les formats comme [WebP](/fr/docs/Web/Media/Formats/Image_types#webp) et [AVIF](/fr/docs/Web/Media/Formats/Image_types#avif) sont recommandés, car avec de meilleures performances que PNG, JPEG, GIF tant pour les images animées que statiques. WebP dispose d'une large prise en charge tandis qu'AVIF n'est pas pris en charge par Safari.

SVG reste le format recommandé pour les images qui doivent être dessinées avec précision quelle que soit la taille.

## Erreur de chargement d'une image

Si une erreur se produit lors du chargement ou du rendu de l'image et qu'un gestionnaire d'évènement [`onerror`](/fr/docs/Web/HTML/Global_attributes#onerror) a été défini pour intercepter l'évènement [`error`](/fr/docs/Web/API/Element/error_event), le gestionnaire sera appelé. Cela peut arriver pour plusieurs raisons&nbsp;:

- L'attribut `src` est vide (`""`) ou absent (`null` pour le DOM).
- L'URL utilisée pour l'attribut `src` est la même que celle de la page courante.
- L'image est corrompue et ne peut être chargée ainsi.
- Les métadonnées associées à l'image sont corrompues de telle façon qu'il est impossible de connaître ses dimensions et qu'aucune dimension n'a été fournie pour les attributs de l'élément `<img>`.
- Le format de l'image n'est pas pris en charge par l'agent utilisateur (généralement le navigateur).

## Attributs

On peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

- `alt`

  - : Définit une description textuelle alternative pour l'image.

    > **Note :** Il se peut que les navigateurs n'affichent pas l'image, cela peut se produire si&nbsp;:
    >
    > - Le navigateur n'est pas doté d'une interface visuelle
    > - La personne a configuré son navigateur pour ne pas afficher les images (afin d'économiser de la bande passante ou pour des raisons de vie privée)
    > - L'image est invalide ou son format n'est pas pris en charge
    >
    > Dans ces situations, le navigateur peut remplacer l'image avec le texte fourni par cet attribut. Aussi, il est grandement préférable de fournir une valeur utile pour `alt` dès que possible.

    L'absence totale d'attribut `alt` indique que l'image n'est pas importante pour le contenu et qu'aucun équivalent textuel n'est disponible. Utiliser la chaîne de caractères vide comme valeur pour cet attribut (`alt=""`) indique que cette image _n'est pas_ importante pour le contenu (par exemple une décoration ou un pixel de pistage), dans ce cas, les navigateurs non-visuels peuvent ne pas la traiter pour le rendu. Les navigateurs visuels masqueront l'icône de l'image cassée si `alt` est vide et que le chargement de l'image a échoué.

    Cet attribut est également utilisé pour copier/coller l'image vers du texte ou pour enregistrer un marque-page avec l'image associée.

- `crossorigin`

  - : Indique que la récupération de l'image doit être effectuée avec une requête CORS. Les données provenant d'une [image chargée via une requête CORS](/fr/docs/Web/HTML/CORS_enabled_image)  peuvent être réutilisées dans un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) sans que celui-ci soit considéré comme [corrompu (<i lang="en">tainted</i>)](/fr/docs/Web/HTML/CORS_enabled_image#canevas_corrompu_et_sécurité).

    Si l'attribut `crossorigin` _n'est pas_ indiqué, une requête sans CORS sera effectuée (c'est-à-dire sans l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin)) et le navigateur marquera la page comme potentiellement corrompue, empêchant d'accéder aux données de l'image et empêchant son utilisation dans les éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).

    Si l'attribut `crossorigin` _est présent_, une requête CORS est envoyée (avec l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Headers/Origin))&nbsp;; si le serveur ne gère pas l'accès depuis les origines tierces (c'est-à-dire qu'il n'envoie aucun en-tête de réponse [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) ou qu'il n'inclut pas l'origine du site dans l'en-tête `Access-Control-Allow-Origin`), le navigateur bloquera le chargement de l'image et affichera une erreur CORS dans la console de développement.

    Les valeurs autorisées pour cet attribut sont&nbsp;:

    - `anonymous`
      - : Une requête CORS est envoyée sans informations d'authentification (c'est-à-dire sans cookie, [certificat X.509](https://datatracker.ietf.org/doc/html/rfc5280), ou en-tête de requête [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization)).
    - `use-credentials`
      - : La requête CORS est envoyée avec les informations d'authentification (cookies, certificat X.509 et/ou en-tête `Authorization`). Si le serveur ne permet pas le partage des informations d'authentification avec le site d'origine (avec `Access-Control-Allow-Credentials: true` comme en-tête de réponse), le navigateur marque l'image comme potentiellement corrompue et restreint l'accès à ses données.

    Si la valeur de l'attribut est invalide, les navigateurs considèrent que la valeur `anonymous` a été utilisée. Voir [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Attributes/crossorigin) pour plus d'informations.

- `decoding`

  - : Fournit au navigateur une indication pour décoder l'image. Les valeurs autorisées sont&nbsp;:

    - `sync`
      - : L'image est décodée de façon synchrone afin d'être présentée de façon atomique avec le reste du contenu.
    - `async`
      - : L'image est décodée de façon asynchrone afin de réduire le temps nécessaire à l'affichage du reste du contenu.
    - `auto`
      - : La valeur par défaut qui indique qu'il n'y a pas de préférence. C'est le navigateur qui décide alors ce qui est le mieux.

- `height`
  - : La hauteur intrinsèque de l'image, exprimée en pixels. Cette valeur doit être un nombre entier, sans unité.

- `ismap`

  - : Cet attribut booléen indique que l'image fait partie d'une [carte côté serveur](https://en.wikipedia.org/wiki/Image_map#Server-side). Dans ce cas, les coordonnées du clic sur l'image sont envoyés au serveur.

    > **Note :** Cet attribut est uniquement autorisé lorsque l'élément `<img>` est un descendant d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a) disposant d'un attribut `href` valide. Cela fournit une alternative lorsque la navigation se fait sans dispositif de pointage.

- `loading` {{experimental_inline}}

  - : Indique comment le navigateur devrait charger l'image&nbsp;:

    - `eager`
      - : L'image est chargée immédiatement, que l'image soit située dans la zone d'affichage (<i lang="en">viewport</i>) visible ou non. Il s'agit de la valeur par défaut.
    - `lazy`
      - : Le chargement de l'image est retardé jusqu'à ce que celle-ci soit située à une certaine distance, définie par le navigateur, de la zone d'affichage. L'idée est d'éviter de consommer de la bande passante et des ressources réseaux avant d'être relativement certain que l'image est nécessaire. Pour la plupart des cas d'usage, cela permet d'améliorer les performances.

      > **Note :** Le retardement du chargement est uniquement activé lorsque JavaScript est activé dans le navigateur. Il s'agit d'une mesure pour limiter le pistage. En effet, si les scripts sont désactivés pour le navigateur et que le chargement retardé est actif, le pistage d'un utilisateur en fonction de sa position sur la page serait toujours possible (via des images placées à intervalle régulier sur la page).

- `referrerpolicy`

  - : Une chaîne de caractères qui indique le référent à utiliser lors de la récupération de la ressource&nbsp;:

    - `no-referrer`
      - : L'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) n'est pas envoyé.
    - `no-referrer-when-downgrade`
      - : L'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) ne sera pas envoyé aux origines dans TLS/HTTPS.
    - `origin`:
      - : Le référent envoyé sera limité à l'origine de la page référente, c'est-à-dire qu'il ne contiendra que le [schéma, l'hôte et le port](/fr/docs/Learn/Common_questions/What_is_a_URL).
    - `origin-when-cross-origin`
      - : Le référent envoyé aux autres origines sera limité au schéma, à l'hôte et au port. La navigation vers la même origine contiendra le chemin.
    - `same-origin`
      - : Un référent sera envoyé vers les mêmes origines mais les requêtes vers d'autres origines ne contiendront pas de référent.
    - `strict-origin`
      - : N'envoie l'origine du document comme référent que lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS) et pas lorsque la destination est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (la valeur par défaut)
      - : Envoie l'URL complète lors d'une requête vers la même origine, n'envoie que l'origine pour les requêtes vers d'autres origines si le niveau de sécurité du protocole reste le même (HTTPS→HTTPS), n'envoie aucun en-tête correspondant vers une destination moins sécurisée (HTTPS→HTTP).
    - `unsafe-url`
      - : Le référent inclut l'origine _et_ le chemin (mais pas le [fragment](/fr/docs/Web/API/HTMLAnchorElement/hash), [le mot de passe](/fr/docs/Web/API/HTMLAnchorElement/password) ou [le nom d'utilisateur](/fr/docs/Web/API/HTMLAnchorElement/username)). **Cette valeur n'est pas sécurisée**, car elle diffuse l'origine et les chemins de ressources protégées par TLS vers des origines non-sécurisées.

- `sizes`

  - : Une ou plusieurs chaînes de caractères séparées par des virgules et qui indiquent un ensemble de tailles de source possible. Chaque taille de source consiste en&nbsp;:

    1. Une [condition de média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries). Celle-ci doit être absente pour le dernier élément de la liste.
    2. Une valeur de taille de source.

    La condition de média décrit les propriétés de _la zone d'affichage_ et pas de _l'image_. Ainsi, `(max-height: 500px) 1000px` proposera d'utiliser une source de largeur 1000px, si _la zone d'affichage_ n'est pas plus haute que 500px.

    Les valeurs pour les tailles de source indiquent la taille d'affichage souhaitée de l'image. Le navigateur utilise la taille de source courante correspondante pour sélectionner une des sources fournies par l'attribut `srcset` lorsque les sources y sont décrites avec un descripteur de largeur (`w`). La taille de source sélectionnée affecte la taille intrinsèque de l'image (c'est-à-dire la taille occupée à l'écran si aucun style CSS n'est appliqué). Si l'attribut `srcset` est absent ou qu'il ne contient pas de valeur avec un descripteur de largeur, l'attribut `sizes` aura aucun effet.

- `src`
  - : L'URL de l'image. Cet attribut est obligatoire. Pour les navigateurs qui prennent en charge `srcset`, l'image fourni par `src` est considérée comme une candidate avec un descripteur de densité de pixel à `1x`, sauf si une image avec un tel descripteur est déjà définie dans `srcset`, ou si `srcset` contient des descripteurs `w`.

- `srcset`

  - : Une ou plusieurs chaînes de caractères séparées par des virgules, qui indiquent des sources possibles pour l'image que le navigateur pourra utiliser. Chaque chaîne de caractères se compose&nbsp;:

    1. D'une URL vers l'image
    2. Éventuellement, d'un espace suivi&nbsp;:

        - D'un descripteur de largeur (un entier positif suivi par `w`). Le descripteur de largeur est divisé par la taille de source fournie par l'attribut `sizes` afin de calculer la densité de pixel effective.
        - D'un descripteur de densité de pixel (un nombre décimal positif suivi par `x`).

    Si aucun descripteur n'est indiqué, la source se voit affecter un descripteur par défaut de `1x`.

    Toute combinaison des deux types de descripteur sera invalide. De même, indiquer deux sources avec le même descripteur sera invalide.

    L'agent utilisateur sélectionne une des sources disponibles comme il l'entend. Cette liberté permet de baser le choix sur d'autres facteurs comme les préférences de l'utilisateur ou les conditions réseau. Voir [le tutoriel sur les images adaptatives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) pour un exemple.

- `width`
  - : La largeur intrinsèque de l'image, exprimée en pixels. La valeur doit être un nombre entier sans unité.

- `usemap`

  - : L'URL partielle (commençant par `#`) d'une [carte d'image](/fr/docs/Web/HTML/Element/map) associée à l'élément.

    > **Note :** Cet attribut est invalide si l'élément `<img>` est à l'intérieur d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a) ou d'un élément [`<button>`](/fr/docs/Web/HTML/Element/Button).

### Attributs dépréciés

- `align` {{deprecated_inline}}

  - : Aligne l'image au sein de son contexte englobant. À la place de cet attribut, on privilégiera les propriétés CSS [`float`](/fr/docs/Web/CSS/float) et/ou [`vertical-align`](/fr/docs/Web/CSS/vertical-align). Les valeurs autorisées pour cet attribut sont&nbsp;:

    - `top`
      - : Équivalent à `vertical-align: top` ou `vertical-align: text-top`
    - `middle`
      - : Équivalent à `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : La valeur par défaut, équivalent à `vertical-align: unset` ou `vertical-align: initial`
    - `left`
      - : Équivalent à `float: left`
    - `right`
      - : Équivalent à `float: right`

- `border` {{deprecated_inline}}
  - : La largeur de la bordure autour de l'image. La propriété CSS [`border`](/fr/docs/Web/CSS/border) doit être utilisée à la place.

- `hspace` {{deprecated_inline}}
  - : Le nombre de pixels d'espace blanc à droite et à gauche de l'image. La propriété [`margin`](/fr/docs/Web/CSS/margin) doit être utilisée à la place.

- `intrinsicsize` {{deprecated_inline}}
  - : Cet attribut indique au navigateur d'ignorer la taille intrinsèque de l'image pour prendre en compte celle fournie par l'attribut.

- `longdesc` {{deprecated_inline}}

  - : Un lien vers une description plus détaillée de l'image. Les valeurs pouvaient être une URL ou l'identifiant d'un autre élément.

    > **Note :** Cet attribut est mentionné dans la spécification [HTML 5.2 du W3C](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc), mais a été retiré [du standard évolutif HTML du WHATWG](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Son avenir est incertain et mieux vaut utiliser une alternative WAI-ARIA comme [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) ou [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- `name` {{deprecated_inline}}
  - : Un nom pour l'élément, l'attribut universel `id` doit être utilisé à la place.

- `vspace` {{deprecated_inline}}
  - : Le nombre de pixels d'espace blanc en haut et en bas de l'image. La propriété CSS [`margin`](/fr/docs/Web/CSS/margin) doit être utilisée à la place.

## Mettre en forme avec CSS

`<img>` est [un élément remplacé](/fr/docs/Web/CSS/Replaced_element). Sa propriété [`display`](/fr/docs/Web/CSS/display) par défaut vaut `inline`, mais ses dimensions par défaut sont définies par les valeurs intrinsèques de l'image, à la façon de `inline-block`. Il est tout à fait possible d'utiliser les propriétés [`border`](/fr/docs/Web/CSS/border)/[`border-radius`](/fr/docs/Web/CSS/border-radius), [`padding`](/fr/docs/Web/CSS/padding)/[`margin`](/fr/docs/Web/CSS/margin), [`width`](/fr/docs/Web/CSS/width), et [`height`](/fr/docs/Web/CSS/height) sur une image.

`<img>` n'a pas de ligne de base, donc lorsque les images sont utilisées dans un contexte de mise en forme en ligne avec [`vertical-align`](/fr/docs/Web/CSS/vertical-align)`: baseline`, le bas de l'image sera placé sur la ligne de base du texte.

La propriété [`object-position`](/fr/docs/Web/CSS/object-position) peut être utilisée afin de positionner l'image au sein de la boîte fournie par l'élément. La propriété [`object-fit`](/fr/docs/Web/CSS/object-fit) peut être utilisée pour ajuster le dimensionnement de l'image au sein de la boîte (par exemple pour étirer ou rogner l'image dans la boîte si nécessaire).

Selon son type, une image peut avoir une largeur et une hauteur intrinsèque. Pour certains types d'image en revanche, de telles dimensions intrinsèques ne sont pas nécessaires. Ainsi, les images vectorielles (en SVG par exemple) n'ont pas de dimensions intrinsèques si leur racine (l'élément [`<svg>`](/fr/docs/Web/SVG/Element/svg)) n'a pas d'attribut `width` ou `height` défini.

## Exemples

### Fournir un texte alternatif

Dans l'exemple qui suit, l'image est accompagnée d'un texte alternatif qui sert l'accessibilité.

```html
<img src="favicon144.png" alt="Logo de MDN">
```

{{EmbedLiveSample('', '100%', '160')}}

### Créer un lien avec une image

Cet exemple intègre l'image précédente et la transforme en lien. Pour cela, l'élément `<img>` est placé au sein d'un élément [`<a>`](/fr/docs/Web/HTML/Element/a). Ici, le texte alternatif devrait décrire la ressource vers laquelle pointe le lien.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visiter le site MDN">
</a>
```

{{EmbedLiveSample('', '100%', '160')}}

### Utiliser l'attribut `srcset`

Dans cet exemple, on utilise l'attribut `srcset` avec une référence vers une version du logo en haute résolution. Pour les appareils avec une haute résolution, celle-ci sera chargée à la place à la place de l'image indiquée par `src`. Pour les agents utilisateurs qui prennent en charge l'attribut `srcset`, l'image référencée par l'attribut `src` sera considérée comme une candidate avec le descripteur `1x`.

```html
<img src="favicon72.png" alt="Logo MDN" srcset="favicon144.png 2x">
```

{{EmbedLiveSample("", "100%", "160")}}

### Utiliser les attributs `srcset` et `sizes`

L'attribut `src` est ignoré par les agents utilisateurs qui le prennent en charge lorsque les descripteurs `w` sont présents. Lorsque la condition `(max-width: 600px)` est respectée, l'image large de 200 pixels sera chargée (car c'est celle qui est la plus proche de `200px`). Dans les autres cas, c'est l'autre image qui est chargée.

```html
<img src="clock-demo-200px.png"
     alt="Clock"
     srcset="clock-demo-200px.png 200w,
             clock-demo-400px.png 400w"
     sizes="(max-width: 600px) 200px, 50vw">
```

{{EmbedLiveSample("", "100%", 350)}}

## Sécurité et vie privée

Bien que les éléments `<img>` puissent être utilisés innocemment, ils peuvent également avoir des effets indésirables en termes de sécurité et de vie privée. Voir [cet article quant à l'en-tête `Referer`](/fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns) pour plus de détails.

## Accessibilité

### Écrire des descriptions alternatives significatives

La valeur d'un attribut `alt` devrait toujours décrire le contenu de l'image de façon claire et concise. Elle ne doit pas décrire la présence de l'image ou le nom du fichier de l'image. Si l'attribut `alt` est omis volontairement, car l'image n'a pas d'équivalent textuel, utilisez d'autres méthodes afin d'indiquer le message véhiculé par l'image.

#### Mauvaise pratique

```html example-bad
<img alt="image" src="pingouin.jpg">
```

#### Bonne pratique

```html example-good
<img alt="Un manchot Rockhopper sur une plage." src="pingouin.jpg">
```

Lorsque l'attribut `alt` n'est pas présent sur une image, certains lecteurs d'écran pourront annoncer le nom du fichier de l'image. Cela peut être source de confusion si le nom du fichier n'est pas représentatif du contenu de l'image.

- [Un arbre de décision pour `alt` • Images • Tutoriel WAI sur l'accessibilité web (en anglais)](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Texte alternatif&nbsp;: le guide ultime — <i lang="en">Axess Lab</i> (en anglais)](https://axesslab.com/alt-texts/)
- [Comment optimiser votre texte alternatif&nbsp;: une introduction — Deque (en anglais)](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de succès 1.1.1 | W3C Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### L'attribut `title`

L'attribut [`title`](/fr/docs/Web/HTML/Global_attributes/title) n'est pas un remplaçant acceptable pour l'attribut `alt`. Il vaut également mieux éviter de dupliquer la valeur de l'attribut `alt` dans un attribut `title` pour la même image. En effet, un tel doublon entraînera les lecteurs d'écran à annoncer deux fois la description, ce qui pourra être une source de confusion.

L'attribut `title` ne devrait pas être utilisé afin de compléter les informations de légende de l'image pour accompagner la description fournie par `alt`. Si une image a besoin d'une légende, on utilisera les éléments [`figure`](/fr/docs/Web/HTML/Element/figure) et [`figcaption`](/fr/docs/Web/HTML/Element/figcaption).

La valeur de l'attribut `title` est généralement affichée via une bulle d'information qui apparaît au survol du curseur sur l'image. Bien que cet attribut _puisse_ fournir des informations supplémentaires, on ne doit pas s'attendre à ce que toute personne le voit&nbsp;: par exemple lorsque la navigation est effectuée au clavier ou sur un écran tactile. Si les informations à afficher sont particulièrement importantes ou utiles, on utilisera les méthodes évoquées ci-avant plutôt que `title`.

- [Utiliser l'attribut HTML `title` — mis à jour | <i lang="en">The Paciello Group</i> (en anglais)](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_intégré">contenu intégré</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a>. Si l'élément utilise l'attribut <code>usemap</code>, il fait également partie de la catégorie de contenu interactif.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, il s'agit d'un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>La balise ouvrante doit être présente et il ne doit pas y avoir de balise fermante.</td>
    </tr>
    <tr>
      <th scope="row">Éléments parents autorisés</th>
      <td>Tout élément qui accepte du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <ul>
          <li>Avec un attribut <code>alt</code> non vide ou aucun attribut <code>alt</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Role_Img">img</a></code></li>
          <li>Avec un attribut <code>alt</code> vide&nbsp;: <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">pas de rôle correspondant</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>Avec un attribut <code>alt</code> non-vide&nbsp;:
            <ul>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
              <li><a href="https://w3c.github.io/aria/#link"><code>link</code></a></li>
              <li><a href="https://w3c.github.io/aria/#menuitem"><code>menuitem</code></a></li>
              <li><a href="https://w3c.github.io/aria/#menuitemcheckbox"><code>menuitemcheckbox</code></a></li>
              <li><a href="https://w3c.github.io/aria/#menuitemradio"><code>menuitemradio</code></a></li>
              <li><a href="https://w3c.github.io/aria/#option"><code>option</code></a></li>
              <li><a href="https://w3c.github.io/aria/#progressbar"><code>progressbar</code></a></li>
              <li><a href="https://w3c.github.io/aria/#scrollbar"><code>scrollbar</code></a></li>
              <li><a href="https://w3c.github.io/aria/#separator"><code>separator</code></a></li>
              <li><a href="https://w3c.github.io/aria/#slider"><code>slider</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Switch_role"><code>switch</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Tab_Role"><code>tab</code></a></li>
              <li><a href="https://w3c.github.io/aria/#treeitem"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>Avec un attribut <code>alt</code> vide, <a href="https://w3c.github.io/aria/#none"><code>none</code></a> ou <a href="https://w3c.github.io/aria/#presentation"><code>presentation</code></a></li>
          <li>Sans attribut <code>alt</code>, aucun rôle autorisé</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLImageElement"><code>HTMLImageElement</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre — Les images en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Guide sur les formats et types de fichier pour les images](/fr/docs/Web/Media/Formats/Image_types)
- [Les images adaptatives](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- Les éléments HTML&nbsp;:
  - [`<picture>`](/fr/docs/Web/HTML/Element/picture),
  - [`<object>`](/fr/docs/Web/HTML/Element/object),
  - [`<embed>`](/fr/docs/Web/HTML/Element/embed).
- Les propriétés CSS relatives aux images&nbsp;:
  - [`object-fit`](/fr/docs/Web/CSS/object-fit),
  - [`object-position`](/fr/docs/Web/CSS/object-position),
  - [`image-orientation`](/fr/docs/Web/CSS/image-orientation),
  - [`image-rendering`](/fr/docs/Web/CSS/Image-rendering),
  - [`image-resolution`](/fr/docs/Web/CSS/image-resolution).
