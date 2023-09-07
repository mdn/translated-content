---
title: Algoritmo criptográfico
slug: Glossary/Cipher
---

En {{glossary("cryptography", "criptografía")}}, un algoritmo criptográfico es un algoritmo que puede {{glossary("encryption", "encriptar")}} {{glossary("cleartext", "texto en lenguaje natural")}} para hacerlo ilegible, y para que sea {{glossary("decryption", "desencriptado")}} con el fin de recuperar el texto original.

Los algoritmos de cifrado eran muy comunes mucho antes de la era de la información (e.g., [cifrados por sustitucion](https://es.wikipedia.org/wiki/Cifrado_por_sustituci%C3%B3n) y [cifrados por transposición](https://es.wikipedia.org/wiki/Cifrado_por_transposici%C3%B3n)), pero ninguno de ellos era criptográficamente seguros excepto [one-time pad](https://es.wikipedia.org/wiki/Libreta_de_un_solo_uso).

Los algoritmos modernos de cifrado están diseñados para resistir a {{glossary("attack", "ataques")}} descubiertos por un {{glossary("cryptanalysis", "criptoanalista")}}. No hay garantía de que todos los métodos de ataque hayan sido descubiertos, pero cada algoritmo es probado contra todos los tipos de ataque conocidos.

Los algoritmos de cifrado funcionan de dos maneras, una es como [cifrado por bloques](https://es.wikipedia.org/wiki/Cifrado_por_bloques) en bloques sucesivos o buffers de datos, y la otra es como un [cifrado en flujo](https://es.wikipedia.org/wiki/Cifrador_de_flujo) en un flujo continuo de datos (generalmente de audio o vídeo).

También son clasificados en función de cómo se manejan sus {{glossary("key", "claves")}}:

- Los [algoritmos de clave simétrica](https://es.wikipedia.org/wiki/Criptograf%C3%ADa_simétrica) usan la misma clave para codificar y para decodificar un mensaje. La clave debe ser enviada de forma segura para mantener la confidencialidad del mensaje.
- Los [algoritmos de clave asimétrica](https://es.wikipedia.org/wiki/Criptograf%C3%ADa_asimétrica) usan claves diferentes para codificar y para decodificar.

## Saber más

### Conocimiento general

- [Algoritmo criptográfico](https://es.wikipedia.org/wiki/Algoritmo_criptográfico) en Wikipedia
