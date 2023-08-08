---
title: "<picture> : l'élément d'image adaptative"
slug: Web/HTML/Element/picture
---

{{HTMLSidebar}}

L'élément HTML **`<picture>`** est un conteneur utilisé afin de définir zéro ou plusieurs éléments {{HTMLElement("source")}} destinés à un élément {{HTMLElement("img")}}. Le navigateur choisira la source la plus pertinente selon la disposition de la page (les contraintes qui s'appliquent à la boîte dans laquelle l'image devra être affichée), selon l'appareil utilisé (la densité de pixels de l'affichage par exemple avec les appareils hiDPI) et selon les formats pris en charge (ex. WebP pour les navigateurs Chromium ou PNG pour les autres). Si aucune correspondance n'est trouvée parmi les éléments `<source>`, c'est le fichier défini par l'attribut [`src`](/fr/docs/Web/HTML/Element/img#src) de l'élément `<img>` qui sera utilisé.

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

L'agent utilisateur examine chaque attribut présent dans `<source>` ([`srcset`](/fr/docs/Web/HTML/Element/source#srcset), [`media`](/fr/docs/Web/HTML/Element/source#media), and [`type`](/fr/docs/Web/HTML/Element/source#type)) pour sélectionner l'URL de la meilleure ressource selon la disposition de la page, les caractéristiques de l'écran de l'appareil, etc.

L'élément `<picture>` peut être utilisé pour :

- Fournir une direction artistique : rogner, modifier des images selon différentes conditions de média
- Fournir différents formats d'image lorsque certains formats ne sont pas pris en charge par les navigateurs

Lorsqu'on fournit des versions haute densité d'une image pour les appareils avec un DPI élevé, on utilisera plutôt [`srcset`](/fr/docs/Web/HTML/Element/img#srcset) sur l'élément `<img>` à la place. Ainsi, les navigateurs pourront choisir une image à plus basse densité dans un contexte où les flux réseaux doivent être économisés. De plus, il ne sera pas nécessaire d'écrire des requêtes média explicites.

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

## Notes d'utilisation

Il est possible d'utiliser la propriété CSS {{cssxref("object-position")}} afin d'ajuster le positionnement de l'image dans le cadre de l'élément. La propriété {{cssxref("object-fit")}} permet quant à elle de contrôler la façon dont la taille de l'image est ajustée.

> **Note :** Ces propriétés doivent être utilisées sur les éléments `<img>` fils et pas sur l'élément `<picture>`.

## Exemples

### Utiliser l'attribut `media`

L'attribut `media` de l'élément {{HTMLElement("source")}} permet de rédiger une requête média qui sera évaluée par l'agent utilisateur afin de sélectionner ou non la source. Si la requête média est évaluée à `false`, l'élément {{HTMLElement("source")}} est ignoré.

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### Utiliser l'attribut `type`

L'attribut `type` d'un élément {{HTMLElement("source")}} permet d'indiquer le type MIME du fichier fourni via l'attribut `srcset`. Si l'agent utilisateur ne prend pas en charge ce type de fichier, l'élément {{HTMLElement("source")}} est ignoré.

```html
<picture>
  <source srcset="mdn-logo.svg" type="image/svg+xml" />
  <img src="mdn-logo.png" alt="MDN" />
</picture>
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_intégré"
          >contenu intégré</a
        >.
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
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui peut contenir du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_intégré"
          >contenu intégré</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLPictureElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("img")}}
- {{HTMLElement("source")}}
- Les propriétés CSS aidant au positionnement et au redimensionnement : {{cssxref("object-position")}} et {{cssxref("object-fit")}}
