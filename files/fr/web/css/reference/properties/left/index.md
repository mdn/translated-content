---
title: left
slug: Web/CSS/Reference/Properties/left
original_slug: Web/CSS/left
---

{{CSSRef}}

La propriété **`left`** permet de définir une partie de la position des éléments positionnés. Elle n'a aucun effet pour les éléments non-positionnés.

{{InteractiveExample("CSS Demo: left")}}

```css interactive-example-choice
left: 0;
```

```css interactive-example-choice
left: 4em;
```

```css interactive-example-choice
left: 10%;
```

```css interactive-example-choice
left: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

Pour les éléments positionnés de façon absolue (ceux pour lesquels {{cssxref("position")}}`: absolute` ou `position: fixed`), elle définit la distance entre le bord gauche de la marge de l'élément et le bord gauche de son bloc englobant (le bloc englobant étant l'ancêtre par rapport auquel l'élément est positionné de façon relative).

Pour les éléments positionnés grâce à {{cssxref("position")}}`: relative`, c'est le décalage ajouté à gauche de l'élément (qui est donc déplacé vers la droite de sa position normale).

Pour les éléments positionnés grâce à {{cssxref("position")}}`: sticky`, cette propriété se comportera comme avec `relative` lorsque l'élément fait partie de la zone d'affichage (_viewport_) et comme avec `fixed` lorsque l'élément est en dehors de la zone d'affichage.

Lorsque {{cssxref("position")}}`: static`, la propriété `left` n'a aucun effet.

Si les deux propriétés `left` et {{cssxref("right")}} sont définies et que l'élément ne peut pas s'étendre afin de satisfaire ces contraintes, la position de l'élément est « sur-définie ». Dans ce cas, la valeur `left` aura la priorité si le conteneur est orienté de gauche à droite (dans ce cas, la valeur calculée de `right` vaudra `-left`) et si le conteneur est orienté de droite à gauche, c'est la valeur `right` qui aura la priorité (auquel cas, la valeur calculée de `left` vaudra `-right`).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
left: 3px;
left: 2.4em;

/* Valeurs proportionnelles à   */
/* la largeur du bloc englobant */
/* Type <percentage>            */
left: 10%;

/* Valeur avec un mot-clé */
left: auto;

/* Valeurs globales */
left: inherit;
left: initial;
left: unset;
```

### Valeurs

- `<length>`
  - : Une valeur de longueur qui peut être positive, nulle ou négative et qui représente :
    - La distance au bord gauche du bloc englobant _pour les éléments positionnés de façon absolue_
    - Le décalage vers la gauche qui est appliqué à l'élément par rapport à sa position normale dans le flux _pour les éléments positionnés de façon relative_.

    Pour plus d'informations sur les valeurs possibles, voir {{cssxref("&lt;length&gt;")}}.

- `<percentage>`
  - : Une valeur en pourcentage (type {{cssxref("&lt;percentage&gt;")}} par rapport à la largeur du bloc englobant.
- `auto`
  - : Un mot-clé qui représente :
    - Pour les éléments positionnés de façon absolue : la position de l'élément selon la valeur de la propriété {{cssxref("right")}}, on considère `width: auto` comme une largeur basée sur le contenu.
    - Pour les éléments positionnés de façon relative : le décalage à gauche de l'élément par rapport à sa position initiale selon la valeur de la propriété {{cssxref("right")}}. SI `right` vaut également `auto`, il n'y a aucun décalage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#exemple_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#exemple_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#exemple_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#exemple_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
```

### HTML

```html
<div id="wrap">
  <div id="exemple_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      Le seul élément englobant pour ce div est la fenêtre principale. Elle se
      positionne par rapport à elle.
    </p>
  </div>

  <div id="exemple_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>La position est relative par rapport aux voisins.</p>
  </div>

  <div id="exemple_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>
      La position est relative par rapport au div voisin mais on le retire du
      flux.
    </p>

    <div id="exemple_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>
        La position est absolue à l'intérieur d'un parent positionné de façon
        relative.
      </p>
    </div>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples',1200,650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("position")}}
- {{cssxref("right")}}
- {{cssxref("bottom")}}
- {{cssxref("top")}}
