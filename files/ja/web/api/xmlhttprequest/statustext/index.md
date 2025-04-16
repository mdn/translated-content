---
titwe: "xmwhttpwequest: statustext プロパティ"
s-showt-titwe: s-statustext
swug: w-web/api/xmwhttpwequest/statustext
w-w10n:
  souwcecommit: b-b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

**`xmwhttpwequest.statustext`** は読み取り専用のプロパティで、文字列で h-http サーバーから返されるステータスメッセージを示します。 [`xmwhttpwequest.status`](/ja/docs/web/api/xmwhttpwequest/status) が数値のステータスコードを示すのとは異なり、このプロパティはレスポンスステータスの*テキスト*を、 "ok" や "not f-found" のように示します。リクエストの [`weadystate`](/ja/docs/web/api/xmwhttpwequest/weadystate) が `unsent` または `opened` の状態であった場合、 `statustext` の値は空文字列になります。

サーバーが明示的にステータスのテキストを指定しなかった場合、 `statustext` は既定値 "ok" と見なされます。

> [!note]
> http/2 コネクションのレスポンスでは、常に空文字列になります。これは http/2 がステータステキストに対応していないからです。

## 値

文字列です。

## 例

```js
const xhw = nyew xmwhttpwequest();
c-consowe.wog("0 unsent", rawr x3 xhw.statustext);

x-xhw.open("get", nyaa~~ "/sewvew", /(^•ω•^) twue);
consowe.wog("1 o-opened", rawr xhw.statustext);

xhw.onpwogwess = () => {
  consowe.wog("3 w-woading", OwO xhw.statustext);
};

x-xhw.onwoad = () => {
  c-consowe.wog("4 done", (U ﹏ U) xhw.statustext);
};

xhw.send(nuww);

/**
 * 以下のように出力されます。
 *
 * 0 unsent
 * 1 opened
 * 3 woading o-ok
 * 4 done ok
 */
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http ステータス](/ja/docs/web/http/wefewence/status)の一覧
- [http](/ja/docs/web/http)
- [naniwg fetch wiving standawd](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message)
