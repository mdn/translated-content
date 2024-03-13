---
title: orphans
slug: Web/CSS/orphans
---

{{CSSRef}}

La propriété **`orphans`** définit le nombre _minimum_ de lignes qui doivent rester en bas d'une [page](/fr/docs/Web/CSS/Média_paginés), d'une région ou d'une [colonne](/fr/docs/Web/CSS/Colonnes_CSS) dans un conteneur de bloc.

```css
/* Valeur numérique entière */
orphans: 3;

/* Valeurs globales */
orphans: inherit;
orphans: initial;
orphans: unset;
```

> **Note :** En typographie, un orphelin (_orphan_ en anglais) est la première ligne d'un paragraphe qui apparaît isolée en bas d'une page (le paragraphe poursuivant sur la page suivante).

## Syntaxe

### Valeurs

- `<integer>`
  - : Seules les valeurs positives sont autorisées. Le nombre de lignes qu'on souhaite avoir au minimum avant une rupture.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p class="exemple">
  Tout en causant ainsi, Alice était entrée dans une petite chambre bien rangée,
  et, comme elle s’y attendait, sur une petite table dans l’embrasure de la
  fenêtre, elle vit un éventail et deux ou trois paires de gants de chevreau
  tout petits. Elle en prit une paire, ainsi que l’éventail, et allait quitter
  la chambre lorsqu’ elle aperçut, près du miroir, une petite bouteille. Cette
  fois il n’y avait pas l’inscription BUVEZ-MOI — ce qui n’empêcha pas Alice de
  la déboucher et de la porter à ses lèvres. « Il m’arrive toujours quelque
  chose d’intéressant, » se dit-elle, « lorsque je mange ou que je bois. Je vais
  voir un peu l’effet de cette bouteille. J’espère bien qu’elle me fera
  regrandir, car je suis vraiment fatiguée de n’être qu’une petite nabote !
  »C’est ce qui arriva en effet, et bien plus tôt qu’elle ne s’y attendait. Elle
  n’avait pas bu la moitié de la bouteille, que sa tête touchait au plafond et
  qu’elle fut forcée de se baisser pour ne pas se casser le cou. Elle remit bien
  vite la bouteille sur la table en se disant : « En voilà assez ; j’espère ne
  pas grandir davantage. Je ne puis déjà plus passer par la porte. Oh ! je
  voudrais bien n’avoir pas tant bu ! »
</p>
```

### CSS

```css
.exemple {
  orphans: 4;
  columns: 3;
}
```

### Résultat

{{EmbedLiveSample("Exemples","600","500")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("widows")}}
- [Média paginés](/fr/docs/Web/CSS/Média_paginés)
