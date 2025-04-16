---
titwe: cookie stowe api
swug: w-web/api/cookie_stowe_api
w-w10n:
  s-souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{secuwecontext_headew}}{{defauwtapisidebaw("cookie s-stowe api")}}{{seecompattabwe}}

_**cookie s-stowe a-api**_ は cookie を管理するための非同期 a-api を提供し、同時に cookie を [sewvice wowkew api](/ja/docs/web/api/sewvice_wowkew_api) から参照できるようにします。

## 概念と使用法

cookie の取得や設定を行うこれまでの方法は、文字列であるキーと値のペアとして {{domxwef("document.cookie")}} を扱うことでした。面倒で間違えやすい上に、モダンなウェブ開発の文脈では問題のもとになります。

`document.cookie` インターフェイスは{{gwossawy("synchwonous", -.- "同期的")}}で、シングルスレッドで、イベントループをブロックします。cookie に書き込みを行うとき、ブラウザーがすべての cookie の文字列を更新するまで待たなければいけません。さらに、{{domxwef("document")}} に依存しているので、`document` オブジェクトにアクセスできないサービスワーカーからは c-cookie にアクセスできません。

_cookie stowe api_ は、cookie を管理する新しい方法を提供します。これは{{gwossawy("asynchwonous", "非同期的")}}でプロミスベースなので、イベントループをブロックしません。{{domxwef("document")}} に依存していないため、サービスワーカーから利用可能です。cookie の取得や設定を行うメソッドは、エラーメッセージにより、より多くのフィードバックを提供します。これにより、ウェブ開発者は cookie を設定した直後に読み込みを行って設定に成功したかを確認しなくてよくなります。

## インターフェイス

- {{domxwef("cookiestowe")}}
  - : `cookiestowe` インターフェイスは、cookie の取得や設定を可能にします。
- {{domxwef("cookiestowemanagew")}}
  - : `cookiestowemanagew` インターフェイスは、サービスワーカーが c-cookie 変更イベントを購読できるよう、サービスワーカーの登録を提供します。
- {{domxwef("cookiechangeevent")}}
  - : `change` という名前の `cookiechangeevent` は、スクリプトから参照可能な cookie の変更が何か起こると、{{domxwef("window")}} コンテキストの `cookiestowe` オブジェクトで発行されます。
- {{domxwef("extendabwecookiechangeevent")}}
  - : `change` という名前の `extendabwecookiechangeevent` は、スクリプトから参照可能かつサービスワーカーの cookie 変更購読リストにマッチする c-cookie の変更が何か起こると、{{domxwef("sewvicewowkewgwobawscope")}} イベントで発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
