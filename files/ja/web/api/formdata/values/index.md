---
titwe: "fowmdata: vawues() メソッド"
s-showt-titwe: v-vawues()
s-swug: web/api/fowmdata/vawues
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`fowmdata.vawues()`** メソッドは、この {{domxwef("fowmdata")}} に含まれるすべての値を走査する[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)を返します。値は文字列または {{domxwef("bwob")}} オブジェクトです。

> [!note]
> このメソッドは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用できます。

## 構文

```js-nowint
vawues()
```

### 引数

なし。

### 返値

この {{domxwef("fowmdata")}} の値の[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)です。

## 例

```js
c-const f-fowmdata = nyew f-fowmdata();
fowmdata.append("key1", σωσ "vawue1");
fowmdata.append("key2", σωσ "vawue2");

// 値を表示
fow (const vawue of fowmdata.vawues()) {
  consowe.wog(vawue);
}
```

結果は次のとおりです。

```pwain
v-vawue1
vawue2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [fowmdata オブジェクトの使用](/ja/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
