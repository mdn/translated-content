---
title: "HTMLElement : propriété outerText"
short-title: outerText
slug: Web/API/HTMLElement/outerText
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("DOM")}}

La propriété **`outerText`** de l'interface {{DOMxRef("HTMLElement")}} retourne la même valeur que {{DOMxRef("HTMLElement.innerText")}}.
Utilisée en écriture, elle remplace tout le nœud courant par le texte donné (ce qui diffère de `innerText`, qui remplace le contenu _à l'intérieur_ du nœud courant).

Voir {{DOMxRef("HTMLElement.innerText")}} pour plus d'informations et des exemples montrant comment les deux propriétés sont utilisées comme accesseurs.

## Valeur

Une chaîne de caractères représentant le contenu textuel affiché d'un élément et de ses descendants.

Si l'élément lui-même n'est pas [affiché <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (par exemple, s'il est détaché du document ou caché à la vue), la valeur retournée est la même que celle de la propriété {{DOMxRef("Node.textContent")}}.

Utilisée en écriture, elle remplace le nœud courant par le texte donné, en convertissant les sauts de ligne en éléments HTML {{HTMLElement("br")}}.

## Exemples

Cet exemple met en évidence la différence fondamentale entre `outerText` et `innerText` lorsqu'ils sont utilisés comme mutateurs (ils sont identiques en tant qu'accesseurs).

> [!NOTE]
> Cet exemple est une version modifiée de [Quelle est la différence entre innerText et outerText&nbsp;? <sup>(angl.)</sup>](https://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435) (Stack Overflow) par [codingintrigue <sup>(angl.)</sup>](https://stackoverflow.com/users/571194/codingintrigue), sous licence [CC BY-SA 3.0 <sup>(angl.)</sup>](https://creativecommons.org/licenses/by-sa/3.0/).

Considérez une page contenant le HTML suivant&nbsp;:

```html
<div>
  <p>Contenu original</p>
</div>
```

`outerText` remplace tout l'élément sélectionné, donc le JavaScript `p.outerText = "Tout l'élément est remplacé"` remplace tout l'élément `p` sélectionné&nbsp;:

```html
<div>Tout l'élément est remplacé</div>
```

À l'inverse, `p.innerText = "Contenu interne de l'élément remplacé"` remplace le contenu _interne_ de l'élément `p` sélectionné&nbsp;:

```html
<div>
  <p>Contenu interne de l'élément remplacé</p>
</div>
```

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.innerText")}}
- La propriété {{DOMxRef("Element.outerHTML")}}
