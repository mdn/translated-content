---
title: CSS
slug: Glossary/CSS
---

**CSS** (_Cascading Style Sheets_ ou _Feuilles de style en cascade_ en français) est un langage déclaratif utilisé pour décrire la présentation de pages web dans le {{glossary("Browser","navigateur")}}. Le navigateur applique les déclarations de style CSS aux éléments concernés pour les mettre en forme. Une déclaration de style contient des propriétés et leurs valeurs et détermine l'apparence d'un ou plusieurs éléments de la page.

CSS est l'une des trois technologies qui constituent le noyau du web, avec {{Glossary("HTML")}} et {{Glossary("JavaScript")}}. Ce langage est principalement utilisé pour appliquer un style aux {{Glossary("Element","éléments HTML")}}, mais peut aussi être utilisé avec d'autres langages de balisage tels que {{Glossary("SVG")}} ou encore {{Glossary("XML")}}.

Une règle CSS est un ensemble de {{Glossary("CSS Property","propriétés")}} associé à un {{Glossary("CSS selector" ,"sélecteur")}}. Voici un exemple dans lequel chaque paragraphe HTML apparaîtra en jaune sur fond noir :

```css
/* Le sélecteur "p" indique que tous les paragraphes dans le document seront affectés par la règle */
p {
  /* La propriété "color" (couleur) définit la couleur du texte. */
  /* Ici, cette couleur sera le jaune (yellow en anglais) */
  color: yellow;

  /* La propriété "background-color" (couleur d'arrière-plan) définit la couleur d'arrière-plan */
  /* Ici, cette couleur sera le noir (black) */
  background-color: black;
}
```

Le principe de « cascade » fait référence aux règles de préséance dans l'application des divers {{Glossary("CSS Selector","sélecteurs")}} pointant le même élément de la page. C'est une fonctionnalité particulièrement importante dans la mesure où un site web complexe peut contenir des milliers de règles CSS.

## Voir aussi

### Culture générale

- [Apprendre CSS](/fr/Apprendre/CSS)
- [Feuilles de style en cascade](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade) sur Wikipédia

### Références techniques

- [Documentation CSS sur MDN](/fr/docs/Web/CSS)
- [Les travaux en cours du Groupe de travail CSS](http://www.w3.org/Style/CSS/current-work) (en)

### Voir aussi

- [Cours en ligne sur codecademy.com](http://www.codecademy.com/fr/tracks/web)
