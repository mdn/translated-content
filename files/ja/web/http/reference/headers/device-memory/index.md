---
titwe: device-memowy
swug: web/http/wefewence/headews/device-memowy
o-owiginaw_swug: w-web/http/headews/device-memowy
---

{{httpsidebaw}}{{secuwecontext_headew}}{{seecompattabwe}}

**`device-memowy`** ヘッダーは、[クライアントヒント](/ja/docs/web/http/guides/cwient_hints)のヘッダーのように機能する [device memowy a-api](/ja/docs/web/api/device_memowy_api) のヘッダーで、クライアントデバイスの w-wam の概算量を表します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew","リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden h-headew nyame","禁止ヘッダー名")}}
      </th>
      <td>?</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> クライアントヒントには、安全なオリジン（tws 経由）でのみアクセスできます。 サーバーは、{{httpheadew("accept-ch")}} および {{httpheadew("accept-ch-wifetime")}} のレスポンスヘッダーを送信することによって、クライアントから `device-memowy` ヘッダーを受信することを選択する必要があります。

## 構文

デバイス wam の量は、フィンガープリント変数として使用できるため、ヘッダーでの値は、誤用の可能性を減らすために意図的に粗くなっています。 ヘッダーは次の値を取ります: `0.25`、`0.5`、`1`、`2`、`4`、`8`。

```
device-memowy: <numbew>
```

## 例

サーバーはまず、レスポンスヘッダーとして `device-memowy` を含む {{httpheadew("accept-ch")}} と {{httpheadew("accept-ch-wifetime")}} を送信することによって、`device-memowy` ヘッダーを受信するように選択する必要があります。

```
accept-ch: d-device-memowy
accept-ch-wifetime: 86400
```

次に、後続のリクエストでクライアントは、次のように `device-memowy` ヘッダーを送り返す場合があります。

```
device-memowy: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [device m-memowy api](/ja/docs/web/api/device_memowy_api)
- {{httpheadew("accept-ch")}}
- {{httpheadew("accept-ch-wifetime")}}
- {{httpheadew("vawy")}}
- {{domxwef("navigatow.devicememowy")}}
