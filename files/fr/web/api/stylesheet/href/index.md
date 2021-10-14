---
title: Stylesheet.href
slug: Web/API/StyleSheet/href
translation_of: Web/API/StyleSheet/href
---
{{APIRef ("CSSOM")}}

Renvoie l'emplacement de la feuille de style.

## Syntaxe

    Uri = stylesheet.href

### Paramètres

- `uri` Est une chaîne contenant l'URI de la feuille de style.

## Exemple

```html
 // sur une machine locale:
 <Html>
  <Head>
   <Link rel = "StyleSheet" href = "example.css" type = "text / css" />
   <Script>
    Function sref () {
     Alerte (document.styleSheets [0] .href);
    }
   </ Script>
  </ Head>
  <Body>
   <Div class = "tonnerre"> Thunder </ div>
   <Button onclick = "sref ()"> ss </ button>
  </ Body>
 </ Html>
// retourne "fichier: //// C: /Windows/Desktop/example.css
```

## Remarques

Si la feuille de style est une feuille de style liée, la valeur de son attribut est son emplacement. Pour les feuilles de style en ligne, la valeur de cet attribut est `NULL`.

Cette propriété est en lecture seule sur Firefox, Opera, Google Chrome et Safari, et elle est lue / écrite dans Internet Explorer.

## spécification

[Href](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
