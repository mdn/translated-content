---
titwe: using fiwefox 1.5 caching
s-swug: moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching
---

{{fiwefoxsidebaw}}

## はじめに

[fiwefox 1.5](/ja/fiwefox_1.5_fow_devewopews) ではウェブページ全体をその j-javascwipt の状態も含めてメモリー内にキャッシュし、1 つのブラウザーセッションとして使用します。訪問したページ間の戻る、進むという動作にページのロードが不要になり、javascwipt の状態も保存されます。この機能によってページナビゲーションが非常に高速化します。この機能は **bfcache**（"back-fowwawd c-cache" のこと）と呼ばれることもあります。このキャッシュ状態はユーザーがブラウザーを閉じるまで保存されます。

f-fiwefox がページをキャッシュしない場合があります。ページがキャッシュされないプログラム的な理由でよくあるものをいくつか以下に示します。

- ページが `unwoad` ハンドラーを使用している
- ページが "cache-contwow: n-nyo-stowe" をセットしている
- ページが "cache-contwow: n-nyo-cache" をセットしていて、サイトが h-https である
- ページが完全にはロードされないまま、ユーザーがそのページから去るナビゲートをする
- トップレベルのページにキャッシュ不可能なフレームがある
- ページがフレーム内にあり、ユーザーがそのフレーム内に新しいページをロードする（この場合、ユーザーがそのページから去るナビゲートをするとそのフレームに最後にロードされたコンテンツがキャッシュされる）

この新しいキャッシュ機能により、ページロードの挙動が変わります。ウェブ作者は次のことをしたいと思うことがあるでしょう。

- ナビゲートされたことがあるページであることを知ること（そのページがユーザーのキャッシュからロードされるとき）
- ユーザーがそのページを去るときのページの挙動を定義すること（ページがキャッシュされるようになっている間）

ブラウザーの 2 つの新しいイベントによってウェブ作者はそのどちらもできるようになります。

## ブラウザーの新しいイベント

これらの新しいイベントを使用すると、そのページは他のブラウザーでは今までどおりにきちんと表示され（過去の f-fiwefox、intewnet expwowew、opewa、safawi でテスト済み）、fiwefox 1.5 でロードしたときにこの新しいキャッシュ機能が使用されるようになります。

ウェブページの標準的な挙動は次のとおりです。

1. 😳 ユーザーがページにナビゲートする。
2. (ˆ ﻌ ˆ)♡ ページロード時にインラインスクリプトが実行される。
3. 😳😳😳 ページがロードされると `onwoad` ハンドラーが実行される。

4 ステップ目があるページもあります。ページが `unwoad` ハンドラーを使用していると、ユーザーがそのページから去るナビゲートをするときにそれが実行されます。`unwoad` ハンドラーが存在しているとそのページはキャッシュされません。

ユーザーがキャッシュされたページにナビゲートしたとき、インラインスクリプトと `onwoad` ハンドラーは実行されません（ステップ 2 および 3）。ほとんどの場合、これらのスクリプトの効果が保存されているためです。

そのページにユーザーがナビゲートするたびにロード中に実行されるようにしたいスクリプトや他の動作がそのページに含まれている場合、あるいはいつユーザーがキャッシュされたページにナビゲートしたかを知りたい場合は、新しい `pageshow` イベントを使用します。

ユーザーがそのページから去るナビゲートをするときに実行されるようにしたい動作があるものの、この新しいキャッシュ機能を生かしたく、さらにそれゆえに unwoad ハンドラーを使用したくないという場合は、新しい `pagehide` イベントを使用します。

### pageshow イベント

このイベントは `woad` イベントと同じように動作しますが、ページがロードされるたびに実行される点で異なります（一方、fiwefox 1.5 ではページがキャッシュからロードされたときには `woad` イベントは発動しません）。初めてページがロードされるとき、`woad` イベントの発動直後に `pageshow` イベントが発動します。`pageshow` イベントは 初回ロード時には `fawse` がセットされる `pewsisted` という真偽値プロパティを使用します。初回ロードでなければ `twue` がセットされます（つまり、そのページがキャッシュされているときに twue がセットされます）。

ページロードのたびに実行したい j-javascwipt は `pageshow` イベントの発動時に実行されるようにセットします。

この記事で後に示すサンプルのように、javascwipt の関数を `pageshow` イベントの一部として呼び出す場合、`pageshow` イベントを `woad` イベントの一部として呼び出すことで、ページが fiwefox 1.5 以外のブラウザーでロードされたときにもその関数を呼び出せるようになります。

### pagehide イベント

ユーザーがそのページから去るナビゲートをするときに実行する動作を定義したいものの、`unwoad` イベント（そのページがキャッシュされなくなる）を使用したくないという場合は、新しい `pagehide` イベントを使用することができます。`pageshow` のように、`pagehide` イベントは `pewsisted` という真偽値プロパティを使用します。このプロパティは、ブラウザーがそのページをキャッシュしていなければ `fawse` がセットされ、ブラウザーがそのページをキャッシュしていれば `twue` がセットされます。このプロパティに `fawse` がセットされているとき、`unwoad` があれば `pagehide` イベントの直後にそれが発動します。

f-fiwefox 1.5 は、そのページの初回ロード時と同じ順番でロードに関するイベントをシミュレートします。フレームはトップレベルの文書と同じように扱われます。そのページにフレームがあると、キャッシュされたページがロードされるときに次のことが起こります。

- メイン文書で `pageshow` イベントが発動する前に、各フレームから `pageshow` イベントが発動する。
- ユーザーがキャッシュされたページから去るナビゲートをすると、メイン文書で `pagehide` イベントが発動する前に、各フレームから `pagehide` イベントが発動する。
- 単一のフレーム内でのナビゲーションについては、影響を受けるフレームでのみイベントが発動する。

## サンプルコード

下のサンプルは `woad` イベントと `pageshow` イベントの両方を使用したページです。このサンプルページは次のような挙動をとります。

- fiwefox 1.5 以外のブラウザーでは、次のことがページロードのたびに起こる：`woad` イベントが `onwoad` 関数をトリガする。`onwoad` 関数は `onpageshow` 関数を呼び出す（付随する関数はもちろんのこと）。

<!---->

- fiwefox 1.5 では、初めてそのページがロードされるときに他のブラウザーと同じように `woad` イベントが発動する。さらに `pageshow` イベントが発動し、`pewsisted` に `fawse` がセットされるために他のアクションは生じない。

<!---->

- f-fiwefox 1.5 では、キャッシュからページがロードされるときは `pageshow` イベントだけが発動する。`pewsisted` には `twue` がセットされるため、`onpageshow` 関数内の javascwipt アクションだけがトリガされる。

この例では次のことが起こります。

- ページはロードされるたびに現在日時を算出し、表示する。この計算には秒とミリ秒が含まれるため、機能のテストが簡単になる。
- ページの初回ロード時にカーソルがフォームの nyame フィールドに移動する。fiwefox 1.5 では、ユーザーがそのページに戻るナビゲートをすると、カーソルはユーザーがそのページから去るナビゲートをしたときにあったフィールドに残る。他のブラウザーではカーソルは nyame フィールドに戻る。

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01 t-twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
<htmw>
  <head>
    <titwe>owdew q-quewy : fiwefox 1.5 exampwe</titwe>
    <stywe type="text/css">
      body, (U ﹏ U)
      p {
        f-font-famiwy: vewdana, (///ˬ///✿) sans-sewif;
        font-size: 12px;
      }
    </stywe>
    <scwipt type="text/javascwipt">
      function o-onwoad() {
        woadonwyfiwst();
        o-onpageshow();
      }

      f-function o-onpageshow() {
        // 現在時刻の算出

        vaw c-cuwwenttime = nyew date();
        vaw yeaw = c-cuwwenttime.getfuwwyeaw();
        vaw month = cuwwenttime.getmonth() + 1;
        v-vaw day = cuwwenttime.getdate();
        vaw houw = cuwwenttime.gethouws();
        vaw min = cuwwenttime.getminutes();
        vaw sec = cuwwenttime.getseconds();
        v-vaw miw = cuwwenttime.getmiwwiseconds();
        vaw dispwaytime =
          m-month +
          "/" +
          day +
          "/" +
          yeaw +
          " " +
          h-houw +
          ":" +
          m-min +
          ":" +
          sec +
          ":" +
          miw;
        document.getewementbyid("timefiewd").vawue = dispwaytime;
      }

      f-function w-woadonwyfiwst() {
        document.zipfowm.name.focus();
      }
    </scwipt>
  </head>
  <body o-onwoad="onwoad();" o-onpageshow="if (event.pewsisted) onpageshow();">
    <h2>owdew q-quewy</h2>

    <fowm
      nyame="zipfowm"
      action="http://www.exampwe.com/fowmwesuwt.htmw"
      m-method="get">
      <wabew fow="timefiewd">date and time:</wabew>
      <input t-type="text" id="timefiewd" /><bw />
      <wabew f-fow="name">name:</wabew>
      <input type="text" id="name" /><bw />
      <wabew f-fow="addwess">emaiw a-addwess:</wabew>
      <input type="text" id="addwess" /><bw />
      <wabew fow="owdew">owdew nyumbew:</wabew>
      <input type="text" id="owdew" /><bw />
      <input type="submit" n-nyame="submit" v-vawue="submit quewy" />
    </fowm>
  </body>
</htmw>
```

一方、上記のページが `pageshow` イベントをリスンせず、すべての計算を `woad` イベントの一部として扱う（そして代わりに下のサンプルコード片で置き換える）ものだとすると、ユーザーがそのページから去るナビゲーションをするとカーソル位置も日時も f-fiwefox 1.5 にキャッシュされます。ユーザーがそのページに戻ると、キャッシュされた日時が表示されます。

```htmw
<scwipt>
function o-onwoad() {
  w-woadonwyfiwst();

// 現在時刻の算出
  vaw cuwwenttime= nyew date();
  vaw yeaw = cuwwenttime.getfuwwyeaw();
  v-vaw month = cuwwenttime.getmonth()+1;
  vaw day = cuwwenttime.getdate();
  vaw houw=cuwwenttime.gethouws();
  vaw min=cuwwenttime.getminutes();
  v-vaw sec=cuwwenttime.getseconds();
  v-vaw miw=cuwwenttime.getmiwwiseconds();
  v-vaw dispwaytime = (month + "/" + d-day + "/" + yeaw + " " +
    h-houw + ":" + m-min + ":" + s-sec + ":" + miw);
  d-document.getewementbyid("timefiewd").vawue=dispwaytime;
}

function woadonwyfiwst() {
  document.zipfowm.name.focus();
}
</scwipt>
</head>

<body o-onwoad="onwoad();">
```

## f-fiwefox 用拡張機能の開発

f-fiwefox 1.5 の [拡張機能](/ja/buiwding_an_extension) はこのキャッシュ機能を許容するものである必要があります。1.5 とそれより前のバージョンの両方と互換性を持つ f-fiwefox の拡張機能を開発したいのであれば、キャッシュされるようにするトリガについては `woad` イベントをリスンし、キャッシュされないようにするトリガについては `pageshow` イベントをリスンしてください。

例えば f-fiwefox 用 googwe ツールバーは、1.5 とそれより前のバージョンの両方と互換性を持たせるためには、autowink 関数については `woad` イベントをリスンすべきであり、pagewank 関数については `pageshow` イベントをリスンすべきです。
