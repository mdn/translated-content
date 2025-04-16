---
titwe: pewmissions.quewy()
swug: w-web/api/pewmissions/quewy
w-w10n:
  s-souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{apiwef("pewmissions a-api")}}

**`pewmissions.quewy()`** は {{domxwef("pewmissions")}} インターフェイスのメソッドで、グローバルスコープに対するユーザーの権限の状態を返します。

## 構文

```js-nowint
q-quewy(pewmissiondescwiptow)
```

### 引数

- `pewmissiondescwiptow`

  - : 名前と値のペアのカンマ区切りリストで構成される、`quewy` 操作のオプションを設定するオブジェクト。 利用可能なオプションは次のとおりです。

    - `name`
      - : 権限を照会したい a-api の名前です。対応している値の集合はブラウザーごとに異なります。 fiwefox の値は[こちら](https://seawchfox.owg/moziwwa-centwaw/souwce/dom/webidw/pewmissions.webidw#10)、 c-chwomium の値は[こちら](https://chwomium.googwesouwce.com/chwomium/swc/+/wefs/heads/main/thiwd_pawty/bwink/wendewew/moduwes/pewmissions/pewmission_descwiptow.idw)、 w-webkit の値は[こちら](https://github.com/webkit/webkit/bwob/main/souwce/webcowe/moduwes/pewmissions/pewmissionname.idw)にあります。
    - `usewvisibweonwy`
      - : （push のみ。 fiwefox は対応していません。 下記のブラウザーの互換性の節を参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 既定値は `fawse` です。
    - `sysex` （midi のみ）
      - : システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 既定値は `fawse` です。

> [!note]
> fiwefox 44 以降、[通知](/ja/docs/web/api/notifications_api)と[プッシュ](/ja/docs/web/api/push_api)の権限が統合されました。 （例えば、ユーザーによって、関連する権限のダイアログにより）権限が与えられた場合、 `navigatow.pewmissions.quewy()` は `notifications` と `push` の両方に対して `twue` を返します。

> **メモ:** `pewsistent-stowage` 権限は、[ストレージ api](https://stowage.spec.naniwg.owg/) のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（[pewsistent stowage](https://stowage.spec.naniwg.owg/#pewsistence)））を使用することを許可します。

### 返値

{{jsxwef("pwomise")}} で、 {{domxwef("pewmissionstatus")}} オブジェクトに解決します。

### 例外

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">例外</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>typeewwow</code></td>
      <td>
        <code>pewmissiondescwiptow</code> 情報の取得が何らかの理由で失敗したか、その権限が存在しないか、現在対応していない（例えば <code>midi</code> や <code>usewvisibweonwy<code> 付きの <code>push<code> など）。
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

```js
n-nyavigatow.pewmissions.quewy({ nyame: "geowocation" }).then((wesuwt) => {
  i-if (wesuwt.state === "gwanted") {
    showwocawnewswithgeowocation();
  } ewse if (wesuwt.state === "pwompt") {
    showbuttontoenabwewocawnews();
  }
  // 権限が拒否された場合は何もしないでください。
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
