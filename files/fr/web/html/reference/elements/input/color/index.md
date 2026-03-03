---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Les éléments {{HTMLElement("input")}} de type **`color`** fournissent un élément d'interface utilisateur permettant à l'utilisateur·ice de définir une couleur, soit en utilisant une interface visuelle de sélection de couleur, soit en saisissant la couleur dans un champ texte au format [valeur de couleur CSS](/fr/docs/Web/CSS/Reference/Values/color_value).

La présentation de l'élément peut varier considérablement d'un navigateur et/ou d'une plateforme à l'autre — il peut s'agir d'un champ textuel basique qui valide automatiquement afin de s'assurer que l'information de couleur est saisie dans le bon format, ou d'un sélecteur de couleur standard de la plateforme, ou d'une fenêtre de sélection de couleur personnalisée.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Choisissez vos couleurs&nbsp;:</p>

<div>
  <input type="color" id="foreground" name="foreground" value="#e66465" />
  <label for="foreground">Couleur de premier plan</label>
</div>

<div>
  <input
    type="color"
    id="background"
    name="background"
    value="oklab(50% 0.1 0.1 / 0.5)"
    colorspace="display-p3"
    alpha />
  <label for="background">Couleur d'arrière-plan</label>
</div>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

## Valeur

Une [valeur de couleur CSS](/fr/docs/Web/CSS/Reference/Values/color_value).

> [!NOTE]
> Historiquement, seules les couleurs hexadécimales de base (sans canal alpha) étaient autorisées. Désormais, n'importe quel format de couleur CSS, y compris les noms de couleurs, les notations fonctionnelles et les couleurs hexadécimales avec un canal alpha, peut être utilisé. La valeur par défaut est `#000000` (noir) si un `value` est omis ou invalide.

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et des [attributs de champ](/fr/docs/Web/HTML/Reference/Elements/input#attributs) communs à tous les éléments {{HTMLElement("input")}}, le champ de type `color` prend aussi en charge les attributs suivants&nbsp;:

- `alpha` {{Experimental_Inline}}
  - : Un attribut {{Glossary("Boolean/HTML", "booléen")}}, s'il est présent, indique que la composante alpha de la couleur peut être manipulée par l'utilisateur·ice et n'a pas besoin d'être totalement opaque.

- `colorspace` {{Experimental_Inline}}
  - : Définit {{Glossary("color space", "l'espace colorimétrique")}} pour la couleur et suggère l'interface utilisateur souhaitée pour le sélecteur de couleur. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont&nbsp;:
    - `"limited-srgb"`&nbsp;: La couleur est dans l'espace colorimétrique {{Glossary("RGB", "sRGB")}}. Cela inclut les valeurs {{CSSxRef("color_value/rgb", "rgb()")}}, {{CSSxRef("color_value/hsl", "hsl()")}}, {{CSSxRef("color_value/hwb", "hwb()")}} et {{CSSxRef("hex-color")}}. La valeur de couleur est limitée à 8 bits par composante `r`, `g` et `b`. C'est la valeur par défaut.
    - `"display-p3"`&nbsp;: L'espace colorimétrique [Display P3](/fr/docs/Glossary/Color_space#display-p3), par exemple, `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Utiliser les contrôles de saisie des couleurs

Les champs de type `color` sont simples, en raison du nombre limité d'attributs qu'ils prennent en charge.

### Fournir une couleur par défaut

Vous pouvez modifier l'exemple ci-dessus pour définir une valeur par défaut, afin que le sélecteur de couleur soit prérempli avec la couleur par défaut et que le sélecteur de couleur (s'il existe) utilise également cette couleur par défaut.

```html
<input type="color" value="#ff0000" />
<input
  type="color"
  id="body"
  name="body"
  value="oklab(50% 0.1 0.1 / 0.5)"
  colorspace="display-p3"
  alpha />
```

{{EmbedLiveSample("Fournir une couleur par défaut", 700, 30)}}

Si vous n'indiquez pas de valeur ou si la valeur est invalide ou non prise en charge par le navigateur, la valeur par défaut sera `#000000`, c'est-à-dire le noir opaque.

### Détecter le changement de couleur

Comme pour les autres types {{HTMLElement("input")}}, il existe deux évènements qui peuvent être utilisés pour détecter les changements de la valeur de couleur&nbsp;: {{DOMxRef("Element/input_event", "input")}} et {{DOMxRef("HTMLElement/change_event", "change")}}. `input` est déclenché sur l'élément `<input>` à chaque fois que la couleur change. L'évènement `change` est déclenché lorsque l'utilisateur·ice ferme le sélecteur de couleur. Dans les deux cas, vous pouvez déterminer la nouvelle valeur de l'élément en consultant sa [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value).

Voici un exemple qui observe les changements de la valeur de couleur au fil du temps&nbsp;:

```js
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Sélectionner la valeur

Lorsque le navigateur ne prend pas en charge une interface de sélection de couleur, son implémentation des contrôles de couleur sera une zone de texte qui valide automatiquement le contenu afin de s'assurer que la valeur est au bon format. Dans ce cas, vous pouvez utiliser la méthode {{DOMxRef("HTMLInputElement.select", "select()")}} pour sélectionner le texte actuellement présent dans le champ de saisie.

Si le navigateur utilise à la place un sélecteur de couleur, `select()` ne fait rien. Vous devez être conscient·e de ce comportement afin que votre code puisse réagir correctement dans chaque cas.

```js
colorWell.select();
```

## Validation

La valeur d'un contrôle de couleur est considérée comme invalide si le {{Glossary("user agent", "agent utilisateur")}} n'est pas capable de convertir la saisie de l'utilisateur·ice en une notation hexadécimale sur sept caractères en minuscules. Si et quand cela se produit, la pseudo-classe {{CSSxRef(":invalid")}} est appliquée à l'élément.

## Exemples

Créons un exemple qui va un peu plus loin avec le contrôle de couleur en suivant les évènements {{DOMxRef("HTMLElement/change_event", "change")}} et {{DOMxRef("Element/input_event", "input")}} pour récupérer la nouvelle couleur et l'appliquer à chaque élément {{HTMLElement("p")}} du document.

### HTML

Le code HTML est assez simple — quelques paragraphes descriptifs avec un élément {{HTMLElement("input")}} de type `color` dont l'identifiant est `color-picker`, que nous utiliserons pour changer la couleur du texte des paragraphes.

```html
<p>
  Un exemple qui illustre l'utilisation de
  <code>&lt;input type="color"&gt;</code>.
</p>

<label for="color-picker">Couleur&nbsp;:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Vous pouvez ici voir que la couleur du premier paragraphe changer lorsqu'on
  ajuste la valeur dans le sélecteur. Pour cela, on utilise l'évènement
  <code>input</code>. Lorsqu'on ferme le sélecteur, l'évènement
  <code>change</code> est déclenché et on applique la modification est appliquée
  à l'ensemble des paragraphes.
</p>
```

### JavaScript

#### Initialisation

Le code suivant initialise le contrôle de couleur&nbsp;:

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

On récupère une référence à l'élément `<input>` de couleur dans une variable appelée `colorPicker`, puis on définit la valeur du contrôle de couleur sur celle de `defaultColor`. Ensuite, l'évènement {{DOMxRef("Element/input_event", "input")}} du contrôle de couleur est configuré pour appeler notre fonction `updateFirst()`, et l'évènement {{DOMxRef("HTMLElement/change_event", "change")}} est configuré pour appeler `updateAll()`. Ces deux éléments sont visibles ci-dessous.

Enfin, on appelle {{DOMxRef("HTMLInputElement.select", "select()")}} afin de sélectionner le texte du champ si le contrôle est un champ texte.

#### Réagir suite aux modifications de couleurs

On dispose de deux fonctions qui gèrent les modifications de couleurs. La fonction `updateFirst()` permet de répondre à l'évènement `input` et modifie la couleur du premier paragraphe dans le document en utilisant la nouvelle valeur saisie. Étant donné que les évènements `input` ont lieu à chaque fois qu'un ajustement est fait, cette fonction sera appelée sans cesse lorsque le sélecteur de couleur est utilisé.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Lorsque le sélecteur de couleur est fermé, ce qui indique que la valeur ne changera plus (sauf si l'utilisateur·ice rouvre le sélecteur), un évènement `change` est envoyé à l'élément. Nous gérons cet évènement avec la fonction `updateAll()`, en utilisant [`Event.target.value`](/fr/docs/Web/HTML/Reference/Elements/input#value) pour obtenir la couleur finale sélectionnée&nbsp;:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Cela définit la couleur de chaque bloc {{HTMLElement("p")}} afin que son attribut {{CSSxRef("color")}} corresponde à la valeur actuelle du contrôle de couleur, qui est référencée via {{DOMxRef("Event.target", "event.target")}}.

### Résultat

Le résultat final ressemble à ceci&nbsp;:

{{EmbedLiveSample("Exemples", 700, 200)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Toutes les valeurs CSS {{CSSxRef("&lt;color&gt;")}} de n'importe quelle notation.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/alpha"><code>alpha</a></code>,
        <a href="/fr/docs/Web/API/HTMLInputElement/colorSpace"><code>colorSpace</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/list"><code>list</code></a> et
        <a href="/fr/docs/Web/API/HTMLInputElement/value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété API {{DOMxRef("HTMLInputElement.alpha")}}
- La propriété API {{DOMxRef("HTMLInputElement.colorspace")}}
