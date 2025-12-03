---
title: "<button> : l'élément représentant un bouton"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<button>`** est un élément interactif qui peut être activé avec une souris, un clavier, un doigt, une commande vocale ou tout autre technologie d'assistance. Une fois activé, il peut déclencher une action tel qu'envoyer un [formulaire](/fr/docs/Learn_web_development/Extensions/Forms) ou ouvrir une boite de dialogue.

Par défaut, les boutons HTML sont présentés dans un style ressemblant à la plate-forme d'exécution de {{Glossary("user agent", "l'agent utilisateur")}}, mais vous pouvez modifier l'apparence des boutons avec [CSS](/fr/docs/Web/CSS).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;button&gt;", "tabbed-shorter")}}

```html interactive-example
<button class="favorite styled" type="button">Ajouter aux favoris</button>
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 0.2),
    rgb(0 0 0 / 0.2) 30%,
    transparent
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 0.6),
    inset -2px -2px 3px rgb(0 0 0 / 0.6);
}

.styled:hover {
  background-color: red;
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 0.6),
    inset 2px 2px 3px rgb(0 0 0 / 0.6);
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Cet attribut booléen indique que le bouton doit recevoir le [focus](/fr/docs/Web/API/HTMLElement/focus) lors du chargement de la page. **Un seul élément dans un document peut avoir cet attribut.**

- `command`
  - : Définit l'action à effectuer sur un élément contrôlé par un bouton `<button>` via l'attribut `commandfor`. Les valeurs possibles sont&nbsp;:
    - `"show-modal"`
      - : Le bouton affichera un élément {{HTMLElement("dialog")}} en mode modale. Si la boîte de dialogue est déjà modale, aucune action ne sera effectuée. C'est l'équivalent déclaratif de l'appel à la méthode {{DOMxRef("HTMLDialogElement.showModal()")}} sur l'élément `<dialog>`.
    - `"close"`
      - : Le bouton fermera un élément {{HTMLElement("dialog")}}. Si la boîte de dialogue est déjà fermée, aucune action ne sera effectuée. C'est l'équivalent déclaratif de l'appel à la méthode {{DOMxRef("HTMLDialogElement.close()")}} sur l'élément `<dialog>`.
    - `"request-close"`
      - : Le bouton déclenchera un événement {{DOMxRef("HTMLDialogElement.cancel_event", "cancel")}} sur un élément {{HTMLElement("dialog")}} pour demander au navigateur de le fermer, suivi d'un événement {{DOMxRef("HTMLDialogElement.close_event", "close")}}. Cela diffère de la commande `close` car les auteurs peuvent appeler {{DOMxRef("Event.preventDefault()")}} sur l'événement `cancel` pour empêcher la fermeture du `<dialog>`. Si la boîte de dialogue est déjà fermée, aucune action ne sera effectuée. C'est l'équivalent déclaratif de l'appel à la méthode {{DOMxRef("HTMLDialogElement.requestClose()")}} sur l'élément `<dialog>`.
    - `"show-popover"`
      - : Le bouton affichera un élément contextuel flottant (<i lang="en">popover</i> en anglais) caché. Si vous essayez d'afficher un élément contextuel flottant déjà affiché, aucune action ne sera effectuée. Voir {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}} pour plus de détails. Ceci est équivalent à la valeur `show` pour l'attribut [`popovertargetaction`](#popovertargetaction), et fournit également un équivalent déclaratif à l'appel de la méthode {{DOMxRef("HTMLElement.showPopover()")}} sur l'élément contextuel flottant.
    - `"hide-popover"`
      - : Le bouton masquera un élément contextuel flottant (<i lang="en">popover</i> en anglais) affiché. Si vous essayez de masquer un élément contextuel flottant déjà caché, aucune action ne sera effectuée. Voir {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}} pour plus de détails. C'est équivalent à la valeur `hide` pour l'attribut [`popovertargetaction`](#popovertargetaction), et fournit aussi un équivalent déclaratif à l'appel de la méthode {{DOMxRef("HTMLElement.hidePopover()")}} sur l'élément contextuel flottant.
    - `"toggle-popover"`
      - : Le bouton basculera l'affichage d'un élément contextuel flottant (<i lang="en">popover</i> en anglais) entre visible et caché. Si l'élément contextuel flottant est caché, il sera affiché&nbsp;; s'il est affiché, il sera caché. Voir {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}} pour plus de détails. C'est équivalent à la valeur `toggle` pour l'attribut [`popovertargetaction`](#popovertargetaction), et fournit aussi un équivalent déclaratif à l'appel de la méthode {{DOMxRef("HTMLElement.togglePopover()")}} sur l'élément contextuel flottant.
    - Valeurs personnalisées
      - : Cet attribut peut représenter des valeurs personnalisées préfixées par deux tirets (`--`). Les boutons avec une valeur personnalisée déclencheront un {{DOMxRef("CommandEvent")}} sur l'élément contrôlé.

- `commandfor`
  - : Transforme un élément `<button>` en bouton de commande, contrôlant un élément interactif donné en émettant la commande spécifiée dans l'attribut [`command`](#command) du bouton. L'attribut `commandfor` prend comme valeur l'identifiant de l'élément à contrôler. Il s'agit d'une version plus générale de [`popovertarget`](#popovertarget).
- [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
  - : Cet attribut booléen empêche l'utilisateur·ice d'interagir avec le bouton&nbsp;: il ne peut pas être pressé ni sélectionné.
- [`form`](/fr/docs/Web/HTML/Reference/Attributes/form)
  - : L'élément {{HTMLElement("form")}} auquel associer le bouton (son _propriétaire de formulaire_). La valeur de cet attribut doit être l'identifiant (`id`) d'un `<form>` dans le même document. (Si cet attribut n'est pas défini, le `<button>` est associé à son ancêtre `<form>`, s'il existe.)

    Cet attribut permet d'associer des éléments `<button>` à des `<form>` n'importe où dans le document, pas seulement à l'intérieur d'un `<form>`. Il peut aussi remplacer un élément `<form>` ancêtre.

- `formaction`
  - : L'URL qui traite les informations soumises par le bouton. Remplace l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du propriétaire du formulaire du bouton. Ne fait rien s'il n'y a pas de propriétaire de formulaire.
- `formenctype`
  - : Si le bouton est un bouton de soumission (il est à l'intérieur ou associé à un `<form>` et n'a pas `type="button"`), définit la façon dont les données du formulaire sont encodées lors de la soumission. Valeurs possibles&nbsp;:
    - `application/x-www-form-urlencoded`&nbsp;: La valeur par défaut si l'attribut n'est pas utilisé.
    - `multipart/form-data`&nbsp;: Utilisé pour soumettre des éléments {{HTMLElement("input")}} dont l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) est défini à `file`.
    - `text/plain`&nbsp;: Spécifié comme aide au débogage&nbsp;; ne doit pas être utilisé pour une soumission réelle de formulaire.

    Si cet attribut est spécifié, il remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire rattaché au bouton.

- `formmethod`
  - : Lorsque l'attribut **`type`** possède la valeur `submit` (explicitement ou comme valeur par défaut), cet attribut définit la [méthode HTTP](/fr/docs/Web/HTTP/Reference/Methods) qui sera utilisée pour envoyer les données au serveur. C'est un attribut à valeur contrainte qui peut prendre les valeurs suivantes&nbsp;:
    - `post`&nbsp;: Les données du formulaire sont incluses dans le corps de la requête HTTP lorsqu'elles sont envoyées au serveur. À utiliser lorsque le formulaire contient des informations qui ne devraient pas être publiques, comme les identifiants de connexion.
    - `get`&nbsp;: Les données du formulaire sont ajoutées à l'URL `action` du formulaire, avec un `?` comme séparateur, et l'URL résultante est envoyée au serveur. Utilisez cette méthode lorsque le formulaire [n'a pas d'effets secondaires](/fr/docs/Glossary/Idempotent), comme les formulaires de recherche.
    - `dialog`&nbsp;: Cette méthode permet d'indiquer que le bouton ferme [l'élément `<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog) auquel il est associé, et n'envoie pas de données du formulaire.

    S'il est spécifié, cet attribut remplace l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire rattaché au bouton.

- `formnovalidate`
  - : Si le bouton est un bouton de soumission, cet attribut booléen indique que le formulaire ne doit pas être [validé](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation) lors de sa soumission. Si cet attribut est spécifié, il remplace l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) du propriétaire du formulaire du bouton.

    Cet attribut est également disponible sur les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et [`<input type="submit">`](/fr/docs/Web/HTML/Reference/Elements/input/submit).

- `formtarget`
  - : Lorsque l'attribut **`type`** possède la valeur `submit`, cet attribut indique le contexte de navigation (onglet, fenêtre, frame) associé avec le formulaire, sa cible. Outre un attribut **`id`** valide du document, il peut prendre l'une de ces valeurs particulières:
    - `_self`&nbsp;: Charge la réponse dans le même contexte de navigation que le contexte actuel. Il s'agit de la valeur par défaut si l'attribut n'est pas spécifié.
    - `_blank`&nbsp;: Charge la réponse dans un nouveau contexte de navigation sans nom — généralement un nouvel onglet ou une nouvelle fenêtre, selon les paramètres du navigateur de l'utilisateur.
    - `_parent`&nbsp;: Charge la réponse dans le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.
    - `_top`&nbsp;: Charge la réponse dans le contexte de navigation de niveau supérieur (c'est-à-dire le contexte de navigation qui est un ancêtre du contexte actuel, et qui n'a pas de parent). S'il n'y a pas de parent, cette option se comporte de la même manière que `_self`.

- `name`
  - : Le nom du bouton, soumis en tant que paire avec la valeur (`value`) du bouton comme partie des données du formulaire.

- `popovertarget`
  - : Transforme un `<button>` en un élément de contrôle d'un élément contextuel flottant (<i lang="en">popover</i> en anglais)&nbsp;; il prend comme valeur l'`id` de l'élément élément contextuel flottant à contrôler. Voir la page sur [l'API Popover](/fr/docs/Web/API/Popover_API) pour plus de détails.

- `popovertargetaction`
  - : Définit l'action à effectuer sur l'élément contextuel flottant (<i lang="en">popover</i> en anglais) cible lorsqu'un bouton est activé. Les valeurs possibles sont&nbsp;:
    - `"hide"`
      - : Le bouton masquera l'élément contextuel flottant cible. Si l'élément contextuel flottant cible est déjà masqué, rien ne se passera.
    - `"show"`
      - : Le bouton affichera l'élément contextuel flottant cible. Si l'élément contextuel flottant cible est déjà affiché, rien ne se passera.
    - `"toggle"`
      - : Le bouton affichera l'élément contextuel flottant cible s'il est masqué, ou le masquera s'il est affiché. Si `popovertargetaction` n'est pas défini, le bouton se comportera comme s'il avait la valeur `"toggle"`.

- `type`
  - : Le comportement par défaut du bouton. Les valeurs possibles sont&nbsp;:
    - `submit`&nbsp;: Le bouton soumet les données du formulaire au serveur. C'est la valeur par défaut si l'attribut n'est pas spécifié pour les boutons associés à un `<form>`, ou si l'attribut est une valeur vide ou invalide.
    - `reset`&nbsp;: Le bouton réinitialise tous les contrôles à leur valeur initiale, comme [`<input type="reset">`](/fr/docs/Web/HTML/Reference/Elements/input/reset). (Ce comportement a tendance à agacer les utilisateurs).
    - `button`&nbsp;: Le bouton n'a pas de comportement par défaut et ne fait rien lorsqu'il est pressé par défaut. Les scripts côté client peuvent écouter les événements de l'élément, qui sont déclenchés lorsque les événements se produisent.

- `value`
  - : Définit la valeur associée au `name` du bouton lorsqu'il est soumis avec les données du formulaire. Cette valeur est transmise au serveur en paramètres lorsque le formulaire est soumis.

## Notes

Un bouton de soumission avec l'attribut `formaction` défini, mais sans formulaire associé ne fait rien. Vous devez définir un formulaire rattaché, soit en l'enveloppant dans un `<form>`, soit en définissant la valeur de l'attribut `form` avec l'identifiant du formulaire.

Les éléments `<button>` sont beaucoup plus faciles à mettre en forme que les éléments {{HTMLElement("input")}}. Vous pouvez ajouter du contenu HTML interne (pensez à `<i>`, `<br>`, ou même `<img>`), et utiliser les pseudo-éléments {{CSSxRef("::after")}} et {{CSSxRef("::before")}} pour un rendu complexe.

Si vos boutons ne servent pas à soumettre des données de formulaire à un serveur, assurez-vous de définir leur attribut `type` à `button`. Sinon, ils tenteront de soumettre des données de formulaire et de charger la réponse (inexistante), détruisant éventuellement l'état actuel du document.

Bien que `<button type="button">` n'ait pas de comportement par défaut, on peut utiliser des gestionnaires d'évènements scriptés pour déclencher certaines actions. Un bouton pourra déclencher des actions grâce à [JavaScript](/fr/docs/Learn_web_development/Core/Scripting), par exemple pour retirer un élément d'une liste.

Par défaut, les agents utilisateurs appliquent le style `display: flow-root` aux boutons, ce qui établit un [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context) et centre les enfants du bouton horizontalement et verticalement tant qu'ils ne débordent pas. Si le bouton est défini comme conteneur flex ou grid, ses enfants se comporteront comme des éléments flex ou grid. Un bouton avec `display: inline` sera stylisé comme si la valeur était `display: inline-block`.

## Accessibilité

### Boutons avec une icône

Les boutons qui reposent uniquement sur une icône pour représenter une fonctionnalité n'ont pas de nom accessible. Un nom accessible permet à un outil d'assistance (un lecteur d'écran par exemple) de générer un [arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#api_daccessibilité) correct lors de l'analyse du document. Les outils d'assistance utilisent cet arbre d'accessibilité pour permettre aux utilisateurs de naviguer et d'utiliser le contenu de la page.

Pour fournir un nom accessible à un bouton icône, il faut placer un texte dans l'élément `<button>` qui décrit de façon concise la fonctionnalité offerte par le bouton.

#### Exemples

```html
<button name="favorite">
  <svg fill="black" viewBox="0 0 42 42">
    <path
      d="M21,1c1.081,0,5.141,12.315,6.201,13.126s13.461,1.053,13.791,2.137 c0.34,1.087-9.561,8.938-9.961,10.252c-0.409,1.307,
      3.202,13.769,2.331,14.442c-0.879,0.673-11.05-6.79-12.361-6.79 c-1.311,0-11.481,7.463-12.36,6.79c-0.871-0.674,2.739-13.136,
      2.329-14.442c-0.399-1.313-10.3-9.165-9.96-10.252 c0.33-1.084,12.731-1.326,13.791-2.137S19.91,1,21,1z"></path>
  </svg>
  Ajouter aux favoris
</button>
```

##### Résultat

{{EmbedLiveSample('Boutons avec une icône')}}

Si vous souhaitez masquer visuellement le texte du bouton, il existe une méthode accessible qui consiste à utiliser [une combinaison de propriétés CSS <sup>(angl.)</sup>](https://www.a11yproject.com/posts/how-to-hide-content/) pour le retirer visuellement de l'écran tout en le laissant accessible aux technologies d'assistance.

Cependant, il est important de noter que laisser le texte du bouton visible peut aider les personnes qui ne sont pas familières avec la signification de l'icône ou qui ne comprennent pas la fonction du bouton. Cela est particulièrement important pour les personnes peu technophiles ou dont la culture apporte une autre interprétation à l'icône utilisée.

- [Qu'est-ce qu'un nom accessible&nbsp;? | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Comprendre WCAG, explications de la règle 4.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#règle_4.1_—_compatible_maximiser_la_compatibilité_avec_les_agent·e·s_utilisateur·ice·s_actuels_et_futurs_y_compris_les_technologies_dassistance)
- [Comprendre le critère de succès 4.1.2 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Dimensionnement et proximité

#### Dimensionnement

Les éléments interactifs tels que les boutons doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes&nbsp;: celles qui ont des problèmes moteurs, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44×44 [pixels CSS](/fr/docs/Glossary/CSS_pixel).

- [Comprendre le critère de succès 2.5.5&nbsp;: Taille de la cible | W3C Comprendre WCAG 2.1 <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Taille de la cible et 2.5.5 | Adrian Roselli <sup>(angl.)</sup>](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Test rapide&nbsp;: grandes cibles tactiles - The A11Y Project <sup>(angl.)</sup>](https://www.a11yproject.com/posts/large-touch-targets/)

#### Proximité

De grandes quantités de contenu interactif — y compris les boutons — placées à proximité visuelle les unes des autres doivent être séparées par de l'espace. Cet espacement est bénéfique pour les personnes ayant des problèmes de contrôle moteur, qui pourraient activer accidentellement le mauvais contenu interactif.

L'espacement peut être créé à l'aide de propriétés CSS telles que {{CSSxRef("margin")}}.

- [Les tremblements de la main et le problème du bouton géant — Axess Lab <sup>(angl.)</sup>](https://axesslab.com/hand-tremors/)

### Informations sur l'état de l'ARIA

Pour décrire l'état d'un bouton, l'attribut ARIA correct à utiliser est [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) et non [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) ou [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Pour en savoir plus, lisez les informations sur le [rôle ARIA de bouton](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Mises en formes de bouton

Il est préférable de ne pas surcharger l'anneau de sélection par défaut pour les éléments qui reçoivent la sélection. Si les styles de bouton sont modifiés, il est important de **s'assurer que l'état de sélection présente un contraste suffisant** pour que les personnes malvoyantes puissent le percevoir et que les personnes ayant des différences cognitives puissent le comprendre.

La pseudo-classe {{CSSxRef(":focus-visible")}} peut être utilisée pour appliquer des styles à un élément qui a {{CSSxRef(":focus")}} uniquement lorsque les heuristiques de l'agent utilisateur déterminent que le focus doit être mis en évidence, par exemple lorsqu'un `<button>` reçoit le focus au clavier. Voir [:focus contre :focus-visible](/fr/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_contre_focus-visible) pour plus d'informations.

Le ratio de contraste des couleurs est déterminé en comparant la luminosité des valeurs de couleur du texte du bouton et de l'arrière-plan avec l'arrière-plan sur lequel le bouton est placé. Pour respecter les [Règles pour l'accessibilité des contenus Web (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/), un ratio de 4,5:1 est requis pour le contenu textuel et de 3:1 pour les grands textes. (Un grand texte est défini comme un texte de 18,66px et {{CSSxRef("font-weight", "bold")}} ou plus, ou de 24px ou plus.)

- [WebAIM&nbsp;: vérificateur de contraste des couleurs <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [MDN Comprendre WCAG, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | W3C Comprendre WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Clic et focus

Le fait de cliquer sur un `<button>` ou sur un bouton {{HTMLElement("input")}} peut, selon le navigateur et l'OS, lui donner la sélection par défaut. La plupart des navigateurs donnent la sélection à un bouton cliqué, mais [Safari ne le fait pas, par conception <sup>(angl.)</sup>](https://webkit.org/b/22261#c68).

## Exemples

### Création d'un bouton simple

Cet exemple crée un bouton cliquable.
L'attribut `type="button"` garantit que le bouton n'a pas de comportement par défaut.
Vous pouvez rendre ce bouton interactif en utilisant JavaScript ou des attributs comme `command` et `commandfor`.

```html
<button type="button" name="button">Je suis un bouton</button>
```

{{EmbedLiveSample("Création d'un bouton simple", 200, 64)}}

### Utilisation de la valeur `request-close` pour l'attribut `command`

La boîte de dialogue dans cet exemple comporte deux boutons radio qui contrôlent la possibilité de fermer ou non la boîte de dialogue.
Sélectionnez **Oui** ou **Non**, puis cliquez sur **Demander la fermeture** pour tenter de fermer la boîte de dialogue.
Si **Oui** est sélectionné, la boîte de dialogue se ferme&nbsp;; si **Non** est sélectionné, la boîte de dialogue reste ouverte et affiche un message à la place.

```html
<button type="button" commandfor="mydialog" command="show-modal">
  Ouvrir la boîte de dialogue
</button>
<dialog id="mydialog">
  <div class="wrapper">
    <form>
      <fieldset>
        <legend>
          Autoriser cette boîte de dialogue à se fermer lorsque c'est
          demandé&nbsp;?
        </legend>
        <div>
          <input type="radio" id="no" name="close" value="no" checked />
          <label for="no">Non</label>
        </div>
        <div>
          <input type="radio" id="yes" name="close" value="yes" />
          <label for="yes">Oui</label>
        </div>
      </fieldset>
    </form>
    <button commandfor="mydialog" command="request-close">
      Demander la fermeture
    </button>
    <p class="warning" hidden>
      Vous devez choisir «&nbsp;Oui&nbsp;» pour fermer cette boîte de dialogue.
    </p>
  </div>
</dialog>
```

```css hidden
.warning {
  color: tomato;
}
```

```js
const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");

dialog.addEventListener("cancel", (e) => {
  if (!e.cancelable) return;
  if (radio.value === "no") {
    warning.hidden = false;
    e.preventDefault();
  } else {
    warning.hidden = true;
  }
});
```

{{EmbedLiveSample("Utilisation de la valeur `request-close` pour l'attribut `command`", 100, 200)}}

Le bouton **Ouvrir la boîte de dialogue** ouvre l'élément `<dialog>` en utilisant `command="show-modal"`.

Le bouton **Demander la fermeture** a `command="request-close"`, qui cible l'élément `<dialog>` en utilisant l'attribut `commandfor="mydialog"`. Lorsqu'il est cliqué, il demande au `<dialog>` s'il peut être fermé (contrairement à l'attribut `command="close"`, qui fermerait immédiatement le `<dialog>`).
Cela vérifie si le `<dialog>` est [`cancelable`](/fr/docs/Web/API/Event/cancelable) en utilisant un événement `cancel`.

Lorsque l'événement est `cancelable`, la valeur des boutons radio est vérifiée&nbsp;:

- Si la valeur est `oui`, la boîte de dialogue est fermée.
- Si la valeur est `non`, l'attribut `hidden` est désactivé sur l'avertissement et la méthode [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) est appelée, ce qui empêche le comportement de fermeture par défaut du `<dialog>`.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#listed_éléments_listés">listable</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables">étiquetable</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#submittable_éléments_participants_à_lenvoi_du_formulaire">soumettable</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires">associé aux formulaires</a
        > et
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phras%C3%A9">Contenu phrasé</a> mais sans <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif">contenu interactif</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune omission de balise possible.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phras%C3%A9">contenu phrasé</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
