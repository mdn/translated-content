---
title: "Document : propriété activeElement"
short-title: activeElement
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

{{APIRef("DOM")}}

La propriété en lecture seule **`activeElement`** de l'interface {{DOMxRef("Document")}} retourne un {{DOMxRef("Element")}} dans le DOM qui reçoit les évènements clavier tels que {{DOMxRef("Element/keydown_event", "keydown")}} et {{DOMxRef("Element/keyup_event", "keyup")}}. Cela correspond généralement à l'élément sélectionné.

Les éléments pouvant recevoir la sélection varient selon la plateforme et la configuration actuelle du navigateur. Par exemple, sur Safari, suivant le comportement de macOS, les éléments qui ne sont pas des champs de saisie texte ne peuvent pas recevoir la sélection par défaut, sauf si le paramètre «&nbsp;Accès complet au clavier&nbsp;» est activé dans les réglages du système.

En général, une personne peut appuyer sur la touche <kbd>Tab</kbd> pour déplacer la sélection sur la page entre les éléments pouvant la recevoir, et utiliser des gestes clavier tels que <kbd>Espace</kbd> ou <kbd>Entrée</kbd> pour simuler un clic sur l'élément sélectionné.

> [!NOTE]
> La sélection (qui détermine l'élément qui reçoit les évènements de saisie utilisateur·ice) n'est pas la même chose que la sélection (la partie actuellement surlignée dans le document). Vous pouvez obtenir la sélection courante à l'aide de {{DOMxRef("window.getSelection()")}}.

## Valeur

Un {{DOMxRef('Element')}} profond qui a actuellement la sélection.

- Si l'élément sélectionné est dans l'arbre d'ombre (<i lang="en">shadow tree</i> en anglais) dans le document actuel (par exemple, l'élément sélectioné est à l'intérieur d'un élément `iframe` et le `document` appelant contient cet iframe), alors ce sera l'élément racine de cet arbre (dans cet exemple, cet `iframe`).
- Si l'élément sélectionné se trouve dans un arbre de document qui n'est pas issu du document actuel (par exemple, l'élément sélectionné se trouve dans le document principal, et le `document` appelant est un iframe intégré), alors ce sera `null`.
- S'il n'y a pas d'élément sélectionné, ce sera le {{DOMxRef("Document.body")}} ou le {{DOMxRef("Document.documentElement")}}.

## Exemples

### HTML

```html
<p>Sélectionnez le texte d'une des zones de texte ci-après :</p>

<form>
  <textarea name="ta-exemple-un" id="ta-exemple-un" rows="7" cols="40">
Voici la zone de texte n°1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.
  </textarea>
  <textarea name="ta-exemple-deux" id="ta-exemple-deux" rows="7" cols="40">
Voici la zone de texte n°2. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.
  </textarea>
</form>

<p>Identifiant de l'élément actif&nbsp;: <b id="element-sortie"></b></p>
<p>Texte sélectionné&nbsp;: <b id="texte-sortie"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("element-sortie");
  const outputText = document.getElementById("texte-sortie");
  outputElement.textContent = activeTextarea.id;
  outputText.textContent = selection;
}

const textarea1 = document.getElementById("ta-exemple-un");
const textarea2 = document.getElementById("ta-exemple-deux");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### Résultat

{{EmbedLiveSample("Exemples", 400, 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.hasFocus()")}}
