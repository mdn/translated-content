---
title: <frequency>
slug: Web/CSS/frequency
---

{{CSSRef}}

## Resumen

El tipo de dato [CSS](/es/docs/Web/CSS) `<frequency>` denota una dimensión en frecuencia, como el tono de una voz hablando. Consisste en un valor {{cssxref("&lt;number&gt;")}} seguido inmediatamente por la unidad. Como en cualquier dimensión CSS, no hay espacio entre la unidad literal y el número.

Las siguientes unidades deben ser usadas:

- [`Hz`](), que representa una frecuencia en Hertz. Ejemplos: `0Hz`, `1500Hz`, `10000Hz`.
- [`kHz`](), que representa una frecuencia en kilohertz. Ejemplos: `0kHz`, `1.5kHz`, `10kHz`.

Aunque todas las unidades representen la misma frecuencia para el valor `0`, la unidad no debe ser omitida en ese caso, puesto que no es un valor {{cssxref("length")}}: `0`, no es válido, y no representa `0Hz`, `0kHz`. Aunque las unidades sean insensibles a mayúsculas en CSS, es buena práctica usar una H mayúscula para `Hz` y `kHz`, como indica el [SI](https://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades), siendo [Hertz](http://en.wikipedia.org/wiki/Heinrich_Hertz) un apellido.

## Ejemplos

**Valores de frecuencia permitidos**

| Código    | Significado                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `12Hz`    | Entero positivo.                                                                                                   |
| `-456kHz` | Entero negativo.                                                                                                   |
| `4.3Hz`   | No entero.                                                                                                         |
| `14KhZ`   | La unidad es insensible al uso de mayúsculas, aunque no se recomienda una representación que no esté acorde al SI. |
| `+0Hz`    | Cero, con un símbolo `+ y la unidad`.                                                                              |
| `-0kHz`   | Cero, con un símbolo `-` y la unidad (Aunque no sea común, es un valor permitido).                                 |

**Valores de frecuencia no permitidos**

| Código | Significado                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------- |
| `12.0` | Éste es un tipo {{cssxref("&lt;number&gt;")}}, no un tipo \<frequency>, debe tener una unidad.                 |
| `7 Hz` | No se permite espacio entre el número {{cssxref("&lt;number&gt;")}} y la unidad.                               |
| `0`    | El valor cero puede ser escrito sin unidad solo para tipo {{cssxref("&lt;length&gt;")}}, no para \<frequency>. |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
