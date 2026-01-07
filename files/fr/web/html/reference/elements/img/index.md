---
title: "<img> : l'élément d'image embarquée"
slug: Web/HTML/Reference/Elements/img
original_slug: Web/HTML/Element/img
l10n:
  sourceCommit: 493802c1d8ada608700ba664a45bbca5127b913c
---

L'élément [HTML](/fr/docs/Web/HTML) **`<img>`** permet d'intégrer une image dans un document.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="Tranche de pamplemousse sur une pile d'autres tranches" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

L'exemple qui précède illustre l'utilisation de l'élément `<img>`&nbsp;:

- L'attribut `src` contient le chemin vers l'image à intégrer. Il n'est pas obligatoire si l'attribut [srcset](/fr/docs/Web/API/HTMLImageElement/srcset) est disponible. Cependant, au moins un des attributs `src` ou `srcset` doit être fourni.
- L'attribut `alt` contient un texte de remplacement pour l'image, qui est obligatoire et **extrêmement utile** pour l'accessibilité&nbsp;: les lecteurs d'écran lisent la valeur de cet attribut à leurs utilisateur·ice·s afin qu'ils·elles sachent ce que signifie l'image. Le texte alternatif est également affiché sur la page si l'image ne peut pas être chargée pour une raison quelconque&nbsp;: par exemple, erreurs réseau, blocage de contenu ou lien rompu.

Il existe de nombreux autres attributs pour répondre à divers besoins&nbsp;:

- Contrôle du [référent](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{glossary("CORS")}} pour la sécurité et la vie privée&nbsp;: voir [`crossorigin`](#crossorigin) et [`referrerpolicy`](#referrerpolicy).
- Utilisez à la fois [`width`](#width) et [`height`](#height) pour définir la taille intrinsèque de l'image, ce qui lui permet de prendre de la place avant son chargement et de limiter les décalages de mise en page.
- Indices pour les images adaptatives avec [`sizes`](#sizes) et [`srcset`](#srcset) (voir aussi l'élément {{htmlelement("picture")}} et notre tutoriel [Images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images)).

## Formats d'image pris en charge

Le standard HTML n'indique pas les formats d'image qui doivent être pris en charge, les {{glossary("user agent","agents utilisateurs")}} peuvent prendre en charge différents formats.

> [!NOTE] [Le guide sur les types de fichier et formats d'image](/fr/docs/Web/Media/Guides/Formats/Image_types) contient de nombreuses informations sur les formats d'image et leur prise en charge dans les navigateurs. La section qui suit n'est qu'un résumé&nbsp;!

Les formats d'image qu'on rencontre le plus fréquemment sur le Web sont&nbsp;:

- [APNG (<i lang="en">Animated Portable Network Graphics</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) pour les séquences animées avec une compression sans perte (le format GIF est moins performant)
- [AVIF (<i lang="en">AV1 Image File Format</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#avif) pour les images et les images animées avec de hautes performances
- [GIF (<i lang="en">Graphics Interchange Format</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) pour les images et animations _simples_
- [JPEG (<i lang="en">Joint Photographic Expert Group image</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) pour une compression avec pertes d'images statiques, il s'agit du format le plus utilisé
- [PNG (<i lang="en">Portable Network Graphics</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) pour une compression sans perte d'images statiques, de meilleure qualité que le JPEG
- [SVG (<i lang="en">Scalable Vector Graphics</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) pour un format d'image vectorielle (qui permet de dessiner une image précisément à différentes échelles)
- [WebP (<i lang="en">Web Picture format</i>)](/fr/docs/Web/Media/Guides/Formats/Image_types#webp) pour les images statiques et animées

Les formats comme [WebP](/fr/docs/Web/Media/Guides/Formats/Image_types#webp) et [AVIF](/fr/docs/Web/Media/Guides/Formats/Image_types#avif) sont recommandés, car avec de meilleures performances que PNG, JPEG, GIF tant pour les images animées que statiques. WebP dispose d'une large prise en charge tandis qu'AVIF n'est pas pris en charge par Safari.

SVG reste le format recommandé pour les images qui doivent être dessinées avec précision quelle que soit la taille.

## Erreur de chargement d'une image

Si une erreur se produit lors du chargement ou du rendu de l'image et qu'un gestionnaire d'évènement `onerror` a été défini pour intercepter l'évènement {{domxref("HTMLElement/error_event", "error")}}, le gestionnaire sera appelé. Cela peut arriver pour plusieurs raisons&nbsp;:

- L'attribut `src` est vide (`""`) ou absent (`null` pour le DOM).
- L'URL utilisée pour l'attribut `src` est la même que celle de la page courante.
- L'image est corrompue et ne peut être chargée ainsi.
- Les métadonnées associées à l'image sont corrompues de telle façon qu'il est impossible de connaître ses dimensions et qu'aucune dimension n'a été fournie pour les attributs de l'élément `<img>`.
- Le format de l'image n'est pas pris en charge par l'agent utilisateur (généralement le navigateur).

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/fr/docs/Web/API/HTMLImageElement/alt#notes_dutilisation)
  - : Définit une description textuelle alternative pour l'image.

    > [!NOTE]
    > Il se peut que les navigateurs n'affichent pas l'image, cela peut se produire si&nbsp;:
    >
    > - Le navigateur n'est pas doté d'une interface visuelle
    > - La personne a configuré son navigateur pour ne pas afficher les images (afin d'économiser de la bande passante ou pour des raisons de vie privée)
    > - L'image est invalide ou son format n'est [pas pris en charge](#formats_dimage_pris_en_charge)
    >
    > Dans ces situations, le navigateur peut remplacer l'image avec le texte fourni par cet attribut. Aussi, il est grandement préférable de fournir une valeur utile pour `alt` dès que possible.

    Utiliser la chaîne de caractères vide comme valeur pour cet attribut (`alt=""`) indique que cette image _n'est pas_ importante pour le contenu (par exemple une décoration ou un pixel de pistage), dans ce cas, les navigateurs non-visuels peuvent ne pas la traiter pour le rendu. Les navigateurs visuels masqueront l'icône de l'image cassée si `alt` est vide et que le chargement de l'image a échoué.

    Cet attribut est également utilisé pour copier/coller l'image vers du texte ou pour enregistrer un marque-page avec l'image associée.

- `attributionsrc` {{experimental_inline}}
  - : Indique au navigateur d'envoyer un en-tête [`Attribution-Reporting-Eligible`](/fr/docs/Web/HTTP/Headers/Attribution-Reporting-Eligible) avec la requête pour l'image.

    Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} ou {{httpheader("Attribution-Reporting-Register-Trigger")}} dans la réponse afin d'enregistrer une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) ou [un déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers). L'en-tête de réponse renvoyé dépend de la valeur de l'en-tête `Attribution-Reporting-Eligible` ayant déclenché l'enregistrement.

    La source ou le déclencheur correspondant est éteint lorsque le navigateur reçoit la réponse contenant le fichier image.

    > [!NOTE]
    > Voir [l'API sur les rapports d'attribution](/fr/docs/Web/API/Attribution_Reporting_API) pour plus de détails.

    Il existe deux versions de cet attribut&nbsp;:
    - Une forme booléenne (c'est-à-dire l'utilisation du nom `attributionsrc` seul) qui indique qu'on souhaite envoyer l'en-tête [`Attribution-Reporting-Eligible`](/fr/docs/Web/HTTP/Headers/Attribution-Reporting-Eligible) au même serveur que celui vers lequel pointe l'attribut `src`. Cela fonctionne quand la source d'attribution ou le déclencheur d'enregistrement sont gérés sur le même serveur. Lors de l'enregistrement d'un déclencheur d'attribution, cette propriété est optionnelle et une valeur booléenne sera utilisée si elle est absente.
    - Une valeur contenant une ou plusieurs URL, comme&nbsp;:

    ```html
    <img
      src="image-file.png"
      alt="Ma description d'image"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Cette forme s'avère utile lorsque la ressource demandée n'est pas située sur un serveur que vous contrôler, ou si vous souhaitez gérer l'enregistrement de la source d'attribution sur un serveur différent. Dans ce cas, on indique une ou plusieurs URL pour la valeur de `attributionsrc`. Lorsque la requête pour la ressource est émise, l'en-tête [`Attribution-Reporting-Eligible`](/fr/docs/Web/HTTP/Headers/Attribution-Reporting-Eligible) sera envoyé aux URL indiquées dans `attributionSrc`, ainsi qu'à l'origine de la ressource. Ces URL pourront ensuite répondre avec un en-tête [`Attribution-Reporting-Register-Source`](/fr/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source) ou [`Attribution-Reporting-Register-Trigger`](/fr/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger) afin de finaliser l'enregistrement.

    > [!NOTE]
    > Indiquer plusieurs URL signifie que plusieurs sources d'attribution peuvent être enregistrées pour la même fonctionnalité. On peut par exemple avoir plusieurs campagnes dont on souhaite mesurer les performances, via différents rapports sur différentes données.

- [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Indique que la récupération de l'image doit être effectuée avec une requête CORS. Les données provenant d'une [image chargée via une requête CORS](/fr/docs/Web/HTML/How_to/CORS_enabled_image) peuvent être réutilisées dans un élément [`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas) sans que celui-ci soit considéré comme [corrompu (<i lang="en">tainted</i>)](/fr/docs/Web/HTML/How_to/CORS_enabled_image#canevas_corrompu_et_sécurité).

    Si l'attribut `crossorigin` _n'est pas_ indiqué, une requête sans CORS sera effectuée (c'est-à-dire sans l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Reference/Headers/Origin)) et le navigateur marquera la page comme potentiellement corrompue, empêchant d'accéder aux données de l'image et empêchant son utilisation dans les éléments [`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas).

    Si l'attribut `crossorigin` _est présent_, une requête CORS est envoyée (avec l'en-tête de requête [`Origin`](/fr/docs/Web/HTTP/Reference/Headers/Origin))&nbsp;; si le serveur ne gère pas l'accès depuis les origines tierces (c'est-à-dire qu'il n'envoie aucun en-tête de réponse [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) ou qu'il n'inclut pas l'origine du site dans l'en-tête `Access-Control-Allow-Origin`), le navigateur bloquera le chargement de l'image et affichera une erreur CORS dans la console de développement.

    Les valeurs autorisées pour cet attribut sont&nbsp;:
    - `anonymous`
      - : Une requête CORS est envoyée sans informations d'authentification (c'est-à-dire sans {{glossary("cookie", "cookies")}}, [certificat X.509 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5280), ou en-tête de requête {{httpheader("Authorization")}}).
    - `use-credentials`
      - : La requête CORS est envoyée avec les informations d'authentification (cookies, certificat X.509 et/ou en-tête `Authorization`). Si le serveur ne permet pas le partage des informations d'authentification avec le site d'origine (avec `Access-Control-Allow-Credentials: true` comme en-tête de réponse), le navigateur marque l'image comme potentiellement corrompue et restreint l'accès à ses données.

    Si la valeur de l'attribut est invalide, les navigateurs considèrent que la valeur `anonymous` a été utilisée. Voir [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus d'informations.

- `decoding`
  - : Cet attribut fournit une indication au navigateur sur la façon de décoder l'image&nbsp;: soit en effectuant le décodage de l'image en même temps que le rendu du reste du contenu du DOM, dans une seule étape de présentation qui paraît plus «&nbsp;correcte&nbsp;» (`sync`), soit en rendant et présentant d'abord le reste du contenu du DOM puis en décodant l'image et en la présentant ensuite (`async`). En pratique, `async` signifie que le prochain affichage ne dépend pas de la fin du décodage de l'image.

    Il est souvent difficile de percevoir un effet notable lors de l'utilisation de `decoding` sur des éléments `<img>` statiques. Ils seront probablement d'abord rendus comme des images vides pendant que les fichiers image sont récupérés (depuis le réseau ou le cache), puis traités indépendamment, de sorte que la «&nbsp;synchronisation&nbsp;» des mises à jour de contenu est moins apparente. Cependant, le blocage du rendu pendant le décodage, bien que souvent très court, _peut_ être mesuré — même s'il est difficile à observer à l'œil nu. Voir [Que fait réellement l'attribut de décodage d'image&nbsp;? <sup>(angl.)</sup>](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) pour une analyse plus détaillée (tunetheweb.com, 2023).

    L'utilisation de différents types de `decoding` peut entraîner des différences plus perceptibles lors de l'insertion dynamique d'éléments `<img>` dans le DOM via JavaScript — voir {{domxref("HTMLImageElement.decoding")}} pour plus de détails.

    Valeurs autorisées&nbsp;:
    - `sync`
      - : L'image est décodée de façon synchrone afin d'être présentée de façon atomique avec le reste du contenu.
    - `async`
      - : L'image est décodée de façon asynchrone afin de réduire le temps nécessaire à l'affichage du reste du contenu.
    - `auto`
      - : La valeur par défaut qui indique qu'il n'y a pas de préférence. C'est le navigateur qui décide alors ce qui est le mieux.

- [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Indique que l'image doit être observée par l'API [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming). La valeur fournie devient un identifiant pour l'élément observé. Voir aussi la page de l'atttribut [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming).

- `fetchpriority`
  - : Fournit une indication de la priorité relative à utiliser pour la récupération de l'image.
    Les valeurs autorisées sont&nbsp;:
    - `high`
      - : L'image est récupérée avec une priorité plus élevée que les autres images.
    - `low`
      - : L'image est récupérée avec une priorité plus faible que les autres images.
    - `auto`
      - : La valeur par défaut. Il n'y a pas de préférence pour la priorité.

    Voir {{domxref("HTMLImageElement.fetchPriority")}} pour plus d'informations.

- `height`
  - : La hauteur intrinsèque de l'image, exprimée en pixels. Cette valeur doit être un nombre entier, sans unité.

    > [!NOTE]
    > Inclure `height` et [`width`](#width) permet au navigateur de calculer les {{glossary("aspect ratio", "proportions")}} de l'image avant son chargement. Ces proportions sont utilisées pour réserver l'espace nécessaire afin d'afficher l'image et de réduire voire d'empêcher tout décalage à l'affichage, permettant ainsi une navigation plus agréable et de meilleures performances.

- `ismap`
  - : Cet attribut booléen indique que l'image fait partie d'une [carte côté serveur <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Image_map#Server-side). Dans ce cas, les coordonnées du clic sur l'image sont envoyés au serveur.

    > [!NOTE]
    > Cet attribut est uniquement autorisé lorsque l'élément `<img>` est un descendant d'un élément {{htmlelement("a")}} disposant d'un attribut `href` valide. Cela fournit une alternative lorsque la navigation se fait sans dispositif de pointage.

- `loading`
  - : Indique comment le navigateur devrait charger l'image&nbsp;:
    - `eager`
      - : L'image est chargée immédiatement, que l'image soit située dans la zone d'affichage (<i lang="en">viewport</i>) visible ou non. Il s'agit de la valeur par défaut.
    - `lazy`
      - : Le chargement de l'image est retardé jusqu'à ce que celle-ci soit située à une certaine distance, définie par le navigateur, de la zone d'affichage. L'idée est d'éviter de consommer de la bande passante et des ressources réseaux avant d'être relativement certain que l'image est nécessaire. Pour la plupart des cas d'usage, cela permet d'améliorer les performances.

      > [!NOTE]
      > Le retardement du chargement est uniquement activé lorsque JavaScript est activé dans le navigateur. Il s'agit d'une mesure pour limiter le pistage. En effet, si les scripts sont désactivés pour le navigateur et que le chargement retardé est actif, le pistage d'un utilisateur en fonction de sa position sur la page serait toujours possible (via des images placées à intervalle régulier sur la page).

      > [!NOTE]
      > Les images avec `loading` qui vaut `lazy` ne seront jamais chargées si elles n'ont pas d'intersection avec une partie visible d'un élément. Fournir les attributs `width` et `height` pour les images chargées à la demande règle ce problème et est [recommandé par la spécification <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element).

- `referrerpolicy`
  - : Une chaîne de caractères qui indique le référent à utiliser lors de la récupération de la ressource&nbsp;:
    - `no-referrer`
      - : L'en-tête [`Referer`](/fr/docs/Web/HTTP/Reference/Headers/Referer) n'est pas envoyé.
    - `no-referrer-when-downgrade`
      - : L'en-tête [`Referer`](/fr/docs/Web/HTTP/Reference/Headers/Referer) ne sera pas envoyé aux origines sans TLS/HTTPS.
    - `origin`:
      - : Le référent envoyé sera limité à l'origine de la page référente, c'est-à-dire qu'il ne contiendra que le [schéma, l'hôte et le port](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL).
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
  - : Une ou plusieurs valeurs séparées par des virgules, qui peuvent être des tailles de source ou le mot-clé `auto`.

    Chaque taille de source consiste en&nbsp;:
    1. Une [condition de média](/fr/docs/Web/CSS/Guides/Media_queries/Using#syntaxe). Celle-ci doit être absente pour le dernier élément de la liste.
    2. Une valeur de taille de source.

    Les conditions de média décrivent les propriétés de la _zone d'affichage (<i lang="en">viewport</i> en anglais)_, et non celles de l'_image_. Par exemple, `(height <= 500px) 1000px` propose d'utiliser une source d'image de 1000px de large si la hauteur de la _zone d'affichage_ est inférieure ou égale à 500px. Comme un descripteur de taille de source définit la largeur à utiliser pour l'image lors de la mise en page, la condition de média est généralement (mais pas nécessairement) basée sur la [largeur](/fr/docs/Web/CSS/Reference/At-rules/@media/width).

    Les valeurs de taille de source spécifient la taille d'affichage prévue de l'image. Les {{glossary("user agent", "agents utilisateurs")}} utilisent la taille de source courante pour sélectionner l'une des sources fournies par l'attribut `srcset`, lorsque ces sources sont décrites à l'aide de descripteurs de largeur (`w`). La taille de source sélectionnée affecte la {{glossary("intrinsic size", "taille intrinsèque")}} de l'image (la taille d'affichage de l'image si aucun style {{glossary("CSS")}} n'est appliqué). Si l'attribut `srcset` est absent ou ne contient aucune valeur avec un descripteur de largeur, alors l'attribut `sizes` n'a aucun effet.

    Une valeur de taille de source peut être n'importe quelle [longueur](/fr/docs/Web/CSS/Reference/Values/length) non négative. Elle ne doit pas utiliser de fonctions CSS autres que les [fonctions mathématiques](/fr/docs/Web/CSS/Reference/Values/Functions#math_functions). Les unités sont interprétées de la même manière que dans les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), ce qui signifie que toutes les unités de longueur relative sont relatives à la racine du document et non à l'élément `<img>`. Par exemple, une valeur en `em` est relative à la taille de police racine, et non à la taille de police de l'image. Les valeurs en [pourcentage](/fr/docs/Web/CSS/Reference/Values/percentage) ne sont pas autorisées.

    Le mot-clé `auto` peut remplacer toute la liste des tailles ou la première entrée de la liste. Il n'est valide que lorsqu'il est combiné avec `loading="lazy"`, et il correspond à la [taille concrète](/fr/docs/Web/CSS/Reference/Values/image) de l'image. Comme la taille intrinsèque de l'image n'est pas encore connue, il est recommandé de spécifier aussi les attributs `width` et `height` (ou leurs équivalents CSS) pour éviter que le navigateur n'assume une largeur d'image par défaut de 300px.
    Pour une meilleure compatibilité avec les navigateurs qui ne prennent pas en charge `auto`, vous pouvez inclure des tailles de repli après `auto` dans l'attribut `sizes` :

    ```html
    <img
      loading="lazy"
      width="200"
      height="200"
      sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
      srcset="
        swing-200.jpg   200w,
        swing-400.jpg   400w,
        swing-800.jpg   800w,
        swing-1600.jpg 1600w
      "
      src="swing-400.jpg"
      alt="Balancement de kettlebell" />
    ```

- `src`
  - : L'{{glossary("URL")}} de l'image. Cet attribut est obligatoire. Pour les {{glossary("Browser", "navigateurs")}} qui prennent en charge `srcset`, l'image fourni par `src` est considérée comme une candidate avec un descripteur de densité de pixel à `1x`, sauf si une image avec un tel descripteur est déjà définie dans `srcset`, ou si `srcset` contient des descripteurs `w`.

- `srcset`
  - : Une ou plusieurs chaînes de caractères séparées par des virgules, qui indiquent des sources possibles pour l'image que l'{{glossary("user agent", "agent utilisateur")}} pourra utiliser. Chaque chaîne de caractères se compose&nbsp;:
    1. D'une {{glossary("URL")}} vers l'image
    2. Éventuellement, d'un espace suivi&nbsp;:
       - D'un descripteur de largeur (un entier positif suivi par `w`). Le descripteur de largeur est divisé par la taille de source fournie par l'attribut `sizes` afin de calculer la densité de pixel effective.
       - D'un descripteur de densité de pixel (un nombre décimal positif suivi par `x`).

    Si aucun descripteur n'est indiqué, la source se voit affecter un descripteur par défaut de `1x`.

    Toute combinaison des deux types de descripteur sera invalide. De même, indiquer deux sources avec le même descripteur sera invalide.

    L'agent utilisateur sélectionne une des sources disponibles comme il l'entend. Cette liberté permet de baser le choix sur d'autres facteurs comme les préférences de l'utilisateur ou les {{glossary("bandwidth", "conditions réseau")}}. Voir [le tutoriel sur les images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images) pour un exemple.

- `width`
  - : La largeur intrinsèque de l'image, exprimée en pixels. La valeur doit être un nombre entier sans unité.

- `usemap`
  - : L'{{glossary("URL")}} partielle (commençant par `#`) d'une [carte d'image](/fr/docs/Web/HTML/Reference/Elements/map) associée à l'élément.

    > [!NOTE]
    > Cet attribut est invalide si l'élément `<img>` est à l'intérieur d'un élément {{htmlelement("a")}} ou d'un élément {{htmlelement("button")}}.

### Attributs dépréciés

- `align` {{deprecated_inline}}
  - : Aligne l'image au sein de son contexte englobant. À la place de cet attribut, on privilégiera les propriétés {{glossary("CSS")}} {{cssxref('float')}} et/ou {{cssxref('vertical-align')}}. Les valeurs autorisées pour cet attribut sont&nbsp;:
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
  - : La largeur de la bordure autour de l'image. La propriété {{glossary("CSS")}} {{cssxref('border')}} doit être utilisée à la place.

- `hspace` {{deprecated_inline}}
  - : Le nombre de pixels d'espace blanc à droite et à gauche de l'image. La propriété {{glossary("CSS")}} {{cssxref('margin')}}doit être utilisée à la place.

- `longdesc` {{deprecated_inline}}
  - : Un lien vers une description plus détaillée de l'image. Les valeurs pouvaient être une {{glossary("URL")}} ou l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) d'un autre élément.

    > [!NOTE]
    > Cet attribut est considéré comme obsolète dans la [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). Son avenir est incertain&nbsp;; il est recommandé d'utiliser une alternative {{glossary("WAI")}}-{{glossary("ARIA")}} comme [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) ou [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

- `name` {{deprecated_inline}}
  - : Un nom pour l'élément, l'attribut universel [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) doit être utilisé à la place.

- `vspace` {{deprecated_inline}}
  - : Le nombre de pixels d'espace blanc en haut et en bas de l'image. La propriété CSS {{cssxref('margin')}} doit être utilisée à la place.

## Mettre en forme avec CSS

`<img>` est {{glossary("replaced elements", "un élément remplacé")}}. Sa propriété {{cssxref("display")}} par défaut vaut `inline`, mais ses dimensions par défaut sont définies par les valeurs intrinsèques de l'image, à la façon de `inline-block`. Il est tout à fait possible d'utiliser les propriétés {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc, sur une image.

`<img>` n'a pas de ligne de base, donc lorsque les images sont utilisées dans un contexte de mise en forme en ligne avec {{cssxref("vertical-align", "vertical-align: baseline")}}, le bas de l'image sera placé sur la ligne de base du texte.

La propriété {{cssxref("object-position")}} peut être utilisée afin de positionner l'image au sein de la boîte fournie par l'élément. La propriété {{cssxref("object-fit")}} peut être utilisée pour ajuster le dimensionnement de l'image au sein de la boîte (par exemple pour étirer ou rogner l'image dans la boîte si nécessaire).

Selon son type, une image peut avoir une largeur et une hauteur intrinsèques. Pour certains types d'image, cependant, des dimensions intrinsèques ne sont pas nécessaires. Les images {{glossary("SVG")}}, par exemple, n'ont pas de dimensions intrinsèques si leur élément racine {{SVGElement("svg")}} ne possède pas d'attribut `width` ou `height`.

## Accessibilité

### Rédiger des descriptions alternatives pertinentes

La valeur d'un attribut `alt` doit fournir un texte de remplacement clair et concis pour le contenu de l'image. Elle ne doit pas décrire la présence de l'image elle-même ni le nom du fichier de l'image. Si l'attribut `alt` est volontairement omis parce que l'image n'a pas d'équivalent textuel, envisagez d'autres méthodes pour présenter ce que l'image cherche à communiquer.

#### À ne pas faire

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### À faire

```html example-good
<img alt="Un manchot sur une plage." src="penguin.jpg" />
```

Un test important pour l'accessibilité consiste à lire le contenu de l'attribut `alt` avec le texte qui précède pour vérifier si cela transmet le même sens que l'image. Par exemple, si l'image était précédée de la phrase «&nbsp;Lors de mes voyages, j'ai vu un petit animal mignon&nbsp;: », l'exemple _À ne pas faire_ pourrait être lu par un lecteur d'écran comme «&nbsp;Lors de mes voyages, j'ai vu un petit animal mignon&nbsp;: image&nbsp;», ce qui n'a pas de sens. L'exemple _À faire_ pourrait être lu comme «&nbsp;Lors de mes voyages, j'ai vu un petit animal mignon&nbsp;: Un manchot sur une plage.&nbsp;», ce qui a du sens.

Pour les images utilisées pour déclencher une action, par exemple des images incluses dans un élément HTML {{htmlelement("a")}} ou {{htmlelement("button")}}, pensez à décrire l'action déclenchée dans la valeur de l'attribut `alt`. Par exemple, vous pouvez écrire `alt="page suivante"` au lieu de `alt="flèche droite"`. Vous pouvez aussi ajouter une description complémentaire dans un attribut `title`&nbsp;; celle-ci pourra être lue par les lecteurs d'écran si l'utilisateur·ice en fait la demande.

Lorsque l'attribut `alt` n'est pas présent sur une image, certains lecteurs d'écran peuvent annoncer le nom du fichier de l'image à la place. Cela peut prêter à confusion si le nom du fichier ne représente pas le contenu de l'image.

- [Un arbre de décision pour alt • Images • Tutoriels d'accessibilité WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Textes alternatifs&nbsp;: le guide ultime — Axess Lab <sup>(angl.)</sup>](https://axesslab.com/alt-texts/)
- [Comment concevoir un bon texte alternatif&nbsp;: introduction | Deque <sup>(angl.)</sup>](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Comprendre WCAG, explications de la directive 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#directive_1.1_—_fournir_des_alternatives_textuelles_au_contenu_non_textuel)
- [Comprendre le critère de succès 1.1.1 | W3C Comprendre WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifier le SVG comme une image

En raison d'un [bug VoiceOver](https://webkit.org/b/216364), VoiceOver n'annonce pas correctement les images SVG comme des images. Ajoutez [`role="img"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) à tous les éléments `<img>` dont la source est un fichier SVG afin de garantir que les technologies d'assistance annoncent correctement le SVG comme contenu image.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### L'attribut title

L'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) n'est pas un substitut acceptable à l'attribut `alt`. De plus, évitez de dupliquer la valeur de l'attribut `alt` dans un attribut `title` déclaré sur la même image. Cela peut amener certains lecteurs d'écran à annoncer deux fois le même texte, ce qui crée une expérience confuse.

L'attribut `title` ne doit pas non plus être utilisé comme information de légende supplémentaire pour accompagner la description `alt` d'une image. Si une image a besoin d'une légende, utilisez les éléments {{htmlelement("figure")}} et {{htmlelement("figcaption")}}.

La valeur de l'attribut `title` est généralement présentée à l'utilisateur·ice sous forme d'infobulle, qui apparaît peu après l'arrêt du curseur sur l'image. Bien que cela _puisse_ fournir des informations supplémentaires, il ne faut pas supposer que l'utilisateur·ice la verra&nbsp;: il·elle peut n'utiliser qu'un clavier ou un écran tactile. Si vous avez une information particulièrement importante ou précieuse pour l'utilisateur·ice, présentez-la en ligne en utilisant l'une des méthodes mentionnées ci-dessus plutôt que `title`.

- [Utiliser l'attribut HTML `title` — mis à jour | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Exemples

### Fournir un texte alternatif

Dans l'exemple qui suit, l'image est accompagnée d'un texte alternatif qui sert l'accessibilité.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="Logo de MDN" />
```

{{EmbedLiveSample('fournir_un_texte_alternatif', '100%', '160')}}

### Créer un lien avec une image

Cet exemple intègre l'image précédente et la transforme en lien. Pour cela, l'élément `<img>` est placé au sein d'un élément [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a). Ici, le texte alternatif devrait décrire la ressource vers laquelle pointe le lien.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visiter le site MDN" />
</a>
```

{{EmbedLiveSample('créer_un_lien_avec_une_image', '100%', '160')}}

### Utiliser l'attribut `srcset`

Dans cet exemple, on utilise l'attribut `srcset` avec une référence vers une version du logo en haute résolution. Pour les appareils avec une haute résolution, celle-ci sera chargée à la place à la place de l'image indiquée par `src`. Pour les agents utilisateurs qui prennent en charge l'attribut `srcset`, l'image référencée par l'attribut `src` sera considérée comme une candidate avec le descripteur `1x`.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="Logo MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("utiliser_lattribut_srcset", "100%", "160")}}

### Utiliser les attributs `srcset` et `sizes`

L'attribut `src` est ignoré par les agents utilisateurs qui le prennent en charge lorsque les descripteurs `w` sont présents. Lorsque la condition `(max-width: 600px)` est respectée, l'image large de 200 pixels sera chargée (car c'est celle qui est la plus proche de `200px`). Dans les autres cas, c'est l'autre image qui est chargée.

```html
<img
  src="clock-demo-200px.png"
  alt="Clock"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("utiliser_les_attributs_srcset_et_sizes", "100%", 350)}}

> [!NOTE]
> Pour voir le redimensionnement en action, {{LiveSampleLink("utiliser_les_attributs_srcset_et_sizes", "voir l'exemple sur une page séparée")}}, afin de pouvoir réellement redimensionner la zone de contenu.

## Sécurité et vie privée

Bien que les éléments `<img>` puissent être utilisés innocemment, ils peuvent également avoir des effets indésirables en termes de sécurité et de vie privée. Voir [cet article quant à l'en-tête `Referer`](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) pour plus de détails.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_intégré">contenu intégré</a>, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible">contenu tangible</a>. Si l'élément utilise l'attribut <code>usemap</code>, il fait également partie de la catégorie de contenu interactif.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, il s'agit d'un élément {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>La balise ouvrante doit être présente et il ne doit pas y avoir de balise fermante.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <ul>
          <li>Avec un attribut <code>alt</code> non vide ou aucun attribut <code>alt</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role">img</a></code></li>
          <li>Avec un attribut <code>alt</code> vide&nbsp;: <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">pas de rôle correspondant <sup>(angl.)</sup></a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>Avec un attribut <code>alt</code> non-vide&nbsp;:
            <ul>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a></li>
              <li><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>Avec un attribut <code>alt</code> vide, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a></li>
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

- Les éléments {{HTMLElement("picture")}}, {{HTMLElement("object")}} et {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, et {{cssxref("image-resolution")}}&nbsp;: propriétés CSS liées aux images.
- L'interface {{domxref("HTMLImageElement")}} pour cet élément
- [Apprendre — Les images en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Guide sur les formats et types de fichier pour les images](/fr/docs/Web/Media/Guides/Formats/Image_types)
- [Les images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images)
