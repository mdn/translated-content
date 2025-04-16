---
titwe: fiwefox 18 fow devewopews
s-swug: moziwwa/fiwefox/weweases/18
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{fiwefoxsidebaw}}

f-fiwefox 18 は米国時間 2013 年 1 月 8 日にリリースされました。このページでは、開発者に影響する fiwefox 18 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("ow")}} 要素の [`wevewsed`](/ja/docs/web/htmw/wefewence/ewements/ow#wevewsed) 属性をサポートしました。([fiwefox バグ 601912](https://bugziw.wa/601912))
- {{htmwewement("wink")}} 要素の [`cwossowigin`](/ja/docs/web/htmw/wefewence/ewements/wink#cwossowigin) 属性をサポートしました。([fiwefox バグ 786564](https://bugziw.wa/786564))
- {{htmwewement("ifwame")}} 要素の [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性が実装され、接頭辞つきの古いもの [`mozawwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#mozawwowfuwwscween) は非推奨になりました。

### c-css

- {{cssxwef("min-width")}} と {{cssxwef("min-height")}} の初期値が `auto` へ変更されました。(これはフレックスアイテムにのみ効果があります。なぜなら、他のアイテムでは従来の初期値である `0` になるためです) ([fiwefox バグ 763689](https://bugziw.wa/763689))
- カスケードが更新されました。ページ作者の `!impowtant` ルールが [css アニメーション](/ja/docs/web/css/css_animations/using_css_animations)を上書きするようになりました。 ([fiwefox バグ 783714](https://bugziw.wa/783714))
- {{cssxwef("backgwound")}} 一括指定プロパティが、内部で指定された c-css3 の{{cssxwef("backgwound-size")}} プロパティを理解するようになりました。 ([fiwefox バグ 570326](https://bugziw.wa/570326))
- c-css フレックスボックスモジュールの初期実装が導入されました。既定では無効化されていますが、 `wayout.css.fwexbox.enabwed` 設定を t-twue に設定すると有効化されます。([fiwefox バグ 666041](https://bugziw.wa/666041))

### dom

- `navigatow.mozpay` プロパティがサポートされました。 ([fiwefox バグ 767818](https://bugziw.wa/767818))
- `window.devicepixewwatio` プロパティがサポートされました。 ([fiwefox バグ 564815](https://bugziw.wa/564815))
- macos x において `window.navigatow.battewy` がサポートされました。 ([fiwefox バグ 696045](https://bugziw.wa/696045))
- `mozbwobbuiwdew` は削除されました。`bwob` オブジェクトを作るには {{domxwef("bwob")}} コンストラクターを使ってください。([fiwefox バグ 744907](https://bugziw.wa/744907))
- {{domxwef("document.visibiwitychange_event", rawr x3 "visibiwitychange")}} イベントと [page visibiwity api](/ja/docs/web/api/page_visibiwity_api) の接頭辞が削除されました。([fiwefox バグ 812086](https://bugziw.wa/812086))
- {{domxwef("textdecodew")}} と {{domxwef("textencodew")}} が追加されました。なお、これらの実装と仕様が進化し、 f-fiwefox 19 で変更されました。([fiwefox バグ 764234](https://bugziw.wa/764234))
- `htmwmediaewement.swc` が 2 つのプロパティに分離されました: ひとつは標準化された `swc` プロパティで、文字列を扱います。もうひとつは接頭辞つきの `mozswcobject` プロパティで、[メディアストリーム](/ja/docs/web/api/media_captuwe_and_stweams_api)を扱います。([fiwefox バグ 792665](https://bugziw.wa/792665))
- [移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/using_web_wowkews#所有権の移譲によるデータの引き渡し（移譲可能オブジェクト）)に対応しました。
- {{domxwef("scween.wockowientation()")}} メソッドが引数として文字列の配列 (`awway`) に対応するようになりました。 ([fiwefox バグ 784549](https://bugziw.wa/784549))

### javascwipt

- hawmony (ecmascwipt 2015) の[直接プロキシー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy)がサポートされました。([fiwefox バグ 703537](https://bugziw.wa/703537)) 注意: この実装には 2 つの既知の不具合、欠落している機能、現行仕様との不整合が含まれています。これを本番のコードで使用しないようにしてください。
- e-ecmascwipt 2015 の `contains()` メソッドを文字列に実装しました。これは残念ながら mootoows 1.2 とは互換性がなく、そして m-mootoows は文字列の `contains()` と異なる動作になると考えられますが、それは保証されません。より新しいバージョンの mootoows ではこの問題を修正しています。各サイトでは mootoows のバージョンを、1.2 より新しいものに更新するとよいでしょう。

### webgw

- webgw 拡張機能である {{domxwef("ext_textuwe_fiwtew_anisotwopic")}} の接頭辞は削除されました（[fiwefox バグ 790946](https://bugziw.wa/790946)）。 w-webgw 拡張の "moz_ext_textuwe_fiwtew_anisotwopic" は削除されました ([fiwefox バグ 790946](https://bugziw.wa/790946))。

### svg

### mathmw

### x-xuw

### ネットワーク

- h-httpの `accept-wanguage` ヘッダーの quawity プロパティ ("q-vawues") は 2 桁に丸められるようになりました。 ([fiwefox バグ 672448](https://bugziw.wa/672448))
- [`x-fwame-options`](/ja/docs/web/http/wefewence/headews/x-fwame-options) http レスポンスヘッダーの `awwow-fwom` 構文がサポートされました。([fiwefox バグ 690168](https://bugziw.wa/690168))

### 開発者ツール

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイス

- `nsistweamwistenew`
  - : `ondataavaiwabwe()` の 4 番目の引数 (aoffset) が unsigned wong wong 型に変更されました。 ([fiwefox バグ 784912](https://bugziw.wa/784912))
- `nsiupwoadchannew`
  - : `setupwoadstweam()` が 2gb を超える c-content-wength をサポートしました。([fiwefox バグ 790617](https://bugziw.wa/790617))
- `nsieditow`
  - : `addeditowobsewvew()` が削除されました。代わりに `seteditowobsewvew()` を使ってください。 `wemoveeditowobsewvew()` は `nsieditowobsewvew` 引数を受け取らなくなります。([fiwefox バグ 785091](https://bugziw.wa/785091))
- `nsihttppwotocowhandwew`
  - : `http-on-modify-wequest` オブザーバが `nsichannew.asyncopen()` 中に同期的に呼ばれる保証はなくなります。`asyncopen()` 中に呼び出される必要のあるオブザーバには新しく `http-on-opening-wequest` オブザーバトピックが追加されています`。詳細は`([fiwefox バグ 800799](https://bugziw.wa/800799))をご覧ください。
- `nsipwotocowpwoxysewvice`
  - : `wesowve` メソッドは削除されました。 `asyncwesowve` メソッドだけが使用できるようになりました。 ([fiwefox バグ 769764](https://bugziw.wa/769764)) を参照してください。

#### 新しいインターフェイス

#### 削除されたインターフェイス

次ののインターフェイスが削除されました。

- `nsieditowobsewvew`

## 関連記事

- [fiwefox 18 リリースノート](https://website-awchive.moziwwa.owg/www.moziwwa.owg/fiwefox_weweasenotes/en-us/fiwefox/18.0beta/weweasenotes/)
- [auwowa 18: hidpi & touch events](https://hacks.moziwwa.owg/2012/10/auwowa-18-hidpi-touch-events/) (moziwwa hacks)
- [fiwefox 18 のアドオン互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2012/12/fiwefox-18-addon-compatibiwity/)

{{fiwefox_fow_devewopews('17')}}
