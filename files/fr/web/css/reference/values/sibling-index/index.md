---
title: Fonction CSS `sibling-index()`
short-title: sibling-index()
slug: Web/CSS/Reference/Values/sibling-index
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sibling-index()`** retourne un entier représentant la position actuelle de l'élément dans l'arbre DOM par rapport à tous ses éléments voisins. La valeur retournée est le numéro d'indice de la position de l'enfant contextuel parmi tous les éléments voisins au sein d'un élément parent, le premier enfant retournant `1` et le dernier enfant retournant la `longueur` de {{DOMxRef("Element.children")}}.

> [!NOTE]
> Comme la pseudo-classe {{CSSxRef(":nth-child()")}}, `sibling-index()` commence à 1, et non à 0.

> [!NOTE]
> La fonction {{CSSxRef("counter()")}} fournit un résultat similaire mais retourne une chaîne de caractères (`<string>`) (ce qui est plus adapté pour le [contenu généré](/fr/docs/Web/CSS/Guides/Generated_content)), tandis que `sibling-index()` retourne un entier (`<integer>`) (qui peut être utilisé pour des calculs).

{{InteractiveExample("Démonstration CSS&nbsp;: sibling-index()")}}

```css interactive-example-choice
--width: calc(sibling-index() * 30px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 20px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 10px);
```

```css interactive-example-choice
--width: 100px;
```

```html interactive-example
<ul id="example-element">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css interactive-example
#example-element {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

#example-element > li {
  text-align: center;
  padding: 2px;
  border-radius: 8px;
  width: var(--width, calc(sibling-index() * 30px));
  color: white;
  background-color: hsl(
    calc(360deg / sibling-count() * sibling-index()) 50% 50%
  );
}
```

## Syntaxe

```css-nolint
sibling-index()
```

### Paramètres

La fonction `sibling-index()` n'accepte aucun paramètre.

### Valeur de retour

Un entier&nbsp;; la position de l'élément actuel dans l'ordre des éléments voisins de l'arbre DOM.

## Exemples

### Largeur de liste dynamique

Cet exemple montre comment augmenter dynamiquement la largeur de chaque élément HTML {{HTMLElement("li")}} dans le {{HTMLElement("ul")}} de `50px`.

#### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 50px);
  background-color: #ffaaaa;
}
```

#### Résultat

{{EmbedLiveSample("Largeur de liste dynamique", 300, 100)}}

### Animations séquentielles

Combiner `sibling-index()` avec les animations CSS ouvre de nouvelles possibilités. Dans cet exemple, l'opacité des éléments est animée dans l'ordre séquentiel en définissant un {{CSSxRef("animation-delay")}} basé sur leur position dans le DOM.

#### HTML

Nous incluons un conteneur avec quatre enfants&nbsp;:

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
</ul>
```

#### CSS

Nous appliquons l'animation `fade-in` à chaque élément. Nous utilisons la fonction `sibling-index()` dans une fonction {{CSSxRef("calc()")}} pour définir la durée de l'animation ({{CSSxRef("animation-delay")}}) en fonction de la position de l'élément dans l'ordre source. Le mode de remplissage de l'animation ({{CSSxRef("animation-fill-mode")}}) applique une image clé à `0%` de l'animation jusqu'à ce que la `animation-duration` expire.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Résultats

{{EmbedLiveSample("Animations séquentielles", 300, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sibling-count()")}}
- La fonction {{CSSxRef("counter()")}}
