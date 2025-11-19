---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
original_slug: Web/CSS/column-count
---

{{CSSRef}}

La propriété **`column-count`** décrit le nombre de colonnes d'un élément lorsqu'on utilise une disposition en colonnes.

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-count: auto;

/* Valeurs numériques */
/* Type <number> */
column-count: 3;

/* Valeurs globales */
column-count: inherit;
column-count: initial;
column-count: unset;
```

### Valeurs

- `auto`
  - : Un mot-clé qui indique que le nombre de colonnes doit être déterminé à partir d'autres propriétés CSS (par exemple à partir de {{cssxref("column-width")}}).
- `<number>`
  - : Un nombre (type {{cssxref("&lt;integer&gt;")}}) strictement positif qui décrit le nombre idéal de colonnes avec lequel répartir le contenu de l'élément. Si la valeur de {{cssxref("column-width")}} n'est pas `auto`, cette propriété indique simplement le nombre maximal de colonnes autorisé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border: 10px solid #000000;
  column-count: 3;
}
```

### HTML

```html
<p class="exemple">
  « Mais alors, » pensa Alice, « ne serai-je donc jamais plus vieille que je ne
  le suis maintenant ? D’un côté cela aura ses avantages, ne jamais être une
  vieille femme. Mais alors avoir toujours des leçons à apprendre ! Oh, je
  n’aimerais pas cela du tout. » « Oh ! Alice, petite folle, » se répondit-elle.
  « Comment pourriez-vous apprendre des leçons ici ? Il y a à peine de la place
  pour vous, et il n’y en a pas du tout pour vos livres de leçons. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","800","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre - la disposition multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Les concepts de bases pour la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
