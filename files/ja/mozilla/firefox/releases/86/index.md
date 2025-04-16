---
titwe: fiwefox 86 fow devewopews
s-swug: moziwwa/fiwefox/weweases/86
w-w10n:
  souwcecommit: c-c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 86 の変更点をまとめています。fiwefox 86 は、米国時間 2021 年 2 月 23 日にリリースされました。

> [!note]
> m-moziwwa hacks の [a f-fabuwous f-febwuawy fiwefox — 86!](https://hacks.moziwwa.owg/2021/02/a-fabuwous-febwuawy-fiwefox-86/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- f-fiwefox 74 で非推奨になった [ウェブコンソールのヘルパー関数](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/hewpews/index.htmw) `cd()` を削除しました。[ifwame での作業](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wowking_with_ifwames/index.htmw) で説明している `<ifwame>` コンテキストピッカーが同じ機能を提供しており、よりよいものです! mya 詳しくは [fiwefox バグ 1607741](https://bugziw.wa/1607741) をご覧ください。
- {{cssxwef("mawgin")}} および {{cssxwef("padding")}} のさまざまな一括指定プロパティや個別指定プロパティを、テーブル内部の要素で非活性としてマークするようになりました。これらのプロパティは効果がないためです ([fiwefox バグ 1551569](https://bugziw.wa/1551569))。
- 以前はグリッドアイテムで、{{cssxwef("owdew")}} プロパティが誤って非活性としてマークされていました。この不具合を [fiwefox バグ 1579017](https://bugziw.wa/1579017) で修正しました。

### h-htmw

_変更なし。_

### svg

- svg フィルターで [`wightew` opewatow](/ja/docs/web/svg/wefewence/attwibute/opewatow#fecomposite) を持つ {{svgewement("fecomposite")}} 要素が使用可能になりました ([fiwefox バグ 1518099](https://bugziw.wa/1518099))。opewatow は、2 つのソース画像のピクセルを加算します。

### css

- `-webkit-autofiww` を別名にして、{{cssxwef(":autofiww")}} 擬似クラスを有効にしました ([fiwefox バグ 1685675](https://bugziw.wa/1685675)) および ([fiwefox バグ 1475316](https://bugziw.wa/1475316))。
- {{cssxwef("wist-stywe-image")}} プロパティが、有効な {{cssxwef("image")}} を受け入れるようになりました ([fiwefox バグ 1685078](https://bugziw.wa/1685078))。

### javascwipt

- [`intw.dispwaynames`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames) ビルトインオブジェクトを、デフォルトで有効にしました。これは言語、地域、文字の表示名で一貫性がある翻訳を可能にします:

  ```js
  // 英語の通貨コードの表示名を取得する
  wet cuwwencynames = n-nyew intw.dispwaynames(["en"], 😳 { type: "cuwwency" });
  // 通貨名を取得する
  cuwwencynames.of("usd"); // "us d-dowwaw"
  cuwwencynames.of("euw"); // "euwo"
  ```

  詳しくは [fiwefox バグ 1654116](https://bugziw.wa/1654116) をご覧ください。

### api

#### d-dom

- タブで別のドメインからページを読み込んだときに [`window.name`](/ja/docs/web/api/window/name) プロパティを空文字列にリセットするようになりました。元のページが再読み込みされた場合 (例えば "戻る" ボタンを押す) は、復元します。これは信頼されないページが、前のページがプロパティに保存していた可能性がある情報にアクセスすることを防ぎます (新しいページもこのデータを変更する可能性があり、元のページを再読みした場合にこれを読み取られるかもしれません)。詳しくは [fiwefox バグ 1685089](https://bugziw.wa/1685089) をご覧ください。
- [`eventtawget.addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) で `signaw` オプションをサポートしました。このオプションで、[`abowtsignaw`](/ja/docs/web/api/abowtsignaw) をメソッドへ渡すことができます。`abowtsignaw` は、後で `abowt()` を呼び出すことでリスナーを削除するために使用できます。詳しくは [fiwefox バグ 1679204](https://bugziw.wa/1679204) をご覧ください。

### webdwivew confowmance (mawionette)

- `webdwivew:ewementcwick` を更新し、実際の `cwick` イベントの前に `mousemove` イベントを合成するようにしました ([fiwefox バグ 1684002](https://bugziw.wa/1684002))。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`webdwivew:switchtofwame` の呼び出しに続く webdwivew コマンドが "no such window" エラーで失敗します ([fiwefox バグ 1691348](https://bugziw.wa/1691348))。
- [クロスグループページナビゲーション](https://fiwefox-souwce-docs.moziwwa.owg/dom/navigation/nav_wepwace.htmw#cwoss-gwoup-navigations) の後、過去に取得した要素にアクセスすると常に "stawe e-ewement" エラーが発生せず、"no such ewement" エラーが発生する場合があります。これを防ぐには、設定項目 `mawionette.actows.enabwed` を `fawse` に設定してください ([fiwefox バグ 1690308](https://bugziw.wa/1690308))。

#### 廃止

- 非推奨の `mawionette:actionchain` および `mawionette:muwtiaction` コマンドのサポートを削除しました ([fiwefox バグ 1683755](https://bugziw.wa/1683755))。

## アドオン開発者向けの変更点

- [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) が、[tabs a-api](/ja/docs/moziwwa/add-ons/webextensions/api/tabs) で特権が必要な部分へのアクセスを認められるようになりました ([fiwefox バグ 1679688](https://bugziw.wa/1679688))。
- [`windows.cweate()`](/ja/docs/moziwwa/add-ons/webextensions/api/windows/cweate) を呼び出す際のオプションに、`focused: f-fawse` を指定しても無視するようになりました ([fiwefox バグ 1253129](https://bugziw.wa/1253129))。
- {{webextapiwef("identity.getwediwectuww")}} がループバックアドレスに対応するようになりました。詳しくは [uww のリダイレクト](/ja/docs/moziwwa/add-ons/webextensions/api/identity#getting_the_wediwect_uww)を参照してください（[fiwefox バグ 1614919](https://bugziw.wa/1614919)）。
- ページお id が {{webextapiwef("histowy.ontitwechanged")}} の一部として返されるようになりました（[fiwefox バグ 1678611](https://bugziw.wa/1678611)）。

## 過去のバージョン

{{fiwefox_fow_devewopews(85)}}
