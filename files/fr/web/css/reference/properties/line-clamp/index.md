---
title: Propriété CSS `line-clamp`
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

La propriété [CSS](/fr/docs/Web/CSS) **`line-clamp`** permet de limiter le contenu d'un {{Glossary("block", "bloc")}} au nombre de lignes indiqué.

> [!NOTE]
> Pour la compatibilité avec les anciennes versions, la propriété préfixée par le fournisseur `-webkit-line-clamp` ne fonctionne qu'en combinaison avec la propriété {{CSSxRef("display")}} définie à `-webkit-box` ou `-webkit-inline-box` et la propriété {{CSSxRef("box-orient", "-webkit-box-orient")}} définie à `vertical`. Bien que ces propriétés préfixées soient obsolètes, la co-dépendance de ces trois propriétés est un comportement entièrement défini et continue d'être pris en charge.

Dans la plupart des cas, vous voulez également définir {{CSSxRef("overflow")}} à `hidden`, sinon le contenu n'est pas rogné mais une ellipse est tout de même affichée après le nombre de lignes indiqué.

Lorsqu'elle est appliquée à des éléments d'ancrage, la troncature peut se produire au milieu du texte, pas nécessairement à la fin.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
line-clamp: none;

/* Valeurs de type <integer> */
line-clamp: 3;
line-clamp: 10;

/* Valeurs globales */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Valeurs

Cette propriété est définie avec une seule valeur parmi la liste suivante&nbsp;:

- `none`
  - : Cette valeur indique que le contenu n'est pas rogné.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Cette valeur indique le nombre de lignes après lequel tronquer le contenu. Cette valeur doit être supérieure à 0.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tronquer un paragraphe

### HTML

```html
<p>
  Dans cet exemple <code>-webkit-line-clamp</code> vaut <code>3</code>, ce qui
  signifie que le texte est rogné après trois lignes. Une ellipse est affichée à
  n lignes de l'endroit où le texte est tronqué.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### Résultat

{{EmbedLiveSample("Tronquer un paragraphe", "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Limiter le texte sur plusieurs lignes <sup>(angl.)</sup>](https://css-tricks.com/line-clampin/) sur CSS-Tricks
