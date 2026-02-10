---
title: margin-left
slug: Web/CSS/Reference/Properties/margin-left
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-left`** d'un élément définit l'espace horizontal à gauche qui formera [la zone de marge](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_marge) à gauche de l'élément. On peut avoir une marge gauche négative qui rapproche l'élément de ses voisins ou une marge positive qui l'en écarte.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-left")}}

```css interactive-example-choice
margin-left: 1em;
```

```css interactive-example-choice
margin-left: 10%;
```

```css interactive-example-choice
margin-left: 10px;
```

```css interactive-example-choice
margin-left: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col"></div>
    <div class="col transition-all" id="example-element"></div>
    <div class="col"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #5b6dcd 10px;
  background-color: rgb(229 232 252 / 0.6);
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffc129;
  background-color: rgb(255 244 219 / 0.6);
}
```

Les marges verticales de deux boîtes adjacentes peuvent fusionner entre elles. C'est ce qu'on appelle [_la fusion de marges_](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

Dans certains cas où la largeur est sur-contrainte (autrement dit quand `width`, `margin-left`, `border`, `padding`, la taille de la zone de contenu et `margin-right` sont toutes définies), `margin-left` est ignorée. La valeur calculée sera la même que si `auto` avait été utilisée.

## Syntaxe

```css
/* Valeurs de type <length> */
margin-left: 10px; /* Une longueur absolue */
margin-left: 1em; /* Une longueur absolue relative à la taille du texte */
margin-left: 5%; /* Une marge dont la taille est relative à la largeur du bloc englobant */
margin-left: anchor-size(self-inline);
margin-left: calc(anchor-size(--my-anchor width, 20px) / 4);

/* Valeur avec un mot-clé */
margin-left: auto;

/* Valeurs globales */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

La valeur de la propriété `margin-left` peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (`<percentage>`). La valeur peut être positive, nulle ou négative.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de la marge en valeur fixe.
    - Pour les éléments positionnés par ancre, la fonction {{CSSxRef("anchor-size()")}} donne une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou la hauteur de l'élément ancre associé (voir [Définir la marge d'un élément selon la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_marge_dun_élément_selon_la_taille_de_lancre)).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de la marge en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : La marge gauche reçoit une part de l'espace horizontal inutilisé, déterminée principalement par le mode de disposition utilisé. Si les valeurs de `margin-left` et `margin-right` sont toutes deux `auto`, l'espace calculé est réparti équitablement. Ce tableau résume les différents cas&nbsp;:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valeur de {{CSSxRef("display")}}</th>
          <th scope="col">Valeur de {{CSSxRef("float")}}</th>
          <th scope="col">Valeur de {{CSSxRef("position")}}</th>
          <th scope="col">Valeur calculée pour <code>auto</code></th>
          <th scope="col">Commentaires</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>inline</code>, <code>inline-block</code>, <code>inline-table</code>
          </th>
          <th>N'importe laquelle</th>
          <th><code>static</code> ou <code>relative</code></th>
          <td><code>0</code></td>
          <td>Disposition en ligne</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>block</code>, <code>table</code>, <code>inline-table</code>, <code>list-item</code>, <code>table-caption</code>
          </th>
          <th>N'importe laquelle</th>
          <th><code>static</code> ou <code>relative</code></th>
          <td>
            <code>0</code> sauf si <code>margin-left</code> et <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la valeur utilisée sera celle qui permet de centrer l'élément au sein de l'élément parent.
          </td>
          <td>Disposition en bloc</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>block</code>, <code>table</code>, <code>inline-table</code>, <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><code>left</code> ou <code>right</code></th>
          <th><code>static</code> ou <code>relative</code></th>
          <td><code>0</code></td>
          <td>Disposition en bloc avec les éléments flottants</td>
        </tr>
        <tr>
          <th>
            N'importe quelle <code>table-*</code>, sauf <code>table-caption</code>
          </th>
          <th>N'importe laquelle</th>
          <th>N'importe laquelle</th>
          <td><code>0</code></td>
          <td>
            Les éléments <code>table-*</code> n'ont pas de marge, il faut utiliser {{CSSxRef("border-spacing")}} à la place.
          </td>
        </tr>
        <tr>
          <th>
            N'importe laquelle, sauf <code>flex</code>, <code>inline-flex</code>, ou <code>table-*</code>
          </th>
          <th>N'importe laquelle</th>
          <th>
            <code>fixed</code> ou <code>absolute</code>
          </th>
          <td>
            <code>0</code> sauf si <code>margin-left</code> et <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la valeur utilisée sera celle qui permet de centrer la boîte de bordure dans la zone de largeur disponible si elle fixée.
          </td>
          <td>Positionnement absolu.</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th>N'importe laquelle</th>
          <th>N'importe laquelle</th>
          <td>
            <code>0</code>, sauf s'il reste de l'espace libre. Dans ce cas, l'espace restant sera distribué de façon équitable entre toutes les marges avec <code>auto</code>.
          </td>
          <td>Boîtes flexibles.</td>
        </tr>
      </tbody>
    </table>

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la marge de gauche en pourcentage

Les valeurs en pourcentage pour `margin-left` sont relatives à la taille en ligne du conteneur.

#### HTML

```html
<p>
  Un grand rosier se trouvait à l'entrée du jardin&nbsp;; les roses qu'il
  portait étaient blanches, mais trois jardiniers étaient en train de les
  peindre en rouge.
</p>
<p class="exemple">
  Alice s'avança pour les regarder, et, au moment où elle approchait, elle en
  entendit un qui disait&nbsp;: «&nbsp;Fais donc attention, Cinq, et ne
  m'éclabousse pas ainsi avec ta peinture.&nbsp;»
</p>
<p>
  «&nbsp;Ce n'est pas de ma faute,&nbsp;» dit Cinq d'un ton bourru, «&nbsp;c'est
  Sept qui m'a poussé le coude.&nbsp;»
</p>
```

#### CSS

```css
.exemple {
  margin-left: 50%;
}
```

#### Résultat

{{EmbedLiveSample("Définir la marge de gauche en pourcentage", "", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}} et {{CSSxRef("margin-bottom")}}
- La propriété raccourcie {{CSSxRef("margin")}}
- Les propriétés {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("margin-block")}} et {{CSSxRef("margin-inline")}}
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
