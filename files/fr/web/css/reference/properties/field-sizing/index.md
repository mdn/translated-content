---
title: field-sizing
slug: Web/CSS/Reference/Properties/field-sizing
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`field-sizing`** permet de contrôler le comportement de dimensionnement des éléments qui reçoivent une taille préférée par défaut, comme les éléments de contrôle de formulaire. Cette propriété permet de remplacer le comportement de dimensionnement par défaut, afin que les contrôles de formulaire s'ajustent à la taille de leur contenu.

Cette propriété est généralement utilisée pour mettre en forme les éléments de texte {{HTMLElement("input")}} et {{HTMLElement("textarea")}} afin de leur permettre d'épouser leur contenu et de grandir lorsque plus de texte est saisi dans le contrôle de formulaire.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
field-sizing: content;
field-sizing: fixed;

/* Valeurs globales */
field-sizing: inherit;
field-sizing: initial;
field-sizing: revert;
field-sizing: revert-layer;
field-sizing: unset;
```

### Valeurs

- `content`
  - : Permet à l'élément d'ajuster sa taille pour s'adapter à son contenu.
- `fixed`
  - : Définit une taille fixe pour l'élément. Il s'agit de la valeur par défaut.

## Description

`field-sizing: content` remplace la taille préférée par défaut des éléments de formulaire. Ce paramètre permet de configurer les champs de texte pour qu'ils épousent leur contenu et grandissent à mesure que du texte est saisi. Ils cessent de s'agrandir lorsqu'ils atteignent les limites maximales de taille (définies par la taille de leur élément englobant ou avec CSS), moment où un défilement est nécessaire pour voir tout le contenu.

### Éléments affectés par `field-sizing: content`

Plus précisément, `field-sizing` à `content` affecte les éléments suivants&nbsp;:

- Les types de champs de saisie de formulaire qui acceptent une saisie de texte directe par l'utilisateur·ice. Cela inclut les types [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email), [`number`](/fr/docs/Web/HTML/Reference/Elements/input/number), [`password`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text) et [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url).
  - Si aucune largeur minimale n'est définie sur le contrôle, il n'aura que la largeur du curseur de texte.
  - Les contrôles avec un attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) seront affichés assez larges pour montrer le texte d'exemple.
  - L'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) modifie la taille préférée par défaut de ces éléments `<input>`. Par conséquent, `size` n'a aucun effet sur les éléments `<input>` avec `field-sizing: content`.
- Les champs [`file`](/fr/docs/Web/HTML/Reference/Elements/input/file). La saisie de texte directe n'est pas possible&nbsp;; cependant, le nom de fichier affiché change lorsque l'utilisateur·ice sélectionne un nouveau fichier à téléverser. Quand `field-sizing: content` est activé, le contrôle change de taille pour épouser le nom de fichier.
- Les contrôles {{HTMLElement("textarea")}}. À noter que les éléments `<textarea>` avec `field-sizing: content` se comportent comme des champs de texte sur une seule ligne, avec les ajouts suivants&nbsp;:
  - Si les éléments `<textarea>` ne peuvent pas grandir à cause d'une contrainte de largeur, ils commenceront à grandir en hauteur pour afficher des lignes supplémentaires. Lorsqu'une contrainte de hauteur est atteinte, une barre de défilement apparaît pour permettre de voir tout le contenu.
  - Les attributs [`rows`](/fr/docs/Web/HTML/Reference/Elements/textarea#cols) et [`cols`](/fr/docs/Web/HTML/Reference/Elements/textarea#cols) modifient la taille préférée par défaut d'un `<textarea>`. Par conséquent, `rows`/`cols` n'ont aucun effet sur les éléments `<textarea>` avec `field-sizing: content`.
- Les contrôles {{HTMLElement("select")}}. Ceux-ci se comportent un peu différemment de ce que l'on pourrait attendre avec `field-sizing: content`. L'effet dépend du type de contrôle `<select>` créé&nbsp;:
  - Les menus déroulants classiques changent de largeur pour toujours s'adapter à la valeur de l'option affichée au fur et à mesure que de nouvelles valeurs sont sélectionnées. (Par défaut, la taille du menu déroulant est suffisante pour afficher la valeur de l'option la plus longue.)
  - Les boîtes de liste (`<select>` avec l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple) ou [`size`](/fr/docs/Web/HTML/Reference/Elements/select#multiple)) seront assez grandes pour afficher toutes les options sans avoir besoin de faire défiler. (Par défaut, la boîte déroulante nécessite un défilement pour voir toutes les options.)
  - L'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/select#size) a très peu d'effet sur les éléments `<select>` ayant `field-sizing: content`. Dans ce cas, le navigateur vérifie si `size` vaut `1` pour déterminer si le contrôle `<select>` doit apparaître comme un menu déroulant ou une boîte de liste. Cependant, il affichera toujours toutes les options d'une boîte de liste, même si `size` est inférieur au nombre d'options.

### Interaction de `field-sizing` avec d'autres réglages de taille

La flexibilité de dimensionnement offerte aux contrôles de formulaire par `field-sizing: content` peut être annulée si vous utilisez d'autres propriétés CSS de dimensionnement. Évitez de définir une {{CSSxRef("width")}} ou une {{CSSxRef("height")}} fixe avec `field-sizing: content` car cela réimposera une taille fixe au contrôle. Cependant, utiliser des propriétés comme {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}} avec `field-sizing: content` est très efficace car cela permet au contrôle de grandir et de rétrécir avec le texte saisi tout en évitant qu'il ne devienne trop grand ou trop petit.

L'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) fait que le contrôle cesse de grandir lorsque la limite maximale de caractères est atteinte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Agrandir/Réduire les champs de texte

Cet exemple illustre l'effet de `field-sizing: content` sur les champs de texte sur une ou plusieurs lignes. Les champs ajustent leur taille à mesure que du texte est ajouté ou supprimé, épousant ainsi leur contenu, jusqu'à atteindre une limite inférieure ou supérieure de taille.

#### HTML

Le HTML de cet exemple contient trois champs de formulaire, chacun avec un {{HTMLElement("label")}} associé&nbsp;: deux éléments HTML `<input>` de types [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text) et [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email) et un élément HTML {{HTMLElement("textarea")}}.

```html
<div>
  <label for="name">Entrer le nom&nbsp;:</label>
  <input type="text" id="name" maxlength="50" />
</div>
<div>
  <label for="email">Entrer l'adresse électronique&nbsp;:</label>
  <input type="email" id="email" maxlength="50" placeholder="exemple a@b.com" />
</div>
<div>
  <label for="comment">Entrer un commentaire&nbsp;:</label>
  <textarea id="comment">Ceci est un commentaire.</textarea>
</div>
```

Remarquez les points suivants concernant le HTML&nbsp;:

- Les deux premiers champs ont un attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) qui empêche la taille du champ d'augmenter lorsque la limite de caractères est atteinte.
- Le `<textarea>` grandit dans la direction en ligne jusqu'à atteindre la contrainte {{CSSxRef("min-width")}} (définie dans le code CSS ci-dessous), puis commence à ajouter de nouvelles lignes dans la direction bloc pour contenir les caractères supplémentaires.
- Le champ `email` a un texte d'exemple (placeholder). Cela fait que le champ est affiché assez grand pour montrer tout le texte d'exemple. Une fois le champ sélectionné et que l'utilisateur commence à saisir, le champ change de taille pour la valeur de `min-width`. Le champ `text`, qui n'a pas de texte d'exemple, s'affiche initialement à `min-width`.

#### CSS

Dans le CSS, nous appliquons `field-sizing: content` sur les trois champs de formulaire, ainsi que {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}} pour limiter la taille de saisie. Il est important de rappeler que, si aucune largeur minimale n'est définie sur les champs, ils n'auront que la largeur du curseur de texte.

Nous appliquons également un style de base aux `<label>` pour qu'ils soient bien alignés à côté des champs.

```css hidden
body {
  box-sizing: border-box;
  padding: 20px;
}

div {
  margin-bottom: 20px;
  display: flex;
}
```

```css
input,
textarea {
  field-sizing: content;
  min-width: 50px;
  max-width: 350px;
}

label {
  width: 150px;
  margin-right: 20px;
  text-align: right;
}
```

#### Résultat

Essayez d'entrer et de supprimer du texte dans les champs ci-dessous pour explorer les effets de `field-sizing: content` avec d'autres propriétés de taille.

{{EmbedLiveSample("Agrandir/Réduire les champs de texte", "100%", 200)}}

### Contrôler l'affichage des éléments `<select>`

Cet exemple illustre l'effet de `field-sizing: content` sur les éléments HTML {{HTMLElement("select")}}, aussi bien pour les menus déroulants que pour les boîtes de liste multiligne.

#### HTML

Le HTML contient deux ensembles d'éléments `<select>`&nbsp;: un avec `field-sizing: content` appliqué, et un sans, pour permettre de voir la différence (même si l'effet peut être moins visible que sur les champs de texte). Chaque ensemble inclut un menu déroulant et une boîte de liste multiligne (avec l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple)).

```html
<div class="field-sizing">
  <h2>Avec <code>field-sizing: content</code></h2>
  <select>
    <option>Bananes</option>
    <option>Fraises</option>
    <option selected>Pommes</option>
    <option>Framboises</option>
    <option>Grenade</option>
  </select>
  <select multiple>
    <option>Bananes</option>
    <option>Fraises</option>
    <option>Pommes</option>
    <option>Framboises</option>
    <option>Grenade</option>
  </select>
</div>
<div>
  <h2>Sans <code>field-sizing: content</code></h2>
  <select>
    <option>Bananes</option>
    <option>Fraises</option>
    <option selected>Pommes</option>
    <option>Framboises</option>
    <option>Grenade</option>
  </select>
  <select multiple>
    <option>Bananes</option>
    <option>Fraises</option>
    <option>Pommes</option>
    <option>Framboises</option>
    <option>Grenade</option>
  </select>
</div>
```

> [!NOTE]
> Il est recommandé d'inclure un élément HTML {{HTMLElement("label")}} pour chaque contrôle de formulaire, afin d'associer une description textuelle pertinente à chaque champ pour l'accessibilité (voir [Utiliser des libellés textuels pertinents](/fr/docs/Learn_web_development/Core/Accessibility/HTML#étiquettes_de_texte_significatives) pour plus d'informations). Nous ne l'avons pas fait dans cet exemple, car il se concentre uniquement sur l'aspect visuel des contrôles de formulaire, mais vous devez toujours inclure des libellés dans le code de production.

#### CSS

Dans le CSS, `field-sizing: content` est appliqué uniquement sur le premier ensemble d'éléments `<select>`.

```css hidden
body {
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 1rem;
  text-align: center;
  flex: 1 0 100%;
}

div {
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: row wrap;
}
```

```css
.field-sizing select {
  field-sizing: content;
}
```

#### Résultat

{{EmbedLiveSample("Contrôler l'affichage des éléments `<select>`", "100%", 170)}}

Remarquez les effets suivants de `field-sizing: content`&nbsp;:

- Le menu déroulant s'adapte toujours à la taille de l'option affichée, changeant de taille à mesure que différentes options sont sélectionnées. Sans `field-sizing: content`, la taille est fixée à la largeur de l'option la plus longue.
- La boîte de liste à sélection multiple affiche toutes les options en même temps. Sans `field-sizing: content`, l'utilisateur·ice doit faire défiler la boîte pour voir toutes les options.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("textarea")}}
