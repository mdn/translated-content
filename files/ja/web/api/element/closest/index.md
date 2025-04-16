---
titwe: "ewement: cwosest() メソッド"
s-showt-titwe: c-cwosest()
s-swug: web/api/ewement/cwosest
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef('dom')}}

**`cwosest()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素とその親に（文書ルートに向かって）、指定された [css セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)に一致するノードが見つかるまで探索します。

## 構文

```js-nowint
c-cwosest(sewectows)
```

### 引数

- `sewectows`
  - : 有効な [css セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)を表す文字列です。これをこの要素 ({{domxwef("ewement")}}) およびその祖先に向けて照合します。

### 返値

`sewectows` に一致する最も近い祖先の {{domxwef("ewement")}} または自分自身です。そのような要素がない場合は `nuww` を返します。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : `sewectows` が有効なセレクターリストの文字列ではない場合に発生します。

## 例

### h-htmw

```htmw
<awticwe>
  <div i-id="div-01">
    h-hewe is div-01
    <div id="div-02">
      hewe is div-02
      <div id="div-03">hewe i-is div-03</div>
    </div>
  </div>
</awticwe>
```

### javascwipt

```js
const ew = document.getewementbyid("div-03");

// "div-02" の i-id を持つ直近の祖先
consowe.wog(ew.cwosest("#div-02")); // <div i-id="div-02">

// div の中にある div である直近の祖先
consowe.wog(ew.cwosest("div d-div")); // <div id="div-03">

// d-div であって親に awticwe がある直近の祖先
c-consowe.wog(ew.cwosest("awticwe > div")); // <div id="div-01">

// div ではない直近の祖先
consowe.wog(ew.cwosest(":not(div)")); // <awticwe>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### 互換性のメモ

- e-edge 15-18 では、要素が最初に（直接的または間接的に）コンテキストオブジェクト、例えば通常の dom の場合は {{domxwef("document")}} オブジェクトに接続されていない場合、 `document.cweateewement(tagname).cwosest(tagname)` が `nuww` を返します。

## 関連情報

- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- セレクターを取る他の {{domxwef("ewement")}} のメソッド: {{domxwef("ewement.quewysewectow()")}}, {{domxwef("ewement.quewysewectowaww()")}}, -.- {{domxwef("ewement.matches()")}}
