---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 2eab0bc09a2972fda0f760abd5cfe06201b23498
---

Les éléments {{HTMLElement("input")}} de type **`image`** sont utilisés pour créer des boutons d'envoi de formulaire graphiques. Autrement dit, il s'agit de boutons d'envoi qui affichent une image plutôt qu'un texte.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Connectez-vous à votre compte&nbsp;:</p>

<div>
  <label for="userId">Identifiant</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Se connecter"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Valeur

Les éléments `<input type="image">` n'acceptent pas l'attribut `value`. Le chemin vers le fichier de l'image à afficher est indiqué dans l'attribut `src`.

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les boutons `image` prennent en charge les attributs suivants.

### `alt`

L'attribut `alt` fournit une chaîne de caractères alternative à utiliser si l'image du bouton ne peut être affichée (suite à une erreur, à un {{Glossary("user agent", "agent utilisateur")}} qui ne peut pas ou n'est pas configuré pour afficher les images, ou si la personne utilise un outil de lecture d'écran). Si cet attribut est fourni, il doit être une chaîne de caractères non-vide qui est un libellé pertinent pour le bouton.

Ainsi, si un bouton graphique affiche une image avec une icône ou une image avec un texte «&nbsp;Se connecter&nbsp;», l'attribut `alt` devrait être renseigné avec une valeur comme `Se connecter`.

> [!NOTE]
> Bien que l'attribut `alt` soit optionnel sur le plan technique, il devrait en pratique toujours être inclus afin de maximiser l'utilisabilité du contenu.

D'un point de vue fonctionnel, l'attribut `alt` de `<input type="image">` se comporte de façon analogue à l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt) des éléments {{HTMLElement("img")}}.

### `formaction`

Une chaîne de caractères qui indique l'URL vers laquelle envoyer les données du formulaire. La valeur de cet attribut surcharge celle de l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) de l'élément {{HTMLElement("form")}} propriétaire de cet élément {{HTMLElement("input")}}.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et {{HTMLElement("button")}}.

### `formenctype`

Une chaîne de caractères qui identifie la méthode d'encodage à utiliser lors de l'envoi des données du formulaire au serveur. Trois valeurs sont possibles&nbsp;:

- `application/x-www-form-urlencoded`
  - : C'est la valeur par défaut, qui envoie les données du formulaire sous forme de chaîne de caractères après avoir {{Glossary("Percent-encoding", "encodée en pourcent")}} le texte en utilisant un algorithme tel que {{JSxRef("encodeURI()")}}.
- `multipart/form-data`
  - : Utilise l'API {{DOMxRef("FormData")}} pour gérer les données et permet d'envoyer des fichiers au serveur. Ce type d'encodage _doit_ être utilisé si le formulaire contient des éléments {{HTMLElement("input")}} de [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/fr/docs/Web/HTML/Reference/Elements/input/file)).
- `text/plain`
  - : Du texte simple&nbsp;; principalement utilisé pour le débogage afin de voir facilement les données envoyées.

La valeur de cet attribut surcharge celle de l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) de l'élément {{HTMLElement("form")}} propriétaire de cet élément {{HTMLElement("input")}}.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et {{HTMLElement("button")}}.

### `formmethod`

Une chaîne de caractères qui indique la méthode HTTP à utiliser lors de l'envoi des données du formulaire. Les valeurs possibles sont&nbsp;:

- `get`
  - : La valeur par défaut. Une URL est construite en commençant par l'URL fournie par l'attribut `formaction` ou l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire, puis en ajoutant un point d'interrogation («&nbsp;?&nbsp;»), puis en ajoutant les données du formulaire en respectant l'encodage décrit par l'attribut `formenctype` ou l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire. L'URL est alors envoyée au serveur en utilisant une requête HTTP {{HTTPMethod("GET")}}. Cette méthode fonctionne pour les formulaires simples qui ne contiennent que des caractères {{Glossary("ASCII")}} et qui n'ont pas d'effets de bord.
- `post`
  - : Les données du formulaire sont incluses dans le corps de la requête qui est envoyée à l'URL fournie par l'attribut `formaction` ou l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire en utilisant une requête HTTP {{HTTPMethod("POST")}}. Cette méthode permet d'envoyer des données complexes et des fichiers.
- `dialog`
  - : Cette méthode est utilisée afin d'indiquer que le bouton ferme la boîte de dialogue à laquelle le champ est associé, aucune donnée du formulaire n'est envoyée.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et {{HTMLElement("button")}}.

### `formnovalidate`

Un attribut booléen qui, s'il est présent, indique que le formulaire ne devrait pas être validé avant envoi au serveur. Cette valeur surcharge la valeur de l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) sur le formulaire propriaitaire de l'élément.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et {{HTMLElement("button")}}.

### `formtarget`

Une chaîne de caractères qui définit un nom ou un mot-clé indiquant où afficher la réponse reçue après l'envoi du formulaire. Cette chaîne de caractères doit être le nom d'un **contexte de navigation** (c'est-à-dire un onglet, une fenêtre ou un {{HTMLElement("iframe")}}). Une valeur définie ici remplace toute cible donnée par l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) sur le {{HTMLElement("form")}} propriétaire de cet élément {{HTMLElement("input")}}.

En plus des noms variables qui peuvent être donnés aux onglets, fenêtres et cadres, il existe certains mots-clés spéciaux qui peuvent être utilisés&nbsp;:

- `_self`
  - : La valeur par défaut. La réponse est chargée dans le même contexte de navigation que celui qui contient le formulaire. Le document courant est alors remplacé par les données reçues.
- `_blank`
  - : La réponse est chargée dans un nouveau contexte de navigation anonyme. Il s'agit généralement d'un nouvel onglet dans la même fenêtre que le document courant (ce comportement peut varier selon la configuration de {{Glossary("user agent", "l'agent utilisateur")}}.
- `_parent`
  - : La réponse est chargée dans le contexte de navigation parent du contexte courant. S'il n'y a pas de tel contexte parent, le comportement obtenu est le même qu'avec `_self`.
- `_top`
  - : La réponse est chargée dans le contexte de navigation de plus haut niveau. Il s'agit du contexte de navigation qui est l'ancêtre de plus haut niveau du contexte courant. Si le contexte courant est déjà le contexte de plus haut niveau, le comportement obtenu est le même qu'avec `_self`.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et {{HTMLElement("button")}}.

### `height`

Un nombre qui indique la hauteur, exprimée en pixels CSS, selon laquelle dessiner l'image indiquée par l'attribut `src`.

### `src`

Une chaîne de caractères qui indique l'URL du fichier contenant l'image à afficher sur le bouton graphique. Lorsque la personne interagit avec l'image, le contrôle réagit comme n'importe quel bouton.

### `width`

Un nombre qui indique la largeur selon lequelle dessiner l'image, exprimée en pixels CSS.

## Attributs obsolètes

L'attribut qui suit a été défini en HTML 4 pour les contrôles de type `image`, mais n'a pas été implémenté par tous les navigateurs et est désormais obsolète.

### `usemap`

Si `usemap` est défini, sa valeur doit être le nom d'un élément de carte d'images, {{HTMLElement("map")}}, qui définit une carte d'image à utiliser sur le bouton. Cet usage est obsolète et il faut remplacer cet attribut par une utilisation de l'élément {{HTMLElement("img")}} si on veut utiliser des cartes d'image.

## Utiliser les boutons d'image

Un élément `<input type="image">` est {{Glossary("replaced elements", "un élément remplacé")}} (c'est-à-dire un élément dont le contenu n'est pas généré ou directement géré par la couche CSS), et se comporte principalement comme un élément {{HTMLElement("img")}} classique, avec les fonctionnalités d'un [bouton d'envoi](/fr/docs/Web/HTML/Reference/Elements/input/submit).

### Fonctionnalités essentielles des boutons d'image

Prenons un exemple simple qui utilise les différentes fonctionnalités essentielles d'un tel bouton (et qui fonctionnent de la même façon que pour un élément `<img>`)&nbsp;:

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Se connecter"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{EmbedLiveSample("Fonctionnalités essentielles des boutons d'image", 600, 50)}}

- L'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/input#src) est utilisé afin d'indiquer le chemin vers l'image à afficher sur le bouton.
- L'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/input#alt) permet de fournir un texte alternatif afin que les personnes qui utilisent un outil de lecture d'écran puissent avoir une meilleure idée du rôle du bouton. Ce texte sera également affiché si l'image ne peut être affichée pour quelque raison que ce soit (par exemple si le chemin contient une coquille). Si possible, on utilisera un texte qui correspond au libellé qui aurait été choisi si le bouton avait été un bouton d'envoi texte classique.
- Les attributs [`width`](/fr/docs/Web/HTML/Reference/Elements/input#width) et [`height`](/fr/docs/Web/HTML/Reference/Elements/input#height) indiquent respectivement la largeur et la hauteur, exprimées en pixels, selon lesquelles afficher l'image. Le bouton aura la même taille que l'image. S'il faut que la zone couverte par le bouton soit plus grande que l'image, on utilisera du CSS (par exemple la propriété {{CSSxRef("padding")}}). Si une seule dimension est indiquée, la seconde est automatiquement ajustée pour que l'image conserve son {{Glossary("aspect ratio", "rapport d'aspect")}} original.

### Surcharger le comportement par défaut du formulaire

Les éléments `<input type="image">`, comme [les boutons d'envoi classiques](/fr/docs/Web/HTML/Reference/Elements/input/submit), acceptent certains attributs qui surchargent le comportement indiqué par le formulaire&nbsp;:

- `formaction`
  - : L'URI d'un programme qui traite les informations soumises par l'élément d'entrée de formulaire&nbsp;; remplace l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire propriétaire de l'élément.
- `formenctype`
  - : Définit le type de contenu utilisé pour soumettre le formulaire au serveur. Les valeurs possibles sont&nbsp;:
    - `application/x-www-form-urlencoded`&nbsp;: La valeur par défaut si l'attribut n'est pas défini.
    - `text/plain`.

    Si cet attribut est défini, il remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire propriétaire de l'élément.

- `formmethod`
  - : Définit la méthode HTTP que le navigateur utilise pour soumettre le formulaire. Les valeurs possibles sont&nbsp;:
    - `post`&nbsp;: Les données du formulaire sont incluses dans le corps du formulaire et envoyées au serveur.
    - `get`&nbsp;: Les données du formulaire sont ajoutées à l'URI de l'attribut **`form`**, avec un «&nbsp;?&nbsp;» comme séparateur, et l'URI résultante est envoyée au serveur. Utilisez cette méthode lorsque le formulaire n'a pas d'effets secondaires et ne contient que des caractères ASCII.

    Si défini, cet attribut remplace l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire propriétaire de l'élément.

- `formnovalidate`
  - : Un attribut booléen définissant que le formulaire ne doit pas être validé lorsqu'il est soumis. Si cet attribut est défini, il remplace l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) du formulaire propriétaire de l'élément.
- `formtarget`
  - : Un nom ou un mot-clé indiquant où afficher la réponse reçue après la soumission du formulaire. Il s'agit d'un nom ou d'un mot-clé pour un _contexte de navigation_ (par exemple, un onglet, une fenêtre ou un cadre en ligne). Si cet attribut est défini, il remplace l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) du formulaire propriétaire de l'élément. Les mots-clés suivants ont des significations particulières&nbsp;:
    - `_self`&nbsp;: Charger la réponse dans le même contexte de navigation que celui en cours. Cette valeur est la valeur par défaut si l'attribut n'est pas défini.
    - `_blank`&nbsp;: Charger la réponse dans un nouveau contexte de navigation sans nom.
    - `_parent`&nbsp;: Charger la réponse dans le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.
    - `_top`&nbsp;: Charger la réponse dans le contexte de navigation de niveau supérieur (c'est-à-dire le contexte de navigation qui est un ancêtre de celui en cours et qui n'a pas de parent). S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.

### Utiliser les coordonnées `x` et `y` du clic sur le bouton

Lors de l'envoi d'un formulaire avec un bouton graphique `<input type="image">`, deux données supplémentaires sont automatiquement envoyées au serveur par le navigateur — les coordonnées `x` et `y` de l'emplacement du clic sur l'image. Vous pouvez voir ceci à l'œuvre dans [l'exemple sur les coordonnées X Y <sup>(angl.)</sup>](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html).

Lorsqu'on clique sur l'image pour envoyer le formulaire, des données sont ajoutées aux paramètres de l'URL, comme `?x=52&y=55`. Attention, si le bouton utilise un attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name), sa valeur sera utilisée comme préfixe pour chaque attribut, par exemple si `name` vaut `position`, les coordonnées envoyées dans l'URL seraient transmises sous la forme `?position.x=52&position.y=55`. Cela vaut également pour les autres attributs.

Il s'agit des coordonnées X et Y de l'image sur laquelle la souris a cliqué pour envoyer le formulaire, où (`0,0`) correspond au coin supérieur gauche de l'image et constitue la valeur par défaut si l'envoi a lieu sans clic sur l'image. Ces coordonnées peuvent être utilisées lorsque l'emplacement où l'on a cliqué sur l'image est important, par exemple si vous disposez d'une carte qui, lorsqu'on clique dessus, envoie les coordonnées de l'emplacement cliqué au serveur. Le code côté serveur détermine alors l'emplacement sur lequel l'utilisateur·ice a cliqué et renvoie des informations sur les lieux à proximité.

Dans l'exemple ci-dessus, nous pourrions écrire du code côté serveur qui détermine la couleur sur laquelle l'utilisateur·ice a cliqué à partir des coordonnées transmises, et qui comptabilise les couleurs préférées pour lesquelles les utilisateur·ice·s ont voté.

### Ajuster la position et l'algorithme de redimensionnement de l'image

Vous pouvez utiliser la propriété {{CSSxRef("object-position")}} pour ajuster la position de l'image au sein du cadre fourni par l'élément `<input>` et la propriété {{CSSxRef("object-fit")}} contrôle la façon dont la taille de l'image est ajustée afin de tenir dans le cadre. On peut donc définir un cadre pour l'image avec les attributs `width` et `height` afin de réserver de l'espace sur la page puis ajuster l'emplacement de l'image et son éventuel redimensionnement au sein de cet espace.

## Exemples

### Un formulaire de connexion

L'exemple suivant affiche le même bouton qu'auparavant, cette fois-ci inclus dans un formulaire de connexion classique.

{{EmbedLiveSample("Un formulaire de connexion", 600, 200)}}

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

### Ajuster la position et le redimensionnement de l'image

Dans ce nouvel exemple, on adapte l'exemple précédent afin d'avoir plus de place pour l'image et on ajuste la taille et la position de l'image à l'aide des propriétés {{CSSxRef("object-fit")}} et {{CSSxRef("object-position")}}.

{{EmbedLiveSample("Ajuster la position et le redimensionnement de l'image", 600, 300)}}

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
  background-color: #dddddd;
}
```

Ici, `object-position` est configuré afin que l'image soit dessinée au coin supérieur droit de l'élément et `object-fit` est paramétré avec la valeur `contain`, qui indique que l'image doit être dessinée avec la taille la plus grande possible qui puisse tenir dans la boîte de l'élément, sans modifier ses proportions. On notera que l'arrière-plan gris de l'élément est toujours visible sur la zone qui n'est pas couverte par l'image.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Aucune — l'attribut <code>value</code> ne devrait pas être renseigné.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Attributs communs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#formnovalidate"><code>formnovalidate</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} qui l'implémente.
- L'élément {{HTMLElement("img")}}
- Positionnement et dimensionnement de l'image dans le cadre de l'élément `<input>`&nbsp;: {{CSSxRef("object-position")}} et {{CSSxRef("object-fit")}}
