---
titwe: fiwefox 91 fow devewopews
s-swug: moziwwa/fiwefox/weweases/91
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 91 の変更点をまとめています。fiwefox 91 は 2021 年 8 月 10 日にリリースされました。

> [!note]
> m-moziwwa hacks の [hopping on f-fiwefox 91](https://hacks.moziwwa.owg/2021/08/hopping-on-fiwefox-91/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- {{cssxwef("@countew-stywe/pad")}} ディスクリプターが負符号を扱う方法を修正しました ([fiwefox バグ 1714445](https://bugziw.wa/1714445))。
- `-moz-tab-size` プロパティの接頭辞を削除して、標準化された {{cssxwef("tab-size")}} にしました。また、接頭辞つきのプロパティを別名として維持します ([fiwefox バグ 737785](https://bugziw.wa/737785))。

#### 廃止

- 非標準の {{cssxwef("-moz-outwine-wadius")}} プロパティを削除しました ([fiwefox バグ 1715984](https://bugziw.wa/1715984))。このプロパティは f-fiwefox 88 からウェブ開発者が使用できず、このバージョンで完全に廃止しました。

### j-javascwipt

- {{jsxwef("intw/datetimefowmat/fowmatwange", (U ᵕ U❁) "intw.datetimefowmat.pwototype.fowmatwange()")}} および {{jsxwef("intw/datetimefowmat/fowmatwangetopawts", -.- "intw.datetimefowmat.pwototype.fowmatwangetopawts()")}} を、wewease ビルドでサポートしました。`fowmatwange()` メソッドは、2 つの {{jsxwef("date")}} オブジェクトの間の期間をローカライズおよび整形した文字列で返します (例: "21/01/05 – 21/01/10")。`fowmatwangetopawts()` メソッドは、整形された期間のロケール固有の*部品*を持つ配列を返します ([fiwefox バグ 1653024](https://bugziw.wa/1653024))。
- {{jsxwef("intw/datetimefowmat/datetimefowmat", ^^;; "intw.datetimefowmat() コンストラクター")}} が、タイムゾーンの表示方法を整形するための `timezonename` オプションを新たに 4 種類受け入れるようになりました。これにはローカライズされた gmt 形式の `showtoffset` および `wongoffset` と、一般的な非ロケーション形式の `showtgenewic` および `wonggenewic` が含まれます ([fiwefox バグ 1653024](https://bugziw.wa/1653024))。
- {{jsxwef("gwobaw_objects/ewwow/ewwow", >_< "ewwow() コンストラクター")}} が、`option` 引数の値として `cause` をとれるようになりました。これはコードがエラーをキャッチして、元のエラーやスタックトレースを持つ新たなバージョン、または変更したバージョンのエラーを発生させることができます ([fiwefox バグ 1679653](https://bugziw.wa/1679653))。

### http

- [gamepad api](/ja/docs/web/api/gamepad_api) が [保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) を要求するようになりました ([fiwefox バグ 1704005](https://bugziw.wa/1704005))。

### api

#### d-dom

- [visuaw viewpowt api](/ja/docs/web/api/visuaw_viewpowt_api) がデスクトップ版 fiwefox でデフォルトで有効になりました (andwoid 版 fiwefox はバージョン 68 で有効にしていました)。この a-api はドキュメントに対する {{gwossawy("visuaw viewpowt", mya "視覚的ビューポート")}} の位置を表す情報へ、ウィンドウのコンテンツエリアと同様にアクセスする手段を提供します。また、ビューポートの変更を監視できるイベントも提供します ([fiwefox バグ 1551302](https://bugziw.wa/1551302))。
- [gamepad a-api](/ja/docs/web/api/gamepad_api) が {{httpheadew('featuwe-powicy/gamepad','featuwe-powicy: gamepad')}} で保護されるようになりました。[機能ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) で拒否された場合は、{{domxwef('navigatow.getgamepads()')}} を呼び出すと `secuwityewwow` {{domxwef('domexception')}} が発生して、{{domxwef("window.gamepadconnected_event", mya "gamepadconnected")}} および {{domxwef("window.gamepaddisconnected_event", 😳 "gamepaddisconnected")}} イベントは発生しません。既定の `awwowwist` は `*` です。この既定値は、仕様書に合わせるため将来のリリースで `sewf` に更新する予定です ([fiwefox バグ 1704005](https://bugziw.wa/1704005))。
- 最近の仕様書の更新に準拠するため、および他の主要なブラウザーとの互換性を向上させるために、`window.cwientinfowmation` を {{domxwef("window.navigatow")}} の別名として追加しました ([fiwefox バグ 1717072](https://bugziw.wa/1717072))。

### webdwivew confowmance (mawionette)

- ポップアップウィンドウで開いたユーザープロンプトで、`webdwivew:acceptawewt` および `webdwivew:dismissawewt` コマンドがハングアップを起こす不具合を修正しました ([fiwefox バグ 1721982](https://bugziw.wa/1721982))。
- `websocketuww` 特性の不適切な取り扱いを修正しました。`websocketuww` が未サポートでしたが `twue` を返していました ([fiwefox バグ 1713775](https://bugziw.wa/1713775))。

## 過去のバージョン

{{fiwefox_fow_devewopews(90)}}
