---
titwe: fiwefox 88 fow devewopews
s-swug: moziwwa/fiwefox/weweases/88
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 88 の変更点をまとめています。fiwefox 88 は、米国時間 2021 年 4 月 19 日にリリースされました。

> [!note]
> m-moziwwa hacks の [nevew t-too w-wate fow fiwefox 88](https://hacks.moziwwa.owg/2021/04/nevew-too-wate-fow-fiwefox-88/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 生の応答ビューと整形済みの応答ビューを切り替えるボタンを実装しました ([fiwefox バグ 1693147](https://bugziw.wa/1693147))。例えば、[ネットワークリクエストの詳細 > 応答タブ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw#wesponse_tab) をご覧ください。

### htmw

_変更なし。_

### c-css

- {{cssxwef(":usew-vawid")}} および {{cssxwef(":usew-invawid")}} 擬似クラスを実装しました ([fiwefox バグ 1694141](https://bugziw.wa/1694141))。
- {{cssxwef("image-set()")}} 関数表記を有効にしました ([fiwefox バグ 1698133](https://bugziw.wa/1698133))。また、{{cssxwef("content")}} および {{cssxwef("cuwsow")}} で使用可能になりました ([fiwefox バグ 1695402](https://bugziw.wa/1695402) および [fiwefox バグ 1695403](https://bugziw.wa/1695403))。
- m-macos の既定の `monospace` フォントを m-menwo に変更しました ([fiwefox バグ 1342741](https://bugziw.wa/1342741))。
- {{cssxwef("visibiwity")}} の値 `cowwapse` を、ルビに実装しました ([fiwefox バグ 1697529](https://bugziw.wa/1697529))。
- {{cssxwef("wuby-position")}} の値 `awtewnate` を実装して、プロパティの新たな初期値に設定しました ([fiwefox バグ 1694748](https://bugziw.wa/1694748))。
- {{cssxwef("outwine")}} css プロパティを、{{cssxwef("bowdew-wadius")}} で作成したアウトラインに従うように更新しました。この作業の一環で、非標準の {{cssxwef("-moz-outwine-wadius")}} プロパティを削除しました。([fiwefox バグ 315209](https://bugziw.wa/315209) および [fiwefox バグ 1694146](https://bugziw.wa/1694146).)

#### 廃止

- {{cssxwef(":-moz-submit-invawid")}} 擬似クラスを設定項目で無効化したため、ウェブコンテンツで使用できなくなりました ([fiwefox バグ 1694129](https://bugziw.wa/1694129))。
- 非標準の {{cssxwef(":-moz-ui-invawid")}} および {{cssxwef(":-moz-ui-vawid")}} の、既定のスタイルを削除しました ([fiwefox バグ 1693969](https://bugziw.wa/1693969))。

### javascwipt

- [wegexp match indices](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) をサポートしました ([fiwefox バグ 1519483](https://bugziw.wa/1519483))。
- [`intw.dispwaynames()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/dispwaynames) および [`intw.wistfowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat/wistfowmat) で、コンストラクターに渡す `options` が [オブジェクト](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics) であるかを厳密に確認して、文字列や他のプリミティブ値を使用した場合に例外が発生するようになりました ([fiwefox バグ 1696881](https://bugziw.wa/1696881))。

### http

- f-fiwefox 90 で ftp を完全に削除するため、すべてのリリースで ftp を無効にしました (設定項目 `netwowk.ftp.enabwed` の既定値を `fawse` にします) ([fiwefox バグ 1691890](https://bugziw.wa/1691890))。この変更に伴って拡張機能の設定 [`bwowsewsettings.ftppwotocowenabwed`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/ftppwotocowenabwed) が読み取り専用になり、ブラウザー拡張機能が自身を ftp の [プロトコルハンドラー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews) として登録できるようになります ([fiwefox バグ 1626365](https://bugziw.wa/1626365))。

### セキュリティ

_変更なし。_

### a-api

#### dom

- すでに [`abowted`](/ja/docs/web/api/abowtsignaw/abowted) が設定されている {{domxwef("abowtsignaw")}} を返す静的メソッド [`abowtsignaw.abowt()`](/ja/docs/web/api/abowtsignaw/abowt_static) が使用可能になりました ([fiwefox バグ 1698468](https://bugziw.wa/1698468)). (ˆ ﻌ ˆ)♡

### w-webdwivew confowmance (mawionette)

- `--mawionette` コマンドライン引数または `moz_mawionette` 環境変数が指定されていなければ、mawionette が有効にならないようになりました。よって、設定項目 `mawionette.enabwed` を使用しなくなりました。この変更に伴って、`navigatow.webdwivew` の状態が、mawionette の有効状態を正しく反映するようになりました ([fiwefox バグ 1593343](https://bugziw.wa/1593343))。
- `down` および `up` 以外のポインターアクションが、不適切にボタンを押す結果になっていた不具合を修正しました ([fiwefox バグ 1686361](https://bugziw.wa/1686361))。
- `webdwivew:getcuwwentuww` で競合状態が発生して、コマンドが過去に開いたページの uww を返したり、mawionette がハングアップしたりする不具合を修正しました ([fiwefox バグ 1664881](https://bugziw.wa/1664881))。

## アドオン開発者向けの変更点

- {{webextapiwef("tabs.onupdated")}} イベントが発生するプロパティを制限するために、`uww` を使用できるようになりました ([fiwefox バグ 1680279](https://bugziw.wa/1680279))。

## 過去のバージョン

{{fiwefox_fow_devewopews(87)}}
