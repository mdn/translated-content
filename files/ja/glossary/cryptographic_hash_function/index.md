---
title: Cryptographic hash function (暗号学的ハッシュ関数)
slug: Glossary/Cryptographic_hash_function
tags:
  - Cryptography
  - Glossary
  - Security
translation_of: Glossary/Cryptographic_hash_function
---
<p>暗号学的ハッシュ関数は、<em>ダイジェスト関数</em>とも呼ばれますが、任意のサイズのメッセージを{{glossary("digest","ダイジェスト")}}と呼ばれる固定サイズのメッセージに変換する{{glossary("cryptography", "暗号学的")}}プリミティブです。暗号学的ハッシュ関数は、認証、{{Glossary("digital signature", "デジタル署名")}}、および{{Glossary("HMAC", "メッセージ認証コード")}}に使用されます。</p>

<p>暗号学に使用するためには、ハッシュ関数は以下の性質を持っていなければなりません。</p>

<ul>
 <li>計算が速い (頻繁に生成されるため)</li>
 <li>可逆ではない (各ダイジェストは非常に多数のメッセージに由来する可能性があり、所与のダイジェストにつながるメッセージを生成できるのは総当たりのみである)</li>
 <li>改ざん防止 (メッセージの変更によって異なるダイジェストがもたらされる)</li>
 <li>衝突耐性 (同じダイジェストを生成する 2 つの異なるメッセージを見つけることは不可能であるべきです)</li>
</ul>

<p>MD5 や SHA-1 などの暗号化ハッシュ関数は、衝突耐性を大幅に低下させる攻撃が見つかったため、破損しているとみなされています。</p>

<section id="Quick_links">
<ul>
 <li>Wikipedia 上の {{Interwiki("wikipedia", "暗号学的ハッシュ関数")}}</li>
 <li><a href="/ja/docs/Glossary">MDN Web Docs 用語集</a>
  <ul>
   <li>{{Glossary("Symmetric-key cryptography", "共通鍵暗号")}}</li>
  </ul>
 </li>
</ul>
</section>
