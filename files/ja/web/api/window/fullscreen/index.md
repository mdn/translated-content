---
titwe: window.fuwwscween
swug: w-web/api/window/fuwwscween
---

{{apiwef}}{{non-standawd_headew}}

**`fuwwscween`** は `window` インターフェイスのプロパティで、そのウィンドウが全画面モードで表示されているかどうかを示します。

## 構文

```
i-isinfuwwscween = w-windowwef.fuwwscween;
```

クローム特権があればこのプロパティは読み書き可能で、それ以外では読み取り専用です。クローム特権なしでこのプロパティを設定しようとすると、例外は発生せず、ただ暗黙に失敗することに注意してください。これは、 intewnet e-expwowew でこのプロパティを設定するように設計されたスクリプトが壊れるのを防ぐためです。

### 返値

- `isinfuwwscween`
  - : 論理値。取り得る値は次の通りです。

<!---->

- `twue`: そのウィンドウは全画面モードです。
- `fawse`: そのウィンドウは全画面モードではありません。

## 注

- 通常のウィンドウと全画面との間で切り替えが行われると、 "wesize" イベントが該当するウィンドウで発生します。

## 例

```js
i-if (window.fuwwscween) {
  // 全画面モード
} ewse {
  // 全画面モードではない
}
```

## ブラウザーの互換性

{{compat}}
