---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
---

{{CSSRef}}

La propriété **`text-decoration-skip`** définit la façon dont les lignes décoratives doivent être appliquées aux éléments et aux caractères. Elle contrôle les lignes décoratives dessinées par l'élément courant ainsi que celles de ses ancêtres.

```css
/* Syntaxe avec un mot-clé */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;
text-decoration-skip: spaces;

/* Plusieurs mots-clés */
text-decoration-skip: object spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* Valeurs globales */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: unset;
```

> [!NOTE]
> La valeur `ink` initialement définie pour cette propriété a été déplacée vers la propriété {{cssxref("text-decoration-skip-ink")}}.

## Syntaxe

### Valeurs

- `none`
  - : La propriété `text-decoration` s'applique à tous les éléments sélectionnés.
- `objects`
  - : La propriété `text-decoration` n'est pas appliquée pour les éléments en lignes atomiques telles que les images ou les blocs en lignes.
- `spaces`
  - : Les décorations ne sont pas appliquées où il y a des espaces (c'est-à-dire [des caractères Unicode considérés comme des blancs](https://www.unicode.org/reports/tr44/#White_Space), des séparateurs de mots et toute propriété {{cssxref("letter-spacing")}} ou {{cssxref("word-spacing")}} adjacente).
- `leading-spaces`
  - : Comportement analogue à `spaces` mais seuls les espaces avant les mots sont ignorés.
- `trailing-spaces`
  - : Comportement analogue à `spaces` mais seuls les espaces après les mots sont ignorés.
- `edges`
  - : La décoration de `text-decoration` est rognée vers l'intérieur de la moitié de la largueur de la ligne, vers la droite et la gauche. ![An example of "text-decoration-skip: edges;".](decoration-skip-edges.png)
- `box-decoration`
  - : La propriété `text-decoration` n'est pas appliquée pour les marges, bordures et zones de remplissage (_padding_) des éléments fils.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edge;
}
```

### HTML

```html
<p>Bonjour tout le monde, quelle journée !</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
