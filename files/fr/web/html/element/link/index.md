---
title: "<link> : l'élément de lien vers des ressources externes"
slug: Web/HTML/Element/link
---

{{HTMLSidebar}}

L'élément HTML **`<link>`** définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers [une feuille de style](/fr/docs/Glossaire/CSS), vers les icônes utilisées en barre de titre ou comme icône d'application sur les appareils mobiles.

{{EmbedInteractiveExample("pages/tabbed/link.html")}}

Pour lier une feuille de style externe, on inclut un élément `<link>` de la forme suivante à l'intérieur de l'élément {{htmlelement("head")}} :

```html
<link href="main.css" rel="stylesheet" />
```

Dans cet exemple, on indique le chemin vers la feuille de style grâce à l'attribut `href`, l'attribut `rel` possède une valeur `stylesheet` qui indique que c'est une feuille de style. `rel` signifie _relationship_ qui correspond donc à la relation entre la ressource et le document courant. Il existe de [nombreux types de liens possibles](/fr/docs/Web/HTML/Types_de_lien).

Certains types sont assez fréquents. Ainsi, pour l'icône présentant le site dans l'onglet, on trouvera :

```html
<link rel="icon" href="favicon.ico" />
```

Il existe différents types de relations pour préciser les icônes et qui permettent notamment de cibler certaines plateformes mobiles :

```html
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

L'attribut `sizes` indique la taille de l'icône tandis que l'attribut `type` contient le type MIME de la ressource qui est liée. Ces attributs permettent alors au navigateur de sélectionner la ressource la plus adéquate.

On peut également fournir l'attribut `media` afin d'utiliser telle ou telle ressource lorsqu'une requête média est vérifiée. Ainsi, on pourra utiliser ce qui suit afin d'avoir une feuille de style utilisée à l'impression et une autre dédiée au mobile :

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Certaines fonctionnalités relatives à la sécurité sont également disponibles avec certains attributs de `<link>`. Dans cet exemple :

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

L'attribut `rel` vaut `preload` et indique que le navigateur doit précharger la ressource (voir [Le préchargement du contenu avec `rel="preload"`](/fr/docs/Web/HTML/Précharger_du_contenu) pour plus de détails), l'attribut `as` indique la classe de contenu qui est récupéré et l'attribut `crossorigin` indique si la ressource doit être récupérée avec une requête CORS.

Quelques notes d'utilisation :

- Un élément `<link>` element peut être placé dans un élément {{HTMLElement("head")}} ou {{htmlelement("body")}} selon la valeur de la relation. C'est cependant une bonne pratique que de placer l'ensemble des éléments `<link>` dans l'élément `<head>`.
- Lorsque `<link>` est utilisé pour la _favicon_ d'un site et que celui-ci utilise les règles CSP afin d'améliorer la sécurité, les règles s'appliquent également aux icônes. Aussi, si la _favicon_ ne charge pas, veuillez vérifier que la directive [`img-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) de l'en-tête {{HTTPHeader("Content-Security-Policy")}} ne bloque pas le chargement de l'image.
- Les spécifications HTML et XHTML définissent des gestionnaires d'évènements pour l'élément `<link>` mais leur utilisation reste incertaine.
- Pour XHTML 1.0, les éléments vides tels que `<link>` devaient utiliser une barre oblique de fin : `<link />`.
- WebTV prend en charge la valeur `next` pour l'attribut `rel` afin de précharger la page suivante pour une série de documents.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `as`
  - : Cet attribut est uniquement utilisé lorsque `rel="preload"` ou `rel="prefetch"` est utilisé pour l'élément `<link>`. L'attribut indique le type de contenu chargé par l'élément `<link>` et permet au navigateur de déterminer la priorité du contenu, d'identifier les utilisations de la ressource plus bas dans le document, d'appliquer [la bonne politique de sécurité des contenus](/fr/docs/HTTP/CSP) et de définir le bon en-tête de requête {{httpheader("Accept")}}.
- `crossorigin`

  - : Cet attribut à valeur contrainte indique si le CORS doit être utilisé lorsque la ressource liée est récupérée. [Les images avec CORS activé](/fr/docs/Web/HTML/Images_avec_le_contrôle_d_accès_HTTP) peuvent être réutilisée dans un élément {{HTMLElement("canvas")}} sans qu'il soit corrompu. Les valeurs autorisées sont :

    - `"anonymous"` : une requête _cross-origine_ est effectuée (avec l'en-tête HTTP `Origin`). Mais aucune information d'identification n'est envoyée (aucun cookie, aucun certificat X.509, aucune authentification simple via HTTP). Si le serveur ne fournit pas d'informations au site d'origine (c'est-à-dire sans utiliser l'en-tête HTTP {{httpheader("Access-Control-Allow-Origin")}}, l'image sera _corrompue_ et son utilisation sera restreinte.
    - `"use-credentials"` : une requête _cross-origine_ est effectuée (avec l'en-tête HTTP `Origin`) avec des informations d'authentification qui sont envoyées (un cookie, un certification et une authentification HTTP simple sont envoyés). Si le serveur ne fournit pas d'information d'authentification au site d'origine via l'en-tête {{httpheader("Access-Control-Allow-Credentials")}}, l'image sera corrompue et son utilisation sera restreinte.

    Lorsque l'attribut est absent, la ressource est récupérée sans requête CORS (c'est-à-dire sans envoyer l'en-tête {{httpheader("Origin")}}) ce qui empêche de l'utiliser dans les éléments qui ne doivent pas être corrompus tels que {{HTMLElement('canvas')}}. Si la valeur est invalide, elle est synonyme de `anonymous`. Pour plus d'informations, consulter [l'article sur le contrôle d'origine HTTP (CORS)](/fr/docs/Web/HTML/Reglages_des_attributs_CORS).

- `disabled`

  - : Cet attribut est uniquement utilisable avec les liens avec `rel="stylesheet"`. L'attribut booléen `disabled` indique si la feuille de style référencée devrait être chargée et appliquée au document. Si l'attribut `disabled` est indiqué dans le document HTML lors de son chargement, la feuille de style ne sera pas chargé au chargement de la page. La feuille de style sera uniquement chargée à la demande si (et lorsque) l'attribut `disabled` est retiré ou passé à `false` via un script.

    Toutefois, une fois que la feuille de style a été chargée, toute modification à l'attribut `disabled` n'aura aucun impact, sa valeur ne sera pas liée à la propriété {{domxref("StyleSheet.disabled")}}. Modifier cet attribut ne fait qu'activer/désactiver la capacité de charger et d'appliquer la feuille de style au document.

    Cette propriété est à distinguer de la propriété `disabled` de l'interface {{domxref("StyleSheet")}} : lorsqu'on utilise celle-ci, la feuille de style est retirée de {{domxref("document.styleSheets")}} et elle n'est pas rechargée automatiquement lorsqu'on la repasse à `false`.

- `href`
  - : Cet attribut définit l'URL de la ressource liée. L'URL utilisée peut être absolue ou relative.
- `hreflang`
  - : Cet attribut, purement indicatif, définit la langue de la ressource liée. La valeur doit être une balise de langue [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) valide. Cet attribut doit uniquement être utilisé si l'attribut `href` est présent.
- `importance` {{experimental_inline}}

  - : Cet attribut indique l'importance relative de la ressource. Les indications de priorité utilisent ces valeurs :

    - `auto`
      - : Aucune préférence n'est indiquée. Le navigateur peut utiliser une heuristique qui lui est propre afin de décider de la priorité de la ressource.
    - `high`
      - : Cette valeur indique au navigateur que la ressource a une priorité élevée.
    - `low`
      - : Cette valeur indique au navigateur que la ressource a une priorité basse.

    Note : L'attribut `importance` peut uniquement être utilisé sur l'élément `link` si `rel` vaut `"preload"` ou `"prefetch"`.

- `integrity` {{experimental_inline}}
  - : Cet attribut contient des métadonnées en ligne qui correspondent à l'empreinte cryptographique de la ressource qu'on souhaite récupérer. Cela permet à l'agent utilisateur de contrôler que la ressource récupérée n'a pas été manipulée. Pour plus d'informations, consulter [l'article sur le contrôle des sous-ressources](/fr/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Cet attribut indique le média auquel s'applique la ressource liée. Sa valeur doit être [une requête média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries). Cet attribut est principalement utilisé pour permettre à l'agent utilisateur de sélectionner la meilleure feuille de style en fonction de l'appareil de l'utilisateur.

    > **Note :**
    >
    > - En HTML4, la valeur de cet attribut était une liste de descripteurs de médias ([des types ou des groupes de média](/fr/docs/Web/CSS/@media)) séparés par des espaces, par exemple `print` `screen` `aural` `braille`. HTML5 étend cet attribut à l'ensemble [des requêtes média](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries) qui forment un surensemble des valeurs autorisées en HTML 4.
    > - Les navigateurs qui ne prennent pas en charge [les requêtes média CSS3](/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries) ne reconnaîtront pas nécessairement les liens adéquats et il faut donc toujours fournir des liens de recours.

- `referrerpolicy` {{experimental_inline}}

  - : Une chaîne de caractères qui indique le référent à utiliser lors de la récupération de la ressource :

    - `'no-referrer'` : l'en-tête {{HTTPHeader("Referer")}} n'est pas envoyé
    - `'no-referrer-when-downgrade'` signifie qu'aucun en-tête {{HTTPHeader("Referer")}} ne sera envoyé lors de la navigation vers une origine non protégée par TLS (HTTPS). C'est le comportement par défaut de l'agent utilisateur si aucune autre règle n'est indiquée.
    - `'origin'` indique que le référent sera l'origine de la page (ce qui correspond approximativement au schéma, à l'hôte et au port).
    - `'origin-when-cross-origin'` indique que lorsqu'on navigue vers d'autres origines, le référent se limitera au schéma, à l'hôte et au port et que lorsqu'on navigue sur la même origine, il incluera le chemin.
    - `'unsafe-url'` : le référent incluera l'origine et le chemin (mais ni le fragment, ni le mot de passe ou le nom d'utilisateur). Ce comportement n'est pas sécurisé car il peut laisser fuiter des origines et des chemins de ressources TLS vers des origines non-sécurisées.

- `rel`
  - : Cet attribut indique la relation qui existe entre le document et la ressource liée. Cet attribut doit être une liste de [types de lien](/fr/docs/Web/HTML/Types_de_lien), séparés par des espaces. La plupart du temps, cet attribut est utilisé pour caractériser un lien vers une feuille de style et il vaut alors `stylesheet` quand l'attribut `href` reçoit l'URL de la feuille de style à charger. WebTV supporte également la valeur `next` qui permet de précharger la page suivante d'une série de pages.
- `sizes`

  - : Cet attribut définit les dimensions des icônes pour le média contenu dans la ressource. Cet attribut doit uniquement être présent lorsque [`rel`](/fr/docs/Web/HTML/Element/link#rel) contient le type de lien `icon`. Il peut prendre l'une des valeurs suivantes :

    - `any` : l'icône peut être redimensionnée à volonté car elle utilise un format vectoriel (par exemple `image/svg+xml`).
    - une liste de tailles, séparées par des espaces, dont chacune est de la forme `<largeur en pixels>x<hauteur en pixels>` ou `<largeur en pixels>X<hauteur en pixels>`. Pour chacune de ces dimensions, il doit exister une image correspondante dans la ressource.

    > **Note :**
    >
    > - La plupart des format d'icône permettent simplement de stocker une seule icône, c'est pour cela que, la plupart du temps, [`sizes`](/fr/docs/Web/HTML/Global_attributes#sizes) ne contient qu'un seul élément.
    > - Safari sur iOS ne prend pas en charge cet attribut mais utilise des types de lien non-standards pour définir l'icône utilisé dans la barre du site ou pour le lancer : `apple-touch-icon` et `apple-touch-startup-icon`.

- `title`
  - : L'attribut `title` possède un sens spécifique pour l'élément `<link>`. Utilisé pour un lien `<link rel="stylesheet">`, l'attribut `title` définit [une feuille de style alternative ou une feuille de style préférée](/fr/docs/Web/CSS/Feuilles_de_style_alternatives). S'il est mal utilisé, [la feuille de style pourra être ignorée](/fr/docs/Utiliser_des_titres_corrects_avec_des_feuilles_de_styles_externes).
- `type`
  - : Cet attribut est utilisé pour définir le type de contenu auquel le lien fait référence. La valeur de cet attribut doit être un type MIME tel que `text/html` ou `text/css`, etc. Le plus souvent, cet attribut est utilsé pour définir le type de feuille de style utilisé et la valeur la plus fréquente est `text/css` qui indique le format d'une feuille de style en cascade (_Cascading Style Sheet_ pour CSS). Cet attribut est également utilisé pour les liens avec `rel="preload"` afin de vérifier la prise en charge du format de fichier (si le navigateur ne prend pas en charge ce fichier, il n'est pas téléchargé).

### Attributs dépréciés, obsolètes ou non-standard

- `charset`{{deprecated_inline}}

  - : Cet attribut définit l'encodage de la ressource lié. La valeur de cet attribut est une liste de jeux de caractères (tels que définis dans la RFC {{rfc(2045)}}) séparés par des espaces ou des virgules. La valeur par défaut de cet attribut est `iso-8859-1`.

    > **Note :** cet attribut est obsolète **et ne doit pas être utilisé**. Pour obtenir l'effet escompté, on utilisera l'en-tête HTTP {{httpheader("Content-Type")}} pour la ressource liée.

- `methods` {{Non-standard_inline}}
  - : La valeur de cet attribut fournit des informations quant aux fonctions qui peuvent être utilisées sur l'objet lié. Les valeurs sont généralement des méthodes HTTP mais elles peuvent également inclure des informations en avance sur le lien (le navigateur pourrait par exemple choisir un affichage différent pour un lien selon la méthode utilisée). Cet attribut n'est pas pris en charge de façon correcte, y compris par le navigateur qui le définit, Internet Explorer 4. Voir [la page MSDN sur la propriété `methods`](https://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx).
- `prefetch` {{Non-standard_inline}} {{secureContext_inline}}
  - : Cet attribut permet d'identifier une ressource qui sera nécessaire dans la suite de la navigation et que l'agent utilisateur devrait télécharger. Cela permet à l'agent utilisateur d'avoir un meilleur temps de réponse lorsque la ressource sera nécessaire.
- `rev`{{deprecated_inline}}

  - : La valeur de cet attribut décrit le lien entre le document courant et la ressource liée (définie par l'attribut [`href`](/fr/docs/Web/HTML/Element/link#href)). Cet attribut définit donc la relation réciproque à la relation décrite par l'attribut `rel`. [Les types de lien](/fr/docs/Web/HTML/Types_de_lien) utilisés pour cet attribut sont semblables aux valeurs autorisés par [`rel`](/fr/docs/Web/HTML/Element/link#rel).

    > **Note :** cet attribut est obsolète en HTML5 **et ne doit pas être utilisé**. Pour obtenir le même effet, on utilisera l'attribut [`rel`](/fr/docs/Web/HTML/Element/link#rel) avec la valeur réciproque [pour le type de lien](/fr/docs/Web/HTML/Types_de_lien), (`made` devrait par exemple être remplacé par `author`). Cet attribut ne signifie pas « révision » et ne doit pas être utilisé comme un numéro de version.

    > **Note :** La spécification actuelle de HTML 5.2 du W3C n'indique plus l'attribut `rev` comme obsolète. En revanche, la spécification du WHATWG le considère toujours comme obsolète. Tant que cette incohérence n'est pas résolue, mieux vaut considérer cet attribut comme obsolète.

- `target`{{Non-standard_inline}}
  - : Cet attribut définit le nom de la _frame_ ou de la fenêtre qui contient la ressource liée ou qui affichera la ressource liée.

## Exemples

### Associer une feuille de style

Pour associer une feuille de style à la page courante, on utilisera la syntaxe suivante :

```html
<link href="style.css" rel="stylesheet" />
```

### Fournir des feuilles de style alternatives

Pour un document, on peut indiquer [plusieurs feuilles de style alternatives](/fr/docs/Web/CSS/Feuilles_de_style_alternatives).

L'utilisateur pourra choisir parmi ces feuilles de style via le menu « Affichage > Style de la page ». Ainsi, un utilisateur pourra voir différentes versions d'une même page.

```html
<link href="default.css" rel="stylesheet" title="Mise en forme par défaut" />
<link href="joli.css" rel="alternate stylesheet" title="Joli" />
<link href="simple.css" rel="alternate stylesheet" title="Simple" />
```

### Évènements déclenchés au chargement d'une feuille de style

Il est possible de déterminer si une feuille de style a été chargée en écoutant l'évènement `load`. De la même façon, un évènement `error` indiquera qu'une erreur a eu lieu lors du traitement de la feuille de style:

```html
<script>
  function sheetLoaded() {
    // faire quelque chose, sachant
    // que la feuille a été chargéee
  }

  function sheetError() {
    console.log("Erreur lors du chargement de la feuille de style !");
  }
</script>

<link
  rel="stylesheet"
  href="mafeuilledestyle.css"
  onload="sheetLoaded()"
  onerror="sheetError()" />
```

> **Note :** L'évènement `load` est déclenché une fois que la feuille de style et que le contenu associé ont été chargés et analysés et immédiatement avant que la mise en forme soit appliquée au contenu.

### Exemples avec `preload`

De nombreux exemples avec `<link rel="preload">` peuvent être lus sur [Précharger des ressources grâce à `rel="preload"`](/fr/docs/Web/HTML/Précharger_du_contenu).

## Notes

- Un élément `<link>` peut être utilisé à l'intérieur d'un élément {{HTMLElement("head")}} ou bien dans le corps du document ({{HTMLElement("body")}}) si [le type de lien le permet (_body-ok_)](https://html.spec.whatwg.org/multipage/links.html#body-ok). On peut par exemple utiliser `<link rel="stylesheet">` car ce type de lien est autorisé au sein de l'élément `<body>`.
- HTML 3.2 définit uniquement les attributs `href`, `rel`, `rev` et `title` pour l'élément `<link>`.
- HTML 2 définit les attributs `href`, `methods`, `rel`, `rev`, `title` et `urn` pour l'élément `<link>`. Les attributs `methods` et `urn` ont ensuite été retirés des spécifications.
- Les spécifications HTML et XHTML définissent toutes deux des gestionnaires d'évènements pour l'élément `<link>`.
- En XHTML 1.0, il est nécessaire qu'un élément `<link>` ait une barre oblique avant le chevron fermant.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        Contenu de métadonnées. Si <a href="/fr/docs/Web/HTML/Global_attributes#itemprop"><code>itemprop</code></a> est
        présent :
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >
        et
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th>Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th>Omission de balise</th>
      <td>
        La balise de début doit être présente et la balise de fin ne doit pas
        être présente.
      </td>
    </tr>
    <tr>
      <th>Parents autorisés</th>
      <td>
        Tout élément qui accepte des éléments de métadonnées. Si l'attribut
        <a href="/fr/docs/Web/HTML/Global_attributes#itemprop"><code>itemprop</code></a> est présent, tout élément qui
        accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td>{{domxref("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Link")}}
- [Le tableau de compatibilité de Ryan Grove à propos de `<script>` et `<link>`](https://pie.gd/test/script-link-events/)
