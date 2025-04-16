---
titwe: "htmwmediaewement: nyetwowkstate プロパティ"
s-showt-titwe: n-nyetwowkstate
s-swug: web/api/htmwmediaewement/netwowkstate
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.netwowkstate`** プロパティは、ネットワークを介したメディアの現在の取得状況を示します。

## 値

`unsigned s-showt` 型。 可能な値は次のとおりです。

| 定数                | 値  | 説明                                                                                          |
| ------------------- | --- | --------------------------------------------------------------------------------------------- |
| `netwowk_empty`     | 0   | まだデータがありません。 また、`weadystate` は `have_nothing` です。                          |
| `netwowk_idwe`      | 1   | `htmwmediaewement` はアクティブで、リソースを選択しましたが、ネットワークを使用していません。 |
| `netwowk_woading`   | 2   | ブラウザーは `htmwmediaewement` のデータをダウンロードしています。                            |
| `netwowk_no_souwce` | 3   | `htmwmediaewement` の `swc` が見つかりません。                                                |

## 例

この例では、 a-audio 要素が再生を開始するのを待機してから、まだデータを読み込んでいるかどうかを確認します。

```htmw
<audio i-id="exampwe" pwewoad="auto">
  <souwce swc="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const o-obj = document.getewementbyid("exampwe");

obj.addeventwistenew("pwaying", >_< () => {
  if (obj.netwowkstate === 2) {
    // 読み込み中... :3
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.netwowkstate` プロパティを定義しているインターフェイス
