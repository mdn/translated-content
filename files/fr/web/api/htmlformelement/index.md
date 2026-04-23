---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLFormElement`** représente un élément HTML {{HTMLElement("form")}} du DOM. Elle permet d'accéder — et, dans certains cas, de modifier — certains aspects du formulaire, ainsi que d'accéder à ses éléments composants.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite aussi des propriétés de son parent {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLFormElement.acceptCharset")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`accept-charset`](/fr/docs/Web/HTML/Reference/Elements/form#accept-charset) de ce formulaire.
- {{DOMxRef("HTMLFormElement.action")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) de ce formulaire, contenant l'URI d'un programme qui traite les informations soumises par le formulaire.
- {{DOMxRef("HTMLFormElement.autocomplete")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete) de ce formulaire, indiquant si les contrôles de ce formulaire peuvent voir leurs valeurs renseignées automatiquement par le navigateur.
- {{DOMxRef("HTMLFormElement.encoding")}} ou {{DOMxRef("HTMLFormElement.enctype")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) de ce formulaire, indiquant le type de contenu utilisé pour transmettre le formulaire au serveur. Seules des valeurs définies peuvent être utilisées. Les deux propriétés sont synonymes.
- {{DOMxRef("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormControlsCollection")}} regroupant tous les contrôles de formulaire appartenant à cet élément de formulaire.
- {{DOMxRef("HTMLFormElement.length")}} {{ReadOnlyInline}}
  - : Un nombre `long` reflétant le nombre de contrôles dans le formulaire.
- {{DOMxRef("HTMLFormElement.name")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/form#name) du formulaire, contenant le nom du formulaire.
- {{DOMxRef("HTMLFormElement.noValidate")}}
  - : Une valeur booléenne reflétant la valeur de l'attribut HTML [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) de ce formulaire, indiquant si le formulaire ne doit pas être validé.
- {{DOMxRef("HTMLFormElement.method")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire, indiquant la méthode HTTP utilisée pour soumettre le formulaire. Seules des valeurs définies peuvent être utilisées.
- {{DOMxRef("HTMLFormElement.rel")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) du formulaire, indiquant les types de liens que le formulaire crée, sous forme d'une liste de valeurs séparées par des espaces.
- {{DOMxRef("HTMLFormElement.relList")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DOMTokenList")}} reflétant l'attribut HTML [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) sous la forme d'une liste de jetons.
- {{DOMxRef("HTMLFormElement.target")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut HTML [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) du formulaire, indiquant où afficher les résultats reçus lors de l'envoi du formulaire.

Les champs nommés sont ajoutés à leur instance de formulaire propriétaire en tant que propriétés et peuvent écraser les propriétés natives si elles portent le même nom (par exemple, un formulaire avec une entrée nommée `action` verra sa propriété `action` retourner cette entrée plutôt que la valeur de l'attribut HTML [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action)).

## Méthodes d'instance

_Cette interface hérite aussi des méthodes de son parent {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : Retourne `true` si les contrôles enfants de l'élément sont soumis à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) et respectent ces contraintes&nbsp;; retourne `false` si certains contrôles ne les respectent pas. Pour chaque contrôle invalide, un évènement annulable {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} est déclenché&nbsp;; ces contrôles sont considérés invalides si l'évènement n'est pas annulé. C'est au développeur·euse de décider de la conduite à tenir lorsque la méthode retourne `false`.
- {{DOMxRef("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : Retourne `true` si les contrôles enfants de l'élément respectent leurs contraintes de validation. Lorsque `false` est retourné, des évènements annulables {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sont déclenchés pour chaque contrôle invalide et les problèmes de validation sont signalés à l'utilisateur·ice.
- {{DOMxRef("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : Demande que le formulaire soit soumis en utilisant le bouton d'envoi indiqué et sa configuration associée.
- {{DOMxRef("HTMLFormElement.reset", "reset()")}}
  - : Redéfinit le formulaire à son état initial.
- {{DOMxRef("HTMLFormElement.submit", "submit()")}}
  - : Soumet le formulaire au serveur.

## Évènements

Écoutez ces évènements en utilisant `addEventListener()`, ou en assignant un écouteur d'événement à la propriété `oneventname` de cette interface.

- {{DOMxRef("HTMLFormElement/formdata_event", "formdata")}}
  - : L'évènement `formdata` est déclenché après la construction de la liste d'entrées représentant les données du formulaire.
- {{DOMxRef("HTMLFormElement/reset_event", "reset")}}
  - : L'évènement `reset` est déclenché lorsque le formulaire est réinitialisé.
- {{DOMxRef("HTMLFormElement/submit_event", "submit")}}
  - : L'évènement `submit` est déclenché lorsque le formulaire est soumis.

## Notes d'utilisation

### Obtention d'un objet élément de formulaire

Pour obtenir un objet `HTMLFormElement`, vous pouvez utiliser un [sélecteur CSS](/fr/docs/Web/CSS/Guides/Selectors) avec {{DOMxRef("ParentNode.querySelector", "querySelector()")}} ou vous pouvez obtenir une liste de tous les formulaires du document utilisant sa propriété {{DOMxRef("Document.forms", "forms")}}.

{{DOMxRef("Document.forms")}} retourne un tableau des objets `HTMLFormElement` listant chacun des formulaires de la page. Vous pouvez utiliser alors l'une des syntaxes suivantes pour obtenir un formulaire individuel :

- `document.forms[index]`
  - : retourne le formulaire à l'`index` défini dans le tableau du formulaire.
- `document.forms[id]`
  - : retourne le formulaire dont l'ID (_identifiant_) est `id` .
- `document.forms[name]`
  - : retourne le formulaire dont la valeur d'attribut de {{DOMxRef("Element.name", "name")}} est `name`.

### Accès aux éléments du formulaire

Vous pouvez accéder à la liste des éléments contenant des données du formulaire en examinant la propriété {{DOMxRef("HTMLFormElement.elements", "elements")}} du formulaire. Celle-ci retourne un {{DOMxRef("HTMLFormControlsCollection")}} listant tous les éléments d'entrée de données utilisateur·ice du formulaire, aussi bien ceux qui sont des descendants du `<form>` que ceux qui sont déclarés membres du formulaire via leur attribut `form`.

Vous pouvez aussi obtenir un élément du formulaire en utilisant son attribut `name` comme clé du `form`, mais utiliser `elements` est une meilleure approche — il contient _seulement_ les éléments du formulaire et ne peut pas être confondu avec d'autres attributs du `form`.

### Problèmes liés au nommage des éléments

Certains noms peuvent interférer avec l'accès en JavaScript aux propriétés et aux éléments du formulaire.

Par exemple&nbsp;:

- `<input name="id">` prendra le pas sur `<form id="…">`. Cela signifie que `form.id` ne fera pas référence à l'identifiant du formulaire, mais à l'élément dont le nom est `"id"`. Cela vaut pour toute autre propriété de formulaire, comme `<input name="action">` ou `<input name="post">`.
- `<input name="elements">` rendra la collection `elements` du formulaire inaccessible. La référence `form.elements` renverra désormais à l'élément individuel.

Pour éviter de tels problèmes liés aux noms d'éléments&nbsp;:

- _Utilisez toujours_ la collection `elements` pour éviter toute ambiguïté entre le nom d'un élément et une propriété du formulaire.
- _Ne jamais_ utiliser `"elements"` comme nom d'élément.

Si vous n'utilisez pas JavaScript, cela ne posera pas de problème.

### Éléments considérés comme des contrôles de formulaire

Les éléments qui sont inclus par `HTMLFormElement.elements` et `HTMLFormElement.length` sont&nbsp;:

- {{HTMLElement("button")}} (_bouton_)
- {{HTMLElement("fieldset")}} (\_champ_s)
- {{HTMLElement("input")}} (_entrée_) (à l'exception de ceux dont [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) est `"image"` omis pour des raisons historiques)
- {{HTMLElement("object")}} (_objet_)
- {{HTMLElement("output")}} (_sortie_)
- {{HTMLElement("select")}} (_sélection_)
- {{HTMLElement("textarea")}} (_zone de texte_)

Aucun autre élément n'est inclus dans la liste retournée par `elements`, ce qui en fait un excellent moyen d'accéder aux éléments les plus importants lors du traitement des formulaires.

## Exemples

Crée un nouvel élément de formulaire, modifie ses attributs et l'envoie&nbsp;:

```js
const f = document.createElement("form"); // Crée un formulaire
document.body.appendChild(f); // L'ajoute au corps du document
f.action = "/cgi-bin/some.cgi"; // Ajoute les attributs action et method
f.method = "POST";
f.submit(); // Appelle la méthode submit() du formulaire
```

Extraire des informations d'un élément `<form>` et définir certains de ses attributs&nbsp;:

```html
<form name="formA" action="/cgi-bin/test" method="post">
  <p>
    Appuyez sur «&nbsp;Info&nbsp;» pour les détails du formulaire, ou sur
    «&nbsp;Définir&nbsp;» pour les modifier.
  </p>
  <p>
    <button type="button" id="info">Info</button>
    <button type="button" id="set-info">Définir</button>
    <button type="reset">Réinitialiser</button>
  </p>

  <textarea id="form-info" rows="15" cols="20"></textarea>
</form>
```

```js
document.getElementById("info").addEventListener("click", () => {
  // Récupère une référence au formulaire via son nom
  const f = document.forms["formA"];
  // Les propriétés du formulaire qui nous intéressent
  const properties = [
    "elements",
    "length",
    "name",
    "charset",
    "action",
    "acceptCharset",
    "action",
    "enctype",
    "method",
    "target",
  ];
  // Parcourt les propriétés et les transforme en une chaîne de caractères pour affichage
  const info = properties
    .map((property) => `${property}: ${f[property]}`)
    .join("\n");

  // Remplit le <textarea> du formulaire avec les propriétés
  document.forms["formA"].elements["form-info"].value = info; // document.forms["formA"]['form-info'].value fonctionnerait aussi
});

document.getElementById("set-info").addEventListener("click", (e) => {
  // Récupère une référence au formulaire via la cible de l'événement
  // e.target est le bouton, et .form est le formulaire auquel il appartient
  const f = e.target.form;
  // L'argument doit être une référence à un élément de formulaire.
  f.action = "a-different-url.cgi";
  f.name = "a-different-name";
});
```

Envoi d'un formulaire dans une nouvelle fenêtre&nbsp;:

```html
<form action="test.php" target="_blank">
  <p>
    <label>Prénom&nbsp;: <input type="text" name="first-name" /></label>
  </p>
  <p>
    <label>Nom&nbsp;: <input type="text" name="last-name" /></label>
  </p>
  <p>
    <label><input type="password" name="pwd" /></label>
  </p>

  <fieldset>
    <legend>Animal préféré</legend>

    <p>
      <label><input type="radio" name="pet" value="cat" /> Chat</label>
    </p>
    <p>
      <label><input type="radio" name="pet" value="dog" /> Chien</label>
    </p>
  </fieldset>

  <fieldset>
    <legend>Véhicules possédés</legend>

    <p>
      <label
        ><input type="checkbox" name="vehicle" value="Bike" />J'ai un
        vélo</label
      >
    </p>
    <p>
      <label
        ><input type="checkbox" name="vehicle" value="Car" />J'ai une
        voiture</label
      >
    </p>
  </fieldset>

  <p><button>Envoyer</button></p>
</form>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface {{HTMLElement("form")}}.
