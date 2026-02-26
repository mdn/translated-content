---
title: "HTMLStyleElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLStyleElement/disabled
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLStyleElement")}} permet d'obtenir ou de définir si la feuille de style est désactivée (`true`) ou non (`false`).

Notez qu'il n'existe pas d'attribut `disabled` correspondant sur l'élément HTML {{HTMLElement("style")}}.

## Valeur

Retourne `true` si la feuille de style est désactivée ou s'il n'y a pas de feuille de style associée&nbsp;; sinon `false`.
La valeur est `false` par défaut (s'il y a une feuille de style associée).

La propriété peut être utilisée pour activer ou désactiver une feuille de style associée.
Définir la propriété à `true` lorsqu'il n'y a pas de feuille de style associée n'a aucun effet.

## Exemples

### Désactiver un style en ligne

Cet exemple montre comment définir par programmation la propriété disabled sur un style défini dans le HTML à l'aide de l'élément HTML {{HTMLElement("style")}}.
Vous pouvez également accéder à toutes les feuilles de style du document à l'aide de {{DOMxRef("Document.styleSheets")}}.

#### HTML

Le HTML contient un élément {{HTMLElement("style")}} qui rend les éléments paragraphe bleus, un élément paragraphe, et un bouton qui sera utilisé pour activer et désactiver le style.

```html
<button>Activer</button>
<style id="InlineStyle">
  p {
    color: blue;
  }
</style>
<p>
  Le texte est noir quand le style est désactivé&nbsp;; bleu quand il est
  activé.
</p>
<p></p>
```

#### JavaScript

Le code ci-dessous récupère l'élément `style` par son id, puis le désactive.
Comme le style existe déjà, car il est défini dans le HTML, cela doit fonctionner.

```js
const style = document.getElementById("InlineStyle");
style.disabled = true;
```

On ajoute ensuite un gestionnaire d'évènement pour le bouton qui bascule la valeur de `disabled` et le texte du bouton.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Activer" : "Désactiver";
  button.innerText = buttonText;
});
```

#### Résultat

Le résultat est affiché ci-dessous.
Appuyez sur le bouton pour basculer la valeur de la propriété `disabled` sur le style utilisé pour le texte du paragraphe.

{{EmbedLiveSample("Désactiver un style en ligne")}}

### Désactiver un style défini par programmation

Cet exemple est très similaire au précédent, sauf que le style est défini par programmation.

#### HTML

Le HTML est similaire au cas précédent, mais la définition n'inclut aucune mise en forme par défaut.

```html
<button>Activer</button>
<p>
  Le texte est noir quand le style est désactivé&nbsp;; bleu quand il est
  activé.
</p>
<p></p>
```

#### JavaScript

On commence par créer le nouvel élément style dans le HTML.
Cela se fait en créant d'abord un élément style avec {{DOMxRef("Document.createElement")}}, en créant et ajoutant un nœud texte avec la définition du style, puis en ajoutant l'élément style au corps du document.

```js
// Créer l'élément `style`
const style = document.createElement("style");
const node = document.createTextNode("p { color: blue; }");
style.appendChild(node);
document.body.appendChild(style);
```

On peut ensuite désactiver le style comme ci-dessous.
Notez que c'est le premier moment où définir la propriété à `true` fonctionnera.
Avant ce point, le document n'avait pas de style associé, donc la valeur par défaut est `false`.

```js
// Désactiver le style
style.disabled = true;
```

Enfin, on ajoute un gestionnaire d'évènement pour le bouton qui bascule l'état de `disabled` et le texte du bouton (c'est le même que dans l'exemple précédent).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  const buttonText = style.disabled ? "Activer" : "Désactiver";
  button.innerText = buttonText;
});
```

#### Résultat

Le résultat est affiché ci-dessous.
Appuyez sur le bouton pour basculer l'état de `disabled` sur le style utilisé pour le texte.

{{EmbedLiveSample("Désactiver un style défini par programmation")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("SVGStyleElement.disabled")}}
