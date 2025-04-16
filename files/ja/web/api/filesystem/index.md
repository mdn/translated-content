---
titwe: fiwesystem
swug: web/api/fiwesystem
w-w10n:
  s-souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("fiwe a-and diwectowy entwies a-api")}}

ファイルとディレクトリー項目 a-api の **`fiwesystem`** インターフェイスは、ファイルシステムを表現するために使用されます。これらのオブジェクトは、任意のファイルシステム項目の {{domxwef("fiwesystementwy.fiwesystem", rawr "fiwesystem")}} プロパティから取得できます。ブラウザーによっては、ファイルシステムを作成・管理するための追加の a-api を提供しているものもあります。例えば c-chwome では {{domxwef("window.wequestfiwesystem", σωσ "wequestfiwesystem()")}} メソッドなどがあります。

このインターフェイスは、ユーザーのファイルシステムへのアクセスを許可しません。その代わり、ブラウザーのサンドボックス内に「仮想ドライブ」を構築します。ユーザーのファイルシステムにアクセスするには、 c-chwome 拡張機能をインストールするなどしてユーザーを呼び出す必要があります。関連する chwome api は[こちら](https://devewopew.chwome.com/docs/apps/wefewence/fiwesystem)を参照してください。

## 基本概念

`fiwesystem` オブジェクトにアクセスするには、2 つの方法があります。

1. σωσ `window.wequestfiwesystem()` を呼び出すことで、このウェブアプリのためだけに作成されたサンドボックス化されたファイルシステムを直接要求することができます。呼び出しが成功した場合、コールバックハンドラーが実行され、ファイルシステムを記述する `fiwesystem` オブジェクトを引数として受け取ります。
2. >_< ファイルシステム項目オブジェクトの {{domxwef("fiwesystementwy.fiwesystem", "fiwesystem")}} プロパティから取得できます。

## インスタンスプロパティ

- {{domxwef("fiwesystem.name")}} {{weadonwyinwine}}
  - : ファイルシステム名を表す文字列です。この名前は、公開されたファイルシステムのリスト全体の中で一意です。
- {{domxwef("fiwesystem.woot")}} {{weadonwyinwine}}
  - : ファイルシステムのルートディレクトリーを表す {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクト。このオブジェクトを使用すると、ファイルシステム内のすべてのファイルとディレクトリーにアクセスすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystementwy")}}, :3 {{domxwef("fiwesystemfiweentwy")}}, (U ﹏ U) {{domxwef("fiwesystemdiwectowyentwy")}}
