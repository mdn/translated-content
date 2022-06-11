---
title: '<h1>-<h6> : les éléments de titre de section'
slug: Web/HTML/Element/Heading_Elements
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/Heading_Elements
---
{{HTMLRef}}

Les éléments **`<h1>`** à **`<h6>`** représentent six niveaux de titres dans un document, `<h1>` est le plus important et `<h6>` est le moins important. Un élément de titre décrit brièvement le sujet de la section qu'il introduit.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

## Attributs

Ces éléments acceptent uniquement les [attributs universels](/fr/docs/Web/HTML/Attributs_universels) (communs à l'ensemble des éléments).

> **Note :** L'attribut **`align`** est obsolète et ne doit pas être utilisé.

## Notes d'utilisation

- L'information d'un titre peut être utilisée par les agents utilisateurs, par exemple, pour construire automatiquement une table des matières d'un document.
- Les titres ne doivent pas être utilisé afin de réduire ou d'augmenter la taille de la police d'un texte : il faut pour cela utiliser la propriété CSS {{cssxref('font-size')}} à la place.
- On évitera de sauter des niveaux de titre : on commence toujours par `<h1>` puis `<h2>` et ainsi de suite. On essaye également d'avoir un seul titre de niveau 1 sur une page.
- Jusqu'à HTML5, il fallait éviter d'utiliser plus d'un élément `<h1>` sur une même page. En HTML5, il est possible d'utiliser les balises sémantiques pour créer une hiérarchie valide avec plusieurs `<h1>`. Voir {{SectionOnPage("/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document","Définir_des_sections_en_HTML5")}} pour plus d'informations.

## Exemples

### Tous les titres

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

{{EmbedLiveSample("Tous_les_titres","280","300")}}

### Exemple de page

#### HTML

```html
<h1>Élément de titre</h1>
<h2>Présentation</h2>
<p>Du texte...</p>

<h2>Exemples</h2>
<h3>Exemple 1</h3>
<p>Du texte...</p>

<h3>Exemple 2</h3>
<p>Du texte...</p>

<h2>Voir également</h2>
<p>Du texte...</p>
```

#### Résultat

{{EmbedLiveSample("Exemple_de_page","280","480")}}

## Accessibilité

### Navigation

Les personnes utilisant des lecteurs d'écran utilisent fréquemment les niveaux de titre en passant de l'un à l'autre afin de déterminer rapidement le contenu de la page. Pour cette raison, il est important de ne pas sauter un niveau de titre. En effet, l'absence d'un titre intermédiaire pourrait amener le lecteur à se demander où le titre a été placé.

#### Mauvaises pratiques

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### Bonnes pratiques

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Imbrication

Les niveaux de titres peuvent être imbriqués afin de créer des sous-sections qui reflètent l'organisation de la page. La plupart des lecteurs d'écran peuvent également générer une liste ordonnée des titres de la page afin d'aider les visiteurs à connaître la hiérarchie du contenu :

1.  `h1` Les abeilles

    1.  `h2` Étymologie
    2.  `h2` Répartition
    3.  `h2` Évolution

        1.  `h3` Paléozoïque ancien
        2.  `h3` Jurassique
        3.  `h3` Crétacée

    4.  `h2` Morphologie externe

        1.  `h3`Tête

            1.  `h4` Mandibules

        2.  `h3` Thorax

            1.  `h4` Prothorax
            2.  `h4` Ptérothorax

        3.  `h3` Pattes
        4.  `h3` Ailes
        5.  `h3` Abdomen

Lorsque les niveaux sont imbriqués, il est possible de sauter un niveau lorsqu'on **ferme** une sous-section

- [Les titres et la structure d'une page - Tutoriels WAI pour l'accessibilité web (en anglais)](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways)
- [Comprendre les règles WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [_Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [_Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [_Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [_Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Libeller une section

Les outils comme les lecteurs d'écran peuvent également générer une liste du [contenu sectionnant](/en-US/docs/Web/HTML/Element#Content_sectioning) afin de déterminer le plan de la page.

Le contenu sectionnant peut être libellé en combinant les attributs [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) et {{htmlattrxref("id")}}. Dans ce cas, le libellé décrit, de façon concise, le but de la section. Cette technique s'avère utile lorsqu'on a une page qui possède plusieurs éléments sectionnants.

#### Exemple

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Outils de navigation</h2>
    <!-- éléments relatifs à la navigation -->
  </nav>
</header>

<!-- contenu de la page -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Navigation dans le pied de page</h2>
    <!-- éléments relatifs à la navigation -->
  </nav>
</footer>
```

Dans l'exemple qui précède, un lecteur d'écran annoncerait deux section {{HTMLElement("nav")}}, l'une étant appelée "Outils de navigation" et l'autre "Navigation dans le pied de page". Si les libellés n'avaient pas été fournis, la personne utilisant un lecteur d'écran aurait été obligée d'étudier les contenus de chaque élément `nav` afin d'en déterminer l'objectif.

- [Utiliser l'attribut `aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- [_Libeller des régions - Structure d'une page - Tutoriels W3C WAI pour l'accessibilité web_ (en anglais)](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

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
        >, contenu de titre,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte le
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >
        ; n'utilisez pas de titre comme enfant d'un élément
        {{HTMLElement("hgroup")}}, c'est à présent obsolète.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}}</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                                                                                            | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.5', '&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;')}}                                         | {{Spec2('HTML4.01')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.h1")}}

## Voir aussi

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
