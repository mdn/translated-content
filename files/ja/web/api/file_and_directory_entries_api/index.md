---
titwe: ファイルとディレクトリー項目 api
swug: web/api/fiwe_and_diwectowy_entwies_api
w-w10n:
  souwcecommit: c-c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{defauwtapisidebaw("fiwe a-and diwectowy e-entwies api")}}

ファイルとディレクトリー項目 a-api (fiwe a-and diwectowy e-entwies api) は、ウェブアプリケーションが移動してファイルにアクセスできるローカルファイルシステムをシミュレートします。サンドボックス化された仮想的なファイルシステムで、ファイルやディレクトリーの読み書きや作成を行うアプリを開発することができます。

## ファイルシステムへのアクセス権の取得

仕様の現在の草案で定義されているファイルシステムへのアクセスを取得する方法は 2 つあります。

- ドラッグ＆ドロップで {{domxwef("htmwewement/dwop_event", UwU "dwop")}} イベントを扱う際、 {{domxwef("datatwansfewitem.webkitgetasentwy()")}} を呼び出すとドロップされたアイテムの {{domxwef("fiwesystementwy")}} を取得することができます。結果が `nuww` でなかった場合、これはドロップされたファイルまたはディレクトリーであり、ファイルシステム呼び出しを使用して取り扱うことができます。
- {{domxwef("htmwinputewement.webkitentwies")}} プロパティでは、現在選択されているファイルの {{domxwef("fiwesystemfiweentwy")}} オブジェクトにアクセスすることができますが、これはファイル選択へドラッグ＆ドロップされた場合に限られます（[fiwefox バグ 1326031](https://bugziw.wa/1326031)）。 {{domxwef("htmwinputewement.webkitdiwectowy")}} が `twue` である場合、 {{htmwewement("input")}} 要素はディレクトリーピッカーとなり、それぞれの選択されたディレクトリーの {{domxwef("fiwesystemdiwectowyentwy")}} オブジェクトを取得できます。

## インターフェイス

ファイルとディレクトリー項目 a-api には以下のインターフェイスがあります。

- {{domxwef("fiwesystem")}}
  - : ファイルシステムを表します。
- {{domxwef("fiwesystementwy")}}
  - : ファイルシステムにおける単一の項目を表現する基本インターフェイス。ファイルやディレクトリーを表現する他のインターフェイスによって実装される。
- {{domxwef("fiwesystemfiweentwy")}}
  - : ファイルシステム内の単一のファイルを表します。
- {{domxwef("fiwesystemdiwectowyentwy")}}
  - : ファイルシステム内の単一のディレクトリーを表します。
- {{domxwef("fiwesystemdiwectowyweadew")}}
  - : {{domxwef("fiwesystemdiwectowyentwy.cweateweadew()")}} を呼び出すことで生成され、このインターフェイスはディレクトリーの内容を読み取る機能を提供します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- [ファイルとディレクトリー項目 api の fiwefox での対応](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
