---
title: Feed content access API
slug: orphaned/Feed_content_access_API
tags:
  - Add-ons
  - Extensions
original_slug: Feed_content_access_API
---
<p><a href="ja/Firefox_2">Firefox 2</a> と Thunderbird 2 は拡張製作者に RSS と Atom フィードへのアクセスを簡単にする一連のインターフェースを導入します。</p>
<h2 id=".E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.82.A4.E3.83.B3.E3.82.BF.E3.83.95.E3.82.A7.E3.83.BC.E3.82.B9" name=".E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.82.A4.E3.83.B3.E3.82.BF.E3.83.95.E3.82.A7.E3.83.BC.E3.82.B9">フィードインタフェース</h2>
<dl>
 <dt>
  <code><a href="ja/NsIFeed">nsIFeed</a></code></dt>
 <dd>
  RSS あるいは Atom フィードを表します。</dd>
 <dt>
  <code><a href="ja/NsIFeedContainer">nsIFeedContainer</a></code></dt>
 <dd>
  サブクラスされたフィード関連の様々なインタフェースのベースクラス。</dd>
 <dt>
  <code><a href="ja/NsIFeedElementBase">nsIFeedElementBase</a></code></dt>
 <dd>
  サブクラスされたフィード関連の他の様々なインタフェースのベースクラス。</dd>
 <dt>
  <code><a href="ja/NsIFeedEntry">nsIFeedEntry</a></code></dt>
 <dd>
  RSS あるいは Atom フィードの単一のエントリを表します。</dd>
 <dt>
  <code><a href="ja/NsIFeedGenerator">nsIFeedGenerator</a></code></dt>
 <dd>
  RSS あるいは Atom フィードを生成したソフトウェアを記述します。</dd>
 <dt>
  <code><a href="ja/NsIFeedPerson">nsIFeedPerson</a></code></dt>
 <dd>
  人を表します。人の名前とメールアドレス及びホームページアドレスを含んでいます。</dd>
 <dt>
  <code><a href="ja/NsIFeedProcessor">nsIFeedProcessor</a></code></dt>
 <dd>
  RSS と Atom フィードをパースします。</dd>
 <dt>
  <code><a href="ja/NsIFeedProgressListener">nsIFeedProgressListener</a></code></dt>
 <dd>
  パース処理中にメッセージを受け取るために RSS あるいは Atom フィードをパースしたいプログラムによって実装されます。</dd>
 <dt>
  <code><a href="ja/NsIFeedResult">nsIFeedResult</a></code></dt>
 <dd>
  フィードのパースの結果を表現します。</dd>
 <dt>
  <code><a href="ja/NsIFeedResultListener">nsIFeedResultListener</a></code></dt>
 <dd>
  パースが完了したときに通知を受け取るために RSS あるいは Atom フィードをパースしたいプログラムによって実装されます。</dd>
 <dt>
  <code><a href="ja/NsIFeedTextConstruct">nsIFeedTextConstruct</a></code></dt>
 <dd>
  フィードのテキストを表します: テキストをプレーンテキストあるいは HTML でフェッチするための関数を含んでいます。</dd>
 <dt>
  <code><a href="ja/NsIScriptableUnescapeHTML">nsIScriptableUnescapeHTML</a></code></dt>
 <dd>
  HTML 文字列をアンエスケープするためのユーティリティクラス。</dd>
</dl>
<h2 id=".E4.BE.8B:_Web_.E3.81.8B.E3.82.89.E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.82.92.E8.AA.AD.E3.82.80" name=".E4.BE.8B:_Web_.E3.81.8B.E3.82.89.E3.83.95.E3.82.A3.E3.83.BC.E3.83.89.E3.82.92.E8.AA.AD.E3.82.80">例: Web からフィードを読む</h2>
<p>フィードを読み込みパースすることは本当に簡単です。 フィードを読み込むために <code><a href="ja/XMLHttpRequest">XMLHttpRequest</a></code> を使い、次にフィードをパースするためにその文字列を <code><a href="ja/NsIFeedProcessor">nsIFeedProcessor</a></code> に渡します。</p>
<p>フィードを読み込み、パーサにそれを渡すことはこのようなコードを使って行うことができます:</p>
<pre>  fetch: function(feedUrl)
  {
    var httpRequest = null;

    function infoReceived() {
      var data = httpRequest.responseText;

      var ioService = Components.classes['@mozilla.org/network/io-service;1']
                                         .getService(Components.interfaces.nsIIOService);
      var uri = ioService.newURI(feedUrl, null, null);

      if (data.length) {
        var parser = Components.classes["@mozilla.org/feed-processor;1"]
                                        .createInstance(Components.interfaces.nsIFeedProcessor);
        var listener = new FeedTestResultListener();
        try {
          parser.listener = listener;
          parser.parseFromString(data, uri);
        }
        catch(e) {
          alert("フィードのパースでエラーが発生しました。");
        }
      }
    }

    httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", feedUrl, true);
    try {
      httpRequest.onload = infoReceived;
      httpRequest.send(null);
    }
    catch(e) {
      alert(e);
    }
  }
</pre>
<p><code><a href="ja/NsIFeedProcessor">nsIFeedProcessor</a></code> インタフェースであなたはいくつかの可能なソースからフィードデータをパースできます; この場合、ドキュメントを文字列に読み込み、次に <code>parseFromString()</code> メソッドを使ってパースしています。しかし <code>parseFromStream()</code> を使ってファイルから、<code>parseAsync()</code> を使って直接 URL からパースすることもできます。</p>
<p>パースされたフィードの実際の処理は <code>FeedTestResultListener</code> オブジェクトの <code>handleResult()</code> を使って行われます。そのコードはこのようになります:</p>
<pre>    FeedTestResultListener.prototype = {
      handleResult: function(result) {
        var feed = result.doc;

        feed.QueryInterface(Components.interfaces.nsIFeed);

        // 新しいウィンドウを開く

        var win = window.open("", "FeedTest_Window");
        var doc = win.document.wrappedJSObject;

        doc.open();

        // HTML ヘッダとページタイトルを書き込む

        doc.write("&lt;html&gt;&lt;head&gt;&lt;title&gt;Feed: " + feed.title.text + "&lt;/title&gt;&lt;/head&gt;&lt;body&gt;");
        doc.write("&lt;h1&gt;" + feed.title.text + "&lt;/h1&gt;&lt;p&gt;");

        var itemArray = feed.items;
        var numItems = itemArray.length;

        // 記事の情報を書き込む

        if (!numItems) {
          doc.write("&lt;i&gt;便りのないのは良い便り!&lt;/i&gt;");
        }
        else {
          var i;
          var theEntry;
          var theUrl;
          var info;

          for (i=0; i&lt;numItems; i++) {
            theEntry = itemArray.queryElementAt(i, Components.interfaces.nsIFeedEntry);

            if (theEntry) {
              theUrl =
              doc.write('&lt;b&gt;&lt;a href="' + theEntry.link.resolve("") + '"&gt;' + theEntry.title.text + '&lt;/a&gt;&lt;/b&gt;&lt;br&gt;');
              if (theEntry.summary) {
                info = theEntry.summary.text + "&lt;/p&gt;&lt;hr&gt;&lt;p&gt;";
              }
              else {
                info = theEntry.content.text + "&lt;/p&gt;&lt;hr&gt;&lt;p&gt;";
              }
              doc.write("&lt;blockquote&gt;" + info);
              doc.write("&lt;/blockquote&gt;&lt;p&gt;");
            }
          }
        }

        // ドキュメントを閉じる; 完了!

        doc.write("&lt;/body&gt;&lt;/html&gt;");
        doc.close();
      }
    }
</pre>
<p><code>handleResult()</code> 関数はフィードを表現している <code><a href="ja/NsIFeedResult">nsIFeedResult</a></code> を引数として受け取ります。<code>doc</code> プロパティは全てのフィードデータを含んだ <code><a href="ja/NsIFeed">nsIFeed</a></code> です。</p>
<p>フィードのタイトルを得るためには、<code>feed.title</code> プロパティを見てください。タイトルは様々なフォーマットのテキストを表す <code><a href="ja/NsIFeedTextConstruct">nsIFeedTextConstruct</a></code> です。HTML エンコードされたテキストとしてフィードのタイトルを得るために、その <code>text</code> プロパティを取得します。代りに <code>plainText()</code> メソッドを使うことで、プレーンテキストに変換されたタイトルのコピーを得ることができます。</p>
<p>次に、<code>feed.items</code> <code><a href="ja/NsIArray">nsIArray</a></code> を見ることでフィードのアイテムの配列をスキャンしています。この配列はそれぞれのフィードアイテムを表す <code><a href="ja/NsIFeedEntry">nsIFeedEntry</a></code> オブジェクトを含んでいます。</p>
<p>それぞれのアイテムの title と link、summary そして content プロパティをみることでドキュメントのコンテンツを作り上げています。 link の完全なURL は link の <code>resolve()</code> メソッドを使うことで得ることができます。</p>
<p>フィードのフェッチを初期化するには、単に <code>fetch(
 <i>
  url</i>
 )</code> と呼びます。これはフィードコンテンツを含む新しいウィンドウを開ききます。それはそれぞれのアイテムのタイトル(記事自体へのクリック可能なリンクを持っています)を持っています。</p>
<p>フィードアクセスインタフェースそれぞれの詳細は、個別のリファレンスページを見てください。</p>
