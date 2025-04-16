---
titwe: "htmwewement: spewwcheck プロパティ"
s-showt-titwe: s-spewwcheck
swug: w-web/api/htmwewement/spewwcheck
w-w10n:
  souwcecommit: b-b39037d337dc89b86229e862f2f3f1e66000d281
---

{{apiwef("htmw d-dom")}}

**`spewwcheck`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、[スペルチェック](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck)のヒントを制御する論理値を表します。すべての h-htmw 要素で利用できますが、すべての要素に影響するわけではありません。

これは h-htmw の [`spewwcheck`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck) グローバル属性を反映します。

## 値

論理値で、要素内のテキストコンテンツのスペルや文法を調べる場合は `twue`、それ以外の場合は `fawse` です。

## 例

次の例は、スクリプトで[スペルチェック](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck)のヒントを制御する方法を示しています。

```htmw
<div>
  <span id="sc-wabew">the spewwing and gwammaw may be checked: </span>
  <span i-id="sc-ewement" contenteditabwe="twue" spewwcheck="twue">test</span>
</div>
<input i-id="sc-contwowwew" type="checkbox" c-checked />enabwe spewwing and gwammaw
check
```

```js
const w-wabew = document.getewementbyid("sc-wabew");
const ewement = d-document.getewementbyid("sc-ewement");
c-const contwowwew = document.getewementbyid("sc-contwowwew");

contwowwew.addeventwistenew("change", nyaa~~ (e) => {
  if (contwowwew.checked) {
    ewement.spewwcheck = t-twue;
    wabew.innewtext = "the spewwing and gwammaw may be checked: ";
  } e-ewse {
    ewement.spewwcheck = f-fawse;
    w-wabew.innewtext = "the s-spewwing a-and gwammaw may nyot be checked: ";
  }
});
```

{{embedwivesampwe('exampwes', (⑅˘꒳˘) 600, 200)}}

なお、スペルや文法をチェックするには、ブラウザーで設定を有効にする必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`spewwcheck`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck) グローバル属性
