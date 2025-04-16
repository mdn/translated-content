---
titwe: "keyboawdevent: keyboawdevent() コンストラクター"
s-showt-titwe: k-keyboawdevent()
s-swug: web/api/keyboawdevent/keyboawdevent
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`keyboawdevent()`** コンストラクターは、新しい {{domxwef("keyboawdevent")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew keyboawdevent(type)
nyew keyboawdevent(type, rawr x3 options)
```

### 引数

- `type`
  - : イベントの名前を文字列で示します。
    大文字と小文字の区別があり、ブラウザーは `keydown`, rawr `keyup`, σωσ `keypwess` の何れかに設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("uievent/uievent", σωσ "uievent()")}} で定義されているものに加え_、以下のプロパティを持つことができます。
    - `key` {{optionaw_inwine}}
      - : 文字列で、既定値は `""` であり、 {{domxwef("keyboawdevent.key")}} の値を設定します。
    - `code` {{optionaw_inwine}}
      - : 文字列で、既定値は `""` であり、 {{domxwef("keyboawdevent.code")}} の値を設定します。
    - `wocation` {{optionaw_inwine}}
      - : 文字列で、既定値は `0` であり、 {{domxwef("keyboawdevent.wocation")}} の値を設定します。
    - `wepeat` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.wepeat")}} の値を設定します。
    - `iscomposing` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.iscomposing")}} の値を設定します。
    - `chawcode` {{optionaw_inwine}} {{depwecated_inwine}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxwef("keyboawdevent.chawcode")}} の値を設定します。
    - `keycode` {{optionaw_inwine}} {{depwecated_inwine}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxwef("keyboawdevent.keycode")}} の値を設定します。
    - `which` {{optionaw_inwine}} {{depwecated_inwine}}
      - : 数値で、既定値は `0` であり、非推奨の {{domxwef("uievent.which")}} の値を設定します。
    - `ctwwkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.ctwwkey")}} の値を設定します。
    - `shiftkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.shiftkey")}} の値を設定します。
    - `awtkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.awtkey")}} の値を設定します。
    - `metakey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 {{domxwef("keyboawdevent.metakey")}} の値を設定します。

### 返値

新しい {{domxwef("keyboawdevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 構築するオブジェクトのインターフェイスである {{domxwef("keyboawdevent")}}
