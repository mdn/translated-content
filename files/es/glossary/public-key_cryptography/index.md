---
title: Criptografía de clave pública
slug: Glossary/Public-key_cryptography
---

{{GlossarySidebar}}

La criptografía de clave pública es un sistema criptográfico en el que las claves vienen en pares. La transformación realizada por una de las claves solo se puede deshacer con la otra clave. Una clave (la clave privada) se mantiene secreta mientras que la otra se hace pública.

Cuando se usa para firmas digitales, la clave privada se usa para firmar y la clave pública para verificar. Esto significa que cualquier persona puede verificar una firma, pero solo el propietario de la clave privada correspondiente podría haberla generado.

Cuando se utiliza para el cifrado, la clave pública se utiliza para cifrar y la clave privada se utiliza para descifrar. Esto le da a los sistemas de cifrado de clave pública una ventaja sobre los sistemas de cifrado simétrico, ya que la clave de cifrado se puede hacer pública: cualquier persona podría cifrar un mensaje al propietario de la clave privada, pero solo el propietario de la clave privada podría descifrarlo. Sin embargo, suelen ser mucho más lentos que los algoritmos simétricos y el tamaño del mensaje que pueden cifrar es proporcional al tamaño de la clave, por lo que no se ajustan bien a los mensajes largos.

Como resultado, es común que un sistema de cifrado utilice un algoritmo simétrico para cifrar el mensaje, y luego un sistema de clave pública para cifrar la clave simétrica. Esta disposición puede conferir los beneficios de ambos sistemas.

Los sistemas de cifrado de clave pública más utilizados son RSA (para firma y encriptación), DSA (para firma) y Diffie-Hellman (para acuerdo de clave).
