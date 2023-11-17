---
title: Using Firefox 1.5 caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
---

{{FirefoxSidebar}}

## はじめに

[Firefox 1.5](/ja/Firefox_1.5_for_developers) ではウェブページ全体をその JavaScript の状態も含めてメモリ内にキャッシュし、1 つのブラウザセッションとして使用します。訪問したページ間の戻る、進むという動作にページのロードが不要になり、JavaScript の状態も保存されます。この機能によってページナビゲーションが非常に高速化します。この機能は **bfcache**（"Back-Forward Cache" のこと）と呼ばれることもあります。このキャッシュ状態はユーザがブラウザを閉じるまで保存されます。

Firefox がページをキャッシュしない場合があります。ページがキャッシュされないプログラム的な理由でよくあるものをいくつか以下に示します。

- ページが `unload` ハンドラを使用している
- ページが "cache-control: no-store" をセットしている
- ページが "cache-control: no-cache" をセットしていて、サイトが HTTPS である
- ページが完全にはロードされないまま、ユーザがそのページから去るナビゲートをする
- トップレベルのページにキャッシュ不可能なフレームがある
- ページがフレーム内にあり、ユーザがそのフレーム内に新しいページをロードする（この場合、ユーザがそのページから去るナビゲートをするとそのフレームに最後にロードされたコンテンツがキャッシュされる）

この新しいキャッシュ機能により、ページロードの挙動が変わります。ウェブ作者は次のことをしたいと思うことがあるでしょう。

- ナビゲートされたことがあるページであることを知ること（そのページがユーザのキャッシュからロードされるとき）
- ユーザがそのページを去るときのページの挙動を定義すること（ページがキャッシュされるようになっている間）

ブラウザの 2 つの新しいイベントによってウェブ作者はそのどちらもできるようになります。

## ブラウザの新しいイベント

これらの新しいイベントを使用すると、そのページは他のブラウザでは今までどおりにきちんと表示され（過去の Firefox、Internet Explorer、Opera、Safari でテスト済み）、Firefox 1.5 でロードしたときにこの新しいキャッシュ機能が使用されるようになります。

ウェブページの標準的な挙動は次のとおりです。

1. ユーザがページにナビゲートする。
2. ページロード時にインラインスクリプトが実行される。
3. ページがロードされると `onload` ハンドラが実行される。

4 ステップ目があるページもあります。ページが `unload` ハンドラを使用していると、ユーザがそのページから去るナビゲートをするときにそれが実行されます。`unload` ハンドラが存在しているとそのページはキャッシュされません。

ユーザがキャッシュされたページにナビゲートしたとき、インラインスクリプトと `onload` ハンドラは実行されません（ステップ 2 および 3）。ほとんどの場合、これらのスクリプトの効果が保存されているためです。

そのページにユーザがナビゲートするたびにロード中に実行されるようにしたいスクリプトや他の動作がそのページに含まれている場合、あるいはいつユーザがキャッシュされたページにナビゲートしたかを知りたい場合は、新しい `pageshow` イベントを使用します。

ユーザがそのページから去るナビゲートをするときに実行されるようにしたい動作があるものの、この新しいキャッシュ機能を生かしたく、さらにそれゆえに unload ハンドラを使用したくないという場合は、新しい `pagehide` イベントを使用します。

### pageshow イベント

このイベントは `load` イベントと同じように動作しますが、ページがロードされるたびに実行される点で異なります（一方、Firefox 1.5 ではページがキャッシュからロードされたときには `load` イベントは発動しません）。初めてページがロードされるとき、`load` イベントの発動直後に `pageshow` イベントが発動します。`pageshow` イベントは 初回ロード時には `false` がセットされる `persisted` という真偽値プロパティを使用します。初回ロードでなければ `true` がセットされます（つまり、そのページがキャッシュされているときに true がセットされます）。

ページロードのたびに実行したい JavaScript は `pageshow` イベントの発動時に実行されるようにセットします。

この記事で後に示すサンプルのように、JavaScript の関数を `pageshow` イベントの一部として呼び出す場合、`pageshow` イベントを `load` イベントの一部として呼び出すことで、ページが Firefox 1.5 以外のブラウザでロードされたときにもその関数を呼び出せるようになります。

### pagehide イベント

ユーザがそのページから去るナビゲートをするときに実行する動作を定義したいものの、`unload` イベント（そのページがキャッシュされなくなる）を使用したくないという場合は、新しい `pagehide` イベントを使用することができます。`pageshow` のように、`pagehide` イベントは `persisted` という真偽値プロパティを使用します。このプロパティは、ブラウザがそのページをキャッシュしていなければ `false` がセットされ、ブラウザがそのページをキャッシュしていれば `true` がセットされます。このプロパティに `false` がセットされているとき、`unload` があれば `pagehide` イベントの直後にそれが発動します。

Firefox 1.5 は、そのページの初回ロード時と同じ順番でロードに関するイベントをシミュレートします。フレームはトップレベルの文書と同じように扱われます。そのページにフレームがあると、キャッシュされたページがロードされるときに次のことが起こります。

- メイン文書で `pageshow` イベントが発動する前に、各フレームから `pageshow` イベントが発動する。
- ユーザがキャッシュされたページから去るナビゲートをすると、メイン文書で `pagehide` イベントが発動する前に、各フレームから `pagehide` イベントが発動する。
- 単一のフレーム内でのナビゲーションについては、影響を受けるフレームでのみイベントが発動する。

## サンプルコード

下のサンプルは `load` イベントと `pageshow` イベントの両方を使用したページです。このサンプルページは次のような挙動をとります。

- Firefox 1.5 以外のブラウザでは、次のことがページロードのたびに起こる：`load` イベントが `onLoad` 関数をトリガする。`onLoad` 関数は `onPageShow` 関数を呼び出す（付随する関数はもちろんのこと）。

<!---->

- Firefox 1.5 では、初めてそのページがロードされるときに他のブラウザと同じように `load` イベントが発動する。さらに `pageshow` イベントが発動し、`persisted` に `false` がセットされるために他のアクションは生じない。

<!---->

- Firefox 1.5 では、キャッシュからページがロードされるときは `pageshow` イベントだけが発動する。`persisted` には `true` がセットされるため、`onPageShow` 関数内の JavaScript アクションだけがトリガされる。

この例では次のことが起こります。

- ページはロードされるたびに現在日時を算出し、表示する。この計算には秒とミリ秒が含まれるため、機能のテストが簡単になる。
- ページの初回ロード時にカーソルがフォームの Name フィールドに移動する。Firefox 1.5 では、ユーザがそのページに戻るナビゲートをすると、カーソルはユーザがそのページから去るナビゲートをしたときにあったフィールドに残る。他のブラウザではカーソルは Name フィールドに戻る。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query : Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: Verdana, sans-serif;
        font-size: 12px;
      }
    </style>
    <script type="text/javascript">
      function onLoad() {
        loadOnlyFirst();
        onPageShow();
      }

      function onPageShow() {
        // 現在時刻の算出

        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var mil = currentTime.getMilliseconds();
        var displayTime =
          month +
          "/" +
          day +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec +
          ":" +
          mil;
        document.getElementById("timefield").value = displayTime;
      }

      function loadOnlyFirst() {
        document.zipForm.name.focus();
      }
    </script>
  </head>
  <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form
      name="zipForm"
      action="http://www.example.com/formresult.html"
      method="get">
      <label for="timefield">Date and time:</label>
      <input type="text" id="timefield" /><br />
      <label for="name">Name:</label>
      <input type="text" id="name" /><br />
      <label for="address">Email address:</label>
      <input type="text" id="address" /><br />
      <label for="order">Order number:</label>
      <input type="text" id="order" /><br />
      <input type="submit" name="submit" value="Submit Query" />
    </form>
  </body>
</html>
```

一方、上記のページが `pageshow` イベントをリスンせず、すべての計算を `load` イベントの一部として扱う（そして代わりに下のサンプルコード片で置き換える）ものだとすると、ユーザがそのページから去るナビゲーションをするとカーソル位置も日時も Firefox 1.5 にキャッシュされます。ユーザがそのページに戻ると、キャッシュされた日時が表示されます。

```html
<script>
function onLoad() {
  loadOnlyFirst();

// 現在時刻の算出
  var currentTime= new Date();
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var hour=currentTime.getHours();
  var min=currentTime.getMinutes();
  var sec=currentTime.getSeconds();
  var mil=currentTime.getMilliseconds();
  var displayTime = (month + "/" + day + "/" + year + " " +
    hour + ":" + min + ":" + sec + ":" + mil);
  document.getElementById("timefield").value=displayTime;
}

function loadOnlyFirst() {
  document.zipForm.name.focus();
}
</script>
</head>

<body onload="onLoad();">
```

## Firefox 用拡張機能の開発

Firefox 1.5 の [拡張機能](/ja/Building_an_Extension) はこのキャッシュ機能を許容するものである必要があります。1.5 とそれより前のバージョンの両方と互換性を持つ Firefox の拡張機能を開発したいのであれば、キャッシュされるようにするトリガについては `load` イベントをリスンし、キャッシュされないようにするトリガについては `pageshow` イベントをリスンしてください。

例えば Firefox 用 Google ツールバーは、1.5 とそれより前のバージョンの両方と互換性を持たせるためには、autolink 関数については `load` イベントをリスンすべきであり、PageRank 関数については `pageshow` イベントをリスンすべきです。
