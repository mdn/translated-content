---
title: margin-left
slug: Web/CSS/margin-left
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/margin-left
---
{{CSSRef}}

La propriété **`margin-left`** d'un élément définit l'espace horizontal à gauche qui formera la marge à gauche de l'élément. On peut avoir une marge gauche négative qui rapproche l'élément de ses voisins ou une marge positive qui l'en écarte.

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

Les marges des côtés droit et gauche de deux boîtes adjacentes peuvent fusionner entre elles. C'est ce qu'on appelle [_la fusion de marges_](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

Dans certains cas où les dimensions sont sur-contraintes (autrement dit quand `width`, `margin-left`, `border`, `padding`, la taille de la zone de contenu et `margin-right` sont toutes définies), `margin-left` est ignorée. La valeur calculée sera la même que si `auto` avait été utilisée.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-left: 10px;  /* Une longueur absolue */
margin-left: 1em;   /* Une longueur absolue relative à la taille du texte */
margin-left: 5%;    /* Une marge dont la taille est relative à la largeur
                       du bloc englobant */

/* Valeur avec un mot-clé */
margin-left: auto;

/* Valeurs globales */
margin-left: inherit;
margin-left: initial;
margin-left: unset;
```

La valeur de cette propriété peut être le mot-clé `auto`, une longueur (`<length>`) ou un pourcentage (`<percentage>`).

### Valeurs

- `<length>`
  - : Une valeur fixe, du type {{cssxref("&lt;length&gt;")}} : elle peut être exprimée en pixels (`px`) ou en fonction de la taille du texte (`em`) ou être relative à la taille de la zone d'affichage (_viewport_) (`vh`).
- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}} relative à la largeur du bloc englobant.
- `auto`

  - : Un mot-clé qui indique que la marge droite s'adapte à l'espace restant. Cet espace est principalement défini par le mode de disposition utilisé.L'espace calculé sera réparti de façon équitable entre la marge droite et la marge gauche si celle-ci vaut également `auto`. Le tableau suivant précise les différents cas :

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valeur de {{cssxref("display")}}</th>
          <th scope="col">Valeur de {{cssxref("float")}}</th>
          <th scope="col">Valeur de {{cssxref("position")}}</th>
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
            <em>n'importe quelle </em><code>table-*</code><em>, sauf </em
            ><code>table-caption</code>
          </th>
          <th><em>n'importe laquelle</em></th>
          <th><em>n'importe laquelle</em></th>
          <td><code>0</code></td>
          <td>
            Les éléments <code>table-*</code> n'ont pas de marge, il faut utiliser
            {{cssxref("border-spacing")}} à la place.
          </td>
        </tr>
        <tr>
          <th>
            <em>n'importe laquelle, sauf <code>flex</code>,</em>
            <code>inline-flex</code><em>, ou </em><code>table-*</code>
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

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  margin-left: 50%;
}
```

### HTML

```html
<p>Un grand rosier se trouvait à l’entrée du jardin ;
   les roses qu’il portait étaient blanches, mais
   trois jardiniers étaient en train de les peindre
   en rouge.
</p>
<p class=exemple>
  Alice s’avança pour les regarder, et, au moment où
  elle approchait, elle en entendit un qui disait&nbsp;:
  «&nbsp;Fais donc attention, Cinq, et ne m’éclabousse pas
  ainsi avec ta peinture.&nbsp;»
</p>
<p>
  «&nbsp;Ce n’est pas de ma faute,&nbsp;» dit Cinq d’un ton
  bourru, «&nbsp;c’est Sept qui m’a poussé le coude.&nbsp;»
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-margin', 'margin-left')}}                 | {{Spec2('CSS3 Box')}}             | Pas de modification significative depuis CSS 2.1.                       |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-left')}} | {{Spec2('CSS3 Transitions')}} | `margin-left` peut désormais être animée.                               |
| {{SpecName('CSS3 Flexbox', '#item-margins', 'margin-left')}}         | {{Spec2('CSS3 Flexbox')}}         | Le comportement de `margin-left` sur les éléments flexibles est défini. |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-left')}} | {{Spec2('CSS2.1')}}                 | L'effet sur les éléments en ligne (_inline_) est retiré.                |
| {{SpecName('CSS1', '#margin-left', 'margin-left')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.                                                    |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.margin-left")}}
