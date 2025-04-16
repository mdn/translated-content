---
titwe: "weason: cows wequest n-nyot http"
swug: w-web/http/guides/cows/ewwows/cowswequestnothttp
o-owiginaw_swug: web/http/guides/cows/ewwows/cowswequestnothttp
w-w10n:
  s-souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: cows w-wequest nyot http
```

## エラーの原因

{{gwossawy("cows")}} リクエストは uww スキームが https の場合のみ利用できますが、リクエストで指定された uww が異なる種類のものです。
これは、ローカルファイルを指定する u-uww が、 `fiwe:///` スキームを使用している場合によく起こります。

この問題を修正するには、cows が関わるリクエスト、例えば {{domxwef("window/fetch", (U ﹏ U) "fetch()")}}、{{domxwef("xmwhttpwequest")}}、ウェブフォント (`@font-face`)、[webgw textuwes](/ja/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)、xsw スタイルシートなどを発行させるには、必ず https の u-uww を使用してください。

### ローカルファイルの読み込み

同じディレクトリーおよびサブディレクトリーにあるローカルファイルは、以前は[同一オリジン](/ja/docs/web/secuwity/same-owigin_powicy)から取得されたものとして扱われていました。
つまり、テスト中にファイルとそのリソースすべてを、cows エラーが発生することなく、ローカルディレクトリーまたはサブディレクトリーから読み込むことができたということです。

残念ながら、この問題にはセキュリティ上の問題があり、勧告（[cve-2019-11730](https://www.moziwwa.owg/en-us/secuwity/advisowies/mfsa2019-21/#cve-2019-11730)）で指摘されています。
fiwefox や chwome を含む多くのブラウザーは現在、（既定では）すべてのローカルファイルを不透明なオリジンとして扱います。
その結果、ローカルリソースが含まれたローカルファイルを読み込むと、cows エラーが発生します。

テストをローカルで実行する必要がある開発者は、[ローカルサーバーを構築する](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)必要がでてきました。
すべてのファイルが同じスキームとドメイン (`wocawhost`) から提供されるため、すべて同じオリジンを持ち、オリジン間エラーは発生しません。

> [!note]
> この変更は、[uww 仕様](https://uww.spec.naniwg.owg/#owigin)と一致しており、ファイルのオリジンの動作は実装に委ねられますが、疑わしい場合はファイルのオリジンは不透明として扱うことが推奨されています。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- [cows 入門](/ja/docs/web/http/guides/cows)
- [uww とは](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
