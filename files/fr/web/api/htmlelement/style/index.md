---
title: "HTMLElement : propriété style"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

La propriété en lecture seule **`style`** de l'interface {{DOMxRef("HTMLElement")}} retourne le [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) _en ligne_ d'un élément sous la forme d'un objet {{DOMxRef("CSSStyleProperties")}} dynamique.
Cet objet peut être utilisé pour obtenir et définir les styles en ligne d'un élément.

## Valeur

Un objet {{DOMxRef("CSSStyleProperties")}} dynamique.

> [!NOTE]
> Les versions antérieures de la spécification retournaient un objet {{DOMxRef("CSSStyleDeclaration")}} (dont dérive {{DOMxRef("CSSStyleProperties")}}).
> Voir le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations sur la prise en charge.

Bien que la propriété `style` soit en lecture seule dans le sens où vous ne pouvez pas remplacer l'objet `CSSStyleProperties`, il est possible d'affecter directement une valeur à la propriété `style`, ce qui revient à affecter sa propriété {{DOMxRef("CSSStyleDeclaration/cssText", "cssText")}}. Vous pouvez aussi modifier l'objet `CSSStyleProperties` en utilisant les méthodes {{DOMxRef("CSSStyleDeclaration/setProperty", "setProperty()")}} et {{DOMxRef("CSSStyleDeclaration/removeProperty", "removeProperty()")}}.

## Description

Les valeurs des styles en ligne définis dans l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) de l'élément sont reflétées par les propriétés correspondantes de l'objet {{DOMxRef("CSSStyleProperties")}} retourné.

> [!NOTE]
> {{DOMxRef("CSSStyleProperties")}} possède des propriétés nommées avec des tirets et les propriétés correspondantes en {{Glossary("camel_case", "casse camel")}} pour **toutes** les [propriétés CSS](/fr/docs/Web/CSS/Reference/Properties) prises en charge par le navigateur (pas seulement celles définies en ligne).
> Les propriétés qui n'ont pas de style en ligne correspondant sont définies à `""`.

Les propriétés CSS abrégées de l'élément sont développées en leurs propriétés longues correspondantes.
Par exemple, un élément avec le style `"border-top: 1px solid black"` sera représenté dans l'objet retourné par les propriétés nommées {{CSSxRef("border-top")}} et `borderTop`, ainsi que par les propriétés longues correspondantes {{CSSxRef("border-top-color")}} et `borderTopColor`, {{CSSxRef("border-top-style")}} et `borderTopStyle`, et {{CSSxRef("border-top-width")}} et `borderTopWidth`.

Pour ajouter des styles spécifiques à un élément sans modifier les autres valeurs, il est généralement préférable de définir les propriétés individuelles sur l'objet {{DOMxRef("CSSStyleProperties")}}.
Par exemple, vous pouvez écrire `element.style.backgroundColor = "red"`.
Une déclaration de style est réinitialisée en lui affectant `null` ou une chaîne vide, par exemple `element.style.color = null`.

La propriété `style` a la même priorité dans la cascade CSS qu'une déclaration de style en ligne définie via l'attribut `style`.

## Exemples

### Utilisation simple

Cet exemple montre comment lire les styles en ligne d'un élément.
Dans chaque cas, il lit les propriétés de style nommées avec des tirets en utilisant {{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "getPropertyValue()")}} et obtient les propriétés en casse camel avec l'opérateur point.

#### HTML

On commence par définir un élément {{HTMLElement("div")}} et un élément imbriqué qui définissent différents styles en ligne, en utilisant à la fois la forme abrégée et la forme longue.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    Un exemple de bloc
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Le code suivant obtient l'élément interne, lit son style et consigne les propriétés CSS nommées avec des tirets et en casse camel.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Styles en long
log(`"border-top" = '${elementStyle.getPropertyValue("border-top")}'`);
log(`"borderTop" = '${elementStyle.borderTop}'`);

// Styles longs développés
log(
  `"border-top-width" = '${elementStyle.getPropertyValue("border-top-width")}'`,
);
log(`"borderTopWidth" = '${elementStyle.borderTopWidth}'`);

log(
  `"border-top-style" = '${elementStyle.getPropertyValue("border-top-style")}'`,
);
log(`"borderTopStyle" = '${elementStyle.borderTopStyle}'`);

log(
  `"border-top-color" = '${elementStyle.getPropertyValue("border-top-color")}'`,
);
log(`"borderTopColor" = '${elementStyle.borderTopColor}'`);

// Style abrégé d'origine
log(`"color" = '${elementStyle.getPropertyValue("color")}'`);
log(`"color" = '${elementStyle.color}'`);

// Défini sur le parent
log(`"font-weight" = '${elementStyle.getPropertyValue("font-weight")}'`);
log(`"fontWeight" = '${elementStyle.fontWeight}'`);
```

#### Résultats

Le résultat est montré ci-dessous.
Dans chaque cas, nous voyons que les styles lus en utilisant les propriétés nommées avec des tirets et en casse camel sont les mêmes.
Nous voyons aussi que la propriété {{CSSxRef("border-top")}} correspondant à l'attribut `style` de l'élément est présente, et qu'une propriété longue est définie pour chacune de ses parties ({{CSSxRef("border-top-color")}}, {{CSSxRef("border-top-style")}} et {{CSSxRef("border-top-width")}}).

{{EmbedLiveSample("Utilisation simple", 100, 280)}}

Notez que `font-weight` est défini sur le `CSSStyleProperties` (comme toutes les autres propriétés CSS, bien que nous ne les ayons pas toutes consignées).
Cependant, ce n'est pas un style en ligne pour l'élément imbriqué, donc sa valeur est définie sur une chaîne vide (`""`).

### Énumération des informations de style

Cet exemple démontre comment nous pouvons énumérer les propriétés nommées avec des tirets de {{DOMxRef("CSSStyleProperties")}}.

#### HTML

On commence par définir un élément {{HTMLElement("div")}} et un élément imbriqué qui définissent différents styles en ligne, en utilisant à la fois la forme abrégée et la forme longue.
C'est le même HTML que dans l'exemple précédent.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    Un exemple de bloc
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Le code suivant itère sur les propriétés énumérables du `CSSStyleProperties` et consigne le résultat.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Parcourir tous les styles de l'élément en utilisant `for...in`
for (const prop in elementStyle) {
  // Vérifier que la propriété appartient à l'instance CSSStyleProperties
  // S'assurer que la propriété est un index numérique (indiquant un style en ligne/nommé avec des tirets)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    log(
      `${
        elementStyle[prop]
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}`,
    );
  }
}
```

#### Résultats

Le résultat est montré ci-dessous.
Notez que seules les propriétés CSS en long de l'élément sont énumérées (la propriété abrégée en ligne n'est pas énumérée).

{{EmbedLiveSample("Énumération des informations de style", 100, 180)}}

### Mise à jour du style de bordure

```html
<div id="box"></div>

<form name="FormName">
  <button id="btn1">Rendre la bordure épaisse de 20px</button>
  <button id="btn2">Rendre la bordure épaisse de 5px</button>
</form>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("Mise à jour du style de bordure", "", 200)}}

### Manipulation des styles

Dans cet exemple, certaines propriétés de style de base d'un élément de paragraphe HTML sont accessibles en utilisant l'objet style sur l'élément et les propriétés CSS de cet objet, qui peuvent être récupérées et définies depuis le DOM. Dans ce cas, vous manipulez directement les styles individuels. Vous pouvez aussi utiliser {{DOMxRef("document.styleSheets", "styleSheets")}} et leurs règles pour changer les styles pour l'ensemble des documents.

```html
<p id="pid">Du texte</p>
<form>
  <p><button type="button">Changer le texte</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("Manipulation des styles", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les informations de mise en forme dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- La propriété {{DOMxRef("SVGElement.style")}}
- La propriété {{DOMxRef("MathMLElement.style")}}
- La propriété {{DOMxRef("HTMLElement.attributeStyleMap")}}
- L'attribut HTML universel [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style)
