---
title: Firefox 3 のためのウェブアプリケーションの更新
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_web_applications
original_slug: Updating_web_applications_for_Firefox_3
---
<div>{{FirefoxSidebar}}</div>

<p>来たる Firefox 3 では、あなたが利用したいであろう新機能と同様に、ウェブサイトやウェブアプリケーションに影響するであろう多くの変更が施されています。この記事は Firefox 3 を最大限活用するためにあなたのコンテンツを更新する作業の出発点となるでしょう。</p>

<h2 id="DOM_changes">DOM の変更</h2>

<p>外部ドキュメントからのノードは、現在のドキュメントに挿入する前に <a href="/ja/docs/Web/API/Document/importNode" title="外部ドキュメントからノードのコピーを作成し、現在のドキュメントに挿入できるようにします。"><code>document.importNode()</code></a> を使ってクローンを作る (あるいは <a href="/ja/docs/Web/API/Document/adoptNode" title="外部ドキュメントからノードを取り込みます。ノードとそのサブツリーは、(もしあれば) 元あったドキュメントから削除され、ownerDocument が現在のドキュメントに変更されます。そして、そのノードが現在のドキュメントに挿入できるようになります。"><code>document.adoptNode()</code></a> を使って取り込む) べきです。<a href="/ja/docs/Web/API/Node/ownerDocument" title="ownerDocument プロパティは、指定ノードを内包するノードツリーのトップレベルのドキュメントオブジェクトを返します。"><code>Node.ownerDocument</code></a> 問題の詳細については <a class="external" href="https://www.w3.org/DOM/faq.html#ownerdoc" rel="noopener">W3C DOM FAQ</a> を参照してください。</p>

    <p>Firefox では現在このルールを強制していません。Firefox 3 の開発中には強制していた時期もありましたが、このルールを強制すると多くのサイトが機能しなくなってしまうため取りやめになりました。
    将来的な互換性を高めるため、ウェブ開発者にはこのルールに従ってコードを修正することを推奨します。</p>

<h2 id="HTML_changes">HTML の変更</h2>

<h3 id="Changes_to_character_set_inheritance">文字セット継承に対する変更</h3>

<p>Firefox 3 では、frame や iframe が親の文字セットを継承できてしまうセキュリティ上のバグが修正されています。これにより、場合によっては問題が起こる可能性があります。フレームが親文字タセットを継承できるのは、フレームと親がともに同じサーバーから読み込まれている場合に限られます。もしあなたのページが、他のサーバーから読み込まれたフレームが同じ文字セットを継承することを前提に作られているなら、フレームの HTML を更新して文字セットを明確に指定するべきです。</p>

<h3 id="Change_to_the_SCRIPT_element">SCRIPT 要素に対する変更</h3>

<p><code>text/html</code> 文書における <code>&lt;script&gt;</code> 要素は、たとえ 間に内容を含めなくても、HTML 4 文書における 閉じ タグである <code>&lt;/script&gt;</code> を必要とするようになりました。以前のバージョンの Firefox では、以下のようにすることが可能でした。：</p>

<pre>&lt;script ... /&gt;
</pre>

<p>今バージョンからマークアップは HTML の仕様に従わなければならず (それが実際に HTML である場合)、以下のように実際に閉じなければなりません。</p>

<pre>&lt;script ...&gt;&lt;/script&gt;
</pre>

<p>これは互換性とセキュリティの両方を改善します。</p>

<h2 id="CSS_changes">CSS の変更</h2>

<h3 id="Change_to_font-size_based_on_em_ex_units">em、ex 単位に基づいた font-size に対する変更</h3>

<p>em、ex 単位での font-size の値はユーザの最小フォントサイズ設定の影響を受けていました。例えば、フォントが最小フォントサイズより大きく表示されるなら、em と ex 単位で font-size を指定されたフォントは最小フォントサイズ設定に従って拡大されるでしょう。これは割合に基づいたフォントサイズの振る舞いと矛盾していました。</p>

<p>em 及び ex 単位での font-size の値は、ユーザの最小フォントサイズの影響を受けることなく、"意図されたフォントサイズ" に基づくようになりました。言い換えれば、フォントサイズは常にデザイナーの意図に従って計算され、その後に最小フォントサイズのための調整が行われるようになったということです。</p>

<p>{{Bug(434718)}}、特にその <a class="link-https" href="https://bugzilla.mozilla.org/attachment.cgi?id=322943">添付ファイル 322943</a> をデモとしてを参照してください (違いを見るためには、最小フォントサイズ >= 6 で見る必要があります)。 (<span class="comment">これはバグテンプレートについて言っているのではありません。このリンクは Bugzilla のバグではなく、Bugzilla の添付ファイルを指しています。添付ファイルの番号をバグ番号として使用すると、意味を成しません。) Firefox 2 では、em ベースのフォントサイズが最小フォントサイズに「跳ね返る」ため、2 つのボックスカスケードの動作が異なります)。</p>

<h2 id="Security_changes">セキュリティに関する変更</h2>

<h3 id="Chrome_access">クロームへのアクセス</h3>

<p>Firefox のこれまでのバージョンでは、ウェブページは <code>chrome://</code> プロトコルを使ってクロームからスクリプトや画像を読み込むことが可能でした。特に、このような仕様によって、アドオンがインストールされているかどうかをサイトが判別することが可能でした。これは、ブラウザにセキュリティ機能を追加するアドオンを回避して、ユーザのセキュリティを侵害するのに利用される恐れがありました。</p>

<p>Firefox 3 では、ウェブコンテンツは <code><a class="external" rel="freelink">chrome://browser/</a></code> および <code><a class="external" rel="freelink">chrome://toolkit/</a></code> 以下にあるコンテンツに限ってアクセスできます。これらのファイルはウェブコンテンツからアクセスされることを意図したものです。他のクロームコンテンツはすべて、ウェブからのアクセスが禁止されます。</p>

<p>ただし、拡張機能が、内部のコンテンツをウェブからアクセス可能にする方法があります。その方法とは、以下のように、<code>chrome.manifest</code> ファイルに特別なフラグを指定することです。</p>

<pre>content mypackage location/ contentaccessible=yes
</pre>

<p>これは頻繁に必要となるものではありませんが、ウェブからのアクセスが必要な、まれなケースのために用意されています。Firefox はユーザに拡張が <code>contentaccessible</code> フラグをこのような方法で用いることで潜在的セキュリティリスクになることを警告するかもしれないことに注意してください。</p>

<div class="note"><strong>注意:</strong> Firefox 2 では <code>contentaccessible</code> フラグが認識されない (フラグを含む行全体が無視されてしまう) ことから、アドオンを Firefox 2 と Firefox 3 の両方に対応させたい場合は、以下のように指定します。

<pre>content mypackage location/
content mypackage location/ contentaccessible=yes
</pre>
</div>

<h3 id="File_upload_fields">ファイルアップロードフィールド</h3>

<p>Firefox のこれまでのバージョンでは、ユーザがファイルをアップロードするために送信する際、そのファイルのフルパスがウェブアプリケーションに公開されてしまう場合がありました。このプライバシーの懸念は、Firefox 3 で、ファイル名のみをウェブアプリケーションに公開するよう仕様を変更することで解決されました。</p>

<h3 id="Using_remote_JARs_in_frames">フレーム内でのリモート JAR の使用</h3>

<p>他のドメインから読み込んだ JAR ファイル内のコードの使用は、フレーム内では許可されなくなりました。これによって<a href="https://www.mozilla.org/security/announce/2008/mfsa2008-23.html">潜在的な攻撃ベクトル</a>を軽減することができます。</p>

<h3 id="Changes_to_same-origin_policy_for_file_URIs">file: URI の同一オリジンポリシーの変更</h3>

<p>file: URI の同一オリジンポリシーが Firefox 3 で変更されました。これはコンテンツに影響する可能性があります。詳しくは <a href="/jas/docs/Same-origin_policy_for_file:_URIs" title="Same-origin policy for file: URIs">file: URI の同一オリジンポリシー</a>を参照してください。</p>

<h2 id="JavaScript_changes">JavaScript の変更</h2>

<p>Firefox 3 は <a href="/ja/docs/New_in_JavaScript_1.8">JavaScript 1.8</a> をサポートします。ウェブサイトやウェブアプリケーションの更新が必要となりうる重要な変更点としては、時代遅れであり非標準の <code>Script</code> オブジェクトがサポートされなくなることが挙げられます。これは <code>&lt;script&gt;</code> タグではなく、標準化されることのなかった JavaScript オブジェクトのことです。どちらにしても使用していた可能性は低いでしょうから、これが問題になることは恐らくないでしょう。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Firefox/Releases/3">開発者向け Firefox 3</a></li>
 <li><a href="/ja/docs/New_in_JavaScript_1.8" title="New_in_JavaScript_1.8">JavaScript 1.8 の新機能</a></li>
 <li><a href="/ja/docs/Mozilla/Firefox/Releases/3/Updating_extensions">Updating extensions for Firefox 3 のための拡張機能の更新</a></li>
</ul>
