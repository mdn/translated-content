---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:focus-within`** s'applique à tous les éléments pour lesquels la pseudo-classe {{cssxref(":focus")}} s'applique ainsi qu'à tous leurs éléments descendants, y compris ceux du _Shadow DOM_. Autrement dit, cette pseudo-classe s'applique lorsqu'un élément a reçu le focus via le clavier ou la souris (par exemple lorsqu'on clique sur un champ d'un formulaire).

```css
/* Cible n'importe quel <div> lorsqu'un */
/* de ses descendants a reçu le focus */
div:focus-within {
  background: yellow;
}
```

Cette pseudo-classe s'applique également aux descendants de l'élément ciblé ainsi qu'aux descendants dont la racine est la racine d'un arbre du {{Glossary("Shadow DOM")}}.

Ce sélecteur est notamment utile lorsqu'on veut, par exemple, mettre en avant l'ensemble d'un formulaire lorsque l'utilisateur passe le focus sur l'un de ses éléments {{HTMLElement("input")}}.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
.name-container {
  padding: 4px;
}

.name-container:focus-within {
  background: yellow;
}

input {
  margin: 4px;
}
```

### HTML

```html
<p>
  L'élément div ci-après aura un fond jaune si l'un des deux champs de saisie a
  le focus.
</p>
<div class="name-container">
  <label for="prenom">
    Prénom :
    <input id="prenom" placeholder="Prénom" type="text" />
  </label>
  <label for="nom">
    Nom :
    <input id="nom" placeholder="Nom" type="text" />
  </label>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
