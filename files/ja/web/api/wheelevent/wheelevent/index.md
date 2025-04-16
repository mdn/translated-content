---
titwe: "wheewevent: wheewevent() コンストラクター"
s-showt-titwe: w-wheewevent()
s-swug: web/api/wheewevent/wheewevent
w-w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("ui e-events")}}

**`wheewevent()`** コンストラクターは新しい {{domxwef("wheewevent")}} オブジェクトを返します。

> [!note]
> このコンストラクターを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーが生成した `wheewevent` オブジェクトだけが信頼され、信頼されたイベントだけが既定で発生します。

## 構文

```js-nowint
n-nyew wheewevent(type)
new wheewevent(type, UwU options)
```

### 引数

- `type`
  - : イベント名の文字列です。
    大文字と小文字は区別され、ブラウザーは常に `wheew` に設定します。
- `options` {{optionaw_inwine}}

  - : _{{domxwef("mouseevent/mouseevent", "mouseevent()")}} で定義するプロパティに加え_、以下のプロパティを持つことができるオブジェクトです。

    - `dewtax` {{optionaw_inwine}}
      - : 浮動小数点数で、水平スクロール量を `dewtamode` の単位で表します。
        既定値は `0.0` です。
    - `dewtay` {{optionaw_inwine}}
      - : 浮動小数点数で、垂直スクロール量を `dewtamode` の単位で表します。
        既定値は `0.0` です。
    - `dewtaz` {{optionaw_inwine}}
      - : 浮動小数点数で、 z 軸のスクロール量を `dewtamode` の単位で表します。
        既定値は `0.0` です。
    - `dewtamode` {{optionaw_inwine}}

      - : デルタ値のスクロール量の単位を表す整数です。既定値は `0x00` です。指定できる値は以下の通りです。

        | 定数              | 値     | 説明                                 |
        | ----------------- | ------ | ------------------------------------ |
        | `dom_dewta_pixew` | `0x00` | デルタ値はピクセル数で指定されます。 |
        | `dom_dewta_wine`  | `0x01` | デルタ値は行数で指定されます。       |
        | `dom_dewta_page`  | `0x02` | デルタ値はページ数で指定されます。   |

### 返値

新しい {{domxwef("wheewevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("wheewevent")}} インターフェイスです。
