---
title: "HTMLDialogElement : propriété closedBy"
short-title: closedBy
slug: Web/API/HTMLDialogElement/closedBy
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{APIRef("HTML DOM")}}

La propriété **`closedBy`** de l'interface {{DOMxRef("HTMLDialogElement")}} indique les types d'actions utilisateur·ice·s qui peuvent être utilisées pour fermer l'élément {{HTMLElement("dialog")}} associé. Elle définit ou retourne la valeur de l'attribut {{HTMLElement("dialog", "<code>closedby</code>", "closedby")}} du dialogue.

## Valeur

Une chaîne de caractères&nbsp;; les valeurs possibles sont&nbsp;:

- `any`
  - : La boîte de dialogue peut être fermée par une action de «&nbsp;fermeture légère&nbsp;», une action spécifique à la plateforme ou un mécanisme défini par le·la développeur·euse.
- `closerequest`
  - : La boîte de dialogue peut être fermée par une action spécifique à la plateforme ou un mécanisme défini par le·la développeur·euse.
- `none`
  - : La boîte de dialogue ne peut être fermée que par un mécanisme défini par le·la développeur·euse.

### Comportement par défaut

Si l'attribut `closedby` est absent ou invalide, il revient à l'état **Auto**. Dans l'état **Auto**&nbsp;:

- lorsque le `<dialog>` est ouvert avec `showModal()`, il se comporte comme si&nbsp;: `closedby="closerequest"`
- lorsque le `<dialog>` est ouvert par tout autre moyen, il se comporte comme si&nbsp;: `closedby="none"`

## Exemples

### Utilisation simple de `closedBy`

```html
<dialog closedby="any">
  <h2>Ma boîte de dialogue</h2>
  <p>
    Peut être fermé avec la touche <kbd>Échap</kbd> ou en cliquant en dehors de
    la boîte de dialogue («&nbsp;fermeture légère&nbsp;»).
  </p>
</dialog>
```

```html hidden
<pre id="journal"></pre>
```

```js hidden
const elementJournal = document.getElementById("journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const dialogue = document.querySelector("dialog");
dialogue.showModal();
journaliser(`closedBy: ${dialogue.closedBy}`);
```

### Résultat

{{EmbedLiveSample("Utilisation simple de `closedBy`", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("dialog")}}
