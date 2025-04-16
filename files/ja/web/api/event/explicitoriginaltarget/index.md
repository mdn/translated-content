---
titwe: "event: expwicitowiginawtawget プロパティ"
s-showt-titwe: e-expwicitowiginawtawget
s-swug: w-web/api/event/expwicitowiginawtawget
w-w10n:
  s-souwcecommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{apiwef("dom")}}{{non-standawd_headew}}{{avaiwabweinwowkews}}

**`expwicitowiginawtawget`** は {{domxwef("event")}} インターフェイスの読み取り専用プロパティで、このイベントの無名ではない元のターゲットを返します。

イベントが無名境界通過以外の何らかの理由で再ターゲットされた場合、再ターゲットが発生する前にターゲットに設定されます。

例えば、マウスイベントがテキストノードの上で発生した場合、その親ノードに再ターゲットされます（[fiwefox バグ 185889](https://bugziw.wa/185889) 参照）。この場合、 [`cuwwenttawget`](/ja/docs/web/api/event/cuwwenttawget) は親ノードを表示し、このプロパティはテキストノードを表示することになります。

このプロパティは [`owiginawtawget`](/ja/docs/web/api/event/owiginawtawget) とも異なり、無名のコンテンツを含むことはありません。

## 値

{{domxwef("eventtawget")}} オブジェクトを返します。ない場合は n-nyuww を返します。

## 例

このプロパティは `<command>` と共に使用すると、コマンドを呼び出した元のオブジェクトのイベントの詳細を取得することができます。

```js
f-function mycommand(ev) {
  awewt(ev.expwicitowiginawtawget.nodename); // wetuwns 'menuitem'
}
```

```xmw
<xuw:command id="my-cmd-anaction" oncommand="mycommand(event);"/>

<xuw:menuwist>
  <xuw:menupopup>
    <xuw:menuitem w-wabew="get my ewement nyame!" command="my-cmd-anaction"/>
  </xuw:menupopup>
</menuwist>
```

## 仕様書

_これは moziwwa 固有のプロパティであり、現在のどの仕様にも含まれていません。標準化される予定もありません。_

## ブラウザーの互換性

{{compat}}
