---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
---

{{Non-standard_header}}{{SeeCompatTable}}{{APIRef("XSLT")}}

Un objet **`XSLTProcessor`** applique une transformation de feuille de style [XSLT](/fr/docs/Web/XSLT) à un document XML pour générer un nouveau document XML. Il dispose de méthodes pour charger la feuille de style XSLT, donner des valeurs aux paramètres `<xsl:param>` et pour appliquer les transformations aux documents.

## Syntaxe

Le constructeur n'a pas de paramètre.

```js
new XSLTProcessor();
```

## Méthodes

- [`importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet)
  - : Importe une feuille de style XSLT. Si le nœud passé en argument est un nœud de document, vous pouvez passer une transformation XSL complète ou une [transformation d'élément résultant](https://www.w3.org/TR/xslt/#result-element-stylesheet)&nbsp;; sinon, il doit s'agir d'un élément `<xsl:stylesheet>` ou `<xsl:transform>`.
- [`transformToFragment()`](/fr/docs/Web/API/XSLTProcessor/transformToFragment)
  - : Transforme la source du nœud en appliquant la fonction [`importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet). Le document propriétaire du fragment de document résultant est le nœud propriétaire.
- [`transformToDocument()`](/fr/docs/Web/API/XSLTProcessor/transformToDocument)

  - : Transforme la source du nœud en appliquant la feuille de style donnée lors de l'importation à l'aide de la fonction [`importStylesheet()`](/fr/docs/Web/API/XSLTProcessor/importStylesheet).

    L'objet résultant dépend de la [méthode de sortie](https://www.w3.org/TR/xslt/#output) de la feuille de style&nbsp;:

    | Méthode de sortie | Type de résultat                                                                                                             |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
    | `html`            | [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument)                                                                              |
    | `xml`             | [`XMLDocument`](/fr/docs/Web/API/XMLDocument)                                                                                |
    | `text`            | [`XMLDocument`](/fr/docs/Web/API/XMLDocument) avec un seul élément racine `<transformiix:result>` avec le texte comme enfant |

- [`setParameter()`](/fr/docs/Web/API/XSLTProcessor/setParameter)
  - : Définit un paramètre dans la feuille de style XSLT qui a été importée (définit la valeur d'un `<xsl:param>`). Une valeur nulle pour le paramètre `namespaceURI` sera traitée comme une chaîne vide.
- [`getParameter()`](/fr/docs/Web/API/XSLTProcessor/getParameter)
  - : Récupère un paramètre de la feuille de style XSLT. Une valeur nulle pour le paramètre `namespaceURI` sera traitée comme une chaîne vide.
- [`removeParameter()`](/fr/docs/Web/API/XSLTProcessor/removeParameter)
  - : Supprime le paramètre s'il a déjà été défini. L'objet `XSLTProcessor` utilisera alors la valeur par défaut du paramètre. Si une valeur nulle est donnée pour le paramètre `namespaceURI`, elle sera traitée comme une chaîne vide.
- [`clearParameters()`](/fr/docs/Web/API/XSLTProcessor/clearParameters)
  - : Supprime tous les paramètres définis dans l'objet `XSLTProcessor`. L'objet `XSLTProcessor` utilisera alors les valeurs par défaut spécifiées dans la feuille de style XSLT.
- [`reset()`](/fr/docs/Web/API/XSLTProcessor/reset)
  - : Supprime tous les paramètres et feuilles de style de l'objet `XSLTProcessor`.

## Exemples

- [Exemple simple](/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example)
- [Exemple avancé](/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example)
- [Exemple complémentaire](/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings)

## Spécifications

_Ne fait partie d'aucune spécification._ Il s'agit d'une interface propriétaire qui provient de Gecko.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation de l'interface JavaScript de Mozilla pour les transformations XML](/fr/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
