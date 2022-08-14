---
title: SMTP
slug: Glossary/SMTP
tags:
  - Colaboración
  - Compartiendo
  - Glosario
  - Infraestructura
  - Principiante
translation_of: Glossary/SMTP
---
**SMTP** (Protocolo de Transferencia de Correo Simple por sus siglas en inglés) es un [protocolo](/es/docs/Glossary/Protocol) utilizado para enviar un nuevo correo. Como [POP3](/es/docs/Glossary/POP) y [NNTP](/es/docs/Glossary/NNTP), es un protocolo dirigido por [estado de máquina](/es/docs/Glossary/State_machine).

El protocolo es relativamente simple. Las complicaciones principales incluyen soportar varios mecanismos de autenticación ([GSSAPI](http://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](http://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](http://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, etc.), manejo de respuestas de error, y retroceder cuando los mecanismos de autenticación fallan (p. ej., el servidor asegura que soporta un mecanismo, pero no).

1.  [Glosario](/es/docs/Glossary)

    1.  [NNTP](/es/docs/Glossary/NNTP)
    2.  [POP3](/es/docs/Glossary/POP)
    3.  [protocolo](/es/docs/Glossary/Protocol)
    4.  [estado de máquina](/es/docs/Glossary/State_machine)

2.  Artículos de Wikipedia

    1.  [SMTP](https://es.wikipedia.org/wiki/Protocolo_para_transferencia_simple_de_correo)
