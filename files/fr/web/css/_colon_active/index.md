---
title: ":active"
slug: Web/CSS/:active
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:active`** permet de cibler un élément lorsque celui-ci est activé par l'utilisateur. Elle permet de fournir un _feedback_ indiquant que l'activation a bien été détectée par le navigateur. Lorsqu'on a une interaction avec un pointeur, il s'agit généralement du moment entre l'appui sur le pointeur et le relâchement de celui-ci.

```css
/* ne cible <a> que lorsqu'il est activé */
/* par exemple quand on clique dessus */
a:active {
  color: red;
}
```

La pseudo-classe `:active` est également activée lorsque l'utilisateur emploie la touche de tabulation. Elle est souvent utilisée sur les éléments HTML {{HTMLElement("a")}} et {{HTMLElement("button")}} mais n'est pas restreinte à ceux-ci. Les éléments ciblés par cette pseudo-classe incluent les éléments qui contiennent l'élément activé et les éléments de formulaires activés via leur élément {{HTMLElement("label")}} associé.

La mise en forme associée peut être surchargée par les autres pseudo-classes pour les liens : {{cssxref(":link")}}, {{cssxref(":hover")}} et {{cssxref(":visited")}} lorsqu'elles sont utilisées dans des règles qui suivent. Afin de mettre en forme les liens de façon correcte, la règle avec `:active` doit être écrite après les autres : `:link` — `:visited` — `:hover` — `:active`.

> **Note :** Pour les systèmes qui utilisent une souris avec plusieurs boutons, CSS 3 spécifie que la pseudo-classe `:active` ne doit s'appliquer qu'au bouton principal. Pour les souris de droitiers, c'est généralement le bouton le plus à gauche.

## Syntaxe

{{csssyntax}}

## Exemples

### Liens actifs

#### CSS

```css
a:link {
  color: blue;
} /* Liens non visités */
a:visited {
  color: purple;
} /* Liens visités */
a:hover {
  background: yellow;
} /* Liens survolés */
a:active {
  color: red;
} /* Liens actifs */

p:active {
  background: #eee;
} /* Paragraphes actifs */
```

#### HTML

```html
<p>
  Ce paragraphe contient un lien :
  <a href="#">Ce lien devient rouge quand vous cliquez dessus.</a>
  Le paragraphe sera sur un fond gris quand vous cliquerez dessus ou sur le
  lien.
</p>
```

#### Résultat

{{EmbedLiveSample('Liens_actifs')}}

### Éléments de formulaire actifs

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### HTML

```html
<form>
  <label for="mon-button">Un bouton :</label>
  <button id="mon-button" type="button">
    Cliquez sur moi ou sur mon libellé !
  </button>
</form>
```

#### Résultat

{{EmbedLiveSample('Éléments_de_formulaire_actifs')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":link")}}
- {{cssxref(":visited")}}
- {{cssxref(":hover")}}
