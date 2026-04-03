---
title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-box-trim`** définit quels bords supérieur et inférieur du contenu textuel doivent être supprimés du conteneur de bloc d'un élément de texte.

L'espacement vertical varie selon les polices, ce qui rend la composition typographique cohérente historiquement difficile sur le web. La propriété `text-box-trim` — ainsi que sa propriété complémentaire {{CSSxRef("text-box-edge")}}, qui définit la quantité d'espace à supprimer — facilite l'obtention d'une composition typographique cohérente.

> [!NOTE]
> La propriété raccourcie {{CSSxRef("text-box")}} peut être utilisée pour définir les valeurs `text-box-trim` et `text-box-edge` dans une seule déclaration.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-box-trim: none;
text-box-trim: trim-both;
text-box-trim: trim-start;
text-box-trim: trim-end;

/* Valeurs globales */
text-box-trim: inherit;
text-box-trim: initial;
text-box-trim: revert;
text-box-trim: revert-layer;
text-box-trim: unset;
```

### Valeurs

La valeur de la propriété `text-box-trim` peut être définie comme l'un des mots-clés suivants&nbsp;:

- `none`
  - : La valeur par défaut. Aucun espace n'est supprimé du texte.
- `trim-both`
  - : Les bords de début (supérieur) et de fin (inférieur) sont tous deux supprimés.
- `trim-start`
  - : Le bord de début (supérieur) est supprimé.
- `trim-end`
  - : Le bord de fin (inférieur) est supprimé.

## Description

La hauteur du contenu composé uniquement de texte est relative à la hauteur de la police. Dans les fichiers de polices numériques, la hauteur inclut tous les caractères, y compris les lettres majuscules, les hampes, les jambages, etc. Les différentes polices ont des hauteurs de ligne de base différentes, ce qui signifie que des lignes de texte avec la même valeur de `font-size` produiront des boîtes de ligne de hauteurs différentes, affectant l'apparence de l'espacement entre les lignes.

La propriété `text-box-trim` permet de supprimer l'espace du bord supérieur et/ou du bord inférieur du conteneur de bloc d'un élément de texte, ce qui facilite le contrôle de l'espacement du texte dans la direction du bloc.

La quantité réelle d'espace supprimée est définie à l'aide de la propriété {{CSSxRef("text-box-edge")}}. Par exemple, vous pouvez choisir de supprimer l'espace du bord supérieur en fonction des lettres majuscules ou des lettres minuscules, et du bord inférieur en fonction de la ligne de base de la police.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `text-box-trim`

Dans l'exemple suivant, nous définissons `text-box-edge: cap alphabetic` sur deux paragraphes, ce qui supprime l'espace du bord supérieur des conteneurs de bloc des éléments de texte jusqu'au sommet des lettres majuscules et le bord inférieur jusqu'à la ligne de base du texte.

Nous définissons ensuite les valeurs de `text-box-trim` sur `trim-end` pour le premier paragraphe et sur `trim-both` pour le second. Cela entraîne la suppression de l'espace uniquement du bord inférieur du premier paragraphe, tandis que le second a à la fois le bord supérieur _et_ le bord inférieur supprimé.

```html hidden
<p class="one">C'est le .un</p>

<p class="two">C'est le .deux</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-edge: cap alphabetic;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-trim: trim-end;
}

.two {
  text-box-trim: trim-both;
}
```

#### Résultat

La sortie est la suivante. Notez comment nous avons inclus une bordure supérieure et inférieure sur chaque paragraphe, afin que vous puissiez voir comment l'espace a été supprimé dans chaque cas.

{{EmbedLiveSample("Utilisation simple de `text-box-trim`", "100%", 360)}}

### Comparer les valeurs `text-box-trim` et `text-box-edge` de manière interactive

Dans cet exemple, nous fournissons une interface utilisateur qui vous permet de choisir les valeurs `text-box-trim` et `text-box-edge` appliquées à un paragraphe de texte.

#### HTML

Dans notre HTML, nous incluons trois éléments principaux&nbsp;:

- Trois éléments HTML {{HTMLElement("select")}} permettant de définir quels bords du paragraphe doivent être supprimés (la valeur `text-box-trim`) et combien d'espace doit être supprimé des bords de début et de fin du bloc du paragraphe (la valeur {{CSSxRef("text-box-edge")}}).
- Un élément HTML {{HTMLElement("p")}} contenant du texte, auquel les valeurs `text-box-*` sont appliquées. Ce paragraphe a l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) défini afin que vous puissiez modifier le texte.
- Un élément HTML {{HTMLElement("output")}} qui affiche les déclarations `text-box-*` appliquées au paragraphe. Cela est mis à jour lorsqu'une sélection est effectuée.

Nous importons également une police depuis le service Google Fonts pour l'appliquer au texte de notre démonstration.

Nous avons masqué le code HTML exact pour des raisons de concision.

```html hidden
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet" />
<section>
  <div>
    <label for="box-trim">Sélectionnez le(s) bord(s) à supprimer&nbsp;:</label>
    <select id="box-trim">
      <option>none</option>
      <option>trim-start</option>
      <option>trim-end</option>
      <option selected>trim-both</option>
    </select>
  </div>
  <div>
    <label for="trim-over"
      >Sélectionnez la valeur de suppression supérieure (début)&nbsp;:</label
    >
    <select id="trim-over">
      <option>text</option>
      <option selected>cap</option>
      <option>ex</option>
    </select>
  </div>
</section>
<p class="display" contenteditable>Holly Golightly</p>
<section>
  <div>
    <label for="trim-under"
      >Sélectionnez la valeur de suppression inférieure (fin)&nbsp;:</label
    >
    <select id="trim-under">
      <option>text</option>
      <option selected>alphabetic</option>
    </select>
  </div>
</section>
<output></output>
```

#### CSS

Dans notre CSS, nous appliquons la police importée à l'élément {{HTMLElement("html")}} et disposons l'interface utilisateur en utilisant [la disposition flexible](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox). Nous avons masqué la plupart du code CSS pour des raisons de concision, mais ci-dessous nous montrons les règles mettant en forme le paragraphe auquel les effets `text-box-*` sont appliqués et le `<output>` qui affiche les règles `text-box-*` appliquées&nbsp;:

```css hidden
html {
  font-family: "Roboto", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

section {
  display: flex;
  justify-content: space-between;
}

section:nth-of-type(2) {
  justify-content: flex-end;
  padding-bottom: 30px;
}

select {
  width: 6rem;
}
```

```css
p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

output {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  width: fit-content;
}
```

Encore une fois, notez comment nous avons inclus une bordure en haut et en bas du paragraphe `.display`, afin que vous puissiez voir comment l'espace étant supprimé change lorsque différentes valeurs `text-box-*` sont sélectionnées.

#### JavaScript

Dans le JavaScript, nous commençons par récupérer les références aux trois éléments `<select>` et aux deux éléments `<p>`&nbsp;:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Ensuite, nous définissons une fonction appelée `setEdgeTrim()`. Cette fonction applique une valeur {{CSSxRef("text-box")}} au paragraphe en fonction des valeurs des éléments `<select>`, et affiche également les déclarations appliquées dans la sortie (à la fois les équivalents en longue et courte forme)&nbsp;:

```js
function setEdgeTrim() {
  const textBoxTrimValue = boxTrimSelect.value;
  const textBoxEdgeValue = `${trimOverSelect.value} ${trimUnderSelect.value}`;
  displayElem.style.textBox = `${textBoxTrimValue} ${textBoxEdgeValue}`;

  codeElem.innerHTML = `
    <span><code>text-box-trim: ${textBoxTrimValue}</code></span>
    <br>
    <span><code>text-box-edge: ${textBoxEdgeValue}</code></span>
    <br><br>
    <span>Équivalent abrégé :</span>
    <br><br>
    <span><code>text-box: ${textBoxTrimValue} ${textBoxEdgeValue}</code></span>
  `;
}
```

Dans la dernière partie du JavaScript, nous exécutons la fonction `setEdgeTrim()` une fois pour définir un état initial pour l'interface utilisateur. Nous appliquons ensuite des écouteurs d'événements {{DOMxRef("HTMLElement/change_event", "change")}} à tous les éléments `<select>` (avec {{DOMxRef("EventTarget/addEventListener", "addEventListener")}}) afin que `setEdgeTrim()` soit exécuté chaque fois que l'une des valeurs `<select>` change pour mettre à jour l'interface utilisateur en conséquence&nbsp;:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Résultat

La sortie est la suivante&nbsp;:

{{EmbedLiveSample("Comparer les valeurs `text-box-trim` et `text-box-edge` de manière interactive", "100%", 520)}}

`text-box-trim` est initialement défini sur `trim-both`, ce qui signifie que les bords supérieur _et_ inférieur du paragraphe sont rognés. `text-box-edge` est initialement défini sur `cap alphabetic`, ce qui signifie que le texte est rogné au niveau du haut des lettres majuscules au bord de départ, et au niveau de la ligne de base au bord de fin.

Essayez de changer les valeurs des `<select>` pour voir l'effet qu'elles ont sur le texte affiché.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("text-box")}}, {{CSSxRef("text-box-edge")}}
- Le module [de disposition en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout)
- [La propriété CSS text-box-trim <sup>(angl.)</sup>](https://developer.chrome.com/blog/css-text-box-trim) sur developer.chrome.com (2025)
