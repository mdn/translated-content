---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
---

{{CSSRef}}

Une **pseudo-classe** est un mot-clé qui peut être ajouté à un sélecteur afin d'indiquer l'état spécifique dans lequel l'élément doit être pour être ciblé par la déclaration. La pseudo-classe {{cssxref(":hover")}}, par exemple, permettra d'appliquer une mise en forme spécifique lorsque l'utilisateur survole l'élément ciblé par le sélecteur (changer la couleur d'un bouton par exemple).

```css
div:hover {
  background-color: #f89b4d;
}
```

Les pseudo-classes permettent d'appliquer un style à un élément non seulement en fonction de son contenu dans l'arbre du document mais aussi en fonction de facteurs externes (l'historique de navigation par exemple avec {{cssxref(":visited")}} ; le statut du contenu avec {{cssxref(":checked")}} ; la position de la souris {{cssxref(":hover")}}).

> **Note :** À la différence des pseudo-classes, [les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments) peuvent être utilisés afin d'appliquer un style sur une certaine partie d'un élément.

## Syntaxe

```
sélecteur:pseudo-classe {
  propriété: valeur;
}
```

À l'instar des classes, on peut chaîner plusieurs pseudo-classes au sein d'un sélecteur.

## Liste des pseudo-classes standards

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}} {{Experimental_Inline}}
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}
- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}
- {{CSSxRef(":drop")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}
- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}} {{Experimental_Inline}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{CSSxRef(":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is")}} {{Experimental_inline}}
- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}
- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}
- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":placeholder-shown")}} {{Experimental_Inline}}
- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}
- {{CSSxRef(":scope")}}
- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}
- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}
- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}}

## Exemples

### CSS

```css
.survol:hover {
  background-color: palegreen;
}

p:nth-child(2n + 1) {
  background-color: lime;
}
```

### HTML

```html
<div>
  <p class="survol">
    La Reine devint pourpre de colère&nbsp;; et après l’avoir considérée un
    moment avec des yeux flamboyants comme ceux d’une bête fauve, elle se mit à
    crier&nbsp;: «&nbsp;Qu’on lui coupe la tête&nbsp;!&nbsp;»
  </p>
  <p>
    «&nbsp;Quelle idée&nbsp;!&nbsp;» dit Alice très-haut et d’un ton décidé. La
    Reine se tut.
  </p>
  <p>
    Le Roi lui posa la main sur le bras, et lui dit timidement&nbsp;:
    «&nbsp;Considérez donc, ma chère amie, que ce n’est qu’une enfant.&nbsp;»
  </p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples","250","350")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Les pseudo-éléments](/fr/docs/Web/CSS/Pseudo-éléments)
