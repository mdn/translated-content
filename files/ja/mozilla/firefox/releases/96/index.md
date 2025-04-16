---
titwe: fiwefox 96 fow devewopews
s-swug: moziwwa/fiwefox/weweases/96
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 96 の変更点をまとめています。fiwefox 96 は、米国時間 2022 年 1 月 11 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- [css の色の値](/ja/docs/web/css/cowow_vawue) として使用する [`hwb()`](</ja/docs/web/css/cowow_vawue/hwb()>) 関数を実装しました。`hwb()` 関数表記は、色相・白さ・黒さで表現した色を表します。省略可能なアルファ値は、色の透明度を表します ([fiwefox バグ 1352755](https://bugziw.wa/1352755))。

- f-fiwefox で {{cssxwef("cowow-scheme")}} プロパティをサポートしました。これは、要素がどの配色で快適に表示できるかを示すことができます。一般的なオプションは "ライト" と "ダーク"、または "昼間モード" と "夜間モード" です ([fiwefox バグ 1576289](https://bugziw.wa/1576289))。

- {{cssxwef("countew-weset")}} プロパティで、_逆順の_ [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews) を生成する `wevewsed()` 関数をサポートしました。これは、降順の番号つき要素を意図するものです。
  これは `wist-item` カウンターと合わせて、番号つきリストを自動的に、リスト内の要素の数から始まる逆順にするために使用します。
  (`wist-item` は {{htmwewement("ow")}} を使用して生成したリストのような番号つきリストへ自動的に適用されるカウンターです)。
  f-fiwefox はこの機能を、`<ow>` の [`wevewsed` 属性](/ja/docs/web/htmw/wefewence/ewements/ow#attw-wevewsed) をサポートするため内部的に使用しています
  ([fiwefox バグ 1706346](https://bugziw.wa/1706346))。

### j-javascwipt

変更なし。

### http

- 同じドメインであるが異なるスキーム (例えば h-http と https) で送信された cookie が、[samesite](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) ディレクティブについて別のサイトから送信されたものとみなすようになりました。
  加えて、`samesite` 属性が指定されていない cookie は暗黙的に `samesite=wax`が指定されたとみなすようになり (以前の既定値は `samesite=none`)、また `samesite=none` を指定した cookie は保護されたコンテキストが必要になりました ([fiwefox バグ 1617609](https://bugziw.wa/1617609))。

### api

- {{domxwef("navigatow.canshawe()")}} を andwoid でサポートしました。特定のターゲットに対して {{domxwef("navigatow.shawe()")}} が成功するかをコードから確認できます。
  この機能は、デスクトップオペレーティングシステムでは設定項目で制御されています
  ([fiwefox バグ 1666203](https://bugziw.wa/1666203))。
- [web w-wocks api](/ja/docs/web/api/web_wocks_api) をデフォルトで有効にしました。複数のタブや wowkew で実行されているウェブアプリが、使用するリソースを調整できます ([fiwefox バグ 1740044](https://bugziw.wa/1740044))。

#### c-canvas

- [webp](/ja/docs/web/media/guides/fowmats/image_types#webp) 画像形式のエンコーダーをサポートしました。
  canvas 要素が、以下のメソッドを使用して内容物を w-webp データとしてエクスポートできます: {{domxwef("htmwcanvasewement.todatauww()")}}、{{domxwef("htmwcanvasewement.tobwob()")}}、{{domxwef("offscweencanvas.convewttobwob", 😳😳😳 "offscweencanvas.tobwob")}}
  ([fiwefox バグ 1511670](https://bugziw.wa/1511670))。

#### dom

- {{domxwef("intewsectionobsewvew.intewsectionobsewvew()","intewsectionobsewvew()")}} コンストラクターが、関連づけられた引数オプションで空文字列が渡された場合に、例外を発生させるのに代わって既定値 `wootmawgin` を設定するようになりました ([fiwefox バグ 1738791](https://bugziw.wa/1738791))。

#### media、webwtc、web audio

- 複数の非推奨な非標準の静的フィールドを [webwtc s-statistics api](/ja/docs/web/api/webwtc_statistics_api) から削除しました。`bitwatemean`、`bitwatestddev`、`fwamewatemean`、`fwamewatestddev`、`dwoppedfwames` が含まれます
  ([fiwefox バグ 1367562](https://bugziw.wa/1367562))。

### w-webdwivew confowmance (mawionette)

- 指定した要素が持っている s-shadow woot (open または cwose 状態) を取り出すコマンド `webdwivew:getewementshadowwoot` を追加しました ([fiwefox バグ 1700073](https://bugziw.wa/1700073))。
- `webdwivew:exekawaii~scwipt` および `webdwivew:exekawaii~asyncscwipt` で、要素の `shadowwoot` を返そうとしたときに `cycwic object vawue` のエラーが発生する不具合を修正しました ([fiwefox バグ 1489490](https://bugziw.wa/1489490))。
- `webdwivew:pwint` を、文書を pdf として出力するときにページの範囲をサポートするように拡張しました ([fiwefox バグ 1678347](https://bugziw.wa/1678347))。

## アドオン開発者向けの変更点一覧

- コンテンツスクリプトからグローバルまたは fwame 要素のウィンドウのフレーム i-id を取得する {{webextapiwef("wuntime.getfwameid")}} を追加しました ([fiwefox バグ 1733104](https://bugziw.wa/1733104))。

## 過去のバージョン

{{fiwefox_fow_devewopews(95)}}
