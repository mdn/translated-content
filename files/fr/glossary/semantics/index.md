---
title: Sémantique
slug: Glossary/Semantics
tags:
  - Glossaire
  - HTML
  - Programmation
  - sémantique
translation_of: Glossary/Semantics
original_slug: Glossaire/Sémantique
---
En programmation, la **sémantique** fait référence au sens d'une partie de code — par exemple "quel effet aura l'exécution de cette ligne de JavaScript ?", ou "quel est le rôle ou le but de cet élément HTML" (plutôt que "à quoi ressemble-t-il ?".)

Par exemple, l'élément {{htmlelement("h1")}} est un élément sémantique qui donne au texte qu'il contient le rôle (ou le sens) de "titre de premier niveau de votre page."

```html
<h1>Ceci est un titre de premier niveau</h1>
```

Par défaut, il se verra attribué une police de caractères plus grande pour le faire ressembler à un titre (bien que vous puissiez lui appliquer un style pour qu'il ressemble à tout ce que vous voulez), mais, plus important, sa valeur sémantique sera utilisée de différentes façons ; par exemple, les moteurs de recherche considéreront son contenu comme des mots-clés importants qui seront pris en compte pour classer les résultats de recherche (voir {{glossary("SEO")}}), et les lecteurs d'écran peuvent l'utiliser comme un indicateur pour aider les utilisateurs déficients visuels à naviguer sur la page.

Par ailleurs, vous pouvez faire _ressembler_ n'importe quel élément à un titre de premier niveau. Considérons le code suivant :

```html
<span style="font-size: 32px; margin: 21px 0;">Est-ce un titre de premier niveau ?</span>
```

Cela sera affiché comme un titre de premier niveau mais sans en avoir la valeur sémantique, il n'y aura donc aucun des bénéfices supplémentaires tels que ceux décrits ci-dessus. Il vaut donc mieux utiliser l'élément HTML correct pour la tâche recherchée.

## Les éléments sémantiques

Ce sont quelques-uns des éléments sémantiques ([source](http://www.w3schools.com/html/html5_semantic_elements.asp)) .

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## **Pour approfondir**

### **Culture générale**

- [Référence des éléments HTML](/fr/docs/Web/HTML/Element#Inline_text_semantics) sur MDN
- [Problèmes résolus par HTML5](/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Probl%C3%A8mes_r%C3%A9solus_par_HTML5) sur MDN
- [HTML5 Semantic Elements](http://www.w3schools.com/html/html5_semantic_elements.asp) sur w3schools
- {{interwiki("wikipedia", "Sémantique des langages de programmation", "La signification de sémantique en informatique")}} sur Wikipédia
