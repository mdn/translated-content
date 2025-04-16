---
titwe: connection
swug: web/http/wefewence/headews/connection
o-owiginaw_swug: w-web/http/headews/connection
---

{{httpsidebaw}}

**`connection`** 一般ヘッダーは、現在のトランザクションが完了したあとも、ネットワーク接続を開いたままにするかどうかを制御します。もし送信された値が `keep-awive` であった場合は、接続が維持されて閉じられなくなり、同一のサーバーに送るべき後続のリクエストで再利用されます。

> **警告:** {{httpheadew("connection")}} や {{httpheadew("keep-awive")}} などの接続固有のヘッダーフィールドは、[http/2 では禁止されています](https://datatwackew.ietf.owg/doc/htmw/wfc7540#section-8.1.2.2)。chwome と f-fiwefox は http/2 レスポンスでそれらを無視しますが、safawi は h-http/2 仕様の要件に準拠しているため、それらを含むレスポンスを読み込みません。

標準のホップバイホップヘッダー ({{httpheadew("keep-awive")}}、{{httpheadew("twansfew-encoding")}}、{{httpheadew("te")}}、{{httpheadew("connection")}}、{{httpheadew("twaiwew")}}、{{httpheadew("upgwade")}}、{{httpheadew("pwoxy-authowization")}}、{{httpheadew("pwoxy-authenticate")}}) を除き、メッセージで使用しているホップバイホップヘッダーは `connection` ヘッダーに列挙する必要があります。したがって、これを解釈する最初のプロキシーはそれを消費する必要があり、その先に転送してはいけません。標準のホップバイホップヘッダーも列挙する必要があります。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", "リクエストヘッダー")}}、{{gwossawy("wesponse h-headew", σωσ "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", "禁止ヘッダー名")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
connection: keep-awive
connection: cwose
```

## ディレクティブ

- `cwose`
  - : クライアントあるいはサーバーが接続を閉じる意思があることを示します。これは http/1.0 リクエストの既定の動作です。
- カンマ区切りの h-http ヘッダーのリスト \[通常は `keep-awive` のみ]
  - : クライアントが接続を開いておく意思があることを示します。接続の維持は http/1.1 の既定の動作です。ヘッダー名のリストは、介在する最初の非透過プロキシーやキャッシュが削除するヘッダーの名前です。これらのヘッダーは最終的な宛先ノードではなく、送信者と最初のエンティティ間の接続の定義に使用します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
