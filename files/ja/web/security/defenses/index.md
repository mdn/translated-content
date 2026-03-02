---
title: 防御策
slug: Web/Security/Defenses
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

これらのページでは、1 つまたは複数のセキュリティ攻撃に対する防御を提供するウェブプラットフォームの機能について説明します。

一般的に、攻撃と防御の間には多対多の関係があります。それぞれの[攻撃ガイド](/ja/docs/Web/Security/Attacks)では、その攻撃に対する特定の防御策を記述しています。以下の一覧にある防御策ページでは、これらの防御策とその作業方法について、より広範な概要を提供しています。

- [証明書の透明性](/ja/docs/Web/Security/Defenses/Certificate_Transparency)
  - : 発行された {{glossary("TLS")}} 証明書の公開ログを出力し、悪意のある証明書や誤って発行された証明書を容易に検出できるようにします。
- [混在コンテンツのブロック](/ja/docs/Web/Security/Defenses/Mixed_content)
  - : HTTPS 経由で配信された文書が、HTTP 経由でサブリソース（スクリプト、画像、フォントなど）を読み込むことを防止します。
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
  - : ある{{glossary("origin", "オリジン")}}から読み込まれたコンテンツが、別のオリジンから読み込まれたコンテンツにアクセスできる方法を制限します。これにより、ウェブサイトが互いの状態にアクセスできる範囲を制御します。
- [保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)
  - : 保護されたコンテキストとは、特定の認証および機密性の標準を満たす `Window` または `Worker` を指します。これは通常、{{glossary("HTTPS")}} 経由で配信されたことを意味します。保護されたコンテキストで実行されるコードは、保護されていないコンテキストでは利用できない強力な Web API を使用できます。
- [サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)
  - : ウェブサイトが、外部ソース（{{glossary("CDN")}} など）から読み込まれたスクリプトやスタイルシートが、期待されるコンテンツを持ち、変更されていないことを検証することができるようにします。
- [トランスポート層セキュリティ (TLS)](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : クライアントが信頼できないネットワークを介してサーバーと安全に通信することができるようにします。特にウェブ上では、HTTP 接続を保護するために使用されており、その結果生じるプロトコルは {{glossary("HTTPS")}} と呼ばれます。HTTPS は[中間者攻撃 (MITM)](/ja/docs/Web/Security/Attacks/MITM) に対する唯一の有効な防御策です。
- [ユーザーによる活性化](/ja/docs/Web/Security/Defenses/User_activation)
  - : 悪意のある可能性のあるウェブサイトからユーザーを保護するため、特定の強力な API は、ユーザーが現在そのウェブページを操作している場合、またはページが読み込まれてから少なくとも一度は操作した場合にのみ使用できます。
