---
title: "Element : propriété localName"
short-title: localName
slug: Web/API/Element/localName
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

La propriété en lecture seule **`localName`** de l'interface {{DOMxRef("Element")}} retourne la partie locale du nom qualifié d'un élément.

## Valeur

Une chaîne de caractères représentant la partie locale du nom qualifié de l'élément.

## Exemples

(Doit être servi avec un type de contenu XML, tel que `text/xml` ou `application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script><![CDATA[
function test() {
  const text = document.getElementById("text");
  const circle = document.getElementById("circle");

  text.value = `<svg:circle> has:
localName = "${circle.localName}"
namespaceURI = "${circle.namespaceURI}"`;
}
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" fill="#aaaaaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## Notes

Le nom local d'un nœud est la partie du nom qualifié du nœud qui arrive après le signe deux points. Les noms qualifiés sont typiquement utilisés dans XML comme partie de l'espace de noms des documents particuliers XML. Par exemple, dans le nom qualifié `comm:partners`, `partners` est le nom local et `comm` est le préfixe&nbsp;:

```xml
<comm:business id="soda_shop" type="brick_n_mortar" xmlns:comm="http://example.com/comm">
  <comm:partners>
    <comm:partner id="1001">Entrepôt de Sirop de Tony
    </comm:partner>
  </comm:partners>
</comm:business>
```

> [!NOTE]
> Bien que la propriété retourne la casse du stockage DOM interne, qui est en minuscules, notez que la propriété {{DOMxRef("element.tagName","tagName")}} retourne des majuscules pour les éléments HTML dans les DOM HTML.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.tagName")}}
- La propriété {{DOMxRef("Element.namespaceURI")}}
- La propriété {{DOMxRef("Element.prefix")}}
- La propriété {{DOMxRef("Attr.localName")}}
