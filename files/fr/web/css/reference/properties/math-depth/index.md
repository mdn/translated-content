---
title: math-depth
slug: Web/CSS/Reference/Properties/math-depth
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`math-depth`** décrit une notion de _profondeur_ pour chaque élément d'une formule mathématique, par rapport au conteneur de niveau supérieur de cette formule. Cela est utilisé pour mettre à l'échelle la valeur calculée de la [taille de police](/fr/docs/Web/CSS/Reference/Properties/font-size) des éléments lorsque `font-size: math` est appliqué.

> [!NOTE]
> `font-size: math` est la valeur par défaut pour les éléments `<math>` dans [la feuille de style de l'agent utilisateur](https://w3c.github.io/mathml-core/#user-agent-stylesheet) du coeur MathML, il n'est donc pas nécessaire de la définir explicitement.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
math-depth: auto-add;

/* Valeurs relatives */
math-depth: add(2);
math-depth: add(-2);

/* Valeur absolue */
math-depth: 4;

/* Valeurs globales */
math-depth: inherit;
math-depth: initial;
math-depth: revert;
math-depth: revert-layer;
math-depth: unset;
```

### Valeurs

- `auto-add`
  - : Défini sur la `math-depth` héritée plus 1 lorsque le {{CSSxRef("math-style")}} hérité est `compact`.
- `add({{CSSxRef("&lt;integer&gt;")}})`
  - : Défini sur la `math-depth` héritée plus l'entier défini.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Défini sur l'entier donné.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la profondeur des sous-formules

L'exemple suivant montre l'effet de la modification de la propriété `math-depth` sur la taille de police des sous-formules.
Les chiffres dans chaque sous-formule indiquent la `math-depth` et le facteur d'échelle appliqué.

Le premier élément `<mtext>` est utilisé comme référence pour les autres sous-formules et n'a pas de styles spécifiques appliqués.
Les deuxième et troisième sous-formules ont `math-depth` défini sur `auto-add` et montrent l'effet de la mise à l'échelle en fonction du `math-style`.

Les deux dernières sous-formules montrent l'effet de la définition de `math-depth` sur une valeur spécifique.

#### HTML

```html
<p>
  <math>
    <mtext>0</mtext>

    <!-- la valeur auto-add n'a aucun effet lorsque math-style est normal -->
    <mrow style="math-style: normal">
      <mrow style="math-depth: auto-add">
        <mtext>0</mtext>
      </mrow>
    </mrow>

    <!-- le math-style hérité est compact, donc math-depth est défini sur 1 -->
    <mrow style="math-depth: auto-add">
      <mtext>1</mtext>
    </mrow>

    <mrow style="math-depth: add(2)">
      <mtext>2</mtext>
      <mrow style="math-depth: add(-1)">
        <mtext>1</mtext>
      </mrow>
      <mrow style="math-depth: 0">
        <mtext>0</mtext>
      </mrow>
    </mrow>
  </math>
</p>
```

```css hidden
p {
  font-size: 3rem;
  margin: 1rem 0;
}
```

#### Résultat

{{EmbedLiveSample("Définir la profondeur des sous-formules", 600, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-size")}}
- La propriété {{CSSxRef("math-style")}}
