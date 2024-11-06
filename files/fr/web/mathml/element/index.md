---
title: Référence des éléments MathML
slug: Web/MathML/Element
---

{{MathMLRef}}

Ce document est une liste, par ordre alphabétique, des éléments de **présentation** MathML.

La locution « **élement de présentation** » est utilisée pour décrire l'organisation et la mise en forme d'une formule mathématique. Les **éléments de contenus**, quant à eux, fournissent le sens mathématique inhérent à la formule et ne sont pas censés être affichés par l'interpréteur MathML parser (voir [bug Firefox 276028](https://bugzil.la/276028)). Si vous souhaitez avoir plus d'informations sur les éléments de contenus, il est conseillé de lire le [chapitre 4](http://www.w3.org/TR/MathML3/chapter4.html) de la spécification [MathML 3](http://www.w3.org/TR/MathML3/).

### math

- {{MathMLElement("math")}} (Élément racine)

### A

- {{MathMLElement("maction")}} (Actions liées au sous-expressions)
- {{MathMLElement("maligngroup")}} (Groupe d'alignement)
- {{MathMLElement("malignmark")}} (Points d'alignement)

### E

- {{MathMLElement("menclose")}} (Contenus groupés avec un même symbole)
- {{MathMLElement("merror")}} (Messages d'erreurs de syntaxe joints)

### F

- {{MathMLElement("mfenced")}} (Parenthèses) {{deprecated_inline}}
- {{MathMLElement("mfrac")}} (Fraction)

### G

- {{MathMLElement("mglyph")}} (Affichage de symboles non-standard)

### I

- {{MathMLElement("mi")}} (Identifiant)

### L

- {{MathMLElement("mlabeledtr")}} (Ligne étiquetée dans un tableau ou une matrice)
- {{MathMLElement("mlongdiv")}} (Notation pour une division longue)

### M

- {{MathMLElement("mmultiscripts")}} (indices, exposants et indices de tenseurs simultanés)

### N

- {{MathMLElement("mn")}} (Nombre)

### O

- {{MathMLElement("mo")}} (Opérateur)
- {{MathMLElement("mover")}} (Caractère(s) de surlignement)

### P

- {{MathMLElement("mpadded")}} (Espacement autour du contenu)
- {{MathMLElement("mphantom")}} (Contenu invisible avec un espace réservé)

### R

- {{MathMLElement("mroot")}} (Racine avec une puissance)
- {{MathMLElement("mrow")}} (Expressions groupées en lignes)

### S

- {{MathMLElement("ms")}} (Chaine de caractères littérale)
- {{MathMLElement("mscarries")}} (Annotations telles que les retenues)
- {{MathMLElement("mscarry")}} (Retenue seule, élément fils de {{MathMLElement("mscarries")}})
- {{MathMLElement("msgroup")}} (Lignes regroupant des éléments {{MathMLElement("mstack")}} et {{MathMLElement("mlongdiv")}})
- {{MathMLElement("msline")}} (Ligne horizontale au sein d'un élément {{MathMLElement("mstack")}})
- {{MathMLElement("mspace")}} (Espace)
- {{MathMLElement("msqrt")}} (Racine carrée)
- {{MathMLElement("msrow")}} (Lignes d'un élément {{ MathMLElement("mstack")}})
- {{MathMLElement("mstack")}} (Alignement empilé)
- {{MathMLElement("mstyle")}} (Variation de mise en forme)
- {{MathMLElement("msub")}} (Indice)
- {{MathMLElement("msup")}} (Exposant)
- {{MathMLElement("msubsup")}} (Paire avec un indice et un exposant)

### T

- {{MathMLElement("mtable")}} (Tableau ou matrice)
- {{MathMLElement("mtd")}} (Cellule d'un tableau ou d'une matrice)
- {{MathMLElement("mtext")}} (Texte)
- {{MathMLElement("mtr")}} (Ligne d'un tableau ou d'une matrice)

### U

- {{MathMLElement("munder")}} (Caractère(s) de soulignement)
- {{MathMLElement("munderover")}} (Paire pour le soulignement et le surlignement simultané)

### Autres éléments

- {{MathMLElement("semantics")}} (Conteneur d'annotations sémantiques)
- [`<annotation>`](/fr/docs/MathML/Element/semantics) (annotation de données)
- [`<annotation-xml>`](/fr/docs/MathML/Element/semantics) (annotation XML)

## Éléments de présentation de MathML par catégories

### Éléments racine

- {{MathMLElement("math")}}

### Éléments textuels

- {{MathMLElement("mglyph")}}
- {{MathMLElement("mi")}}
- {{MathMLElement("mn")}}
- {{MathMLElement("mo")}}
- {{MathMLElement("ms")}}
- {{MathMLElement("mspace")}}
- {{MathMLElement("mtext")}}

### Éléments de présentation générale

- {{MathMLElement("menclose")}}
- {{MathMLElement("merror")}}
- {{MathMLElement("mfenced")}} {{deprecated_inline}}
- {{MathMLElement("mfrac")}}
- {{MathMLElement("mpadded")}}
- {{MathMLElement("mphantom")}}
- {{MathMLElement("mroot")}}
- {{MathMLElement("mrow")}}
- {{MathMLElement("msqrt")}}
- {{MathMLElement("mstyle")}}

### Éléments d'écriture et de limite

- {{MathMLElement("mmultiscripts")}}
- {{MathMLElement("mover")}}
- {{MathMLElement("mprescripts")}}
- {{MathMLElement("msub")}}
- {{MathMLElement("msubsup")}}
- {{MathMLElement("msup")}}
- {{MathMLElement("munder")}}
- {{MathMLElement("munderover")}}
- {{MathMLElement("none")}}

### Éléments de présentation tabulaire

- {{MathMLElement("maligngroup")}}
- {{MathMLElement("malignmark")}}
- {{MathMLElement("mlabeledtr")}}
- {{MathMLElement("mtable")}}
- {{MathMLElement("mtd")}}
- {{MathMLElement("mtr")}}

### Éléments de mathématiques élémentaires

- {{MathMLElement("mlongdiv")}}
- {{MathMLElement("mscarries")}}
- {{MathMLElement("mscarry")}}
- {{MathMLElement("msgroup")}}
- {{MathMLElement("msline")}}
- {{MathMLElement("msrow")}}
- {{MathMLElement("mstack")}}

### Autres éléments

- {{MathMLElement("maction")}}

## Annotations sémantiques

- [`<annotation>`](/fr/docs/Web/MathML/Element/semantics#annotation)
- [`<annotation-xml>`](/fr/docs/Web/MathML/Element/semantics#annotation-xml)
- {{MathMLElement("semantics")}}

## Voir aussi

- [MathML](/fr/docs/Web/MathML)
- [Référence des attributs MathML](/fr/docs/Web/MathML/Attribute)
