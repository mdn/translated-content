---
title: Element.localName
slug: Web/API/Element/localName
---

{{APIRef}}

La propiedad únicamente de lectura `Element.localName` devuelve la parte local del nombre calificado de un objeto.

> [!NOTE]
> Antes de DOM4 esta API fué definida dentro de la interfaz{{domxref("Node")}}.

## Sintasix

```
name = element.localName
```

### Valor de Retorno

{{domxref("DOMString")}} que representa la parte local del nombre cualificado del elemento.

## Ejemplo

(debe ser servido con contenido tipo XML , como `text/xml` o `application/xhtml+xml`.)

```xml
<html xmlns="https://www.w3.org/1999/xhtml"
      xmlns:svg="https://www.w3.org/2000/svg">
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

## Notas

El nombre local de un nodo es la parte del nombre completo del nodo que va situado después de los dos puntos. Nombres calificados se utilizan normalmente en XML como parte del espacio de los nombres (s) de los documentos particulares XML . Por ejemplo, en el nombre calificado ecomm : socios, socios es el nombre local y ecomm es el prefijo:

```xml
1  <ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
2   <ecomm:partners>
3    <ecomm:partner id="1001">Tony's Syrup Warehouse
4     </ecomm:partner>
5    </ecomm:partner>
6  </ecomm:business>
```

> [!NOTE]
> En Gecko 1.9.2 y anteriores,devuelve la versión en mayúsculas del nombre local para elementos HTML en HTML DOMs (en contraposición a elementos XHTML en XML DOMs). En versiones posteriores, en concordancia con HTML5,la propiedad devuelve en el caso de almacenamiento interno DOM , minúscula para ambos elementos HTML en HTML DOM y elementos XHTML en DOM XML. La propiedad {{domxref("element.tagName","tagName")}} continua devolviéndolo en mayúsculas para elementos HTML en HTML DOMs.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
- {{domxref("Node.localName")}}
