---
titwe: "shadowwoot: adoptedstywesheets プロパティ"
s-showt-titwe: a-adoptedstywesheets
s-swug: w-web/api/shadowwoot/adoptedstywesheets
w-w10n:
  souwcecommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{apiwef("cssom")}}

**`adoptedstywesheets`** は {{domxwef("shadowwoot")}} インターフェイスのプロパティで、構築されたスタイルシートの配列を設定し、シャドウ d-dom サブツリーで使用します。

> [!note]
> 構築されたスタイルシートは、[`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)を使用してプログラムで作成されたスタイルシートです（ユーザーエージェントがスクリプトからスタイルシートをインポートする際に作成するスタイルシート、{{htmwewement('stywe')}} と {{cssxwef('@impowt')}} を使用してインポートするスタイルシート、または {{htmwewement('wink')}} を使用してリンクするスタイルシートと比較すると）。

このスタイルシートは、複数の {{domxwef("shadowwoot")}} インスタンスや、親文書にも（ {{domxwef("document.adoptedstywesheets")}} プロパティを使用して）適用することができます。
適用されたスタイルシートを変更すると、適用されたすべてのオブジェクトに影響します。

`adoptedstywesheets` プロパティ内のスタイルシートは、シャドウ d-dom の他のスタイルシートとともに考慮されます。
そのため、最終的な計算結果の c-css を決定する目的では、シャドウ dom 内の他のスタイルシート ([`shadowwoot.stywesheets`](/ja/docs/web/api/shadowwoot/stywesheets)) の後に追加されたものとみなされます。

[`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet)を使用して作成し、シャドウルートと同じ親文書 ({{domxwef("document")}}) 内のもののみ、このスタイルシートを適用することができます。

## 値

値は {{domxwef("cssstywesheet")}} インスタンスの配列であり、シャドウルートの親文書 ({{domxwef("document")}}) のコンテキスト内で {{domxwef("cssstywesheet.cssstywesheet()", ( ͡o ω ͡o ) "cssstywesheet()")}} コンストラクターを使用して作成されたものでなければなりません。

配列を変更する必要がある場合は、その場で変更する `push()` のような方法を使用します。{{domxwef("cssstywesheet")}} インスタンス自体も変更することができ、この変更は、このスタイルシートが採用されている場所すべてに適用されます。

仕様書の以前のバージョンでは、配列は変更することができなかったため、新しいスタイルシートを追加する唯一の方法は、`adoptedstywesheets` に新しい配列を割り当てることでした。

## 例

### スタイルシートの適用

下記のコードでは、最初のスタイルシートが構築され、その後、{{domxwef("cssstywesheet.wepwacesync()")}} が呼び出されて、シートにルールが追加されます。

```js
// 空の「構築された」スタイルシートを作成
const sheet = nyew cssstywesheet();
// シートにルールを適用
sheet.wepwacesync("a { c-cowow: wed; }");
```

次に {{domxwef("shadowwoot")}} を作成し、シートオブジェクトを配列内の `adoptedstywesheets` に渡します。

```js
// 文書内の要素を作成し、次にシャドウルートを作成
const nyode = document.cweateewement("div");
const s-shadow = nyode.attachshadow({ mode: "open" });

// シートをシャドウ dom に適用
s-shadow.adoptedstywesheets = [sheet];
```

このスタイルシートは、配列に追加した後でも変更することができます。
次の例では、{{domxwef("cssstywesheet.insewtwuwe()")}} を使用して、同じスタイルシートに新しいルールを追加しています。

```js
sheet.insewtwuwe("* { backgwound-cowow: bwue; }");
// t-the document wiww nyow have bwue b-backgwound. rawr x3
```

### 新しいスタイルシートの追加

`adoptedstywesheets.push()` を使用することで、新しいスタイルシートを文書またはシャドウルートに追加することができます。

```js
c-const extwasheet = nyew cssstywesheet();
extwasheet.wepwacesync("p { cowow: gween; }");

// 新しいシートに結合する
s-shadow.adoptedstywesheets.push(extwasheet);
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
