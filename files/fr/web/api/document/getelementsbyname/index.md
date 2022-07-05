---
title: document.getElementsByName()
slug: Web/API/Document/getElementsByName
tags:
  - API
  - DOM
  - Document
  - HTML
  - Méthodes
translation_of: Web/API/Document/getElementsByName
---
{{ ApiRef("DOM") }}

Renvoie une liste des éléments portant un {{domxref("element.name","name")}} donné dans le document (X)HTML.

## Syntaxe

    elements = document.getElementsByName(name)

- `elements` est une collection de {{domxref("NodeList")}}
- `name` est la valeur de l'attribut `name` des éléments.

## Exemple

```html
<!DOCTYPE html>
<html lang="en">
<head>
 ...
</head>

<body>
<form name="up"><input type="text"></form>
<div name="down"><input type="text"></div>

<script>
var up_forms = document.getElementsByName("up");
console.log(up_forms[0].tagName); // retourne "FORM"
</script>
</body>
</html>
```

## Notes

L'attribut [`name`](/fr/docs/Web/API/Element/name) est uniquement applicable aux documents (X) HTML. La méthode renvoie une collection {{domxref("NodeList")}} en cours qui contient tous les éléments avec une valeur donnée pour l'attribut name, tels que {{htmlelement("meta")}} ou {{htmlelement("object")}} ou même si le nom est placé sur des éléments qui ne supportent pas du tout un attribut `name`.

La méthode **getElementsByName** fonctionne différemment dans différents navigateurs. Dans IE <10, la méthode getElementsByName () renvoie également les éléments qui ont un attribut id avec la valeur spécifiée. Vous devriez donc faire attention à ne pas utiliser la même chaîne pour le nom et l'identifiant.

## Spécifications

- [DOM Level 2 HTML : getElementsByName](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-71555259) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-html/html.html#ID-71555259) (non normative)
- [HTML5 : getElementsByName](http://www.whatwg.org/html/#dom-document-getelementsbyname)

| Spécification                                                                                                                | Statut                               | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('HTML WHATWG', '#dom-document-getelementsbyname', "Document.getElementsByName()")}} | {{ Spec2('HTML WHATWG') }} |                     |
| {{SpecName("DOM2 HTML", "html.html#ID-71555259", "Document.getElementsByName()")}}                 | {{Spec2("DOM2 HTML")}}         | Définition initiale |

## Voir aussi

- {{domxref("document.getElementById()")}} pour retourner une référence à un élément par son ID
- {{domxref("document.getElementsByTagName()")}} pour renvoyer les références sur les éléments avec la balise de nom donnée
- {{domxref("document.querySelector()")}} pour des sélecteurs par des requêtes comme `'div.myclass'`
