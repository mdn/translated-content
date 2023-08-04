---
title: Cipher (サイファー)
slug: Glossary/Cipher
---

{{glossary("cryptography","暗号学")}}では、**サイファー**は{{glossary("plaintext","平文")}}を{{glossary("encryption", "暗号化")}}して読めなくし、それを{{glossary("decryption", "復号")}}するアルゴリズムです。

サイファーは、情報化時代のかなり前から一般的でしたが（例えば、[換字式暗号](https://ja.wikipedia.org/wiki/換字式暗号)、[転置式暗号](https://ja.wikipedia.org/wiki/転置式暗号)）、それらは[ワンタイムパッド](https://ja.wikipedia.org/wiki/ワンタイムパッド)を除いて、どれも暗号的に安全ではありませんでした。

現代のサイファーは、{{glossary("cryptanalysis", "暗号解読者")}}が発見した{{glossary("attack", "攻撃")}} に耐えるように設計されています。すべての攻撃方法が検出されたという保証はありませんが、各アルゴリズムは既知の種類の攻撃に対して判断されます。

サイファーは、データの連続したブロックまたはバッファの[ブロック暗号](https://ja.wikipedia.org/wiki/ブロック暗号)と、連続的なデータフロー（多くの場合、音声または動画）の[ストリーム暗号](https://ja.wikipedia.org/wiki/ストリーム暗号)の 2 つの方法で動作します。

それらはまた、{{glossary("key", "暗号鍵")}}がどのように扱われるかによって分類されています。

- [共通鍵暗号](https://ja.wikipedia.org/wiki/共通鍵暗号)は、メッセージの暗号化と復号に同じ鍵を使用します。メッセージを秘密のままにする場合は、鍵を安全に送信する必要があります。
- [公開鍵暗号](https://ja.wikipedia.org/wiki/公開鍵暗号)は、暗号化と復号に異なる鍵を使用します。

1. 一般知識

   1. Wikipedia 上の [Cipher](https://en.wikipedia.org/wiki/Cipher) (英語)
   2. Wikipedia 上の [暗号](https://ja.wikipedia.org/wiki/暗号)
   3. [暗号化と復号](/ja/docs/Archive/Security/Encryption_and_Decryption)

2. [MDN Web Docs 用語集](/ja/docs/Glossary)

   1. {{Glossary("Block cipher mode of operation", "暗号利用モード")}}
   2. {{Glossary("Cipher", "サイファー")}}
   3. {{Glossary("Ciphertext", "暗号文")}}
   4. {{Glossary("Cipher suite", "暗号スイート")}}
   5. {{Glossary("Cryptanalysis", "暗号解読")}}
   6. {{Glossary("Cryptography", "暗号学")}}
   7. {{Glossary("Decryption", "復号")}}
   8. {{Glossary("Encryption", "暗号化")}}
   9. {{Glossary("Key", "暗号鍵")}}
   10. {{Glossary("Plaintext", "平文")}}
   11. {{Glossary("Public-key cryptography", "公開鍵暗号")}}
   12. {{Glossary("Symmetric-key cryptography", "共通鍵暗号")}}
