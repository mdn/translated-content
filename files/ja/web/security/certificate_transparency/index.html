---
title: 証明書の透明性
slug: Web/Security/Certificate_Transparency
tags:
  - Security
  - Web
translation_of: Web/Security/Certificate_Transparency
---
<p><span class="seoSummary"><strong>Certificate Transparency</strong> は、証明書の誤発行を防止し、監視するために設計されたオープンなフレームワークです。新しく発行された証明書は、公開されている、多くの場合独立した CT ログに「記録」され、発行された TLS 証明書の追加のみの暗号的に保証された記録を維持します。</span></p>

<p>このようにして、認証局 (CA) は、はるかに大きな監視と監督を受けることができます。CA/B フォーラムの<em>ベースライン要件</em>に違反するような、潜在的に悪意のある証明書は、より迅速に検出され、失効される可能性があります。また、ブラウザベンダーやルートストアのメンテナは、不信に繋がるかもしれない問題がある CA について、より多くの情報に基づいた決定を下すことができるようになります。</p>

<h2 id="背景">背景</h2>

<p>CT ログは <em>Merkle</em> ツリーのデータ構造をベースに構築されています。ノードには子ノードの<em>暗号化ハッシュ</em>がラベル付けされています。リーフノードには実際のデータのハッシュが含まれています。したがって、ルートノードのラベルは、ツリー内の他のすべてのノードに依存します。</p>

<p>Certificate Transparency のコンテキストでは、リーフノードによってハッシュ化されたデータは、現在運営されている様々な異なる CA によって発行された証明書です。証明書の組み込みは、対数的な O(log n) 時間で効率的に生成・検証できる<em>監査証明</em>を介して検証することができます。</p>

<p>Certificate Transparency は、認証局の危殆化 (2011 年の DigiNotar の違反)、疑わしい決定 (2012 年の Trustwave の下位ルート事件)、技術的な発行問題 (マレーシアの Digicert Sdn Bhd による 512 ビットの脆弱な証明書の発行) を背景に、2013 年に初めて実現しました。</p>

<h2 id="実装">実装</h2>

<p>証明書が CT ログに送信されると、<em>署名付き証明書のタイムスタンプ</em> (SCT) が生成されて返されます。これは、証明書が提出され、ログに追加されることを証明する役割を果たします。</p>

<p>仕様では、準拠サーバは接続時にこれらの SCT を TLS クライアントに提供<em>しなければならない</em>とされています。これは、いくつかの異なるメカニズムを介して実現することができます。</p>

<ul>
 <li>署名付き証明書のタイムスタンプを直接リーフ証明書に埋め込む X.509 v3 証明書拡張機能</li>
 <li>ハンドシェイク中に送信される <code>signed_certificate_timestamp</code> 型の TLS 拡張</li>
 <li>OCSP のステープリング (つまり、<code>status_request</code> TLS 拡張) と、1つ以上の SCT を持つ <code>SignedCertificateTimestampList</code> の提供</li>
</ul>

<p>X.509 証明書の拡張では、含まれる SCT は発行 CA が決定します。このメカニズムを使用する場合、Web サーバを変更する必要はありません。</p>

<p>後者の方法では、必要なデータを送信するためにサーバを更新する必要があります。利点は、サーバオペレータが TLS 拡張/stapled OCSP レスポンスを介して送信される SCT を提供する CT ログソースをカスタマイズできることです。</p>

<h2 id="ブラウザの要件">ブラウザの要件</h2>

<p>Google Chrome では、2018年4月30日以降の notBefore 日付を持つすべての証明書の問題に対して、CT ログのインクルードを要求しています。これにより、ユーザーは非準拠の TLS 証明書を使用したサイトを訪問できなくなります。これまで Chrome では、<em>Extended Validation</em> (EV) や Symantec が発行した証明書に対して CT のインクルードが義務付けられていました。</p>

<p>Apple は、Safari や他のサーバがサーバ証明書を信頼するために、さまざまな数の SCT を<a href="https://support.apple.com/ja-jp/HT205280">必要としています</a>。</p>

<p>Firefox は現在、ユーザーが訪問したサイトの CT ログを確認したり、使用を義務付けたり<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1281469">していません</a>。</p>

<p><a href="/ja/docs/Web/HTTP/Headers/Expect-CT">Expect-CT ヘッダ</a>を使用して、ブラウザが証明書の透過性の要件を常に実施するように要求することができます (Chrome などでは、証明書の発行日が4月以前の notBefore であっても)。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td><a class="external external-icon" href="https://tools.ietf.org/html/rfc6962" hreflang="en" lang="en" rel="noopener">Certificate Transparency</a></td>
   <td><span class="spec-RFC">IETF RFC</span></td>
   <td></td>
  </tr>
 </tbody>
</table>
