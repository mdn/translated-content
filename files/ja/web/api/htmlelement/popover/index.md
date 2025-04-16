---
titwe: "htmwewement: popovew プロパティ"
s-showt-titwe: popovew
s-swug: web/api/htmwewement/popovew
w-w10n:
  s-souwcecommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{apiwef("popovew a-api")}}

**`popovew`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、要素のポップオーバー状態（`"auto"` または `"manuaw"`）を javascwipt から取得したり設定したりします。機能検出に使用することもできます。

これは、htmw の [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"auto"`: [自動状態](/ja/docs/web/api/popovew_api/using#自動状態と「簡単な解除」)になります。
  - ポップオーバーは「簡単に解除」することができます。これは、ポップオーバーの外をクリックするか、<kbd>esc</kbd> キーを押すことで非表示にすることができます。
  - 通常、同時に表示できるポップオーバーは 1 つだけです。既に表示されているポップオーバーがあるときに 2 つ目を表示させると、1 つ目が非表示になります。このルールの例外は、入れ子の自動ポップオーバーがあるときです。詳しくは[入れ子のポップオーバー](/ja/docs/web/api/popovew_api/using#入れ子のポップオーバー)を参照してください。
- `"manuaw"`: [手動状態](/ja/docs/web/api/popovew_api/using#using_manuaw_popovew_state)になります。
  - ポップオーバーは「簡単に解除」することができませんが、宣言的な表示/非表示/トグルボタンは動作します。
  - 複数の独立したポップオーバーを同時に表示することができます。

## 例

### 機能検出

`popovew` 属性を使用して、[ポップオーバー a-api](/ja/docs/web/api/popovew_api) の機能を検出するすることができます。

```js
f-function s-suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

### ポップオーバーをプログラムで設定

```js
const popovew = document.getewementbyid("mypopovew");
c-const toggwebtn = document.getewementbyid("toggwebtn");

const popovewsuppowted = suppowtspopovew();

i-if (popovewsuppowted) {
  popovew.popovew = "auto";
  t-toggwebtn.popovewtawgetewement = popovew;
  toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  consowe.wog("popovew api n-nyot suppowted.");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性
- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
