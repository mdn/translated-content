---
title: isolation
slug: Web/CSS/isolation
---

{{CSSRef}}

La propriété **`isolation`** indique que l'élément crée un nouveau contexte d'empilement (_stacking context_).

{{EmbedInteractiveExample("pages/css/isolation.html")}}

Cette propriété s'avère particulièrement utile avec {{cssxref("mix-blend-mode")}} afin de ne mélanger que l'arrière plan d'un contexte d'empilement particulier.

## Syntaxe

```css
/* Valeurs avec mots-clés */
isolation: auto;
isolation: isolate;

/* Valeurs globales */
isolation: inherit;
isolation: initial;
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

### CSS

```css
.a {
  background-color: rgb(0, 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

### HTML

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', 230, 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
- {{cssxref("background-blend-mode")}}
