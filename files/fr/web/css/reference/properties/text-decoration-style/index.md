---
title: text-decoration-style
slug: Web/CSS/Reference/Properties/text-decoration-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-style`** définit le style appliqué sur les lignes visées par {{CSSxRef("text-decoration-line")}}. Le style s'applique à toutes les lignes définies avec `text-decoration-line`.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-style")}}

```css interactive-example-choice
text-decoration-style: solid;
```

```css interactive-example-choice
text-decoration-style: double;
```

```css interactive-example-choice
text-decoration-style: dotted;
```

```css interactive-example-choice
text-decoration-style: dashed;
```

```css interactive-example-choice
text-decoration-style: wavy;
```

```html interactive-example
<section id="default-example">
  <p>
    Je préfère être
    <span class="transition-all" id="example-element"
      >heureux que d'avoir raison</span
    >
    n'importe quel jour.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-decoration-line: underline;
}
```

Si la mise en forme appliquée possède une sémantique forte (par exemple barrer le texte pour indiquer qu'il a été supprimé), on recommande aux auteurs d'utiliser les balises HTML associées si elles existent (par exemple {{HTMLElement("del")}} ou {{HTMLElement("s")}}). Les navigateurs peuvent parfois désactiver la mise en forme et ces éléments permettent de conserver la sémantique du contenu quoi qu'il arrive.

Lors de la définition de plusieurs propriétés de décoration de ligne en même temps, il peut être plus pratique d'utiliser la propriété raccourcie {{CSSxRef("text-decoration")}} à la place.

## Syntaxe

```css
/* Valeurs avec des mots-clés */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Valeurs globales */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: revert;
text-decoration-style: revert-layer;
text-decoration-style: unset;
```

### Valeurs

- `solid`
  - : Dessine une ligne.
- `double`
  - : Dessine une double-ligne.
- `dotted`
  - : Dessiner une ligne avec des points.
- `dashed`
  - : Dessine une ligne avec des tirets.
- `wavy`
  - : Dessine une ligne ondulée.
- `-moz-none`
  - : Ne dessine aucune ligne. Utilisez {{CSSxRef("text-decoration-line", "text-decoration-line: none")}} à la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un soulignement ondulé

Le code suivant crée un soulignement ondulé rouge&nbsp;:

#### CSS

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

#### HTML

```html
<p class="wavy">Et voilà le résultat.</p>
```

#### Résultat

{{EmbedLiveSample("Définir un soulignement ondulé")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Lors de la définition de plusieurs propriétés de décoration de ligne en même temps, il peut être plus pratique d'utiliser la propriété raccourcie {{CSSxRef("text-decoration")}} à la place.
- La propriété {{CSSxRef("text-decoration-line")}}
- La propriété {{CSSxRef("text-decoration-color")}}
- La propriété {{CSSxRef("text-decoration-thickness")}}
- La propriété {{CSSxRef("text-underline-offset")}}
