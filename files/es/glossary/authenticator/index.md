---
title: Autenticador
slug: Glossary/Authenticator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **autenticador** es una entidad capaz de realizar las operaciones criptográficas necesarias para registrar y autenticar usuarios, y de almacenar de forma segura las claves criptográficas que se usan en esas operaciones.

Un autenticador puede implementarse en hardware o en software. Puede estar integrado en el dispositivo, como el sistema [Touch ID](https://es.wikipedia.org/wiki/Touch_ID) en los dispositivos de Apple o el sistema [Windows Hello](https://es.wikipedia.org/wiki/Windows_10#Sistema_y_seguridad), o ser un módulo extraíble, como una [YubiKey](https://es.wikipedia.org/wiki/YubiKey).

La [API Web Authentication](/es/docs/Web/API/Web_Authentication_API) pone los autenticadores a disposición de los sitios web como parte de la [API Credential Management](/es/docs/Web/API/Credential_Management_API). Esto permite que los sitios web usen autenticadores para generar {{glossary("credential", "credenciales")}} basadas en {{glossary("public-key cryptography", "criptografía de clave pública")}}, que después sirven para que los usuarios inicien sesión en los sitios web.

## Véase también

- Términos relacionados del glosario:
  - {{glossary("Authentication", "Autenticación")}}
  - {{glossary("Credential", "Credencial")}}
