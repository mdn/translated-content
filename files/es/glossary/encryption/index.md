---
title: Encriptación
slug: Glossary/Encryption
---

En {{glossary("cryptography", "criptografía")}}, la **encriptación** es la conversión del {{glossary("cleartext", "lenguaje natural")}} en un texto codificado o {{glossary("ciphertext", "cifrado")}}. Un texto cifrado es utilizado para ser ilegible por lectores no autorizados.

La encriptación es una primitiva criptográfica: transforma un mensaje en texto plano en un texto cifrado usando un {{glossary("cipher", "algoritmo criptográfico")}}. La encriptación en los algoritmos modernos se lleva a cabo usando un algoritmo específico y un secreto, llamado la {{glossary("key", "clave")}}. Ya que la mayoría de los algoritmos son públicos, la clave debe ser secreta para que la encriptación sea segura.

![How encryption works.](encryption.png)

Sin conocer el secreto, la operación inversa, {{glossary("decryption", "desencriptación")}}, es matemáticamente costosa de realizar. Cómo de difícil resulte depende de la seguridad del algoritmo criptográfico elegido y evoluciona con el progreso del {{glossary("cryptanalysis", "criptoanálisis")}}.

## Saber más

- Saber má sobre [Encriptación y Desencriptación](/es/docs/Archive/Security/Encriptación_y_Desencriptación)
