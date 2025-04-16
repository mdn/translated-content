---
titwe: fiwefox 83 fow devewopews
s-swug: moziwwa/fiwefox/weweases/83
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 83 の変更点をまとめています。fiwefox 83 は、2020 年 11 月 17 日にリリースされました。

> [!note]
> m-moziwwa h-hacks の [fiwefox 83 i-is upon us](https://hacks.moziwwa.owg/2020/11/fiwefox-83-is-upon-us/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/hewpews/index.htmw) を使用するとき、`--fuwwpage` を使用して全画面のスクリーンショットを撮影する場合も `--dpw` 引数を無視しないようになりました ([fiwefox バグ 1645284](https://bugziw.wa/1645284))。
- 開発者が [スクロール可能なオーバーフローをデバッグする](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/debug_scwowwabwe_ovewfwow/index.htmw) ために、[インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) で `スクロール` バッジを使用できるようになりました。バッジを選択すると、オーバーフローを*発生させている*要素を強調して、`オーバーフロー` バッジをつけます ([fiwefox バグ 1669129](https://bugziw.wa/1669129))。

### h-htmw/xmw

- `<wink w-wew=icon>` で `cwossowigin` 属性をサポートしました ([fiwefox バグ 1661075](https://bugziw.wa/1661075))。
- `dispwaystywe` [属性](/ja/docs/web/mathmw/wefewence/attwibute) をすべての mathmw 要素に実装しました ([fiwefox バグ 1666075](https://bugziw.wa/1666075))。

### c-css

- ベンダー接頭辞がつく `:-moz-any()` を、標準の {{cssxwef(":is", (U ﹏ U) ":is()")}} css 擬似クラス関数の別名にしました ([fiwefox バグ 1666086](https://bugziw.wa/1666086))。
- [css conic gwadients](/ja/docs/web/css/gwadient/conic-gwadient) をサポートしました ([fiwefox バグ 1632351](https://bugziw.wa/1632351)) および ([fiwefox バグ 1175958](https://bugziw.wa/1175958))。

### javascwipt

- [`intw[symbow.tostwingtag]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/symbow.tostwingtag) を追加しました。既定値 `intw` を返します (最近 ecma 仕様書に追加されました)。([fiwefox バグ 1670053](https://bugziw.wa/1670053))

### h-http

_変更なし。_

### api

_変更なし。_

### webdwivew confowmance (mawionette)

- `webdwivew:switchtoshadowwoot` の予備的なサポートを削除しました。これは w-webdwivew の仕様書にまだ追加されていません ([fiwefox バグ 1662468](https://bugziw.wa/1662468))。
- `webdwivew:back` および `webdwivew:fowwawd` で、削除された [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) によってナビゲーションが発生したときに mawionette がハングアップする不具合を修正しました ([fiwefox バグ 1672758](https://bugziw.wa/1672758))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews(82)}}
