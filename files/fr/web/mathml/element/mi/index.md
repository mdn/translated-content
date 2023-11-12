---
title: mi
slug: Web/MathML/Element/mi
---

L'élément MathML `<mi>` indique que le contenu doit être affiché comme un **identifiant** (comme les noms de fonctions, de variables ou les constantes symboliques). Il est également possible de l'utiliser avec du texte en général pour annoter.

## Attributs

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- dir
  - : Le sens de lecture du texte. Les valeurs possibles sont soit `ltr` (_left to right_ pour gauche à droite) or `rtl` (_right to left_ pour droite à gauche).
- href
  - : Un hyperlien pointant vers un URI donné.
- mathbackground
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathsize

  - : La taille du contenu. Les valeurs possibles sont :

    - `small :` La police utilisée sera plus petite que la police courante.
    - `normal :` Équivalent à 100% ou 1em.
    - `big :` La police utilisée sera plus grande que la police courante.
    - Une [longueur quelconque](/fr/docs/CSS/longueur).
    - ou une valeur sans unité qui multiplie la taille par défaut.

- mathvariant (implémenté en partie : voir [bug Firefox 114365](https://bugzil.la/114365) et [bug Firefox 162405](https://bugzil.la/162405))

  - : La classe logique des identifiants, variant selon la typographie. Cela veut dire que, bien que les noms suggèrent une certaine mise en forme, les éléments d'une même classe seront traités de la même manière au sein d'une même expression. Cela peut, ou pas, impliquer un affichage avec la typographie mentionnée. Les valeurs suivantes sont autorisées :

    - `normal` (La valeur par défaut pour plus d'un caractère)
    - `bold`
    - `italic` (La valeur par défaut pour un seul caractère)
    - `bold-italic`

    <!---->

    - `double-struck` {{ unimplemented_inline() }}
    - `bold-fraktur` {{ unimplemented_inline() }} (la mise en gras fonctionne)
    - `script` {{ unimplemented_inline() }}
    - `bold-script` {{ unimplemented_inline() }} (la mise en gras fonctionne)
    - `fraktur` {{ unimplemented_inline() }}

    <!---->

    - `sans-serif`
    - `bold-sans-serif`
    - `sans-serif-italic`
    - `sans-serif-bold-italic`
    - `monospace`

    <!---->

    - `initial` {{ unimplemented_inline() }}
    - `tailed` {{ unimplemented_inline() }}
    - `looped` {{ unimplemented_inline() }}
    - `stretched` {{ unimplemented_inline() }}

## Exemples

```html
<math>
  <mi> y </mi>

  <mi> sin </mi>

  <mi mathvariant="monospace"> x </mi>

  <mi mathvariant="bold"> &pi; </mi>
</math>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
