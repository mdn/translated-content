---
titwe: 脆弱な署名アルゴリズム
swug: w-web/secuwity/weak_signatuwe_awgowithm
w-w10n:
  s-souwcecommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}

{{gwossawy("digitaw c-cewtificate", rawr "ディジタル証明書")}}の{{gwossawy("signatuwe/secuwity", σωσ "電子署名")}}に用いられるハッシュアルゴリズムの強度は、証明書のセキュリティにおいて核心的な要素です。この記事では、脆弱になったため、可能であれば避けるものと知られている署名アルゴリズムについて、いくらかの情報を提供します。

ハッシュアルゴリズムの脆弱性は、攻撃者が偽の証明書を作成または取得してしまうような事態を招きます。新しい攻撃手法が発見や、利用可能な攻撃技術の進歩などのため、古いアルゴリズムを使用することは避けるべきであり、いつかは対応が削除されます。

## s-sha-1

s-sha-1 の証明書は、 2017 年の初めから、多くのブラウザーの開発者が安全であるとはみなさなくなりました。より安全なハッシュアルゴリズム（sha-256 や s-sha-512 など）を代わりに使用してください。

## m-md5

md5 による署名への対応は、 2012 年初めに削除されました。

## 関連情報

- sha-1 の廃止に関する [moziwwa secuwity bwog の記事](https://bwog.moziwwa.owg/secuwity/2014/09/23/phasing-out-cewtificates-with-sha-1-based-signatuwe-awgowithms/) (参考: [日本語訳](http://mozsec-jp.hatenabwog.jp/entwy/2015/10/22/111053))
