---
title: "<h1>-<h6> : les éléments de titre de section"
slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{HTMLSidebar}}

Les éléments [HTML](/fr/docs/Web/HTML) **`<h1>`** à **`<h6>`** représentent les six niveaux de titre de section. `<h1>` correspond au niveau de section le plus haut et `<h6>` correspond au niveau le plus faible.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_titre">contenu de titre</a>, <a href="/fr/docs/Web/HTML/Content_categories#contenu_tangible">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/HTML/Content_categories#contenu_phrasé">Contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/heading_role"><code>heading</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, ou <a href="/fr/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLHeadingElement"><code>HTMLHeadingElement</code></a></td>
    </tr>
  </tbody>
</table>

## Attributs

Ces éléments incluent uniquement les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

- Les informations de titre peuvent être utilisées par les agents utilisateur afin de construire automatiquement la table des matières d'un document.
- Il ne faut pas utiliser des éléments de titre pour ajuster la taille du texte. Pour cela, on utilisera la propriété CSS [`font-size`](/fr/docs/Web/CSS/font-size).
- Il ne faut pas sauter de niveaux entre les titres&nbsp;: on commencera toujours par `<h1>`, suivi `<h2>` et ainsi de suite.

### Éviter d'avoir plusieurs éléments `<h1>` sur une page

Bien qu'il soit permis par le standard HTML d'utiliser plusieurs éléments `<h1>` sur une même page tant que ceux-ci ne sont pas [imbriqués](#imbrication), cela est considéré comme une mauvaise pratique. Une page devrait généralement avoir un seul élément `<h1>` qui décrit le contenu de la page (semblable à l'élément [`<title>`](/fr/docs/Web/HTML/Element/title)).

> **Note :** L'imbrication de plusieurs éléments `<h1>` au sein [d'éléments sectionnants](/fr/docs/Web/HTML/Element#sectionnement_du_contenu) imbriqués était autorisée dans d'anciennes versions du standard HTML. Toutefois, cela a toujours été considéré comme une mauvaise pratique et ce n'est plus conforme. Pour en savoir plus, vous pouvez lire le billet [<i lang="en">There Is No Document Outline Algorithm</i> d'Adrian Roselli (en anglais)](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Mieux vaudra donc utiliser un seul élément `<h1>` par page et [l'imbrication de titres d'autres niveaux](#imbrication) sans sauter de niveaux.

## Exemples

### Tous les niveaux

On utilise ici tous les niveaux de titre.

#### HTML

```html
<h1>Titre de niveau 1</h1>
<h2>Titre de niveau 2</h2>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
<h5>Titre de niveau 5</h5>
<h6>Titre de niveau 6</h6>
```

#### Résultat

{{EmbedLiveSample('', '280', '370')}}

### Une page d'exemple

Ici, on utilise des titres avec du contenu intercalaire.

#### HTML

```html
<h1>Éléments de titre</h1>
<h2>Résumé</h2>
<p>Du texte ici…</p>

<h2>Exemples</h2>
<h3>Exemple 1</h3>
<p>Du texte ici…</p>

<h3>Exemple 2</h3>
<p>Du texte ici…</p>

<h2>Voir aussi</h2>
<p>Du texte ici…</p>
```

#### Résultat

{{EmbedLiveSample('', '280', '630')}}

## Accessibilité

### Navigation

Les personnes qui utilisent des lecteurs d'écran naviguent en sautant de titre en titre afin de déterminer rapidement le contenu de la page. Aussi, il faut éviter de sauter des niveaux de titre. En effet, s'il y a un trou, la personne qui navigue ainsi pourrait se demander où est passé le titre manquant.

#### À ne pas faire

```html example-bad
<h1>Titre de niveau 1</h1>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
```

#### À privilégier

```html example-good
<h1>Titre de niveau 1</h1>
<h2>Titre de niveau 2</h2>
<h3>Titre de niveau 3</h3>
```

#### Imbrication

Les titres peuvent être imbriqués en sous-sections afin de modéliser l'organisation du contenu de la page. La plupart des lecteurs d'écran peut générer une liste ordonnée des titres d'une page, l'aidant ainsi à déterminer rapidement la hiérarchie du contenu&nbsp;:

1. `h1` Coléoptères

   1. `h2` Étymologie
   2. `h2` Distribution et diversité
   3. `h2` Évolution

      1. `h3` Paléozoïque
      2. `h3` Jurassique
      3. `h3` Crétacé
      4. `h3` Cénozoïque

   4. `h2` Morphologie externe

      1. `h3` Tête

         1. `h4` Mandibules

      2. `h3` Thorax

         1. `h4` Prothorax
         2. `h4` Pterothorax

      3. `h3` Pattes
      4. `h3` Ailes
      5. `h3` Abdomen

Lorsque les titres sont imbriqués, il est possible de sauter des niveaux lors de la fermeture d'une sous-section.

- [Tutoriel sur la structure d'une page et les titres, par la WAI](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Comprendre les règles pour l'accessibilité des contenus web (WCAG), explications sur la règle 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Comprendre le critère de succès 1.3.1, WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Comprendre les règles pour l'accessibilité des contenus web (WCAG), explications sur la règle 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Comprendre le critère de succès 2.4.1, WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Comprendre le critère de succès 2.4.6, WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Comprendre le critère de succès 2.4.10, WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Libeller le contenu des sections

Une autre technique de navigation employée par celles et ceux qui utilisent les lecteurs d'écran consiste à générer une liste du [contenu sectionnant](/fr/docs/Web/HTML/Element#sectionnement_du_contenu) et à l'utiliser afin de déterminer le plan de la page.

Le contenu sectionnant peut être libellé en utilisant une combinaison des attributs [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) et [`id`](/fr/docs/Web/HTML/Global_attributes#id), où le libellé décrit de façon concise l'objet de la section. Cette technique s'avère utile lorsqu'il y a plus d'un élément sectionnant sur la même page.

#### Exemples

```html
<header>
  <nav aria-labelledby="navigation-1">
    <h2 id="navigation-1">Navigation primaire</h2>
    <!-- Items de navigation -->
  </nav>
</header>

<!-- Contenu de la page -->

<footer>
  <nav aria-labelledby="navigation-2">
    <h2 id="navigation-2">Navigation du pied de page</h2>
    <!-- Items de navigation -->
  </nav>
</footer>
```

##### Résultat

{{EmbedLiveSample('','100%','190')}}

Avec cet exemple, un lecteur d'écran annoncera la présence de deux sections [`<nav>`](/fr/docs/Web/HTML/Element/nav), la première appelée «&nbsp;Navigation primaire&nbsp;» et l'autre appelée «&nbsp;Navigation du pied de page&nbsp;». Si les libellés n'avaient pas été fournis, la personne aurait dû consulter le contenu de chaque élément `<nav>` afin de déterminer leur utilité.

- [Utiliser l'attribut `aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Tutoriels sur les libellés pour les régions et la structure des pages, par la WAI](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<p>`](/fr/docs/Web/HTML/Element/p)
- [`<div>`](/fr/docs/Web/HTML/Element/div)
- [`<section>`](/fr/docs/Web/HTML/Element/section)
