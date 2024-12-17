---
title: "<hr> : l'élément de rupture thématique (règle horizontale)"
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

L'élément HTML **`<hr>`** représente un changement thématique entre des éléments de paragraphe (par exemple, un changement de décor dans un récit, un changement de sujet au sein d'une section).

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Dans les versions précédentes d'HTML, il représente une ligne horizontale. Bien qu'il puisse toujours être représenté ainsi par les navigateurs graphiques, il possède désormais une signification sémantique et ne représente plus un élément de mise en forme.

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

### Attributs dépréciés, obsolètes ou non-standard

- `align` {{deprecated_inline}}
  - : Définit l'alignement de la ligne horizontale sur la page. Si aucune valeur n'est renseignée, la valeur prise par défaut est `left`.
- `color` {{Non-standard_inline}}
  - : Définit la couleur à utiliser pour la ligne horizontale, grâce à un nom de couleur SVG ou à un code hexadécimal (précédé d'un #).
- `noshade` {{deprecated_inline}}
  - : Avec cet attribut, la ligne horizontale n'aura pas d'ombre.
- `size` {{deprecated_inline}}
  - : Définit la hauteur de la ligne, exprimée en pixels.
- `width` {{deprecated_inline}}
  - : Définit la longueur de la ligne, exprimée par une valeur en pixels ou en pourcents.

## Exemples

### HTML

```html
<p>
  Ceci est le premier paragraphe du texte. Les pandas roux sont géniaux. C'est
  mignon et c'est tout doux.
</p>

<hr />

<p>
  Ceci est le deuxième paragraphe du texte. Les poneys ne sont pas pareils. Ils
  sont plus grands et moins exotiques.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          title="HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          title="HTML/Content categories#Flow content"
          >Contenu de flux</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante mais ne doit pas avoir de
        balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          title="HTML/Content categories#Flow content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("p")}} qui permet de constituer des paragraphes.
