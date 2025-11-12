---
title: cursor
slug: Web/CSS/Reference/Properties/cursor
original_slug: Web/CSS/cursor
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La propriété [CSS](/fr/docs/Web/CSS) **`cursor`** définit la forme du curseur (s'il y en a un) lorsque le pointeur est au-dessus de l'élément.

Le paramètre du curseur doit informer les utilisateurs des opérations pouvant être effectuées avec la souris à l'emplacement actuel, notamment&nbsp;: sélection de texte, activation des menus d'aide ou contextuels, copie de contenu, redimensionnement des tableaux, etc.
Vous pouvez spécifier le type de curseur à l'aide d'un mot-clé ou charger une icône spécifique à utiliser (avec des images de replis facultatives et un mot-clé obligatoire comme solution de repli finale).

{{InteractiveExample("Démonstration CSS&nbsp;: cursor")}}

```css interactive-example-choice
cursor: help;
```

```css interactive-example-choice
cursor: wait;
```

```css interactive-example-choice
cursor: crosshair;
```

```css interactive-example-choice
cursor: not-allowed;
```

```css interactive-example-choice
cursor: zoom-in;
```

```css interactive-example-choice
cursor: grab;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">
    Passez sur cet élément pour voir le style du curseur.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  background-color: #1766aa;
  color: white;
  height: 180px;
  width: 360px;
  justify-content: center;
  align-items: center;
  font-size: 14pt;
  padding: 5px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
cursor: pointer;
cursor: auto;
/* … */
cursor: zoom-out;

/* Une valeur d'URL avec un mot-clé par défaut */
cursor: url(hand.cur), pointer;

/* Une valeur d'URL avec des coordonnées et un mot-clé par défaut */
cursor:
  url(cursor1.png) 4 12,
  auto;
cursor:
  url(cursor2.png) 2 2,
  pointer;

/* Liens et liens de repli (certaines avec des coordonnées), avec un mot-clé
obligatoire de repli */
cursor:
  url("cursor_1.svg") 4 5,
  url("cursor_2.svg"),
  /* …, */ url("cursor_n.cur") 5 5,
  progress;

/* Valeurs globales */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

La propriété `cursor` peut être définie grâce à zéro ou plusieurs valeurs [`<url>`](#url) séparées par des virgules et suivi par un unique [mot-clé obligatoire](#mot-clé). Chaque `<url>` doit pointer vers un fichier image. Le navigateur essaiera de télécharger la première image indiquée et passera à la suivante s'il ne peut pas. Si aucune image ne fonctionne, il utilisera le mot-clé final.
Chaque `<url>` doit pointer vers un fichier image.
Le navigateur essaiera de charger la première image spécifiée, en passant à la suivante si elle ne peut pas être chargée, et en revenant à la valeur du mot-clé si aucune image n'a pu être chargée (ou si aucune n'a été spécifiée).

Chaque `<url>` peut éventuellement être suivi par un couple de nombres séparés par un espace qui représente les coordonnées `<x>` et `<y>` (abscisse puis ordonnée) du point d'action (_hotspot_) du curseur par rapport au coin en haut à gauche de l'image.

### Valeurs

- `<url>` {{optional_inline}}
  - : Une `url(…)` ou une liste d'URL séparées par des virgules `url(…), url(…), …` pointant vers un fichier image. On peut utiliser plusieurs {{cssxref("url_value", "&lt;url&gt;")}}, au cas où certains types d'images ne sont pas pris en charge. Il est _obligatoire_ qu'une valeur non-URL soit présente à la fin de cette liste.
- `<x>`, `<y>` {{optional_inline}}
  - : Des coordonnées en abscisses et en ordonnées sans unité, inférieures à 32.
- Valeurs utilisant un mot-clé (`keyword`)
  - : Une valeur de mot-clé _doit_ être spécifiée, indiquant soit le type de curseur à utiliser, soit le curseur de secours à utiliser si toutes les icônes spécifiées ne parviennent pas à se charger.

    Les mots-clés disponibles sont répertoriés dans le tableau ci-dessous. À l'exception de `none`, qui signifie «&nbsp;aucun curseur&nbsp;», une image montre comment les curseurs étaient auparavant rendus. Vous pouvez passer votre souris sur les lignes du tableau pour voir l'effet des différentes valeurs de mots-clés de curseur sur votre navigateur actuel.

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
          <td><img src="default.gif" alt="flèche large pointant vers le haut et vers la gauche" /></td>
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
          <td><img src="context-menu.png" alt="grande flèche pointant vers le haut et vers la gauche légèrement obscurcissant une icône de menu" /></td>
          <td>Un menu contextuel est disponible sous le curseur.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="grande flèche pointant vers le haut et versla gauche à côté d'un point d'interrogation" /></td>
          <td>Le pointeur indique qu'une aide est disponible.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="main droite avec un index pointant vers le haut" /></td>
          <td>
            Le curseur est un pointeur qui indique un lien. Généralement c'est une
            main.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="large flèche et sablier" /></td>
          <td>
            Le programme est occupé en arrière-plan mais l'utilisateur peut toujours
            interagir avec l'interface (à la différence de <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="sablier" /></td>
          <td>
            Le programme est occupé, empêchant toute interaction (à la différence de <code>progress</code>).
            Parfois, une image d'un sablier ou d'une montre.
          </td>
        </tr>
        <tr style="cursor: cell">
          <td rowspan="4" style="cursor: auto">Sélection</td>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="large symbole en forme de plus" /></td>
          <td>
            Le pointeur indique que la ou les cellules du tableau peuvent être
            sélectionnées.
          </td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="symbole en forme de croix composé de deux lignes fines" /></td>
          <td>
            Un curseur en forme de croix, généralement utilisé pour indiquer une
            sélection sur une image.
          </td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="i majuscule vertical" /></td>
          <td>Le pointeur indique que le texte peut être sélectionné.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img src="vertical-text.gif" alt="i majuscule horizontal" /></td>
          <td>Le pointeur indique que du texte vertical peut être sélectionné.</td>
        </tr>
        <tr style="cursor: alias">
          <td rowspan="7" style="cursor: auto">Glisser/déposer</td>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="large flèche pointant vers le haut et vers la gauche obscurcissant partiellement une petite icône de dossier avec une flèche courbée pointant vers le haut et vers la droite" /></td>
          <td>Le pointeur indique qu'un alias ou qu'un raccourci sera créé.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="large flèche pointant vers le haut et vers la gauche obscurcissant partiellement une petite icône de dossier avec un signe plus" /></td>
          <td>Le pointeur indique que quelque chose devra être copié.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="symbole plus composé de deux lignes fines. Les quatre points sont de petites flèches pointant vers l'extérieur" /></td>
          <td>L'objet survolé devra être déplacé.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="icône de curseur et icône d'interdiction" />
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
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img src="not-allowed.gif" alt="icône d'interdiction, qui est un cercle avec une ligne à travers" /></td>
          <td>Le curseur indique que quelque chose ne peut pas être fait.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="icône de main ouverte" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>
              Le pointeur indique que le contenu peut être accroché/attrapé ou est
              accroché/attrapé pour être glissé et déposé quelque part.
            </p>
          </td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="icône de main fermée, de l'arrière de la main" /></td>
        </tr>
        <tr style="cursor: all-scroll">
          <td rowspan="15" style="cursor: auto">
            Redimensionnement &#x26; défilement
          </td>
          <td><code>all-scroll</code></td>
          <td><img src="all-scroll.gif" alt="icône d'un point de taille moyenne avec quatre triangles autour" /></td>
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
          <td><img src="col-resize.gif" alt="deux lignes verticales parallèles étroites avec une petite flèche pointant vers la gauche et une autre pointant vers la droite" /></td>
          <td>L'élément ou la colonne peut être redimensionné horizontalement.</td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="deux lignes horizontales parallèles étroites avec une petite flèche pointant vers le haut et une autre pointant vers le bas" /></td>
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
              alt="Example d'un curseur de redimensionnement vers la droite"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers le bas"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers la gauche"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers le coin supérieur droit"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers le coin supérieur gauche"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers le coin inférieur droit"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Exemple d'un curseur de redimensionnement vers le coin inférieur gauche"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img class="default" src="3-resize.gif" alt="longue flèche fine pointant vers la gauche et la droite" class="default" /></td>
          <td rowspan="4" style="cursor: auto">
            Le pointeur indique un redimensionnement bidirectionnel.
          </td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img class="default" src="6-resize.gif" alt="longue flèche fine pointant vers le haut et le bas" class="default" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img class="default" src="1-resize.gif" alt="longue flèche fine pointant vers le coin supérieur droit et le coin inférieur gauche" class="default" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img class="default" src="4-resize.gif" alt="longue flèche fine pointant vers le coin supérieur gauche et le coin inférieur droit" class="default" /></td>
        </tr>
        <tr style="cursor: -webkit-zoom-in; cursor: zoom-in">
          <td rowspan="2">Zoom</td>
          <td><code>zoom-in</code></td>
          <td><img class="default" src="zoom-in.gif" alt="loupe avec un signe plus" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Le pointeur indique qu'on peut zoomer/dézoomer sur le contenu.</p>
          </td>
        </tr>
        <tr style="cursor: -webkit-zoom-out; cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img class="default" src="zoom-out.gif" alt="loupe avec un signe moins" /></td>
        </tr>
      </tbody>
    </table>

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Notes d'utilisation

### Limites de taille des icônes

La spécification ne limite pas la taille de l'image `cursor`, {{Glossary("user agent", "les agents utilisateurs")}} les restreignent généralement pour éviter un usage abusif.
Par exemple, sur Firefox et Chromium, les images de curseur sont limitées à 128x128 pixels par défaut, mais il est recommandé de limiter la taille de l'image du curseur à 32x32 pixels. Les changements de curseur qui utilisent des images plus grandes que la taille maximale prise en charge par l'agent utilisateur seront généralement ignorés.

### Formats de fichiers image pris en charge

Les agents utilisateurs sont tenus par la spécification de prendre en charge les fichiers PNG, les fichiers SVG v1.1 en mode statique sécurisé contenant une taille naturelle, et tout autre format de fichier image non animé qu'ils prennent en charge pour les images dans d'autres propriétés.
Les navigateurs de bureau prennent également largement en charge le format de fichier `.cur`.

La spécification indique en outre que les agents utilisateurs _devraient_ également prendre en charge les fichiers SVG v1.1 en mode animé sécurisé contenant une taille naturelle, ainsi que tout autre format de fichier image animé qu'ils prennent en charge pour les images dans d'autres propriétés.
Les agents utilisateurs _peuvent_ prendre en charge à la fois des images SVG statiques et animées qui ne contiennent pas de taille naturelle.

### iPadOS

iPadOS prend en charge les dispositifs de pointage tels que les trackpads et les souris. Par défaut, le curseur de l'iPad est affiché sous la forme d'un cercle, et la seule valeur prise en charge qui modifiera l'apparence du pointeur est `text`.

### Autres notes

Les changements de curseur qui intersectent les zones de la barre d'outils sont souvent bloqués pour éviter le spoofing.

## Exemples

### Paramétrage des types de curseur

```css
.toto {
  cursor: crosshair;
}

.tata {
  cursor: zoom-in;
}

/* Une valeur de mot-clé de repli est requise lors de l'utilisation d'une URL */
.titi {
  cursor: url("hyper.cur"), auto;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("pointer-events")}}
- Le type de donnée {{cssxref("url_value", "&lt;url&gt;")}}
- L'attribut SVG {{SVGAttr("cursor")}}
