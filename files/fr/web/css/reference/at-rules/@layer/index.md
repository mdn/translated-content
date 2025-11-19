---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
original_slug: Web/CSS/@layer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@layer`** est utilisée pour déclarer une couche de cascade et peut également être utilisée afin de définir l'ordre de précédence lorsqu'il y a plusieurs couches de cascade.

{{InteractiveExample("Démonstration CSS&nbsp;: @layer", "tabbed-standard")}}

```css interactive-example
@layer module, state;

@layer state {
  .alert {
    background-color: brown;
  }
  p {
    border: medium solid limegreen;
  }
}

@layer module {
  .alert {
    border: medium solid violet;
    background-color: yellow;
    color: white;
  }
}
```

```html interactive-example
<p class="alert">Attention aux zombies</p>
```

## Syntaxe

```css
/* déclaration de règle @ */
@layer nom-couche;
@layer nom-couche, nom-couche, nom-couche;

/* règle @ en bloc */
@layer {regles}
@layer nom-couche {regles}
```

où&nbsp;:

- `nom-couche`
  - : Est le nom de la couche de cascade.
- `regles`
  - : Est l'ensemble de règle CSS de la couche de cascade.

## Description

Les règles à l'intérieur d'une couche de cascade sont évaluées ensemble, ce qui donne plus de contrôle sur la cascade aux développeur·euse·s web. Les styles qui ne sont pas définis dans une couche l'emportent toujours sur les styles déclarés dans des couches nommées ou anonymes.

Le schéma suivant montre les priorités des couches selon l'ordre de déclaration&nbsp;: 1, 2, ..., N.

![Schéma illustrant les priorités des couches de cascade](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Comme indiqué dans le schéma ci-dessus, les _déclarations importantes_ (celles avec le drapeau `!important`) ont priorité sur les _déclarations normales_ (celles sans le drapeau `!important`). L'ordre de précédence entre les règles importantes est l'inverse de celui des règles normales. Les transitions ont la plus grande précédence. Viennent ensuite, de la plus haute à la plus basse priorité&nbsp;: les déclarations importantes de l'{{glossary("user agent", "agent utilisateur")}}, les déclarations importantes de l'utilisateur·rice, puis les déclarations importantes de l'auteur·ice (développeur·euse web), dans cet ordre. Les utilisateur·ice·s peuvent spécifier des styles via les préférences du navigateur, du système d'exploitation ou des extensions. Leurs déclarations importantes l'emportent sur celles écrites par l'auteur·ice ou le·la développeur·euse.

Dans les styles de l'auteur·ice, toutes les déclarations importantes à l'intérieur des couches CSS l'emportent sur les déclarations importantes en dehors d'une couche, tandis que toutes les déclarations normales à l'intérieur des couches CSS ont une priorité inférieure à celles déclarées en dehors d'une couche.
L'ordre de déclaration est important&nbsp;: la première couche déclarée a la priorité la plus faible et la dernière la plus forte. Cependant, la priorité est inversée lorsque le drapeau [`!important`](/fr/docs/Web/CSS/important) est utilisé.

La règle @ `@layer` est utilisée pour créer une couche de cascade de trois façons.

La première consiste à utiliser une règle @ `@layer` en bloc pour créer une couche de cascade nommée, avec les règles CSS de cette couche à l'intérieur, comme ceci&nbsp;:

```css
@layer utilities {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

La seconde méthode consiste à créer une couche de cascade nommée sans lui affecter de styles. Il peut s'agir d'une seule couche&nbsp;:

```css
@layer utilities;
```

Comme il peut s'agir de plusieurs couches&nbsp;:

```css
@layer theme, layout, utilities;
```

Comme l'ordre initial dans lequel sont déclarés les couches indique la précédence entre les couches, il est utile d'en déclarer plusieurs ainsi. Comme pour les déclarations, c'est la dernière couche listée qui l'emporte si les mêmes déclarations sont trouvées dans plusieurs couches. Ainsi, dans l'exemple précédent, si une règle était à la fois trouvée dans `theme` et dans `utilities`, ce serait celle de `utilities` qui l'emporterait et qui s'appliquerait.

Une règle présente dans `utilities` s'appliquerait _même si sa spécificité est inférieure_ à celle de la règle dans `theme`. En effet, dès lors que l'ordre des couches a été établi, la spécificité et l'ordre d'apparence sont ignorés. Cela permet la création de sélecteurs CSS plus simples, car il n'est pas nécessaire de s'assurer qu'un sélecteur a une spécificité suffisamment élevée pour l'emporter sur les autres règles, il suffit de s'assurer qu'il apparaît dans une couche qui arrive après.

> [!NOTE]
> Lorsque les noms des couches sont déclarées, leur ordre est défini. On peut ensuite ajouter des règles CSS aux couches en redéclarant leur nom. Les styles sont ainsi ajoutés à la couche et l'ordre des couches reste inchangé.

La troisième façon consiste à créer une couche de cascade sans nom, par exemple&nbsp;:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Cela crée une _couche de cascade anonyme_. Cette couche fonctionne de façon analogue aux couches nommées. Toutefois, il n'est pas possible d'y affecter des règles après la déclaration. L'ordre de précédence des couches anonymes est l'ordre dans lequel les couches sont déclarées, qu'elles soient nommées ou non. La précédence d'une couche anonyme a une précédence inférieure aux styles déclarés en dehors d'une couche.

Une autre façon pour créer une couche de cascade consiste à utiliser [`@import`](/fr/docs/Web/CSS/Reference/At-rules/@import). Dans ce cas, les règles associées proviendraient de la feuille de style importée.

```css
@import "theme.css" layer(utilities);
```

### Couches imbriquées

Les couches peuvent être imbriquées, on peut par exemple avoir&nbsp;:

```css
@layer framework {
  @layer layout {
  }
}
```

Pour ajouter des règles à la couche `layout` située à l'intérieur de `framework`, on concaténera les deux noms avec un point `.`.

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

Dans l'exemple suivant, deux règles CSS sont créées. Une pour les éléments [`<p>`](/fr/docs/Web/HTML/Reference/Elements/p) en dehors de toute couche et une pour ceux qui sont situés dans une couche intitulée `type` pour `.box p`.

Sans couche, le sélecteur `.box p` aurait la plus haute spécificité et le texte `Coucou le monde !` serait alors affiché en vert. La couche `type` arrivant avant la couche anonyme pour gérer le contenu qui n'est pas affecté à une couche, le texte sera en violet.

On fera attention à l'ordre, bien que le style qui n'est pas affecté à une couche soit déclaré en premier, il est bien appliqué _après_ les styles des couches.

#### HTML

```html
<div class="box">
  <p>Coucou le monde !</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### Résultat

{{EmbedLiveSample("exemple_simple")}}

### Affecter des règles à des couches existantes

Dans l'exemple qui suit, on crée deux couches sans leur affecter de règle puis les règles CSS sont appliquées aux deux couches. La couche `base` définit des valeurs pour les propriétés `color`, `border`, `font-size`, et `padding`. La couche `special` définit une couleur différente. `special` arrivant en dernier lors de la définition des couches, c'est la couleur qu'elle fournit qui est utilisée et le texte est affiché avec la couleur `rebeccapurple`. Toutes les autres règles de `base` continuent de s'appliquer.

#### HTML

```html
<div class="item">
  Je m'affiche avec <code>color: rebeccapurple</code> car la couche
  <code>special</code> arrive après <code>base</code> dans les déclarations. Ma
  bordure verte, la taille du texte et le remplissage viennent de la couche
  <code>base</code>.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### Résultat

{{EmbedLiveSample("affecter_des_règles_à_des_couches_existantes")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@import")}}
- {{domxref("CSSLayerBlockRule")}}
- {{domxref("CSSLayerStatementRule")}}
- {{cssxref("important", "!important")}}
- {{cssxref("revert-layer")}}
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Apprendre&nbsp;: Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Apprendre&nbsp;: Les couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [L'avenir du CSS&nbsp;: les couches de cascade <sup>(angl.)</sup>](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) sur bram.us (2021)
