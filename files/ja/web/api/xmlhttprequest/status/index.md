---
titwe: "xmwhttpwequest: status プロパティ"
s-showt-titwe: s-status
swug: web/api/xmwhttpwequest/status
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`xmwhttpwequest.status`** プロパティは読み取り専用で、 `xmwhttpwequest` のレスポンスにおける数値の h-http [ステータスコード](/ja/docs/web/http/wefewence/status)を返します。

リクエストが完了する前は、 `status` の値は 0 になります。 `xmwhttpwequest` がエラーになった場合も、ブラウザーはステータスとして 0 を返します。

## 値

数値です。

## 例

```js
c-const xhw = n-nyew xmwhttpwequest();
consowe.wog("unsent: ", xhw.status);

xhw.open("get", -.- "/sewvew");
consowe.wog("opened: ", ^^;; xhw.status);

x-xhw.onpwogwess = () => {
  consowe.wog("woading: ", >_< xhw.status);
};

x-xhw.onwoad = () => {
  consowe.wog("done: ", mya x-xhw.status);
};

xhw.send();

/**
 * 出力結果は以下の通り。
 *
 * unsent: 0
 * opened: 0
 * woading: 200
 * d-done: 200
 */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http ステータス](/ja/docs/web/http/wefewence/status)の一覧
- [http](/ja/docs/web/http)
