---
title: Modo de operación de un cifrado por bloques
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **modo de operación de un cifrado por bloques**, que en contexto suele llamarse simplemente "modo", especifica cómo debe usarse un cifrado por bloques para cifrar o descifrar mensajes que superan el tamaño del bloque.

La mayoría de los algoritmos de clave simétrica que se usan actualmente son cifrados por bloques: esto significa que cifran los datos bloque a bloque. El tamaño de cada bloque es fijo y lo determina el algoritmo: por ejemplo, AES usa bloques de 16 bytes. Los cifrados por bloques siempre se usan con un _modo_, que especifica cómo cifrar de forma segura los mensajes que superan el tamaño del bloque. Por ejemplo, AES es un cifrado, mientras que CTR, CBC y GCM son modos. Usar un modo inapropiado, o usarlo de forma incorrecta, puede comprometer por completo la seguridad que ofrece el cifrado subyacente.
