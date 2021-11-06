---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/text-combine-upright
---
{{CSSRef}}

La propriété **`text-combine-upright`** définit comment intégrer une combinaison de plusieurs caractères dans l'espace normalement alloué à un seul caractère. Si la combinaison obtenue est plus large qu'`1em`, l'agent utilisateur devra compresser le contenu afin qu'il tienne sur `1em`. La combinaison est ensuite manipulée comme un seul glyphe pour la disposition et pour la décoration. Enfin, cette propriété n'a d'effet que sur les modes d'écriture verticaux.

Cela permet d'obtenir un effet appelé tate-chū-yoko (縦中横) en japonais ou 直書橫向 en chinois.

```css
/* Valeurs avec un mot-clé */
text-combine-upright: none;
text-combine-upright: all;

/* Valeurs pour les chiffres */
/* 2 chiffres qui se suivent prendront la place
   d'un caractère dans du texte vertical */
text-combine-upright: digits;
/* Compresse jusqu'à 4 chiffres consécutifs afin
   qu'ils occupent l'espace d'un caractère dans
   du texte vertical */
text-combine-upright: digits 4;

/* Valeurs globales */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Aucun traitement particulier n'est appliqué.
- `all`
  - : L'agent utilisateur tente de compresser tous les caractères consécutifs dans une même boîte afin qu'ils occupent l'espace d'un seul caractère sur l'axe vertical de la boîte.
- `digits <n>?`
  - : L'agent utilisateur tente d'afficher une suite de chiffres ASCII (U+0030–U+0039) avec au plus n caractères afin que cette suite occupe l'espace d'un seul caractère sur l'axe vertical de la boîte. La valeur par défaut (lorsque l'entier n'est pas indiqué) vaut 2. Les entiers en dehors de l'intervalle `[2;4]` sont considérés comme invalides.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple avec `digits`

Utiliser ` digit``s ` nécessite moins de règles et déclarations mais n'est pas encore largement pris en charge par les navigateurs.

```html
<p lang="ja" class="exempleText">平成20年4月16日に</p>
```

```css
.exempleText {
  writing-mode: vertical-lr;
  text-combine-upright: digits 2;
  font: 36px serif;
}
```

{{EmbedLiveSample("Exemple_avec_digits", 100, 350, "https://mdn.mozillademos.org/files/12127/tate-chu-yoko.png")}}

### Exemple avec `all`

Pour utiliser `all`, on devra baliser chaque fragment de texte horizontal mais cette valeur est actuellement mieux prise en charge que `digits`.

```html
<p lang="zh-Hant">民國<span class="num">105</span
>年<span class="num">4</span
>月<span class="num">29</span>日</p>
```

```css
html { writing-mode: vertical-rl; font: 24px serif }
.num { text-combine-upright: all }
```

{{EmbedLiveSample("Exemple_avec_all", 250, 300, "https://mdn.mozillademos.org/files/13096/text-combine-upright-all.png")}}

## Spécifications

| Spécification                                                                                                            | État                                     | Commentaires                 |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------- |
| {{SpecName("CSS3 Writing Modes", "#propdef-text-combine-upright", "text-combine-upright")}} | {{Spec2("CSS3 Writing Modes")}} | Définition initiale.         |
| {{SpecName("CSS4 Writing Modes", "#propdef-text-combine-upright", "text-combine-upright")}} | {{Spec2("CSS4 Writing Modes")}} | Ajout de la valeur `digits`. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-combine-upright")}}

## Voir aussi

- {{cssxref("writing-mode")}},
- {{cssxref("text-orientation")}}
