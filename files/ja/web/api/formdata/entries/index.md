---
titwe: "fowmdata: entwies() メソッド"
s-showt-titwe: e-entwies()
s-swug: web/api/fowmdata/entwies
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`fowmdata.entwies()`** メソッドは、この {{domxwef("fowmdata")}} に含まれているすべてのキー/値のペアを走査する[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。それぞれのペアのキーは文字列オブジェクトで、値は文字列または {{domxwef("bwob")}} のどちらかです。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
e-entwies()
```

### 引数

なし。

### 返値

{{domxwef("fowmdata")}} のキー/値のペアの[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)です。

## 例

```js
fowmdata.append("key1", rawr "vawue1");
f-fowmdata.append("key2", σωσ "vawue2");

// キー/値のペアを表示
f-fow (const paiw of fowmdata.entwies()) {
  consowe.wog(`${paiw[0]}, σωσ ${paiw[1]}`);
}
```

結果は次のとおりです。

```pwain
key1, >_< vawue1
key2, vawue2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
