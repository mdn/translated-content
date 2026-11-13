---
title: Mot-clé CSS `initial`
short-title: initial
slug: Web/CSS/Reference/Values/initial
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Le mot-clé [CSS](/fr/docs/Web/CSS) **`initial`** applique la [valeur initiale (ou par défaut)](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) d'une propriété à un élément. Il peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie CSS {{CSSxRef("all")}}. En définissant `all` sur `initial`, toutes les propriétés CSS peuvent être rétablies à leurs valeurs initiales respectives en une seule fois, au lieu de les rétablir séparément.

Pour les [propriétés héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#propriétés_héritées), la valeur initiale peut être inattendue. Vous devriez envisager d'utiliser les mots-clés {{CSSxRef("inherit")}}, {{CSSxRef("unset")}}, {{CSSxRef("revert")}}, {{CSSxRef("revert-layer")}} ou {{CSSxRef("revert-rule")}} à la place.

## Exemples

### Utilisation simple

Dans cet exemple, nous utilisons le mot-clé `initial` pour réinitialiser les valeurs des propriétés {{CSSxRef("color")}} et {{CSSxRef("font-size")}} d'un élément.

#### HTML

```html
<p>
  Ce texte est rouge et grand.
  <em
    >Ce texte est avec la couleur initiale (typiquement noire) et la taille
    initiale (typiquement 16px).</em
  >
  Ce texte est rouge et grand à nouveau.
</p>
```

#### CSS

Nous définissons `color` et `font-size` sur l'élément `<p>`, puis nous définissons ces propriétés sur `initial` sur l'élément HTML {{HTMLElement("em")}} pour les réinitialiser.

```css
p {
  color: red;
  font-size: 2rem;
}

em {
  color: initial;
  font-size: initial;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple")}}

Avec le mot-clé `initial` dans cet exemple, les valeurs de `color` et `font-size` sur l'élément `em` sont restaurées aux valeurs initiales pour [`color`](/fr/docs/Web/CSS/Reference/Properties/color#définition_formelle) et [`font-size`](/fr/docs/Web/CSS/Reference/Properties/font-size#définition_formelle), respectivement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les mots-clés {{CSSxRef("inherit")}}, {{CSSxRef("revert")}}, {{CSSxRef("revert-layer")}}, {{CSSxRef("revert-rule")}} et {{CSSxRef("unset")}}
- La propriété {{CSSxRef("all")}}
- [L'héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
