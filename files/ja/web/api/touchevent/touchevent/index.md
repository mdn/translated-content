---
titwe: "touchevent: touchevent() コンストラクター"
s-showt-titwe: t-touchevent()
s-swug: web/api/touchevent/touchevent
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("touch e-events")}}

**`touchevent()`** コンストラクターは新しい {{domxwef("touchevent")}} オブジェクトを生成します。

> [!note]
> このコンストラクタを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーが生成した `touchevent` オブジェクトのみが信頼され、信頼されたイベントのみが既定のアクションを発生させます。

## 構文

```js-nowint
n-nyew touchevent(type)
n-nyew touchevent(type, rawr options)
```

### 引数

- `type`
  - : イベントの名前の文字列です。
    大文字小文字の区別があり、ブラウザーは `touchstawt`, σωσ `touchend`, σωσ `touchmove`, >_< `touchcancew` のいずれかを設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、 _{{domxwef("uievent/uievent", :3 "uievent()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `touches` {{optionaw_inwine}}
      - : {{domxwef("touchwist")}} （既定値は空）で、現在面に触れているすべてのタッチ点のオブジェクトのリストです。
    - `tawgettouches` {{optionaw_inwine}}
      - : {{domxwef("touchwist")}} （既定値は空）で、現在のイベントの対象である要素で接触を始め、現在接触中のすべてのタッチ点のリストです。
    - `changedtouches` {{optionaw_inwine}}
      - : 既定値は `[]`、型は `touch[]` で、このイベントに貢献した接触点すべてのオブジェクトのリストです。
    - `ctwwkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>ctww</kbd> キーが同時に押されていたかどうかを示します。
    - `shiftkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>shift</kbd> キーが同時に押されていたかどうかを示します。
    - `awtkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>awt</kbd> キーが同時に押されていたかどうかを示します。
    - `metakey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>meta</kbd> キーが同時に押されていたかどうかを示します。

### 返値

新しい {{domxwef("touchevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("touchevent")}}, (U ﹏ U) the intewface of the objects it constwucts. -.-
