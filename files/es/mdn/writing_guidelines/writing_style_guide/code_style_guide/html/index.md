---
title: Pautas para escribir ejemplos de código HTML
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{MDNSidebar}}

Las siguiente pautas cubren cómo escribir ejemplos de código HTML para los documentos web de MDN.

## Pautas generales para ejemplos de código HTML

### Eligiendo un formato

Opiniones sobre la sangría correcta, espacio en blanco, y las longitudes de línea siempre han sido controvertidas.
Las discusiones sobre estos temas son una distracción para la creación y mantenimiento de contenido.

En documentos web de MDN, usamos [Prettier](https://prettier.io/) como formateador de código para mantener la consistencia del estilo del código (y para evitar discusiones fuera del tema).
Puedes consultar nuestro [Archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las normas vigentes, y leer la [Documentación Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que usted debe seguir.

## Documento HTML completo

> [!NOTE]
> Las pautas de esta sección solo se aplican cuando necesita mostrar un documento HTML completo. Por lo general, un fragmento es suficiente para demostrar una función. Cuando utilice la [macro EmbedLiveSample](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples), simplemente incluya el fragmento HTML se insertará automáticamente en un documento HTML completo cuando se muestre.

### Tipo de documento

Debes utilizar el doctype HTML5. Es corto, fácil de recordar y compatible con versiones anteriores.

```html example-good
<!doctype html>
```

### Idioma del documento

Establece el idioma del documento usando el atributo [`lang`](/es/docs/Web/HTML/Global_attributes#lang) en tu elemento {{htmlelement("html")}}:

```html example-good
<html lang="en-US"></html>
```

Esto es bueno para la accesibilidad y los motores de búsqueda, ayuda a localizar contenido y recuerda a las personas que deben utilizar las mejores prácticas.

### Conjunto de caracteres del documento

También debes definir el conjunto de caracteres de esta manera:

```html example-good
<meta charset="utf-8" />
```

Utilice UTF-8 a menos que tenga una muy buena razón para no hacerlo; Cubrirá todas las necesidades de los caracteres prácticamente independientemente del idioma que esté utilizando en su documento.

### Metaetiqueta viewport

Finalmente, siempre debes agregar la metaetiqueta viewport en tu HTML {{HTMLElement("head")}} para que el ejemplo de código tenga más posibilidades de funcionar en dispositivos móviles. Debes incluir al menos lo siguiente en su documento, que podrá modificarse más adelante según sea necesario:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Para mas detalles ver: [Uso de la metaetiqueta viewport para controlar el diseño en navegadores móviles](/es/docs/Web/HTML/Viewport_meta_tag).

## Atributos

Debes colocar todos los valores de los atributos en comillas dobles. Es tentador omitir las comillas ya que HTML5 lo permite, pero el marcado es más claro y fácil de leer si las incluye. Por ejemplo, esto es mejor:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

...que esto:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Omitir comillas también puede causar problemas. En el ejemplo anterior, el atributo alt se interpretará como atributos múltiples porque no hay comillas para especificar que "Un icono de globo circular" es un valor de atributo único.

## Atributos booleanos

No incluyas valores para atributos booleanos (pero incluye valores para atributos {{glossary("enumerated", "enumerados")}}); simplemente puedes escribir el nombre del atributo para establecerlo. Por ejemplo, puedes escribir:

```html example-good
<input required />
```

Este es perfectamente entendible y trabaja bien. Si hay un atributo HTML booleano, el valor es verdadero. Si bien incluir un valor funcionará, no es necesario ni incorrecto:

```html example-bad
<input required="required" />
```

## Mayúsculas y minúsculas

Utilice minúsculas para todos los nombres de elementos y nombres/valores de atributos porque se ve más ordenado y significa que puede escribir el marcado más rápido. Por ejemplo:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Nombres de clases e ID

Utilice nombres de clase/ID semánticos, y separe multiples palabras con guiones ({{Glossary("kebab_case", "kebab case")}}), No use {{Glossary("camel_case", "camel case")}}. Por ejemplo:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Referencias de entidades

No utilice referencias de entidades innecesariamente, utilice el carácter literal siempre que sea posible (aún necesitará caracteres de escape como corchetes y comillas).

Como ejemplo, podrías simplemente escribir:

```html example-good
<p>© 2018 Me</p>
```

En lugar de:

```html example-bad
<p>&copy; 2018 Me</p>
```

## Elementos HTML

Existen algunas reglas para escribir sobre elementos HTML en documentos web de MDN. El cumplimiento de estas reglas produce descripciones coherentes de los elementos y sus componentes y también garantiza la vinculación correcta a la documentación detallada.

- **Nombres de elementos**: Utilice la macro [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs), que crea un enlace a los documentos web de MDN. Por ejemplo escribiendo `\{{HTMLElement("title")}}` produce "{{HTMLElement("title")}}".
  Si no desea crear un vínculo, **incluya el nombre entre corchetes** y utilice el estilo "Código en línea" (por ejemplo, `<title>`).
- **Nombres de atributos**: Utilice el estilo "Código en línea" para colocar los nombres de los atributos en la `fuente del código`. Además, colóquelos en **negrita** cuando el atributo se mencione junto con una explicación de lo que hace o cuando se use por primera vez en la página.
- **Valores de atributos**: Utilice el estilo "Código en línea" para aplicar código a valores de atributos y no utilice comillas alrededor de valores de cadena. Por ejemplo, "Cuando el atributo `type` de un elemento `input` se establece en `email` o `tel` ...".
