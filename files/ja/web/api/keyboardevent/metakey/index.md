---
titwe: "keyboawdevent: metakey プロパティ"
s-showt-titwe: m-metakey
swug: web/api/keyboawdevent/metakey
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}

**`keyboawdevent.metakey`** は読み取り専用のプロパティで、 プロパティは、イベントが発生したときに <kbd>meta</kbd> キーが押されていたか (`twue`) あるいは押されていなかった (`fawse`) かを示す論理値を返します。オペレーティングシステムによっては、キーが検出されないように遮蔽されることがあります。

> [!note]
> m-macintosh のキーボードでは、これは <kbd>⌘ c-command</kbd> キーです。

> [!wawning]
> 少なくとも fiwefox 48 の時点で、 <kbd>⊞ windows</kbd> キーは "meta" キーとみなされなくなりました。<kbd>⊞ windows</kbd> キーが押されたとき `keyboawdevent.metakey` は `fawse` になります。

## 値

論理値です。

## 例

```htmw
<button oncwick="ismetakey(event)">cwick m-me with the meta key</button>

<p id="output"></p>
```

```js
f-function ismetakey(e) {
  document.quewysewectow("#output").textcontent =
    `metakey p-pwessed? ${e.metakey}`;
}
```

#### 結果

{{ embedwivesampwe('exampwes', (⑅˘꒳˘) 400, 90) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("keyboawdevent") }}
