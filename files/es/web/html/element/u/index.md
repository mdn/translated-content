---
title: u
slug: Web/HTML/Element/u
---

### Definición

- Muestra el texto subrayado.

  - : **Sus etiquetas son**: \<u> y \</u> (Ambas obligatorias)

    **Crea una caja**: [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea).

    - **Está definido como**

      - : [de estilo de fuente](/es/HTML/Elemento/Tipos_de_elementos#de_estilo_de_fuente).

        [Desaprobado](/es/HTML/Elemento/Tipos_de_elementos#Desaprobado)

    **Puede contener**: cero o más elementos [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea)

##### Atributos Genéricos

- title (título del elemento)
- style (información de estilo en línea)

**Identificadores**: id, class (identificadores a nivel de documento)

**Idioma**: lang (información sobre el idioma), dir (dirección del texto)

**Eventos**: onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup.

##### Atributos Específicos - No tiene

##### Atributos Transicionales - No tiene

### Ejemplos

Uso de u:

```
  <p>
       Texto normal y... <u>Texto subrayado</u>
  </p>
```

Uso de CSS:

```
  <p>
       Texto normal y... <span style='text-decoration: underline'>Texto subrayado</span>
  </p>
```

### Comentarios

Para obtener el mismo resultado puede usarse La propiedad CSS text-decoration: underline;

Si por algún motivo necesita usar elementos desaprobados como u, recuerde que debe declarar un DOCTYPE transicional.

> **Advertencia:** DESAPROBADO

de momento no funciona
