---
title: zoom
slug: Web/CSS/Reference/Properties/zoom
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

La propriété [CSS](/fr/docs/Web/CSS) **`zoom`** peut être utilisée pour contrôler le niveau de zoom d'un élément.
{{CSSxRef("transform-function/scale", "transform: scale()")}} peut être utilisée comme alternative à cette propriété.

La propriété CSS `zoom` met à l'échelle l'élément ciblé, ce qui peut affecter la mise en page.
Lors de la mise à l'échelle, l'élément zoomé est mis à l'échelle à partir du `haut` et du `centre` lorsqu'on utilise le {{CSSxRef("writing-mode")}} par défaut.

En revanche, un élément mis à l'échelle à l'aide de {{CSSxRef("transform-function/scale", "scale()")}} ne provoque pas de recalcul de la mise en page ni ne déplace les autres éléments de la page.
Si l'utilisation de `scale()` rend le contenu plus grand que l'élément contenant, alors {{CSSxRef("overflow")}} entre en jeu.
De plus, les éléments ajustés à l'aide de `scale()` sont transformés à partir du `centre` par défaut&nbsp;; cela peut être modifié avec la propriété CSS {{CSSxRef("transform-origin")}}.

## Syntaxe

```css
/* Valeurs de type <percentage> */
zoom: 50%;
zoom: 200%;

/* Valeurs de type <number> */
zoom: 1.1;
zoom: 0.7;

/* Valeurs non standard */
zoom: normal;
zoom: reset;

/* Valeurs globales */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Valeurs

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Facteur de zoom. `100%` est équivalent à `normal`. Les valeurs supérieures à `100%` agrandissent l'élément et les valeurs inférieures le réduisent.
- {{CSSxRef("&lt;number&gt;")}}
  - : Facteur de zoom. Équivalent au pourcentage correspondant (`1.0` = `100%` = `normal`). Les valeurs supérieures à `1.0` agrandissent l'élément et les valeurs inférieures le réduisent.

Deux valeurs de mot-clé non standard ne sont pas recommandées. Consultez les données de [compatibilité des navigateurs](#compatibilité_des_navigateurs)&nbsp;:

- `normal` {{Non-standard_Inline}}
  - : Rendre l'élément à sa taille normale&nbsp;; équivalent à `zoom: 1`. Utilisez plutôt la valeur globale {{CSSxRef("unset")}}.
- `reset` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Réinitialise la valeur à `zoom: 1` et empêche l'élément d'être (dé)zoomé si l'utilisateur·ice applique un zoom non basé sur le pincement (par exemple, en appuyant sur <kbd>Ctrl</kbd> \- <kbd>-</kbd> ou <kbd>Ctrl</kbd> \+ <kbd>+</kbd> sur le clavier) au document.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Redimensionner des paragraphes

Dans cet exemple, les éléments de paragraphe sont zoomés. Lorsque vous survolez un paragraphe, la valeur de `zoom` est `unset`.

#### HTML

```html
<p class="petit">Petit</p>
<p class="normal">Normal</p>
<p class="gros">Gros</p>
```

### CSS

```css hidden
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}
```

```css
.petit {
  zoom: 75%;
}
.normal {
  zoom: normal;
}
.gros {
  zoom: 2.5;
}
p:hover {
  zoom: unset;
}
```

### Résultat

{{EmbedLiveSample("Redimensionner des paragraphes")}}

### Créer un contrôle de zoom

Dans cet exemple, un champ `select` est utilisé pour changer le niveau de zoom de l'élément.

#### HTML

Dans ce premier bloc HTML, un champ `select` est défini avec les différentes valeurs de `zoom` à utiliser.

```html
<section class="controles">
  <label for="zoom"
    >Niveau de zoom
    <select name="zoom" id="zoom">
      <option value="0.5">Très petit</option>
      <option value="0.75">Petit</option>
      <option value="normal" selected>Normal</option>
      <option value="1.5">Grand</option>
      <option value="2">Très grand</option>
    </select>
  </label>
</section>
```

Dans ce deuxième bloc, un message **non pris en charge** est ajouté et sera masqué si le navigateur prend en charge `zoom`.

```html
<p class="zoom-notice">Le zoom CSS n'est pas pris en charge</p>
```

Le dernier bloc définit simplement le contenu qui sera zoomé.

```html
<section class="contenu">
  <h1>Ceci est le titre</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
</section>
```

#### CSS

Dans ce premier bloc de CSS, nous définissons la valeur de départ pour `--zoom-level` en utilisant des [propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*) puis nous utilisons cette valeur pour `zoom` sur le bloc de contenu.

```css
html {
  --niveau-zoom: normal;
}
.contenu {
  max-width: 60ch;
  margin: auto;
  zoom: var(--niveau-zoom);
}
```

```css hidden
.controles,
.zoom-notice {
  display: flex;
  justify-content: space-around;
}
.zoom-notice {
  color: red;
}
```

In this final CSS block we are checking to see if the browser supports `zoom` and if so setting the **not supported** message to `display: none;`.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Ce JavaScript surveille les changements dans le champ `select` et définit la nouvelle valeur pour `--niveau-zoom` sur la section de contenu, par exemple, `style="--niveau-zoom: 1.5;"`.

```js
const controleZoom = document.querySelector("#zoom");
const contenu = document.querySelector(".contenu");
const updateZoom = () => {
  contenu.style = `--niveau-zoom: ${controleZoom.value}`;
};
controleZoom.addEventListener("change", updateZoom);
```

#### Résultat

{{EmbedLiveSample("Créer un contrôle de zoom", 550, 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'entrée `zoom` dans le CSS Almanac de CSS-Tricks <sup>(angl.)</sup>](https://css-tricks.com/almanac/properties/z/zoom/)
- La propriété {{CSSxRef("transform")}}
- La propriété {{CSSxRef("scale")}}
- Le mot-clé {{CSSxRef("unset")}}
- [La propriété `zoom` héritée <sup>(angl.)</sup>](https://css-tricks.com/almanac/properties/z/zoom/) sur CSS-Tricks (2013)
