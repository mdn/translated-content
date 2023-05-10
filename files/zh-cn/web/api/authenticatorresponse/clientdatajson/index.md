---
title: AuthenticatorResponse.clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`clientDataJSON`** property of the {{domxref("AuthenticatorResponse")}} interface stores a [JSON](/zh-CN/docs/Learn/JavaScript/Objects/JSON) string in an {{domxref("ArrayBuffer")}}, representing the client data that was passed to {{domxref("CredentialsContainer.create()")}} or {{domxref("CredentialsContainer.get()")}}. This property is only accessed on one of the child objects of `AuthenticatorResponse`, specifically {{domxref("AuthenticatorAttestationResponse")}} or {{domxref("AuthenticatorAssertionResponse")}}.

## 语法

```plain
var arrayBuffer = AuthenticatorAttestationResponse.clientDataJSON;
var arrayBuffer = AuthenticatorAssertionResponse.clientDataJSON;
```

### Value

An {{jsxref("ArrayBuffer")}}.

## 属性

After the `clientDataJSON` object is converted from an `ArrayBuffer` to a JavaScript object, it will have the following properties:

- `type`
  - : A string which is either `"webauthn.get"` when an existing credential is retrieved or `"webauthn.create"` when a new credential is created.
- `challenge`
  - : The [base64url](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) encoded version of the cryptographic challenge sent from the relying party's server. The original value is passed via {{domxref("PublicKeyCredentialRequestOptions.challenge")}} or {{domxref("PublicKeyCredentialCreationOptions.challenge")}}.
- `origin`
  - : The fully qualified origin of the requester which has been given by the client/browser to the authenticator. We should expect the [relying party's id](/zh-CN/docs/Web/API/PublicKeyCredentialRequestOptions/rpId) to be a suffix of this value.
- `tokenBindingId` {{optional_inline}}

  - : An object describing the state of [the token binding protocol](https://tools.ietf.org/html/rfc8471) for the communication with the relying party. It has two properties:

    - `status`: A string which is either `"supported"` which indicates the client support token binding but did not negotiate with the relying party or `"present"` when token binding was used already
    - `id`: A {{domxref("DOMString")}} which is the [base64url](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) encoding of the token binding ID which was used for the communication.

    Should this property be absent, it would indicate that the client does not support token binding.

## 示例

```js
function arrayBufferToStr(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// pk is a PublicKeyCredential that is the result of a create() or get() Promise
var clientDataStr = arrayBufferToStr(pk.clientDataJSON);
var clientDataObj = JSON.parse(clientDataStr);

console.log(clientDataObj.type);      // "webauthn.create" or "webauthn.get"
console.log(clientDataObj.challenge); // base64 encoded String containing the original challenge
console.log(clientDataObj.origin);    // the window.origin
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
