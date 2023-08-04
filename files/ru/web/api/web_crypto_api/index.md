---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
---

{{DefaultAPISidebar("Web Crypto API")}}{{SeeCompatTable}}

**Web Crypto API** – интерфейс, позволяющий использовать криптографические примитивы для построения систем, манипулировать, хранить секретные ключи без необходимости делать доступными базовые биты ключа для JavaScript.

Интерфейс открывает доступ к следующим примитивам:

- _digest_, the ability to compute a hash of an arbitrary block of data, in order to detect any change in it.
- _mac_, the ability to compute a message authentication code.
- _sign_ и _verify_, the ability to digitally sign a document, and to verify a signature.
- _encrypt_ и _decrypt_, the ability to encode or decode a document.
- _import_ и _export_, the ability to import a key or export a key.
- _key generation_, the ability to create a cryptographically secure key, or key pair, without the use of base key, but using the available entropy of the local system.
- _key wrapping_ and _unwrapping_, the ability to transmit, and to receive, a key from a third party, encoded using another key, without exposing the underlying key to JavaScript.
- _random_, способность генерировать криптографически достоверные псевдослучайные числа.

Web Crypto API не решает всех проблем, которые касаются использования криптографии на Web-сайтах или приложениях:

- Она не заменяет "[с](/ru/docs/Web/Security/Same-origin_policy)обственной модели безопасности" браузера (когда на некоторых Web-сайтах используются свои собственные ключи).
- Оно не взаимодействует со специальным аппаратным обеспечением (смарт-карты, USB-ключи или генераторы случайных чисел).

> **Предупреждение:** **Внимание!**
>
> - Само по себе использование криптографии не делает систему безопасной. Безопасность – это **процесс** постоянной оценки рисков, возникающих в контексте эксплуатации системы. Контекст, как и риски, изменяются с течением времени.
> - When dealing with security, the whole **system** must be considered. In the case of the Web Crypto API, Web developers shouldn't consider only the security of the script, but the security of the connection to the server, because using Web Crypto over HTTP is not secure. The overall security can't be stronger than the security of the weakest part of the overall system.

## Интерфейсы

Некоторые браузеры реализовали интерфейс {{domxref("Crypto")}}, но сделали это недостаточно точно или без должного уровня безопасности. Чтобы избежать конфуза с модулем {{domxref("Crypto")}} из пакета Node, методы и свойства интерфейса были перенесены в новый интерфейс: {{domxref("SubtleCrypto")}}. Свойство {{domxref("Crypto.subtle")}} даёт доступ к объекту, реализующему Web Crypto API.

## Использование

Web Crypto API может использоваться для:

- того, чтобы удостовериться в том, что данные не подделаны третьей стороной. Если информация хранится в открытом хранилище, подпись, сгенерированная с помощью пароля, позволяет людям, знающим пароль, выяснить, имеют ли они дело с оригинальными значениями или же нет.

## Спецификации

| Specification                                            |
| -------------------------------------------------------- |
| [Web Cryptography API](https://w3c.github.io/webcrypto/) |

## Совместимость с браузерами

{{Compat("api.Crypto")}}
