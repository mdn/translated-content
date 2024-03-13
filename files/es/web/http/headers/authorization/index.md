---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

La cabecera de petición **`Authorization`** contiene las credenciales para autenticar a un usuario en un servidor, usualmente luego de que el servidor haya respondido con un estado {{HTTPStatus("401")}} `Unauthorized` y la cabecera {{HTTPHeader("WWW-Authenticate")}}.

| Tipo de cabecera                               | {{Glossary("Cabecera de respuesta")}} |
| ---------------------------------------------- | ------------------------------------- |
| {{Glossary("Nombre de encabezado prohibido")}} | No                                    |

## Sintaxis

```
Authorization: <tipo> <credenciales>
```

## Directivas

- \<tipo>
  - : [Tipo de Autenticación](/es/docs/Web/HTTP/Authentication#Authentication_schemes). Un tipo común es ["Basic"](/es/docs/Web/HTTP/Authentication#Basic_authentication_scheme). Otros tipos:
    - [IANA registry of Authentication schemes](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [Authentification for AWS servers (`AWS4-HMAC-SHA256`)](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)
- \<credenciales>
  - : Si se utiliza el esquema de la autenticación "Basic", las credenciales son construidas de esta forma:
    - El usuario y la contraseña se combinan con dos puntos (`aladdin:opensesame`).
    - El string resultante está basado en la codificación [base64](/es/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) (`YWxhZGRpbjpvcGVuc2VzYW1l`).
      > **Nota:** ¡La codificación Base64 no es equivalente a encriptación o hashing! Este método es igual de seguro a enviar las credenciales en un archivo plano de texto (la codificación base64 es reversible). Lo recomendable es utilizar HTTPS en conjunto a la autenticación básica.

## Ejemplos

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Ver también [HTTP authentication](/es/docs/Web/HTTP/Authentication) para ejemplos sobre cómo configurar servidores Apache o nginx para proteger su sitio con contraseña usando la autenticación básica HTTP.

## Especificaciones

| Especificación                          | Título                                 |
| --------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                         | The 'Basic' HTTP Authentication Scheme |

## Ver también

- [HTTP authentication](/es/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
