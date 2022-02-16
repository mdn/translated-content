---
title: <input type="image">
slug: Web/HTML/Element/Input/image
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/image
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`image`** sont utilisés afin de créer des boutons graphiques pour l'envoi de formulaire. Autrement dit, le bouton d'envoi aura la forme d'une image plutôt que de contenir un texte.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Valeur

Les éléments `<input type="image">` n'acceptent pas de valeur pour l'attribut `value`. Le chemin vers l'image à afficher est indiqué grâce à l'attribut `src`.

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les boutons `image` permettent d'utiliser les attributs suivants :

| Attribute                              | Description                                                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("alt")}}`                 | Texte de remplacement lorsque l'image ne peut pas être affichée                                                                                                                                                           |
| `{{anch("formaction")}}`         | L'URL à laquelle envoyer les données du formulaire. Cette valeur prend le pas sur l'attribut {{htmlattrxref("action", "form")}} du formulaire s'il est défini.                                                  |
| `{{anch("formenctype")}}`     | Une chaîne de caractères qui indique le type d'encodage à utiliser pour les données du formulaire.                                                                                                                        |
| `{{anch("formmethod")}}`         | La méthode HTTP à utiliser pour envoyer le formulaire.                                                                                                                                                                    |
| `{{anch("formnovalidate")}}` | Un booléen qui, lorsqu'il est présent, indique que les champs du formulaire ne sont pas soumis [aux contraintes de validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) avant l'envoi des données au serveur. |
| `{{anch("formtarget")}}`         | Le contexte de navigation dans lequel charger la réponse du serveur reçue après l'envoi du formulaire.                                                                                                                    |
| `{{anch("height")}}`             | La hauteur, en pixels CSS, à laquelle dessiner l'image                                                                                                                                                                    |
| `{{anch("src")}}`                 | L'URL à partir de laquelle charger l'image                                                                                                                                                                                |
| `{{anch("width")}}`             | La largeur, en pixels CSS, à laquelle dessiner l'image                                                                                                                                                                    |

### {{htmlattrdef("alt")}}

L'attribut `alt` fournit un texte alternatif à utiliser comme libellé pour le bouton lorsque l'image ne peut être chargée ou affichée (que ce soit en raison d'une erreur ou de la configuration de l'agent utilisateur). Si cet attribut est fourni, ce doit être une chaîne de caractères non vide et qui décrit clairement le rôle du bouton.

Ainsi, si on a un bouton graphique avec une image et/ou une incône avec le texte _Se connecter_. Le texte alternatif porté par `alt` devrait être proche de `"Se connecter"`.

> **Note :** Bien que, d'un point de vue technique, l'attribut `alt` soit optionnel. Il faut toujours en inclure un afin d'améliorer l'accessibilité et l'utilisabilité du bouton.

D'un point de vue fonctionnel, l'attribut `alt` pour `<input type="image">` fonctionne de la même façon que l'attribut {{htmlattrdef("alt", "img")}} associé aux éléments {{HTMLElement("img")}}.

### {{htmlattrdef("formaction")}}

Une chaîne de caractères représentant l'URL à laquelle envoyer les données du formulaire. Cette valeur prend le pas sur l'attribut {{htmlattrxref("action", "form")}} du formulaire ({{HTMLElement("form")}}) propriétaire du champ `<input>`.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et {{HTMLElement("button")}}.

### {{htmlattrdef("formenctype")}}

Une chaîne de caractères qui identifie la méthode d'encodage à utiliser pour l'envoi des données du formulaire au serveur. Trois valeurs sont autorisées :

- `application/x-www-form-urlencoded`
  - : Les informations sont envoyées sous la forme d'une chaîne de caractères ajoutée à l'URL en utilisant l'algorithme de {{jsxref("encodeURI", "encodeURI()")}}. **Cette valeur est la valeur par défaut.**
- `multipart/form-data`
  - : Cette valeur utilise l'API {{domxref("FormData")}} pour gérer les données et permet d'*uploader*des fichiers. Cet encodage _doit_ être utilisé s'il y a des éléments  {{HTMLElement("input")}} de {{htmlattrxref("type", "input")}} `"file"` ([`<input type="file">`](/fr/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Les données sont envoyées comme texte simple. Cette valeur est généralement utile pour déboguer car elle permet de voir facilement les données envoyées.

Si cet attribut est défini, sa valeur prend la priorité sur l'attribut {{htmlattrxref("action", "form")}} du formulaire.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et {{HTMLElement("button")}}.

### {{htmlattrdef("formmethod")}}

Une chaîne de caractères qui indique la méthode HTTP à utiliser lors de l'envoi des données du formulaire. Cette valeur prend la priorité sur l'attribut {{htmlattrxref("method", "form")}} du formulaire. Les valeurs autorisées sont :

- `get`
  - : Une URL est construite en commençant avec l'URL fournie par l'attribut `formaction` ou {{htmlattrxref("action", "form")}}, suivie d'un point d'interrogation puis des données du formulaire, encodées comme indiqué avec `formenctype` ou {{htmlattrxref("enctype", "form")}}. Cette URL est ensuite envoyée au serveur avec une requête HTTP {{HTTPMethod("get")}}. Cette méthode fonctionne correctement pour les formulaires simples, contenant des données ASCII et sans effet de bord. **C'est la valeur par défaut.**
- `post`
  - : Les données du formulaire sont incluses dans le corps de la requête envoyée à l'URL fournie par l'attribut `formaction` ou {{htmlattrxref("action", "form")}} en utilisant une requête {{HTTPMethod("push")}}. Cette méthode prend en charge les données plus complexes (que celles pour `get`) et les pièces jointes sous forme de fichiers.
- `dialog`
  - : Cette méthode est utilisée pour indique que le bouton permet simplement de fermer la boîte de dialogue associée au champ. Aucune donnée n'est transmise.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et {{HTMLElement("button")}}.

### {{htmlattrdef("formnovalidate")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le formulaire ne devrait pas être validé avant d'être envoyé au serveur. Cet attribut prend la priorité sur l'attribut {{htmlattrxref("novalidate", "form")}} du formulaire parent.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et {{HTMLElement("button")}}.

### {{htmlattrdef("formtarget")}}

Une chaîne de caractères qui indique un nom ou un mot-clé qui définit où afficher la réponse reçue depuis le serveur après l'envoi du formulaire. La chaîne de caractères doit correspondre au nom **d'un contexte de navigation** (un onglet, une fenêtre ou une {{HTMLElement("iframe")}}). La valeur de cet attribut prendra la priorité sur celle fournie par l'attribut {{htmlattrxref("target", "form")}} du formulaire ({{HTMLElement("form")}}) parent.

En complément des noms des onglets, fenêtres, _iframes_, quelques mots-clés spéciaux peuvent être utilisés :

- `_self`
  - : La réponse est chargée dans le même contexte de navigation que celui contenant le formulaire. Cela remplacera le document courant avec les données reçues. **Cette valeur est la valeur par défaut.**
- `_blank`
  - : La réponse est chargé dans un contexte de navigation vierge. Ce sera généralement un nouvel onglet dans la même fenêtre mais cela peut varier selon la configuration de l'agent utilisateur.
- `_parent`
  - : La réponse est chargée dans le contexte de navigation parent du contexte courant. S'il n'y a pas de contexte parent, cette valeur est synonyme de `_self`.
- `_top`
  - : La réponse est chargée dans le contexte de navigation de plus haut niveau, c'est-à-dire le contexte de navigation qui est l'ancêtre, sans parent, du contexte courant. Si le contexte courant est déjà le contexte de navigation le plus haut, cette valeur est synonyme de `_self`.

Cet attribut est également disponible pour les éléments [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) et {{HTMLElement("button")}}.

### {{htmlattrdef("height")}}

Une valeur numérique qui indique la hauteur, exprimée en pixels CSS, pour dessiner l'image fournie par l'attribut `src`.

### {{htmlattrdef("src")}}

Une chaîne de caractères qui définit l'URL du fichier image à afficher pour le bouton. Lorsque l'utilisateur interagit avec l'image, le champ est géré comme tout autre bouton `<input>`.

### {{htmlattrdef("width")}}

Une valeur numérique qui indique la largeur, exprimée en pixels CSS, pour dessiner l'image fournie par l'attribut `src`.

## Attributs obsolètes

L'attribut suivant a été défini en HTML4 pour les champs de type `image` mais n'a pas été implémenté par l'ensemble des navigateurs et a été déprécié depuis :

| Attribute                  | Description                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("usemap")}}` | Le nom d'une carte d'images cliquables ({{HTMLElement("map")}}) à utiliser pour l'image. Cet élément est obsolète et c'est l'élément {{HTMLElement("img")}} qui devrait être utilisé pour créer des cartes à la place. |

### {{htmlattrdef("usemap")}}

Lorsque l'attribut `usemap` est utilisé, sa valeur doit être le nom d'un élément {{HTMLElement("map")}} qui définit l'image avec des régions cliquables à utiliser. Cette utilisation est obsolète et l'élément {{HTMLElement("img")}} devrait être utilisé pour les images avec des zones cliquables.

## Utiliser les contrôles `<input type="image">`

Un élément `<input type="image">` est [un élément remplacé](/fr/docs/Web/CSS/Élément_remplacé) (c'est-à-dire un élément dont le contenu n'est pas généré ou géré par le CSS) et se comporte comme un élément {{htmlelement("img")}} tout en permettant [d'envoyer un formulaire (comme un élément `<input type="submit">`)](/fr/docs/Web/HTML/Element/Input/submit).

### Les fonctionnalités essentielles

Prenons un exemple simple qui utilise les attributs strictement nécessaires (qui fonctionnent de la même façon que pour un élément `<img>`) :

```html
<input id="image" type="image" width="100" height="30" alt="Login"
       src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png">
```

{{EmbedLiveSample('Les_fonctionnalités_essentielles', 600, 50)}}

- L'attribut {{htmlattrxref("src", "input")}} indique le chemin de l'image qu'on souhaite afficher sur le bouton.
- L'attribut {{htmlattrxref("alt", "input")}} fournit un texte alternatif à l'image qui peut notamment être utilisé par un lecteur d'écran pour indiquer ce à quoi correspond l'image. Ce texte sera également affiché si l'image ne peut pas être affichée (par exemple si le chemin est incorrect). Si possible, il est préférable d'utiliser le texte que vous auriez utilisé si vous aviez mis en place un élément \<input type="`submit">`.
- Les attributs {{htmlattrxref("width", "input")}} et {{htmlattrxref("height", "input")}} sont utilisés afin d'indiquer la largeur et la hauteur, exprimées en pixels, avec lesquelles représenter l'image. Le bouton aura la même taille que l'image. S'il est nécessaire que le bouton soit plus gros que l'image, on pourra utiliser des règles CSS (par exemple avec la propriété {{cssxref("padding")}}). Si un seul des deux attributs est fourni, la seconde dimension sera automatiquement ajustée afin que l'image conserve ses proportions originelles.

### Surcharger le comportement par défaut

Les éléments `<input type="image">` — comme les boutons [`<input type="submit">`](/fr/docs/Web/HTML/Element/input/submit) — prennent en charge différents attributs qui permettent d'adapter le compotement du formulaire :

- {{htmlattrdef("formaction")}} {{HTMLVersionInline("5")}}
  - : Cet attribut indique l'URI d'un programme qui traite les informations envoyées par l'élément `<input>`. Cet attribut surcharge l'attribut {{htmlattrxref("action","form")}} du formulaire associé.

<!---->

- {{htmlattrdef("formenctype")}} {{HTMLVersionInline("5")}}

  - : Cet attribut définit le type de contenu utilisé pour envoyer le formulaire au serveur. Les valeurs possibles sont :

    - `application/x-www-form-urlencoded` : la valur par défaut si l'attribut n'est pas utilisé.
    - `text/plain`.

    Si cet attribut est utilisé, il surcharge l'attribut {{htmlattrxref("enctype","form")}} du formulaire associé.

- {{htmlattrdef("formmethod")}} {{HTMLVersionInline("5")}}

  - : Cet attribut indique la méthode HTTP utilisée par le navigateur afin d'envoyer le formulaire. Les valeurs possibles sont :

    - `post` : les données du formulaire sont incluses dans le corps du formulaire puis envoyées au serveur.
    - `get` : les données du formulaire sont ajoutées après l'URI de l'attribut **`form`** avec un point d'interrogation (« ? ») comme séparateur. L'URI alors obtenue est envoyée au serveur. Cette méthode doit uniquement être utilisée lorsque le formulaire n'entraîne aucun effet de bord et que les données ne contiennent que des caractères ASCII.

    Si cet attribut est utilisé, il surcharge l'attribut {{htmlattrxref("method","form")}} du formulaire associé.

- {{htmlattrdef("formnovalidate")}} {{HTMLVersionInline("5")}}
  - : Un attribut booléen qui indique si le formulaire ne doit pas être validé avant d'être envoyé. Si cet attribut est utilisé, il surcharge l'attribut {{htmlattrxref("novalidate","form")}} du formulaire associé.
- {{htmlattrdef("formtarget")}} {{HTMLVersionInline("5")}}

  - : Un nom ou un mot-clé qui indique où la réponse doit être affichée après que le formulaire a été envoyé. Cette valeur est le nom ou un mot-clé qui désigne un contexte de navigation (par exemple un onglet, une fenêtre ou une _iframe_). Si cet attribut est indiqué, il surcharge l'attribut {{htmlattrxref("target", "form")}} du formulaire associé. Les mots-clés suivants ont des significations particulières :

    - \_`self` : la réponse est chargée dans le même contexte de navigation que le contexte courant. C'est la valeur par défaut si l'attribut n'est pas utilisé.
    - `_blank` : la réponse est chargée dans un nouveau contexte de navigation anonyme.
    - `_parent` : la réponse est chargée dans le contexte navigation qui est le parent du contexte courant. S'il n'y a aucun contexte parent, cette valeur se comportera comme la valeur `_self`.
    - `_top` : la réponse est chargée dans le contexte de navigation de plus haut niveau (c'est-à-dire le contexte qui est un ancêtre du contexte courant et qui n'a pas de contexte parent). Si le contexte courant n'a pas de parent, cette valeur se comportera comme `_self`.

### Utiliser les coordonnées `x` et `y`

Lorsqu'on envoie un formulaire avec un bouton `<input type="image">`, les coordonnées (`x` et `y`) du clic sur l'image sont également envoyées au serveur ([voir cet exemple](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html)).

Lorsqu'on clique sur l'image pour envoyer le formulaire, vous pourrez voir que l'URL contient deux autres paramètres (par exemple `"?x=52&y=55"`). Si le contrôle possède un attribut {{htmlattrxref("name", "input")}}, ce nom sera utilisé comme préfixe. Ainsi, si `name` vaut `"position"`, les coordonnées du clic seront envoyées dans l'URL avec le format suivant : `"?position.x=52&position.y=55"`. Ce préfixe est également appliqué aux autres attributs.

Les coordonnées X et Y sont calculées en pixels à partir du coin en haut à gauche de l'image ete peuvent être utilisées lorsque l'emplacement du clic possède une quelconque importance (par exemple une carte). Ces coordonnées peuvent donc être utilisées côté serveur afin de renvoyer des informations pertinentes (par exemple des informations quant aux lieux alentour).

### Ajuster la position et l'échelle de l'image

Il est possible d'utiliser la propriété CSS {{cssxref("object-position")}} afin d'ajuster la position de l'image au sein de la boîte fournie par l'élément `<input>`. La propriété CSS {{cssxref("object-fit")}} peut être utilisée afin de contrôler la façon dont l'image est redimensionnée pour tenir dans la boîte. On peut donc ajuster le cadre grâce aux attributs `width` et `height` afin de créer un espace fixe sur le document puis ajuster la façon dont l'image occupe cet espace.

## Exemples

### Un formulaire de connexion

Dans l'exemple suivant, on insère le bouton vu précedemment dans un formulaire de connexion.

{{EmbedLiveSample('Un_formulaire_de_connexion', 600, 170)}}

Voici le fragment de code HTML utilisé :

```html
<form>
  <p>Connectez-vous</p>
  <div>
    <label for="userId">Identifiant</label>
    <input type="text" id="userId" name="userId">
  </div>
  <div>
    <label for="pwd">Mot de passe</label>
    <input type="password" id="pwd" name="pwd">
  </div>
  <div>
    <input id="image" type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" alt="Login" width="100">
  </div>
</form>
```

Ensuite, on ajoute un feuille de style CSS pour mettre en forme les éléments :

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

### Ajuster la position et l’échelle de l’image

Dans l'exemple qui suit, on adapte l'exemple précédent afin de disposer de plus d'espace pour l'image et on ajuste la taille et la position de l'image grâce à {{cssxref("object-fit")}} et {{cssxref("object-position")}}.

{{EmbedLiveSample("Ajuster_la_position_et_l’échelle_de_l’image", 600, 300)}}

#### HTML

```html
<form>
  <p>Connectez-vous</p>
  <div>
    <label for="userId">Identifiant</label>
    <input type="text" id="userId" name="userId">
  </div>
  <div>
    <label for="pwd">Mot de passe</label>
    <input type="password" id="pwd" name="pwd">
  </div>
  <div>
    <input id="image" type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" alt="Login" width="100">
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

On voit ici `object-position` qui permet de dessiner l'image à paritr du coin supérieur droit de l'élément et `object-fit` qui vaut `contain` : l'image est ainsi dessinée avec la taille la plus grande possible tout en respectant ses proportions et en ne dépassant pas de la boîte. L'arrière-plan de l'image sera visible s'il y a des zones non-couvertes.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Aucune, l'attribut <code>value</code> ne devrait pas être utilisé.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("alt", "input")}},
        {{htmlattrxref("src", "input")}},
        {{htmlattrxref("width", "input")}},
        {{htmlattrxref("height", "input")}},
        {{htmlattrxref("formaction", "input")}},
        {{htmlattrxref("formenctype", "input")}},
        {{htmlattrxref("formmethod", "input")}},
        {{htmlattrxref("formnovalidate", "input")}},
        {{htmlattrxref("formtarget", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>Aucun.</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#image-button-state-(type=image)', '&lt;input type="image"&gt;')}}     | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#image-button-state-%28type=image%29', '&lt;input type="image"&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-image")}}

## Voir ausi

- L'élément {{HTMLElement("input")}} et l'interface DOM {{domxref("HTMLInputElement")}} qu'il implémente.
