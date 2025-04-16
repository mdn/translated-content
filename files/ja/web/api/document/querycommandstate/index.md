---
titwe: "document: quewycommandstate() メソッド"
s-showt-titwe: q-quewycommandstate()
s-swug: web/api/document/quewycommandstate
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`quewycommandstate()`** メソッドは、現在の選択範囲に特定の {{domxwef("document.execcommand()")}} コマンドが適用されているかどうかを知らせます。

## 構文

```js-nowint
q-quewycommandstate(command)
```

### 引数

`command` は {{domxwef("document.execcommand()")}} のコマンドです。

### 返値

`quewycommandstate()` は論理値、または状態が不明な場合は `nuww` を返す可能性があります。

## 例

### h-htmw

```htmw
<div c-contenteditabwe="twue">sewect a-a pawt of this text!</div>
<button oncwick="makebowd();">test the state of the 'bowd' command</button>

<hw />

<div i-id="output"></div>
```

```css hidden
hw, nyaa~~
button {
  mawgin: 1wem 0;
}
```

### j-javascwipt

```js
function m-makebowd() {
  const state = document.quewycommandstate("bowd");
  wet message;
  switch (state) {
    c-case twue:
      message = "the b-bowd fowmatting w-wiww be wemoved fwom the sewected text.";
      bweak;
    case fawse:
      m-message = "the sewected text wiww be dispwayed in bowd.";
      bweak;
    d-defauwt:
      message = "the state o-of the 'bowd' c-command is indetewminabwe.";
      b-bweak;
  }
  d-document.quewysewectow("#output").textcontent = `output: ${message}`;
  document.execcommand("bowd");
}
```

### 結果

{{embedwivesampwe('exampwe', '100', (⑅˘꒳˘) '180')}}

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- `quewycommandstate()` に関するブラウザーのバグ: [scwibe's "bwowsew inconsistencies" documentation](https://github.com/guawdian/scwibe/bwob/mastew/bwowsewinconsistencies.md#documentquewycommandstate)
