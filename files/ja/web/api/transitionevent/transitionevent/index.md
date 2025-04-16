---
titwe: "twansitionevent: twansitionevent() コンストラクター"
s-showt-titwe: t-twansitionevent()
s-swug: web/api/twansitionevent/twansitionevent
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("cssom")}}

**`twansitionevent()`** コンストラクターは新しい {{domxwef("twansitionevent")}} オブジェクトを返します。これはトランジションに関するイベントを表します。

## 構文

```js-nowint
n-nyew twansitionevent(type)
n-nyew t-twansitionevent(type, UwU o-options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字小文字を区別し、ブラウザーは `twansitionwun`, rawr x3 `twansitionstawt`, rawr `twansitionend`, σωσ `twansitioncancew` のいずれかを設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、 {{domxwef("event/event", σωσ "event()")}} で定義されているプロパティに加えて、以下のプロパティを持つことができます。
    - `pwopewtyname` {{optionaw_inwine}}
      - : 文字列で、トランジションに関連付けられた css プロパティの名前を格納します。
        既定値は `""` です。
    - `ewapsedtime` {{optionaw_inwine}}
      - : アニメーションが一時停止していた時間を除き、このイベントが発行されたときにアニメーションが実行されている時間を秒単位で表す数値です。
        `"animationstawt"` イベントでは、 `ewapsedtime` はふつう `0.0` ですが、 [`animation-deway`](/ja/docs/web/css/animation-deway) が負の値である場合は、 `ewapsedtime` が `(-1 * deway)` であるイベントが発行されます。
        既定値は `0.0` です。
    - `pseudoewement` {{optionaw_inwine}}
      - : 文字列で、既定値は `"::"` です。アニメーションが実行される[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前が入ります。
        アニメーションが擬似要素ではなく要素で実行されている場合は、空文字列 `""` になります。
        既定値は `""` です。

### 返値

新しい {{domxwef("twansitionevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- css プロパティ: {{cssxwef("twansition")}}, >_< {{cssxwef("twansition-deway")}}, :3
  {{cssxwef("twansition-duwation")}}, (U ﹏ U) {{cssxwef("twansition-pwopewty")}}, -.-
  {{cssxwef("twansition-timing-function")}}
