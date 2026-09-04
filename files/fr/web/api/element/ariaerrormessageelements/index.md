---
title: "Element : propriété ariaErrorMessageElements"
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
l10n:
  sourceCommit: 021ec74c882a8622cffbfb346cea128f00cd3bef
---

{{APIRef("DOM")}}

La propriété **`ariaErrorMessageElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui fournit un message d'erreur pour l'élément auquel elle est appliquée.

Le sujet [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}.
Le texte interne de ces éléments peut être joint avec des espaces pour obtenir le message d'erreur.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau assigné est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) pour définir le message d'erreur d'un élément.
Contrairement à `aria-errormessage`, les éléments assignés à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est alors effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Champ de saisie courriel avec message d'erreur

Cet exemple montre comment nous utilisons l'attribut `aria-errormessage` pour définir le message d'erreur lors de la saisie d'une adresse courriel invalide, et démontre comment nous pouvons obtenir et définir le message en utilisant `ariaErrorMessageElements`.

#### HTML

Tout d'abord, nous définissons un champ de saisie courriel HTML, en définissant son attribut `aria-errormessage` pour référencer un élément avec un `id` nommé `err1`.
Nous définissons ensuite un élément `<span>` qui a cet identifiant et qui contient un message d'erreur.

```html
<p>
  <label for="courriel">Adresse courriel&nbsp;:</label>
  <input type="email" name="courriel" id="courriel" aria-errormessage="err1" />
  <span id="err1" class="messageerreur">
    Erreur&nbsp;: Entrez une adresse courriel valide
  </span>
</p>
```

#### CSS

Nous créons quelques styles pour masquer le message d'erreur par défaut, mais le rendre visible et le mettre en forme comme une erreur lorsque `aria-invalid` est défini sur l'élément.

```css
.messageerreur {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .messageerreur {
  visibility: visible;
}
```

#### JavaScript

Nous vérifions ensuite la saisie et définissons {{DOMxRef("Element/ariaInvalid", "ariaInvalid")}} sur `true` ou `false` en fonction de la violation de contrainte [`typeMismatch`](/fr/docs/Web/API/ValidityState/typeMismatch).
`ariaInvalid` est à son tour réfléchi dans l'attribut `aria-invalid`, ce qui masque et affiche l'erreur selon les besoins.

```js
const courriel = document.querySelector("#courriel");

courriel.addEventListener("input", (event) => {
  if (courriel.validity.typeMismatch) {
    courriel.ariaInvalid = true;
  } else {
    courriel.ariaInvalid = false;
  }
});
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

Nous journalisons ensuite la valeur de l'attribut `aria-errormessage`, les `ariaErrorMessageElements` et le texte interne des `ariaErrorMessageElements`.

```js
journaliser(`aria-errormessage: ${courriel.getAttribute("aria-errormessage")}`);
// Test de fonctionnalité pour ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  // Obtenir ariaErrorMessageElements
  const elementsProp = courriel.ariaErrorMessageElements;
  journaliser(`ariaErrorMessageElements: ${elementsProp}`);

  // Texte accessible à partir du texte interne de l'élément
  const texte = elementsProp.map((e) => e.textContent.trim()).join(" ");
  journaliser(`Détails du message d'erreur : ${texte}`);
} else {
  journaliser(
    "element.ariaErrorMessageElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Lorsque vous saisissez une adresse courriel, le texte d'erreur est affiché jusqu'à ce que l'adresse courriel soit valide.
Notez que le journal affiche la référence du message d'erreur lue à partir de l'attribut, l'élément provenant de `ariaErrorMessageElements` et le texte interne de l'élément, qui est son message d'erreur.

{{EmbedLiveSample("Champ de saisie courriel avec message d'erreur", "100%", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- La propriété {{DOMxRef("ElementInternals.ariaErrorMessageElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.
