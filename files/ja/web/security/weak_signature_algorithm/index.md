---
title: 脆弱な署名アルゴリズム
slug: Web/Security/Weak_Signature_Algorithm
tags:
  - Cryptography
  - ウェブ
  - ガイド
  - セキュリティ
translation_of: Web/Security/Weak_Signature_Algorithm
---
<p><span class="seoSummary">{{Glossary("Digital certificate", "ディジタル証明書")}}の{{Glossary("Signature/Security", "電子署名")}}に用いられるハッシュアルゴリズムの強度は、証明書のセキュリティにおいて核心的な要素です。この記事では、脆弱になったため、可能であれば避けるものと知られている署名アルゴリズムについて、いくらかの情報を提供します。</span></p>

<p>ハッシュアルゴリズムの脆弱性は、攻撃者が偽の証明書を作成または取得してしまうような事態を招きます。新しい攻撃手法が発見や、利用可能な攻撃技術の進歩などのため、古いアルゴリズムを使用することは避けるべきであり、いつかは対応が削除されます。</p>

<h2 id="SHA-1">SHA-1</h2>

<p>SHA-1 の証明書は、2017年の初めから、多くのブラウザーの開発者が安全であるとはみなさなくなりました。より安全なハッシュアルゴリズム (SHA-256 や SHA-512 など) を代わりに使用してください。</p>

<h2 id="MD5">MD5</h2>

<p>MD5 による署名への対応は、2012年初めに削除されました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>SHA-1 の廃止に関する <a class="external" href="https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/">Mozilla Security Blog の記事</a> (参考: <a href="http://mozsec-jp.hatenablog.jp/entry/2015/10/22/111053">日本語訳</a>)</li>
</ul>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</p>
