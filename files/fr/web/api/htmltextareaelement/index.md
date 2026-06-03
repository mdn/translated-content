---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLTextAreaElement`** fournit des propriétés et des méthodes pour manipuler la disposition et la présentation des éléments HTML {{HTMLElement("textarea")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite aussi des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTextAreaElement.autocomplete", "autocomplete")}}
  - : Une chaîne de caractères représentant l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/textarea#autocomplete) de l'élément.
- {{DOMxRef("HTMLTextAreaElement.cols", "cols")}}
  - : Un nombre représentant l'attribut [`cols`](/fr/docs/Web/HTML/Reference/Elements/textarea#cols) de l'élément, indiquant la largeur visible de la zone de texte.
- {{DOMxRef("HTMLTextAreaElement.defaultValue", "defaultValue")}}
  - : Une chaîne de caractères représentant la valeur par défaut du contrôle, qui se comporte comme la propriété {{DOMxRef("Node.textContent")}}.
- {{DOMxRef("HTMLTextAreaElement.dirName", "dirName")}}
  - : Une chaîne de caractères représentant la direction de l'élément.
- {{DOMxRef("HTMLTextAreaElement.disabled", "disabled")}}
  - : Un booléen représentant l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/textarea#disabled) de l'élément, indiquant que le contrôle n'est pas disponible pour l'interaction.
- {{DOMxRef("HTMLTextAreaElement.form", "form")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'élément formulaire parent. Si cet élément n'est pas contenu dans un élément formulaire, il peut s'agir de l'attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de n'importe quel élément HTML {{HTMLElement("form")}} du même document ou de la valeur `null`.
- {{DOMxRef("HTMLTextAreaElement.labels", "labels")}} {{ReadOnlyInline}}
  - : Retourne une liste ({{DOMxRef("NodeList")}}) des éléments HTML {{HTMLElement("label")}} associés à cet élément.
- {{DOMxRef("HTMLTextAreaElement.maxLength", "maxLength")}}
  - : Un nombre représentant l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/textarea#maxlength) de l'élément, indiquant le nombre maximal de caractères que l'utilisateur·ice peut saisir. Cette contrainte est évaluée uniquement lorsque la valeur change.
- {{DOMxRef("HTMLTextAreaElement.minLength", "minLength")}}
  - : Un nombre représentant l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/textarea#minlength) de l'élément, indiquant le nombre minimal de caractères que l'utilisateur·ice peut saisir. Cette contrainte est évaluée uniquement lorsque la valeur change.
- {{DOMxRef("HTMLTextAreaElement.name", "name")}}
  - : Une chaîne de caractères représentant l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/textarea#name) de l'élément, contenant le nom du contrôle.
- {{DOMxRef("HTMLTextAreaElement.placeholder", "placeholder")}}
  - : Une chaîne de caractères représentant l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/textarea#placeholder) de l'élément, contenant une indication à l'utilisateur·ice sur ce qu'il·elle doit saisir dans le contrôle.
- {{DOMxRef("HTMLTextAreaElement.readOnly", "readOnly")}}
  - : Un booléen représentant l'attribut [`readonly`](/fr/docs/Web/HTML/Reference/Elements/textarea#readonly) de l'élément, indiquant que l'utilisateur·ice ne peut pas modifier la valeur du contrôle.
- {{DOMxRef("HTMLTextAreaElement.required", "required")}}
  - : Un booléen représentant l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/textarea#required) de l'élément, indiquant que l'utilisateur·ice doit saisir une valeur avant de soumettre le formulaire.
- {{DOMxRef("HTMLTextAreaElement.rows", "rows")}}
  - : Un nombre représentant l'attribut [`rows`](/fr/docs/Web/HTML/Reference/Elements/textarea#rows) de l'élément, indiquant le nombre de lignes de texte visibles pour le contrôle.
- {{DOMxRef("HTMLTextAreaElement.selectionDirection", "selectionDirection")}}
  - : Une chaîne de caractères représentant la direction dans laquelle la sélection a eu lieu. Il s'agit de `forward` si la sélection a été effectuée dans le sens début-fin de la langue courante, ou de `backward` pour la direction opposée. Cela peut aussi être `none` si la direction est inconnue.
- {{DOMxRef("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}
  - : Un nombre représentant l'indice de fin du texte sélectionné. Si aucun texte n'est sélectionné, il contient l'indice du caractère qui suit le curseur de saisie. Lorsqu'il est défini, le contrôle se comporte comme si `setSelectionRange()` avait été appelé avec cette valeur comme second argument, et `selectionStart` comme premier argument.
- {{DOMxRef("HTMLTextAreaElement.selectionStart", "selectionStart")}}
  - : Un nombre représentant l'indice du début du texte sélectionné. Si aucun texte n'est sélectionné, il contient l'indice du caractère qui suit le curseur de saisie. Lorsqu'il est défini, le contrôle se comporte comme si `setSelectionRange()` avait été appelé avec cette valeur comme premier argument et `selectionEnd` comme second argument.
- {{DOMxRef("HTMLTextAreaElement.textLength", "textLength")}} {{ReadOnlyInline}}
  - : Retourne la longueur en points de code de la `value` du contrôle. Identique à la lecture de `value.length`.
- {{DOMxRef("HTMLTextAreaElement.type", "type")}} {{ReadOnlyInline}}
  - : Retourne la chaîne de caractères `textarea`.
- {{DOMxRef("HTMLTextAreaElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : Retourne un message localisé qui décrit les contraintes de validation que le contrôle ne satisfait pas (le cas échéant). Il s'agit d'une chaîne vide si le contrôle n'est pas candidat à la validation de contrainte (`willValidate` vaut `false`), ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLTextAreaElement.validity", "validity")}} {{ReadOnlyInline}}
  - : Retourne l'état de validité de cet élément.
- {{DOMxRef("HTMLTextAreaElement.value", "value")}}
  - : Une chaîne de caractères représentant la valeur brute contenue dans le contrôle.
- {{DOMxRef("HTMLTextAreaElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : Retourne si l'élément est candidat à la validation de contrainte. `false` si une condition l'empêche, y compris si sa propriété `readOnly` ou `disabled` vaut `true`.
- {{DOMxRef("HTMLTextAreaElement.wrap", "wrap")}}
  - : Une chaîne de caractères représentant l'attribut [`wrap`](/fr/docs/Web/HTML/Reference/Elements/textarea#wrap) de l'élément, indiquant comment le contrôle gère le retour à la ligne du texte.

## Méthodes d'instance

_Hérite aussi des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTextAreaElement.checkValidity", "checkValidity()")}}
  - : Retourne `false` si l'élément est candidat à la validation de contrainte et qu'il ne satisfait pas ses contraintes. Dans ce cas, il déclenche aussi un évènement `invalid` annulable sur le contrôle. Il retourne `true` si le contrôle n'est pas candidat à la validation de contrainte, ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLTextAreaElement.reportValidity", "reportValidity()")}}
  - : Cette méthode signale à l'utilisateur·ice les problèmes de contraintes sur l'élément, le cas échéant. S'il y a des problèmes, elle déclenche un évènement `invalid` annulable sur l'élément et retourne `false`&nbsp;; s'il n'y a pas de problème, elle retourne `true`.
- {{DOMxRef("HTMLTextAreaElement.select", "select()")}}
  - : Sélectionne le contenu du contrôle.
- {{DOMxRef("HTMLTextAreaElement.setCustomValidity", "setCustomValidity()")}}
  - : Définit un message de validité personnalisé pour l'élément. Si ce message n'est pas une chaîne vide, alors l'élément présente une erreur de validité personnalisée et n'est pas validé.
- {{DOMxRef("HTMLTextAreaElement.setRangeText", "setRangeText()")}}
  - : Remplace une plage de texte dans l'élément par un nouveau texte.
- {{DOMxRef("HTMLTextAreaElement.setSelectionRange", "setSelectionRange()")}}
  - : Sélectionne une plage de texte dans l'élément (sans le sélectionner).

## Évènements

_Hérite aussi des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements avec {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}} ou en assignant un gestionnaire à la propriété `oneventname` de cette interface&nbsp;:

- L'évènement {{DOMxRef("HTMLTextAreaElement/select_event", "select")}}
  - : Se déclenche lorsqu'un texte a été sélectionné.
- L'évènement {{DOMxRef("HTMLTextAreaElement/selectionchange_event", "selectionchange")}}
  - : Se déclenche lorsque la sélection de texte dans un élément HTML {{HTMLElement("textarea")}} a été modifiée.

## Exemples

### Exemple de zone de texte à taille automatique

Faire grandir automatiquement une zone de texte pendant la saisie&nbsp;:

#### JavaScript

```js
function autoGrow(field) {
  if (field.scrollHeight > field.clientHeight) {
    field.style.height = `${field.scrollHeight}px`;
  }
}

document.querySelector("textarea").addEventListener("keyup", (e) => {
  autoGrow(e.target);
});
```

#### CSS

```css
textarea.no-scrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>Vos commentaires</legend>
    <p><textarea class="no-scrollbars"></textarea></p>
    <p><input type="submit" value="Envoyer" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample("Exemple de zone de texte à taille automatique", 600, 300)}}

### Exemple d'insertion de balises HTML

Insérer des balises HTML dans une zone de texte&nbsp;:

```js live-sample___insert-html
function insert(startTag, endTag) {
  const textArea = document.myForm.myTextArea;
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  const oldText = textArea.value;

  const prefix = oldText.substring(0, start);
  const inserted = startTag + oldText.substring(start, end) + endTag;
  const suffix = oldText.substring(end);

  textArea.value = `${prefix}${inserted}${suffix}`;

  const newStart = start + startTag.length;
  const newEnd = end + startTag.length;

  textArea.setSelectionRange(newStart, newEnd);
  textArea.focus();
}

function insertURL() {
  const newURL = prompt("Entrez l'URL complète pour le lien");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTextArea.focus();
  }
}

const strong = document.querySelector("#format-strong");
const em = document.querySelector("#format-em");
const link = document.querySelector("#format-link");
const code = document.querySelector("#format-code");

strong.addEventListener("click", (e) => insert("<strong>", "</strong>"));
em.addEventListener("click", (e) => insert("<em>", "</em>"));
link.addEventListener("click", (e) => insertURL());
code.addEventListener("click", (e) => insert("<code>", "</code>"));
```

Décorer le span pour qu'il se comporte comme un lien&nbsp;:

```css live-sample___insert-html
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
```

```html live-sample___insert-html
<form name="myForm">
  <p>
    [
    <span class="intLink" id="format-strong"><strong>Gras</strong></span> |
    <span class="intLink" id="format-em"><em>Italique</em></span> |
    <span class="intLink" id="format-link">Lien</span> |
    <span class="intLink" id="format-code">code</span> ]
  </p>

  <p>
    <textarea name="myTextArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. 
    </textarea>
  </p>
</form>
```

{{EmbedLiveSample("insert-html", , 300, , , , , "allow-modals")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
