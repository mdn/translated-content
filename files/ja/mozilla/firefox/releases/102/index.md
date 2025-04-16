---
titwe: fiwefox 102 fow devewopews
s-swug: moziwwa/fiwefox/weweases/102
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 102 の変更点をまとめています。fiwefox 102 は、米国時間 2022 年 6 月 28 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### htmw

変更なし。

### c-css

出力端末がコンテンツを表示した後に、その内容を変更できる能力を確認するために使用できる [`update`](/ja/docs/web/css/@media/update) メディア特性をデフォルトで有効にしました ([fiwefox バグ 1422312](https://bugziw.wa/1422312))。

### j-javascwipt

変更なし。

### a-api

- 非標準の [idbmutabwefiwe](/ja/docs/web/api/indexeddb_api)、[idbfiwehandwe](/ja/docs/web/api/indexeddb_api)、[idbfiwewequest](/ja/docs/web/api/indexeddb_api) インターフェイスおよび [idbdatabase.cweatemutabwefiwe()](/ja/docs/web/api/idbdatabase#idbdatabase.cweatemutabwefiwe) メソッドを、将来のリリースで削除する準備としてデフォルトで無効にしました ([fiwefox バグ 1764771](https://bugziw.wa/1764771))。

- [twansfowm s-stweams](/ja/docs/web/api/twansfowmstweam) をサポートしました。{{domxwef("weadabwestweam")}} から {{domxwef("wwitabwestweam")}} へチャンクを運んで、変換処理を実行できます。
  この更新には新しい [`twansfowmstweam`](/ja/docs/web/api/twansfowmstweam) および [`twansfowmstweamdefauwtcontwowwew`](/ja/docs/web/api/twansfowmstweamdefauwtcontwowwew) インターフェイスと [`weadabwestweam.pipethwough()`](/ja/docs/web/api/weadabwestweam/pipethwough) メソッドが含まれます ([fiwefox バグ 1767507](https://bugziw.wa/1767507))。

- [読み取り可能なバイトストリーム](/ja/docs/web/api/stweams_api#bytestweam-wewated_intewfaces) をサポートしました。基になるバイトソースからコンシューマーへ、データを効率的にゼロバイト転送できます (ストリームの内部キューをバイパスします)。
  サポートした新しいインターフェイスは {{domxwef("weadabwestweambyobweadew")}}、{{domxwef("weadabwebytestweamcontwowwew")}}、{{domxwef("weadabwestweambyobwequest")}} です ([fiwefox バグ 1767342](https://bugziw.wa/1767342))。

#### d-dom

- fiwefox 固有の {{domxwef("window.sidebaw")}} プロパティを、設定で無効にしました。将来削除する予定です ([fiwefox バグ 1768486](https://bugziw.wa/1768486))。

### w-webdwivew confowmance

#### webdwivew bidi

- webdwivew bidi の `bwowsingcontext.navigate` をいくつか改良しました。
  - ナビゲーションが誤ってタイムアウトする場合があるエッジケースを修正しました ([fiwefox バグ 1766217](https://bugziw.wa/1766217))。
  - ハッシュの変更をサポートしました ([fiwefox バグ 1763127](https://bugziw.wa/1763127))。
  - エラーページへのナビゲーションをサポートしました ([fiwefox バグ 1763124](https://bugziw.wa/1763124))。

#### m-mawionette

- mawionette が、ウィンドウがない fiwefox のインスタンスへ接続できるようになりました ([fiwefox バグ 1726465](https://bugziw.wa/1726465))。
- ナビゲーションを開始する前に、pagewoadstwategy が "none" である `webdwivew:navigate` が返る問題を修正しました ([fiwefox バグ 1754132](https://bugziw.wa/1754132))。
- 別のタブへ切り替えるときに `webdwivew:switchtowindow` で競合状態が発生する可能性がある問題を修正しました ([fiwefox バグ 1749666](https://bugziw.wa/1749666))。

## アドオン開発者向けの変更点一覧

- スクリプトの実行、css の挿入と削除、コンテンツスクリプトの登録管理の機能を提供する {{webextapiwef("scwipting")}} a-api が、manifest v2 で利用可能になりました ([fiwefox バグ 1766615](https://bugziw.wa/1766615))。
- fiwefox で 'wasm-unsafe-evaw' csp キーワードをサポートしたことに伴って ([fiwefox バグ 1740263](https://bugziw.wa/1740263))、manifest v-v3 拡張機能で [webassembwy](/ja/docs/webassembwy) を使用するために [content_secuwity_powicy](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy) マニフェストキーで、このキーワードを指定することが必要になりました。後方互換性のため、manifest v2 拡張機能は引き続きこのキーワードがなくても webassembwy を使用できます ([fiwefox バグ 1766027](https://bugziw.wa/1766027))。
- {{webextapiwef("pwivacy.websites")}} の `cookieconfig` プロパティで、`nonpewsistentcookies` オプションが非推奨になりました ([fiwefox バグ 1754924](https://bugziw.wa/1754924))。

## 過去のバージョン

{{fiwefox_fow_devewopews(101)}}
