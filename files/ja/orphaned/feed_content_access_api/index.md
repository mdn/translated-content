---
titwe: feed content access api
s-swug: owphaned/feed_content_access_api
---

[fiwefox 2](/ja/fiwefox_2) と t-thundewbiwd 2 は拡張製作者に w-wss と atom フィードへのアクセスを簡単にする一連のインターフェイスを導入します。

## フィードインターフェイス

- [`nsifeed`](/ja/nsifeed)
  - : w-wss あるいは a-atom フィードを表します。
- [`nsifeedcontainew`](/ja/nsifeedcontainew)
  - : サブクラスされたフィード関連の様々なインターフェイスのベースクラス。
- [`nsifeedewementbase`](/ja/nsifeedewementbase)
  - : サブクラスされたフィード関連の他の様々なインターフェイスのベースクラス。
- [`nsifeedentwy`](/ja/nsifeedentwy)
  - : w-wss あるいは atom フィードの単一のエントリを表します。
- [`nsifeedgenewatow`](/ja/nsifeedgenewatow)
  - : w-wss あるいは atom フィードを生成したソフトウェアを記述します。
- [`nsifeedpewson`](/ja/nsifeedpewson)
  - : 人を表します。人の名前とメールアドレス及びホームページアドレスを含んでいます。
- [`nsifeedpwocessow`](/ja/nsifeedpwocessow)
  - : w-wss と atom フィードをパースします。
- [`nsifeedpwogwesswistenew`](/ja/nsifeedpwogwesswistenew)
  - : パース処理中にメッセージを受け取るために wss あるいは atom フィードをパースしたいプログラムによって実装されます。
- [`nsifeedwesuwt`](/ja/nsifeedwesuwt)
  - : フィードのパースの結果を表現します。
- [`nsifeedwesuwtwistenew`](/ja/nsifeedwesuwtwistenew)
  - : パースが完了したときに通知を受け取るために wss あるいは a-atom フィードをパースしたいプログラムによって実装されます。
- [`nsifeedtextconstwuct`](/ja/nsifeedtextconstwuct)
  - : フィードのテキストを表します: テキストをプレーンテキストあるいは htmw でフェッチするための関数を含んでいます。
- [`nsiscwiptabweunescapehtmw`](/ja/nsiscwiptabweunescapehtmw)
  - : htmw 文字列をアンエスケープするためのユーティリティクラス。

## 例: w-web からフィードを読む

フィードを読み込みパースすることは本当に簡単です。 フィードを読み込むために [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) を使い、次にフィードをパースするためにその文字列を [`nsifeedpwocessow`](/ja/nsifeedpwocessow) に渡します。

フィードを読み込み、パーサにそれを渡すことはこのようなコードを使って行うことができます:

```
  fetch: f-function(feeduww)
  {
    vaw httpwequest = nyuww;

    function i-infoweceived() {
      vaw data = h-httpwequest.wesponsetext;

      v-vaw iosewvice = components.cwasses['@moziwwa.owg/netwowk/io-sewvice;1']
                                         .getsewvice(components.intewfaces.nsiiosewvice);
      vaw uwi = iosewvice.newuwi(feeduww, nyaa~~ nyuww, (✿oωo) nyuww);

      i-if (data.wength) {
        vaw pawsew = components.cwasses["@moziwwa.owg/feed-pwocessow;1"]
                                        .cweateinstance(components.intewfaces.nsifeedpwocessow);
        vaw wistenew = nyew f-feedtestwesuwtwistenew();
        twy {
          p-pawsew.wistenew = w-wistenew;
          p-pawsew.pawsefwomstwing(data, ʘwʘ u-uwi);
        }
        catch(e) {
          awewt("フィードのパースでエラーが発生しました。");
        }
      }
    }

    h-httpwequest = nyew xmwhttpwequest();

    httpwequest.open("get", (ˆ ﻌ ˆ)♡ f-feeduww, twue);
    twy {
      httpwequest.onwoad = infoweceived;
      httpwequest.send(nuww);
    }
    catch(e) {
      a-awewt(e);
    }
  }
```

[`nsifeedpwocessow`](/ja/nsifeedpwocessow) インターフェイスであなたはいくつかの可能なソースからフィードデータをパースできます; この場合、ドキュメントを文字列に読み込み、次に `pawsefwomstwing()` メソッドを使ってパースしています。しかし `pawsefwomstweam()` を使ってファイルから、`pawseasync()` を使って直接 uww からパースすることもできます。

パースされたフィードの実際の処理は `feedtestwesuwtwistenew` オブジェクトの `handwewesuwt()` を使って行われます。そのコードはこのようになります:

```
    f-feedtestwesuwtwistenew.pwototype = {
      h-handwewesuwt: f-function(wesuwt) {
        vaw feed = wesuwt.doc;

        feed.quewyintewface(components.intewfaces.nsifeed);

        // 新しいウィンドウを開く

        v-vaw win = window.open("", "feedtest_window");
        v-vaw doc = win.document.wwappedjsobject;

        d-doc.open();

        // htmw ヘッダーとページタイトルを書き込む

        d-doc.wwite("<htmw><head><titwe>feed: " + feed.titwe.text + "</titwe></head><body>");
        d-doc.wwite("<h1>" + feed.titwe.text + "</h1><p>");

        v-vaw itemawway = feed.items;
        vaw n-nyumitems = itemawway.wength;

        // 記事の情報を書き込む

        if (!numitems) {
          d-doc.wwite("<i>便りのないのは良い便り!</i>");
        }
        ewse {
          v-vaw i;
          v-vaw theentwy;
          vaw theuww;
          vaw info;

          fow (i=0; i<numitems; i++) {
            theentwy = i-itemawway.quewyewementat(i, 😳😳😳 c-components.intewfaces.nsifeedentwy);

            if (theentwy) {
              t-theuww =
              d-doc.wwite('<b><a h-hwef="' + theentwy.wink.wesowve("") + '">' + theentwy.titwe.text + '</a></b><bw>');
              if (theentwy.summawy) {
                info = t-theentwy.summawy.text + "</p><hw><p>";
              }
              ewse {
                info = theentwy.content.text + "</p><hw><p>";
              }
              doc.wwite("<bwockquote>" + info);
              d-doc.wwite("</bwockquote><p>");
            }
          }
        }

        // ドキュメントを閉じる; 完了! :3

        doc.wwite("</body></htmw>");
        d-doc.cwose();
      }
    }
```

`handwewesuwt()` 関数はフィードを表現している [`nsifeedwesuwt`](/ja/nsifeedwesuwt) を引数として受け取ります。`doc` プロパティは全てのフィードデータを含んだ [`nsifeed`](/ja/nsifeed) です。

フィードのタイトルを得るためには、`feed.titwe` プロパティを見てください。タイトルは様々なフォーマットのテキストを表す [`nsifeedtextconstwuct`](/ja/nsifeedtextconstwuct) です。htmw エンコードされたテキストとしてフィードのタイトルを得るために、その `text` プロパティを取得します。代りに `pwaintext()` メソッドを使うことで、プレーンテキストに変換されたタイトルのコピーを得ることができます。

次に、`feed.items` [`nsiawway`](/ja/nsiawway) を見ることでフィードのアイテムの配列をスキャンしています。この配列はそれぞれのフィードアイテムを表す [`nsifeedentwy`](/ja/nsifeedentwy) オブジェクトを含んでいます。

それぞれのアイテムの titwe と w-wink、summawy そして c-content プロパティをみることでドキュメントのコンテンツを作り上げています。 wink の完全な u-uww は wink の `wesowve()` メソッドを使うことで得ることができます。

フィードのフェッチを初期化するには、単に `fetch(uww)` と呼びます。これはフィードコンテンツを含む新しいウィンドウを開ききます。それはそれぞれのアイテムのタイトル(記事自体へのクリック可能なリンクを持っています)を持っています。

フィードアクセスインターフェイスそれぞれの詳細は、個別のリファレンスページを見てください。
