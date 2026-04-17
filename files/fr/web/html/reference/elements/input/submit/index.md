---
title: <input type="submit">
slug: Web/HTML/Reference/Elements/input/submit
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Les éléments {{HTMLElement("input")}} de type **`submit`** sont affichés comme des boutons. Lorsqu'un évènement {{DOMxRef("Element/click_event", "click")}} se produit (généralement parce que l'utilisateur·ice a cliqué sur le bouton), {{Glossary("user agent", "l'agent utilisateur")}} tente de soumettre le formulaire au serveur.

## Valeur

La valeur de l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) d'un élément `<input type="submit">` contient une chaîne de caractères qui est utilisée comme étiquette pour le bouton. Les boutons n'ont pas de véritable valeur autrement. La valeur de `value` fournit la {{Glossary("accessible description", "description accessible")}} pour le bouton.

### Définir l'attribut `value`

```html
<input type="submit" value="Envoyer la requête" />
```

{{EmbedLiveSample("Définir l'attribut `value`", 650, 30)}}

### Omettre l'attribut `value`

Si vous ne définissez pas de `value`, le bouton aura une étiquette par défaut, choisie par l'agent utilisateur. Cette étiquette est probablement quelque chose comme «&nbsp;Envoyer&nbsp;» ou «&nbsp;Envoyer la requête&nbsp;». Voici un exemple de bouton de soumission avec une étiquette par défaut dans votre navigateur :

```html
<input type="submit" />
```

{{EmbedLiveSample("Omettre l'attribut `value`", 650, 30)}}

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les boutons `"submit"` permettent d'utiliser les attributs.

### `formaction`

Une chaîne de caractères représentant l'URL à laquelle envoyer les données du formulaire. Cette valeur prend le pas sur l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire ({{HTMLElement("form")}}) propriétaire du champ {{HTMLElement("input")}}.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et {{HTMLElement("button")}}.

### `formenctype`

Une chaîne de caractères qui identifie la méthode d'encodage à utiliser pour l'envoi des données du formulaire au serveur. Trois valeurs sont autorisées&nbsp;:

- `application/x-www-form-urlencoded`
  - : C'est la valeur par défaut, elle envoie les données du formulaire sous forme de chaîne de caractères après avoir {{Glossary("Percent-encoding", "encodé en pourcentage")}} le texte en utilisant un algorithme tel que {{JSxRef("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Cette valeur utilise l'API {{DOMxRef("FormData")}} pour gérer les données, permettant de téléverser des fichiers sur le serveur. Vous _devez_ utiliser un encodage de ce type s'il y a des éléments de formulaire, incluant des {{HTMLElement("input")}} de [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/fr/docs/Web/HTML/Reference/Elements/input/file)).
- `text/plain`
  - : Les données sont envoyées comme texte simple&nbsp;; ce qui vous permet de voir les données qui seront envoyées.

S'il est défini, la valeur de l'attribut `formenctype` remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire propriétaire.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et {{HTMLElement("button")}}.

### `formmethod`

Une chaîne de caractères qui indique la méthode HTTP à utiliser lors de l'envoi des données du formulaire. Cette valeur prend la priorité sur l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire. Les valeurs autorisées sont&nbsp;:

- `get`
  - : Une URL est construite en commençant avec l'URL fournie par l'attribut `formaction` ou [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action), suivie d'un point d'interrogation («&nbsp;?&nbsp;») puis des données du formulaire, encodées comme indiqué avec `formenctype` ou [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype). Cette URL est ensuite envoyée au serveur avec une requête HTTP {{HTTPMethod("GET")}}. Cette méthode fonctionne correctement pour les formulaires simples, contenant des données {{Glossary("ASCII")}} et sans effet de bord. **C'est la valeur par défaut.**
- `post`
  - : Les données du formulaire sont incluses dans le corps de la requête envoyée à l'URL fournie par l'attribut `formaction` ou [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) en utilisant une requête {{HTTPMethod("POST")}}. Cette méthode prend en charge les données plus complexes et les pièces jointes sous forme de fichiers.
- `dialog`
  - : Cette méthode est utilisée pour indique que le bouton permet simplement de fermer la boîte de dialogue associée au champ. Aucune donnée n'est transmise.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et {{HTMLElement("button")}}.

### `formnovalidate`

Un attribut booléen qui, lorsqu'il est présent, indique que le formulaire ne devrait pas être validé avant d'être envoyé au serveur. Cet attribut prend la priorité sur l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) du formulaire parent.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et {{HTMLElement("button")}}.

### `formtarget`

Une chaîne de caractères qui indique un nom ou un mot-clé qui définit où afficher la réponse reçue depuis le serveur après l'envoi du formulaire. La chaîne de caractères doit correspondre au nom **d'un contexte de navigation** (un onglet, une fenêtre ou une {{HTMLElement("iframe")}}). La valeur de cet attribut prendra la priorité sur celle fournie par l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) du formulaire ({{HTMLElement("form")}}) parent.

En complément des noms des onglets, fenêtres, cadres intégrés (<i lang="en">iframes</i> ena anglais), quelques mots-clés spéciaux peuvent être utilisés&nbsp;:

- `_self`
  - : La réponse est chargée dans le même contexte de navigation que celui contenant le formulaire. Cela remplacera le document courant avec les données reçues. **Cette valeur est la valeur par défaut.**
- `_blank`
  - : La réponse est chargée dans un contexte de navigation vierge. Ce sera généralement un nouvel onglet dans la même fenêtre mais cela peut varier selon la configuration de l'agent utilisateur.
- `_parent`
  - : La réponse est chargée dans le contexte de navigation parent du contexte courant. S'il n'y a pas de contexte parent, cette valeur est synonyme de `"_self"`.
- `_top`
  - : La réponse est chargée dans le contexte de navigation de plus haut niveau, c'est-à-dire le contexte de navigation qui est l'ancêtre, sans parent, du contexte courant. Si le contexte courant est déjà le contexte de navigation le plus haut, cette valeur est synonyme de `"_self"`.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Reference/Elements/input/image) et {{HTMLElement("button")}}.

## Utiliser les boutons d'envoi

Les boutons `<input type="submit">` sont utilisés afin d'envoyer des formulaires. Si vous souhaitez créer un bouton personnalisé et adapter son comportement avec JavaScript, il sera préférable d'utiliser un élément {{HTMLElement("button")}} ou un élément [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button).

Si vous choisissez d'utiliser les éléments `<button>` pour créer les boutons dans votre formulaire, gardez ceci à l'esprit&nbsp;: Si le `<button>` se trouve à l'intérieur d'un {{HTMLElement("form")}}, ce bouton sera considéré comme le bouton «&nbsp;d'envoi du formulaire&nbsp;». Il est donc recommandé de prendre l'habitude de préciser clairement quel bouton est le bouton de soumission.

### Un bouton pour envoyer simple

Commençons par un exemple simple&nbsp;:

```html
<form>
  <div>
    <label for="example">Veuillez saisir un texte</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Envoyer" />
  </div>
</form>
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Un bouton pour envoyer simple", 650, 100)}}

Pour tester, vous pouvez saisir un texte dans le champ puis cliquer sur le bouton.

Lorsque le formulaire est envoyé, les paires formées par les noms et les valeurs seront envoyées au serveur. Dans le cas précédent, la donnée envoyée aura la forme `text=monTexte` (la deuxième partie varie selon le texte saisi). La destination et la méthode utilisées pour l'envoi des données dépend des attributs utilisés sur l'élément `<form>` (ainsi que d'autres détails). Pour plus d'informations, vous pouvez lire [Envoyer les données d'un formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

### Ajouter un raccourci clavier à un bouton pour envoyer

Les raccourcis clavier, aussi appelés touches d'accès et équivalents clavier, permettent à l'utilisateur·ice d'activer un bouton en appuyant sur une touche ou une combinaison de touches du clavier. Pour ajouter un raccourci clavier à un bouton d'envoi — comme vous le feriez pour tout {{HTMLElement("input")}} pour lequel cela a du sens — utilisez l'attribut global [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey).

Dans cet exemple, <kbd>s</kbd> est défini comme touche d'accès (vous devrez appuyer sur <kbd>s</kbd> ainsi que sur les touches de modification particulières selon votre combinaison navigateur/OS). Pour éviter les conflits avec les raccourcis propres à l'agent utilisateur, des touches de modification différentes sont utilisées pour les touches d'accès par rapport aux autres raccourcis sur l'ordinateur hôte. Consultez [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey) pour plus de détails.

Voici l'exemple précédent avec la touche d'accès <kbd>s</kbd> ajoutée&nbsp;:

```html
<form>
  <div>
    <label for="example">Veuillez saisir du texte</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Envoyer" accesskey="s" />
  </div>
</form>
```

Par exemple, dans Firefox pour Mac, en appuyant sur <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> déclenche le bouton Envoyer, tandis que Chrome sur Windows utilise <kbd>Alt</kbd>+<kbd>S</kbd>.

{{EmbedLiveSample("Ajouter un raccourci clavier à un bouton pour envoyer", 650, 100)}}

Le problème de l'exemple ci‑dessus est que l'utilisateur·ice ne saura pas quelle est la touche d'accès&nbsp;! Cela est d'autant plus vrai que les modificateurs sont généralement non standard afin d'éviter les conflits. Lors de la création d'un site, veillez à fournir cette information d'une manière qui n'interfère pas avec le design du site (par exemple en proposant un lien facilement accessible pointant vers une page expliquant quelles sont les touches d'accès du site). Ajouter une infobulle au bouton (en utilisant l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)) peut également aider, bien que ce ne soit pas une solution complète pour l'accessibilité.

### Activer et désactiver un bouton d'envoi

Si on souhaite désactiver un bouton, il sufft d'utiliser l'attribut booléen universel [`disabled`](/fr/docs/Web/HTML/Reference/Global_attributes#disabled)&nbsp;:

```html
<input type="submit" value="Envoyer" disabled />
```

Vous pouvez activer et désactiver les boutons dynamiquement en définissant `disabled` à `true` ou `false`&nbsp;; en JavaScript, cela ressemble à `btn.disabled = true` ou `btn.disabled = false`.

> [!NOTE]
> Voir la page de [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button#désactiver_et_activer_un_bouton) pour plus d'exemples concernant l'activation/désactivation des boutons.

## Validation

Les boutons d'envoi ne participent pas à la validation des contraintes&nbsp;; ils n'ont pas de valeur réelle à contraindre.

## Exemples

Nous avons inclus des exemples de base ci-dessus. Il n'y a vraiment rien de plus à dire sur les boutons d'envoi. C'est pourquoi ce type de contrôle est parfois appelé un «&nbsp;bouton simple&nbsp;».

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères utilisée
        comme étiquette (texte) pour le bouton.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{DOMxRef("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface DOM {{DOMxRef("HTMLInputElement")}} qu'il implémente
- [Les formulaires et les boutons](/fr/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#boutons_actuels)
- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("button")}}
