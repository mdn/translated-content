---
title: <input type="color">
slug: Web/HTML/Element/Input/color
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/color
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} de type **`"color"`** permettent de sélectionner une couleur via une interface (un sélecteur de couleur) ou en saisissant le code hexadécimal de la couleur au format `"#rrggbb"`. Ce format de valeur peut être utilisé en CSS.

L'apparence du contrôle de sélection des couleurs peut grandement varier d'un navigateur à un autre et d'un système d'exploitation à un autre. Pour certains navigateurs, seul un champ textuel sera affiché afin de saisir le code de la couleur (avec des mécanismes de validation vérifiant le format), pour d'autres, ce sera le sélecteur de couleur du système d'exploitation qui sera utilisé et pour d'autres encore, ce sera un sélecteur de couleur spécifique.

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

## Valeur

L'attribut {{htmlattrxref("value", "input")}} d'un élément `<input type="color">` est une chaîne de caractères sur 7 caractères qui correspond au code de la couleur en représentation hexadécimale RGB. Autrement dit, le premier caractère est un croisillon (#) , les deux suivants indiquent la composante rouge (R) de la couleur, les deux suivants indiquent la couleur verte (G pour _Green_ en anglais) et les deux suivants indiquent la composante bleue (B) de la couleur. La valeur respecte nécessairement ce format et n'est jamais vide.

> **Note :** Si la valeur saisie n'est pas un code hexadécimal RGB d'une couleur opaque valide, c'est la valeur `"#000000"` (c'est-à-dire la couleur noire) qui sera utilisée. Il est notamment impossible d'utiliser les noms de couleurs CSS ou des fonctions CSS afin de définir cette valeur. Il faut garder à l'esprit que HTML et CSS sont deux langages séparés, définis par des spécifications distinctes. De plus, les couleurs avec un canal alpha ne sont pas prises en charges, utiliser un code avec une notation sur 9 caractères entraînera également l'utilisation de `"#000000"`.

## Utiliser les contrôles de saisie des couleurs

Les éléments `<input type="color">` sont simples à utiliser (notamment en raison du faible nombre d'attributs qu'ils gèrent).

### Fournir une couleur par défaut

Il est possible de créer un sélecteur de couleur qui emploie une valeur par défaut :

```html
<input type="color" value="#ff0000">
```

{{EmbedLiveSample("Fournir_une_couleur_par_défaut", 700, 30)}}

Si aucune valeur n'est indiquée, c'est `"#000000"` qui sera utilisée par défaut (la couleur noire). Comme indiqué dans la note ci-avant, la valeur de cet attribut doit être de la forme `"#rrggbb"`. Pour les couleurs dans un autre format (couleurs nommées CSS ou couleurs calculées à l'aide des fonctions `rgb()` ou `rgba()`), il faudra les convertir au format hexadécimal avant de les utiliser pour `value`.

### Détecter le changement de couleur

Comme pour les différents éléments {{HTMLElement("input")}}, deux évènements peuvent être utilisés afin de détecter une modification de la couleur : {{event("input")}} et {{event("change")}}. `input` est déclenché sur l'élément `<input>` à chaque fois que la couleur change. L'évènement `change` est déclenché lorsque l'utilisateur ferme le sélecteur de couleur. Dans tous les cas, il est possible de déterminer la nouvelle valeur de l'élément grâce à {{domxref("HTMLInputElement.value", "value")}}.

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
```

### Sélectionner la valeur

Si l'implémentation du navigateur n'affiche pas de sélecteur de couleur mais un champ texte, il est possible de sélectionner la valeur du texte avec la méthode {{domxref("HTMLInputElement.select", "select()")}}. Si le navigateur affiche un sélecteur de couleur, `select()` ne fera rien. Soyez conscient⋅e de ce comportement afin d'adapter votre code à ce cas.

```js
colorWell.select();
```

## Validation

La valeur d'un tel champ est considérée invalide si l'interface utilisateur ne parvient pas à convertir la saisie de l'utilisateur en une notation hexadécimale sur sept caractères et en minuscules. Si c'est le cas, la pseudo-classe CSS {{cssxref(":invalid")}} sera appliquée à l'élément.

## Exemples

Créons un exemple qui utilise un sélecteur de couleur et les évènements {{event("change")}} et {{event("input")}} afin de choisir une nouvelle couleur et de l'appliquer sur chaque élément {{HTMLElement("p")}} du document.

### HTML

Le fragment de code HTML utilisé est relativement simple. On utilise quelques paragraphes descriptifs ainsi qu'un élément {{HTMLElement("input")}} de type `"color"` dont l'identifiant est `"colorWell"` (c'est la valeur de cette couleur qu'on utilisera pour changer la couleur du texte des paragraphes).

```html
<p>Un exemple qui illustre l'utilisation de <code>&lt;input type="color"&gt;</code>.</p>

<label for="colorWell">Couleur :</label>
<input type="color" value="#ff0000" id="colorWell">

<p>Vous pouvez ici voir que la couleur du premier paragraphe changer
   lorsqu'on ajuste la valeur dans le sélecteur. Pour cela, on
   utilise l'évènement <code>input</code>. Lorsqu'on ferme le
   sélecteur, l'évènement <code>change</code> est déclenché et on
   applique la modification est appliquée à l'ensemble des paragraphes.</p>
```

### JavaScript

Tout d'abord, on établit certains variables : une pour la couleur du sélecteur et une autre couleur pour la couleur par défaut. On ajoute un gestionnaire {{event("load")}} afin de lancer les actions de démarrage lorsque la page est chargée.

```js
var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisation

Lorsque la page est chargée, l'évènement `"load"` est déclenché et la fonction `startup()` est donc appelée :

```js
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
```

Dans cette fonction, on utilise la variable `colorWell` déclarée plus haut et on remplit sa valeur avec la valeur par défaut (la valeur de `defaultColor`). Ensuite, on indique les gestionnaires d'évènements : {{event("input")}} appellera `updateFirst()` et {{event("change")}} appellera `updateAll()` qui seront détaillés ensuite.

Enfin, on appelle {{domxref("HTMLInputElement.select", "select()")}} afin de sélectionner le texte du champ si le contrôle est un champ texte.

#### Réagir suite aux modifications de couleurs

On dispose de deux fonctions qui gèrent les modifications de couleurs. La fonction `updateFirst()` permet de répondre à l'évènement `input` et modifie la couleur du premier paragraphe dans le document en utilisant la nouvelle valeur saisie. Étant donné que les évènements `input` ont lieu à chaque fois qu'un ajustement est fait, cette fonction sera appelée sans cesse lorsque le sélecteur de couleur est utilisé.

```js
function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}
```

Lorsque le sélecteur est fermé, cela signifie que la valeur ne sera plus modifié avant une prochaine ouverture du sélecteur. Un évènement `change` est alors envoyé et cela déclenche alors l'appel de la fonction `updateAll()` :

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
```

Cela permet de modifier la couleur de chaque bloc {{HTMLElement("p")}} du document afin que la couleur (cf. {{cssxref("color")}}) soit celle sélectionnée dans le contrôle. Pour récupérer cette valeur, on utilise l'objet {{domxref("Event.target", "event.target")}}.

### Résultat

{{EmbedLiveSample("Exemples", 700, 200)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères sur sept caractères qui indique la couleur (cf.
        {{cssxref("&lt;color&gt;")}}) en notation hexadécimale (en
        minuscule).
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("change")}} et {{event("input")}}.</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}} et
        {{htmlattrxref("list", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>list</code> et <code>value</code>.</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                | État                             | Commentaires         |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', '#color-state-(type=color)')}} | {{Spec2('HTML WHATWG')}} |                      |
| {{SpecName('HTML5 W3C', 'forms.html#the-input-element')}} | {{Spec2('HTML5 W3C')}}     |                      |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.4')}}     | {{Spec2('HTML4.01')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-color")}}
