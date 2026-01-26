---
title: transform-function
slug: Web/CSS/transform-function
---

El tipo de dato CSS `<transform-function>` denota una función por aplicar a la representación de un elemento para modificarlo. Generalmente, dicha transformación puede ser expresada por matrices, y la imagen resultante puede ser determinada usando multiplicación de matrices en cada punto.

## Coordenadas para graficos 2D

Existen varios modelos de coordenadas utilizados para describir la transformación. Las más habituales son el sistema de coordenadas cartesiano y las coordenadas homogéneas.

### Coordenadas Cartesianas

[![](/files/3438/coord_in_R2.png)](coord_in_r2.png)En las [Cordenadas cartesianas](https://es.wikipedia.org/wiki/Coordenadas_cartesianas), cada punto del [espacio Euclidiano](https://es.wikipedia.org/wiki/Geometr%C3%ADa_euclidiana) es descrito usando dos valores, la abscisa y la ordenada. El origen, el `(0, 0)` es la esquina superior izquierda del elemento. A diferencia de la convención geométrica habitual, y como la mayoría de los casos en los gráficos por computadora, el eje y (ordenada) va hacia abajo. Cada punto se describe matemáticamente utilizando la notación vectorial `(x, y)`.

Cada función lineal es descrita usando una matriz 2x2 de la siguiente manera:

<math><mfenced><mtable><mtr><mtd>a</mtd><mtd>c</mtd></mtr> <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable></mfenced></math>

Aplicar la transformación consiste en hacer, por cada punto, la multiplicación de matrices entre ambos:

[![](transform_functions_generic_transformation_cart.png?size=webview)](transform_functions_generic_transformation_cart.png).

Es posible aplicar varias transformaciones en una fila:

[![](transform_functions_transform_composition_cart.png?size=webview)](transform_functions_transform_composition_cart.png).

Con esta notación, es posible describir, y por lo tanto componer, las transformaciones más comunes: rotación, escala o transvección. De hecho, todas las transformaciones que son funciones lineales pueden ser descritas. Una transformación mayor no es lineal y por lo tanto debe ser tratada de forma especial cuando se usa esta notación: traslación. El vector de traslación (tx, ty) debe ser expresado de forma separada, como dos parámetros adicionales.

Las [coordenadas homogéneas](https://es.wikipedia.org/wiki/Coordenadas_homog%C3%A9neas) de [Möbius](https://es.wikipedia.org/wiki/August_M%C3%B6bius) en [geometría proyectiva](https://es.wikipedia.org/wiki/Geometr%C3%ADa_proyectiva) llevan a transformaciones matriciales de 3x3 que, aunque son más complejas e inusuales para quienes no son especialistas, no sufren de la limitación de traslación, puesto que puede ser expresada como funciones lineales en esta álgebra, quitando la necesidad de casos especiales.

## Funciones que definen transformaciones

Existen varias funciones disponibles para describir transformaciones en CSS. Cada una aplica una operación geométrica, en 2D o 3D:

- {{cssxref("transform-function/matrix","matrix()")}}
  - : La función `matrix()` especifica una matriz de transformación 2D homogénea , comprendida por los seis valores especificados. Los valores constantes de dichas matrices son implícitos, y no son enviados como parámetros; los otros parámetros son descritos en orden de columna principal.

    `matrix(a, b, c, d, tx, ty)` es la forma reducida de `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

- {{cssxref("transform-function/matrix3d","matrix3d()")}}
  - : La función `matrix3d()` describe una transformación 3D como una matriz 4x4 homogénea. Los 16 parámetros son descritos en orden de columna principal.
- {{cssxref("transform-function/perspective","perspective()")}}
  - : La función `perspective()` define la distancia entre el plano z=0 y el usuario, para dar cierta perspectiva al elemento posicionado en tercera dimensión. Cada elemento 3D con z>0 se vuelve más grande; cada elemento 3D con z<0 se vuelve más pequeño. La magnitud del efecto se determina por el valor de esta propiedad.
- {{cssxref("transform-function/rotate","rotate()")}}
  - : La función `rotate()` define una transformación que mueve al elemento al rededor de un punto fijo (especificado por la propiedad {{Cssxref("transform-origin")}}) sin deformarlo. La cantidad de movimiento es definida por el ángulo especificado; si es positivo, el movimiento será en sentido de las manecillas del reloj, y si es negativo, será en sentido opuesto. Una rotación de 180° es llamada _reflexión de punto_.
- {{cssxref("transform-function/rotate3d","rotate3d()")}}
  - : La función `rotate3d()` describe una transformación que mueve al elemento al rededor de un eje fijo sin deformarlo. La cantidad de movimiento es definido por el ángulo especificado; si es positivo, el movimiento será en sentido de las manecillas del reloj, y si es negativo, será en sentido opuesto. Al contrario de las rotaciones en el plano, la composición de las rotaciones 3D es generalmente no conmutativa; esto significa que el orden en el que se aplican las rotaciones es crucial.
- {{cssxref("transform-function/rotateX","rotateX()")}}
  - : La función `rotateX()` describe una transformación que mueve el elemento al rededor de su eje de las abscisas sin deformarlo. La cantidad de movimiento es definida por el ángulo especificado; si es positivo, el movimiento será en sentido de las manecillas del reloj, y si es negativo, será en sentido opuesto. El eje de rotación pasa por el origen, definido por la propiedad cssxref("transform-origin") }}.

    `rotateX(a)` es la forma reducida de `rotate3D(1, 0, 0, a)`.

- {{cssxref("transform-function/rotateY","rotateY()")}}
  - : La función `rotateY()` describe una transformación que mueve el elemento al rededor de su eje de las ordenadas sin deformarlo. La cantidad de movimiento es definida por el ángulo especificado; si es positivo, el movimiento será en sentido de las manecillas del reloj, y si es negativo, será en sentido opuesto. El eje de rotación pasa por el origen, definido por la propiedad {{ cssxref("transform-origin") }}.

    `rotateY(a)` es la forma reducida de `rotate3D(0, 1, 0, a)`.

- {{cssxref("transform-function/rotateZ","rotateZ()")}}
  - : La función `rotateZ()` describe una transformación que mueve el elemento al rededor de su eje Z sin deformarlo. La cantidad de movimiento es definida por el ángulo especificado; si es positivo, el movimiento será en sentido de las manecillas del reloj, y si es negativo, será en sentido opuesto. El eje de rotación pasa por el origen, definido por la propiedad {{ cssxref("transform-origin") }}.

    `rotateZ(a)` es la forma corta de `rotate3D(0, 0, 1, a)`.

- {{cssxref("transform-function/scale","scale()")}}
  - : La función `scale()` modifica el tamaño del elemento. Puede aumentar o disminuir su tamaño, y ya que la cantidad de escalada es definida por un vector, puede hacerlo más hacia una dirección que a otra. Esta transformación se caracteriza por un vector cuyas coordenadas definen qué tanto se escalará hacia cada dirección. Si ambas coordenadas del vector son iguales, el ajuste es uniforme, o isotrópico, y la figura del elemento es conservada. En ese caso, la función de escalada define una homotecia.
- {{cssxref("transform-function/scale3d","scale3d()")}}
  - : La función `scale3d()` modifica el tamaño de un elemento. Siendo que la cantidad de escalada es definida por un vector, puede cambiar el tamaño a diferentes dimensiones en diferentes escalas. Esta transformación se caracteriza por un vector cuyas coordenadas definen qué tanto se escalará hacia cada dirección. Si las tres coordenadas del vector son iguales, el ajuste es uniforme, o isotrópico, y la figura del elemento es conservada. En ese caso, la función de escalada define una homotecia.
- {{cssxref("transform-function/scaleX","scaleX()")}}
  - : La función `scaleX()` modifica la abscisa de cada punto del elemento con base en un factor constante, excepto si dicho factor es `1`, en cuyo caso la función es la transformación de identidad. La escalada no es isotrópica y los ángulos del elemento no son conservados. `scaleX(-1)` define una [simetría axial](https://en.wikipedia.org/wiki/Axial_symmetry) con un eje vertical pasando por el origen (según sea sea especificado en la propiedad {{cssxref("transform-origin")}}).

    `scaleX(sx)` es la forma corta de `scale(sx, 1)` o de `scale3d(sx, 1, 1)`.

- {{cssxref("transform-function/scaleY","scaleY()")}}
  - : La función `scaleY()` modifica la ordenada de cada punto del elemento con base en un factor constante, excepto si el factor es `1`, en cuyo caso la función es una transformación de identidad. La escalada no es isotrópica y los ángulos del elemento no son conservados. `scaleY(-1)` define una [simetría axial](https://en.wikipedia.org/wiki/Axial_symmetry) con un eje horizontal pasando por el origen (según sea especificado en la propiedad {{cssxref("transform-origin")}}).

    `scaleY(sy)` es la forma corta de `scale(1, sy)` o de `scale3d(1, sy, 1)`.

- {{cssxref("transform-function/scaleZ","scaleZ()")}}
  - : La función `scaleZ()` modifica la coordenada Z de cada punto del elemento con base en un factor constante, excepto si el factor es `1`, en cuyo caso la función es una transformación de identidad. La escalada no es isotrópica y los ángulos del elemento no son conservados. `scaleZ(-1)` define una [simetría axial](https://en.wikipedia.org/wiki/Axial_symmetry) al rededor del eje Z, pasando por el origen (según sea especificado en la propiedad {{cssxref("transform-origin")}}).

    `scaleZ(sz)` es la forma corta de `scale3d(1, 1, sz)`.

- {{cssxref("transform-function/skew","skew()")}}
  - : La función `skew()` es un mapeo de cizallamiento, o transvección, distorsionando cada punto del elemento con base en cierto ángulo en cada dirección. Esto se hace incrementando cada coordenada por un valor proporcionado para el ángulo especificado y en distancia hacia el origen. Mientras más lejos del origen, mientras más alejado esté del punto, mayor será el valor que se agrega.
- {{cssxref("transform-function/skewX","skewX()")}}
  - : La función `skewX()` es una transvección horizontal, que distorsiona cada punto de un elemento con base en cierto ángulo en dirección horizontal. Esto se hace incrementando la coordenada abscisa por un valor proporcionado al ángulo especificado, y en distancia hacia el origen. Mientras más lejos esté del origen, mientras más lejano esté el punto, mayor será el valor que se agrega.
- {{cssxref("transform-function/skewY","skewY()")}}
  - : La función `skewY()` es una transvección vertical, que distorsiona cada punto de un elemento con base en cierto ángulo en dirección vertical. Esto se hace incrementando la coordenada ordenada por un valor proporcionado al ángulo especificado, y en distancia hacia el origen. Mientras más lejos esté del origen, mientras más lejano esté el punto, mayor será el valor que se agrega.
- {{cssxref("transform-function/translate","translate()")}}
  - : La función `translate()` mueve la posición del elemento sobre el plano. Esta transformación se caracteriza por un vector cuyas coordenadas definen qué tanto se moverá en cada dirección.
- {{cssxref("transform-function/translate3d","translate3d()")}}
  - : La función `translate3d()` mueve la posición del elemento dentro de un espacio tridimensional. Esta transformación se caracteriza por un vector tridimensional, cuyas coordenadas definen qué tanto se moverá en cada dirección.
- {{cssxref("transform-function/translateX","translateX()")}}
  - : La función `translateX()` mueve el elemento horizontalmente sobre el plano. Esta transformación se caracteriza por un valor {{cssxref("&lt;length&gt;")}} que define qué tanto se moverá horizontalmente.

    `translateX(tx)` es la forma reducida de `translate(tx, 0)`.

- {{cssxref("transform-function/translateY","translateY()")}}
  - : La función `translateY()` mueve el elemento verticalmente sobre el plano. Esta transformación se caracteriza por un valor {{cssxref("&lt;length&gt;")}} que define qué tanto se moverá verticalmente.

    `translateY(ty)` es la forma reducida de `translate(0, ty)`.

- {{cssxref("transform-function/translateZ","translateZ()")}}
  - : La función `translateZ()` mueve el elemento a través del eje Z en el espacio tridimensional. Esta transformación se caracteriza por un valor {{cssxref("&lt;length&gt;")}} que define qué tanto se moverá.

    `translateZ(tz)` es la forma reducida de `translate3d(0, 0, tz)`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
