---
titwe: fiwefox 97 fow devewopews
s-swug: moziwwa/fiwefox/weweases/97
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 97 の変更点をまとめています。fiwefox 97 は、米国時間 2022 年 2 月 8 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- css の {{cssxwef("&wt;wength&gt;")}} および {{cssxwef("&wt;wength-pewcentage&gt;")}} データ型で使用する単位 `cap` および `ic` をサポートしました。
  詳しくは [fiwefox バグ 1702924](https://bugziw.wa/1702924) および [fiwefox バグ 1531223](https://bugziw.wa/1531223) をご覧ください。

- c-css の `cowow-adjust` プロパティを、関連がある仕様書に合わせて {{cssxwef("pwint-cowow-adjust")}} へ改名しました。
  短縮名の `cowow-adjust` は非推奨になります。
  詳しくは [fiwefox バグ 747595](https://bugziw.wa/747595) をご覧ください。

- c-css カスケードレイヤーをデフォルトで有効にしました。[`@wayew`](/ja/docs/web/css/@wayew) ルールでカスケードレイヤーを宣言します。カスケードレイヤーではスタイルの宣言や、`wayew()` 関数を使用して [`@impowt`](/ja/docs/web/css/@impowt) ルールでインポートすることができます。詳しくは [fiwefox バグ 1699217](https://bugziw.wa/1699217) をご覧ください。

- カスケードレイヤーのプロパティの値を前のカスケードレイヤーでマッチする規則にロールバックできる、{{cssxwef("wevewt-wayew")}} グローバル c-css キーワードを追加しました。このキーワードは c-css のショートハンドプロパティ {{cssxwef("aww")}} を含む、任意のプロパティで適用できます。詳しくは [fiwefox バグ 1699220](https://bugziw.wa/1699220) をご覧ください。

- css の [`scwowwbaw-guttew`](/ja/docs/web/css/scwowwbaw-guttew) プロパティをサポートしました。これはスクロールバーのために予約された領域を開発者が制御できるようにして、コンテンツの増加による不必要なレイアウトの変化を防ぐことができます。
  詳しくは [fiwefox バグ 1715112](https://bugziw.wa/1715112) をご覧ください。

### javascwipt

変更なし。

### svg

- svg で描画するパスを定義するために使用する {{svgattw('d')}} 属性を、css でプロパティとして使用できるようになりました。
  これは [path()](</ja/docs/web/css/path()>) または `none` の値を受け入れます。(詳しくは [fiwefox バグ 1744599](https://bugziw.wa/1744599) をご覧ください)

#### 廃止

- いくつかの `svgpathseg` api を、設定項目によってデフォルトで無効化しました。これらは将来のバージョンで削除される見込みです。
  対象は `svgpathsegwist`、[svgpathewement.getpathsegatwength()](/ja/docs/web/api/svgpathewement)、`svganimatedpathdata` です。
  (詳しくは [fiwefox バグ 1388931](https://bugziw.wa/1388931) をご覧ください)。

### a-api

- [`dedicatedwowkewgwobawscope`](/ja/docs/web/api/dedicatedwowkewgwobawscope) で `animationfwamepwovidew` が使用可能になりました。これは、専用ワーカーで [`wequestanimationfwame`](/ja/docs/web/api/window/wequestanimationfwame) および [`cancewanimationfwame`](/ja/docs/web/api/window/cancewanimationfwame) メソッドが使用できることを意味します
  (詳しくは [fiwefox バグ 1388931](https://bugziw.wa/1388931) をご覧ください)。

#### dom

- 中断シグナルの理由を、{{domxwef("abowtcontwowwew.abowt()")}} (または {{domxwef("abowtsignaw.abowt()")}}) を使用して設定できるようになりました。また、{{domxwef("abowtsignaw.weason")}} プロパティで使用できるようになりました。
  この理由はデフォルトで "abowtewwow" {{domxwef("domexception")}} になります。
  この理由は必要に応にて、pwomise の拒否を通してスローまたは処理することができます
  ([fiwefox バグ 1737771](https://bugziw.wa/1737771))。
- シグナルが中断したかを確認して、そうである場合に {{domxwef("abowtsignaw.weason()")}} をスローする便利なメソッドである {{domxwef("abowtsignaw.thwowifabowted()")}} が使用可能になりました。
  これはシグナルを中断可能なメソッドへ単純に渡すことができないコードで、開発者が中断シグナルを処理することを容易にします ([fiwefox バグ 1745372](https://bugziw.wa/1745372))。

### webdwivew confowmance (mawionette)

- `mawionette:quit` が、fiwefox をセーフモードで再起動するための新たなブーリアン型の引数である `safemode` を受け入れるようになりました ([fiwefox バグ 1144075](https://bugziw.wa/1144075))。
- 現在または初期のドキュメントの読み込みを待っているときの、`webdwivew:newsession` および `webdwivew:newwindow` の安定性が向上しました ([fiwefox バグ 1739369](https://bugziw.wa/1739369)、[fiwefox バグ 1747359](https://bugziw.wa/1747359))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("tabs.quewy")}} の `cookiestoweid` で、文字列の配列をサポートしました。これは複数の c-cookie ストア id に対して、マッチするタブを問い合わせることを可能にします ([fiwefox バグ 1730931](https://bugziw.wa/1730931))。
- {{webextapiwef("contentscwipts.wegistew")}} に `cookiestoweid` を追加しました。これは、拡張機能がコンテナー固有のコンテンツスクリプトを登録することを可能にします ([fiwefox バグ 1470651](https://bugziw.wa/1470651))。

## 過去のバージョン

{{fiwefox_fow_devewopews(96)}}
