---
title: "@layer"
slug: Web/CSS/@layer
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) [CSS](/fr/docs/Web/CSS) **`@layer`** est utilisée pour déclarer une couche de cascade et peut également être utilisée afin de définir l'ordre de précédence lorsqu'il y a plusieurs couches de cascade.

## Syntaxe

```css
@layer nom-couche {regles}
@layer nom-couche;
@layer nom-couche, nom-couche, nom-couche;
@layer {regles}
```

où&nbsp;:

- `nom-couche`
  - : Est le nom de la couche de cascade.
- `regles`
  - : Est l'ensemble de règle CSS de la couche de cascade.

## Description

Les règles d'une même couche de cascade suivent la cascade ensemble, permettant un contrôle plus fin. Tous les styles qui n'appartiennent pas à une couche donnée sont placées dans une unique couche anonyme qui arrive après les couches déclarées, nommées et anonymes. Cela signifie que les styles déclarés en dehors d'une couche surchargeront les styles déclarés dans une couche, quelle que soit la spécificité.

La règle `@layer` permet de créer une couche de cascade de trois façons différentes.

La première façon consiste à créer une couche de cascade nommée et qui contient les règles CSS pour cette couche, comme ceci&nbsp;:

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

> **Note :** Lorsque les noms des couches sont déclarées, leur ordre est défini. On peut ensuite ajouter des règles CSS aux couches en redéclarant leur nom. Les styles sont ainsi ajoutés à la couche et l'ordre des couches reste inchangé.

La troisième façon consiste à créer une couche de cascade sans nom, par exemple&nbsp;:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Cela crée une _couche de cascade anonyme_. Cette couche fonctionne de façon analogue aux couches nommées. Toutefois, il n'est pas possible d'y affecter des règles après la déclaration. L'ordre de précédence des couches anonymes est l'ordre dans lequel les couches sont déclarées, qu'elles soient nommées ou non. La précédence d'une couche anonyme a une précédence inférieure aux styles déclarés en dehors d'une couche.

Une autre façon pour créer une couche de cascade consiste à utiliser [`@import`](/fr/docs/Web/CSS/@import). Dans ce cas, les règles associées proviendraient de la feuille de style importée.

> **Attention :** La règle @ `@import` doit précéder tous les autres types de règles, à l'exception des règles `@charset`.

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

```
@layer [ <layer-name># | <layer-name>?  {
  <stylesheet>
} ]
```

## Exemples

### Exemple simple

Dans l'exemple suivant, deux règles CSS sont créées. Une pour les éléments [`<p>`](/fr/docs/Web/HTML/Element/p) en dehors de toute couche et une pour ceux qui sont situés dans une couche intitulée `type` pour `.box p`.

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

{{EmbedLiveSample("")}}

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

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le future de CSS&nbsp;: les couches de cascade (en anglais)](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
