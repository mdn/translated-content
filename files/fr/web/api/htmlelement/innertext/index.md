---
title: "HTMLElement : propriété innerText"
short-title: innerText
slug: Web/API/HTMLElement/innerText
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("HTML DOM")}}

La propriété **`innerText`** de l'interface {{DOMxRef("HTMLElement")}} représente le contenu textuel affiché d'un nœud et de ses descendants.

En lecture, elle correspond approximativement au texte que l'utilisateur·ice obtiendrait en sélectionnant le contenu de l'élément avec le curseur puis en le copiant dans le presse-papiers.
En écriture, elle remplace les enfants de l'élément par la valeur donnée, en convertissant les sauts de ligne en éléments HTML {{HTMLElement("br")}}.

> [!NOTE]
> Il est facile de confondre `innerText` avec {{DOMxRef("Node.textContent")}}, mais il existe des différences importantes entre les deux.
> En résumé, `innerText` tient compte de l'apparence affichée du texte, alors que `textContent` non.

## Valeur

Une chaîne de caractères représentant le contenu textuel affiché d'un élément.

Si l'élément lui-même n'est pas [affiché <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (par exemple, s'il est détaché du document ou caché à la vue), la valeur retournée est la même que celle de la propriété {{DOMxRef("Node.textContent")}}.

> [!WARNING]
> Définir `innerText` sur un nœud supprime _tous_ les enfants du nœud et les remplace par un seul nœud texte contenant la chaîne de caractères fournie.

## Exemples

Cet exemple compare `innerText` avec {{DOMxRef("Node.textContent")}}.
Remarquez que `innerText` prend en compte des éléments comme {{HTMLElement("br")}} et ignore les éléments cachés.

### HTML

```html
<h3>Élément source&nbsp;:</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
    #text {
      text-transform: uppercase;
    }
  </style>
  <span id="text">
    Regardez<br />
    comment ce texte<br />
    est interprété ci-dessous.
  </span>
  <span style="display:none">TEXTE CACHÉ</span>
</p>
<h3>Résultat de textContent&nbsp;:</h3>
<textarea id="textContentOutput" rows="18" cols="40" readonly>…</textarea>
<h3>Résultat de innerText&nbsp;:</h3>
<textarea id="innerTextOutput" rows="6" cols="40" readonly>…</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### Résultat

{{EmbedLiveSample("Exemples", 700, 650)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.innerText")}}
- La propriété {{DOMxRef("HTMLElement.outerText")}}
- La propriété {{DOMxRef("Element.innerHTML")}}
