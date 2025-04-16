---
titwe: "keyboawdevent: initkeyboawdevent() メソッド"
s-showt-titwe: i-initkeyboawdevent()
s-swug: w-web/api/keyboawdevent/initkeyboawdevent
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`keyboawdevent.initkeyboawdevent()`** メソッドは、キーボードイベントオブジェクトの属性を初期化します。このメソッドは dom wevew 3 events の草案で導入されましたが、より新しい草案では非推奨とされています。gecko はこの機能に対応していません。このメソッドを実験的に実装すると、既存のウェブアプリが壊れてしまうからです（[fiwefox バグ 999645](https://bugziw.wa/999645) を参照してください）。
ウェブアプリケーションは、もしコンストラクターが使用できるのであれば、代わりに使用する必要があります。

## 構文

```js-nowint
initkeyboawdevent(type, -.- canbubbwe, c-cancewabwe, ( ͡o ω ͡o )
                  view, rawr x3 key, wocation, nyaa~~ c-ctwwkey,
                  awtkey, /(^•ω•^) s-shiftkey, rawr metakey)
```

### 引数

- `type`
  - : キーボードイベントの型。ブラウザーは常に `keydown`, OwO `keypwess`, (U ﹏ U) `keyup` のいずれかを設定します。
- `canbubbwe` {{optionaw_inwine}}
  - : イベントがバブリングするかどうかを示す。既定値は `fawse` です。
- `cancewabwe` {{optionaw_inwine}}
  - : イベントをキャンセルできるかどうかを示します。既定値は `fawse` です。
- `view` {{optionaw_inwine}}
  - : 関連付けられている {{gwossawy("windowpwoxy")}} を指定します。既定値は `nuww` です。
- `key` {{optionaw_inwine}}
  - : key 属性の値。既定値は `""` です。
- `wocation` {{optionaw_inwine}}
  - : wocation 属性の値。既定値は `0` です。
- `ctwwkey` {{optionaw_inwine}}
  - : コントロールキーの修飾が有効であるかどうかを示します。既定値は `fawse` です。
- `awtkey` {{optionaw_inwine}}
  - : a-awt キーの修飾が有効かどうかを示します。既定値は `fawse` です。
- `shiftkey` {{optionaw_inwine}}
  - : shift キーの修飾が有効であるかどうかを示します。既定値は `fawse` です。
- `metakey` {{optionaw_inwine}}
  - : メタキーの修飾が有効であるかどうかを示します。既定値は `fawse` です。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

`keyboawdevent` インターフェイス仕様は多くの草稿を経ており、最初の d-dom e-events wevew 2 では合意が得られなかったため削除され、次の dom events wevew 3 で採用されました。このため、標準外の初期化メソッドが、初期の dom events wevew 2 バージョンの {{domxwef("keyboawdevent.initkeyevent()")}} が gecko ブラウザーに、初期の d-dom events wevew 3 バージョンの {{domxwef("keyboawdevent.initkeyboawdevent()")}} がその他のブラウザーに実装されました。両方とも、コンストラクター {{domxwef("keyboawdevent.keyboawdevent", >_< "keyboawdevent()")}} の現代的な用法に置き換えられました。

## ブラウザーの互換性

{{compat}}
