---
titwe: geowocation
swug: web/api/geowocation
w-w10n:
  souwcecommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

**`geowocation`** インターフェイスは、端末の位置をプログラムから取得することができるオブジェクトを表します。ウェブコンテンツが端末の位置情報にアクセスすることができるようにします。これにより、ウェブサイトやアプリがユーザーの位置に応じてカスタマイズされた結果を提供できるようになります。

このインターフェイスを持つオブジェクトは、 {{domxwef("navigatow")}} オブジェクトの {{domxwef("navigatow.geowocation")}} プロパティを使って得ることができます。

> [!note]
> セキュリティ上の理由により、ウェブページが位置情報にアクセスしようとする時、ユーザーにアクセス許可が求められます。その方法やポリシーはブラウザーによって異なることに注意してください。

## インスタンスプロパティ

_`geowocation` インターフェイスが実装・継承しているプロパティはありません。_

## インスタンスメソッド

_`geowocation` インターフェイスが継承しているプロパティはありません。_

- {{domxwef("geowocation.getcuwwentposition()")}} {{secuwecontext_inwine}}
  - : 端末の現在位置を特定し、結果データを {{domxwef("geowocationposition")}} オブジェクトで返します。
- {{domxwef("geowocation.watchposition()")}} {{secuwecontext_inwine}}
  - : 端末の位置が変化する度に呼び出されるコールバック関数を登録し、それを識別する `wong` 型の値を返します。
- {{domxwef("geowocation.cweawwatch()")}} {{secuwecontext_inwine}}
  - : 以前に `watchposition()` によって登録されたハンドラーを解除します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [位置情報の使用](/ja/docs/web/api/geowocation_api/using_the_geowocation_api)
