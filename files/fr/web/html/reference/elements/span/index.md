---
title: <span>
slug: Web/HTML/Reference/Elements/span
original_slug: Web/HTML/Element/span
---

{{HTMLSidebar}}

L'élément HTML **`<span>`** est un conteneur générique en ligne (_inline_) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs [`class`](/fr/docs/Web/HTML/Reference/Global_attributes#class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes#id) et aux règles [CSS](/fr/docs/Web/CSS)) ou parce qu'ils partagent certaines valeurs d'attribut comme [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes#lang). Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. `<span>` est très proche de l'élément {{HTMLElement("div")}}, mais l'élément `<div>` est [un élément de bloc](/fr/docs/Glossary/Block-level_content), alors que `<span>` est [un élément en ligne](/fr/docs/Glossary/Inline-level_content).

{{InteractiveExample("HTML Demo: &lt;span&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Add the <span class="ingredient">basil</span>,
  <span class="ingredient">pine nuts</span> and
  <span class="ingredient">garlic</span> to a blender and blend into a paste.
</p>

<p>
  Gradually add the <span class="ingredient">olive oil</span> while running the
  blender slowly.
</p>
```

```css interactive-example
span.ingredient {
  color: #f00;
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

### HTML

```html
<p><span>Un peu de texte</span></p>
```

### CSS

```css
p span {
  background: green;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >, ou tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        {{domxref("HTMLSpanElement")}} (avant HTML 5, l'interface
        était {{domxref("HTMLElement")}})
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("div")}}
