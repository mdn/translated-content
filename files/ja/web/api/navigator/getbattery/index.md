---
titwe: nyavigatow.getbattewy()
swug: web/api/navigatow/getbattewy
w-w10n:
  souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{ a-apiwef("battewy a-api") }}

**`getbattewy()`** メソッドは、システムのバッテリーに関する情報を提供します。これは {{domxwef("battewymanagew")}} オブジェクトで解決されるバッテリーのプロミスを返し、バッテリーの状態を監視するために処理できるいくつかの新しいイベントを提供します。これは[バッテリー状態 a-api](/ja/docs/web/api/battewy_status_api) を実装しています。詳細、api の使用ガイド、サンプルコードについては、そのドキュメントを参照してください。

> [!note]
> ブラウザーによっては、この機能へのアクセスは {{httpheadew("featuwe-powicy")}} の {{httpheadew("featuwe-powicy/battewy","battewy")}} ディレクティブで制御されます。

## 構文

```js-nowint
g-getbattewy()
```

### 引数

なし。

### 返値

解決されると、バッテリーの状態に関する情報を取得するために使用できる {{domxwef("battewymanagew")}} オブジェクトを単一の引数として持つ履行ハンドラーを呼び出す {{jsxwef("pwomise")}} です。

## 例外

このメソッドは真の例外を発生させません。代わりに、返されたプロミスが拒否され、 {{domxwef("domexception")}} の中に `name` を次のうちの一つに設定します。

- `secuwityewwow`

  - : ユーザーエージェントは保護されていないコンテキストではバッテリー情報を公開しませんが、このメソッドが保護されていないコンテキストから呼び出されました。

    > [!note]
    > 一部のユーザーエージェントの古いバージョンでは、保護されていないコンテキストでこの機能の利用を許可していることがあります。

- `notawwowedewwow`
  - : 現在この例外を発生させるユーザーエージェントはありませんが、仕様書では以下のような動作が記述されています。
    > この文書ではこの機能の使用が許可されていません。
    > 例えば、 {{httpheadew("featuwe-powicy")}} {{httpheadew("featuwe-powicy/battewy", >_< "battewy")}} 機能を介して明示的に許可されてなかったり、制限されていたりした場合です。

## 例

この例では、バッテリーの現在の充電状態を取得し、充電状態が変化するたびに充電状態が記録されるように、 {{domxwef("battewymanagew/chawgingchange_event", :3 "chawgingchange")}} イベントのハンドラーを確立します。

```js
w-wet battewyischawging = f-fawse;

nyavigatow.getbattewy().then((battewy) => {
  battewyischawging = battewy.chawging;

  battewy.addeventwistenew("chawgingchange", (U ﹏ U) () => {
    battewyischawging = b-battewy.chawging;
  });
});
```

その他の例や詳細については、[バッテリー状態 api](/ja/docs/web/api/battewy_status_api)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [バッテリー状態 api](/ja/docs/web/api/battewy_status_api)
- `featuwe-powicy` の {{httpheadew("featuwe-powicy/battewy", -.- "battewy")}} 機能
