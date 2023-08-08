---
title: Symmetric-key cryptography (共通鍵暗号)
slug: Glossary/Symmetric-key_cryptography
---

共通鍵暗号は、暗号化と復号で同じ鍵を使用する暗号化アルゴリズムに使用される用語です。鍵はふつう、「共通鍵」または「秘密鍵」と呼ばれます。

これは通常、{{Glossary("public-key cryptography", "公開鍵暗号")}}では鍵が一組で生成され、一方の鍵で変換が行われたものが、もう一方の鍵でしか逆変換できないのと対照されます。

共通鍵暗号は正しく扱われれば安全で、効率性も高いので、パフォーマンスに負の影響を与えずに大きなデータを暗号化するのに使用することができます。

現在使用されている共通鍵暗号アルゴリズムの多くはブロック暗号です。すなわち、データをブロック単位で暗号化します。それぞれのブロック長は固定長であり、アルゴリズムによって決まります。例えば、 {{Glossary("AES")}} は 16 バイトのブロックを使用します。ブロック暗号は常に _{{Glossary("Block cipher mode of operation", "モード")}}_ とともに使用され、ブロック長よりも長いメッセージを安全に暗号化する方法を指定しています。例えば、 AES は暗号であるのに対し、 CTR, CBC, GCM はすべてモードです。適切ではないモードを使用したり、モードを誤って使用したりした場合は、基礎となる暗号化によって提供されるセキュリティが完全に損なわれることがあります。

- [MDN Web Docs 用語集](/ja/docs/Glossary)

  - {{Glossary("Block cipher mode of operation", "暗号利用モード")}}
  - {{Glossary("Cryptography", "暗号学")}}
  - {{Glossary("Cryptographic hash function", "暗号学的ハッシュ関数")}}
  - {{Glossary("Symmetric-key cryptography", "共通鍵暗号")}}
