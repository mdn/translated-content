---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
original_slug: Web/HTML/Element/input/email
---

{{HTMLSidebar}}

Los elementos {{HTMLElement("input")}} de tipo **`email`** se utilizan para permitir que el usuario ingrese y edite una dirección de correo electrónico o, si se especifica el atributo [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple), una lista de direcciones de correo.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;email&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="email">Enter your example.com email:</label>

<input type="email" id="email" pattern=".+@example\.com" size="30" required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

El valor de la entrada es automáticamente validado para asegurarse que no está vacía o que el correo (o la lista de correos) introducidos están con el formato correcto antes de que el formulario puede ser enviado. Las pseudoclases {{cssxref(":valid")}} e {{cssxref(":invalid")}} son automáticamente aplicadas como corresponde para denotar visualmente si el valor actual del campo es una dirección válida de correo o no.

En los navegadores que no sopartan el tipo `email`, la entrada `email` se degrada para ser una entrada estándar {{HTMLElement("input/text", "text")}}.

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valor</a></strong></td>
      <td>
        Un {{domxref("DOMString")}} representando una dirreción de correo o
        vacío
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} e
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Atributos comunes soprtados</strong></td>
      <td>
        <a href="/es/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#multiple"><code>multiple</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#name"><code>name</code></a>, <a href="/es/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#required"><code>required</code></a>,
        <a href="/es/docs/Web/HTML/Element/input#size"><code>size</code></a> y
        <a href="/es/docs/Web/HTML/Element/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td><code>list</code> y <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interfaz DOM</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## Valor

El atributo [`value`](/es/docs/Web/HTML/Reference/Elements/input#value) del elemento {{HTMLElement("input")}} contiene un {{DOMxRef("DOMString")}} que se valida automáticamente conforme a la sintaxis del correo. Específicamente, hay tres posibles formatos de valor que pasarán la validación:

1. Una cadena vacía ("") — indica que el usuario no ingresó un valor o que el valor fue eliminado.
2. Una única dirección de correo debidamente formada. Esto no necesariamente significa que exista la dirección de correo electrónico, pero al menos tiene el formato correcto. En términos simples, esto significa `nombreusuario@dominio` o `nombreusuario@dominio.tld`. Hay más que eso, por supuesto; consulta [Validación](#validación) para obtener una {{Glossary("regular expression")}} que coincida con el algoritmo de validación de la dirección de correo.
3. Si y solo si se especifica el atributo [`multiple`](/es/docs/Web/HTML/Reference/Elements/input#multiple), el valor puede ser una lista de direcciones de correo correctamente formadas separadas por coma. Los espacios en blanco iniciales y finales se eliminan de cada dirección de la lista.

Véase [Validación](#validación) para más detalles de como las dirrecciones de correo son validadas para asegurarse que están formadas correctamente.

## Atributos adicionales

Además de los atributos que operan en todos los elementos {{HTMLElement("input")}} independientemente de su tipo, las entradas de tipo `email` admiten los siguientes atributos:

### list

El valor del atributo lista es el {{domxref("Element.id", "id")}} del elemento {{HTMLElement("datalist")}} ubicado en el mismo documento. {{HTMLElement("datalist")}} aporta una lista de valores predefinidos sugeridos al usuario para la entrada. Cualquier valor de la lista que no sea compatible con [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) no son incluidos en las opciones sugeridas. Los valores proporcionados son sugerencias, no valores requeridos: los usuarios pueden seleccionar elementos de la lista o proporcionar uno diferente.

### maxlength

El número máximo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en la entrada `email`. Debe ser un valor entero 0 o superior. Si no se especifica `maxlength`, o se especifica un valor no válido, la entrada `email` no tiene una longitud máxima. Este valor también debe ser mayor o igual que el valor de `minlength`.

La entrada fallará la [restricción de validación](/es/docs/Web/HTML/Constraint_validation) si la longitud del valor de texto del campo es mayor que la longitud de `maxlength` en unidades de código UTF-16. La validación de la restricción solo se aplica cuando el usuario cambia el valor.

### minlength

El número mínimo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en la entrada `email`. Debe ser un valor entero no negativo menor o igual al valor especificado por `maxlength`. Si no se especifica `minlength` o se especifica un valor no válido, la entrada de `email` no tiene una longitud mínima.

La entrada fallará la [restricción de validación](/es/docs/Web/HTML/Constraint_validation) si la longitud del texto ingresado en el campo es menor que la longitud de `minlength` en unidades de código UTF-16. La validación de la restricción solo se aplica cuando el usuario cambia el valor.

### multiple

Un atributo booleano que, si está presente, indica que el usuario puede ingresar una lista de múltiples direcciones de correo, separadas por coma y, opcionalmente, espacios en blanco. Consulta [Permitiendo múltiples dirreciones de correo](#permitiendo_multiples_dirrecciones_de_correo) para ver un ejemplo o [Atributo HTML: multiple](/es/docs/Web/HTML/Reference/Attributes/multiple) para más detalles.

> [!NOTE]
> Normalmente, si especificas el atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required), el usuario debe ingresar una dirección de correo válida para que el campo se considere válido. Sin embargo, si agregas el atributo `multiple`, una lista de cero direcciones de correo electrónico (una cadena vacía o una que sea completamente en blanco) es un valor válido. En otras palabras, el usuario no tiene que ingresar ni siquiera una dirección de correo electrónico cuando se especifica `multiple`, independientemente del valor de `required`.

## pattern

El atributo `pattern`, cuando es especificado, es una expresión regular que el [`value`](/es/docs/Web/HTML/Reference/Global_attributes#value) del input debe seguir para que el valor pase la [restricción de validación](/es/docs/Web/HTML/Constraint_validation). Debe ser una expresión regular de JavaScript válida, como las usadas en el tipo {{jsxref("RegExp")}}, y como se explica en nuestra [guía sobre expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_expressions); la bandera `'u'` es especificada cuando se compila la expresión regular, por lo tanto el patrón es tratado como una secuencia de puntos de código Unicode, y no como ASCII. No deben colocarse barras diagonales alrededor del patrón de texto.

Si el patrón no está especificado o es inválido, no se aplica la expresión regular y el atributo es completamente ignorado.

> [!NOTE]
> Usa el atributo [`title`](/es/docs/Web/HTML/Reference/Elements/input#title) para especificar un texto que muchos navegadores mostrarán como una indicación para explicar qué requerimientos se deben seguir para que se cumpla el patrón. También debes incluir otro texto explicativo cerca.

Véase la sección [Validación de patrón](#validacion_de_patron) para más detalles y un ejemplo.

### `placeholder`

El atributo `placeholder` es una cadena de texto que proporciana una breve pista al usuario sobre qué tipo de información hay que introducir en el campo. Debe ser una palabra o una frase corta que muestre el tipo de dato esperado y no un mesaje explicativo. El texto _no tiene_ que incluir saltos de lineas o lineas nuevas.

Si el contenido del control tiene una direccionalidad ({{Glossary("LTR")}} o {{Glossary("RTL")}}) pero necesita presentar el marcador de posición en la dirección opuesta, puedes usar el algotimo bidireccional Unicode para formatear caracteres para sobreescribir la direccionalidad dentro del marcador de posición; véase [Como usar los controles de Unicode para texto bidireccional](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Evita usar el atributo `placeholder` si puedes. No es semánticamente útil como otras formas de explicar el formulario y puede causar errores técnicos inesperados con tu contenido. Véase [Labels and placeholders](/es/docs/Web/HTML/Reference/Elements/input#labels_and_placeholders) for more information.

### `readonly`

Un atributo Booleano que, si está presente, significa que el campo no puede ser editado por el usuario. Su `value` puede, aun así, ser cambiado directamente con código JavaScript configurando la propiedad [HTMLInputElement](/es/docs/Web/API/HTMLInputElement) `value`.

> [!NOTE]
> Porque un campo solo de lectura no puede tener un valor, `required` no tiene ningún efecto sobre las entradas de texto que también tienen el atributo `readonly` especificado.

### `size`

El atributo `size` es una valor número que indica cuántos caracteres de ancho debe tener la entrada. El valor debe ser un número más grande que cero. El valor por defecto es 20. Desde que el ancho de los caracteres varía, esto puede ser o no exacto y no se debe confiar en que lo sea; la entrada resultante puede ser más estrecha o más ancha que el número especificado de caracteres, dependiendo de los caracteres y la configuración de la fuente ({{cssxref("font")}} en uso).

Esto _no_ establece un límite en cuántos caracteres puede introducir en la entrada el usuario. Solo especifica aproximadamente cuantos pueden ser vistos de una vez. Para esablecer un límite de extensión en el largo de la entrada, usa el atributo [`maxlength`](#maxlength).

## Usando la entrada de dirección de correo

Las direcciones de correo se encuentran entre los formularios de datos textuales que se ingresan con mayor frecuencia en la web; se utilizan al iniciar sesión en sitios web, al solicitar información, para permitir la confirmación de pedidos, para correo web, etc. Por lo tanto, el tipo de entrada `email` puede hacer que tu trabajo como desarrollador web sea mucho más fácil, ya que puede ayudar a simplificar la tarea al crear la interfaz de usuario y la lógica para las direcciones de correo. Cuando creas una entrada de correo con el valor de `type` adecuado, `email`, obtienes validación automática de que el texto ingresado esté por lo menos en la forma correcta para potencialmente ser una dirección de correo legítima. Esto puede ayudar a evitar casos en los que el usuario escribe mal su dirección o proporciona una dirección no válida.

Sin embargo, es importante tener en cuenta que esto no es suficiente para garantizar que el texto especificado sea una dirección de correo que realmente exista, que corresponda al usuario del sitio o que sea aceptable de cualquier otra manera. Simplemente garantiza que el valor del campo tenga el formato adecuado para ser una dirección de correo.

> [!NOTE]
> También es crucial recordar que un usuario puede jugar con tu HTML detrás de la escena, por lo que tu sitio _no debe_ utilizar esta validación por motivos de seguridad. _Debes_ verificar la dirección de correo en el lado del servidor de cualquier transacción en la que el texto proporcionado pueda tener implicaciones de seguridad de cualquier tipo.

### Una sencilla entrada de correo

Actualmente, todos los navegadores que admiten este elemento lo implementan como un campo de entrada de texto estándar con características básicas de validación. Sin embargo, la especificación permite a los navegadores cierta libertad en esto. Por ejemplo, el elemento se podría integrar con la libreta de direcciones incorporada del dispositivo del usuario para permitir seleccionar direcciones de correo de esa lista. En su forma más básica, una entrada de tipo `email` se puede implementar así:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Ten en cuenta que se considera válido cuando está vacío y cuando se ingresa una única dirección de correo con formato válido, pero por lo demás no se considera válido. Al agregar el atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required), solo se permiten direcciones de correo con formato válido; la entrada ya no se considera válida cuando está vacía.

### Permitir varias direcciones de correo

Al agregar el atributo booleano [multiple](/es/docs/Web/HTML/Reference/Attributes/multiple), la entrada se puede configurar para aceptar varias direcciones de correo.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing_multiple_e-mail_addresses', 600, 40) }}

La entrada ahora se considera válida cuando se ingresa una sola dirección de correo, o cuando cualquier número de direcciones de correo electrónico separadas por coma y opcionalmente, algún número de espacios en blanco están presentes

> [!NOTE]
> Cuando se utiliza `multiple`, el valor _puede_ estar vacío.

Algunos ejemplos de cadenas válidas cuando se especifica `multiple`:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Algunos ejemplos de cadenas no válidas:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Marcadores de posición (placeholders)

A veces es útil ofrecer una pista en contexto sobre qué forma deben tomar los datos de entrada. Esto puede ser importante especialmente si el diseño de la página no ofrece etiquetas descriptivas para cada {{HTMLElement("input")}}. Aquí es donde entran los **marcadores de posición**. Un marcador de posición es un valor que demuestra la forma que debe tomar el `value` al presentar un ejemplo de un valor válido, que se muestra dentro del cuadro de edición cuando el `value` del elemento es "". Una vez que se ingresan datos en el cuadro, el marcador de posición desaparece; si se vacía la caja, vuelve a aparecer el marcador de posición.

Aquí, tenemos una entrada de `email` con el marcador de posición `sophie@ejemplo.com`. Observa cómo el marcador de posición desaparece y reaparece a medida que manipulas el contenido del campo de edición.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Marcadores_de_posición', 600, 40) }}

### Controlar el tamaño del valor ingresado

Puedes controlar no solo la longitud física del cuadro de entrada, sino también las longitudes mínima y máxima permitidas para el texto de entrada en sí mismo.

#### Tamaño físico del elemento de entrada

El tamaño físico del cuadro de entrada se puede controlar mediante el atributo [`size`](/es/docs/Web/HTML/Reference/Elements/input#size). Con él, puedes especificar el número de caracteres que el cuadro de entrada puede mostrar a la vez. En este ejemplo, el cuadro de edición `email` tiene 15 caracteres de ancho:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Tamaño_físico_del_elemento_de_entrada', 600, 40) }}

#### Longitud del valor del elemento

`size` es independiente de la limitación de longitud de la dirección de correo ingresada, por lo que puedes hacer que los campos quepan en un espacio pequeño y, al mismo tiempo, permitir que se ingresen cadenas de direcciones de correo más largas. Puedes especificar una longitud mínima, en caracteres, para la dirección de correo ingresada usando el atributo [`minlength`](/es/docs/Web/HTML/Reference/Elements/input#minlength); de manera similar, usa [`maxlength`](/es/docs/Web/HTML/Reference/Elements/input#maxlength) para establecer la longitud máxima de la dirección de correo ingresada.

El siguiente ejemplo crea un cuadro de entrada de dirección de correo de 32 caracteres de ancho, que requiere que el contenido tenga no menos de 3 caracteres y no más de 64 caracteres.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Longitud_del_valor_del_elemento", 600, 40) }}

### Proporcionar opciones predeterminadas

Como siempre, puedes proporcionar un valor predeterminado para un cuadro de entrada de tipo `email` configurando su atributo [`value`](/es/docs/Web/HTML/Reference/Elements/input#value):

<div id="Default_value">
<pre class="brush: html notranslate">&lt;input type="email" value="usuario@ejemplo.com"&gt;</pre>
</div>

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Ofreciendo valores sugeridos

Yendo un paso más allá, puedes proporcionar una lista de opciones predeterminadas entre las que el usuario puede seleccionar especificando el atributo [`list`](/es/docs/Web/HTML/Reference/Elements/input#list). Esto no limita al usuario a esas opciones, pero le permite seleccionar rápidamente las direcciones de correo de uso común. Esto también ofrece sugerencias para [`autocomplete`](/es/docs/Web/HTML/Reference/Elements/input#autocomplete). El atributo `list` especifica el ID de un {{HTMLElement("datalist")}}, que a su vez contiene un elemento {{HTMLElement("option")}} por valor sugerido; El `value` de cada `option` es el valor sugerido correspondiente para el cuadro de entrada de correo.

```html
<input type="email" size="40" list="defaultEmails" />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Con el elemento {{HTMLElement("datalist")}} y sus {{HTMLElement("option")}} en su lugar, el navegador ofrecerá los valores especificados como valores potenciales para la dirección de correo; normalmente se presenta como un menú emergente o desplegable que contiene las sugerencias. Si bien la experiencia del usuario específico puede variar de un navegador a otro, normalmente al hacer clic en el cuadro de edición se muestra un menú desplegable con las direcciones de correo sugeridas. Luego, a medida que el usuario escribe, la lista se filtra para mostrar solo los valores coincidentes. Cada carácter escrito reduce la lista hasta que el usuario realiza una selección o escribe un valor personalizado.

## Validación

Hay dos niveles de validación de contenido disponibles para las entradas de `email`. Primero, está el nivel de validación estándar que se ofrece a todos los {{HTMLElement("input")}}, que automáticamente asegura que el contenido cumple con los requisitos para ser una dirección de correo válida. Pero también existe la opción de agregar filtros adicionales para garantizar que se satisfagan tus propias necesidades especializadas, si las tienes.

> [!WARNING]
> La validación del formulario HTML _no_ sustituye a los scripts que garantizan que los datos ingresados tengan el formato adecuado. Es demasiado fácil para alguien realizar ajustes en el HTML que le permitan omitir la validación o eliminarla por completo. También es posible que alguien simplemente omita tu HTML por completo y envíe los datos directamente a tu servidor. Si tu código del lado del servidor no valida los datos que recibe, podría ocurrir un desastre cuando se ingresen en tu base de datos, datos con formato incorrecto (o datos que son demasiado grandes, son del tipo incorrecto, etc.).

</div>

### Validación básica

Los navegadores que admiten el tipo de entrada `email` automáticamente proporcionan una validación para garantizar que solo se introduzca en el cuadro de entrada el texto que coincida con el formato estándar para las direcciones de correo de Internet. Los navegadores que implementan la especificación deben utilizar un algoritmo equivalente a la siguiente expresión regular:

```js
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
```

Para obtener más información sobre cómo funciona la validación de formularios y cómo aprovechar las propiedades de CSS {{CSSxRef(":valid")}} e {{CSSxRef(":invalid")}} para estilizar la entrada en función de si el el valor actual es válido, consulta [validación de datos de formulario](/es/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Existen problemas de especificación conocidos relacionados con los nombres de dominio internacionales y la validación de direcciones de correo electrónico en HTML. Consulta el [W3C bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Patrón de validación

Si necesitas restringir la dirección de correo electrónico ingresada más allá de "cualquier cadena que parezca una dirección de correo electrónico", puedes usar el atributo [`pattern`](/es/docs/Web/HTML/Reference/Elements/input#pattern) para especificar una {{Glossary("regular expression")}} con la cual el valor debe coincidir para que sea válido. Si se especifica el atributo [`multiple`](/es/docs/Web/HTML/Reference/Elements/input#multiple), cada elemento individual en la lista de valores delimitados por comas debe coincidir con la {{Glossary("regular expression")}}.

Por ejemplo, supón que estás creando una página para los empleados de "Best Startup Ever, Inc". lo que les permitirá ponerse en contacto con su departamento de TI para obtener ayuda. En nuestro formulario simplificado, el usuario debe ingresar su dirección de correo y un mensaje que describa el problema con el que necesita ayuda. Queremos asegurarnos de que el usuario no solo proporcione una dirección de correo válida, sino que, por motivos de seguridad, requerimos que la dirección sea una dirección de correo electrónico corporativa interna.

Dado que las entradas de tipo `email` se comprueban con la validación de la dirección de correo estándar _y_ el [`pattern`](/es/docs/Web/HTML/Reference/Elements/input#pattern) especificado, se puede implementar así de fácil. Observa cómo:

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}
```

```html
<form>
  <div class="emailBox">
    <label for="emailAddress">Tu dirección de correo electrónico</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="username@beststartupever.com"
      pattern=".+@beststartupever\.com"
      title="Proporcione solo una dirección de correo electrónico corporativa de Best Startup Ever" />
  </div>

  <div class="messageBox">
    <label for="message">Solicitud</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="Mis zapatos están demasiado apretados y he olvidado cómo bailar."></textarea>
  </div>
  <input type="submit" value="Enviar solicitud" />
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 300)}}

El {{HTMLElement("form")}} contiene un {{HTMLElement("input")}} de tipo `email` para la dirección de correo del usuario, un {{HTMLElement("textarea")}} para ingresar su mensaje y un `<input>` de tipo [`"submit"`](/es/docs/Web/HTML/Element/input/submit), que crea un botón para enviar el formulario. Cada cuadro de entrada de texto tiene una {{HTMLElement("label")}} asociada para que el usuario sepa lo que se espera de ellos.

Échale un vistazo más de cerca al cuadro de entrada de la dirección de correo. Sus atributos [`size`](/es/docs/Web/HTML/Reference/Elements/input#size) y [`maxlength`](/es/docs/Web/HTML/Reference/Elements/input#maxlength) se establecen en 64 para mostrar espacio para 64 caracteres en direcciones de correo y limitar la cantidad de caracteres ingresados realmente a un máximo de 64. Se especifica el atributo [`required`](/es/docs/Web/HTML/Reference/Elements/input#required), lo cual hace obligatorio que se proporcione una dirección de correo válida.

Se proporciona un [`placeholder`](/es/docs/Web/HTML/Reference/Elements/input#placeholder) apropiado, `nombreusuario@beststartupever.com`, para demostrar lo que constituye una entrada válida. Esta cadena demuestra que se debe ingresar una dirección de correo y sugiere que debe ser una cuenta corporativa de "beststartupever.com". Esto se suma al hecho de que el uso del tipo `email` validará el texto para garantizar que tenga el formato de una dirección de correo. Si el texto en el cuadro de entrada no es una dirección de correo, recibirá un mensaje de error similar a este:

![](enter-valid-email-address.png)

Si dejas las cosas así, al menos estarías validando direcciones de correo legítimas. Pero quieres ir un paso más allá: quieres asegurarte de que la dirección de correo tenga el formato "_nombreusuario_@beststartupever.com". Aquí es donde usarás el [`pattern`](/es/docs/Web/HTML/Reference/Elements/input#pattern). Establece el `pattern` en `.+@beststartupever.com`. Esta simple expresión regular solicita una cadena que consta de al menos un carácter de cualquier tipo, luego una "@" seguida por el nombre de dominio "beststartupever.com".

Ten en cuenta que esto ni siquiera se acerca a un filtro adecuado para direcciones de correo electrónico válidas; permitiría cosas como " @beststartupever.com" (tenga en cuenta el espacio inicial) o "@@beststartupever.com", ninguna de las cuales es válida. Sin embargo, el navegador ejecuta tanto el filtro de dirección de correo estándar _como_ nuestro patrón personalizado contra el texto especificado. Como resultado, terminamos con una validación que dice "asegúrate de que se asemeje a una dirección de correo válida, y si lo es, asegúrate de que también sea una dirección beststartupever.com".

Es recomendable utilizar el atributo [`title`](/es/docs/Web/HTML/Reference/Global_attributes#title) junto con `pattern`. Si lo haces, el `title` _debe_ describir el patrón. Es decir, debe explicar qué formato deben adoptar los datos, en lugar de cualquier otra información. Esto se debe a que el `title` se puede mostrar o pronunciar como parte de un mensaje de error de validación. Por ejemplo, el navegador puede presentar el mensaje "El texto ingresado no coincide con el patrón requerido". seguido de su `title` especificado. Si tu `title` es algo así como "Dirección de correo electrónico", el resultado sería el mensaje "El texto ingresado no coincide con el patrón requerido. Dirección de correo electrónico", no es muy buena.

Es por eso que, en cambio, especificamos la cadena "Por favor, proporciona solo una dirección de correo electrónico corporativo de Best Startup Ever", Al hacerlo, el mensaje de error completo resultante podría ser algo como "El texto ingresado no coincide con el patrón requerido. Proporciona solo una dirección de correo electrónico corporativo de Best Startup Ever."

![](email-pattern-match-bad.png)

> [!NOTE]
> Si tienes problemas al escribir tus expresiones regulares de validación y no funcionan correctamente, consulta la consola de tu navegador; posiblemente haya útiles mensajes de error que te ayudarán a resolver el problema.

## Ejemplos

Aquí tenemos una entrada de correo con el ID `emailAddress` que puede tener un máximo de 256 caracteres. El cuadro de entrada en sí mismo, físicamente tiene 64 caracteres de ancho y muestra el texto `usuario@ejemplo.gov` como marcador de posición cada vez que el campo está vacío. Además, al utilizar el atributo [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple), el cuadro se configura para permitir al usuario ingresar cero o más direcciones de correo, separadas por comas, como se describe en [Permitir varias direcciones de correo](#permitir_varias_direcciones_de_correo). Como toque final, el atributo [`list`](/es/docs/Web/HTML/Attributes/list) contiene el ID de un {{HTMLElement("datalist")}} cuyas {{HTMLElement("option")}}es especifican un conjunto de valores sugeridos que el usuario puede elegir.

Adicionalmente, el elemento {{HTMLElement("label")}} se utiliza para establecer una etiqueta para el cuadro de entrada de correo, con su atributo [`for`](/es/docs/Web/HTML/Reference/Elements/label#for) que hace referencia al ID `emailAddress` del elemento {{HTMLElement("input")}}. Al asociar los dos elementos de esta manera, entonces al hacer clic en la etiqueta se enfocará el elemento de entrada.

```html
<label for="emailAddress">Correo electrónico</label><br />
<input
  id="emailAddress"
  type="email"
  placeholder="user@example.gov"
  list="defaultEmails"
  size="64"
  maxlength="256"
  multiple />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample('Examples', 600, 80)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Guía sobre formularios HTML](/es/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/es/docs/Web/HTML/Element/input/tel)
- [`<input type="url">`](/es/docs/Web/HTML/Element/input/url)
- Atributos:
  - [`list`](/es/docs/Web/HTML/Attributes/list)
  - [`minlength`](/es/docs/Web/HTML/Reference/Attributes/minlength)
  - [`maxlength`](/es/docs/Web/HTML/Attributes/maxlength)
  - [`multiple`](/es/docs/Web/HTML/Reference/Attributes/multiple)
  - [`pattern`](/es/docs/Web/HTML/Attributes/pattern)
  - [`placeholder`](/es/docs/Web/HTML/Attributes/placeholder)
  - [`readonly`](/es/docs/Web/HTML/Attributes/readonly)
  - [`size`](/es/docs/Web/HTML/Attributes/size)

- [Compatibilidad con propiedades CSS](/es/docs/Learn_web_development/Extensions/Forms)
