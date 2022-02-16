---
title: <input type="submit">
slug: Web/HTML/Element/Input/submit
tags:
  - Element
  - Formulaire
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/submit
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"submit"`** sont affichés comme des boutons permettant d'envoyer les données d'un formulaire. Cliquer sur un tel bouton déclenchera l'envoi des données du formulaire vers le serveur.

## Exemple simple

```html
<input type="submit" value="Envoyer le formulaire">
```

{{EmbedLiveSample("Exemple_simple", 650, 30)}}

## Valeur

La valeur de l'attribut {{htmlattrxref("value", "input")}} d'un élément `<input type="submit">` contient une chaîne de caractères ({{domxref("DOMString")}}) qui est utilisée comme étiquette pour le bouton.

Si on n'indique aucune valeur, ce sera un texte par défaut (dépendant du navigateur) qui sera utilisé ainsi que du système d'éxploitation:

### Exemple avec valeur par défaut

```html
<input type="submit">
```

{{EmbedLiveSample("Exemple_avec_valeur_par_défaut", 650, 30)}}

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les boutons `"submit"` permettent d'utiliser les attributs suivants :

| Attribut                               | Description                                                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("formaction")}}`         | L'URL à laquelle envoyer les données du formulaire. Cette valeur prend le pas sur l'attribut {{htmlattrxref("action", "form")}} du formulaire s'il est défini.                                                  |
| `{{anch("formenctype")}}`     | Une chaîne de caractères qui indique le type d'encodage à utiliser pour les données du formulaire.                                                                                                                        |
| `{{anch("formmethod")}}`         | La méthode HTTP ({{HTTPMethod("get")}} ou {{HTTPMethod("post")}}) à utiliser pour envoyer le formulaire.                                                                                                     |
| `{{anch("formnovalidate")}}` | Un booléen qui, lorsqu'il est présent, indique que les champs du formulaire ne sont pas soumis [aux contraintes de validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) avant l'envoi des données au serveur. |
| `{{anch("formtarget")}}`         | Le contexte de navigation dans lequel charger la réponse du serveur reçue après l'envoi du formulaire.                                                                                                                    |

### {{htmlattrdef("formaction")}}

Une chaîne de caractères représentant l'URL à laquelle envoyer les données du formulaire. Cette valeur prend le pas sur l'attribut {{htmlattrxref("action", "form")}} du formulaire ({{HTMLElement("form")}}) propriétaire du champ `<input>`.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) et {{HTMLElement("button")}}.

### {{htmlattrdef("formenctype")}}

Une chaîne de caractères qui identifie la méthode d'encodage à utiliser pour l'envoi des données du formulaire au serveur. Trois valeurs sont autorisées :

- `application/x-www-form-urlencoded`
  - : Les informations sont envoyées sous la forme d'une chaîne de caractères ajoutée à l'URL en utilisant l'algorithme de {{jsxref("encodeURI", "encodeURI()")}}. **Cette valeur est la valeur par défaut.**
- `multipart/form-data`
  - : Cette valeur utilise l'API {{domxref("FormData")}} pour gérer les données et permet d'*uploader*des fichiers. Cet encodage _doit_ être utilisé s'il y a des éléments  {{HTMLElement("input")}} de {{htmlattrxref("type", "input")}} `"file"` ([`<input type="file">`](/fr/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Les données sont envoyées comme texte simple. Cette valeur est généralement utile pour déboguer car elle permet de voir facilement les données envoyées.

Si cet attribut est défini, sa valeur prend la priorité sur l'attribut {{htmlattrxref("action", "form")}} du formulaire.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) et {{HTMLElement("button")}}.

### {{htmlattrdef("formmethod")}}

Une chaîne de caractères qui indique la méthode HTTP à utiliser lors de l'envoi des données du formulaire. Cette valeur prend la priorité sur l'attribut {{htmlattrxref("method", "form")}} du formulaire. Les valeurs autorisées sont :

- `get`
  - : Une URL est construite en commençant avec l'URL fournie par l'attribut `formaction` ou {{htmlattrxref("action", "form")}}, suivie d'un point d'interrogation puis des données du formulaire, encodées comme indiqué avec `formenctype` ou {{htmlattrxref("enctype", "form")}}. Cette URL est ensuite envoyée au serveur avec une requête HTTP {{HTTPMethod("get")}}. Cette méthode fonctionne correctement pour les formulaires simples, contenant des données ASCII et sans effet de bord. **C'est la valeur par défaut.**
- `post`
  - : Les données du formulaire sont incluses dans le corps de la requête envoyée à l'URL fournie par l'attribut `formaction` ou {{htmlattrxref("action", "form")}} en utilisant une requête {{HTTPMethod("push")}}. Cette méthode prend en charge les données plus complexes (que celles pour `get`) et les pièces jointes sous forme de fichiers.
- `dialog`
  - : Cette méthode est utilisée pour indique que le bouton permet simplement de fermer la boîte de dialogue associée au champ. Aucune donnée n'est transmise.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) et {{HTMLElement("button")}}.

### {{htmlattrdef("formnovalidate")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le formulaire ne devrait pas être validé avant d'être envoyé au serveur. Cet attribut prend la priorité sur l'attribut {{htmlattrxref("novalidate", "form")}} du formulaire parent.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) et {{HTMLElement("button")}}.

### {{htmlattrdef("formtarget")}}

Une chaîne de caractères qui indique un nom ou un mot-clé qui définit où afficher la réponse reçue depuis le serveur après l'envoi du formulaire. La chaîne de caractères doit correspondre au nom **d'un contexte de navigation** (un onglet, une fenêtre ou une {{HTMLElement("iframe")}}). La valeur de cet attribut prendra la priorité sur celle fournie par l'attribut {{htmlattrxref("target", "form")}} du formulaire ({{HTMLElement("form")}}) parent.

En complément des noms des onglets, fenêtres, _iframes_, quelques mots-clés spéciaux peuvent être utilisés :

- `_self`
  - : La réponse est chargée dans le même contexte de navigation que celui contenant le formulaire. Cela remplacera le document courant avec les données reçues. **Cette valeur est la valeur par défaut.**
- `_blank`
  - : La réponse est chargé dans un contexte de navigation vierge. Ce sera généralement un nouvel onglet dans la même fenêtre mais cela peut varier selon la configuration de l'agent utilisateur.
- `_parent`
  - : La réponse est chargée dans le contexte de navigation parent du contexte courant. S'il n'y a pas de contexte parent, cette valeur est synonyme de `"_self"`.
- `_top`
  - : La réponse est chargée dans le contexte de navigation de plus haut niveau, c'est-à-dire le contexte de navigation qui est l'ancêtre, sans parent, du contexte courant. Si le contexte courant est déjà le contexte de navigation le plus haut, cette valeur est synonyme de `"_self"`.

Cet attribut est également disponible pour les éléments [`<input type="image">`](/fr/docs/Web/HTML/Element/input/image) et {{HTMLElement("button")}}.

## Utiliser les boutons d'envoi

Les boutons `<input type="submit">` sont utilisés afin d'envoyer des formulaires. Si vous souhaitez créer un bouton personnalisé et adapter son comportement avec JavaScript, il sera préférable d'utiliser un élément {{HTMLElement("button")}} ou un élément [`<input type="button">`](/fr/docs/Web/HTML/Element/input/button).

Attention, si un seul élément bouton est inséré dans un formulaire (par exemple `<button>Mon bouton</button>`), le navigateur considèrera que ce bouton doit servir comme bouton d'envoi. Il est donc nécessaire de déclarer explicitement un bouton d'envoi (`<input type="submit">`) en plus d'autres boutons que vous souhaiteriez ajouter.

### Un bouton pour envoyer simple

Commençons par un exemple simple :

```html
<form>
  <div>
    <label for="example">Veuillez saisir un texte</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="Envoyer">
  </div>
</form>
```

Voici le résultat obtenu :

{{EmbedLiveSample("Un_bouton_pour_envoyer_simple", 650, 100)}}

Pour tester, vous pouvez saisir un texte dans le champ puis cliquer sur le bouton.

Lorsque le formulaire est envoyé, les paires formées par les noms et les valeurs seront envoyées au serveur. Dans le cas précédent, la donnée envoyée aura la forme `text=monTexte` (la deuxième partie varie selon le texte saisi). La destination et la méthode utilisées pour l'envoi des données dépend des attributs utilisés sur l'élément `<form>` (ainsi que d'autres détails). Pour plus d'informations, vous pouvez lire [Envoyer les données d'un formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires).

### Ajouter un raccourci clavier

Les raccourcis claviers permettent à l'utilisateur d'utiliser une touche du clavier ou une combinaison de touches afin de déclencher l'action d'un bouton. Pour ajouter un raccourci à un bouton d'envoi, on peut utiliser l'attribut universel {{htmlattrxref("accesskey")}}.

Dans l'exemple qui suit, on définit <kbd>s</kbd> comme raccourci (autrement dit, il faudra appuyer sur la touche <kbd>s</kbd> avec une ou plusieurs touches supplémentaires qui dépendent du navigateur et du système d'exploitation, cf. {{htmlattrxref("accesskey")}} pour la liste de ces touches).

```html
<form>
  <div>
    <label for="example">Veuillez saisir du texte</label>
    <input id="example" type="text" name="text">
  </div>
  <div>
    <input type="submit" value="Envoyer"
     accesskey="s">
  </div>
</form>
```

{{EmbedLiveSample("Ajouter_un_raccourci_clavier", 650, 100)}}

> **Note :** Un problème de cet exemple est que l'utilisateur ne saura pas quelle touche utiliser comme raccourci. Dans un cas concret, cette information serait affichée ou fournie via un lien simple d'accès qui décrirait les raccourcis disponibles.

### Activer et désactiver un bouton d'envoi

Si on souhaite désactiver un bouton, il sufft d'utiliser l'attribut booléen universel {{htmlattrxref("disabled")}} :

```html
<input type="submit" value="Disabled" disabled>
```

Pour activer / désactiver le bouton dynamiquement, on pourra manipuler l'attribut DOM `disabled` avec la valeur `true` ou `false` en JavaScript (avec une instruction similaire à `btn.disabled = true`).

> **Note :** Voir la page [`<input type="button">`](/fr/docs/Web/HTML/Element/Input/button#Désactiver_et_activer_un_bouton) pour plus d'exemples concernant l'activation/désactivation des boutons liés à un formulaire.

> **Note :** À la différence des autres navigateurs, [Firefox conservera un état désactivé obtenu de façon dynamique lorsque la page est rechargée](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). L'attribut {{htmlattrxref("autocomplete","button")}} peut être utilisé afin de contrôler cette fonctionnalité.

## Validation

Il n'existe pas de mécanisme de validation natif côté client pour les boutons d'envoi de formulaires.

## Exemples

Voir les exemples ci-avant.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) utilisée
        comme étiquette (texte) pour le bouton.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("click")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("type", "input")}}, and
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune.</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#submit-button-state-(type=submit)', '&lt;input type="submit"&gt;')}} | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-submit")}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface DOM {{domxref("HTMLInputElement")}} qu'il implémente
- L'élément {{HTMLElement("button")}}.
- [Apprendre les formulaires et les boutons](/fr/docs/Learn/HTML/Forms_and_buttons)
- [L'accessibilité et les formulaires](/fr/docs/Web/Accessibility/ARIA/forms)
- [Les formulaires HTML](/fr/docs/Learn/HTML/Forms)
