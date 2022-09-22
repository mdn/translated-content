---
title: substring
slug: Web/XPath/Functions/substring
translation_of: Web/XPath/Functions/substring
original_slug: Web/XPath/Funciones/substring
---
{{ XsltRef() }}

La función `substring` devuelve una parte de una cadena dada.

### Sintaxis

```
substring( string , start [, length] )
```

### Argumentos

- _`string`_
  - : La cadena a evaluar.

- _`start`_
  - : La posición dentro de _`string`_ donde comienza la subcadena.

- _`length`_ (opcional)
  - : La longitud de la subcadena. Si se omite, la cadena devuelta contendrá todos los carácteres desde la posición _`start`_ hasta el final de _`string`_.

### Devuelve

Una cadena.

### Notas

Como en otras funciones XPath, la posición no está basada en cero. El primer carácter de la cadena tiene la posición 1, no 0.

### Definido

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring)

### Soporte en Gecko

Soportado.
