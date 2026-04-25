---
title: Directrices para escribir ejemplos de código HTML
short-title: Ejemplos de HTML
slug: MDN/Writing_guidelines/Code_style_guide/HTML
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Las siguientes directrices abordan cómo escribir ejemplos de código HTML para MDN Web Docs.

## Directrices generales para ejemplos de código HTML

### Elección de formato

Las opiniones sobre la correcta sangría, espacios en blanco y longitudes de líneas siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción de la creación y mantenimiento del contenido.

En MDN Web Docs, utilizamos [Prettier](https://prettier.io/) como formateador de código para mantener consistente el estilo del código (y evitar discusiones fuera de tema). Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debes seguir.

## Documento HTML completo

> [!NOTE]
> Las directrices de esta sección solo se aplican cuando necesitas mostrar un documento HTML completo. Por lo general, un fragmento es suficiente para demostrar una función. Cuando uses la [macro EmbedLiveSample](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples), simplemente incluye el fragmento HTML; se insertará automáticamente en un documento HTML completo cuando se muestre.

### Tipo de documento

Debes usar el {{Glossary("Doctype", "doctype")}} de HTML5.

```html example-good
<!doctype html>
```

### Idioma del documento

Establece el idioma del documento usando el atributo [`lang`](/es/docs/Web/HTML/Reference/Global_attributes/lang) en tu elemento {{htmlelement("html")}}:

```html example-good
<html lang="en-US"></html>
```

Esto es bueno para la accesibilidad y los motores de búsqueda, ayuda a localizar el contenido y recuerda a las personas que deben usar las mejores prácticas.

### Conjunto de caracteres del documento

También debes definir el conjunto de caracteres de tu documento de esta manera:

```html example-good
<meta charset="utf-8" />
```

Usa UTF-8 a menos que tengas una muy buena razón para no hacerlo; cubrirá todas las necesidades de caracteres prácticamente independientemente del idioma que uses en tu documento.

### Metaetiqueta viewport

Finalmente, siempre debes agregar la metaetiqueta viewport en el {{HTMLElement("head")}} de tu HTML para dar al ejemplo de código una mejor oportunidad de funcionar en dispositivos móviles. Debes incluir al menos lo siguiente en tu documento, que puede modificarse más adelante según sea necesario:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Para más detalles, consulta [`<meta name="viewport">`](/es/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Atributos

Debes poner todos los valores de atributos entre comillas dobles. Es tentador omitir las comillas ya que HTML5 lo permite, pero el marcado es más ordenado y fácil de leer si las incluyes. Por ejemplo, esto es mejor:

```html example-good
<img src="images/logo.jpg" alt="Un icono de globo circular" class="no-border" />
```

...que esto:

```html-nolint example-bad
<img src=images/logo.jpg alt=Un icono de globo circular class=no-border>
```

Omitir las comillas también puede causar problemas. En el ejemplo anterior, el atributo `alt` se interpretará como múltiples atributos porque no hay comillas para especificar que "Un icono de globo circular" es un solo valor de atributo.

## Atributos booleanos

No incluyas valores para atributos booleanos (pero sí incluye valores para atributos {{glossary("enumerated", "enumerados")}}); simplemente puedes escribir el nombre del atributo para establecerlo. Por ejemplo, puedes escribir:

```html example-good
<input required />
```

Esto es perfectamente comprensible y funciona bien. Si un atributo booleano de HTML está presente, el valor es verdadero. Aunque incluir un valor funcionará, no es necesario y es incorrecto:

```html example-bad
<input required="required" />
```

## Convención de mayúsculas y minúsculas en MDN

Usa minúsculas para todos los constructos que no distinguen entre mayúsculas y minúsculas, incluyendo la declaración de doctype, nombres de elementos y nombres/valores de atributos. Esto crea una apariencia consistente y permite escribir el marcado más rápido.

```html example-good
<p class="nice">Esto se ve ordenado y limpio</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">¿Por qué mi marcado está gritando?</P>
```

## Nombres de clase e ID

Usa nombres de clase/ID semánticos, y separa múltiples palabras con guiones ({{Glossary("kebab_case", "kebab case")}}). No uses {{Glossary("camel_case", "camel case")}}. Por ejemplo:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Referencias de caracteres

No uses {{glossary("character reference", "referencias de caracteres")}} innecesariamente — usa el carácter literal siempre que sea posible (aún necesitarás escapar caracteres como corchetes angulares y comillas).

Como ejemplo, simplemente podrías escribir:

```html example-good
<p>© 2018 Yo</p>
```

En lugar de:

```html example-bad
<p>&copy; 2018 Yo</p>
```

## Elementos HTML

Hay algunas reglas para escribir sobre elementos HTML en MDN Web Docs. Adherirse a estas reglas produce descripciones consistentes de los elementos y sus componentes y también garantiza la vinculación correcta a la documentación detallada.

- **Nombres de elementos**: Usa la macro [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs), que crea un enlace a la página de MDN Web Docs para ese elemento. Por ejemplo, escribir `\{{HTMLElement("title")}}` produce "{{HTMLElement("title")}}".
  Si no deseas crear un enlace, **encierra el nombre entre corchetes angulares** y usa el estilo "Código en línea" (por ejemplo, `<title>`).
- **Nombres de atributos**: Usa el estilo "Código en línea" para poner los nombres de los atributos en `fuente de código`.
  Además, ponlos en **negrita** cuando el atributo se mencione asociado con una explicación de lo que hace o cuando se usa por primera vez en la página.
- **Valores de atributos**: Usa el estilo "Código en línea" para aplicar `<code>` a los valores de los atributos, y no uses comillas alrededor de los valores de cadena, a menos que sea necesario por la sintaxis de un ejemplo de código. Por ejemplo, "Cuando el atributo `type` de un elemento `<input>` se establece en `email` o `tel` ..."
