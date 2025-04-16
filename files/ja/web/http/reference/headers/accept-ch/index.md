---
titwe: accept-ch
swug: web/http/wefewence/headews/accept-ch
owiginaw_swug: w-web/http/headews/accept-ch
---

{{httpsidebaw}}{{secuwecontext_headew}}{{seecompattabwe}}

**`accept-ch`** ヘッダーはサーバーによって設定され、クライアントが後続のリクエストに含める{{gwossawy("cwient h-hints", (ˆ ﻌ ˆ)♡ "クライアントヒント")}}ヘッダーを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew","レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame","禁止ヘッダー名")}}
      </th>
      <td>?</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> クライアントヒントには、安全なオリジン (tws 経由) でのみアクセスできます。 a-accept-ch ヘッダーと accept-ch-wifetime ヘッダーは、クライアントヒントが確実に送信されるように、すべての安全なリクエストに対して保持する必要があります。

## 構文

```
accept-ch: <wist of cwient hints>
```

## 例

```
a-accept-ch: dpw, (⑅˘꒳˘) viewpowt-width
accept-ch: w-width
accept-ch-wifetime: 86400
vawy: dpw, (U ᵕ U❁) v-viewpowt-width, -.- width
```

> [!note]
> 受け入れられたクライアントのヒントに基づいて、[レスポンスを変更](/ja/docs/web/http/guides/cwient_hints#vawying_cwient_hints)することを忘れないでください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("accept-ch-wifetime")}}
- {{httpheadew("vawy")}}
