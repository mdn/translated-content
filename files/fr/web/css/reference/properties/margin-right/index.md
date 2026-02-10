---
title: margin-right
slug: Web/CSS/Reference/Properties/margin-right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-right`** définit la [zone de marge](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_marge) à droite d'un élément. Une valeur positive l'éloigne de ses voisins, tandis qu'une valeur négative la rapproche.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-right")}}

```css interactive-example-choice
margin-right: 1em;
```

```css interactive-example-choice
margin-right: 10%;
```

```css interactive-example-choice
margin-right: 10px;
```

```css interactive-example-choice
margin-right: 0;
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

Les marges des côtés droit et gauche de deux boîtes adjacentes peuvent fusionner entre elles. C'est ce qu'on appelle [_la fusion de marges_](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

## Syntaxe

```css
/* Valeur de type <length> */
margin-right: 20px; /* Une longueur absolue */
margin-right: 1em; /* Une longueur relative à la taille du texte */
margin-right: 5%; /* Une marge relative à la largeur du bloc englobant */
margin-right: anchor-size(self-block);
margin-right: calc(anchor-size(--my-anchor height, 20px) / 4);

/* Valeur avec un mot-clé */
margin-right: auto;

/* Valeurs globales */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: revert-layer;
margin-right: unset;
```

La valeur de la propriété `margin-right` peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (`<percentage>`).

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de la marge en valeur fixe.
    - Pour les éléments positionnés par ancre, la fonction {{CSSxRef("anchor-size()")}} donne une valeur {{CSSxRef("&lt;length&gt;")}} relative à la largeur ou la hauteur de l'élément ancre associé (voir [Définir la marge d'un élément selon la taille de l'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_marge_dun_élément_selon_la_taille_de_lancre)).

- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de la marge en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : La marge droite reçoit une part de l'espace horizontal inutilisé, déterminée principalement par le mode de disposition utilisé. Si les valeurs de `margin-left` et `margin-right` sont toutes deux `auto`, l'espace calculé est réparti équitablement. Ce tableau résume les différents cas&nbsp;:

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
            <code>inline</code>, <code>inline-block</code>,
            <code>inline-table</code>
          </th>
          <th><em>n'importe laquelle</em></th>
          <th><code>static</code> ou <code>relative</code></th>
          <td><code>0</code></td>
          <td>Disposition en ligne</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><em>n'importe laquelle</em></th>
          <th><code>static</code> ou <code>relative</code></th>
          <td>
            <code>0</code> sauf si <code>margin-left</code> et
            <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la
            valeur utilisée sera celle qui permet de centrer l'élément au sein de
            l'élément parent.
          </td>
          <td>Disposition en bloc</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><code>left</code> ou <code>right</code></th>
          <th><code>static</code> ou <code>relative</code></th>
          <td><code>0</code></td>
          <td>Disposition en bloc avec les éléments flottants</td>
        </tr>
        <tr>
          <th>
            <em>n'importe quelle </em><code>table-*</code><em> sauf </em
            ><code>table-caption</code>
          </th>
          <th><em>n'importe laquelle</em></th>
          <th><em>n'importe laquelle</em></th>
          <td><code>0</code></td>
          <td>
            Les éléments <code>table-*</code> n'ont pas de marge, il faut utiliser
            {{CSSxRef("border-spacing")}} à la place.
          </td>
        </tr>
        <tr>
          <th>
            <em>ni'mporte quelle autre sauf <code>flex</code>,</em>
            <code>inline-flex</code><em> ou </em><code>table-*</code>
          </th>
          <th><em>n'importe laquelle</em></th>
          <th>
            <em><code>fixed</code></em> ou <code>absolute</code>
          </th>
          <td>
            <code>0</code> sauf si <code>margin-left</code> et
            <code>margin-right</code> valent <code>auto</code>. Dans ce cas, la
            valeur utilisée sera celle qui permet de centrer la boîte de bordure
            dans la zone de largeur disponible si elle fixée.
          </td>
          <td>Positionnement absolu.</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>n'importe laquelle</em></th>
          <th><em>n'importe laquelle</em></th>
          <td>
            <code>0</code>, sauf s'il reste de l'espace horizontal libre. Dans ce
            cas, l'espace restant sera distribué de façon équitable entre toutes les
            marges avec <code>auto</code>.
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

### Définir la marge droite en pixels et en pourcentage

```css
.content {
  margin-right: 5%;
}
.side-box {
  margin-right: 10px;
}
.logo {
  margin-right: -5px;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("margin-top")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- La propriété raccourcie {{CSSxRef("margin")}}
- Les propriétés {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}}, {{CSSxRef("margin-inline-start")}} et {{CSSxRef("margin-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("margin-block")}} et {{CSSxRef("margin-inline")}}
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
