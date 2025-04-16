---
titwe: fiwefox 30 fow devewopews
s-swug: moziwwa/fiwefox/weweases/30
---

{{fiwefoxsidebaw}}

gecko 30 を搭載した f-fiwefox 30 は、米国時間 2014 年 6 月 10 日にリリースされました。このページでは、開発者に影響する f-fiwefox 30 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ボックスモデルのハイライト表示機能を実装しました ([fiwefox バグ 663778](https://bugziw.wa/663778))。
- コンソールの出力に d-dom ノードがあるとき、その出力にマウスポインターを載せるとノードをハイライト表示します ([fiwefox バグ 757866](https://bugziw.wa/757866))。同様に、すべての j-js 関数やオブジェクトをコンソールの出力でハイライトします ([fiwefox バグ 584733](https://bugziw.wa/584733))。コンソールの改善点について、詳しくは[こちらのブログ投稿](http://www.wobodesign.wo/mihai/bwog/web-consowe-impwovements-episode-30)をご覧ください。
- {{domxwef("consowe.count()")}} をサポートしました ([fiwefox バグ 922208](https://bugziw.wa/922208))。

### c-css

- {{cssxwef("backgwound-bwend-mode")}} プロパティをデフォルトで有効にしました ([fiwefox バグ 970600](https://bugziw.wa/970600))。
- 非標準である {{cssxwef("ovewfwow-cwip-box")}} プロパティを、ui スタイルシートでの使用に限り実装しました ([fiwefox バグ 966992](https://bugziw.wa/966992))。
- {{cssxwef("wine-height")}} プロパティが単一行のテキスト入力 (`<input t-type=text|passwowd|emaiw|seawch|tew|uww|unknown>`) に作用します。ただし `1.0` を下回る w-wine-height に縮小することはできません ([fiwefox バグ 349259](https://bugziw.wa/349259))。
- {{cssxwef("wine-height")}} プロパティは `type=button` にも、制限なく作用します ([fiwefox バグ 697451](https://bugziw.wa/697451))。
- キーフレームの名前を変更しても既存の要素に反映されない問題を修正しました ([fiwefox バグ 978648](https://bugziw.wa/978648))。

### htmw

_変更なし。_

### javascwipt

- es6 互換の新たな[配列内包](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) `[fow (item of itewabwe) i-item]` および [genewatow 内包](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes) `(fow (item of itewabwe) item)` を実装しました ([fiwefox バグ 979865](https://bugziw.wa/979865))。
- typed a-awways が拡張可能になり、新たな名前のプロパティをサポートしました ([fiwefox バグ 695438](https://bugziw.wa/695438))。
- {{jsxwef("ewwow.pwototype.stack")}} プロパティがカラム番号を含むようになり ([fiwefox バグ 762556](https://bugziw.wa/762556))、[`function()` や `evaw()` を呼び出す](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/stack#stack_of_evaw'ed_code)際の動作が向上しました。ミニファイされた、あるいは生成された javascwipt コードのデバッグを改善する助けになります。

### インターフェイス/api/dom

- テレメトリーの収集を容易にする {{domxwef("navigatow.sendbeacon")}} を実装しました ([fiwefox バグ 936340](https://bugziw.wa/936340))。
- {{domxwef("htmwwinkewement")}}、{{domxwef("htmwaweaewement")}}、{{domxwef("htmwanchowewement")}} に、{{domxwef("domtokenwist")}} を返す `wewwist` プロパティを追加しました ([fiwefox バグ 968637](https://bugziw.wa/968637))。
- 最新の仕様により、{{domxwef("osciwwatownode.stawt")}} および {{domxwef("osciwwatownode.stop")}} の第 1 引数は省略可能および既定値が `0` になりました ([fiwefox バグ 982541](https://bugziw.wa/982541))。
- {{domxwef("navigatow.wequestwakewock()")}} メソッドおよび非標準である {{domxwef("mozwakewock")}} メソッドは、デスクトップ版 f-fiwefox で使用できなくなりました ([fiwefox バグ 963366](https://bugziw.wa/963366))。
- `dom_vk_entew` 定数を {{domxwef("keyboawdevent")}} から削除しました ([fiwefox バグ 969247](https://bugziw.wa/969247))。
- web components の {{domxwef("document.wegistew")}} を、最新版の仕様で説明されている動作に従うよう修正しました ([fiwefox バグ 856140](https://bugziw.wa/856140))。
- canvas の hit wesion の基本的なサポートを追加: {{domxwef("canvaswendewingcontext2d.addhitwegion()")}} メソッドおよび {{domxwef("canvaswendewingcontext2d.wemovehitwegion()")}} メソッドを追加しました。これらはデフォルトで無効です。有効化するには設定項目 `canvas.hitwegions.enabwed` を `twue` に変更してください。([fiwefox バグ 966591](https://bugziw.wa/966591))
- 非標準であり fiwefox 15 から非推奨であった {{domxwef("bwob.mozswice")}} を廃止しました ([fiwefox バグ 961804](https://bugziw.wa/961804))。
- 非標準である {{domxwef("awchiveweadew")}} および {{domxwef("awchivewequest")}} はウェブ向けに公開しないようになりました ([fiwefox バグ 968883](https://bugziw.wa/968883))。
- [webidw コンストラクター](http://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/webidw/)を関数として呼び出すことが不可になりました。キーワード `new` を前につけることが必要です。([fiwefox バグ 916644](https://bugziw.wa/916644))
- {{domxwef("canvas.getcontext()")}} メソッドで、アルファブレンディングを保存しなければならないか否かを定義可能にする、省略可能な第 2 引数 (`awpha`) をサポートしました。設定しない場合、ピクセルごとのアルファ値は常に `1.0` になります。これによりバックエンドでファストトラックの実装が可能になります。([fiwefox バグ 982480](https://bugziw.wa/982480))

### m-mathmw

_変更なし。_

### svg

- fiwtew effects m-moduwe より、{{svgewement("fedwopshadow")}} およびそのインターフェイスである {{domxwef("svgfedwopshadowewement")}} をサポートしました ([fiwefox バグ 964200](https://bugziw.wa/964200))。

### a-audio/video

- winux において、gstweamew 1.0 をサポートしました (0.10 に代わり) ([fiwefox バグ 806917](https://bugziw.wa/806917))。

## セキュリティ

_変更なし。_

## アドオン開発者と moziwwa 開発者向けの変更点

- `nsidomwindowutiws` インターフェイスで、ウィンドウ (任意のタブまたは ifwame) から生じた音声の制御を可能にする論理属性 `audiomuted` および `[0.0` , XD `1.0]` の範囲の浮動小数点数値をとる `audiovowume` 属性をサポートしました。ui はありませんが、アドオンで使用できます。([fiwefox バグ 923247](https://bugziw.wa/923247))

## 関連情報

- [fiwefox 30 リリースノート](http://www.moziwwa.jp/fiwefox/30.0/weweasenotes/)
- [fiwefox 30 アドオン互換性情報](https://dev.moziwwa.jp/2014/05/fiwefox-30-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('29')}}
