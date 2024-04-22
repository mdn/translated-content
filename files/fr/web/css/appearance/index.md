---
title: appearance (-moz-appearance, -webkit-appearance)
slug: Web/CSS/appearance
---

{{CSSRef}}

La propriété **`-moz-appearance`** est utilisée dans Gecko (Firefox) afin d'afficher un élément en utilisant la mise en forme native du système d'exploitation.

La propriété **`-webkit-appearance`** est utilisée dans les navigateurs basés sur WebKit (c'est-à-dire Safari) et sur Blink (c'est-à-dire Chrome ou Opera) et permet d'avoir la même fonctionnalités. On notera que plusieurs navigateurs, non basés sur WebKit (Firefox et Edge par exemple), prennent en charge ce préfixe pour des raisons de compatibilité web.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Cette propriété était utilisée dans les feuilles de style XUL afin de mettre en forme des _widgets_ utilisant la mise en forme de la plateforme utilisée. Elle est également utilisée dans les implémentations XBL pour les _widgets_ livrés avec les logiciels Mozilla.

> **Note :** _Cette propriété doit être utilisée avec beaucoup d'attention sur les sites web._ Son comportement peut varier d'un navigateur à l'autre bien que ces variations aient réduit avec le temps. Le mot-clé `none` peut avoir un comportement différent d'une plateforme à une autre et d'autres mots-clés ne sont pas pris en charge.

## Syntaxe

```css
/* Valeurs spécifiées par le module CSS Basic User Interface de niveau 4 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Valeurs ayant le même effet que 'auto' */
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Liste partielle des valeurs disponibles pour Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Liste partielle des valeurs disponibles pour WebKit/Blink (ainsi que pour Gecko et Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
```

### Valeurs

#### Mots-clés standard

<table class="standard-table">
  <tbody>
    <tr>
      <th>Valeur</th>
      <th>Navigateur</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        Aucune mise en forme particulière n'est appliquée. C'est la valeur par
        défaut.
      </td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome</td>
      <td>
        L'agent utilisateur sélectionne la mise en forme spécifique appropriée
        en fonction de l'élément. Cette valeur agira comme
        <code>none</code> pour les éléments sans mise en forme spéciale.
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        L'élément est mis en forme comme un bouton qui indiquerait qu'un menu
        pourrait être ouvert.
      </td>
    </tr>
    <tr>
      <td><code>textfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        Les valeurs suivantes sont traitées de façon équivalente à
        <code>auto</code>:
      </td>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>L'élément est dessiné comme un bouton.</td>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        L'élément est dessiné comme une case à cocher (et n'inclut que la case à
        cocher).
      </td>
    </tr>
    <tr>
      <td><code>listbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>menulist</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>meter</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>progress-bar</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>push-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        L'élément est dessiné comme un bouton radio (et n'inclut que la portion
        liée au « bouton radio »).
      </td>
    </tr>
    <tr>
      <td><code>searchfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slider-horizontal</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>square-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textarea</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Mots-clés non-standards

Les valeurs suivantes sont uniquement implémentées pour l'une ou l'autre des propriétés préfixées mais pas pour la propriété standard **`appearance`**.

| Valeur                                 | Navigateur                 | Description                                                                                                                                                                                          |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                                                                                                                      |
| `borderless-attachment`                | Safari                     |                                                                                                                                                                                                      |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                                                                                                                      |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                                                                                                                      |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                                                                                                                      |
| `checkbox-container`                   | Firefox                    | L'élément est dessiné comme le conteneur d'une case à cocher. Il pourra inclure un effet d'arrière-plan sur certaines plateformes. Normalement, il devrait contenir un libellé et une case à cocher. |
| `checkbox-label`                       | Firefox                    |                                                                                                                                                                                                      |
| `checkmenuitem`                        | Firefox                    |                                                                                                                                                                                                      |
| `color-well`                           | Safari                     | `input type=color`                                                                                                                                                                                   |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                                                                                                                      |
| `default-button`                       | Safari Edge                |                                                                                                                                                                                                      |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                                                                                                                      |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                                                                                                                      |
| `image-controls-button`                | Safari                     |                                                                                                                                                                                                      |
| `list-button`                          | Safari                     | datalist                                                                                                                                                                                             |
| `listitem`                             | Firefox Chrome Safari Edge |                                                                                                                                                                                                      |
| `media-enter-fullscreen-button`        | Chrome Safari              |                                                                                                                                                                                                      |
| `media-exit-fullscreen-button`         | Chrome Safari              |                                                                                                                                                                                                      |
| `media-fullscreen-volume-slider`       | Safari                     |                                                                                                                                                                                                      |
| `media-fullscreen-volume-slider-thumb` | Safari                     |                                                                                                                                                                                                      |
| `media-mute-button`                    | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `media-play-button`                    | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `media-overlay-play-button`            | Chrome Safari              |                                                                                                                                                                                                      |
| `media-return-to-realtime-button`      | Safari                     |                                                                                                                                                                                                      |
| `media-rewind-button`                  | Safari                     |                                                                                                                                                                                                      |
| `media-seek-back-button`               | Safari Edge                |                                                                                                                                                                                                      |
| `media-seek-forward-button`            | Safari Edge                |                                                                                                                                                                                                      |
| `media-toggle-closed-captions-button`  | Chrome Safari              |                                                                                                                                                                                                      |
| `media-slider`                         | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `media-sliderthumb`                    | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `media-volume-slider-container`        | Chrome Safari              |                                                                                                                                                                                                      |
| `media-volume-slider-mute-button`      | Safari                     |                                                                                                                                                                                                      |
| `media-volume-slider`                  | Chrome Safari              |                                                                                                                                                                                                      |
| `media-volume-sliderthumb`             | Chrome Safari              |                                                                                                                                                                                                      |
| `media-controls-background`            | Chrome Safari              |                                                                                                                                                                                                      |
| `media-controls-dark-bar-background`   | Safari                     |                                                                                                                                                                                                      |
| `media-controls-fullscreen-background` | Chrome Safari              |                                                                                                                                                                                                      |
| `media-controls-light-bar-background`  | Safari                     |                                                                                                                                                                                                      |
| `media-current-time-display`           | Chrome Safari              |                                                                                                                                                                                                      |
| `media-time-remaining-display`         | Chrome Safari              |                                                                                                                                                                                                      |
| `menulist-text`                        | Firefox Chrome Safari Edge |                                                                                                                                                                                                      |
| `menulist-textfield`                   | Firefox Chrome Safari Edge | L'élément est mis en forme comme le champ texte d'une liste de menu (non implémenté sur Windows).                                                                                                    |
| `meterbar`                             | Firefox                    | On utilisera `meter` à la place.                                                                                                                                                                     |
| `number-input`                         | Firefox                    |                                                                                                                                                                                                      |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                                                                                                                      |
| `progressbar`                          | Firefox                    | Cet élément est mis en forme comme une barre de progression, aussi, on utilisera `progress-bar` à la place.                                                                                          |
| `progressbar-vertical`                 | Firefox                    |                                                                                                                                                                                                      |
| `range`                                | Firefox                    |                                                                                                                                                                                                      |
| `range-thumb`                          | Firefox                    |                                                                                                                                                                                                      |
| `rating-level-indicator`               | Safari                     |                                                                                                                                                                                                      |
| `relevancy-level-indicator`            | Safari                     |                                                                                                                                                                                                      |
| `scale-horizontal`                     | Firefox                    |                                                                                                                                                                                                      |
| `scalethumbend`                        | Firefox                    |                                                                                                                                                                                                      |
| `scalethumb-horizontal`                | Firefox                    |                                                                                                                                                                                                      |
| `scalethumbstart`                      | Firefox                    |                                                                                                                                                                                                      |
| `scalethumbtick`                       | Firefox                    |                                                                                                                                                                                                      |
| `scalethumb-vertical`                  | Firefox                    |                                                                                                                                                                                                      |
| `scale-vertical`                       | Firefox                    |                                                                                                                                                                                                      |
| `scrollbarthumb-horizontal`            | Firefox                    |                                                                                                                                                                                                      |
| `scrollbarthumb-vertical`              | Firefox                    |                                                                                                                                                                                                      |
| `scrollbartrack-horizontal`            | Firefox                    |                                                                                                                                                                                                      |
| `scrollbartrack-vertical`              | Firefox                    |                                                                                                                                                                                                      |
| `searchfield-decoration`               | Safari Edge                |                                                                                                                                                                                                      |
| `searchfield-results-decoration`       | Chrome Safari Edge         | (Fonctionne sur Chrome 51 sur Windows 7)                                                                                                                                                             |
| `searchfield-results-button`           | Safari Edge                |                                                                                                                                                                                                      |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                                                                                                                      |
| `sheet`                                | None                       |                                                                                                                                                                                                      |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                                                                                                                      |
| `textfield-multiline`                  | Firefox                    | On utilisera `textarea` à la place.                                                                                                                                                                  |
| `-apple-pay-button`                    | Safari                     | **iOS et macOS uniquement**. Disponible pour le Web à partir de iOS 10.1 et macOS 10.12.1                                                                                                            |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

La règle suivante permet que l'élément ait l'apparence d'un bouton d'une barre d'outils :

```css
.exempleun {
  appearance: toolbarbutton;
  -moz-appearance: toolbarbutton;
  -webkit-appearance: toolbarbutton;
}
```

Voir également [cet exemple JSFiddle](https://jsfiddle.net/go392m5s/) qui illustre comment utiliser `appearance: none` afin d'appliquer une mise en forme spécifique aux boutons radio et aux cases à cocher.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Définition de `appearance` dans la recommandation CSS 3 Basic User Interface](https://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (_Candidate Recommendation_ du 11 mai 2004), qui n'est plus à jour
- [Les fonctionnalités abandonnées pour la spécification CSS3 sur le module d'interface utilisateur](https://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
