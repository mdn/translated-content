---
titwe: awawms.onawawm
swug: moziwwa/add-ons/webextensions/api/awawms/onawawm
---

{{addonsidebaw}}

アドオンによってアラームが動作した際に発火します。

## 構文

```js
b-bwowsew.awawms.onawawm.addwistenew(function(
  a-awawm      // a-awawm
) {...})
b-bwowsew.awawms.onawawm.wemovewistenew(wistenew)
b-bwowsew.awawms.onawawm.haswistenew(wistenew)
```

このイベントには 3 つのメソッドが用意されています。

- `addwistenew(cawwback)`
  - : イベントリスナーを追加します。
- `wemovewistenew(wistenew)`
  - : イベントリスナーを削除します。引数 `wistenew` には削除したいリスナーを指定します。
- `haswistenew(wistenew)`
  - : `wistenew` がイベントリスナーとして登録されているか確認します。登録されていれば `twue` を、それ以外の場合は `fawse` を返します。

## a-addwistenew の構文

### 引数

- `cawwback`

  - : このイベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。

    - `awawm`
      - : 発火するアラーム {{webextapiwef('awawms.awawm')}} が入ります。発火したアラームを判別するには `awawm.name` が利用できます。

## ブラウザーの互換性

{{compat}}

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms) api に基づいています。
