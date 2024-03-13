---
title: Encryption (暗号化)
slug: Glossary/Encryption
l10n:
  sourceCommit: d2a9f2e26a8139d4bb270d7dc3cddd8b848719fe
---

{{GlossarySidebar}}

{{glossary("cryptography","暗号学")}} において**暗号化**とは、 {{glossary("plaintext","平文")}}を{{glossary("ciphertext","暗号文")}}に変換することを意味します。暗号文とは、認証されていない読み手にとって解読不能な文章のことです。

暗号化は、暗号プリミティブ ( {{glossary("cipher","サイファー")}}と呼ばれる暗号化アルゴリズムを用いて、平文を暗号文へと変換する方法) です。現代的なサイファーによる暗号化は、特定の暗号化アルゴリズムと、{{glossary("key","暗号鍵")}}と呼ばれる秘密の値を用いて行われます。アルゴリズムはだいたい公開されるので、暗号化が安全なままであれば、暗号鍵は秘密のままにしておかなければなりません。

![How encryption works.](encryption.png)

秘密の値が知られない限り、暗号化の逆操作である{{glossary("decryption","復号")}}を行うことは数学的に困難です。どれほど困難になるかは、選択した暗号化アルゴリズムと{{glossary("cryptanalysis","暗号解析法")}}の進歩に依存します。
