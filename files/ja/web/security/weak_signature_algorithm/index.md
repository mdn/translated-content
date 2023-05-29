---
title: 脆弱な署名アルゴリズム
slug: Web/Security/Weak_Signature_Algorithm
---

{{Glossary("Digital certificate", "ディジタル証明書")}}の{{Glossary("Signature/Security", "電子署名")}}に用いられるハッシュアルゴリズムの強度は、証明書のセキュリティにおいて核心的な要素です。この記事では、脆弱になったため、可能であれば避けるものと知られている署名アルゴリズムについて、いくらかの情報を提供します。

ハッシュアルゴリズムの脆弱性は、攻撃者が偽の証明書を作成または取得してしまうような事態を招きます。新しい攻撃手法が発見や、利用可能な攻撃技術の進歩などのため、古いアルゴリズムを使用することは避けるべきであり、いつかは対応が削除されます。

## SHA-1

SHA-1 の証明書は、2017 年の初めから、多くのブラウザーの開発者が安全であるとはみなさなくなりました。より安全なハッシュアルゴリズム (SHA-256 や SHA-512 など) を代わりに使用してください。

## MD5

MD5 による署名への対応は、2012 年初めに削除されました。

## 関連情報

- SHA-1 の廃止に関する [Mozilla Security Blog の記事](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) (参考: [日本語訳](http://mozsec-jp.hatenablog.jp/entry/2015/10/22/111053))

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}
