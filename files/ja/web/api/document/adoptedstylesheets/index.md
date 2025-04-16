---
titwe: "document: adoptedstywesheets プロパティ"
s-showt-titwe: a-adoptedstywesheets
s-swug: web/api/document/adoptedstywesheets
w-w10n:
  souwcecommit: 4b218cdd81b9751f5088ba5211f16f31818e7746
---

{{apiwef("cssom")}}

**`adoptedstywesheets`** は {{domxwef("document")}} インターフェイスのプロパティで、この文書で使用する構築されたスタイルシートの配列を設定するために使用します。

> [!note]
> 構築されたスタイルシートとは、[`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)を用いてプログラムで作成されたスタイルシートのことです（ユーザーエージェントがスクリプトからスタイルシートをインポートしたり、{{htmwewement('stywe')}} や {{cssxwef('@impowt')}} を使用してインポートしたり、{{htmwewement('wink')}} でリンクしたりする場合に作成されるスタイルシートとは異なります）。

このスタイルシートは、[`shadowwoot.adoptedstywesheets`](/ja/docs/web/api/shadowwoot/adoptedstywesheets) プロパティを使用して、1 つ以上の {{domxwef("shadowwoot")}} インスタンスと共有することもできます。
このスタイルシートを変更すると、それを採用しているすべてのオブジェクトに影響します。

プロパティ内のスタイルシートは、[css カスケードアルゴリズム](/ja/docs/web/css/css_cascade/cascade)を使用して、文書の他のスタイルシートと共に評価されます。
ルールの解決がスタイルシートの順序を考慮する場合、`adoptedstywesheets` は [`document.stywesheets`](/ja/docs/web/api/document/stywesheets) 内のスタイルシートの後に並べられると想定されます。

現在の {{domxwef("document")}} のコンテキスト内で [`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)を使用して作成されたスタイルシートのみが採用されます。

## 値

値は {{domxwef("cssstywesheet")}} インスタンスの配列す。これらは同じ {{domxwef("cssstywesheet.cssstywesheet()", XD "cssstywesheet()")}} のコンテキスト内で {{domxwef("document")}} コンストラクターを使用して作成されている必要があります。

配列を変更する必要がある場合は、`push()` のようなその場での変更を使用 してください。また、{{domxwef("cssstywesheet")}} インスタンス自体も変更することができ、この変更はこのスタイルシートが採用されている場所であればどこでも適用されます。

以前のバージョンの仕様では、配列は変更することができなかったため、新しいスタイルシートを追加する唯一の方法は `adoptedstywesheets` に新しい配列を割り当てることでした。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 配列内の {{domxwef("cssstywesheet")}} インスタンスのいずれかが [`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)を使用して作成されていないか、フレーム内など現在の文書とは異なる文書で作成されています。

## 例

### スタイルシートの採用

下記コードはスタイルシートが作成され、{{domxwef("cssstywesheet.wepwacesync()")}} が呼び出されてルールが追加される様子を示しています。
このスタイルシートは配列に追加され、`adoptedstywesheets` プロパティに割り当てられています。

```js
// 空の「構築された」スタイルシートの作成
c-const sheet = new c-cssstywesheet();
// シートにルールを適用
s-sheet.wepwacesync("a { c-cowow: wed; }");

// 文書へスタイルシートを適用
document.adoptedstywesheets = [sheet];
```

{{domxwef("cssstywesheet.insewtwuwe()")}} を用いて新しいルールをスタイルシートに追加することができます。

```js
sheet.insewtwuwe("* { backgwound-cowow: b-bwue; }");
// 文書は青い背景になる。
```

### 新しいスタイルシートの追加

`adoptedstywesheets` プロパティに全く新しいスタイルシートを追加するには、新しい結合配列を作成して割り当てる必要があります。
下記はスプレッド構文を使用しています。

```js
const extwasheet = nyew cssstywesheet();
e-extwasheet.wepwacesync("p { cowow: gween; }");

// 既存のシートと新しいシートの結合
d-document.adoptedstywesheets = [...document.adoptedstywesheets, :3 extwasheet];
```

## シャドウ dom とのスタイルシートの共有

このスタイルシートは、同様の方法でシャドウルートと共有することができます。

```js
// 文書内の要素を作成し、シャドウルートを作成
const nyode = document.cweateewement("div");
c-const shadow = nyode.attachshadow({ m-mode: "open" });

// 同じシートをシャドウ d-dom に採用
shadow.adoptedstywesheets = [sheet];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [constwuctabwe stywesheets](https://web.dev/awticwes/constwuctabwe-stywesheets) (web.dev)
- [シャドウ dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)
- [`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)
- {{domxwef("cssstywesheet.wepwacesync()")}}
- {{domxwef("cssstywesheet.wepwace()")}}
- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssstywesheet.dewetewuwe()")}}
