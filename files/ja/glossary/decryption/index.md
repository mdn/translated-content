---
title: Decryption (復号)
slug: Glossary/Decryption
l10n:
  sourceCommit: d2a9f2e26a8139d4bb270d7dc3cddd8b848719fe
---

{{GlossarySidebar}}

{{glossary("cryptography","暗号学")}}では、**復号**とは{{glossary("ciphertext","暗号文")}}を{{glossary("Plaintext","平文")}}に変換することです。

復号は暗号プリミティブであり、{{glossary("cipher","サイファー")}}と呼ばれる暗号アルゴリズムを使用して暗号文メッセージを平文に変換します。 暗号化と同様に、現代のサイファーの復号は、特定のアルゴリズムと{{glossary("key","鍵")}}と呼ばれる秘密を使用して実行されます。 アルゴリズムはしばしば公開されるので、暗号化が安全なままであれば、鍵は秘密にしておく必要があります。

![復号プリミティブ。](decryption.png)

復号は{{glossary("encryption","暗号化")}}の逆であり、鍵が秘密のままであれば、特定の秘密を知らずに復号すると、復号は数学的に実行するのが難しい。 どのくらい難しいかは、選択された暗号アルゴリズムの安全性に依存し、{{glossary("cryptanalysis","暗号解読")}}の進展と共に進化します。

## 関連情報

- [暗号化と復号](/ja/docs/Encryption_and_Decryption)
