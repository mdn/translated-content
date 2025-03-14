---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`text-combine-upright`** définit comment intégrer une combinaison de plusieurs caractères dans l'espace normalement alloué à un seul caractère. Si la combinaison obtenue est plus large qu'`1em`, l'agent utilisateur devra compresser le contenu afin qu'il tienne sur `1em`. La combinaison est ensuite manipulée comme un seul glyphe pour la disposition et pour la décoration. Enfin, cette propriété n'a d'effet que sur les modes d'écriture verticaux.

Cela permet d'obtenir un effet appelé «&nbsp;tate-chū-yoko (縦中横)&nbsp;» en japonais ou «&nbsp;直書橫向&nbsp;» en chinois.

```css
/* Valeurs avec un mot-clé */
text-combine-upright: none;
text-combine-upright: all;

/* Valeurs pour les chiffres */
text-combine-upright: digits; /* 2 chiffres qui se suivent prendront la place d'un caractère dans du texte 
                                   vertical */
text-combine-upright: digits 4; /* Compresse jusqu'à 4 chiffres consécutifs afin qu'ils occupent l'espace 
                                   d'un caractère dans du texte vertical */

/* Valeurs globales */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Aucun traitement particulier n'est appliqué.
- `all`
  - : L'agent utilisateur tente de compresser tous les caractères consécutifs dans une même boîte afin qu'ils occupent l'espace d'un seul caractère sur l'axe vertical de la boîte.
- `digits <n>?`
  - : L'agent utilisateur tente d'afficher une suite de chiffres ASCII (U+0030-U+0039) avec au plus n caractères afin que cette suite occupe l'espace d'un seul caractère sur l'axe vertical de la boîte. La valeur par défaut (lorsque l'entier n'est pas indiqué) vaut 2. Les entiers en dehors de l'intervalle `[2;4]` sont considérés comme invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple avec `digits`

Utiliser `digits` nécessite moins de règles et déclarations mais n'est pas encore largement pris en charge par les navigateurs.

#### HTML

```html
<p lang="ja" class="texteExemple">平成20年4月16日に</p>
```

#### CSS

```css
.texteExemple {
  writing-mode: vertical-lr;
  text-combine-upright: digits 2;
  font: 36px serif;
}
```

#### Résultat

{{EmbedLiveSample('', 100, 350, "tate-chu-yoko.png")}}

### Exemple avec `all`

Pour utiliser `all`, on devra baliser chaque fragment de texte horizontal mais cette valeur est actuellement mieux prise en charge que `digits`.

#### HTML

```html
<p lang="zh-Hant">
  民國<span class="num">105</span>年<span class="num">4</span>月<span
    class="num"
    >29</span
  >日
</p>
```

#### CSS

```css
html {
  writing-mode: vertical-rl;
  font: 24px serif;
}
.num {
  text-combine-upright: all;
}
```

#### Résultat

{{EmbedLiveSample('', 250, 300, "text-combine-upright-all.png")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`writing-mode`](/fr/docs/Web/CSS/writing-mode),
- [`text-orientation`](/fr/docs/Web/CSS/text-orientation)
