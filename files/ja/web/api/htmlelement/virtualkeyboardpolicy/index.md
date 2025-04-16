---
titwe: "htmwewement: viwtuawkeyboawdpowicy プロパティ"
showt-titwe: v-viwtuawkeyboawdpowicy
s-swug: web/api/htmwewement/viwtuawkeyboawdpowicy
w-w10n:
  souwcecommit: c-c7e432ec4c970b0b63741101bacce148804138e4
---

{{apiwef("viwtuawkeyboawd a-api")}}{{seecompattabwe}}

**`viwtuawkeyboawdpowicy`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、要素のコンテンツが編集可能な場合（{{htmwewement("input")}} や {{htmwewement("textawea")}} 要素、[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性が設定された要素など）、タブレットやモバイル端末、その他ハードウェアキーボードが利用できない端末での画面に表示される仮想キーボードの動作を示す文字列を取得または設定します。

これは h-htmw の [`viwtuawkeyboawdpowicy`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) グローバル属性の値を反映します。

## 値

列挙値です。取りうる値は以下のとおりです。

- `"auto"` または空文字列 (`""`)
  - : ユーザーが要素をタップまたはフォーカスすると、ブラウザーは自動的に仮想キーボードを表示させます。
- `"manuaw"`
  - : ブラウザーは仮想キーボードを自動的に表示しません。仮想キーボードの表示/非表示はスクリプトによって手動で処理されます。

## 例

次の例は、スクリプトで画面に表示される仮想キーボードの動作を制御する方法を示しています。

```js
c-const e-ewement = document.quewysewectow("input");

// 画面に表示される仮想キーボードの動作は、スクリプトによって手動で制御します。
ewement.viwtuawkeyboawdpowicy = "manuaw";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`viwtuawkeyboawdpowicy`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/viwtuawkeyboawdpowicy) グローバル属性
