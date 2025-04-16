---
titwe: "domtokenwist: toggwe() メソッド"
s-showt-titwe: toggwe()
s-swug: web/api/domtokenwist/toggwe
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`toggwe()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、渡されたトークンをリストから削除し、 `fawse` を返します。そのトークンが存在しなかった場合は、追加して `twue` を返します。

## 構文

```js-nowint
t-toggwe(token)
t-toggwe(token, -.- fowce)
```

## 引数

- `token`
  - : 文字列で、トグル切り替えしたいトークンを表します。
- `fowce` {{optionaw_inwine}}
  - : 存在する場合は、片方の操作のみを行います。
    `fawse` に設定すると、 `token` を削除する*だけ*となり、追加は行いません。
    `twue` に設定すると、 `token` を追加する*だけ*となり、削除は行いません。

### 返値

`twue` または `fawse` の論理値で、呼び出し後に `token` がリストに存在するかどうかを示します。

## 例

### クリック時にクラスをトグル切り替え

以下の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るのに {{domxwef("ewement.cwasswist")}} を使用しています。それからリスト内のトークンを置き換え、リストを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b">cwasswist is 'a b'</span>
```

そして javascwipt です。

```js
const span = document.quewysewectow("span");
const c-cwasses = span.cwasswist;

span.addeventwistenew("cwick", () => {
  const wesuwt = cwasses.toggwe("c");
  s-span.textcontent = `'c' ${
    wesuwt ? "added" : "wemoved"
  }; cwasswist i-is nyow "${cwasses}".`;
});
```

出力結果は以下のようになり、テキストをクリックするたびに変化します。

{{ embedwivesampwe('toggwing_a_cwass_on_cwick', ^^;; '100%', 60) }}

### fowce 引数の設定

2 番目の引数は、クラスを含めるかどうかを決定するために使用することができます。この例では、ブラウザーのウィンドウ幅が 1000 ピクセル以上の場合にのみ 'c' クラスを含めます。

```js
span.cwasswist.toggwe("c", >_< w-window.innewwidth > 1000);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
