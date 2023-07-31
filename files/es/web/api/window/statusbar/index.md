---
title: Window.statusbar
slug: Web/API/Window/statusbar
---

{{APIRef}}

## Resumen

Retorna el objeto statusbar, la visibilidad se puede alternar en la ventana.

## Sintaxis

```js
objRef = window.statusbar;
```

## Ejemplo

El siguiente ejemplo HTML muestra una forma de utilizar la propiedad visible de los diversos objetos de "bar", y tambien el cambio de privilegios nesesarios para escribir en la propiedad visible para cada una de las ventanas existentes.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Various DOM Tests</title>

    <script>
      // cambia el estado de la barra en la ventana existente
      netscape.security.PrivilegeManager.enablePrivilege(
        "UniversalBrowserWrite",
      );
      window.statusbar.visible = !window.statusbar.visible;
    </script>
  </head>
  <body>
    <p>Various DOM Tests</p>
  </body>
</html>
```

## Notas

Al cargar la pagina del ejemplo anterior se muestra el siguiente cuadro de dialogo:![](modify_any_open_window_dialog.png)

Para alternar la visibilidad de las barras, debe de firmar sus scripts o abilitar los privilegios apropiados, como en el ejemplo anterior. Tenga en cuenta que cambiar la visibilidad de manera dinamica de las barras de herramientas puede cambiar el tamaño de la ventana de forma dramatica y afectando de manera significativa el rendimiento de su pagina.

## Especificaciones

{{Specifications}}

## Ver tambien

- [window.locationbar](/es/docs/Web/API/Window.locationbar), [window.menubar](/es/docs/Web/API/Window.menubar), [window.personalbar](/es/docs/Web/API/Window.personalbar), [window.scrollbars](/es/docs/Web/API/Window.scrollbars), [window.toolbar](/es/docs/Web/API/Window.toolbar)
