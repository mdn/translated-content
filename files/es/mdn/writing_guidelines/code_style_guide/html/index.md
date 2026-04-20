---
title: Directrices para escribir ejemplos de código HTML
short-title: Ejemplos HTML
slug: MDN/Writing_guidelines/Code_style_guide/HTML
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Las siguientes directrices cubren cómo escribir código de ejemplo de HTML para MDN Web Docs.

## Directrices generales para ejemplos de código HTML

### Elección de un formato

Las opiniones sobre la sangría correcta, el espacio en blanco y las longitudes de línea siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción para crear y mantener contenido.

En MDN Web Docs, usamos [Prettier](https://prettier.io/) como formateador de código para mantener el estilo de código consistente (y evitar discusiones fuera de tema). Puede consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debe seguir.

## Documento HTML completo

> [!NOTE]
> Las directrices en esta sección solo se aplican cuando necesita mostrar un documento HTML completo. Generalmente, un fragmento es suficiente para demostrar una característica. Cuando usa la [macro EmbedLiveSample](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples), solo incluya el fragmento HTML; se insertará automáticamente en un documento HTML completo cuando se muestre.

### Doctype

Debe usar el {{Glossary("Doctype", "doctype")}} de HTML5.

```html example-good
<!doctype html>
```

### Idioma del documento

Establezca el idioma del documento usando el atributo [`lang`](/es/docs/Web/HTML/Reference/Global_attributes/lang) en su elemento {{htmlelement("html")}}:

```html example-good
<html lang="en-US"></html>
```

Esto es bueno para la accesibilidad y los motores de búsqueda, ayuda a localizar el contenido y recuerda a las personas que usen las mejores prácticas.

### Conjunto de caracteres del documento

También debe definir el conjunto de caracteres de su documento así:

```html example-good
<meta charset="utf-8" />
```

Use UTF-8 a menos que tenga una muy buena razón para no hacerlo; cubrirá todas las necesidades de caracteres prácticamente independientemente del idioma que esté usando en su documento.

### Metaetiqueta viewport

Finalmente, siempre debe agregar la metaetiqueta viewport en su {{HTMLElement("head")}} HTML para dar al ejemplo de código una mejor oportunidad de funcionar en dispositivos móviles. Debe incluir al menos lo siguiente en su documento, que puede modificarse más adelante según sea necesario:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Consulte [`<meta name="viewport">`](/es/docs/Web/HTML/Reference/Elements/meta/name/viewport) para obtener más detalles.

## Atributos

Debe poner todos los valores de los atributos entre comillas dobles. Es tentador omitir las comillas ya que HTML5 lo permite, pero el marcado es más ordenado y fácil de leer si las incluye. Por ejemplo, esto es mejor:

```html example-good
<img src="images/logo.jpg" alt="Un icono de globo circular" class="no-border" />
```

…que esto:

```html-nolint example-bad
<img src=images/logo.jpg alt=Un icono de globo circular class=no-border>
```

Omitir las comillas también puede causar problemas. En el ejemplo anterior, el atributo `alt` se interpretará como múltiples atributos porque no hay comillas para especificar que "Un icono de globo circular" es un valor de atributo único.

## Atributos booleanos

No incluya valores para atributos booleanos (pero sí incluya valores para atributos {{glossary("enumerated", "enumerados")}}); puede escribir el nombre del atributo para establecerlo. Por ejemplo, puede escribir:

```html example-good
<input required />
```

Esto es perfectamente comprensible y funciona bien. Si un atributo HTML booleano está presente, el valor es verdadero. Aunque incluir un valor funcionará, no es necesario y es incorrecto:

```html example-bad
<input required="required" />
```

## Convención de mayúsculas en MDN

Use minúsculas para todas las construcciones que no distinguen entre mayúsculas y minúsculas, incluyendo la declaración de doctype, nombres de elementos y nombres/valores de atributos. Esto crea una apariencia consistente y permite una escritura de marcado más rápida.

```html example-good
<p class="nice">Esto se ve bien y ordenado</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">¿Por qué mi marcado está gritando?</P>
```

## Nombres de clase e ID

Use nombres de clase/ID semánticos y separe múltiples palabras con guiones ({{Glossary("kebab_case", "kebab case")}}). No use {{Glossary("camel_case", "camel case")}}. Por ejemplo:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Referencias de caracteres

No use {{glossary("character reference", "referencias de caracteres")}} innecesariamente; use el carácter literal siempre que sea posible (aún necesitará escapar caracteres como corchetes angulares y comillas).

Como ejemplo, podría simplemente escribir:

```html example-good
<p>© 2018 Yo</p>
```

En lugar de:

```html example-bad
<p>&copy; 2018 Yo</p>
```

## Elementos HTML

Hay algunas reglas para escribir sobre elementos HTML en MDN Web Docs. La adherencia a estas reglas produce descripciones consistentes de elementos y sus componentes y también garantiza la vinculación correcta a la documentación detallada.

- **Nombres de elementos**: Use la macro [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs), que crea un enlace a la página de MDN Web Docs para ese elemento. Por ejemplo, escribir `\{{HTMLElement("title")}}` produce "{{HTMLElement("title")}}".
  Si no desea crear un enlace, **incluya el nombre entre corchetes angulares** y use el estilo "Código en línea" (por ejemplo, `<title>`).
- **Nombres de atributos**: Use el estilo "Código en línea" para poner los nombres de los atributos en `fuente de código`.
  Además, póngalos en **`negrita`** cuando el atributo se mencione junto con una explicación de lo que hace o cuando se use por primera vez en la página.
- **Valores de atributos**: Use el estilo "Código en línea" para aplicar `<code>` a los valores de los atributos y no use comillas alrededor de los valores de cadena, a menos que lo requiera la sintaxis de un ejemplo de código. Por ejemplo, "Cuando el atributo `type` de un elemento `<input>` se establece en `email` o `tel`...".
