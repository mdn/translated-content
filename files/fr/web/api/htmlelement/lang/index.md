---
title: element.lang
slug: Web/API/HTMLElement/lang
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/lang
---
{{ ApiRef() }}

## Résumé

Cette propriété permet d'obtenir ou de définir la langue de base des valeurs d'attribut et du contenu textuel d'un élément.

## Syntaxe et valeurs

```js
var langueUtilisee = référenceElement.lang; // Récupérer la valeur de lang
référenceElement.lang = NouvelleLangue; // Définir la valeur de lang
```

_langueUtilisee_ est une variable chaîne de caracteres recevant la langue dans laquelle le texte de l'élément courant est écrit. _NouvelleLangue_ est une variable chaîne de caractères dont la valeur définit la langue dans laquelle le texte de l'élément courant est écrit.

## Exemple

```js
// ce bout de code compare la langue de base et
// redirige vers une autre URL suivant la langue
if (document.documentElement.lang === "en") {
    window.location.href = "un_document.html.en";
} else if(document.documentElement.lang === "ru") {
    window.location.href = "un_document.html.ru";
}
```

## Notes

Les codes de langues renvoyés par cette propriété sont définis dans la [RFC 1766](http://tools.ietf.org/html/rfc1766). Par exemple, « en » pour anglais, « ja » pour japonais, « es » pour espagnol, « fr » pour français, etc. La valeur par défaut de cet attribut est `unknown` (inconnue). Notez que cet attribut, bien que valide au niveau de chaque élément individuel, et le plus souvent spécifié pour le nœud racine du document.

Ne marche qu'avec l'attribut `lang`, et non avec `xml:lang`.

## Spécification

| Spécification                                                                | Statut                       | Commentaires |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('DOM2 HTML', 'html.html#ID-59132807', 'id')}} | {{Spec2('DOM2 HTML')}} |              |
