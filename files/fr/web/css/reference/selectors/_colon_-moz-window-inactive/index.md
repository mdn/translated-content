---
title: Pseudo-classe CSS `:-moz-window-inactive`
short-title: :-moz-window-inactive
slug: Web/CSS/Reference/Selectors/:-moz-window-inactive
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_Header}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-window-inactive`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond à n'importe quel élément qui se trouve sur une fenêtre inactive.

`:-moz-window-inactive` fonctionne également pour le contenu des documents HTML.

> [!NOTE]
> Avant l'existence de cette pseudo-classe, on pouvait donner des styles différents aux fenêtres avec l'attribut `active="true"` sur la fenêtre XUL de plus haut niveau. Cet attribut n'est plus utilisé.

## Syntaxe

```css
:-moz-window-inactive {
  /* ... */
}
```

## Exemples

Cet exemple illustre la modification de l'apparence de l'arrière-plan d'une boîte selon que la fenêtre est active ou non.

### HTML

```html
<div id="maboite">
  <p>Une boîte :)</p>
</div>
```

### CSS

```css
#maboite {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#maboite:-moz-window-inactive {
  background: cyan;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 220, 220)}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Extensions CSS de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- Sélecteurs CSS associés&nbsp;:
  - {{CSSxRef(":active")}}
- La propriété API {{DOMxRef("Document.activeElement")}} pour le DOM régulier, et la propriété {{DOMxRef("ShadowRoot.activeElement")}} pour les racines du [DOM d'ombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM).
