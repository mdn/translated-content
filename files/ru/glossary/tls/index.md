---
title: TLS
slug: Glossary/TLS
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{GlossarySidebar}}

**Transport Layer Security (TLS)**, ранее известный как {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, — это {{Glossary("protocol", "протокол")}} используемый приложениями для организации защищённой передачи данных по сети, предотвращения взломов и прослушивания электронной почты, веб-страниц, сообщений и других протоколов. TLS и SSL являются клиент-серверными протоколами, которые обеспечивают конфиденциальность связи с помощью криптографии для обеспечения безопасности в сети. Когда клиент и сервер обмениваются данными с помощью TLS, то третья сторона не может подслушать или подделать какое-либо сообщение.

Все современные браузеры поддерживают протокол TLS, требуя от сервера предоставления действующего {{Glossary("Digital certificate", "цифрового сертификата")}}, подтверждающего его подлинность для установления безопасного соединения. И клиент, и сервер могут взаимно аутентифицировать друг друга, если обе стороны предоставляют свои индивидуальные цифровые сертификаты.

> [!NOTE]
> Все основные браузеры начали удалять поддержку TLS 1.0 и 1.1 в начале 2020 года. Поэтому необходимо убедиться, что ваш веб-сервер поддерживает TLS 1.2 или 1.3. Начиная с версии 74, Firefox будет возвращать ошибку [«Не удалось установить безопасное соединение»](https://support.mozilla.org/ru/kb/secure-connection-failed-firefox-did-not-connect) при подключении к серверам, использующим более старые версии TLS ([Firefox bug 1606734](https://bugzil.la/1606734)).

## Смотрите также

- [TLS](https://ru.wikipedia.org/wiki/TLS) в Википедии
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (The Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
- [Transport Layer Security](/ru/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- [Глоссарий](/ru/docs/Glossary)
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
