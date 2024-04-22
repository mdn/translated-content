---
title: widows
slug: Web/CSS/widows
---

{{CSSRef}}

La propriété **`widows`** définit le nombre minimum de lignes qui peuvent être laissées en haut de la [page](/fr/docs/Web/CSS/Medias_paginés), région ou [colonne](/fr/docs/Web/CSS/Colonnes_CSS) suivante. En utilisant la propriété `widows`, on évite d'avoir des veuves sur une seule ligne.

```css
/* Valeurs entières */
/* type <integer> */
widows: 2;
widows: 3;

/* Valeurs globales */
widows: inherit;
widows: initial;
widows: unset;
```

> **Note :** En typographie, une ligne veuve est la dernière ligne d'un paragraphe qui apparaît seule en haut d'une nouvelle page (alors que le paragraphe démarrait sur une page antérieure).

## Syntaxe

### Valeurs

- `<integer>`
  - : Cet entier indique le nombre minimum de lignes qui peuvent apparaître en haut d'une nouvelle page, région ou colonne lorsqu'une rupture intervient. Si la valeur est négative, la déclaration est invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

### HTML

```html
<div>
  <p>Un premier paragraphe avec un peu de texte.</p>
  <p>
    Un deuxième paragraphe avec un peu plus de texte et qui permet d'illustrer
    le fonctionnement de widows.
  </p>
  <p>
    Enfin, un troisième paragraphe avec un peu plus de texte que le premier.
  </p>
</div>
```

### Résult

{{EmbedLiveSample("Exemple", 400, 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("orphans")}}
- [Médias paginés](/fr/docs/Web/CSS/Medias_paginés)
