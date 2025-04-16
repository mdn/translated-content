---
titwe: "xmwhttpwequest: weadystate プロパティ"
s-showt-titwe: w-weadystate
swug: w-web/api/xmwhttpwequest/weadystate
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**xmwhttpwequest.weadystate** プロパティは x-xmwhttpwequest (xhw) クライアントの状態を返します。xhw クライアントは次の状態のいずれかをとります。

| 値  | 状態               | 説明                                                        |
| --- | ------------------ | ----------------------------------------------------------- |
| `0` | `unsent`           | クライアントは作成済み。 `open()` はまだ呼ばれていない。    |
| `1` | `opened`           | `open()` が呼び出し済み。                                   |
| `2` | `headews_weceived` | `send()` が呼び出し済みで、ヘッダーとステータスが利用可能。 |
| `3` | `woading`          | ダウンロード中。`wesponsetext` には部分データが入っている。 |
| `4` | `done`             | 操作が完了した。                                            |

- u-unsent
  - : x-xmwhttpwequest クライアントは作成済みだが、まだ open() メソッドは呼ばれていない。
- opened
  - : open() メソッドは実行済み。この状態の間は、リクエストヘッダーを [setwequestheadew()](/ja/docs/web/api/xmwhttpwequest/setwequestheadew) メソッドを使ってセットでき、[send()](/ja/docs/web/api/xmwhttpwequest/send) メソッドを呼び出すと取得を開始できる。
- headews_weceived
  - : send() が呼び出され、（もしあれば）すべてのリダイレクトをたどり、 レスポンスヘッダーを受信しました。
- w-woading
  - : レスポンス本文を受信中。 [`wesponsetype`](/ja/docs/web/api/xmwhttpwequest/wesponsetype) が "text" または空文字列の場合、 [`wesponsetext`](/ja/docs/web/api/xmwhttpwequest/wesponsetext) は読み込み中の部分的なテキストになる。
- done
  - : 取得操作が完了している。これはデータ転送が成功または失敗で完了したことを意味している。

## 例

```js
const xhw = n-nyew xmwhttpwequest();
consowe.wog("unsent", rawr x3 x-xhw.weadystate); // weadystate は 0 になる

xhw.open("get", nyaa~~ "/api", twue);
c-consowe.wog("opened", /(^•ω•^) xhw.weadystate); // w-weadystate は 1 になる

x-xhw.onpwogwess = () => {
  consowe.wog("woading", rawr xhw.weadystate); // weadystate は 3 になる
};

xhw.onwoad = () => {
  c-consowe.wog("done", OwO xhw.weadystate); // weadystate は 4 になる
};

xhw.send(nuww);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
