---
title: Autenticación
slug: Glossary/Authentication
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

La **Autenticación** es, en general, el proceso de demostrar que un hecho es genuino. Más específicamente, en seguridad web, es el proceso de verificar la identidad declarada de una entidad, como un usuario. Esto permite decidir si se le concede al usuario el acceso que solicita, por ejemplo, para iniciar sesión en una cuenta determinada.

La autenticación suele llevarse a cabo pidiendo al usuario que presente un identificador junto con una {{glossary("credential", "credencial")}}, como una contraseña, un código de un solo uso o una aserción firmada con una clave privada. Después, el sistema comprueba el vínculo entre el identificador del usuario y la credencial para decidir si lo autentica o no.

Los tipos de información de autenticación, también llamados _factores de autenticación_, se suelen clasificar en tres categorías:

- Algo que el usuario conoce, como una contraseña.
- Algo que el usuario tiene, como un teléfono.
- Algo que el usuario es, como una huella dactilar.

Los sistemas de {{glossary("Multi-factor authentication", "autenticación multifactor")}} (MFA, por sus siglas en inglés) exigen al usuario más de un factor: por ejemplo, una contraseña combinada con un código de un solo uso generado por una aplicación de autenticación en el teléfono del usuario.

## Véase también

- {{rfc("4949", "Internet Security Glossary")}}
