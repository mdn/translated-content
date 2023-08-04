---
title: number
slug: Web/XSLT/Element/number
---

{{ XsltRef() }}

L'élément `<xsl:number>` compte des éléments de façon séquentielle. Il peut également être utilisé
pour formater rapidement un nombre.

### Syntaxe

```xml
<xsl:number
  count=EXPRESSION
  level="single" | "multiple" | "any"
  from=EXPRESSION
  value=EXPRESSION
  format=FORMAT-CHAÎNE
  lang=XML:CODE-LANG
  letter-value="alphabetic" | "traditional"
  grouping-separator=CARACTÈRE
  grouping-size=NOMBRE />
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `count`
  - : Définit les éléments devant être numérotés de façon séquentielle dans l'arbre source. Il utilise une expression
    XPath.
- `level`

  - : Définit la manière dont les niveaux de l'arbre source doivent pris en compte lors de la génération des
    nombres séquentiels. Les trois valeurs possibles sont&nbsp;: `single`, `multiple` et
    `any`. La valeur par défaut est `single`&nbsp;:

    - `single`
      - : Numérote de façon séquentielle les nœuds descendants d'un même parent, à la manière des éléments d'une
        liste. Le processeur va au premier nœud dans l'axe [`ancestor-or-self`](/fr/XPath/Axes/ancestor-or-self) qui correspond à l'attribut
        `count`, puis compte ce nœud ainsi que tous les nœuds précédents issus de son parent (il
        s'arrête lorsqu'il rencontre une référence à l'attribut `from`, si il en trouve une) qui
        correspond également à l'attribut `count`. Si aucune correspondance n'est trouvée, la
        séquence produite sera une liste vide.
    - `multiple`
      - : Numérote les nœuds avec une séquence composite qui reflète la position hiérarchique du nœud, par exemple
        1.2.2.5. (le format peut être défini avec l'attribut `format`, par exemple A.1.1). Le
        processeur vérifie tous les [`ancestors`](/fr/XPath/Axes/ancestor) du nœud courant
        ainsi que le nœud lui-même, il s'arrête lorsqu'il rencontre une correspondance avec l'attribut
        `from`, si il y en a une. Pour chaque nœud de la liste qui vérifie l'attribut
        `count`, le processeur compte combien il possède de frères vérifiant également cet attribut,
        et ajoute un pour le nœud lui-même. Si aucune correspondance n'est trouvée, la séquence produite sera
        une liste vide.
    - `any` (Non supporté à l'heure actuelle)
      - : Numérote tous les nœuds vérifiant `count` de façon séquentielle, sans considération de
        niveau. Les axes [`ancestor`](/fr/XPath/Axes/ancestor), [`self`](/fr/XPath/Axes/self) et [`preceding`](/fr/XPath/Axes/preceding) sont tous pris en compte. Le processeur
        débute au nœud courant et continue dans l'ordre inverse du document, s'arrêtant s'il rencontre une
        correspondance avec un attribut `from`. Si aucune correspondance avec l'attribut
        `count` n'est trouvé,e la séquence produite sera une liste vide. Ce niveau n'est pas supporté
        à l'heure actuelle.

- from
  - : Définit l'endroit où la numérotation doit débuter. La séquence débute avec le premier descendant du nœud
    vérifiant l'attribut `from`.
- value
  - : Applique un format donné à un nombre. C'est un moyen rapide de formater un nombre fourni par l'utilisateur dans
    un des formats standards de `<xsl:number>`.
- format

  - : Définit le format du nombre généré&nbsp;:

    - format="1"
      - : `1 2 3 …` (C'est le seul format supporté à ce jour)
    - format="01"
      - : `01 02 03 … 09 10 11 …`
    - format="a"
      - : `a b c … y z aa ab …`
    - format="A"
      - : `A B C … Y Z AA AB …`
    - format="i"
      - : `i ii iii iv v …`
    - format="I"
      - : `I II III IV V …`

- lang (Non supporté à l'heure actuelle)
  - : Définit les alphabets pouvant être utilisés pour les formats de numérotation basés sur les lettres.
- letter-value
  - : Permet de lever l'ambiguïté sur les séquences numérotées qui utilisent des lettres. Certaines langues possèdent
    plus d'un système de numérotation utilisant les lettres. Si deux systèmes commencent avec le même glyphe, il
    peut y avoir une ambiguïté. Ce attribut peut avoir la valeur `alphabetic` ou
    `traditional`. La valeur par défaut est `alphabetic`.
- grouping-separator
  - : Définit le caractère devant être utilisé pour les séparations des groupes (par exemple, le séparateur des
    milliers). Le caractère par défaut est la virgule (`,`).
- grouping-size
  - : Définit le nombre de chiffres formant un groupe. La valeur par défaut est `3`.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 7.7](http://www.w3.org/TR/xslt#number).

### Support Gecko

Support partiel. Voir les commentaires ci-dessus.
