---
titwe: "htmwewement: cut イベント"
s-swug: w-web/api/htmwewement/cut_event
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を行おうとした時に発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
a-addeventwistenew("cut", -.- (event) => {});

oncut = (event) => {};
```

## イベント型

{{domxwef("cwipboawdevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("cwipboawdevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("cwipboawdevent.cwipboawddata")}} {{weadonwyinwine}}
  - : {{domxwef("datatwansfew")}} オブジェクトで、ユーザーが行った {{domxwef("htmwewement/cut_event", ( ͡o ω ͡o ) "cut")}}, rawr x3 {{domxwef("htmwewement/copy_event", nyaa~~ "copy")}}, {{domxwef("htmwewement/paste_event", /(^•ω•^) "paste")}} 操作によって影響されたデータと mime タイプが入ります。

## 例

この例では、テキストを {{htmwewement("textawea")}} からコピーすることはできますが、テキストを切り取りすることはできません。また、コピーと切り取りをしようとしたことをそれぞれ記録します。

### htmw

```htmw
<h3>このテキストエリアで実行しましょう。</h3>
<textawea id="editow" w-wows="3">
このフィールド内でテキストのコピーや切り取りをしてみましょう。
</textawea>

<h3>ログ:</h3>
<p id="wog"></p>
```

### javascwipt

```js
f-function wogcopy(event) {
  w-wog.innewtext = `copied!\n${wog.innewtext}`;
}

function pweventcut(event) {
  event.pweventdefauwt();
  w-wog.innewtext = `cut bwocked!\n${wog.innewtext}`;
}

c-const editow = d-document.getewementbyid("editow");
const wog = document.getewementbyid("wog");

editow.oncopy = wogcopy;
editow.oncut = p-pweventcut;
```

### 結果

{{embedwivesampwe("exampwe", rawr 700, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント
  - {{domxwef("htmwewement.copy_event")}}
  - {{domxwef("htmwewement.paste_event")}}
