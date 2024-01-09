---
title: Criptografía de clave simétrica
slug: Glossary/Symmetric-key_cryptography
---

{{GlossarySidebar}}

La criptografía de clave simétrica es un término utilizado para los algoritmos criptográficos que utilizan la misma clave para el cifrado y el descifrado. La clave se suele llamar "clave simétrica" o "clave secreta".

Esto generalmente se contrasta con {{Glossary ("public-key cryptography","criptografía de clave pública")}} en el que las claves se generan en pares, y la transformación realizada por una clave solo se puede revertir utilizando la otra clave.

Los algoritmos de clave simétrica son seguros y altamente eficientes cuando se usan de manera adecuada, de modo que pueden usarse para cifrar grandes cantidades de datos sin tener un efecto negativo en el rendimiento.

La mayoría de los algoritmos de clave simétrica actualmente en uso son cifrados de bloque: esto significa que cifran los datos bloque por bloque. El tamaño de cada bloque está fijado y determinado por el algoritmo: por ejemplo, {{Glossary ("AES","AES")}} utiliza bloques de 16 bytes. Los cifrados de bloque siempre se utilizan con un _modo_, que especifica cómo cifrar de forma segura los mensajes que son más largos que el tamaño de bloque. Por ejemplo, AES es un cifrado, mientras que CTR, CBC y GCM son todos modos. El uso de un modo inapropiado, o el uso de un modo incorrecto, puede socavar completamente la seguridad proporcionada por el cifrado subyacente.
