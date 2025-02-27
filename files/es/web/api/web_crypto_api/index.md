---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
---

{{DefaultAPISidebar("Web Crypto API")}}{{SeeCompatTable}}

La **Web Crypto API** es una interfaz que permite a un script usar primitivos criptográficos con el fin de construir sistemas utilizando criptografía.

> [!WARNING]
> Esta API proporciona una serie de primitivos criptográficos de bajo nivel. Es muy fácil hacer un mal uso de ellos, y las trampas involucradas pueden ser muy sutiles.
>
> Incluso suponiendo que se utilicen correctamente las funciones criptográficas básicas, la gestión segura de las claves y el diseño general del sistema de seguridad son extremadamente difíciles de conseguir correctamente, y generalmente son el dominio de expertos en seguridad especializados.
>
> Los errores en el diseño e implementación del sistema de seguridad pueden hacer que la seguridad del sistema sea completamente ineficaz.
>
> **Si no estás seguro de saber lo que estás haciendo, probablemente no deberías usar esta API.**

Una de las principales características de esta API es que permite la manipulación y almacenamiento de claves privadas y secretas sin la capa de bits de la clave para poder usarlo con Javascript.

Esta interfaz permite el acceso a las siguientes primitivos:

- **_digest_**, la capacidad para calcular un hash de un bloque arbitrario de datos, con el fin de detectar cualquier cambio en él.
- **_mac_**, la capacidad de calcular un código de mensaje de autenticación.
- **_sign_** and **_verify_**, la capacidad de firmar digitalmente un documento, y de verificar una firma.
- **_encrypt_** and **_decrypt_**, la capacidad de codificar o descodificar un documento.
- **_import_** and **_export_**, la capacidad de importar o exportar una clave.
- **_key generation_**, la capacidad de crear una llave criptográfica segura o un par de llaves (llave pública y llave privada), sin el uso de una clave base, pero usando la entropía disponible en el sistema local.
- **_key wrapping_** and **_unwrapping_**, la capacidad de transmitir y recibir una llave de un tercero, codificada usando otra llave sin exponer dicha llave a JavaScript.
- **_random_**, la capacidad de generar criptográficamente números pseudo-aleatorios fuertes.

La Web Crypto API no resuelve todos los problemas criptográficos a los que un sitio web o una aplicación puedan encontrarse:

- No flexibiliza el modelo de [same-origin security model](/es/docs/Web/Security/Same-origin_policy) del navegador, como los casos en que las claves son emitidas por entidades centralizadas utilizadas por varios sitios web.
- No interactúa con hardware dedicado, tal y como smart cards, pendrives, o generadores aleatorios.

> **Advertencia:** **¡Atención!**
>
> - El simple hecho de hacer uso de la criptografía no hace a tu sistema seguro. La Seguridad es un **proceso** que constamentemente evalua el riesgo de un sistema en el contexto de uso. The context and the risks experienced evolve over time.
> - Al aplicar seguridad, todo el **sistema** debe considerarse. En el caso de la Web Crypto API, los desarrolladores Web no sólo deben considerar la seguridad del script, sino también la seguridad de la conexión al servidor y los datos que éste podría comunicar sin encriptar. La seguridad en general será tan débil como la parte más débil de todo el sistema.

## Interfaces

Algunos navegadores implementan una interfaz llamada {{domxref("Crypto")}} sin tenerla bien definida o criptográficamente siendo llamada. Con el fin de evitar conclusiones, los métodos y propiedades de esta interfaz van a ir implementados en la Web Crypto API, y todos los métodos de la Web Crypto API están disponibles en una nueva interfaz: {{domxref("SubtleCrypto")}}.
La propiedad {{domxref("Crypto.subtle")}} da acceso a un objeto para implementarla.

## Casos de uso

La Web Crypto API puede ser usada para:

- Verificar que los datos no han sido alterados por terceros. Incluso si los datos se almacenan de forma clara, el almacenamiento de una firma, generada a partir de una contraseña, permite a las personas que conocen la contraseña saber que es auténtica.

## Especificaciones

{{Specifications}}
