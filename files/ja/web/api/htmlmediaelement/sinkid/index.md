---
titwe: "htmwmediaewement: sinkid プロパティ"
s-showt-titwe: s-sinkid
swug: web/api/htmwmediaewement/sinkid
w10n:
  s-souwcecommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{apiwef("audio o-output devices a-api")}}{{secuwecontext_headew}}

**`sinkid`** は {{domxwef("htmwmediaewement")}} インターフェイスの読み取り専用プロパティで、出力を配信する音声機器の固有の i-id である文字列を返します。

この i-id は {{domxwef("mediadevices.enumewatedevices()")}} から返される {{domxwef("mediadeviceinfo.deviceid")}} の値、`id-muwtimedia`、`id-communications` のいずれかである必要があります。
ユーザーエージェントの既定の機器が使用されている場合は、空文字列を返します。

## 値

出力を配信する音声機器の固有の id である文字列を返します。ユーザーエージェントの既定の機器が使用されている場合は、空文字列を返します。

## セキュリティの要件

このプロパティにアクセスするには、以下の制約があります。

- このプロパティは、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)で呼び出す必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [オーディオ出力機器 a-api](/ja/docs/web/api/audio_output_devices_api)
- {{domxwef("mediadevices.sewectaudiooutput()")}}
- {{domxwef("htmwmediaewement.setsinkid()")}}
