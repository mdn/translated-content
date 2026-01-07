---
title: "HTMLElement : propriété translate"
short-title: translate
slug: Web/API/HTMLElement/translate
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

La propriété **`translate`** de l'interface {{DOMxRef("HTMLElement")}} indique si les valeurs d'attribut d'un élément et les valeurs de ses nœuds enfants {{DOMxRef("Text")}} doivent être traduites lors de la localisation de la page, ou laissées inchangées.

Elle reflète la valeur de l'attribut HTML universel [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate).

## Valeur

Une valeur booléenne qui vaut `true` si les valeurs d'attribut de l'élément et les valeurs de ses nœuds enfants {{DOMxRef("Text")}} doivent être traduites lors de la localisation de la page, et `false` sinon.

## Exemples

L'exemple suivant montre comment activer ou désactiver la traduction via un script&nbsp;:

```html
<div>
  <span>Le contenu peut toujours être traduit&nbsp;: </span>
  <span translate="yes">El contenido será traducido</span>
</div>
<div>
  <span id="translate-label">Le contenu peut être traduit&nbsp;:</span>
  <span id="translate-element" translate="no">
    El contenido puede ser traducido.
  </span>
</div>
<input id="translate-controller" type="checkbox" /> Activer la traduction
```

```js
const label = document.getElementById("translate-label");
const element = document.getElementById("translate-element");
const controller = document.getElementById("translate-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.translate = true;
    label.innerText = "Le contenu peut être traduit :";
  } else {
    element.translate = false;
    label.innerText = "Le contenu ne peut pas être traduit :";
  }
});
```

{{EmbedLiveSample('Exemples', 600, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate)
