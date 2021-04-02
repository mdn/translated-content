---
title: Firefox へのフィードリーダーの追加
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
tags:
  - Configuration management
translation_of: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
original_slug: Adding_feed_readers_to_Firefox
---
<p>Firefox 2 より、Firefox はフィードを読む際に使う RSS または Atom フィードリーダを選択できるようになっています。この記事ではデフォルトではサポートされていないリーダを追加サポートさせる方法について説明します。</p>
<h2 id="Adding_a_new_web-based_feed_reader" name="Adding_a_new_web-based_feed_reader">新しいウェブベースのフィードリーダの追加</h2>
<p>新しいウェブベースのフィードリーダを追加サポートさせるためにやらなければならないことは、3 つの新しい設定項目を追加することだけです。</p>
<dl>
  <dt>
    <code>browser.contentHandlers.types.<i>number</i>.title</code></dt>
  <dd>
    フィードリーダの名前。</dd>
  <dt>
    <code>browser.contentHandlers.types.<i>number</i>.type</code></dt>
  <dd>
    フィードリーダに使用するため、ここは "application/vnd.mozilla.maybe.feed" にする。</dd>
  <dt>
    <code>browser.contentHandlers.types.<i>number</i>.uri</code></dt>
  <dd>
    フィードリーダの URI。フィードの URL が挿入されるべき部分に "%s" を使用する。</dd>
</dl>
<p><code><i>number</i></code> は既に使われている数のうち最大のものよりもより 1 つ大きな数で置き換えてください。例えば "Easy Reader" という新しいフィードリーダを追加したい場合、かつ 0 から 4 までの数が指定されたコンテンツハンドラが既に定義されている場合、このように <code><i>number</i></code> には 5 を使用してください。</p>
<ul>
  <li><code>browser.contentHandlers.types.5.title</code>: Easy Reader</li>
  <li><code>browser.contentHandlers.types.5.type</code>: application/vnd.mozilla.maybe.feed</li>
  <li><code>browser.contentHandlers.types.5.uri</code>: <span class="nowiki">http://www.theeasyreaderurl.com?feed=%s</span></li>
</ul>
<p><code>about:config</code> を使うことでこれらの設定項目を手動で追加できます。拡張機能で新しいフィードリーダをインストールしたいのであれば、プログラム側で行うこともできます。</p>
<h3 id="Adding_a_feed_reader_from_a_web_application" name="Adding_a_feed_reader_from_a_web_application">ウェブアプリケーションからのフィードリーダの追加</h3>
<p>ウェブ上の JavaScript コードから簡単にフィードリーダを追加することができます。このためには、このような {{domxref("navigator.registerContentHandler()")}} 関数を使用します。</p>
<pre class="brush:js">navigator.registerContentHandler(
    "application/vnd.mozilla.maybe.feed",
    "http://www.theeasyreaderurl.com?feed=%s",
    "Easy Reader"
);</pre>
<h3 id="Adding_a_new_feed_reader_application" name="Adding_a_new_feed_reader_application">新しいフィードリーダアプリケーションの追加</h3>
<p>これを最も簡単に行う方法というのは、単に設定（あるいは オプション、ご使用のプラットフォームによります）ウィンドウの フィード パネルという既存のユーザインタフェースを使用することです。</p>
<div class="note">
  <strong>注意:</strong> Firefox 8 よりフィードパネルは無くなっています。フィードリーダーの開発者が、Web フィードの処理の為のオプションをご自分で追加する場合、上記の同様の JavaScript コードを実装することをお勧めします。</div>
<p>これも拡張機能からプログラムで行うこともできます。フィードリーダに使うアプリケーションのパス名を <code>browser.feeds.handlers.application</code> オプションの値に設定することで可能です。</p>
<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
  <li>{{ domxref("window.navigator.registerContentHandler()") }}</li>
</ul>
