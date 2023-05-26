---
title: keygen
slug: orphaned/Web/HTML/Element/keygen
original_slug: Web/HTML/Element/keygen
---

El elemento `keygen` de HTML existe para facilitar la generación de llaves, y el envío de la clave pública como parte de un formulario HTML. Este mecanismo está diseñado para utilizarse con sistemas de gestión de certificados basados en la Web. Se espera que el elemento `keygen` se utilice en un formulario HTML, junto con otra información necesaria para la construcción de una solicitud de certificado, y que el resultado del proceso será un certificado firmado.

### Contexto de uso

| Las categorías de contenido | contenido dinámico , el contenido de redacción , contenido interactivo, lista , labelable , submittable , reajustable asociada elemento de formulario. |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Contenido permitido         | ninguno                                                                                                                                                |
| Omisión de etiquetas        | elemento vacío, sólo tiene una etiqueta de inicio                                                                                                      |
| Elementos padres permitidos | donde se espere contenido de frases                                                                                                                    |
| Documento normativo         | [HTML 5, la sección 4.10.5](http://www.w3.org/TR/html5/the-button-element.html#the-keygen-element)                                                     |

### Atributos

### Uso

- autofocus
  - : Este atributo booleano permite especificar que el control debe tener el foco de entrada cuando se cargue la página, a menos que el usuario lo anule, por ejemplo, al escribir en un control diferente. Sólo un elemento de formulario en un documento puede tener el atributo **autofocus,** que es un valor booleano.
- {{ Htmlattrdef ("challenge") }}
  - : Una cadena de desafío que se presenta junto con la clave pública. El valor predeterminado es una cadena vacía si no se especifica.
- {{ Htmlattrdef ("disabled") }}
  - : Este atributo booleano indica que el control del formulario no está disponible para la interacción.
- form
  - : El elemento form al que este elemento está asociado (el _propietario del formulario)._ El valor del atributo debe ser un **id** de un elemento {{ HTMLElement ("form") }} en el mismo documento. Si este atributo no se especifica, este elemento debe ser un descendiente de un elemento {{ HTMLElement ("form") }}. Este atributo le permite colocar elementos \<keygen> en cualquier lugar dentro de un documento, no sólo como descendientes del formulario.
- {{ Htmlattrdef ("keytype") }}
  - : El tipo de clave generada. El valor por defecto es `RSA` .
- name
  - : El nombre del control, que se envía con los datos del formulario.

El elemento se escribe como sigue:

```
<keygen name="name" challenge="challenge string" keytype="type" keyparams="pqg-params">
```

El parámetro `keytype` se utiliza para especificar qué tipo de clave se generará. Los valores válidos son " `RSA` ", que es el valor predeterminado," `DSA` "y" `EC` ". Los atributos `name` y `challenge` son necesarios en todos los casos. El atributo `keytype` es opcional para la generación de claves RSA y obligatorio para la generación de claves DSA y CE. El atributo `keyparams` es necesario para la generación de claves DSA y CE e ignorado para la generación de claves RSA. `PQG` es sinónimo de `keyparams` . Es decir, usted puede especificar `keyparams="pqg-params"` o `pqg="pqg-params"` .

Para las claves RSA, el parámetro `keyparams` no se utiliza (se ignora si está presente). El usuario puede tener una selección de la fuerza de la clave RSA. En la actualidad, el usuario tiene que elegir entre los grados "alto" (2048 bits) y "medio" (1024 bits).

Para las claves DSA, el parámetro `keyparams` especifica los parámetros DSA PQG que se van a utilizar en el proceso de creación de llaves. El valor del parámetro `pqg` es en BASE64, DER codificado Dss-Parms como se especifica en el IETF [RFC 3279](ftp://ftp.rfc-editor.org/in-notes/rfc3279.txt) . El usuario puede tener una variedad de tamaños de claves DSA, lo que permite al usuario elegir una de las dimensiones definidas en el estándar DSA.

Para las claves CE, el parámetro `keyparams` especifica el nombre de la curva elíptica en la que será generada la clave. Normalmente es una cadena de la tabla en [nsKeygenHandler.cpp](http://mxr.mozilla.org/mozilla-central/source/security/manager/ssl/src/nsKeygenHandler.cpp?mark=179-185,187-206,208-227,229-256#177) . (Tenga en cuenta que sólo un subconjunto de las curvas nombradas puede ser compatible con un navegador en particular.) Si la cadena parámetro `keyparams` no es el nombre de una curva reconocible, entonces una curva se elige de acuerdo a la fortaleza elegida por el usuario (bajo, medio, alto), utilizando la curva llamada " `secp384r1` " para alto, y la curva llamada" `secp256r1` " para claves de fuerza mediana. (Nota: la elección de la cantidad de fortalezas, los valores por defecto para cada fuerza, y la interfaz de usuario que el usuario se ofrece una opción, están fuera del alcance de esta especificación.)

El elemento `keygen` sólo es válido dentro de un formulario HTML. Esto causará que algún tipo de selección se presentará al usuario para la selección del tamaño de la clave. La interfaz de usuario para la selección puede ser un menú, botones de radio, o posiblemente algo más. El navegador presentará varias fuerzas posibles. Actualmente, se ofrecen dos fuerzas, alta y media. Si el navegador del usuario está configurado para el soporte de hardware de cifrado (por ejemplo, "tarjetas inteligentes"), también puede dársele la opción al usuario de dónde generar la clave, es decir, si en una tarjeta inteligente o en el software y si se almacenan en el disco.

Cuando el botón de enviar es pulsado, un par de claves del tamaño seleccionado se genera. La clave privada se cifra y se almacena en la base de datos de claves local.

```
   PublicKeyAndChallenge:: SEQUENCE {
       SPKI SubjectPublicKeyInfo,
       challenge IA5String
   }
   SignedPublicKeyAndChallenge:: SEQUENCE {
       publicKeyAndChallenge PublicKeyAndChallenge,
       signatureAlgorithm AlgorithmIdentifier,
       firma BIT STRING
   }
```

La clave pública y la cadena de desafío son codificadas con DER como PublicKeyAndChallenge, a continuación, firmados digitalmente con la clave privada para producir una SignedPublicKeyAndChallenge. El SignedPublicKeyAndChallenge es base64, y los datos ASCII finalmente se envía al servidor como un par de nombre/valor de formulario, donde el nombre es _name_ especificado por el atributo `name` del elemento `keygen`. Si no hay cadena de desafío se proporciona, entonces será codificada como IA5String de longitud cero.

He aquí un ejemplo de envío de formularios, como sería entregado a un programa CGI en el servidor HTTP:

```
   CommonName = John Doe + y e-mail = doe@foo.com y org = Foobar + + Informática Corp. y
   orgunit = Oficina + de + la burocracia y la localidad Ciudad X = y = estado de California y en el país = EE.UU. y
   key = MIHFMHEwXDANBgkqhkiG9w0BAQEFAANLADBIAkEAnX0TILJrOMUue% 2BPtwBRE6XfV% 0AWtKQbsshxk5ZhcUwcwyvcnIq9b82QhJdoACdD34rqfCAIND46fXKQUnb0mvKzQID% 0AAQABFhFNb3ppbGxhSXNNeUZyaWVuZDANBgkqhkiG9w0BAQQFAANBAAKv2Eex2n% 2FS% 0Ar 2F7iJNroWlSzSMtTiQTEB%%%% 2BADWHGj9u1xrUrOilq 2Fo2cuQxIfZcNZkYAkWP4DubqW 0Ai0% 2F% 3D% 2FrgBvmco
```

## Ejemplos

- [Sample form with RSA KEYGEN element](https://bugzilla.mozilla.org/attachment.cgi?id=380749)
- [Sample form with DSA KEYGEN element and PQG Parameters](https://bugzilla.mozilla.org/attachment.cgi?id=380750)
- [Sample form with DSA KEYGEN element but no PQG Parameters](https://bugzilla.mozilla.org/attachment.cgi?id=380751)
- [Sample form with EC KEYGEN element](https://bugzilla.mozilla.org/attachment.cgi?id=380752)

## Compatibilidad del navegador

| Navegador         | Versión más baja |
| ----------------- | ---------------- |
| Internet Explorer | ---              |
| Firefox (Gecko)   | 1.0 (1.0)        |
| Opera             | 3.0              |
| Safari (WebKit)   | 1.2 (125)        |
