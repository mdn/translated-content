---
title: "@counter-style"
slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

La [regla arroba](/es/docs/Web/CSS/At-rule) **`@counter-style`** de [CSS](/es/docs/Web/CSS) le permite definir estilos de contador que no forman parte del conjunto predefinido de estilos. Una regla `@counter-style` define cómo convertir un valor de contador en una representación de cadena.

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}
```

La versión inicial de CSS definía un conjunto de estilos de contador útiles. Sin embargo, aunque se agregaron más estilos a este conjunto de estilos predefinidos a lo largo de los años, este sistema resultó demasiado restrictivo para satisfacer las necesidades de la tipografía mundial. La regla arroba `@counter-style` aborda esta deficiencia de manera abierta, al permitir que los autores definan sus propios estilos de contador cuando los estilos predefinidos no se ajustan a sus necesidades.

## Sintaxis

### Descriptores

Cada `@counter-style` se identifica con un nombre y tiene un conjunto de descriptores.

- {{cssxref("@counter-style/system", "system")}}
  - : Especifica el algoritmo que se utilizará para convertir el valor entero de un contador en una representación de cadena.
- {{cssxref("@counter-style/negative", "negative")}}
  - : Permite al autor especificar los símbolos que se agregarán o antepondrán a la representación del contador si el valor es negativo.
- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Especifica un símbolo que debe anteponerse a la representación del marcador. Los prefijos se agregan a la representación en la etapa final, por lo que en la representación final del contador, viene antes del signo negativo.
- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Especifica, de forma similar al descriptor de prefijo, un símbolo que se adjunta a la representación del marcador. Los sufijos vienen después de la representación del marcador.
- {{cssxref("@counter-style/range", "range")}}
  - : Define el rango de valores sobre los que se aplica el estilo de contador. Si se usa un estilo de contador para representar un valor de contador fuera de sus rangos, el estilo de contador volverá a su estilo alternativo.
- {{cssxref("@counter-style/pad", "pad")}}
  - : Se utiliza cuando necesita que las representaciones de marcador tengan una longitud mínima. Por ejemplo, si desea que los contadores comiencen en 01 y pasen por 02, 03, 04, etc., se utilizará el descriptor de pad. Para representaciones más grandes que el valor de relleno especificado, el marcador se construye normalmente.
- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Especifica un sistema al que recurrir si el sistema especificado no puede construir la representación de un valor de contador o si el valor de contador está fuera del rango especificado. Si el respaldo especificado tampoco representa el valor, entonces se usa el respaldo del estilo de respaldo, si se especifica uno. Si no se describen sistemas de respaldo o si la cadena de sistemas de respaldo no puede representar un valor de contador, finalmente volverá al estilo decimal.
- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Especifica los símbolos que se utilizarán para las representaciones de marcador. Los símbolos pueden contener cadenas, imágenes o identificadores personalizados. La forma en que se utilizan los símbolos para construir la representación del marcador depende del algoritmo especificado en el descriptor del sistema. Por ejemplo, si el sistema especificado es fijo, cada uno de los N símbolos especificados en el descriptor se utilizará para representar los primeros N símbolos de contador. Una vez que se haya agotado el conjunto de símbolos especificado, se utilizará el estilo alternativo para el resto de la lista.

    La siguiente regla `@counter-style` utiliza imágenes en lugar de símbolos de caracteres. Los valores de imagen para los símbolos son actualmente una función "en riesgo" y no están implementadas en ningún navegador.

    ```css
    @counter-style winners-list {
      system: fixed;
      symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
      suffix: " ";
    }
    ```

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Si bien la mayoría de los algoritmos utilizan los símbolos especificados en el descriptor de símbolos para construir la representación de marcadores, algunos sistemas, como 'aditivo', se basan en _tuplas aditivas_ descritas en este descriptor. Cada tupla aditiva consta de un símbolo de contador y un peso entero no negativo. Las tuplas aditivas deben especificarse en orden descendente de sus pesos.
- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Describe cómo leer el estilo de contador en sintetizadores de voz, como lectores de pantalla. Por ejemplo, el valor del símbolo del marcador se puede leer como números o letras para listas ordenadas o como señales de audio para listas desordenadas, según el valor de este descriptor.

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Especificación de símbolos con @counter-style

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

La regla de estilo de contador anterior se puede aplicar a listas como esta:

```css
.items {
  list-style: circled-alpha;
}
```

Lo que producirá listas como esta:

Ⓐ One

Ⓑ Two

Ⓒ Three

Ⓓ Four

Ⓔ Five

…

Ⓨ Twenty-five

Ⓩ Twenty-six

27 Twenty-seven

28 Twenty-eight

29 Twenty-nine

30 Thirty

Vea más ejemplos en la [página de demostración](https://mdn.github.io/css-examples/counter-style-demo/).

### Estilos de contador listos para usar

Encuentre una colección de más de 100 fragmentos de código de estilo de contador en el documento [Estilos de contador listos para usar](https://www.w3.org/TR/predefined-counter-styles/). Este documento proporciona estilos de contador que satisfacen las necesidades de los idiomas y culturas de todo el mundo.

El [Conversor de estilos de contador](https://r12a.github.io/app-counters/) extrae de esta lista para probar y crear código de copiar y pegar para estilos de contador.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- {{cssxref("symbols", "symbols()")}}, la notación funcional que crea estilos de contador anónimos.
- Funciones CSS {{Cssxref("counter", "counter()")}} y {{Cssxref("counters", "counters()")}}
- [Demostración de estilo contador](https://mdn.github.io/css-examples/counter-style-demo/) ([código](https://github.com/mdn/css-examples/tree/main/counter-style-demo))
