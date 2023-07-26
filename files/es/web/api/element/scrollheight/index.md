---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{APIRef}}

El elemento **Element.scrollHeight** atributo unicamente de lectura es una medida de la altura del contenido de un elemento, incluyendo el contenido que no es visible en la pantalla debido al desbordamiento. El valor `scrollHeight` es igual a la altura mínima (donde la altura incluye el relleno , pero no incluye bordes y márgenes) El elemento lo necesita con el fin de adaptarse a todos los contenidos en el punto de vista sin necesidad de utilizar una barra de desplazamiento vertical. Incluye el elemento relleno pero no su margen.

> **Nota:** Esta propiedad redondea el valor a un número entero. Si se necesita un valor fraccionario, utilizar {{domxref("Element.getBoundingClientRect()")}}.

## Sintaxis

```js
var intElemScrollHeight = element.scrollHeight;
```

_intElemScrollHeight_ es una variable que almacena un número entero correspondiente al valor scrollHeight en pixels del elemento. scrollHeight es una propiedad unicamente de lectura.

## Ejemplo

```html hidden
<div
  id="offsetContainer"
  style="margin: 40px 50px 50px; background-color: rgb(255, 255, 204); border: 4px dashed black; color: black; position: relative; display: inline-block;">
  <div
    id="idDiv"
    style="margin: 24px 29px; border: 24px black solid; padding: 0px 28px; width: 199px; height: 102px; overflow: auto; background-color: white; font-size: 13px!important; font-family: Arial, sans-serif;">
    <p
      id="PaddingTopLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-top
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <p
      id="PaddingBottomLabel"
      style="text-align: center; font-style: italic; font-weight: bold; font-size: 13px!important; font-family: Arial, sans-serif; margin: 0px;">
      padding-bottom
    </p>
  </div>
  <strong>Left</strong> <strong>Top</strong>
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 370px; position: absolute; top: 85px;"
    >Right</strong
  >
  <strong
    style="color: blue; font-family: arial,sans-serif; font-size: 13px!important; font-weight: bold; left: 164px; position: absolute; top: 203px;"
    >Bottom</strong
  >
  <em>margin-top</em> <em>margin-bottom</em> <em>border-top</em>
  <em>border-bottom</em>
</div>
```

{{EmbedLiveSample("",400,350)}}

![Image:scrollHeight.png](scrollheight.png)

## Problemas y Soluciones

### Determina si un elemento ha sido totalmente desplazado

La siguiente equivalencia devuelve `true` si un elemento está al final de su desplazamiento, `false` si no es así.

```
element.scrollHeight - element.scrollTop === element.clientHeight
```

## scrollHeight Demo

Asociada al evento `onscroll` , esta equivalencia puede ser útil para determinar si un usuario ha leido un texto o no (ver también las propiedades de [`element.scrollTop`](/es/docs/DOM/element.scrollTop) y [`element.clientHeight`](/es/docs/DOM/element.clientHeight) ). Por ejemplo:

### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    </textarea>
  </p>
  <p>
    <input type="checkbox" id="agree" name="accept" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7fdf55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2a9f00 solid 2px;
  border-radius: 5px;
}
```

### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

{{EmbedLiveSample('scrollHeight_Demo', '640', '400')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [MSDN: Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [Determinación de las dimensiones de los elementos](/es/docs/Determining_the_dimensions_of_elements)
