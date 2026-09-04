---
title: Utiliser la validation des formulaires HTML et l'API de validation des contraintes
short-title: Validation des contraintes
slug: Web/HTML/Guides/Constraint_validation
l10n:
  sourceCommit: 6f889a782a6663e055bbfaf29a4b0be895866b9d
---

La création de formulaires web a toujours été une tâche complexe. Alors que le balisage du formulaire lui-même est simple, vérifier que chaque champ possède une valeur valide et cohérente est plus difficile, et informer l'utilisateur·ice du problème peut vite devenir un casse-tête. {{Glossary("HTML5")}} a introduit de nouveaux mécanismes pour les formulaires&nbsp;: il a ajouté de nouveaux types sémantiques pour l'élément {{HTMLElement("input")}} et la _validation des contraintes_ pour faciliter le contrôle du contenu du formulaire côté client. Les contraintes de base et courantes peuvent être vérifiées, sans avoir besoin de JavaScript, en définissant de nouveaux attributs&nbsp;; des contraintes plus complexes peuvent être testées à l'aide de l'API Constraint Validation.

Pour une introduction de base à ces concepts, avec des exemples, consultez le [tutoriel sur la validation des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> La validation des contraintes HTML ne signifie pas qu'il n'est plus nécessaire de vérifier _côté serveur_. Même si cela réduit les risques d'envoi de formulaires invalides, des requêtes invalides peuvent toujours être envoyées de différentes manières&nbsp;:
>
> - En modifiant le HTML avec les outils de développement du navigateur.
> - En rédigeant manuellement une requête HTTP sans utiliser le formulaire.
> - En écrivant du contenu dans le formulaire par programmation (certaines validations de contraintes ne sont _exécutées_ que pour une saisie utilisateur·ice, et non si vous définissez la valeur d'un champ du formulaire avec JavaScript).
>
> Aussi, assurez-vous de toujours valider les contraintes de saisie côté serveur, en étant cohérent avec ce qui est fait côté client.

## Contraintes intrinsèques et contraintes de base

En HTML, les contraintes de base peuvent être déclarées de deux façons&nbsp;:

- En choisissant la valeur sémantique la plus appropriée pour l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) de l'élément {{HTMLElement("input")}}. Ainsi, choisir le type `email` créera automatiquement une contrainte vérifiant que la valeur est une adresse électronique valide.
- En définissant des valeurs pour les attributs relatifs à la validation qui permettent de décrire des contraintes simplement, sans avoir besoin de JavaScript.

### Types de champs

Les contraintes intrinsèques portées par l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) sont&nbsp;:

| Type de champ                                                              | Description de la contrainte                                                                                                                                                              | Violation correspondante                                      |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`<input type="URL">`](/fr/docs/Web/HTML/Reference/Elements/input/url)     | La valeur doit être une [URL](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) absolue, telle que définie [dans le standard évolutif URL](https://url.spec.whatwg.org/). | [`TypeMismatch`](/fr/docs/Web/API/ValidityState/typeMismatch) |
| [`<input type="email">`](/fr/docs/Web/HTML/Reference/Elements/input/email) | La valeur doit être une adresse électronique avec une syntaxe valide (généralement au format `nom@domaine.tld` ou `nom@domaine`).                                                         | [`TypeMismatch`](/fr/docs/Web/API/ValidityState/typeMismatch) |

Pour ces deux types de champ, si l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple) est utilisé, plusieurs valeurs peuvent être passées dans le champ sous la forme d'une liste séparée par des virgules. Si au moins une des valeurs ne respecte pas les conditions décrites ici, la violation de contrainte `TypeMismatch` est déclenchée.

On notera que la plupart des types de champ n'ont pas de contraintes intrinsèques&nbsp;: soit il n'y a pas de contrainte particulière, soit le navigateur applique un algorithme de transformation pour que les valeurs incorrectes utilisent une valeur par défaut correcte.

### Attributs relatifs à la validation

En complément de l'attribut `type` mentionné ci-avant, les attributs suivants permettent de décrire des contraintes basiques&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribut</th>
      <th scope="col">Types de champ prenant en charge cet attribut</th>
      <th scope="col">Valeurs possibles</th>
      <th scope="col">Description de la contrainte</th>
      <th scope="col">Violation correspondante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/pattern">pattern</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>
      </td>
      <td>
        Une <a href="/fr/docs/Web/JavaScript/Guide/Regular_expressions">expression rationnelle JavaScript</a> (compilée avec les marqueurs {{JSxRef("RegExp.global", "global")}}, {{JSxRef("RegExp.ignoreCase", "ignoreCase")}}, et {{JSxRef("RegExp.multiline", "multiline")}} <em>désactivés</em>).
      </td>
      <td>La valeur doit correspondre au motif décrit par l'expression.</td>
      <td>{{DOMxRef("ValidityState/patternMismatch", "patternMismatch")}}</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Un nombre valide</td>
      <td rowspan="3">La valeur du champ doit être supérieure ou égale à la valeur de l'attribut.</td>
      <td rowspan="3">{{DOMxRef("ValidityState/rangeUnderflow", "rangeUnderflow")}}</td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Une date valide</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Un horodatage valide</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>, <code>number</code></td>
      <td>Un nombre valide</td>
      <td rowspan="3">La valeur du champ doit être inférieure ou égale à la valeur de l'attribut.</td>
      <td rowspan="3">{{DOMxRef("ValidityState/rangeOverflow", "rangeOverflow")}}</td>
    </tr>
    <tr>
      <td><code>date</code>, <code>month</code>, <code>week</code></td>
      <td>Une date valide</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Un horodatage valide</td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/required">required</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>, <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>week</code>, <code>time</code>, <code>number</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>. Également utilisable sur les éléments {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
      </td>
      <td>
        <em>Aucune valeur</em>, il s'agit d'un attribut booléen&nbsp;: sa présence indique que la valeur est requise et son absence indique que la valeur est facultative.
      </td>
      <td>Si l'attribut est présent, il doit y avoir une valeur.</td>
      <td>{{DOMxRef("ValidityState/valueMissing", "valueMissing")}}</td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>Un nombre entier (qui exprime des jours)</td>
      <td rowspan="5">
        À moins que l'attribut vaille <code>any</code>, la valeur devra être <strong>min</strong> + un multiple entier de l'incrément.
      </td>
      <td rowspan="5">{{DOMxRef("ValidityState/stepMismatch", "stepMismatch")}}</td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Un nombre entier de mois</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>Un nombre entier de semaines</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>, <code>time</code>
      </td>
      <td>Un nombre entier de secondes</td>
    </tr>
    <tr>
      <td><code>range</code>, <code>number</code></td>
      <td>Un entier</td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>. Également disponible sur l'élément {{HTMLElement("textarea")}}.
      </td>
      <td>Une longueur entière</td>
      <td>
        Le nombre de caractères, exprimé en points de code, ne doit pas être inférieur à la valeur de l'attribut si ce dernier n'est pas vide. Pour l'élément {{HTMLElement("textarea")}}, les passages à la ligne sont normalisés en un seul caractère (contrairement aux paires CRLF).
      </td>
      <td>{{DOMxRef("ValidityState/tooShort", "tooShort")}}</td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/Web/HTML/Reference/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        <code>text</code>, <code>search</code>, <code>url</code>, <code>tel</code>, <code>email</code>, <code>password</code>. Également disponible sur l'élément {{HTMLElement("textarea")}}.
      </td>
      <td>Une longueur entière</td>
      <td>
        Le nombre de caractères, exprimé en points de code, ne doit pas dépasser la valeur de l'attribut.
      </td>
      <td>{{DOMxRef("ValidityState/tooLong", "tooLong")}}</td>
    </tr>
  </tbody>
</table>

## Processus de validation des contraintes

En complément de la validation native effectuée par le navigateur, on peut manipuler la validation des contraintes en JavaScript à l'aide de l'API <i lang="en">Constraint Validation</i>, sur un élément du formulaire ou sur le formulaire ([`<form>`](/fr/docs/Web/HTML/Reference/Elements/form)). La validation des contraintes a lieu quand&nbsp;:

- On appelle la méthode `checkValidity()` ou `reportValidity()` depuis une instance d'une interface du DOM correspondant à un élément de formulaire, ({{DOMxRef("HTMLInputElement")}}, {{DOMxRef("HTMLSelectElement")}}, {{DOMxRef("HTMLButtonElement")}}, {{DOMxRef("HTMLOutputElement")}} ou {{DOMxRef("HTMLTextAreaElement")}}). Dans ce cas, seules les contraintes de l'élément correspondant sont évaluées et permettent au script d'obtenir l'état de validité. La méthode `checkValidity()` renvoie un booléen qui indique si la valeur de l'élément respecte les contraintes (c'est généralement ce qui est fait par l'agent utilisateur pour déterminer quelle pseudo-classe CSS s'applique entre {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}). La méthode `reportValidity()` renvoie quant à elle le détail des contraintes qui ne sont pas respectées.
- On appelle la méthode `checkValidity()` ou `reportValidity()` de l'objet {{DOMxRef("HTMLFormElement")}} correspondant au formulaire.
- On envoie le formulaire.

On qualifie parfois un appel à `checkValidity()` de validation _statique_ des contraintes, en opposition à `reportValidity()` ou à l'envoi du formulaire qui constituent une validation _interactive_.

> [!NOTE]
>
> - Si l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) est placé sur l'élément {{HTMLElement("form")}}, la validation interactive des contraintes n'a pas lieu.
> - Appeler la méthode `submit()` d'un objet {{DOMxRef("HTMLFormElement")}} ne déclenchera pas de validation des contraintes. Autrement dit, cette méthode envoie les données du formulaire au serveur, même si elles ne respectent pas les contraintes. Pour passer par la validation, on pourra appeler la méthode `click()` du bouton d'envoi.
> - Les contraintes `minlength` et `maxlength` ne sont vérifiées que sur une saisie utilisateur·ice. Elles ne sont pas vérifiées si une valeur est définie par programmation, même en appelant explicitement `checkValidity()` ou `reportValidity()`.

## Implémenter des contraintes complexes à l'aide de l'API

Grâce à JavaScript et à l'API <i lang="en">Constraint Validation</i>, on peut implémenter des contraintes plus complexes, qui portent par exemple sur plusieurs champs à la fois ou qui impliquent des calculs avancés.

Le principe consiste à déclencher une fonction JavaScript lorsqu'un évènement d'un champ de formulaire a lieu (par exemple **onchange**) et de calculer à ce moment si la contrainte est respectée ou non puis d'utiliser `field.setCustomValidity()` pour fournir le résultat de la validation&nbsp;: une chaîne vide indiquera que la contrainte est respectée et n'importe quelle autre chaîne indiquera une erreur et c'est alors cette chaîne de caractères qui sera affichée à l'utilisateur·ice.

### Exemple de contrainte portant sur plusieurs champs : validation du code postal

Le format utilisé pour les codes postaux varie d'un pays à l'autre. Certains pays autorisent un préfixe avec le code du pays (comme `D-` en Allemagne, `F-` en France et `CH-` en Suisse), d'autres ont des codes postaux avec un nombre précis de chiffres et d'autres encore, comme au Royaume-Uni, ont des structures plus complexes, où on peut avoir des lettres à certaines positions.

> [!NOTE]
> Ce qui suit ne constitue pas une bibliothèque exhaustive de validation des codes postaux, il ne s'agit que d'un exemple.

Pour cet exemple, nous allons ajouter un script de vérification pour ce formulaire&nbsp;:

```html
<form>
  <label for="code-postal">Code postal&nbsp;: </label>
  <input type="text" id="code-postal" />
  <label for="pays">Pays&nbsp;: </label>
  <select id="pays">
    <option value="ch">Suisse</option>
    <option value="fr">France</option>
    <option value="de">Allemagne</option>
    <option value="nl">Pays-Bas</option>
  </select>
  <input type="submit" value="Valider" />
</form>
```

Ce fragment HTML affiche le formulaire suivant&nbsp;:

{{EmbedLiveSample("Exemple de contrainte portant sur plusieurs champs : validation du code postal")}}

Pour commencer, on écrit une fonction qui vérifie la contrainte&nbsp;:

```js
const slecteurPays = document.getElementById("pays");
const champCodePostal = document.getElementById("code-postal");

function verifierCodePostal() {
  // Pour chaque pays, on définit le motif que doit suivre le code postal
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Les codes postaux suisses ont 4 chiffres : par exemple CH-1950 ou 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "Les codes postaux français ont 5 chiffres : par exemple F-75012 ou 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Les codes postaux allemands ont 5 chiffres : par exemple D-12345 ou 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Les codes postaux néerlandais ont exactement 4 chiffres, suivis de 2 lettres sauf SA, SD et SS",
    ],
  };

  // Lire l'identifiant du pays
  const pays = slecteurPays.value;

  // Construire le vérificateur de contrainte
  const constraint = new RegExp(constraints[pays][0], "");
  console.log(constraint);

  // Vérifier la contrainte
  if (constraint.test(champCodePostal.value)) {
    // Le code postal respecte la contrainte, on utilise l'API de validation des contraintes pour l'indiquer
    champCodePostal.setCustomValidity("");
  } else {
    // Le code postal ne respecte pas la contrainte, on utilise l'API de validation des contraintes pour
    // donner un message sur le format requis pour ce pays
    champCodePostal.setCustomValidity(constraints[pays][1]);
  }
}
```

Ensuite, on le lie à l'évènement `change` pour le {{HTMLElement("select")}} et à l'évènement `input` pour le {{HTMLElement("input")}}&nbsp;:

```js
slecteurPays.addEventListener("change", verifierCodePostal);
champCodePostal.addEventListener("input", verifierCodePostal);
```

### Limiter la taille d'un fichier avant son envoi

Une autre contrainte fréquemment rencontrée consiste à appliquer une limite sur la taille d'un fichier à téléverser. Pour vérifier cela côté client avant d'envoyer le fichier, nous allons combiner l'API <i lang="en">Constraint Validation</i> (notamment la méthode `field.setCustomValidity()`), avec une autre API, l'API <i lang="en">File</i>.

Voici le fragment HTML utilisé pour l'exemple&nbsp;:

```html
<label for="fs"
  >Veuillez choisir un fichier qui ne dépasse pas 75ko&nbsp;:
</label>
<input type="file" id="fs" />
```

Cela donnera le formulaire suivant&nbsp;:

{{EmbedLiveSample("Limiter la taille d'un fichier avant son envoi")}}

Pour le code JavaScript, on lit le fichier sélectionné avec la méthode `File.size()` pour obtenir sa taille et on compare cette valeur avec la limite (ici codée en dur), puis on appelle l'API de validation pour indiquer au navigateur si la contrainte est respectée&nbsp;:

```js
const fs = document.getElementById("fs");

function verifierTailleFichier() {
  const fichier = fs.files;

  // S'il y a (au moins) un fichier sélectionné
  if (fichier.length > 0) {
    if (fichier[0].size > 75 * 1000) {
      // La contrainte n'est pas respectée
      fs.setCustomValidity("Le fichier sélectionné ne doit pas dépasser 75ko.");
      fs.reportValidity();
      return;
    }
  }
  // La contrainte spécifique est bien respectée
  fs.setCustomValidity("");
}
```

Pour finir, on attache cette méthode au gestionnaire d'évènement correspondant&nbsp;:

```js
fs.addEventListener("change", verifierTailleFichier);
```

## Mise en forme visuelle pour la validation des contraintes

En plus de définir des contraintes, les développeur·euse·s web souhaitent contrôler les messages affichés aux utilisateur·ice·s et leur style.

### Contrôler l'aspect des éléments

L'aspect des éléments peut être personnalisé grâce aux pseudo-classes CSS suivantes.

#### `:required` et `:optional`

Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(':required')}} et {{CSSxRef(':optional')}} permettent d'écrire des sélecteurs pour cibler les éléments qui ont ou non l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required).

#### `:placeholder-shown`

Voir {{CSSxRef(':placeholder-shown')}}.

#### `:valid` et `:invalid`

Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(':valid')}} et {{CSSxRef(':invalid')}} sont utilisées pour représenter des éléments `<input>` dont le contenu est valide (respectivement invalide) par rapport au type de champ. Ces classes permettent de mettre en forme les éléments de formulaire valides ou invalides afin d'en faciliter l'identification.

### Contrôler le texte utilisé pour la validation des contraintes

Plusieurs outils peuvent vous aider à contrôler le texte utilisé pour indiquer une erreur de validation&nbsp;:

- La méthode `setCustomValidity(message)` pour les éléments suivants&nbsp;:
  - {{HTMLElement("fieldset")}}. Note&nbsp;: fournir un message d'invalidité personnalisé pour les éléments `<fieldset>` n'empêchera pas l'envoi du formulaire dans la plupart des navigateurs.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Les boutons d'envoi (créés avec un élément {{HTMLElement("button")}} de type `submit` ou avec un élément `input` de type `{{HTMLElement("input/submit", "submit")}}`. Les autres types de bouton ne contribuent pas à la validation des contraintes.)
  - {{HTMLElement("textarea")}}

- L'interface {{DOMxRef("ValidityState")}} décrit l'objet retourné par la propriété `validity` des types d'éléments listés ci-avant. Elle représente différentes façons selon lesquelles une valeur saisie peut être invalide. Avec la méthode précédente, elle permet d'expliquer la raison pour laquelle la valeur d'un champ est invalide.
