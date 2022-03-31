---
title: '<button> : l''élément représentant un bouton'
slug: Web/HTML/Element/Button
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
translation_of: Web/HTML/Element/button
browser-compat: html.elements.button
---
{{HTMLRef}}

L'élément **`<button>`** représente un bouton cliquable, utilisé pour soumettre [des formulaires](/fr/docs/Learn/Forms) ou n'importe où dans un document pour une fonctionnalité de bouton accessible et standard. Par défaut, les boutons HTML sont présentés dans un style ressemblant à la plate-forme d'exécution de [l'agent utilisateur](/fr/docs/Glossary/User_agent), mais vous pouvez modifier l'apparence des boutons avec [CSS](/fr/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#form_listed"
          >listable</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#form_labelable"
          >étiquetable</a
        >
        et
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#form_submittable"
          >soumettable</a
        >
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#form-associated_content"
          >associé aux formulaires</a
        >
        et
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
        >
        mais sans
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune omision de balise possible.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#checkbox"><code>checkbox</code></a
        >, <a href="https://w3c.github.io/aria/#link"><code>link</code></a
        >,
        <a href="https://w3c.github.io/aria/#menuitem"><code>menuitem</code></a
        >,
        <a href="https://w3c.github.io/aria/#menuitemcheckbox"
          ><code>menuitemcheckbox</code></a
        >,
        <a href="https://w3c.github.io/aria/#menuitemradio"
          ><code>menuitemradio</code></a
        >, <a href="https://w3c.github.io/aria/#option"><code>option</code></a
        >, <a href="https://w3c.github.io/aria/#radio"><code>radio</code></a
        >, <a href="https://w3c.github.io/aria/#switch"><code>switch</code></a
        >, <a href="https://w3c.github.io/aria/#tab"><code>tab</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLButtonElement"
          ><code>HTMLButtonElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`autofocus`**
  - : Cet attribut booléen, **qui ne doit être défini qu'une fois par document**, indique au navigateur que cet élément doit automatiquement avoir le [focus](/fr/docs/Web/API/HTMLOrForeignElement/focus) lorsque la page est chargée. Cela permet d'utiliser immédiatement ce bouton, via un raccourci clavier par exemple, sans avoir à cliquer au préalable dans le contrôle adéquat.
- **`autocomplete`** {{non-standard_inline}}
  - : Pour l'élément `<button>`, cet attribut, propre à Firefox, n'est pas standard. Par défaut et à la différence des autres navigateurs, [Firefox conserve l'état de désactivation d'un bouton](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un élément `<button>` au fur et à mesure des chargements d'une page. Utiliser cet attribut avec la valeur `off` (i.e. `autocomplete="off"`) désactive cette fonctionnalité (cf. [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072) pour plus d'informations).
- **`disabled`**

  - : Cet attribut booléen empêche l'utilisateur d'interagir avec le bouton : il ne peut pas être pressé ou ciblé.

    Firefox, contrairement aux autres navigateurs, [persiste l'état désactivé dynamique](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un `<bouton>` à travers les chargements de page. Utilisez l'attribut [`autocomplete`](#attr-autocomplete) pour contrôler cette fonctionnalité.

- **`form`**
  - : L'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel associer le bouton (son _formulaire rattaché_). Cet attribut contient l'attribut **`id`** de l'élément `<form>` auquel celui-ci est rattaché. Par défaut, le bouton est rattaché à l'élément `<form>` qui est son plus proche ancêtre. Cet attribut permet à un bouton d'être placé n'importe où dans le document et pas seulement comme un descendant d'éléments `<form>`. Il permet également de rattacher le bouton à un autre formulaire que son élément parent.
- **`formaction`**
  - : L'URL qui traite les informations soumises par le bouton. Remplace l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#attr-action) du formulaire rattaché au bouton. Il ne fait rien s'il n'y a pas de formulaire rattaché.
- **`formenctype`**

  - : Lorsque l'attribut **`type`** possède la valeur `submit`, cet attribut définit le [type MIME](https://fr.wikipedia.org/wiki/Type_MIME) qui sera utilisée pour encoder les données envoyées au serveur. C'est un attribut à valeur contrainte qui peut prendre les valeurs suivantes :

    - `application/x-www-form-urlencoded` : La valeur par défaut.
    - `multipart/form-data` : Utilisé pour soumettre des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont les attributs [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) sont définis sur `file`.
    - `text/plain` : Spécifié comme une aide au débogage ; ne doit pas être utilisé pour la soumission réelle du formulaire.

    Si cet attribut est spécifié, il remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Element/Form#attr-enctype) du formulaire rattaché au bouton.

- **`formmethod`**

  - : Lorsque l'attribut **`type`** possède la valeur `submit` (explicitement ou comme valeur par défaut), cet attribut définit la [méthode HTTP](/fr/docs/Web/HTTP/Methods) qui sera utilisée pour envoyer les données au serveur. C'est un attribut à valeur contrainte qui peut prendre les valeurs suivantes :

    - `post` : Les données du formulaire sont incluses dans le corps de la requête HTTP lorsqu'elles sont envoyées au serveur. À utiliser lorsque le formulaire contient des informations qui ne devraient pas être publiques, comme les identifiants de connexion.
    - `get` : Les données du formulaire sont ajoutées à l'URL `action` du formulaire, avec un `?` comme séparateur, et l'URL résultante est envoyée au serveur. Utilisez cette méthode lorsque le formulaire [n'a pas d'effets secondaires](/fr/docs/Glossary/Idempotent), comme les formulaires de recherche.

    S'il est spécifié, cet attribut remplace l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#attr-method) du formulaire rattaché au bouton.

- **`formnovalidate`**

  - : Si le bouton est un bouton de soumission (`type` non défini ou défini avec la valeur `"submit"`), cet attribut booléen spécifie que le formulaire ne doit pas être [validé](/fr/docs/Learn/Forms/Form_validation) lorsqu'il est soumis. Si cet attribut est spécifié, il remplace l'attribut [`novalidate`](/fr/docs/Web/HTML/Element/Form#attr-novalidate) du formulaire rattaché au bouton. Cet attribut est également disponible sur les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/Input/image) et [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit).

- **`formtarget`**

  - : Lorsque l'attribut **`type`** possède la valeur `submit`, cet attribut indique le contexte de navigation (onglet, fenêtre, frame) associé avec le formulaire, sa cible. Outre un attribut **`id`** valide du document, il peut prendre l'une de ces valeurs particulières:

    - `_self` : Charge la réponse dans le même contexte de navigation que le contexte actuel. Il s'agit de la valeur par défaut si l'attribut n'est pas spécifié.
    - `_blank` : Charge la réponse dans un nouveau contexte de navigation sans nom — généralement un nouvel onglet ou une nouvelle fenêtre, selon les paramètres du navigateur de l'utilisateur.
    - `_parent` : Charge la réponse dans le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.
    - `_top` : Charge la réponse dans le contexte de navigation de niveau supérieur (c'est-à-dire le contexte de navigation qui est un ancêtre du contexte actuel, et qui n'a pas de parent). S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.

- **`name`**
  - : Le nom du bouton, soumis en tant que paire avec la `valeur` du bouton comme partie des données du formulaire.
- **`type`**

  - : Le comportement par défaut du bouton. Les valeurs possibles sont :

    - `submit` : Le bouton soumet les données du formulaire au serveur. C'est la valeur par défaut si l'attribut n'est pas spécifié pour les boutons associés à un `<form>`, ou si l'attribut est une valeur vide ou invalide.
    - `reset` : Le bouton réinitialise tous les contrôles à leur valeur initiale, comme [\<input type="reset">](/fr/docs/Web/HTML/Element/Input/reset). (Ce comportement a tendance à agacer les utilisateurs).
    - `button` : Le bouton n'a pas de comportement par défaut et ne fait rien lorsqu'il est pressé par défaut. Les scripts côté client peuvent écouter les événements de l'élément, qui sont déclenchés lorsque les événements se produisent.

- **`value`**
  - : Définit la valeur associée au `name` du bouton lorsqu'il est soumis avec les données du formulaire. Cette valeur est transmise au serveur en paramètres lorsque le formulaire est soumis.

## Notes

Un bouton de soumission avec l'attribut `formaction` défini, mais sans formulaire associé ne fait rien. Vous devez définir un formulaire rattaché, soit en l'enveloppant dans un `<form>`, soit en définissant la valeur de l'attribut `form` avec l'identifiant du formulaire.

Les éléments `<button>` sont beaucoup plus faciles à styliser que les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input). Vous pouvez ajouter du contenu HTML interne (pensez à `<i>`, `<br>`, ou même `<img>`), et utiliser les pseudo-éléments [`::after`](/fr/docs/Web/CSS/::after) et [`::before`](/fr/docs/Web/CSS/::before) pour un rendu complexe.

Si vos boutons ne servent pas à soumettre des données de formulaire à un serveur, assurez-vous de définir leur attribut `type` à `bouton`. Sinon, ils tenteront de soumettre des données de formulaire et de charger la réponse (inexistante), détruisant éventuellement l'état actuel du document.

## Exemple

```html
<button name="button">Cliquez sur moi :)</button>
```

{{EmbedLiveSample('Exemple', 200, 64)}}

## Problèmes d'accessibilité

### Boutons avec une icône

Les boutons qui reposent uniquement sur une icône pour représenter une fonctionnalité n'ont pas de nom accessible. Un nom accessible permet à un outil d'assistance (un lecteur d'écran par exemple) de générer un [arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) correct lors de l'analyse du document. Les outils d'assistance utilisent cet arbre d'accessibilité pour permettre aux utilisateurs de naviguer et d'utiliser le contenu de la page.

Afin de fournir un nom accessible pour un bouton, on fournira un contenu texte dans l'élément qui décrit, de façon concise, la fonctionnalité offerte par le bouton.

#### Exemple

```html
<button name="favorite" type="button">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/>
  </svg>
  Ajouter aux favoris
</button>
```

Si on souhaite que le texte du bouton ne soit pas visible, on peut le faire de façon accessible grâce à une [combinaison de propriétés](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) qui permettent de le masquer visuellement mais qui permet toujours aux technologies d'assistance de l'analyser.

Toutefois, on notera que laisser le texte visible permettra aux personnes qui ne sont pas familières avec l'application de comprendre le rôle du bouton. Cela vaut particulièrement pour les personnes qui utilisent peu la technologie ou dont la culture apporte une autre interprétation aux images utilisées.

- [Qu'est-ce qu'un nom accessible ? _The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [Comprendre les règles WCAG 4.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Robust#Guideline_4.1_—_Compatible_Maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [_Understanding Success Criterion 4.1.2 - W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Dimensionnement et proximité

#### Dimensionnement

Les éléments interactifs tels que les boutons doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes : celles qui ont des problèmes moteurs, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44×44 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels).

- [Comprendre le critère d'accessibilité 2.5.5 sur la taille des cibles - Comprendre WCAG 2.1 (en anglais)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille des cibles et critère 2.5.5, billet en anglais d'Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide : cibles tactiles suffisamment grande — Projet A11Y (billet en anglais)](https://a11yproject.com/posts/large-touch-targets/)

#### Proximité

Lorsque plusieurs contenus interactifs (y compris les boutons) sont placés les uns à côté des autres, il est nécessaire de les espacer suffisamment pour minimiser le risque d'activer le mauvais contenu lors de la navigation.

Un tel espacement peut être obtenu grâce à la propriété CSS [`margin`](/fr/docs/Web/CSS/margin).

- [Les tremblements de la main et le problème du bouton géant — Axess Lab (en anglais)](https://axesslab.com/hand-tremors/)

### Informations sur l'état de l'ARIA

Pour décrire l'état d'un bouton, le bon attribut ARIA à utiliser est `aria-pressed` et non `aria-checked` ou `aria-selected`. Pour en savoir plus, lisez les informations sur le [rôle ARIA de bouton](/fr/docs/Web/Accessibility/ARIA/Roles/button_role).

### Firefox

Firefox ajoute une bordure en pointillés sur le bouton qui a le focus. Cette bordure est ajoutée via la feuille de style du navigateur et il est possible de la surcharger avec son propre style via `button::-moz-focus-inner { }`.

Si ce comportement est surchargé, il est nécessaire de vérifier que le changement de focus est clairement perceptible, y compris lorsque la vision ou les conditions d'éclairage réduisent la visibilité du document.

Le ratio de contraste est calculé en comparant la luminosité de la couleur du texte et celle de l'arrière-plan. Afin de respecter les [préconisations d'accessibilité sur le Web (WCAG)](https://www.w3.org/WAI/intro/wcag), un ratio minimal de 4.5:1 est obligatoire pour le contenu textuel normal et un ratio minimal de 3:1 est obligatoire pour grands textes ou les titres. Un _grand_ texte est défini comme un texte qui mesure 18.66px et qui est en gras ou comme un texte qui mesure 24px ou plus.

- [Vérificateur de contraste WebAIM (en anglais)](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.3 - W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)_

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
