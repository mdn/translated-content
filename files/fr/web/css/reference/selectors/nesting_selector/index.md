---
title: Sélecteurs d'imbrication &
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le **sélecteur d'imbrication CSS `&`** indique explicitement la relation entre les règles parentes et enfants lors de l'utilisation de [l'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting). Il rend les sélecteurs de règles enfants imbriquées _relatifs à l'élément parent_. Sans le sélecteur d'imbrication `&`, le sélecteur de règle enfant cible les éléments enfants. Les sélecteurs de règles enfants ont le même poids de [spécificité](/fr/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) que s'ils étaient dans {{CSSxRef(":is()")}}.

> [!NOTE]
> _Règle enfant_ ne signifie pas _sélecteur d'élément enfant_. Une règle enfant peut cibler l'élément parent ou les éléments enfants selon l'utilisation du sélecteur d'imbrication `&`.

Si le sélecteur d'imbrication `&` n'est pas utilisé dans une règle de style imbriquée, il représente la [racine de portée](/fr/docs/Web/CSS/Reference/Selectors/:scope).

## Syntaxe

```css
parentRule {
  /* propriétés de style de la règle parente */
  & childRule {
    /* propriétés de style de la règle enfant */
  }
}
```

### Sélecteur d'imbrication `&` et espaces

Considérez le code suivant où l'imbrication est réalisée _sans_ le sélecteur d'imbrication `&`.

```css
.parent-rule {
  /* propriétés de style de la règle parente */
  .child-rule {
    /* propriétés de style de la règle enfant */
  }
}
```

Lorsque le navigateur analyse les sélecteurs imbriqués, il ajoute automatiquement un espace entre les sélecteurs pour créer une nouvelle règle CSS. Le code suivant montre l'équivalent sans imbrication&nbsp;:

```css
.parent-rule {
  /* propriétés de style de la règle parente */
}

.parent-rule .child-rule {
  /* propriétés de style pour les descendants .child-rule des ancêtres .parent-rule */
}
```

Lorsque la règle imbriquée doit être attachée (sans espace) à la règle parente, par exemple lors de l'utilisation d'une {{CSSxRef("Pseudo-classes", "pseudo-classe")}} ou de la création de [sélecteurs composés](/fr/docs/Web/CSS/Guides/Selectors/Selector_structure#sélecteur_composé), le sélecteur d'imbrication `&` doit être immédiatement préfixé pour obtenir l'effet souhaité.

Prenons un exemple où l'on souhaite styliser un élément, en fournissant des styles à appliquer en permanence, et en imbriquant certains styles à appliquer uniquement au survol. Si le sélecteur d'imbrication `&` n'est pas inclus, un espace est ajouté et on obtient un ensemble de règles qui applique les styles imbriqués à tout _descendant survolé du sélecteur de la règle parente_. Ce n'est cependant pas le comportement souhaité.

```css
.parent-rule {
  /* propriétés de style de la règle parente */
  :hover {
    /* propriétés de style de la règle enfant */
  }
}

/* le navigateur analyse les règles imbriquées ci-dessus comme indiqué ci-dessous */
.parent-rule {
  /* propriétés de style de la règle parente */
}

.parent-rule *:hover {
  /* propriétés de style de la règle enfant */
}
```

Avec le sélecteur d'imbrication `&` ajouté sans espace, les éléments correspondant à la règle parente seront stylisés lors du survol.

```css
.parent-rule {
  /* propriétés de style de la règle parente */
  &:hover {
    /* propriétés de style de la règle enfant */
  }
}

/* le navigateur analyse les règles imbriquées ci-dessus comme indiqué ci-dessous */
.parent-rule {
  /* propriétés de style de la règle parente */
}

.parent-rule:hover {
  /* propriétés de style de la règle enfant */
}
```

### Ajouter le sélecteur d'imbrication `&`

Le sélecteur d'imbrication `&` peut aussi être ajouté à la fin pour inverser le contexte des règles.

```css
.card {
  /* .card styles */
  .featured & {
    /* .featured .card styles */
  }
}

/* le navigateur analyse les règles imbriquées ci-dessus comme indiqué ci-dessous */

.card {
  /* .card styles */
}

.featured .card {
  /* .featured .card styles */
}
```

Le sélecteur d'imbrication `&` peut être placé plusieurs fois :

```css
.card {
  /* .card styles */
  .featured & & & {
    /* .featured .card .card .card styles */
  }
}

/* le navigateur analyse les règles imbriquées ci-dessus comme indiqué ci-dessous */

.card {
  /* .card styles */
}

.featured .card .card .card {
  /* .featured .card .card .card styles */
}
```

### Impossible de représenter les pseudo-éléments

Le sélecteur `&` est équivalent au sélecteur {{CSSxRef(":is()")}} et possède la même limitation que celui-ci, il ne peut pas représenter les pseudo-éléments.

Par exemple, avec la règle de style suivante, aucun contenu généré ne sera coloré en rouge, même lorsqu'il est imbriqué dans `<div class="important">`, car `.important :is(.foo::before)` ne peut rien cibler.

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red;
  }
}
```

Cette limitation s'applique également aux [règles imbriquées](/fr/docs/Web/CSS/Guides/Nesting/At-rules), dont les propriétés sont implicitement englobées dans un sélecteur `&`. Par exemple, avec la règle suivante, aucun contenu généré ne sera coloré en rouge, même sur un petit écran, car la propriété `color: red` est implicitement englobée dans un sélecteur `&`, qui correspond ici à `:is(.foo::before)`.

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red;
  }
}
```

## Examples

Les deux exemples suivants produisent le même résultat. Le premier utilise des styles CSS classiques et le second utilise le sélecteur d'imbrication `&`.

### Utiliser des styles CSS classiques

Cet exemple utilise des styles CSS classiques.

#### HTML

```html
<p class="example">
  Ce paragraphe <a href="#">contient un lien</a>, essayez de le survoler ou de
  le sélectionner.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser des styles CSS classiques", "100%", 65)}}

### Utiliser `&` dans des styles CSS imbriqués

Cet exemple utilise des styles CSS imbriqués.

#### HTML

```html
<p class="example">
  Ce paragraphe <a href="#">contient un lien</a>, essayez de le survoler ou de
  le sélectionner.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `&` dans des styles CSS imbriqués", "100%", 65)}}

### Utiliser `&` en dehors d'une règle imbriquée

Si le sélecteur d'imbrication `&` n'est pas utilisé dans une règle de style imbriquée, il représente la [racine de portée](/fr/docs/Web/CSS/Reference/Selectors/:scope).

```html
<p>
  Passez le curseur sur la boîte de sortie pour changer la couleur
  d'arrière-plan du document.
</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### Résultat

Dans ce cas, tous les styles s'appliquent au [document](/fr/docs/Web/API/Document).

{{EmbedLiveSample("Utiliser `&` en dehors d'une règle imbriquée", "100%", 65)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting/Using)
- Le module [d'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
- Le module [des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
