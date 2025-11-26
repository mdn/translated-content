---
title: column-span
slug: Web/CSS/Reference/Properties/column-span
original_slug: Web/CSS/column-span
---

{{CSSRef}}

La propriété **`column-span`** permet à un élément de s'étendre sur toutes les colonnes lorsque la valeur de cette propriété est `all`. Un élément qui s'étend sur plus d'une colonne est appelé un élément étendu (_spanning element_).

{{InteractiveExample("CSS Demo: column-span")}}

```css interactive-example-choice
column-span: none;
```

```css interactive-example-choice
column-span: all;
```

```html interactive-example
<section id="default-example">
  <div class="multicol-element">
    <p>
      London. Michaelmas term lately over, and the Lord Chancellor sitting in
      Lincoln's Inn Hall.
    </p>
    <div id="example-element">Spanner?</div>
    <p>
      Implacable November weather. As much mud in the streets as if the waters
      had but newly retired from the face of the earth, and it would not be
      wonderful to meet a Megalosaurus, forty feet long or so, waddling like an
      elephantine lizard up Holborn Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.multicol-element {
  width: 100%;
  text-align: left;
  column-count: 3;
}

.multicol-element p {
  margin: 0;
}

#example-element {
  background-color: rebeccapurple;
  padding: 10px;
  color: #fff;
}
```

```css
/* Valeurs avec un mot-clé */
column-span: none;
column-span: all;

/* Valeurs globales */
column-span: inherit;
column-span: initial;
column-span: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : L'élément ne s'étend pas sur plusieurs colonnes.
- `all`
  - : L'élément s'étend sur l'ensemble des colonnes. Le contenu du flux normal apparaissant avant l'élément est équilibré entre toutes les colonnes de façon automatique. L'élément établit un nouveau bloc de contexte de formatage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border: 10px solid #000000;
  columns: 3;
}

h2 {
  column-span: all;
}
```

### HTML

```html
<div class="exemple">
  « Mais alors, » pensa Alice, « ne serai-je donc jamais plus vieille que je ne
  le suis maintenant ? D’un côté cela aura ses avantages, ne jamais être une
  vieille femme. Mais alors avoir toujours des leçons à apprendre ! Oh, je
  n’aimerais pas cela du tout. »
  <h2>La suite</h2>
  « Oh ! Alice, petite folle, » se répondit-elle. « Comment pourriez-vous
  apprendre des leçons ici ? Il y a à peine de la place pour vous, et il n’y en
  a pas du tout pour vos livres de leçons. »
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","auto",120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
