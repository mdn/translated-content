---
title: "<map> : l'élément de carte d'image"
slug: Web/HTML/Reference/Elements/map
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<map>`** est utilisé avec des éléments {{HTMLElement("area")}} pour définir une carte d'image (une zone de lien cliquable).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;map&gt;", "tabbed-standard")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info2.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : L'attribut `name` donne un nom à la carte afin qu'elle puisse être référencée. L'attribut doit être présent et avoir une valeur non vide ne contenant aucun espace. La valeur de l'attribut `name` ne doit pas être identique à celle de l'attribut `name` d'un autre élément `<map>` dans le même document. Si l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) est également défini, les deux attributs doivent avoir la même valeur.

## Exemples

### Carte d'image avec deux zones

Cliquez sur le perroquet de gauche pour JavaScript, ou sur le perroquet de droite pour CSS.

#### HTML

```html
<!-- Photo de Juliana et Mariana Amorim sur Unsplash -->
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  <area
    shape="circle"
    coords="275,75,75"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
</map>
<img
  usemap="#primary"
  src="parrots.jpg"
  alt="Image 350 x 150 de deux perroquets" />
```

#### Résultat

{{EmbedLiveSample("Carte d'image avec deux zones", "", 250)}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Tout élément dont
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#modèle_de_contenu_transparent"
          >le modèle de contenu est transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >du contenu phrasé</a
        >.
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
      <td>{{DOMxRef("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("a")}}
- L'élément {{HTMLElement("area")}}
