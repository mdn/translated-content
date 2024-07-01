---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`require-trusted-types-for`** {{experimental_inline}} ディレクティブは、 {{DOMxRef("Element.innerHTML")}} セッターのような DOM XSS シンク関数に渡されるデータを制御するように、ユーザーエージェントに指示します。

使用された場合、これらの関数は Trusted Type ポリシーによって作成された、なりすましできない、型付きの値のみを受け入れ、文字列は拒否します。これは Trusted Type ポリシーの作成を保護する **[`trusted-types`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)** ディレクティブと一緒に、DOM への値の書き込みを保護するルールを定義し、ウェブアプリケーションコードベースの小さく孤立した部分に DOM XSS 攻撃表面を削減し、監視とコードレビューを容易にすることができるようにしました。

## 構文

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : DOM XSS インジェクションのシンク関数で文字列を使用することを禁止し、Trusted Type ポリシーで作成された種類に一致することを要求します。

## 例

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Create a policy that can create TrustedHTML values
  // after sanitizing the input strings with DOMPurify library.
  const sanitizer = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = sanitizer.createHTML(attackerInput); // Puts the sanitized value into the DOM.
  el.innerHTML = attackerInput; // Rejects a string value; throws a TypeError.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [クロスサイトスクリプティング (XSS)](/ja/docs/Glossary/Cross-site_scripting)
- [DOM XSS injection sinks covered by Trusted Types](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill)
