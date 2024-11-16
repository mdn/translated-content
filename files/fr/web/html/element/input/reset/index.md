---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
---

{{HTMLSidebar}}

Les éléments {{HTMLElement("input")}} de type **`"reset"`** sont affichés sous la forme de boutons permettant de réinitialiser l'ensemble des champs du formulaire avec leurs valeurs initiales.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> [!NOTE]
> Il est généralement peu recommandé d'inclure des boutons de réinitialisation dans les formulaires. En effet, ils sont rarement utiles et peuvent être source de frustration lorsqu'on appuie dessus involontairement.

## Valeur

La valeur de l'attribut `value` d'un élément `<input type="reset">` contient une chaîne de caractères ({{domxref("DOMString")}}) utilisée comme texte sur le bouton.

### Exemple 1

```html
<input type="reset" value="Réinitialiser le formulaire" />
```

{{EmbedLiveSample("Exemple_1", 650, 30)}}

Si aucune valeur n'est indiquée, le bouton aura le texte par défaut « Réinitialiser » :

### Exemple 2

```html
<input type="reset" />
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
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Réinitialiser le formulaire" />
  </div>
</form>
```

Voici le résultat obtenu :

{{EmbedLiveSample("Un_bouton_simple", 650, 100)}}

Pour essayer, saisissez un peu de texte dans le champ puis appuyez sur le bouton de réinitialisation.

### Ajouter un raccourci au bouton

Les raccourcis claviers permettent de déclencher un bouton grâce à une touche ou à une combinaison de touches sur le clavier. Pour ajouter un raccourci clavier à un bouton de réinitialisation, il suffit d'utiliser l'attribut [`accesskey`](/fr/docs/Web/HTML/Global_attributes#accesskey).

Dans cet exemple, on utilise la touche <kbd>r</kbd> (il faudra donc appuyer sur <kbd>r</kbd> et d'autres touches propres au navigateur et au système d'exploitation, se référer à [`accesskey`](/fr/docs/Web/HTML/Global_attributes#accesskey) pour le détails).

```html
<form>
  <div>
    <label for="example">Saisir un peu de texte</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Réinitialiser le formulaire" accesskey="r" />
  </div>
</form>
```

{{EmbedLiveSample("Ajouter_un_raccourci_au_bouton", 650, 100)}}

> [!NOTE]
> Le problème d'un tel raccourci est que l'utilisateur ne saura pas quelle touche clavier correspond au raccourci. Dans une situation réaliste, il est nécessaire de fournir l'information via un autre biais (sans interférer avec le _design_ du site), par exemple grâce à un lien qui pointe vers la liste des différents raccourcis utilisés sur le site.

### Désactiver/Activer un bouton

Pour désactiver un bouton de réinitialisation, il suffit d'appliquer l'attribut [`disabled`](/fr/docs/Web/HTML/Global_attributes#disabled) sur l'élément :

```html
<input type="reset" value="Désactivé" disabled />
```

On peut activer/désactiver le bouton lors de la navigation sur la page avec JavaScript en modifiant la valeur de l'attribut `disabled` pour la passer de `true` à `false` et _vice versa_ (par exemple avec une instruction telle que `btn.disabled = true`).

> [!NOTE]
> Pour plus d'exemples concernant l'activation/la désactivation de bouton, vous pouvez consulter la page [`<input type="button">`](/fr/docs/Web/HTML/Element/Input/button#Désactiver_et_activer_un_bouton).

> [!NOTE]
> À la différence des autres navigateurs, [Firefox conservera un état désactivé obtenu de façon dynamique lorsque la page est rechargée](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing). L'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/button#autocomplete) peut être utilisé afin de contrôler cette fonctionnalité.

## Validation

Aucune fonctionnalité de vérification native côté client n'est implémentée pour les boutons de réinitialisation.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui est utilisée comme intitulé pour le bouton.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/Element/click_event"><code>click</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/input#type"><code>type</code></a> et <a href="/fr/docs/Web/HTML/Element/input#value"><code>value</code></a>
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}}.
- L'élément {{HTMLElement("button")}}
- [Apprendre les formulaires et les boutons](/fr/docs/Learn/HTML/Forms_and_buttons)
- [L'accessibilité et les formulaires](/fr/docs/Web/Accessibility/ARIA/forms)
- [Les formulaires HTML](/fr/docs/Learn/HTML/Forms)
