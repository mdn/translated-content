---
title: Element.localName
slug: Web/API/Element/localName
tags:
  - API
  - DOM
  - Element
  - Nom
  - Propriétés
  - XML
  - local
translation_of: Web/API/Element/localName
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Element.localName`** renvoie la partie locale du nom qualifié d'un élément.

> **Note :** Dans les versions précédentes de la spécification DOM, cet API était défini dans l'interface {{domxref("Node")}}.

## Syntaxe

    name = element.localName

### Valeur renvoyée

Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la partie locale du nom qualifié de l'élément.

## Exemple

(Doit être servi avec un type de contenu XML, tel que `text/xml` ou `application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
  function test() {
    var text = document.getElementById('text');
    var circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## Notes

Le nom local d'un noeud est la partie du nom qualifié du noeud qui arrive après le signe deux points. Les noms qualifiés sont typiquement utilisés dans XML comme partie de l'espace de noms des documents particuliers XML. Par exemple, dans le nom qualifié `ecomm:partners`, `partners` est le nom local et `ecomm` est le préfixe :

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> **Note :** Dans {{Gecko("1.9.2")}} et antérieurs, la propriété renvoie la version majuscule du nom local pour les éléments HTML dans les DOM HTML (par opposition aux éléments XHTML dans les DOM XML). Dans les versions plus tardives, en conformité avec HTML5, la propriété renvoie dans la cas du stockage interne du DOM, en minuscule pour les éléments HTML dans les DOM HTML et les éléments XHTML dans les DOM XML. La propriété {{domxref("element.tagName","tagName")}} continue à renvoyer la casse majuscule pour les éléments HTML dans les DOM HTML.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-localname', 'Element.localName')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Element.localName")}}

## Voir aussi

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
- {{domxref("Node.localName")}}
