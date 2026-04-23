---
title: Window.showModalDialog()
slug: Web/API/HTMLDialogElement/showModal
original_slug: Web/API/Window/showModalDialog
---

{{ deprecated_header() }}{{APIRef}}

El método **`Window.showModalDialog()`** crea y visualiza una caja de diálogo modal, conteniendo el documento HTML especificado.

> [!NOTE]
> **Esta prestación va a desaparecer. Por favor ajuste sus sitios Web y aplicaciones.**
>
> El soporte ha sido eliminado en [Chrome 37](https://blog.chromium.org/2014/07/disabling-showmodaldialog.html). Pero se añadió temporalmente un [ajuste de Política Coporativa para rehabilitar showModalDialog](https://www.chromium.org/administrators/policy-list-3#EnableDeprecatedWebPlatformFeatures). Este método showModalDialog() fue eliminado definitivamente en Chrome 43.
>
> Mozilla ha anunciado que eliminará el soporte para este método ([Error 981796 en Firefox](https://bugzil.la/981796)). Sin plazo específico, debería ser antes de Firefox 46. Esto quiere decir que la función estará fuera de uso sobre mediados de junio de 2016. Una revisión ESR podría soportarla aun por algunas meses más.

## Sintaxis

```js
valRetorno = window.showModalDialog(uri[, argumentos][, opciones]);
```

donde

- `valRetorno` es un valor indicando la propiedad returnValue establecida por la ventana del documento especificado por la `uri`.
- `uri` is es la URI del documento a visualizar en la caja de diálogo.
- `argumentos` es un parámetro adicional, que contiene valores que deberían ser pasados a la caja de diálogo; estos son puestos a disposición en el la propiedad [`window.dialogArguments`](/es/docs/DOM/window.dialogArguments) del objeto [`window`](/es/docs/Web/API/Window).
- `opciones` es una cadena adicional que especifica ornamentaciones de ventana para la caja de diálogo, usando uno o más de los siguientes valores separados por punto y coma:

| Sintaxis                                         | Descripción                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `center: {on \| off \| yes \| no \| 1 \| 0 }`    | Si el valor de este argumento es `on`, `yes`, ó 1, la ventana de diálogo será centrada en el escritorio; en caso contrario será oculta. El valor por defecto es `yes`.                 |
| `dialogheight: height`                           | Especifica la altura de la caja de diálogo; por defecto, el tamaño es especificado en pixels.                                                                                          |
| `dialogleft: left`                               | Especifica la posición horizontal de la caja de diálogo respecto de la esquina superior izquierda del escritorio.                                                                      |
| `dialogwidth: width`                             | Especifica la anchura de la caja de diálogo; por defecto el tamaño es especificado en pixels.                                                                                          |
| `dialogtop: top`                                 | Especifica la posición vertical de la caja de diálogo, respcto de la esquina superior izquierda del escritorio.                                                                        |
| `resizable: {on \| off \| yes \| no \| 1 \| 0 }` | Si el valor de este argumentoes `on`, `yes`, ó 1, la ventana de diálogo podrá ser redimensionada por el usuario; en caso controario su tamaño será fijo. El valor por defecto es `no`. |
| `scroll: {on \| off \| yes \| no \| 1 \| 0 }`    | Si el valor de este argumento es `on`, `yes`, ó 1, la ventana de diálogo tendrá barras de desplazamiento; en caso contrario su tamaño será fijo. El valor por defecto es `no`.         |

> [!NOTE]
> Firefox no implementa los argumentos `dialogHide`, `edge`, `status`, ó `unadorned`.

## Compatibilidad con navegadores

Introducido por Microsoft Internet Explorer 4. Soporte añadido a Firefox en Firefox 3 (desaconsejado en Fx 28), y a Safari en Safari 5.1. Ver [WebKit bug 151885](https://bugs.webkit.org/show_bug.cgi?id=151885) para posible futura eliminación de Safari.

## Ejemplos

[Probar `showModalDialog()`](https://mdn.dev/archives/media/samples/domref/showModalDialog.html).

## Notas

`showModalDialog()` está siendo estandarizado actualmente como parte de HTML5. El tercer argumento (para opciones adicionales) no está presente en la versión HTML5, y es (seguramente) ignorado por Safari and Chrome.

## Especificación

- [MSDN page for `showModalDialog`](<https://msdn.microsoft.com/en-us/library/ms536759(VS.85).aspx>)
- [Diálogos HTML5 implementados usando documentos separados](https://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dialogs-implemented-using-separate-documents)

## Ver también

- {{HTMLElement("dialog")}}, un sustituo para `window.showModalDialog()`.
- [showModalDialog Polyfill](https://github.com/niutech/showModalDialog) usando un {{HTMLElement("dialog")}} y [generadores](/es/docs/Web/JavaScript/Reference/Statements/function*)
