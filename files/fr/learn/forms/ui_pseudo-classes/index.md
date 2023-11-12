---
title: Pseudo-classes relatives à l'interface utilisateur
slug: Learn/Forms/UI_pseudo-classes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

Dans les articles précédents, nous avons vu la mise en forme des différents contrôles de formulaire de façon générale. Cela inclut l'utilisation de certaines pseudo-classes, telles que `:checked` qui permet de cibler une case à cocher seulement lorsqu'elle est sélectionnée. Dans cet article, nous verrons en détails les différentes pseudo-classes disponibles et qui ont trait à l'interface utilisateur et qui permettent de mettre en forme les formulaires dans différents états.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base, une compréhension élémentaire de <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">HTML</a> et de <a href="/fr/docs/Learn/CSS/First_steps">CSS</a>, y compris une connaissance générale des <a href="/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">pseudo-classes et des pseudo-éléments</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Comprendre les parties des formulaires qui sont complexes à mettre en forme et pourquoi. Apprendre ce qui peut être fait pour les personnaliser.
      </td>
    </tr>
  </tbody>
</table>

## Quelles sont les pseudo-classes disponibles&nbsp;?

Les pseudo-classes disponibles à l'origine (avec [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)) et qui sont pertinentes pour les formulaires sont&nbsp;:

- [`:hover`](/fr/docs/Web/CSS/:hover)
  - : Qui sélectionne un élément uniquement lorsqu'un pointeur (par exemple le curseur d'une souris) le survole.
- [`:focus`](/fr/docs/Web/CSS/:focus)
  - : Qui sélectionne un élément uniquement lorsqu'il a le focus (par exemple en navigant au clavier avec les tabulations).
- [`:active`](/fr/docs/Web/CSS/:active)
  - : Qui sélectionne un élément uniquement lorsqu'il est activé (c'est-à-dire quand on clique dessus ou quand on appuie sur les touches <kbd>Retour</kbd>/<kbd>Entrée</kbd> pour le cas d'une activation au clavier).

Nous avons abordé ces pseudo-classes dans les articles précédents. Plus récemment, avec les modules de spécification [Sélecteurs CSS de niveau 3](https://www.w3.org/TR/css3-selectors/) et [CSS pour les interfaces utilisateurs simples de niveau 3](https://dev.w3.org/csswg/css3-ui/#pseudo-classes), d'autres pseudo-classes ont été ajoutées pour les formulaires HTML et qui fournissent d'autres conditions de ciblage dont on peut tirer parti. Nous verrons ces pseudo-classes en détails ci-après, mais voyons rapidement les principales que nous décrirons&nbsp;:

- [`:required`](/fr/docs/Web/CSS/:required) et [`:optional`](/fr/docs/Web/CSS/:optional) qui ciblent les contrôles de formulaire optionnels ou obligatoires.
- [`:valid`](/fr/docs/Web/CSS/:valid), [`:invalid`](/fr/docs/Web/CSS/:invalid), [`:in-range`](/fr/docs/Web/CSS/:in-range), [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range) qui ciblent les contrôles de formulaire valides ou invalides selon les contraintes de validation des formulaires et ceux dont la valeur est contenue ou dehors de l'intervalle indiqué.
- [`:enabled`](/fr/docs/Web/CSS/:enabled), [`:disabled`](/fr/docs/Web/CSS/:disabled), [`:read-only`](/fr/docs/Web/CSS/:read-only) et [`:read-write`](/fr/docs/Web/CSS/:read-write) qui ciblent les contrôles de formulaires actifs ou désactivés (via l'attribut HTML `disabled`), et ceux qui sont accessibles en lecture-écriture ou en lecture uniquement (avec l'attribut HTML `readonly`).
- [`:checked`](/fr/docs/Web/CSS/:checked), [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate) et [`:default`](/fr/docs/Web/CSS/:default) qui ciblent respectivement les cases à cocher et boutons radio qui sont cochés, dans un état indéterminé (ni coché ni décoché) et les options par défaut (par exemple un élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/Input/checkbox) avec l'attribut `checked` ou un élément [`<option>`](/fr/docs/Web/HTML/Element/Option) avec l'attribut `selected`).

Il en existe de nombreuses autres, mais celles indiquées dans cette liste sont les plus utiles à première vue. Certaines des autres pseudo-classes permettent de résoudre des problèmes bien spécifiques ou ne sont pas encore prises en charge de façon homogène par les navigateurs. Celles de la liste précédente sont correctement prises en charge, mais il reste nécessaire de bien tester ses formulaires pour s'assurer qu'ils fonctionnent pour le public cible.

> **Note :** Certaines des pseudo-classes vues ici portent sur la mise en forme des contrôles de formulaire selon leur état de validation (est-ce que la donnée saisie dans le champ est valide ou non&nbsp;?). Nous apprendrons comment paramétrer et contrôler les contraintes de validation dans notre prochain article sur [la validation des formulaires côté client](/fr/docs/Learn/Forms/Form_validation). En attendant, nous aborderons ce sujet de façon simple afin de ne pas créer de confusion.

## Mettre en forme les champs selon qu'ils sont obligatoires ou non

Un des aspects de base quant à la validation côté client d'un formulaire est le caractère obligatoire ou optionnel d'un champ (c'est-à-dire qu'il faut que le champ soit rempli (ou non) avant que le formulaire puisse être envoyé).

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), [`<select>`](/fr/docs/Web/HTML/Element/select), et [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) disposent d'un attribut `required` qui, lorsqu'il est présent, signifie que le champ porté par ce contrôle doit être renseigné avant que le formulaire puisse être envoyé. Par exemple&nbsp;:

```html
<form>
  <fieldset>
    <legend>Formulaire pour recueillir votre avis</legend>
    <div>
      <label for="prenom">Prénom : </label>
      <input id="prenom" name="prenom" type="text" required />
    </div>
    <div>
      <label for="nom">Nom : </label>
      <input id="nom" name="nom" type="text" required />
    </div>
    <div>
      <label for="email">Adresse électronique (pour vous répondre) : </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Envoyer</button></div>
  </fieldset>
</form>
```

Ici, le prénom et le nom sont obligatoires et l'adresse électronique est optionnelle.

Il est possible de cibler ces deux états en utilisant les pseudo-classes [`:required`](/fr/docs/Web/CSS/:required) et [`:optional`](/fr/docs/Web/CSS/:optional). Ainsi, si on applique le CSS qui suit au fragment de HTML précédent&nbsp;:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Les contrôles obligatoires auront une bordure noire et les contrôles optionnels auront une bordure argentée et on aura ce résultat&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Vous pouvez aussi essayer d'envoyer le formulaire sans renseigner les champs afin de voir les messages d'erreur liés à la validation qui sont fournis par défaut par le navigateur.

Le formulaire qui précède n'est pas particulièrement mauvais, mais il n'est pas non plus idéal. Pour commencer, le caractère obligatoire est uniquement véhiculé par de la couleur, ce qui n'est pas correct en termes d'accessibilité (par exemple pour les personnes avec du daltonisme). Ensuite, une convention standard sur le Web pour les champs obligatoires consiste à les indiquer avec un astérisque (`*`), ou avec le mot «&nbsp;obligatoire&nbsp;» associé aux contrôles en question.

Dans la prochaine section, nous verrons un meilleur exemple pour indiquer les champs obligatoires, qui utilise `:required` mais aussi du contenu généré.

> **Note :** Il est probable que vous n'ayez pas souvent à utiliser la pseudo-classe `:optional`. Par défaut, les contrôles de formulaire sont optionnels et vous pouvez alors utiliser votre mise en forme par défaut pour les contrôles optionnels et rajouter les styles supplémentaires pour les contrôles obligatoires.

> **Note :** Si un bouton radio fait partie d'un groupe de boutons radio qui portent le même nom et qu'il a l'attribut `required`, tous les boutons radio seront considérés comme invalides jusqu'à ce que l'un d'eux soit sélectionné. Toutefois, seul celui qui porte l'attribut `required` sera ciblé par la pseudo-classe [`:required`](/fr/docs/Web/CSS/:required).

## Utiliser du contenu généré avec des pseudo-classes

Dans les articles précédents, nous avons vu l'utilisation [de contenu généré](/fr/docs/Web/CSS/CSS_Generated_Content). C'est un bon moment pour y revenir en détails.

L'idée consiste ici à utiliser les pseudo-éléments [`::before`](/fr/docs/Web/CSS/::before) et [`::after`](/fr/docs/Web/CSS/::after) avec la propriété [`content`](/fr/docs/Web/CSS/content) afin de faire apparaître du contenu avant ou après l'élément concerné. Le fragment de contenu n'est pas ajouté au DOM, il fait partie du style du document, et il est donc invisible pour les outils d'assistance comme les lecteurs d'écran. S'agissant d'un pseudo-élément, il peut être ciblé par des règles de mise en forme comme tout autre nœud du DOM.

Il s'agit d'un outil bien utile lorsqu'on veut ajouter un indicateur visuel à un élément, comme un libellé ou une icône, mais qu'il importe peu que ce contenu soit vu des outils d'assistance. Dans [l'exemple sur les boutons radio sur mesure](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html), on utilise du contenu généré afin de gérer le placement et l'animation du cercle interne lorsqu'un bouton radio est sélectionné&nbsp;:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

C'est utile ici, car les lecteurs d'écran indiquent déjà lorsqu'un bouton radio ou qu'une case à cocher est cochée/décochée et on ne veut pas qu'ils vocalisent un autre élément du DOM qui indique cet état de sélection, car cela pourrait être source de confusion. Avoir un indicateur purement visuel permet de résoudre ce problème.

> **Note :** Cet exemple illustre également comment combiner une pseudo-classe et un pseudo-élément si nécessaire.

Revenons à notre exemple obligatoire/optionnel précédent. Cette fois, nous ne modifierons pas l'apparence du champ, nous utiliserons du contenu généré afin d'ajouter un libellé ([voir le résultat ici](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), et [le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Pour commencer, ajoutons un paragraphe en haut du formulaire pour indiquer comment les champs obligatoires sont marqués&nbsp;:

```html
<p>Les champs obligatoires sont libellés avec «&nbsp;obligatoire&nbsp;».</p>
```

Les personnes qui utilisent un lecteur d'écran auront l'information qu'un champ est obligatoire lorsque les éléments concernés seront vocalisés, les autres personnes auront cette information grâce au libellé.

Étant donné que les éléments `<input>` ne permettent pas d'inclure du contenu généré (en effet, le contenu généré est placé relativement à la boîte de formatage d'un élément, or, les éléments de formulaire agissent comme des éléments remplacés et n'ont donc pas de telle boîte de formatage), on ajoutera un élément [`<span>`](/fr/docs/Web/HTML/Element/span) vide dans lequel placer ce contenu généré&nbsp;:

```html
<div>
  <label for="prenom">Prénom : </label>
  <input id="prenom" name="prenom" type="text" required />
  <span></span>
</div>
```

Le problème avec ce fragment de HTML est que l'élément `<span>` est passé sur une nouvelle ligne, car les éléments `<input>` et `<label>` ont une largeur définie avec `width: 100%`. Pour corriger cela, on met en forme l'élément `<div>` parent afin qu'il devienne un conteneur flexible et on lui indique de faire passer le contenu à la ligne s'il devient trop long&nbsp;:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Avec ça, le libellé et le champ sont sur des lignes séparées, car leur largeur vaut `width: 100%`, mais l'élément `<span>` a une largeur nulle et peut donc occuper la même ligne que le champ.

Passons ensuite au contenu généré. Nous allons utiliser ce fragment de CSS&nbsp;:

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "obligatoire";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

On cible l'élément `<span>` avec `position: relative` afin que le contenu généré puisse avoir `position: absolute` et que ce dernier soit positionné de façon relative à l'élément `<span>` plutôt qu'à l'élément `<body>` (pour ce qui est du positionnement, le contenu généré agira comme un élément enfant de l'élément sur lequel il est généré).

Le contenu généré a le texte «&nbsp;obligatoire&nbsp;», qui correspond à ce qu'on voulait indiquer sur le libellé et on le met en forme. Voici le résultat&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Mettre en forme les contrôles selon la validité des données

L'autre aspect fondamental de la validation d'un formulaire est le caractère valide (ou invalide) des données qui y sont saisies (pour les données numériques, cette validité peut être définie par un intervalle). Les contrôles de formulaire [avec des contraintes de validation](/fr/docs/Web/Guide/HTML/Constraint_validation) peuvent être ciblés par ces états.

### `:valid` et `:invalid`

On peut cibler les contrôles d'un formulaire avec les pseudo-classes [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid). Il faut garder quelques points à l'esprit&nbsp;:

- Les contrôles sans contraintes de validation seront toujours valides, et donc toujours ciblés par `:valid`.
- Les contrôles avec `required` et qui n'ont pas de valeur sont considérés comme invalides et seront donc ciblés par `:invalid` et par `:required`.
- Les contrôles avec une validation native, comme `<input type="email">` ou `<input type="url">`, sont ciblés par `:invalid` lorsque les données saisies ne correspondent pas au motif et au format voulu (mais sont considérés comme valides s'ils sont vides).
- Les contrôles dont la valeur courante est en dehors des limites d'intervalle décrites par les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max) sont ciblés par `:invalid`, et aussi par [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range) que nous verrons par la suite.
- Il existe d'autres méthodes pour qu'un élément soit ciblé par `:valid`/`:invalid`, nous verrons comment dans [l'article sur la validation d'un formulaire côté client](/fr/docs/Learn/Forms/Form_validation). Gardons les choses simples pour l'instant.

Prenons un exemple simple d'utilisation de `:valid`/`:invalid` (vous pouvez voir [l'exemple de démonstration `valid-invalid.html`](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html), et [le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Comme dans l'exemple précédent, on utilise un élément `<span>` supplémentaire dans lequel générer du contenu, qu'on utilisera pour fournir un indicateur de validité des données&nbsp;:

```html
<div>
  <label for="prenom">Prénom *: </label>
  <input id="prenom" name="prenom" type="text" required />
  <span></span>
</div>
```

Pour fournir ces indicateurs, on utilise le CSS suivant&nbsp;:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Comme avant, on définit la position de l'élément `<span>` avec `position: relative` afin que le contenu généré puisse être placé relativement au contrôle auquel il s'applique. On positionne ensuite de façon absolue les différents contenus générés selon que les données sont valides ou invalides (avec une coche verte dans le premier cas et une croix rouge dans le second). Pour mettre en avant les données invalides et inviter à une action, on ajoute également une bordure rouge épaisse au contrôle correspondant.

> **Note :** On utilise ici `::before` pour ajouter ces indicateurs, car on utilisait déjà `::after` pour les libellés «&nbsp;obligatoire&nbsp;».

Vous pouvez voir ici le résultat&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

On voit ici comment les champs texte sont invalides lorsqu'ils sont vides et valides dès lors qu'ils ont une valeur saisie. Le champ pour l'adresse mail est quant à lui valide lorsqu'il est vide (car il n'est pas obligatoire), mais invalide s'il contient quelque chose qui n'est pas une adresse électronique correcte.

### Respect de l'intervalle pour les données numériques

Comme mentionné brièvement avant, il existe deux autres pseudo-classes&nbsp;: [`:in-range`](/fr/docs/Web/CSS/:in-range) et [`:out-of-range`](/fr/docs/Web/CSS/:out-of-range). Celles-ci s'appliquent aux champs numériques dont les intervalles de validité sont délimités par les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max) lorsque leurs données sont comprises ou en dehors de cet intervalle.

> **Note :** Les types de champs numériques sont&nbsp;: `date`, `month`, `week`, `time`, `datetime-local`, `number`, et `range`.

On notera que les champs pour lesquels les données sont dans l'intervalle seront aussi ciblés par la pseudo-classe `:valid` et que les champs pour lesquels les données sont en dehors de l'intervalle seront également ciblés par la pseudo-classe `:invalid`. Pourquoi avoir les deux&nbsp;? Cela porte principalement sur la sémantique&nbsp;: savoir qu'une valeur est en dehors d'un intervalle est plus spécifique qu'une invalidité générique et on pourra alors fournir un message plus utile pour les valeurs en dehors d'un intervalle plutôt que de simplement indiquer que la valeur est invalide. Il est aussi possible de fournir les deux messages.

Prenons un exemple qui fait ceci. Voir [le résultat de la démonstration avec `out-of-range.html`](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) ([le code source](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) est également disponible). Cet exemple est construit à partir de l'exemple précédent et doit nous permettre de fournir des messages pour indiquer que des champs numériques sont hors des limites, tout en indiquant qu'ils sont obligatoires.

Le champ numérique utilisé pour l'exemple sera&nbsp;:

```html
<div>
  <label for="age">Age (doit être supérieur à 12): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

Et le CSS correspondant sera&nbsp;:

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Obligatoire";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "En dehors de l'intervalle autorisé";
  left: -182px;
}
```

Il s'agit de la même démarche que celle suivie avec l'exemple pour `:required`. Ici, nous avons séparé les déclarations qui s'appliquent à tout contenu `::after` dans une règle séparée et donné au contenu `::after` pour les états `:required` et `:out-of-range` leur propre contenu et mise en forme. Voici le résultat obtenu&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Il est possible qu'un champ numérique soit obligatoire _et_ qu'il soit en dehors de l'intervalle autorisé. Que se passe-t-il dans ce cas&nbsp;? Comme la règle `:out-of-range` apparaît après celle pour `:required`, [les règles de la cascade](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) s'appliquent et c'est le message pour l'intervalle qui est affiché.

Cela fonctionne plutôt bien&nbsp;: lorsque la page charge pour initialement, c'est «&nbsp;Obligatoire&nbsp;» qui est montré avec une croix et une bordure rouge. Lorsqu'on saisit un âge valide (ici dans l'intervalle `12-120`), le champ devient valide. En revanche, si on change l'âge pour saisir une valeur en dehors de l'intervalle, le message «&nbsp;En dehors de l'intervalle autorisé&nbsp;» apparaît en lieu et place de «&nbsp;Obligatoire&nbsp;».

> **Note :** Pour saisir une valeur invalide/en dehors de l'intervalle, il faudra placer le focus sur le contrôle et la saisir au clavier. En effet, les boutons d'incrément/décrément ne permettront pas de saisir une valeur en dehors de l'intervalle valide.

## Mettre en forme les champs actifs ou désactivés, en lecture seule ou non

Un élément actif est un élément qui peut être activé en cliquant dessus ou en saisissant des données dedans, etc. Au contraire, on ne peut pas interagir avec un élément désactivé et ses données ne sont même pas envoyées au serveur.

On peut cibler ces deux états avec [`:enabled`](/fr/docs/Web/CSS/:enabled) et [`:disabled`](/fr/docs/Web/CSS/:disabled). Pourquoi les champs désactivés sont utiles&nbsp;? Il peut arriver que certaines données ne s'appliquent pas à une personne dans certaines conditions et qu'il ne sert alors à rien de les envoyer avec le formulaire. Un exemple classique peut être un formulaire de livraison où on demande si l'adresse de livraison à utiliser est identique à l'adresse de facturation. Si c'est le cas, il suffit d'envoyer une seule adresse au serveur et on peut tout à fait désactiver les champs pour la seconde adresse.

Prenons ce cas comme exemple. On commence par un formulaire HTML qui contient des champs texte et une case à cocher qui permet d'activer/désactiver la saisie de l'adresse de facturation. Les champs pour l'adresse de facturation sont désactivés par défaut.

```html
<form>
  <fieldset id="livraison">
    <legend>Adresse de livraison</legend>
    <div>
      <label for="nom1">Nom : </label>
      <input id="nom1" name="nom1" type="text" required />
    </div>
    <div>
      <label for="adresse1">Adresse : </label>
      <input id="adresse1" name="adresse1" type="text" required />
    </div>
    <div>
      <label for="codepostal1">Code postal : </label>
      <input id="codepostal1" name="codepostal1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="facturation">
    <legend>Adresse de facturation</legend>
    <div>
      <label for="facturation-checkbox"
        >Identique à l'adresse de livraison :</label
      >
      <input type="checkbox" id="facturation-checkbox" checked />
    </div>
    <div>
      <label for="nom" class="libelle-facturation libelle-desactive"
        >Nom :
      </label>
      <input id="nom" name="nom" type="text" disabled required />
    </div>
    <div>
      <label for="adresse2" class="libelle-facturation libelle-desactive"
        >Adresse :
      </label>
      <input id="adresse2" name="adresse2" type="text" disabled required />
    </div>
    <div>
      <label for="codepostal2" class="libelle-facturation libelle-desactive"
        >Code postal :
      </label>
      <input
        id="codepostal2"
        name="codepostal2"
        type="text"
        disabled
        required />
    </div>
  </fieldset>

  <div><button>Envoyer</button></div>
</form>
```

Passons au CSS, les parties les plus intéressantes pour ces exemples sont celles-ci&nbsp;:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

.libelle-desactive {
  color: #aaa;
}
```

On sélectionne directement les champs qu'on veut désactiver avec `input[type="text"]:disabled`, et on veut également griser les libellés correspondants. Ils pouvaient plus difficilement être ciblés, on a donc utilisé une classe.

Enfin, on utilise du JavaScript pour activer/désactiver les champs pour l'adresse de facturation&nbsp;:

```js
// Attendre le chargement de la page
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Ajoute un gestionnaire d'évènement `change` sur la case à cocher
    document
      .getElementById("facturation-checkbox")
      .addEventListener("change", basculerFacturation);
  },
  false,
);

function basculerFacturation() {
  // On sélectionne les champs texte de l'adresse de facturation
  let champsFacturation = document.querySelectorAll(
    '#facturation input[type="text"]',
  );
  // On sélectionne les libellés de l'adresse de facturation
  let libellesFacturation = document.querySelectorAll(".libelle-facturation");

  // On active/désactive les champs et libellés
  for (let i = 0; i < champsFacturation.length; i++) {
    champsFacturation[i].disabled = !champsFacturation[i].disabled;

    if (
      libellesFacturation[i].getAttribute("class") ===
      "libelle-facturation libelle-desactive"
    ) {
      libellesFacturation[i].setAttribute("class", "libelle-facturation");
    } else {
      libellesFacturation[i].setAttribute(
        "class",
        "libelle-facturation libelle-desactive",
      );
    }
  }
}
```

On utilise ici l'évènement [`change`](/fr/docs/Web/API/HTMLElement/change_event) pour détecter quand la personne active/désactive la saisie de l'adresse de facturation et on met alors à jour la mise en forme pour les champs et libellés associés.

Vous pouvez voir le résultat ci-après (et [aussi sur une page séparée](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), voir [le code source complet correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Champs en lecture seule ou en lecture/écriture

À l'instar de `:disabled` et `:enabled`, les pseudo-classes `:read-only` et `:read-write` permettent de cibler deux états entre lesquels un champ de formulaire peut alterner. Les valeurs des champs en lecture seule sont envoyées au serveur, mais la personne ne pourra pas les éditer et un champ accessible en lecture/écriture pourra être édité (c'est l'état par défaut).

Un champ peut être placé en lecture seule avec l'attribut `readonly`. Comme exemple, on peut imaginer une page de confirmation où les informations saisies sur les pages précédentes sont reportées afin que la personne puisse les vérifier dans leur ensemble et ajouter les dernières informations nécessaires avant de confirmer une commande. À ce moment, toutes les données du formulaire pourront être envoyées d'un coup au serveur.

Voyons ce qu'un tel exemple peut donner (vous pouvez [le voir sur une page séparée avec `readonly-confirmation.html`](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) et aussi [consulter le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Voici le fragment HTML qui sera utilisé, on notera l'attribut `readonly`&nbsp;:

```html
<div>
  <label for="nom">Nom : </label>
  <input id="nom" name="nom" type="text" value="M Dupont" readonly />
</div>
```

Si vous essayez l'exemple interactif, vous pourrez voir que les éléments de formulaire situés en haut ne peuvent pas recevoir le focus. Toutefois, leurs valeurs sont envoyées avec le formulaire. On met en forme les contrôles du formulaire à l'aide des pseudo-classes `:read-only` et `:read-write`&nbsp;:

```css
input:-moz-read-only,
textarea:-moz-read-only,
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Firefox ne prenait en charge ces pseudo-classes qu'avec un préfixe jusqu'à Firefox 78 (avant donc de prendre en charge la version sans préfixe). L'exemple complet ressemblera donc à&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Note :** `:enabled` et `:read-write` sont deux pseudo-classes plus rarement utilisées, car elles décrivent des états par défaut pour les éléments de formulaire.

## État des cases à cocher et boutons radio&nbsp;: coché, par défaut, indéterminé

Nous l'avons vu dans les articles précédents de ce module, les [boutons radio](/fr/docs/Web/HTML/Element/Input/radio) et les [cases à cocher](/fr/docs/Web/HTML/Element/Input/checkbox) peuvent être cochés ou décochés. Il existe aussi d'autres états à prendre en compte&nbsp;:

- [`:default`](/fr/docs/Web/CSS/:default)
  - : Qui permet de cibler les boutons radio et cases à cocher qui sont sélectionnés par défaut lors du chargement de la page (grâce à la présence de l'attribut `checked`). Ils continuent d'être ciblés par la pseudo-classe [`:default`](/fr/docs/Web/CSS/:default), même si la personne les désélectionne.
- [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate)
  - : Qui permet de cibler les boutons radio et cases à cocher qui ne sont ni cochés ni décochés. Ceux-ci sont considérés dans un état _indéterminé_ et correspondront à la pseudo-classe [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate). Nous allons détailler cet aspect plus bas.

### `:checked`

Lorsqu'un contrôle est coché/sélectionné, la pseudo-classe [`:checked`](/fr/docs/Web/CSS/:checked) s'appliquera.

L'usage le plus fréquent de cette pseudo-classe consiste à appliquer un style différent lorsque la case à cocher/le bouton radio est coché si l'apparence native a été retirée avec `appearance: none;` et qu'on souhaite construire une mise en forme complète sur mesure. Nous avons de tels exemples dans l'article précédent lorsque nous avons abordé [l'utilisation de `appearance: none` sur les boutons radio et cases à cocher](/fr/docs/Learn/Forms/Advanced_form_styling#mettre_en_forme_les_cases_à_cocher_et_les_boutons_radio).

En résumé, le code utilisant `:checked`, tiré de notre exemple sur [les boutons radio mis en forme](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) ressemble à&nbsp;:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

Vous pouvez voir le résultat ici&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/radios-styled.html", '100%', 200)}}

On construit la mise en forme du cercle interne du bouton radio avec le pseudo-élément auquel on applique une [transformation](/fr/docs/Web/CSS/transform) `scale(0)`. On utilise ensuite une [transition](/fr/docs/Web/CSS/transition) pour l'animer et le faire apparaître lorsque le bouton radio est sélectionné/coché. L'avantage d'une transformation plutôt que de jouer sur une transition avec [`width`](/fr/docs/Web/CSS/width)/[`height`](/fr/docs/Web/CSS/height) est qu'on peut utiliser [`transform-origin`](/fr/docs/Web/CSS/transform-origin) pour que la croissance parte du centre du cercle plutôt que depuis le coin.

### `:default` et `:indeterminate`

Comme mentionné auparavant, la pseudo-classe [`:default`](/fr/docs/Web/CSS/:default) cible les boutons radio et cases à cocher qui sont sélectionnés par défaut au chargement de la page, même s'ils sont désélectionnés par la suite. Cela peut être utile pour ajouter un indicateur à une liste d'options pour rappeler à la personne ce qu'étaient les valeurs par défaut (ou initiales), au cas où elle voudrait réinitialiser ses choix.

Les boutons radio et les cases à cocher seront également ciblés par la pseudo-classe [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate) lorsqu'ils ne sont ni cochés ni décochés. Mais qu'est-ce que ça signifie&nbsp;? Les éléments dans un état indéterminé incluent&nbsp;:

- Les éléments [`<input type="radio">`](/fr/docs/Web/HTML/Element/Input/radio) lorsque l'ensemble des boutons radio d'un même groupe sont décochés
- Les éléments [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/Input/checkbox) pour lesquels la propriété `indeterminate` est passée à `true` avec du code JavaScript
- Les éléments [`<progress>`](/fr/docs/Web/HTML/Element/Progress) qui n'ont pas de valeur.

Ce n'est pas un état qu'on rencontre souvent et on peut s'en servir pour indiquer qu'il est nécessaire de sélectionner une option avec un bouton de radio avant de pouvoir poursuivre.

Prenons comme exemples des versions modifiées de l'exemple précédent pour rappeler les options par défaut et mettre en forme les boutons radio indéterminés. Voici la structure HTML utilisée pour les champs&nbsp;:

```html
<p>
  <input type="radio" name="fruit" value="cerise" id="cerise" />
  <label for="cerise">Cerise</label>
  <span></span>
</p>
```

Pour l'exemple `:default`, on ajoute l'attribut `checked` au bouton radio du milieu afin qu'il soit sélectionné au chargement. On le met en forme avec le CSS suivant&nbsp;:

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Valeur par défaut";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

Cela fournit un libellé «&nbsp;Valeur par défaut&nbsp;» sur l'option initialement sélectionnée au chargement de la page. On notera qu'on utilise le combinateur de voisin général (`~`) plutôt que le combinateur de voisin adjacent (`+`), car l'élément `<span>` ne vient pas immédiatement après l'élément `<input>`.

Voici le résultat qu'on obtient&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> **Note :** Vous pouvez également consulter [cet exemple `radios-checked-default.html` sur une page séparée](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) (et [voir le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Pour un exemple avec `:indeterminate`, on n'utilise pas de sélection par défaut (s'il y en avait une, l'état indéterminé n'aurait pas lieu). On met en forme les boutons radio indéterminés avec le fragment de CSS qui suit&nbsp;:

```css
input[type="radio"]:indeterminate {
  border: 2px solid red;
  animation: 0.4s linear infinite alternate border-pulse;
}

@keyframes border-pulse {
  from {
    border: 2px solid red;
  }

  to {
    border: 6px solid red;
  }
}
```

Cela permet de créer une bordure animée sur les boutons radio qui aide à indiquer qu'il faut en sélectionner un&nbsp;!

Voici le résultat correspondant&nbsp;:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> **Note :** L'exemple est également disponible sur GitHub [sur une page séparée `radios-checked-indeterminate.html`](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) ([voir le code source correspondant](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> **Note :** Vous pouvez trouver [d'autres exemples avec l'état `indeterminate`](/fr/docs/Web/HTML/Element/Input/checkbox#gérer_un_état_indéterminé) sur la page de référence pour [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/Input/checkbox).

## D'autres pseudo-classes

Il existe d'autres pseudo-classes intéressantes et il serait trop long de les voir en détails ici. Abordons-en quelques-unes rapidement que vous pouvez étudier également.

Ces pseudo-classes sont correctement prises en charge par les navigateurs modernes&nbsp;:

- La pseudo-classe [`:focus-within`](/fr/docs/Web/CSS/:focus-within) s'applique à un élément qui a le focus ou qui _contient_ un élément qui a reçu le focus. Elle est utile si on veut mettre en avant un champ d'un formulaire qui a le focus.
- La pseudo-classe [`:focus-visible`](/fr/docs/Web/CSS/:focus-visible) permet de cibler les éléments avec le focus qui ont reçu ce focus avec des interactions au clavier (plutôt qu'à la souris ou au doigt). Elle est utile si on veut distinguer visuellement le focus obtenu au clavier du focus obtenu autrement.
- La pseudo-classe [`:placeholder-shown`](/fr/docs/Web/CSS/:placeholder-shown) permet de cibler les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) et [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) pour lesquels les textes indicatifs (<i lang="en">placeholders</i>) s'affichent parce que la valeur de ces éléments est vide.

Les pseudo-classes qui suivent sont aussi intéressantes, mais leur prise en charge n'est pas aussi homogène&nbsp;:

- La pseudo-classe [`:blank`](/fr/docs/Web/CSS/:blank) qui permet de sélectionner les contrôles de formulaire vides. [`:empty`](/fr/docs/Web/CSS/:empty) cible également les éléments qui n'ont pas d'enfant, comme [`<input>`](/fr/docs/Web/HTML/Element/Input), et de façon plus générale les autres éléments vides comme [`<br>`](/fr/docs/Web/HTML/Element/br) et [`<hr>`](/fr/docs/Web/HTML/Element/hr). `:empty` est plutôt bien prise en charge, mais la spécification de `:blank` n'est pas encore finie et elle n'est donc pas encore prise en charge.
- La pseudo-classe [`:user-invalid`](https://drafts.csswg.org/selectors-4/#user-invalid-pseudo), lorsqu'elle sera prise en charge, agira de façon semblable à [`:invalid`](/fr/docs/Web/CSS/:invalid), mais avec une meilleure ergonomie. Si la valeur est valide lorsque le champ reçoit le focus, l'élément pourra être ciblé avec `:invalid` lorsque la personne saisit des données et que la valeur est temporairement invalide&nbsp;; il ne sera ciblé par `:user-invalid` qu'après que l'élément a perdu le focus (si son contenu est toujours invalide). Si la valeur était initialement invalide, l'élément sera ciblé par `:invalid` et par `:user-invalid` pour toute la durée du focus. De façon analogue à `:invalid`, il ne sera plus ciblé par `:user-invalid` dès lors que la valeur deviendra valide.

## Testez vos compétences&nbsp;!

Vous avez atteint la fin de cet article, mais avez-vous retenu les informations les plus importantes&nbsp;? Vous pouvez vous évaluer et vérifier que vous avez mémorisé ces informations avant d'aller plus loin — voir l'évaluation [Testez vos compétences&nbsp;: mise en forme avancée](/fr/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Résumé

Et voilà la fin de ce tour des pseudo-classes relatives à l'interface utilisateur. N'hésitez pas à les utiliser et à créer des mises en forme amusantes avec&nbsp;! Nous allons voir ensuite un sujet différent&nbsp;: [la validation des formulaires côté client](/fr/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}
