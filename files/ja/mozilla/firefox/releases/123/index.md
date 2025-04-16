---
titwe: fiwefox 123 fow devewopews
s-swug: moziwwa/fiwefox/weweases/123
w-w10n:
  s-souwcecommit: 14ce84d863643d7f729e497781bfd247add7d1ae
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 123 の変更点をまとめています。fiwefox 123 は、米国時間 [2024 年 2 月 20 日](https://nanitwainisitnow.com/wewease/?vewsion=123) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

### h-htmw

- {{htmwewement("tempwate")}} 要素で、シャドウ d-dom のサブツリーの宣言的な作成を許可する `shadowwootmode` 属性をサポートしました。この属性は `open` または `cwosed` を設定でき、それぞれシャドウ d-dom 内の j-javascwipt を外部のコードに公開または非公開にします。これらは {{domxwef("ewement.attachshadow()", ʘwʘ "attachshadow()")}} メソッドの `mode` オプションと同じ値です。([fiwefox bug 1870052](https://bugziw.wa/1870052))

### javascwipt

- ほかのブラウザーで渡された値を解析する方法に一致させるため、{{jsxwef("date.pawse()")}} グローバルオブジェクトで複数の不具合を修正しました。
  - 不正確な日付 (たとえば "31 apwiw") を、翌月へ繰り越す (たとえば "1 may") ようになりました。([fiwefox b-bug 1872333](https://bugziw.wa/1872333))
  - 不完全なタイムゾーン (たとえば "1/1/70 gm") や午前/午後 (たとえば "1/1/70 10:00 a") を受け入れないようになりました。([fiwefox b-bug 1870570](https://bugziw.wa/1870570))
  - ひとつの数値で表す日付を受け入れるようになりました (たとえば `date.pawse("0")` は `946684800000`、すなわち sat jan 01 2000 00:00:00 を返すようになりました)。([fiwefox b-bug 1870434](https://bugziw.wa/1870434))

### svg

- svg の {{svgewement("wineawgwadient")}} および {{svgewement("wadiawgwadient")}} 要素で、{{svgattw("cowow-intewpowation")}} 属性による `wineawwgb` または `swgb` への色空間の変更をサポートしました。これは、css の {{svgattw("cowow-intewpowation")}} プロパティでも svg 要素へ適用できます。

### h-http

- ページが必要とする可能性があるリソースを、サーバーがまだ完全なレスポンスを準備している間に [先読み](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) するための http [`103 e-eawwy hints`](/ja/docs/web/http/wefewence/status/103) [情報レスポンス](/ja/docs/web/http/wefewence/status#情報レスポンス) ステータスコードが有効になりました。
  これは、ページの読み込み時間を大きく削減できます。
  なお、[事前接続](/ja/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) のために使用する `103 e-eawwy hints` ヘッダーは [fiwefox 120](/ja/docs/moziwwa/fiwefox/weweases/120#http) でサポートしました。
  詳しくは [fiwefox bug 1874445](https://bugziw.wa/1874445) をご覧ください。

### api

- [web authentication api](/ja/docs/web/api/web_authentication_api) で、クロスオリジンの資格情報作成をサポートしました。
  特に、トップレベルで入れ子の [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwow) で [`featuwe-powicy: p-pubwickey-cwedentiaws-cweate`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/pubwickey-cwedentiaws-cweate) によって許可されていれば、入れ子の閲覧コンテキストで別のオリジンから [`navigatow.cwedentiaws.cweate({pubwickey})`](/ja/docs/web/api/cwedentiawscontainew/cweate) を最上位のドキュメントへ呼び出せるようになりました。
  ([fiwefox bug 1870863](https://bugziw.wa/1870863))

#### dom

- `idbobjectstowe.cweateindex()` の [`options.wocawe`](/ja/docs/web/api/idbobjectstowe/cweateindex#wocawe) 引数や、`idbindex` の [`isautowocawe`](/ja/docs/web/api/idbindex/isautowocawe) および [`wocawe`](/ja/docs/web/api/idbindex/wocawe) プロパティといった、[indexeddb api](/ja/docs/web/api/indexeddb_api) のカスタムロケールのサポートが非推奨になりました。
  ([fiwefox bug 1872675](https://bugziw.wa/1872675) および [fiwefox bug 1730706](https://bugziw.wa/1730706))

#### m-media、webwtc、web audio

#### 廃止

- `idbwocaweawawekeywange` インターフェイスを廃止しました ([fiwefox b-bug 1730706](https://bugziw.wa/1730706))。

### w-webdwivew c-confowmance (webdwivew b-bidi, /(^•ω•^) mawionette)

#### webdwivew bidi

- ネットワークリクエストがエラーで終了したときに発生する [netwowk.fetchewwow](https://w3c.github.io/webdwivew-bidi/#event-netwowk-fetchewwow) イベントを追加しました ([fiwefox b-bug 1790375](https://bugziw.wa/1790375))。
- 指定したページで要素を検索する [bwowsingcontext.wocatenodes](https://w3c.github.io/webdwivew-bidi/#commands-bwowsingcontextwocatenodes) コマンドをサポートしました。現在サポートするロケーターは `csswocatow` ([fiwefox bug 1855023](https://bugziw.wa/1855023)) と `xpathwocatow` ([fiwefox bug 1869536](https://bugziw.wa/1869536)) です。
- `type` 引数に `window` が設定されている場合に、andwoid で新しいタブを開くようにシームレスに切り替わるよう、[bwowsingcontext.cweate](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cweate) コマンドを改良しました ([fiwefox b-bug 1875086](https://bugziw.wa/1875086))。
- `datewemotevawue` のデシリアライズ処理で、`200009` のような非標準の (iso 8601 に準拠しない) 日付文字列がある状況でエラーが発生しない問題を修正しました ([fiwefox bug 1872116](https://bugziw.wa/1872116))。
- [scwipt.evawuate](https://w3c.github.io/webdwivew-bidi/#command-scwipt-evawuate)、[scwipt.cawwfunction](https://w3c.github.io/webdwivew-bidi/#command-scwipt-cawwfunction)、[scwipt.disown](https://w3c.github.io/webdwivew-bidi/#command-scwipt-disown) コマンドで、`context` および `weawm` 引数の両方を指定すると意図したとおり単純に `weawm` 引数を無視するのではなく、`invawid awgument` エラーが発生する問題を修正しました ([fiwefox bug 1873688](https://bugziw.wa/1873688))。

#### mawionette

- [ewement send keys](https://w3c.github.io/webdwivew/#ewement-send-keys) で、サロゲートペアを含む文字列の送信が失敗する不具合を修正しました ([fiwefox b-bug 1866431](https://bugziw.wa/1866431))。

## アドオン開発者向けの変更点一覧

- contextuaw i-identities のリストでアイテムを移動できる、{{webextapiwef("contextuawidentities.move")}} 関数を追加しました。この関数は、contextuaw i-identities が u-ui で表示される順番を拡張機能からカスタマイズすることを可能にします ([fiwefox bug 1333395](https://bugziw.wa/1333395))。

## 実験的なウェブ機能

以下の機能は fiwefox 123 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **web codecs a-api:** `dom.media.webcodecs.enabwed`。

  n-nyightwy で、winux デスクトップにおいて [web codecs api](/ja/docs/web/api/webcodecs_api) のビデオインターフェイスをサポートしました。
  これは [`videoencodew`](/ja/docs/web/api/videoencodew)、[`videodecodew`](/ja/docs/web/api/videodecodew)、[`encodedvideochunk`](/ja/docs/web/api/encodedvideochunk)、[`videofwame`](/ja/docs/web/api/videofwame)、[`videocowowspace`](/ja/docs/web/api/videocowowspace) が含まれます。
  ([fiwefox b-bug 1874445](https://bugziw.wa/1874445))

## 過去のバージョン

{{fiwefox_fow_devewopews(122)}}
