---
title: dl
slug: Web/HTML/Element/dl
---

{{HTMLSidebar}}

El elemento **HTML `<dl>`** representa una lista descriptiva. El elemento encierra una lista de grupos de términos (especificados con el uso del elemento {{HTMLElement("dt")}}) y de descripciones (proveídas con elementos {{HTMLElement("dd")}}). Algunos usos comunes para este elemento son implementar un glosario o para desplegar metadatos (lista de pares llave-valor).

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

El contenido para este ejemplo interactivo se encuentra almacenado en un repositorio GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, por favor clona [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples)y envía la petición de extración (pull request).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido de flujo</a
        >, y si los elementos hijos de <code>&#x3C;dl></code> incluyen un grupo
        nombre-valor, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <p>
          Ya sea: Cero o más grupos cada uno consistiendo en uno o más elementos
          {{HTMLElement("dt")}} seguidos por uno o más elementos
          {{HTMLElement("dd")}}, opcionalmente intercalados con elementos
          {{HTMLElement("script")}} y elementos
          {{HTMLElement("template")}}.<br />O: Uno o más elementos
          {{HTMLElement("div")}}, opcionalmente entremezclados con
          elementos {{HTMLElement("script")}} y elementos
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de Tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Los atributos de este elemento incluyen los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

## Ejemplos

### Término sencillo y descripción

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

Salida:

![Image:HTML-dl1.png](html-dl1.png)

### Múltiples términos, descripción sencilla

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

Salida:

![Image:HTML-dl2.png](html-dl2.png)

### Término sencillo, múltiples descripciones

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

Output:

![Image:HTML-dl3.png](html-dl3.png)

### Múltiples términos y descripciones

También es posible definir múltiples términos con múltiples descripciones correspondientes, combinando los ejemplos de arriba.

### Metadatos

Las listas descriptivas son útiles para desplegar metadatos como una lista de pares llave-valor.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

Tip: Puede ser útil definir un separador llave-valor en el CSS, como:

```css
dt::after {
  content: ": ";
}
```

### Encapsulado de grupos nombre-valor en elementos {{HTMLElement("div")}}

[WHATWG](/es/docs/Glossary/WHATWG) HTML permite encapsular cada grupo nombre-valor de un elemento {{HTMLElement("dl")}} en un elemento {{HTMLElement("div")}}. Esto puede ser útil cuando se utilizan [microdatos](/es/docs/Web/HTML/Microdata), o cuando [atributos globales](/es/docs/Web/HTML/Atributos_Globales) apliquen a todo el grupo, o por motivos de estilo.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

## Notas

No use este elemento (ni elementos {{HTMLElement("ul")}}) solo para crear sangría en una página. Si bien funciona, es una mala práctica y obscurece el signinifcado de las listas descriptivas.

Para cambiar la indentación de un término, usa la propiedad {{cssxref("margin")}} de [CSS](/es/docs/Web/CSS).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{HTMLElement("dt")}} element
- {{HTMLElement("dd")}} element
