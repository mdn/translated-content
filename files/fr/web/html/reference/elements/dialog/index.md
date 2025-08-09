---
title: "<dialog> : l'élément de boîte de dialogue"
slug: Web/HTML/Reference/Elements/dialog
original_slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 25f88e451394412da19bbfe07cafd9ce382e802e
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<dialog>`** représente une boite de dialogue ou un composant interactif (par exemple un inspecteur ou une fenêtre).

L'élément HTML `<dialog>` est utilisé pour créer des boîtes de dialogue modale qui peuvent être interactives ou non. Les boîtes de dialogue modale interrompent l'interaction, le reste de la page étant inerte, tandis que les boîtes de dialogue non-modale permettent une interaction avec le reste de la page.

JavaScript peut être utilisé pour afficher l'élément `<dialog>`. L'utilisation de la méthode [`.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal) pour afficher une boîte de dialogue modale et la méthode [`.show()`](/fr/docs/Web/API/HTMLDialogElement/show) pour afficher une boîte de dialogue non-modale. La boîte de dialogue peut être fermée à l'aide de la méthode [`.close()`](/fr/docs/Web/API/HTMLDialogElement/close) ou en utilisant la méthode [`dialog`](/fr/docs/Web/HTML/Reference/Elements/form#method) lors de la soumission d'un formulaire `<form>` imbriqué dans l'élément `<dialog>`. Les boîtes de dialogue modales peuvent également être fermées en appuyant sur la touche <kbd>Échap</kbd>.

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> L'attribut `tabindex` ne doit pas être utilisé sur l'élément `<dialog>`.

- `open`
  - : Cet attribut indique que la boîte de dialogue est active et peut être utilisée de façon interactive. Si l'attribut n'est pas renseigné, la boîte de dialogue ne doit pas être affichée. Il est recommandé d'utiliser les méthodes `.show()` ou `.showModal()` afin d'afficher les boîtes de dialogue, plutôt que l'attribut `open`. Si un élément `<dialog>` est ouvert à l'aide de l'attribut `open`, il s'agira d'une boîte non-modale.
    > [!NOTE]
    > Bien qu'il soit possible de basculer entre l'état ouvert et l'état fermé des boîtes de dialogue ne bloquant pas l'interraction en modifiant la présence de l'attribut `open`, cette approche n'est pas recommandée.

## Notes d'utilisation

- Les éléments [`<form>`](/fr/docs/Web/HTML/Reference/Elements/form) peuvent fermer un dialogue s'ils possèdent l'attribut `method="dialog"` ou si le bouton utilisé pour soumettre le formulaire a l'attribut [`formmethod="dialog"`](/fr/docs/Web/HTML/Reference/Elements/input#formmethod). Lorsqu'un tel formulaire est soumis, le dialogue se ferme avec sa propriété [`returnValue`](/fr/docs/Web/API/HTMLDialogElement/returnValue) définie sur la `value` (valeur) du bouton qui a été utilisé pour soumettre le formulaire.
- Le pseudo-élément CSS [`::backdrop`](/fr/docs/Web/CSS/::backdrop) peut être utilisé pour créer un style derrière un élément `<dialog>` lorsque le dialogue est affiché avec [`HTMLDialogElement.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal). Par exemple, pour atténuer le contenu inaccessible derrière la boîte de dialogue modale.
- L'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) peut être ajouté à l'élément avec lequel la personne est censée interagir immédiatement après l'ouverture d'une boîte de dialogue modale. S'il n'y a pas d'élément impliquant une interaction immédiate, l'attribut `autofocus` peut être ajouté à l'élément `<dialog>` lui-même.

## Exemples

### Mises en garde concernant la création d'un dialogue en utilisant uniquement du HTML

Cet exemple montre comment créer une boîte de dialogue non-modale en utilisant uniquement du HTML. Grâce à l'attribut booléen `open` de l'élément `<dialog>`, la boîte de dialogue apparaît ouverte au chargement de la page. Le dialogue peut être fermé en cliquant sur le bouton "OK" parce que l'attribut `method` de l'élément `<form>` est fixé à `"dialog"`. Dans ce cas, aucun JavaScript n'est nécessaire pour fermer le formulaire.

```html
<dialog open>
  <p>Salutations, à tous et à toutes !</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Résultat

{{EmbedLiveSample("mises_en_garde_concernant_la_création_dun_dialogue_en_utilisant_uniquement_du_html")}}

Cette boîte de dialogue est initialement ouverte en raison de la présence de l'attribut `open`. Les boîtes de dialogue affichées à l'aide de l'attribut `open` sont non-modales. Vous pouvez remarquer qu'après avoir cliqué sur «&nbsp;OK&nbsp;», la boîte de dialogue est fermée, laissant le cadre de résultat vide. Lorsque la boîte de dialogue est fermée, aucune méthode n'est prévue pour la rouvrir. C'est pourquoi la méthode préférée pour afficher les boîtes de dialogue non-modales consiste à utiliser la méthode [`HTMLDialogElement.show()`](/fr/docs/Web/API/HTMLDialogElement/show). Il est possible de basculer l'affichage de la boîte de dialogue en ajoutant ou en supprimant l'attribut booléen `open`, mais ce n'est pas la pratique recommandée.

### Création d'une boîte de dialogue modale

Cet exemple montre une boîte de dialogue modale avec un [arrière-plan](/fr/docs/Web/CSS/gradient). La méthode `.showModal()` ouvre la boîte de dialogue modale lorsque le bouton «&nbsp;Afficher la fenêtre&nbsp;» est activé. La boîte de dialogue peut être fermée en appuyant sur la touche <kbd>Échap</kbd> ou via la méthode `.close()` lorsque le bouton «&nbsp;Fermer&nbsp;» de la boîte de dialogue est activé.

Lorsqu'une boîte de dialogue s'ouvre, le navigateur donne, par défaut, la priorité au premier élément qui peut l'être dans la boîte de dialogue. Dans cet exemple, l'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) est appliqué au bouton «&nbsp;Fermer&nbsp;», lui donnant la priorité à l'ouverture de la boîte de dialogue, car c'est l'élément avec lequel nous nous attendons à ce que la personne interagisse immédiatement après l'ouverture de la boîte de dialogue.

#### HTML

```html
<dialog>
  <button autofocus>Fermer</button>
  <p>Cette boîte de dialogue modale a un arrière-plan festif !</p>
</dialog>
<button>Afficher la fenêtre</button>
```

#### CSS

Nous pouvons styliser l'arrière-plan du dialogue en utilisant le pseudo-élément [`::backdrop`](/fr/docs/Web/CSS/::backdrop).

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

Le dialogue est ouvert de façon modale en utilisant la méthode `.showModal()` et est fermé en utilisant la méthode `.close()`.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample("création_dune_boîte_de_dialogue_modale")}}

Lorsque la boîte de dialogue modale est affichée, elle apparaît au-dessus de toutes les autres boîtes de dialogue éventuellement présentes. Tout ce qui se trouve en dehors de la boîte de dialogue modale est inerte et les interactions en dehors de cette dernière sont bloquées. Remarquez que lorsque la boîte de dialogue est ouverte, à l'exception d'elle-même, il n'est pas possible d'interagir avec le document&nbsp;; le bouton «&nbsp;Afficher la fenêtre&nbsp;» est en grande partie masqué par l'arrière-plan presque opaque de la boîte de dialogue et est inerte.

### Traitement de la valeur de retour d'une boîte de dialogue

Cet exemple illustre comment utiliser la valeur de retour, fournie par [`returnValue`](/fr/docs/Web/API/HTMLDialogElement/returnValue) et comment fermer un dialogue modal en utilisant un formulaire. Par défaut, la valeur de retour est la chaîne vide ou la valeur du bouton qui soumet le formulaire dans l'élément `<dialog>`, s'il y en a un.

Cet exemple ouvre une boîte de dialogue modale lorsque le bouton «&nbsp;Mettre à jour les détails&nbsp;» est activé. La boîte de dialogue contient un formulaire avec un élément [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select) et deux éléments [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button), dont la valeur par défaut est `type="submit"`. Un écouteur d'évènement met à jour la valeur du bouton «&nbsp;Confirmer&nbsp;» lorsque l'option sélectionnée change. Si le bouton «&nbsp;Confirmer&nbsp;» est activé pour fermer la boîte de dialogue, la valeur actuelle du bouton est la valeur de retour. Si la boîte de dialogue est fermée en appuyant sur le bouton «&nbsp;Annuler&nbsp;», la valeur de retour `returnValue` est `cancel`.

Lorsque le dialogue est fermé, la valeur de retour est affichée sous le bouton «&nbsp;Mettre à jour les détails&nbsp;». Si le dialogue est fermé en appuyant sur la touche <kbd>Échap</kbd>, la valeur de retour `returnValue` n'est pas mise à jour et l'événement `close` ne se produit pas, ce qui signifie que le texte dans l'élément [`<output>`](/fr/docs/Web/HTML/Reference/Elements/output) n'est pas mis à jour.

#### HTML

```html
<!-- Boîte de dialogue contextuelle simple contenant un formulaire -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label>
        Animal préféré :
        <select>
          <option>Choisissez…</option>
          <option>Crevette en saumure</option>
          <option>Panda rouge</option>
          <option>Singe-araignée</option>
        </select>
      </label>
    </p>
    <menu>
      <button value="cancel">Annuler</button>
      <button id="confirmBtn" value="default">Confirmer</button>
    </menu>
  </form>
</dialog>
<p>
  <button id="showDialog">Mettre à jour les détails</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// Le bouton « Mettre à jour les détails » ouvre la modale <dialog>
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// L'entrée « Animal préféré » définit la valeur du bouton d'envoi.
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// Le bouton « Annuler » ferme la boîte de dialogue sans la soumettre en raison de l'attribut [formmethod="dialog"], ce qui déclenche un événement de fermeture.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "Pas de valeur retournée."
      : `Valeur retournée : ${favDialog.returnValue}.`; // Vérifie la présence de "default" au lieu d'une chaîne vide
});

// Empêchez le bouton « Confirmer » de soumettre le formulaire par défaut et fermez la boîte de dialogue avec la méthode `close()`, qui déclenche l'événement "close".
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Nous ne voulons pas soumettre ce faux formulaire
  favDialog.close(selectEl.value); // Il faut envoyer la valeur du sélecteur ici.
});
```

#### Résultat

{{EmbedLiveSample("traitement_de_la_valeur_de_retour_dune_boîte_de_dialogue", "100%", 300)}}

Cet exemple présente les trois méthodes suivantes pour fermer les boîtes de dialogue modales&nbsp;:

- En soumettant le formulaire dans la boîte de dialogue à l'aide de la méthode `dialog` (comme dans [l'exemple n'utilisant que du HTML](#mises_en_garde_concernant_la_création_d'un_dialogue_en_utilisant_uniquement_du_html))
- En appuyant sur la touche <kbd>Échap</kbd>.
- En appelant la méthode [`HTMLDialogElement.close()`](/fr/docs/Web/API/HTMLDialogElement/close) (comme dans l'[exemple de création d'une boîte modale](#création_d'une_boîte_de_dialogue_modale)).
  Dans cet exemple, le bouton «&nbsp;Annuler&nbsp;» ferme la boîte de dialogue via la méthode de formulaire `dialog` et le bouton «&nbsp;Confirmer&nbsp;» ferme la boîte de dialogue via la méthode [`HTMLDialogElement.close()`](/fr/docs/Web/API/HTMLDialogElement/close).

Le bouton «&nbsp;Annuler&nbsp;» comprend l'attribut [`formmethod="dialog"`](/fr/docs/Web/HTML/Reference/Elements/input/submit#formmethod), qui remplace la méthode par défaut [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET) de l'élément [`<form>`](/fr/docs/Web/HTML/Reference/Elements/form). Lorsque la méthode d'un formulaire est [`dialog`](#notes_dutilisation), l'état du formulaire est sauvegardé mais non soumis, et la boîte de dialogue est fermée.

Sans `action`, la soumission du formulaire via la méthode par défaut [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET) entraîne le rechargement de la page. Nous utilisons JavaScript pour empêcher la soumission et fermer le dialogue avec les méthodes [`event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) et [`HTMLDialogElement.close()`](/fr/docs/Web/API/HTMLDialogElement/close), respectivement.

Il est important de prévoir un mécanisme de fermeture dans chaque élément `<dialog>`. La touche <kbd>Échap</kbd> ne ferme pas les dialogues non modaux par défaut, et l'on ne peut pas non plus supposer que la personne aura accès à un clavier physique (par exemple, une personne utilisant un écran tactile sans accès à un clavier).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements#racines_de_sectionnement">racine de sectionnement</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDialogElement"><code>HTMLDialogElement</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Accessibilité

Lors de l'implémentation d'une fenêtre de dialogue, il est important de considérer l'endroit le plus approprié pour placer le point de concentration (ou «&nbsp;<i lang="en">focus</i>&nbsp;») de la personne. Lorsque l'on utilise [`HTMLDialogElement.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal) pour ouvrir un `<dialog>`, le «&nbsp;<i lang="en">focus</i>&nbsp;» est mis sur le premier élément imbriqué focalisable. Le fait d'indiquer explicitement l'emplacement initial du «&nbsp;<i lang="en">focus</i>&nbsp;» en utilisant l'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) permet de s'assurer que le «&nbsp;<i lang="en">focus</i>&nbsp;» initial est placé sur l'élément considéré comme le meilleur emplacement initial pour un dialogue particulier. En cas de doute, comme il n'est pas toujours possible de savoir où le «&nbsp;<i lang="en">focus</i>&nbsp;» initial peut être placé dans un dialogue, en particulier dans les cas où le contenu d'un dialogue est rendu dynamiquement lorsqu'il est invoqué, l'élément `<dialog>` lui-même peut fournir le meilleur placement du «&nbsp;<i lang="en">focus</i>&nbsp;» initial.

Veillez à ce qu'un mécanisme soit prévu pour permettre de fermer la boîte de dialogue. La meilleure façon de s'assurer que toutes les personnes peuvent fermer la boîte de dialogue est d'inclure un bouton explicite à cet effet, tel qu'un bouton de confirmation, d'annulation ou de fermeture.

Par défaut, une boîte de dialogue invoquée par la méthode `showModal()` peut être fermée en appuyant sur la touche <kbd>Échap</kbd>. Une boîte de dialogue non-modale ne se ferme pas par la touche <kbd>Échap</kbd> par défaut, et selon ce que représente la boîte de dialogue non-modale, ce comportement n'est peut-être pas souhaitable Les utilisatrices et utilisateurs de clavier s'attendent à ce que la touche <kbd>Échap</kbd> ferme les boîtes de dialogue modales&nbsp;; veillez à ce que ce comportement soit implémenté et maintenu. Si plusieurs boîtes de dialogue modales sont ouvertes, l'appui sur la touche <kbd>Échap</kbd> ne doit fermer que la dernière boîte de dialogue affichée. Lorsque l'on utilise `<dialog>`, ce comportement est fourni par le navigateur.

Bien que les boîtes de dialogue puissent être créées à l'aide d'autres éléments, l'élément natif `<dialog>` offre des caractéristiques d'utilisation et d'accessibilité qui doivent être reproduites si vous utilisez d'autres éléments dans un but similaire. Si vous créez une implémentation de dialogue personnalisée, assurez-vous que tous les comportements par défaut attendus sont pris en charge et que les recommandations d'étiquetage appropriées sont suivies.

L'élément `<dialog>` est exposé par les navigateurs d'une manière similaire aux dialogues personnalisés qui utilisent l'attribut ARIA [role="dialog"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role). Les éléments `<dialog>` invoqués par la méthode `showModal()` ont implicitement [aria-modal="true"](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-modal), alors que les éléments `<dialog>` invoqués par la méthode `show()` ou affichés en utilisant l'attribut `open` ou en changeant la propriété CSS `display` par défaut d'un élément HTML `<dialog>` sont exposés en tant que `[aria-modal="false"]`. Lors de l'implémentation de dialogues modaux, tout ce qui n'est pas le `<dialog>` et son contenu doit être rendu inerte en utilisant l'attribut HTML global [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert). Lorsque l'on utilise `<dialog>` avec la méthode `HTMLDialogElement.showModal()`, ce comportement est fourni par le navigateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`HTMLDialogElement`](/fr/docs/Web/API/HTMLDialogElement)
- L'évènement [`close`](/fr/docs/Web/API/HTMLDialogElement/close_event)
- L'évènement [`cancel`](/fr/docs/Web/API/HTMLDialogElement/cancel_event)
- La propriété [`open`](/fr/docs/Web/API/HTMLDialogElement/open) de l'interface `HTMLDialogElement`
- L'attribut HTML universel [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
- Le pseudo-élément [`::backdrop`](/fr/docs/Web/CSS/::backdrop)
- [Guide sur les formulaires HTML](/fr/docs/conflicting/Learn_web_development/Extensions/Forms)
