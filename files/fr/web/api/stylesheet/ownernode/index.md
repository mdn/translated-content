---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
translation_of: Web/API/StyleSheet/ownerNode
---
{{APIRef ("CSSOM")}}

**OwnerNode** renvoie le noeud qui associe cette feuille de style au document.

## Syntaxe

    ObjRef = stylesheet.ownerNode

## Exemple

```html
<Html>
 <Head>
  <Link rel = "StyleSheet" href = "example.css" type = "text / css" />
  <Script>
   Function stilo () {
    Alerte (document.styleSheets [0] .ownerNode);
   }
  </ Script>
 </ Head>
 <Body>
   <Button onclick = "stilo ()"> ss </ button>
 </ Body>
</ Html>
// affiche "objet HTMLLinkElement"
```

## Remarques

Pour HTML, **ownerNode** peut être l' élément [LINK](en/LINK) ou [STYLE](en/STYLE) correspondant . Pour XML, il peut s'agir des instructions de traitement de liaison. Pour les feuilles de style qui sont incluses dans d'autres feuilles de style, la valeur de cet attribut est NULL.

## spécification

DOM Styles de niveau 2 - FEUILLE DE STYLES
