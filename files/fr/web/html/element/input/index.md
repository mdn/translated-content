---
title: <input>
slug: Web/HTML/Element/Input
tags:
  - Element
  - Formulaires
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input
---
{{HTMLRef}}

L'élément HTML **`<input>`** est utilisé pour créer un contrôle interactif dans un formulaire web qui permet à l'utilisateur de saisir des données. Les saisies possibles et le comportement de l'élément `<input>` dépend fortement de la valeur indiquée dans son attribut `type`.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Les différents types de champs `<input>`

La façon dont un élément `<input>` fonctionne dépend grandement de la valeur de son attribut `type`. Aussi, pour chacun de ces types, on aura une page de référence dédiée. Par défaut, lorsque l'attribut `type` n'est pas présent, il aura la valeur implicite `text`.

Les types de champs disponibles sont :

- `{{HTMLElement("input/button", "button")}}` : un bouton sans comportement défini.
- `{{HTMLElement("input/checkbox", "checkbox")}}` : une case à cocher qui permet de sélectionner/déselectionner une valeur
- `{{HTMLElement("input/color", "color")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de définir une couleur.
- `{{HTMLElement("input/date", "date")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de saisir une date (composé d'un jour,  d'un mois et d'une année).
- `{{HTMLElement("input/datetime-local", "datetime-local")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de saisir une date et une heure (sans fuseau horaire).
- `{{HTMLElement("input/email", "email")}}` : {{HTMLVersionInline("5")}} un champ qui permet de saisir une adresse éléctronique.
- `{{HTMLElement("input/file", "file")}}` : un contrôle qui permet de sélectionner un fichier. L'attribut **`accept`** définit les types de fichiers qui peuvent être sélectionnés.
- `{{HTMLElement("input/hidden", "hidden")}}` : un contrôle qui n'est pas affiché mais dont la valeur est envoyée au serveur.
- `{{HTMLElement("input/image", "image")}}` : un bouton graphique d'envoi du formulaire. L'attribut `src` doit être défini avec la source de l'image et l'attribut `alt` doit être défini avec le texte alternatif. Les attributs `height` et `width` permettent de définir la taille de l'image en pixels.
- `{{HTMLElement("input/month", "month")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de saisir un mois et une année (sans fuseau horaire).
- `{{HTMLElement("input/number", "number")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de saisir un nombre.
- `{{HTMLElement("input/password", "password")}}` : un champ texte sur une seule ligne dont la valeur est masquée. Les attributs `maxlength` et `minlength` définissent la taille maximale et minimale de la valeur à saisir dans le champ.

  > **Note :** Tout formulaire comportant des données sensibles doit être servi via HTTPS. Les navigateurs alertent les utilisateurs lorsque les formulaires avec de telles données sont uniquement disponibles via HTTP.

- `{{HTMLElement("input/radio", "radio")}}` : un bouton radio qui permet de sélectionner une seule valeur parmi un groupe de différentes valeurs.
- `{{HTMLElement("input/range", "range")}}` : {{HTMLVersionInline("5")}} un contrôle qui permet de saisir un nombre dont la valeur exacte n'est pas importante.
- `{{HTMLElement("input/reset", "reset")}}` : un bouton qui réinitialise le contenu du formulaire avec les valeurs par défaut.
- `{{HTMLElement("input/search", "search")}}` : {{HTMLVersionInline("5")}} un champ texte sur une ligne pour des termes de recherche. Les sauts de ligne sont automatiquement retirés.
- `{{HTMLElement("input/submit", "submit")}}` : un bouton qui envoie le formulaire.
- `{{HTMLElement("input/tel", "tel")}}` : {{HTMLVersionInline("5")}} un contrôle pour saisir un numéro de téléphone.
- `{{HTMLElement("input/text", "text")}}` : un champ texte sur une seule ligne. Les sauts de ligne sont automatiquement retirés.
- `{{HTMLElement("input/time", "time")}}` : {{HTMLVersionInline("5")}} A control for entering a time value with no time zone.
- `{{HTMLElement("input/url", "url")}}` : {{HTMLVersionInline("5")}} un champ permettant de saisir une URL.
- `{{HTMLElement("input/week", "week")}}` : {{HTMLVersionInline("5")}} un contrôle permettant de saisir une date représentée par un numéro de semaine et une année (sans indication de fuseau horaire).

Certains types sont désormais obsolètes :

- `{{HTMLElement("input/datetime", "datetime")}}` : {{HTMLVersionInline("5")}} {{deprecated_inline}} {{deprecated_inline}} un contrôle pour saisir une date et une heure selon un fuseau horaire UTC. **Cette fonctionnalité a été [retirée du standard WHATWG HTML.](https://github.com/whatwg/html/issues/336)**

## Attributs

L'élément `<input>` est l'un des éléments HTML les plus complexes et puissants et il peut utiliser de nombreux types et attributs. Chaque élément `<input>` étant basé sur l'interface DOM {{domxref("HTMLInputElement")}}, ils partagent tous, techniquement, les mêmes attributs. Toutefois, certains attributs ne fonctionnent que pour certains types de champs et certains attributs fonctionnent spécifiquement selon le type de champ.

Sur cette page, vous trouverez des informations sur les attributs communs à l'ensemble des types d'éléments `<input>` ainsi que la description de quelques attributs notables.

### Attributs communs à l'ensemble des types

This section lists the attributes which are used by all form `<input>` types. Attributes that are unique to particular input types—or attributes which are common to all input types but have special behaviors when used on a given input type—are instead documented on those types' pages.

> **Note :** Les éléments `<input>` peuvent bien entendu utiliser les [attributs universels](/fr/docs/Web/HTML/Attributs_universels).

| Attribut                           | Description                                                                                                                                                                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`autocomplete`](#autocomplete) | Une chaîne de caractères qui indique le type d'autocomplétion à utiliser.                                                                                                                                                                           |
| [`autofocus`](#autofocus)     | Un attribut booléen qui passe le focus sur le champ lorsque le formulaire est affiché.                                                                                                                                                              |
| [`disabled`](#disabled)     | Un attribut booléen qui indique si le champ doit être désactivé.                                                                                                                                                                                    |
| [`form`](#form)             | L'identifiant du formulaire (la valeur de l'attribut `id` de l'élément {{HTMLElement("form")}}) auquel le champ est rattaché. Si cet attribut est absent, le champ sera rattaché au formulaire le plus proche qui le contient s'il existe. |
| [`list`](#list)             | L'identifiant (valeur de l'attribut `id`) d'un élément {{HTMLElement("datalist")}} qui fournit une liste de suggestions.                                                                                                                   |
| [`name`](#name)             | Le nom du champ qui sera rattaché à la donnée envoyée via le formulaire.                                                                                                                                                                            |
| [`readonly`](#readonly)     | Un attribut booléen qui indique si le champ peut être édité ou non.                                                                                                                                                                                 |
| [`required`](#required)     | Un attribut booléen qui indique que le champ doit être renseigné avant de pouvoir envoyer le formulaire.                                                                                                                                            |
| [`tabindex`](#tabindex)     | Une valeur numérique qui indique à l'agent utilisateur l'ordre selon lequel naviguer au clavier grâce à la touche <kbd>Tab</kbd>.                                                                                                                   |
| [`type`](#type)             | Une chaîne de caractère qui indique l[e type de champ représenté par l'élément `<input>`](#types).                                                                                                                                                  |
| [`value`](#value)         | La valeur du champ.                                                                                                                                                                                                                                 |

#### {{htmlattrdef("autocomplete")}}

Une chaîne de caractères qui décrit si le champ doit fournir des fonctionnalités d'autocomplétion. Cette autocomplétion peut notamment provenir des valeurs précédemment saisies dans le champ. D'autres méthodes plus complexes peuvent être utilisées : un navigateur pourra par exemple interagir avec la liste des contacts de l'appareil afin de proposer l'autocomplétion pour les adresses électroniques. Voir {{SectionOnPage("/fr/docs/Web/HTML/Attributs/autocomplete", "Valeurs")}} pour les valeurs qui peuvent être utilisées avec cet attribut.

Cet attribut n'aura aucun effet sur les champs qui ne renvoient pas de valeurs numériques ou de textes (les champs `checkbox` ou `image` par exemple).

Pour plus d'informations, voir [la page de documentation sur l'attribut HTML `autocomplete`](/fr/docs/Web/HTML/Attributs/autocomplete).

#### {{htmlattrdef("autofocus")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le champ doit recevoir le focus lorsque le chargement de la page est terminé (ou que la boîte de dialogue ({{HTMLElement("dialog")}}) contenant l'élément est affichée).

> **Note :** Un élément ayant l'attribut `autofocus` peut avoir le focus avant que l'évènement {{domxref("DOMContentLoaded")}} soit déclenché.

Seul un élément du document peut avoir l'attribut `autofocus`. Il n'est pas possible d'utiliser l'attribut `autofocus` sur les champs de type `hidden` car ces derniers, masqués, ne peuvent pas avoir le focus.

> **Attention :** Le focus automatique sur un champ de formulaire peut être source de confusion, notamment pour les personnes qui utilisent des lecteurs d'écran. En effet, lorsque `autofocus` est utilisé, les lecteurs d'écran « téléportent » l'utilisateur sur le contrôle du champ, sans aucun avertissement.

#### {{htmlattrdef("disabled")}}

Un attribut booléen qui, lorsqu'il est présent, indique que l'utilisateur ne devrait pas pouvoir interagir avec le champ. Les champs désactivés sont généralement affichés avec une couleur plus pale et/ou avec d'autres indications.

Les champs désactivés avec cet attribut ne reçoivent pas l'évènement {{event("click")}} et ne sont pas envoyés avec le formulaire.

> **Note :** Bien que ce ne soit pas indiqué dans la spécification, Firefox conserver l'état désactivé des champs, [y compris si cet état a été obtenu dynamiquement](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing), lors des rechargements de la page. L'attribut {{htmlattrxref("autocomplete","input")}} pourra être utilisé afin de contrôler cette fonctionnalité.

#### {{htmlattrdef("form")}}

Une chaîne de caractères qui indique l'élément {{HTMLElement("form")}} auquel le champ est associé (on parle de « formulaire propriétaire »). La valeur de cette chaîne de caractères doit correspondre à la valeur de l'attribut {{htmlattrxref("id")}} d'un élément `<form>` du document. Si cet attribut n'est pas utilisé, l'élément `<input>` est rattaché au formulaire le plus proche qui le contient (si un tel formulaire existe).

Grâce à cet attribut, on peut placer un champ n'importe où dans le document et avoir un lien entre le champ et un formulaire situé ailleurs.

> **Note :** Un champ ne peut être associé qu'à un seul formulaire.

#### {{htmlattrdef("list")}}

Cet attribut est une chaîne de caractères qui correspond à l'identifiant ({{domxref("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} du document et qui fournit une liste de valeurs à suggérer à l'utilisateur pour ce champ. Les valeurs de cette liste qui ne sont pas compatibles avec ce type de champ ne seront pas incluses dans les suggestions.

L'attribut `list` n'est pas pris en charge pour les types `hidden`, `password`, `checkbox`, `radio`, `file` ou pour les boutons.

#### {{htmlattrdef("name")}}

Une chaîne de caractères qui définit le nom associé au champ. Ce nom sera envoyé avec la valeur lors de l'envoi du formulaire.

Lorsqu'un champ a un nom, cette valeur devient une propriété de  {{domxref("HTMLFormElement.elements")}} qu'on pourra utiliser en JavaScript (ex. si on a un attribut `name` qui vaut `hat-size` :

```js
let form = document.querySelector("form");
let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];
```

Avec ce code, la variable `guestName` correspondra à l'élément {{domxref("HTMLInputElement")}} du champ `guest` et `hatSize` à l'objet pour le champ `hat-size`.

> **Attention :** Il est préférable de ne pas utiliser de valeurs pour `name` qui correspondent à une propriété native de l'objet du DOM car cela surchargerait la propriété préexistante avec une référence au champ concerné.

Le nom `_charset_` possède une signification spéciale. Si cette valeur est utilisée comme nom pour un élément `<input>` de type [`hidden`](/fr/docs/Web/HTML/Element/Input/hidden), la valeur du champ (l'attribut `value`) sera automatiquememnt renseignée par l'agent utilisateur et correspondra à l'encodage utilisé pour envoyer le formulaire.

Si l'attribut `name` n'est pas présent ou qu'il est vide, la valeur du champ ne sera pas envoyée avec le formulaire.

> **Note :** Pour certaines raisons historiques, le nom `isindex` n'est pas autorisé. Pour en savoir plus, voir la section [Nommage des contrôles de formulaire : l'attribut `name`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) de la spécification HTML.

#### {{htmlattrdef("readonly")}}

Un attribut booléen qui, lorsqu'il est présent, indique que l'utilisateur ne devrait pas pouvoir éditer la valeur du champ.

`disabled` et `readonly` sont bien différents : `readonly` permet d'avoir un contrôle fonctionnel mais non éditable alors que les champs `disabled` ne fonctionnent pas comme des contrôles.

> **Note :** L'attribut `required` n'est pas autorisé sur les éléments `<input>` avec l'attribut `readonly`. Seuls les champs textuels peuvent être mis en lecture seule. En effet, pour les autres contrôles (ex. les case à cocher et les boutons radio), il n'y a pas de réelle différence entre l'application de `readonly` ou de `disabled`.

#### {{htmlattrdef("required")}}

Un attribut booléen qui, lorsqu'il est présent, indique que l'utilisateur doit fournir une valeur pour ce champ avant de pouvoir envoyer le formulaire. L'attribut `required` est pris en charge pour tous les types d'éléments `<input>` exceptés :

- [`color`](/fr/docs/Web/HTML/Element/input/color)
- [`hidden`](/fr/docs/Web/HTML/Element/input/hidden)
- [`range`](/fr/docs/Web/HTML/Element/input/range)
- [`submit`](/fr/docs/Web/HTML/Element/input/submit)
- [`image`](/fr/docs/Web/HTML/Element/input/image)
- [`reset`](/fr/docs/Web/HTML/Element/input/reset)
- [`button`](/fr/docs/Web/HTML/Element/input/button)

Lorsqu'un champ contient l'attribut, la pseudo-classe CSS {{cssxref(":required")}} lui est appliqué. À l'inverse, les champs qui n'ont pas d'attribut `required` auront la pseudo-classe {{cssxref(":optional")}} appliquée (cela ne s'applique pas aux types de champ qui ne prennent pas en charge `require`).

> **Note :** Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet sur les champs ayant également l'attribut {{htmlattrxref("readonly", "input/text")}}.

#### {{htmlattrdef("tabindex")}}

Une valeur nnumérique qui définit si le champ peut recevoir le focus via la navigation au clavier (en navigant avec la touche <kbd>Tab</kbd>) et la façon dont l'élément s'inscrit dans l'ordre de la navigation au clavier.

Les valeurs de `tabindex` auront un sens différents selon leur signe :

- Lorsque `tabindex` est une valeur négative, cela indique que l'élément peut recevoir le focus de la part de l'utilisateur mais sans utiliser la navigation séquentielle au clavier. Il est recommandé de toujours utiliser une valeur de `-1` dans ce cas.
- Lorsque `tabindex` est nul, cela indique que l'élément peut recevoir le focus et peut être accessible via la navigation au clavier mais que l'ordre de navigation est laissé à la discrétion de l'agent utilisateur. C'est généralement la meilleure valeur à utiliser.
- Lorsque `tabindex` est une valeur positive, cette dernière définit l'ordre de l'élément dans la navigation au clavier. Chaque fois que l'utilisateur appuie sur la touche

  <kbd>Tab</kbd>

  , le focus passe à un élément qui possède un attribut `tabindex` plus élevé. La plupart des plateformes disposent également d'une fonctionnalité pour « reculer » dans la navigation au clavier, généralement via la combinaison de touches

  <kbd>Shift</kbd>

  \+

  <kbd>Tab</kbd>

  .

Si cet attribut est absent ou n'est pas un entier valide, ce sera à l'agent utilisateur de respecter les conventions de la plateforme sous-jacente pour la navigation au clavier et la gestion du focus.

#### {{htmlattrdef("type")}}

Une chaîne de caractères qui indique le type de contrôle à afficher. On pourra par exemple avoir une case à cocher en utilisant la valeur `checkbox`. Lorsque cet attribut est absent ou qu'une valeur inconnue est utilisée, la valeur par défaut sera `text` et le contrôle créé permettra de saisir un texte.

Les valeurs autorisées pour cet attribut sont [présentées plus haut](#les_différents_types_de_champs_input).

#### {{htmlattrdef("value")}}

La valeur du champ. Lorsque cet attribut est indiqué en HTML, il correspond à la valeur initiale du champ qui peut ensuite être modifié par l'utilisateur. Cette valeur peut également être récupérée et modifiée en JavaScript grâce à la propriété `value` de l'objet {{domxref("HTMLInputElement")}}. Cet attribut est toujours optionnel.

> **Note :** À la différence des autres contrôles, les cases à cocher et les boutons radio sont uniquemnet envoyés via le formulaire lorsque l'attribut `checked` est vrai. Dans ce cas, l'attribut `value` sera la valeur associée au champ.
>
> Aussi, si on a une case à cocher dont l'attribut `name` vaut `status`, que l'attribut `value` vaut `active` et que la case est cochée, les données envoyées au formulaire contiendront `status=active`. Si la case à cocher n'est pas cochée, ses données ne seront pas envoyées avec le formulaire. Pour les cases à cocher et les boutons radio, la valeur par défaut de l'attribut `value` est `on`.

## Exemples

### Exemple simple

#### HTML

```html
<p>Un élément de saisie simple </p>
<input type="text" value="Saisir un texte ici">
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '', '100')}}

### Un scénario fréquent

#### HTML

```html
<p>Un formulaire avec différents types de champs</p>
<form action="getform.php" method="get">
  <label>Prénom : <input type="text"></label><br>
  <label>Nom : <input type="text"></label><br>
  <label>Adresse email : <input type="email"></label><br>
  <input type="submit" value="Envoyer">
</form>
```

#### Résultat

{{EmbedLiveSample('Un_scénario_fréquent', '', '200')}}

## Localisation

Pour certains types d'éléments `<input>`, les valeurs saisies autorisées dépendent de la locale utilisée. Ainsi, dans certaines locales, 1,000.00 est un nombre valide alors que dans d'autres, il faudra avoir saisi 1.000,00 pour exprimer le même nombre.

Firefox utilise la méthode heuristique suivante afin de déterminer la locale pour laquelle valider la saisie de l'utilisateur (au moins dans le cas de `type="number"`):

- Utiliser la langue définie par l'attribut `lang`/`xml:lang` de l'élément ou par celui de ses parents.
- Sinon utiliser la langue définie dans l'en-tête HTTP {{httpheader("Content-Language")}}
- Sinon, utiliser la locale du navigateur

## Accessibilité

### Utilisation de libellés

Lorsqu'on utilise des champs de formulaire, il est recommandé d'ajouter des libellés pour chacun de ces champs. Ainsi, les personnes qui utilisent des outils d'assistance pourront connaître la signification du champ.

Dans l'exemple suivant, on illustre comment associer un élément `<label>` avec un élément `<input>`. Pour ce faire, on ajoutera un identifiant (un attribut `id`) à l'élément `<input>` et on référencera cet identifiant via l'attribut `for` de l'élément `<label>`.

    <label for="ptipois">Aimez-vous les petits-pois ?</label>
    <input type="checkbox" name="petitspois" id="ptipois">

### Dimensionnement - taille

Les éléments interactifs tels que les champs de formulaire doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes : celles qui ont des problèmes moteur, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44x44 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

- [Comprendre le critère d'accessibilité 2.5.5 sur la taille des cibles - Comprendre WCAG 2.1 (en anglais)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille des cibles et critère 2.5.5, billet en anglais de Adrian Roselli](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide : cibles tactiles suffisamment grande - Projet A11Y (billet en anglais)](https://a11yproject.com/posts/large-touch-targets/)

## Notes

### Messages personnalisés pour les erreurs

Si on souhaite afficher un message d'erreur personnalisé lors de l'échec de la validation d'un champs, il faudra utiliser [les fonctionnalités de contraintes de validation](/en-US/docs/Web/API/Constraint_validation#Constraint_validation_interfaces) qui sont disponibles sur les éléments `<input>`. Par exemple :

```html
<form>
  <label for="name">Saisir un nom d'utilisateur (lettres minuscules et majuscules) : </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Envoyer</button>
</form>
```

Les fonctionnalités de validation HTML déclencheront un message d'erreur par défaut si on souhaite envoyer le formulaire avec une valeur invalide (qui ne respecte pas `pattern`) ou sans valeur.

Si on souhaite plutôt afficher un message d'erreur personnalisé, on pourra utiliser un fragment de code JavaScript comme celui-ci :

```js
const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity("Veuillez saisir votre nom d'utilisateur !");
  } else {
    nameInput.setCustomValidity("Un nom d'utilisateur ne peut contenir que des lettres minuscules et majuscules, veuillez réessayer");
  }
});
```

Voici le résultat qui pourra être obtenu :

{{EmbedLiveSample("Messages_personnalisés_pour_les_erreurs")}}

Voici un récapitulatif de la logique de cet exemple :

- On vérifie la validité du champ chaque fois que sa valeur est modifiée en exécutant la méthode [`checkValidity()`](/fr/docs/Web/API/HTMLSelectElement/checkValidity) grâce au gestionnaire d'évènement attaché à `input`.
- Si la valeur est invalide, on génère un évènement `invalid` et le gestionnaire d'évènement associé est exécuté. Dans cette fonction, on analyse avec un bloc `if()` si la valeur est invalide parce qu'elle est vide ou parce qu'elle ne correspond pas au motif désiré. Selon le cas de figure, on utilise le message d'erreur correspondant.
- Ainsi, si le champ saisi est invalide, lorsque le bouton Envoyer est utilisé, un des messages d'erreur sera affiché.
- Si la valeur est valide, elle sera envoyée normalement. Pour cela, il faudra annuler la vérification spécifique en appelant [`setCustomValidity()`](/fr/docs/Web/API/HTMLSelectElement/setCustomValidity) avec une chaîne de caractères vide. On effectue cela à chaque évènement `input`. Sans cette étape, avec une validation spécifique, le champ saisi serait considéré comme invalide même si sa valeur respectait les contraintes exprimées dans le HTML.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >, contenu de formulaire (listé, envoyable, réinitialisable),
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >. Si l'attribut {{htmlattrxref("type", "input")}} ne vaut
        pas <code>hidden</code>, c'est un élément étiquetable et
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise de début et ne pas avoir de balise de
        fin.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <ul>
          <li>
            <code>type=button</code> : {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}},
            {{ARIARole("tab")}}
          </li>
          <li>
            <code>type=checkbox</code> : {{ARIARole("button")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("option")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=image</code> : {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=radio</code> : {{ARIARole("menuitemradio")}}
          </li>
          <li><code>type=color|date|email|file|hidden</code> : aucun</li>
          <li><code>type=month|number|password|range|reset</code> : aucun</li>
          <li><code>type=search|submit|tel|text|url|week</code> : aucun</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires                 |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-input-element', '&lt;input&gt;')}}             | {{Spec2('HTML WHATWG')}}         |                              |
| {{SpecName('HTML Media Capture', '#the-capture-attribute','&lt;input capture&gt;')}} | {{Spec2('HTML Media Capture')}} | Ajout de l'élément `capture` |
| {{SpecName('HTML5 W3C', 'forms.html#the-input-element', '&lt;input&gt;')}}             | {{Spec2('HTML5 W3C')}}             |                              |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.4', '&lt;form&gt;')}}                     | {{Spec2('HTML4.01')}}             |                              |

## Compatibilité des navigateurs

{{Compat("html.elements.input")}}

## Voir aussi

- Les autres éléments relatifs aux formulaires HTML : {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} et {{HTMLElement("meter")}}.
- Dans certains cas, l'élément `<input>` est un [élément remplacé](/fr/docs/Web/CSS/%C3%89l%C3%A9ment_remplac%C3%A9), sa position et sa taille dans le cadre de l'élément peuvent être ajustées grâce aux propriétés CSS {{cssxref("object-position")}} et {{cssxref("object-fit")}}.
- L'objet DOM correspondant : {{domxref("HTMLInputElement")}}
