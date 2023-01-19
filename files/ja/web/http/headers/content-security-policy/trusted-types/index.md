---
title: 'CSP: trusted-types'
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の **`trusted-types`** {{experimental_inline}} ディレクティブは、既知の DOM XSS シンクの使用を、文字列の代わりにスプーフィング不可能な型付きの値のみを受け入れる定義済みの関数のセットに制限するようにユーザエージェントに指示します。

 **[`require-trusted-types-for`](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)** ディレクティブと一緒に使用することで、作者は DOM への値の書き込みを守るルールを定義することができ、 DOM XSS 攻撃の対象をウェブアプリケーションのコードベースの小さな孤立した部分に減らすことができ、監視やコードレビューが容易になります。このディレクティブは、 Trusted Types API から `TrustedTypes.createPolicy` で作成された信頼できる型のポリシー名のホワイトリストを宣言します。

## 構文

```
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : 有効なポリシー名は英数字、または "`-#=_/@.%`" のうちのいずれかのみからなります。ポリシー名に星印 (`*`) を使用すると、ユーザーエージェントは任意の一意なポリシー名を許可するようになります（'`allow-duplicates`' はそれをさらに緩和することができます）。
- `'none'`
  - : Trusted Type ポリシーを作成しない（_\<policyName>_を指定しないのと同じ）。
- `'allow-duplicates'`
  - : 既に使用されている名前でポリシーを作成することを可能にします。

## 例

```js
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== 'undefined') {
  const policyFoo = trustedTypes.createPolicy('foo', {});
  const policyFoo2 = trustedTypes.createPolicy('foo', {});
  const policyBaz = trustedTypes.createPolicy('baz', {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [クロスサイトスクリプティング (XSS)](/ja/docs/Glossary/Cross-site_scripting)
- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)
- Trusted Types with [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS sanitizer
- [Trusted Types polyfill](https://github.com/w3c/webappsec-trusted-types#polyfill)
