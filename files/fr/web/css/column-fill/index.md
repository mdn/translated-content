---
title: column-fill
slug: Web/CSS/column-fill
---

{{CSSRef}}

La propriété **`column-fill`** permet de contrôler la façon dont le contenu est réparti entre les colonnes. Le contenu peut être équilibré (afin de prendre la même hauteur sur toutes les colonnes) ou être réparti de façon automatique (avec `auto`) et remplir l'espace nécessaire.

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* Valeurs globales */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
```

Cette propriété est définie grâce à l'un des mots-clés définis ci-après.

### Valeurs

- `auto`
  - : Un mot-clé indiquant que les colonnes sont remplies dans l'ordre.
- `balance`
  - : Un mot-clé indiquant que le contenu doit être équitablement réparti entre les colonnes. Pour les médias paginés, seule la dernière page est équilibrée.
- `balance-all`
  - : Un mot-clé indiquant que le contenu doit être équitablement réparti entre les colonnes. Pour les média paginés, toutes les pages sont équilibrées.

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
  column-fill: balance;
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
