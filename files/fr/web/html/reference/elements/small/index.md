---
title: "<small> : l'élément de commentaire en marge"
slug: Web/HTML/Reference/Elements/small
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<small>`** représente des commentaires en marge et des mentions en petits caractères, comme les textes de droits d'auteur et les mentions légales, indépendamment de sa présentation visuelle. Par défaut, il affiche le texte qu'il contient avec une taille de police inférieure, par exemple de `small` à `x-small`.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;small&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  MDN Web Docs est une plateforme d'apprentissage pour les technologies du Web
  et les logiciels qui font fonctionner le Web.
</p>

<hr />

<p>
  <small
    >Le contenu est sous licence Creative Commons Attribution-ShareAlike 2.5
    Generic.</small
  >
</p>
```

```css interactive-example
small {
  font-size: 0.7em;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

### Exemple simple

```html
<p>
  Ceci est la première phrase.
  <small>Toute cette phrase est en petits caractères.</small>
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Alternative avec CSS

```html
<p>
  Ceci est la première phrase.
  <span class="small">Toute cette phrase est en petits caractères.</span>
</p>
```

```css
.small {
  font-size: 0.8em;
}
```

#### Résultat

{{EmbedLiveSample("Alternative avec CSS")}}

## Notes

Bien que l'élément `<small>`, comme les éléments {{HTMLElement("b")}} et {{HTMLElement("i")}}, puisse être perçu comme allant à l'encontre du principe de séparation entre la structure et la présentation, les trois sont valides en HTML. Il est conseillé aux auteur·ice·s d'utiliser leur discernement pour déterminer s'il est préférable d'utiliser `<small>` ou des règles CSS.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Catégories de contenu</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise ouvrante et la balise fermante doivent toutes les deux
        être présentes.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >
        ou tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("b")}}
- Les éléments {{HTMLElement("sub")}} et {{HTMLElement("sup")}}
- L'élément {{HTMLElement("font")}}
- L'élément {{HTMLElement("style")}}
