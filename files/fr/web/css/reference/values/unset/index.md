---
title: Mot-clé CSS `unset`
short-title: unset
slug: Web/CSS/Reference/Values/unset
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Le mot-clé [CSS](/fr/docs/Web/CSS) **`unset`** réinitialise une propriété à sa valeur héritée si la propriété hérite naturellement de son parent, et à sa [valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) sinon. En d'autres termes, il se comporte comme le mot-clé {{CSSxRef("inherit")}} dans le premier cas, lorsque la propriété est une [propriété héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#propriétés_héritées), et comme le mot-clé {{CSSxRef("initial")}} dans le second cas, lorsque la propriété est une [propriété non héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#propriétés_non_héritées).

**`unset`** peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie CSS {{CSSxRef("all")}}.

## Exemples

### `color`

[`color`](/fr/docs/Web/CSS/Reference/Properties/color#définition_formelle) est une propriété héritée.

#### HTML

```html
<p>Ce texte est rouge.</p>
<div class="toto">
  <p>Ce texte est aussi rouge.</p>
</div>
<div class="truc">
  <p>Ce texte est vert (valeur héritée par défaut).</p>
</div>
```

#### CSS

```css
.toto {
  color: blue;
}

.truc {
  color: green;
}

p {
  color: red;
}

.truc p {
  color: unset;
}
```

#### Résultat

{{EmbedLiveSample("`color`")}}

### `border`

[`border`](/fr/docs/Web/CSS/Reference/Properties/border#définition_formelle) est une propriété non héritée.

#### HTML

```html
<p>Ce texte a une bordure rouge.</p>
<div class="toto">
  <p>Ce texte a une bordure rouge</p>
</div>
<div class="truc">
  <p>Ce texte a une bordure noire (la valeur initiale, non héritée)</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.truc p {
  border-color: unset;
}
```

#### Résultat

{{EmbedLiveSample("`border`", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Utilisez le mot-clé {{CSSxRef("initial")}} pour définir une propriété à sa valeur initiale.
- Utilisez le mot-clé {{CSSxRef("inherit")}} pour que la propriété d'un élément soit la même que celle de son parent.
- Utilisez le mot-clé {{CSSxRef("revert")}} pour réinitialiser une propriété à la valeur établie par la feuille de style de l'agent utilisateur (ou par les styles utilisateur·ice, le cas échéant).
- Utilisez le mot-clé {{CSSxRef("revert-layer")}} pour réinitialiser une propriété à la valeur établie dans une couche de cascade précédente.
- Utilisez le mot-clé {{CSSxRef("revert-rule")}} pour réinitialiser une propriété à la valeur d'une règle de style correspondante antérieure.
- La propriété {{CSSxRef("all")}} permet de réinitialiser toutes les propriétés à leur état initial, hérité, rétabli ou non défini.
