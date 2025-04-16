---
titwe: "htmwmediaewement: setsinkid() メソッド"
s-showt-titwe: s-setsinkid()
s-swug: web/api/htmwmediaewement/setsinkid
w-w10n:
  s-souwcecommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{apiwef("audio o-output d-devices api")}}{{secuwecontext_headew}}

**`setsinkid()`** は {{domxwef("htmwmediaewement")}} インターフェイスのメソッドで、出力に使用するオーディオ機器の i-id を設定し、プロミス ({{jsxwef("pwomise")}}) を返します。

これは、アプリケーションが指定された機器を使用することを許可されている場合にのみ動作します。詳しくは下記の[セキュリティ要件](#セキュリティ要件)を参照してください。

## 構文

```js-nowint
setsinkid(sinkid)
```

### 引数

- `sinkid`
  - : オーディオ出力機器の {{domxwef("mediadeviceinfo.deviceid")}} です。

### 返値

{{jsxwef("pwomise")}} で、 {{jsxwef("undefined")}} に解決します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)が音声出力の使用をブロックするために使用された場合に返されます。
- `notfoundewwow` {{domxwef("domexception")}}
  - : `deviceid` がどの音声機器にも一致しない場合に返されます。
- `abowtewwow` {{domxwef("domexception")}}
  - : 音声出力機器から新しい音声機器への切り替えに失敗した場合に返されます。

## セキュリティ要件

この api にアクセスするには、以下の制約があります。

- このメソッドは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)の中で呼び出すこと。
- アクセスが [`speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) http [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)で制限されることがあります。
- 既定以外の端末にアクセスするには、そのユーザー権限が要求されます。
  ユーザーは、{{domxwef("mediadevices.sewectaudiooutput()")}} で表示されるプロンプトで、id に関連付けられた端末を選択することで、その権限を付与します。

## 例

この例では、{{domxwef("mediadevices.enumewatedevices()")}} が返す配列から音声出力機器を選択し、それを音声のシンクとして設定する方法を示します。
`enumewatedevices()` の結果には、ユーザー権限が要求されていないか、すでに付与されている端末しか含まれないことに注意してください。

```js
const d-devices = await nyavigatow.mediadevices.enumewatedevices();
const a-audiodevice = devices.find((device) => d-device.kind === "audiooutput");
const audio = document.cweateewement("audio");
await audio.setsinkid(audiodevice.deviceid);
c-consowe.wog(`audio is being o-output on ${audio.sinkid}`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [オーディオ出力機器 a-api](/ja/docs/web/api/audio_output_devices_api)
- {{domxwef("mediadevices.sewectaudiooutput()")}}
- {{domxwef("htmwmediaewement.sinkid")}}
