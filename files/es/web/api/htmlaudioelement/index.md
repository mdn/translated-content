---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
---

{{APIRef("HTML DOM")}}

La interfaz `HTMLAudioElement` proporciona acceso a las propiedades de los elementos {{ HTMLElement("audio") }}, así como métodos para manipularlos. Se deriva de la interfaz [`HTMLMediaElement`](/en/DOM/HTMLMediaElement); se implementa por medio de `nsIDOMHTMLMediaElement`.

Para obtener más detalles sobre cómo usar las caracterísitcas de transmisión de sonido que expone esta interfaz, por favor consulta [Introducción a la extensión de la API de sonido](/en/Introducing_the_Audio_API_Extension).

## Propiedades

| Nombre                                               | Tipo               | Descripción                                                                                                                                                                                                                  |
| ---------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mozCurrentSampleOffset` {{ non-standard_inline() }} | unsigned long long | Indica el desplazamiento actual de la transmisión de sonido que fue creada por una llamada a `mozWriteAudio()`. Esta posición de desplazamiento se especifica como el número de muestras desde que se inició la transmisión. |

## Métodos

| Nombre y argumentos                                                            | Retorno            | Descripción                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Audio()`                                                                      | `HTMLAudioElement` | Constructor para elementos de audio. La propiedad **preload** del objeto devuelto se establece en `auto`.                                                                                                                                                      |
| `Audio(en DOMString src)`                                                      | HTMLAudioElement   | Constructor para elementos de audio. La propiedad **preload** del objeto devuelto se establece a `auto`; la propiedad **src** se establece al valor del argumento . El navegador comienza una selección asíncrona del recurso antes de que devuelva el objeto. |
| `mozSetup(in PRUint32 channels, in PRUint32 rate)` {{ non-standard_inline() }} | -                  | Configura la transmisión de sonido para escritura. Especificas como parámetros el número de canales (1 para mono o 2 para estéreo), a continuación la frecuencia de muestreo ((44100 for 44.1kHz, por ejemplo).                                                |
| `mozWriteAudio(in jsval data)` {{ non-standard_inline() }}                     | `unsigned long`    | Inserta en la transmisión la escritura de sonido en la posición de desplazamiento actual . Devuelve el número de bytes que se han escrito en la transmisión.                                                                                                   |

## Consulta también

- [Introducción a la extensión de la API de sonido](/en/Introducing_the_Audio_API_Extension)
- {{ HTMLElement("audio") }}
