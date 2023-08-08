---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

API Web Authentication - расширение [Credential Management API](/ru/docs/Web/API/Credential_Management_API), добавляющее аутентификацию с использованием криптографии с открытым ключом, вход без пароля и/или надёжный второй фактор, не требующий SMS.

## Принципы и использование веб-аутентификации

API Web Authentication (также называемое WebAuthn) использует [криптосистему с открытым ключом](https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%BC_%D0%BA%D0%BB%D1%8E%D1%87%D0%BE%D0%BC) вместо паролей или SMS-сообщений для регистрации, входа и [многофакторной аутентификации](https://ru.wikipedia.org/wiki/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F_%D0%B0%D1%83%D1%82%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F) на веб-сайтах. Это устраняет многие значительные проблемы безопасности, такие как [фишинг](https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D1%88%D0%B8%D0%BD%D0%B3), [утечка данных](https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%81%D0%B0%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF) и атаки на SMS или иные методы двухфакторной аутентификации, при этом сильно упрощая использование, т.к. пользователям не нужно запоминать десятки сложных паролей.

На многих сайтах уже есть страницы для регистрации и входа в существующие учётные записи, и Web Authentication API может быть как заменой, так и дополнением для них. Как и остальные виды [Credential Management API](/ru/docs/Web/API/Credential_Management_API), Web Authentication API содержит два базовых метода: для регистрации и для входа:

- {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} - при использовании с опцией `publicKey` создаёт новый набор учётных данных для регистрации нового аккаунта или добавления пары ключей к уже существующему.
- {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} - при использовании с опцией `publicKey` использует существующий набор учётных данных для аутентификации в сервисе в качестве основного способа входа или второго фактора.

**Обратите внимание**, и `create()`, и `get()` работают только в [Secure Context](/ru/docs/Web/Security/Secure_Contexts) (например, когда подключение к серверу происходит через https или сервер работает на localhost).

In their most basic forms, both create() and get() receive a very large random number called a challenge from the server and they return the challenge signed by the private key back to the server. This proves to the server that a user is in possession of the private key required for authentication without revealing any secrets over the network.

In order to understand how the create() and get() methods fit into the bigger picture, it is important to understand that they sit between two components that are outside the browser:

1. **Server** - the Web Authentication API is intended to register new credentials on a server (also referred to as a service or a [relying party](https://en.wikipedia.org/wiki/Relying_party)) and later use those same credentials on that same server to authenticate a user.
2. **Authenticator** - the credentials are created and stored in a device called an authenticator. This is a new concept in authentication: when authenticating using passwords, the password is stored in a user's brain and no other device is needed; when authenticating using web authentication, the password is replaced with a key pair that is stored in an authenticator. The authenticator may be embedded into an operating system, such as Windows Hello, or may be a physical token, such as a USB or Bluetooth Security Key.

### Регистрация

A typical registration process has six steps, as illustrated in Figure 1 and described further below. This is a simplification of the data required for the registration process that is only intended to provide an overview. The full set of required fields, optional fields, and their meanings for creating a registration request can be found in the {{domxref("PublicKeyCredentialCreationOptions")}} dictionary. Likewise, the full set of response fields can be found in the {{domxref("PublicKeyCredential")}} interface (where {{domxref("PublicKeyCredential.response")}} is the {{domxref("AuthenticatorAttestationResponse")}} interface). Note most JavaScript programmers that are creating an application will only really care about steps 1 and 5 where the create() function is called and subsequently returns; however, steps 2, 3, and 4 are essential to understanding the processing that takes place in the browser and authenticator and what the resulting data means.

![Web Authentication API registration component and dataflow diagram](webauthn_registration_r4.png)

_Figure 1 - a diagram showing the sequence of actions for a web authentication registration and the essential data associated with each action._

The registration steps are:

1. **Приложение запрашивает регистрацию** - The application makes the initial registration request. The protocol and format of this request is outside of the scope of the Web Authentication API.
2. **Server Sends Challenge, User Info, and Relying Party Info** - The server sends a challenge, user information, and relying party information to the JavaScript program. The protocol for communicating with the server is not specified and is outside of the scope of the Web Authentication API. Typically, server communications would be [REST](/ru/docs/Glossary/REST) over https (probably using [XMLHttpRequest](/ru/docs/User:maybe/webidl_mdn/XMLHttpRequest_API) or [Fetch](/ru/docs/Web/API/Fetch_API)), but they could also be [SOAP](/ru/docs/Glossary/SOAP), [RFC 2549](https://tools.ietf.org/html/rfc2549) or nearly any other protocol provided that the protocol is secure. The parameters received from the server will be passed to the [create()](/ru/docs/Web/API/CredentialsContainer/create) call, typically with little or no modification and returns a [Promise](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve to a {{domxref("PublicKeyCredential")}} containing an {{domxref("AuthenticatorAttestationResponse")}}. **Note that it is absolutely critical that the challenge be a buffer of random information (at least 16 bytes) and it MUST be generated on the server in order to ensure the security of the registration process.**
3. **Браузер вызывает authenticatorMakeCredential() для аутентификатора** - Internally, the browser will validate the parameters and fill in any defaults, which become the {{domxref("AuthenticatorResponse.clientDataJSON")}}. One of the most important parameters is the origin, which is recorded as part of the clientData so that the origin can be verified by the server later. The parameters to the create() call are passed to the authenticator, along with a SHA-256 hash of the clientDataJSON (only a hash is sent because the link to the authenticator may be a low-bandwidth NFC or Bluetooth link and the authenticator is just going to sign over the hash to ensure that it isn't tampered with).
4. **Аутентификатор создаёт новую пару ключей и Attestation** - Before doing anything, the authenticator will typically ask for some form of user verification. This could be entering a PIN, using a fingerprint, doing an iris scan, etc. to prove that the user is present and consenting to the registration. After the user verification, the authenticator will create a new asymmetric key pair and safely store the private key for future reference. The public key will become part of the attestation, which the authenticator will sign over with a private key that was burned into the authenticator during its manufacturing process and that has a certificate chain that can be validated back to a root of trust.
5. **Аутентификатор передаёт информацию в браузер** - The new public key, a globally unique credential id, and other attestation data are returned to the browser where they become the attestationObject.
6. **Браузер создаёт итоговый набор данных, приложение отвечает серверу** - The create() Promise resolves to an {{domxref("PublicKeyCredential")}}, which has a {{domxref("PublicKeyCredential.rawId")}} that is the globally unique credential id along with a response that is the {{domxref("AuthenticatorAttestationResponse")}} containing the {{domxref("AuthenticatorResponse.clientDataJSON")}} and {{domxref("AuthenticatorAttestationResponse.attestationObject")}}. The {{domxref("PublicKeyCredential")}} is sent back to the server using any desired formatting and protocol (note that the ArrayBuffer properties need to be be base64 encoded or similar).
7. **Сервер проверят и завершает регистрацию** - Finally, the server is required to perform a series of checks to ensure that the registration was complete and not tampered with. These include:

   1. Verifying that the challenge is the same as the challenge that was sent
   2. Ensuring that the origin was the origin expected
   3. Validating that the signature over the clientDataHash and the attestation using the certificate chain for that specific model of the authenticator

   A complete list of validation steps [can be found in the Web Authentication API specification](https://w3c.github.io/webauthn/#registering-a-new-credential). Assuming that the checks pan out, the server will store the new public key associated with the user's account for future use — that is, whenever the user desires to use the public key for authentication.

### Аутентификация

After a user has registered with web authentication, they can subsequently authenticate (a.k.a. - login or sign-in) with the service. The authentication flow looks similar to the registration flow, and the illustration of actions in Figure 2 may be recognizable as being similar to the illustration of registration actions in Figure 1. The primary differences between registration and authentication are that: 1) authentication doesn't require user or relying party information; and 2) authentication creates an assertion using the previously generated key pair for the service rather than creating an attestation with the key pair that was burned into the authenticator during manufacturing. Again, the description of authentication below is a broad overview rather than getting into all the options and features of the Web Authentication API. The specific options for authenticating can be found in the {{domxref("PublicKeyCredentialRequestOptions")}} dictionary, and the resulting data can be found in the {{domxref("PublicKeyCredential")}} interface (where {{domxref("PublicKeyCredential.response")}} is the {{domxref("AuthenticatorAssertionResponse")}} interface) .

![WebAuthn authentication component and dataflow diagram](<mdn_webauthn_authentication_(r1).png>)

_Figure 2 - similar to Figure 1, a diagram showing the sequence of actions for a web authentication and the essential data associated with each action._

1. **Приложение запрашивает аутентификацию** - The application makes the initial authentication request. The protocol and format of this request is outside of the scope of the Web Authentication API.
2. **Server Sends Challenge** - The server sends a challenge to the JavaScript program. The protocol for communicating with the server is not specified and is outside of the scope of the Web Authentication API. Typically, server communications would be [REST](/ru/docs/Glossary/REST) over https (probably using [XMLHttpRequest](/ru/docs/User:maybe/webidl_mdn/XMLHttpRequest_API) or [Fetch](/ru/docs/Web/API/Fetch_API)), but they could also be [SOAP](/ru/docs/Glossary/SOAP), [RFC 2549](https://tools.ietf.org/html/rfc2549) or nearly any other protocol provided that the protocol is secure. The parameters received from the server will be passed to the [get()](/ru/docs/Web/API/CredentialsContainer/get) call, typically with little or no modification. **Note that it is absolutely critical that the challenge be a buffer of random information (at least 16 bytes) and it MUST be generated on the server in order to ensure the security of the authentication process.**
3. **Браузер вызывает authenticatorGetCredential() для аутентификатора** - Internally, the browser will validate the parameters and fill in any defaults, which become the {{domxref("AuthenticatorResponse.clientDataJSON")}}. One of the most important parameters is the origin, which recorded as part of the clientData so that the origin can be verified by the server later. The parameters to the get() call are passed to the authenticator, along with a SHA-256 hash of the clientDataJSON (only a hash is sent because the link to the authenticator may be a low-bandwidth NFC or Bluetooth link and the authenticator is just going to sign over the hash to ensure that it isn't tampered with).
4. **Аутентификатор создаёт подпись** - The authenticator finds a credential for this service that matches the Relying Party ID and prompts a user to consent to the authentication. Assuming both of those steps are successful, the authenticator will create a new assertion by signing over the clientDataHash and authenticatorData with the private key generated for this account during the registration call.
5. **Аутентификатор передаёт информацию в браузер** - The authenticator returns the authenticatorData and assertion signature back to the browser.
6. **Браузер создаёт итоговый набор данных, приложение отвечает серверу** - The browser resolves the [Promise](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) to a {{domxref("PublicKeyCredential")}} with a {{domxref("PublicKeyCredential.response")}} that contains the {{domxref("AuthenticatorAssertionResponse")}}. It is up to the JavaScript application to transmit this data back to the server using any protocol and format of its choice.
7. **Сервер проверят и завершает аутентификацию** - Upon receiving the result of the authentication request, the server performs validation of the response such as:

   1. Using the public key that was stored during the registration request to validate the signature by the authenticator.
   2. Ensuring that the challenge that was signed by the authenticator matches the challenge that was generated by the server.
   3. Checking that the Relying Party ID is the one expected for this service.

   A full list of the [steps for validating an assertion can be found in the Web Authentication API specification](https://w3c.github.io/webauthn/#verifying-assertion). Assuming the validation is successful, the server will note that the user is now authenticated. This is outside the scope of the Web Authentication API specification, but one option would be to drop a new cookie for the user session.

## Интерфейсы

- {{domxref("Credential")}} {{experimental_inline}}
  - : Provides information about an entity as a prerequisite to a trust decision.
- {{domxref("CredentialsContainer")}}
  - : Exposes methods to request credentials and notify the user agent when events such as successful sign in or sign out happen. This interface is accessible from {{domxref('Navigator.credentials')}}. The Web Authentication specification adds a `publicKey` member to the {{domxref('CredentialsContainer.create','create()')}} and {{domxref('CredentialsContainer.get','get()')}} methods to either create a new public key pair or get an authentication for a key pair, repsectively.
- {{domxref("PublicKeyCredential")}}
  - : Provides information about a public key / private key pair, which is a credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password.
- {{domxref("AuthenticatorResponse")}}
  - : The base interface for {{domxref("AuthenticatorAttestationResponse")}} and {{domxref("AuthenticatorAssertionResponse")}}, which provide a cryptographic root of trust for a key pair. Returned by {{domxref('CredentialsContainer.create()')}} and {{domxref('CredentialsContainer.get()')}}, respectively, the child interfaces include information from the browser such as the challenge origin. Either may be returned from {{domxref("PublicKeyCredential.response")}}.
- {{domxref("AuthenticatorAttestationResponse")}}
  - : Returned by {{domxref('CredentialsContainer.create()')}} when a {{domxref('PublicKeyCredential')}} is passed, and provides a cryptographic root of trust for the new key pair that has been generated.
- {{domxref("AuthenticatorAssertionResponse")}}
  - : Returned by {{domxref('CredentialsContainer.get()')}} when a {{domxref('PublicKeyCredential')}} is passed, and provides proof to a service that it has a key pair and that the authentication request is valid and approved.

## Опции

- {{domxref("PublicKeyCredentialCreationOptions")}}
  - : Опции для {{domxref('CredentialsContainer.create()')}}.
- {{domxref("PublicKeyCredentialRequestOptions")}}
  - : Опции для {{domxref('CredentialsContainer.get()')}}.

## Примеры

> **Предупреждение:** В целях безопасности вызовы Web Authentication API ({{domxref('CredentialsContainer.create','create()')}} и {{domxref('CredentialsContainer.get','get()')}}) отменяются, если браузер теряет фокус до завершения вызова.

```js
// sample arguments for registration
var createCredentialDefaultArgs = {
  publicKey: {
    // Relying Party (a.k.a. - Service):
    rp: {
      name: "Acme",
    },

    // User:
    user: {
      id: new Uint8Array(16),
      name: "john.p.smith@example.com",
      displayName: "John P. Smith",
    },

    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],

    attestation: "direct",

    timeout: 60000,

    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a,
      0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38,
      0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// sample arguments for login
var getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // see below
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67,
      0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26,
      0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// register / create a new credential
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEW CREDENTIAL", cred);

    // normally the credential IDs available for an account would come from a server
    // but we can just copy them from above...
    var idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    console.log("ASSERTION", assertion);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
```

- Сайт [Mozilla Demo](https://webauthn.bin.coffee/) и его [source code](https://github.com/jcjones/webauthn.bin.coffee).
- Сайт [Google Demo](http://webauthndemo.appspot.com/) и его [source code](https://github.com/google/webauthndemo).
- [webauthn.org](https://webauthn.org): [client source code](https://github.com/apowers313/webauthn-simple-app) и [server source code](https://github.com/apowers313/fido2-lib)

## Спецификации

| Specification                                                                                      |
| -------------------------------------------------------------------------------------------------- |
| [Web Authentication: An API for accessing Public Key Credentials](https://w3c.github.io/webauthn/) |

## Совместимость

### Credential

{{Compat("api.Credential")}}

### CredentialsContainer

{{Compat("api.CredentialsContainer")}}

### PublicKeyCredential

{{Compat("api.PublicKeyCredential")}}

### AuthenticatorResponse

{{Compat("api.AuthenticatorResponse")}}

### AuthenticatorAttestationResponse

{{Compat("api.AuthenticatorAttestationResponse")}}

### AuthenticatorAssertionResponse

{{Compat("api.AuthenticatorAssertionResponse")}}

### PublicKeyCredentialCreationOptions

{{Compat("api.PublicKeyCredentialCreationOptions")}}

### PublicKeyCredentialRequestOptions

{{Compat("api.PublicKeyCredentialRequestOptions")}}

## See also

- [WordPress Two-Factor Authentication](https://secure.wphackedhelp.com/blog/wordpress-two-factor-authentication/), ( 2FA) is an additional layer of security you can add to your _WordPress_ login page.
