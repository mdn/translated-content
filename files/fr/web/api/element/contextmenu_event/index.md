---
title: "Element : évènement contextmenu"
slug: Web/API/Element/contextmenu_event
---

{{APIRef}}

L'évènement **`contextmenu`** est déclenché à partir d'un élément lorsque l'utilisateur tente d'ouvrir un menu contextuel. Cet évènement est généralement déclenché par un clic-droit ou en utilisant la touche du menu contextuel.

Dans ce cas, le menu contextuel est affiché dans le coin inférieur gauche de l'élément qui a le focus sauf si l'élément est un arbre, auquel cas le menu est affiché en bas à gauche de la ligne courante.

Tout évènement de clic-droit qui n'est pas désactivé (via {{domxref("Event.preventDefault", "preventDefault()")}}) entraînera le déclenchement d'un évènement `contextmenu` sur l'élément cible.

<table class="properties">
  <tbody>
    <tr>
      <th>Se propage/remonte dans le DOM</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Propriété pour la gestion d'évènement</th>
      <td>
        {{domxref("GlobalEventHandlers.oncontextmenu", "oncontextmenu")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans cet exemple, on annule l'action par défaut de l'évènement `contextmenu` avec `preventDefault()` lorsque l'évènement est déclenché depuis le premier paragraphe. Ainsi, rien ne se produira lorsqu'on utilisera un clic-droit sur le premier paragraphe tandis que le menu contextuel habituel s'affichera bien pour le second paragraphe.

### HTML

```html
<p id="noContextMenu">Le menu contextuel a été désactivé sur ce paragraphe.</p>
<p>Mais pas sur celui-ci.</p>
```

### JavaScript

```js
noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
