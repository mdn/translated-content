---
title: "KeyboardEvent : propriété charCode"
short-title: charCode
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

La propriété en lecture seule **`charCode`** de l'interface {{DOMxRef("KeyboardEvent")}} retourne la valeur Unicode d'une touche caractère pressée lors d'un évènement {{DOMxRef("Element/keypress_event", "keypress")}}.

> [!WARNING]
> Ne pas utiliser cette propriété, elle est dépréciée. Pour obtenir la valeur Unicode du caractère, utilisez la propriété {{DOMxRef("KeyboardEvent.key", "key")}}.

## Value

Un nombre qui représente la valeur Unicode de la touche caractère qui a été pressée.

## Exemple

### HTML

```html
<p>
  Tapez du texte dans la zone ci-dessous pour afficher le <code>charCode</code>.
</p>
<input type="text" />
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.querySelector("#log");

input.addEventListener("keypress", (e) => {
  log.innerText = `Key pressed: ${String.fromCharCode(e.charCode)}\ncharCode: ${
    e.charCode
  }`;
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Notes

- Lors d'un évènement {{DOMxRef("Element/keypress_event", "keypress")}}, la valeur Unicode de la touche pressée est stockée soit dans la propriété {{DOMxRef("KeyboardEvent.keyCode", "keyCode")}} soit dans `charCode`, mais jamais dans les deux. Si la touche pressée génère un caractère (par exemple «&nbsp;a&nbsp;»), `charCode` reçoit le code de ce caractère&nbsp;; `charCode` respecte la casse (autrement dit, `charCode` tient compte du fait que la touche <kbd>Maj</kbd> est enfoncée). Sinon, le code de la touche pressée est stocké dans `keyCode`.
- `charCode` n'est jamais défini lors des évènements {{DOMxRef("Element/keydown_event", "keydown")}} et {{DOMxRef("Element/keyup_event", "keyup")}}. Dans ces cas, c'est `keyCode` qui est défini.
- Pour obtenir le code de la touche, qu'il soit stocké dans `keyCode` ou `charCode`, interrogez la propriété {{DOMxRef("UIEvent/which", "which")}}.
- Les caractères saisis via un {{Glossary("Input method editor", "éditeur de méthode de saisie")}} ne sont pas enregistrés via `keyCode` ou `charCode`.
- Pour obtenir la liste des valeurs `charCode` associées à chaque touche, exécutez [Afficher les propriétés de l'objet évènement](/fr/docs/Web/API/Document_Object_Model#afficher_les_proprietes_de_lobjet_evenement) et consultez le tableau HTML généré.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
