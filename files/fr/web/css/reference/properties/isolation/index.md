---
title: isolation
slug: Web/CSS/Reference/Properties/isolation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`isolation`** indique que l'élément crée un nouveau {{Glossary("stacking context", "contexte d'empilement")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: isolation")}}

```css interactive-example-choice
isolation: auto;
```

```css interactive-example-choice
isolation: isolate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="background-container">
    <div id="example-element">
      <img src="/shared-assets/images/examples/firefox-logo.svg" />
      <p><code>mix-blend-mode: multiply;</code></p>
    </div>
  </div>
</section>
```

```css interactive-example
.background-container {
  background-color: #f4f460;
  width: 250px;
}

#example-element {
  border: 1px solid black;
  margin: 2em;
}

#example-element * {
  mix-blend-mode: multiply;
  color: #8245a3;
}
```

Cette propriété est particulièrement utile lorsqu'elle est utilisée en combinaison avec {{CSSxRef("mix-blend-mode")}} et {{CSSxRef("z-index")}}.

## Syntaxe

```css
/* Valeurs avec mots-clés */
isolation: auto;
isolation: isolate;

/* Valeurs globales */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

La propriété `isolation` est définie avec l'un des mots-clés suivants.

### Valeurs

- `auto`
  - : Un mot-clé qui indique qu'un nouveau contexte d'empilement doit être créé uniquement si une propriété appliquée à l'élément le rend nécessaire.
- `isolate`
  - : Un mot-clé qui indique qu'un nouveau contexte d'empilement doit être créé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Forcer un nouveau contexte d'empilement pour un élément

#### HTML

```html
<div class="grand-carre">
  <div class="isolation-auto">
    <div class="petit-carre">auto</div>
  </div>
  <div class="isolation-isolate">
    <div class="petit-carre">isolate</div>
  </div>
</div>
```

#### CSS

```css
.isolation-auto {
  isolation: auto;
}

.isolation-isolate {
  isolation: isolate;
}

.grand-carre {
  background-color: lime;
  width: 200px;
  height: 210px;
}

.petit-carre {
  background-color: lime;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
```

#### Résultat

{{EmbedLiveSample("Forcer un nouveau contexte d'empilement pour un élément", 230, 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;blend-mode&gt;")}}
- Les propriétés {{CSSxRef("mix-blend-mode")}}, {{CSSxRef("background-blend-mode")}}
