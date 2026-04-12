---
title: <input type="reset">
slug: Web/HTML/Reference/Elements/input/reset
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Les éléments {{HTMLElement("input")}} de type **`"reset"`** sont affichés sous la forme de boutons permettant de réinitialiser l'ensemble des champs du formulaire avec leurs valeurs initiales.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;reset&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <div class="controls">
    <label for="id">Identifiant&nbsp;:</label>
    <input type="text" id="id" name="id" />

    <input type="reset" value="Réinitialiser" />
    <input type="submit" value="Envoyer" />
  </div>
</form>
```

```css interactive-example
.controls {
  padding-top: 1rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr;
  gap: 0.7rem;
}

label {
  font-size: 0.8rem;
  justify-self: end;
}

input[type="reset"],
input[type="submit"] {
  width: 5rem;
  justify-self: end;
}

input[type="reset"] {
  grid-column: 2;
  grid-row: 2;
}

input[type="submit"] {
  grid-column: 2;
  grid-row: 3;
}
```

> [!NOTE]
> Il est généralement peu recommandé d'inclure des boutons de réinitialisation dans les formulaires. En effet, ils sont rarement utiles et peuvent être source de frustration lorsqu'on appuie dessus involontairement (souvent en essayant de cliquer sur le [bouton d'envoi](/fr/docs/Web/HTML/Reference/Elements/input/submit)).

## Valeur

Un élément `<input type="reset">` possède un attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) qui contient une chaîne de caractères utilisée comme étiquette du bouton, fournissant ainsi une {{Glossary("accessible description", "description accessible")}}. Les boutons tels que `reset` n'ont pas de valeur autrement.

### Définir l'attribut `value`

```html
<input type="reset" value="Réinitialiser le formulaire" />
```

{{EmbedLiveSample("Définir l'attribut `value`", 650, 30)}}

### Omettre l'attribut `value`

```html
<input type="reset" />
```

{{EmbedLiveSample("Omettre l'attribut `value`", 650, 30)}}

## Utiliser les boutons de réinitialisation

Les boutons `<input type="reset">` sont utilisés pour réinitialiser les formulaires. Si vous souhaitez créer un bouton personnalisé et adapter son comportement grâce à JavaScript, il est préférable d'utiliser un élément [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button), ou mieux encore, un élément {{HTMLElement("button")}}.

### Un bouton simple de réinitialisation

Commençons par créer un bouton de réinitialisation simple&nbsp;:

```html
<form>
  <div>
    <label for="example">Écrivez un texte pour essayer</label>
    <input id="example" type="text" />
  </div>
  <div>
    <input type="reset" value="Réinitialiser le formulaire" />
  </div>
</form>
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Un bouton simple de réinitialisation", 650, 100)}}

Pour essayer, saisissez un peu de texte dans le champ puis appuyez sur le bouton de réinitialisation.

### Ajouter un raccourci au bouton

Les raccourcis claviers permettent de déclencher un bouton grâce à une touche ou à une combinaison de touches sur le clavier. Pour ajouter un raccourci clavier à un bouton de réinitialisation, il suffit d'utiliser l'attribut [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes#accesskey).

Dans cet exemple, on utilise la touche <kbd>r</kbd> (il faudra donc appuyer sur <kbd>r</kbd> et d'autres touches propres au navigateur et au système d'exploitation, se référer à [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes#accesskey) pour le détails).

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

{{EmbedLiveSample("Ajouter un raccourci au bouton", 650, 100)}}

Le problème avec l'exemple ci-dessus est qu'il n'y a aucun moyen pour l'utilisateur·ice de savoir quelle est la touche d'accès rapide&nbsp;! Cela est particulièrement vrai puisque les modificateurs sont généralement non standard pour éviter les conflits. Lors de la création d'un site, assurez-vous de fournir cette information d'une manière qui n'interfère pas avec le design du site (par exemple en fournissant un lien facilement accessible qui pointe vers des informations sur les touches d'accès rapide du site). Ajouter une info-bulle au bouton (en utilisant l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)) peut également aider, bien que ce ne soit pas une solution complète pour l'accessibilité.

### Désactiver/Activer un bouton

Pour désactiver un bouton de réinitialisation, il suffit d'appliquer l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Global_attributes#disabled) sur l'élément&nbsp;:

```html
<input type="reset" value="Désactivé" disabled />
```

On peut activer/désactiver le bouton lors de la navigation sur la page avec JavaScript en modifiant la valeur de l'attribut `disabled` pour la passer de `true` à `false` et _vice versa_&nbsp;; en JavaScript, cela ressemble à `btn.disabled = true` ou `btn.disabled = false`.

> [!NOTE]
> Pour plus d'exemples concernant l'activation/la désactivation de bouton, vous pouvez consulter la page [`<input type="button">`](/fr/docs/Web/HTML/Reference/Elements/input/button#désactiver_et_activer_un_bouton).

## Validation

Aucune fonctionnalité de vérification native côté client n'est implémentée pour les boutons de réinitialisation.

## Exemples

Nous avons inclus des exemples de base ci-dessus. Il n'y a vraiment rien de plus à dire sur les boutons de réinitialisation.

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
      <td>Aucune</td>
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

- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} qui l'implémente.
- [Les formulaires et les boutons](/fr/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls#boutons_réels)
- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("button")}}
