---
title: applet
slug: orphaned/Web/HTML/Element/applet
original_slug: Web/HTML/Element/applet
---

### Definición

- Permite añadir un applet Java en un documento HTML. Es un elemento [Desaprobado](/es/HTML/Elemento/Tipos_de_elementos#Desaprobado) En su lugar debe usarse el elemento [object](/es/HTML/Elemento/object), su uso solo es válido declarando el dtd transicional.
  - : **Sus etiquetas son**: \<applet> y \</applet> (ambas obligatorias)

    **Crea una caja**: [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea).

    **Está definido como**: [Elemento especial](/es/HTML/Elemento/Tipos_de_elementos#Especiales). [Desaprobado](/es/HTML/Elemento/Tipos_de_elementos#Desaprobado)

    **Puede contener** cero o más elementos param o del tipo 'en flujo'.

#### Atributos

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th>atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
    <tr>
      <th colspan="4">Genericos</th>
    </tr>
    <tr>
      <td><code style="color: green">title</code></td>
      <td>Texto</td>
      <td>Implícito</td>
      <td>Título consultivo del elemento.</td>
    </tr>
    <tr>
      <td><code style="color: green">style</code></td>
      <td>Reglas de estilo CSS</td>
      <td>Implícito</td>
      <td>Información de estilo en línea.</td>
    </tr>
    <tr>
      <td><code style="color: green">id</code></td>
      <td>Un 'nombre'</td>
      <td>Implícito</td>
      <td>Identificador único a nivel de documento.</td>
    </tr>
    <tr>
      <td><code style="color: green">class</code></td>
      <td>Lista de clases CSS</td>
      <td>implícito</td>
      <td>Identificador a nivel de documento.</td>
    </tr>
    <tr>
      <td><code style="color: green">dir</code></td>
      <td>Uno de los siguientes: "ltr" o "rtl"</td>
      <td>Implícito</td>
      <td>Dirección del texto.</td>
    </tr>
    <tr>
      <td><code style="color: green">lang</code></td>
      <td>Código de idioma</td>
      <td>Implícito</td>
      <td>Información sobre el idioma.</td>
    </tr>
    <tr>
      <td colspan="4">
        <strong>Eventos</strong>:
        <code style="color: green"
          >onclick, ondblclick, onmousedown, onmouseup, onmouseover,
          onmousemove, onmouseout, onkeypress, onkeydown, onkeyup.</code
        >
      </td>
    </tr>
    <tr>
      <th colspan="4">Específicos</th>
    </tr>
    <tr>
      <td colspan="4">No tiene</td>
    </tr>
    <tr>
      <th colspan="4">De transición</th>
    </tr>
    <tr>
      <td><code style="color: green">declare</code></td>
      <td>(declare)</td>
      <td>Implícito</td>
      <td>Información sobre el idioma.</td>
    </tr>
    <tr>
      <td><code style="color: green">classid</code></td>
      <td>Una dirección</td>
      <td>Implícito</td>
      <td>Identifica una implementación.</td>
    </tr>
    <tr>
      <td><code style="color: green">codebase</code></td>
      <td>Una dirección</td>
      <td>Implícito</td>
      <td>URI base para classid, datos, archivo.</td>
    </tr>
    <tr>
      <td><code style="color: green">data</code></td>
      <td>Una dirección</td>
      <td>Implícito</td>
      <td>Referencia a los datos del objeto.</td>
    </tr>
    <tr>
      <td><code style="color: green">type</code></td>
      <td>Tipo MIME</td>
      <td>Implícito</td>
      <td>Tipo de contenido de los datos.</td>
    </tr>
    <tr>
      <td><code style="color: green">codetype</code></td>
      <td>Tipo MIME</td>
      <td>Implícito</td>
      <td>Tipo de contenido del código.</td>
    </tr>
    <tr>
      <td><code style="color: green">archive</code></td>
      <td>Direcciones</td>
      <td>Implícito</td>
      <td>Lista de URIs separados por espacios.</td>
    </tr>
    <tr>
      <td><code style="color: green">standby</code></td>
      <td>Texto</td>
      <td>Implícito</td>
      <td>Mensaje a mostrar durente la carga.</td>
    </tr>
    <tr>
      <td><code style="color: green">height</code></td>
      <td>Tamaño</td>
      <td>Implícito</td>
      <td>Especificar nueva altura.</td>
    </tr>
    <tr>
      <td><code style="color: green">width</code></td>
      <td>Tamaño</td>
      <td>Implícito</td>
      <td>Especificar nueva anchura.</td>
    </tr>
    <tr>
      <td><code style="color: green">usemap</code></td>
      <td>Una dirección</td>
      <td>Implícito</td>
      <td>Usar mapa de imágenes en el cliente.</td>
    </tr>
    <tr>
      <td><code style="color: green">name</code></td>
      <td>CDATA</td>
      <td>Implícito</td>
      <td>Enviar como parte de un formulario.</td>
    </tr>
    <tr>
      <td><code style="color: green">tabindex</code></td>
      <td>Número</td>
      <td>Implícito</td>
      <td>Posición en el orden de tabulación.</td>
    </tr>
    <tr>
      <td><code style="color: green">align</code></td>
      <td>
        Uno de los siguientes: "top", "middle", "bottom", "left", "right".
      </td>
      <td>Implícito</td>
      <td>Alineación vertical u horizontal.</td>
    </tr>
    <tr>
      <td><code style="color: green">border</code></td>
      <td>Píxeles</td>
      <td>Implícito</td>
      <td>Grosor del borde del vínculo.</td>
    </tr>
    <tr>
      <td><code style="color: green">hspace</code></td>
      <td>Píxeles</td>
      <td>Implícito</td>
      <td>espacio horizontal.</td>
    </tr>
    <tr>
      <td><code style="color: green">vspace</code></td>
      <td>Píxeles</td>
      <td>Implícito</td>
      <td>Espacio vertical.</td>
    </tr>
    <tr>
      <td><code style="color: green">%reserved;</code></td>
      <td></td>
      <td></td>
      <td>Reservado para posibles usos futuros.</td>
    </tr>
    <tr>
      <th>atributo</th>
      <th colspan="2">valor</th>
      <th>descripción</th>
    </tr>
  </tbody>
</table>

### Ejemplos

```
 Ejemplo con applet:

   <applet code="loquesea.class"
            width="500" height="500">
       <!-- Aquí los contenidos alternativos por si falla el applet. -->
  </applet>

  Lo mismo pero usando el elemento object:

  <object  codetype="application/java"
            classid="java:loquesea.class"
            width="500" height="500">
     <!-- Aquí los contenidos alternativos por si falla el applet. -->
  </object>
```

### Comentarios

El contenido de applet actúa como información alternativa para agentes de usuario que no soporten este elemento o que estén configurados para no soportar applets. En cualquier otro caso los agentes de usuario deben ignorar el contenido.

### Referencia

- El elemento [**applet** en la especificación](http://html.conclase.net/w3c/html401-es/struct/objects.html#edef-APPLET) de html 4.01

secciones futuras: == Soporte de los navegadores == == Valores por defecto y visualización en Firefox ==
