---
title: "<form> : l'élément représentant un formulaire"
slug: Web/HTML/Reference/Elements/form
original_slug: Web/HTML/Element/form
---

{{HTMLSidebar}}

L'élément HTML **`<form>`** représente un formulaire, c'est-à-dire une section d'un document qui contient des contrôles interactifs permettant à un utilisateur de fournir des informations.

{{InteractiveExample("HTML Demo: &lt;form&gt;", "tabbed-standard")}}

```html interactive-example
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

```css interactive-example
form.form-example {
  display: table;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}
```

Il est possible d'utiliser les pseudo-classes CSS [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) pour mettre en forme un élément `<form>` selon que le contenu des éléments du formulaire est valide ou non.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >
        qui ne contient pas d'élément <code>&#x3C;form></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Form_Role"
          ><code>form</code></a
        >
        si le formulaire a un
        <a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"
          >nom accessible</a
        >, sinon
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#search"><code>search</code></a
        >, <a href="https://w3c.github.io/aria/#none"><code>none</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLFormElement"
          ><code>HTMLFormElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Cet attribut indique quels types de contenus sont acceptés par le serveur. Il peut y en avoir plusieurs, séparés par des virgules.

    > [!NOTE]
    > Cet attribut a été retiré dans HTML5 et ne doit plus être utilisé. À la place, il faut utiliser l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#attr-accept) de l'élément `<input type=file>`.

- `accept-charset`
  - : Encodages de caractères séparés par des espaces que le serveur accepte. Le navigateur les utilise dans l'ordre dans lequel ils sont listés. La valeur par défaut signifie [le même encodage que celui de la page](/fr/docs/Web/HTTP/Reference/Headers/Content-Encoding).
    (Dans les versions précédentes de HTML, les codages de caractères pouvaient également être délimités par des virgules).
- `autocapitalize` {{non-standard_inline}}
  - : Cet attribut est un attribut non-standard utilisé sur iOS par Safari Mobile qui contrôle la façon dont la valeur du texte est automatiquement transcrite en majuscules lors de la saisie par l'utilisateur. Si l'attribut `autocapitalize` est défini sur un des descendants du formulaire, il surchargera la valeur de `autocapitalize` utilisée pour le formulaire. Les valeurs non-dépréciées sont disponibles pour iOS 5 et supérieurs. La valeur par défaut est `sentences`. Les valeurs possibles sont:
    - `none` : La mise en majuscules est totalement désactivée
    - `sentences` : Les premières lettres des phrases sont automatiquement passées en majuscules.
    - `words` : La première lettre de chaque mot est automatiquement passée en majuscule.
    - `characters` : Tous les caractères sont automatiquement passés en majuscules.

- `autocomplete`
  - : Cet attribut énuméré est utilisé pour définir le comportement du navigateur quant à l'autocomplétion des champs. Cet attribut peut être surchargé par chacun des éléments du formulaire. Il peut prendre deux valeurs :
    - `off` : Le navigateur ne peut pas compléter automatiquement les entrées. (Les navigateurs ont tendance à ignorer ce point pour les formulaires de connexion suspects ; voir [L'attribut autocomplete et les champs de connexion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields).)
    - `on` : Le navigateur peut compléter automatiquement les entrées.

- `name`
  - : Le nom du formulaire. Il doit être unique parmi tous les formulaires d'un document, et ne doit pas être une chaîne de caractères vide.
- `rel`
  - : Crée un hyperlien ou une annotation en fonction de la valeur, voir l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) pour plus de détails.

### Attributs pour l'envoi de formulaires

Les attributs suivants contrôlent le comportement pendant l'envoi du formulaire.

- `action`
  - : L'URL qui traite l'envoi du formulaire. Cette valeur peut être remplacée par un attribut [`formaction`](/fr/docs/Web/HTML/Reference/Elements/button#attr-formaction) sur un [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).
- `enctype`
  - : Lorsque la valeur de l'attribut `method` est `post`, cet attribut définit le [type MIME](https://fr.wikipedia.org/wiki/Type_MIME) qui sera utilisé pour encoder les données envoyées au serveur. C'est un attribut énuméré qui peut prendre les valeurs suivantes :
    - `application/x-www-form-urlencoded` : la valeur par défaut si l'attribut n'est pas défini
    - `multipart/form-data` : la valeur utilisée par un élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) avec l'attribut `type="file"`.
    - `text/plain`, correspondant au [type MIME](https://fr.wikipedia.org/wiki/Type_MIME) éponyme et utilisé à des fins de débogage.

    Cette valeur peut être remplacée par un attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/button#attr-formenctype) sur un [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

- `method`
  - : Cet attribut définit la méthode [HTTP](/fr/docs/Web/HTTP) qui sera utilisée pour envoyer les données au serveur. C'est un attribut énuméré qui peut prendre les valeurs suivantes :
    - `post` : La méthode [POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; données du formulaire envoyées comme [corps de la requête](/fr/docs/Web/API/Body).
    - `get` : La méthode [GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) ; données du formulaire annexées à l'URL `action` avec un séparateur `?`. Utilisez cette méthode lorsque le formulaire [n'a pas d'effets secondaires](/fr/docs/Glossary/Idempotent).
    - `dialog` : Lorsque le formulaire se trouve à l'intérieur d'un [`<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog), ferme la boîte de dialogue à la soumission.

    Si cet attribut n'est pas défini, la valeur par défaut utilisée est `get`. Cette valeur peut-être remplacée par un attribut [`formmethod`](/fr/docs/Web/HTML/Reference/Elements/button#attr-formmethod) sur un [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

- `novalidate`
  - : Cet attribut booléen indique si le formulaire doit être validé au moment de sa soumission. S'il n'est pas défini, le formulaire sera validé lors de sa soumission. Il peut être surchargé par l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/button#attr-formnovalidate) des éléments [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) ou [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) appartenant au formulaire.
- `target`
  - : Un nom ou un mot-clé indiquant où afficher la réponse après avoir envoyé le formulaire. Dans HTML 4, c'est le nom, ou le mot-clé, d'une frame. Dans HTML5, c'est le nom, ou le mot-clé, d'un _contexte de navigation_ (onglet, fenêtre, frame). Les mots-clés suivants ont un sens particulier :
    - `_self` (par défaut) : Charger dans le même contexte de navigation que le contexte actuel.
    - `_blank`: Chargement dans un nouveau contexte de navigation sans nom.
    - `_parent`: Charge dans le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, se comporte de la même manière que `_self`.
    - `_top`: Charger dans le contexte de navigation de niveau supérieur (c'est-à-dire le contexte de navigation qui est un ancêtre du contexte actuel et qui n'a pas de parent). S'il n'y a pas de parent, se comporte de la même manière que `_self`.

    Cette valeur peut être remplacée par un attribut [`formtarget`](/fr/docs/Web/HTML/Reference/Elements/button#attr-formtarget) sur un [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

    > [!NOTE]
    > La définition de `target="_blank"` sur les éléments `<form>` fournit implicitement le même comportement `rel` que la définition de [`rel="noopener"`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) qui ne définit pas `window.opener`.

## Exemples

### HTML

```html
<!-- Formulaire simple qui enverra une requête GET -->
<form>
  <label
    >Nom :
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Sauvegarder</button>
</form>

<!-- Formulaire qui enverra une requête POST à l'URL actuelle -->
<form method="post">
  <label
    >Nom :
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Sauvegarder</button>
</form>

<!-- Formulaire avec un ensemble de champs, une légende et une étiquette -->
<form method="post">
  <fieldset>
    <legend>Titre</legend>
    <label><input type="radio" name="radio" />Sélectionnez-moi</label>
  </fieldset>
</form>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des formulaires HTML](/fr/docs/conflicting/Learn_web_development/Extensions/Forms)
- D'autres éléments qui sont utilisés lors de la création de formulaires : [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), [`<datalist>`](/fr/docs/Web/HTML/Reference/Elements/datalist), [`<fieldset>`](/fr/docs/Web/HTML/Reference/Elements/fieldset), [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input), [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label), [`<legend>`](/fr/docs/Web/HTML/Reference/Elements/legend), [`<meter>`](/fr/docs/Web/HTML/Reference/Elements/meter), [`<optgroup>`](/fr/docs/Web/HTML/Reference/Elements/optgroup), [`<option>`](/fr/docs/Web/HTML/Reference/Elements/option), [`<output>`](/fr/docs/Web/HTML/Reference/Elements/output), [`<progress>`](/fr/docs/Web/HTML/Reference/Elements/progress), [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select), [`<textarea>`](/fr/docs/Web/HTML/Reference/Elements/textarea).
- Obtenir une liste des éléments du formulaire : [`HTMLFormElement.elements`](/fr/docs/Web/API/HTMLFormElement/elements)
- [ARIA : rôle `form`](/fr/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [ARIA : rôle `search`](/fr/docs/Web/Accessibility/ARIA/Roles/Search_role)
