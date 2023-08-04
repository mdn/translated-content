---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

Web Authentication API 继承自 [Credential Management API](/zh-CN/docs/Web/API/Credential_Management_API) ，使用公钥密码学使得验证更强壮，不需要 SMS 文本就能实现无密码验证和安全的双因素验证。

## Web authentication 概念和用例

Web Authentication API（也称作 WebAuthn）使用[asymmetric (public-key) cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) （非对称加密）替代密码或 SMS 短信在网站上注册、登录、[second-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)（双因素验证）。解决了 [phishing](https://en.wikipedia.org/wiki/Phishing)（钓鱼）、[data breaches](https://en.wikipedia.org/wiki/Data_breach)（数据破坏）、SMS 文本攻击、其他双因素验证等重大安全问题，同时显著提高了易用性（因为用户不必管理许多越来越复杂的密码）。

许多网站已实现用户注册账号，登录已有账号的页面，WebAuthn 作为这些页面的替代和补充。类似其他形式的 [Credential Management API](/zh-CN/docs/Web/API/Credential_Management_API)（凭据管理 API)。Web Authentication API 有两个对应于注册和登录的基本方法：

- [navigator.credentials.create()](/zh-CN/docs/Web/API/CredentialsContainer/create) - 当使用 publicKey 选项时，创建一个新的凭据，无论是用于注册新账号还是将新的非对称密钥凭据与已有的账号关联。
- [navigator.credentials.get()](/zh-CN/docs/Web/API/CredentialsContainer/get) - 当使用 publicKey 选项时，使用一组现有的凭据进行身份验证服务，无论是用于用户登录还是双因素验证中的一步。

**请注意：** create() 和 get() 都需要在 [Secure Context](/zh-CN/docs/Web/Security/Secure_Contexts)（安全上下文）中执行（例如 - 使用 https 连接，或是使用 localhost），当浏览器不是在安全环境下时它们将不可用。

在基础实现中，create() 和 get() 会从服务器接收一个大随机数，称为挑战。挑战将由私钥签名并返回给服务器。这可以服务器证明用户拥有身份验证所需要的私钥，与此同时没有任何密码在网络上被传输。

为了了解 create() 和 get() 方法在实际中的使用，我们需要理解它们位于浏览器之外的两个部分之间：

1. **服务器** - WebAuthn API 旨在在服务器（也称为服务或[依赖方](https://en.wikipedia.org/wiki/Relying_party)）上注册新的凭据，以供稍后在同一服务器上使用相同的凭据对用户进行身份验证。
2. **认证器** - 凭据将被创建并存储于被称为认证器的设备中。这是认证过程中的一个新概念：使用密码进行身份验证时，密码存储在用户的大脑中而不需要其他设备；使用 WebAuthn 进行身份验证时，密码则被存储在认证器中的密钥对替代。认证器可以被嵌入到操作系统中（例如 Windows Hello），也可以是 USB 或蓝牙安全密钥等物理令牌。

### 注册

一个典型的注册过程包括如图 1 所示的六个步骤，这些在稍后会进一步描述。这是一个注册过程的概览，所需数据已经被简化。所有的必填字段、可选字段及它们在创建注册请求中的含义可以在 {{domxref("PublicKeyCredentialCreationOptions")}} 字典中找到。类似地，完整的响应字段可以在 {{domxref("PublicKeyCredential")}} 接口（其中 {{domxref("PublicKeyCredential.response")}} 是 {{domxref("AuthenticatorAttestationResponse")}} 的接口）中找到。请注意大多数编写程序的 JavaScript 程序员只会关心第 1 步和第 5 步，分别对应 create() 函数的调用和返回。但是，了解步骤 2 到 4 对于理解在浏览器和认证器中发生了什么以及返回数据的含义至关重要。

![WebAuthn registration component and dataflow diagram](webauthn_registration_r4.png)

_图 1 - WebAuthn 注册流程及与各个步骤相关的重要数据。_

注册步骤如下：

1. **应用程序请求注册** - 应用程序发出注册请求。这个请求的协议和格式不在 WebAuthn 标准的范围内。
2. **服务器发送挑战、用户信息和依赖方信息** - 服务器将挑战、用户信息和依赖方信息发送回应用程序。在这里，协议和格式不在 WebAuthn 标准的范围内。通常，这可以是基于 HTTPS 连接的 [REST](/zh-CN/docs/Glossary/REST)（可能会使用 [XMLHttpRequest](/zh-CN/docs/User:maybe/webidl_mdn/XMLHttpRequest_API) 或 [Fetch](/zh-CN/docs/Web/API/Fetch_API)）API。不过只要在安全连接中，也可以使用 [SOAP](/zh-CN/docs/Glossary/SOAP)、[RFC 2549](https://tools.ietf.org/html/rfc2549) 或几乎任何其他协议。从服务器接收到的参数将传递给 [create()](/zh-CN/docs/Web/API/CredentialsContainer/create) ，大部分情况下只需很少修改甚至不需要做任何修改。create() 会返回一个[Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，并返回包含 {{domxref("AuthenticatorAttestationResponse")}} 的 {{domxref("PublicKeyCredential")}}。**需要注意的是挑战必须是随机的 buffer（至少 16 字节），并且必须在服务器上生成以确保安全。**
3. **浏览器向认证器调用 authenticatorMakeCredential()** - 在浏览器内部，浏览器将验证参数并用默认值补全缺少的参数，然后这些参数会变为 {{domxref("AuthenticatorResponse.clientDataJSON")}}。其中最重要的参数之一是 origin，它是 clientData 的一部分，同时服务器将能在稍后验证它。调用 create() 的参数与 clientDataJSON 的 SHA-256 哈希一起传递到身份验证器（只有哈希被发送是因为与认证器的连接可能是低带宽的 NFC 或蓝牙连接，之后认证器只需对哈希签名以确保它不会被篡改）。
4. **认证器创建新的密钥对和证明** - 在进行下一步之前，认证器通常会以某种形式要求用户确认，如输入 PIN，使用指纹，进行虹膜扫描等，以证明用户在场并同意注册。之后，认证器将创建一个新的非对称密钥对，并安全地存储私钥以供将来验证使用。公钥则将成为证明的一部分，被在制作过程中烧录于认证器内的私钥进行签名。这个私钥会具有可以被验证的证书链。
5. **认证器将数据返回浏览器** - 新的公钥、全局唯一的凭证 ID 和其他的证明数据会被返回到浏览器，成为 attestationObject。
6. **浏览器生成最终的数据，应用程序将响应发送到服务器** - create() 的 Promise 会返回一个 {{domxref("PublicKeyCredential")}}，其中包含全局唯一的证书 ID {{domxref("PublicKeyCredential.rawId")}} 和包含 {{domxref("AuthenticatorResponse.clientDataJSON")}} 的响应 {{domxref("AuthenticatorAttestationResponse")}}。你可以使用任何你喜欢的格式和协议将 {{domxref("PublicKeyCredential")}} 发送回服务器（注意 ArrayBuffer 类型的属性需要使用 base64 或类似编码方式进行编码）
7. **服务器验证数据并完成注册** - 最后，服务器需要执行一系列检查以确保注册完成且数据未被篡改。步骤包括：

   1. 验证接收到的挑战与发送的挑战相同
   2. 确保 origin 与预期的一致
   3. 使用对应认证器型号的证书链验证 clientDataHash 的签名和证明

   验证步骤的完整列表[可以在 WebAuthn 规范中找到](https://w3c.github.io/webauthn/#registering-a-new-credential)。一旦验证成功，服务器将会把新的公钥与用户帐户相关联以供将来用户希望使用公钥进行身份验证时使用。

### 验证

用户在 WebAuthn 中注册完成之后就可以使用 WebAuthn 进行身份验证（或者说登录）。验证流程与注册相似，图 2 所示的验证流程也与图 1 相似。不过，注册和验证之间的主要区别在于：1) 验证不需要用户或信赖方信息；2) 验证使用之前生成的密钥对创建一个断言，而不是使用在认证器在制造过程中烧录的密钥对创建证明。和上文一样，下面的验证流程图只是一个概况，并非详细描述。验证所需的数据可以在 {{domxref("PublicKeyCredentialRequestOptions")}} 字典中找到；返回的数据可以在 {{domxref("PublicKeyCredential")}} 接口（其中 {{domxref("PublicKeyCredential.response")}} 是 {{domxref("AuthenticatorAssertionResponse")}} 的接口）中找到。

![WebAuthn authentication component and dataflow diagram](mdn_webauthn_authentication_r1.png)

_图 2 - WebAuthn 验证流程及与各个步骤相关的重要数据。_

1. **Application Requests Authentication** - The application makes the initial authentication request. The protocol and format of this request is outside of the scope of WebAuthn.
2. **Server Sends Challenge** - The server sends a challenge JavaScript program. The protocol for communicating with the server is not specified and is outside of the scope of WebAuthn. Typically, server communications would be [REST](/zh-CN/docs/Glossary/REST) over https (probably using [XMLHttpRequest](/zh-CN/docs/User:maybe/webidl_mdn/XMLHttpRequest_API) or [Fetch](/zh-CN/docs/Web/API/Fetch_API)), but they could also be [SOAP](/zh-CN/docs/Glossary/SOAP), [RFC 2549](https://tools.ietf.org/html/rfc2549) or nearly any other protocol provided that the protocol is secure. The parameters received from the server will be passed to the [get()](/zh-CN/docs/Web/API/CredentialsContainer/get) call, typically with little or no modification. **Note that it is absolutely critical that the challenge be a large buffer of random information (e.g. - more than 100 bytes) and it MUST be generated on the server in order to ensure the security of the authentication process.**
3. **Browser Call authenticatorGetCredential() on Authenticator** - Internally, the browser will validate the parameters and fill in any defaults, which become the {{domxref("AuthenticatorResponse.clientDataJSON")}}. One of the most important parameters is the origin, which recorded as part of the clientData so that the origin can be verified by the server later. The parameters to the create() call are passed to the authenticator, along with a SHA-256 hash of the clientDataJSON (only a hash is sent because the link to the authenticator may be a low-bandwidth NFC or Bluetooth link and the authenticator is just going to sign over the hash to ensure that it isn't tampered with).
4. **Authenticator Creates an Assertion** - The authenticator finds a credential for this service that matches the Relying Party ID and prompts a user to consent to the authentication. Assuming both of those steps are successful, the authenticator will create a new assertion by signing over the clientDataHash and authenticatorData with the private key generated for this account during the registration call.
5. **Authenticator Returns Data to Browser** - The authenticator returns the authenticatorData and assertion signature back to the browser.
6. **Browser Creates Final Data, Application sends response to Server** - The browser resolves the [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) to a {{domxref("PublicKeyCredential")}} with a {{domxref("PublicKeyCredential.response")}} that contains the {{domxref("AuthenticatorAssertionResponse")}}. It is up to the JavaScript application to transmit this data back to the server using any protocol and format of its choice.
7. **Server Validates and Finalizes Authentication** - Upon receiving the result of the authentication request, the server performs validation of the response such as:

   1. Using the public key that was stored during the registration request to validate the signature by the authenticator.
   2. Ensuring that the challenge that was signed by the authenticator matches the challenge that was generated by the server.
   3. Checking that the Relying Party ID is the one expected for this service.

   A full list of the [steps for validating an assertion can be found in the WebAuthn specification](https://w3c.github.io/webauthn/#verifying-assertion). Assuming the validation is successful, the server will note that the user is now authenticated. This is outside the scope of the WebAuthn specification, but one option would be to drop a new cookie for the user session.

## Interfaces

- {{domxref("CredentialsContainer")}}
  - : WebAuthn extends the [Credential Management API](/zh-CN/docs/Web/API/Credential_Management_API)'s [create()](/zh-CN/docs/Web/API/CredentialsContainer/create) and [get()](/zh-CN/docs/Web/API/CredentialsContainer/get) methods to take a new option: publicKey. When the publicKey option is passed to create() and / or get(), the Credential Management API will create a new public key pair or get an authentication for a key pair, respectively.
- {{domxref("PublicKeyCredential")}}
  - : A credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password.
- {{domxref("AuthenticatorResponse")}}
  - : Part of the PublicKeyCredential, the AuthenticatorResponse includes information from the browser (such as the challenge and origin); as well as information from the authenticator such as an AuthenticatorAttestationResponse (for new credentials) or an AuthenticatorAssertionResponse (when authenticating with existing credentials).
- {{domxref("AuthenticatorAttestationResponse")}}
  - : When a PublicKeyCredential has been created with the [create()](/zh-CN/docs/Web/API/CredentialsContainer/create) call, it will include an AuthenticatorAttestationResponse. This is the authenticator's way of providing a cryptographic root of trust for the new key pair that has been generated.
- {{domxref("AuthenticatorAssertionResponse")}}
  - : When a PublicKeyCredential is the result of a [get()](/zh-CN/docs/Web/API/CredentialsContainer/get) call, it will include an AuthenticatorAssertionResponse. This is the authenticator's way of proving to a service that it has the key pair and that the authentication request is valid and approved.

## Options

- {{domxref("PublicKeyCredentialCreationOptions")}}
  - : The options for creating a credential via [navigator.credentials.create()](/zh-CN/docs/Web/API/CredentialsContainer/create)
- {{domxref("PublicKeyCredentialRequestOptions")}}
  - : The options for using a credential via [navigator.credentials.get()](/zh-CN/docs/Web/API/CredentialsContainer/get)

## Examples

Note: as a security feature, any WebAuthn calls (i.e. - create() or get() ) will be cancelled if the browser window loses focus while the call is pending.

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

- [Mozilla Demo](https://webauthn.bin.coffee/) website and its [source code](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](http://webauthndemo.appspot.com/) website and its [source code](https://github.com/google/webauthndemo).
- [webauthn.org](https://webauthn.org) and its [client source code](https://github.com/apowers313/webauthn-simple-app) and [server source code](https://github.com/apowers313/fido2-lib)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAuthentication and WebPayment demo](https://www.youtube.com/watch?v=UNI_Ad-9gX8) on an Android device
