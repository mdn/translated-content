---
title: "<h1>-<h6> : les éléments de titre de section"
slug: Web/HTML/Reference/Elements/Heading_Elements
original_slug: Web/HTML/Element/Heading_Elements
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

Les éléments [HTML](/fr/docs/Web/HTML) **`<h1>`** à **`<h6>`** représentent les six niveaux de titre de section. `<h1>` correspond au niveau de section le plus haut et `<h6>` correspond au niveau le plus faible. Par défaut, tous les éléments de titre créent une boîte de [niveau bloc](/fr/docs/Glossary/Block-level_content) dans la mise en page, commençant sur une nouvelle ligne et prenant toute la largeur disponible dans leur bloc conteneur.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;h1-h6&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Coléoptères</h1>
<h2>Morphologie externe</h2>
<h3>Tête</h3>
<h4>Mandibules</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
```

```css interactive-example
h1,
h2,
h3,
h4 {
  margin: 0.1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-left: 20px;
}

h3 {
  font-size: 1.2rem;
  padding-left: 40px;
}

h4 {
  font-size: 1rem;
  font-style: italic;
  padding-left: 60px;
}
```

## Attributs

Ces éléments incluent uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Les informations de titre peuvent être utilisées par les agents utilisateur afin de construire automatiquement la table des matières d'un document.
- Il ne faut pas utiliser des éléments de titre pour ajuster la taille du texte. Pour cela, on utilisera la propriété CSS [`font-size`](/fr/docs/Web/CSS/Reference/Properties/font-size).
- Il ne faut pas sauter de niveaux entre les titres&nbsp;: on commencera toujours par `<h1>`, suivi `<h2>` et ainsi de suite.

### Éviter d'avoir plusieurs éléments `<h1>` sur une page

Bien qu'il soit permis par le standard HTML d'utiliser plusieurs éléments `<h1>` sur une même page tant que ceux-ci ne sont pas [imbriqués](#imbrication), cela est considéré comme une mauvaise pratique. Une page devrait généralement avoir un seul élément `<h1>` qui décrit le contenu de la page (semblable à l'élément [`<title>`](/fr/docs/Web/HTML/Reference/Elements/title)).

> [!NOTE]
> L'imbrication de plusieurs éléments `<h1>` au sein [d'éléments sectionnants](/fr/docs/Web/HTML/Reference/Elements#sectionnement_du_contenu) imbriqués était autorisée dans d'anciennes versions du standard HTML. Toutefois, cela a toujours été considéré comme une mauvaise pratique et ce n'est plus conforme. Pour en savoir plus, vous pouvez lire le billet [<i lang="en">There Is No Document Outline Algorithm</i> d'Adrian Roselli (en anglais)](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html).

Mieux vaudra donc utiliser un seul élément `<h1>` par page et [l'imbrication de titres d'autres niveaux](#imbrication) sans sauter de niveaux.

### Définir une taille de police uniforme pour `<h1>`

Avant mai&nbsp;2025, le [standard HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#sections-and-headings) spécifiait que les éléments `<h1>` contenus dans un élément `<section>`, `<article>`, `<aside>` ou `<nav>` devaient s'afficher comme un `<h2>` (taille de police plus petite et {{cssxref("margin-block")}} ajustée), ou comme un `<h3>` s'ils étaient imbriqués d'un niveau supplémentaire, et ainsi de suite. Ce style par défaut dépendant du contexte a désormais été [supprimé <sup>(angl.)</sup>](https://github.com/whatwg/html/issues/7867).

Pour garantir un rendu cohérent des `<h1>` dans les navigateurs qui implémentent l'ancien style par défaut dépendant du contexte, utilisez la règle de style suivante&nbsp;:

```css
h1 {
  margin-block: 0.67em;
  font-size: 2em;
}
```

Alternativement, pour éviter d'écraser d'autres règles de style ciblant `<h1>`, vous pouvez utiliser {{cssxref(":where()")}}, qui a une spécificité nulle&nbsp;:

```css
:where(h1) {
  margin-block: 0.67em;
  font-size: 2em;
}
```

## Accessibilité

### Navigation

Les personnes qui utilisent des lecteurs d'écran naviguent en sautant de titre en titre afin de déterminer rapidement le contenu de la page. Aussi, il faut éviter de sauter des niveaux de titre. En effet, s'il y a un trou, la personne qui navigue ainsi pourrait se demander où est passé le titre manquant.

À ne pas faire&nbsp;:

```html example-bad
<h1>Titre de niveau 1</h1>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
```

À privilégier&nbsp;:

```html example-good
<h1>Titre de niveau 1</h1>
<h2>Titre de niveau 2</h2>
<h3>Titre de niveau 3</h3>
```

#### Imbrication

Les titres peuvent être imbriqués comme sous-sections pour refléter l'organisation du contenu d'une page. La plupart des lecteurs d'écran peuvent aussi générer une liste ordonnée de tous les titres d'une page, ce qui aide à déterminer rapidement la hiérarchie du contenu et à naviguer vers différents titres.

Étant donnée la structure de page suivante&nbsp;:

```html
<h1>Coléoptères</h1>

<h2>Étymologie</h2>

<h2>Distribution et diversité</h2>

<h2>Évolution</h2>
<h3>Paléozoïque tardif</h3>
<h3>Jurassique</h3>
<h3>Crétacé</h3>
<h3>Cénozoïque</h3>

<h2>Morphologie externe</h2>
<h3>Tête</h3>
<h4>Mandibules</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
<h3>Pattes</h3>
<h3>Ailes</h3>
<h3>Abdomen</h3>
```

Les lecteurs d'écran généreraient une liste comme celle-ci&nbsp;:

1. `h1` Coléoptères
   1. `h2` Étymologie
   2. `h2` Distribution et diversité
   3. `h2` Évolution
      1. `h3` Paléozoïque tardif
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

- [Tutoriel sur la structure d'une page et les titres, par la WAI <sup>(angl.)</sup>](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Comprendre les règles pour l'accessibilité des contenus web (WCAG), explications sur la règle 1.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Comprendre le critère de succès 1.3.1, WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [Comprendre les règles pour l'accessibilité des contenus web (WCAG), explications sur la règle 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Comprendre le critère de succès 2.4.1, WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Comprendre le critère de succès 2.4.6, WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Comprendre le critère de succès 2.4.10, WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Libeller le contenu des sections

Une autre technique de navigation employée par les utilisateur·ice·s de lecteurs d'écran consiste à générer une liste du [contenu sectionnant](/fr/docs/Web/HTML/Reference/Elements#sectionnement_du_contenu) et à l'utiliser afin de déterminer le plan de la page.

Le contenu sectionnant peut être libellé en utilisant une combinaison des attributs [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) et [`id`](/fr/docs/Web/HTML/Reference/Global_attributes#id), où le libellé décrit de façon concise l'objet de la section. Cette technique s'avère utile lorsqu'il y a plus d'un élément sectionnant sur la même page.

#### Exemples de contenu sectionné

```html
<header>
  <nav aria-labelledby="navigation-1">
    <h2 id="navigation-1">Navigation primaire</h2>
    <!-- éléments de navigation -->
  </nav>
</header>

<!-- Contenu de la page -->

<footer>
  <nav aria-labelledby="navigation-2">
    <h2 id="navigation-2">Navigation du pied de page</h2>
    <!-- éléments de navigation -->
  </nav>
</footer>
```

{{EmbedLiveSample('exemples_de_contenu_sectionné','100%','190')}}

Avec cet exemple, un lecteur d'écran annoncera la présence de deux sections [`<nav>`](/fr/docs/Web/HTML/Reference/Elements/nav), la première appelée «&nbsp;Navigation primaire&nbsp;» et l'autre appelée «&nbsp;Navigation du pied de page&nbsp;». Si les libellés n'avaient pas été fournis, la personne aurait dû consulter le contenu de chaque élément `<nav>` afin de déterminer leur utilité.

- [Utiliser l'attribut `aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Tutoriels sur les libellés pour les régions et la structure des pages, par la WAI](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

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

{{EmbedLiveSample('tous_les_niveaux', '280', '370')}}

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

{{EmbedLiveSample('une_page_dexemple', '280', '630')}}

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
        >, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_titre"
          >contenu de titre</a
        >, <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
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
      <th scope="row">Omission de balise</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role"
          ><code>heading</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
          ><code>tab</code></a
        >, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
          ><code>presentation</code></a
        >, ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"
          ><code>none</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
