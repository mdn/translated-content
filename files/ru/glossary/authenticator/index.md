---
title: Аутентификатор
slug: Glossary/Authenticator
l10n:
  sourceCommit: 46efd6ac9e9689b9a18fc4192ecc4e4a1a3d7c50
---

**Аутентификатор** — это сущность, которая может выполнять криптографические операции, необходимые для регистрации и аутентификации пользователей, а также безопасно хранить криптографические ключи, используемые в этих операциях.

Аутентификатор может быть реализован аппаратно или программно. Он может быть встроен в устройство, например система [Touch ID](https://ru.wikipedia.org/wiki/Touch_ID) в устройствах Apple или система [Windows Hello](https://ru.wikipedia.org/wiki/Windows_10#System_security), либо представлять собой съёмный модуль, например [YubiKey](https://ru.wikipedia.org/wiki/YubiKey).

[Web Authentication API](/ru/docs/Web/API/Web_Authentication_API) предоставляет аутентификаторы веб-сайтам в рамках [Credential Management API](/ru/docs/Web/API/Credential_Management_API). Это позволяет веб-сайтам использовать аутентификаторы для генерации {{glossary("credential", "учётных данных")}} на основе {{glossary("public-key cryptography", "криптографии с открытым ключом")}}, которые затем можно использовать для входа пользователей на веб-сайты.

## Смотрите также

- Связанные термины глоссария:
  - {{glossary("Authentication", "Аутентификация")}}
  - {{glossary("Credential", "Учётные данные")}}
