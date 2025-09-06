---
title: visibility
slug: Web/CSS/visibility
---

{{CSSRef}}

La propriété **`visibility`** peut être utilisée afin de cacher un élément tout en conservant occupé l'espace dans lequel il aurait été visible. Elle permet aussi de masquer des lignes ou des colonnes dans un tableau (cf. {{HTMLElement("table")}}).

{{InteractiveExample("CSS Demo: visibility")}}

```css interactive-example-choice
visibility: visible;
```

```css interactive-example-choice
visibility: hidden;
```

```css interactive-example-choice
visibility: collapse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Hide me</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

> [!NOTE]
> Afin de cacher un élément et de le retirer de la disposition du document, on utilisera plutôt la propriété {{cssxref("display")}} avec la valeur `none`.

## Syntaxe

```css
/* Avec un mot-clé */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Valeurs globales */
visibility: inherit;
visibility: initial;
visibility: unset;
```

La propriété `visibility` est définie avec l'un des mots-clés suivants.

### Valeurs

- `visible`
  - : La valeur par défaut, la boîte est visible.
- `hidden`
  - : La boîte est invisible (totalement transparente, rien n'est dessiné) mais continue d'avoir un impact sur la disposition. Les fils de l'élément seront visibles s'ils ont `visibility:visible`. L'élément ne pourra plus recevoir le focus (cf. [la navigation au clavier avec les tabulations](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Le mot-clé `collapse` a différents effets selon les éléments :
    - Pour les lignes, les colonnes, les groupes de lignes et les groupes de colonnes d'un tableau, les éléments sont masqués et l'espace occupé est retiré (comme si on avait appliqué `{{cssxref("display")}}: none` aux colonnes/lignes du tableau). La taille des autres lignes et colonnes continue d'être calculée comme si les lignes et colonnes masquées étaient présentes. Cela a été conçu afin de pouvoir retirer rapidement des lignes et/ou des colonnes sans avoir à recalculer les dimensions pour l'ensemble du tableau.
    - Les éléments flexibles sont masqués et l'espace qu'ils auraient occupé est retiré.
    - Pour les éléments XUL, la taille calculée des éléments vaut toujours zéro, quel que soit les autres styles qui pourraient affecter la taille, les marges continuent de s'appliquer.
    - Pour les autres éléments, `collapse` est traité comme `hidden`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Interpolation

Les valeurs de visibilité peuvent être interpolées entre _visible_ et _masqué_. L'une des valeurs de début ou de fin doit donc être `visible`, sinon il n'y aura pas d'interpolation. L'interpolation est discrète (passage direct d'un état à l'autre), les valeurs supérieures à 0 sont considérées équivalentes à `visible`. On pourra plutôt utiliser {{cssxref("opacity")}} pour créer un effet doux plutôt que de masquer/rendre visible l'élément brusquement.

## Exemples

### Exemple simple

#### HTML

```html
<p>
  On peut dire tout ce qu'on veut ici, ce ne sera pas lisible de toute façon.
</p>
<p class="coucou">
  Alors que là, on a la bonne classe. Coucou tout le monde :)
</p>
<p>Et on repasse en mode invisible.</p>
```

#### CSS

```css
p {
  /* les paragraphes ne seront pas visibles */
  visibility: hidden;
}

p.coucou {
  /* sauf ceux avec la classe coucou */
  visibility: visible;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Exemple sur un tableau

#### HTML

```html
<table>
  <tr>
    <td>Jean</td>
    <td>Biche</td>
  </tr>
  <tr class="col">
    <td>Hit</td>
    <td>Girl</td>
  </tr>
  <tr>
    <td>Super</td>
    <td>Cochon</td>
  </tr>
</table>
```

#### CSS

```css
tr.col {
  /* les lignes de tableau avec la classe */
  /* col seront repliées */
  visibility: collapse;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_sur_un_tableau")}}

## Accessibilité

Utiliser la propriété `visibility` avec la valeur `hidden` retirera l'objet de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Les éléments ciblés, ainsi que leurs éléments descendants ne seront plus annoncés par les lecteurs d'écran.

## Notes

- Le support de `visibility:collapse` est absent ou incorrect pour certains navigateurs récents. Dans de nombreux cas, il n'est pas correctement traité comme `visibility:hidden` sur les éléments qui ne sont pas des lignes et/ou des colonnes de tableau.
- `visibility:collapse` peut modifier la disposition d'un tableau si le tableau possède des tableaux imbriqués dont les cellules sont repliées, sauf si `visibility:visible` est défini explicitement sur les tableaux imbriqués.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("display")}}
- {{cssxref("opacity")}}
