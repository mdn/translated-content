---
title: "<form> : l'élément représentant un formulaire"
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

L'élément [HTML](/fr/docs/Web/HTML) **`<form>`** représente une section du document contenant des contrôles interactifs permettant de soumettre des informations.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;form&gt;", "tabbed-standard")}}

```html interactive-example
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Entrez votre nom&nbsp;: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Entrez votre e-mail&nbsp;: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="S'abonner !" />
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

Il est possible d'utiliser les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) CSS {{CSSxRef(':valid')}} et {{CSSxRef(':invalid')}} pour mettre en forme un élément `<form>` selon que le contenu des {{DOMxRef("HTMLFormElement.elements", "elements")}} du formulaire est valide ou non.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{Deprecated_Inline}}
  - : Cet attribut indique quels [types de contenus](/fr/docs/Web/SVG/Guides/Content_type) sont acceptés par le serveur. Il peut y en avoir plusieurs, séparés par des virgules.

    > [!NOTE]
    > Cet attribut a été retiré dans HTML5 et ne doit plus être utilisé. À la place, il faut utiliser l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#accept) de l'élément `<input type=file>`.

- `accept-charset`
  - : L'{{Glossary("character encoding", "encodage de caractères")}} accepté par le serveur.
    La spécification autorise une seule valeur insensible à la casse `"UTF-8"`, reflétant l'omniprésence de cet encodage (historiquement, plusieurs encodages de caractères pouvaient être spécifiés sous forme de liste séparée par des virgules ou par des espaces).

- `autocapitalize`
  - : Contrôle la mise en majuscules automatique du texte saisi et, le cas échéant, la manière dont elle s'effectue. Voir la page de l'attribut global [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize) pour plus d'informations.

- [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Indique si, par défaut, les éléments d'entrée peuvent voir leurs valeurs complétées automatiquement par le navigateur. Les attributs `autocomplete` appliqués aux éléments du formulaire remplacent celui défini sur le `<form>`. Valeurs possibles&nbsp;:
    - `off`&nbsp;: Le navigateur peut ne pas compléter automatiquement les saisies. (Les navigateurs ont tendance à ignorer ce réglage pour les formulaires de connexion suspects&nbsp;; voir [Gérer l'autocomplétion pour les champs de connexion](/fr/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#gestion_de_lautocomplétion_pour_les_champs_de_connexion).)
    - `on`&nbsp;: Le navigateur peut compléter automatiquement les saisies.

- `name`
  - : Le nom du formulaire. La valeur ne doit pas être une chaîne vide et doit être unique parmi les éléments `form` de la collection de formulaires à laquelle il appartient, le cas échéant. Le nom devient une propriété des objets {{DOMxRef("Window")}}, {{DOMxRef("Document")}} et {{DOMxRef("document.forms")}}, contenant une référence à l'élément formulaire.

- [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
  - : Contrôle les annotations et les types de liens créés par le formulaire. Les annotations incluent [`external`](/fr/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/fr/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/fr/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/fr/docs/Web/HTML/Reference/Attributes/rel#noopener) et [`noreferrer`](/fr/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Les types de liens incluent [`help`](/fr/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/fr/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/fr/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/fr/docs/Web/HTML/Reference/Attributes/rel#search) et [`license`](/fr/docs/Web/HTML/Reference/Attributes/rel#license). La valeur de [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) est une liste d'espaces de ces valeurs énumérées.

### Attributs pour l'envoi de formulaires

Les attributs suivants contrôlent le comportement pendant l'envoi du formulaire.

- `action`
  - : L'URL qui traite l'envoi du formulaire. Cette valeur peut être remplacée par un attribut [`formaction`](/fr/docs/Web/HTML/Reference/Elements/button#formaction) sur un {{HTMLElement("button")}}, [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image). Cet attribut est ignoré lorsque `method="dialog"` est défini.
- `enctype`
  - : Lorsque la valeur de l'attribut `method` est `post`, cet attribut définit le [type MIME](https://fr.wikipedia.org/wiki/Type_MIME) qui sera utilisé pour encoder les données envoyées au serveur. C'est un attribut énuméré qui peut prendre les valeurs suivantes&nbsp;:
    - `application/x-www-form-urlencoded`&nbsp;: la valeur par défaut si l'attribut n'est pas défini
    - `multipart/form-data`&nbsp;: la valeur utilisée par un élément {{HTMLElement("input")}} avec l'attribut `type="file"`.
    - `text/plain`&nbsp;: utilisé à des fins de débogage.

    Cette valeur peut être remplacée par un attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/button#formenctype) sur un {{HTMLElement("button")}}, [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

- `method`
  - : Cet attribut définit la méthode [HTTP](/fr/docs/Web/HTTP) qui sera utilisée pour envoyer les données au serveur.
    C'est un attribut énuméré qui peut prendre les valeurs suivantes (non sensibles à la casse)&nbsp;:
    - `post`&nbsp;: La méthode {{HTTPMethod("POST")}}&nbsp;; données du formulaire envoyées comme [corps de la requête](/fr/docs/Web/API/Request/body).
    - `get`&nbsp;: La méthode {{HTTPMethod("GET")}}&nbsp;; données du formulaire annexées à l'URL `action` avec un séparateur `?`. Utilisez cette méthode lorsque le formulaire {{Glossary("Idempotent", "n'a pas d'effets secondaires")}}.
    - `dialog`&nbsp;: Lorsque le formulaire se trouve à l'intérieur d'un {{HTMLElement("dialog")}}, ferme la boîte de dialogue à la soumission.

    Si cet attribut n'est pas défini, la valeur par défaut utilisée est `get`. Cette valeur peut-être remplacée par un attribut [`formmethod`](/fr/docs/Web/HTML/Reference/Elements/button#formmethod) sur un {{HTMLElement("button")}}, [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

- `novalidate`
  - : Cet attribut booléen indique que le formulaire ne doit pas être validé lors de sa soumission. Si cet attribut n'est pas défini (et que le formulaire est donc validé), il peut être remplacé par un attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/button#formnovalidate) sur un {{HTMLElement("button")}}, [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit) ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) appartenant au formulaire.
- `target`
  - : Indique où afficher la réponse après l'envoi du formulaire. C'est un nom/mot-clé pour un _contexte de navigation_ (par exemple&nbsp;: onglet, fenêtre ou iframe). Les mots-clés suivants ont des significations particulières&nbsp;:
    - `_self` (par défaut)&nbsp;: Charger dans le même contexte de navigation que le contexte actuel.
    - `_blank`&nbsp;: Charger dans un nouveau contexte de navigation sans nom. Cela a le même comportement que de définir [`rel="noopener"`](#rel) et ne définit pas [`window.opener`](/fr/docs/Web/API/Window/opener).
    - `_parent`&nbsp;: Charger dans le contexte de navigation parent du contexte actuel. S'il n'y a pas de parent, il se comporte de la même manière que `_self`.
    - `_top`&nbsp;: Charger dans le contexte de navigation de niveau supérieur (c'est‑à‑dire le contexte de navigation qui est un ancêtre du contexte actuel et qui n'a pas de parent). S'il n'y a pas de parent, il se comporte de la même manière que `_self`.
    - `_unfencedTop`&nbsp;: Charge la réponse d'un formulaire situé à l'intérieur d'un [cadre sécurisé](/fr/docs/Web/API/Fenced_frame_API) dans la fenêtre de niveau supérieur (c'est‑à‑dire en traversant au‑delà de la racine de la fenced frame, contrairement aux autres destinations réservées). Disponible uniquement à l'intérieur des fenced frames.

    Cette valeur peut être remplacée par un attribut [`formtarget`](/fr/docs/Web/HTML/Reference/Elements/button#formtarget) sur un {{HTMLElement("button")}}, [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit), ou [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image).

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

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#content_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
        ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- D'autres éléments qui sont utilisés lors de la création de formulaires&nbsp;: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Obtenir une liste des éléments du formulaire&nbsp;: {{DOMxRef("HTMLFormElement.elements")}}
- [ARIA&nbsp;: rôle `form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA&nbsp;: rôle `search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
