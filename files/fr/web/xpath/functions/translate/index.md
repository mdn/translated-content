---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/translate
original_slug: Web/XPath/Fonctions/translate
---
{{ XsltRef() }}

La fonction `translate` évalue une chaîne et un ensemble de caractères à traduire, et retourne la chaîne traduite.

### Syntaxe

    translate( chaîne , abc , XYZ )

### Arguments

- `chaîne`
  - : La chaîne à évaluer.

<!---->

- `abc`
  - : La chaîne de caractères à remplacer.

<!---->

- `XYZ`
  - : La chaîne de caractères utilisée pour le remplacement. Le premier caractère de `XYZ` remplacera chaque occurrence du premier caractère de `abc` qui apparaît dans `chaîne`.

### Retour

La chaîne traduite.

### Notes

XPath note que la fonction `translate` n'est pas une solution suffisante pour la conversion majuscule/minuscule dans tous les langages. Une future version de XPath pourrait fournir des fonctions supplémentaires pour la conversion.

Cependant, `translate` est à l'heure actuelle la fonction la plus proche d'une fonction pouvant convertir une chaîne en bas de casse ou haut de casse.

#### Exemple

    <xsl:value-of select="translate('Le rapide renard.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'") />

#### Sortie

    LE RAPIDE RENARD.

- Si `abc` est plus long que `XYZ`, alors chaque occurrence d'un caractère de `abc` qui n'a pas de correspondance dans `XYZ` sera supprimée.

#### Exemple

    <xsl:value-of select="translate('Le renard rapide.', 'renard', 'panda')" />

#### Sortie

    La pandp pdpia.

- Si `XYZ` contient plus de caractères que `abc`, les caractères supplémentaires sont ignorés.

### Définition

[XPath 1.0, section 4.2](http://www.w3.org/TR/xpath#function-translate).

### Support Gecko

Supportée.
