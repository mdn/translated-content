---
title: SMTP
slug: Glossary/SMTP
---

{{GlossarySidebar}}

**SMTP** (Protocolo de Transferencia de Correo Simple por sus siglas en inglés) es un [protocolo](/es/docs/Glossary/Protocol) utilizado para enviar un nuevo correo. Como [POP3](/es/docs/Glossary/POP) y [NNTP](/es/docs/Glossary/NNTP), es un protocolo dirigido por [estado de máquina](/es/docs/Glossary/State_machine).

El protocolo es relativamente simple. Las complicaciones principales incluyen soportar varios mecanismos de autenticación ([GSSAPI](http://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](http://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](http://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, etc.), manejo de respuestas de error, y retroceder cuando los mecanismos de autenticación fallan (p. ej., el servidor asegura que soporta un mecanismo, pero no).

## Véase también

- [SMTP](https://es.wikipedia.org/wiki/Protocolo_para_transferencia_simple_de_correo) en Wikipedia
- [Glosario de MDN Web Docs](/es/docs/Glossary)
  - {{Glossary("NNTP")}}
  - {{Glossary("POP", "POP3")}}
  - {{Glossary("Protocol", "protocolo")}}
  - {{Glossary("State_machine", "estado de máquina")}}
