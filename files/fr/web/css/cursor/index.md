---
title: cursor
slug: Web/CSS/cursor
translation_of: Web/CSS/cursor
browser-compat: css.properties.cursor
---
{{CSSRef}}

La propriété CSS **`cursor`** définit la forme du curseur (s'il y en a un) lorsque le pointeur est au-dessus de l'élément.

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
cursor: pointer;
cursor: auto;

/* Une valeur d'URL avec un mot-clé par défaut */
cursor: url(hand.cur), pointer;

/* Une valeur d'URL avec des coordonnées et un mot-clé par défaut */
cursor: url(cursor1.png) 4 12, auto;
cursor: url(cursor2.png) 2 2, pointer;

/* Valeurs globales */
cursor: inherit;
cursor: initial;
cursor: unset;
```

La propriété `cursor` peut être définie grâce à zéro ou plusieurs valeurs [`<url>`](#url) séparées par des virgules et suivi par un unique [mot-clé obligatoire](#mot-clé). Chaque `<url>` doit pointer vers un fichier image. Le navigateur essaiera de télécharger la première image indiquée et passera à la suivante s'il ne peut pas. Si aucune image ne fonctionne, il utilisera le mot-clé final.

Chaque `<url>` peut éventuellement être suivi par un couple de nombres séparés par un espace qui représente les coordonnées (abscisse puis ordonnée) [`<x><y>`](#xy) Ces coordonnées permettent de paramétrer le point d'action (_hotspot_) du curseur par rapport au coin en haut à gauche de l'image.

Par exemple, on peut indiquer deux images grâce à deux valeurs `<url>` et fournir des coordonnées `<x><y>` pour la deuxième. Si aucune des images n'a pu être chargée, on recourt au mot-clé `progress` :

```css
cursor: url(one.svg), url(two.svg) 5 5, progress;
```

### Valeurs

- `<url>`
  - : Une `url(…)` ou une liste d'URL séparées par des virgules `url(…), url(…), …` pointant vers un fichier image. On peut utiliser plusieurs [`url()`](</fr/docs/Web/CSS/url()>), au cas où certains types d'images ne sont pas pris en charge. Il est _obligatoire_ qu'une valeur non-URL soit présente à la fin de cette liste.
- `<x>` `<y>` {{experimental_inline}}
  - : Des coordonnées en abscisses et en ordonnées sans unité, inférieures à 32.
- Valeurs utilisant un mot-clé

  - : **Vous pouvez déplacer votre souris au-dessus de chaque ligne pour tester.**

    <table class="standard-table">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Valeur CSS</th>
          <th>Rendu</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style="cursor: auto">
          <td rowspan="3">Général</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            Le navigateur détermine le curseur à afficher en fonction du contexte
            (par exemple, l'effet sera équivalent à <code>text</code> lors du survol
            du texte).
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img alt="default.gif" src="default.gif" /></td>
          <td>
            Le curseur par défaut de la plateforme (qui est généralement une
            flèche).
          </td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Aucun curseur n'est affiché.</td>
        </tr>
        <tr style="cursor: context-menu">
          <td rowspan="5" style="cursor: auto">Liens &#x26; états</td>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>
            Un menu contextuel est disponible sous le curseur. Seul IE 10 et les
            versions supérieures ont implémenté cette valeur Bur Windows :
            <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=258960"
              >bug 258960</a
            >.
          </td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img alt="help.gif" src="help.gif" /></td>
          <td>Le pointeur indique qu'une aide est disponible.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img alt="pointer.gif" src="pointer.gif" /></td>
          <td>
            Le curseur est un pointeur qui indique un lien ; généralement c'est une
            main.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img alt="progress.gif" src="progress.gif" /></td>
          <td>
            Le programme est occupé en arrière-plan mais l'utilisateur peut toujours
            interagir avec l'interface (à la différence de <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img alt="wait.gif" src="wait.gif" /></td>
          <td>Le programme est occupé, empêchant toute interaction.</td>
        </tr>
        <tr style="cursor: cell">
          <td rowspan="4" style="cursor: auto">Sélection</td>
          <td><code>cell</code></td>
          <td><img alt="cell.gif" src="cell.gif" /></td>
          <td>
            Le pointeur indique que la ou les cellules du tableau peuvent être
            sélectionnées.
          </td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img alt="crosshair.gif" src="crosshair.gif" /></td>
          <td>
            Un curseur en forme de croix, généralement utilisé pour indiquer une
            sélection sur une image.
          </td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img alt="text.gif" class="default" src="text.gif" /></td>
          <td>Le pointeur indique que le texte peut être sélectionné.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>Le pointeur indique que du texte vertical peut être sélectionné.</td>
        </tr>
        <tr style="cursor: alias">
          <td rowspan="7" style="cursor: auto">Glisser/déposer</td>
          <td><code>alias</code></td>
          <td><img alt="alias.gif" src="alias.gif" /></td>
          <td>Le pointeur indique qu'un alias ou qu'un raccourci sera créé.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img alt="copy.gif" class="default" src="copy.gif" /></td>
          <td>Le pointeur indique que quelque chose devra être copié.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img alt="move.gif" src="move.gif" /></td>
          <td>L'objet survolé devra être déplacé.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img
              alt="no-drop.gif"
              class="lwrap"
              src="no-drop.gif"
              style="float: left"
            />
          </td>
          <td>
            Le curseur indique qu'on ne peut pas déposer d'élément à cet endroit.
            <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=B75173"
              >bug 275173</a
            >
            pour Windows et Mac OS X, « <code>no-drop</code> a le même effet que
            <code>not-allowed</code> ».
          </td>
        </tr>
        <tr style="cursor: -moz-grab; cursor: -webkit-grab; cursor: grab">
          <td><code>grab</code></td>
          <td><img alt="grab.gif" class="default" src="grab.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>
              Le pointeur indique que le contenu peut être accroché/attrapé ou est
              accroché/attrapé pour être glissé et déposé quelque part.
            </p>
          </td>
        </tr>
        <tr
          style="cursor: -moz-grabbing; cursor: -webkit-grabbing; cursor: grabbing"
        >
          <td><code>grabbing</code></td>
          <td><img alt="grabbing.gif" class="default" src="grabbing.gif" /></td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>Le curseur indique que quelque chose ne peut pas être fait.</td>
        </tr>
        <tr style="cursor: all-scroll">
          <td rowspan="15" style="cursor: auto">
            Redimensionnement &#x26; défilement
          </td>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            Le curseur indique qu'on peut faire défiler le contenu dans n'importe
            quelle direction.
            <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=275174"
              >Bug 275174</a
            >
            pour Windows, « <code>all-scroll</code> a le même effet que
            <code>move</code>".
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>L'élément ou la colonne peut être redimensionné horizontalement.</td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>L'élément ou la ligne peut être redimensionné verticalement.</td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Exemple de redimensionnement vers le haut"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            <p>
              Un bord peut être déplacé. Par exemple, le curseur
              <code>se-resize</code> peut être utilisé lorsqu'on redimensionne une
              boîte à partir de son coin sud-est.
            </p>
            <p>
              Dans certains environnements, un curseur bidirectionnel équivalent est
              affiché (ex. <code>n-resize</code> et <code>s-resize</code> sont
              synonymes de <code>ns-resize</code>).
            </p>
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the right cursor"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom cursor "
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the left cursor"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-right corner cursor"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-left corner cursor"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-right corner cursor"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-left corner cursor"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">
            Le pointeur indique un redimensionnement bidirectionnel.
          </td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: -webkit-zoom-in; cursor: zoom-in">
          <td rowspan="2">Zoom</td>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Le pointeur indique qu'on peut zoomer/dézoomer sur le contenu.</p>
          </td>
        </tr>
        <tr style="cursor: -webkit-zoom-out; cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

### Syntaxe formelle

{{csssyntax}}

## Notes d'utilisation

Bien que la spécification ne définisse aucune limite de taille pour les curseurs, chaque navigateur/agent utilisateur pourra imposer la sienne. Les images de curseur utilisées qui dépassent les limites prises en charge seront généralement ignorées.

Pour plus d'informations, voir le tableau de compatibilité ci-après.

## Exemples

### CSS

```css
.toto {
  cursor: crosshair;
}

/* On utilise la valeur préfixée   */
/* si "zoom-in" n'est pas prise en */
/* charge */
.truc {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
```

### HTML

```html
<p class="toto">
  On dirait qu'on pourrait sélectionner une zone.
</p>

<p class="truc">
  Et là on peut zoomer.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                | État                                 | Commentaires                                                                  |
| ---------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------- |
| {{SpecName('CSS3 Basic UI', '#cursor', 'cursor')}}         | {{Spec2('CSS3 Basic UI')}} | Ajout de plusieurs mots-clés et de la syntaxe de positionnement pour `url()`. |
| {{SpecName('CSS2.1', 'ui.html#cursor-props', 'cursor')}} | {{Spec2('CSS2.1')}}             | Définition initiale.                                                          |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des valeurs URL pour `cursor`](/fr/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property)
- [`pointer-events`](/fr/docs/Web/CSS/pointer-events)
- La fonction CSS {{cssxref("url()", "url()")}}
