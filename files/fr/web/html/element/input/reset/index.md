---
title: <input type="reset">
slug: Web/HTML/Element/Input/reset
tags:
  - Element
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/reset
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} de type **`"reset"`** sont affichés sous la forme de boutons permettant de réiniatiliser l'ensemble des champs du formulaire avec leurs valeurs initiales.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **Note :** Il est généralement peu recommandé d'inclure des boutons de réinitialisation dans les formulaires. En effet, ils sont rarement utiles et peuvent être source de frustration lorsqu'on appuie dessus involontairement.

## Valeur

La valeur de l'attribut `value` d'un élément `<input type="reset">` contient une chaîne de caractères ({{domxref("DOMString")}}) utilisée comme texte sur le bouton.

### Exemple 1

```html
<input type="reset" value="Réinitialiser le formulaire">
```

{{EmbedLiveSample("Exemple_1", 650, 30)}}

Si aucune valeur n'est indiquée, le bouton aura le texte par défaut « Réinitialiser » :

### Exemple 2

```html
<input type="reset">
```

{{EmbedLiveSample("Exemple_2", 650, 30)}}

## Utiliser les boutons de réinitialisation

Les boutons `<input type="reset">` sont utilisés pour réinitialiser les formulaires. Si vous souhaitez créer un bouton personnalisé et adapter son comportement grâce à JavaScript, il est préférable d'utiliser un élément {{htmlelement("button")}} (voire un élément [`<input type="button">`](/fr/docs/Web/HTML/Element/input/button)).

### Un bouton simple

Commençons par créer un bouton de réinitialisation simple :

```html
<form>
  <div>
    <label for="example">Voici un champ</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Réinitialiser le formulaire">
  </div>
</form>
```

Voici le résultat obtenu :

{{EmbedLiveSample("Un_bouton_simple", 650, 100)}}

Pour essayer, saisissez un peu de texte dans le champ puis appuyez sur le bouton de réinitialisation.

### Ajouter un raccourci au bouton

Les raccourcis claviers permettent de déclencher un bouton grâce à une touche ou à une combinaison de touches sur le clavier. Pour ajouter un raccourci clavier à un bouton de réinitialisation, il suffit d'utiliser l'attribut {{htmlattrxref("accesskey")}}.

Dans cet exemple, on utilise la touche <kbd>r</kbd> (il faudra donc appuyer sur <kbd>r</kbd> et d'autres touches propres au navigateur et au système d'exploitation, se référer à {{htmlattrxref("accesskey")}} pour le détails).

```html
<form>
  <div>
    <label for="example">Saisir un peu de texte</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Réinitialiser le formulaire"
     accesskey="r">
  </div>
</form>
```

{{EmbedLiveSample("Ajouter_un_raccourci_au_bouton", 650, 100)}}

> **Note :** Le problème d'un tel raccourci est que l'utilisateur ne saura pas quelle touche clavier correspond au raccourci. Dans une situation réaliste, il est nécessaire de fournir l'information via un autre biais (sans interférer avec le _design_ du site), par exemple grâce à un lien qui pointe vers la liste des différents raccourcis utilisés sur le site.

### Désactiver/Activer un bouton

Pour désactiver un bouton de réinitialisation, il suffit d'appliquer l'attribut {{htmlattrxref("disabled")}} sur l'élément :

```html
<input type="reset" value="Désactivé" disabled>
```

On peut activer/désactiver le bouton lors de la navigation sur la page avec JavaScript en modifiant la valeur de l'attribut `disabled` pour la passer de `true` à `false` et _vice versa_ (par exemple avec une instruction telle que `btn.disabled = true`).

> **Note :** Pour plus d'exemples concernant l'activation/la désactivation de bouton, vous pouvez consulter la page [`<input type="button">`](/fr/docs/Web/HTML/Element/Input/button#Désactiver_et_activer_un_bouton).

> **Note :** À la différence des autres navigateurs, [Firefox conservera un état désactivé obtenu de façon dynamique lorsque la page est rechargée](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). L'attribut {{htmlattrxref("autocomplete","button")}} peut être utilisé afin de contrôler cette fonctionnalité.

## Validation

Aucune fonctionnalité de vérification native côté client n'est implémentée pour les boutons de réinitialisation.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères qui est utilisée comme intitulé pour le bouton.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("click")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("type", "input")}} et 
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>Aucune</td>
    </tr>
  </tbody>
</table>

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <td>Spécification</td>
      <td>État</td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5 W3C', 'forms.html#reset-button-state-(type=reset)', '&lt;input type="reset"&gt;')}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-reset")}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}}.
- L'élément {{HTMLElement("button")}}
- [Apprendre les formulaires et les boutons](/fr/docs/Learn/HTML/Forms_and_buttons)
- [L'accessibilité et les formulaires](/fr/docs/Web/Accessibility/ARIA/forms)
- [Les formulaires HTML](/fr/docs/Learn/HTML/Forms)
