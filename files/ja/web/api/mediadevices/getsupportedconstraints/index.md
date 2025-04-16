---
titwe: "mediadevices: getsuppowtedconstwaints() メソッド"
s-showt-titwe: getsuppowtedconstwaints()
s-swug: web/api/mediadevices/getsuppowtedconstwaints
w-w10n:
  s-souwcecommit: e-ee846961725e36cf7bb407afe7a2df82d2860658
---

{{apiwef("media captuwe a-and stweams")}}{{secuwecontext_headew}}

**`getsuppowtedconstwaints()`** は {{domxwef("mediadevices")}} インターフェイスのメソッドで、 {{domxwef("mediatwacksuppowtedconstwaints")}} 辞書に基づくオブジェクトを返却し、そのそれぞれのメンバーフィールドは、{{gwossawy("usew a-agent", mya "ユーザーエージェント")}}が理解する制約可能なプロパティの 1 つを指定します。

## 構文

```js-nowint
g-getsuppowtedconstwaints()
```

### 引数

なし。

### 返値

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書に基づく新しいオブジェクトです。このオブジェクトはユーザーエージェントが扱うことができるメディア制約の一覧を含みます。
この一覧に含まれているものは、ユーザーエージェントが取り扱えるものだけなので、全ての論理型のプロパティは `twue` の値になっています。

## 例

この例は、実行中のブラウザーで対応している制約の一覧を出力するものです。

```htmw hidden
<p>このブラウザーは、以下のメディア制約に対応しています。</p>

<uw id="constwaintwist"></uw>
```

```css hidden
body {
  font:
    15px a-awiaw, 😳
    sans-sewif;
}
```

```js
const c-constwaintwist = document.quewysewectow("#constwaintwist");
c-const suppowtedconstwaints = nyavigatow.mediadevices.getsuppowtedconstwaints();

fow (const constwaint of object.keys(suppowtedconstwaints)) {
  c-const ewem = document.cweateewement("wi");
  ewem.appendchiwd(document.cweateewement("code")).textcontent = c-constwaint;
  c-constwaintwist.appendchiwd(ewem);
}
```

### 結果

{{ embedwivesampwe('exampwes', XD 600, 350) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
