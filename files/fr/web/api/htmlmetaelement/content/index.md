---
title: "HTMLMetaElement : propriété content"
short-title: content
slug: Web/API/HTMLMetaElement/content
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{APIRef("HTML DOM")}}

La propriété **`content`** de l'interface {{DOMxRef("HTMLMetaElement")}} permet d'obtenir ou de définir l'attribut `content` des directives pragma et des données nommées {{HTMLElement("meta")}}, en association avec {{DOMxRef("HTMLMetaElement.name")}} ou {{DOMxRef("HTMLMetaElement.httpEquiv")}}.
Pour plus d'informations, voir l'attribut [content](/fr/docs/Web/HTML/Reference/Elements/meta#content).

## Valeur

Une chaîne de caractères.

## Exemples

### Lecture du contenu d'un élément meta

L'exemple suivant interroge un élément `<meta>` qui contient un attribut `name` avec la valeur `keywords`.
La valeur de `content` est affichée dans la console pour présenter les [mots-clés](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html) du document&nbsp;:

```js
// avec <meta name="keywords" content="documentation, HTML, web">
const meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### Création d'un élément meta avec content

L'exemple suivant crée un nouvel élément `<meta>` avec un attribut `name` défini sur [`description`](/fr/docs/Web/HTML/Reference/Elements/meta/name#noms_de_méta_définis_dans_la_spécification_html).
L'attribut `content` définit une description du document et est ajouté à l'élément `<head>` du document&nbsp;:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "L'élément <meta> peut être utilisé pour fournir des métadonnées de document sous forme de paires nom-valeur, l'attribut name donnant le nom de la métadonnée et l'attribut content la valeur.";
document.head.appendChild(meta);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
- La propriété {{DOMxRef("HTMLMetaElement.name")}}
- La propriété {{DOMxRef("HTMLMetaElement.httpEquiv")}}
- [Apprendre&nbsp;: Métadonnées en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#métadonnées_lélément_meta)
