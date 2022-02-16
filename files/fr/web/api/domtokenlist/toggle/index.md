---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
translation_of: Web/API/DOMTokenList/toggle
browser-compat: api.DOMTokenList.toggle
---
{{APIRef("DOM")}}

La méthode **`toggle()`** (qui signifie _basculer_ en anglais) de l'interface [`DOMTokenList`](/fr/docs/Web/API/DOMTokenList) supprime un jeton (_token_) donné de la liste et renvoie `false`. Si _token_ n'existe pas, il est ajouté et la fonction renvoie `true`.

## Syntaxe

```js
tokenList.toggle(token [, force]);
```

### Paramètres

- token
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) représentant le jeton que l'on veut activer ou désactiver.
- force {{optional_inline}}
  - : Un _booléen_ qui, s'il est inclus, transforme la bascule en opération à un seul sens. Si ce paramètre vaut `false`, le jeton sera seulement supprimé et aucun ajout ne suivra. S'il vaut `true`, le jeton sera seulement ajouté et pas supprimé.

### Valeur de retour

Un booléen qui vaut `true` ou `false` selon que le jeton se trouve dans la liste après l'exécution de la fonction ou non.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) en tant que `DOMTokenList` en utilisant [`Element.classList`](/fr/docs/Web/API/Element/classList). Lors d'un clic sur le texte, nous remplaçons alors un jeton dans la liste et écrivons la liste dans le [`Node.textContent`](/fr/docs/Web/API/Node/textContent) du `<span>`.

### HTML

```html
<span class="a b">classList vaut 'a b'</span>
```

### JavaScript

```js
let span = document.querySelector("span");
let classes = span.classList;

span.addEventListener('click', function() {
  let result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' ajouté ; classList vaut désormais "${classes}".`;
  } else {
    span.textContent = `'c' retiré ; classList vaut désormais "${classes}".`;
  }
})
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
