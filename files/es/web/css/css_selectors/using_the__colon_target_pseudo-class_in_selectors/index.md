---
title: Usando la pseudo-clase :target en selectores
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
---

When a URL points at a specific piece of a document, it can be difficult to ascertain. Find out how you can use some simple CSS to draw attention to the target of a URL and improve the user's experience. {{CSSRef}}

Como ayuda para identificar el destino de un enlace que apunta a una parte específica de un documento, los [Selectores CSS3](http://www.w3.org/TR/css3-selectors/#target-pseudo) incluyen la [pseudo-clase](/en/CSS/Pseudo-classes) {{ Cssxref(":target") }}.

### Seleccionando un objetivo (target)

La pseudo-clase `{{ Cssxref(":target") }}` es usada para estilizar el elemento objetivo de una URI que contiene un identificador de fragmento. Por ejemplo, la URI `http://developer.mozilla.org/en/docs/Using_the_:target_selector#Example` contiene el identificador de fragmento `#Example`. En HTML, los identificadores son valores de los atributos `id` o `name`, pues ambos comparten el mismo espacio de nombres. Por lo tanto, la URI de ejemplo apuntará al encabezado "Example" en este documento.

Supongamos que se quiere estilizar cualquier elemento `h2` que sea el objetivo de una URI, pero no queremos que cualquier otro elemento tenga esos mismos estilos. Es así de simple:

```
h2:target {font-weight: bold;}
```

También es posible crear estilos específicos para fragmentos particulares del documento. Esto se hace usando el mismo valor del identificador que se encuentra en la URI. Así, para añadir un borde al fragmento `#Example`, escribiremos:

```
#Example:target {border: 1px solid black;}
```

### Aplicando estilos a todos los elementos objetivo

Si lo que se intenta es crear un estilo que cubra a todos los elementos objetivo, se puede usar el selector universal:

```
:target {color: red;}
```

### Ejemplo

En el siguiente ejemplo, hay cinco enlaces que apuntan a elementos en el mismo documento. Seleccionar el enlace "First", por ejemplo, causará que `<h1 id="one">` sea el elemento objetivo. Nótese que el documento puede desplazarse a una nueva posición, pues los elementos objetivo están ubicados en la parte superior de la ventana del navegador cuando es posible.

```
<h4 id="one">...</h4> <p id="two">...</p>
<div id="three">...</div> <a id="four">...</a> <em id="five">...</em>

<a href="#one">First</a>
<a href="#two">Second</a>
<a href="#three">Third</a>
<a href="#four">Fourth</a>
<a href="#five">Fifth</a>
```

### Conclusión

En los casos en los que un identificador de fragmento apunte a una porción del documento, los lectores pueden confundirse sobre qué parte del documento se supone que están leyendo. Darle un estilo particular al objetivo de la URI le resta confusión al lector, o incluso la elimina.

### Enlaces relacionados

- [Selectores CSS3 #target-pseudo](http://www.w3.org/TR/css3-selectors/#target-pseudo)
- [Referencia CSS :target](/es/CSS/:target)

### Información del Documento Original

- Autor(es): Eric Meyer, Evangelista de Estándares, Netscape Communications
- Información Original de Copyright: Copyright © 2001-2003 Netscape. Todos los derechos reservados.
- Nota: El artículo en inglés era originalmente parte del sitio DevEdge.
