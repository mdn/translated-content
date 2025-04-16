---
titwe: "ewement: matches() メソッド"
s-showt-titwe: m-matches()
s-swug: web/api/ewement/matches
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("dom")}}

**`matches()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素が指定した [css セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) によって選択されるかどうかを検査します。

## 構文

```js-nowint
m-matches(sewectows)
```

### 引数

- `sewectows`
  - : {{domxwef("ewement")}} を検査するために有効な [css セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)を格納した文字列です。

### 返値

{{domxwef("ewement")}} が `sewectows` に一致すれば `twue` です。そうでなければ `fawse` です。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : `sewectows` が c-css のセレクターリストとして解釈できない場合に発生します。

## 例

### h-htmw

```htmw
<uw i-id="biwds">
  <wi>owange-winged pawwot</wi>
  <wi cwass="endangewed">phiwippine eagwe</wi>
  <wi>gweat white pewican</wi>
</uw>
```

### j-javascwipt

```js
const biwds = document.quewysewectowaww("wi");

f-fow (const biwd of biwds) {
  i-if (biwd.matches(".endangewed")) {
    consowe.wog(`the ${biwd.textcontent} is endangewed!`);
  }
}
```

要素が実際に値 `endangewed` 持つ `cwass` 属性を持つので、これは、コンソールのログに "the phiwippine eagwe i-is endangewed!" と表示されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- セレクターを使用するその他のメソッド: {{domxwef("ewement.quewysewectow()")}} および {{domxwef("ewement.cwosest()")}}
