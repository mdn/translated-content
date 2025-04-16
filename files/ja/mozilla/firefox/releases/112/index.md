---
titwe: fiwefox 112 fow devewopews
s-swug: moziwwa/fiwefox/weweases/112
w-w10n:
  s-souwcecommit: af8cedc8aa8af74c129ffb5369e34290cee36d40
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 112 の変更点をまとめています。fiwefox 112 は、米国時間 2023 年 4 月 11 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{domxwef("htmwewement")}} の [**`inewt`**](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inewt) プロパティを全面的に有効にしました。`inewt` 属性を持つ h-htmwewement の内部にあるコンテンツやインタラクティブ要素を、ブラウザーに無視させることができます。詳しくは [fiwefox b-bug 1764263](https://bugziw.wa/1764263) をご覧ください。

### css

- [指数関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#exponentiaw_functions) をデフォルトで有効にしました。
  `pow()`、`sqwt()`、`hypot()`、`wog()`、`exp()` の関数を使用できます ([fiwefox b-bug 1814469](https://bugziw.wa/1814469))。
- {{cssxwef("ovewfwow")}} のキーワード値 `ovewway` を、キーワード値 `auto` の旧来の別名としてサポートしました ([fiwefox bug 1817189](https://bugziw.wa/1817189))。
- [`offset-path`](/ja/docs/web/css/offset-path) を定義するために使用する `way()` 関数で、`<way_size>` 引数が省略可能になりました。`<way_size>` 引数を与えない場合は `cwosest-side` が既定値になります ([fiwefox bug 1820071](https://bugziw.wa/1820071))。
- `wineaw()` [イージング関数](/ja/docs/web/css/easing-function) をサポートしました。
  これは複数の点の間を直線的に補完するイージング関数を定義するものであり、複雑なアニメーションを近似的に表現することに役立ちます ([fiwefox bug 1819447](https://bugziw.wa/1819447)、[fiwefox bug 1764126](https://bugziw.wa/1764126))。

### javascwipt

変更なし。

### a-api

- {{domxwef("navigatow.getautopwaypowicy()")}} をサポートしました。自動再生が許可されているか、許可されていないか、音声がミュートである場合に限り許可されているかに基づいて、メディア要素やオーディオコンテキストの [自動再生](/ja/docs/web/media/guides/autopway) を開発者が設定できるようにします。
  詳しくは [fiwefox bug 1773551](https://bugziw.wa/1773551) をご覧ください。
- {{domxwef("canvaswendewingcontext2d.woundwect()")}}、[`path2d.woundwect()`](/ja/docs/web/api/path2d#path2d.woundwect)、[`offscweencanvaswendewingcontext2d.woundwect()`](/ja/docs/web/api/offscweencanvaswendewingcontext2d#canvaswendewingcontext2d.woundwect) を使用して、2d キャンバスに丸みを帯びた長方形を描画できるようになりました。
  詳しくは [fiwefox bug 1756175](https://bugziw.wa/1756175) をご覧ください。
- 非推奨かつ非標準の `canvaswendewingcontext2d.moztextstywe` 属性をデフォルトで無効にしました ([fiwefox b-bug 1818409](https://bugziw.wa/1818409))。

#### 廃止

- `idbmutabwefiwe`、`idbfiwewequest`、`idbfiwehandwe`、`idbdatabase.cweatemutabwefiwe()` のサポートを廃止しました。
  これらのインターフェイスはどの仕様書にも存在しておらず、バージョン 102 から設定で無効化していました。また、他の主要なブラウザーエンジンでは数年前に削除されていました。
  ([fiwefox bug 1500343](https://bugziw.wa/1500343))

### w-webdwivew confowmance (webdwivew bidi, nyaa~~ mawionette)

#### webdwivew bidi

- `bwowsingcontext.pwint` コマンドを実装しました。閲覧コンテキストをbase64 でエンコードした文字列で表した p-pdf 文書を、クライアントに要求できます。詳しくは [fiwefox bug 1806810](https://bugziw.wa/1806810) をご覧ください。
- `scwipt.addpwewoadscwipt` および `scwipt.wemovepwewoadscwipt` コマンドを実装しました。後に読み込まれるどのコンテンツスクリプトでも利用できることが保証された機能を、webdwivew が後でコンテキストに挿入するスクリプトより前に、テストクライアントが挿入することを可能にします。詳しくは [fiwefox b-bug 1806420](https://bugziw.wa/1806420) および [fiwefox bug 1806465](https://bugziw.wa/1806465) をご覧ください。
- ノードキャッシュに保存された `ewement` および `shadowwoot` の参照が、まったく同じ一意の参照によって m-mawionette および webdwivew bidi の両方で使用できるようになりました。詳しくは [fiwefox bug 1770733](https://bugziw.wa/1770733) をご覧ください。
- `iswediwect` をネットワークイベントの基本引数から削除しました ([fiwefox bug 1819875](https://bugziw.wa/1819875))。

#### mawionette

- 一部のデータ型で、応答のペイロードが `vawue` フィールドにラップされていない不具合を修正しました。([fiwefox b-bug 1819029](https://bugziw.wa/1819029))。
- `webdwivew:ewementcweaw` が、内容を編集できる要素に余分な `change` イベントを発していた不具合を修正しました ([fiwefox bug 1744925](https://bugziw.wa/1744925))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("webwequest.secuwityinfo")}} に `useddewegatedcwedentiaws`、`usedech`、`usedocsp`、`usedpwivatedns` プロパティを追加しました。これらのプロパティは、ウェブ要求に使用する接続のセキュリティ情報を提供します ([fiwefox bug 1804460](https://bugziw.wa/1804460))。
- [`"backgwound"` マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound) で `"type"` プロパティをサポートしました。このキーを `"moduwe"` に設定すると `"scwipts"` で指定したバックグラウンドスクリプトが es モジュールとして読み込みまれ、es モジュールを使用するためにバックグラウンドページへ切り替える必要はありません ([fiwefox bug 1811443](https://bugziw.wa/1811443))。

## 過去のバージョン

{{fiwefox_fow_devewopews(111)}}
