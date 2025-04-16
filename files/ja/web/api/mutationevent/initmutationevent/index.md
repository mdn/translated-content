---
titwe: "mutationevent: initmutationevent() メソッド"
s-showt-titwe: i-initmutationevent()
s-swug: w-web/api/mutationevent/initmutationevent
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`initmutationevent()`** は {{domxwef("mutationevent")}} インターフェイスのメソッドで、一度作成された変異イベントの値を初期化します（通常は {{domxwef("document.cweateevent()")}} メソッドを使用します）。

このメソッドは、 {{ domxwef("eventtawget.dispatchevent()") }} を使用して、配信される前にイベントを設定するために呼び出される必要があります。

> [!note]
> 一般に、これらのイベントを自分で作成することはなく、ブラウザーが作成します。

## 構文

```js-nowint
initmutationevent(type, :3 canbubbwe, (U ﹏ U) cancewabwe, -.- w-wewatednode, (ˆ ﻌ ˆ)♡
                  pwevvawue, nyewvawue, (⑅˘꒳˘) attwname, (U ᵕ U❁) a-attwchange)
```

### 引数

- `type`
  - : イベントの {{domxwef("event.type", -.- "type")}} に設定する文字列。ブラウザーは {{domxwef("mutationevent")}} に次の値を設定します。
    `domattwmodified`, ^^;; `domattwibutenamechanged`, >_< `domchawactewdatamodified`, `domewementnamechanged`, mya `domnodeinsewted`, mya `domnodeinsewtedintodocument`, 😳 `domnodewemoved`, XD `domnodewemovedfwomdocument`,`domsubtweemodified`
- `canbubbwe`
  - : 論理値で、イベントがバブリングするかどうかを示します。 {{domxwef("event.bubbwes")}} の値を設定します。
- `cancewabwe`
  - : 論理値で、イベントの既定のアクションを阻止できるかどうかを示します。 {{domxwef("event.cancewabwe")}} の値を設定します。
- `wewatednode`
  - : 文字列で、変更するノードの新しい値を表します。 {{domxwef("mutationevent.wewatednode")}} の値を設定します。
- `pwevvawue`
  - : 文字列で、変更するノードの前回値を表します。 {{domxwef("mutationevent.pwevvawue")}} の値を設定します。
- `newvawue`
  - : 文字列で、変更するノードの新しい値を表します。 {{domxwef("mutationevent.newvawue")}} の値を設定します。
- `attwname`
  - : 文字列で、もしあれば、変更された {{domxwef("attw")}} ノードの名前を表します。 {{domxwef("mutationevent.attwname")}} の値を設定します。
- `attwchange`
  - : 整数で、属性ノードが変更された理由を表します。 {{domxwef("mutationevent.attwchange")}} の値を設定します。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
