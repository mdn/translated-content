---
title: Autenticación HTTP
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

HTTP nos brinda un marco general para el control de acceso y de autenticación. El esquema de autenticación HTTP más común es la autenticación "Basic". Esta página presenta el framework general de autenticación HTTP y muestra cómo restringir el acceso a tu servidor con la autenticación HTTP _Basic_.

## El marco general de autenticación HTTP

{{RFC("7235")}} define el marco de autenticación HTTP que puede ser usado por un servidor para revisar la solicitud de un cliente y por un cliente para proveer información de autenticación. El flujo de la revisión y la respuesta funciona de la siguiente manera: El servidor responde al cliente con un estado de respuesta {{HTTPStatus("401")}} (Unauthorized) y devuelve al cliente información sobre cómo autorizarse con un encabezado de respuesta {{HTTPHeader("WWW-Authenticate")}} que contiene al menos una revisión. Un cliente que quiera autenticarse con un servidor puede hacerlo incluyendo un encabezado de solicitud {{HTTPHeader("Authorization")}} con sus credenciales. Normalmente un cliente hará una solicitud de contraseña al usuario y luego enviará la solicitud incluyendo el encabezado `Authorization` correcto al servidor.

![](http-auth-sequence-diagram.png)

En el caso de una autenticación "Basic" como la mostrada en la figura, el intercambio se **debe** realizar sobre una conexión HTTPS (TLS) para que sea seguro.

### Autenticación Proxy (Proxy Authentication)

El mismo mecanismo de desafío y respuesta puede ser usada para _autenticación por proxy._ En este caso, es el proxy el que hace de intermediario y requiere la autenticación. Ambas autenticaciones (autenticación del recurso y autenticación en el proxy) pueden coexistir juntas, pero entonces es necesario un conjunto de cabeceras y códigos de estado diferentes. En el caso de los proxys, el código de estado para requerir autenticación es {{HTTPStatus("407")}} (Proxy Authentication Required), la cabecera de respuesta {{HTTPHeader("Proxy-Authenticate")}} contiene al menos un requerimiento aplicable en el proxy, y la cabecera de petición {{HTTPHeader("Proxy-Authorization")}} es usada para proveer la credencial en el servidor proxy.

### Prohibición de Acceso (Access Forbbiden)

Si el servidor proxy recibe unas credenciales válidas que no son adecuadas para acceder a un determinado recurso, el servidor respondera con el código de estado {{HTTPStatus("403")}} `Forbidden`. Diferente al código de estado {{HTTPStatus("401")}} `Unauthorized` o {{HTTPStatus("407")}} `Proxy Authentication Required`, donde la autenticación es imposible para ese usuario.

### Cabeceras `WWW-Authenticate` y `Proxy-Authenticate`

Las cabeceras de respuesta {{HTTPHeader("WWW-Authenticate")}} y {{HTTPHeader("Proxy-Authenticate")}} definen el método de autenticación que debe ser usado para obtener acceso a un recurso. Ellas especifican que esquema de autenticación debe ser usado para que el cliente que quiera autenticarse sepa como hacerlo. La síntaxis para estas cabeceras es la siguiente:

```
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

En el ejemplo, `<type>` es el esquema de autenticación ("Basic" es el esquema de autenticación mas usado e introducido en [esta página mas abajo](#basic_authentication_scheme)). La palabra _realm_ es usada para describir el área que protegida o para indicar el alance de la protección. Puede ser un mensaje como "Access to the staging site" o algo similar, pero que sea explicativo para que el usuario sepa que espacio intenta acceder.

### `Cabeceras Authorization` y `Proxy-Authorization`

La cabecera de consulta {{HTTPHeader("Authorization")}} y {{HTTPHeader("Proxy-Authorization")}} contiene las credenciales para autenticar a un user agent con un servidor (proxy). Aquí, el tipo es necesario necesario siguiendo las credenciales que pueden estar codificadas o encriptadas dependiendo de que tipo de esquema de autenticación se esté usando:

```
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Esquemas de autenticación

El marco general de autenticación HTTP es usado por varios esquemas de autenticación. Los esquemas pueden diferenciarse por la dureza en la seguridad y en su disponibilidad en software de clientes o servidores.

El esquema de autenticaón mas común es "Basic", que es introducido con mas detalle abajo. IANA mantiene una [lista de esquemas de autenticación](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), pero existen otros esquemas ofrecidos por proveedores de servicios, como Amazon AWS. Los esquemas de autenticación incluídas:

- **Basic** (ver {{rfc(7617)}}, credenciales codificadas en base64 . Ver mas abajo para mas información.),
- **Bearer** (ver {{rfc(6750)}}, bearer tokens de acceso en recursos protegidos mediante OAuth 2.0),
- **Digest** (ver {{rfc(7616)}}, has MD5 solo soportado en Firefox, ver [Error 472823 en Firefox](https://bugzil.la/472823) para encriptado SHA),
- **HOBA** (ver {{rfc(7486)}} (borrador), **H**TTP **O**rigin-**B**ound **A**uthentication, basado en firma digital),
- **Mutual** (ver [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11)),
- **AWS4-HMAC-SHA256** (ver [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)).

## Esquema de autenticación Basic

El esquema de autenticación HTTP "Basic" está definido en {{rfc(7617)}}, que transmite las credenciales como un par usuario/contraseña codificado usando base64.

### Seguridad de la autenticación básica

Como el usuario y la contraseña son pasados a través de la red como texto plano (éste es codificado en base64, pero base64 puede ser decodificado), el esquema de autenticación básico no es seguro. HTTPS / TLS debe ser usado junto a la autenticación básica. Sin éstas mejoras de seguridad, la autenticación básica no debe ser usada para proteger información sensible o valiosa.

### Restringiendo acceso con Apache y autenticación básica

Para proteger por contraseña un directorio en un servidor Apache, necesitas usar los ficheros .htaccess y .htpasswd.

El fichero .htaccess normalmente tiene esta forma:

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

El fichero .htaccess hace una referencia al fichero .htpasswd, que contiene en cada línea un nombre de usuario y su respectiva contraseña separadas por dos puntos (":"). En este ejemplo no puedes ver la contraseña porque está [encriptada](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (utilizando md5 en este caso). Además, puedes nombrar el fichero .htpasswd de forma diferente si tu quieres, pero teniendo en cuenta que no debería ser accesible por nadie. (Apache está configurado normalmente para prevenir el acceso a ficheros .ht\*).

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restringiendo acceso con nginx y autenticación básica

En el caso de nginx necesitarás especificar la localización a proteger y usar la directiva **auth_basic**, que provee el nombre del área protegida. La directiva **auth_basic_user_file** apunta al fichero .htpasswd que contiene las credenciales de usuario encriptadas, como en el ejemplo de Apache de mas arriba.

```
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Acceso usando credenciales en la URL

Muchos clientes también le permiten evitar el mensaje de inicio de sesión enviando el usuario y la contraseña codificados por la URL.

```
https://username:password@www.example.com/
```

**El uso de estas URLs está obsoleto.** En Chrome, la cadena usuario:contraseña@ dentro de URLs incluso es [cortada](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7)por razones de seguridad. En Firefox se comprueba si el sitio actualmente requiere una autenticación, y de no ser así, Firefox avisará al usuario con un mensaje "Está a punto de iniciar sesión en el sitiio "www\.example.com" con el usuario "username", pero el sitiio web no requiere autenticación. Puede ser un intento de engañarlo.".

## Ver también

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
