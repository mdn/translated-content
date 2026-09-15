---
title: "Elemento HTML `<pre>`: texto preformateado"
short-title: <pre>
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{HTMLSidebar}}

El elemento **`<pre>`** de [HTML](/es/docs/Web/HTML) representa texto preformateado que debe presentarse exactamente como está escrito en el archivo HTML. El texto normalmente se renderiza con una fuente no proporcional, o [monoespaciada](https://es.wikipedia.org/wiki/Tipo_de_letra_monoespaciado).

Los espacios en blanco dentro de este elemento se muestran tal como están escritos, con una excepción. Si se incluyen uno o más caracteres de salto de línea iniciales inmediatamente después de la etiqueta de apertura `<pre>`, el _primer_ carácter de salto de línea se elimina. Esta transformación la realiza el analizador HTML y no se aplica cuando usas {{Glossary("XHTML")}}.

El contenido de texto de los elementos `<pre>` se analiza como HTML, así que si quieres asegurarte de que tu contenido se mantenga como texto sin formato, puede que algunos caracteres de sintaxis, como `<`, deban escaparse usando sus respectivas {{glossary("character reference", "referencias de caracteres")}}. Consulta [escapar caracteres ambiguos](#escapar-caracteres-ambiguos) para más información.

Los elementos `<pre>` suelen contener elementos {{HTMLElement("code")}}, {{HTMLElement("samp")}} y {{HTMLElement("kbd")}}, para representar código de computadora, salida de computadora y entrada del usuario, respectivamente.

Por defecto, `<pre>` es un elemento de [nivel de bloque](/es/docs/Glossary/Block-level_content), es decir, su valor predeterminado de {{cssxref("display")}} es `block`.

{{InteractiveExample("HTML Demo: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
          JE SUIS
          LA  LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Contiene el número _preferido_ de caracteres que debería tener una línea. Aunque técnicamente todavía está implementado, este atributo no tiene efecto visual; para lograr ese efecto, usa CSS {{Cssxref("width")}} en su lugar.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : Es una _sugerencia_ que indica cómo debe manejarse el desbordamiento. En los navegadores modernos esta sugerencia se ignora y no produce ningún efecto visual; para lograr ese efecto, usa CSS {{Cssxref("white-space")}} en su lugar.

## Accesibilidad

Es importante proporcionar una descripción alternativa para cualquier imagen o diagrama creado usando texto preformateado. La descripción alternativa debe describir clara y concisamente el contenido de la imagen o diagrama.

Las personas con condiciones de baja visión que navegan con la ayuda de tecnología de asistencia como un lector de pantalla pueden no entender qué representan los caracteres del texto preformateado cuando se leen en secuencia.

Una combinación de los elementos {{HTMLElement("figure")}} y {{HTMLElement("figcaption")}}, junto con los atributos [ARIA](/es/docs/Web/Accessibility/ARIA) `role` y [`aria-label`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) en el elemento `pre`, permiten que el arte {{Glossary("ASCII")}} preformateado se anuncie como una imagen con texto alternativo, y que `figcaption` sirva como el pie de foto de la imagen.

### Ejemplo

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      ___________________________
  &lt; I'm an expert in my field. &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using
    preformatted text characters.
  </figcaption>
</figure>
```

- [MDN Understanding WCAG, Guideline 1.1 explanations](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Ejemplos

### Ejemplo básico

#### HTML

```html
<p>Using CSS to change the font color is easy.</p>
<pre><code>
body {
  color: red;
}
</code></pre>
```

#### Resultado

{{EmbedLiveSample("Ejemplo_basico")}}

### Escapar caracteres ambiguos

Supongamos que quieres mostrar código HTML dentro de un elemento `<pre>`. Las secuencias de caracteres que definen etiquetas HTML válidas (que empiezan con `<` y terminan con `>`) no se mostrarán. Para mostrar los caracteres de la etiqueta como texto, necesitas escapar (al menos) el carácter `<` usando su referencia de carácter correspondiente, de modo que las secuencias ya no definan etiquetas válidas.

En la práctica, el analizador HTML trata a la mayoría de los caracteres como texto plano salvo en contextos específicos. Por ejemplo, `< code` está bien, pero `<code` se interpretaría mal; `&am;` está bien, pero `&amp;` no. Sin embargo, es una buena práctica escapar todos los caracteres ambiguos para evitar confusiones, especialmente si estás generando HTML de forma programática e inyectando el contenido de `<pre>`. En ese caso, esta es una buena regla general para escapar caracteres:

1. Primero, escribe el contenido tal como quieres que aparezca en el documento HTML.
2. Reemplaza los ampersands (`&`) por `&amp;`. Haz este paso primero, para que los nuevos caracteres `&` generados en el siguiente paso no se escapen también.
3. Reemplaza los caracteres `<` por `&lt;`.

Esto debería lograr que el contenido se muestre como pretendías. El reemplazo de otros caracteres de sintaxis HTML es opcional (como `>` por `&gt;`, `"` por `&quot;`, y `'` por `&apos;`), pero no hace daño.

#### HTML

```html
<pre><code>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;Single Digit Number&quot;
</code></pre>
```

#### Resultado

{{EmbedLiveSample("Escapar_caracteres_ambiguos")}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Contenido de flujo</a
        >, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Contenido de redacción</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Cualquiera</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- {{Glossary("Character reference", "Referencia de carácter")}}
- Elemento relacionado: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
