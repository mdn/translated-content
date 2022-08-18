---
title: Decryption (復号)
slug: Glossary/Decryption
tags:
  - Cryptography
  - Glossary
  - Privacy
  - Security
translation_of: Glossary/Decryption
---
<p>{{glossary("cryptography","暗号学")}}では、復号とは{{glossary("ciphertext","暗号文")}}を{{glossary("plaintext","平文")}}に変換することです。</p>

<p>復号は暗号プリミティブであり、{{glossary("cipher","サイファー")}}と呼ばれる暗号アルゴリズムを使用して暗号文メッセージを平文に変換します。 暗号化と同様に、現代のサイファーの復号は、特定のアルゴリズムと{{glossary("key","鍵")}}と呼ばれる秘密を使用して実行されます。 アルゴリズムはしばしば公開されるので、暗号化が安全なままであれば、鍵は秘密にしておく必要があります。</p>

<p> </p>

<p><img alt="復号プリミティブ。" src="https://mdn.mozillademos.org/files/9817/Decryption.png" style="height: 81px; width: 485px;"></p>

<p>復号は{{glossary("encryption","暗号化")}}の逆であり、鍵が秘密のままであれば、特定の秘密を知らずに復号すると、復号は数学的に実行するのが難しい。 どのくらい難しいかは、選択された暗号アルゴリズムの安全性に依存し、{{glossary("cryptanalysis","暗号解読")}}の進展と共に進化します。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<h3 class="highlight-spanned" id="Technical_reference" name="Technical_reference">技術文書</h3>

<ul>
 <li><a href="/ja/docs/Encryption_and_Decryption">暗号化と復号</a></li>
</ul>
