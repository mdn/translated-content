---
title: "<source> : l'élément de source d'image et média"
slug: Web/HTML/Reference/Elements/source
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<source>`** définit une ou plusieurs ressources média pour les éléments {{HTMLElement("picture")}}, {{HTMLElement("audio")}} et {{HTMLElement("video")}}. C'est un {{Glossary("void element", "élément vide")}}, ce qui signifie qu'il n'a pas de contenu et ne nécessite pas de balise fermante. Cet élément est couramment utilisé pour proposer le même contenu média dans plusieurs formats de fichiers afin d'assurer la compatibilité avec un large éventail de navigateurs, compte tenu de leur prise en charge différente des [formats de fichiers image](/fr/docs/Web/Media/Guides/Formats/Image_types) et des [formats de fichiers média](/fr/docs/Web/Media/Guides/Formats).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;source&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250" height="200" muted>
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  Téléchargez la vidéo
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  ou
  <a href="/shared-assets/videos/flower.mp4">MP4</a>.
</video>
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `type`
  - : Définit le [type MIME de l'image](/fr/docs/Web/Media/Guides/Formats/Image_types) ou [autre type de média](/fr/docs/Web/Media/Guides/Formats/Containers), incluant éventuellement un [paramètre `codecs`](/fr/docs/Web/Media/Guides/Formats/codecs_parameter).

- `src`
  - : Définit l'URL de la ressource média. Obligatoire si le parent de `<source>` est {{HTMLElement("audio")}} ou {{HTMLElement("video")}}. Interdit si le parent est {{HTMLElement("picture")}}.

- `srcset`
  - : Définit une liste, séparée par des virgules, d'une ou plusieurs URL d'images et de leurs descripteurs. Obligatoire si le parent de `<source>` est {{HTMLElement("picture")}}. Interdit si le parent est {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.

    La liste se compose de chaînes de caractères séparées par des virgules, indiquant un ensemble d'images possibles à utiliser par le navigateur. Chaque chaîne de caractères se compose de&nbsp;:
    - Une URL indiquant l'emplacement de l'image.
    - Un descripteur de largeur optionnel — un entier positif suivi directement de `"w"`, comme `300w`.
    - Un descripteur de densité de pixels optionnel — un nombre décimal positif suivi directement de `"x"`, comme `2x`.

    Chaque chaînes de caractères de la liste doit comporter soit un descripteur de largeur, soit un descripteur de densité de pixels pour être valide. Ces deux descripteurs ne doivent pas être utilisés ensemble&nbsp;; un seul doit être utilisé de façon cohérente dans toute la liste. La valeur de chaque descripteur dans la liste doit être unique. Le navigateur choisit l'image la plus adéquate à afficher à un instant donné en fonction de ces descripteurs. Si les descripteurs ne sont pas définis, la valeur par défaut utilisée est `1x`. Si l'attribut `sizes` est également présent, chaque chaînes de caractères doit inclure un descripteur de largeur. Si le navigateur ne prend pas en charge `srcset`, alors `src` sera utilisé pour la source d'image par défaut.

- `sizes`
  - : Définit une liste de tailles de sources qui décrit la largeur finale affichée de l'image. Autorisé si le parent de `<source>` est {{HTMLElement("picture")}}. Interdit si le parent est {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.

    La liste se compose de tailles de sources séparées par des virgules. Chaque taille de source est une paire condition média et longueur. Avant de disposer la page, le navigateur utilise cette information pour déterminer quelle image définie dans [`srcset`](#srcset) afficher. Notez que `sizes` prendra effet uniquement si des descripteurs de largeur sont fournis avec `srcset`, et non des descripteurs de densité de pixels (par exemple, il faut utiliser `200w` au lieu de `2x`).

- `media`
  - : Définit la [requête média](/fr/docs/Web/CSS/Guides/Media_queries) pour le média visé par la ressource.

- `height`
  - : Définit la hauteur intrinsèque de l'image en pixels. Autorisé si le parent de `<source>` est un {{HTMLElement("picture")}}. Interdit si le parent est {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.

    La valeur de la hauteur doit être un entier sans aucune unité.

- `width`
  - : Définit la largeur intrinsèque de l'image en pixels. Autorisé si le parent de `<source>` est un {{HTMLElement("picture")}}. Interdit si le parent est {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.

    La valeur de la largeur doit être un entier sans aucune unité.

## Notes d'utilisation

L'élément `<source>` est un **{{Glossary("void element", "élément vide")}}**, ce qui signifie qu'il n'a pas de contenu et pas de balise fermante. Autrement dit, il ne faut _jamais_ utiliser `</source>` dans votre HTML.

Le navigateur parcourt la liste des éléments `<source>` pour trouver un format qu'il prend en charge. Il utilise le premier qu'il peut afficher. Pour chaque élément `<source>`&nbsp;:

- Si l'attribut `type` n'est pas défini, le navigateur récupère le type du média depuis le serveur et détermine s'il peut être affiché. Si le média ne peut pas être affiché, le navigateur vérifie la `<source>` suivante dans la liste.
- Si l'attribut `type` est défini, le navigateur le compare immédiatement avec les types de média qu'il peut afficher. Si le type n'est pas pris en charge, le navigateur n'interroge pas le serveur et vérifie directement l'élément `<source>` suivant.

Si aucun des éléments `<source>` ne fournit une source utilisable&nbsp;:

- Dans le cas d'un élément `<picture>`, le navigateur utilisera l'image définie dans l'enfant {{HTMLElement("img")}} de l'élément `<picture>`.
- Dans le cas d'un élément `<audio>` ou `<video>`, le navigateur affichera le contenu inclus entre les balises ouvrante et fermante de l'élément.

Pour des informations sur les formats d'image pris en charge par les navigateurs web et des conseils pour choisir les formats à utiliser, consultez notre [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Guides/Formats/Image_types). Pour plus de détails sur les types de média vidéo et audio utilisables, consultez le [Guide des types et formats média](/fr/docs/Web/Media/Guides/Formats).

## Exemples

### Utiliser l'attribut `type` avec `<video>`

Cet exemple montre comment proposer une vidéo dans différents formats&nbsp;: WebM pour les navigateurs qui le prennent en charge, Ogg pour ceux qui prennent en charge Ogg, et QuickTime pour les navigateurs qui prennent en charge QuickTime. Si l'élément `<audio>` ou `<video>` n'est pas pris en charge par le navigateur, un message d'information s'affiche à la place. Si le navigateur prend en charge l'élément mais pas l'un des formats proposés, un évènement `error` est déclenché sur l'élément `<audio>` ou `<video>` et les contrôles média par défaut (s'ils sont activés) indiqueront une erreur. Pour plus de détails sur les formats de fichiers média à utiliser et leur prise en charge par les navigateurs, consultez le [Guide des types et formats média](/fr/docs/Web/Media/Guides/Formats).

```html
<video controls>
  <source src="toto.webm" type="video/webm" />
  <source src="toto.ogg" type="video/ogg" />
  <source src="toto.mov" type="video/quicktime" />
  Je suis désolé&nbsp;; votre navigateur ne prend pas en charge l'élément HTML
  de vidéo.
</video>
```

### Utiliser l'attribut `media` avec `<video>`

Cet exemple montre comment proposer un fichier source alternatif pour les fenêtres de visualisation dépassant une certaine largeur. Lorsque l'environnement de navigation d'un·e utilisateur·ice remplit la condition `media` définie, l'élément `<source>` associé est choisi. Le contenu de son attribut `src` est alors demandé et rendu. Si la condition `media` ne correspond pas, le navigateur passe à la `<source>` suivante dans la liste. La deuxième option `<source>` dans le code ci-dessous n'a pas de condition `media`, elle sera donc sélectionnée pour tous les autres contextes de navigation.

```html
<video controls>
  <source src="toto-large.webm" media="(width >= 800px)" />
  <source src="toto.webm" />
  Je suis désolé&nbsp;; votre navigateur ne prend pas en charge l'élément HTML
  de vidéo.
</video>
```

Pour plus d'exemples, l'article [Vidéo et audio HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) dans la section Apprendre est une excellente ressource.

### Utiliser l'attribut `media` avec `<picture>`

Dans cet exemple, deux éléments `<source>` sont inclus dans {{HTMLElement("picture")}}, fournissant des versions d'une image à utiliser lorsque l'espace disponible dépasse certaines largeurs. Si la largeur disponible est inférieure à la plus petite de ces largeurs, le navigateur utilisera l'image définie dans l'élément {{HTMLElement("img")}}.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 800px)" />
  <source srcset="mdn-logo-medium.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

Avec l'élément `<picture>`, il faut toujours inclure un `<img>` avec une image de repli. Veillez également à ajouter un attribut `alt` pour l'accessibilité, sauf si l'image est purement décorative et sans rapport avec le contenu.

### Utiliser les attributs `height` et `width` avec `<picture>`

Dans cet exemple, trois éléments `<source>` avec les attributs `height` et `width` sont inclus dans un élément {{HTMLElement("picture")}}.
Une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) permet au navigateur de définir l'image à afficher avec les attributs `height` et `width` en fonction de la taille de la {{Glossary("Viewport", "zone d'affichage")}}.

```html
<picture>
  <source
    srcset="landscape.png"
    media="(width >= 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(width >= 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(width >= 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image utilisée lorsque le navigateur ne prend pas en charge les sources"
    width="500"
    height="400" />
</picture>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un {{Glossary("void element", "élément vide")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante mais pas de balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        <div>
          Un élément média — {{HTMLElement("audio")}} ou
          {{HTMLElement("video")}} — pour lequel l'élément
          <code>&#x3C;source></code> doit être placé avant
          <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
            >tout contenu de flux</a
          >
          ou tout élément {{HTMLElement("track")}}.
        </div>
        <div>
          Un élément {{HTMLElement("picture")}}, pour lequel l'élément
          <code>&#x3C;source></code> doit être placé avant tout élément
          {{HTMLElement("img")}}.
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLSourceElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("audio")}}
- L'élément {{HTMLElement("picture")}}
- L'élément {{HTMLElement("video")}}
- [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Guides/Formats/Image_types)
- [Guide des types et formats média](/fr/docs/Web/Media/Guides/Formats)
- [Les performances sur le Web](/fr/docs/Learn_web_development/Extensions/Performance)
