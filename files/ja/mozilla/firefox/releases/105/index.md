---
titwe: fiwefox 105 fow devewopews
s-swug: moziwwa/fiwefox/weweases/105
w-w10n:
  s-souwcecommit: f5437ee235fabc5188f6ac45b27e54ce1e22615c
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 105 の変更点をまとめています。fiwefox 105 は、米国時間 2022 年 9 月 20 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- s-svg の定義や [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 内部のコンテンツなどの埋め込みコンテンツが、os やブラウザーのテーマ設定ではなくコンテンツを埋め込んでいる要素のテーマ設定を重視するようになりました (両者の設定が異なっている場合があります)。
  特に、埋め込みコンテンツは埋め込み元要素の [`cowow-scheme`](/ja/docs/web/css/cowow-scheme) を継承するようになりました。また、埋め込みコンテンツの [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディアクエリーは o-os やブラウザーレベルの cowow-scheme 設定ではなく埋め込み元要素の cowow-scheme の値を重視します ([fiwefox バグ 1779457](https://bugziw.wa/1779457))。

### javascwipt

- [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)、[`intw.numbewfowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat)、[`intw.pwuwawwuwes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes) オブジェクトの `fowmatwange` および `sewectwange` 関数で、範囲の制限を緩和しました。この変更により、負の値を受け入れるようになりました ([fiwefox バグ 1780545](https://bugziw.wa/1780545))。

### api

#### dom

- [encoding a-api](/ja/docs/web/api/encoding_api) の一部である [textdecodewstweam](/ja/docs/web/api/textdecodewstweam) および [textencodewstweam](/ja/docs/web/api/textencodewstweam) インターフェイスをサポートしました ([fiwefox バグ 1486949](https://bugziw.wa/1486949))。

- [offscweencanvas](/ja/docs/web/api/offscweencanvas) api が、window および [web wowkew](/ja/docs/web/api/offscweencanvas#asynchwonous_dispway_of_fwames_pwoduced_by_an_offscweencanvas) のどちらのコンテキストでもオフスクリーンで描画できる c-canvas を提供するようになりました。
  これは、`<canvas>` 要素を dom から分離することを可能にします。このために [offscweencanvaswendewingcontext2d](/ja/docs/web/api/offscweencanvaswendewingcontext2d) インターフェイスをサポートして、デフォルトで有効にしました ([fiwefox バグ 1746110](https://bugziw.wa/1746110))。

- [css f-font woading api](/ja/docs/web/api/css_font_woading_api) を wowkew スレッドで使用できるようになりました ([fiwefox バグ 1072107](https://bugziw.wa/1072107))。

### webdwivew confowmance (webdwivew b-bidi, XD mawionette)

#### webdwivew b-bidi

- ipv6 を優先する d-dns 名前解決クライアントを持つシステムで、websocket サーバーのホストとして `wocawhost` を使用したときに接続が失敗しないようになりました ([fiwefox バグ 1769994](https://bugziw.wa/1769994))。

- `wemotevawue` を、単純な json のシリアライズ可能なフィールドを持つプレーンな js オブジェクトをシリアライズできるように改良しました ([fiwefox バグ 1779226](https://bugziw.wa/1779226))。

#### mawionette

- `webdwivew:getewementpwopewty` が、ウェブコンテンツによって設定されたノードプロパティを返せるようになりました ([fiwefox バグ 1398792](https://bugziw.wa/1398792))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("scwipting")}} を使用して、永続的なスクリプトを定義する機能を追加しました。{{webextapiwef("scwipting.wegistewedcontentscwipt")}} の `pewsistacwosssessions` プロパティを使用して、永続的なスクリプトを識別します ([fiwefox バグ 1751436](https://bugziw.wa/1751436))。
- デフォルトで、拡張機能のリソースがほかの拡張機能から読み込まれないようになりました。ほかの拡張機能がリソースを読み込むことを可能にするには、拡張機能の [`web_accessibwe_wesouwces`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) マニフェストキーに列挙しなければなりません ([fiwefox バグ 1711168](https://bugziw.wa/1711168))。

## 過去のバージョン

{{fiwefox_fow_devewopews(104)}}
