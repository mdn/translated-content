---
title: Public-key cryptography (公開鍵暗号)
slug: Glossary/Public-key_cryptography
tags:
  - Cryptography
  - Glossary
  - Public-key cryptography
  - Security
  - セキュリティ
  - 公開鍵暗号
  - 暗号
translation_of: Glossary/Public-key_cryptography
---
<p>公開鍵暗号 — または<em>非対称暗号</em> — は、対となる鍵による暗号システムです。一方の鍵によって行われた変換は、もう一方の鍵によってしか解除できません。一方の鍵 (<em>秘密鍵</em>) は秘匿しておくのに対し、もう一方の鍵は公開します。</p>

<p>ディジタル署名で使用する場合、署名するために秘密鍵が使用され、検証に公開鍵が使用されます。つまり、誰でも署名を検証することができますが、対応する秘密鍵の所有者のみが生成することができます。</p>

<p>暗号化に使用する場合、暗号化に公開鍵が使用され、復号に秘密鍵が使用されます。これによって、公開鍵暗号システムは暗号化の鍵を公開することができる点で共通鍵暗号より有利です。秘密鍵の所有者に向けたメッセージを誰でも暗号化することができますが、秘密鍵の所有者のみが復号することができます。ただし、ふつうは共通かぎ暗号よりもずっと低速で、暗号化できるメッセージの大きさも鍵の大きさに比例するので、長いメッセージには向きません。</p>

<p>結果的に、暗号化システムはメッセージの暗号化には共通鍵暗号を使用し、共通鍵を暗号化するために公開鍵を使用します。この組み合わせは両方のシステムの利点を与えることができます。</p>

<p>よく使われる公開鍵暗号システムには、 RSA (署名と暗号化の両方), DSA (署名用) Diffie-Hellman (キーの承認用) などがあります。</p>

<section id="Quick_links">
<ul>
 <li><a href="/ja/docs/Glossary">MDN 用語集</a>

  <ul>
   <li>{{Glossary("Symmetric-key cryptography", "共通鍵暗号")}}</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Web/API/Web_Crypto_API">Web Crypto API</a></li>
</ul>
</section>
