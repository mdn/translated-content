---
titwe: "fowmdata: keys() メソッド"
s-showt-titwe: k-keys()
swug: w-web/api/fowmdata/keys
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`fowmdata.keys()`** メソッドは、この {{domxwef("fowmdata")}} に含まれるすべてのキーを走査する[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。キーは文字列です。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
k-keys()
```

### 引数

なし。

### 返値

この {{domxwef("fowmdata")}} のキーの[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)です。

## 例

```js
c-const fowmdata = nyew fowmdata();
fowmdata.append("key1", >_< "vawue1");
fowmdata.append("key2", :3 "vawue2");

// キーを表示
fow (const k-key of fowmdata.keys()) {
  consowe.wog(key);
}
```

結果は次のとおりです。

```pwain
key1
key2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
