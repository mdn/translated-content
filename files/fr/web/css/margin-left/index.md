---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: c5dd9c3b9d503a56dc04b6b8f88e89194dc82d7f
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`margin-left`** d'un élément définit l'espace horizontal à gauche qui formera [la zone de marge](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#zone_de_marge) à gauche de l'élément. On peut avoir une marge gauche négative qui rapproche l'élément de ses voisins ou une marge positive qui l'en écarte.

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

Les marges verticales de deux boîtes adjacentes peuvent fusionner entre elles. C'est ce qu'on appelle [_la fusion de marges_](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

Dans certains cas où la largeur est sur-contrainte (autrement dit quand `width`, `margin-left`, `border`, `padding`, la taille de la zone de contenu et `margin-right` sont toutes définies), `margin-left` est ignorée. La valeur calculée sera la même que si `auto` avait été utilisée.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-left: 10px; /* Une longueur absolue */
margin-left: 1em; /* Une longueur absolue relative à la taille du texte */
margin-left: 5%; /* Une marge dont la taille est relative à la largeur
                       du bloc englobant */

/* Valeur avec un mot-clé */
margin-left: auto;

/* Valeurs globales */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

La valeur de cette propriété peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (`<percentage>`). La valeur peut être positive, nulle ou négative.

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La taille de la marge, exprimée comme une valeur fixe.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La taille de la marge exprimée avec un pourcentage relatif à la dimension du [bloc englobant](/fr/docs/Web/CSS/Containing_block) sur l'axe en ligne (qui correspond à la largeur pour une langue écrite horizontalement, voir [`writing-mode`](/fr/docs/Web/CSS/writing-mode)).
- `auto`

  - : Un mot-clé qui indique que la marge gauche s'adapte à l'espace restant. Cet espace est principalement défini par le mode de disposition utilisé. Si `margin-left` et `margin-right` valent toutes les deux `auto`, m'espace calculé sera réparti de façon équitable. Le tableau suivant précise les différents cas&nbsp;:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valeur de <a href="/fr/docs/Web/CSS/display"><code>display</code></a></th>
          <th scope="col">Valeur de <a href="/fr/docs/Web/CSS/float"><code>float</code></a></th>
          <th scope="col">Valeur de <a href="/fr/docs/Web/CSS/position"><code>position</code></a></th>
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
            Les éléments <code>table-*</code> n'ont pas de marge, il faut utiliser <a href="/fr/docs/Web/CSS/border-spacing"><code>border-spacing</code></a> à la place.
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

Les valeurs en pourcentage pour `margin-left` sont relatives à la taille en ligne du conteneur.

### CSS

```css
.exemple {
  margin-left: 50%;
}
```

### HTML

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

### Résultat

{{EmbedLiveSample("","","250")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés physiques pour les marges&nbsp;:
  - [`margin-top`](/fr/docs/Web/CSS/margin-top)
  - [`margin-right`](/fr/docs/Web/CSS/margin-right)
  - [`margin-bottom`](/fr/docs/Web/CSS/margin-bottom)
  - La propriété raccourcie [`margin`](/fr/docs/Web/CSS/margin) qui synthétise les 4
- Les propriétés logiques pour les marges&nbsp;:
  - [`margin-block-start`](/fr/docs/Web/CSS/margin-block-start)
  - [`margin-block-end`](/fr/docs/Web/CSS/margin-block-end)
  - [`margin-inline-start`](/fr/docs/Web/CSS/margin-inline-start)
  - [`margin-inline-end`](/fr/docs/Web/CSS/margin-inline-end)
  - Les propriétés raccourcies pour les deux axes&nbsp;:
    - [`margin-block`](/fr/docs/Web/CSS/margin-block)
    - [`margin-inline`](/fr/docs/Web/CSS/margin-inline)
