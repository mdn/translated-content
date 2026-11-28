---
title: Propriété CSS `widows`
short-title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: e4ed2e4bfb88dab98ae65c44c134e3359b623d9b
---

La propriété [CSS](/fr/docs/Web/CSS) **`widows`** définit le nombre minimum de lignes qui peuvent être laissées en haut de [la page](/fr/docs/Web/CSS/Guides/Paged_media), la région ou [la colonne](/fr/docs/Web/CSS/Guides/Multicol_layout).

En typographie, une _veuve_ est la dernière ligne d'un paragraphe qui apparaît seule en haut d'une page. (Le paragraphe se poursuit à partir d'une page précédente.)

## Syntaxe

```css
/* Valeurs de type <integer> */
widows: 2;
widows: 3;

/* Valeurs globales */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Valeurs

Cette propriété est définie comme un `<integer>`&nbsp;:

- {{CSSxRef("&lt;integer&gt;")}}
  - : Cet entier indique le nombre minimum de lignes qui peuvent apparaître en haut d'une nouvelle page, région ou colonne lorsqu'une rupture intervient. Si la valeur est négative, la déclaration est invalide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Contrôler les lignes veuves dans les colonnes

Cet exemple utilise une case à cocher pour basculer la valeur de `widows` entre `2` et `1`. Avec `widows: 2`, au moins deux lignes d'un paragraphe doivent apparaître en haut d'une colonne. Avec `widows: 1`, le paragraphe peut être coupé n'importe où.

#### HTML

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
<form>
  <input type="checkbox" id="widows" checked />
  <label for="widows">Appliquer widows: 2</label>
</form>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  width: 400px;
  height: 160px;
  columns: 3;
  column-fill: auto;
  orphans: 1;
  widows: 1;
}

div:has(~ form input:checked) {
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Résultat

{{EmbedLiveSample("Exemple", "", 200)}}

Dans Firefox, qui ne prend pas en charge `widows`, le comportement dans cet exemple est essentiellement équivalent à `widows: 1`, quel que soit l'état de la case à cocher. La capture d'écran suivante montre le résultat avec `widows: 2` dans un navigateur compatible&nbsp;:

![Trois paragraphes dans trois colonnes. Le deuxième paragraphe s'étend sur la première et la deuxième colonne. Le troisième paragraphe a deux lignes en bas de la deuxième colonne et deux lignes en haut de la troisième colonne.](with-widows.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("orphans")}}
- [Les médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)
