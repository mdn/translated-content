---
title: "<picture> : l'élément d'image adaptative"
slug: Web/HTML/Reference/Elements/picture
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'élément [HTML](/fr/docs/Web/HTML) **`<picture>`** contient zéro ou plusieurs éléments {{HTMLElement("source")}} et un élément {{HTMLElement("img")}} pour proposer des versions alternatives d'une image selon les scénarios d'affichage ou d'appareil.

Le navigateur examine chaque élément enfant `<source>` et choisit la meilleure correspondance parmi eux. Si aucune correspondance n'est trouvée — ou si le navigateur ne prend pas en charge l'élément `<picture>` — l'URL de l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) de l'élément `<img>` est sélectionnée. L'image sélectionnée est alors affichée à l'emplacement occupé par l'élément `<img>`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;picture&gt;", "tabbed-standard")}}

```html interactive-example
<!--Changez la largeur de la fenêtre du navigateur pour voir l'image changer.-->

<picture>
  <source
    srcset="/shared-assets/images/examples/surfer.jpg"
    media="(orientation: portrait)" />
  <img src="/shared-assets/images/examples/painted-hand.jpg" alt="" />
</picture>
```

Pour décider quelle URL charger, {{Glossary("user agent", "l'agent utilisateur")}} examine les attributs [`srcset`](/fr/docs/Web/HTML/Reference/Elements/source#srcset), [`media`](/fr/docs/Web/HTML/Reference/Elements/source#media) et [`type`](/fr/docs/Web/HTML/Reference/Elements/source#type) de chaque élément `<source>` afin de sélectionner une image compatible qui correspond le mieux à la disposition actuelle et aux capacités de l'appareil d'affichage.

L'élément `<img>` a deux rôles&nbsp;:

1. Il décrit la taille et les autres attributs de l'image et de sa présentation.
2. Il fournit une solution de repli si aucun des éléments `<source>` proposés ne peut fournir une image utilisable.

Cas d'utilisation courants de `<picture>`&nbsp;:

- **Direction artistique.** Rogner ou modifier des images selon différentes conditions de `media` (par exemple, charger une version simplifiée d'une image trop détaillée sur les petits écrans).
- **Proposer des formats d'image alternatifs**, pour les cas où certains formats ne sont pas pris en charge.

  > [!NOTE]
  > Par exemple, les formats récents comme [AVIF](/fr/docs/Web/Media/Guides/Formats/Image_types#avif) ou [WEBP](/fr/docs/Web/Media/Guides/Formats/Image_types#webp) présentent de nombreux avantages, mais peuvent ne pas être pris en charge par le navigateur. Une liste des formats d'image pris en charge se trouve dans&nbsp;: [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Guides/Formats/Image_types).

- **Économiser la bande passante et accélérer le chargement des pages** en chargeant l'image la plus appropriée pour l'affichage de l'utilisateur·ice.

Si vous fournissez des versions haute densité d'une image pour les écrans à haute densité de pixels (Retina), utilisez plutôt [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) sur l'élément `<img>`. Cela permet aux navigateurs de choisir des versions à plus faible densité en mode économie de données, sans avoir à écrire de conditions `media` explicites.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Il est possible d'utiliser la propriété CSS {{CSSxRef("object-position")}} afin d'ajuster le positionnement de l'image dans le cadre de l'élément. La propriété {{CSSxRef("object-fit")}} permet quant à elle de contrôler la façon dont la taille de l'image est ajustée.

> [!NOTE]
> Ces propriétés doivent être utilisées sur les éléments `<img>` fils et **pas** sur l'élément `<picture>`.

## Exemples

Ces exemples montrent comment différents attributs de l'élément {{HTMLElement("source")}} modifient la sélection de l'image à l'intérieur de `<picture>`.

### L'attribut `media`

L'attribut `media` définit une condition de média (similaire à une requête média) que l'agent utilisateur va évaluer pour chaque élément {{HTMLElement("source")}}.

Si la condition de média de {{HTMLElement("source")}} est évaluée à `false`, le navigateur l'ignore et évalue l'élément suivant à l'intérieur de `<picture>`.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(width >= 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

Vous pouvez échanger les ressources d'image pour les thèmes clair et sombre en utilisant la fonctionnalité de média {{CSSxRef("@media/prefers-color-scheme")}}&nbsp;:

```html
<picture>
  <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />
  <source srcset="logo-light.png" media="(prefers-color-scheme: light)" />
  <img src="logo-light.png" alt="Logo du produit" />
</picture>
```

### L'attribut `srcset`

L'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/source#srcset) est utilisé pour proposer une liste d'images possibles en fonction de la taille ou de la densité de pixels de l'écran.

Il est composé d'une liste dcripteurs d'image séparés par des virgules. Chaque descripteur d'image est composé d'une URL de l'image, et _soit_&nbsp;:

- un _descripteur de largeur_, suivi d'un `w` (par exemple `300w`)&nbsp;;
  _OU_
- un _descripteur de densité de pixels_, suivi d'un `x` (par exemple `2x`) pour servir une image haute résolution sur les écrans à haute densité de pixels.

Prennez en compte que&nbsp;:

- les descripteurs de largeur et de densité de pixels ne doivent pas être utilisés ensemble
- un descripteur de densité de pixels manquant implique 1x
- les valeurs de descripteur dupliquées ne sont pas autorisées (2x & 2x, 100w & 100w)

L'exemple suivant illustre l'utilisation de l'attribut `srcset` avec l'élément `<source>` pour définir une image haute densité et une image en résolution standard&nbsp;:

```html
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="Logo MDN Web Docs" height="320" width="320" />
</picture>
```

L'attribut `srcset` peut aussi être utilisé sur l'élément `<img>` sans avoir besoin de l'élément `<picture>`. L'exemple suivant montre comment utiliser l'attribut `srcset` pour définir respectivement des images en résolution standard et en haute densité&nbsp;:

```html
<img
  srcset="logo.png, logo-2x.png 2x"
  src="logo.png"
  height="320"
  width="320"
  alt="Logo MDN Web Docs" />
```

### L'attribut `sizes`

L'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/source#sizes) de l'élément `<source>` vous permet de définir un ensemble de paires condition-longueur de média et d'indiquer la taille d'affichage de l'image pour chaque condition. Cela aide le navigateur à sélectionner l'image la plus appropriée à partir de l'attribut `srcset`, qui répertorie les images avec leur largeur [intrinsèque](/fr/docs/Glossary/Intrinsic_Size).

Le navigateur évalue les conditions média dans l'attribut sizes avant de télécharger les images. Consultez l'attribut sizes des éléments [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) et [`<source>`](/fr/docs/Web/HTML/Reference/Elements/source#sizes) pour plus d'informations.

Par exemple&nbsp;:

```html
<picture>
  <source
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 400px, 800px"
    type="image/jpeg" />
  <img src="fallback.jpg" alt="Image d'exemple" />
</picture>
```

Dans cet exemple&nbsp;:

- Si la zone d'affichage (<i lang="en">viewport</i> en anglais) fait 600px de large ou moins, la taille de l'emplacement est de 400px&nbsp;; sinon, elle est de 800px.
- Le navigateur multiplie la taille de l'emplacement par le ratio de pixels de l'appareil pour déterminer la largeur idéale de l'image, puis choisit l'image disponible la plus proche dans `srcset`.

Sans `sizes`, le navigateur utilisera la taille par défaut de l'image telle que définie par ses dimensions en pixels. Cela peut ne pas convenir à tous les appareils, surtout si l'image est affichée sur différentes tailles d'écran ou dans différents contextes.

Veuillez noter que `sizes` n'aura d'effet que si des descripteurs de largeur sont fournis avec srcset au lieu de valeurs de ratio de pixels (par exemple 200w au lieu de 2x).
Pour plus d'informations sur l'utilisation de `srcset`, consultez la documentation [Images adaptatives](/fr/docs/Web/HTML/Guides/Responsive_images).

### L'attribut `type`

L'attribut `type` définit un [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) pour les URL de ressource dans l'attribut `srcset` de l'élément {{HTMLElement("source")}}. Si l'agent utilisateur ne prend pas en charge le type donné, l'élément {{HTMLElement("source")}} est ignoré.

```html
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
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
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu intégré.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("source")}} suivi d'un
        élément {{HTMLElement("img")}} avec éventuellement des éléments
        scriptés entre.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui peut contenir du contenu intégré.</td>
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
      <td>{{DOMxRef("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("img")}}
- L'élément {{HTMLElement("source")}}
- Positionnement et redimensionnement de l'image dans son cadre&nbsp;: {{CSSxRef("object-position")}} et {{CSSxRef("object-fit")}}
- [Guide des types et formats de fichiers image](/fr/docs/Web/Media/Guides/Formats/Image_types)
- La règle @ CSS {{CSSxRef("@media/prefers-color-scheme")}}
