---
title: MitM (中間者攻撃)
slug: Glossary/MitM
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

**manipulator in the middle attack**（MitM、中間者攻撃）は、2 つのシステム間の通信を傍受します。たとえば、Wi-Fi ルーターが侵害される可能性があります。

これを物理的な郵便と比較します。もしあなたがお互いに手紙を書いているなら、郵便配達員はあなたが郵送するそれぞれの手紙を傍受することができます。彼らはそれを開き、それを読んで、最終的にそれを改変してから、その手紙を再び包み、あなたが手紙を送ろうとした人にそれを送ります。元の受取人はあなたに手紙を郵送しますが、郵便配達員は再度手紙を開き、それを読んで、最終的にそれを改変し、それを再び包み、あなたにそれを与えるでしょう。コミュニケーションチャンネルの中間に改変者がいることはわかりません – 郵便配達員はあなたとあなたの受取人には見えません。

物理的な郵便やオンライン通信では、MITM 攻撃は防御するのが難しいです。いくつかのヒントを示します。

- 証明書の警告を無視しないでください。フィッシング詐欺サーバーまたは偽者サーバーに接続するかもしれません。
- 公衆 Wi-Fi ネットワーク上で HTTPS 暗号化のない機密のサイトは信頼できません。
- ログインする前にアドレスバーにある HTTPS を確認し、暗号化が行われていることを確認してください。

## 関連情報

- [中間者攻撃 (MITM)](/ja/docs/Web/Security/Attacks/MITM)
- [攻撃](/ja/docs/Web/Security/Attacks)
- OWASP の記事: [Manipulator in the middle attack](https://community.owasp.org/attacks/Manipulator-in-the-middle_attack)<sup>(英語)</sup>
- [中間者攻撃](https://ja.wikipedia.org/wiki/中間者攻撃) - ウィキペディア
