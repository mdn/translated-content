---
title: "HTML el atributo: min"
slug: Web/HTML/Attributes/min
---

El atributo [`min`](/es/docs/Web/HTML/Element/input#min) define el valor mínimo que es aceptable y válido para el {{HTMLElement("input")}} que contiene el atributo. Si el [value](/es/docs/Web/HTML/Element/input#attr-value) del elemento es menor que esto, el elemento falla la [restricción de validación](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation). Este valor debe ser menor o igual que el valor del atributo [`max`](/es/docs/Web/HTML/Element/input#max). Si se especifica un valor para [`min`](/es/docs/Web/HTML/Element/input#min) que no es un número válido, la entrada no tiene un valor mínimo.

Válido para los tipos de entrada numérica, incluidos los tipos {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} y {{HTMLElement("input/range", "range")}}, y el elemento {{htmlelement('meter')}}, el atributo [`min`](/es/docs/Web/HTML/Element/input#min) es un número que especifica el valor mínimo de un control de formulario para ser considerado válido.

### Sintaxis

Si `any` no se establece explícitamente, los valores válidos para el `número`, los tipos de entrada de fecha/hora y los tipos de entrada de `range` son iguales a la base de paso a paso: el valor [`min`](/es/docs/Web/HTML/Element/input#min) y los incrementos del valor del paso, hasta el valor [max](/es/docs/Web/HTML/Attributes/max), si se especifica. Por ejemplo, si tienes `<input type="number" min="10" step="2">`, cualquier entero par, 10 o mayor, es válido. Si se omite, `<input type="number">`, cualquier número entero es válido, pero los flotantes, como 4.2, no son válidos, ya que el `step` predeterminado es 1. Para que 4.2 sea válido, `step` se debería haber configurado en `any`, 0.1, 0.2, o cualquiera, el valor mínimo tendría que ser un número terminado en 0.2 , como `<input type="number" min="-5.2">`

| Tipo del `input`                                          | Ejemplo                           | Ejemplo                                                |
| --------------------------------------------------------- | --------------------------------- | ------------------------------------------------------ |
| {{HTMLElement("input/date", "date")}}                     | `yyyy-mm-dd`                      | `<input type="date" min="2019-12-25" step="1">`        |
| {{HTMLElement("input/month", "month")}}                   | `yyyy-mm`                         | `<input type="month" min="2019-12" step="12">`         |
| {{HTMLElement("input/week", "week")}}                     | `yyyy-W##`                        | `<input type="week" min="2019-W23" step="">`           |
| {{HTMLElement("input/time", "time")}}                     | `hh:mm`                           | `<input type="time" min="09:00" step="900">`           |
| {{HTMLElement("input/datetime-local", "datetime-local")}} | `yyyy-mm-ddThh:mm`                | `<input type="datetime-local" min="2019-12-25T19:30">` |
| {{HTMLElement("input/number", "number")}}                 | [number](/es/docs/Web/CSS/number) | `<input type="number" min="0" step="5" max="100">`     |
| {{HTMLElement("input/range", "range")}}                   | [number](/es/docs/Web/CSS/number) | `<input type="range" min="60" step="5" max="100">`     |

> **Nota:** Cuando los datos ingresados por el usuario no se adhieren al valor mínimo establecido, el valor se considera inválido en la restricción de validación y coincidirá con la pseudoclase `:invalid`

Consulta [Validación del lado del cliente](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation) y {{DOMxRef("ValidityState.rangeUnderflow", "rangeUnderflow")}} para más información.

Para el elemento {{HTMLElement('meter')}}, el atributo [`min`](/es/docs/Web/HTML/Element/input#min) define el límite numérico inferior del rango medido. Debe ser menor que el valor mínimo (atributo [max](/es/docs/Web/HTML/Attributes/max), si se especifica. En ambos casos, si se omite, el valor predeterminado es 1.

| Tipo del `input`         | Sintaxis                          | Ejemplo                                                                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------- |
| {{HTMLElement("meter")}} | [number](/es/docs/Web/CSS/number) | `<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> at 40/100</meter>` |

### Impacto en `step`

Los valores de [`min`](/es/docs/Web/HTML/Element/input#min) y `step` definen cuáles son los valores válidos, incluso si el atributo `step` no está incluido, como el `step` predeterminado de `0`.

Agrega un gran borde rojo alrededor de los {{HTMLElement("input")}}s no válidos:

```css
input:invalid {
  border: solid red 3px;
}
```

Luego define un {{HTMLElement("input")}} con un valor mínimo de 7.2, omitiendo el atributo `step`, en donde el valor predeterminado es 1.

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Dado que `step` tiene el valor predeterminado de 1, los valores válidos incluyen `7.2`, `8.2`, `9.2` y así sucesivamente. El valor 8 no es válido. Dado que incluye un valor no válido, los navegadores compatibles mostrarán el valor como no válido.

{{EmbedLiveSample("Impacto_en_step",200,55)}}

Si no se incluye explícitamente, `step` tiene como valor predeterminado 1 para `número` y `range`, y 1 tipo de unidad (segundo, semana, mes, día) para los {{HTMLElement("input")}}s de tipo fecha/hora.

## Compatibilidad del navegador

{{Compat}}

## Especificaciones

{{Specifications}}

## Problemas de accesibilidad

Proporciona instrucciones para ayudar a los usuarios a comprender cómo completar el formulario y utilizar controles de formulario individuales. Indica cualquier entrada requerida y opcional, formatos de datos y otra información relevante. Cuando utilices el atributo [`min`](/es/docs/Web/HTML/Element/input#min), asegúrate de que el usuario comprenda este requisito mínimo. Posiblemente sea suficiente proporcionar instrucciones dentro de un {{HTMLElement('label')}}. Si proporcionas instrucciones fuera de las etiquetas, lo cual permite un posicionamiento y un diseño más flexibles, considera usar [aria-labelledby](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) o [aria-describedby](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-descriptionsby_attribute).

## Ve también

- [step](/es/docs/Web/HTML/Attributes/step)
- [max](/es/docs/Web/HTML/Attributes/max)
- [restricciones de validación](/es/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- {{DOMxRef('Constraint_validation')}}
- {{DOMxRef('validityState.rangeUnderflow')}}
- {{CSSxRef(':out-of-range')}}
- {{HTMLElement('input')}}
- Los tipos {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, {{HTMLElement("input/range", "range")}} y {{htmlelement('meter')}}
