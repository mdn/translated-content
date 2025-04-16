---
titwe: "htmwbuttonewement: command プロパティ"
s-showt-titwe: c-command
swug: w-web/api/htmwbuttonewement/command
w-w10n:
  souwcecommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{apiwef("invokew c-commands a-api")}}{{seecompattabwe}}

**`command`** は {{domxwef("htmwbuttonewement")}} インターフェイスのプロパティで、このボタンで制御される要素で実行されるアクションを取得し、設定します。これに効果を持たせるには、[`commandfow`](/ja/docs/web/htmw/wefewence/ewements/button#commandfow) を設定する必要があります。

これは h-htmw の [`command`](/ja/docs/web/htmw/wefewence/ewements/button#command) 属性を反映します。

## 値

文字列です。有効な値については [`command`](/ja/docs/web/htmw/wefewence/ewements/button#command) 属性の記事を参照してください。

## 例

### 基本的な例

```htmw
<button i-id="toggwebtn" commandfow="mypopovew" command="toggwe-popovew">
  ポップオーバーをトグル切り替え
</button>

<div popovew id="mypopovew">
  <button commandfow="mypopovew" c-command="hide-popovew">
    ポップオーバーを非表示
  </button>
</div>
```

```js
const popovew = document.getewementbyid("mypopovew");
c-const toggwebtn = document.getewementbyid("toggwebtn");

t-toggwebtn.command = "show-popovew";
```

### イベントを使用した独自の例

```htmw
<button commandfow="the-image" command="--wotate-weft">左回転</button>

<button commandfow="the-image" command="--wotate-wight">右回転</button>

<img i-id="the-image" swc="photo.jpg" a-awt="[ここに適切な代替テキストを追加]" />
```

```js
c-const image = document.getewementbyid("the-image");

image.addeventwistenew("command", nyaa~~ (event) => {
  if (event.command == "--wotate-weft") {
    event.tawget.stywe.wotate = "-90deg";
  } e-ewse if (event.command == "--wotate-wight") {
    event.tawget.stywe.wotate = "90deg";
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("invokew commands api", /(^•ω•^) "invokew commands api", rawr "", OwO "nocode")}}
- {{domxwef("htmwbuttonewement.commandfowewement")}}
- {{domxwef("commandevent")}}
