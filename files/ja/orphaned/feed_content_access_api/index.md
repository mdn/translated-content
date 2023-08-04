---
title: Feed content access API
slug: orphaned/Feed_content_access_API
---

[Firefox 2](/ja/Firefox_2) と Thunderbird 2 は拡張製作者に RSS と Atom フィードへのアクセスを簡単にする一連のインターフェースを導入します。

## フィードインタフェース

- [`nsIFeed`](/ja/NsIFeed)
  - : RSS あるいは Atom フィードを表します。
- [`nsIFeedContainer`](/ja/NsIFeedContainer)
  - : サブクラスされたフィード関連の様々なインタフェースのベースクラス。
- [`nsIFeedElementBase`](/ja/NsIFeedElementBase)
  - : サブクラスされたフィード関連の他の様々なインタフェースのベースクラス。
- [`nsIFeedEntry`](/ja/NsIFeedEntry)
  - : RSS あるいは Atom フィードの単一のエントリを表します。
- [`nsIFeedGenerator`](/ja/NsIFeedGenerator)
  - : RSS あるいは Atom フィードを生成したソフトウェアを記述します。
- [`nsIFeedPerson`](/ja/NsIFeedPerson)
  - : 人を表します。人の名前とメールアドレス及びホームページアドレスを含んでいます。
- [`nsIFeedProcessor`](/ja/NsIFeedProcessor)
  - : RSS と Atom フィードをパースします。
- [`nsIFeedProgressListener`](/ja/NsIFeedProgressListener)
  - : パース処理中にメッセージを受け取るために RSS あるいは Atom フィードをパースしたいプログラムによって実装されます。
- [`nsIFeedResult`](/ja/NsIFeedResult)
  - : フィードのパースの結果を表現します。
- [`nsIFeedResultListener`](/ja/NsIFeedResultListener)
  - : パースが完了したときに通知を受け取るために RSS あるいは Atom フィードをパースしたいプログラムによって実装されます。
- [`nsIFeedTextConstruct`](/ja/NsIFeedTextConstruct)
  - : フィードのテキストを表します: テキストをプレーンテキストあるいは HTML でフェッチするための関数を含んでいます。
- [`nsIScriptableUnescapeHTML`](/ja/NsIScriptableUnescapeHTML)
  - : HTML 文字列をアンエスケープするためのユーティリティクラス。

## 例: Web からフィードを読む

フィードを読み込みパースすることは本当に簡単です。 フィードを読み込むために [`XMLHttpRequest`](/ja/XMLHttpRequest) を使い、次にフィードをパースするためにその文字列を [`nsIFeedProcessor`](/ja/NsIFeedProcessor) に渡します。

フィードを読み込み、パーサにそれを渡すことはこのようなコードを使って行うことができます:

```
  fetch: function(feedUrl)
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
```

[`nsIFeedProcessor`](/ja/NsIFeedProcessor) インタフェースであなたはいくつかの可能なソースからフィードデータをパースできます; この場合、ドキュメントを文字列に読み込み、次に `parseFromString()` メソッドを使ってパースしています。しかし `parseFromStream()` を使ってファイルから、`parseAsync()` を使って直接 URL からパースすることもできます。

パースされたフィードの実際の処理は `FeedTestResultListener` オブジェクトの `handleResult()` を使って行われます。そのコードはこのようになります:

```
    FeedTestResultListener.prototype = {
      handleResult: function(result) {
        var feed = result.doc;

        feed.QueryInterface(Components.interfaces.nsIFeed);

        // 新しいウィンドウを開く

        var win = window.open("", "FeedTest_Window");
        var doc = win.document.wrappedJSObject;

        doc.open();

        // HTML ヘッダとページタイトルを書き込む

        doc.write("<html><head><title>Feed: " + feed.title.text + "</title></head><body>");
        doc.write("<h1>" + feed.title.text + "</h1><p>");

        var itemArray = feed.items;
        var numItems = itemArray.length;

        // 記事の情報を書き込む

        if (!numItems) {
          doc.write("<i>便りのないのは良い便り!</i>");
        }
        else {
          var i;
          var theEntry;
          var theUrl;
          var info;

          for (i=0; i<numItems; i++) {
            theEntry = itemArray.queryElementAt(i, Components.interfaces.nsIFeedEntry);

            if (theEntry) {
              theUrl =
              doc.write('<b><a href="' + theEntry.link.resolve("") + '">' + theEntry.title.text + '</a></b><br>');
              if (theEntry.summary) {
                info = theEntry.summary.text + "</p><hr><p>";
              }
              else {
                info = theEntry.content.text + "</p><hr><p>";
              }
              doc.write("<blockquote>" + info);
              doc.write("</blockquote><p>");
            }
          }
        }

        // ドキュメントを閉じる; 完了!

        doc.write("</body></html>");
        doc.close();
      }
    }
```

`handleResult()` 関数はフィードを表現している [`nsIFeedResult`](/ja/NsIFeedResult) を引数として受け取ります。`doc` プロパティは全てのフィードデータを含んだ [`nsIFeed`](/ja/NsIFeed) です。

フィードのタイトルを得るためには、`feed.title` プロパティを見てください。タイトルは様々なフォーマットのテキストを表す [`nsIFeedTextConstruct`](/ja/NsIFeedTextConstruct) です。HTML エンコードされたテキストとしてフィードのタイトルを得るために、その `text` プロパティを取得します。代りに `plainText()` メソッドを使うことで、プレーンテキストに変換されたタイトルのコピーを得ることができます。

次に、`feed.items` [`nsIArray`](/ja/NsIArray) を見ることでフィードのアイテムの配列をスキャンしています。この配列はそれぞれのフィードアイテムを表す [`nsIFeedEntry`](/ja/NsIFeedEntry) オブジェクトを含んでいます。

それぞれのアイテムの title と link、summary そして content プロパティをみることでドキュメントのコンテンツを作り上げています。 link の完全な URL は link の `resolve()` メソッドを使うことで得ることができます。

フィードのフェッチを初期化するには、単に `fetch(url)` と呼びます。これはフィードコンテンツを含む新しいウィンドウを開ききます。それはそれぞれのアイテムのタイトル(記事自体へのクリック可能なリンクを持っています)を持っています。

フィードアクセスインタフェースそれぞれの詳細は、個別のリファレンスページを見てください。
