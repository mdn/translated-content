---
title: Usando o slider role
slug: Web/Accessibility/ARIA/Roles/slider_role
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role
---
### Descrição

Essa técnica demonstrará como usar o [slider](http://www.w3.org/TR/wai-aria/roles#slider) role.

The `slider` role is used for markup that allows a user to select a value from within a given range. The slider role is assigned to the "thumb," the control that is adjusted to change the value. Typically, another element is styled to visually represent the range of possible valued, and the thumb positioned visually to represent the value within that range. As the user interacts with the thumb, the application must programmatically adjust the slider's `aria-valuenow` (and possible `aria-valuetext`) attribute to reflect the current value. See the [Examples](#examples) section below for more information.

#### Keyboard And Focus

The slider should be keyboard focusable and operable. When the user tabs focus to the slider, it should land on the thumb: the control a mouse user would drag. Arrow keys should operate as follows (localization for right-to-left languages should reverse the direction of the arrows):

| Tecla(s)                         | Ação                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------ |
| Setas para direita e para cima   | Incrementa o valor selecionado                                                                   |
| Setas para esquerda e para baixo | Decrementa o valor selecionado                                                                   |
| Page Up and Page Down            | Optionally increase and decrease the value by a set amount (e.g. by 10 on a range from 0 to 100) |

### Possible effects on user agents and assistive technology

> **Nota:** Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and therefore not normative.

Exemplos

#### Exemplo 1: Escala numérica simples

In the example below, a simple slider is used to select a value between 1 and 100. The current volume is 50. The application will programmatically update the value of `aria-valuenow` in response to user input.

```html
<label for="fader">Volume</label>
<input type="range"
  id="fader"
  min="1"
  max="100"
  value="50"
  step="1"
  aria-valuemin="1"
  aria-valuemax="100"
  aria-valuenow="50"
  oninput="outputUpdate(value)">
<output for="fader" id="volume">50</output>
```

The following code snippet allows you to return the output as it is updated by user input:

```
function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}
```

#### Exemplo 2: Valores de texto

Sometimes, a slider is used to choose a value that is not, semantically, a number. In these cases, the `aria-valuetext` attribute is used to provide the appropriate text name for the currently selected value. In the example below, the slider is used to select a day of the week.

```html
<label for="day-handle">Days</label>
<div class="day-slider">
  <div id="day-handle" class="day-slider-handle" role="slider" aria-labelledby="day-handle"
     aria-valuemin="1"
     aria-valuemax="7"
     aria-valuenow="2"
     aria-valuetext="Monday">
 </div>
</div>
```

The code snippet below shows a function that responds to user input and updates the `aria-valuenow` and `aria-valuetext` attributes:

```js
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var updateSlider = function (newValue) {
    var handle = document.getElementById("day-handle");
    handle.setAttribute("aria-valuenow", newValue.toString());
    handle.setAttribute("aria-valuetext", dayNames[newValue]);
};
```

### Notas

### Atributos ARIA usados

- [aria-valuemin](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute)
- [aria-valuemax](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute)
- [aria-valuenow](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute)
- [aria-valuetext](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute)
- [aria-orientation](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute)

### Related ARIA techniques

### Compatibility

TBD: Add support information for common UA and AT product combinations

### Recursos Adicionais

- [WAI-ARIA specification for the `slider` role](http://www.w3.org/TR/wai-aria/roles#slider)
