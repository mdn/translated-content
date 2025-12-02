---
title: "<link> : l'élément de lien vers des ressources externes"
slug: Web/HTML/Reference/Elements/link
original_slug: Web/HTML/Element/link
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

L'élément [HTML](/fr/docs/Web/HTML) **`<link>`** définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers {{Glossary("CSS", "une feuille de style")}}, vers les icônes utilisées en barre de titre ou comme icône d'application sur les appareils mobiles.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;link&gt;")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>Ce texte sera rouge comme défini dans la feuille de style externe.</p>
<p style="color: blue">
  L'attribut <code>style</code> peut cependant le remplacer.
</p>
```

Pour lier une feuille de style externe, on inclut un élément `<link>` de la forme suivante à l'intérieur de l'élément {{htmlelement("head")}}&nbsp;:

```html
<link href="main.css" rel="stylesheet" />
```

Dans cet exemple, on indique le chemin vers la feuille de style grâce à l'attribut `href`, l'attribut `rel` possède une valeur `stylesheet` qui indique que c'est une feuille de style. `rel` signifie _relationship_ qui correspond donc à la relation entre la ressource et le document courant. Il existe de [nombreux types de liens possibles](/fr/docs/Web/HTML/Reference/Attributes/rel).

Certains types sont assez fréquents. Ainsi, pour l'icône présentant le site dans l'onglet, on trouvera&nbsp;:

```html
<link rel="icon" href="favicon.ico" />
```

Il existe différents types de relations pour préciser les icônes et qui permettent notamment de cibler certaines plateformes mobiles :

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="favicon114.png"
  type="image/png" />
```

L'attribut `sizes` indique la taille de l'icône tandis que l'attribut `type` contient le type MIME de la ressource qui est liée. Ces attributs permettent alors au navigateur de sélectionner la ressource la plus adéquate.

On peut également fournir l'attribut `media` afin d'utiliser telle ou telle ressource lorsqu'une requête média est vérifiée. Ainsi, on pourra utiliser ce qui suit afin d'avoir une feuille de style utilisée à l'impression et une autre dédiée au mobile&nbsp;:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Certaines fonctionnalités relatives à la sécurité sont également disponibles avec certains attributs de `<link>`. Dans cet exemple&nbsp;:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

L'attribut `rel` vaut `preload` et indique que le navigateur doit précharger la ressource (voir [Le préchargement du contenu avec `rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) pour plus de détails), l'attribut `as` indique la classe de contenu qui est récupéré et l'attribut `crossorigin` indique si la ressource doit être récupérée avec une requête CORS.

Quelques notes d'utilisation&nbsp;:

- Un élément `<link>` peut être utilisé dans l'élément {{HTMLElement("head")}} ou {{HTMLElement("body")}}, selon qu'il possède un [type de lien <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/links.html#body-ok) **body-ok**.
  Par exemple, le type de lien `stylesheet` est body-ok, donc `<link rel="stylesheet">` est autorisé dans le corps du document.
  Cependant, il n'est pas recommandé de procéder ainsi&nbsp;: il est préférable de séparer vos éléments `<link>` du contenu du corps, en les plaçant dans le `<head>`.
- Lorsque vous utilisez `<link>` pour définir une favicon sur un site qui utilise une politique de sécurité de contenu (CSP), cette politique s'applique aussi à la favicon.
  Si la favicon ne se charge pas, vérifiez que l'en-tête {{HTTPHeader("Content-Security-Policy")}} et sa [directive `img-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) n'empêchent pas son accès.
- Les spécifications HTML et XHTML définissent des gestionnaires d'évènements pour l'élément `<link>`, mais leur usage n'est pas clairement documenté.
- En XHTML 1.0, les {{glossary("void element", "éléments vides")}} comme `<link>` nécessitent une barre oblique finale&nbsp;: `<link />`.
- WebTV prend en charge la valeur `next` pour `rel` afin de précharger la page suivante d'une série de documents.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Cet attribut est requis lorsque [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) est utilisé sur l'élément `<link>`, optionnel lorsque [`rel="modulepreload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload) est utilisé, et ne doit pas être utilisé dans les autres cas.
    Il précise le type de contenu chargé par l'élément `<link>`, ce qui est nécessaire pour faire correspondre la requête, appliquer la [bonne politique de sécurité de contenu](/fr/docs/Web/HTTP/Guides/CSP) et définir le bon en-tête de requête {{HTTPHeader("Accept")}}.

    De plus, `rel="preload"` utilise cette valeur comme signal de priorité pour la requête.
    Le tableau ci-dessous liste les valeurs valides pour cet attribut et les éléments ou ressources auxquels elles s'appliquent.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valeur</th>
          <th scope="col">S'applique à</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audio</td>
          <td>Élément <code>&#x3C;audio></code></td>
        </tr>
        <tr>
          <td>document</td>
          <td>Éléments <code>&#x3C;iframe></code> et <code>&#x3C;frame></code></td>
        </tr>
        <tr>
          <td>embed</td>
          <td>Élément <code>&#x3C;embed></code></td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Remarque&nbsp;:</strong> Cette valeur nécessite aussi que
                <code>&#x3C;link></code> contienne l'attribut <code>crossorigin</code>. Voir <a href="/fr/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">récupérations compatibles CORS</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>
            <p>CSS @font-face</p>
            <div class="notecard note">
              <p>
                <strong>Remarque&nbsp;:</strong> Cette valeur nécessite aussi que
                <code>&#x3C;link></code> contienne l'attribut <code>crossorigin</code>. Voir <a href="/fr/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">récupérations compatibles CORS</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            Éléments <code>&#x3C;img></code> et <code>&#x3C;picture></code> avec les attributs
            <code>srcset</code> ou <code>imageset</code>, éléments SVG <code>&#x3C;image></code>,
            règles CSS <code>*-image</code>
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td>Élément <code>&#x3C;object></code></td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            Élément <code>&#x3C;script></code>, Worker <code>importScripts</code>
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            Élément <code>&#x3C;link rel=stylesheet></code>, CSS
            <code>@import</code>
          </td>
        </tr>
        <tr>
          <td>track</td>
          <td>Élément <code>&#x3C;track></code></td>
        </tr>
        <tr>
          <td>video</td>
          <td>Élément <code>&#x3C;video></code></td>
        </tr>
        <tr>
          <td>worker</td>
          <td>Worker, SharedWorker</td>
        </tr>
      </tbody>
    </table>

- `blocking`
  - : Cet attribut indique explicitement que certaines opérations doivent être bloquées jusqu'à ce que des conditions spécifiques soient remplies. Il ne doit être utilisé que lorsque l'attribut `rel` contient les mots-clés `expect` ou `stylesheet`. Avec [`rel="expect"`](/fr/docs/Web/HTML/Reference/Attributes/rel#expect), il indique que des opérations doivent être bloquées jusqu'à ce qu'un nœud DOM spécifique ait été analysé. Avec [`rel="stylesheet"`](/fr/docs/Web/HTML/Reference/Attributes/rel#stylesheet), il indique que des opérations doivent être bloquées jusqu'à ce qu'une feuille de style externe et ses sous-ressources critiques aient été récupérées et appliquées au document. Les opérations à bloquer doivent être une liste, séparée par des espaces, de jetons de blocage listés ci-dessous. Actuellement, il n'existe qu'un seul jeton&nbsp;:
    - `render`&nbsp;: Le rendu du contenu à l'écran est bloqué.

    > [!NOTE]
    > Seuls les éléments HTML `link` présents dans l'en-tête `<head>` du document peuvent bloquer le rendu. Par défaut, un élément HTML `link` avec `rel="stylesheet"` dans le `<head>` bloque le rendu lorsque le navigateur le découvre lors de l'analyse. Si un tel élément HTML `link` est ajouté dynamiquement via un script, il faut également définir `blocking = "render"` pour qu'il bloque le rendu.

- [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Cet [attribut énuméré](/fr/docs/Glossary/Enumerated) indique si {{Glossary("CORS")}} doit être utilisé lors de la récupération de la ressource.
    [CORS-enabled images](/fr/docs/Web/HTML/How_to/CORS_enabled_image) peuvent être réutilisées dans l'élément {{HTMLElement("canvas")}} sans être _corrompues_.
    Les valeurs autorisées sont&nbsp;:
    - `anonymous`
      - : Une requête cross-origin (c'est-à-dire avec l'en-tête HTTP {{HTTPHeader("Origin")}}) est effectuée, mais aucune information d'identification n'est envoyée (aucun cookie, certificat X.509 ou authentification HTTP de base).
        Si le serveur ne fournit pas d'autorisation au site d'origine (en n'envoyant pas l'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Origin")}}), la ressource sera corrompue et son utilisation restreinte.
    - `use-credentials`
      - : Une requête cross-origin (avec l'en-tête HTTP `Origin`) est effectuée avec des informations d'identification envoyées (cookie, certificat et/ou authentification HTTP de base).
        Si le serveur ne fournit pas d'autorisation d'identification au site d'origine (via l'en-tête {{HTTPHeader("Access-Control-Allow-Credentials")}}), la ressource sera _corrompue_ et son utilisation restreinte.

    Si l'attribut n'est pas présent, la ressource est récupérée sans requête {{Glossary("CORS")}} (c'est-à-dire sans envoyer l'en-tête `Origin`), ce qui empêche son utilisation non corrompue. Si la valeur est invalide, elle est traitée comme si le mot-clé énuméré **anonymous** était utilisé.
    Voir [attributs de configuration CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus d'informations.

- `disabled`
  - : Cet attribut booléen n'est utilisable qu'avec `rel="stylesheet"`. Il indique si la feuille de style référencée doit être chargée et appliquée au document.
    Si `disabled` est présent dans le HTML lors du chargement, la feuille de style ne sera pas chargée au chargement de la page.
    Elle ne sera chargée qu'à la demande, si (et lorsque) l'attribut `disabled` est retiré ou passé à `false` via un script.

    Modifier la propriété `disabled` dans le DOM retire la feuille de style de la liste {{domxref("Document.styleSheets")}} du document.

- `fetchpriority`
  - : Fournit une indication sur la priorité relative à utiliser lors de la récupération d'une ressource d'un type particulier.
    Valeurs autorisées&nbsp;:
    - `high`
      - : Récupère la ressource avec une priorité élevée par rapport aux autres ressources du même type.
    - `low`
      - : Récupère la ressource avec une priorité faible par rapport aux autres ressources du même type.
    - `auto`
      - : N'indique aucune préférence pour la priorité de récupération.
        Il s'agit de la valeur par défaut.
        Elle est utilisée si aucune valeur ou une valeur invalide est définie.

    Voir {{domxref("HTMLLinkElement.fetchPriority")}} pour plus d'informations.

- `href`
  - : Cet attribut définit l'URL de la ressource liée. L'URL utilisée peut être absolue ou relative.
- `hreflang`
  - : Cet attribut, purement indicatif, définit la langue de la ressource liée. La valeur doit être une {{glossary("BCP 47 language tag", "balise de langue BCP47")}} valide. Cet attribut doit uniquement être utilisé si l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) est présent.
- `imagesizes`
  - : Pour `rel="preload"` et `as="image"` uniquement, l'attribut `imagesizes` utilise une syntaxe et une sémantique similaires à l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes), ce qui permet de précharger la ressource appropriée utilisée par un élément `img` avec des valeurs correspondantes pour ses attributs `srcset` et `sizes`.
- `imagesrcset`
  - : Pour `rel="preload"` et `as="image"` uniquement, l'attribut `imagesrcset` utilise une syntaxe et une sémantique similaires à l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset), ce qui permet de précharger la ressource appropriée utilisée par un élément `img` avec des valeurs correspondantes pour ses attributs `srcset` et `sizes`.
- `integrity`
  - : Contient des métadonnées en ligne&nbsp;: une empreinte cryptographique (hachage base64) de la ressource (fichier) que vous demandez au navigateur de récupérer.
    Le navigateur peut utiliser cette empreinte pour vérifier que la ressource récupérée n'a pas été modifiée de façon inattendue.
    Cet attribut ne doit être utilisé que lorsque l'attribut `rel` vaut `stylesheet`, `preload` ou `modulepreload`.
    Voir [Subresource Integrity](/fr/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Cet attribut indique le média auquel s'applique la ressource liée. Sa valeur doit être un type de média ou une [requête média](/fr/docs/Web/CSS/Guides/Media_queries).
    Cet attribut est principalement utilisé pour lier des feuilles de style externes&nbsp;: il permet à l'agent utilisateur de sélectionner la plus adaptée à l'appareil utilisé.

- `referrerpolicy`
  - : Une chaîne de caractères qui indique le référent à utiliser lors de la récupération de la ressource&nbsp;:
    - `no-referrer` signifie que l'en-tête {{HTTPHeader("Referer")}} n'est pas envoyé.
    - `no-referrer-when-downgrade` signifie qu'aucun en-tête {{HTTPHeader("Referer")}} n'est envoyé lors d'une navigation vers une origine non protégée par TLS (HTTPS).
      Il s'agit du comportement par défaut de l'agent utilisateur si aucune autre règle n'est précisée.
    - `origin` signifie que le référent sera l'origine de la page (schéma, hôte et port).
    - `origin-when-cross-origin` signifie que lors d'une navigation vers d'autres origines, le référent se limite au schéma, à l'hôte et au port, tandis que sur la même origine, le chemin est inclus.
    - `unsafe-url` signifie que le référent inclut l'origine et le chemin (mais ni le fragment, ni le mot de passe ou le nom d'utilisateur).
      Ce cas n'est pas sécurisé car il peut laisser fuiter des origines et des chemins de ressources TLS vers des origines non sécurisées.

- `rel`
  - : Cet attribut indique la relation qui existe entre le document lié et le document courant. L'attribut doit être une liste, séparée par des espaces, de [types de lien](/fr/docs/Web/HTML/Reference/Attributes/rel).
- `sizes`
  - : Cet attribut définit les dimensions des icônes pour le média contenu dans la ressource. Cet attribut doit uniquement être présent lorsque [`rel`](#rel) contient le type de lien `icon`. Il peut prendre l'une des valeurs suivantes :
    - `any` : l'icône peut être redimensionnée à volonté car elle utilise un format vectoriel (par exemple `image/svg+xml`).
    - une liste de tailles, séparées par des espaces, dont chacune est de la forme `<largeur en pixels>x<hauteur en pixels>` ou `<largeur en pixels>X<hauteur en pixels>`. Pour chacune de ces dimensions, il doit exister une image correspondante dans la ressource.

    > [!NOTE]
    >
    > - La plupart des format d'icône permettent simplement de stocker une seule icône, c'est pour cela que, la plupart du temps, [`sizes`](#sizes) ne contient qu'un seul élément.
    >   Le format ICO de Microsoft et le format ICNS d'Apple peuvent stocker plusieurs tailles d'icônes dans un seul fichier. ICO est mieux pris en charge par les navigateurs, il est donc recommandé d'utiliser ce format si la compatibilité inter-navigateurs est importante.

- `title`
  - : L'attribut `title` a une sémantique particulière sur l'élément `<link>`.
    Lorsqu'il est utilisé sur un `<link rel="stylesheet">`, il définit une [feuille de style par défaut ou alternative](/fr/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Cet attribut est utilisé pour définir le type du contenu lié.
    La valeur de l'attribut doit être un type MIME tel que **text/html**, **text/css**, etc.
    L'usage courant de cet attribut est de définir le type de feuille de style référencée (comme **text/css**), mais étant donné que CSS est le seul langage de feuille de style utilisé sur le web, il est non seulement possible d'omettre l'attribut `type`, mais c'est même la pratique recommandée.
    Il est aussi utilisé sur les liens `rel="preload"`, pour s'assurer que le navigateur ne télécharge que les types de fichiers qu'il prend en charge.

### Attributs non-standard

- `target` {{Non_standard_Inline}} {{Deprecated_Inline}}
  - : Cet attribut définit le nom de la _frame_ ou de la fenêtre qui contient la ressource liée ou qui affichera la ressource liée.

### Attributs obsolètes

- `charset` {{Deprecated_Inline}}
  - : Cet attribut définit l'encodage de la ressource lié. La valeur de cet attribut est une liste de jeux de caractères (tels que définis dans la RFC {{rfc(2045)}}) séparés par des espaces ou des virgules. La valeur par défaut de cet attribut est `iso-8859-1`.

    > [!NOTE]
    > Pour obtenir l'effet escompté, on utilisera l'en-tête HTTP {{httpheader("Content-Type")}} pour la ressource liée.

- `rev` {{Deprecated_Inline}}
  - : La valeur de cet attribut décrit le lien entre le document courant et la ressource liée (définie par l'attribut [`href`](#href)). Cet attribut définit donc la relation réciproque à la relation décrite par l'attribut `rel`. [Les types de lien](/fr/docs/Web/HTML/Reference/Attributes/rel) utilisés pour cet attribut sont semblables aux valeurs autorisés par [`rel`](#rel).

    > [!NOTE]
    > Au lieu de `rev`, vous devez utiliser l'attribut [`rel`](#rel) avec la valeur de type de lien opposée [pour le type de lien](/fr/docs/Web/HTML/Reference/Attributes/rel).
    > Par exemple, pour établir le lien réciproque de `made`, indiquez `author`. De plus, cet attribut **ne signifie pas** «&nbsp;révision&nbsp;» et ne doit pas être utilisé comme numéro de version, même si de nombreux sites en font un mauvais usage.

## Exemples

### Associer une feuille de style

Pour associer une feuille de style à la page courante, on utilisera la syntaxe suivante&nbsp;:

```html
<link href="style.css" rel="stylesheet" />
```

### Fournir des feuilles de style alternatives

Pour un document, on peut indiquer [plusieurs feuilles de style alternatives](/fr/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

L'utilisateur pourra choisir parmi ces feuilles de style via le menu « Affichage > Style de la page ». Ainsi, un utilisateur pourra voir différentes versions d'une même page.

```html
<link href="default.css" rel="stylesheet" title="Mise en forme par défaut" />
<link href="joli.css" rel="alternate stylesheet" title="Joli" />
<link href="simple.css" rel="alternate stylesheet" title="Simple" />
```

### Fournir des icônes pour différents contextes d'usage

Vous pouvez inclure des liens vers plusieurs icônes sur la même page, et le navigateur choisira celle qui convient le mieux à son contexte particulier en utilisant les valeurs `rel` et `sizes` comme indications.

```html
<!-- iPad Pro avec écran Retina haute résolution : -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- iPhone résolution 3x : -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- iPad non-Retina, iPad mini, etc. : -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- iPhone résolution 2x et autres appareils : -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- favicon de base -->
<link rel="icon" href="/favicon.ico" />
```

Pour savoir quelles valeurs de `sizes` choisir pour les icônes Apple, consultez [la documentation Apple sur la configuration des applications web <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) et les [Apple human interface guidelines <sup>(angl.)</sup>](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) référencées. En général, il suffit de fournir une grande image, comme 192x192, et de laisser le navigateur la redimensionner selon les besoins, mais vous pouvez fournir des images avec différents niveaux de détail pour différentes tailles, comme le recommande le guide Apple. Fournir des icônes plus petites pour les basses résolutions permet aussi d'économiser de la bande passante.

Il n'est pas toujours nécessaire de fournir des éléments `<link>`. Par exemple, les navigateurs demandent automatiquement `/favicon.ico` à la racine d'un site, et Apple demande aussi automatiquement `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, etc. Cependant, fournir des liens explicites vous protège contre les changements de ces conventions.

### Charger conditionnellement des ressources avec des requêtes média

Vous pouvez fournir un type ou une requête média dans un attribut `media`&nbsp;;
la ressource ne sera alors chargée que si la condition média est vérifiée. Par exemple&nbsp;:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link href="desktop.css" rel="stylesheet" media="screen and (width >= 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (resolution >= 300dpi)" />
```

### Évènements de chargement de feuille de style

Vous pouvez déterminer quand une feuille de style a été chargée en écoutant l'évènement `load`&nbsp;; de même, vous pouvez détecter si une erreur s'est produite lors du traitement d'une feuille de style en écoutant l'évènement `error`&nbsp;:

```html
<link rel="stylesheet" href="monstyle.css" id="ma-feuille-de-style" />
```

```js
const stylesheet = document.getElementById("ma-feuille-de-style");

stylesheet.onload = () => {
  // Faire quelque chose d'intéressant : la feuille a été chargée
};

stylesheet.onerror = () => {
  console.log(
    "Une erreur est survenue lors du chargement de la feuille de style !",
  );
};
```

> [!NOTE]
> L'évènement `load` est déclenché une fois que la feuille de style et tout son contenu importé ont été chargés et analysés, et immédiatement avant que les styles ne commencent à être appliqués au contenu.

### Exemples d'utilisation de `preload`

Vous pouvez trouver plusieurs exemples de `<link rel="preload">` dans [Précharger des ressources grâce à `rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload).

### Bloquer le rendu jusqu'à ce qu'une ressource soit récupérée

Vous pouvez inclure le jeton `render` dans un attribut `blocking`&nbsp;;
le rendu de la page sera bloqué jusqu'à ce que la ressource et ses sous-ressources critiques soient récupérées et appliquées au document. Par exemple&nbsp;:

```html
<link blocking="render" rel="stylesheet" href="exemple.css" crossorigin />
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        Contenu de métadonnées. Si <a href="/fr/docs/Web/HTML/Reference/Global_attributes#itemprop"><code>itemprop</code></a> est
        présent :
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_de_flux"
          >contenu de flux</a
        >
        et
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
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
        <a href="/fr/docs/Web/HTML/Reference/Global_attributes#itemprop"><code>itemprop</code></a> est présent, tout élément qui
        accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> avec l'attribut <code>href</code></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé.</td>
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
