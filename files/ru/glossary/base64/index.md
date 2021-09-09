---
title: Кодирование и декодирование в формате Base64
slug: Glossary/Base64
translation_of: Glossary/Base64
original_slug: Web/API/WindowBase64/Base64_encoding_and_decoding
---
**Base64** - это группа схожих [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) схем, которые представляют двоичные данные в ASCII-формате методом перевода в radix-64 представление. Термин *Base64* происходит от a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Кодирование Base64 широко используется в случаях, когда требуется перекодировать двоичные данные для передачи по каналу приспособленному для передачи текстовых данных. Это делается с целью защиты двоичных данных от любых возможных повреждений при передаче. Base64 широко используется во многих приложениях, включая электронную почту ([MIME](https://en.wikipedia.org/wiki/MIME)), и при сохранении больших объёмов данных в [XML](/en-US/docs/XML).

В языке JavaScript существуют две функции, для кодирования и декодирования данных в/из формат Base64 соответственно:

- {{domxref("WindowBase64.btoa","btoa()")}}
- {{domxref("WindowBase64.atob","atob()")}}

`Функция atob()` декодирует Base64-кодированную строку. В противоположность ей, функция `btoa()` создаёт Base64 кодированную ASCII строку из "строки" бинарных данных.

Обе функции `atob()` и `btoa()` работают со строками. Если вам необходимо работать с [`ArrayBuffers`](/en-US/docs/Web/API/ArrayBuffer), обратитесь к [этому параграфу](#).

<table class="topicpage-table">
  <tbody>
    <tr>
      <td>
        <h2 class="Documentation" id="Documentation" name="Documentation">
          Документация
        </h2>
        <dl>
          <dt>
            <a
              href="https://developer.mozilla.org/en-US/docs/data_URIs"
              title="https://developer.mozilla.org/en-US/docs/data_URIs"
              ><code>data</code> URIs</a
            >
          </dt>
          <dd>
            <small
              ><code>data</code> URIs, описанные в <a
                class="external"
                href="http://tools.ietf.org/html/rfc2397"
                >RFC 2397</a
              >, позволяют создателям контента встроить в документ маленькие
              файлы в виде строки (инлайном).</small
            >
          </dd>
          <dt><a href="https://en.wikipedia.org/wiki/Base64">Base64</a></dt>
          <dd><small>Wikipedia article about Base64 encoding.</small></dd>
          <dt>{{domxref("WindowBase64.atob","atob()")}}</dt>
          <dd>
            <small
              >Decodes a string of data which has been encoded using base-64
              encoding.</small
            >
          </dd>
          <dt>{{domxref("WindowBase64.btoa","btoa()")}}</dt>
          <dd>
            <small
              >Creates a base-64 encoded ASCII string from a "string" of binary
              data.</small
            >
          </dd>
          <dt><a href="#The_Unicode_Problem">The "Unicode Problem"</a></dt>
          <dd>
            <small
              >In most browsers, calling <code>btoa()</code> on a Unicode string
              will cause a <code>Character Out Of Range</code> exception. This
              paragraph shows some solutions.</small
            >
          </dd>
          <dt>
            <a href="/en-US/docs/URIScheme" title="/en-US/docs/URIScheme"
              >URIScheme</a
            >
          </dt>
          <dd><small>List of Mozilla supported URI schemes</small></dd>
          <dt>
            <a
              href="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              title="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              ><code>StringView</code></a
            >
          </dt>
          <dd>
            In this article is published a library of ours whose aims are:
            <ul>
              <li>
                creating a
                <a
                  class="external"
                  href="http://en.wikipedia.org/wiki/C_%28programming_language%29"
                  >C</a
                >-like interface for strings (i.e. array of characters codes —<a
                  href="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBufferView"
                  title="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBufferView"
                >
                  <code>ArrayBufferView</code></a
                >
                in JavaScript) based upon the JavaScript
                <a
                  href="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBuffer"
                  title="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBuffer"
                  ><code>ArrayBuffer</code></a
                >
                interface,
              </li>
              <li>
                creating a collection of methods for such string-like objects
                (since now: <code>stringView</code>s) which work
                <strong>strictly on array of numbers</strong> rather than on
                immutable JavaScript strings,
              </li>
              <li>
                working with other Unicode encodings, different from default
                JavaScript's UTF-16
                <a
                  href="/en-US/docs/Web/API/DOMString"
                  title="/en-US/docs/Web/API/DOMString"
                  ><code>DOMString</code></a
                >s,
              </li>
            </ul>
          </dd>
        </dl>
      </td>
      <td>
        <h2 class="Tools" id="Tools" name="Tools">Tools</h2>
        <ul>
          <li>
            <a
              href="#Solution_2_–_rewrite_the_DOMs_atob()_and_btoa()_using_JavaScript&#x27;s_TypedArrays_and_UTF-8"
              >Rewriting <code>atob()</code> and <code>btoa()</code> using
              <code>TypedArray</code>s and UTF-8</a
            >
          </li>
          <li>
            <a
              href="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              title="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              ><code>StringView</code> – a C-like representation of strings
              based on typed arrays</a
            >
          </li>
        </ul>
        <h2 class="Related_Topics" id="Related_Topics" name="Related_Topics">
          Related Topics
        </h2>
        <ul>
          <li>
            <a href="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBuffer"
              ><code>ArrayBuffer</code></a
            >
          </li>
          <li>
            <a href="/en-US/docs/Web/JavaScript/Typed_arrays">Typed arrays</a>
          </li>
          <li>
            <code
              ><a href="/en-US/docs/Web/JavaScript/Typed_arrays/ArrayBufferView"
                >ArrayBufferView</a
              ></code
            >
          </li>
          <li>
            <a href="/en-US/docs/Web/JavaScript/Typed_arrays/Uint8Array"
              ><code>Uint8Array</code></a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              title="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"
              ><code>StringView</code> – a C-like representation of strings
              based on typed arrays</a
            >
          </li>
          <li>
            <a
              href="/en-US/docs/Web/API/DOMString"
              title="/en-US/docs/Web/API/DOMString"
              ><code>DOMString</code></a
            >
          </li>
          <li>
            <a href="/en-US/docs/URI" title="/en-US/docs/URI"
              ><code>URI</code></a
            >
          </li>
          <li>
            <a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"
              title="/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"
              ><code>encodeURI()</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## The "Unicode Problem"

Since [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString")s are 16-bit-encoded strings, in most browsers calling `window.btoa` on a Unicode string will cause a `Character Out Of Range` exception if a character exceeds the range of a 8-bit byte (0x00\~0xFF). There are two possible methods to solve this problem:

- the first one is to escape the whole string (with UTF-8, see {{jsxref("encodeURIComponent")}}) and then encode it;
- the second one is to convert the UTF-16 [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString") to an UTF-8 array of characters and then encode it.

Here are the two possible methods.

### Solution #1 – escaping the string before encoding it

```js
function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64EncodeUnicode('\n'); // "Cg=="
```

To decode the Base64-encoded value back into a String:

```js
function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
b64DecodeUnicode('Cg=='); // "\n"
```

[Unibabel](https://github.com/coolaj86/unibabel-js) implements common conversions using this strategy.

### Solution #2 – rewrite the DOMs `atob()` and `btoa()` using JavaScript's `TypedArray`s and UTF-8

Use a [TextEncoder](/en-US/docs/Web/API/TextEncoder) polyfill such as [TextEncoding](https://github.com/inexorabletash/text-encoding) (also includes legacy windows, mac, and ISO encodings), [TextEncoderLite](https://github.com/coolaj86/TextEncoderLite), combined with a [Buffer](https://github.com/feross/buffer) and a Base64 implementation such as [base64-js](https://github.com/beatgammit/base64-js).

When a native `TextEncoder` implementation is not available, the most light-weight solution would be to use [TextEncoderLite](https://github.com/coolaj86/TextEncoderLite) with [base64-js](https://github.com/beatgammit/base64-js). Use the browser implementation when you can.

The following function implements such a strategy. It assumes base64-js imported as `<script type="text/javascript" src="base64js.min.js"/>`. Note that TextEncoderLite only works with UTF-8.

```js
function Base64Encode(str, encoding = 'utf-8') {
    var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);
    return base64js.fromByteArray(bytes);
}

function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}
```
