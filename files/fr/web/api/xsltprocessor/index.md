---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
tags:
  - API
  - DOM
  - DOM Reference
  - Reference
  - TopicStub
  - XSLT
translation_of: Web/API/XSLTProcessor
---
{{APIRef("XSLT")}}

Un **`XSLTProcessor`** applique une transformation de feuille de style [XSLT](/en-US/docs/Web/XSLT) à un document XML pour générer un nouveau document XML. Il fait appel à des méthodes pour charger la feuille de style XSLT, donner des valeurs aux paramètres `<xsl:param>` et pour appliquer les transformations au document.

## Syntaxe

Le constructeur n'a pas de paramètre.

    new XSLTProcessor()

## Méthodes

- `[Throws] void` [`XSLTProcessor.importStylesheet`](/fr/docs/Web/API/XSLTProcessor/importStylesheet)`(`[`Node`](/fr/docs/Web/API/Node) `styleSheet)`
  - : Importe une feuille de style XSLT. Si le nœud passé en argument est un nœud de document, vous pouvez passer une transformation XSL complète ou un [transformation d'élèment résultant](http://www.w3.org/TR/xslt#result-element-stylesheet); sinon, il doit s'agir d'un élèment `<xsl:stylesheet>` ou `<xsl:transform>`.
- `[Throws]` [`DocumentFragment`](/fr/docs/Web/API/DocumentFragment) [`XSLTProcessor.transformToFragment`](/fr/docs/Web/API/XSLTProcessor/transformToFragment)`(`[`Node`](/fr/docs/Web/API/Node) `source`, [`Document`](/fr/docs/Web/API/Document) `owner)`
  - : Transforme la source du nœud en applicant la fonction {{domxref("XSLTProcessor.importStylesheet()")}}. Le document propriétaire du fragment de document résultant est le nœud propriétaire.
- [`[Throws]`](/fr/docs/Mozilla/WebIDL_bindings#Throws) [`Document`](/fr/docs/Web/API/Document) [`XSLTProcessor.transformToDocument`](/fr/docs/Web/API/XSLTProcessor/transformToDocument)`(`[`Node`](/fr/docs/Web/API/Node) `source)`

  - : Transforme la source du nœud en appliquant la feuille de style donnée lors de l'importation à l'aide de la fonction {{domxref ("XSLTProcessor.importStylesheet ()")}}.

    L'objet résultant dépend de la [méthode de sortie](http://www.w3.org/TR/xslt#output) de la feuille de style :

    | Méthode de sortie | Type de résultat                                                                                                    |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `html`            | {{domxref("HTMLDocument")}}                                                                                |
    | `xml`             | {{domxref("XMLDocument")}}                                                                                |
    | `text`            | {{domxref("XMLDocument")}} avec un seul élèment racine `<transformiix:result>` avec le texte comme enfant |

- `[Throws] void` [`XSLTProcessor.setParameter`](/fr/docs/Web/API/XSLTProcessor/setParameter)`(`[`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `namespaceURI`, [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `localName, any value)`
  - : Définit un paramètre dans la feuille de style XSLT qui a été importée. (Définit la valeur d'un `<xsl:param>`.) Une valeur nulle pour `namespaceURI` sera traitée comme une chaîne vide.
- `[Throws] any` [`XSLTProcessor.getParameter`](/fr/docs/Web/API/XSLTProcessor/getParameter)`(`[`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `namespaceURI`, [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `localName)`
  - : Récupére un paramètre de la feuille de style XSLT. Une valeur nulle pour `namespaceURI` sera traitée comme une chaîne vide.
- `[Throws] void` [`XSLTProcessor.removeParameter`](/fr/docs/Web/API/XSLTProcessor/removeParameter)`(`[`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `namespaceURI`, [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) `localName)`
  - : Supprime le paramètre s'il a déjà été défni. Le `XSLTProcessor` utilisera alors la valeur par défaut du paramètre. Si une valeur nulle est donnée pour `namespaceURI`, elle sera traitée comme une chaîne vide.
- `void` [`XSLTProcessor.clearParameters()`](/fr/docs/Web/API/XSLTProcessor/clearParameters)
  - : Supprime tous les paramètres définis dans le `XSLTProcessor`. Le `XSLTProcessor` utilisera alors les valeurs par défaut spécifiées dans la feuille de style XSLT.
- `void` [`XSLTProcessor.reset()`](/fr/docs/Web/API/XSLTProcessor/reset)
  - : Supprime tous les paramétres et feuilles de style du `XSLTProcessor`.

## Propriétés

### Propriétés non-apparentes au Web

Les propriétés suivantes sont [`[ChromeOnly]`](/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly) et ne sont pas apparentes au contenu Web :

- `[ChromeOnly] attribute unsigned long` [`XSLTProcessor.flags`](/fr/docs/Web/API/XSLTProcessor/flags)

  - : Drapeaux qui modifient le comportement du processeur. Pas de réinitialisation en appelant {{domxref("XSLTProcessor.reset()")}}. Valeur par défaut: `0`

    Possible values are:

    | Nom                 | Valeur | Effet                                                                                   |
    | ------------------- | ------ | --------------------------------------------------------------------------------------- |
    | (None)              | `0`    | Aucun                                                                                   |
    | `DISABLE_ALL_LOADS` | `1`    | Désactiver le chargement de documents externes (par ex. `<xsl:import>` et `document()`) |

## Exemples

1.  [Exemple simple](/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/Basic_Example)
2.  [Exemple avancé](/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/Advanced_Example)
3.  [Exemple additionnel](/fr-FR/docs/XSLT/XSLT_JS_Interface_in_Gecko/JavaScript_XSLT_Bindings)

## Spécifications

_Ne fait partie d'aucune spécification._ Il s'agit d'une interface propriétaire qui provient de Gecko.

## Gecko IDL

- `{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}`
- `{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}`

## Compatibilité des navigateurs

{{Compat("api.XSLTProcessor")}}

## Voir aussi

- [Utilisation de l'interface JavaScript de Mozilla pour les transformations XML](/fr-FR/docs/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
