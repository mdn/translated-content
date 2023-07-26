---
title: "@keyframes"
slug: Web/CSS/@keyframes
---

{{ CSSRef() }} {{ SeeCompatTable() }}

### Resumen

La regla arroba `@keyframes` permite a los autores controlar los pasos intermedios en una secuencia de animación CSS mediante el establecimiento de keyframes (o puntos de trayectoria) a lo largo de la secuencia de animación que debe ser alcanzado por determinados puntos durante la animación. Esto le da un control más específico sobre los pasos intermedios de la secuencia de animación que se obtiene al dejar que el navegador maneje todo automáticamente.

Para utilizar keyframes, se crea una regla de @keyframes con un nombre que es utilizada por la propiedad {{cssxref ("animation-name")}} para que coincida con una animación de keyframe a su lista. Cada regla @keyframes contiene una lista de estilo de selectores de keyframe, cada una de los cuales está compuesto de un porcentaje a lo largo de la animación en la que se produce el keyframe así como un bloque que contiene la información de estilo para ese keyframe.

Puede listar los keyframes en cualquier orden, éstos serán tratados en el orden en que los porcentajes especificados indican que debe ocurrir.

#### Listas válidas de keyframe

Para obtener una lista de keyframe que sea válida, debe incluir reglas para al menos los tiempos 0% (o desde) y 100% (o hacia) (o sea, los estados inicial y final de la animación). Si ambos desplazamientos de tiempo no se especifican, la declaración keyframe es inválida y no se puede utilizar para la animación.Si se incluyen las propiedades que no se pueden animar en sus reglas de keyframe, serán ignoradas, pero las propiedades admitidas todavía estarán animadas.

#### Duplicar resolución

Si existen varios conjuntos de keyframe para un nombre dado, el último encontrado se utiliza. Las reglas de @keyframes no estan en cascada, por lo que nunca las animaciones se conducen en keyframe desde un conjunto de reglas más de uno.Si una animación en tiempo compensado dado se duplica, el último keyframe en la regla de @keyframes para que ese porcentaje se utilice para ese frame. No hay una cascada dentro de una regla de @keyframes
si varios kayframes especifican los valores de los mismos porcentajes.

### Cuando las propiedades son dejadas fuera de algunos keyframes

Cualquier propiedad que no se especifican en cualquier keyframes son interpoladas (con la excepción de aquellas que no pueden ser interpoladas, las que son eliminadas de la animación completamente). Por ejemplo:

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

En este caso, la propiedad {{cssxref ("top")}} anima con los keyframes de 0%, 30% y 100%, y {{cssxref ("left")}} anima utilizando los keyframes 0%, 68%, y 100%.Sólo las propiedades que se especifican tanto en el 0% y 100% de keyframe serán animadas; cualquier propiedad no incluido en ambos de los keyframes conservarán su valor de partida para la duración de la secuencia de animación.

### Cuando se define un keyframe varias veces

La especificación define que si un keyframe se define varias veces, pero no todas las propiedades afectadas se especifican en cada keyframe, sólo los valores especificados en el último keyframe se consideran. Por ejemplo:

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

En este ejemplo, en el 50% del keyframe, el valor utilizado es `top: 10px` y todos los demás valores en este keyframe se ignoran.

{{non-standard_inline}} los keyframes (fotogramas clave) en cascada son compatibles a partir de Firefox 14. Para el ejemplo anterior, esto significa que en el fotograma clave 50%, el valor left: 20px será considerado. Esto no está definido en la especificación todavía, pero se está discutiendo.

## Sintaxis

```
@keyframes <identifier> {
  [ [ from | to | <percentage> ] [, from | to | <percentage> ]* block ]*
}
```

### Valores

- `<identifier>`
  - : Un nombre que identifica la lista de keyframe. Debe coincidir con el identificador de la producción en la sintaxis del CSS.
- `from`
  - : Un desplazamiento inicial de `0%`.
- `to`
  - : Un desplazamiento final de `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un porcentaje de las veces aunque la secuencia de la animación en la que el keyframe especifica debe ocurrir.

## Ejemplos

Mira los ejemplos del [CSS animations](/en/CSS/CSS_animations).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vease también

- [Using CSS animations](/es/docs/CSS/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
