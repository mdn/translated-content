---
title: <input type="image">
slug: Web/HTML/Element/input/image
---

{{HTMLSidebar}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/input) dont l'attribut `type` vaut **`image`** sont utilisés pour créer des boutons d'envoi de formulaire graphiques. Autrement dit, il s'agit de boutons d'envoi qui affichent une image plutôt qu'un texte.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Aucune, l'attribut <code>value</code> ne devrait pas être renseigné.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Attributs communs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/input#attr-alt"><code>alt</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-src"><code>src</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-width"><code>width</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-height"><code>height</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-formaction"><code>formaction</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-formenctype"><code>formenctype</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-formmethod"><code>formmethod</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-formnovalidate"><code>formnovalidate</code></a>, <a href="/fr/docs/Web/HTML/Element/input#attr-formtarget"><code>formtarget</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLInputElement"><code>HTMLInputElement</code></a></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
  </tbody>
</table>

## Valeur

Les éléments `<input type="image">` n'acceptent pas l'attribut `value`. Le chemin vers le fichier de l'image à afficher est indiqué via l'attribut `src`.

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/input), les boutons `image` prennent en charge les attributs suivants.

### `alt`

L'attribut `alt` fournit une chaîne de caractères alternative à utiliser si l'image du bouton ne peut être affichée (suite à une erreur, à un [agent utilisateur](/fr/docs/Glossary/User_agent) qui ne peut pas ou n'est pas configuré pour afficher les images, ou si la personne utilise un outil de lecture d'écran). Si cet attribut est fourni, il doit être une chaîne de caractères non-vide qui est un libellé pertinent pour le bouton.

Ainsi, si un bouton graphique affiche une image avec une icône ou une image avec un texte "Se connecter", l'attribut `alt` devrait être renseigné avec une valeur comme `Se connecter`.

> **Note :** Bien que l'attribut `alt` soit optionnel sur le plan technique, il devrait en pratique toujours être inclus afin de maximiser l'utilisabilité du contenu.

D'un point de vue fonctionnel, l'attribut `alt` de `<input type="image">` `alt` se comporte de façon analogue à l'attribut [`alt`](/fr/docs/Web/HTML/Element/Img#attr-alt) des éléments [`<img>`](/fr/docs/Web/HTML/Element/Img).

### `formaction`

Une chaîne de caractères qui indique l'URL vers laquelle envoyer les données du formulaire. La valeur de cet attribut surcharge celle de l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) propriétaire de cet élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit) et [`<button>`](/fr/docs/Web/HTML/Element/Button).

### `formenctype`

Une chaîne de caractères qui identifie la méthode d'encodage à utiliser lors de l'envoi des données du formulaire au serveur. Trois valeurs sont possibles&nbsp;:

- `application/x-www-form-urlencoded`
  - : La valeur par défaut. Les données sont envoyées sous forme d'une chaîne de caractères après l'URL en encodant le texte avec un algorithme comme celui de [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `multipart/form-data`
  - : Utilise l'API [`FormData`](/fr/docs/Web/API/FormData) pour gérer les données et permet d'envoyer des fichiers au serveur. Ce type d'encodage _doit_ être utilisé si le formulaire contient des éléments [`<input type="file">`](/fr/docs/Web/HTML/Element/Input/file).
- `text/plain`
  - : Du texte simple. Ce type d'encodage est principalement utilisé pour le débogage afin de voir facilement les données envoyées.

La valeur de cet attribut surcharge celle de l'attribut [`enctype`](/fr/docs/Web/HTML/Element/Form#attr-enctype) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) propriétaire de cet élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit) et [`<button>`](/fr/docs/Web/HTML/Element/Button).

### `formmethod`

Une chaîne de caractères qui indique la méthode HTTP à utiliser lors de l'envoi des données du formulaire. Les valeurs possibles sont&nbsp;:

- `get`
  - : La valeur par défaut. Une URL est construite en commençant par l'URL fournie par l'attribut `formaction` ou l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) du formulaire, puis en ajoutant un point d'interrogation, puis en ajoutant les données du formulaire en respectant l'encodage décrit par l'attribut `formenctype` ou l'attribut [`enctype`](/fr/docs/Web/HTML/Element/Form#attr-enctype) du formulaire. L'URL est alors envoyée au serveur en utilisant une requête HTTP [`GET`](/fr/docs/Web/HTTP/Methods/GET). Cette méthode fonctionne pour les formulaires simples qui ne contiennent que des caractères ASCII et qui n'ont pas d'effets de bord.
- `post`
  - : Les données du formulaire sont incluses dans le corps de la requête qui est envoyée à l'URL fournie par l'attribut `formaction` ou l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) du formulaire en utilisant une requête HTTP [`POST`](/fr/docs/Web/HTTP/Methods/POST). Cette méthode permet d'envoyer des données complexes et des fichiers.
- `dialog`
  - : Cette méthode est utilisée afin d'indiquer que le bouton ferme la boîte de dialogue à laquelle le champ est associé, aucune donnée du formulaire n'est envoyée.

La valeur de cet attribut surcharge celle de l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#attr-method) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) propriétaire de cet élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit) et [`<button>`](/fr/docs/Web/HTML/Element/Button).

### `formnovalidate`

Un attribut booléen qui, s'il est présent, indique que le formulaire ne devrait pas être validé avant envoi au serveur.

La valeur de cet attribut surcharge celle de l'attribut [`novalidate`](/fr/docs/Web/HTML/Element/Form#attr-novalidate) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) propriétaire de cet élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit) et [`<button>`](/fr/docs/Web/HTML/Element/Button).

### `formtarget`

Une chaîne de caractères qui indique un nom ou un mot-clé indiquant où afficher la réponse reçue après l'envoi du formulaire. Cette chaîne de caractères doit être le nom d'un **contexte de navigation** (autrement dit, un onglet, une fenêtre ou une [`<iframe>`](/fr/docs/Web/HTML/Element/iframe).

En plus des noms variables qui peuvent être donnés aux onglets, fenêtres et <i lang="en">iframes</i>, il existe certains mots-clés spéciaux qui peuvent être utilisés&nbsp;:

- `_self`
  - : La valeur par défaut. La réponse est chargée dans le même contexte de navigation que celui qui contient le formulaire. Le document courant est alors remplacé par les données reçues.
- `_blank`
  - : La réponse est chargée dans un nouveau contexte de navigation anonyme. Il s'agit généralement d'un nouvel onglet dans la même fenêtre que le document courant (ce comportement peut varier selon la configuration de [l'agent utilisateur](/fr/docs/Glossary/User_agent).
- `_parent`
  - : La réponse est chargée dans le contexte de navigation parent du contexte courant. S'il n'y a pas de tel contexte parent, le comportement obtenu est le même qu'avec `_self`.
- `_top`
  - : La réponse est chargée dans le contexte de navigation de plus haut niveau. Il s'agit du contexte de navigation qui est l'ancêtre de plus haut niveau du contexte courant. Si le contexte courant est déjà le contexte de plus haut niveau, le comportement obtenu est le même qu'avec `_self`.

La valeur de cet attribut surcharge celle de l'attribut [`target`](/fr/docs/Web/HTML/Element/Form#attr-target) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) propriétaire de cet élément [`<input>`](/fr/docs/Web/HTML/Element/input).

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit) et [`<button>`](/fr/docs/Web/HTML/Element/Button).

### `height`

Un nombre qui indique la hauteur, exprimée en pixels CSS, selon laquelle dessiner l'image indiquée par l'attribut `src`.

### `src`

Une chaîne de caractères qui indique l'URL du fichier contenant l'image à afficher sur le bouton graphique. Lorsque la personne interagit avec l'image, le contrôle réagit comme un bouton d'envoi ([`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit)).

### `width`

Un nombre qui indique la largeur, exprimée en pixels CSS, selon laquelle dessiner l'image indiquée par l'attribut `src`.

## Attributs obsolètes

L'attribut qui suit a été défini en HTML 4 pour les contrôles de type `image`, mais n'a pas été implémenté par tous les navigateurs et est désormais déprécié.

### `usemap`

Lorsque cet attribut est indiqué, sa valeur doit être le nom d'un élément de carte d'images [`<map>`](/fr/docs/Web/HTML/Element/map), qui définit une carte d'image à utiliser sur le bouton. Cet usage est obsolète et il faut remplacer cet attribut par une utilisation de l'élément [`<img>`](/fr/docs/Web/HTML/Element/Img) si on veut utiliser des cartes d'image.

## Utiliser les boutons d'image

Un élément `<input type="image">` est [un élément remplacé](/fr/docs/Web/CSS/Replaced_element) (c'est-à-dire un élément dont le contenu n'est pas généré ou directement géré par la couche CSS), et se comporte principalement comme un élément [`<img>`](/fr/docs/Web/HTML/Element/Img) classique, avec les fonctionnalités d'un [bouton d'envoi](/fr/docs/Web/HTML/Element/Input/submit).

### Fonctionnalités essentielles des boutons d'image

Prenons un exemple simple qui utilise les différentes fonctionnalités essentielles d'un tel bouton (et qui fonctionnent de la même façon que pour un élément `<img>`)&nbsp;:

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{EmbedLiveSample('', 600, 50)}}

- L'attribut [`src`](#src) est utilisé afin d'indiquer le chemin vers l'image à afficher sur le bouton.
- L'attribut [`alt`](#alt) permet de fournir un texte alternatif afin que les personnes qui utilisent un outil de lecture d'écran puissent avoir une meilleure idée du rôle du bouton. Ce texte sera également affiché si l'image ne peut être affichée pour quelque raison que ce soit (par exemple si le chemin contient une coquille). Si possible, on utilisera un texte qui correspond au libellé qui aurait été choisi si le bouton avait été un bouton d'envoi texte classique.
- Les attributs [`width`](#width) et [`height`](#height) indiquent respectivement la largeur et la hauteur, exprimées en pixels, selon lesquelles afficher l'image. Le bouton aura la même taille que l'image. S'il faut que la zone couverte par le bouton soit plus grande que l'image, on utilisera du CSS (par exemple la propriété [`padding`](/fr/docs/Web/CSS/padding)). Si une seule dimension est indiquée, la seconde est automatiquement ajustée pour que l'image conserve ses proportions originales.

### Surcharger le comportement par défaut du formulaire

Les éléments `<input type="image">`, comme [les boutons d'envoi classiques](/fr/docs/Web/HTML/Element/Input/submit), acceptent certains attributs qui surchargent le comportement indiqué par le formulaire&nbsp;:

- La valeur de [`formaction`](#formaction) surcharge celle fournie par le formulaire avec [`action`](/fr/docs/Web/HTML/Element/Form#attr-action)
- La valeur de [`formenctype`](#formenctype) surcharge celle fournie par le formulaire avec [`enctype`](/fr/docs/Web/HTML/Element/Form#attr-enctype)
- La valeur de [`formmethod`](#formmethod) surcharge celle fournie par le formulaire avec [`method`](/fr/docs/Web/HTML/Element/Form#attr-method)
- La valeur de [`formnovalidate`](#formnovalidate) surcharge celle fournie par le formulaire avec [`novalidate`](/fr/docs/Web/HTML/Element/Form#attr-novalidate)
- La valeur de [`formtarget`](#formtarget) surcharge celle fournie par le formulaire avec [`target`](/fr/docs/Web/HTML/Element/Form#attr-target)

Voir les paragraphes précédents pour le rôle détaillé de chacun de ces attributs.

### Utiliser les coordonnées `x` et `y` du clic sur le bouton

Lors de l'envoi d'un formulaire avec un bouton graphique `<input type="image">`, deux données supplémentaires sont automatiquement envoyées au serveur par le navigateur&nbsp;: les coordonnées `x` et `y` de l'emplacement du clic sur l'image. Vous pouvez voir ceci à l'œuvre dans [l'exemple sur les coordonnées X Y](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html).

Lorsqu'on clique sur l'image pour envoyer le formulaire, des données sont ajoutées aux paramètres de l'URL, comme `?x=52&y=55`. Attention, si le bouton utilise un attribut [`name`](/fr/docs/Web/HTML/Element/input#attr-name), sa valeur sera utilisée comme préfixe pour chaque attribut, par exemple si `name` vaut `position`, les coordonnées envoyées dans l'URL seraient transmises sous la forme `?position.x=52&position.y=55`. Cela vaut également pour les autres attributs.

Ces coordonnées correspondent à l'abscisse et à l'ordonnée du point où le clic a eu lieu, relatifs à une origine `(0, 0)` située dans le coin supérieur gauche de l'image. On peut utiliser ces valeurs si l'emplacement du clic a une quelconque importance, par exemple s'il s'agit d'une carte sur laquelle on clique. Le code côté serveur pourra alors déterminer l'emplacement du clic et renvoyer des informations correspondantes au lieu visé.

Dans l'exemple qui précède, on pourrait implémenter, coté serveur, une logique qui détermine la couleur sur laquelle le clic a eu lieu pour créer un classement des couleurs en fonction du nombre de votes pour chacune.

### Ajuster la position et l'algorithme de redimensionnement de l'image

La propriété CSS [`object-position`](/fr/docs/Web/CSS/object-position) permet d'ajuster la position de l'image au sein du cadre fourni par l'élément `<input>` et la propriété [`object-fit`](/fr/docs/Web/CSS/object-fit) contrôle la façon dont la taille de l'image est ajustée afin de tenir dans le cadre. On peut donc définir un cadre pour l'image avec les attributs `width` et `height` afin de réserver de l'espace sur la page puis ajuster l'emplacement de l'image et son éventuel redimensionnement au sein de cet espace.

## Exemples

### Un formulaire de connexion

L'exemple suivant affiche le même bouton qu'auparavant, cette fois-ci inclus dans un formulaire de connexion classique.

#### HTML

```html
<form>
  <p>Connectez-vous à votre compte</p>
  <div>
    <label for="userId">Identifiant utilisateur</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Mot de passe</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Voici quelques règles CSS pour améliorer l'apparence des éléments de base&nbsp;:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

#### Résultat

{{EmbedLiveSample("", 600, 250)}}

### Ajuster la position et le redimensionnement de l'image

Dans ce nouvel exemple, on adapte l'exemple précédent afin d'avoir plus de place pour l'image et on ajuste la taille et la position de l'image à l'aide des propriétés [`object-fit`](/fr/docs/Web/CSS/object-fit) et [`object-position`](/fr/docs/Web/CSS/object-position).

#### HTML

```html
<form>
  <p>Connectez-vous à votre compte</p>
  <div>
    <label for="userId">Identifiant utilisateur</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Mot de passe</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

#### Résultat

{{EmbedLiveSample("", 600, 300)}}

Ici, `object-position` est configuré afin que l'image soit dessinée au coin supérieur droit de l'élément et `object-fit` est paramétré avec la valeur `contain`, qui indique que l'image doit être dessinée avec la taille la plus grande possible qui puisse tenir dans la boîte de l'élément, sans modifier ses proportions. On notera que l'arrière-plan gris de l'élément est toujours visible sur la zone qui n'est pas couverte par l'image.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<input>`](/fr/docs/Web/HTML/Element/input) et l'interface DOM qu'il implémente&nbsp;: [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement)
- Les propriétés CSS pour le positionnement et le dimensionnement de l'image dans le cadre de l'élément `<input>`&nbsp;: [`object-position`](/fr/docs/Web/CSS/object-position) et [`object-fit`](/fr/docs/Web/CSS/object-fit)
- [Compatibilité des propriétés CSS pour les contrôles de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
