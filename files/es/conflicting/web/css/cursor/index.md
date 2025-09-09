---
title: Uso de URL como valor de la propiedad cursor
slug: conflicting/Web/CSS/cursor
original_slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
---

[Gecko](/es/Gecko) 1.8 ([Firefox 1.5](/es/Firefox_1.5_para_Desarrolladores), SeaMonkey 1.0) soporta el uso de URLs como valores para la [propiedad cursor](http://www.sidar.org/recur/desdi/traduc/es/css/ui.html#propdef-cursor) (CSS2). Esto nos permite definir la imagen que queremos como puntero del ratón, además podemos usar cualquiera de los formatos gráficos soportados por Gecko.

### Sintaxis

La sintaxis de esta propiedad es:

```
cursor: [<url>,]* cursor-genérico;
```

Esto es, se pueden indicar cero o más direcciones URL (separadas por comas), que **deben** ser seguidas de uno de los cursores genéricos definidos en la especificación, por ej. `help` o `pointer`.

Los siguientes valores están permitidos:

```css
cursor: url(foo.cur), url(http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg), help;
```

Primero se intentará cargar _foo.cur_. Si este archivo no existe o no es válido por alguna otra razón, se probará con _firefox.jpg_, y si este tampoco puede ser cargado, se usará _help_.

El soporte a la [sintaxis de CSS3](https://www.w3.org/TR/css3-ui/#cursor) para los valores de cursor fue añadido en Gecko 1.8beta3; por lo tanto en Firefox 1.5 funciona. Esto permite especificar las coordenadas del punto en el que la imagen del cursor es fijada al área activa. Si no se especifican, las coordenadas del punto de contacto son tomadas del propio archivo (para archivos CUR y XBM) o se fijan en la esquina superior izquierda de la imagen.

Un ejemplo de la sintaxis CSS3:

```css
cursor: url(http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg), auto;

cursor: url(http://developer.mozilla.org/wiki-images/es/e/ed/firefox.jpg) 90 90, auto;
```

El primer número es la coordenada X, y el segundo la coordenada Y. El ejemplo anterior pone el punto de contacto del área activa a (90,90) píxeles de la esquina superior izquierda (0,0).

### Limitaciones

Pueden usarse todos los formatos gráficos soportados por Gecko. Por lo tanto puede usar imágenes PNG, JPG, CUR, GIF, etc. Sin embargo, ANI no está soportado. Además, si especifica un GIF animado, el cursor usará el GIF, pero sin animación. Esta limitación podría ser superada en futuras versiones.

Gecko no limita el tamaño de los cursores. Sin embargo, quien busque la máxima compatibilidad multiplataforma debería limitarlos a un tamaño de 32x32, los cursores más grandes no funcionarán en Windows 9x (95, 98, MÍ).

Los cursores translúcidos no estan soportados en las versiones de Windows anteriores a XP. Esto es una limitación del sistema operativo. La transparencia funciona en todas las plataformas.

Solo las versiones de Mozilla para Windows, OS/2 y GNU/Linux (usando GTK+ 2.4 o superior) soportan valores URL para los cursores. El soporte en otras plataformas podría ser añadido en futuras versiones: (Mac OS: [Error 286304 en Firefox](https://bugzil.la/286304), QNX Neutrino: [Error 286307 en Firefox](https://bugzil.la/286307), XLib: [Error 286309 en Firefox](https://bugzil.la/286309), Qt: [Error 286310 en Firefox](https://bugzil.la/286310), BeOS: [Error 298184 en Firefox](https://bugzil.la/298184), GTK 2.0/2.2: [Error 308536 en Firefox](https://bugzil.la/308536))

### Compatibilidad con otros navegadores

Microsoft Internet Explorer también soporta URI como valor para la propiedad `cursor`. Sin embargo, solo soporta los formatos gráficos CUR y ANI. Además, es menos estricto con la sintaxis de la propiedad `cursor`. Esto significa que declaraciones como:

```
cursor: url(foo.cur);
```

O:

```
cursor: url(foo.cur), pointer, url(bar.cur), auto;
```

funcionarán en MSIE, pero no lo harán en los navegadores basados en Gecko. Para ser compatible con Gecko y actuar conforme a la especificación de CSS2.1, ponga la lista de URIs primero, y ponga siempre **un** cursor genérico **al final**. : ''To-do: document what MSIE does with CSS 3 hotspot locations''
