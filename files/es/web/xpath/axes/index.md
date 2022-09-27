---
title: Ejes
slug: Web/XPath/Axes
tags:
  - Todas_las_Categorías
  - XPath
  - XSLT
translation_of: Web/XPath/Axes
original_slug: Web/XPath/Ejes
---
{{XsltRef}}Existen trece ejes diferentes en la especificación [XPath](/es/XPath). Un eje representa una relación con el nodo de contexto, y se utiliza para localizar nodos relativos a ese nodo en el arbol. Lo siguiente es una descripción resumida de los trece ejes disponibles y el grado de soporte disponible en [Gecko](/es/Gecko).

Para mas información sobre el uso de las expresiones XPath, por favor vea la sección [Para Futuras Lecturas](/es/Transformando_XML_con_XSLT/Para_Futuras_Lecturas) al final del documento de [Transformando XML con XSLT](/es/Transformando_XML_con_XSLT).

- [ancestor](/es/XPath/Ejes/ancestor)
  - : Indica todos los antecesores del nodo de contexto comenzando con el nodo padre y viajando hacia el nodo raiz.
- [ancestor-or-self](/es/XPath/Ejes/ancestor-or-self)
  - : Indica el nodo de contexto y todos sus antecesores, incluyendo el nodo raiz.
- [attribute](/es/XPath/Ejes/attribute)
  - : Indica los atributos del nodo de contexto. Sólo los elementos tienen atributos. Este eje se puede abreviar con el signo (`@`).
- [child](/es/XPath/Ejes/child)
  - : Indica el hijo del nodo de contexto. Si una expresión XPath no especifica un eje, se entiende por defecto. Ya que sólo los nodos raiz o los nodos elementos tienen hijos, cualquier otro uso no seleccionará nada.
- [descendant](/es/XPath/Ejes/descendant)
  - : Indica todos los hijos del nodo de contexto, y todos sus hijos y así sucesivamente. **No** se incluyen los atributos y namespaces - el `parent` de un nodo `attribute` es un nodo elemento, pero los nodos `attribute` no son los hijos de sus padres.
- [descendant-or-self](/es/XPath/Ejes/descendant-or-self)
  - : Indica el nodo de contexto y todos sus descendientes. **No** se incluyen los nodos atributos y namespaces - el `parent` de un nodo `attribute` es un nodo elemento, pero los nodos `attribute` no son los hijos de sus padres.
- [following](/es/XPath/Ejes/following)
  - : Indica todos los nodos que aparecen después del nodo de contexto, excepto cualquier nodo `descendant`, `attribute` y `namespace`.
- [following-sibling](/es/XPath/Ejes/following-sibling)
  - : Indica todos los nodos que tienen el mismo padre que el nodo de contexto y aparecen después del nodo de contexto en el documento de origen.
- [namespace](/es/XPath/Ejes/namespace)_(no soportado)_
  - : Indica todos los nodos que están en el ámbito del nodo de contexto. En este caso, el nodo de contexto debe tener un nodo elemento.
- [parent](/es/XPath/Ejes/parent)
  - : Indica el único nodo que es el padre del nodo de contexto. Se puede abreviar con dos puntos (`..`).
- [preceding](/es/XPath/Ejes/preceding)
  - : Indica todos los nodos que preceden al nodo de contexto en el documento excepto cualquier nodo `ancestor`, `attribute` y `namespace`.
- [preceding-sibling](/es/XPath/Ejes/preceding-sibling)
  - : Indica todos los nodos que tienen el mismo padre que el nodo de contexto y aparecen antes que el nodo de contexto en el documento de origen.
- [self](/es/XPath/Ejes/self)
  - : Indica el nodo de contexto si mismo. Se puede abreviar con un solo punto (`.`).

Categorias

interwiki links
