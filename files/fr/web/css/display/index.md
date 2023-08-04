---
title: display
slug: Web/CSS/display
---

{{CSSRef}}

La propriété **`display`** définit le type d'affichage utilisée pour le rendu d'un élément ([de bloc ou en ligne](/fr/docs/Web/CSS/CSS_Flow_Layout)) et la disposition utilisée pour ses éléments fils : [grille](/fr/docs/Web/CSS/CSS_Grid_Layout) ou [boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout).

Le type d'affichage donné par `display` possède deux composantes : le type d'affichage extérieur qui définit comment la boîte participe au [flux](/fr/docs/Web/CSS/CSS_Flow_Layout) et le type d'affichage intérieur qui définit l'organisation des éléments enfants.

Certaines valeurs de `display` sont définies dans des spécifications séparées. Pour plus d'informations, voir la section Spécifications ci-après.

## Syntaxe

```css
/* Valeurs de type <display-outside> */
display: block;
display: inline;
display: run-in;

/* Valeurs de type <display-inside> */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;

/* Combinaison de valeurs */
/* <display-outside> et <display-inside> */
display: block flow;
display: inline table;
display: flex run-in;

/* Valeurs de type <display-listitem> */
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/* Valeurs de type <display-internal> */
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/* Valeurs de type <display-box> */
display: contents;
display: none;

/* Valeurs de type <display-legacy> */
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/* Valeurs globales */
display: inherit;
display: initial;
display: unset;
```

La propriété `display` est définie à l'aide de mots-clés. Ces valeurs sont rangées selon six catégories.

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : Ces mots-clés définissent le type d'affichage extérieur de l'élément. Autrement dit, ils définissent comment l'élément participe au flux.
- {{CSSxRef("&lt;display-inside&gt;")}}
  - : Ces mots-clés définissent le type d'affichage intérieur de l'élément qui définit le contexte de formatage qui organisera le contenu de l'élément (si celui-ci n'est pas un élément remplacé).
- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : L'élément génère une boîte de bloc pour le contenu et une boîte en ligne séparée pour l'élément de liste.
- {{CSSxRef("&lt;display-internal&gt;")}}
  - : Certains modes de dispositions, tels que `table` et `ruby` possèdent une structure interne complexe avec différents rôles possibles pour les éléments descendants. Cette section définit ces rôles internes qui s'appliquent uniquement pour un mode de disposition donné.
- {{CSSxRef("&lt;display-box&gt;")}}
  - : Ces valeurs définissent si un élément génère une boîte ou non.
- {{CSSxRef("&lt;display-legacy&gt;")}}
  - : CSS 2 utilise une syntaxe avec un seul mot-clé pour la propriété `display` et il faut donc des mots-clés distincts pour les variantes bloc/en ligne d'un même mode de disposition.

### Valeurs historiques de `display`

La spécification de niveau 3 permet d'utiliser deux valeurs pour définir la propriété `display` afin de définir explicitement le type d'affichage intérieur et le type d'affichage extérieur. Toutefois, cette syntaxe sur deux valeurs n'est pas encore prise en charge de façon homogène par les navigateurs.

Les méthodes d'affichage historiques permettent d'obtenir les mêmes résultats avec un seul mot-clé. Ces valeurs devraient être privilégiées tant que la prise en charge de la syntaxe sur deux valeurs n'est pas mieux prise en charge. Ainsi, il est possible d'utiliseur deux valeur afin de définir un conteneur flexible en ligne :

```css
.container {
  display: inline flex;
}
```

On pourra obtenir un comportement équivalent en écrivant cela avec une seule valeur.

```css
.container {
  display: inline-flex;
}
```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

En plus de l'exemple qui suit, vous pouvez voir d'autres exemples sur les sections dédiées aux différents modes de disposition :

- [Grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout)
- [Boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Apprendre la disposition en CSS](/fr/docs/Apprendre/CSS/CSS_layout)

### HTML

```html
<p>Texte visible</p>
<p class="secret">Texte invisible</p>
```

### CSS

```css
p.secret {
  display: none;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 60)}}

## Accessibilité

### `display: none;`

Utiliser la propriété `display` avec la valeur `none` sur un élément entraînera son retrait de l'[arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). Cet élément ainsi que ses descendants ne seront plus annoncés par les lecteurs d'écrans.

Si vous souhaitez masquer un élément visuellement, une alternative plus accessible consiste à utiliser [une combinaison de propriétés](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) afin de le retirer de l'écran mais de le conserver lisible pour les technologies d'assistance.

### `display: contents;`

Tout élément ciblé avec `display: contents` sera retiré de l'arbre d'accessibilité par la plupart des navigateurs. Ainsi, l'élément et ses descendants ne seront plus annoncés par les outils d'assistance tels que les lecteurs d'écran. Ce comportement est incorrect selon [la spécification CSSWG](https://drafts.csswg.org/css-display/#the-display-properties).

- [`display: contents` n'est pas un outil de réinitialisation CSS, par Adrian Roselli, en anglais](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Obtenir un balisage plus accessible grâce à `display: contents`, en anglais, par Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)

### Les tableaux

Modifier la valeur de `display` pour un élément de [tableau](/fr/docs/Web/HTML/Element/table) afin d'utiliser la valeur `block`, `grid` ou `flex` modifiera sa représentation au sein de l'[arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). Aussi, le tableau ne sera plus correctement annoncé par les technologies d'assistance.

- [Une rapide note sur l'impact de la propriété CSS `display` sur la sémantique des tableaux — The Paciello Group (en anglais)](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Du contenu masqué avec une meilleure accessibilité - Go Make Things (en anglais)](https://gomakethings.com/hidden-content-for-better-a11y/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways)
- [_Understanding Success Criterion 1.3.1, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("visibility")}}
- {{cssxref("float")}}
- {{cssxref("position")}}
- {{cssxref("flex")}}
- {{cssxref("grid")}}
- [Explications sur les contextes de formatage](/fr/docs/Web/CSS/CSS_Flow_Layout/Explications_contextes_formatage)
- [Les dispositions de bloc et en ligne dans un flux normal](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_de_bloc_en_ligne_avec_flux_normal)
