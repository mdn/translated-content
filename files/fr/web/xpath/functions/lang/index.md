---
title: lang
slug: Web/XPath/Functions/lang
---

{{ XsltRef() }}

La fonction `lang` détermine si le nœud de contexte correspond à la langue indiquée et retourne le booléen `true` ou `false`.

### Syntaxe

```
lang( chaîne )
```

### Arguments

- `chaîne`
  - : Le code de langue ou de localisation (langue et pays) à vérifier.

### Retour

`true` si le noeud de contexte est dans la langue donnée, `false` autrement.

### Notes

- La langue d'un nœud est déterminée par son attribut `xml:lang`. Si le nœud courant ne possède pas cet attribut, alors la valeur de l'attribut `xml:lang` du plus proche ancêtre le possédant déterminera la langue du nœud courant. Si la langue ne peut être déterminée (aucun ancêtre avec un attribut `xml:lang`), cette fonction retourne le booléen `false`.

<!---->

- Si la `chaîne` donnée ne spécifie pas de code de pays, cette fonction sélectionnera les nœuds dans la langue spécifiée, suivie éventuellement de n'importe quel code de pays. La réciproque n'est pas vraie.

Regardons le code XML suivant&nbsp;:

```xml
<p xml:lang="en">I went up a floor.</p>
<p xml:lang="en-GB">I took the lift.</p>
<p xsl:lang="en-US">I rode the elevator.</p>
```

et ce modèle XSL&nbsp;:

```xml
<xsl:value-of select="count(//p[lang('en')])" />
<xsl:value-of select="count(//p[lang('en-GB')])" />
<xsl:value-of select="count(//p[lang('en-US')])" />
<xsl:value-of select="count(//p[lang('de')])" />
```

La sortie sera&nbsp;:

```
3
1
1
0
```

### Définition

[XPath 1.0, section 4.3](http://www.w3.org/TR/xpath#function-lang).

### Support Gecko

Supporté.
