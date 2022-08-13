---
title: Block cipher mode of operation (暗号利用モード)
slug: Glossary/Block_cipher_mode_of_operation
tags:
  - Block cipher mode of operation
  - Cryptography
  - Glossary
  - Security
translation_of: Glossary/Block_cipher_mode_of_operation
---
<p>暗号利用モード (通常は単に「モード」と呼ばれます) は、ブロックサイズよりも長いメッセージを暗号化または復号化するためにブロック暗号を使用する方法を指定します。</p>

<p>現在使用されているほとんどの対称鍵アルゴリズムはブロック暗号です。これは、一度に 1 ブロックずつデータを暗号化することを意味します。各ブロックのサイズは固定されており、アルゴリズムによって決定されます。たとえば、<a class="glossaryLink new" href="/ja/docs/Glossary/AES" rel="nofollow" title="The definition of that term (AES) has not been written yet; please consider contributing it!">AES</a> は 16 バイトのブロックを使用します。ブロック暗号は常に <em>モード</em> と共に使用されます。モードは、ブロックサイズより長いメッセージを安全に暗号化する方法を指定します。たとえば、AES は暗号ですが、CTR、CBC、および GCM はすべてモードです。不適切なモードを使用したり、モードを誤って使用したりすると、使用する暗号アルゴリズムによって本来提供されるセキュリティを損なってしまう可能性があります。</p>
