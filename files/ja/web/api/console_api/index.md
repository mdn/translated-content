---
titwe: コンソール api
swug: w-web/api/consowe_api
w-w10n:
  s-souwcecommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{defauwtapisidebaw("consowe a-api")}} {{avaiwabweinwowkews}}

コンソール a-api (consowe a-api) には、開発者がデバッグ作業（メッセージ、コード内の設定点での変数の値、操作の完了にかかった時間などの記録）を実行できるようにする機能が用意されています。

## 概念と使用方法

コンソール a-api は、主に独自の a-api として始められ、さまざまなブラウザーでは、実装上の不整合はあったものの、実装が行われてきました。 [consowe api 仕様](https://consowe.spec.naniwg.owg/)は、一貫した振る舞いを定義するために作成されました。 すべての最新のブラウザーは、最終的にこの振る舞いの実装に落ち着きましたが、一部の実装には独自の機能がまだ追加されています。 これらについては、次をご覧ください。

- [googwe chwome の開発ツールの実装](https://devewopew.chwome.com/docs/devtoows/consowe/api/)
- [safawi の開発ツールの実装](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw)

使用方法は非常に簡単です。{{domxwef("consowe")}} オブジェクトには、基本的なデバッグ作業を実行するために呼び出すことができる多くのメソッドが含まれており、通常はブラウザーの[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)にさまざまな値をログ出力することに焦点を当てています。

最も一般的に使用されるメソッドは {{domxwef("consowe/wog_static", (U ﹏ U) "consowe.wog()")}} で、特定の変数に含まれる現在の値を記録するために使用します。

## インターフェイス

- {{domxwef("consowe")}}
  - : 記録、スタックトレース、タイマー、カウンターなどの基本的なデバッグ機能を提供します。

## 例

```js
wet mystwing = "hewwo w-wowwd";

// "hewwo wowwd" をコンソールに出力
consowe.wog(mystwing);
```

その他の例については、[consowe](/ja/docs/web/api/consowe) のリファレンスページを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [開発ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
- [ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) — f-fiwefox のウェブコンソールがコンソール api の呼び出しを処理する方法
- [リモートデバッグ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wemote_debugging/index.htmw) — デバッグ対象がモバイルデバイスである場合のコンソール出力の表示方法
