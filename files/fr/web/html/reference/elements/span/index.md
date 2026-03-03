---
title: "<span> : l'élément de contenu en ligne générique"
slug: Web/HTML/Reference/Elements/span
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<span>`** est un conteneur générique en ligne (<i lang="en">inline</i> en anglais) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) et aux règles [CSS](/fr/docs/Web/CSS)) ou parce qu'ils partagent certaines valeurs d'attribut comme [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang). Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. `<span>` est très proche de l'élément {{HTMLElement("div")}}, mais l'élément {{HTMLElement("div")}} est [un élément de bloc](/fr/docs/Glossary/Block-level_content), alors que `<span>` est {{Glossary("Inline-level_content", "un élément en ligne")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;span&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Ajoutez le <span class="ingredient">basilic</span>,
  <span class="ingredient">pignon de pin</span> et
  <span class="ingredient">ail</span> dans un mixeur et mixez jusqu'à obtenir
  une pâte.
</p>

<p>
  Ajoutez progressivement l'<span class="ingredient">huile d'olive</span> en
  faisant tourner le mixeur lentement.
</p>
```

```css interactive-example
span.ingredient {
  color: red;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

### Exemple 1

#### HTML

```html
<p><span>Un peu de texte</span></p>
```

#### Résultat

{{EmbedLiveSample("Exemple 1")}}

### Exemple 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">Voir mon cahier de projets</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### Résultat

{{EmbedLiveSample("Exemple 2")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
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
        Tout élément acceptant du
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, ou tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
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
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLSpanElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("div")}}
