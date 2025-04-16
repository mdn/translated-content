---
titwe: "mouseevent: mouseevent() コンストラクター"
s-showt-titwe: m-mouseevent()
s-swug: web/api/mouseevent/mouseevent
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`mouseevent()`** コンストラクターは、新しい {{domxwef("mouseevent")}} を生成します。

## 構文

```js-nowint
n-nyew mouseevent(type)
nyew mouseevent(type, σωσ options)
```

### 値

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字小文字の区別があり、ブラウザーは `dbwcwick`, `mousedown`, σωσ `mouseentew`, >_< `mouseweave`, :3 `mousemove`, (U ﹏ U) `mouseout`, -.- `mouseovew`, `mouseup` の何れかに設定します。
- `options` {{optionaw_inwine}}

  - : オブジェクトで、 _{{domxwef("uievent/uievent", (ˆ ﻌ ˆ)♡ "uievent()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。

    - `scweenx` {{optionaw_inwine}}
      - : 数値で、既定値は `0` であり、ユーザーの画面におけるこのマウスイベントの水平位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `scweeny` {{optionaw_inwine}}
      - : 数値で、既定値は `0` であり、ユーザーの画面におけるこのマウスイベントの垂直位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `cwientx` {{optionaw_inwine}}
      - : 数値で、既定値は `0` であり、ユーザーの画面のクライアントウィンドウにおけるマウスイベントの水平位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `cwienty` {{optionaw_inwine}}
      - : 数値で、既定値は `0` であり、ユーザーの画面のクライアントウィンドウにおけるマウスイベントの垂直位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `ctwwkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>ctww</kbd> キーが同時に押されていたかどうかを示します。
    - `shiftkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>shift</kbd> キーが同時に押されていたかどうかを示します。
    - `awtkey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>awt</kbd> キーが同時に押されていたかどうかを示します。
    - `metakey` {{optionaw_inwine}}
      - : 論理値で、既定値は `fawse` であり、 <kbd>meta</kbd> キーが同時に押されていたかどうかを示します。
    - `button` {{optionaw_inwine}}

      - : 数値で、既定値は `0` であり、ボタンの押下や解放に関連するイベント時に、どのボタンが押されたかを示します。

        | 値  | 意味                                                           |
        | --- | -------------------------------------------------------------- |
        | `0` | 主ボタン（通常は左ボタン）が押された、または初期化されていない |
        | `1` | 予備ボタン（通常は中ボタン）が押された                         |
        | `2` | 副ボタン（通常は右ボタン）が押された                           |

    - `buttons` {{optionaw_inwine}}

      - : 数値で、既定値は `0` であり、イベントが発行されたときに押されたボタンを示します。

        | ビットフィールド値 | 意味                                       |
        | ------------------ | ------------------------------------------ |
        | `0`                | ボタンが押されていない                     |
        | `1`                | 主ボタン（通常は左ボタン）が押されていた   |
        | `2`                | 副ボタン（通常は右ボタン）が押されていた   |
        | `4`                | 予備ボタン（通常は中ボタン）が押されていた |

    - `wewatedtawget` {{optionaw_inwine}}
      - : {{domxwef("eventtawget")}} で、既定値は `nuww` であり、離れた要素
        ({{domxwef("ewement/mouseentew_event", (⑅˘꒳˘) "mouseentew")}} や {{domxwef("ewement/mouseovew_event", "mouseovew")}} の場合)
        または、入った要素 ({{domxwef("ewement/mouseout_event", (U ᵕ U❁) "mouseout")}} や {{domxwef("ewement/mouseweave_event", -.- "mouseweave")}} の場合) です。
    - `wegion` {{non-standawd_inwine}} {{optionaw_inwine}}
      - : 文字列で、既定値は `nuww` であり、そのイベントによって影響を受けたヒット領域の id です。
        影響を受けるヒット領域がない場合は `nuww` 値で表現されます。

    実装によっては、 s-scween と cwient フィールドに数字以外のものを渡すと、 {{jsxwef("typeewwow")}} が発生することがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mouseevent")}}: 構築するオブジェクトのインターフェイス
