---
title: 'HTML el atributo: minlength'
slug: Web/HTML/Attributes/minlength
tags:
  - Entrada
  - Input
  - Referencia
  - atributo
  - minlength
  - textarea
translation_of: Web/HTML/Attributes/minlength
original_slug: Web/HTML/Atributos/minlength
---
El atributo **`minlength`** define el número mínimo de caracteres (como unidades de código UTF-16) que el usuario puede ingresar en un {{HTMLElement('input')}} o {{HTMLElement('textarea')}}. Debe ser un valor entero 0 o superior. Si no se especifica una longitud mínima o se especifica un número no válido, el **`<input>`** no tiene una longitud mínima. Este valor debe ser menor o igual que el valor de {{web.link("/es/docs/Web/HTML/Attributes/maxlength", "maxlength")}}; de lo contrario, el valor nunca será válido, puesto que es imposible cumplir con ambos criterios.

El **`<input>`** fallará la restricción de validación si la longitud del valor de texto del campo es menor que la longitud mínima de unidades de código UTF-16, con {{DOMxRef('validityState.tooShort')}} devolviendo `true`. La validación de la restricción solo se aplica cuando el usuario cambia el valor. Una vez que el envío falla, algunos navegadores mostrarán un mensaje de error que indica la longitud mínima requerida y la longitud actual.

## Ejemplos

Al agregar `minlength="5"`, el valor debe estar vacío o tener cinco caracteres o más para ser válido.

```html
<label for="fruit">Ingresa un nombre de fruta que tenga al menos 5 letras</label> <input type="text" minlength="5" id="fruit">
```

Podemos usar pseudoclases para estilizar el elemento en función de si el valor es válido. El valor será válido siempre que sea `null` (vacío) o tenga cinco o más caracteres. _Lima_ no es válido, _limón es válido_.

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Ejemplos', '100%', 200)}}

## Especificaciones

| Especificación                                                                                                   | Estado                               |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{SpecName('HTML WHATWG', 'input.html#attr-input-minlength', 'atributo minlength')}} | {{ Spec2('HTML WHATWG') }} |
| {{SpecName('HTML5.1', 'input.html#attr-minlength-accept', 'atributo minlength')}}     | {{Spec2('HTML5.1')}}         |

## Compatibilidad del navegador

{{Compat("html.elements.attribute.minlength")}}

## Ve también

- {{web.link("/es/docs/Web/HTML/Attributes/maxlength", "maxlength")}}
- {{web.link("/es/docs/Web/HTML/Attributes/size", "size")}}
- {{web.link("/es/docs/Web/HTML/Attributes/pattern", "pattern")}}
- {{web.link("/es/docs/Web/Guide/HTML/HTML5/Constraint_validation", "Restricción de validación")}}
