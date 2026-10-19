---
title: サプライチェーン攻撃
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

_ソフトウェアサプライチェーン_ とは、ソフトウェア製品の作成と保守に使用されるすべてのソフトウェアとツールのことです。これには、製品そのもののために開発されたソフトウェアだけでなく、その製造過程で使用されるすべてのソフトウェアとツールが含まれます。

サプライチェーン攻撃では、攻撃者は製品そのものを侵害するために、その製品のサプライチェーンの一部を標的とします。

もっとも分かりやすい例は、サードパーティーのライブラリーです。例えば、サードパーティーが開発した [npm](https://www.npmjs.com/) パッケージを使用している場合、そのパッケージはあなたのサイトを侵害することができます。それが悪意のあるものであれば意図的に、それ自体に意図しない脆弱性が含まれていれば偶発的に、侵害が起こる可能性があります。要するに、サードパーティーの依存関係は、自分自身のコードと同じくらい信頼できるものでなければなりません。

これはあまり意識されませんが、同じ原理は、ソフトウェアの作成に使用するすべてのツールにも当てはまります。コードエディター、エディターのプラグイン、バージョン管理システム、ビルドツールなどが該当します。これらのツールはいずれも、変換処理を適用する過程で、最終的なソフトウェア製品に悪意のあるコードや脆弱性のあるコードを挿入する可能性があります。

この文書では、ソフトウェアサプライチェーンを保護するために従うべき慣行の概要を説明します。内容は主に 2 つの節に分かれています。

- [開発環境の保護](#開発環境の保護): 自分自身のコードが侵害されないようにするための慣行です。
- [サードパーティーの依存関係の管理](#サードパーティーの依存関係の管理): 依存関係が侵害されないようにするための慣行です。

## 開発環境の保護

サプライチェーン攻撃の経路の 1 つは、攻撃者が自分自身の製品に脆弱性や悪意のあるコードを直接混入させることです。一般的に、攻撃者はプロジェクトのメンテナーのアカウントを侵害するか、メンテナーが使用している開発者向けツールの弱点を悪用することで、これを行います。

[運用上のセキュリティ](/ja/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment)のガイドでは、これらの脅威に対抗するための慣行を説明しています。以下のものが含まれます。

- [プロジェクトのメンテナーに強力な認証を要求する](/ja/docs/Web/Security/Defenses/Operational_security#requiring_strong_authentication_for_project_maintainers)
- [プロジェクトのメンテナーにロールベースのアクセス制御を実装する](/ja/docs/Web/Security/Defenses/Operational_security#implementing_role-based_access_control_for_project_maintainers)
- [使用するツールを評価する](/ja/docs/Web/Security/Defenses/Operational_security#evaluating_the_tools_you_use)
- [設定を保護する](/ja/docs/Web/Security/Defenses/Operational_security#securing_your_configuration)

## サードパーティーの依存関係の管理

サードパーティーの依存関係には、コードが使用するライブラリーやフレームワークだけでなく、開発工程に関わるすべてのサードパーティー製ツールが含まれます。エディター、IDE、ソース管理システム、パッケージマネージャー、ビルドツールなどが該当します。

攻撃者は、これらの依存関係の弱点を悪用してプロジェクトを侵害することができます。[運用上のセキュリティ](/ja/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies)のガイドでは、これらの脅威に対抗するための慣行を説明しています。以下のものが含まれます。

- [新しい依存関係を評価する](/ja/docs/Web/Security/Defenses/Operational_security#evaluating_new_dependencies)
- [既存の依存関係を更新する](/ja/docs/Web/Security/Defenses/Operational_security#updating_dependencies)
- [_ソフトウェア部品表_ (SBOM) を維持する](/ja/docs/Web/Security/Defenses/Operational_security#maintaining_a_software_bill_of_materials)

さらに、サードパーティーのサイトによってホストされているスクリプトやスタイルシートについては、[サブリソース完全性を使用する](#サブリソース完全性の使用)べきです。

### サブリソース完全性の使用

多くのウェブサイトは、外部でホストされているスクリプトを取り込んでいます。もっとも代表的なのは {{glossary("CDN", "コンテンツ配信ネットワーク (CDN)")}} から配信されるスクリプトですが、それに限りません。

```html
<script src="https://cdn.example.org/library.js"></script>
```

これはサプライチェーンにとってのリスクとなります。攻撃者が `cdn.example.org` ドメインを掌握できた場合、攻撃者はそのスクリプトを悪意のあるスクリプトに置き換えることができ、それによってサイトを侵害できるからです。

外部のスクリプトは、他のソフトウェアの依存関係と同様に SBOM に含めるべきですが、さらなる防御策として、スクリプトの [`integrity`](/ja/docs/Web/HTML/Reference/Elements/script#integrity) 属性を設定する方法があります。

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

この属性の値には、スクリプトの内容の{{glossary("hash_function", "暗号学的ハッシュ")}}が含まれます。スクリプトが攻撃者によって改変されていた場合、ブラウザーはそのスクリプトの読み込みを拒否するため、保護されることになります。

ただし、これは保守の手間を増やすことになります。配信元が変更されるたびに（例えば、新しいバージョンがリリースされるたびに）、コード内の属性値を更新する必要があります。

{{htmlelement("link")}} 要素も `integrity` 属性に対応しているため、スクリプトだけでなく CSS のスタイルシートにも使用することができます（そして使用するべきです）。

詳細は[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)を参照してください。

## 防御のまとめチェックリスト

- 運用上のセキュリティの慣行に従い、以下を行う。
  - [自分自身の開発環境を保護する](/ja/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment)。
  - [サードパーティーの依存関係のリスクを抑える](/ja/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies)。
- 外部から参照するスクリプトやスタイルシートには[サブリソース完全性](#サブリソース完全性の使用)を使用する。

## 関連情報

- [owasp.org](https://owasp.org/) の [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)
