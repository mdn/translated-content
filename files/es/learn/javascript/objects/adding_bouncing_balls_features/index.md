---
title: Añadiendo características a nuestra demo de bouncing balls
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

En esta evaluación, se espera que use la demo de bouncing balls del artículo anterior como punto de partida y le agregue algunas características nuevas e interesantes.

| Prerrequisitos: | Antes de intentar esta evaluación, debería haber revisado todos los artículos de este módulo. |
| --------------- | --------------------------------------------------------------------------------------------- |
| Objetivo:       | Para probar la comprensión de objetos JavaScript y construcciones orientadas a objetos.       |

## Punto de partida

Para iniciar esta evaluación, haz una copia local de [index-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), y [main-finished.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) de nuestro último artículo en un nuevo directorio en tu ordenador.

> **Nota:** Alternativamente, puede usar un sitio como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer su evaluación. Puede pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que está utilizando no tiene paneles JavaScript / CSS separados, sientase libre de poner en linea elementos `<script>`/`<style>` dentro de la página.

## Resumen del proyecto

Nuestra demostración de la pelota hinchable es divertida, pero ahora queremos que sea un poco más interactiva agregando un círculo maligno controlado por el usuario, que se los comería si los atrapa. Tambien queremos testar nuestras destrezas como constructores de objetos creando un objeto `Shape()` genérico de que puedan heredar nuestra pelota y el círculo maligno. Finalmente, queremos añadir una puntuación para seguir el número de bolas que quedan por capturar.

La siguiente captura de pantalla te da una idea de cómo debería verse el programa final.

![](bouncing-evil-circle.png)

Para darle una idea eche un vistazo al [ejemplo final](http://mdn.github.io/learning-area/javascript/oojs/assessment/) (¡no mire el código fuente!)

## Pasos para completar

Las siguientes secciones describen lo que debe hacer.

### Creando nuestro nuevos objetos

Primero de todo, cambia la constructora existente de `Ball()` para que se convierta en un constructor `Shape()` y añade un nuevo constructor `Ball()`:

1. El constructor `Shape()` debe definir las propiedades `x`, `y`, `velX`, y `velY` del mismo modo que lo hacía el constructor `Ball()` constructor original, pero no las propiedades `color` y `size`.
2. También debe definir una nueva propiedad `exists`, que se utiliza para realizar un seguimiento de si existen las bolas en el programa (no se han comido por el círculo maligno). Debe ser un boolean (`true`/`false`).
3. El constructor `Ball()` debe heredar las propiedades `x`, `y`, `velX`, `velY`, y `exists` del constructor `Shape()`.
4. También debe definir propiedades `color` y `size`, como el constructor original `Ball()` hacía.
5. Recuerda configurar el `prototype` del constructor `Ball()` correctamente.

Los métodos de la pelota `draw()`, `update()`, y `collisionDetect()` deben ser capaces de permanecer exactamente igual que antes.

También necesitas añadir un parámetro nuevo a la llamada del constructor `new Ball() ( ... )` — El parámetro `exists` debe ser el quinto parámetro y debe tener un valor `true`.

En este punto, intente volver a cargar el código; debería funcionar igual que antes, con nuestros objetos rediseñados.

### Definiendo EvilCircle()

Ahora es el momento de conocer al chico malo: ¡el `EvilCircle()`! Nuestro juego solo involucrará un círculo malvado, pero lo vamos a seguir definiendo usando un constructor que hereda de `Shape()` para que tengas algo de práctica. Es posible que desee agregar otro círculo a la aplicación más adelante que pueda ser controlado por otro jugador o tener varios círculos malvados controlados por computadora. Probablemente no vas a dominar el mundo con un solo círculo maligno, pero servirá para esta evaluación.

El constructor `EvilCircle()` debe heredar `x`, `y`, `velX`, `velY`, y `exists` from `Shape()`, pero `velX` y `velY` debe ser igual a 20.

Debería hacer algo como `Shape.call(this, x, y, 20, 20, exists);`

Debe definir también sus propias propiedades, como las siguientes:

- `color` — `'white'`
- `size` — `10`

Otra vez, recuerda definir tus propiedades heredadas como parámetros en el constructor, y configura las propiedades `prototype` y `constructor` properties correc.tamente

### Definiendo los métodos de EvilCircle()

`EvilCircle()` debe tener cuatro métodos como se desciben a continuación.

#### `draw()`

Este método tiene el mismo propósito que el método `draw()` de `Ball()`: Se encarga de dibujar la instancia del objeto en el lienzo. Funcionarán de una forma muy similar, así que puedes empezar copiando la definición de `Ball.prototype.draw`. Luego deberías hacer los siguientes cambios.:

- Queremos que el círculo del mal no se complete, sino que simplemente tenga una línea exterior (trazo). Puedes lograr esto actualizando [`fillStyle`](/es/docs/Web/API/CanvasRenderingContext2D/fillStyle) y [`fill()`](/es/docs/Web/API/CanvasRenderingContext2D/fill) a [`strokeStyle`](/es/docs/Web/API/CanvasRenderingContext2D/strokeStyle) y [`stroke()`](/es/docs/Web/API/CanvasRenderingContext2D/stroke).
- También queremos que el trazo sea un poco más grueso, para que puedas ver el círculo malvado con mayor facilidad. Podemos lograr esto configurando un valor para [`lineWidth`](/es/docs/Web/API/CanvasRenderingContext2D/lineWidth) en algún lugar después de la llamada [`beginPath()`](/es/docs/Web/API/CanvasRenderingContext2D/beginPath) (3 hará).

#### `checkBounds()`

Este método hara lo mismo que la primera parte de la función `update()` de `Ball()` — mire para ver si el círculo maligno va a salir del borde de la pantalla y evite que lo haga. De nuevo, puede copiar la mayoría de la definición de `Ball.prototype.update`, hay algunos cambios que debe hacer:

- Deshazte de las dos últimas líneas: no queremos actualizar automáticamente la posición del círculo maligno en cada cuadro, porque lo moveremos de alguna otra manera, como verás a continuación.
- Dentro de las declaraciones `if()`, si el test devuelve true no queremos actualizar `velX`/`velY`; queremos cambiar el valor de `x`/`y` por lo que el círculo del mal se rebota en la pantalla ligeramente. Agregar o restar (según corresponda) la propiedad de tamaño del círculo maligno (`size`) tendría sentido.

#### `setControls()`

Este método agregará un detector de eventos `onkeydown` al objeto `window` para que cuando se presionen ciertas teclas del teclado, podamos mover el círculo maligno. El siguiente bloque de código debe colocarse dentro de la definición del método:

```js
var _this = this;
window.onkeydown = function (e) {
  if (e.keyCode === 65) {
    _this.x -= _this.velX;
  } else if (e.keyCode === 68) {
    _this.x += _this.velX;
  } else if (e.keyCode === 87) {
    _this.y -= _this.velY;
  } else if (e.keyCode === 83) {
    _this.y += _this.velY;
  }
};
```

Por tanto cuando se presiona una tecla, el evento del objeto [keyCode](/es/docs/Web/API/KeyboardEvent/keyCode) se consulta para averiguar que tecla se ha presionado. Si es uno de los cuatro representados por los códigos clave especificados, entonces el círculo maligno se moverá a la izquierda / derecha / arriba / abajo.

- Para obtener un punto de bonificación, avísenos a qué teclas se asignan los códigos de clave especificados.
- Para otro punto de bonificación, ¿nos podrías decir por qué tenemos que configurar `var _this = this;` en la posición en la que está? Es algo que se hace en la función scope.

#### `collisionDetect()`

Este método actuará de una forma muy similar al método `collisionDetect()` de `Ball()`, así que puede usar una copia de eso como una base para el nuevo método. Pero hay algunas diferencias:

- En el exterior de la declaración `if`, ya no es necesario comprobar si la bola actual en la iteración es la misma que la bola que está haciendo la comprobación, porque ya no es una bola, ¡es el círculo del mal! En su lugar, debe hacer una prueba para ver si existe la bola que se está verificando (¿con qué propiedad podría hacerlo?). Si no existe, ya ha sido devorado por el círculo maligno, por lo que no es necesario volver a comprobarlo.
- En el interior de la declaración `if`, ya no desea que los objetos cambien de color cuando se detecta una colisión; en cambio, desea que no existan más bolas que colisionen con el círculo maligno (una vez más, ¿cómo cree que haría eso?).

### Trayendo el círculo del mal al programa

Ahora que hemos definido el círculo maligno, debemos hacerlo aparecer en nuestra escena. Para hacerlo, necesitas hacer alguno cambios a la función `loop()`.

- Primero de todo, crea una nueva instancia del círculo maligno (especifica los parámetros necesarios ), entonces llama al método `setControls()` . Solo necesita hacer estas dos cosas una vez, no en cada iteración del bucle.
- En el punto en el que intera por todas las pelotas y llama a las funciones `draw()`, `update()`, y `collisionDetect()` para cada una, hazlo para que estas funciones solo sean llamadas si la bola actual existe.
- Llama a los métodos de la instancia de la pelota maligna `draw()`, `checkBounds()`, y `collisionDetect()` en cada iteración del bucle.

### Implementando el contador de puntuación

Para implementar el contador de puntuación sigue estos pasos:

1. En tu archivo HTML añade un elemento {{HTMLElement("p")}} justo debajo del elemento {{HTMLElement("h1")}} que contiene el texto "Ball count: ".
2. En tu archivo CSS, agregue la siguiente regla en la parte inferior:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. En su JavaScript, realice las siguientes actualizaciones:

   - Cree una variable que almacene una referencia al párrafo.
   - Mantenga un recuento de la cantidad de bolas en la pantalla de alguna manera.
   - Incrementa el conteo y muestra el número actualizado de bolas cada vez que se agrega una bola a la escena.
   - Disminuye el conteo y muestra el número actualizado de bolas cada vez que el círculo maligno se come una bola (hace que no exista).

## Consejos

- Esta evaluación es bastante desafiante. Da cada paso despacio y con cuidado.
- Puede ser una idea mantener una copia separada de la demostración después de que cada etapa esté funcionando, para que pueda consultarla si se encuentra en problemas más adelante.

## Evaluación

Si está siguiendo esta evaluación como parte de un curso organizado, debe poder entregar su trabajo a su maestro / mentor para que lo marque. Si está aprendiendo solo, puede obtener la guía de calificación con bastante facilidad preguntando en el [discussion thread for this exercise](https://discourse.mozilla.org/t/adding-features-to-our-bouncing-balls-demo-assessment/24689), o en el [#mdn](irc://irc.mozilla.org/mdn) IRC channel en [Mozilla IRC](https://wiki.mozilla.org/IRC). Prueba a hacer el ejercicio primero — no hay nada que ganar con trampa!

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
