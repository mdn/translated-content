---
title: Document.activeElement
slug: Web/API/Document/activeElement
---

{{APIRef("Shadow DOM")}}

La propriété en lecture seule **`activeElement`**, rattachée à l'interface [`Document`](/fr/docs/Web/API/Document), renvoie l'élément (l'objet [`Element`](/fr/docs/Web/API/Element) qui lui correspond) contenu dans le DOM et qui a le focus à cet instant.

La plupart du temps, `activeElement` renverra un objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) ou [`HTMLTextAreaElement`](/fr/docs/Web/API/HTMLTextAreaElement) si le texte de celui-ci est sélectionné au moment de l'appel. Si tel est le cas, il est possible d'obtenir plus de détails à l'aide des propriétés `selectionStart` et `selectionEnd` de l'objet. Dans les autres cas, l'élément avec le focus pourra être un élément [`<select>`](/fr/docs/Web/HTML/Element/select) (menu) ou un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut `"button"`, `"checkbox"`, ou `"radio"`.

Généralement, une personne utilise la touche <kbd>Tabulation</kbd> pour déplacer le focus entre les éléments qui peuvent le recevoir et utilise la touche <kbd>Espace</kbd> pour activer l'élément (c'est-à-dire pour appuyer sur un bouton ou pour changer l'état d'un bouton radio). Les éléments qui peuvent recevoir le focus dépendent de la plateforme et de la configuration du navigateur. Ainsi, sur les systèmes macOS et par défaut, les éléments qui ne sont pas des champs de saisie texte ne peuvent pas recevoir le focus.

> **Note :** Le focus (qui détermine l'élément qui recevra les informations saisies) n'est pas la même chose que la sélection (la partie actuellement surlignée dans le document). Pour accéder à la sélection courante, on pourra utiliser la méthode [`window.getSelection()`](/fr/docs/Web/API/Window/getSelection).

## Valeur

Un objet [`Element`](/fr/docs/Web/API/Element) correspondant à l'élément qui a le focus, [`<body>`](/fr/docs/Web/HTML/Element/body) ou
`null` si aucun élément n'a le focus.

## Exemples

### HTML

```html
<p>Sélectionnez le texte d'une des zones de texte ci-après :</p>

<form>
  <textarea name="ta-exemple-un" id="ta-exemple-un" rows="7" cols="40">
Voici la zone de texte n°1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-exemple-deux" id="ta-exemple-deux" rows="7" cols="40">
Voici la zone de texte n°2. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>Identifiant de l'élément actif : <b id="output-element"></b></p>
<p>Texte sélectionné : <b id="output-text"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

const textarea1 = document.getElementById("ta-exemple-un");
const textarea2 = document.getElementById("ta-exemple-deux");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### Résultat

{{EmbedLiveSample('', '400', '400')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
