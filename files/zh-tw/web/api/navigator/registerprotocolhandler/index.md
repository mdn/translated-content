---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}

In progress. Allows web sites to register themselves as possible handlers for particular protocols.

For security reasons, by default, web sites may only register protocol handlers for themselves — the domain and protocol of the handler must match the current site. However, users may set a preference in Firefox to allow cross website installation, by setting the `gecko.handlerService.allowRegisterFromDifferentHost` pref to `true` in about:config.

Extensions can register protocol handlers targeting other sites: see the 'See Also' section for how to use them from XPCOM.

## Syntax

```plain
window.navigator.registerProtocolHandler(protocol, url, title);
```

### Parameters

- `protocol`
  - : The protocol the site wishes to handle, specified as a string. For example, you can register to handle SMS text message links by registering to handle the "sms" scheme.
- `url`

  - : The URL of the handler, as a string. This string should include "%s" as a placeholder which will be replaced with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone number, email address, or so forth.

    > **備註：** The handler's URL must use one of "http" or "https" as its scheme.

- `title`
  - : A user-readable title string for the protocol handler. This will be displayed to the user in interface objects as needed.

### Exceptions

- `SecurityError`
  - : The user agent blocked registration of the protocol handler. This might happen if an invalid scheme is specified, such as "http", which cannot be registered for obvious security reasons.
- `SyntaxError`
  - : The "%s" string is missing from the specified protocol handler URL.

## Permitted schemes

For security reasons, `registerProtocolHandler()` has restrictions on which schemes may be registered. A custom scheme may be registered as long as the scheme's name begins with "web+", is at least five characters long (including the "web+" prefix), and has only lower-case ASCII letters in its name. For example, "web+burger", as shown in the [Example](#example) below.

Otherwise, the scheme must be one of the schemes on the whitelist below:

- `bitcoin`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `mms`
- `news`
- `nntp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

## Example

If your web application is located at `http://www.google.co.uk`, you can register a protocol handler for it to handle "web+burger" links like this:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://www.google.co.uk/?uri=%s",
  "Burger handler"
);
```

This creates a handler that allows `web+burger://` links to direct the user to your web application, inserting the burger information specified in the link into the URL. Recall that this script must be run from the same domain (so any page location at `google.co.uk`) and the second argument passed must be of `http` or `https` scheme (in this example it is `https`) .

The user will be notified that your code has asked to register the protocol handler, so that they can decide whether or not to permit it. See the screenshot below for an example.

![](protocolregister.png)

> **備註：** "[Register a webmail service as mailto handler](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window)" shows how to do this from XPCOM scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web-based protocol handlers](/zh-TW/docs/Web-based_protocol_handlers)
- [Navigator.registerContentHandler()](/zh-TW/docs/Web/API/Navigator/registerContentHandler)
- [RegisterProtocolHandler Enhancing the Federated Web](http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
- [Web Application APIs - Custom scheme and content handlers](https://html.spec.whatwg.org/multipage/system-state.html#custom-handlers)
- [Register a webmail service as mailto handler](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window) shows how to do `registerProtocolHandler` from XPCOM scope.
- [XPCOM Interface Reference > nsIWebContentHandlerRegistrar > registerContentHandler](/zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#registerProtocolHandler) - This shows how to use this function XPCOM scope
