---
title: HTMLElement.focus()
slug: Web/API/HTMLElement/focus
translation_of: Web/API/HTMLElement/focus
browser-compat: api.HTMLElement.focus
---
{{APIRef("HTML DOM")}}

La méthode **`HTMLElement.focus()`** place le focus sur l'élément indiqué, s'il peut recevoir le focus. L'élément qui a le focus sera celui qui recevra par défaut les évènements du clavier et les autres évènements analogues.

## Syntaxe

```js
focus()
focus(options)
```

### Paramètres

- `options` {{optional_inline}}

  - : Un objet optionnel qui fournit les options permettant de contrôler les aspects du focus. Cet objet peut contenir les propriétés suivantes&nbsp;:

    - `preventScroll` {{optional_inline}}
      - : Un booléen qui indique si le navigateur devrait défiler jusqu'à ce que l'élément qui a reçu le focus soit visible. S'il vaut `false` (la valeur par défaut), le navigateur défilera jusqu'à ce que l'élément soit visible après lui avoir donné le focus. Si `preventScroll` vaut `true`, aucun défilement n'aura lieu.

## Exemples

### Placer le focus sur un champ texte

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("monChampTexte").focus();
}
```

#### HTML

```html
<input type="text" id="monChampTexte" value="Champ texte.">
<p></p>
<button type="button" onclick="focusMethod()">Cliquez ici pour placer le focus sur le champ texte !</button>
```

#### Résultat

{{EmbedLiveSample('')}}

### Placer le focus sur un bouton

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("monBouton").focus();
}
```

#### HTML

```html
<button type="button" id="monBouton">Je suis un bouton !</button>
<p></p>
<button type="button" onclick="focusMethod()">Cliquez ici pour donner le focus au bouton !</button>
```

#### Résultat

{{EmbedLiveSample('')}}

### Utiliser le paramètre d'option

#### JavaScript

```js
focusScrollMethod = function getFocus() {
  document.getElementById("monBouton").focus({preventScroll:false});
}
focusNoScrollMethod = function getFocusWithoutScrolling() {
  document.getElementById("monBouton").focus({preventScroll:true});
}
```

#### HTML

```html
<button type="button" onclick="focusScrollMethod()">Cliquez ici pour passer le focus au bouton !</button>
<button type="button" onclick="focusNoScrollMethod()">Cliquez ici pour passer le focus au bouton sans défilement !</button>

<div id="container" style="height: 1000px; width: 1000px;">
<button type="button" id="monBouton" style="margin-top: 500px;">Je suis un bouton Me!</button>
</div>
```

#### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Notes

- Si `HTMLElement.focus()` est appelé depuis un gestionnaire d'évènement pour `mousedown`, il faut appeler `event.preventDefault()` pour empêcher le focus de quitter l'élément 
  `HTMLElement`.
- Le comportement du focus par rapport aux fonctionnalités HTML comme [`tabindex`](/fr/docs/Web/HTML/Global_attributes#attr-tabindex) ou [le <i lang="en">shadow dom</i>](/fr/docs/Glossary/Shadow_tree), qui était auparavant trop peu spécifié, a été mis à jour en octobre 2019. Voir [le blog WHATWG](https://blog.whatwg.org/focusing-on-focus) pour plus d'informations.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`HTMLElement.blur()`](/fr/docs/Web/API/HTMLElement/blur) qui permet de retirer le focus d'un élément.
- [`document.activeElement`](/fr/docs/Web/API/Document/activeElement) qui permet de savoir quel élément a actuellement le focus.
- L'évènement [`focusin`](/fr/docs/Web/API/Element/focusin_event) qui est déclenché lorsqu'un élément est sur le point de recevoir le focus.
- L'évènement [`focusout`](/fr/docs/Web/API/Element/focusout_event) qui est déclenché lorsqu'un élément est sur le point de perdre le focus.
